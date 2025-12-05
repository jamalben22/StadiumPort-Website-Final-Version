import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

function walk(dir) {
  const out = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...walk(full))
    else if (e.isFile()) out.push(full)
  }
  return out
}

function fromRouter() {
  const p = path.join(projectRoot, 'src', 'router', 'config.tsx')
  if (!fs.existsSync(p)) return []
  const s = fs.readFileSync(p, 'utf8')
  const m = s.match(/path:\s*['"`]\/[\w\-\/@%:&;=., ]+['"`]/g) || []
  return m.map(x => x.replace(/path:\s*['"`]/, '').replace(/['"`]$/, '')).filter(Boolean)
}

function fromLinks() {
  const files = walk(path.join(projectRoot, 'src')).filter(f => /\.(tsx?|jsx?)$/.test(f))
  const set = new Set()
  for (const f of files) {
    const s = fs.readFileSync(f, 'utf8')
    const m1 = s.match(/\bto=\s*['"`]\/[^'"`]+['"`]/g) || []
    const m2 = s.match(/\bhref=\s*['"`]\/[^'"`]+['"`]/g) || []
    const all = m1.concat(m2)
    for (const x of all) {
      const p = x.replace(/^.*=['"`]/, '').replace(/['"`]$/, '')
      set.add(p)
    }
  }
  return Array.from(set)
}

function fromSitemap() {
  const p = path.join(projectRoot, 'public', 'sitemap.xml')
  if (!fs.existsSync(p)) return []
  const s = fs.readFileSync(p, 'utf8')
  const m = s.match(/<loc>https?:\/\/[^/]+(\/[\w\-\/@%:&;=.,]+)<\/loc>/g) || []
  return m.map(x => x.replace(/^<loc>https?:\/\/[^/]+/, '').replace(/<\/loc>$/, ''))
}

function seed() {
  return [
    '/',
    '/about',
    '/contact',
    '/world-cup-2026-host-cities',
    '/world-cup-2026-stadiums',
    '/travel-guides',
    '/guides',
    '/world-cup-2026-safety-guide',
    '/luxury-travel',
    '/budget-guides',
    '/packing-lists',
    '/travel-routes',
    '/world-cup-2026-travel-tips',
    '/city-comparisons'
  ]
}

function loadRedirects() {
  const p = path.join(projectRoot, 'vercel.json')
  if (!fs.existsSync(p)) return []
  try {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'))
    return Array.isArray(json.redirects) ? json.redirects : []
  } catch { return [] }
}

function canonicalize(routes) {
  const redirects = loadRedirects()
  const redirectSources = new Set(redirects.map(r => r.source))
  const redirectDestinations = new Set(redirects.map(r => r.destination))
  const exts = ['.webp','.png','.jpg','.jpeg','.svg','.ico','.json','.xml']
  const filtered = routes
    .filter(r => r.startsWith('/'))
    .filter(r => !r.includes(':'))
    .filter(r => !r.startsWith('/images/'))
    .filter(r => !r.startsWith('/assets/'))
    .filter(r => !exts.some(e => r.endsWith(e)))
    .filter(r => r === r.toLowerCase())
    .filter(r => !r.includes(' '))
    .filter(r => !redirectSources.has(r))
  for (const d of redirectDestinations) filtered.push(d)
  // prefer legal canonical versions
  const dupMap = {
    '/privacy': '/legal/privacy',
    '/terms': '/legal/terms',
    '/affiliate-disclaimer': '/legal/affiliate-disclaimer'
  }
  const set = new Set(filtered)
  for (const [src, dst] of Object.entries(dupMap)) {
    if (set.has(dst)) set.delete(src)
  }
  return Array.from(set).sort()
}

function resolveAllRoutes() {
  const set = new Set()
  for (const r of seed()) set.add(r)
  for (const r of fromRouter()) set.add(r)
  for (const r of fromLinks()) set.add(r)
  for (const r of fromSitemap()) set.add(r)
  return canonicalize(Array.from(set))
}

function buildSitemapXml(urls, siteUrl) {
  const xmlEscape = (s) => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  const now = new Date().toISOString()
  for (const u of urls) {
    const loc = `${siteUrl}${u}`
    let priority = 0.6
    if (u === '/') priority = 1.0
    else if (u.startsWith('/world-cup-2026-host-cities/') || u.startsWith('/world-cup-2026-stadiums/')) priority = 0.8
    else if (['/world-cup-2026-host-cities','/world-cup-2026-stadiums','/travel-guides','/guides','/world-cup-2026-safety-guide','/luxury-travel','/budget-guides','/packing-lists','/travel-routes','/world-cup-2026-travel-tips','/city-comparisons'].includes(u)) priority = 0.7
    lines.push('<url>')
    lines.push(`<loc>${xmlEscape(loc)}</loc>`)
    lines.push(`<lastmod>${now}</lastmod>`)
    lines.push('<changefreq>weekly</changefreq>')
    lines.push(`<priority>${priority.toFixed(1)}</priority>`)
    lines.push('</url>')
  }
  lines.push('</urlset>')
  return lines.join('\n')
}

function main() {
  const urls = resolveAllRoutes()
  const siteUrl = process.env.VITE_SITE_URL || 'https://stadiumport.com'
  const xml = buildSitemapXml(urls, siteUrl)
  const out = path.join(projectRoot, 'public', 'sitemap.xml')
  fs.writeFileSync(out, xml)
  console.log('Sitemap written:', out, `(${urls.length} urls)`) 
}

main()
