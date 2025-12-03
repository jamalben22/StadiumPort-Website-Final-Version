import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function HoustonArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/houston-world-cup-2026-guide';

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
    link.href = '/images/cities/houston-world-cup-2026.webp'
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
  const pageUrl = '/world-cup-2026-host-cities/houston-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','houston')
    setPageMeta({
      title: 'Houston – World Cup 2026 Guide',
      description: 'Comprehensive Houston travel guide for FIFA World Cup 2026: NRG Stadium details, match schedule, transportation, and where to stay.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/houston-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : undefined,
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Houston', 'NRG Stadium', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Houston – World Cup 2026 Guide',
            'Comprehensive Houston travel guide for FIFA World Cup 2026: NRG Stadium details, match schedule, transportation, and where to stay.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','houston')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Houston', 'NRG Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Houston', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/houston-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Houston skyline – World Cup 2026' }
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
                          ? 'bg-[#01b47d]/10 dark:bg-[#01b47d]/20 text-[#01b47d] dark:text-[#01b47d] border-l-4 border-[#01b47d]'
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
            src="/images/cities/houston-world-cup-2026.webp"
            alt="Houston skyline"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Houston</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Houston World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
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
                <span>NRG Stadium</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>72,220 Capacity</span>
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
      <section id="main-content" className="editorial-article-premium houston-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Houston hosts <strong>7 matches</strong>—including two knockout games</li>
               <li>• Venue: <strong>NRG Stadium</strong> (Retractable Roof)</li>
               <li>• Key Event: <strong>Round of 16 on July 4</strong></li>
               <li>• Regional Hub: Space City / Gulf Coast</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-star-line text-[#01b47d]"></i>Space City Takes Center Stage on Football's Biggest Stage
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Everything's bigger in Texas—including the welcome Houston is about to roll out for the 2026 FIFA World Cup.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="leading-relaxed mb-6">
            From June 14 through July 4, <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> will host seven matches in what promises to be one of the tournament's most electric atmospheres. This isn't Houston's first rodeo with major events (Super Bowls, Final Fours, and the Copa América have all called this place home), but hosting the World Cup brings something different: the entire planet showing up at once, bringing every imaginable language, culture, and football tradition straight to the heart of Texas. Houston is one of the <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">16 host cities</Link> for World Cup 2026.
          </p>
          <p className="leading-relaxed mb-6">
            If you've never been to Houston, prepare to have your assumptions shattered. This is America's most diverse city, where you'll hear more languages spoken than anywhere else in the U.S., where authentic food from every continent sits on every street corner, and where the term "Southern hospitality" gets supercharged by Texan pride and international flair. Match that energy with NRG Stadium's retractable roof that can open or close in just seven minutes, air conditioning that makes 100-degree days irrelevant, and you've got the perfect recipe for an unforgettable World Cup experience.
          </p>

          {/* Essential Links module */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
            <div className="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential Houston Links</div>
            <div className="space-y-1 text-slate-800 dark:text-slate-200">
              <div>
                🏟️ <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">NRG Stadium Guide</Link>
              </div>
              <div>
                🗺️ <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </div>
              <div>
                ✈️ <strong>Nearby Cities:</strong> <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Dallas</Link> | <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Atlanta</Link> | <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>
              </div>
            </div>
          </div>
          {/* Regional planning cross-links */}
          <p className="leading-relaxed mt-4">
            Houston pairs perfectly with <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link> for a Texas adventure. Connect Houston with <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link> for a true Southern experience, and leverage the Gulf connection to <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link> for an international flavor.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium: NRG Stadium (Houston Stadium for FIFA 2026) */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d]"></i>
            The Stadium: NRG Stadium (Houston Stadium for FIFA 2026)
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                Texas-Sized Venue, World-Class Experience
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  NRG Stadium opened in 2002 at a cost of $352 million and has a seating capacity of 72,220, making it one of the largest and most versatile venues in the United States. It was the first NFL facility to have a retractable roof—a game-changer for Houston's unpredictable summer weather and blazing heat.
                </p>
                
                <p className="leading-relaxed">
                  During the World Cup, FIFA will refer to the venue as "Houston Stadium" due to sponsorship guidelines. The stadium has undergone specific upgrades for the tournament, including new chillers, LED lights, upgrades to parking lots and adding in a grass field, which is expected to be installed after the 2026 Rodeo season.
                </p>
                <p className="leading-relaxed mt-4">
                  Planning a multi-city trip? Houston pairs well with <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link> for a Texas itinerary, and connects naturally to <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link> and <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Miami</Link> for a broader Southern circuit.
                </p>
              </div>
            </div>

            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-calendar-event-line text-[#01b47d]"></i>
                Match Schedule at NRG Stadium
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Houston will host five group stage matches and two knockout round games, beginning June 14 and running through Independence Day—yes, the city will be celebrating July 4th with a Round of 16 knockout match, adding American fireworks to global football fever.
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-calendar-check-line text-[#01b47d]"></i>
                    Match Dates:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                      <span><strong>Group Stage</strong>: June 14, 17, 20, 23, 26</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                      <span><strong>Round of 32</strong>: June 29</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                      <span><strong>Round of 16</strong>: July 4, 2026</span>
                    </div>
                  </div>
                </div>
                
                <p className="leading-relaxed">
                  That Independence Day game will be the last one to take place in Houston for the tournament. Imagine experiencing World Cup knockout football while the entire country celebrates its birthday—that's the kind of collision of cultures and celebrations only Houston can deliver.
                </p>
              </div>
            </div>

            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-[#01b47d]"></i>
                What Makes This Stadium Special
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  NRG Stadium isn't just about football. The stadium has hosted six Super Bowls, major soccer friendlies, and concerts featuring Taylor Swift, Beyoncé, and the Rolling Stones. It's also the permanent home of the Houston Livestock Show and Rodeo, the world's largest livestock exhibition, which draws over two million visitors annually.
                </p>
                
                <p className="leading-relaxed mb-6">
                  But here's what matters for World Cup fans: the stadium's retractable, fabric roof provides a very flexible rigging configuration for major audio and visual presentations, and the climate control means you'll be comfortable even when it's 95°F outside. The stadium boasts a retractable roof, essential air-conditioning (a Texas necessity!), and seating for over 70,000 spectators.
                </p>
                
                <p className="leading-relaxed">
                  The venue sits in NRG Park, conveniently served by Houston's METRORail (Stadium Park/Astrodome station), making it genuinely accessible from downtown and surrounding neighborhoods.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-plane-line text-[#01b47d]"></i>
            Getting There: Transportation Made Easy
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-[#01b47d]"></i>
                From the Airports
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Houston is served by two major airports, both with excellent international connections:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-plane-line text-[#01b47d]"></i>
                      George Bush Intercontinental Airport (IAH)
                    </h4>
                    <p>
                      Located approximately 22 miles north of downtown Houston, this is the primary international gateway with flights connecting to over 180 countries
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-plane-line text-[#01b47d]"></i>
                      William P. Hobby Airport (HOU)
                    </h4>
                    <p>
                      Located 11 miles southeast of downtown Houston, mainly serving domestic and some Latin American destinations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-subway-line text-[#01b47d]"></i>
                Getting to NRG Stadium from Downtown
              </h3>
              <div>
                <div className="mb-6">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-train-line text-[#01b47d]"></i>
                    METRORail (The Best Budget Option)
                  </h4>
                  <p className="mb-4">
                    NRG Stadium is conveniently served by Houston's METRORail (Stadium Park/Astrodome station). The Red Line runs from downtown Houston through the Museum District and Medical Center directly to the stadium. On match days, expect trains running frequently with additional service.
                  </p>
                  <p>
                    Below are fares to ride. Discounted fares apply to students, seniors 65-69, or people with disabilities. A single ride costs $1.25, making it one of the most affordable World Cup stadium transportation options in North America. Consider purchasing a day pass for unlimited rides.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-plane-line text-[#01b47d] text-xl mt-1"></i>
                    <div>
                      <h4 className="editorial-h4 mb-2">From IAH Airport to NRG Stadium</h4>
                      <p>
                        METRO's 102 Bush IAH Express provides service to and from George Bush Intercontinental Airport approximately every 30 minutes, taking you to downtown where you can transfer to the Red Line toward NRG Stadium. Total journey time: approximately 90 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <i className="ri-plane-line text-[#01b47d] text-xl mt-1"></i>
                    <div>
                      <h4 className="editorial-h4 mb-2">From Hobby Airport to NRG Stadium</h4>
                      <p>
                        METRO Bus 40 provides local service and continues to downtown Houston. From downtown, catch the METRORail Red Line to Stadium Park/Astrodome station. Transit time to downtown can run one hour, plus another 30 minutes on the rail.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <i className="ri-taxi-line text-[#01b47d] text-xl mt-1"></i>
                    <div>
                      <h4 className="editorial-h4 mb-2">Rideshares and Taxis</h4>
                      <p>
                        Uber and Lyft operate throughout Houston with reliable service. Expect surge pricing on match days, particularly in the hours before kickoff and immediately after the final whistle. Budget $25-40 from downtown hotels to NRG Stadium.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-[#01b47d]"></i>
                    Pro Traveler Tip
                  </h4>
                  <p>
                    Download the METRO app before you arrive. Houston's public transit is straightforward, affordable, and air-conditioned—essential when dealing with summer heat. Plan to arrive at least 90 minutes before kickoff to undergo security checks and explore the vibrant fan zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Accommodation Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Houston is massive—849 square miles—but most visitors gravitate toward a handful of walkable, well-connected neighborhoods. Here's where to base yourself.
            </p>
          </div>

          <div className="space-y-8">
            {/* Downtown Houston */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-building-2-line text-[#01b47d]"></i>
                Downtown Houston: Maximum Convenience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Direct METRORail access to NRG Stadium, walking distance to theater district and dining, and the energy of the city's core. Downtown transforms on match days with fan zones and spontaneous celebrations.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Hotel Options</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    The JW Marriott Houston Downtown and Four Seasons Hotel Houston offer luxury with prime locations. For mid-range comfort, the Cambria Hotel Houston Downtown Convention Center puts you near George R. Brown Convention Center and Discovery Green park.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Perfect For</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Business travelers, visitors who want to be in the thick of the action, and anyone who values transit convenience over neighborhood charm.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-bookmark-line text-[#01b47d]"></i>
                    Book Smart
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    Expect premium pricing during World Cup weeks. Reservations should be made 6-12 months in advance. Use <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">https://www.booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">https://www.hotels.com</a> to compare rates and find package deals.
                  </p>
                </div>
              </div>
            </div>

            {/* Midtown */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-community-line text-[#01b47d]"></i>
                Midtown: Trendy and Transit-Connected
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Just south of downtown, Midtown offers a younger vibe with craft breweries, indie restaurants, and a thriving arts scene. The METRORail Red Line runs straight through Midtown to NRG Stadium.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">What You'll Find</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Midtown brims with trendy bars, craft breweries, and diverse eateries offering everything from Texas BBQ to international cuisine. The neighborhood is home to the Ensemble Theatre and the Midtown Arts & Theater Center Houston (MATCH).
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Perfect For</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Travelers in their 20s-40s, groups wanting nightlife options, and anyone seeking a more local, less corporate hotel experience.
                  </p>
                </div>
              </div>
            </div>

            {/* The Galleria/Uptown */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-shopping-bag-line text-[#01b47d]"></i>
                The Galleria/Uptown: Shop, Dine, Luxuriate
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    If you're combining World Cup matches with luxury shopping and high-end dining, this is your neighborhood. The Galleria is America's fourth-largest mall, and the surrounding area offers some of Houston's best restaurants.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Hotel Options</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    The Post Oak Hotel at Uptown is Houston's only Forbes Five-Star hotel. For value near luxury, the Hilton Houston Post Oak by the Galleria sits half a mile from The Galleria with easy highway access.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Perfect For</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Families wanting more space, shoppers, and travelers seeking upscale accommodations outside downtown's density.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-car-line text-[#01b47d]"></i>
                    Getting to Matches
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    You'll need a rideshare or rental car from this area, as it's about 15 minutes from NRG Stadium by car. Budget extra time on match days.
                  </p>
                </div>
              </div>
            </div>

            {/* Heights/Montrose */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-leaf-line text-[#01b47d]"></i>
                Heights/Montrose: Local Flavor, Character-Filled
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    These adjacent neighborhoods northwest of downtown offer tree-lined streets, Victorian homes converted to boutiques and cafés, and Houston's best independent restaurant scene. Think Brooklyn or Portland vibes in the heart of Texas.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Food Scene</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    This is where locals eat. From brunch spots to craft cocktail bars, you'll find Houston's most creative dining in these neighborhoods.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Perfect For</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Foodies, couples, and travelers who prioritize neighborhood exploration over proximity to tourist attractions.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-subway-line text-[#01b47d]"></i>
                    Transit Note
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    You'll need rideshares to reach NRG Stadium from Heights/Montrose, but both neighborhoods connect to downtown via bus or bike.
                  </p>
                </div>
              </div>
            </div>

            {/* Near NRG Stadium */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-hospital-line text-[#01b47d]"></i>
                Near NRG Stadium: Medical Center Area
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    If attending multiple matches or prioritizing proximity to the stadium, consider hotels near the Texas Medical Center. Several mid-range chains offer good value and you're literally minutes from kickoff.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Trade-Off</h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    You'll sacrifice walkable dining and nightlife for convenience to the stadium. Great for families, groups attending multiple matches, or anyone on a tighter budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Attractions Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-line text-[#01b47d]"></i>
            Beyond the Match: What to Do in Houston
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Let's be real—Houston doesn't have the Eiffel Tower or Big Ben. But what it does have is authenticity, diversity, and experiences you won't find anywhere else.
            </p>
          </div>

          <div className="space-y-8">
            {/* Space Center Houston */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-rocket-line text-[#01b47d]"></i>
                Space Center Houston: NASA's Crown Jewel
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">
                  Space Center Houston is a science museum that serves as the official visitor center of NASA Johnson Space Center, displaying over 400 space artifacts, including the Mercury 9, Gemini 5, and Apollo 17 flown space capsules.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">
                  The NASA Tram Tour is included in general admission and takes guests to see the enormous Saturn V rocket at Rocket Park as well as across the 650-hectare campus, including the historic Mission Control room (the "Houston" in "Houston, we have a problem").
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-map-pin-line text-[#01b47d]"></i>
                      Logistics
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">
                      Located about 30 minutes southeast of downtown. Tickets to Space Center Houston start at $29.95 for adults (12 and older), $27.95 for seniors and $24.95 for children ages 4 to 11. Budget 4-5 hours for the full experience, including tram tours.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-lightbulb-line text-[#01b47d]"></i>
                      Pro Tip
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      Get in line as soon as you arrive at the center for tram tours as they fill up quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Museum District */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-gallery-line text-[#01b47d]"></i>
                The Museum District: World-Class Culture
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston's expansive Museum District features 19 museums in four walkable zones, which include popular spots like the Houston Museum of Natural Science, the Contemporary Arts Museum Houston, The Menil Collection and The Museum of Fine Arts, Houston.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Consider visiting on a Thursday, when many of the museums offer free admission in the afternoon and evening. The district is directly served by the METRORail Red Line, making it easy to hop between venues.
                </p>
                
                <div className="mt-4">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-time-line text-[#01b47d]"></i>
                    Budget Time
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    You could spend an entire day (or three) exploring world-class art, natural history exhibits, and cutting-edge contemporary galleries. The Menil Collection, housed in a Renzo Piano-designed building, is always free.
                  </p>
                </div>
              </div>
            </div>

            {/* Buffalo Bayou Park */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-tree-line text-[#01b47d]"></i>
                Buffalo Bayou Park: Houston's Green Heart
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston's green heart—160 acres of trails, kayaking, and outdoor art installations with stunning views of the downtown skyline.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-run-line text-[#01b47d]"></i>
                      Activities
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      Kayak rentals, hiking/biking trails, outdoor fitness equipment
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-camera-line text-[#01b47d]"></i>
                      Best Views
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      Police Officers Memorial and Rosemont Bridge
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-time-line text-[#01b47d]"></i>
                    When to Go
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Early morning or late afternoon to avoid peak heat. Sunset views of the downtown skyline are spectacular.
                  </p>
                </div>
              </div>
            </div>

            {/* Day Trip to Galveston */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-ship-line text-[#01b47d]"></i>
                Day Trip to Galveston
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                If you have a rest day between matches, drive an hour southeast to Galveston Island for Gulf Coast beaches, historic architecture, and seafood straight off the boat. It's the perfect counterpoint to big-city Houston.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food Scene Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-restaurant-line text-[#01b47d]"></i>
            Food: From Food Trucks to Michelin-Level Excellence
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Houston's food scene rivals any city in America for diversity and quality. This is a place where you can eat your way around the world without leaving a five-mile radius.
            </p>
          </div>

          <div className="space-y-8">
            {/* BBQ Section */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                <i className="ri-fire-line text-[#01b47d]"></i>
                BBQ: The Texas Way
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Pappas Bar-B-Q</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Multiple locations serving mesquite-smoked brisket, ribs, and sausage. It's accessible, affordable, and genuinely good.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Goode Company Barbeque</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Celebrating deep intermingling of cultures and cuisines, Goode Company has been serving mesquite-smoked BBQ since 1977 with multiple locations and a relaxed, Texas-casual atmosphere.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">The Pit Room</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Located in Montrose, this spot brings Central Texas-style BBQ (post oak-smoked brisket, pork ribs) with modern twists and craft beer.</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                  What to Order
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Start with brisket—it's the benchmark of Texas BBQ. Add jalapeño-cheese sausage, pork ribs, and sides like mac and cheese or jalapeño creamed corn.</p>
              </div>
            </div>

            {/* Tex-Mex Section */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-heart-line text-[#01b47d]"></i>
                Tex-Mex: Houston's Soul Food
              </h3>
              
              <div className="mb-6">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Tex-Mex isn't Mexican food—it's its own glorious category, born in Texas with influences from both sides of the border. Houston does it better than anywhere.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">The Original Ninfa's on Navigation</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Celebrated for its authentic Tex-Mex cuisine that has set the standard for over 50 years, this iconic establishment is revered for its legendary fajitas, tacos al carbon, and mouthwatering enchiladas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Candente</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston's only Tex-Mex restaurant in the Michelin Guide serves wood-grilled meats, classic Tex-Mex enchiladas, and signature birria tacos in Montrose with a modern, elevated approach.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">El Tiempo Cantina</h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Multiple locations serving sizzling fajitas, tableside guacamole, and margaritas that pack a punch. This is where locals celebrate.</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                  What to Order
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Beef fajitas (cooked over mesquite), cheese enchiladas with chili con carne, tableside guacamole, and a frozen margarita. Queso (melted cheese dip) is mandatory.</p>
              </div>
            </div>

            {/* Beyond BBQ and Tex-Mex */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-global-line text-[#01b47d]"></i>
                Beyond BBQ and Tex-Mex
              </h3>
              
              <div className="mb-6">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston's food scene extends far beyond its two most famous categories:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Vietnamese</h4>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston has one of the largest Vietnamese populations outside Vietnam. Head to Midtown or the Bellaire Chinatown area for phenomenal phở and bánh mì.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Indian</h4>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">The Hillcroft area southwest of downtown is Houston's Little India, packed with authentic restaurants and grocery stores.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Soul Food/Southern</h4>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">This Sassy Soul Café and Lucille's offer fried chicken, shrimp and grits, and collard greens that'll make you understand Southern comfort food.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">International Food Trucks</h4>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">From Nigerian to Peruvian to Korean, Houston's food truck scene brings the world to street corners across the city.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-[#01b47d]"></i>
                  Foodie Strategy
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Eat breakfast tacos from a neighborhood truck, lunch at a BBQ joint, and dinner at a Tex-Mex institution. Repeat for seven days and you'll barely scratch the surface.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & Packing Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-sun-line text-[#01b47d]"></i>
            Weather & What to Pack
          </h2>

          <div className="space-y-8">
            {/* June and July Weather */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-temp-hot-line text-[#01b47d]"></i>
                June and July in Houston: Embrace the Heat
              </h3>
              
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Let's not sugarcoat it: Houston in summer is hot and humid. But the stadium has air conditioning, hotels are climate-controlled, and locals have perfected the art of staying comfortable.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston summers, from June through August, are characterized as hot and humid, with temperatures that can exceed 100 degrees at times. High temperatures are in the 90s, and the lows are in the low to mid-70s.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-calendar-line text-[#01b47d]"></i>
                    June Weather
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Houston averages 82°F in June with high temperatures reaching 90°F and lows around 73°F. Humidity can reach up to 90% in the mornings. June is the wettest month of the year in Houston, with an average rainfall of 5.93 inches, meaning afternoon thunderstorms are common.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-calendar-line text-[#01b47d]"></i>
                    July Weather
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    In July, average temperatures record a high of 93.4°F (34.1°C) and a low of 77.2°F (25.1°C). July offers the year's sunniest weather for Houston, with intense sunshine and high humidity creating a heat index that makes it feel even hotter.
                  </p>
                </div>
              </div>
            </div>

            {/* What This Means for You */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-suitcase-line text-[#01b47d]"></i>
                What This Means for You
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-shirt-line text-[#01b47d]"></i>
                      Clothing
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). Shorts and t-shirts are standard. Dress codes are relaxed in Houston—even nice restaurants rarely require more than "smart casual."</p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-sun-cloudy-line text-[#01b47d]"></i>
                      Sun Protection
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Sunglasses, sunscreen (SPF 30+), and a hat are essential for any outdoor time. The sun is intense.</p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-umbrella-line text-[#01b47d]"></i>
                      Rain Gear
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Pack a compact umbrella or light rain jacket for afternoon thunderstorms, especially in June.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-t-shirt-air-line text-[#01b47d]"></i>
                      Layers
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Bring one light jacket or long-sleeve shirt. Indoor air conditioning can be aggressive, and the contrast from 95°F outside to 68°F inside is jarring.</p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-drop-line text-[#01b47d]"></i>
                      Hydration
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Drink water constantly. Houston humidity causes you to sweat more than you realize. Carry a refillable water bottle.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                  <i className="ri-shield-check-line text-[#01b47d]"></i>
                  Stadium Policies
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Check NRG Stadium's official bag policy before you go—clear bags are typically required for security. Plan accordingly and travel light on match days.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Tips Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-line text-[#01b47d]"></i>
            Practical Tips for International Visitors
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-[#01b47d]"></i>
                Money Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Currency:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">US Dollar (USD)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Cards:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">Credit cards accepted everywhere; contactless payment widely available</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Tipping:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#01b47d] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">ATMs:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">Widely available; use bank-affiliated machines to avoid excessive fees</span>
                  </div>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-bus-line text-[#01b47d]"></i>
                    Public Transit
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    METRORail and bus service covers major corridors. All METRO buses are ADA accessible, offer free Wi-Fi, and are equipped with video surveillance security cameras. Each ride is just $1.25.
                  </p>
                </div>
              </div>
            </div>

            <div>
               <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                 <i className="ri-shield-check-line text-[#01b47d]"></i>
                 Safety & Getting Around
               </h3>
               <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                 Houston is generally safe for visitors, especially in tourist areas and well-traveled neighborhoods. Basic street smarts apply: be aware of your surroundings, keep valuables secure, and stick to well-lit areas at night.
               </p>

               <div className="space-y-4">
                 <div>
                   <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                     <i className="ri-car-line text-[#01b47d]"></i>
                     Driving in Houston
                   </h4>
                   <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                     If you rent a car, know that Houston is sprawling and car-centric. Highways (I-10, I-45, I-610, Beltway 8) connect everything, but traffic can be heavy during rush hours (7-9 AM, 4-7 PM).
                   </p>
                 </div>

                 <div>
                   <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                     <i className="ri-walk-line text-[#01b47d]"></i>
                     Walking
                   </h4>
                   <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                     Downtown, Midtown, Museum District, and Heights/Montrose are walkable. Everywhere else, you'll need wheels.
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <hr className="editorial-divider" />
         </article>

        {/* Language & Connectivity Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-global-line text-[#01b47d]"></i>
            Language & Connectivity
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-translate-2 text-[#01b47d]"></i>
                Language Diversity
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                English is primary, but you'll hear Spanish extensively. Houston is America's most linguistically diverse city—over 145 languages are spoken here. You'll feel right at home no matter where you're from.
              </p>
            </div>

            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-wifi-line text-[#01b47d]"></i>
                Connectivity
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Free Wi-Fi is available in many cafés, hotels, and public spaces. Consider a US SIM card or international data plan for navigation and communication.
              </p>
            </div>
          </div>

          {/* Heat Management */}
          <div className="mt-8">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-temp-cold-line text-[#01b47d]"></i>
              Heat Management
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Houstonians live in air conditioning from May through September. Plan your outdoor activities for early morning or evening. Take advantage of indoor attractions (museums, shopping) during peak afternoon heat.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-ticket-line text-[#01b47d]"></i>
            Ticket Information & Booking Strategy
          </h2>

          <div className="space-y-8">
            {/* How to Get Tickets */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                <i className="ri-shopping-cart-line text-[#01b47d]"></i>
                How to Get World Cup Tickets
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Tickets for the 2026 World Cup are sold in four phases. The first application to purchase general tickets went live Sept. 10 and closed Sept. 19. Subsequent phases will be announced on <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.fifa.com/tickets</a>.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  FIFA World Cup tickets at NRG Stadium in Houston will start at $60, with prices increasing for premium seating and knockout rounds.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-vip-crown-line text-[#01b47d]"></i>
                    Hospitality Packages
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    If you miss the general ticket lottery, hospitality packages start at $1,450 per match with venue series packages for Houston starting at $10,350. These include premium seating, access to exclusive lounges, and food and beverage service.
                  </p>
                </div>
                
                <div>
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-gift-line text-[#01b47d]"></i>
                    Verizon Promotion
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Verizon is giving away free tickets to the World Cup to U.S. customers, with the first round opening Oct. 2 including the first match being played in Houston.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Premium Experiences */}
            <div className="space-y-2">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-vip-diamond-line text-[#01b47d]"></i>
                Alternative: Hospitality & Premium Experiences
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                For those wanting guaranteed access and VIP treatment, official hospitality packages through FIFA's partner On Location offer bundled tickets with hotels, transportation, and exclusive experiences. These cost significantly more but eliminate lottery uncertainty.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Houston Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-heart-line text-[#01b47d]"></i>
            Why Houston Will Make Your World Cup Unforgettable
          </h2>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                This is the most popular and prestigious sporting event in the world, and these matches will put our community on the global stage.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Houston doesn't try to be like other cities—it's confidently, unapologetically itself. You'll experience Tex-Mex breakfast tacos made by a vendor who speaks Vietnamese, attend a match in a climate-controlled dome while it's 98°F outside, and celebrate with supporters from six continents in a city where diversity isn't a buzzword—it's the daily reality.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The matches themselves? They'll be electric. Over five million fans and hospitality guests will have the opportunity to experience the world's game in stadiums across North America, and Houston's portion of that celebration will showcase Texas hospitality on steroids.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                From the moment you step off the plane (into air conditioning, naturally) to your last breakfast taco before heading home, Houston offers something no guidebook can capture: the feeling of being welcomed into a city that's genuinely excited to show you what it's got. No pretense. No attitude. Just "Welcome to Houston—y'all ready for some football?"
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Start Planning Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-[#01b47d]"></i>
            Start Planning Your 2026 World Cup Trip to Houston
          </h2>

          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              The countdown is on. Hotels are booking up. Flights are being reserved. And Houston is preparing to host the world.
            </p>

            <div className="space-y-2">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                <i className="ri-task-line text-[#01b47d]"></i>
                Your Action Plan
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#01b47d] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">✔</div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Register for FIFA tickets</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.fifa.com/tickets</a> for future phases</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#01b47d] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">✔</div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Book accommodations early</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">via <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.hotels.com</a>—6-12 months in advance recommended</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#01b47d] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">✔</div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Research flights</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">to Houston (IAH or HOU) through <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.skyscanner.com</a> or <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">https://www.google.com/flights</a></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#01b47d] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">✔</div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Download the METRO app</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">for public transit and plan your stadium transportation</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#01b47d] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">✔</div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Make restaurant reservations</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-1">for Houston's top spots—places like The Original Ninfa's and Goode Company fill up during big events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <a className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]" href="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" data-discover="true">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/images/cities/dallas-world-cup-2026.webp" alt="Dallas World Cup Guide" loading="lazy" decoding="async" width="600" height="400" srcSet="/images/cities/dallas-world-cup-2026-640.webp 640w, /images/cities/dallas-world-cup-2026-1024.webp 1024w, /images/cities/dallas-world-cup-2026-1600.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Texas Neighbor</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Dallas</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">AT&T Stadium guide and Metroplex planning.</p>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]" href="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" data-discover="true">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/images/cities/mexico-city-world-cup-2026.webp" alt="Mexico City World Cup Guide" loading="lazy" decoding="async" width="600" height="400" srcSet="/images/cities/mexico-city-world-cup-2026-640.webp 640w, /images/cities/mexico-city-world-cup-2026-1024.webp 1024w, /images/cities/mexico-city-world-cup-2026-1600.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Mexico Hub</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Mexico City</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">Estadio Azteca guide and capital highlights.</p>
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
                  <a href={`https://twitter.com/intent/tweet?text=Houston%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group" aria-label="Share on X">
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
