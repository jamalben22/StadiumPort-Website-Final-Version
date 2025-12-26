import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

const routes = [
  '/',
  '/about',
  '/contact',
  // Core guide hubs
  '/travel-guides',
  '/guides',
  '/luxury-travel',
  '/budget-guides',
  '/packing-lists',
  '/travel-routes',
  '/city-comparisons',
  '/world-cup-2026-prediction-game',
]

// Optional: include article slugs discovered by search agent
const extraArticles = [
]

for (const p of extraArticles) routes.push(p)

function ensureDirForRoute(route) {
  const targetDir = path.join(distDir, route)
  fs.mkdirSync(targetDir, { recursive: true })
  return path.join(targetDir, 'index.html')
}

async function startPreview(port = 5050) {
  const child = spawn('npx', ['vite', 'preview', '--port', String(port)], {
    cwd: projectRoot,
    stdio: 'pipe',
    shell: process.platform === 'win32',
  })
  // Poll the preview URL until it responds
  const url = `http://localhost:${port}/`
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(url, { method: 'GET' })
      if (res.ok) break
    } catch {}
    await new Promise(r => setTimeout(r, 200))
  }
  return child
}

async function prerender() {
  // Use dynamic import for puppeteer to avoid heavy dev dep at runtime
  const puppeteer = await import('puppeteer')
  const port = 5050
  const server = await startPreview(port)
  try {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(60000)
    for (const route of routes) {
      const url = `http://localhost:${port}${route}`
      await page.goto(url, { waitUntil: 'networkidle0' })
      // Wait for JSON-LD to appear for SEO completeness
      try { await page.waitForSelector('script[type="application/ld+json"]', { timeout: 5000 }) } catch {}
      // Grab rendered HTML
      const html = await page.content()
      const outPath = ensureDirForRoute(route)
      fs.writeFileSync(outPath, html)
      console.log('Prerendered:', route)
    }
    await browser.close()
  } finally {
    // kill preview server
    server.kill('SIGTERM')
  }
}

async function main() {
  if (!fs.existsSync(distDir)) {
    throw new Error('dist not found. Run vite build first.')
  }
  await prerender()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
