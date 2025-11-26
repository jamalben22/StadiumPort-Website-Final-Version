import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function DallasArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/dallas-world-cup-2026-guide';

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
    link.href = '/images/cities/dallas-world-cup-2026.webp'
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
  const pageUrl = '/world-cup-2026-host-cities/dallas-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','dallas')
    setPageMeta({
      title: 'Dallas – World Cup 2026 Guide',
      description: 'Comprehensive Dallas travel guide for FIFA World Cup 2026: AT&T Stadium details, nine-match schedule including a semi-final, transportation, and planning tips.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/dallas-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : undefined,
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Dallas', 'AT&T Stadium', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Dallas – World Cup 2026 Guide',
            'Comprehensive Dallas travel guide for FIFA World Cup 2026: AT&T Stadium details, nine-match schedule including a semi-final, transportation, and planning tips.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','dallas')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Dallas', 'AT&T Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Dallas', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/dallas-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Dallas skyline – World Cup 2026' }
          )
        ]}
      />

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
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
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
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
            src="/images/cities/dallas-world-cup-2026.webp"
            alt="Dallas skyline"
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
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-emerald-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <Link to="/world-cup-2026-host-cities" className="hover:text-white transition-colors duration-300">Host Cities</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Dallas</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Dallas World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>USA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>AT&T Stadium (Arlington)</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>80,000 Capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-emerald-500/20 ring-1 ring-emerald-500/50' : 'bg-white/5 group-hover/save:bg-emerald-500/20'}`}>
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
          {/* [QUICK SUMMARY: 9 matches, Semi-final host, AT&T Stadium venue, Regional hub] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Dallas hosts <strong>9 matches</strong>—the most of any city</li>
               <li>• Venue: <strong>AT&T Stadium</strong> (Arlington)</li>
               <li>• Key Event: <strong>Semi-final on July 14</strong></li>
               <li>• Regional Hub: Dallas-Fort Worth Metroplex</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>Your Complete Travel Guide to America's Team Stadium
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Nine matches. Five weeks. One massive stage. Welcome to the epicenter of FIFA World Cup 2026.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`When FIFA unveils its 2026 World Cup match schedule, one number jumps off the page: `}<strong>nine matches</strong>{`. That's how many games Dallas will host—more than any other city in the entire tournament. From five group stage encounters through two knockout rounds and culminating in a `}<strong>semi-final on July 14</strong>{`, North Texas becomes the beating heart of the world's biggest sporting event for five intense weeks in summer 2026.

This isn't Dallas's first World Cup rodeo. In 1994, the Cotton Bowl hosted quarterfinal action that drew global attention and helped launch Major League Soccer. Three decades later, the stakes are higher, the stadium is bigger, and the Metroplex is ready to show the world what "everything's bigger in Texas" really means.`}
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-10 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "North Texas becomes the beating heart of the world's biggest sporting event for five intense weeks in summer 2026."
          </blockquote>

          <p className="whitespace-pre-line">
            {`Whether you're a die-hard football fan plotting your summer 2026 pilgrimage or a casual supporter looking to experience World Cup magic, this guide delivers everything you need to know about watching matches in Dallas, navigating the sprawling Metroplex, and making the most of your North Texas adventure.`}
          </p>
          <p className="leading-relaxed mt-3">
            Dallas is one of the <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">16 host cities</Link> for World Cup 2026, anchoring Texas hospitality and major-event infrastructure in the heart of the Metroplex.
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-emerald-50 to-white dark:from-navy-900 dark:to-navy-800 border border-emerald-100 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400 mb-4">
              <i className="ri-bookmark-line"></i> Essential Resources
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">AT&T Stadium Guide</Link>
                  <span className="block text-sm text-slate-500 mt-1">Capacity: 80,000 • Surface: Natural Grass</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🗺️</span>
                <div>
                  <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Explore All 16 Cities</Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✈️</span>
                <div>
                   <strong>Nearby Cities:</strong> <span className="text-slate-600 dark:text-slate-400">[INTERNAL LINK: Regional Travel]</span><br/>
                   <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Houston</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Kansas City</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium: AT&T Stadium (Dallas Stadium) */}
        <article id="stadium" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stadium-anchor" className="scroll-mt-24"></div>

          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradBuilding4" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradBuilding4)" />
              <rect x="7" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="12" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#14b8a6" />
            </svg>
            The Stadium: <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">AT&T Stadium</Link> (Dallas Stadium)
          </h3>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/images articles/dallas city guide/AT&T Stadium Interior.webp"
              alt="AT&T Stadium Interior"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
              priority={true}
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="whitespace-pre-line">
                {`Prepare yourself for something special. AT&T Stadium in Arlington—temporarily renamed "Dallas Stadium" for FIFA compliance—isn't just a venue; it's an architectural marvel that redefined what American stadiums could be. When Cowboys owner Jerry Jones opened this $1.15 billion facility in 2009, he didn't build a football stadium. `}<em>He built an entertainment cathedral.</em>{`

Located at 1 AT&T Way, Arlington, TX 76011, the stadium sits midway between Dallas and Fort Worth, roughly 20 miles from downtown Dallas and 24 miles from Fort Worth. This strategic positioning made sense for an NFL team serving the entire Metroplex, but it requires World Cup visitors to think regionally rather than picking one downtown as their base.`}
              </p>
            </div>
            
            {/* [PULL QUOTE] */}
            <blockquote className="my-10 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
               "He didn't build a football stadium. He built an entertainment cathedral."
            </blockquote>

            {/* [STAT HIGHLIGHT SECTION] */}
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 my-8">
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-navy-600 pb-4">
                <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStarDAL" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarDAL)" />
                </svg>
                The Numbers That Matter
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* [INFOGRAPHIC OPPORTUNITY: Stadium Capacity Chart] */}
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-group-fill text-emerald-500 mt-1"></i>
                            <span><strong>80,000 seated capacity</strong> <span className="block text-sm text-slate-500">(expandable to 105,000+ with standing room)</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-sun-line text-emerald-500 mt-1"></i>
                            <span><strong>Retractable roof</strong> <span className="block text-sm text-slate-500">opens/closes in ~12 minutes—crucial for June/July Texas heat</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-temp-cold-line text-emerald-500 mt-1"></i>
                            <span><strong>Climate control</strong> <span className="block text-sm text-slate-500">throughout the indoor stadium (yes, you'll have air conditioning at a football match)</span></span>
                        </li>
                      </ul>
                  </div>
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-tv-line text-emerald-500 mt-1"></i>
                            <span><strong>World's largest video board</strong> <span className="block text-sm text-slate-500">160 feet wide by 72 feet tall, suspended ~90 feet above the field</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-football-line text-emerald-500 mt-1"></i>
                            <span><strong>Natural grass</strong> <span className="block text-sm text-slate-500">will replace the usual synthetic turf specifically for World Cup matches</span></span>
                        </li>
                      </ul>
                  </div>
              </div>
            </div>

            <p className="leading-relaxed mt-3">
              That retractable roof deserves extra attention. Unlike open-air venues where summer heat becomes an endurance test, AT&T Stadium's climate-controlled interior maintains comfortable temperatures regardless of exterior conditions. When it's 98°F outside (not uncommon in North Texas summer), you'll be watching world-class football in 72°F comfort. FIFA chose wisely.
            </p>
            <p className="leading-relaxed mt-3">
              The stadium's track record speaks for itself: Super Bowls, college football playoffs, the 2024 Copa América Final, boxing, WrestleMania, and concerts by everyone from The Rolling Stones to Taylor Swift. The infrastructure exists to handle 100,000+ visitors for major events—something FIFA prioritized when allocating the tournament's most matches.
            </p>
            
            {/* [SIDEBAR: Important Logistics] */}
            <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                <i className="ri-information-line"></i>
                Important Logistics Note
              </h4>
              <p className="leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                While the stadium technically sits in <strong>Arlington</strong> (a separate city), the entire Dallas–Fort Worth Metroplex functions as one interconnected region. You'll see references to "Dallas" hosting matches because that's the recognizable global brand, but your actual stadium experience happens in suburban Arlington, surrounded by parking lots, hotels, and Texas-sized entertainment complexes.
              </p>
            </div>
            
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Match Schedule: Nine Games Including a Semi-Final */}
        <article id="schedule" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="schedule-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Schedule at a Glance</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>5 Group Stage Matches</strong> (June 14–27)</li>
               <li>• <strong>4 Knockout Matches</strong> (Round of 32 to Semi-Final)</li>
               <li>• <strong>Semi-Final:</strong> Tuesday, July 14, 2026</li>
               <li>• <strong>Total:</strong> 9 matches (Highest allocation)</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCalendarDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradCalendarDAL)" />
              <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
              <circle cx="8" cy="3.5" r="1" fill="#ffffff" />
              <circle cx="16" cy="3.5" r="1" fill="#ffffff" />
              <rect x="7" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
              <rect x="12" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
              <rect x="17" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
            </svg>
            The Match Schedule: Nine Games Including a Semi-Final
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            From the group stage opener to a historic semi-final: Your chronological guide to North Texas's summer of football.
          </p>

          <p className="leading-relaxed mb-8">
            Dallas's nine-match allocation represents FIFA's confidence in North Texas's ability to deliver world-class tournament experiences. Here's what's coming:
          </p>

          {/* Interactive Tournament Timeline Graphic */}
          <div className="my-8 p-0 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
            <OptimizedImage
              src="/images/images articles/dallas city guide/Interactive Tournament Timeline Graphic.webp"
              alt="Interactive Tournament Timeline Graphic"
              className="w-full"
              imgClassName="object-contain h-auto"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-navy-700">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <svg className="h4-icon-svg" role="img" aria-label="Group stage" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradGroupDAL" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#gradGroupDAL)" />
                  <rect x="6" y="8" width="12" height="2" rx="1" fill="#ffffff" />
                  <rect x="6" y="11" width="8" height="2" rx="1" fill="#ffffff" />
                </svg>
                Group Stage (Five Matches)
              </h4>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">01</span>
                    <span><strong>Sunday, June 14, 2026</strong> – Tournament Group Stage opener</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">02</span>
                    <span><strong>Wednesday, June 17, 2026</strong> – Group Stage match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">03</span>
                    <span><strong>Monday, June 22, 2026</strong> – Group Stage match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">04</span>
                    <span><strong>Thursday, June 25, 2026</strong> – Group Stage match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">05</span>
                    <span><strong>Saturday, June 27, 2026</strong> – Group Stage match (final round)</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-800/30">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <svg className="h4-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradTrophyDAL" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradTrophyDAL)" />
                  <circle cx="12" cy="9" r="1.5" fill="#ffffff" />
                </svg>
                Knockout Stage (Four Matches)
              </h4>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                    <span className="font-mono text-amber-500 font-bold">R32</span>
                    <span><strong>Tuesday, June 30, 2026</strong> – Round of 32</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                    <span className="font-mono text-amber-500 font-bold">R32</span>
                    <span><strong>Friday, July 3, 2026</strong> – Round of 32</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                    <span className="font-mono text-amber-500 font-bold">R16</span>
                    <span><strong>Monday, July 6, 2026</strong> – Round of 16</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-100 to-white dark:from-amber-900/40 dark:to-navy-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
                    <span className="font-mono text-amber-600 dark:text-amber-400 font-bold text-lg">SF</span>
                    <span className="text-lg"><strong>Tuesday, July 14, 2026</strong> – <span className="uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">SEMI-FINAL</span></span>
                </li>
              </ul>

              <div className="mt-6 pl-4 border-l-2 border-amber-200 dark:border-amber-800">
                <p className="leading-relaxed italic text-slate-700 dark:text-slate-300">
                  That semi-final on July 14 is the crown jewel. Only two stadiums worldwide host semi-finals (the other being MetLife Stadium in New Jersey). Four teams remain, two will advance to the final, and 80,000+ fans will witness one of the four most important matches of the entire tournament. If you can only attend one match, make it this one.
                </p>
              </div>
            </div>

            {/* [PULL QUOTE] */}
            <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
               "If you can only attend one match, make it this one."
            </blockquote>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradInfoDAL" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradInfoDAL)" />
                  <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
                  <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
                </svg>
                Tournament context for planning
              </h4>
              <p className="leading-relaxed">
                The expanded 48-team format creates more group stage matches but also means knockout rounds feature razor-thin margins. By the time the Round of 16 arrives on July 6, you're watching teams that survived brutal group competition. By the semi-final on July 14, you're witnessing footballing royalty.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to AT&T Stadium: The Transportation Equation */}
        <article id="transport" className="editorial-body">
          {/* [SCROLL ANCHOR] */}
          <div id="transport-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Transport Reality Check</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>No direct rail</strong> to stadium door (requires shuttle transfer)</li>
               <li>• <strong>DART + TRE:</strong> Most economical but complex</li>
               <li>• <strong>Rideshare:</strong> Convenient but expect surge pricing</li>
               <li>• <strong>Driving:</strong> Flexible but requires pre-booked parking</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Route" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradRouteDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path d="M4 18 c4 -6 6 -6 10 -2 s6 2 6 -4" fill="none" stroke="url(#gradRouteDAL)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="6" cy="18" r="2" fill="#0ea5e9" />
              <circle cx="20" cy="8" r="2" fill="#0ea5e9" />
            </svg>
            Getting to AT&T Stadium: The Transportation Equation
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Navigating the gap between Dallas, Fort Worth, and Arlington: A realistic guide to reaching the venue.
          </p>

          <p className="leading-relaxed mb-6">
            Arlington is one of the largest U.S. cities without a comprehensive public rail system connecting directly to major metros. That doesn’t make stadium access impossible—it just requires planning and realistic expectations.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
             "Arlington is one of the largest U.S. cities without a comprehensive public rail system... That doesn’t make stadium access impossible—it just requires planning."
          </blockquote>

          <p className="leading-relaxed mb-6">
            Dallas connects easily to <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> for a Texas double-header, and many fans combine Dallas with <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Kansas City</Link> for a Central US experience. It also serves as a gateway to Mexican host cities like <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link> and <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>.
          </p>

          {/* [VISUAL: Regional Transit Map Placeholder] */}
          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-navy-700">
             <span className="text-slate-400 font-medium flex items-center gap-2"><i className="ri-map-2-line"></i> [VISUAL: Regional Transit Map (Dallas - Arlington - Fort Worth)]</span>
          </div>

          {/* Best Options */}
          <div className="space-y-12">
            {/* DART + TRE Combo */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-emerald-200 dark:bg-emerald-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-emerald-800 dark:text-emerald-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Train" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTrain" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="4" width="18" height="12" rx="3" fill="url(#gradTrain)" />
                    <circle cx="8" cy="17" r="2" fill="#0ea5e9" />
                    <circle cx="16" cy="17" r="2" fill="#0ea5e9" />
                    <rect x="7" y="7" width="10" height="4" rx="1.5" fill="#ffffff" />
                  </svg>
                  DART + TRE Combo (Most Economical)
                </h4>
                <p className="leading-relaxed whitespace-pre-line mb-4">
                  {`Dallas Area Rapid Transit (DART) light rail is the Metroplex's primary public transit backbone, with 93 miles of track connecting northern suburbs, downtown Dallas, and Dallas–Fort Worth International Airport (DFW). DART trains don’t reach Arlington directly—here’s the workaround:
  
  • Take DART to EBJ Union Station (downtown Dallas)
  • Transfer to Trinity Railway Express (TRE), the commuter rail between Dallas and Fort Worth
  • Exit at CentrePort/DFW Airport Station
  • Board the TRE LINK shuttle bus to AT&T Stadium on match days`}
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> $2.50 for DART single ride, or $12 Regional Day Pass (unlimited DART + TRE)</li>
                    <li><strong>Time:</strong> Budget 90–120 minutes door-to-stadium</li>
                    <li><strong>Pros:</strong> Cheapest option; avoids traffic and parking headaches</li>
                    <li><strong>Cons:</strong> Multiple transfers; shuttle reliability depends on crowds; <strong>TRE doesn’t run Sundays</strong> (problematic for the June 14 opener)</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="callout-warning">
                    <div className="callout-icon flex items-center gap-2 font-medium">
                      <span>Service Note</span>
                    </div>
                    <p className="leading-relaxed mt-2 text-sm">
                      TRE’s Sunday service gap means you should plan a different route for Sunday matches. Check real-time schedules in the Transit app and confirm World Cup shuttle operations in advance.
                    </p>
                  </div>
                  <div className="callout-must-know">
                    <div className="callout-icon flex items-center gap-2 font-medium">
                      <span>New Option</span>
                    </div>
                    <p className="leading-relaxed mt-2 text-sm">
                      The Silver Line (opened October 2025) connects DFW Airport directly to Plano via DART, offering another access point if you’re staying near the airport or northern suburbs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rideshare/Taxi */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Taxi" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTaxi" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="10" width="18" height="6" rx="2" fill="url(#gradTaxi)" />
                    <rect x="9" y="7" width="6" height="3" rx="1" fill="#f59e0b" />
                    <circle cx="7" cy="17" r="2" fill="#0ea5e9" />
                    <circle cx="17" cy="17" r="2" fill="#0ea5e9" />
                  </svg>
                  Rideshare/Taxi (Most Convenient)
                </h4>
                <p className="leading-relaxed mb-4">
                  Uber, Lyft, and taxis work—but expect significant surge pricing on match days. From downtown Dallas, plan on $40–60 each way under normal conditions; post-match surges can double that. The stadium has designated rideshare pickup areas, but 30–60 minute waits after matches are common when 80,000 people request rides simultaneously.
                </p>
                <div className="callout-pro-tip border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 p-5 rounded-r-lg">
                  <h5 className="text-md font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <div className="callout-icon">
                      <svg className="h4-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
                        <defs>
                          <linearGradient id="gradBulbDAL" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0" stopColor="#f59e0b" />
                            <stop offset="1" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                        <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradBulbDAL)" />
                        <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
                      </svg>
                    </div>
                    Smart Hacks
                  </h5>
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-amber-900/80 dark:text-amber-200/80">
                    <li>Book rideshare during the 85th minute to beat the exodus (you’ll miss injury time, but save 45 minutes of waiting)</li>
                    <li>Walk to a nearby hotel (e.g., Live! by Loews Arlington) and request pickup there to avoid congestion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Driving + Parking */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Car" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradCar" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="10" width="16" height="5" rx="2" fill="url(#gradCar)" />
                    <path d="M6 10 L9 7 H15 L18 10" fill="#6366f1" />
                    <circle cx="8" cy="16" r="2" fill="#0ea5e9" />
                    <circle cx="16" cy="16" r="2" fill="#0ea5e9" />
                  </svg>
                  Driving + Pre-Booked Parking (Most Flexible)
                </h4>
                <p className="leading-relaxed mb-4">
                  If you’re renting a car to explore the Metroplex, driving works—with advance parking reservations. The stadium complex offers about 12,000 parking spaces in immediate lots, plus ~30,000 within a one-mile radius.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> $40–60 for standard lots (pre-purchased online weeks ahead); $100+ for VIP proximity</li>
                    <li><strong>Reality check:</strong> Post-match traffic is brutal. Allow 2+ hours to exit lots and reach highways—expect I-30, US-360, and Hwy 114 to crawl after big events</li>
                  </ul>
                </div>
                <div className="callout-must-know">
                  <p className="leading-relaxed text-sm">
                    <strong>Tip:</strong> Many fans tailgate post-match or head to nearby restaurants to wait out the traffic. Consider timing your departure strategically.
                  </p>
                </div>
              </div>
            </section>

            {/* Walkable Stay */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-teal-200 dark:bg-teal-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-teal-800 dark:text-teal-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Walk" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradWalkDAL" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <circle cx="8" cy="7" r="2" fill="#0ea5e9" />
                    <path d="M8 9 l2 2 2 -1 2 3 -1 1 -2 -2 -2 1 -1 3" fill="url(#gradWalkDAL)" />
                  </svg>
                  Stay Within Walking Distance (Premium Strategy)
                </h4>
                <p className="leading-relaxed mb-4">
                  Several hotels sit within the Arlington Entertainment District—literally adjacent to AT&T Stadium. Live! by Loews Arlington connects directly to Texas Live!, an entertainment complex with restaurants, bars, and outdoor spaces. From your hotel lobby, you can walk to the stadium in 10 minutes.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> Expect $300–500/night during World Cup; book immediately upon securing match tickets—these properties sell out fast</li>
                  </ul>
                </div>
                <div className="mt-4 callout-must-know">
                  <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <div className="callout-icon"></div>
                    Arlington Context
                  </h5>
                  <p className="leading-relaxed text-sm">
                    The stadium shares its district with Globe Life Field (Texas Rangers), Choctaw Stadium, and Six Flags Over Texas. The area was designed for major events with infrastructure to handle massive crowds. It’s not walkable from downtown Dallas or Fort Worth, but within the district, everything connects.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* Transport options summary table */}
          <div className="comparison-table overflow-x-auto -mx-4 md:mx-0">
            <table aria-label="Transport options comparison — Dallas" className="min-w-[720px] w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-3">Option</th>
                  <th className="text-left p-3">Approx. Cost</th>
                  <th className="text-left p-3">Typical Time</th>
                  <th className="text-left p-3">Pros</th>
                  <th className="text-left p-3">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">DART + TRE + Shuttle</td>
                  <td className="p-3">$2.50 single, $12 Regional Day Pass</td>
                  <td className="p-3">90–120 minutes</td>
                  <td className="p-3">Economical; avoids parking</td>
                  <td className="p-3">Transfers; TRE no Sunday service</td>
                </tr>
                <tr>
                  <td className="p-3">Rideshare/Taxi</td>
                  <td className="p-3">$40–60 each way (surge higher)</td>
                  <td className="p-3">35–60 minutes</td>
                  <td className="p-3">Door-to-door convenience</td>
                  <td className="p-3">Surge pricing; long post-match waits</td>
                </tr>
                <tr>
                  <td className="p-3">Driving + Parking</td>
                  <td className="p-3">$40–60 (VIP $100+)</td>
                  <td className="p-3">Variable</td>
                  <td className="p-3">Flexible; tailgate option</td>
                  <td className="p-3">Traffic; 2+ hour exit</td>
                </tr>
                <tr>
                  <td className="p-3">Walk (Arlington district)</td>
                  <td className="p-3">$0</td>
                  <td className="p-3">5–15 minutes</td>
                  <td className="p-3">No logistics; zero surge</td>
                  <td className="p-3">Premium hotel rates; limited inventory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay: Neighborhood Playbook for the Metroplex */}
        <article id="stay" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Downtown:</strong> Best for culture & transit access</li>
               <li>• <strong>Arlington:</strong> Walkable to stadium (book ASAP)</li>
               <li>• <strong>Uptown:</strong> Luxury & nightlife</li>
               <li>• <strong>Deep Ellum:</strong> Indie vibe & live music</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradHotelDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradHotelDAL)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhood Playbook for the Metroplex
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            The Dallas–Fort Worth Metroplex sprawls across 9,200 square miles—larger than some U.S. states. Your choice determines your World Cup experience.
          </p>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/images articles/dallas city guide/Interactive Neighborhood Map (Stadium vs. Downtown).webp"
              alt="Interactive Neighborhood Map (Stadium vs. Downtown)"
              className="absolute inset-0"
              imgClassName="w-full h-full object-contain"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
            />
          </div>

          <p className="leading-relaxed mb-6">
            Your accommodation choice determines whether you experience urban Dallas culture or prioritize stadium convenience. Here’s the strategic breakdown:
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "Your accommodation choice determines whether you experience urban Dallas culture or prioritize stadium convenience."
          </blockquote>

          {/* Downtown Dallas */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPin" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPin)" />
                <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
              </svg>
              Downtown Dallas (Best for Culture + Transit)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> You’re at the heart of Dallas’s cultural action—Arts District, Deep Ellum, and Klyde Warren Park are walking distance. The DART light rail converges here, connecting you to attractions across the Metroplex. World Cup atmosphere will be electric with viewing parties, rooftop bars, and likely Fan Festival programming.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> DART to EBJ Union Station → TRE to CentrePort → shuttle (90–120 minutes), or rideshare ($45–65). Not convenient, but worth it for the urban experience between matches.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Mix of historic landmarks (Adolphus Hotel, opened 1912) and modern high-rises (Kimpton Pittman Hotel in a restored Beaux-Arts building). Expect $275–400/night for mid-range during World Cup; luxury properties push $450–600/night.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Best for:</strong> Fans attending 1–2 matches who want to explore Dallas between games; groups prioritizing nightlife and dining.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
              <p className="leading-relaxed">
                <strong>Book early through comparison sites:</strong> Prices vary dramatically across booking platforms for identical rooms. Checking multiple sites often reveals 15–20% savings.
              </p>
            </div>
          </div>

          {/* Deep Ellum */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Music" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradMusic" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#e11d48" />
                    <stop offset="1" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
                <path d="M9 5 v10 a3 3 0 1 1 -2 2.8 V7 h8 v6 a3 3 0 1 1 -2 2.8 V5z" fill="url(#gradMusic)" />
              </svg>
              Deep Ellum (Best for Music + Nightlife)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> The soul of Dallas’s live music scene. This historic district east of downtown thrives on venues (Trees, The Bomb Factory), street art, craft breweries, and late-night energy. If your World Cup trip revolves around socializing with international fans, this neighborhood delivers.
            </p>
            <p className="leading-relaxed">
              <strong>Getting to stadium:</strong> DART rail runs directly through Deep Ellum with multiple stations. Same transfer routine as downtown (EBJ Union → TRE → shuttle). Rideshare typically $40–60 each way.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Boutique hotels like <em>Kimpton Pittman</em> anchor the area, with Airbnb lofts popular among groups. Expect <strong>$225–350/night</strong> for hotels; short-term rentals vary widely.
            </p>
            <p className="leading-relaxed">
              <strong>Reality check:</strong> Deep Ellum has a gritty edge—it's part of the charm, but exercise standard urban awareness late at night. Parking is notoriously difficult; rely on rideshare or DART within the neighborhood.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Arlington Entertainment District */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="District" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradDistrictDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradDistrictDAL)" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#0ea5e9" />
            </svg>
            Arlington Entertainment District (Best for Stadium Proximity)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> Eliminate commute stress entirely. You're <strong>walking distance from AT&T Stadium</strong>, surrounded by restaurants, sports bars, and entertainment complexes. Perfect for fans attending multiple matches or families who want simple logistics.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Getting to stadium:</strong> Walk. Seriously. 5–15 minutes depending on your hotel.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Accommodation vibe:</strong> <em>Live! by Loews Arlington</em> (luxury, connected to Texas Live! complex), <em>Sheraton Arlington Hotel</em> (mid-range, solid service), and budget options like <em>Home2 Suites</em>. Expect <strong>$250–400/night</strong> for mid-range during World Cup; premium properties reach <strong>$400–600/night</strong>.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Best for:</strong> Hardcore fans attending 4+ matches who prioritize convenience over urban exploration; families with kids.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
            <p className="leading-relaxed">
              <strong>Bonus:</strong> <em>Globe Life Field</em> (Texas Rangers) sits next door. If there's a baseball game the same day as your World Cup match, you could theoretically attend both.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Uptown Dallas */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="City" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCityDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect x="4" y="9" width="5" height="7" rx="1" fill="url(#gradCityDAL)" />
              <rect x="10" y="6" width="5" height="10" rx="1" fill="#0ea5e9" />
              <rect x="16" y="10" width="4" height="6" rx="1" fill="url(#gradCityDAL)" />
            </svg>
            Uptown Dallas (Best for Upscale + Walkability)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> Polished, leafy, and sophisticated. Uptown offers <em>Katy Trail</em> (jogging/cycling path), upscale shopping, rooftop pools, and proximity to downtown without the grittiness. It's where young professionals and upscale travelers gravitate.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Getting to stadium:</strong> DART connects Uptown to downtown for TRE transfer, or budget 35–45 minutes by rideshare ($40–60).
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Accommodation vibe:</strong> <em>Hotel ZaZa Dallas</em> (boutique luxury with rooftop pool), <em>Warwick Melrose Hotel</em> (historic elegance), modern apartment-style hotels. Expect <strong>$300–475/night</strong> during World Cup.
          </p>
          <p className="leading-relaxed">
            <strong>Best for:</strong> Couples wanting refined vacation vibes between matches; travelers prioritizing comfort and aesthetics over convenience.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Bishop Arts District */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Brush" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradBrushDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#fb7185" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path d="M5 16 c3 0 4 -2 7 -6 l2 -2 l3 3 l-2 2 c-4 3 -6 4 -6 7 c-2 0 -3 -1 -4 -4z" fill="url(#gradBrushDAL)" />
            </svg>
            Bishop Arts District (Best for Indie Vibe)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> South of downtown, this compact neighborhood packs <strong>independent boutiques</strong>, <strong>street art</strong>, <strong>craft cocktail bars</strong>, and <strong>quirky restaurants</strong> into four walkable blocks. It's the anti-corporate Dallas—local artists, vintage shops, and community energy.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Getting to stadium:</strong> DART bus routes connect to light rail system; expect 90+ minute journey. Rideshare runs $45–65.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Accommodation vibe:</strong> Limited hotel options; <em>The Madison Hotel</em> offers boutique charm. Many visitors book Airbnb. Expect <strong>$200–325/night</strong> for hotels during World Cup.
          </p>
          <p className="leading-relaxed">
            <strong>Best for:</strong> Travelers who prize neighborhood character over stadium convenience; couples and small groups.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Matches: What to Do in Dallas */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Culture & Leisure</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>History:</strong> JFK Sixth Floor Museum</li>
               <li>• <strong>Arts:</strong> Largest urban arts district in US</li>
               <li>• <strong>Western:</strong> Fort Worth Stockyards</li>
               <li>• <strong>Nature:</strong> Dallas World Aquarium</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Sparkles" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSparkDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M6 12 l2 -4 l2 4 l-2 4z" fill="url(#gradSparkDAL)" />
              <path d="M14 8 l2 -3 l2 3 l-2 3z" fill="#0ea5e9" />
              <path d="M14 16 l2 -3 l2 3 l-2 3z" fill="#38bdf8" />
            </svg>
            Beyond the Matches: What to Do in Dallas
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            You didn't fly to Texas to only see 90 minutes of football. The Metroplex delivers attractions, history, and experiences you won't find anywhere else.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/dallas city guide/Interactive Map of Top Attractions.webp"
               alt="Interactive Map of Top Attractions"
               className="absolute inset-0"
               imgClassName="w-full h-full object-contain"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
            <svg className="h4-icon-svg" role="img" aria-label="Compass" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCompassDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradCompassDAL)" />
              <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
            </svg>
            Must-See Attractions
          </h4>

          <div className="space-y-6">
            {/* Sixth Floor Museum at Dealey Plaza */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Museum" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradMuseum" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="8" width="18" height="10" rx="2" fill="url(#gradMuseum)" />
                  <rect x="6" y="5" width="12" height="4" rx="1.5" fill="#0ea5e9" />
                  <rect x="6" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                  <rect x="10.5" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                  <rect x="15" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                </svg>
                The Sixth Floor Museum at Dealey Plaza
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Located in the former Texas School Book Depository where Lee Harvey Oswald fired the shots that killed President John F. Kennedy on November 22, 1963, this museum chronicles one of American history's darkest moments. The recreated sniper's perch, original artifacts, and comprehensive timeline provide sobering context. Walk to nearby <strong>Dealey Plaza</strong> and <strong>Grassy Knoll</strong> to stand where history changed. <strong>Admission: $20</strong>. Downtown location; easily accessible via DART.
              </p>
            </div>

            {/* Reunion Tower GeO-Deck */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Observation tower" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="gradTower" cx="50%" cy="50%" r="50%">
                      <stop offset="0" stopColor="#fbbf24" />
                      <stop offset="1" stopColor="#f59e0b" />
                    </radialGradient>
                  </defs>
                  <circle cx="12" cy="8" r="5" fill="url(#gradTower)" />
                  <rect x="11" y="13" width="2" height="7" rx="1" fill="#f59e0b" />
                </svg>
                Reunion Tower GeO-Deck
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                This 560-foot observation tower offers 360-degree views of the entire Metroplex from its iconic geodesic dome. Interactive screens identify landmarks, and the cloud-piercing perspective helps you understand Dallas's sprawling geography. Visit at sunset for dramatic light, or after dark when the city skyline glows. <strong>Admission: $18–22</strong>. Located downtown; walkable from hotels or DART accessible.
              </p>
            </div>

            {/* Dallas Arts District */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Palette" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPalette" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#fb7185" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path d="M12 4 a8 8 0 1 0 0 16 h1 a2.5 2.5 0 0 0 0 -5 h-1 a1.5 1.5 0 0 1 -1.5 -1.5 v-1 a1.5 1.5 0 0 1 1.5 -1.5 h1 a2.5 2.5 0 0 0 0 -5 z" fill="url(#gradPalette)" />
                  <circle cx="8" cy="10" r="1.5" fill="#ffffff" />
                  <circle cx="9" cy="14" r="1.5" fill="#ffffff" />
                  <circle cx="13" cy="10" r="1.5" fill="#ffffff" />
                </svg>
                Dallas Arts District
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                The nation's <strong>largest contiguous urban arts district</strong> spans 68 acres with world-class institutions:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>Dallas Museum of Art:</strong> 24,000+ artworks spanning 5,000 years; <strong>free general admission</strong></li>
                <li><strong>Nasher Sculpture Center:</strong> Outstanding modern and contemporary sculpture collection, plus serene garden; <strong>$10</strong></li>
                <li><strong>Perot Museum of Nature and Science:</strong> Five floors of interactive exhibits, dinosaur fossils, gem hall; <strong>$20 adults, $13 kids</strong></li>
              </ul>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-3">
                Budget a full day if you're a culture enthusiast. The district also houses <strong>Klyde Warren Park</strong>—a 5.2-acre green space built over a highway, featuring food trucks, programming, and people-watching.
              </p>
            </div>

            {/* AT&T Stadium Tour */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Stadium" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStadium" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="12" cy="11" rx="8" ry="4" fill="url(#gradStadium)" />
                  <rect x="4" y="12" width="16" height="4" rx="2" fill="#0ea5e9" />
                </svg>
                AT&T Stadium Tour
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Even if you're attending matches, consider booking a <strong>behind-the-scenes stadium tour</strong> on a non-match day. Access locker rooms, walk the field, visit the Cowboys Ring of Honor, and hear stories about the building's construction and engineering marvels. <strong>$40–200</strong> depending on tour level. Book online weeks ahead—tours sell out.
              </p>
            </div>

            {/* Fort Worth Stockyards */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Cow" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradCow" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="4" fill="url(#gradCow)" />
                  <rect x="6" y="8" width="4" height="2" rx="1" fill="#fbbf24" />
                  <rect x="14" y="8" width="4" height="2" rx="1" fill="#fbbf24" />
                </svg>
                Fort Worth Stockyards
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Twenty-five miles west, Fort Worth's historic <strong>Stockyards National Historic District</strong> preserves authentic cowboy culture. Watch the twice-daily <strong>Texas Longhorn cattle drive</strong> down Exchange Avenue (free), explore western boutiques, catch a rodeo at <strong>Cowtown Coliseum</strong>, and two-step at <strong>Billy Bob's Texas</strong>—the world's largest honky-tonk. Budget half a day; accessible via TRE train from Dallas.
              </p>
            </div>

            {/* George W. Bush Presidential Library & Museum */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Government building" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradGov" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="9" width="14" height="7" rx="1.5" fill="url(#gradGov)" />
                  <rect x="8" y="6" width="8" height="3" rx="1.2" fill="#6366f1" />
                  <rect x="8" y="10" width="2" height="4" rx="0.6" fill="#ffffff" />
                  <rect x="11" y="10" width="2" height="4" rx="0.6" fill="#ffffff" />
                  <rect x="14" y="10" width="2" height="4" rx="0.6" fill="#ffffff" />
                </svg>
                George W. Bush Presidential Library & Museum
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Located on the SMU campus in University Park, this museum chronicles the 43rd presidency with interactive exhibits including a <strong>replica Oval Office</strong> and <strong>Decision Points Theater</strong> where you experience presidential decision-making. Fascinating regardless of political leanings. <strong>Admission: $26</strong>. Accessible via <strong>DART Red Line</strong> to Mockingbird Station, then a short rideshare.
              </p>
            </div>

            {/* Dallas World Aquarium */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Fish" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradFishDAL" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M4 12 c4 -4 8 -4 12 0 c-4 4 -8 4 -12 0z" fill="url(#gradFishDAL)" />
                  <circle cx="7" cy="12" r="1" fill="#ffffff" />
                </svg>
                Dallas World Aquarium
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                This isn't your typical aquarium. The facility houses a <strong>rainforest ecosystem</strong> with birds, sloths, and monkeys alongside marine life. The Orinoco Rainforest exhibit alone justifies admission. Located downtown; <strong>$34.95 adults</strong>. Arrive early to avoid crowds.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food Scene: Fuel Your World Cup */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Culinary Highlights</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>BBQ:</strong> Pecan Lodge & Terry Black's</li>
               <li>• <strong>Tex-Mex:</strong> Mi Cocina (Sunset Margaritas)</li>
               <li>• <strong>Upscale:</strong> Fearing's & Uchi</li>
               <li>• <strong>Budget:</strong> Fuel City Tacos (24/7)</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Food" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradFoodDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="4" height="10" rx="1" fill="#f59e0b" />
              <rect x="11" y="7" width="8" height="10" rx="2" fill="url(#gradFoodDAL)" />
            </svg>
            Food Scene: Fuel Your World Cup
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Dallas's culinary landscape runs deep—Texas barbecue meets global cuisines in a city that takes eating seriously.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/dallas city guide/Interactive Dining Guide.webp"
               alt="Interactive Dining Guide"
               className="absolute inset-0"
               imgClassName="w-full h-full object-contain"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <p className="leading-relaxed mb-6">
            Explore the flavors:
          </p>

          {/* Must-Try Barbecue */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Barbecue" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBBQDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <path d="M12 5 c2 2 2 4 0 6 c-2 2 -2 4 0 6" fill="url(#gradBBQDAL)" />
              </svg>
              Must-Try Barbecue
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Pecan Lodge</strong> (Deep Ellum): Brisket and beef ribs worth the line. Arrive before noon or after 2 PM to avoid peak crush.</li>
              <li><strong>Cattleack BBQ</strong> (Northeast Dallas): Small operation, massive flavor. Thursday–Sunday only; sell out daily.</li>
              <li><strong>Terry Black's Barbecue</strong> (Deep Ellum): Central Texas–style, family recipe since 1932.</li>
            </ul>
          </div>

          {/* Tex-Mex & Mexican */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Restaurant" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradRestaurantDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="6" y="7" width="3" height="10" rx="1" fill="#f59e0b" />
                <rect x="11" y="7" width="7" height="10" rx="2" fill="url(#gradRestaurantDAL)" />
              </svg>
              Tex-Mex & Mexican
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Mi Cocina</strong> (multiple locations): Upscale Tex-Mex; Sunset Margaritas are legendary.</li>
              <li><strong>Velvet Taco</strong> (multiple locations): Creative tacos with global influences.</li>
              <li><strong>Revolver Taco Lounge</strong> (Deep Ellum): Authentic Mexican street tacos, mezcal selection.</li>
            </ul>
          </div>

          {/* Upscale Dining */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Goblet" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradGobletDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <path d="M8 7 h8 v4 a4 4 0 0 1 -4 4 v3 h-2 v-3 a4 4 0 0 1 -4 -4 z" fill="url(#gradGobletDAL)" />
              </svg>
              Upscale Dining
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Fearing's Restaurant</strong> (Ritz-Carlton): Chef Dean Fearing's Southwestern cuisine.</li>
              <li><strong>Uchi</strong> (Uptown): James Beard–nominated Japanese with Texas flair.</li>
              <li><strong>Knife</strong> (Highland Park): Steakhouse excellence from celebrity chef John Tesar.</li>
            </ul>
          </div>

          {/* Budget-Friendly */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Wallet" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradWalletDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradWalletDAL)" />
                <circle cx="16" cy="12" r="1.5" fill="#ffffff" />
              </svg>
              Budget-Friendly
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Fuel City Tacos</strong> (Near downtown): Legendary 24/7 taco truck with cheap, delicious tacos. Bonus: pet longhorn cattle on-site.</li>
              <li><strong>Twisted Root Burger Co.</strong> (multiple locations): Creative burgers, local ingredients.</li>
              <li><strong>Kalachandji's</strong> (East Dallas): All-you-can-eat vegetarian Indian buffet (<strong>$10</strong> lunch).</li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Information: What You Need to Know */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Essential Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Airport:</strong> DFW (Global) or Love Field (Domestic)</li>
               <li>• <strong>Weather:</strong> 95°F+ Heat (Hydrate!)</li>
               <li>• <strong>Safety:</strong> Generally safe tourist zones</li>
               <li>• <strong>Culture:</strong> Tipping 20% is standard</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradInfo2DAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradInfo2DAL)" />
              <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
              <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Information: What You Need to Know
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating a new city requires insider knowledge. From airports to tipping culture, here is your survival guide.
          </p>

          {/* Getting to Dallas */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPlaneDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M3 12 l8 -2 l0 -5 l2 5 l8 2 l-8 2 l-2 5 l0 -5z" fill="url(#gradPlaneDAL)" />
              </svg>
              Getting to Dallas
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Dallas–Fort Worth International Airport (DFW)</strong> ranks as the <strong>third-busiest airport globally</strong>, located <strong>20 miles from downtown Dallas</strong> and <strong>24 miles from Fort Worth</strong>. Five terminals serve 187 domestic and 51 international destinations. Direct flights from every major North American city, plus extensive Europe, Asia, and South America connections.
            </p>
            <p className="leading-relaxed mb-2"><strong>Ground transportation from DFW:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>DART Orange Line</strong> light rail connects Terminal A to downtown Dallas (40–50 minutes, $2.50)</li>
              <li><strong>TEXRail</strong> connects Terminal B to downtown Fort Worth (55 minutes, $2.50)</li>
              <li><strong>TRE shuttle</strong> connects to Trinity Railway Express at CentrePort station</li>
              <li><strong>New Silver Line</strong> (opened October 2025) connects DFW to Plano via DART</li>
              <li><strong>Rideshare/taxi</strong> to downtown Dallas: $40–55 (20–30 minutes with normal traffic)</li>
            </ul>
            <p className="leading-relaxed">
              <strong>Dallas Love Field (DAL)</strong>, 6 miles northwest of downtown, serves primarily domestic Southwest Airlines flights—often cheaper than DFW. DART light rail connects directly to downtown.
            </p>
          </div>

          {/* Weather & What to Pack */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradSunDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="4" fill="url(#gradSunDAL)" />
                <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3 M5 5 l2 2 M17 17 l2 2 M19 5 l-2 2 M7 17 l-2 2" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Weather & What to Pack
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>Highs:</strong> 95–100°F (35–38°C)</li>
              <li><strong>Lows:</strong> 75–80°F (24–27°C)</li>
              <li><strong>Humidity:</strong> 50–70%</li>
              <li>Afternoon thunderstorms possible (usually brief)</li>
            </ul>
            <p className="leading-relaxed mb-2"><strong>Pack:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Lightweight, breathable clothing (you'll sweat)</li>
              <li>Wide-brim hat, sunglasses, SPF 50+ sunscreen</li>
              <li>Reusable water bottle (Texas heat is no joke)</li>
              <li>Light jacket for over-air-conditioned indoors</li>
              <li>Comfortable walking shoes</li>
            </ul>
              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-medium">
                  <span>Critical heat safety</span>
                </div>
              <p className="leading-relaxed mt-2">
                Dallas summer heat causes heat exhaustion and heatstroke. Drink water constantly (aim for 1 gallon/day), seek shade midday, and limit alcohol during the hottest hours.
              </p>
            </div>
          </div>

          {/* Money & Costs */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradMoneyDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradMoneyDAL)" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
                <path d="M12 10 v4 M10.5 11.5 h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Money & Costs
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Stadium parking: $40–60 (pre-purchased), $100+ (day-of VIP)</li>
              <li>Mid-range hotel (Downtown): $275–400/night</li>
              <li>Mid-range hotel (Arlington): $250–350/night</li>
              <li>Meals: $12–20 (casual), $35–55 (mid-range), $80+ (upscale)</li>
              <li>DART single ride: $2.50; Regional Day Pass: $12</li>
              <li>Rideshare (downtown to stadium): $40–65</li>
            </ul>
          </div>

          {/* Transportation Passes */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Ticket" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradTicketDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <path d="M5 9 h14 v6 h-2 a2 2 0 1 1 0 -4 h-10 a2 2 0 1 0 0 4 h-2z" fill="url(#gradTicketDAL)" />
              </svg>
              Transportation Passes
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>DART Local Day Pass:</strong> $6 (all local DART services)</li>
              <li><strong>Regional Day Pass:</strong> $12 (DART + TRE + Trinity Metro—best value if using multiple systems)</li>
              <li>Purchase via <strong>GoPass app</strong> (iOS/Android) for mobile tickets</li>
            </ul>
          </div>

          {/* Safety & Street Smarts */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradShieldDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradShieldDAL)" />
                <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Safety & Street Smarts
            </h4>
            <p className="leading-relaxed mb-3">
              Dallas is generally safe for tourists in popular areas (Downtown, Uptown, Deep Ellum, Bishop Arts, Arlington Entertainment District). Standard urban precautions apply: secure valuables, stay aware of surroundings, avoid isolated areas late at night.
            </p>
            <p className="leading-relaxed">
              Higher-crime neighborhoods (South Boulevard–Park Row, parts of South Dallas) aren't near tourist zones, but exercise caution if rideshare routes you through unfamiliar areas.
            </p>
          </div>

          {/* Language & Culture */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Chat" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradChatDAL" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M4 6 h16 v9 a2 2 0 0 1 -2 2 H9 l-4 3 v-3 a2 2 0 0 1 -1 -2z" fill="url(#gradChatDAL)" />
              </svg>
              Language & Culture
            </h4>
            <p className="leading-relaxed mb-3">
              English dominates, but Dallas's diverse population (44% Hispanic/Latino) means Spanish is common in restaurants, service industries, and neighborhoods. Southern hospitality remains real—strangers will say "howdy," hold doors, and chat at bus stops.
            </p>
            <p className="leading-relaxed mb-2"><strong>Texas stereotypes you'll encounter:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Everything <strong>is</strong> bigger (portions, trucks, personalities)</li>
              <li>Cowboy boots and hats aren't costumes—locals wear them daily</li>
              <li>Sports are religion (Cowboys, Rangers, Mavericks, FC Dallas)</li>
              <li>"Y'all" is the correct plural of "you"</li>
            </ul>
          </div>
        </article>

        {/* FIFA Fan Festival & Match Day Atmosphere */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Group" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradGroup2DAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="8" cy="12" r="3" fill="url(#gradGroup2DAL)" />
              <circle cx="16" cy="12" r="3" fill="#0ea5e9" />
              <rect x="5" y="15" width="14" height="3" rx="1.5" fill="#0ea5e9" />
            </svg>
            FIFA Fan Festival & Match Day Atmosphere
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Join 50,000 fans in Dallas's "World Cup Living Room"—the energy here rivals the stadium itself.
          </p>

          <p className="leading-relaxed mb-4">
            While official locations await announcement, expect Dallas's <strong>FIFA Fan Festival</strong> at a high-profile downtown location—likely <strong>Klyde Warren Park</strong> or near <strong>Dealey Plaza</strong>. These free public zones feature giant screens, live music, sponsor activations, and food vendors, creating festival atmosphere for ticket-less fans.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
            <p className="leading-relaxed">
              <strong>Why Fan Festivals matter for Dallas:</strong> With nine matches spread across five weeks, the festival becomes the city's World Cup living room. Expect <strong>30,000–50,000 fans daily</strong> during matches, flags from every nation, and energy rivaling stadium atmosphere. It's where you'll meet supporters from countries you can barely pronounce.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Neighborhood Watch Parties */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="TV" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradTVDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#gradTVDAL)" />
              <rect x="10" y="18" width="4" height="2" rx="1" fill="#0ea5e9" />
            </svg>
            Neighborhood Watch Parties
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Can't get a ticket? No problem. The entire city transforms into a massive watch party.
          </p>

          <p className="leading-relaxed mb-4">
            Dallas's sports-obsessed culture means every bar, brewery, and restaurant with TVs will transform into unofficial fan zones:
          </p>
          <ul className="leading-relaxed space-y-2 list-disc list-inside">
            <li><strong>Deep Ellum</strong> bars will pulse with live music between matches</li>
            <li><strong>Uptown</strong> rooftop patios offer watch parties with city views</li>
            <li><strong>Bishop Arts</strong> cocktail lounges will craft match-themed drinks</li>
            <li><strong>Arlington Entertainment District</strong> (Texas Live!) becomes World Cup central with massive outdoor screens</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Local Soccer Passion */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Soccer" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSoccerDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="6" fill="url(#gradSoccerDAL)" />
              <path d="M12 6 l2 3 l-2 2 l-2 -2 z" fill="#ffffff" />
              <path d="M12 18 l2 -3 l-2 -2 l-2 2 z" fill="#ffffff" />
            </svg>
            Local Soccer Passion
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             This isn't just Cowboys country. Dallas has a deep, authentic soccer culture rooted in its diverse communities.
          </p>

          <p className="leading-relaxed">
            Don't underestimate Dallas's football knowledge. <strong>Inter Miami CF</strong> (now featuring Lionel Messi) plays at nearby <strong>Toyota Stadium</strong>. The city hosted <strong>1994 World Cup</strong> matches. <strong>FC Dallas</strong> develops serious youth talent (Weston McKennie, Kellyn Acosta both played in Qatar 2022). This isn't an NFL city pretending to care about football—soccer runs deep, especially in Latino and international communities.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Match Day at AT&T Stadium */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Clock" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradClockDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradClockDAL)" />
              <path d="M12 12 l0 -4 M12 12 l3 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Match Day at AT&T Stadium
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating the "Death Star" requires strategy. Here is how to handle the 80,000-person crowds.
          </p>

          <p className="leading-relaxed mb-3">
            Arrive <strong>2–3 hours early</strong> for smooth entry. Security screening, 80,000-person crowds, and sheer stadium size require buffer time.
          </p>
          <p className="leading-relaxed">
            The <strong>Entertainment District</strong> surrounding the stadium offers pre-match atmosphere—<strong>Texas Live!</strong> becomes party central with outdoor screens, bars, and thousands of fans mingling before kickoff.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Booking Strategy: How to Maximize Your Dallas World Cup Experience */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Booking Timeline</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Late 2025:</strong> Apply for Ticket Lottery</li>
               <li>• <strong>Tickets Confirmed:</strong> Book Hotel Immediately</li>
               <li>• <strong>3 Months Out:</strong> Book Flights</li>
               <li>• <strong>1 Month Out:</strong> Pre-book Parking</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Calendar check" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCalCheckDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradCalCheckDAL)" />
              <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
              <path d="M9 13 l2 2 l4 -4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Booking Strategy: How to Maximize Your Dallas World Cup Experience
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Timing is everything. Here is your step-by-step game plan to securing the best World Cup experience without overpaying.
          </p>

          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Now Through Early 2026</h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Monitor FIFA for official ticket sale announcements (lottery system opens late 2025)</li>
              <li>Research accommodation options but hold on booking until tickets confirmed</li>
              <li>Set flight price alerts for DFW or DAL</li>
              <li>Join Dallas World Cup online communities for real-time updates</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Immediately After Securing Tickets</h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Book accommodation within 24 hours</strong> (prices surge as availability drops)</li>
              <li>Finalize flights—use points/miles if possible to reduce costs</li>
              <li>Reserve rental car if planning Metroplex exploration beyond matches</li>
              <li>Pre-purchase AT&T Stadium parking if driving</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">2–4 Weeks Before Travel</h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Download <strong>GoPass app</strong> for DART/TRE tickets</li>
              <li>Book any upscale restaurant reservations (Fearing's, Uchi, etc.)</li>
              <li>Purchase attraction tickets online for skip-the-line entry</li>
              <li>Confirm stadium clear bag policy (typically 12" x 6" x 12" maximum)</li>
              <li>Research match-day shuttle schedules if using public transit</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800 mb-6">
            <p className="leading-relaxed">
              <strong>Pro strategy:</strong> Dallas's nine matches mean you could attend group stage and return for knockout rounds—split your trip with side adventures to Austin (3 hours), San Antonio (4 hours), or even <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> (4 hours) between match days. Texas is huge; use the downtime to explore.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
            <p className="leading-relaxed">
              <strong>Affiliate booking moment:</strong> When comparing hotel prices, check multiple platforms—<strong>Booking.com</strong>, <strong>Hotels.com</strong>, <strong>Expedia</strong>, and direct hotel websites often show different rates for identical rooms. Membership programs (Hotels.com rewards, Expedia One Key) offer additional savings. For stadium-adjacent properties like <strong>Live! by Loews</strong>, booking directly sometimes yields perks (late checkout, parking included) unavailable through third parties.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tour-planning-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Regional Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Hub City:</strong> Central location for multi-city trips</li>
               <li>• <strong>Texas Two-Step:</strong> Easy pairing with Houston</li>
               <li>• <strong>Midwest Connect:</strong> Direct link to Kansas City</li>
               <li>• <strong>Cross-Border:</strong> Gateway to Monterrey & Mexico City</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Map" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradMapDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <path d="M4 6 l6 -2 l6 2 l4 -2 v14 l-6 2 l-6 -2 l-4 2z" fill="url(#gradMapDAL)" />
            </svg>
            Plan Your Texas & Central US World Cup Tour
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Dallas is not just a destination; it is your strategic launchpad. Use its central location to unlock the broader World Cup experience.
          </p>

          <p className="leading-relaxed mb-6">
            Dallas's central location makes it the perfect hub for exploring Southern hospitality, Texas culture, and connecting to Mexican host cities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <i className="ri-route-line text-xl"></i>
              </div>
              <h4 className="editorial-h4 m-0">Popular Combinations</h4>
            </div>

            {/* Texas Two-Step */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-emerald-500">01.</span> Texas Two-Step
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Experience the best of the Lone Star State: Combine Dallas (current) with <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="font-medium text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> for a complete Texas World Cup experience, featuring two distinct Texas personalities and world-class stadiums.
              </p>
            </div>

            {/* Central Heartland */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-emerald-500">02.</span> Central Heartland
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Connect Dallas with <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="font-medium text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Kansas City</Link> for an authentic American heartland experience, with BBQ rivalry and genuine Midwestern hospitality.
              </p>
            </div>

            {/* Cross-Border Southern Circuit */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-emerald-500">03.</span> Cross-Border Southern Circuit
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Create an international adventure: Dallas (current) to <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="font-medium text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>, then cross into Mexico for <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="font-medium text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link> and <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="font-medium text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link> — experiencing three countries' cultures in one amazing trip.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="/world-cup-2026-host-cities" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl">
              <span>Browse All World Cup 2026 Host Cities</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Dallas Wins the World Cup Lottery */}
        <article id="why-dallas-wins" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="why-dallas-wins-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">The Winning Hand</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Nine Matches:</strong> Most of any host city</li>
               <li>• <strong>Five Weeks:</strong> Sustained tournament energy</li>
               <li>• <strong>Semi-Final:</strong> Hosting a decisive knockout game</li>
               <li>• <strong>Infrastructure:</strong> Proven large-scale event capability</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Crown" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCrownDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f59e0b" />
                  <stop offset="1" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <path d="M4 16 h16 v2 H4z" fill="#0ea5e9" />
              <path d="M4 16 l3 -6 l5 4 l5 -4 l3 6z" fill="url(#gradCrownDAL)" />
            </svg>
            Why Dallas Wins the World Cup Lottery
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             They wanted the final. They got something better: the most matches, the longest duration, and the heart of the tournament.
          </p>

          <p className="leading-relaxed mb-4">
            Let's address the elephant: Dallas initially wanted to host the <strong>final</strong> at AT&T Stadium, not just a semi-final. When FIFA awarded the championship match to MetLife Stadium in New Jersey instead, some viewed it as disappointment. But here's reality—Dallas won the <strong>hosting marathon</strong>, not just the final sprint.
          </p>
          
          {/* [STAT HIGHLIGHT] */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-emerald-600 mb-1">9</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Matches Hosted</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-emerald-600 mb-1">5</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Weeks of Action</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-emerald-600 mb-1">80k+</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Capacity per Match</div>
             </div>
          </div>

          <p className="leading-relaxed mb-4">
            <strong>Nine matches.</strong> Think about that. More than any other venue worldwide. While other cities host 3–4 games compressed into two weeks, Dallas experiences World Cup energy for <strong>five weeks</strong>. Every weekend from mid-June through mid-July features matches. The city doesn't get one moment—it gets sustained global attention.
          </p>
          
          <p className="leading-relaxed mb-4">
            The stadium itself justifies FIFA's confidence. That retractable roof and climate control mean no weather gambles—matches happen in perfect conditions regardless of Texas summer. The 80,000 capacity creates electric atmosphere. The infrastructure has proven itself through Super Bowls and Copa América. And the Metroplex's hotel capacity (35,000+ rooms) ensures FIFA officials, teams, media, and fans have accommodation.
          </p>
          
          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "You'll eat barbecue with Argentine fans, watch matches in air-conditioned comfort, and experience Texas hospitality that treats strangers like neighbors."
          </blockquote>

          <p className="leading-relaxed">
            Beyond logistics, Dallas delivers culture. This is <strong>real America</strong>—not coastal elite perception, but heartland values mixed with global sophistication. You'll eat barbecue with Argentine fans, watch matches in air-conditioned comfort, two-step at honky-tonks with Brazilian supporters, and experience Texas hospitality that treats strangers like neighbors.
          </p>
          
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 dark:from-purple-900/20 dark:to-indigo-900/20 dark:border-purple-800 shadow-sm">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-full text-purple-600 dark:text-purple-300">
                 <i className="ri-trophy-line text-2xl"></i>
               </div>
               <div>
                 <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-2">The Semi-Final Showdown</h4>
                 <p className="leading-relaxed text-purple-800 dark:text-purple-200">
                   The <strong>semi-final on July 14</strong> seals Dallas's World Cup significance. Four teams remain. Two advance to glory. 80,000+ witnesses. That's the match casual fans will regret missing.
                 </p>
               </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Checklist: Your Dallas World Cup Essentials */}
        <article id="checklist" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="checklist-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Readiness Tracker</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Tickets:</strong> Official FIFA channels only</li>
               <li>• <strong>Logistics:</strong> Hotel & Flight confirmed</li>
               <li>• <strong>Gear:</strong> Clear bag & sun protection</li>
               <li>• <strong>Tech:</strong> GoPass app & charger</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Checklist" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradChecklistDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#gradChecklistDAL)" />
              <path d="M7 10 l2 2 l3 -3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="7" y="13" width="8" height="2" rx="1" fill="#ffffff" />
            </svg>
            Final Checklist: Your Dallas World Cup Essentials
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             From tickets to sunscreen, ensure you are match-ready with this essential inventory.
          </p>

          <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
            <ul className="leading-relaxed space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Match tickets</strong> secured through FIFA official channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Hotel booked</strong> (Downtown for culture, Arlington for stadium proximity)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Flights confirmed</strong> to DFW (or DAL if available)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Transportation plan finalized</strong> (DART+TRE combo, rideshare budget, or parking pre-purchased)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>GoPass app downloaded</strong> for DART/TRE mobile tickets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Attraction tickets purchased online</strong> (Sixth Floor Museum, Reunion Tower, museums)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Restaurant reservations made</strong> for upscale dining</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Stadium-compliant clear bag purchased</strong> (12" x 6" x 12" max)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Sun protection packed</strong> (hat, sunglasses, SPF 50+ sunscreen)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Portable phone charger</strong> (Texas heat drains batteries fast)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1"><i className="ri-checkbox-circle-fill text-xl"></i></span>
                <span><strong>Cowboy boots optional</strong> (but when in Rome...)</span>
              </li>
            </ul>
          </div>
          
          <p className="leading-relaxed mt-8 text-lg font-medium text-slate-800 dark:text-slate-200 border-l-4 border-emerald-500 pl-4 italic">
            The 2026 FIFA World Cup in Dallas isn't just another tournament stop—it's the <strong>most</strong> of any city's World Cup experience. Nine matches mean you can build an entire summer vacation around knockout drama, explore Texas between games, and witness the semi-final that determines who reaches football's ultimate stage.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Conclusion */}
        <article id="conclusion" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="conclusion-anchor" className="scroll-mt-24"></div>

          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Flag" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradFlagDAL" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M5 5 v14" stroke="#0ea5e9" strokeWidth="2" />
              <path d="M7 6 h10 l-2 3 l2 3 h-10z" fill="url(#gradFlagDAL)" />
            </svg>
            Conclusion
          </h3>
          <p className="leading-relaxed text-lg text-slate-700 dark:text-slate-300 mb-6">
            Whether you're there for the Longhorn cattle drive and barbecue, the Arts District museums and culture, or simply 80,000 fans roaring inside Jerry World, Dallas delivers what it promises: <strong>everything bigger</strong>.
          </p>
          <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              <strong>Y'all ready for kickoff?</strong>
            </p>
            <p className="text-slate-500 dark:text-slate-400">The world is coming to Texas.</p>
          </div>
          <hr className="editorial-divider" />
        </article>



      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Interactive Rating Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-space">Rate this Guide</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">How helpful was this guide for your World Cup planning?</p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                  aria-label={`Rate ${star} stars`}
                >
                  <i className={`text-3xl ri-star-${(hoverRating || userRating) >= star ? 'fill' : 'line'} ${(hoverRating || userRating) >= star ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'} transition-colors duration-200`}></i>
                </button>
              ))}
            </div>
            
            <div className={`transition-all duration-500 ${hasRated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                <i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!
              </p>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Related Guides Recommendation Engine */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
            <Link to="/world-cup-2026-host-cities" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-medium flex items-center gap-1 group">
              View all cities <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation 1: Houston (Texas Connection) */}
            <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/houston-world-cup-2026.webp" 
                alt="Houston World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">Texas Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Houston</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete guide to NRG Stadium and Space City's World Cup events.</p>
              </div>
            </Link>

            {/* Recommendation 2: Los Angeles (West Coast Hub) */}
            <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/los-angeles-world-cup-2026.webp" 
                alt="Los Angeles World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Entertainment Hub</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Los Angeles</h4>
                <p className="text-slate-300 text-sm line-clamp-2">SoFi Stadium guide and Hollywood entertainment for fans.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Elite Tier Footer Meta Section */}
        <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Share Section */}
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
              <div className="flex items-center gap-2">
                <a href={`https://twitter.com/intent/tweet?text=Dallas%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on X">
                  <i className="ri-twitter-x-line text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${pageUrl}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#1877F2] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on Facebook">
                  <i className="ri-facebook-circle-fill text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <button onClick={() => navigator.clipboard.writeText(`${siteUrl}${pageUrl}`)}
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-500 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Copy Link">
                  <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* Separator for mobile */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

            {/* Last Reviewed Section */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <i className="ri-shield-check-fill text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Verified & Updated</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                   {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </div>
  );
}
