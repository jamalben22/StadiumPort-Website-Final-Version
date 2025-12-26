import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import React, { Suspense } from 'react'
import { AppRoutes } from './router'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getEditorialEntry } from './components/seo/EditorialCalendar'
import { SchemaOrg, generateWebsiteSchema, generateOrganizationSchema, generateBreadcrumbSchema, generateCityGuideSchema, generateCollectionPageSchema, generateItemListSchema } from './components/seo/SchemaOrg'
import { formatTitle } from './components/seo/MetaUtils'
import { LoadingSpinner } from './components/common/LoadingSpinner'
import { MobileAffiliateBar } from './components/layout/MobileAffiliateBar'
import { usePageTracking } from './hooks/usePageTracking'

// Global declaration for __BASE_PATH__
declare global {
  var __BASE_PATH__: string | undefined
}


function PageTracker() {
  usePageTracking()
  return null
}

function CanonicalManager() {
  const location = useLocation()

  useEffect(() => {
    // SEO Optimization: prevent conflict with Helmet
    // Only set canonical if it doesn't exist or wasn't created by Helmet (data-rh)
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    
    // If Helmet manages the canonical tag, do not interfere
    if (canonical && canonical.hasAttribute('data-rh')) {
      return
    }

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const fullUrl = siteUrl.replace(/\/$/, '') + (location.pathname || '/')

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
    ensureMeta('og:updated_time', now)
    ensureMeta('article:modified_time', now)
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
    if (
      (
        segments[0] === 'travel-guides' ||
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
      "author": { "@type": "Organization", "name": "Stadiumport Team", "url": siteUrl },
      "publisher": {
        "@type": "Organization",
        "name": "Stadiumport",
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

function GlobalTitleManager() {
  const location = useLocation()
  useEffect(() => {
    const current = document.title || ''
    const formatted = formatTitle(current || 'Stadiumport')
    if (formatted !== current) {
      document.title = formatted
      const ensure = (prop: string, content: string) => {
        let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute('property', prop)
          document.head.appendChild(el)
        }
        el.setAttribute('content', content)
      }
      ensure('og:title', formatted)
      ensure('twitter:title', formatted)
    }
  }, [location.pathname])
  return null
}

function SpeedInsightsRouting() {
  const location = useLocation()
  const endpoint = import.meta.env.VITE_VERCEL_SPEED_ENDPOINT
  const scriptSrc = import.meta.env.VITE_VERCEL_SPEED_SCRIPT
  return (
    <SpeedInsights
      route={location.pathname || '/'}
      {...(endpoint ? { endpoint } : {})}
      {...(scriptSrc ? { scriptSrc } : {})}
    />
  )
}

function App() {
  // Handle cases where __BASE_PATH__ might be undefined in production
  const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/'
  
  // Safety check for production environment
  if (typeof window === 'undefined') {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-700 dark:text-slate-200">
        Initializing...
      </div>
    )
  }
  
  return (
    <BrowserRouter basename={basePath}>
      <PageTracker />
      <CanonicalManager />
      <DateModifiedManager />
      <GlobalTitleManager />
      <GlobalStructuredData />
      <RouteStructuredData />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
      <Analytics />
      <SpeedInsightsRouting />
      <AffiliateBarRoutingGate />
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
  return <SchemaOrg schema={schemas} />
}

function AffiliateBarRoutingGate() {
  const location = useLocation()
  const hide = location.pathname.startsWith('/world-cup-2026-prediction-game')
  return hide ? null : <MobileAffiliateBar />
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: React.ReactNode }) { 
    super(props); 
    this.state = { hasError: false } 
  }
  
  static getDerivedStateFromError(error: Error) { 
    return { hasError: true, error } 
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Something went wrong</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We're experiencing technical difficulties. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="text-left text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <summary className="cursor-pointer">Error details</summary>
                <pre className="mt-2 whitespace-pre-wrap">{this.state.error.message}</pre>
              </details>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
