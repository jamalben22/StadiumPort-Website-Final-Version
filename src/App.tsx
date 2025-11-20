import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { AppRoutes } from './router'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getEditorialEntry } from './components/seo/EditorialCalendar'
import { SchemaOrg, generateWebsiteSchema, generateOrganizationSchema, generateBreadcrumbSchema, generateCityGuideSchema, generateCollectionPageSchema, generateItemListSchema } from './components/seo/SchemaOrg'


function CanonicalManager() {
  const location = useLocation()

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pathname = location.pathname || '/'
    const fullUrl = siteUrl.replace(/\/$/, '') + pathname

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    const ensureMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensureMeta('og:url', fullUrl)
    ensureMeta('twitter:url', fullUrl)
  }, [location.pathname])

  return null
}

function DateModifiedManager() {
  const location = useLocation()

  useEffect(() => {
    const now = new Date().toISOString()
    const ensureMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    const ensureNameMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    ensurePropertyMeta('og:updated_time', now)
    ensurePropertyMeta('article:modified_time', now)
    ensureNameMeta('last-modified', now)

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const fullUrl = siteUrl.replace(/\/$/, '') + (location.pathname || '/')
    const prev = document.getElementById('jsonld-date-modified')
    if (prev) prev.remove()
    const script = document.createElement('script')
    script.id = 'jsonld-date-modified'
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": fullUrl,
      "dateModified": now
    })
    document.head.appendChild(script)

    const articlePrev = document.getElementById('jsonld-article-date-modified')
    if (articlePrev) articlePrev.remove()
    const path = location.pathname || '/'
    const segments = path.split('/').filter(Boolean)

    let kind: 'article' | 'city' | 'stadium' | undefined
    let key: string | undefined
    if (segments[0] === 'world-cup-2026-host-cities' && segments[1]) {
      kind = 'city'
      key = segments[1]
    } else if (segments[0] === 'world-cup-2026-stadiums' && segments[1]) {
      kind = 'stadium'
      key = segments[1]
    } else if (
      (
        segments[0] === 'travel-guides' ||
        segments[0] === 'transportation' ||
        segments[0] === 'world-cup-2026-travel-tips' ||
        segments[0] === 'guides' ||
        segments[0] === 'safety-guide' ||
        segments[0] === 'luxury-travel' ||
        segments[0] === 'budget-guides' ||
        segments[0] === 'travel-routes' ||
        segments[0] === 'city-comparisons' ||
        segments[0] === 'accommodation'
      ) && segments[1]
    ) {
      kind = 'article'
      key = segments[1]
    }

    const entry = kind && key ? getEditorialEntry(kind, key) : undefined
    const articleScript = document.createElement('script')
    articleScript.id = 'jsonld-article-date-modified'
    articleScript.type = 'application/ld+json'
    articleScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": document.title || key || fullUrl,
      "url": fullUrl,
      "dateModified": now,
      ...(entry?.datePublished ? { datePublished: entry.datePublished } : {}),
      ...(entry?.keywords && entry.keywords.length ? { keywords: entry.keywords } : {}),
      ...(entry?.section ? { articleSection: entry.section } : {}),
      "author": { "@type": "Organization", "name": "StadiumPort Team", "url": siteUrl },
      "publisher": {
        "@type": "Organization",
        "name": "StadiumPort",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/favicon.ico`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "inLanguage": "en-US"
    })
    document.head.appendChild(articleScript)
  }, [location.pathname])

  function ensurePropertyMeta(property: string, content: string) {
    let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', property)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  return null
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <CanonicalManager />
      <DateModifiedManager />
      <GlobalStructuredData />
      <RouteStructuredData />
      <Suspense fallback={<div id="route-fallback" className="min-h-screen flex items-center justify-center text-slate-700 dark:text-slate-200">Loading…</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

function GlobalStructuredData() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
  return (
    <>
      <SchemaOrg schema={generateWebsiteSchema()} />
      <SchemaOrg schema={generateOrganizationSchema()} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": siteUrl,
        "inLanguage": "en-US"
      }} />
    </>
  )
}

function RouteStructuredData() {
  const location = useLocation()
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
  const path = location.pathname || '/'
  const fullUrl = siteUrl.replace(/\/$/, '') + path
  const segments = path.split('/').filter(Boolean)
  const crumbs = [{ name: 'Home', url: siteUrl }]
  if (segments.length) {
    let acc = ''
    for (let i = 0; i < segments.length; i++) {
      acc += '/' + segments[i]
      const name = decodeURIComponent(segments[i]).replace(/-/g, ' ')
      crumbs.push({ name: name.charAt(0).toUpperCase() + name.slice(1), url: acc })
    }
  }
  const schemas: any[] = []
  schemas.push({ "@context": "https://schema.org", "@type": "WebPage", "url": fullUrl })
  schemas.push(generateBreadcrumbSchema(crumbs.map(c => ({ name: c.name, url: c.url }))))
  if (segments[0] === 'world-cup-2026-host-cities' && segments[1]) {
    const citySlug = segments[1]
    const cityName = decodeURIComponent(citySlug).replace(/-/g, ' ')
    const title = `${cityName} – World Cup 2026 Guide`
    const entry = getEditorialEntry('city', citySlug)
    schemas.push(generateCityGuideSchema(cityName, document.querySelector('meta[name="description"]')?.getAttribute('content') || title, fullUrl, { datePublished: entry?.datePublished, dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: entry?.keywords }))
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".editorial-hero-title",
        ".editorial-body p"
      ]
    })
  }
  if (segments[0] === 'world-cup-2026-stadiums' && segments[1]) {
    const stadiumSlug = segments[1]
    const meta: Record<string, { name: string; city: string; capacity: number }> = {
      'arrowhead-stadium-kansas-city-world-cup-2026': { name: 'Arrowhead Stadium', city: 'Kansas City, Missouri, USA', capacity: 76416 },
      'att-stadium-arlington-texas-world-cup-2026': { name: 'AT&T Stadium', city: 'Arlington, Texas, USA', capacity: 80000 },
      'bc-place-vancouver-world-cup-2026': { name: 'BC Place', city: 'Vancouver, British Columbia, Canada', capacity: 54500 },
      'bmo-field-toronto-world-cup-2026': { name: 'BMO Field', city: 'Toronto, Ontario, Canada', capacity: 45000 },
      'estadio-akron-guadalajara-world-cup-2026': { name: 'Estadio Akron', city: 'Guadalajara, Jalisco, Mexico', capacity: 48071 },
      'estadio-azteca-mexico-city-world-cup-2026': { name: 'Estadio Azteca', city: 'Mexico City, Mexico', capacity: 87523 },
      'estadio-bbva-monterrey-world-cup-2026': { name: 'Estadio BBVA', city: 'Monterrey, Nuevo León, Mexico', capacity: 53500 },
      'gillette-stadium-foxborough-world-cup-2026': { name: 'Gillette Stadium', city: 'Foxborough, Massachusetts, USA', capacity: 65878 },
      'hard-rock-stadium-miami-world-cup-2026': { name: 'Hard Rock Stadium', city: 'Miami Gardens, Florida, USA', capacity: 65326 },
      'levis-stadium-santa-clara-world-cup-2026': { name: "Levi's Stadium", city: 'Santa Clara, California, USA', capacity: 68500 },
      'lincoln-financial-field-philadelphia-world-cup-2026': { name: 'Lincoln Financial Field', city: 'Philadelphia, Pennsylvania, USA', capacity: 69796 },
      'lumen-field-seattle-world-cup-2026': { name: 'Lumen Field', city: 'Seattle, Washington, USA', capacity: 69000 },
      'mercedes-benz-stadium-atlanta-world-cup-2026': { name: 'Mercedes-Benz Stadium', city: 'Atlanta, Georgia, USA', capacity: 71000 },
      'metlife-stadium-east-rutherford-world-cup-2026': { name: 'MetLife Stadium', city: 'East Rutherford, New Jersey, USA', capacity: 82500 },
      'nrg-stadium-houston-texas-world-cup-2026': { name: 'NRG Stadium', city: 'Houston, Texas, USA', capacity: 72220 },
      'sofi-stadium-los-angeles-world-cup-2026': { name: 'SoFi Stadium', city: 'Inglewood, California, USA', capacity: 70240 },
      'arrowhead-stadium': { name: 'Arrowhead Stadium', city: 'Kansas City, Missouri, USA', capacity: 76416 },
      'att-stadium': { name: 'AT&T Stadium', city: 'Arlington, Texas, USA', capacity: 80000 },
      'bc-place-stadium': { name: 'BC Place', city: 'Vancouver, British Columbia, Canada', capacity: 54500 },
      'bmo-field': { name: 'BMO Field', city: 'Toronto, Ontario, Canada', capacity: 45000 },
      'estadio-akron': { name: 'Estadio Akron', city: 'Guadalajara, Jalisco, Mexico', capacity: 48071 },
      'estadio-azteca': { name: 'Estadio Azteca', city: 'Mexico City, Mexico', capacity: 87523 },
      'estadio-bbva': { name: 'Estadio BBVA', city: 'Monterrey, Nuevo León, Mexico', capacity: 53500 },
      'gillette-stadium': { name: 'Gillette Stadium', city: 'Foxborough, Massachusetts, USA', capacity: 65878 },
      'hard-rock-stadium': { name: 'Hard Rock Stadium', city: 'Miami Gardens, Florida, USA', capacity: 65326 },
      'levis-stadium': { name: "Levi's Stadium", city: 'Santa Clara, California, USA', capacity: 68500 },
      'lincoln-financial-field': { name: 'Lincoln Financial Field', city: 'Philadelphia, Pennsylvania, USA', capacity: 69796 },
      'lumen-field': { name: 'Lumen Field', city: 'Seattle, Washington, USA', capacity: 69000 },
      'mercedes-benz-stadium': { name: 'Mercedes-Benz Stadium', city: 'Atlanta, Georgia, USA', capacity: 71000 },
      'metlife-stadium': { name: 'MetLife Stadium', city: 'East Rutherford, New Jersey, USA', capacity: 82500 },
      'nrg-stadium': { name: 'NRG Stadium', city: 'Houston, Texas, USA', capacity: 72220 },
      'sofi-stadium': { name: 'SoFi Stadium', city: 'Inglewood, California, USA', capacity: 70240 }
    }
    const info = meta[stadiumSlug]
    const stadiumName = info ? info.name : decodeURIComponent(stadiumSlug).replace(/-/g, ' ')
    const schema: any = { "@context": "https://schema.org", "@type": "StadiumOrArena", "name": stadiumName, "mainEntityOfPage": { "@type": "WebPage", "@id": fullUrl } }
    if (info) {
      schema.maximumAttendeeCapacity = info.capacity
      schema.address = { "@type": "PostalAddress", "addressLocality": info.city }
    }
    schemas.push(schema)
  }
  if (path === '/world-cup-2026-host-cities') {
    const items = [
      'new-york-new-jersey','los-angeles','miami','dallas','atlanta','boston','kansas-city','houston','philadelphia','seattle','san-francisco','toronto','vancouver','mexico-city','guadalajara','monterrey'
    ].map(slug => ({ name: slug.replace(/-/g,' '), url: `/world-cup-2026-host-cities/${slug}-world-cup-2026-guide`, image: `/images/cities/${slug}-world-cup-2026.webp` }))
    schemas.push(generateCollectionPageSchema({ name: 'World Cup 2026 Host Cities', description: 'Complete travel guides for all 16 host cities.', url: fullUrl, items }))
    schemas.push(generateItemListSchema(items))
  }
  if (path === '/world-cup-2026-stadiums') {
    const items = [
      'arrowhead-stadium-kansas-city-world-cup-2026','att-stadium-arlington-texas-world-cup-2026','bc-place-vancouver-world-cup-2026','bmo-field-toronto-world-cup-2026','estadio-akron-guadalajara-world-cup-2026','estadio-azteca-mexico-city-world-cup-2026','estadio-bbva-monterrey-world-cup-2026','gillette-stadium-foxborough-world-cup-2026','hard-rock-stadium-miami-world-cup-2026','levis-stadium-santa-clara-world-cup-2026','lincoln-financial-field-philadelphia-world-cup-2026','lumen-field-seattle-world-cup-2026','mercedes-benz-stadium-atlanta-world-cup-2026','metlife-stadium-east-rutherford-world-cup-2026','nrg-stadium-houston-texas-world-cup-2026','sofi-stadium-los-angeles-world-cup-2026'
    ].map(slug => ({ name: slug.replace(/-/g,' '), url: `/world-cup-2026-stadiums/${slug}`, image: `/images/stadiums/${slug}.webp` }))
    schemas.push(generateCollectionPageSchema({ name: 'World Cup 2026 Stadiums', description: 'Guides for all 16 World Cup 2026 stadiums.', url: fullUrl, items }))
    schemas.push(generateItemListSchema(items))
  }
  return <SchemaOrg schema={schemas} />
}
