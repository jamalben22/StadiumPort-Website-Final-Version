
import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setPageMeta } from '../../../components/seo/MetaUtils'

function toTitleCase(slug?: string) {
  if (!slug) return 'Travel Guide'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function TravelGuideArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'Complete New York World Cup 2026 Travel Guide',
      category: 'City Guides',
      author: 'Sarah Mitchell',
      readTime: '25 min read',
      image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
      intro: 'Content coming soon.'
    },
    {
      title: 'Los Angeles World Cup 2026: Complete Travel Guide',
      category: 'City Guides',
      author: 'Mike Rodriguez',
      readTime: '22 min read',
      image: 'https://readdy.ai/api/search-image?query=Los%20Angeles%20downtown%20skyline%20with%20SoFi%20Stadium%2C%20Hollywood%20sign%20visible%2C%20California%20sunshine%2C%20World%20Cup%202026%20destination%2C%20entertainment%20capital%20atmosphere&width=600&height=400&seq=la-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Miami World Cup 2026: Beach & Football Paradise',
      category: 'City Guides',
      author: 'Elena Vasquez',
      readTime: '20 min read',
      image: 'https://readdy.ai/api/search-image?query=Miami%20Beach%20Art%20Deco%20district%20with%20Hard%20Rock%20Stadium%2C%20tropical%20paradise%2C%20World%20Cup%202026%20atmosphere%2C%20vibrant%20Florida%20coastal%20city%2C%20palm%20trees%20and%20ocean&width=600&height=400&seq=miami-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Dallas World Cup 2026: Big D Football Experience',
      category: 'City Guides',
      author: 'Robert Kim',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas skyline with AT&T Stadium, cowboy culture meets World Cup, modern metropolitan landscape, Big D urban atmosphere, dramatic lighting&width=600&height=400&seq=dallas-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Budget Travel Guide: World Cup 2026 on a Shoestring',
      category: 'Budget Guides',
      author: 'Jennifer Park',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=Budget%20travel%20planning%20with%20calculator%2C%20maps%2C%20and%20travel%20documents%2C%20affordable%20World%20Cup%202026%20planning%2C%20money-saving%20travel%20strategies%2C%20budget%20accommodation%20options&width=600&height=400&seq=budget-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Luxury World Cup 2026: Premium Experiences',
      category: 'Luxury Travel',
      author: 'David Thompson',
      readTime: '20 min read',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20travel%20experience%20with%20premium%20hotel%20suite%2C%20fine%20dining%2C%20VIP%20stadium%20access%2C%20World%20Cup%202026%20luxury%20packages%2C%20high-end%20hospitality%20services&width=600&height=400&seq=luxury-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Transportation Guide: Getting Around World Cup Cities',
      category: 'Transportation',
      author: 'Carlos Martinez',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=World%20Cup%202026%20transportation%20options%2C%20public%20transit%20systems%2C%20airport%20connections%2C%20stadium%20access%2C%20travel%20logistics%20planning&width=600&height=400&seq=transport-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Ultimate World Cup 2026 Packing Guide',
      category: 'Packing Lists',
      author: 'Lisa Chen',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Travel%20packing%20essentials%20for%20World%20Cup%202026%2C%20organized%20luggage%2C%20travel%20gear%2C%20stadium%20accessories%2C%20weather-appropriate%20clothing&width=600&height=400&seq=packing-guide&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'World Cup 2026 Safety & Security Guide',
      category: 'Safety Guide',
      author: 'Michael Torres',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=Travel%20safety%20and%20security%20for%20World%20Cup%202026%2C%20emergency%20preparedness%2C%20safe%20travel%20practices%2C%20stadium%20security%20measures&width=600&height=400&seq=safety-guide&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'World Cup 2026 travel guide.'

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pageUrl = `${siteUrl}/travel-guides/${slug}`
    const pageTitle = `${title} – Travel Guides | StadiumPort`
    const image = guide?.image?.startsWith('http') ? guide.image : `${siteUrl}${guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}`
    setPageMeta({ title: pageTitle, description, url: pageUrl, image, locale: 'en_US', publishedTime: '2024-01-01T00:00:00Z', modifiedTime: new Date().toISOString(), section: 'Travel Guides' })
  }, [title, slug, guide, description])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Travel Guide', description || 'Travel guide', `/travel-guides/${slug}`),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/travel-guides' },
          { name: title || 'Travel Guide', url: `/travel-guides/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Travel Guide`}
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
                <li><Link to="/travel-guides" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Travel Guides</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-bookmark-line"></i><span>{guide?.category || 'Travel Guide'}</span></div>
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
          <p className="whitespace-pre-line">Detailed travel guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <Footer />
    </div>
  )
}
