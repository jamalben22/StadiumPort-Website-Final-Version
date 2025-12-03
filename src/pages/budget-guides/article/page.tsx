import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema, generateGlobalSportsEventSchema } from '../../../components/seo/SchemaOrg'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setPageMeta } from '../../../components/seo/MetaUtils'
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar'

function toTitleCase(slug?: string) {
  if (!slug) return 'Budget Guide'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function BudgetGuideArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'Mexico City: Tournament on $50/Day',
      category: 'Budget Guide',
      author: 'Maria Gonzalez',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Mexico%20City%20budget%20travel%20with%20backpacker%20exploring%20historic%20center%2C%20affordable%20street%20food%20vendors%2C%20budget%20accommodation%20hostels%2C%20young%20travelers%20saving%20money%2C%20vibrant%20Mexican%20culture&width=600&height=400&seq=mexico-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Kansas City: Heartland Budget Adventure',
      category: 'Budget Guide',
      author: 'Mike Rodriguez',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Kansas%20City%20budget%20travelers%20enjoying%20BBQ%20and%20jazz%20culture%2C%20affordable%20Midwest%20hospitality%2C%20budget-friendly%20downtown%20area%2C%20young%20people%20exploring%20fountains%20and%20local%20culture&width=600&height=400&seq=kc-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Atlanta: Southern Savings Strategy',
      category: 'Budget Guide',
      author: 'Sarah Mitchell',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Atlanta%20Georgia%20budget%20travelers%20exploring%20downtown%20area%2C%20affordable%20southern%20hospitality%2C%20budget%20accommodation%20near%20Mercedes-Benz%20Stadium%2C%20young%20people%20enjoying%20local%20culture&width=600&height=400&seq=atlanta-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Philadelphia: Historic Budget Experience',
      category: 'Budget Guide',
      author: 'David Park',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Philadelphia%20budget%20travelers%20near%20Independence%20Hall%2C%20affordable%20historic%20city%20exploration%2C%20budget-friendly%20cheesesteak%20vendors%2C%20young%20people%20walking%20Freedom%20Trail&width=600&height=400&seq=philly-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Houston: Space City Savings',
      category: 'Budget Guide',
      author: 'Jessica Torres',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=Houston%20Texas%20budget%20travelers%20exploring%20diverse%20neighborhoods%2C%20affordable%20Space%20City%20culture%2C%20budget%20accommodation%20near%20NRG%20Stadium%2C%20young%20people%20enjoying%20local%20food%20scene&width=600&height=400&seq=houston-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Denver: Mile High Budget Guide',
      category: 'Budget Guide',
      author: 'Amanda Foster',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=Denver%20Colorado%20budget%20travelers%20with%20Rocky%20Mountains%20backdrop%2C%20affordable%20Mile%20High%20City%20exploration%2C%20budget%20outdoor%20activities%2C%20young%20people%20enjoying%20craft%20beer%20culture&width=600&height=400&seq=denver-budget&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Dallas: Big D Budget Breakdown',
      category: 'Budget Guide',
      author: 'Robert Kim',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas budget travelers exploring AT&T Stadium area, affordable Big D hospitality, budget accommodation in Arlington, young people enjoying cowboy culture&width=600&height=400&seq=dallas-budget2&orientation=landscape',
      intro: 'Content coming soon.'
    },
    {
      title: 'Miami: Beach Budget Strategy',
      category: 'Budget Guide',
      author: 'Carlos Mendez',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=Miami%20budget%20travelers%20enjoying%20South%20Beach%20atmosphere%2C%20affordable%20tropical%20paradise%20experience%2C%20budget%20accommodation%20near%20Hard%20Rock%20Stadium%2C%20young%20people%20exploring%20Art%20Deco%20district&width=600&height=400&seq=miami-budget2&orientation=landscape',
      intro: 'Content coming soon.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'Budget World Cup 2026 guide.'

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pageUrl = `${siteUrl}/budget-guides/${slug}`
    const pageTitle = `${title} – Budget Guides | Stadiumport`
    const image = guide?.image?.startsWith('http') ? guide.image : `${siteUrl}${guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}`
    const tags = ['World Cup 2026', 'Budget Guides', 'Savings']
    const entry = getEditorialEntry('article',(slug || ''))
    setPageMeta({ title: pageTitle, description, url: pageUrl, image, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: 'Budget Guides', tags: [...tags, ...((entry?.keywords)||[])] })
  }, [title, slug, guide, description])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Budget Guide', description || 'Budget guide', `/budget-guides/${slug}`),
        generateGlobalSportsEventSchema({ url: `${(import.meta.env.VITE_SITE_URL as string) || 'https://stadiumport.com'}/budget-guides/${slug}` }),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Budget Guides', url: '/budget-guides' },
          { name: title || 'Budget Guide', url: `/budget-guides/${slug}` }
        ])
      ]} />

      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Budget Guide`}
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
                <li><Link to="/budget-guides" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Budget Guides</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-wallet-3-line"></i><span>{guide?.category || 'Budget Guide'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-user-line"></i><span>{guide?.author || 'Stadiumport'}</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-time-line"></i><span>{guide?.readTime || 'Read time: TBD'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="editorial-article py-12">
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d]"></i>
            Content Coming Soon
          </h2>
          <p className="whitespace-pre-line">Detailed budget guide content will be available soon.</p>
          <hr className="editorial-divider" />
        </article>
      </main>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by Stadiumport Team</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}