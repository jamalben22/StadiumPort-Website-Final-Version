import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function BostonArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/boston-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';

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
    link.href = '/images/cities/boston-world-cup-2026.webp'
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

  useEffect(() => {
    const entry = getEditorialEntry('city','boston')
    setPageMeta({
      title: 'Boston World Cup 2026: Complete Travel Guide',
      description: "Highlight Boston’s mix of history and sports passion, showcasing its skyline and Gillette Stadium’s nearby location in Foxborough.",
      url: `${siteUrl}${currentPath}`,
      image: `${siteUrl}/images/cities/boston-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Boston', 'Gillette Stadium', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Boston World Cup 2026: Complete Travel Guide',
            "Highlight Boston’s mix of history and sports passion, showcasing its skyline and Gillette Stadium’s nearby location in Foxborough.",
            `${siteUrl}${currentPath}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Boston', 'Gillette Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Boston', url: currentPath }
          ]),
          generateImageObjectSchema(
            '/images/cities/boston-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Boston skyline – World Cup 2026 host city' }
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
            src="/images/cities/boston-world-cup-2026.webp"
            alt="Boston skyline – World Cup 2026 host city"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Boston</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Boston World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>USA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>Gillette Stadium</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>64,628 Capacity</span>
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
      <section id="main-content" className="editorial-article-premium boston-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY: 7 matches, Quarter-final host, Gillette Stadium venue, Historic Hub] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Boston hosts <strong>7 matches</strong> spanning four weeks</li>
               <li>• Venue: <strong>Gillette Stadium</strong> (Foxborough)</li>
               <li>• Key Event: <strong>Quarter-final on July 9</strong></li>
               <li>• Highlight: Sail Boston & America 250 celebrations</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>Boston World Cup 2026: Complete Travel Guide
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Highlight Boston’s mix of history and sports passion, showcasing its skyline and Gillette Stadium’s nearby location in Foxborough.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`When the 2026 FIFA World Cup kicks off in Boston, the city that launched a revolution will welcome the world for `}<strong>seven matches</strong>{` spanning four weeks—including five group stage encounters, a Round of 32 showdown, and a `}<strong>quarter-final</strong>{` on July 9 that guarantees elite football drama. This isn't Boston's first World Cup rodeo. In 1994, the then-Foxboro Stadium hosted six matches including quarterfinal action, helping plant American soccer culture that eventually blossomed into MLS. Boston is one of the `}<Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">16 host cities</Link>{` welcoming fans to World Cup 2026.
            
            But 2026 is different. Boston hosts more than just matches—the city becomes the epicenter of a once-in-a-lifetime sports trifecta. `}<strong>Sail Boston</strong>{` (July 11-16), the largest maritime celebration ever to visit the United States, arrives days after the quarter-final. `}<strong>America 250</strong>{` commemorations celebrating the nation's founding run throughout summer. Add seven World Cup matches to the mix, and Boston delivers the perfect storm of international football, nautical spectacle, and patriotic celebration.`}
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "Boston delivers the perfect storm of international football, nautical spectacle, and patriotic celebration."
          </blockquote>

          <p className="whitespace-pre-line">
            {`Whether you're watching matches at `}<Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Gillette Stadium</Link>{` 25 miles southwest or exploring Revolutionary War history along the Freedom Trail, Boston promises a World Cup experience wrapped in red-brick charm, championship pedigree (17 titles across major sports since 2000), and that unmistakable New England pride.
            
            This guide delivers the real intel: stadium access via commuter rail, neighborhood strategies, revolutionary history tours, and what to do when you're not watching 65,000 fans roar inside the home of the six-time Super Bowl champion Patriots.`}
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-[#01b47d]/5 to-white dark:from-navy-900 dark:to-navy-800 border border-[#01b47d]/10 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-[#008f63] dark:text-[#01b47d] mb-4">
              <i className="ri-bookmark-line"></i> Essential Boston Links
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Gillette Stadium Guide</Link>
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
                   <strong>Nearby Cities:</strong><br/>
                   <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Philadelphia</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium: Gillette Stadium (Boston Stadium) */}
        <article id="stadium" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stadium-anchor" className="scroll-mt-24"></div>

          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            The Stadium: Gillette Stadium (Boston Stadium)
          </h3>

          <div className="space-y-6">
            <div>
              <p className="whitespace-pre-line">
                {`Boston's World Cup action unfolds at `}<strong>Gillette Stadium</strong>{` in Foxborough, Massachusetts—temporarily rebranded "Boston Stadium" for FIFA compliance. Located at `}<strong>1 Patriot Place, Foxborough, MA 02035</strong>{`, this isn't a suburban afterthought—it's a purpose-built sports cathedral `}<strong>22 miles southwest of downtown Boston</strong>{` that's hosted six Super Bowls, MLS Cup finals, international soccer friendlies, and the 2024 Copa América Final.`}
              </p>
            </div>

            {/* [STAT HIGHLIGHT SECTION] */}
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 my-8">
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-navy-600 pb-4">
                The Stadium Specs:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-group-fill text-[#01b47d] mt-1"></i>
                            <span><strong>64,628 seats</strong> <span className="block text-sm text-slate-500">for NFL/soccer configuration (expandable to 68,756 for special events)</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-football-line text-[#01b47d] mt-1"></i>
                            <span><strong>Natural grass</strong> <span className="block text-sm text-slate-500">will replace artificial turf specifically for World Cup</span></span>
                        </li>
                      </ul>
                  </div>
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-sun-line text-[#01b47d] mt-1"></i>
                            <span><strong>Open-air design</strong> <span className="block text-sm text-slate-500">with partial roof coverage</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-calendar-event-line text-[#01b47d] mt-1"></i>
                            <span><strong>Opened July 2002</strong> <span className="block text-sm text-slate-500">with $325 million private financing (no taxpayer money)</span></span>
                        </li>
                      </ul>
                  </div>
              </div>
              <div className="mt-4">
                  <ul className="leading-relaxed space-y-4 list-none">
                    <li className="flex items-start gap-3">
                        <i className="ri-pencil-ruler-2-line text-[#01b47d] mt-1"></i>
                        <span><strong>Designed by HOK Sport</strong> <span className="block text-sm text-slate-500">(now Populous), modeled after Baltimore's M&T Bank Stadium</span></span>
                    </li>
                  </ul>
              </div>
            </div>

            <p className="leading-relaxed mt-3">
              Here's what makes Gillette Stadium World Cup-ready: Owner Robert Kraft built this venue as a dual-purpose football/soccer stadium from day one. The New England Revolution (MLS) has played here since 2002, regularly drawing 20,000+ fans and setting the 65,612 attendance record when Inter Miami brought Lionel Messi to town in April 2024. When FIFA officials evaluated U.S. venues, they saw a stadium that already understands the beautiful game, not an NFL-only facility awkwardly learning soccer on the fly.
            </p>
            <p className="leading-relaxed mt-3">
              The stadium's track record speaks volumes: It hosted the 1994 World Cup predecessor Foxboro Stadium (demolished after 31 years to make room for Gillette), multiple CONCACAF Gold Cup finals, international friendlies between global powers, and MLS Cup finals that proved New England could deliver world-class football atmosphere. The <strong>iconic lighthouse entrance</strong>—a 218-foot structure offering 360° views—and the <strong>connected Patriot Place</strong> shopping/entertainment district create infrastructure ready for 65,000+ international visitors arriving simultaneously.
            </p>
            
            {/* [SIDEBAR: Important Logistics] */}
            <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                <i className="ri-information-line"></i>
                Important Context
              </h4>
              <p className="leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                Foxborough is a Boston suburb, not downtown. While the stadium technically sits 22 miles southwest, the entire Greater Boston region functions as one interconnected metro area. You'll need to plan transportation rather than walking from your hotel, but the MBTA commuter rail delivers you practically to the stadium gates—something few American venues can claim.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Match Schedule: Seven Games Including a Quarter-Final */}
        <article id="schedule" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="schedule-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Schedule at a Glance</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>5 Group Stage Matches</strong></li>
               <li>• <strong>2 Knockout Matches</strong> (Round of 32 & Quarter-Final)</li>
               <li>• <strong>Quarter-Final:</strong> Thursday, July 9, 2026</li>
               <li>• <strong>Total:</strong> 7 matches</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-calendar-event-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            The Match Schedule: Seven Games Including a Quarter-Final
          </h3>

          <p className="leading-relaxed mb-8">
            Boston's seven-match allocation spans four tournament weeks, culminating in a quarter-final that delivers must-watch knockout football:
          </p>

          <div className="space-y-8">
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-navy-700">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                Group Stage (Five Matches)
              </h4>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">01</span>
                    <span><strong>Friday, June 13, 2026</strong> – Group Stage (Boston's tournament opener)</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">02</span>
                    <span><strong>Tuesday, June 16, 2026</strong> – Group Stage</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">03</span>
                    <span><strong>Friday, June 19, 2026</strong> – Group Stage</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">04</span>
                    <span><strong>Tuesday, June 23, 2026</strong> – Group Stage</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">05</span>
                    <span><strong>Friday, June 26, 2026</strong> – Group Stage</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-800/30">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                Knockout Stage (Two Matches)
              </h4>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                    <span className="font-mono text-amber-500 font-bold">R32</span>
                    <span><strong>Monday, June 29, 2026</strong> – Round of 32</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-100 to-white dark:from-amber-900/40 dark:to-navy-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
                    <span className="font-mono text-amber-600 dark:text-amber-400 font-bold text-lg">QF</span>
                    <span className="text-lg"><strong>Thursday, July 9, 2026</strong> – <span className="uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">QUARTER-FINAL</span></span>
                </li>
              </ul>

              <div className="mt-6 pl-4 border-l-2 border-amber-200 dark:border-amber-800">
                <p className="leading-relaxed italic text-slate-700 dark:text-slate-300">
                  That <strong>quarter-final on July 9</strong> is the crown jewel. Only eight teams remain worldwide. Four advance to semi-finals. 65,000+ witnesses watch two footballing giants battle for survival. If you can only attend one match, aim for this one—the intensity, talent level, and stakes dwarf group stage encounters.
                </p>
              </div>
            </div>

            {/* [PULL QUOTE] */}
            <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
               "If you can only attend one match, aim for this one—the intensity, talent level, and stakes dwarf group stage encounters."
            </blockquote>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                Timing advantage
              </h4>
              <p className="leading-relaxed">
                Boston's quarter-final falls <strong>two days before Sail Boston</strong> (July 11-16), meaning international visitors can combine World Cup football with the largest maritime celebration in U.S. history. Tall ships from 25+ nations will sail into Boston Harbor for the first time since 2017—a once-in-a-decade spectacle timed perfectly with America's 250th birthday celebrations. You're not just attending a World Cup; you're witnessing multiple once-in-a-lifetime events converging on one city.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to Gillette Stadium: The Commuter Rail Advantage */}
        <article id="transport" className="editorial-body">
          {/* [SCROLL ANCHOR] */}
          <div id="transport-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Transport Reality Check</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Commuter Rail:</strong> Best option ($20 round-trip)</li>
               <li>• <strong>Driving:</strong> Requires pre-booked parking ($40-60)</li>
               <li>• <strong>Rideshare:</strong> Expensive ($50-80+ each way)</li>
               <li>• <strong>Walk:</strong> Only if staying in Foxborough</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-train-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Getting to Gillette Stadium: The Commuter Rail Advantage
          </h3>

          <p className="leading-relaxed mb-6">
            Here's Boston's World Cup secret weapon: <strong>dedicated MBTA Commuter Rail service</strong> directly to Foxboro Station, a 10-minute walk from the stadium. Unlike sprawling Sunbelt cities where you're hostage to traffic and surge pricing, Boston delivers efficient, affordable rail transit purpose-built for major events.
          </p>

          <h3 className="editorial-h3 animate-fade-up mb-2">Your Best Options</h3>

          {/* Best Options */}
          <div className="space-y-12">
            {/* MBTA Commuter Rail */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  1. MBTA Commuter Rail Event Trains (Recommended for Most Visitors)
                </h4>
                <p className="leading-relaxed whitespace-pre-line mb-4">
                  {`The Massachusetts Bay Transportation Authority operates `}<strong>special World Cup event trains</strong>{` from Boston's South Station and Providence, Rhode Island directly to `}<strong>Foxboro Station</strong>{` for every match.
                  
                  • `}<strong>Route from Boston:</strong>{` South Station → Back Bay Station → Dedham Corporate Center → Foxboro Station (10-minute walk to stadium)
                  • `}<strong>Route from Providence:</strong>{` Providence → Pawtucket/Central Falls → Attleboro → Mansfield → Foxboro Station`}
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> $20 round-trip from Boston; $20 round-trip from Providence</li>
                    <li><strong>Schedule:</strong> Trains arrive ~90 minutes before kickoff; depart 30 minutes after match ends</li>
                    <li><strong>Tickets:</strong> Purchase <strong>only through mTicket app</strong>—limited capacity, buy 2+ weeks before match</li>
                  </ul>
                </div>

                <div className="callout-warning">
                    <div className="callout-icon flex items-center gap-2 font-medium">
                      <span>Critical details</span>
                    </div>
                    <ul className="leading-relaxed mt-2 text-sm list-disc list-inside">
                      <li>Regular MBTA tickets/passes <strong>not valid</strong> for event trains—you must buy separate World Cup tickets</li>
                      <li>Tickets sell out fast (9,000 fans per Taylor Swift concert; expect 20,000 per World Cup match)</li>
                      <li>The MBTA plans <strong>permanent high-level platform upgrades</strong> by April 2026 to handle crowds</li>
                    </ul>
                  </div>

                <p className="leading-relaxed mt-4">
                    The MBTA expects to transport up to 20,000 fans per match via expanded commuter rail service, with new permanent platforms completed by April 2026. Event trains typically arrive about an hour before events and depart 30 minutes after they end, with Boston trains stopping at South Station, Back Bay, and Dedham Corporate Center.
                </p>
                <p className="leading-relaxed mt-4">
                    Planning a multi-city trip? Boston connects easily to <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey</Link> and <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Philadelphia</Link> via Amtrak and short flights.
                </p>
              </div>
            </section>

            {/* Weekday Commuter Rail */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  2. Weekday Commuter Rail (If Match Falls Tuesday-Friday)
                </h4>
                <p className="leading-relaxed mb-4">
                  Regular weekday service runs between Foxboro and Boston's South Station via the Franklin/Foxboro Line, serving local stops. Budget 60-75 minutes. <strong>Note:</strong> Weekend service is limited—verify schedules for Saturday/Sunday matches.
                </p>
              </div>
            </section>

            {/* Rideshare/Taxi */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                  3. Rideshare/Taxi (Most Flexible, Most Expensive)
                </h4>
                <p className="leading-relaxed mb-4">
                  Uber and Lyft work from downtown Boston or surrounding areas, but expect <strong>$50-80 each way</strong> with surge pricing doubling post-match rates. Designated rideshare pickup is at <strong>Lot 15</strong> near CVS Health Gate—expect 30-60 minute waits after final whistle as 65,000 people simultaneously request rides.
                </p>
                <div className="callout-pro-tip border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 p-5 rounded-r-lg">
                  <h5 className="text-md font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    Smart hack
                  </h5>
                  <p className="leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                    Take commuter rail TO the match (cheap, reliable), then split rideshare home with fellow fans when you're tired and willing to pay for door-to-door convenience.
                  </p>
                </div>
              </div>
            </section>

            {/* Driving + Parking */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  4. Driving + Pre-Booked Parking
                </h4>
                <p className="leading-relaxed mb-4">
                  If you rent a car to explore New England beyond Boston, driving works—<strong>with advance parking reservations</strong> purchased weeks ahead online.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Stadium parking:</strong> $40-60 standard lots (pre-purchase online); VIP lots reach $100+</li>
                    <li><strong>Free parking:</strong> Available across Route 1 for Patriots games (verify World Cup policy)</li>
                    <li><strong>Reality:</strong> Post-match exodus takes 60-90 minutes. I-95, Route 1, and I-495 become parking lots.</li>
                    <li><strong>Alternative strategy:</strong> Park at outer MBTA stations with free/cheap parking ($4.50/day), take commuter rail to stadium. Saves money and post-match stress.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay: Downtown Boston vs. Suburban Strategy */}
        <article id="stay" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Downtown/Back Bay:</strong> Best for full experience</li>
               <li>• <strong>Foxborough:</strong> Best for stadium proximity</li>
               <li>• <strong>Cambridge:</strong> University atmosphere</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Where to Stay: Downtown Boston vs. Suburban Strategy
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Boston's compact geography makes most neighborhoods viable World Cup bases, but the 22-mile stadium distance creates a strategic choice: stay in Boston's historic core (culture, attractions, energy) and commute to matches, or stay near Foxborough (convenience) and sacrifice urban charm.
          </p>

          {/* Downtown Boston / Back Bay */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Downtown Boston / Back Bay (Best for Full Experience)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> You're in the heart of Revolutionary history—<strong>Freedom Trail</strong>, <strong>Boston Common</strong>, <strong>Faneuil Hall</strong> all within walking distance. The <strong>MBTA</strong> converges at South Station for direct commuter rail to matches. FIFA Fan Festivals will center downtown, likely at <strong>City Hall Plaza</strong> or near the harbor. World Cup atmosphere concentrates where international visitors naturally gather.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Commuter rail from South Station (60 minutes + 10-minute walk), or rideshare ($50-80 each way).
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Historic landmarks meet modern luxury. <strong>Fairmont Copley Plaza</strong> delivers Gilded Age elegance; <strong>Omni Parker House</strong> (JFK proposed to Jackie here) offers downtown convenience; <strong>Liberty Hotel</strong> occupies a converted 1851 jail in Beacon Hill with original cell bars still visible. Expect <strong>$300-500/night</strong> for mid-range during World Cup; waterfront properties reach <strong>$500-750/night</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 mb-3">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Best neighborhoods:</h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>Back Bay:</strong> Victorian brownstones, Newbury Street shopping, Boston Public Library, walkable to everything</li>
                <li><strong>Beacon Hill:</strong> Gas-lit streets, Federal-style architecture, <strong>Acorn Street</strong> (Boston's most photographed street)</li>
                <li><strong>North End (Little Italy):</strong> Oldest neighborhood, Italian restaurants, Paul Revere House, intimate charm</li>
                <li><strong>Seaport District:</strong> Waterfront views, modern hotels, connected to South Station via Silver Line</li>
              </ul>
            </div>
            <p className="leading-relaxed mb-3">
                <strong>Reality check:</strong> The 60-minute commuter rail journey is real. Budget 2+ hours each way factoring in early arrival for security. But you'll experience authentic Boston—not suburban Foxborough parking lots.
            </p>
            <p className="leading-relaxed">
                <strong>Book through comparison sites:</strong> Properties near South Station (Seaport, downtown), Back Bay Station, or other commuter rail stops offer best transit access. Check multiple platforms—identical rooms often vary 15-25% across booking sites.
            </p>
          </div>

          {/* Foxborough */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Foxborough / Mansfield / Attleboro (Best for Stadium Proximity)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Minimize transit stress entirely. You're <strong>10-20 minutes from Gillette Stadium</strong> by car or short commuter rail ride.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Drive (15 minutes), rideshare ($20-30), or local commuter rail stations.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> <strong>Renaissance Boston Patriot Place Hotel</strong> connects directly to the stadium entertainment district—literally walk to matches. <strong>Hampton Inn Foxborough</strong> and <strong>Residence Inn Foxborough</strong> offer family-friendly options. <strong>Mansfield</strong> and <strong>Attleboro</strong> (both on Providence commuter rail line) have budget chains. Expect <strong>$200-375/night</strong> during World Cup.
            </p>
            <p className="leading-relaxed">
              <strong>Reality check:</strong> These are suburban New England towns, not tourist destinations. You'll find chain restaurants, strip malls, and stadium parking—not Revolutionary War history or brownstone charm. Perfect for hardcore fans attending multiple matches who prioritize logistics over sightseeing.
            </p>
          </div>

          {/* Cambridge */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Cambridge (Best for University Atmosphere)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Across the Charles River, Cambridge offers <strong>Harvard University</strong>, <strong>MIT</strong>, bookstores, coffeehouses, and intellectual energy without downtown tourist crowds.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Red Line subway to South Station (15 minutes) → commuter rail to Foxborough. Total 75-90 minutes.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> <strong>Hotel Marlowe</strong> (Kimpton boutique near MIT), <strong>Le Meridien Cambridge-MIT</strong> (modern, tech-adjacent). Expect <strong>$275-450/night</strong>.
            </p>
            <p className="leading-relaxed">
              <strong>Best for:</strong> Travelers who want Boston access minus chaos; university campus nostalgia; quieter base between matches.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Matches: What to Do in Boston */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Culture & Leisure</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>History:</strong> Freedom Trail, Faneuil Hall</li>
               <li>• <strong>Sports:</strong> Fenway Park</li>
               <li>• <strong>Nature:</strong> Boston Common, Aquarium</li>
               <li>• <strong>Culture:</strong> Museum of Fine Arts, Public Library</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Beyond the Matches: What to Do in Boston
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            You didn't cross an ocean (or a continent) to only see 90 minutes of football. Boston delivers world-class history and culture between matches.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
            Must-Do Attractions
          </h4>

          <div className="space-y-6">
            {/* The Freedom Trail */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                The Freedom Trail
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                The famous Freedom Trail is a 2.5-mile red-brick trail through Boston's historic neighborhoods that tells the story of the American Revolution, from the Old North Church to Faneuil Hall. Start at <strong>Boston Common Visitor Center</strong> (139 Tremont Street), follow the red-brick path embedded in sidewalks to 16 historic sites including:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside mb-3">
                <li><strong>Boston Common</strong>: America's oldest public park (1634)</li>
                <li><strong>Granary Burying Ground</strong>: Final resting place of John Hancock, Samuel Adams, Paul Revere</li>
                <li><strong>Old State House</strong>: Site of the Boston Massacre (1770)</li>
                <li><strong>Faneuil Hall</strong>: "Cradle of Liberty" where colonists protested British taxation</li>
                <li><strong>Paul Revere House</strong>: Oldest structure in downtown Boston (1680)</li>
                <li><strong>Old North Church</strong>: "One if by land, two if by sea" (1775)</li>
                <li><strong>USS Constitution</strong>: World's oldest commissioned naval vessel still afloat (1797)</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The Freedom Trail can easily be walked in a day, but seeing all historical sites thoroughly requires two to three full days. <strong>Free self-guided</strong> via smartphone app, or <strong>$15-20 guided tours</strong> with costumed historical interpreters.
              </p>
            </div>

            {/* Fenway Park */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                Fenway Park
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Fenway Park opened in 1912 and is the oldest MLB stadium, offering an authentic look at Boston's beloved baseball legacy. Catch a <strong>Boston Red Sox game</strong> (season runs April-October, check June/July schedule), or take <strong>guided stadium tours</strong> ($25, daily) exploring the Green Monster, Pesky's Pole, and championship history. Tours book online weeks ahead during summer.
              </p>
            </div>

            {/* Faneuil Hall Marketplace */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                Faneuil Hall Marketplace
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Built as a center of commerce in 1741, Faneuil Hall served as an open forum meeting hall and marketplace for more than 270 years. Today's marketplace offers street performers, food stalls (try clam chowder at <strong>Boston Chowda</strong>), Quincy Market shopping, and people-watching central. Free, always open. Can get touristy but genuinely entertaining.
              </p>
            </div>

            {/* New England Aquarium */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                New England Aquarium
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Giant Ocean Tank featuring sea turtles, sharks, and 2,000 animals, plus <strong>penguin colony</strong> and <strong>IMAX theater</strong>. <strong>Admission: $38 adults</strong>. Located on waterfront near Faneuil Hall; combine with harbor walk.
              </p>
            </div>

            {/* Museum of Fine Arts */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                Museum of Fine Arts
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                One of America's great art museums: Egyptian mummies, Impressionist masterpieces, American art, Asian collections spanning 5,000 years. <strong>Admission: $27</strong>; free entry on select Wednesday evenings. Accessible via Green Line.
              </p>
            </div>

            {/* Boston Public Library */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                Boston Public Library
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The Boston Public Library in Back Bay is America's first public library, featuring murals, rare books, and tranquil reading rooms with stunning architecture. Free admission, free tours. Copley Square location is architectural marvel—don't miss John Singer Sargent murals.
              </p>
            </div>

            {/* Duck Tours */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                Duck Tours
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Boston Duck Tours use World War II-style amphibious landing crafts that travel on both land and water, providing an entertaining way to see historic sites. 90-minute tours depart from Prudential Center or Museum of Science. <strong>$50 adults</strong>. Cheesy but genuinely fun—the land-to-water transition into Charles River gets everyone laughing.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Boston Food Scene: Fuel for Match Days */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Culinary Highlights</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Seafood:</strong> Union Oyster House, Neptune Oyster</li>
               <li>• <strong>Italian:</strong> North End (Mike's Pastry vs. Modern)</li>
               <li>• <strong>Casual:</strong> Flour Bakery, Sam LaGrassa's</li>
               <li>• <strong>Coffee:</strong> Thinking Cup, Tatte</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Boston Food Scene: Fuel for Match Days
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Boston's culinary identity centers on seafood, Italian-American tradition (North End), and New England comfort food.
          </p>

          {/* Pre-Match Fueling */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Pre-Match Fueling
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Union Oyster House</strong> (Downtown): America's oldest restaurant (1826), serving oysters and clam chowder since before the Civil War.</li>
              <li><strong>Mike's Pastry</strong> (North End): Legendary Italian bakery. Cannoli wars with Modern Pastry next door—try both, pick a side.</li>
              <li><strong>Flour Bakery</strong> (multiple locations): Joanne Chang's pastries, sandwiches, sticky buns. Fuel for match-day transit.</li>
              <li><strong>The Paramount</strong> (Beacon Hill): Classic diner breakfast. Get there early or face lines.</li>
            </ul>
          </div>

          {/* Post-Match Celebrating */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Post-Match Celebrating
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Neptune Oyster</strong> (North End): Tiny restaurant, massive reputation. Best lobster roll in Boston (warm with butter or cold with mayo). No reservations—arrive at 11 AM opening or 5 PM dinner.</li>
              <li><strong>Ostra</strong> (Back Bay): Upscale Mediterranean seafood. Perfect victory celebration. Reserve weeks ahead.</li>
              <li><strong>Giacomo's Ristorante</strong> (North End): No-frills Italian, huge portions, always packed. Cash only. Worth the wait.</li>
            </ul>
          </div>

          {/* Budget-Friendly */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Budget-Friendly
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Sam LaGrassa's</strong> (Downtown): Pastrami sandwiches, overstuffed, legendary. Lunch crowd insane but fast-moving. <strong>$15-18</strong>.</li>
              <li><strong>Quincy Market Food Colonnade</strong> (Faneuil Hall): Multiple vendors, grab-and-go options, outdoor seating. Budget-friendly variety.</li>
              <li><strong>Santarpio's Pizza</strong> (East Boston): Old-school pizza near airport. Locals' favorite since 1903. Cash only.</li>
            </ul>
          </div>

          {/* Coffee Culture */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Coffee Culture
            </h4>
            <p className="leading-relaxed mb-2">Boston takes coffee seriously—blame the universities.</p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Thinking Cup</strong> (multiple locations): Stumptown Coffee roaster, quality beans</li>
              <li><strong>Pavement Coffeehouse</strong> (multiple locations): Local chain, college-student vibe</li>
              <li><strong>Tatte Bakery & Cafe</strong> (multiple locations): Israeli-inspired, gorgeous pastries, Instagram-worthy</li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Information: What You Need to Know */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Essential Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Airport:</strong> Logan (BOS) - 3 miles from downtown</li>
               <li>• <strong>Weather:</strong> Warm/Humid (75-85°F)</li>
               <li>• <strong>Transit:</strong> MBTA CharlieCard</li>
               <li>• <strong>Safety:</strong> Generally safe in tourist zones</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Practical Information: What You Need to Know
          </h3>
          
          {/* Getting to Boston */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Getting to Boston
            </h4>
            <p className="leading-relaxed mb-3">
              Boston Logan International Airport (BOS) sits approximately 3 miles northeast of downtown, welcoming over 43 million passengers in 2024. The airport opened in 1923 and is the largest airport in Massachusetts and New England, serving as a transatlantic hub for Delta Air Lines and a focus city for JetBlue.
            </p>
            <p className="leading-relaxed mb-2"><strong>Ground transportation from Logan:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li>MBTA Silver Line SL1 provides free direct service between all airport terminals and South Station downtown, taking approximately 20-25 minutes</li>
              <li>MBTA Blue Line subway connects via free shuttle buses between terminals and Airport station, operating 6 AM to 12:30 AM daily</li>
              <li><strong>Taxi:</strong> $25-45 to downtown (10-15 minutes with light traffic)</li>
              <li><strong>Rideshare:</strong> $20-35 to downtown from designated pickup zones</li>
            </ul>
            <p className="leading-relaxed">
              Many visitors combine Boston with <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Toronto</Link> for a cross-border experience—direct flights connect BOS and YYZ in under 2 hours.
            </p>
          </div>

          {/* Weather & What to Pack */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Weather & What to Pack
            </h4>
            <p className="leading-relaxed mb-2">June/July in Boston delivers <strong>warm, humid summer</strong> with occasional afternoon thunderstorms:</p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li>Highs: 75-85°F (24-29°C)</li>
              <li>Lows: 60-68°F (16-20°C)</li>
              <li>Humidity: 60-75%</li>
              <li>Rain: Possible but usually brief showers</li>
            </ul>
            <p className="leading-relaxed mb-2"><strong>Pack:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Lightweight breathable clothing (humidity is real)</li>
              <li>Light rain jacket or umbrella</li>
              <li>Comfortable walking shoes (cobblestone streets, Freedom Trail = 15,000+ steps daily)</li>
              <li>Layers for air-conditioned indoor spaces</li>
              <li>Sunscreen and sunglasses</li>
            </ul>
          </div>

          {/* Money & Costs */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Money & Costs
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Stadium parking: $40-60 (pre-purchased)</li>
              <li>Commuter rail event train: $20 round-trip</li>
              <li>Mid-range hotel (Downtown): $300-500/night</li>
              <li>Mid-range hotel (Foxborough area): $200-375/night</li>
              <li>Meals: $15-25 (casual), $35-60 (mid-range), $100+ (upscale)</li>
              <li>Attractions: $25-40 for major museums</li>
            </ul>
          </div>

          {/* MBTA Transit Passes */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              MBTA Transit Passes
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>CharlieCard</strong> (reloadable smart card): $2.75 subway ride, $1.70 bus</li>
              <li><strong>CharlieTicket</strong> (paper): $3.00 subway, $2.00 bus</li>
              <li><strong>7-Day Pass:</strong> $22.50 (unlimited subway/bus, not valid on commuter rail event trains)</li>
              <li>Purchase at subway stations or load via <strong>MBTA mTicket app</strong></li>
            </ul>
          </div>

          {/* Safety & Street Smarts */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Safety & Street Smarts
            </h4>
            <p className="leading-relaxed mb-3">
              Boston is generally safe for tourists in popular areas (Back Bay, Beacon Hill, North End, downtown, Cambridge). Standard urban precautions:
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Some downtown areas (parts of Downtown Crossing late at night) require awareness</li>
              <li>Dorchester, Roxbury, Mattapan are residential neighborhoods off tourist paths—no safety concerns if using rideshare through them</li>
              <li>Boston drivers are notoriously aggressive—look both ways even on one-way streets</li>
            </ul>
          </div>

          {/* Language & Culture */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              Language & Culture
            </h4>
            <p className="leading-relaxed mb-2">English dominates. Boston culture trends:</p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Sports obsession</strong> is real: Patriots, Red Sox, Celtics, Bruins. Championships are religion.</li>
              <li><strong>"Wicked"</strong> is an adverb: "That's wicked good" = high praise</li>
              <li><strong>Dropping R's</strong>: "Pahk the cah in Hahvahd Yahd" stereotypes persist but younger generations less pronounced</li>
              <li><strong>Irish heritage</strong> runs deep: 21% of metro Boston claims Irish ancestry</li>
              <li><strong>College town energy</strong>: 35+ universities mean young, educated, transient population</li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* FIFA Fan Festival & Match Day Atmosphere */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            FIFA Fan Festival & Match Day Atmosphere
          </h3>
          
          <p className="leading-relaxed mb-4">
            While official locations await confirmation, Boston's <strong>FIFA Fan Festival</strong> will likely occupy <strong>City Hall Plaza</strong> (central location, existing infrastructure) or <strong>Harborwalk</strong> waterfront area. Expect <strong>30,000-50,000 daily visitors</strong> during matches, with giant screens, live music, food vendors, and 25+ national flags creating festival atmosphere.
          </p>

          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Neighborhood Watch Parties:</h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Faneuil Hall area</strong>: Outdoor screens, street performers, international crowd</li>
              <li><strong>Seaport District</strong>: Waterfront bars with harbor views install projectors</li>
              <li><strong>North End</strong>: Italian cafes transform into viewing zones (expect pro-Italian national team bias)</li>
              <li><strong>Cambridge</strong>: Harvard Square bars host diverse international student crowds</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Boston's Soccer Culture:</h4>
            <p className="leading-relaxed">
              Gillette Stadium's soccer attendance record was set on April 27, 2024, when 65,612 fans watched the New England Revolution host Inter Miami CF featuring Lionel Messi. The Revolution regularly draw 20,000+ for MLS matches, and the region's passionate supporters groups create authentic football atmosphere American cities often lack.
            </p>
            <p className="leading-relaxed mt-2">
              Boston hosted six 1994 World Cup matches at old Foxboro Stadium. The city understands the tournament's significance and will deliver accordingly.
            </p>
          </div>

          <div>
            <h4 className="editorial-h4 animate-fade-up mb-2">Match Day at Gillette Stadium:</h4>
            <p className="leading-relaxed">Arrive <strong>2-3 hours early</strong> for smooth entry. Security screening for 65,000 people takes time. Foxboro Station is accessible via pedestrian walkway that runs under an access road to the stadium's north end. Clear bag policy requires bags measuring 12" x 12" x 6" maximum, with women's clutches not exceeding 7" x 4" x 2".</p>
            <p className="leading-relaxed mt-2"><strong>Patriot Place</strong> shopping/entertainment district adjacent to stadium offers pre-match bars, restaurants, and Bass Pro Shops (yes, really). Expect thousands milling around outdoor spaces before kickoff.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Sail Boston & America 250: The Perfect Storm */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ship-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Sail Boston & America 250: The Perfect Storm
          </h3>
            <p className="leading-relaxed mb-4">
              From June 13 to July 9, 2026, Boston will host seven FIFA World Cup matches while Sail Boston (July 11-16, 2026) brings tall ships from around the globe and America 250 commemorations continue all summer.
            </p>
            <div className="mb-4">
              <h4 className="editorial-h4 animate-fade-up mb-2">Why this matters:</h4>
              <ol className="leading-relaxed space-y-2 list-decimal list-inside">
                <li><strong>FIFA World Cup Quarter-Final</strong> (July 9)</li>
                <li><strong>Sail Boston</strong> (July 11-16): Tall ships parade into Boston Harbor for first time since 2017</li>
                <li><strong>America 250</strong>: Celebrating United States' 250th birthday (July 4, 1776 - July 4, 2026)</li>
              </ol>
            </div>
            <p className="leading-relaxed">
              Sail Boston brings 50+ tall ships, naval vessels, and maritime displays from 25+ nations. The harbor becomes a living museum of naval history—frigates, schooners, and training vessels from navies worldwide. It's the largest maritime gathering in U.S. history, perfectly timed with Revolutionary War nostalgia.
            </p>
          <hr className="editorial-divider" />
        </article>

        {/* Planning strategy */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Planning strategy
          </h3>
          <p className="leading-relaxed">
            Planning strategy: Extend your Boston stay through mid-July. Attend the quarter-final, explore the city for two days, then witness Sail Boston's opening parade. You'll combine World Cup football with maritime spectacle in America's most historically significant city during its 250th birthday celebration.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Booking Strategy: How to Plan Your Boston World Cup Trip */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-check-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Booking Strategy: How to Plan Your Boston World Cup Trip
          </h3>
          
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Booking Timeline</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Late 2025:</strong> Apply for Ticket Lottery</li>
               <li>• <strong>Tickets Confirmed:</strong> Book Hotel Immediately</li>
               <li>• <strong>3 Months Out:</strong> Book Flights</li>
               <li>• <strong>1 Month Out:</strong> Pre-book Parking / Train Tickets</li>
             </ul>
          </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-2">Timeline That Works:</h4>
              
              <div className="mb-4">
                <h4 className="editorial-h4 animate-fade-up mb-2">Now Through Late 2025:</h4>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li>Monitor FIFA for ticket sale announcements (lottery opens late 2025)</li>
                  <li>Research accommodation but wait for ticket confirmation</li>
                  <li>Set flight alerts for Boston (BOS)</li>
                  <li>Join Boston World Cup communities online for real-time updates</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="editorial-h4 animate-fade-up mb-2">Immediately After Securing Tickets:</h4>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Book hotels within 24 hours</strong> (Downtown and Back Bay sell out fastest)</li>
                  <li>Finalize flights—Logan offers direct international connections from Europe, Asia, South America</li>
                  <li><strong>Download mTicket app</strong> and set alerts for commuter rail event train tickets (go on sale 2-4 weeks before matches)</li>
                  <li>Pre-purchase stadium parking if driving (sells out weeks ahead)</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="editorial-h4 animate-fade-up mb-2">2-4 Weeks Before Travel:</h4>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Purchase commuter rail event train tickets</strong> via mTicket app (capacity limited, first-come)</li>
                  <li>Book popular restaurant reservations (Neptune Oyster, Ostra, Giacomo's)</li>
                  <li>Purchase attraction tickets online (Alcatraz-style: Fenway tours, Duck Tours book ahead)</li>
                  <li>Confirm stadium clear bag policy compliance</li>
                  <li>Download <strong>MBTA mTicket app</strong> and <strong>Transit app</strong> for real-time updates</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <p className="leading-relaxed">
                  Affiliate booking moment: When comparing hotel prices, check <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Booking.com</a>, <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Hotels.com</a>, <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Expedia</a>, and <strong>direct hotel websites</strong>—rates vary 15-25% for identical rooms. Properties near South Station (Seaport, downtown) or Back Bay Station offer best commuter rail access to stadium. Membership programs (Hotels.com One Key, Expedia rewards) provide additional savings on multi-night bookings.
                </p>
              </div>
            </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Boston Wins the World Cup Experience */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Why Boston Wins the World Cup Experience
          </h3>
            <p className="leading-relaxed mb-3">
              Let's be honest: The stadium isn't downtown. That 22-mile distance to Foxborough frustrates visitors expecting compact European-style geography. But here's what Boston offers that nowhere else can:
            </p>
            <p className="leading-relaxed mb-3">
              You get <strong>world-class football</strong> at Gillette Stadium (proven infrastructure, passionate Revolution fans, 65,000+ capacity) <strong>plus</strong> America's most historically significant city (Revolutionary War sites, colonial architecture, intellectual energy) <strong>plus</strong> Championship pedigree (17 major sports titles since 2000) <strong>plus</strong> once-in-a-lifetime Sail Boston maritime spectacle (July 11-16) <strong>plus</strong> America 250 celebrations—all converging summer 2026.
            </p>
            <p className="leading-relaxed mb-3">
              Seven matches over four weeks means sustained World Cup energy, not a weekend blitz. The <strong>quarter-final on July 9</strong> guarantees elite football—eight teams remaining worldwide, four advancing to semi-finals. If you secure tickets to this match plus Sail Boston, you've won the summer 2026 lottery.
            </p>
            <p className="leading-relaxed mb-3">
              The commuter rail system works. Unlike sprawling Sun Belt cities where you're hostage to traffic, Boston delivers dedicated rail service directly to stadium gates. The 60-minute journey becomes part of the experience—trains packed with singing supporters, flags waving, collective anticipation building.
            </p>
            <p className="leading-relaxed">
              <strong>Book MBTA-accessible Boston accommodation, download the mTicket app, embrace revolutionary history, and prepare to discover why they call it the City of Champions—then take the train to Foxborough to watch the world's best football.</strong>
            </p>
          <hr className="editorial-divider" />
        </article>

        {/* Final Checklist: Your Boston World Cup Essentials */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-check-double-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Final Checklist: Your Boston World Cup Essentials
          </h3>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li> <strong>Match tickets secured through FIFA official channels</strong></li>
              <li> <strong>Hotel booked near South Station or Back Bay</strong> (commuter rail access)</li>
              <li> <strong>Flights confirmed to Logan (BOS)</strong></li>
              <li> <strong>MBTA mTicket app downloaded</strong> for commuter rail event trains</li>
              <li> <strong>Event train tickets purchased</strong> 2-4 weeks before match</li>
              <li> <strong>Freedom Trail walking plan</strong> (2.5 miles, 2-3 hours minimum)</li>
              <li> <strong>Fenway Park tour or Red Sox game tickets</strong> (if schedule permits)</li>
              <li> <strong>Stadium-compliant clear bag</strong> (12" x 12" x 6" max)</li>
              <li> <strong>Comfortable walking shoes</strong> (cobblestones = ankle hazard)</li>
              <li> <strong>Light rain jacket packed</strong> (June/July afternoon showers possible)</li>
              <li> <strong>Sail Boston dates noted</strong> (July 11-16 if extending trip)</li>
            </ul>
            <p className="leading-relaxed mb-3">
              The 2026 FIFA World Cup in Boston isn't just football at a stadium—it's the chance to witness elite knockout football (quarter-final July 9) in America's most historically significant city during its 250th birthday celebration, followed by the largest maritime gathering in U.S. history (Sail Boston July 11-16).
            </p>
            <p className="leading-relaxed mb-3">
              Whether you're here for the quarter-final, Revolutionary War history, championship sports energy, or all three, Boston delivers what few cities can: <strong>world-class football wrapped in 400 years of American history, served with championship attitude and New England pride.</strong>
            </p>
            <p className="leading-relaxed font-bold text-lg text-[#008f63] dark:text-[#01b47d]">
              Welcome to the City of Champions. The Revolution starts here—again.
            </p>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations Section */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tour-planning-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Regional Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>East Coast Tour:</strong> NYC, Philly, Boston</li>
               <li>• <strong>Cross-Border:</strong> Toronto nearby</li>
               <li>• <strong>Rail Links:</strong> Amtrak Acela Corridor</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-[#01b47d] dark:text-[#01b47d] text-3xl"></i>
            Plan Your East Coast World Cup Tour
          </h3>
          <p className="leading-relaxed mb-6">
            Boston is perfectly positioned for an iconic East Coast World Cup journey, with multiple host cities easily accessible by train, car, or short flights.
          </p>
          
          <div className="space-y-8">
            {/* Northeast Corridor Classic */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-[#01b47d]">01.</span> Northeast Corridor Classic
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Experience the historic heart of America: Start in Boston (current), take the train south to <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey</Link> for the ultimate city experience, then continue to <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Philadelphia</Link> for Revolutionary history and authentic cheesesteaks.
              </p>
            </div>

            {/* New England to Canada */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-[#01b47d]">02.</span> New England to Canada
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Combine Boston's colonial charm with <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Toronto</Link> for an international adventure, just a short flight away across the border.
              </p>
            </div>

            {/* Full East Coast Experience */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <span className="text-[#01b47d]">03.</span> Full East Coast Experience
              </h4>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Extend your journey south to <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link> or <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Miami</Link> for completely different climates and cultures while staying on the East Coast.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by Stadiumport Team</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
