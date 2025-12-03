import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function PhiladelphiaArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide';

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
    link.href = '/images/cities/philadelphia-world-cup-2026.webp'
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
    const entry = getEditorialEntry('city','philadelphia')
    setPageMeta({
      title: 'Philadelphia World Cup 2026: Complete Travel Guide | Stadiumport',
      description: 'Comprehensive Philadelphia travel guide for FIFA World Cup 2026: Lincoln Financial Field details, match schedule, transportation, and where to stay.',
      url: `${siteUrl}${currentPath}`,
      image: `${siteUrl}/images/cities/philadelphia-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Philadelphia', 'Lincoln Financial Field', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Philadelphia World Cup 2026: Complete Travel Guide',
            'Comprehensive Philadelphia travel guide for FIFA World Cup 2026: Lincoln Financial Field details, match schedule, transportation, and where to stay.',
            `${siteUrl}${currentPath}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Philadelphia', 'Lincoln Financial Field'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Philadelphia', url: currentPath }
          ]),
          generateImageObjectSchema(
            '/images/cities/philadelphia-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Philadelphia skyline – World Cup 2026' }
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
            src="/images/cities/philadelphia-world-cup-2026.webp"
            alt="Philadelphia skyline"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Philadelphia</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Philadelphia World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
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
                <span>Lincoln Financial Field</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>69,796 capacity</span>
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
      <section id="main-content" className="editorial-article-premium philadelphia-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Philadelphia hosts <strong>6 matches</strong></li>
               <li>• Venue: <strong>Lincoln Financial Field</strong></li>
               <li>• Key Event: <strong>Round of 16 on July 4th</strong></li>
               <li>• Regional Hub: Historic Northeast Corridor</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>Philadelphia World Cup 2026: Complete Travel Guide
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            On July 4, 2026—exactly 250 years after the Declaration of Independence was signed in this very city—Philadelphia will host a FIFA World Cup Round of 16 knockout match.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            On July 4, 2026—exactly 250 years after the Declaration of Independence was signed in this very city—Philadelphia will host a FIFA World Cup Round of 16 knockout match at <Link to="/world-cup-2026-stadiums/lincoln-financial-field" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Lincoln Financial Field</Link>. Let that sink in: America's Semiquincentennial, the birthplace of democracy, and the world's most watched sporting event, all colliding on the same day. Philadelphia is one of the <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">16 host cities</Link> for World Cup 2026. This isn't just a football match; it's a historic moment that will never be repeated.
          </p>

          <p className="whitespace-pre-line mt-4">
            Between June 14 and July 4, Lincoln Financial Field will host six World Cup matches drawing over half a million visitors to the City of Brotherly Love. If you've never visited Philadelphia, prepare for a city where cobblestone streets meet world-class museums, where Revolutionary War history sits beside cutting-edge culinary innovation, and where the most iconic sandwich in America (yes, the cheesesteak) is debated with religious fervor. Philadelphia combines accessibility, walkability, affordability, and authenticity in ways that coastal metropolises can't match. You'll experience American history at its source while watching the world's game played at its highest level.
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-[#01b47d]/5 to-white dark:from-navy-900 dark:to-navy-800 border border-[#01b47d]/10 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-[#008f63] dark:text-[#01b47d] mb-4">
              <i className="ri-bookmark-line"></i> Essential Philadelphia Links
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/lincoln-financial-field-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Lincoln Financial Field Guide</Link>
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
                   <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Atlanta</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium */}
        <article id="stadium" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stadium-anchor" className="scroll-mt-24"></div>

          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d]"></i>
            The Stadium: Lincoln Financial Field (Philadelphia Stadium for FIFA 2026)
          </h2>

          <div className="space-y-8">
            {/* An Eagles' Nest Designed for Glory */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-eagle-line text-[#01b47d]"></i>
                An Eagles' Nest Designed for Glory
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Lincoln Financial Field opened in 2003 at a cost of $512 million and has a capacity of 69,796 seats. The stadium was specifically designed to resemble an eagle—the Philadelphia Eagles' mascot—with wing-like canopies over the east and west stands and the Eagles Nest balcony behind the north end zone. The three open corners provide fans with views of the Philadelphia skyline and the surrounding South Philadelphia Sports Complex.
                </p>
                <p className="leading-relaxed">
                  During the World Cup, FIFA will refer to the venue as "Philadelphia Stadium" due to sponsorship regulations that prohibit corporate names during international tournaments. The stadium underwent renovations ahead of the tournament, including modernization of the playing field surface and seating upgrades to meet FIFA's requirements for hosting such a major event.
                </p>
              </div>
            </div>

            {/* One of the "Greenest" Stadiums in the World */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-leaf-line text-[#01b47d]"></i>
                One of the "Greenest" Stadiums in the World
              </h3>
              <div>
                <p className="leading-relaxed">
                  In 2013, Lincoln Financial Field was recognized as one of the greenest stadiums in the NFL. The facility features 11,000 solar panels and 14 wind turbines installed on the outside and atop the stadium, accounting for 30% of the electricity used to power the facility. This sustainable approach makes Lincoln Financial Field a model for modern sports venues worldwide.
                </p>
              </div>
            </div>

            {/* Match Schedule at Lincoln Financial Field */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-calendar-event-line text-[#01b47d]"></i>
                Match Schedule at Lincoln Financial Field
              </h3>
              <div>
                <p className="leading-relaxed mb-6">Philadelphia will host six matches between June 14 and July 4, 2026:</p>
                <div className="space-y-2 mb-6">
                  <p><strong>Group Stage Matches</strong>: June 14, 19, 22, 25, 27</p>
                  <p><strong>Round of 16 (Independence Day!)</strong>: July 4, 2026</p>
                </div>
                <p className="leading-relaxed">
                  That July 4th knockout match is the crown jewel of Philadelphia's World Cup schedule. The 250th anniversary of American independence coinciding with a World Cup knockout stage game creates a once-in-a-lifetime collision of patriotic celebration and global football drama. Expect fireworks (literally), red-white-and-blue everything, and an atmosphere unlike any other World Cup match.
                </p>
              </div>
            </div>

            {/* What Makes This Stadium Special */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                What Makes This Stadium Special
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Since opening, Lincoln Financial Field has hosted three NFC Championship Games, nearly 40 concerts, the annual Army-Navy football classic, and several high-profile international soccer matches, including the Women's World Cup, CONCACAF Gold Cup Final, and Copa América. The venue can expand to hold 72,000 for special events, and its location in South Philadelphia places it in the heart of the city's sports culture.
                </p>
                <p className="leading-relaxed">
                  The stadium sits within the South Philadelphia Sports Complex on Pattison Avenue, easily accessible via SEPTA's Broad Street Line, making it one of the most transit-friendly World Cup venues in North America.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article id="transport" className="editorial-body">
          {/* [SCROLL ANCHOR] */}
          <div id="transport-anchor" className="scroll-mt-24"></div>

          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-roadster-line text-[#01b47d]"></i>
            Getting There: Transportation Made Easy
          </h2>

          <div className="space-y-8">
            {/* SEPTA Broad Street Line (Subway) */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d]"></i>
                SEPTA Broad Street Line (Subway)
              </h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The Broad Street Line (Orange Line) runs directly from Center City to NRG Station (formerly Pattison Station), located adjacent to Lincoln Financial Field. From City Hall or any downtown subway station, it's a straight shot south—no transfers required.
                </p>
                <p><strong>Travel Time</strong>: 15-20 minutes from City Hall to NRG Station</p>
                <p><strong>Fare</strong>: $2.00 with a SEPTA Key card ($2.50 cash)</p>
                <p><strong>Frequency</strong>: Trains run frequently throughout the day, with additional service on match days</p>
                <p className="leading-relaxed">
                  Exit at NRG Station and you're a 5-minute walk from the stadium entrance. On match days, expect large crowds but efficient operations—SEPTA knows how to move people during Eagles games, concerts, and major events.
                </p>
                <p><strong>Pro Tip</strong>: Purchase a SEPTA Key Day Pass ($8) if you plan to use transit for sightseeing earlier in the day before heading to the match. Unlimited rides make exploring Philadelphia affordable.</p>
              </div>
            </div>

            {/* Rideshares */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-[#01b47d]"></i>
                Rideshares
              </h3>
              <div>
                <p className="leading-relaxed">
                  Budget $15-25 from Center City hotels to Lincoln Financial Field via Uber or Lyft. Expect surge pricing immediately before kickoff and after the final whistle. Consider walking a few blocks away from the stadium after the match to request your ride and avoid the highest surges.
                </p>
              </div>
            </div>

            {/* From Philadelphia International Airport (PHL) */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-[#01b47d]"></i>
                From Philadelphia International Airport (PHL)
              </h3>
              <div>
                <p className="leading-relaxed">
                  Philadelphia International Airport is located approximately 12 miles southwest of Center City and is one of America's major East Coast hubs, serving over 100 airlines with connections to destinations worldwide.
                </p>
                <p className="leading-relaxed">
                  Philadelphia sits squarely on the Northeast Corridor between <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey</Link> and <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Boston</Link>, making multi-city World Cup trips easy by Amtrak or regional rail.
                </p>
              </div>
            </div>

            {/* SEPTA Airport Line */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d]"></i>
                SEPTA Airport Line (The Best Option)
              </h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The Southeast Pennsylvania Transportation Authority (SEPTA) provides direct train service from all airport terminals to Center City in just 25 minutes. The Airport Line runs every 30 minutes on weekdays (5 AM to midnight) and hourly on weekends.
                </p>
                <p className="leading-relaxed">
                  <strong>Fares</strong>: A single ride from the airport to Center City costs $6.50 when using a SEPTA Key Travel Wallet, or $6.75 for a Quick Trip (one-way ticket purchased from kiosks). If you're in a rush, you can pay $8 cash directly onboard the train, though purchasing in advance saves money.
                </p>
                <p className="leading-relaxed">
                  <strong>SEPTA Key Card</strong>: Purchase a SEPTA Key card for $4.95 at any airport station kiosk or SEPTA Sales Office. Load the Travel Wallet with funds and use it for all SEPTA services throughout your stay. This is the most cost-effective approach for visitors using public transit multiple times.
                </p>
                <p className="leading-relaxed">
                  <strong>Stops in Center City</strong>: The Airport Line stops at Jefferson Station (near Reading Terminal Market and Convention Center), Suburban Station (downtown business district), and 30th Street Station (major Amtrak hub and University City). All three stops put you within walking distance or short ride to most downtown hotels.
                </p>
                <p className="leading-relaxed">
                  Many fans also travel from Philadelphia to <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link> to catch additional matches, pairing Mid-Atlantic energy with Southern hospitality.
                </p>
              </div>
            </div>

            {/* Rideshares and Taxis */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-[#01b47d]"></i>
                Rideshares and Taxis
              </h3>
              <div>
                <p className="leading-relaxed">
                  Uber and Lyft operate at PHL with designated pickup zones in Zone 7 (cross the pedestrian bridge from baggage claim). Expect the airport-to-Center City trip to cost around $29, though surge pricing applies during peak times. Taxis offer similar fares with flat rates available to downtown.
                </p>
              </div>
            </div>

            {/* Getting to Lincoln Financial Field on Match Days */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-roadster-line text-[#01b47d]"></i>
                Getting to Lincoln Financial Field on Match Days
              </h3>
              <div>
                <p className="leading-relaxed">
                  The stadium is located in South Philadelphia, approximately 4 miles south of Center City, making it easily accessible via public transit.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h2>

          <div className="space-y-6">
            <p>
              Philadelphia offers exceptional accommodation options across walkable neighborhoods connected by transit. Here's where to base yourself.
            </p>

            {/* Center City: Maximum Convenience */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Center City: Maximum Convenience
              </h3>
              <p>
                <strong>Why Stay Here</strong>: Philadelphia's downtown core puts you within walking distance of Independence Hall, Reading Terminal Market, Rittenhouse Square, and direct Broad Street Line access to Lincoln Financial Field. This is the heart of the action.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Loews Philadelphia Hotel in the historic PSFS Building offers luxury accommodations near City Hall and Reading Terminal Market. For boutique charm, the Warwick Rittenhouse Square provides classic elegance near Rittenhouse Square's restaurants and shopping. Budget-conscious travelers should consider the Holiday Inn Express Philadelphia-Penns Landing, offering reliable comfort near Independence Mall.
              </p>
              <p>
                <strong>What You'll Find</strong>: World-class museums, Independence National Historical Park, Reading Terminal Market, and endless restaurant options all within walking distance. This is tourist central, but for good reason—everything is here.
              </p>
              <p>
                <strong>Transit to Stadium</strong>: Walk to any Broad Street Line station (City Hall, Walnut-Locust, Lombard-South) and ride directly to NRG Station. Journey time: 15-20 minutes.
              </p>
              <p>
                <strong>Book Early</strong>: Center City hotels will see premium World Cup pricing, especially around July 4th. Reserve 6-12 months in advance through <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Hotels.com</a> to lock in rates.
              </p>
            </div>

            {/* Rittenhouse Square: Upscale Elegance */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Rittenhouse Square: Upscale Elegance
              </h3>
              <p>
                <strong>Why Stay Here</strong>: One of Philadelphia's most prestigious neighborhoods, Rittenhouse Square offers tree-lined streets, upscale shopping, award-winning restaurants, and a beautiful public park at its center. It's quieter than downtown while remaining highly walkable.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Rittenhouse Hotel provides five-star luxury overlooking the square with exceptional service and on-site dining. The AKA Rittenhouse Square offers extended-stay suites perfect for longer World Cup visits. For value near luxury, the Warwick Rittenhouse Square delivers charm at more accessible rates.
              </p>
              <p>
                <strong>Perfect For</strong>: Couples seeking romance, food enthusiasts wanting Philly's best restaurants, and travelers who value neighborhood elegance over tourist proximity.
              </p>
              <p>
                <strong>Transit</strong>: A 10-minute walk to Walnut-Locust or Lombard-South stations on the Broad Street Line connects you directly to the stadium.
              </p>
            </div>

            {/* Old City: Colonial Charm Meets Modern Cool */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Old City: Colonial Charm Meets Modern Cool
              </h3>
              <p>
                <strong>Why Stay Here</strong>: Just steps from Independence Hall and the Liberty Bell, Old City offers cobblestone streets, art galleries, boutique shops, and nightlife in America's most historic square mile. The neighborhood transforms from daytime history tours to evening cocktail culture.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Wyndham Philadelphia Historic District offers modern comfort adjacent to Independence National Historical Park. For upscale boutique style, Penn's View Hotel provides intimate European charm with exceptional service and an on-site wine bar.
              </p>
              <p>
                <strong>What You'll Find</strong>: Colonial history by day, wine bars and jazz clubs by night. Old City perfectly balances tourism with local authenticity.
              </p>
              <p>
                <strong>Transit</strong>: Walk to 2nd Street Station (Market-Frankford Line) or catch the Broad Street Line from City Hall. Total journey to stadium: 20-25 minutes.
              </p>
            </div>

            {/* University City: Budget-Friendly Near Penn & Drexel */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                University City: Budget-Friendly Near Penn & Drexel
              </h3>
              <p>
                <strong>Why Stay Here</strong>: West Philadelphia's University City neighborhood—home to the University of Pennsylvania and Drexel University—offers more affordable accommodations, diverse dining options, and a younger, energetic vibe. The Amtrak 30th Street Station location makes arrivals and departures seamless.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Study at University City offers boutique comfort with literary-themed design. The Inn at Penn provides upscale Ivy League elegance on Penn's campus. Budget travelers should consider the Home2 Suites by Hilton Philadelphia-Convention Center for reliable comfort and value.
              </p>
              <p>
                <strong>Perfect For</strong>: Budget-conscious travelers, families, and anyone prioritizing value over downtown address prestige.
              </p>
              <p>
                <strong>Transit</strong>: 30th Street Station connects to the Broad Street Line via subway, or take SEPTA buses directly to the stadium area.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Match */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Match: What to Do in Philadelphia
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia's attractions span Revolutionary War history, world-class museums, and authentic neighborhood experiences that reveal the city's character.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Independence National Historical Park: The Birthplace of America
            </h3>

            {/* Independence Hall */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Independence Hall</h4>
              <p>
                This UNESCO World Heritage Site is where the Declaration of Independence (1776) and the U.S. Constitution (1787) were debated and signed. Guided tours take you through the Assembly Room where America's Founding Fathers—Washington, Franklin, Jefferson, Adams—shaped democracy itself.
              </p>
              <p><strong>Admission</strong>: Free, but tickets required (purchase online for $1). Tours run daily 9 AM-5 PM.</p>
              <p><strong>Budget</strong>: 45-60 minutes for the tour, plus security screening time</p>
            </div>

            {/* The Liberty Bell Center */}
            <div className="space-y-4">
              <h4 className="editorial-h4">The Liberty Bell Center</h4>
              <p>
                View the iconic Liberty Bell—originally the Pennsylvania State House bell, later adopted by abolitionists as a symbol of freedom—in its glass chamber with Independence Hall providing the dramatic backdrop. The inscription reads: "Proclaim Liberty Throughout All the Land Unto All the Inhabitants thereof."
              </p>
              <p><strong>Admission</strong>: Free, no tickets required. Security screening similar to airports (no large bags).</p>
              <p><strong>Pro Tip</strong>: The Liberty Bell is visible through exterior windows 24/7, so even if the Center is closed, you can still view and photograph it.</p>
            </div>

            {/* Other Sites and Location */}
            <div className="space-y-4">
              <p>
                <strong>Other Sites</strong>: Congress Hall (where the U.S. Congress met 1790-1800), Benjamin Franklin Museum, Carpenters' Hall (First Continental Congress meeting site), and the President's House Memorial (outdoor exhibit on George Washington's presidential residence).
              </p>
              <p>
                <strong>Location</strong>: Old City, bounded by 2nd, 6th, Walnut, and Arch Streets—all within easy walking distance of each other.
              </p>
            </div>

            {/* Museum of the American Revolution */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                Museum of the American Revolution
              </h3>
              <p>
                Opened in 2017, this museum tells the complex story of America's founding through immersive exhibits, rare artifacts (including George Washington's actual war tent), and diverse perspectives. The storytelling goes beyond textbook narratives to explore how ordinary people—enslaved individuals, Native Americans, women, immigrants—experienced the Revolutionary era.
              </p>
              <p><strong>Admission</strong>: Adults $21, students $17</p>
              <p><strong>Location</strong>: 101 S. 3rd Street, steps from Independence Hall</p>
              <p><strong>Budget</strong>: 2-3 hours</p>
            </div>

            {/* Reading Terminal Market */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                Reading Terminal Market: Philadelphia's Culinary Heart
              </h3>
              <p>
                One of America's oldest and largest public markets (established 1893), Reading Terminal Market features more than 80 merchants offering everything from Pennsylvania Dutch baked goods to authentic cheesesteaks, international cuisine, artisan cheese, fresh produce, and flowers.
              </p>
              <p><strong>Must-Try Vendors</strong>:</p>
              <div className="space-y-3">
                <p>
                  <strong>Uncle Gus' Steaks</strong>: The newest cheesesteak sensation, opened in January 2025 by the owners of Angelo's Pizzeria (South Philly's highest-rated cheesesteak), Tommy DiNic's, and Pearl's Oyster Bar. The collaboration brings Angelo's legendary house-made bread and decades of sandwich expertise together for what many consider the market's—and potentially Philadelphia's—best cheesesteak.
                </p>
                <p>
                  <strong>Tommy DiNic's</strong>: Famous for the roast pork sandwich voted "best sandwich in America" by food critics. Thinly sliced roast pork with sharp provolone and broccoli rabe on a Sarcone's Italian roll. The Roast Pork &amp; Roast Beef Combo (slightly off-menu) combines two signature sandwiches into one legendary creation.
                </p>
                <p>
                  <strong>Beiler's Bakery</strong>: Pennsylvania Dutch donuts and baked goods that disappear by mid-morning. Arrive early for the best selection.
                </p>
                <p>
                  <strong>Bassetts Ice Cream</strong>: America's oldest ice cream company (since 1861), still family-owned and serving small-batch flavors.
                </p>
                <p>
                  <strong>Dutch Eating Place</strong>: Amish and Pennsylvania Dutch comfort food including chicken pot pie, stuffed cabbage, and pork and sauerkraut.
                </p>
              </div>
              <p><strong>Location</strong>: 51 N. 12th Street, Center City (between Market and Arch Streets)</p>
              <p><strong>Hours</strong>: 8 AM-6 PM most days</p>
              <p><strong>Pro Tip</strong>: Arrive before 11:30 AM to beat the lunch rush, or after 2 PM when crowds thin out.</p>
            </div>

            {/* Philadelphia Museum of Art */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-image-line text-[#01b47d]"></i>
                Philadelphia Museum of Art: The Rocky Steps
              </h3>
              <p>
                One of America's largest art museums with over 240,000 works spanning 2,000 years, the Philadelphia Museum of Art features exceptional collections of European, American, and Asian art. The building itself—a Greek Revival masterpiece atop Fairmount Hill—offers stunning city views.
              </p>
              <p>
                <strong>The Rocky Steps</strong>: The 72 steps leading to the museum's east entrance became famous in the 1976 film <em>Rocky</em>. Tourists (and locals) still run up the steps and pose with the Rocky Statue at the bottom for photos. It's touristy, yes—but also genuinely fun.
              </p>
              <p><strong>Admission</strong>: Adults $25 (advance tickets recommended)</p>
              <p><strong>Location</strong>: 2600 Benjamin Franklin Parkway</p>
              <p><strong>Budget</strong>: 2-4 hours depending on your art appetite</p>
            </div>

            {/* Eastern State Penitentiary */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-government-line text-[#01b47d]"></i>
                Eastern State Penitentiary: Gothic Prison History
              </h3>
              <p>
                Once the world's most famous prison (1829-1971), housing Al Capone and other notorious criminals, Eastern State Penitentiary is now a hauntingly beautiful historic site. The crumbling cellblocks, Gothic architecture, and isolation cells tell the story of prison reform and the birth of the penitentiary system.
              </p>
              <p><strong>Admission</strong>: Adults $19</p>
              <p><strong>Location</strong>: 2027 Fairmount Avenue</p>
              <p><strong>Pro Tip</strong>: The annual Halloween Nights attraction transforms the prison into one of America's top haunted houses (but World Cup is in summer, so you'll experience the daytime historical tour).</p>
            </div>

            {/* Elfreth's Alley */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-home-2-line text-[#01b47d]"></i>
                Elfreth's Alley: America's Oldest Residential Street
              </h3>
              <p>
                Dating from 1703, this narrow cobblestone street features 32 homes continuously occupied for over 300 years. Wander the alley for free, or tour the Elfreth's Alley Museum (No. 124-126) to see 18th-century living conditions.
              </p>
              <p><strong>Admission</strong>: Street is free, museum $5</p>
              <p><strong>Location</strong>: Between 2nd and Front Streets, just north of Market Street</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food: Beyond the Cheesesteak */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-[#01b47d]"></i>
            Food: Beyond the Cheesesteak (But Also, Definitely Cheesesteaks)
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia's food scene extends far beyond its most famous sandwich, though we'll start there because it's mandatory.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              The Cheesesteak Debate: A Philadelphia Obsession
            </h3>
            <p>
              The cheesesteak was invented in Philadelphia in the 1930s, and locals have been arguing about the best version ever since. Here's what you need to know:
            </p>
            {/* The Classic Order */}
            <div className="space-y-4">
              <h4 className="editorial-h4">The Classic Order</h4>
              <p>
                "Whiz wit" (Cheez Whiz with fried onions) or "provolone witout" (provolone cheese without onions). American cheese is also popular. Never ask for Swiss.
              </p>
            </div>

            {/* Top Cheesesteak Destinations */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                Top Cheesesteak Destinations
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="editorial-h4">Pat's King of Steaks vs. Geno's Steaks</h4>
                  <p>
                    These South Philly rivals face each other across the intersection of 9th Street and Passyunk Avenue. The rivalry is legendary, the sandwiches are solid, and the experience is touristy but authentic. Open 24/7, often with lines late at night. Both accept cash only.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Reading Terminal Market</h4>
                  <p>
                    Uncle Gus' Steaks (the new gold standard, opened January 2025), Spataro's Cheesesteaks (chopped, juicy, messy), and Carmen's (the "Franklin" with cream cheese is unique). Eating indoors with AC and seating beats standing on a South Philly sidewalk.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Steve's Prince of Steaks</h4>
                  <p>
                    Multiple locations including 16th & Chestnut (near Rittenhouse). Locals swear by Steve's for generous portions and quality ingredients.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Jim's Steaks</h4>
                  <p>
                    South Street location (400 South Street) draws crowds for griddle-chopped meat and a fun atmosphere in a neighborhood known for nightlife.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond the Cheesesteak: Philly's Diverse Food Scene */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                Beyond the Cheesesteak: Philly's Diverse Food Scene
              </h3>
              <div className="space-y-3">
                <p><strong>Roast Pork Sandwich</strong>: Many locals insist the roast pork sandwich—not the cheesesteak—is Philadelphia's best. Tommy DiNic's at Reading Terminal Market is the benchmark.</p>
                <p><strong>Hoagies</strong>: Philadelphia's version of the submarine sandwich, with specific bread (Amoroso's rolls), proper layering technique, and oil/vinegar/oregano seasoning. Primo Hoagies and Wawa (convenience store chain) both serve excellent versions.</p>
                <p><strong>Water Ice (pronounced "wooder ice")</strong>: Italian ice, but Philly does it better. Rita's Water Ice is the local chain; John's Water Ice (4TH & snyder) is the iconic South Philly spot.</p>
                <p><strong>Soft Pretzels</strong>: Philadelphia soft pretzels are thinner, chewier, and saltier than other cities' versions. Buy them from sidewalk vendors or Philly Pretzel Factory.</p>
                <p><strong>Fine Dining</strong>: Zahav (modern Israeli cuisine, James Beard Award winner), Friday Saturday Sunday (Stephen Starr's elegantbrunch and dinner spot), and Vernick Food &amp; Drink (New American, exceptional cocktails) represent Philly's upscale dining evolution.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & What to Pack */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-sun-cloudy-line text-[#01b47d]"></i>
            Weather &amp; What to Pack
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-sun-line text-[#01b47d]"></i>
              June and July in Philadelphia: Warm with Occasional Rain
            </h3>
            <p>
              Philadelphia summers are warm and humid with occasional thunderstorms. Here's what to expect:
            </p>
            <div className="space-y-4">
              <h4 className="editorial-h4">June Weather</h4>
              <p><strong>Average high</strong>: 81°F (27°C)</p>
              <p><strong>Average low</strong>: 62°F (17°C)</p>
              <p><strong>Humidity</strong>: Moderate (around 67%)</p>
              <p><strong>Rainfall</strong>: 10 days of rain on average, totaling around 96mm for the month</p>
              <p><strong>Sunshine</strong>: 9 hours of bright sunshine daily (60% of daylight hours)</p>
            </div>
            <div className="space-y-4">
              <h4 className="editorial-h4">July Weather</h4>
              <p><strong>Average high</strong>: 88°F (31°C)</p>
              <p><strong>Average low</strong>: 68°F (20°C)</p>
              <p><strong>Humidity</strong>: Moderate to high (around 67%)</p>
              <p><strong>Rainfall</strong>: Less frequent than June, but thunderstorms can be intense</p>
              <p><strong>Sunshine</strong>: Long days with 15 hours of daylight</p>
            </div>
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-suitcase-line text-[#01b47d]"></i>
                What to Pack
              </h3>
              <p><strong>Clothing</strong>: Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). Philadelphia is casual—shorts and t-shirts work for most activities. Even upscale restaurants rarely require more than "smart casual."</p>
              <p><strong>Sun Protection</strong>: Sunglasses, sunscreen (SPF 30+), and a hat for outdoor activities and match days.</p>
              <p><strong>Rain Gear</strong>: Compact umbrella or light rain jacket for afternoon thunderstorms, especially in June.</p>
              <p><strong>Walking Shoes</strong>: Philadelphia is highly walkable. Comfortable shoes are essential—you'll cover miles exploring historic sites and neighborhoods.</p>
              <p><strong>Layers</strong>: One light jacket for overly air-conditioned indoor spaces (museums, restaurants).</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Policies */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-shopping-bag-3-line text-[#01b47d]"></i>
            Stadium Policies
          </h2>
          <div className="space-y-6">
            <p>
              Lincoln Financial Field typically requires clear bags (12" x 6" x 12" or smaller) or small clutches (4.5" x 6.5"). Check the official stadium website before your visit to confirm current policies.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Tips for International Visitors */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>
          
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-global-line text-[#01b47d]"></i>
            Practical Tips for International Visitors
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-bank-card-line text-[#01b47d]"></i>
              Money Matters
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Currency</strong>: US Dollar (USD)</li>
              <li><strong>Cards</strong>: Credit cards accepted everywhere; contactless payment widely available</li>
              <li><strong>Tipping</strong>: 18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</li>
              <li><strong>ATMs</strong>: Widely available; use bank-affiliated machines to avoid excessive fees</li>
              <li><strong>Cost of Living</strong>: Philadelphia is more affordable than New York, Boston, or Washington DC—expect reasonable prices for food, accommodations, and attractions</li>
            </ul>

            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-shield-check-line text-[#01b47d]"></i>
              Safety &amp; Getting Around
            </h3>
            <p>
              Philadelphia is generally safe for visitors, especially in Center City, Old City, Rittenhouse Square, and University City. Basic street smarts apply: be aware of your surroundings, keep valuables secure, and stick to well-lit areas at night.
            </p>
            <p><strong>Walking</strong>: Center City, Old City, Rittenhouse, and Society Hill are highly walkable. Philadelphia's grid layout makes navigation intuitive.</p>
            <p><strong>SEPTA</strong>: The public transit system includes subways, buses, trolleys, and regional rail. Download the SEPTA app for real-time arrivals and trip planning. All modes feature video surveillance and regular police presence.</p>
            <p><strong>Biking</strong>: Indego bike share offers stations throughout Center City and surrounding neighborhoods. Perfect for exploring the Schuylkill River Trail or connecting neighborhoods.</p>

            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-chat-4-line text-[#01b47d]"></i>
              Language &amp; Connectivity
            </h3>
            <p>
              English is the primary language. You'll hear Philadelphia's distinctive accent (pronouncing "water" as "wooder," "Eagles" as "Iggles"). The city's diversity means you'll also hear Spanish, Chinese, Vietnamese, and dozens of other languages throughout neighborhoods.
            </p>
            <p>
              Free Wi-Fi is available in most cafés, hotels, public spaces, and SEPTA subway stations. Consider a US SIM card or international data plan for navigation and communication.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-ticket-2-line text-[#01b47d]"></i>
            Ticket Information &amp; Booking Strategy
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-ticket-line text-[#01b47d]"></i>
              How to Get World Cup Tickets
            </h3>
            <p>
              Tickets for the 2026 FIFA World Cup are sold in multiple phases. The first presale draw began September 10, 2025, exclusively for Visa cardholders. Group stage tickets start at $60, with prices increasing for knockout rounds.
            </p>
            <p>
              Register at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.fifa.com/tickets</a> for future ticket phases. The teams playing in Philadelphia's group stage matches won't be known until the Final Draw on December 5, 2025, when matchups, dates, locations, and kickoff times are assigned.
            </p>
            <div className="space-y-2">
              <h4 className="editorial-h4">July 4th Premium</h4>
              <p>
                The Independence Day Round of 16 match will be among the most sought-after tickets in Philadelphia's schedule. Expect high demand and premium pricing.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="editorial-h4">Hospitality Packages</h4>
              <p>
                If you miss the general ticket lottery, official hospitality packages through FIFA's partner On Location include premium seating, exclusive lounge access, and food and beverage service. Packages typically start at $1,450 per match for group stage games, with knockout rounds priced significantly higher.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* FIFA Fan Festival at Lemon Hill */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-community-line text-[#01b47d]"></i>
            FIFA Fan Festival at Lemon Hill
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia will host the tournament-long, free-admission FIFA Fan Festival at Lemon Hill in East Fairmount Park. The massive international celebration will feature giant screens broadcasting live matches, food and beverage vendors, live music and entertainment, and international cultural events and parties. The FIFA Fan Festival expects 15,000-20,000 attendees each match day.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Philadelphia Will Make Your World Cup Unforgettable */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-award-line text-[#01b47d]"></i>
            Why Philadelphia Will Make Your World Cup Unforgettable
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia doesn't have New York's scale or Los Angeles' glamour, but it offers something neither can match: the convergence of American history and global sport at a singular moment in time.
            </p>
            <p>
              When you walk Independence Hall's corridors where democracy was born, then watch a World Cup knockout match on the 250th anniversary of that independence, you're experiencing layers of history that intersect only once. Add in authentic neighborhoods where locals still shout "Yo!" as a greeting, cheesesteaks that justify the hype, and world-class museums that rival any city's, and Philadelphia delivers the complete World Cup experience.
            </p>
            <p>
              This is a city where you can follow Benjamin Franklin's footsteps in the morning, eat a roast pork sandwich that changes your life at lunch, and watch elite international football in the evening—all without breaking the bank or battling impossible crowds.
            </p>
            <p>
              Over half a million visitors will descend on Philadelphia for the six World Cup matches. The city hosted the 1926 Sesquicentennial International Exposition celebrating America's 150th birthday. In 2026, for the Semiquincentennial (250th birthday), Philadelphia returns to the world stage with the world's game.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tour-planning-anchor" className="scroll-mt-24"></div>

          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Plan Your Historic Cities World Cup Journey
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia's central East Coast location makes it the perfect hub for exploring multiple World Cup host cities steeped in American history.
            </p>
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-route-line text-[#01b47d]"></i>
                Popular Combinations
              </h3>
              
              {/* Northeast Heritage Trail */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                   <span className="text-[#01b47d]">01.</span> Northeast Heritage Trail
                </h4>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  Discover America's founding cities: Start in Philadelphia (current), take the train north to <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey</Link> for the big city experience, then continue to <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Boston</Link> to complete your Revolutionary history tour.
                </p>
              </div>

              {/* Mid-Atlantic to South */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                   <span className="text-[#01b47d]">02.</span> Mid-Atlantic to South
                </h4>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  Connect Philadelphia with <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link> to experience both Mid-Atlantic and Southern hospitality, with different architectural styles and culinary traditions.
                </p>
              </div>

              {/* Cross-Border Northeast */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                   <span className="text-[#01b47d]">03.</span> Cross-Border Northeast
                </h4>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  Extend your trip north to <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="font-medium text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Toronto</Link> for an international perspective, easily accessible from Philadelphia.
                </p>
              </div>
            </div>
            <p className="mt-6">
              <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Browse All World Cup 2026 Host Cities</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Start Planning Your 2026 World Cup Trip to Philadelphia */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-[#01b47d]"></i>
            Start Planning Your 2026 World Cup Trip to Philadelphia
          </h2>
          <div className="space-y-6">
            <p>
              The countdown is on. Hotels are booking up. Flights are being reserved. And Philadelphia is preparing to show the world why this city matters.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-check-double-line text-[#01b47d]"></i>
              Your Action Plan
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Register for FIFA tickets</strong> at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.fifa.com/tickets</a> for future phases</li>
              <li><strong>Book accommodations early</strong> via <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.hotels.com</a> —6-12 months in advance is essential, especially for July 4th</li>
              <li><strong>Research flights</strong> to Philadelphia (PHL) through <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.skyscanner.com</a> or <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.google.com/flights</a> </li>
              <li><strong>Purchase a SEPTA Key card</strong> immediately upon arrival for seamless transit</li>
              <li><strong>Plan Independence Hall tour</strong> in advance—book the $1 tickets online weeks before your visit</li>
              <li><strong>Embrace the July 4th experience</strong>—this collision of American independence and World Cup football will never happen again</li>
            </ol>
            <p>
              Philadelphia will host six matches during the 2026 FIFA World Cup at Lincoln Financial Field, including five group-stage contests and a Round of 16 knockout match on July 4, 2026—the 250th anniversary of American independence. The city expects the matches to generate significant economic impact and welcome visitors from around the world to the birthplace of American democracy.
            </p>
            <p className="font-bold text-xl">
              See you in Philadelphia. Come for the football. Stay for the history. Leave with cheesesteak stains and unforgettable memories.
            </p>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Interactive Rating Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
              <p className="text-[#01b47d] dark:text-[#01b47d] font-medium">
                <i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!
              </p>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Related Guides Recommendation Engine */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
            <Link to="/world-cup-2026-host-cities" className="text-[#01b47d] dark:text-[#01b47d] hover:text-[#008f63] font-medium flex items-center gap-1 group">
              View all cities <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation 1: New York/New Jersey (Neighbor) */}
            <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/new-york-new-jersey-world-cup-2026.webp" 
                alt="New York/New Jersey World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Northeast Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">New York / New Jersey</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete guide to MetLife Stadium and the World Cup Final host city.</p>
              </div>
            </Link>

            {/* Recommendation 2: Boston (History) */}
            <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/boston-world-cup-2026.webp" 
                alt="Boston World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Historic Partner</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Boston</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Gillette Stadium guide and Revolutionary War history tour.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Elite Tier Footer Meta Section */}
        <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Share Section */}
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
              <div className="flex items-center gap-2">
                <a href={`https://twitter.com/intent/tweet?text=Philadelphia%20World%20Cup%202026%20Guide&url=${siteUrl}${currentPath}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on X">
                  <i className="ri-twitter-x-line text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${currentPath}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#1877F2] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on Facebook">
                  <i className="ri-facebook-circle-fill text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <button onClick={() => navigator.clipboard.writeText(`${siteUrl}${currentPath}`)}
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#008f63] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Copy Link">
                  <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* Separator for mobile */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

            {/* Last Reviewed Section */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#01b47d] dark:text-[#01b47d]">
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
