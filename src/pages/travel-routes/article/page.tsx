import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function toTitleCase(slug?: string) {
  if (!slug) return 'Travel Route'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function TravelRoutesArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'Ultimate 16-City World Cup Grand Tour',
      category: 'Multi-City Tours',
      author: 'Route Planner',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=world%20map%20with%20travel%20route%20connecting%20multiple%20cities%2C%20international%20journey%20planning%2C%20global%20travel%20itinerary%2C%20comprehensive%20world%20tour%20visualization&width=600&height=400&seq=route1&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'USA East Coast Stadium Circuit',
      category: 'Regional Circuits',
      author: 'East Coast Expert',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=USA%20East%20Coast%20cities%20skyline%20montage%20with%20stadiums%2C%20American%20football%20venues%2C%20urban%20landscapes%2C%20metropolitan%20areas%2C%20professional%20sports%20facilities&width=600&height=400&seq=route2&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Mexico Cultural & Stadium Experience',
      category: 'Regional Circuits',
      author: 'Mexico Expert',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Mexican%20cities%20with%20colorful%20architecture%2C%20traditional%20culture%2C%20historic%20stadiums%2C%20vibrant%20street%20life%2C%20authentic%20Mexican%20atmosphere%2C%20cultural%20heritage&width=600&height=400&seq=route3&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Canada Coast-to-Coast Adventure',
      category: 'Regional Circuits',
      author: 'Canada Guide',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Canadian%20cities%20with%20modern%20skylines%2C%20natural%20beauty%2C%20professional%20stadiums%2C%20multicultural%20atmosphere%2C%20clean%20urban%20environments%2C%20scenic%20landscapes&width=600&height=400&seq=route4&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Budget Backpacker Route: Mexico & USA South',
      category: 'Budget Routes',
      author: 'Budget Expert',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=budget%20backpacker%20with%20travel%20gear%2C%20affordable%20accommodation%2C%20bus%20transportation%2C%20budget%20travel%20lifestyle%2C%20cost-effective%20journey%20planning&width=600&height=400&seq=route5&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Luxury VIP Experience Circuit',
      category: 'Luxury Journeys',
      author: 'Luxury Advisor',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20travel%20with%20private%20jet%2C%20premium%20hotels%2C%20VIP%20stadium%20suites%2C%20exclusive%20experiences%2C%20high-end%20travel%20lifestyle%2C%20sophisticated%20journey&width=600&height=400&seq=route6&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Weekend Warrior: Quick City Hops',
      category: 'Quick Trips',
      author: 'Quick Trip Expert',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=business%20traveler%20with%20efficient%20packing%2C%20quick%20city%20trip%2C%20professional%20travel%20planning%2C%20time-efficient%20journey%2C%20urban%20exploration%2C%20weekend%20getaway&width=600&height=400&seq=route7&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Family-Friendly Multi-City Adventure',
      category: 'Multi-City Tours',
      author: 'Family Travel Expert',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=family%20travel%20with%20children%2C%20kid-friendly%20activities%2C%20comfortable%20accommodation%2C%20safe%20travel%20environment%2C%20family%20vacation%20planning%2C%20multi-generational%20journey&width=600&height=400&seq=route8&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'World Cup 2026 travel route guide.'

  useEffect(() => {
    const pageTitle = `${title} – Travel Routes | StadiumPort`
    document.title = pageTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Travel Route', description || 'Travel route', `/travel-routes/${slug}`),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Travel Routes', url: '/travel-routes' },
          { name: title || 'Travel Route', url: `/travel-routes/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Travel Route`}
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
                <li><Link to="/travel-routes" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Travel Routes</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-route-line"></i><span>{guide?.category || 'Travel Route'}</span></div>
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
          <p className="whitespace-pre-line">Detailed travel route guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <Footer />
    </div>
  )
}