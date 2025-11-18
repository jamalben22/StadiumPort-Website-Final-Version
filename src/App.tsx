import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


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

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <CanonicalManager />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App