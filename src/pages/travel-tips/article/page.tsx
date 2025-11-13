import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

function toTitleCase(slug?: string) {
  if (!slug) return 'Travel Tip';
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export default function TravelTipsArticlePage() {
  const { slug } = useParams();
  const title = toTitleCase(slug);

  useEffect(() => {
    const pageTitle = `${title} – Travel Tips | StadiumPort`;
    document.title = pageTitle;

    const desc = 'Premium travel tips template: editorial hero, cohesive typography, and structured sections. Content coming soon.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, [title]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Editorial Hero — matches city/stadium guide styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp"
            alt={`${title} – Travel Tip`}
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
            {/* Breadcrumbs */}
            <nav className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/travel-tips" className="hover:underline">Travel Tips</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-500 dark:text-slate-400">{title}</span>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-book-open-line"></i>
                <span>Travel Tips</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>Read time: TBD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="editorial-article py-12">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-emerald-500"></i>
            Expert Travel Tip Template
          </h2>
          <p className="whitespace-pre-line">
            This page mirrors the premium editorial layout used in city and stadium guides. Detailed travel tip content will be added here.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Section 1 */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-emerald-500"></i>
            Planning & Strategy
          </h3>
          <p className="whitespace-pre-line">
            Coming soon: itinerary strategies, booking windows, and optimizing matchday logistics.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Section 2 */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-500"></i>
            Getting Around
          </h3>
          <p className="whitespace-pre-line">
            Coming soon: transit tips, rideshare best practices, and stadium access planning.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Section 3 */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay & What to Pack
          </h3>
          <p className="whitespace-pre-line">
            Coming soon: neighborhood selection, packing lists, and essentials for matchday.
          </p>
          <hr className="editorial-divider" />
        </article>
      </section>

      <Footer />
    </div>
  );
}