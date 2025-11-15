import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function toTitleCase(slug?: string) {
  if (!slug) return 'Luxury Experience'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function LuxuryArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'Ultimate Luxury Guide to Qatar World Cup',
      category: 'VIP Experiences',
      author: 'Alexandra Sterling',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20private%20suite%20at%20Qatar%20World%20Cup%20stadium%20with%20champagne%20service%2C%20premium%20seating%2C%20elegant%20interior%20design%2C%20golden%20accents%2C%20sophisticated%20atmosphere&width=1600&height=900&seq=lux1&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Miami 2026: Complete Luxury World Cup Experience',
      category: 'VIP Experiences',
      author: 'Sofia Rodriguez',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20Miami%20beach%20penthouse%20with%20ocean%20view%2C%20elegant%20modern%20interior%2C%20premium%20hospitality%2C%20sophisticated%20coastal%20design%2C%20World%20Cup%20atmosphere&width=1600&height=900&seq=miami1&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Private Jet Travel to All Host Cities',
      category: 'Private Jets',
      author: 'Marcus Blackwood',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20private%20jet%20interior%20with%20leather%20seats%2C%20champagne%20service%2C%20elegant%20cabin%20design%2C%20premium%20aviation%20experience%2C%20sophisticated%20travel&width=1600&height=900&seq=lux2&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Michelin-Starred Dining in Host Cities',
      category: 'Michelin Dining',
      author: 'Isabella Rossi',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Michelin%20star%20restaurant%20interior%20with%20fine%20dining%20setup%2C%20premium%20table%20setting%2C%20sophisticated%20ambiance%2C%20luxury%20culinary%20experience&width=1600&height=900&seq=lux3&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Luxury Hotels: Presidential Suites Guide',
      category: 'Luxury Hotels',
      author: 'Victoria Pemberton',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=presidential%20hotel%20suite%20with%20panoramic%20city%20views%2C%20marble%20bathroom%2C%20luxury%20furnishings%2C%20elegant%20bedroom%2C%20premium%20hospitality%20design&width=1600&height=900&seq=lux4&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'VIP Stadium Experiences & Private Boxes',
      category: 'VIP Experiences',
      author: 'James Wellington',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=VIP%20stadium%20box%20with%20premium%20seating%2C%20champagne%20service%2C%20panoramic%20field%20view%2C%20luxury%20hospitality%20suite%2C%20elegant%20sports%20viewing%20experience&width=1600&height=900&seq=lux5&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Exclusive Cultural Tours with Private Guides',
      category: 'Exclusive Tours',
      author: 'Sophia Hartwell',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=private%20museum%20tour%20with%20expert%20guide%2C%20exclusive%20art%20collection%20viewing%2C%20sophisticated%20cultural%20experience%2C%20premium%20educational%20travel&width=1600&height=900&seq=lux6&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Luxury Yacht Charters in Coastal Cities',
      category: 'VIP Experiences',
      author: 'Christopher Ashford',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20yacht%20charter%20with%20elegant%20deck%20setup%2C%20premium%20marine%20experience%2C%20sophisticated%20boat%20interior%2C%20exclusive%20water%20travel%2C%20coastal%20luxury&width=1600&height=900&seq=lux7&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'Luxury World Cup 2026 premium experience guide.'

  useEffect(() => {
    const pageTitle = `${title} – Luxury Travel | StadiumPort`
    document.title = pageTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Luxury Experience', description || 'Luxury guide', `/luxury-travel/${slug}`),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Luxury Travel', url: '/luxury-travel' },
          { name: title || 'Luxury Experience', url: `/luxury-travel/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Luxury Guide`}
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
              <span>FIFA World Cup 2026</span>
            </div>
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link to="/" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                <li><span aria-hidden>›</span></li>
                <li><Link to="/luxury-travel" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Luxury Travel</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-vip-crown-line"></i><span>{guide?.category || 'Luxury Experience'}</span></div>
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
          <p className="whitespace-pre-line">Detailed luxury guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <Footer />
    </div>
  )
}