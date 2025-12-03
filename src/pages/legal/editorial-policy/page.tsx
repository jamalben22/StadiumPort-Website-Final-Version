import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { SchemaOrg } from '../../../components/seo/SchemaOrg'

export default function EditorialPolicyPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
  const url = `${siteUrl}/editorial-policy`
  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Editorial Policy",
        "url": url
      }} />
      <main id="main-content" className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Editorial Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-8">
            Stadiumport is built on accuracy, transparency, and trust. Our mission is to provide the most reliable and actionable information for fans traveling to the FIFA World Cup 2026 across the United States, Canada, and Mexico. Every guide, city page, stadium profile, and travel resource follows a strict editorial process designed to ensure clarity, usefulness, and factual integrity.
          </div>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Editorial Principles</h2>

          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">1. Accuracy First</h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            All content is created using verified, authoritative sources, including:
          </p>
          <ul className="list-disc pl-6 mb-6 text-slate-700 dark:text-slate-200">
            <li>Official FIFA announcements</li>
            <li>Stadium authority releases</li>
            <li>Host city and government agencies</li>
            <li>Verified transportation and tourism data</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Before publication, each article goes through a multi-step fact-checking process. When new updates emerge, information is reviewed and corrected promptly.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">2. Transparency & Source Integrity</h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            We clearly reference and rely on official or expert-level sources. Any major update is marked with a "last reviewed" or "last updated" timestamp so readers always know how current the information is.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Affiliate links may be included in some guides; they <strong>never influence our editorial decisions</strong> or the content we publish.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">3. Clear, Helpful, Traveler-Focused Content</h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Stadiumport content is designed for real travelers. Guides are structured to provide:
          </p>
          <ul className="list-disc pl-6 mb-6 text-slate-700 dark:text-slate-200">
            <li>Simple navigation</li>
            <li>Clear in-stadium and city information</li>
            <li>Practical, step-by-step travel advice</li>
            <li>Accurate expectations for match days, transportation, weather, and more</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Every article is written to solve actual traveler problems and reduce planning stress.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">4. Quality Review Workflow</h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            All guides follow a consistent editorial workflow:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-slate-700 dark:text-slate-200">
            <li>Research & data collection</li>
            <li>Draft preparation using verified information</li>
            <li>Expert review for stadium, city, and travel accuracy</li>
            <li>Editing for clarity, structure, and consistency</li>
            <li>Technical review (SEO, performance, schema validation)</li>
            <li>Final approval and publication</li>
          </ol>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            This ensures every guide meets Stadiumport's professional standards.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">5. Continuous Updates</h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            We actively monitor new announcements and city-level changes. When relevant information changes—transportation plans, stadium policies, match schedules—affected pages are immediately reviewed and updated.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            If readers spot inaccuracies, they can submit feedback through our contact page. Corrections are handled quickly.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Responsibility to Readers</h2>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Stadiumport exists to help fans travel confidently, comfortably, and affordably. We aim to remove confusion, prevent planning mistakes, and provide the most trusted World Cup 2026 guidance available online.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4 font-semibold">
            Your trust is our priority.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}