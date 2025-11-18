export default async function handler(req: Request): Promise<Response> {
  try {
    const siteUrl = (process.env.VITE_SITE_URL as string) || 'https://stadiumport.com'
    const sitemapUrl = `${siteUrl}/sitemap.xml`

    const ping = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`)
    const ok = ping.ok

    const sitemapRes = await fetch(sitemapUrl)
    const sitemapText = await sitemapRes.text()
    const urls = Array.from(sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1])
    const prefetchResults: Array<{ url: string; status: number }> = []
    for (const url of urls) {
      try {
        const r = await fetch(url, { method: 'GET' })
        prefetchResults.push({ url, status: r.status })
      } catch {
        prefetchResults.push({ url, status: 0 })
      }
    }

    return new Response(
      JSON.stringify({
        ok,
        pingedSitemap: sitemapUrl,
        prefetchResults
      }),
      { status: ok ? 200 : 500, headers: { 'content-type': 'application/json' } }
    )
  } catch (e) {
    return new Response(JSON.stringify({ error: 'refresh-index failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}