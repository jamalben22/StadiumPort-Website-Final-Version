async function run() {
  const siteUrl = process.env.SITE_URL || 'https://stadiumport.com'
  const sitemapUrl = process.env.SITEMAP_URL || `${siteUrl}/sitemap.xml`
  try {
    const ping = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`)
    console.log('sitemap ping', ping.status)
  } catch {}
  try {
    const res = await fetch(sitemapUrl)
    const xml = await res.text()
    const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1])
    for (const url of urls) {
      try {
        const r = await fetch(url, { method: 'GET' })
        console.log('prefetch', url, r.status)
      } catch {
        console.log('prefetch', url, 0)
      }
    }
  } catch {}
}

run().catch(() => {})