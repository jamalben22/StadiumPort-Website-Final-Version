import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function GuadalajaraArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide';

  useEffect(() => {
    // Load saved state
    const saved = localStorage.getItem('stadiumport_saved_guides');
    if (saved) {
      const guides = JSON.parse(saved);
      setIsSaved(guides.includes(currentPath));
    }
    
    // Load rating
    const rating = localStorage.getItem(`stadiumport_rating_${currentPath}`);
    if (rating) {
      setUserRating(parseInt(rating));
      setHasRated(true);
    }
  }, []);

  const toggleSave = () => {
    const saved = localStorage.getItem('stadiumport_saved_guides');
    let guides = saved ? JSON.parse(saved) : [];
    if (isSaved) {
      guides = guides.filter((g: string) => g !== currentPath);
    } else {
      guides.push(currentPath);
    }
    localStorage.setItem('stadiumport_saved_guides', JSON.stringify(guides));
    setIsSaved(!isSaved);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem(`stadiumport_rating_${currentPath}`, rating.toString());
  };

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
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/guadalajara-world-cup-2026.webp'
    document.head.appendChild(link)
  }, [])
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pageUrl = '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','guadalajara')
    setPageMeta({
      title: 'Guadalajara World Cup 2026 – Estadio Akron & City Experience',
      description: 'Highlight Guadalajara’s cultural identity, artistic charm, and World Cup spirit around Estadio Akron in Mexico’s heartland.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/guadalajara-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Guadalajara', 'Estadio Akron', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Guadalajara World Cup 2026 – Estadio Akron & City Experience',
            'Highlight Guadalajara’s cultural identity, artistic charm, and World Cup spirit around Estadio Akron in Mexico’s heartland.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Guadalajara', 'Estadio Akron'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Guadalajara', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/guadalajara-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Guadalajara skyline – World Cup 2026 host city' }
          )
        ]}
      />

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
                        ? 'bg-[#01b47d]/5 dark:bg-[#008f63]/20 text-[#008f63] dark:text-[#01b47d] border border-[#01b47d]/20 dark:border-[#008f63]/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                    } ${level === 3 ? 'pl-6' : ''}`}
                  >
                    <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-[#01b47d]' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#01b47d]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tl from-[#01b47d]/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </nav>
      </aside>

      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#01b47d] to-[#01b47d] text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
                          ? 'bg-[#01b47d]/5 dark:bg-[#008f63]/20 text-[#008f63] dark:text-[#01b47d] border-l-4 border-[#01b47d]'
                          : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                      } ${level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-[#01b47d]' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                      <span className="text-sm font-medium text-black dark:text-slate-300">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Hero — World Class Redesign */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/cities/guadalajara-world-cup-2026.webp"
            alt="Guadalajara skyline – World Cup 2026 host city"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          {/* Sophisticated gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-90" />
        </div>

        {/* Content Container - Bottom aligned */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 z-10">
          <div className="max-w-5xl mx-auto w-full">
            {/* Breadcrumbs - Elegant & Minimal */}
            <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-[#01b47d]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <Link to="/world-cup-2026-host-cities" className="hover:text-white transition-colors duration-300">Host Cities</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Guadalajara</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Guadalajara World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Mexico</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>Estadio Akron</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>48,071 capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-[#01b47d]' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-[#01b47d]/20 ring-1 ring-[#01b47d]/50' : 'bg-white/5 group-hover/save:bg-[#01b47d]/20'}`}>
                  <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} text-lg`}></i>
                </div>
                <span className="font-medium">{isSaved ? 'Saved' : 'Save Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Premium editorial presentation aligned with NYC/LA */}
      <section id="main-content" className="editorial-article-premium dallas-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>4 matches</strong> including Mexico's second group match (June 18)</li>
               <li>• Venue: <strong>Estadio Akron</strong> (Zapopan)</li>
               <li>• Key Features: <strong>Mariachi, Tequila, Tortas Ahogadas</strong></li>
               <li>• Cultural Heart of Mexico: <strong>Jalisco</strong></li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d] dark:text-[#01b47d]"></i>Four Matches at the Volcano-Shaped Stadium
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Highlight Guadalajara’s cultural identity, artistic charm, and World Cup spirit around Estadio Akron in Mexico’s heartland.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>10 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p>
            Guadalajara is one of the{' '}
            <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">16 host cities</Link>{' '}
            for World Cup 2026. On June 11, 2026—the same night Mexico City hosts the World Cup's opening match—Guadalajara kicks off its own World Cup journey at{' '}
            <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Estadio Akron</Link>, one of Mexico's most architecturally striking football venues. This city that gave the world mariachi music, tequila, and the iconic tortas ahogadas will host four group stage matches, including Mexico's second match on June 18. Get ready for what locals promise will be the most passionate atmosphere of the entire tournament.
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-navy-800">
            <p className="font-semibold mb-2">🔗 Essential Guadalajara Links</p>
            <ul className="space-y-2">
              <li>
                🏟️ <span className="font-semibold">Stadium:</span>{' '}
                <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Estadio Akron Guide</Link>
              </li>
              <li>
                🗺️ <span className="font-semibold">All Host Cities:</span>{' '}
                <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </li>
              <li>
                ✈️ <span className="font-semibold">Nearby Cities:</span>{' '}
                <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</Link>
              </li>
            </ul>
          </div>
          <p>
            Estadio Akron holds 48,071 seats within a design that literally resembles a volcano, with a grassy exterior that blends into the landscape. Since opening in 2010, it's become home to Club Deportivo Guadalajara—Las Chivas—one of Mexico's most beloved football clubs and the only team in Liga MX that fields exclusively Mexican players. For World Cup 2026, FIFA will temporarily rename it "Estadio Guadalajara" under their corporate sponsorship policies, but locals will always call it Akron.
          </p>
          <p className="leading-relaxed mt-4">
            Guadalajara connects easily to{' '}
            <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>{' '}and{' '}
            <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Monterrey</Link>{' '}for a complete Mexican World Cup experience. Many international visitors combine Guadalajara with US cities like{' '}
            <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Los Angeles</Link>{' '}or{' '}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>{' '}to build a cross-border itinerary.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            The Pearl of the West Welcomes the World
          </h3>
          <p>
            Guadalajara isn't Mexico City's overwhelming sprawl or Cancún's beach resort energy—it's something different entirely. With a metro population just over five million, Mexico's second-largest city feels manageable, walkable, and genuinely welcoming. This is the cultural heart of Mexico, the place that birthed mariachi music in Plaza de los Mariachis, perfected tequila in nearby agave fields, and created the charreada (Mexican rodeo) that defines vaquero culture.
          </p>
          <p>
            The city wears its history proudly while embracing modernity. Walk through the historic center and you'll find stunning Spanish colonial architecture—the twin-towered Guadalajara Cathedral, Teatro Degollado, Hospicio Cabañas—then turn a corner into Colonia Americana where Art Nouveau mansions have been converted into hip coffee shops and boutique hotels. This balance between tradition and contemporary life makes Guadalajara uniquely charming.
          </p>
          <p>
            And here's what separates Guadalajara from other host cities: football isn't just popular here—it's tribal. The city hosts two fierce Liga MX rivals: Chivas playing at Estadio Akron and Atlas F.C. at the historic Estadio Jalisco (which hosted matches in both 1970 and 1986 World Cups). The Clásico Tapatío derby between these teams brings the entire city to a standstill. When Mexico plays at Estadio Akron on June 18, expect atmosphere that will make your hair stand up.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Getting to Estadio Akron: Plan Your Route
          </h3>
          <p>
            Estadio Akron sits in Zapopan, a suburb about 30 minutes west of Guadalajara Centro, depending on traffic. Here's your transportation breakdown:
          </p>
          <p>
            <strong>Rideshare (The Easiest Option)</strong>: Uber operates extensively throughout Guadalajara and remains the most reliable way to reach Estadio Akron. From downtown hotels to the stadium typically costs 120-180 pesos (approximately $7-10 USD). On match days, expect surge pricing and heavy traffic—leave at least 90 minutes before kickoff.
          </p>
          <p>
            <strong>Public Transportation</strong>: Reaching the stadium via public transit takes 60-90 minutes and usually requires at least one transfer. While doable, it's not the most efficient option, especially after evening matches when you're navigating unfamiliar routes in the dark.
          </p>
          <p>
            <strong>Match Day Shuttles</strong>: FIFA and local organizers will likely implement shuttle services from central pickup points near major hotels and plazas. These haven't been officially confirmed yet, but stay updated through guadalajarafwc26.com as the tournament approaches. If shuttles materialize, they'll probably be your best bet—especially for avoiding traffic and parking headaches.
          </p>
          <p>
            <strong>Pro tip</strong>: If staying near Colonia Americana or Centro Histórico, consider organizing rideshare carpools with other fans heading to the match. Split costs, reduce traffic congestion, and build pre-game energy together.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Where to Stay: Finding Your Guadalajara Base
          </h3>
          <p>
            Guadalajara's accommodation scene balances historic charm with modern comfort, and location dramatically impacts your experience. Here's the insider breakdown:
          </p>
          <p>
            <strong>Colonia Americana (The Perfect Tournament Base)</strong>: This tree-lined neighborhood is Guadalajara's Brooklyn—hip, walkable, and packed with excellent restaurants and bars. Avenida Chapultepec serves as the main artery, closing to car traffic on weekends for pedestrian markets, live music, and outdoor dining.
          </p>
          <p>
            Villa Ganz is cataloged as Guadalajara's first boutique hotel, operating for over 30 years with just 10 rooms in a restored mansion. The location in Lafayette (adjacent to Colonia Americana) puts you blocks from Gallo Altanero—a "World's Best Bars" winner—and endless dining options. La Perla Hotel Boutique B&B occupies a vintage home with two-foot-thick adobe walls, hundred-year-old Moorish mosaic floors, and nightly rooftop margaritas that have become legendary among repeat visitors.
          </p>
          <p>
            Bellwort Hotel brought 44 modernist rooms to Avenida Unión in 2021 after a complete renovation of a 1967 apartment building. The second-floor heated pool, convenient gym, and walkability to surrounding restaurants make it ideal for World Cup travelers who want contemporary comfort in an authentic neighborhood.
          </p>
          <p>
            <strong>Centro Histórico (Historic Heart)</strong>: DoubleTree by Hilton Guadalajara Centro Historico occupies a beautifully preserved historic building 0.8 miles from Colonia Americana, offering family-friendly amenities and that signature DoubleTree welcome cookie. Hotel Morales Historical & Colonial Downtown Core blends boutique charm with colonial architecture, featuring free cribs and on-site childcare for families.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Zapopan (Closest to the Stadium)
          </h3>
          <p>
            Hyatt Regency Guadalajara sits in upscale Zapopan near Andares Shopping Center—Guadalajara's most exclusive retail destination. If you plan to take the tequila tour in Santiago de Tequila, return here to sip craft cocktails at the hotel pool. Several business-style properties near Estadio Akron offer convenience for match days but less atmosphere for exploring authentic Guadalajara culture.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-bank-card-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Budget-Conscious Options
          </h3>
          <p>
            Hotel Isabel in Colonia Americana provides clean, cheap accommodation with a pool and communal barbecue areas—perfect for meeting fellow travelers. The building feels more like an apartment complex than a traditional hotel, creating that social hostel vibe without sacrificing privacy.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <p>
            <strong>Book immediately</strong>. Guadalajara expects massive World Cup demand, and the city's best properties fill fast during major events. June 2026 reservations opened months ago—waiting means settling for less desirable neighborhoods or inflated prices.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-cloud-rain-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            June Weather: What to Expect
          </h3>
          <p>
            Daytime highs typically reach 30-32°C (86-90°F) in Guadalajara during June, falling to 16-18°C (61-64°F) at night—warm overall but that altitude (1,566 meters above sea level) creates surprisingly comfortable evenings. The challenge? June marks the rainy season's beginning, fundamentally changing the weather equation.
          </p>
          <p>
            Expect 14-23 rainy days throughout June with total monthly precipitation reaching 111-193mm. Rain typically arrives as afternoon or evening thunderstorms rather than all-day downpours, but count on getting wet at some point during your stay. There are normally 7 hours of bright sunshine each day despite the clouds and rain.
          </p>
          <p>
            <strong>Pack strategically</strong>: Lightweight, breathable clothing (cotton or linen) for daytime heat, compact rain jacket or umbrella (non-negotiable), comfortable walking shoes that handle wet streets, light sweater for evening matches and air-conditioned restaurants, sunscreen and sunglasses—UV exposure remains intense despite cloud cover, and a hat for sun protection during afternoon exploration.
          </p>
          <p>
            The heat index can feel 8°C (15°F) hotter than actual temperature due to humidity reaching 60-63% in June. Stay hydrated, seek shade during midday heat (10 AM-4 PM), and embrace the siesta culture—restaurants and shops often close for a few hours in early afternoon.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Beyond Football: The Real Guadalajara Experience
          </h3>
          <p>
            If you're flying to Guadalajara just for a match and leaving immediately, you're committing a travel crime. This city rewards exploration.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Tequila Town (The Pilgrimage Every Fan Must Make)
          </h3>
          <p>
            About 65 kilometers northwest of Guadalajara sits Tequila, the UNESCO World Heritage town where Mexico's most famous spirit was born. The entire landscape—endless blue agave fields stretching across volcanic soil—earned UNESCO protection in 2006 as an "outstanding example of cultural landscape."
          </p>
          <p>
            Tour options range from quick distillery visits to full-day experiences. Casa Sauza, Jose Cuervo, and dozens of smaller craft distilleries offer tastings and tours explaining how agave plants (taking 7-10 years to mature) become tequila through traditional or modern production methods. The best tours include agave field walks, jimador demonstrations (watching skilled workers harvest agave with coas), barrel room visits, and multi-tequila tastings comparing blanco, reposado, añejo, and extra añejo expressions.
          </p>
          <p>
            The Tequila Express tourist train departs Guadalajara on weekends, offering all-inclusive experiences with live mariachi, meals, and distillery visits. Alternatively, hire a private driver or join organized tours departing daily from Guadalajara hotels.
          </p>
          <p>
            <strong>Pro tip</strong>: Sample the local drink "cantarito"—a refreshing mix of tequila, orange juice, grapefruit soda, and lime served in traditional clay cups. It's lighter than straight tequila and perfect for hot June afternoons.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-government-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Historic Guadalajara: Architecture and Culture
          </h3>
          <p>
            Plaza de Armas anchors the historic center, surrounded by the stunning Guadalajara Cathedral with its iconic twin neo-Gothic towers covered in yellow tiles. Built between 1558 and 1618, the cathedral represents over a century of architectural evolution blending Gothic, Baroque, Moorish, and Neoclassical elements.
          </p>
          <p>
            Teatro Degollado, built between 1856 and 1866, hosts opera, ballet, and the Jalisco Philharmonic Orchestra. The neoclassical façade features a relief depicting Apollo surrounded by the nine muses. Inside, the ceiling mural pays homage to Dante's Divine Comedy. Check the performance schedule—catching a show here adds cultural depth to your World Cup journey.
          </p>
          <p>
            Hospicio Cabañas, now Instituto Cultural Cabañas, achieved UNESCO World Heritage status in 1997 as one of the oldest and largest orphanage-hospital complexes in the Americas. The interior chapel ceiling features murals by José Clemente Orozco, considered among Mexico's finest artistic treasures. The Man of Fire fresco alone justifies the visit.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ancient-gate-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Tlaquepaque and Tonalá: Artisan Heaven
          </h3>
          <p>
            Just southeast of central Guadalajara, these colonial towns showcase traditional Mexican crafts—pottery, blown glass, textiles, and folk art. Tlaquepaque's pedestrian-friendly streets feature over 300 shops and galleries alongside colorful colonial architecture and the beautiful Parroquia de San Pedro Apóstol church.
          </p>
          <p>
            Sunday mornings at Tonalá's street market transform the town into Mexico's largest artisan market, with hundreds of vendors selling everything from clay pots to intricate sculptures. Arrive early (before 10 AM) for best selection and cooler temperatures.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Plaza de las 9 Esquinas: Birria Central
          </h3>
          <p>
            This plaza has become legendary for birria—the slow-cooked goat stew that defines Jalisco cuisine. Several restaurants surround the plaza, each claiming the best recipe. Order a cazuela (large bowl) with your choice of meat cuts, accompanied by fresh handmade tortillas, onions, cilantro, and lime. The rich, spicy broth warms the soul, and the tender meat practically melts.
          </p>
          <p>
            Las 9 Esquinas operates as a communal dining experience—expect to share tables, eat with locals, and possibly have mariachi bands serenade your table for tips. This is Guadalajara at its most authentic.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Eating Your Way Through Guadalajara
          </h3>
          <p>
            Forget what you think you know about Mexican food—Guadalajara operates on its own delicious wavelength.
          </p>
          <p>
            <strong>Tortas Ahogadas (The Sandwich That Defines a City)</strong>: Literally "drowned sandwich," this is Guadalajara's signature dish. A birote salado (special crusty sourdough roll) is stuffed with carnitas (typically pork loin, though adventurous eaters request surtido—all the meats including pork belly, stomach, and crispy skin), then completely submerged in a spicy tomato-chile de árbol sauce. The bread's crusty exterior withstands the drowning, maintaining texture while absorbing flavor.
          </p>
          <p>
            Locals insist tortas ahogadas can only be made in Guadalajara because of elevation, water quality, and local yeast strains—making birote salado impossible to replicate elsewhere. Truth or legend? Doesn't matter when you're eating one.
          </p>
          <p>
            Tortas Toño dominates the torta ahogada scene with multiple locations across Guadalajara. The Providencia and Chapalita restaurants stay packed with locals who've been eating here for decades. Prices run 59-70 pesos ($3-4 USD) depending whether you order classic pork or the shrimp version. El Viejito and Tortas Ahogadas Clement's also earn local praise, with Clement's pork belly variation selling out fast on busy weekends.
          </p>
          <p>
            <strong>Birria (The Stew You'll Dream About)</strong>: This slow-cooked goat stew marinated in chilies, garlic, and spices creates a rich, aromatic broth with impossibly tender meat. Traditional birria requires hours of preparation, resulting in deep flavors that reward patient cooking.
          </p>
          <p>
            La Victoria has been perfecting birria since 1948, earning endorsements from local celebrity chefs including Paco Ruano (of Alcalde restaurant). Featured on "Las Crónicas del Taco," this birreria represents old Guadalajara—walls covered with historic newspaper clippings, family recipes passed through generations, and locals who've eaten here their entire lives. Order a mixed bowl to sample different cuts, from spine and ribs to leaner loin.
          </p>
          <p>
            Birriería "David" inside Mercado Alcalde operates the same stall for over 50 years. Locals line up before 10 AM opening time because the best cuts sell out fast. The veal birria here earns devoted fans who return weekly.
          </p>
          <p>
            <strong>Fine Dining Excellence</strong>: Alcalde, ranked #12 in Latin America's 50 Best Restaurants 2023, showcases Chef Francisco "Paco" Ruano's "cocina franca"—traditional Mexican ingredients with precise European-style plating. Having worked at Mugaritz and Noma before opening Alcalde in 2013, Ruano brings world-class credentials to contemporary Mexican cuisine. The tasting menu changes quarterly and runs approximately 3,700 pesos ($185 USD) per person. Reserve at least two weeks ahead.
          </p>
          <p>
            Xokol in the Santa Tere neighborhood offers cutting-edge cuisine from chef team Xrysw Ruelas and Oscar Segundo. The vibrant open kitchen and communal dining table create intimate atmosphere where innovation meets tradition. Expect surprising flavor combinations using local Jalisco ingredients prepared with modern techniques.
          </p>
          <p>
            <strong>Carne en su Jugo (Comfort in a Bowl)</strong>: This hearty dish combines beef, beans, bacon, and a rich, smoky broth—pure comfort food that Guadalajara locals swear their grandmother makes best. The Santa Teresita neighborhood concentrates several excellent options for sampling this regional specialty.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Getting Around Like a Tapatío (Guadalajara Local)
          </h3>
          <p>
            Guadalajara's Peribús (bus rapid transit) and conventional bus network operate extensively, but navigation can challenge first-time visitors. Uber and local taxis provide more straightforward options for tourists on limited time.
          </p>
          <p>
            <strong>Uber</strong>: Widely available, safe, and affordable. Downtown to Zapopan typically costs 80-150 pesos. Use Uber for stadium trips, restaurant hopping, and reaching attractions outside walking distance.
          </p>
          <p>
            <strong>Walking</strong>: Colonia Americana, Centro Histórico, and nearby neighborhoods reward pedestrian exploration. Avenida Chapultepec closes to vehicles on weekends, creating perfect conditions for strolling between cafes, bars, and shops.
          </p>
          <p>
            <strong>Bike Shares</strong>: MiBici bike-sharing system operates throughout central Guadalajara with stations near major attractions. Download the app, register, and explore on two wheels. Sunday street closures on Avenida Chapultepec create ideal cycling conditions.
          </p>
          <p>
            <strong>Airport to City</strong>: Miguel Hidalgo y Costilla International Airport (GDL) sits about 17 kilometers south of downtown. Uber from airport to Centro or Colonia Americana costs 180-280 pesos (approximately $10-15 USD) and takes 25-40 minutes depending on traffic. Official airport taxis cost slightly more but provide fixed rates.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Practical Guadalajara Intelligence
          </h3>
          <p>
            <strong>Language</strong>: Spanish dominates, though tourist-facing businesses employ English speakers. Learning basic phrases (buenos días, por favor, gracias, la cuenta) improves interactions and shows respect.
          </p>
          <p>
            <strong>Currency & Tipping</strong>: Mexican pesos (MXN) are the currency. Credit cards work at hotels, established restaurants, and shops, but carry cash for street food, markets, and smaller establishments. Tipping: 10-15% at casual restaurants, 15-20% at upscale dining, 20-50 pesos per day for hotel housekeeping, 10-20 pesos per drink at bars.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Safety
          </h3>
          <p>
            Guadalajara ranks among Mexico's safer large cities for tourists. Centro Histórico, Colonia Americana, Zapopan, and Tlaquepaque remain safe day and night with normal urban awareness. Avoid displaying expensive jewelry or electronics, keep phones secured in crowded areas, use official taxis or Uber rather than street taxis, and don't accept drinks from strangers.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-water-flash-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Drinking Water
          </h3>
          <p>
            Tap water isn't safe for drinking—stick with bottled water widely available everywhere. Most restaurants and hotels provide complimentary bottled water.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-night-clear-line text-fuchsia-400 dark:text-fuchsia-300 text-3xl"></i>
            Nightlife
          </h3>
          <p>
            Guadalajara's bar scene concentrates in Colonia Americana along Avenida Chapultepec. Gallo Altanero earned recognition among "World's Best Bars" for innovative cocktails and vibrant atmosphere. Bars typically stay open until 2-3 AM on weekends, with some clubs operating until dawn.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-yellow-400 dark:text-yellow-300 text-3xl"></i>
            Fan Festival & World Cup Atmosphere
          </h3>
          <p>
            Plaza Liberación in Guadalajara's Historic Center will host the official FIFA Fan Festival, offering interactive activities, live match broadcasts, and free limited-access celebrations throughout the tournament. This becomes the gathering point for fans without match tickets, creating festival atmosphere with food vendors, entertainment, and massive screens.
          </p>
          <p>
            FIFA ticket sales continue through FIFA.com/tickets, with additional release phases closer to the tournament. Register even if you missed early sales—returns and last-minute availability appear regularly.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-road-map-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Plan Your Mexico World Cup Adventure
          </h3>
          <p>
            Guadalajara is the heart of traditional Mexican culture and the perfect base for exploring all three Mexican host cities and connecting to US destinations.
          </p>
          <p className="mt-4"><strong>Popular Combinations:</strong></p>
          <p className="mt-2">
            <strong>Complete Mexico Circuit</strong>{' '}Experience the full Mexican World Cup: Start in Guadalajara (current) for mariachi and tequila culture, head to{' '}
            <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>{' '}for history and metropolitan energy, then continue to{' '}
            <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Monterrey</Link>{' '}for mountain landscapes and modern Mexican innovation.
          </p>
          <p className="mt-2">
            <strong>Pacific Connection</strong>{' '}Combine Guadalajara with West Coast US cities like{' '}
            <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Los Angeles</Link>{' '}or{' '}
            <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">San Francisco Bay Area</Link>{' '}for an easy Pacific-focused World Cup tour with cultural diversity.
          </p>
          <p className="mt-2">
            <strong>Border to Capital</strong>{' '}Create a cross-border adventure: Start in US cities like{' '}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>{' '}or{' '}
            <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link>, cross into Mexico at{' '}
            <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Monterrey</Link>, then travel to Guadalajara (current) and{' '}
            <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>{' '}for a complete North American experience.
          </p>
          <p className="mt-4">
            <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Why Guadalajara Deserves Extra Days
          </h3>
          <p>
            Here's what most World Cup guides won't tell you: Guadalajara isn't just affordable compared to other host cities—it's authentically Mexican in ways that tourist-heavy destinations have lost. This city hasn't been sanitized for international visitors. You'll eat where locals eat, drink where locals drink, and experience Mexican culture that hasn't been packaged for export.
          </p>
          <p>
            The World Cup gives you permission to visit; the city gives you reasons to extend your stay. Arrive three days before your match. Take that tequila tour to Santiago. Eat tortas ahogadas at three different places to pick your favorite. Watch sunset from Teatro Degollado's steps while mariachi groups tune instruments. Shop for pottery in Tlaquepaque. Try birria at Las 9 Esquinas. Dance in Colonia Americana bars until 3 AM. Walk through Mercado San Juan de Dios—one of Latin America's largest indoor markets.
          </p>
          <p>
            Because June 11, 18, 23, and 26 bring World Cup matches to Estadio Akron, but Guadalajara offers experiences that outlast any 90-minute match. This is Mexico's cultural soul, the place where traditions aren't performed for tourists—they're simply how people live.
          </p>
          <p>
            Book your Guadalajara journey now. The matches. The mariachi. The tequila. The tortas ahogadas that will haunt your dreams. This is where Mexico's heart beats loudest—make sure you feel it.
          </p>
        </article>

        
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-space">Rate this Guide</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">How helpful was this guide for your World Cup planning?</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <button
                    key={star}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} stars`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRate(star)}
                  >
                    <i className={`text-3xl ${ (hoverRating || userRating) >= star ? 'ri-star-fill text-amber-400' : 'ri-star-fill text-slate-300 dark:text-slate-600' } transition-colors duration-200`}></i>
                  </button>
                ))}
              </div>
              {hasRated && (
                <div className="transition-all duration-500 opacity-100 translate-y-0">
                  <p className="text-[#01b47d] dark:text-[#01b47d] font-medium"><i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!</p>
                </div>
              )}
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
              <Link to="/world-cup-2026-host-cities" className="text-[#01b47d] dark:text-[#01b47d] hover:text-[#008f63] font-medium flex items-center gap-1 group">View all cities <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]" href="/world-cup-2026-host-cities/houston-world-cup-2026-guide" data-discover="true">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/images/cities/houston-world-cup-2026.webp" alt="Houston World Cup Guide" loading="lazy" decoding="async" width="600" height="400" srcSet="/images/cities/houston-world-cup-2026-640.webp 640w, /images/cities/houston-world-cup-2026-1024.webp 1024w, /images/cities/houston-world-cup-2026-1600.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Texas Neighbor</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Houston</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">Complete guide to NRG Stadium and Space City's World Cup events.</p>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]" href="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" data-discover="true">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/images/cities/los-angeles-world-cup-2026.webp" alt="Los Angeles World Cup Guide" loading="lazy" decoding="async" width="600" height="400" srcSet="/images/cities/los-angeles-world-cup-2026-640.webp 640w, /images/cities/los-angeles-world-cup-2026-1024.webp 1024w, /images/cities/los-angeles-world-cup-2026-1600.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Entertainment Hub</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Los Angeles</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">SoFi Stadium guide and Hollywood entertainment for fans.</p>
                </div>
              </a>
            </div>
          </div>

          <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
                <div className="flex items-center gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=Guadalajara%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group" aria-label="Share on X">
                    <i className="ri-twitter-x-line text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${pageUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#1877F2] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group" aria-label="Share on Facebook">
                    <i className="ri-facebook-circle-fill text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <button onClick={() => navigator.clipboard.writeText(`${siteUrl}${pageUrl}`)} className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#008f63] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group" aria-label="Copy Link">
                    <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                  </button>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#01b47d] dark:text-[#01b47d]"><i className="ri-shield-check-fill text-xl"></i></div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Verified & Updated</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">November 30, 2025</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </section>
      
      <Footer />
    </div>
  );
}
