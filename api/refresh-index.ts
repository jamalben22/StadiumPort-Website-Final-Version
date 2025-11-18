export default async function handler(req: Request): Promise<Response> {
  try {
    const siteUrl = (process.env.VITE_SITE_URL as string) || 'https://stadiumport.com'
    const sitemapUrl = `${siteUrl}/sitemap.xml`

    const ping = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`)
    const ok = ping.ok

    const highPriority: string[] = [
      `${siteUrl}/world-cup-2026-host-cities/new-york-new-jersey`,
      `${siteUrl}/world-cup-2026-host-cities/los-angeles`,
      `${siteUrl}/world-cup-2026-host-cities/miami`,
      `${siteUrl}/world-cup-2026-host-cities/dallas`,
      `${siteUrl}/world-cup-2026-host-cities/houston`,
      `${siteUrl}/world-cup-2026-host-cities/kansas-city`,
      `${siteUrl}/world-cup-2026-host-cities/philadelphia`,
      `${siteUrl}/world-cup-2026-host-cities/boston`,
      `${siteUrl}/world-cup-2026-host-cities/toronto`,
      `${siteUrl}/world-cup-2026-host-cities/vancouver`,
      `${siteUrl}/world-cup-2026-host-cities/mexico-city`,
      `${siteUrl}/world-cup-2026-host-cities/guadalajara`,
      `${siteUrl}/world-cup-2026-host-cities/monterrey`,
      `${siteUrl}/world-cup-2026-host-cities/seattle`,
      `${siteUrl}/world-cup-2026-host-cities/san-francisco`,
      `${siteUrl}/world-cup-2026-stadiums/metlife-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/sofi-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/hard-rock-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/att-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/nrg-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/arrowhead-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/levis-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/lumen-field`,
      `${siteUrl}/world-cup-2026-stadiums/gillette-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/lincoln-financial-field`,
      `${siteUrl}/world-cup-2026-stadiums/bmo-field`,
      `${siteUrl}/world-cup-2026-stadiums/bc-place-stadium`,
      `${siteUrl}/world-cup-2026-stadiums/estadio-azteca`,
      `${siteUrl}/world-cup-2026-stadiums/estadio-akron`,
      `${siteUrl}/world-cup-2026-stadiums/estadio-bbva`
    ]

    const prefetchResults: Array<{ url: string; status: number }> = []
    for (const url of highPriority) {
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