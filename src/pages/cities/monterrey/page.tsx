import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema, generateStadiumSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function MonterreyArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide';

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
    link.href = '/images/cities/monterrey-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','monterrey')
    setPageMeta({
      title: 'Monterrey World Cup 2026 – Estadio BBVA & City Travel Guide',
      description: 'Highlight Monterrey’s modern skyline, mountain backdrop, and Estadio BBVA’s world-class architecture hosting FIFA World Cup 2026 matches.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/monterrey-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Monterrey', 'Estadio BBVA', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Monterrey World Cup 2026 – Estadio BBVA & City Travel Guide',
            'Highlight Monterrey’s modern skyline, mountain backdrop, and Estadio BBVA’s world-class architecture hosting FIFA World Cup 2026 matches.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Monterrey', 'Estadio BBVA'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Monterrey', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/monterrey-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Monterrey skyline – World Cup 2026' }
          ),
          generateStadiumSchema(
            'Estadio BBVA',
            'Monterrey',
            53500,
            'State-of-the-art steel-and-glass arena with mountain backdrop hosting FIFA World Cup 2026 matches.'
          ),
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
            src="/images/cities/monterrey-world-cup-2026.webp"
            alt="Monterrey skyline – World Cup 2026"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Monterrey</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Monterrey World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
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
                <span>Estadio BBVA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>53,500 capacity</span>
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
               <li>• <strong>4 matches</strong> confirmed for Monterrey</li>
               <li>• Venue: <strong>Estadio BBVA</strong> (The Steel Giant)</li>
               <li>• Key Features: <strong>Cerro de la Silla, Carne Asada, Modernity</strong></li>
               <li>• Region: <strong>Nuevo León</strong> (Northeast Mexico)</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d] dark:text-[#01b47d]"></i>Modern Ambition Meets Raw Passion
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Highlight Monterrey’s modern skyline, mountain backdrop, and Estadio BBVA’s world-class architecture hosting FIFA World Cup 2026 matches.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>12 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p>
              When the 2026 FIFA World Cup kicks off, Monterrey will welcome the world to one of Mexico's most dynamic cities—where modern ambition meets raw football passion against a backdrop of jagged mountains. Monterrey is one of the{' '}
              <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">16 host cities</Link>{' '}for World Cup 2026. This industrial powerhouse in northeastern Mexico isn't just hosting four World Cup matches; it's ready to show international fans why it claims the most loyal football crowds in the country.
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-navy-800">
            <p className="font-semibold mb-2">🔗 Essential Monterrey Links</p>
            <ul className="space-y-2">
              <li>
                🏟️ <span className="font-semibold">Stadium:</span>{' '}
                <Link to="/world-cup-2026-stadiums/estadio-bbva-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Estadio BBVA Guide</Link>
              </li>
              <li>
                🗺️ <span className="font-semibold">All Host Cities:</span>{' '}
                <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </li>
              <li>
                ✈️ <span className="font-semibold">Nearby Cities:</span>{' '}
                <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Dallas</Link>
              </li>
            </ul>
          </div>
          <p>
              Nestled in the Santa Catarina Valley and framed by the iconic Cerro de la Silla mountain, Monterrey is Mexico's third-largest city and its wealthiest metropolitan area. But strip away the glass skyscrapers and you'll find a city that bleeds blue and white for C.F. Monterrey Rayados—a club that's sold out stadiums for decades and turned match day into a cultural phenomenon.
          </p>
          <p className="leading-relaxed mt-4">
              Combine with{' '}
              <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>{' '}and{' '}
              <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Guadalajara</Link>{' '}for a complete Mexican experience—culture in Guadalajara, the capital’s energy in Mexico City, and mountain-backed modernity in Monterrey.
          </p>
          <p>
              If you're planning to catch a World Cup match in Monterrey, you're in for something special. This isn't a tourist resort; it's a real Mexican city with serious football heritage, incredible carne asada, and a stadium that rivals anything in North America.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            The Stadium: <Link to="/world-cup-2026-stadiums/estadio-bbva-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Estadio BBVA</Link> – Where Steel Meets Football
          </h3>
          <p><strong>Official World Cup Name:</strong> Estadio Monterrey</p>
          <p><strong>Actual Name:</strong> Estadio BBVA (nicknamed "El Gigante de Acero" – The Steel Giant)</p>
          <p><strong>Capacity:</strong> 53,500 (one of the largest in Mexico)</p>
          <p><strong>Location:</strong> Guadalupe suburb, part of the Monterrey metropolitan area</p>
          <p><strong>World Cup Matches:</strong> Four confirmed matches</p>

          <p>
              Estadio BBVA opened in 2015 and immediately set a new standard for football venues in Latin America. Designed by international firm Populous, the stadium's metallic facade pays homage to Monterrey's steel manufacturing heritage, while its curved aluminum sheets evoke the beer vats the city is famous for producing.
          </p>
          <p>
              But here's what matters for traveling fans: the sightlines are phenomenal. Every seat in the house offers unobstructed views of the pitch, and the steep rake of seating creates an intimidating cauldron of noise when the crowd gets behind their team. The compact design and curved roof amplify sound, making match atmosphere absolutely electric—something Rayados supporters have been exploiting since day one.
          </p>
          <p>
              The stadium sits against the Sierra Madre Oriental mountains, offering one of the most photogenic backdrops in world football. On a clear day, the view from the stands includes the distinctive saddle-shaped Cerro de la Silla mountain that defines Monterrey's skyline.
          </p>
          <p>
              For the 2026 World Cup, the stadium will feature upgraded pitch technology including an underground ventilation system to maintain grass quality despite Monterrey's summer heat. FIFA has confirmed four matches here: three Group Stage encounters and one Round of 32 match scheduled across June 14, 20, 24, and 29, 2026.
          </p>
          <p>
              <Link to="/world-cup-2026-stadiums/estadio-bbva-guide" className="inline-flex items-center text-[#01b47d] dark:text-[#01b47d] font-semibold">
                <i className="ri-external-link-line mr-2"></i>
                Explore the detailed Estadio BBVA stadium guide
              </Link>
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Getting to the Stadium
          </h3>
          <p>
              Estadio BBVA is located in Guadalupe, roughly 15 minutes east of downtown Monterrey. Here's how to get there:
          </p>
          <p>
              <strong>By Metro:</strong> Take Metrorrey Line 1 to Estación Lerdo de Tejada, then walk about nine minutes to the stadium entrance. The Metrorrey is modern, air-conditioned, and runs from approximately 5:00 AM to midnight. Fares are affordable at around 15 MXN with integrated TransMetro bus transfers.
          </p>
          <p>
              <strong>By Bus:</strong> Several bus routes service the stadium area, including routes 214, 223, TME, and 093. The closest stop is Pablo Livas (Estadio B.B.V.A.), just four minutes from the gates. Buses run later than the metro, with some routes operating until after 1:00 AM—perfect for evening matches.
          </p>
          <p>
              <strong>By Rideshare:</strong> Uber operates widely in Monterrey and will drop you near the stadium gates. Expect surge pricing on match days, but it's still convenient if you're traveling in a group or from farther neighborhoods like San Pedro.
          </p>
          <p>
              <strong>By Car:</strong> Parking is available adjacent to the stadium, though spaces fill quickly for major matches. If you're driving, arrive early—especially for World Cup games when traffic will be intense.
          </p>
          <p>
              <strong>Pro Tip:</strong> FIFA typically operates dedicated shuttle services from city center and official Fan Fest locations during major tournaments. Watch for official announcements closer to the matches.
          </p>
          <p>
              Regional planning: Monterrey is closest to Texas cities like{' '}
              <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>{' '}and{' '}
              <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link>, making cross-border itineraries straightforward.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Where to Stay: Neighborhoods That Put You in the Action
          </h3>
          <p>
              Monterrey's accommodation landscape ranges from luxury high-rises in affluent San Pedro to budget-friendly spots in Centro. Here's where to base yourself depending on your travel style.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Centro/Monterrey Centro – For Culture Vultures and Budget Travelers
          </h3>
          <p>
              Downtown Monterrey puts you in the heart of the action. This is where you'll find the massive Macroplaza (one of the world's largest public squares), the Metropolitan Cathedral, and walkable access to museums, bars, and authentic taquerías. The neighborhood mixes colonial architecture with modern developments, and it's well-connected by metro.
          </p>
          <p>
              <strong>Why Stay Here:</strong> Central location, cultural attractions within walking distance, excellent public transport links, affordable hotels and hostels
          </p>
          <p>
              <strong>Match Day Access:</strong> Direct metro access to stadium via Line 1
          </p>
          <p>
              <strong>Book Through:</strong> Search hotels in "Monterrey Centro" on <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="underline">Booking.com</a>, <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="underline">Hotels.com</a>, or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="underline">Expedia</a> to compare prices and find deals on properties near Macroplaza
          </p>
          <p>
              <strong>Vibe Check:</strong> Urban and bustling during the day; some areas get quieter at night. Stick to well-populated streets after dark.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            San Pedro Garza García – For Luxury and Safety
          </h3>
          <p>
              If budget isn't a concern, San Pedro is Monterrey's most upscale district. This affluent area southwest of central Monterrey is home to luxury hotels, high-end shopping centers (including Fashion Drive and Paseo San Pedro), gourmet restaurants, and a vibrant nightlife scene. It's consistently rated one of Mexico's safest areas.
          </p>
          <p>
              <strong>Why Stay Here:</strong> Premium accommodations, top dining options, proximity to Chipinque Ecological Park, sophisticated atmosphere
          </p>
          <p>
              <strong>Match Day Access:</strong> About 20-30 minutes to stadium by car/Uber; public transport requires transfers
          </p>
          <p>
              <strong>Book Through:</strong> Filter for "San Pedro Garza García" on Hotels.com or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="underline">Expedia</a>; look for properties near Fashion Drive for walkability
          </p>
          <p>
              <strong>Vibe Check:</strong> Polished, modern, and safe—but you're paying for the experience. Perfect for travelers who want resort-style comfort in an urban setting.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Barrio Antiguo – For Nightlife and Character
          </h3>
          <p>
              Want to stay where Monterrey's history comes alive? Barrio Antiguo (Old Quarter) features cobblestone streets, colorful colonial buildings, and the city's best nightlife. Converted historic houses now host bars, microbreweries, and clubs, making this the place to be on match nights. It's adjacent to Centro and walking distance to major attractions.
          </p>
          <p>
              <strong>Why Stay Here:</strong> Historic charm, buzzing nightlife, boutique hotel options, walking distance to cultural sites
          </p>
          <p>
              <strong>Match Day Access:</strong> Short walk to metro stations on Line 1
          </p>
          <p>
              <strong>Book Through:</strong> Look for boutique hotels and Airbnb apartments in "Barrio Antiguo" – unique properties in restored colonial buildings are the draw here
          </p>
          <p>
              <strong>Vibe Check:</strong> Bohemian and lively, especially Thursday through Sunday nights. Popular with younger crowds and soccer fans celebrating after matches.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-leaf-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Near Fundidora Park – For Families and Convenience
          </h3>
          <p>
              Fundidora Park is a massive former steel mill complex transformed into one of Monterrey's premier urban parks—and it's the official FIFA Fan Fest location for 2026. Hotels near the park offer easy access to both the Fan Fest and the stadium, plus family-friendly attractions within the park itself.
          </p>
          <p>
              <strong>Why Stay Here:</strong> Proximity to Fan Fest, family attractions, green space, convenient stadium access
          </p>
          <p>
              <strong>Match Day Access:</strong> Excellent—short metro ride or FIFA shuttle to stadium
          </p>
          <p>
              <strong>Book Through:</strong> Search "Parque Fundidora hotels" on <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="underline">Booking.com</a> or check <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/monterrey/mtyfd/hoteldetail" target="_blank" rel="noopener noreferrer" className="underline">IHG properties (Holiday Inn Express Monterrey - Fundidora)</a>
          </p>
          <p>
              <strong>Vibe Check:</strong> Mix of business and leisure travelers; great for families wanting a bit of everything.
          </p>
          <p>
              <strong>Smart Booking Strategy:</strong> Prices will surge for World Cup dates. Book early through sites like <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="underline">Booking.com</a> (flexible cancellation policies), compare rates on Kayak or Google Hotels, or consider vacation rentals via Airbnb for group travel. Many hotels offer free airport shuttles—confirm when booking.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Getting Around Monterrey: Navigate Like a Local
          </h3>
          <p>
              Monterrey's public transportation is modern and expanding, making it easy to explore without renting a car.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Metrorrey (Metro System)</h4>
          <p>
              Monterrey's metro consists of three lines (Line 1, Line 2, and Line 3) covering 40 stations across 40 kilometers. It's the fastest way to cross the city during rush hours. Trains are clean, air-conditioned, and reliable.
          </p>
          <p><strong>Key Routes for Fans:</strong></p>
          <p>- Line 1 connects downtown (Exposición station near Fundidora Park) to the stadium area (Lerdo de Tejada)</p>
          <p>- Tickets cost around 15 MXN and can include TransMetro bus transfers</p>
          <p>- Operates roughly 5:00 AM to midnight daily</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Ecovía (Bus Rapid Transit)</h4>
          <p>
              Ecovía is a dedicated Bus Rapid Transit system running east-west across the city. It's efficient and connects to Metrorrey at several points, including Mitras station on Line 1.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Local Buses and TransMetro</h4>
          <p>
              Monterrey's extensive bus network covers areas the metro doesn't reach. TransMetro routes connect to metro stations, offering integrated fares. Use the Moovit app for real-time schedules and route planning.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Taxis and Rideshare</h4>
          <p>
              Uber is widely available and reliable in Monterrey. It's your best bet for late-night travel or getting to neighborhoods outside the metro network. Official taxis are also safe—just use app-based services or hotel taxi stands rather than hailing on the street.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Airport to City</h4>
          <p>
              <strong>General Mariano Escobedo International Airport (MTY)</strong> is about 24 kilometers northeast of downtown in Apodaca.
          </p>
          <p>- <strong>Express Bus:</strong> Colectivo buses operate three routes (Centro, San Pedro, Sur) from Terminal A to various parts of the city. Journey takes 40-60 minutes; tickets around 110-200 MXN.</p>
          <p>- <strong>Uber/Taxi:</strong> 30-minute ride to downtown; pre-book or use airport taxi kiosks</p>
          <p>- <strong>SkyBus:</strong> New express service to Valle Oriente Station with luxury coaches (reservations advised)</p>
          <p>
              <strong>Pro Tip:</strong> Download Moovit or Google Maps before arriving—both provide excellent public transport navigation in Monterrey.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Match Day in Monterrey: What to Expect
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">The Clásico Regio: Understanding Local Football Culture</h4>
          <p>
              Monterrey is home to two Liga MX giants: C.F. Monterrey Rayados and Tigres UANL. Their rivalry, the Clásico Regio, is one of the fiercest in Mexican football. These clubs regularly sell out 50,000+ capacity stadiums regardless of weather or table position. The Rayados fanbase, known as "La Adicción," fills Estadio BBVA with navy blue and white flags, non-stop chanting, and drumbeats that shake the concrete.
          </p>
          <p>
              When World Cup matches come to town, expect that same energy multiplied by international scale. Mexican fans embrace visiting supporters, but they won't be quiet spectators—prepare for 90 minutes of relentless atmosphere.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Official Fan Fest: Fundidora Park</h4>
          <p>
              FIFA's official Fan Fest for Monterrey will be located at Fundidora Park, the city's iconic urban green space built on the grounds of a former steel foundry. Expect big screens showing matches, concerts, food vendors, and interactive soccer experiences. The park is massive—wear comfortable shoes and arrive early on match days.
          </p>
          <p>
              <strong>Access:</strong> Metro Line 1 to Exposición station, or short walk from Centro Monterrey hotels
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Monterrey's Heat Factor</h4>
          <p>
              Let's address the elephant in the room: Monterrey gets hot in June. Daytime temperatures regularly hit 32-35°C (90-95°F), with humidity around 70%. FIFA has flagged several 2026 stadiums for extreme heat conditions, and Monterrey is on that list.
          </p>
          <p>
              <strong>How FIFA is Responding:</strong> Match times will be carefully scheduled, with some games in the cooler evening hours. The stadium's design includes natural airflow through metallic "gills" in the facade, and shade coverage for most seats.
          </p>
          <p>
              <strong>How You Should Prepare:</strong>
          </p>
          <p>- Hydrate constantly—bring an empty water bottle to refill inside the stadium</p>
          <p>- Wear lightweight, breathable fabrics and a hat with a brim</p>
          <p>- Sunscreen is non-negotiable</p>
          <p>- Schedule downtime in air-conditioned spaces between activities</p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-tv-2-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Where Fans Gather: Sports Bars and Watch Parties
          </h3>
          <p><strong>Boston's Pizza Galerías Monterrey:</strong> Lively pub atmosphere with HD screens and decent food—perfect for watching other World Cup matches</p>
          <p><strong>Skygamers Sport Bar (Centro):</strong> Energetic sports bar with multiple screens and soccer-focused events</p>
          <p><strong>Mulligan's Monterrey (San Pedro):</strong> Upscale sports bar with premium drinks and big match ambiance</p>
          <p><strong>Barrio Antiguo bars:</strong> After matches, the cobblestone streets fill with fans celebrating—join the party at one of the many microbreweries or street-side bars</p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Beyond Football: Monterrey's Can't-Miss Experiences
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">Macroplaza: Mexico's Grand Public Square</h4>
          <p>
              Macroplaza is one of the world's largest public squares, stretching across multiple city blocks in downtown Monterrey. The iconic 70-meter-tall Faro del Comercio (Lighthouse of Commerce) is impossible to miss—it shoots green lasers at night. Surrounding the plaza you'll find the Metropolitan Cathedral, Palacio de Gobierno, fountains, gardens, and the entrance to Paseo Santa Lucía.
          </p>
          <p><strong>Why Visit:</strong> Central meeting point, free to explore, surrounded by museums and restaurants, evening atmosphere comes alive with street vendors and performers</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Paseo Santa Lucía: The Turquoise Ribbon</h4>
          <p>
              This 2.3-kilometer artificial river walk connects Macroplaza to Fundidora Park with turquoise water, pedestrian bridges, sculpture installations, and waterside cafes. Walk it at sunset or take a boat tour—it's one of Monterrey's most successful urban regeneration projects.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Museo de Arte Contemporáneo (MARCO)</h4>
          <p>
              Marked by Juan Soriano's massive black dove sculpture at its entrance, MARCO is Mexico's premier contemporary art museum. The collection showcases modern works from Mexican and international artists across spacious, light-filled galleries.
          </p>
          <p><strong>Entry:</strong> Small admission fee; closed Mondays</p>
          <p><strong>Location:</strong> Steps from Macroplaza</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Chipinque Ecological Park: Escape to the Mountains</h4>
          <p>
              Just 15 minutes from San Pedro, Chipinque offers over 60 kilometers of hiking and mountain biking trails through pine forests in the Sierra Madre foothills. The park's lookout points provide stunning city views, and the cooler mountain air is a relief from downtown heat.
          </p>
          <p><strong>Access:</strong> Taxi/Uber from San Pedro (no direct public transport)</p>
          <p><strong>Best Time:</strong> Early morning or late afternoon to avoid midday sun</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Cerro de la Silla: Monterrey's Iconic Mountain</h4>
          <p>
              The saddle-shaped Cerro de la Silla defines Monterrey's skyline. Experienced hikers can tackle the steep trail to the 1,820-meter summit (about 3-4 hours round trip). Views from the top are spectacular, but come prepared—it's challenging and hot.
          </p>
          <p><strong>Pro Tip:</strong> Go with a local guide or group, bring plenty of water, and start early in the morning.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Parque Fundidora: Industrial History Meets Modern Leisure</h4>
          <p>
              Fundidora Park transformed an old steel foundry into a cultural and recreational hub. Inside you'll find the impressive Museo del Acero (Steel Museum) inside a preserved blast furnace, playgrounds, an artificial lake, water park, Sesame Street theme park, and CONARTE contemporary art center.
          </p>
          <p><strong>Why Visit:</strong> FIFA Fan Fest location, family-friendly, industrial heritage, green space</p>
          <p><strong>Access:</strong> Metro Line 1 to Exposición station</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">The Carne Asada Experience: Monterrey's Ultimate Social Tradition</h4>
          <p>
              Forget restaurant recommendations—the best bite in Monterrey is at a carne asada. This Mexican BBQ tradition is sacred here, where locals fire up grills for any excuse to gather. If you're lucky enough to get invited to one, accept immediately. Expect perfectly grilled arrachera (skirt steak), chorizo, fresh flour tortillas, pico de gallo, guacamole, and ice-cold beer. It's not just food; it's how Monterrey socializes.
          </p>
          <p><strong>Can't get invited?</strong> Head to Mercado Juárez or Zona Rosa for street tacos that capture the city's meat-obsessed culture. Try cabrito (roast goat), machacado con huevo (dried beef with eggs), or classic tacos de trompo.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Barrio Antiguo at Night</h4>
          <p>
              By day, Barrio Antiguo is a quiet historic district. By night—especially Thursday through Sunday—it transforms into Monterrey's nightlife epicenter. Bars, microbreweries, live music venues, and clubs fill the colonial buildings. The streets buzz with energy as locals and travelers mingle over craft beer and mezcal cocktails.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Practical Intel: What You Need to Know
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">Weather in June</h4>
          <p>
              Monterrey in June is hot and increasingly humid as rainy season approaches. Average high temperatures reach 32-33°C (90-91°F) with lows around 21-22°C (70-72°F). Expect 10-11 hours of daily sunshine, but occasional afternoon thunderstorms are possible (though rainfall amounts remain moderate at this time of year).
          </p>
          <p><strong>What to Pack:</strong> Lightweight, breathable clothing; wide-brimmed hat; quality sunglasses; sunscreen SPF 50+; refillable water bottle; light rain jacket (just in case)</p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Safety and Street Smarts</h4>
          <p>
              Monterrey has significantly improved its safety situation in recent years and is now considered one of Mexico's safer major cities. The tourist areas—Centro, San Pedro, Barrio Antiguo, Fundidora Park—are generally safe with visible police presence.
          </p>
          <p><strong>Common Sense Tips:</strong></p>
          <p>- Stick to well-populated, well-lit areas at night</p>
          <p>- Use Uber instead of hailing street taxis</p>
          <p>- Keep valuables secure and don't flash expensive electronics</p>
          <p>- Avoid the Colonia Independencia neighborhood (northeast of downtown)</p>
          <p>- Stay aware of your surroundings, especially after bar-hopping</p>
          <p>
              Mexican fans are welcoming and love sharing their football passion with visitors. You're more likely to be invited for tacos than to encounter any trouble.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Budget Expectations</h4>
          <p>
              Monterrey offers excellent value compared to U.S. or European cities, though it's pricier than other Mexican destinations.
          </p>
          <p><strong>Daily Budget Estimates (Per Person):</strong></p>
          <p>- <strong>Budget:</strong> $40-60 USD (hostel, street food, public transport, basic sightseeing)</p>
          <p>- <strong>Mid-Range:</strong> $80-150 USD (3-star hotel, mix of restaurants, some taxis, attractions)</p>
          <p>- <strong>Comfort:</strong> $200+ USD (4-5 star hotel, quality dining, rideshares, guided experiences)</p>
          <p>
              World Cup match days will inflate accommodation prices significantly—book as early as possible.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2">Language</h4>
          <p>
              Spanish is the primary language. English is spoken in upscale hotels, tourist areas, and by younger residents in San Pedro, but don't rely on it everywhere. Download Google Translate offline and learn basic phrases:
          </p>
          <p>- <em>¿Dónde está el estadio?</em> (Where is the stadium?)</p>
          <p>- <em>Una cerveza, por favor</em> (One beer, please)</p>
          <p>- <em>¿Cuánto cuesta?</em> (How much does it cost?)</p>
          <p>- <em>¡Vamos!</em> (Let's go! – useful at matches)</p>
          <p>
              Mexicans appreciate when visitors make an effort to speak Spanish, even if it's rough.
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-wallet-3-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Money Matters
          </h3>
          <p>- Currency: Mexican Peso (MXN)</p>
          <p>- ATMs widely available (use bank-affiliated machines in secure locations)</p>
          <p>- Credit cards accepted at most hotels and restaurants; carry cash for street vendors, tacos, and public transport</p>
          <p>- Tipping: 10-15% at restaurants; 10-20 MXN for valet/baggage handlers; round up for taxis</p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-road-map-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Plan Your Cross-Border World Cup Journey
          </h3>
          <p>
            Monterrey's proximity to the US border makes it the ideal gateway for international visitors exploring both countries during World Cup 2026.
          </p>
          <p className="mt-4 font-semibold">Popular Combinations:</p>
          <p className="mt-2">
            <strong>Texas to Mexico</strong>{' '}Create the perfect cross-border experience: Start in{' '}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>{' '}or{' '}
            <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link>, then cross into Mexico at Monterrey (current, no link) — just a few hours' drive — before continuing to{' '}
            <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Guadalajara</Link>{' '}and{' '}
            <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>.
          </p>
          <p className="mt-2">
            <strong>Complete Mexico Tour</strong>{' '}Experience all three Mexican host cities: Monterrey (current) for mountains and modernity,{' '}
            <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Guadalajara</Link>{' '}for culture and tradition, then{' '}
            <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>{' '}for the ultimate metropolitan experience.
          </p>
          <p className="mt-2">
            <strong>Border Region Circuit</strong>{' '}Focus on the border region: Combine Monterrey (current) with nearby Texas cities{' '}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>,{' '}
            <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link>, and{' '}
            <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Kansas City</Link>{' '}for an efficient multi-city tour with minimal travel time.
          </p>
          <p className="mt-4">
            <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
          </p>
        </article>

        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-flag-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Book Your Monterrey World Cup Adventure
          </h3>
          <p>
              Monterrey isn't trying to be Cancún or Playa del Carmen—and that's exactly what makes it special for a World Cup experience. This is real Mexico: a modern industrial city with deep football roots, incredible food culture, mountain adventures, and fans who live and breathe the game.
          </p>
          <p>
              When you take your seat in Estadio BBVA with 53,000 other roaring fans, the Sierra Madre mountains rising behind the stands, you'll understand why FIFA chose Monterrey to represent Mexico's northeastern spirit on football's biggest stage.
          </p>
          <p><strong>Ready to plan your trip?</strong></p>
          <p> <strong>Book Accommodation Early:</strong> Search "Monterrey Centro," "San Pedro Garza García," or "Fundidora Park hotels" on Booking.com, <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="underline">Expedia</a>, or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="underline">Hotels.com</a> to lock in World Cup rates before they skyrocket</p>
          <p> <strong>Find Flights:</strong> Use Google Flights, Kayak, or Going.com to track fares to General Mariano Escobedo International Airport (MTY). Direct flights available from major U.S. cities</p>
          <p> <strong>Stay Updated:</strong> Check FIFA's official website and FWC26Monterrey.com for match schedules, ticket sales, and Fan Fest details as they're announced</p>
          <p> <strong>Plan Your Days:</strong> Balance match day with experiences—mix football fever with mountain hikes, museum visits, and carne asadas</p>
          <p>
              Monterrey is ready to show the world what Mexican football passion looks like. Will you be there when the whistle blows?
          </p>
          <p><strong>¡Vamos México! See you in Monterrey 2026!</strong> </p>
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
                  <a href={`https://twitter.com/intent/tweet?text=Monterrey%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group" aria-label="Share on X">
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
