import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

// Helper: convert **...** emphasis to <strong> while preserving text and spacing
const renderBoldText = (input: string) => {
  const parts = input.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const NeighborhoodTable = () => (
  <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-up">
    <table className="w-full text-left text-sm border-collapse min-w-[600px]">
      <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 font-semibold border-b border-slate-200 dark:border-slate-700">
        <tr>
          <th className="p-4 whitespace-nowrap">Neighborhood</th>
          <th className="p-4">Vibe</th>
          <th className="p-4">Stadium Access</th>
          <th className="p-4">Best For</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
          <td className="p-4 font-medium text-emerald-700 dark:text-emerald-400">West Hollywood</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Trendy, walkable, nightlife-focused</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Moderate (Metro/Uber)</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Central location & nightlife</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
          <td className="p-4 font-medium text-emerald-700 dark:text-emerald-400">Santa Monica</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Beach, relaxed, scenic</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Far (45m+ transit)</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Vacation vibes & families</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
          <td className="p-4 font-medium text-emerald-700 dark:text-emerald-400">Downtown LA</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Urban, artsy, connected</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Excellent (Direct Metro)</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Transit & culture</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
          <td className="p-4 font-medium text-emerald-700 dark:text-emerald-400">Hollywood</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Touristy, energetic</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Good (Metro B → C)</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">First-timers & sightseeing</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
          <td className="p-4 font-medium text-emerald-700 dark:text-emerald-400">Beverly Hills</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Luxury, quiet, polished</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Poor (Car only)</td>
          <td className="p-4 text-slate-600 dark:text-slate-300">Luxury & shopping</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const MatchScheduleTable = () => (
  <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
      <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 font-semibold border-b border-slate-200 dark:border-slate-700">
        <tr>
          <th className="p-3 whitespace-nowrap">Date</th>
          <th className="p-3">Round</th>
          <th className="p-3">Details</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">June 12</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">USA Opening Match</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">June 15, 18, 21</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group matches</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">June 25</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">USA Third Match</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">June 28 & July 2</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Round of 32</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Knockout fixtures</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">July 10</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Quarterfinal</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Semifinal berth at stake</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function LosAngelesArticlePage() {
  const pageUrl = '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  
  const [scrollPercent, setScrollPercent] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/los-angeles-world-cup-2026.webp'
    document.head.appendChild(link)
    
    // Track scroll depth (engagement metric)
    let maxScroll = 0;
    const trackScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      const clamped = Math.max(0, Math.min(100, pct));
      setScrollPercent(clamped);
      if (clamped > maxScroll) {
        maxScroll = clamped;
        if (window.gtag && maxScroll % 25 === 0) {
          window.gtag('event', 'scroll', {
            percent_scrolled: maxScroll,
            page: 'la_guide'
          });
        }
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.editorial-body h2, .editorial-body h3')) as HTMLElement[];
    const used = new Set<string>();
    const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
    const items = nodes.map((el, idx) => {
      const text = (el.textContent || `Section ${idx + 1}`).trim();
      let id = el.id || slug(text) || `section-${idx + 1}`;
      while (used.has(id)) id = `${id}-${idx}`;
      el.id = id;
      el.style.scrollMarginTop = '120px';
      used.add(id);
      return { id, label: text, level: el.tagName === 'H2' ? 2 : 3 };
    });
    setTocSections(items);
    if (items.length && !activeId) setActiveId(items[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    nodes.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const title = 'Los Angeles – World Cup 2026 Guide';
    const description = 'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.';
    const fullUrl = `${siteUrl}${pageUrl}`;
    const ogImage = `${siteUrl}/images/cities/los-angeles-world-cup-2026.webp`;
    const entry = getEditorialEntry('city','los-angeles')
    setPageMeta({ title, description, url: fullUrl, image: ogImage, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: entry?.section || 'Host Cities', tags: ['World Cup 2026', 'Host Cities', 'Los Angeles', 'SoFi Stadium', ...(entry?.keywords||[])] })
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Los Angeles – World Cup 2026 Guide',
            'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','los-angeles')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Los Angeles', 'SoFi Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Host Cities', url: `${siteUrl}/world-cup-2026-host-cities` },
            { name: 'Los Angeles', url: `${siteUrl}${pageUrl}` }
          ]),
          generateImageObjectSchema(
            '/images/cities/los-angeles-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Los Angeles skyline – World Cup 2026' }
          )
        ]}
      />

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
            </div>
          </div>
          <div className="px-3 pb-4 max-h-[70vh] overflow-y-auto overscroll-contain">
            <ul className="space-y-1">
              {tocSections.map(({ id, label, level }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-300 ${
                      activeId === id
                        ? 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-700/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                    } ${level === 3 ? 'pl-6' : ''}`}
                  >
                    <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </nav>
      </aside>

      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
            </div>
            <i className={`ri-arrow-up-s-line transition-transform ${isMobileTocOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {isMobileTocOpen && (
            <div className="mt-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl overflow-hidden">
              <ul className="max-h-[50vh] overflow-auto">
                {tocSections.map(({ id, label, level }) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(id);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsMobileTocOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                        activeId === id
                          ? 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-l-4 border-emerald-400'
                          : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                      } ${level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Hero — cohesive with article style */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/los-angeles-world-cup-2026.webp"
            alt="Los Angeles skyline"
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="(max-width: 600px) 400px, 100vw"
          />
          <div className="editorial-hero-overlay"></div>
        </div>

        <div className="editorial-hero-content">
          <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
            </div>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb navigation for Los Angeles" className="breadcrumb-ultra-premium mt-2">
              <ol>
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link" title="Home">
                    <svg className="breadcrumb-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="truncate">Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <Link to="/world-cup-2026-host-cities" className="breadcrumb-link" title="Host Cities">
                    <span className="truncate">Host Cities</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <span className="breadcrumb-current" title="Los Angeles" aria-current="page">
                    <span className="truncate">Los Angeles</span>
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">Los Angeles World Cup 2026: Complete Travel Guide</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>USA</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <span>SoFi Stadium</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>70,240 capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Editorial presentation */}
      <main id="main-content" className="editorial-article-premium la-page py-16">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          <div className="text-premium-lead mb-8 leading-relaxed">
            <p className="whitespace-pre-line">
              As one of the <Link to="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">World Cup 2026 host cities</Link>, Los Angeles will welcome fans from around the globe with a mix of football energy and California sunshine.
            </p>
          </div>
          <div className="text-premium-lead mb-8 leading-relaxed">
            <p className="whitespace-pre-line">
              {`Get ready for the opening kick: The U.S. Men's National Team launches their World Cup journey at `}
              <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">SoFi Stadium</Link>
              {` on June 12, 2026`}
            </p>
            <p className="whitespace-pre-line">
              {`Los Angeles isn't just hosting the World Cup—it's throwing the party to end all parties. When the U.S. opens their 2026 campaign on June 12 at the gleaming SoFi Stadium in Inglewood, the City of Angels will welcome the world with 39 consecutive days of football fever, eight must-see matches, and a soccer culture that pulses through every corner of this sprawling metropolis. This is where beach vibes collide with championship ambitions, where tacos fuel pregame rituals, and where 3.6 million Mexican-Americans help create the most electric football atmosphere in North America.`}
            </p>
            <p className="whitespace-pre-line">
              {`Forget everything you think you know about LA. The traffic? Manageable with the right strategy. The sprawl? Part of the adventure. The stereotypes? Shattered the moment you step into a packed supporters' section at BMO Stadium or watch the sun set over the Pacific after a match day. Los Angeles has been preparing for this moment since 1994, when the Rose Bowl hosted the World Cup final. Three decades later, the city's newest architectural marvel is ready to prove why LA is the undisputed soccer capital of the United States.`}
            </p>
          </div>

          {/* Essential Links Module — Apple-level premium */}
          <div className="callout-premium mb-12 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8">
              <div className="icon-premium-lg flex items-center justify-center">
                <i className="ri-links-line text-emerald-600" aria-hidden="true"></i>
              </div>
              <h3 className="editorial-h3 font-semibold text-slate-900 dark:text-slate-100 text-xl sm:text-2xl">Essential Los Angeles Links</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-football-line text-emerald-600 text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">Stadium Guide</div>
                    <a className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200" href="/world-cup-2026-stadiums/sofi-stadium" data-discover="true">SoFi Stadium Guide<i className="ri-arrow-right-line text-xs transition-transform group-hover:translate-x-0.5"></i></a>
                  </div>
                </div>
              </div>

              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-map-2-line text-emerald-600 text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">All Host Cities</div>
                    <a className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200" href="/world-cup-2026-host-cities" data-discover="true">Explore All 16 Cities<i className="ri-arrow-right-line text-xs transition-transform group-hover:translate-x-0.5"></i></a>
                  </div>
                </div>
              </div>

              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-plane-line text-emerald-600 text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">Nearby Cities</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" data-discover="true">San Francisco Bay Area</a>
                      <a className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" data-discover="true">Seattle</a>
                      <a className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" data-discover="true">Vancouver</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider-premium mb-16"></div>
        </article>

        {/* SoFi Stadium */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLABuilding" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradLABuilding)" />
              <rect x="7" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="12" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#14b8a6" />
            </svg>
            SoFi Stadium: The $5 Billion Cathedral of Sport
          </h3>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAStar" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradLAStar)" />
                </svg>
                The Venue That Redefined Spectacular
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Built in 2020 at a jaw-dropping cost that makes it the most expensive stadium ever constructed, SoFi Stadium in Inglewood isn't just a venue—it's a destination experience. The translucent ETFE canopy hovers like a spaceship over the field, open on the sides to let coastal breezes flow through while protecting 70,240 fans (expandable to 100,240 for major events) from the elements. The Infinity Screen, a double-sided 4K marvel weighing 1,000 tonnes, dangles overhead with 260 speakers delivering crystal-clear replays from every angle.

For the World Cup, SoFi undergoes a fascinating transformation. FIFA's strict requirements mean the stadium's artificial turf gets replaced with natural grass, and clever engineering expands the pitch dimensions to regulation size by rolling back corner sections of the lower bowl. When match officials refer to it as "Los Angeles Stadium" (FIFA bans corporate naming during tournaments), you'll know you're witnessing something historic.`}
              </p>
              
            </div>

            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLACalendar" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradLACalendar)" />
                  <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
                  <rect x="7" y="12" width="3" height="3" rx="0.8" fill="#ffffff" />
                  <rect x="12" y="12" width="3" height="3" rx="0.8" fill="#ffffff" />
                </svg>
                Eight Matches That Matter
              </h4>
              <div className="callout-premium p-6 sm:p-8">
                <div className="space-y-3 mt-2">
                  <MatchScheduleTable />
                  <p className="text-premium-body">
                    The tournament schedule means you could attend multiple matches across different dates, building your own World Cup odyssey through Southern California's perfect June weather.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAInfo" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradLAInfo)" />
                  <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
                  <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
                </svg>
                Match Day Intel: What You Need to Know
              </h4>
              <div className="callout-premium p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Getting In</div>
                    <p className="text-premium-body whitespace-pre-line">SoFi operates on mobile-only ticketing through FIFA's official app. Print-outs won't work, so charge that phone and have your QR code ready. Gates typically open 2-4 hours before kickoff—arrive early, because security screenings can stretch longer than you'd expect when 70,000 fans converge on Inglewood.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">What to Bring</div>
                    <p className="text-premium-body whitespace-pre-line">Clear bags only. Sunscreen is non-negotiable even under the canopy—LA's June sun is relentless. A light layer for evening matches makes sense; coastal air cools down after sunset.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">What to Leave Behind</div>
                    <p className="text-premium-body whitespace-pre-line">No large bags, no smoking devices, no poles or flag sticks that block views. Don't test security—they've hosted Super Bowls and know their business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Stadium Vibe</div>
                    <p className="text-premium-body whitespace-pre-line">SoFi sits inside the Hollywood Park entertainment complex, with pre-match energy across restaurants, bars, and public spaces surrounding the stadium. The newly opened Kali Hotel and Rooftop (launching 2026) anchors a fan village atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article className="editorial-body theme-indigo">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Train" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLATrain" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="4" width="18" height="12" rx="3" fill="url(#gradLATrain)" />
              <circle cx="8" cy="17" r="2" fill="#0ea5e9" />
              <circle cx="16" cy="17" r="2" fill="#0ea5e9" />
              <rect x="7" y="7" width="10" height="4" rx="1.5" fill="#ffffff" />
            </svg>
            Getting to SoFi: Transportation That Actually Works
          </h3>
          <div className="callout-premium p-6 sm:p-8 mb-6 flex items-start gap-3">
            <p className="text-premium-body whitespace-pre-line mb-0">
              {`Here's the good news LA doesn't advertise enough: You absolutely don't need a car for World Cup matches. In fact, you probably shouldn't drive.`}
            </p>
          </div>
          <div className="callout-premium p-6 sm:p-8 mb-6 flex items-start gap-3">
            <p className="text-premium-body whitespace-pre-line mb-0">
              Los Angeles is well-connected to other host cities like
              {' '}<Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>
              {' '}and{' '}
              <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>
              , making multi-city itineraries easy via air or rail.
            </p>
          </div>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Metro" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMetro" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="6" width="18" height="10" rx="3" fill="url(#gradLAMetro)" />
                  <circle cx="8" cy="17" r="2" fill="#0ea5e9" />
                  <circle cx="16" cy="17" r="2" fill="#0ea5e9" />
                  <rect x="7" y="8" width="10" height="4" rx="1.5" fill="#ffffff" />
                </svg>
                Metro: Your Best Bet
              </h4>
              <div className="transport-card-premium">
                <p className="text-premium-body whitespace-pre-line">
                  {`LA Metro rolls out a dedicated SoFi Stadium Shuttle connecting from the LAX/Metro Transit Center station. Here's how it works:

1. Take the C Line (Green) or K Line (Crenshaw) to LAX/Metro Transit Center
2. Board the free SoFi Shuttle at Bus Bay 8 (runs every 5-8 minutes on event days)
3. Arrive at the stadium in approximately 10 minutes

The system connects seamlessly from Downtown LA (Metro B Line to Willowbrook/Rosa Parks, transfer to C Line), Hollywood (same route), Santa Monica (Expo Line to Downtown, then transfer), and virtually anywhere on the Metro network. A regular adult fare costs just $1.75, valid for two hours of transfers. Load it on a TAP card (available at station machines) or use the TAP app on your smartphone.

Pro Tip: Park-and-ride lots at various C Line stations offer free parking on weekends. Check Metro's real-time service updates via the Transit app to avoid delays.`}
                </p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Bus" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLABus" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="8" width="18" height="8" rx="2" fill="url(#gradLABus)" />
                  <circle cx="8" cy="17" r="2" fill="#14b8a6" />
                  <circle cx="16" cy="17" r="2" fill="#14b8a6" />
                </svg>
                Alternative Options for Strategic Travelers
              </h4>
              <div className="transport-card-premium">
                <p className="text-premium-body whitespace-pre-line">
                  {`Municipal Transit: GTrans operates Line 7X Stadium Express from Harbor Gateway Transit Center for $4 roundtrip on event days. Torrance Transit also runs special service on select dates.

Rideshare Reality: Uber and Lyft work, but expect surge pricing and pickup chaos post-match. Designated zones help organize the madness, though waiting 30-45 minutes isn't unusual after major events. Split the cost with friends or embrace the Metro—you'll save money and arrive happier.

Driving & Parking: If you must drive, pre-purchase parking through the stadium's official provider. Zones (color-coded: Orange, Green, Purple) open 2-4 hours pre-match and cost significantly more than Metro fare. ADA parking available with valid permits.`}
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article className="editorial-body theme-amber">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Route" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLARoute" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path d="M4 18 c4 -6 6 -6 10 -2 s6 2 6 -4" fill="none" stroke="url(#gradLARoute)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="6" cy="18" r="2" fill="#0ea5e9" />
              <circle cx="20" cy="8" r="2" fill="#0ea5e9" />
            </svg>
            Plan Your West Coast World Cup Journey
          </h3>
          <div className="space-y-6">
              <div className="callout-premium p-6 sm:p-8 flex items-start gap-3">
                <p className="text-premium-body">
                  Los Angeles is perfectly positioned for an epic West Coast World Cup adventure. Many fans combine multiple cities for the ultimate 2026 experience.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-inter text-slate-900 dark:text-white font-semibold">Popular Combinations:</p>
              </div>
            <div className="attraction-item">
              <div className="item-marker"></div>
              <p className="text-premium-body">
                <strong>Pacific Coast Circuit</strong>
                {' '}Start in Los Angeles, head north to{' '}
                <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>
                {' '}for its tech culture and iconic landmarks, then continue to{' '}
                <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>
                {' '}for Pacific Northwest charm.
              </p>
            </div>
            <div className="attraction-item">
              <div className="item-marker"></div>
              <p className="text-premium-body">
                <strong>Southern California & Beyond</strong>
                {' '}Combine LA's beaches and entertainment and, if time allows, venture to Las Vegas for world-class shows between matches.
              </p>
            </div>
            <div className="attraction-item">
              <div className="item-marker"></div>
              <p className="text-premium-body">
                <strong>Cross-Border Adventure</strong>
                {' '}Connect Los Angeles with{' '}
                <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>
                ,{' '}
                <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</Link>
                , or{' '}
                <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link>
                {' '}for an incredible cultural contrast.
              </p>
            </div>
              <div className="callout-premium p-6 sm:p-8 flex items-start gap-3">
                <p className="text-premium-body">
                  <Link to="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
                </p>
              </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body theme-violet">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLAHotel" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradLAHotel)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhoods for Every Football Fan
          </h3>
          <p className="text-premium-body whitespace-pre-line mb-6">
            {`Los Angeles sprawls across 1,302 square kilometers, making neighborhood choice critical. Here's your insider breakdown based on budget, vibe, and what you actually want to experience.`}
          </p>

          <NeighborhoodTable />
          
          <div className="mt-6 space-y-6">
            <div className="hotel-card-premium">
              <div className="hotel-card-header">
                <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLAMapPin" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradLAMapPin)" />
                    <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
                  </svg>
                  West Hollywood: The Central Command ($$-$$$)
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {`Why Stay Here: Centrally located between Hollywood and Beverly Hills, WeHo puts you walking distance from incredible restaurants, bars, and LA's vibrant LGBTQ+ scene. It's the Goldilocks zone—close enough to everything without being stuck in one corner of the city.

The Vibe: Trendy, walkable, energetic. Sunset Strip nightlife meets excellent coffee shops and the city's best boutique hotels. You'll spot celebrities at Chateau Marmont and find killer Korean BBQ in adjacent Koreatown.

World Cup Bonus: Easy Metro access via Hollywood/Western or Vermont/Sunset stations (15 minutes to Downtown, connect to C Line for SoFi). Uber to the stadium runs $25-35 without surge.

Book Smart: The Charlie West Hollywood offers spacious suites with personality. The Hollywood Roosevelt (technically Hollywood, but close enough) sits steps from Walk of Fame and delivers old-school glamour at surprisingly fair rates.`}
              </p>
            </div>

            <div className="hotel-card-premium">
              <div className="hotel-card-header">
                <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                    <use href="#gradLASun" />
                    <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                  </svg>
                  Santa Monica: Beach Town Bliss ($$$-$$$$)
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {`Why Stay Here: If you're treating the World Cup as part of a larger California adventure, Santa Monica delivers quintessential SoCal vibes. The beach, the pier, the sunshine—it's what you pictured when you booked that flight.

The Vibe: Laid-back beachside community with excellent restaurants, Third Street Promenade shopping, and sunset views that'll dominate your Instagram. Families love it; so do couples seeking romance with waves as soundtrack.

World Cup Reality Check: You're 45 minutes from SoFi by Metro (Expo Line to Downtown, transfer to C Line), longer by car during rush hour. Factor travel time carefully—you don't want to miss kickoff because you lingered over brunch.

Book Smart: Shore Hotel sits across from the sand with eco-conscious amenities and modern style. Casa Del Mar oozes Renaissance Revival luxury for those with budgets to match.`}
              </p>
            </div>

            <div className="hotel-card-premium">
              <div className="hotel-card-header">
                <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLADowntown" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="5" y="9" width="5" height="7" rx="1" fill="url(#gradLADowntown)" />
                    <rect x="11" y="6" width="5" height="10" rx="1" fill="#0ea5e9" />
                    <rect x="17" y="10" width="2" height="6" rx="1" fill="url(#gradLADowntown)" />
                  </svg>
                  Downtown LA: Arts, Culture & Connection ($$-$$$)
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {`Why Stay Here: Downtown puts you at the Metro hub (Union Station), near arts attractions (The Broad, MOCA, Walt Disney Concert Hall), and in the middle of LA's best public transit connections. The Arts District specifically offers warehouse-chic dining and breweries.

The Vibe: Urban, artistic, diverse. Less touristy than Hollywood, grittier than Westside, but culturally rich. Night Market brings Filipino street food, Grand Central Market serves world cuisine, and Little Tokyo neighbors the convention center.

World Cup Advantage: Best Metro access in the city. C Line direct from several DTLA stations to SoFi. Multiple hotel options from business-class (InterContinental) to design-forward (Freehand Los Angeles with rooftop pool).

Book Smart: Downtown LA Proper delivers boutique style in the historic district. Avoid Skid Row areas (east of Alameda Street) and stick to Arts District, Financial District, or near Grand Park.`}
              </p>
            </div>

            <div className="hotel-card-premium">
              <div className="hotel-card-header">
                <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Movie" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLAMovie" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#0ea5e9" />
                        <stop offset="1" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                    <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradLAMovie)" />
                    <circle cx="9" cy="12" r="1.5" fill="#ffffff" />
                    <circle cx="15" cy="12" r="1.5" fill="#ffffff" />
                  </svg>
                  Hollywood: Tourist Central with Purpose ($-$$)
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {`Why Stay Here: You came to LA, you want Hollywood Boulevard, Chinese Theatre, Watch of Fame, Griffith Observatory access. First-timers often regret skipping the classics.

The Vibe: Touristy, yes. But also energetic, affordable (compared to beaches), and better than its reputation suggests. Hollywood & Highland area cleans up well; Hills neighborhoods offer canyon views.

World Cup Value: Metro B Line (Red) connects directly to downtown transfers for SoFi access. Hostels exist for budget travelers; mid-range hotels cluster near Highland Avenue.

Book Smart: Magic Castle Hotel delivers character without breaking the bank. The Hollywood Roosevelt offers poolside glamour where Marilyn Monroe once sunbathed.`}
              </p>
            </div>

            <div className="hotel-card-premium">
              <div className="hotel-card-header">
                <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Crown" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLACrown" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <path d="M4 16 h16 v2 H4z" fill="#0ea5e9" />
                    <path d="M4 16 l3 -6 l5 4 l5 -4 l3 6z" fill="url(#gradLACrown)" />
                  </svg>
                  Beverly Hills: Luxury with Star Power ($$$$)
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {`Why Stay Here: You want to see where movie stars shop, dine at Michelin-starred restaurants, and possibly spot a Ferrari or three on Rodeo Drive. Beverly Hills sells a fantasy, and sometimes fantasies are worth funding.

The Vibe: Polished, manicured, expensive. Palm tree-lined streets, luxury boutiques, old Hollywood elegance. Not walkable to much beyond its own borders, but Uber makes anywhere accessible.

World Cup Consideration: You're paying for prestige, not proximity. Budget 30-40 minutes to SoFi by car, slightly more by Metro (no direct line; requires transfers).

Book Smart: Four Seasons Beverly Hills justifies the splurge with impeccable service and that "I made it" feeling. Alternatively, Airbnb offers homes that sleep groups in nearby neighborhoods like Culver City or Marina del Rey for better value.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* LA Football Culture */}
        <article className="editorial-body theme-rose">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Football" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLAFootball" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="6" fill="url(#gradLAFootball)" />
              <path d="M12 6 l2 3 l-2 2 l-2 -2 z" fill="#ffffff" />
              <path d="M12 18 l2 -3 l-2 -2 l-2 2 z" fill="#ffffff" />
            </svg>
            Beyond the Pitch: What Makes LA Football Culture Special
          </h3>
          <div className="mt-6 space-y-6">
              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                    <use href="#gradLACrown" />
                    <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradLACrown)" />
                  </svg>
                  El Tráfico: The Rivalry That Defines LA Soccer
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Los Angeles isn't just hosting the World Cup—it's already living and breathing football culture year-round through one of MLS's fiercest rivalries: El Tráfico. When LA Galaxy (founded 1996, five-time MLS champions, based in suburban Carson at Dignity Health Sports Park) face Los Angeles FC (launched 2018, MLS Cup 2022 winners, downtown at Banc of California Stadium), the city splits down supporter lines.

**The Galaxy Way**: Legacy, history, "Since '96" pride. They brought David Beckham to MLS, hosted Zlatan Ibrahimović, and represent suburban family-friendly football culture. Their supporters believe in earned respect through decades of championships.

**The LAFC Difference**: Downtown energy, The 3252 supporters' section, Black Army ultras culture, and a stadium built specifically for soccer in the heart of the city. They're the scrappy upstart that won everything fast and made Galaxy fans nervous.

Visit BMO Stadium (formerly Banc of California, LAFC's home) before or after World Cup matches to understand what American soccer can be when done right. The 22,000-seat venue sits adjacent to USC campus, accessible via Expo Line Metro, and hosts some of the most passionate supporters in North American sports.`)}
               </p>
             </div>

              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="TV" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLATV" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#gradLATV)" />
                    <rect x="10" y="18" width="4" height="2" rx="1" fill="#0ea5e9" />
                  </svg>
                  Where to Watch With Locals
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Los Angeles boasts nearly 40 **LAFC-affiliated pubs** plus countless Galaxy bars, giving you authentic matchday experiences even when you're not at SoFi:

- **La Chuperia** (Lincoln Heights): LAFC stronghold with micheladas and carne asada
- **The Sunset Room** (Hacienda Heights): East LA Galaxy faithful
- **Underdogs** (Glendale): Barcelona fans converge here
- **Britannia Pub** (Santa Monica): Leeds United supporters' west-side haven
- **La Cita Bar** (Downtown): Mexican national team watch parties with full mariachi energy

During the World Cup, expect official FIFA Fan Festivals at **Exposition Park** (near Downtown, accessible via Expo Line) with big screens, food vendors, and cultural programming. Additional fan zones will dot Hollywood Park around SoFi and LA Live entertainment complex downtown.`)}
               </p>
             </div>

              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Women" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLAWoman" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#fb7185" />
                        <stop offset="1" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="8" r="3" fill="url(#gradLAWoman)" />
                    <rect x="11" y="11" width="2" height="6" rx="1" fill="#0ea5e9" />
                  </svg>
                  Angel City FC: Women's Game Rising
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Don't sleep on **Angel City FC** (NWSL), LA's women's professional team that proves the city's football passion extends beyond MLS. Founded in 2020 with ownership including actress Natalie Portman, tennis legend Serena Williams, and 13 former USWNT players, ACFC brings Banc of California Stadium alive with The Angel City Brigade supporters and matches that deserve your attention. With the USWNT scheduled to face Brazil at SoFi on April 5, 2026 (testing the World Cup grass installation), women's soccer momentum builds toward the tournament.`)}
              </p>
            </div>
           </div>
          <hr className="editorial-divider" />
        </article>

        {/* What to Do When You're Not at Matches */}
        <article className="editorial-body theme-teal">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Compass" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLACompass" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradLACompass)" />
              <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
            </svg>
            What to Do When You're Not at Matches
          </h3>
          
          <div className="mt-6 space-y-6">
            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                </svg>
                Sun, Sand & Surf
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Santa Monica & Venice Beach**: Connected by a gorgeous bike/walk path, these beaches define California cool. Rent bikes ($10-15/day via Metro Bike Share), watch surfers at Venice Pier, people-watch on Venice Boardwalk's funky scene, and catch sunset from Santa Monica Pier's amusement park.

**Manhattan & Hermosa Beach**: South Bay beaches offer mellower vibes, better for families. Small aquariums, pedestrian-friendly downtown areas, and beach volleyball culture that's pure SoCal.

**Malibu**: Drive north on Pacific Coast Highway for dramatic coastline, celebrity homes (from a distance), and beaches that feel like undiscovered gems despite Malibu's reputation.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                  <use href="#gradLABuilding" />
                  <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradLABuilding)" />
                </svg>
                Cultural Heavy-Hitters
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Griffith Observatory**: Perched in Griffith Park, this 1935 art deco beauty offers free admission (parking $10), planetarium shows, and the best views of the Hollywood Sign and LA basin. Go at sunset, stay for city lights. Metro doesn't reach it directly; rideshare or DASH shuttle from Hollywood/Western Metro.

**The Getty Center**: Free admission (parking $20) to this architectural masterpiece in Brentwood showcasing European art, stunning gardens, and panoramic valley views. Worth a half-day minimum.

**LACMA (Los Angeles County Museum of Art)**: Massive collection spanning ancient to contemporary art. The Urban Light installation (those iconic vintage streetlamps) anchors Miracle Mile's Museum Row. Walking distance from Fairfax District's Farmers Market.

**The Broad** (Downtown): Free contemporary art museum (reservations recommended) featuring Kusama's Infinity Mirrors and works by Basquiat, Warhol, and Koons. Walkable from Grand Park and Disney Concert Hall.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Map" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMap" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <path d="M4 6 l6 -2 l6 2 l4 -2 v14 l-6 2 l-6 -2 l-4 2z" fill="url(#gradLAMap)" />
                </svg>
                Neighborhood Explorations
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Los Feliz & Silver Lake**: Hipster havens northeast of Hollywood with vintage shops, excellent brunch spots (Pine & Crane for Taiwanese, All Day Baby for new American), and Barnsdall Art Park's Frank Lloyd Wright Hollyhock House.

**Koreatown**: Dense, 24-hour energy with insane Korean BBQ (open late for post-match gorging), karaoke bars, spas, and The Line Hotel's rooftop for cocktails with views.

**Arts District** (Downtown): Warehouse-turned-gallery neighborhood with street art murals, Bestia (possibly LA's best Italian), Angel City Brewery, and Hauser & Wirth contemporary art gallery.

**Hollywood Hills Hikes**: Runyon Canyon (crowded but convenient), Griffith Park trails (to the Observatory or beyond), and Bronson Canyon (where the Batcave was filmed) offer workout-with-views experiences.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Restaurant" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLARest" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="6" y="7" width="3" height="10" rx="1" fill="#f59e0b" />
                  <rect x="11" y="7" width="7" height="10" rx="2" fill="url(#gradLARest)" />
                </svg>
                Food Scenes You Can't Miss
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`Los Angeles is arguably America's best food city, rivaling New York with deeper Mexican, Korean, Japanese, and Thai options:

**Tacos**: LA's taco trucks operate 24/7. Leo's Tacos (Hollywood), Tacos El Gordo (Chula Vista with LA outpost), and literally hundreds of neighborhood spots serve authenticity.

**Korean BBQ**: Kang Ho-Dong Baekjeong or Park's BBQ in Koreatown—order beef bulgogi, pork belly, and banchan sides. Go with a group, go hungry.

**Japanese Ramen**: Tsujita LA (Sawtelle), Silverlake Ramen, Daikokuya (Little Tokyo)—lines are common, worth it.

**High-End Splurge**: Providence (Michelin two-star seafood), Bestia (Arts District Italian), or République (French bistro in Hancock Park).

**Grand Central Market** (Downtown): Historic food hall with everything from Eggslut breakfast sandwiches to Sarita's Pupuseria to G&B Coffee's minimalist espresso.`)}
               </p>
             </div>
           </div>
           <hr className="editorial-divider" />
         </article>

        {/* Practical Travel Tips */}
        <article className="editorial-body theme-sky">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
              <use href="#gradLASun" />
              <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradLASun)" />
              <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Travel Tips for World Cup Visitors
          </h3>
          
          <div className="mt-6 space-y-6">
            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun cloud" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <circle cx="9" cy="11" r="3" fill="#cbd5e1" />
                  <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                </svg>
                Weather & What to Pack
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**June in LA**: Near-perfect. Daytime highs average 26-27°C (79-81°F), dropping to 15-17°C (59-63°F) at night. Virtually zero rain (June averages just 3mm total precipitation). Ten hours of sunshine daily. Coastal areas might experience "June Gloom"—morning fog that burns off by noon.

**July heats up** to 28-30°C (82-86°F) days, 18-20°C (64-68°F) nights. Still dry, still sunny, slightly warmer for later matches.

**Pack**: Sunscreen (SPF 50+), sunglasses, hat, light layers for evening, comfortable walking shoes (you'll log serious steps), team jerseys, and that camera. Evening matches under SoFi's canopy with ocean breezes can feel surprisingly cool—throw a light jacket in your bag.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAShield" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradLAShield)" />
                  <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Safety & Street Smarts
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`LA is generally safe for tourists in main areas, but street smarts apply:

- **Avoid**: Skid Row (Downtown east of Alameda), walking alone late at night in deserted areas near stadiums post-match
- **Watch**: Belongings on Metro (pickpocketing happens); car break-ins if you drive (don't leave visible valuables)
- **Stay aware**: In Hollywood, some blocks feel sketchy at night beyond the main tourist drag
- **Use common sense**: Groups are safer; well-lit areas are better; Uber/Lyft after late matches beats walking unknown neighborhoods

Popular tourist neighborhoods (Santa Monica, West Hollywood, Beverly Hills, Hollywood tourist zone) are well-patrolled and designed for visitors.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMoney" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradLAMoney)" />
                  <circle cx="12" cy="12" r="3" fill="#ffffff" />
                  <path d="M12 10 v4 M10.5 11.5 h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Money Matters
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Credit cards work everywhere; most places don't accept cash-only. ATMs abound. Tipping culture is strong: 18-20% restaurants, $1-2 per drink at bars, round up for rideshares.

Costs add up fast in LA. Budget $15-25 for casual meals, $40-80 for mid-range dinners, $25-50 for Uber to SoFi from beach areas. Metro saves significant money—embrace public transit.`}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Passport" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAPassport" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="6" y="5" width="12" height="14" rx="2" fill="url(#gradLAPassport)" />
                  <circle cx="12" cy="11" r="3" fill="#ffffff" />
                </svg>
                Visa Requirements
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`International visitors (except Canadian and some visa waiver countries): Apply for **B-2 tourist visa** well in advance. Processing can take weeks during World Cup surge. Visa waiver program (ESTA) applies to many European, Asian, and Latin American countries—check eligibility at travel.state.gov.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Smartphone" viewBox="0 0 24 24">
                  <use href="#gradLASmart" />
                  <rect x="8" y="4" width="8" height="16" rx="2" fill="url(#gradLASmart)" />
                </svg>
                Phone & Connectivity
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Rent a US SIM at LAX airport convenience stores, or use providers like Airalo for e-SIMs. T-Mobile and AT&T dominate; Verizon works well too. Public WiFi exists at Metro stations, Starbucks, and most public spaces.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* World Cup Booking Strategy */}
        <article className="editorial-body theme-purple">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Calendar check" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLACalCheck" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradLACalCheck)" />
              <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
              <path d="M9 13 l2 2 l4 -4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Your World Cup Booking Strategy
          </h3>
          
          <div className="mt-6 space-y-6">
            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Clock" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAClock" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradLAClock)" />
                  <path d="M12 12 l0 -4 M12 12 l3 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                When to Book
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Now**. Seriously. Los Angeles hotel inventory gets crushed during major events, and the World Cup dwarfs typical demand. June 2026 accommodation prices will soar as dates approach.

**Flight Strategy**: LAX is America's third-busiest airport with direct international connections from everywhere. Book 6-9 months out for best fares. Consider flying into Burbank (BUR) for Hollywood-area stays or Long Beach (LGB) for South Bay access—both smaller airports with less chaos.

**Hotel Bundles**: Many travel booking platforms offer flight+hotel packages that save 10-20% versus separate bookings. Look for deals that include Metro passes or airport transfers.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Search" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLASearch" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="11" cy="11" r="5" fill="url(#gradLASearch)" />
                  <rect x="15" y="15" width="5" height="2" rx="1" transform="rotate(45 17.5 16)" fill="#0ea5e9" />
                </svg>
                Where to Hunt Deals
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Comparison Sites**: Start with the usual suspects (Booking.com, Expedia, Hotels.com) but cross-reference prices directly on hotel websites—sometimes they beat third-party rates or include perks like breakfast or parking.

**Alternative Accommodation**: Airbnb and VRBO offer apartments and homes, especially valuable for groups splitting costs. Filter by neighborhoods: West Hollywood, Culver City, and neighborhoods near Metro stations for convenience.

**Loyalty Programs**: If you're already deep in hotel points ecosystems (Marriott, Hilton, IHG), LA has robust properties in every loyalty chain. Redeem those points for championship matches.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-premium-md flex items-center justify-center">
                  <i className="ri-medal-line text-emerald-600" aria-hidden="true"></i>
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">The Affiliate Advantage</h5>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`Smart travelers use price comparison tools that scan hundreds of booking sites simultaneously. You're already planning an expensive trip—why not save hundreds on accommodation by letting technology find the best rates? Many booking platforms offer:

- **Price match guarantees**: Find it cheaper elsewhere? They'll match or refund the difference
- **Member-only discounts**: Sign up for booking sites' free loyalty programs for instant 10% off
- **Bundled savings**: Flight+hotel packages, match ticket + accommodation deals (when FIFA releases official packages)
- **Flexible cancellation**: World Cup plans change—book now with free cancellation options to lock rates

Check trusted booking partners that specialize in major sporting events—they often negotiate group rates and exclusive access to sold-out properties.`)}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Your Los Angeles World Cup Story Starts Here */}
        <article className="editorial-body theme-gold">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
              <use href="#gradLACrown" />
              <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradLACrown)" />
            </svg>
            Your Los Angeles World Cup Story Starts Here
          </h3>
          <div className="unforgettable-conclusion p-6 sm:p-8">
            <div className="conclusion-content">
              <div className="conclusion-icon">
                <svg className="h4-icon-svg" role="img" aria-label="Flag" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAFlag" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M5 5 v14" stroke="#0ea5e9" strokeWidth="2" />
                  <path d="M7 6 h10 l-2 3 l2 3 h-10z" fill="url(#gradLAFlag)" />
                </svg>
              </div>
              <div className="conclusion-text space-y-4">
                <p className="text-premium-body">
                Twenty years ago, the Rose Bowl hosted the last World Cup final on American soil. Now it's SoFi's turn to write history, starting with the U.S. opening match that'll send seismic hope through every American football fan. Eight matches. Thirty-nine days of festival atmosphere. A city that's hosted Olympics, Super Bowls, and Beyoncé residencies—finally getting its moment on soccer's biggest stage.
                </p>
                <p className="text-premium-body">
              Los Angeles doesn't do anything small. The beaches stretch forever, the food scene never sleeps, the culture mixes in ways you won't find anywhere else. This isn't just a World Cup host city; it's the city where dreams get chased under palm trees and championship runs begin with that first nervous kick on June 12.
                </p>
                <p className="text-premium-body">
              The Metro's running. The stadiums are ready. The tacos are waiting. And somewhere in West Hollywood, Silver Lake, or a beach parking lot in Santa Monica, fans from 48 nations are about to discover what locals already know: Los Angeles is the world's city, and in summer 2026, the world's game comes home.
                </p>
              </div>
            </div>
            <div className="conclusion-highlight mt-4">
              <p className="text-premium-body font-semibold text-center">
                <strong>Book smart. Travel Metro. Arrive early. And when that first whistle blows at SoFi Stadium, you'll know exactly why LA was built for this moment.</strong>
              </p>
            </div>
            <div className="cta-content mt-4">
              <div className="cta-icon">
                <svg className="h4-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradLASun)" />
                  <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
                </svg>
              </div>
              <p className="text-premium-body italic flex items-start gap-2">
                <span className="text-premium-body"><strong>Pro Travel Tip:</strong> Download the LA Metro Trip Planner app, load your TAP card before arrival, and screenshot your FIFA mobile tickets—phone batteries die at the worst moments. See you at kickoff.</span>
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

      </main>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by StadiumPort Team</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
