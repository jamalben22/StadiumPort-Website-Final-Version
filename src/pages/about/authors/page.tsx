import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg } from '../../../components/seo/SchemaOrg'

export default function AuthorsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
  const url = `${siteUrl}/about/authors`
  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Author Bios",
        "url": url
      }} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Author Bios</h1>
        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold mb-2">About the StadiumPort Team</h2>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">StadiumPort is created and maintained by a dedicated editorial team focused on delivering accurate, practical, and up-to-date information for travelers attending the FIFA World Cup 2026. Our writers, editors, and researchers work together to ensure every guide meets the highest standards of clarity, reliability, and usefulness.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Our content team specializes in:</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
              <li>World Cup travel planning</li>
              <li>Host city and stadium analysis</li>
              <li>Transportation, accommodation, and logistics</li>
              <li>Fan experience optimization</li>
              <li>Data-driven stadium research</li>
              <li>Real-time updates and editorial accuracy</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Every article published on StadiumPort goes through a structured review process to ensure accuracy, readability, and relevance. Sources include official city tourism boards, stadium operators, FIFA publications, transit authorities, and verified travel resources.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">We are committed to transparent, unbiased, and helpful coverage. Our goal is to empower fans worldwide with everything needed to experience the World Cup confidently and stress-free.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}