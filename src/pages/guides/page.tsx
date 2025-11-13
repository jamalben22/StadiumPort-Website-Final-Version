import { Header } from '../../components/feature/Header'
import { Footer } from '../../components/feature/Footer'

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-r from-emerald-50 to-gold-50 dark:from-navy-800 dark:to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">Guides</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">Curated guide articles with structured content. More coming soon.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600 dark:text-slate-300">Content will be populated via CMS or direct edits.</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

