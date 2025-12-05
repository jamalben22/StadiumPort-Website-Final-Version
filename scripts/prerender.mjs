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
  '/world-cup-2026-host-cities',
  // Host city articles (16)
  '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
  '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
  '/world-cup-2026-host-cities/miami-world-cup-2026-guide',
  '/world-cup-2026-host-cities/dallas-world-cup-2026-guide',
  '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide',
  '/world-cup-2026-host-cities/boston-world-cup-2026-guide',
  '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide',
  '/world-cup-2026-host-cities/houston-world-cup-2026-guide',
  '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide',
  '/world-cup-2026-host-cities/seattle-world-cup-2026-guide',
  '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide',
  '/world-cup-2026-host-cities/toronto-world-cup-2026-guide',
  '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide',
  '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide',
  '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide',
  '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide',
  // Stadiums
  '/world-cup-2026-stadiums',
  '/world-cup-2026-stadiums/arrowhead-stadium-kansas-city-world-cup-2026',
  '/world-cup-2026-stadiums/att-stadium-arlington-texas-world-cup-2026',
  '/world-cup-2026-stadiums/bc-place-vancouver-world-cup-2026',
  '/world-cup-2026-stadiums/bmo-field-toronto-world-cup-2026',
  '/world-cup-2026-stadiums/estadio-akron-guadalajara-world-cup-2026',
  '/world-cup-2026-stadiums/estadio-azteca-mexico-city-world-cup-2026',
  '/world-cup-2026-stadiums/estadio-bbva-monterrey-world-cup-2026',
  '/world-cup-2026-stadiums/gillette-stadium-foxborough-world-cup-2026',
  '/world-cup-2026-stadiums/hard-rock-stadium-miami-world-cup-2026',
  '/world-cup-2026-stadiums/levis-stadium-santa-clara-world-cup-2026',
  '/world-cup-2026-stadiums/lincoln-financial-field-philadelphia-world-cup-2026',
  '/world-cup-2026-stadiums/lumen-field-seattle-world-cup-2026',
  '/world-cup-2026-stadiums/mercedes-benz-stadium-atlanta-world-cup-2026',
  '/world-cup-2026-stadiums/metlife-stadium-east-rutherford-world-cup-2026',
  '/world-cup-2026-stadiums/nrg-stadium-houston-texas-world-cup-2026',
  '/world-cup-2026-stadiums/sofi-stadium-los-angeles-world-cup-2026',
  // Core guide hubs
  '/travel-guides',
  '/guides',
  '/world-cup-2026-safety-guide',
  '/luxury-travel',
  '/budget-guides',
  '/packing-lists',
  '/travel-routes',
  '/world-cup-2026-travel-tips',
  '/city-comparisons',
]

// Optional: include article slugs discovered by search agent
const extraArticles = [
  // Safety Guide
  '/world-cup-2026-safety-guide/world-cup-2026-scams-how-to-avoid-ticket-travel-fraud',
  '/world-cup-2026-safety-guide/stadium-safety-at-world-cup-2026-security-rules-what-to-expect',
  '/world-cup-2026-safety-guide/transportation-safety-getting-around-world-cup-2026-host-cities',
  '/world-cup-2026-safety-guide/world-cup-2026-emergency-contacts-resources-guide',
  '/world-cup-2026-safety-guide/solo-travel-safety-guide-attending-world-cup-2026-alone',
  '/world-cup-2026-safety-guide/family-safety-guide-taking-kids-to-world-cup-2026',
  // Travel Tips
  '/world-cup-2026-travel-tips/world-cup-2026-connectivity-guide-phone-plans-sim-cards-wifi',
  '/world-cup-2026-travel-tips/best-time-to-book-world-cup-2026-tickets-flights-and-hotels',
  '/world-cup-2026-travel-tips/world-cup-2026-match-selection-strategy-which-games-to-attend',
  // Transportation (city specific)
  '/transportation/new-york-new-jersey-world-cup-2026-your-complete-getting-around-guide',
  '/transportation/los-angeles-world-cup-2026-your-complete-transportation-guide-to-sofi-stadium',
  '/transportation/miami-world-cup-2026-your-complete-transportation-guide-to-hard-rock-stadium',
  '/transportation/dallas-world-cup-2026-your-complete-transportation-guide-to-att-stadium',
  '/transportation/kansas-city-world-cup-2026-your-complete-transportation-guide-to-arrowhead-stadium',
  '/transportation/philadelphia-world-cup-2026-your-complete-transportation-guide-to-lincoln-financial-field',
  '/transportation/mexico-city-world-cup-2026-complete-transportation-guide-to-estadio-azteca',
  '/transportation/guadalajara-world-cup-2026-transportation-guide-to-estadio-akron',
  '/transportation/san-francisco-world-cup-2026-complete-transportation-guide-to-levis-stadium',
  '/transportation/monterrey-world-cup-2026-transportation-guide-to-estadio-bbva',
  '/transportation/toronto-world-cup-2026-transportation-guide-to-bmo-field',
  '/transportation/vancouver-world-cup-2026-transportation-guide-to-bc-place',
  '/transportation/seattle-world-cup-2026-your-complete-transportation-guide-to-lumen-field',
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
