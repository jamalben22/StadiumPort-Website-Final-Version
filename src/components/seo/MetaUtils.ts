export function ensurePropertyMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function ensureNameMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function ensureCanonical(href: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

export function setPageMeta(opts: { title: string; description: string; url: string; image?: string; locale?: string; publishedTime?: string; modifiedTime?: string; section?: string; tags?: string[] }) {
  const { title, description, url, image, locale = 'en_US', publishedTime, modifiedTime, section, tags } = opts
  document.title = title
  ensureNameMeta('description', description)
  ensureCanonical(url)
  ensurePropertyMeta('og:title', title)
  ensurePropertyMeta('og:description', description)
  ensurePropertyMeta('og:url', url)
  if (image) ensurePropertyMeta('og:image', image)
  ensurePropertyMeta('og:locale', locale)
  ensurePropertyMeta('twitter:title', title)
  ensurePropertyMeta('twitter:description', description)
  ensurePropertyMeta('twitter:url', url)
  if (image) ensurePropertyMeta('twitter:image', image)
  if (publishedTime) ensurePropertyMeta('article:published_time', publishedTime)
  if (modifiedTime) ensurePropertyMeta('article:modified_time', modifiedTime)
  if (section) ensurePropertyMeta('article:section', section)
  if (tags && tags.length) ensurePropertyMeta('article:tag', tags.join(', '))
}