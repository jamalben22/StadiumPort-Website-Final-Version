import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'

async function startPreview(port = 3001, cwd) {
  // assume dev server running; if not, start preview on 5050
  if (await isUp(`http://localhost:${port}/`)) return null
  const child = spawn('npx', ['vite', 'preview', '--port', '5050'], { cwd, stdio: 'pipe', shell: process.platform === 'win32' })
  for (let i = 0; i < 50; i++) { if (await isUp('http://localhost:5050/')) break; await wait(200) }
  return child
}

async function isUp(url) { try { const res = await fetch(url); return res.ok } catch { return false } }
const wait = (ms) => new Promise(r => setTimeout(r, ms))

async function run() {
  const cwd = process.cwd()
  const server = await startPreview(3001, cwd)
  const base = (await isUp('http://localhost:3001/')) ? 'http://localhost:3001' : 'http://localhost:5050'
  const urls = [
    // NY/NJ + USA/Canada/Mexico cities
    '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
    '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
    '/world-cup-2026-host-cities/toronto-world-cup-2026-guide',
    '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide',
    // stadiums
    '/world-cup-2026-stadiums/levis-stadium-santa-clara-world-cup-2026',
    '/world-cup-2026-stadiums/metlife-stadium-east-rutherford-world-cup-2026',
    '/world-cup-2026-stadiums/estadio-azteca-mexico-city-world-cup-2026'
  ]

  const puppeteer = await import('puppeteer')
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  let allOk = true
  const report = []
  for (const u of urls) {
    const full = base + u
    await page.goto(full, { waitUntil: 'networkidle0' })
    // wait a bit for JSON-LD injection
    try { await page.waitForSelector('script[type="application/ld+json"]', { timeout: 3000 }) } catch {}
    const html = await page.content()
    const scripts = Array.from(html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)).map(m => m[1])
    const issues = []
    for (let i = 0; i < scripts.length; i++) {
      const raw = scripts[i].trim()
      try {
        const data = JSON.parse(raw)
        const objs = Array.isArray(data) ? data : [data]
        for (const o of objs) {
          const str = JSON.stringify(o)
          const imageCount = (str.match(/\"image\"\s*:/g) || []).length
          const offersCount = (str.match(/\"offers\"\s*:/g) || []).length
          if (imageCount > 1 || offersCount > 1) {
            issues.push({ index: i, type: 'duplicate-property', imageCount, offersCount })
          }
        }
      } catch (e) {
        issues.push({ index: i, type: 'json-parse-error', message: e.message })
      }
    }
    report.push({ url: u, scriptCount: scripts.length, issues })
    if (issues.length) allOk = false
  }
  console.log(JSON.stringify({ base, allOk, report }, null, 2))
  await browser.close()
  if (server) server.kill('SIGTERM')
  process.exit(allOk ? 0 : 1)
}

run().catch(err => { console.error(err); process.exit(1) })