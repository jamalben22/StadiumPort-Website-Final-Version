import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getEditorialEntry } from './components/seo/EditorialCalendar'


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
      ...(entry?.keywords && entry.keywords.length ? { keywords: entry.keywords } : {}),
      ...(entry?.section ? { articleSection: entry.section } : {}),
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
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App