import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema, generateGlobalSportsEventSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setPageMeta } from '../../../components/seo/MetaUtils'
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar'

function toTitleCase(slug?: string) {
  if (!slug) return 'Accommodation Guide'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function AccommodationArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'Ultimate Hotel Guide: All Host Cities',
      category: 'Hotels',
      author: 'Jennifer Walsh',
      readTime: '20 min read',
      image: 'https://readdy.ai/api/search-image?query=elegant%20hotel%20lobby%20with%20modern%20design%2C%20comfortable%20seating%20areas%2C%20professional%20hospitality%20setting%2C%20luxury%20accommodation%20interior%2C%20welcoming%20atmosphere&width=600&height=400&seq=acc1&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Budget Hostels: Social & Affordable',
      category: 'Hostels',
      author: 'Mark Stevens',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20hostel%20common%20area%20with%20comfortable%20seating%2C%20social%20atmosphere%2C%20budget%20accommodation%2C%20clean%20contemporary%20design%2C%20backpacker%20friendly%20environment&width=600&height=400&seq=acc2&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Apartment Rentals: Home Away From Home',
      category: 'Apartments',
      author: 'Sofia Rodriguez',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20apartment%20living%20room%20with%20kitchen%2C%20comfortable%20home-like%20setting%2C%20vacation%20rental%20interior%2C%20spacious%20accommodation%2C%20contemporary%20furnishing&width=600&height=400&seq=acc3&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Luxury Resorts: Ultimate Comfort',
      category: 'Luxury Resorts',
      author: 'Alexander Pierce',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20resort%20pool%20area%20with%20elegant%20design%2C%20premium%20hospitality%20setting%2C%20upscale%20accommodation%2C%20sophisticated%20atmosphere%2C%20high-end%20travel%20experience&width=600&height=400&seq=acc4&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Family-Friendly Accommodations',
      category: 'Family Stays',
      author: 'Rachel Green',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=family%20hotel%20room%20with%20connecting%20rooms%2C%20child-friendly%20amenities%2C%20safe%20accommodation%20environment%2C%20comfortable%20family%20travel%20setting%2C%20welcoming%20atmosphere&width=600&height=400&seq=acc5&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Last-Minute Booking Strategies',
      category: 'Budget Options',
      author: 'Tom Wilson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=person%20booking%20accommodation%20on%20mobile%20phone%2C%20hotel%20search%20interface%2C%20travel%20planning%2C%20last-minute%20booking%2C%20accommodation%20reservation%20process&width=600&height=400&seq=acc6&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Stadium Proximity Guide',
      category: 'Hotels',
      author: 'Carlos Martinez',
      readTime: '17 min read',
      image: 'https://readdy.ai/api/search-image?query=hotel%20near%20stadium%20with%20World%20Cup%20atmosphere%2C%20sports%20event%20accommodation%2C%20convenient%20location%2C%20match%20day%20logistics%2C%20fan-friendly%20environment&width=600&height=400&seq=acc7&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Unique Stays: Beyond Hotels',
      category: 'Hotels',
      author: 'Isabella Chen',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=boutique%20hotel%20with%20unique%20design%2C%20artistic%20interior%2C%20distinctive%20accommodation%2C%20creative%20hospitality%20setting%2C%20memorable%20travel%20experience&width=600&height=400&seq=acc8&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'Accommodation guide for World Cup 2026.'

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pageUrl = `${siteUrl}/accommodation/${slug}`
    const pageTitle = `${title} – Accommodation | StadiumPort`
    const image = guide?.image?.startsWith('http') ? guide.image : `${siteUrl}${guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}`
    const entry = getEditorialEntry('article',(slug || ''))
    setPageMeta({ title: pageTitle, description, url: pageUrl, image, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: 'Accommodation', tags: ['World Cup 2026', 'Accommodation', ...((entry?.keywords)||[])] })
  }, [title, slug, guide, description])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Accommodation Guide', description || 'Accommodation guide', `/accommodation/${slug}`, { datePublished: (getEditorialEntry('article',(slug || ''))?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Accommodation', keywords: ['World Cup 2026'] }),
        generateGlobalSportsEventSchema({ url: `${(import.meta.env.VITE_SITE_URL as string) || 'https://stadiumport.com'}/accommodation/${slug}` }),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Accommodation', url: '/accommodation' },
          { name: title || 'Accommodation Guide', url: `/accommodation/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Accommodation Guide`}
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          <div className="editorial-hero-overlay"></div>
        </div>
        <div className="editorial-hero-content">
          <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
              <span className="editorial-hero-pulse"></span>
              <span>World Cup 2026</span>
            </div>
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link to="/" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                <li><span aria-hidden>›</span></li>
                <li><Link to="/accommodation" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Accommodation</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-hotel-line"></i><span>{guide?.category || 'Accommodation'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-user-line"></i><span>{guide?.author || 'StadiumPort'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-time-line"></i><span>{guide?.readTime || 'Read time: TBD'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-article py-12">
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-emerald-500"></i>
            Content Coming Soon
          </h2>
          <p className="whitespace-pre-line">Detailed accommodation guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <Footer />
    </div>
  )
}