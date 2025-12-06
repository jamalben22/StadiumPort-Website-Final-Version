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
  // Match path: '...'
  const m = s.match(/path:\s*['"`]([\w\-\/@%:&;=., ]+)['"`]/g) || []
  return m.map(x => {
    const match = x.match(/path:\s*['"`]([^'"`]+)['"`]/);
    return match ? match[1] : null;
  }).filter(Boolean)
}

function fromLinks() {
  const files = walk(path.join(projectRoot, 'src')).filter(f => /\.(tsx?|jsx?)$/.test(f))
  const set = new Set()
  for (const f of files) {
    const s = fs.readFileSync(f, 'utf8')
    const m1 = s.match(/\bto=\s*['"`](\/[^'"`]+)['"`]/g) || []
    const m2 = s.match(/\bhref=\s*['"`](\/[^'"`]+)['"`]/g) || []
    const all = m1.concat(m2)
    for (const x of all) {
      const p = x.replace(/^.*=['"`]/, '').replace(/['"`]$/, '')
      set.add(p)
    }
  }
  return Array.from(set)
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
    '/city-comparisons',
    '/world-cup-2026-prediction-game',
    '/world-cup-2026-groups'
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
  
  const exts = ['.webp','.png','.jpg','.jpeg','.svg','.ico','.json','.xml']
  
  const filtered = routes
    .filter(r => r.startsWith('/'))
    .filter(r => !r.includes(':')) // Exclude dynamic routes with params like :id
    .filter(r => !r.includes('[')) // Exclude dynamic routes with brackets like [id]
    .filter(r => !r.startsWith('/images/'))
    .filter(r => !r.startsWith('/assets/'))
    .filter(r => !exts.some(e => r.endsWith(e)))
    .filter(r => r === r.toLowerCase()) // Enforce lowercase
    .filter(r => !r.includes(' '))
    .filter(r => !redirectSources.has(r))
    
  // Explicitly remove known redirected paths or internal logic paths
  const excludePaths = [
    '/draw-travel-hub',
    '/groups', // redirected to /world-cup-2026-groups
    '/groups/group-a', // redirected to /2026-world-cup-group-a-travel-guide
    '/groups/group-b',
    '/groups/group-c',
    '/groups/group-d',
    '/groups/group-e',
    '/groups/group-f',
    '/group-l-travel-guide', // Redirects
    '/group-k-travel-guide',
    '/group-j-travel-guide',
    '/group-i-travel-guide'
  ];
  
  return Array.from(new Set(filtered))
    .filter(r => !excludePaths.includes(r))
    .sort();
}

function getPriorityAndFreq(u) {
  let priority = 0.6;
  let changefreq = 'monthly';

  if (u === '/') {
    priority = 1.0;
    changefreq = 'daily';
  } else if (
    u === '/world-cup-2026-prediction-game' ||
    u === '/world-cup-2026-groups' ||
    u === '/world-cup-2026-host-cities' ||
    u === '/world-cup-2026-stadiums' ||
    u === '/tickets'
  ) {
    priority = 0.9;
    changefreq = 'weekly';
  } else if (
    u.startsWith('/world-cup-2026-host-cities/') ||
    u.startsWith('/world-cup-2026-stadiums/') ||
    u.includes('group-')
  ) {
    priority = 0.8;
    changefreq = 'weekly';
  } else if (
    ['/travel-guides', '/guides', '/world-cup-2026-safety-guide', '/luxury-travel', '/budget-guides', '/packing-lists', '/travel-routes', '/world-cup-2026-travel-tips', '/city-comparisons'].includes(u)
  ) {
    priority = 0.7;
    changefreq = 'weekly';
  } else if (u.startsWith('/legal')) {
    priority = 0.3;
    changefreq = 'yearly';
  }

  return { priority, changefreq };
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
    const { priority, changefreq } = getPriorityAndFreq(u);
    
    lines.push('<url>')
    lines.push(`<loc>${xmlEscape(loc)}</loc>`)
    lines.push(`<lastmod>${now}</lastmod>`)
    lines.push(`<changefreq>${changefreq}</changefreq>`)
    lines.push(`<priority>${priority.toFixed(1)}</priority>`)
    lines.push('</url>')
  }
  
  lines.push('</urlset>')
  return lines.join('\n')
}

function main() {
  const set = new Set()
  
  // Add seed urls
  seed().forEach(u => set.add(u));
  
  // Add router urls
  fromRouter().forEach(u => set.add(u));
  
  // Add scanned links
  fromLinks().forEach(u => set.add(u));
  
  const urls = canonicalize(Array.from(set));
  const siteUrl = process.env.VITE_SITE_URL || 'https://stadiumport.com';
  
  const xml = buildSitemapXml(urls, siteUrl);
  const out = path.join(projectRoot, 'public', 'sitemap.xml');
  
  fs.writeFileSync(out, xml);
  console.log('Sitemap written:', out, `(${urls.length} urls)`); 
}

main();
