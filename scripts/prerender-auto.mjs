import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

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
    '/safety-guide',
    '/luxury-travel',
    '/budget-guides',
    '/packing-lists',
    '/travel-routes',
    '/world-cup-2026-travel-tips',
    '/city-comparisons',
    '/legal/privacy',
    '/legal/terms',
    '/legal/affiliate-disclaimer'
  ]
}

function resolveAllRoutes() {
  const set = new Set()
  for (const r of seed()) set.add(r)
  for (const r of fromRouter()) if (r.startsWith('/')) set.add(r)
  for (const r of fromLinks()) if (r.startsWith('/')) set.add(r)
  for (const r of fromSitemap()) if (r.startsWith('/')) set.add(r)
  const arr = Array.from(set)
  const exts = ['.webp','.png','.jpg','.jpeg','.svg','.ico','.json','.xml']
  const filtered = arr.filter(r => !r.includes(':'))
    .filter(r => !r.startsWith('/images/'))
    .filter(r => !r.startsWith('/assets/'))
    .filter(r => !exts.some(e => r.endsWith(e)))
  return filtered
}

function ensureDir(route) {
  const dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  return path.join(dir, 'index.html')
}

async function startPreview(port = 5050) {
  const child = spawn('npx', ['vite', 'preview', '--port', String(port)], { cwd: projectRoot, stdio: 'pipe', shell: process.platform === 'win32' })
  const url = `http://localhost:${port}/`
  for (let i = 0; i < 50; i++) {
    try { const res = await fetch(url); if (res.ok) break } catch {}
    await new Promise(r => setTimeout(r, 200))
  }
  return child
}

async function prerender() {
  const routes = resolveAllRoutes()
  const indexPath = path.join(distDir, 'index.html')
  const useFallback = process.env.VERCEL || process.env.CI
  if (useFallback) {
    let html = fs.readFileSync(indexPath, 'utf8')
    html = transformStylesheetsToPreload(html)
    for (const route of routes) {
      const out = ensureDir(route)
      fs.writeFileSync(out, html)
      process.stdout.write(`Stubbed: ${route}\n`)
    }
    return
  }
  const puppeteer = await import('puppeteer')
  const port = 5050
  const server = await startPreview(port)
  try {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(60000)
    for (const route of routes) {
      const url = `http://localhost:${port}${route}`
      await page.coverage.startCSSCoverage()
      await page.goto(url, { waitUntil: 'networkidle0' })
      try { await page.waitForSelector('script[type="application/ld+json"]', { timeout: 3000 }) } catch {}
      const htmlContent = await page.content()
      const cssCoverage = await page.coverage.stopCSSCoverage()
      const criticalCss = buildCriticalCss(cssCoverage, 30000)
      const html = inlineCriticalCssAndAsyncStyles(htmlContent, criticalCss)
      const out = ensureDir(route)
      fs.writeFileSync(out, html)
      process.stdout.write(`Prerendered: ${route}\n`)
    }
    await browser.close()
  } catch (e) {
    let html = fs.readFileSync(indexPath, 'utf8')
    html = transformStylesheetsToPreload(html)
    for (const route of routes) {
      const out = ensureDir(route)
      fs.writeFileSync(out, html)
      process.stdout.write(`Stubbed: ${route}\n`)
    }
  } finally {
    server.kill('SIGTERM')
  }
}

async function main() {
  if (!fs.existsSync(distDir)) throw new Error('dist not found')
  await prerender()
}

main().catch((e) => { console.error(e); process.exit(1) })

function buildCriticalCss(cssCoverage, limitBytes = 30000) {
  let css = ''
  for (const entry of cssCoverage) {
    for (const range of entry.ranges) {
      css += entry.text.slice(range.start, range.end)
      if (css.length >= limitBytes) return css.slice(0, limitBytes)
    }
  }
  return css
}

function inlineCriticalCssAndAsyncStyles(html, criticalCss) {
  let out = html
  const criticalTag = criticalCss ? `<style>${escapeStyle(criticalCss)}</style>` : ''
  out = out.replace(/<head>/i, `<head>${criticalTag}`)
  out = transformStylesheetsToPreload(out)
  return out
}

function transformStylesheetsToPreload(html) {
  return html.replace(/<link\s+rel=["']stylesheet["']\s+href=["']([^"']+)["']\s*\/>/gi, (m, href) => {
    return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`
  })
}

function escapeStyle(s) {
  return s.replace(/<\/(?!style)/g, '<\\/')
}