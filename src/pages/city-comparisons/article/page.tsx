import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema, generateGlobalSportsEventSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setPageMeta } from '../../../components/seo/MetaUtils'
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar'

function toTitleCase(slug?: string) {
  if (!slug) return 'City Comparison'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function CityComparisonsArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'New York vs Los Angeles: East Coast vs West Coast',
      category: 'Culture & Lifestyle',
      author: 'Travel Expert',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=split%20screen%20comparison%20of%20New%20York%20Manhattan%20skyline%20and%20Los%20Angeles%20downtown%2C%20urban%20contrast%2C%20metropolitan%20comparison%2C%20city%20lifestyle%20differences&width=600&height=400&seq=comp1&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Mexico City vs Guadalajara: Cultural Capitals',
      category: 'Cost of Living',
      author: 'Culture Guide',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Mexican%20cities%20comparison%20with%20colonial%20architecture%2C%20vibrant%20culture%2C%20traditional%20markets%2C%20authentic%20Mexican%20atmosphere%2C%20cultural%20heritage%20contrast&width=600&height=400&seq=comp2&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Toronto vs Vancouver: Canadian Showdown',
      category: 'Weather & Climate',
      author: 'Canada Expert',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Canadian%20cities%20comparison%20with%20Toronto%20CN%20Tower%20and%20Vancouver%20mountains%2C%20urban%20landscapes%2C%20Canadian%20culture%2C%20modern%20city%20skylines&width=600&height=400&seq=comp3&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Miami vs Atlanta: Southern Hospitality',
      category: 'Culture & Lifestyle',
      author: 'South USA Guide',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Miami%20Beach%20Art%20Deco%20and%20Atlanta%20modern%20skyline%20comparison%2C%20southern%20US%20cities%2C%20urban%20vs%20coastal%20lifestyle%2C%20contrasting%20atmospheres&width=600&height=400&seq=comp4&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Boston vs Philadelphia: Historic Rivals',
      category: 'Transportation',
      author: 'History Guide',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Historic%20Boston%20and%20Philadelphia%20architecture%20comparison%2C%20colonial%20American%20cities%2C%20historic%20landmarks%2C%20traditional%20East%20Coast%20atmosphere&width=600&height=400&seq=comp5&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Dallas vs Kansas City: Heartland America',
      category: 'Stadium Access',
      author: 'Heartland Expert',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Dallas%20Texas%20skyline%20and%20Kansas%20City%20urban%20landscape%2C%20American%20heartland%20cities%2C%20modern%20architecture%2C%20central%20US%20metropolitan%20areas&width=600&height=400&seq=comp6&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Seattle vs San Francisco: Pacific Coast',
      category: 'Cost of Living',
      author: 'Tech Cities Guide',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Seattle%20Space%20Needle%20and%20San%20Francisco%20Golden%20Gate%20Bridge%20comparison%2C%20Pacific%20Coast%20cities%2C%20tech%20hub%20atmospheres%2C%20coastal%20urban%20landscapes&width=600&height=400&seq=comp7&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Monterrey vs All Mexican Cities',
      category: 'Accommodation',
      author: 'Mexico Expert',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Monterrey%20industrial%20cityscape%20with%20mountains%2C%20Mexican%20urban%20development%2C%20modern%20Mexican%20city%2C%20industrial%20architecture%2C%20northern%20Mexico%20atmosphere&width=600&height=400&seq=comp8&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'City comparison guide.'

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pageUrl = `${siteUrl}/city-comparisons/${slug}`
    const pageTitle = `${title} – City Comparisons | StadiumPort`
    const image = guide?.image?.startsWith('http') ? guide.image : `${siteUrl}${guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}`
    const cities = (title || '').match(/New York|Los Angeles|Miami|Dallas|Toronto|Vancouver|Mexico City|Guadalajara|Kansas City|Boston|Philadelphia|Houston|Seattle|San Francisco/gi) || []
    const tags = ['World Cup 2026', 'City Comparisons', ...cities]
    const entry = getEditorialEntry('article',(slug || ''))
    setPageMeta({ title: pageTitle, description, url: pageUrl, image, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: 'City Comparisons', tags: [...tags, ...((entry?.keywords)||[])] })
  }, [title, slug, guide, description])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'City Comparison', description || 'City comparison', `/city-comparisons/${slug}`),
        generateGlobalSportsEventSchema({ url: `${(import.meta.env.VITE_SITE_URL as string) || 'https://stadiumport.com'}/city-comparisons/${slug}` }),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'City Comparisons', url: '/city-comparisons' },
          { name: title || 'City Comparison', url: `/city-comparisons/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – City Comparison`}
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
                <li><Link to="/city-comparisons" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">City Comparisons</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-scales-3-line"></i><span>{guide?.category || 'City Comparison'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-user-line"></i><span>{guide?.author || 'StadiumPort'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-time-line"></i><span>{guide?.readTime || 'Read time: TBD'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="main-content" className="editorial-article py-12">
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-emerald-500"></i>
            Content Coming Soon
          </h2>
          <p className="whitespace-pre-line">Detailed city comparison guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by StadiumPort Team</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}