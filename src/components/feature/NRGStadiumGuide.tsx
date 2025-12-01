import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';
import { getEditorialEntry } from '../seo/EditorialCalendar';

interface NRGStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const NRGStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: NRGStadiumGuideProps) => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-stadiums/nrg-stadium-guide';

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
    link.href = '/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-stadiums/nrg-stadium-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    if (!hideHero) {
        setPageMeta({
        title: 'NRG Stadium: World Cup 2026 Guide',
        description: 'Complete guide to NRG Stadium (Houston) for World Cup 2026. Capacity, seating, transportation, and tips for this retractable-roof venue.',
        url: `${siteUrl}${pageUrl}`,
        image: `${siteUrl}/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-11-30',
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'NRG Stadium', 'Houston']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'NRG Stadium',
            'Houston',
            72220,
            'Climate-controlled comfort and world-class infrastructure in the heart of Houston.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'NRG Stadium', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'NRG Stadium World Cup 2026' }
          )
        ]}
      />

      {showHeader && <Header />}
      
      {/* TOC Sidebar - Desktop */}
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

      {/* TOC Mobile */}
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
      {!hideHero && (
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp"
            alt="NRG Stadium"
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
                  <Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">NRG Stadium</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              NRG Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Houston, Texas</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>7 Matches</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>72,220 Capacity</span>
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
      )}

      {/* Content Sections — Premium editorial presentation */}
      <section id="main-content" className="editorial-article-premium dallas-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosts <strong>7 matches</strong> (5 Group, 2 Knockout)</li>
               <li>• Venue: <strong>NRG Stadium</strong> (Houston)</li>
               <li>• Key Feature: <strong>Retractable Roof & AC</strong></li>
               <li>• Nickname: "Houston Stadium" (for WC)</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>
            NRG Stadium: Your Complete Guide to World Cup 2026 in Houston
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Climate-controlled comfort and world-class infrastructure in the heart of Houston.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2024</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Located in <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>, NRG Stadium is Houston's premier sports and entertainment venue.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            <strong>NRG Stadium is one of the </strong>
            <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>
            {`, welcoming fans from across the globe to Texas.`}
          </p>
          <p className="whitespace-pre-line">
            {`When the world's greatest football tournament arrives in Texas in summer 2026, there's no better place to experience the beautiful game than inside NRG Stadium's air-conditioned comfort. As one of only two Texas venues selected to host World Cup matches, this architectural marvel in Houston will welcome seven fixtures—including knockout rounds—to its retractable-roofed bowl. Picture this: 72,000 passionate fans from every corner of the globe, creating an electric atmosphere as nations battle for glory, all while enjoying the intimacy of an indoor arena with the grandeur of an open-air spectacle. Whether you're tracking down your national team or simply want to witness football history, Houston's sporting cathedral promises an unforgettable World Cup experience.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>
            Stadium Overview & Fast Facts
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-building-2-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Official Name</span>
                  <p>NRG Stadium (will be branded "Houston Stadium" for FIFA World Cup 2026)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-map-pin-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Location</span>
                  <p>South Houston, NRG Park complex (off Loop 610 South)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-calendar-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Opened</span>
                  <p>August 24, 2002</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-group-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Capacity</span>
                  <p>72,220 (standard); expandable for major events</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-team-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Primary Tenants</span>
                  <p>Houston Texans (NFL), Houston Livestock Show and Rodeo, Texas Bowl</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-pencil-ruler-2-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Architect</span>
                  <p>Populous (formerly HOK Sport)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-grass-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Surface Type</span>
                  <p>Artificial turf (Matrix Turf with Helix Technology)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-umbrella-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Roof Type</span>
                  <p>Retractable fabric roof (opens/closes in 7 minutes)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-emerald-500"></i>
              Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>First NFL stadium with retractable roof</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>Massive 14,549 sq ft video boards</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>Climate-controlled comfort</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>State-of-the-art high-density WiFi system</span>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-emerald-500"></i>
            History & Legacy
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Built at a cost of $352 million and completed in just 30 months, NRG Stadium opened its doors on August 24, 2002, as the home of the expansion Houston Texans franchise. The venue's creation marked Houston's triumphant return to the NFL after the Oilers departed for Tennessee in 1997, and it symbolized the city's determination to remain a major-league sports destination.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The stadium made history as the first NFL facility to feature a retractable roof, pioneering a design concept that balanced the atmosphere of outdoor football with the comfort and versatility of an enclosed arena. Its translucent fabric roof and extensive glass facades create a sense of transparency that makes the building appear to glow at night—a stunning visual landmark on Houston's skyline.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">NRG Stadium has hosted two Super Bowls (XXXVIII in 2004 and LI in 2017), WrestleMania 25, and the 2024 College Football Playoff National Championship. The venue's soccer credentials are equally impressive, having welcomed numerous U.S. Men's National Team matches, Mexico national team friendlies, CONCACAF Gold Cup fixtures, and Copa América Centenario matches in 2016. During a 2016 Copa América semifinal, the stadium witnessed Lionel Messi score a memorable free kick en route to becoming Argentina's all-time leading scorer.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">The stadium shares its NRG Park campus with the historic Astrodome—once dubbed the "Eighth Wonder of the World"—creating a tangible link between Houston's sports heritage and its modern ambitions.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-4-line text-emerald-500"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Designed using principles of kinetic architecture, NRG Stadium offers a remarkable sense of transparency through its fabric roof and expansive glass panels that provide open-air views from the concourses directly to the field. The architectural vision, realized by Populous in collaboration with local firms, was to create a venue that could transform from intimate arena to open-air spectacle in mere minutes.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The stadium's most iconic feature—its retractable roof—operates on a sophisticated system that can fully open or close in just seven minutes, making it one of the fastest-transforming venues in professional sports. During typical summer conditions (and certainly for World Cup matches), expect the roof to remain closed, with powerful air conditioning maintaining comfortable temperatures despite Houston's notorious heat and humidity.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Inside, the seating bowl wraps tightly around the pitch, creating excellent sightlines from virtually every angle. The three-tier configuration brings fans close to the action while maintaining clear views. Premium amenities include over 7,000 club seats, 186 luxury suites, and multiple lounges and bars, though World Cup match tickets will primarily offer general seating across all levels.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The 2013 installation of twin 50-foot-high by 277-foot-wide HD video boards above each end zone transformed the viewing experience. These colossal displays—totaling over 14,000 square feet—rank among the largest in sports and ensure no moment is missed, whether you're watching replays or checking scores from simultaneous matches.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Acoustically, the enclosed design amplifies crowd noise impressively when the roof is closed, creating an intimidating cauldron of sound for visiting teams. Accessibility features include elevator access to all levels, dedicated ADA seating areas with excellent sightlines, and specialized transportation options for guests with mobility challenges.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-event-line text-emerald-500"></i>
            What Matches to Expect
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston will host seven FIFA World Cup 2026 matches at NRG Stadium: five group stage fixtures (June 14, 17, 20, 23, and 26) plus two knockout rounds—a Round of 32 match on June 29 and a Round of 16 clash on July 4. The July 4th Independence Day knockout match promises to be particularly electric, combining America's biggest holiday with World Cup drama.</p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">While Houston won't host U.S. Men's National Team group matches or the tournament's latter stages beyond the Round of 16, expect the stadium to welcome a diverse array of nations competing across multiple groups. With FIFA's expanded 48-team format, Houston's geographic position and world-class facilities make it ideal for hosting teams from across the globe.</p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">Each match will see the stadium at or near its full 72,000+ capacity, with sold-out crowds expected for all fixtures. The climate-controlled environment means comfortable viewing conditions regardless of Houston's summer weather, and the intimate stadium configuration will create an intense, pressure-cooker atmosphere for knockout stage drama.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-500"></i>
            Getting to the Stadium
          </h3>

          <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
            <i className="ri-train-line text-emerald-500"></i>
            By Metro Rail (Recommended)
          </h4>
          <p className="leading-relaxed mb-4">The METRORail Red Line provides direct access to NRG Park via the Stadium Park/Astrodome station, located just steps from the stadium entrance. Trains run approximately every 12 minutes during regular service, with increased frequency during major events. The journey from downtown Houston's Preston Station takes approximately 28 minutes.</p>
          <p className="leading-relaxed mb-2"><strong>Single fare:</strong> $1.25 each way</p>
          <p className="leading-relaxed mb-4"><strong>Pro tip:</strong> Park-and-ride facilities at Fannin South Station (one stop south of the stadium) offer $15 parking packages that include round-trip rail fare—an excellent value compared to stadium parking.</p>
          <p className="leading-relaxed">For World Cup matches, arrive at least 90 minutes early. Trains will be packed post-match, so consider exploring nearby restaurants or bars for an hour after the final whistle to let crowds disperse.</p>

          <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
            <i className="ri-bus-line text-emerald-500"></i>
            By Bus
          </h4>
          <p className="leading-relaxed">Three METRO bus routes serve NRG Park: Routes 11, 14, and 84, providing connections from various Houston neighborhoods. Bus service is less frequent than rail, so check ridemetro.org for current schedules and route maps.</p>

          <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
            <i className="ri-car-line text-emerald-500"></i>
            By Car & Parking
          </h4>
          <p className="leading-relaxed mb-4">Driving? Prepare for significant matchday traffic. NRG Park offers over 26,000 parking spaces across multiple color-coded lots, with parking passes ranging from $27 to over $150 depending on proximity to the stadium. Lots open 2.5 hours before kickoff, and prepaid parking passes are strongly recommended as cash parking is not available for major events.</p>
          <p className="font-semibold mb-2">Parking tips:</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Book passes early through official channels or platforms like SpotHero</li>
            <li>RV and oversized vehicles require two parking passes</li>
            <li>Off-site lots 10-20 minutes away offer cheaper alternatives for budget-conscious fans</li>
            <li>Expect 30-45 minute delays exiting after matches</li>
          </ul>
          <p className="font-semibold mb-2">From airports:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Houston Hobby Airport (HOU):</strong> 10 miles, approximately 20 minutes via I-45 North to Loop 610 West</li>
            <li><strong>George Bush Intercontinental (IAH):</strong> 28 miles, approximately 35-45 minutes via I-69 South to Loop 610 South</li>
          </ul>

          <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
            <i className="ri-taxi-line text-emerald-500"></i>
            By Rideshare/Taxi
          </h4>
          <p className="leading-relaxed">Official rideshare drop-off and pickup zones are located in the Yellow Lot 37 on Maine Street at Gate 16. Expect surge pricing during peak arrival and departure times—budget $25-40 from downtown, $40-60 from IAH, or $20-30 from Hobby Airport. Allow extra time for post-match traffic congestion.</p>

          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Houston's sprawling layout means accommodation choices depend on your priorities: proximity to public transit, walkable nightlife, or cultural attractions.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2">Best Neighborhoods for World Cup Visitors</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Downtown:</strong> Puts you on the METRORail Red Line for easy stadium access (25-minute ride). Convenient for exploring Houston's Theater District and EaDo (East Downtown), where the official FIFA Fan Festival will transform the area into a 34-day celebration near Shell Energy Stadium. Expect hotel rates to surge during the tournament.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Midtown/Museum District:</strong> Offers walkable neighborhoods packed with nightlife, restaurants, and cultural attractions like the Museum of Fine Arts and Houston Museum of Natural Science. Red Line access makes stadium trips straightforward. Hotel ZaZa Museum District provides luxury with a poolside party vibe perfect for pre-game gatherings.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6"><strong>Montrose:</strong> Houston's eclectic arts district combines trendy restaurants, craft cocktail bars, and vintage shops with a bohemian atmosphere. Slightly farther from the stadium but offers authentic local flavor and excellent dining.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2">Budget Options</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Chain hotels near the Medical Center and South Main corridor offer competitive rates (typically $100-150/night outside tournament weeks). Consider booking accommodations early through platforms like <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline">booking.com</a> or Expedia, as over 90% of Houston's hotels were already booked by late 2025 for the World Cup period.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2">Mid-Range Picks</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Downtown Houston hotels—including newer properties like the Home2Suites and Tru by Hilton added specifically for World Cup capacity—provide modern amenities and transit convenience. Expect $200-300/night during the tournament.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2">Luxury Options</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">The Omni Houston Hotel near NRG Stadium may serve as a base for visiting national teams, while the JW Marriott Downtown (recently expanded) offers upscale comfort in the city center. For unique experiences, explore boutique properties in Montrose or splurge on the Hotel ZaZa's Texas-sized luxury.</p>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Pro tip:</strong> Consider accommodations in nearby suburbs like Sugar Land or The Woodlands if downtown prices spike too high. Just factor in longer commute times.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-emerald-500"></i>
            Matchday Tips & Insider Advice
          </h3>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
            <i className="ri-time-line text-emerald-500"></i>
            Arrive early
          </h4>
          <p className="leading-relaxed">Security screening for World Cup matches will be extensive. Plan to arrive at least 90 minutes before kickoff to clear security, explore the stadium, grab food, and soak in the pre-match atmosphere.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-shopping-bag-3-line text-emerald-500"></i>
            What to bring &amp; Bag policy
          </h4>
          <p className="leading-relaxed mb-2"><strong>What to bring:</strong> Valid government-issued ID (required for entry), phone/camera (for memories), sunscreen (even indoors—UV can penetrate the roof fabric), and a portable phone charger.</p>
          <p className="leading-relaxed"><strong>Bag policy:</strong> Expect FIFA's standard restrictions—small clear bags only, with specific size limitations.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-prohibited-line text-emerald-500"></i>
            What NOT to bring
          </h4>
          <p className="leading-relaxed">Large bags, backpacks, outside food/beverages, noisemakers, laser pointers, or any prohibited items. Check FIFA's official guidelines before traveling.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-restaurant-line text-emerald-500"></i>
            Food &amp; drink inside
          </h4>
          <p className="leading-relaxed">Stadium concessions will feature typical American stadium fare (burgers, hot dogs, nachos, pizza) alongside international options. Prices will be premium ($10-15 for meals, $8-12 for beer). The connected climate control means you can comfortably enjoy hot food despite outdoor temperatures exceeding 95°F (35°C).</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-sun-line text-emerald-500"></i>
            Beat the heat
          </h4>
          <p className="leading-relaxed">Houston in June-July is brutally hot and humid. NRG's air conditioning is essential—expect comfortable 72°F (22°C) temperatures inside regardless of outdoor conditions. Dress in breathable fabrics and stay hydrated.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-train-line text-emerald-500"></i>
            Post-match transport
          </h4>
          <p className="leading-relaxed">The METRORail operates special event service with increased frequency during Texans games and will likely extend this for World Cup matches. Still, expect packed trains. Exit strategy: Consider lingering at one of the stadium's bars or exploring nearby restaurants for 45-60 minutes to avoid the rush.</p>

          <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
            <i className="ri-wifi-line text-emerald-500"></i>
            Mobile connectivity
          </h4>
          <p className="leading-relaxed">The stadium features a state-of-the-art high-density WiFi system designed to handle simultaneous connections from all 72,000+ guests—perfect for sharing match moments on social media or checking live scores from other venues.</p>

          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-user-line text-emerald-500"></i>
            Things to Do Nearby
          </h3>

          <h4 className="editorial-h4 animate-fade-up mb-2">Pre-Match Spots</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3"><strong>Along the METRORail Red Line:</strong> Stop at Midtown stations for pre-game drinks at Bad News Bar or fuel up with Vietnamese bánh mì at Cali Sandwich &amp; Pho near the McGowan stop. Cajun restaurant Zydeco offers quick po'boys and gumbo before heading to the stadium.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3"><strong>Pitch 25:</strong> This sports bar near NRG Stadium, founded by a former Houston Dynamo player, features over 100 beers on tap, indoor turf fields, and lawn games—ideal for pre-match tailgating atmospheres.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Little Woodrow's Rice Village:</strong> Just two miles from the stadium, this popular sports bar offers Tuesday trivia nights and all-day $3 Lone Star beers.</p>
          

          <h4 className="editorial-h4 animate-fade-up mb-2">Cultural Attractions (15-20 minutes away)</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">Hermann Park offers paddle boating, a miniature train ride, and the serene McGovern Centennial Gardens—perfect for morning strolls before afternoon matches. The Houston Zoo (6,000+ animals) and Museum District (including the Houston Museum of Natural Science with its planetarium and butterfly center) provide excellent half-day excursions.</p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Rice Village:</strong> This upscale shopping district blends boutiques, cafes, wine bars, and dessert spots for leisurely browsing between matches.</p>
          

          <h4 className="editorial-h4 animate-fade-up mb-2">Post-Match Celebrations</h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">Montrose and EaDo neighborhoods come alive after matches, with bars and patios packed with jubilant supporters dissecting every play. The official FIFA Fan Festival in EaDo provides extended celebration spaces with live entertainment, giant screens broadcasting other matches, and international food vendors.</p>
          

          <h4 className="editorial-h4 animate-fade-up mb-2">Must-visit Houston experiences</h4>
            <ul className="list-disc ml-6 text-slate-700 dark:text-slate-200 space-y-2">
              <li>Space Center Houston (NASA's Johnson Space Center visitor complex)</li>
              <li>Buffalo Bayou Park (kayaking, hike/bike trails, skyline views)</li>
              <li>Original Ninfa's on Navigation (legendary Tex-Mex, birthplace of fajitas)</li>
              <li>James Turrell's Twilight Epiphany Skyspace at Rice University</li>
            </ul>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h2 className="editorial-h2">
            <i className="ri-compass-3-line text-emerald-500"></i>
            Beyond the Stadium: Explore Houston
          </h2>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston's diversity and Gulf Coast energy make it an exceptional World Cup 2026 destination.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <p className="font-semibold">Discover Houston:</p>
              <p>
                Explore our complete <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston World Cup 2026 Guide</Link> for comprehensive information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hotels near NRG Stadium</li>
                <li>Houston's diverse dining scene</li>
                <li>Space Center Houston and attractions</li>
                <li>Transportation and getting around</li>
                <li>Match day planning tips</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Other Southern Stadiums:</p>
              <p>
                Planning a Texas tour? Visit <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas. Also check out <Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mercedes-Benz Stadium</Link> in Atlanta or <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Hard Rock Stadium</Link> in Miami.
              </p>
            </div>
            <p>
              <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-flag-line text-emerald-500"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">NRG Stadium represents the perfect synthesis of Texas ambition and world-class sports infrastructure—a venue that delivers NFL-caliber comfort and intimacy while accommodating World Cup-sized crowds. The retractable roof technology means you'll experience matches in climate-controlled perfection, a crucial advantage during Houston's sweltering summer. The city's remarkable diversity, exceptional dining scene, and southern hospitality create a welcoming atmosphere for international visitors, while the fan-friendly stadium configuration ensures every seat offers compelling views of the action.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
              <i className="ri-user-star-line text-emerald-500"></i>
              This stadium is perfect for:
            </h4>
            <p className="leading-relaxed">Fans who appreciate architectural innovation, anyone wanting guaranteed comfort (no weather worries!), and travelers seeking excellent transport connections via METRORail. The knockout round fixtures on June 29 and especially July 4 promise unforgettable atmospheres.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
              <i className="ri-star-line text-emerald-500"></i>
              Don't miss:
            </h4>
            <p className="leading-relaxed">The experience of walking into NRG Stadium through those glass-facade concourses as the building glows against Houston's skyline. Arrive early, grab some Tex-Mex from a nearby food truck, ride the Metro with singing supporters from dozens of nations, and prepare for seven minutes of pure World Cup magic.</p>

            <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
              <i className="ri-calendar-check-line text-emerald-500"></i>
              Book now:
            </h4>
            <p className="leading-relaxed">With over 90% of Houston hotels already reserved for the tournament and estimates of over 500,000 visitors arriving for the matches, early planning is essential. Secure your <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">booking.com</a> or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia</a>, explore Airbnb options in Montrose or Museum District, and consider booking airport transfers in advance through trusted shuttle services to avoid July 4th weekend surcharges.</p>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston is ready to welcome the world. Are you ready to experience World Cup 2026 in Texas style?</p>
          </div>
          <hr className="editorial-divider" />
        </article>
        
        {/* Rate & Share */}
        <article className="editorial-body mt-12 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Was this guide helpful?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Rate this guide to help us improve our World Cup 2026 content.</p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRate(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} stars`}
                  >
                    <i 
                      className={`ri-star-${(hoverRating || userRating) >= star ? 'fill' : 'line'} text-3xl ${
                        (hoverRating || userRating) >= star ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'
                      }`}
                    ></i>
                  </button>
                ))}
                {hasRated && <span className="ml-3 text-emerald-500 font-medium animate-fade-in">Thanks for voting!</span>}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Share this guide</h3>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'NRG Stadium: World Cup 2026 Guide',
                        text: 'Check out this complete guide to NRG Stadium for World Cup 2026!',
                        url: window.location.href,
                      })
                    } else {
                       navigator.clipboard.writeText(window.location.href);
                       alert('Link copied to clipboard!');
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <i className="ri-share-line"></i>
                  <span>Share</span>
                </button>
                <a 
                  href={`https://twitter.com/intent/tweet?text=Check out this complete guide to NRG Stadium for World Cup 2026!&url=${encodeURIComponent('https://stadiumport.com/world-cup-2026-stadiums/nrg-stadium-guide')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <i className="ri-twitter-x-line"></i>
                  <span>Post</span>
                </a>
                <a 
                  href={`mailto:?subject=NRG Stadium Guide&body=Check out this guide: https://stadiumport.com/world-cup-2026-stadiums/nrg-stadium-guide`}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                >
                  <i className="ri-mail-line"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </article>

      </section>

      <Footer />
    </div>
  );
};
