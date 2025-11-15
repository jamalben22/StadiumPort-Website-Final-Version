import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const imagesDir = path.join(projectRoot, 'public', 'images')

const allowedSuffixes = ['-640.webp', '-1024.webp', '-1600.webp']
const allowedExts = new Set(['.webp', '.jpg', '.jpeg', '.png'])

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...walk(full))
    else if (e.isFile()) files.push(full)
  }
  return files
}

function isAllowedVariant(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!allowedExts.has(ext)) return false
  const base = path.basename(filePath)
  return allowedSuffixes.some((s) => base.endsWith(s))
}

function rootFromFile(filePath) {
  const ext = path.extname(filePath)
  const dir = path.dirname(filePath)
  let baseNoExt = path.basename(filePath, ext)
  // If this is one of the three exact variants, strip the trailing variant to get the root
  for (const s of ['-640', '-1024', '-1600']) {
    if (baseNoExt.endsWith(s)) {
      return path.join(dir, baseNoExt.slice(0, -s.length))
    }
  }
  return path.join(dir, baseNoExt)
}

function buildKeepSetForRoot(rootPath, ext) {
  const dir = path.dirname(rootPath)
  const base = path.basename(rootPath)
  const original = path.join(dir, `${base}${ext}`)
  const v640 = path.join(dir, `${base}-640.webp`)
  const v1024 = path.join(dir, `${base}-1024.webp`)
  const v1600 = path.join(dir, `${base}-1600.webp`)
  return new Set([original, v640, v1024, v1600])
}

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir)
    process.exit(1)
  }

  const allFiles = walk(imagesDir)
  const toDelete = []

  // Determine valid roots strictly from original files (no trailing size suffix)
  const validRoots = new Set()
  for (const f of allFiles) {
    const ext = path.extname(f).toLowerCase()
    if (!allowedExts.has(ext)) continue
    const baseNoExt = path.basename(f, ext)
    if (!baseNoExt.endsWith('-640') && !baseNoExt.endsWith('-1024') && !baseNoExt.endsWith('-1600')) {
      validRoots.add(path.join(path.dirname(f), baseNoExt))
    }
  }

  // Build keep sets for each valid root
  const keepSets = []
  for (const root of validRoots) {
    // Prefer .webp original; if not present, keep any original ext
    const extCandidates = ['.webp', '.jpg', '.jpeg', '.png']
    let ext = '.webp'
    for (const e of extCandidates) {
      const p = `${root}${e}`
      if (fs.existsSync(p)) { ext = e; break }
    }
    keepSets.push(buildKeepSetForRoot(root, ext))
  }

  const isKept = (filePath) => {
    for (const set of keepSets) {
      if (set.has(filePath)) return true
    }
    return false
  }

  for (const f of allFiles) {
    const ext = path.extname(f).toLowerCase()
    if (!allowedExts.has(ext)) continue
    if (!isKept(f)) toDelete.push(f)
  }

  // Perform deletions
  let deleted = 0
  for (const f of toDelete) {
    try {
      fs.unlinkSync(f)
      deleted++
    } catch (err) {
      console.error('Failed to delete', f, err.message)
    }
  }

  console.log(`Analyzed ${allFiles.length} files. Valid roots: ${validRoots.size}. Deleted ${deleted} unnecessary image files.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
