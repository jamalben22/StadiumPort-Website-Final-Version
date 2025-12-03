import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';

interface ATTStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const ATTStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: ATTStadiumGuideProps) => {
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
  const currentPath = '/world-cup-2026-stadiums/att-stadium-guide';
  const pageUrl = currentPath;
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageTitle = 'AT&T Stadium - World Cup 2026 Guide';

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
    link.href = '/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp'
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
    if (!hideHero) {
        setPageMeta({
        title: 'AT&T Stadium: World Cup 2026 Guide',
        description: 'Complete guide to AT&T Stadium (Arlington) for World Cup 2026. Host of 9 matches including a semifinal, capacity details, transportation, and matchday tips.',
        url: `${siteUrl}${currentPath}`,
        image: `${siteUrl}/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-12-01',
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'AT&T Stadium', 'Dallas', 'Arlington']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'AT&T Stadium',
            'Arlington, Texas',
            80000,
            'The Colossal Crown Jewel Hosting the Most World Cup 2026 Matches.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'AT&T Stadium', url: currentPath }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'AT&T Stadium World Cup 2026' }
          )
        ]}
      />

      {showHeader && <Header />}
      
      {/* TOC Sidebar - Desktop */}
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
                        ? 'bg-[#01b47d]/10 dark:bg-[#01b47d]/20 text-[#01b47d] dark:text-[#01b47d] border border-[#01b47d]/30 dark:border-[#01b47d]/40 shadow-sm'
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

      {/* TOC Mobile */}
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
      {!hideHero && (
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp"
            alt="AT&T Stadium"
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
                  <Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">AT&T Stadium</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              AT&T Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Arlington, Texas</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>Most Matches Host (9)</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>80,000 Capacity</span>
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
      )}

      {/* Content Sections — Premium editorial presentation */}
      <section id="main-content" className="editorial-article-premium dallas-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosts <strong>9 matches</strong> (Most of any venue)</li>
               <li>• Venue: <strong>AT&T Stadium</strong> (Arlington)</li>
               <li>• Key Event: <strong>Semifinal on July 14</strong></li>
               <li>• Feature: <strong>World's Largest Retractable Doors</strong></li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            The Colossal Crown Jewel Hosting the Most World Cup 2026 Matches
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Everything is bigger in Texas, including the World Cup schedule.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>10 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Dec 2024</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            When FIFA officials sought a venue capable of delivering American football's grandeur at football's greatest tournament, they found their answer in Arlington, Texas. Located in <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>, AT&T Stadium is one of the world's largest and most impressive venues. <strong>AT&T Stadium is one of the </strong>
            <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>
            {`, and will host nine matches—more than any other venue in the tournament, including a semifinal showdown that will determine one of the finalists.`}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            For international fans, this $1.15 billion architectural marvel represents everything audacious about American sports culture: a retractable roof spanning 1,225 feet, a center-hung video board once the world's largest, and seating for 80,000 that can expand beyond 100,000. This is where Super Bowls are decided, where college football championships unfold, and where the beautiful game will write new North American history.
          </p>
          
          <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "This is where Super Bowls are decided... and where the beautiful game will write new North American history."
          </blockquote>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            Planning to see multiple matches across the region? Check out <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston, <Link to="/world-cup-2026-stadiums/arrowhead-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Arrowhead Stadium</Link> in Kansas City, and <Link to="/world-cup-2026-stadiums/estadio-bbva-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio BBVA</Link> in Monterrey for a cross-border experience.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d] text-3xl"></i>
            Stadium Overview & Fast Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <i className="ri-building-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Official Name:</strong> AT&T Stadium</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-star-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Nickname:</strong> Jerry World</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-map-pin-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Location:</strong> Arlington, Texas (Dallas-Fort Worth metroplex)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-map-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Address:</strong> 1 AT&T Way, Arlington, TX 76011</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-calendar-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Opened:</strong> May 27, 2009</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-group-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Capacity:</strong> 80,000 (expandable to 105,000+ with standing room)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-trophy-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>World Cup Capacity:</strong> Approximately 92,000</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-shield-star-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Primary Tenant:</strong> Dallas Cowboys (NFL)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <i className="ri-music-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Secondary Uses:</strong> Cotton Bowl Classic, Big 12 Championship, concerts, special events</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-pencil-ruler-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Architect:</strong> HKS, Inc. (Lead architect: Bryan Trubey)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-tools-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Structural Engineer:</strong> Walter P Moore</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-briefcase-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>General Contractor:</strong> Manhattan Construction Company</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-money-dollar-circle-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Construction Cost:</strong> $1.15 billion</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-leaf-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Surface Type:</strong> Artificial turf (Matrix Turf); natural grass will be installed for World Cup 2026</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-arrow-up-down-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Roof Type:</strong> Retractable (opens/closes in approximately 12 minutes)</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Center-hung video board: 160 feet wide × 72 feet tall (previously world's largest)</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>292-foot arched box trusses (longest single-span roof structure in the world)</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Retractable glass end zone doors (180 feet wide × 120 feet tall)</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Playing field sits 50 feet below street level</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>300+ luxury suites across five levels</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Over 3,000 LCD displays throughout the facility</span>
              </li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-book-open-line text-[#01b47d] text-3xl"></i>
            History & Legacy
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              AT&T Stadium opened in 2009 as the third home in Dallas Cowboys history, replacing the iconic but aging Texas Stadium. The project was initiated in the mid-1990s when Jerry Jones envisioned a year-round entertainment venue that could host not just football but Super Bowls, concerts, and major international events. The stadium's actual construction cost ballooned from an estimated $650 million to $1.15 billion, making it one of the most expensive sports venues ever built.
            </p>
            <p className="leading-relaxed mb-6">
              On February 6, 2011, AT&T Stadium hosted Super Bowl XLV, where the Green Bay Packers defeated the Pittsburgh Steelers 31-25. The venue has since welcomed NCAA Final Four basketball tournaments, the College Football Playoff National Championship, multiple Gold Cup soccer tournaments, and concerts by the world's biggest artists. The stadium set an NFL regular season attendance record in 2009 with 105,121 spectators.
            </p>
            <p className="leading-relaxed">
              For soccer fans, AT&T Stadium has deep roots in the sport. The Dallas area previously hosted World Cup matches at the Cotton Bowl in 1994, including a legendary Brazil-Netherlands quarterfinal. The stadium has hosted multiple CONCACAF Gold Cup matches since opening, including opening matches in 2011, semifinals in 2013 and 2017, and quarterfinals in 2021 and 2023. In preparation for 2026, AT&T Stadium is undergoing a reported $295 million renovation project focused on suite upgrades, and the playing surface will be widened and fitted with natural grass to comply with FIFA regulations.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d] text-3xl"></i>
            Stadium Architecture & Experience
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              AT&T Stadium's defining architectural feature is its pair of massive steel arches—each measuring 292 feet tall and spanning 1,225 feet—the longest single-span arched box trusses supporting any building structure on the planet. The exterior showcases a futuristic design with an 800-foot canted glass wall that floods the interior with natural light.
            </p>
            <p className="leading-relaxed mb-6">
              Inside, the playing field sits 50 feet below street level, giving fans entering the stadium dramatic panoramic views of the bowl. The retractable glass end zone doors—each 180 feet wide and 120 feet tall—are the largest in the world and open or close in just 18 minutes, seamlessly connecting the interior with outdoor plaza areas. The retractable roof, when opened, reveals an opening reminiscent of Texas Stadium's iconic hole, but can be closed to create a climate-controlled environment regardless of North Texas weather.
            </p>
            <p className="leading-relaxed mb-6">
              The crown jewel remains the center-hung video board, suspended 90 feet above the field. Measuring 160 feet long by 72 feet tall and weighing 1.2 million pounds, it was the world's largest HD video screen when installed. Four screens face in each direction, ensuring every seat has a perfect view of replays and live action.
            </p>
            <p className="leading-relaxed mb-6">
              The seating bowl features 80,000 fixed seats across multiple tiers, with 15,000 club seats offering premium amenities and 300+ luxury suites positioned as close as 20 rows from the field. The acoustics capture crowd noise effectively, and when full for major matches, the atmosphere rivals any purpose-built football stadium.
            </p>
            <p className="leading-relaxed">
              Accessibility is prioritized throughout, with elevators and escalators connecting all levels, wheelchair-accessible seating distributed across price points, and companion seating available. The stadium also houses a Dallas Cowboys Hall of Fame, team pro shop, and rotating art exhibitions featuring contemporary works curated by the Jones family.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-calendar-line text-[#01b47d] text-3xl"></i>
            What Matches to Expect
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              AT&T Stadium will host nine matches during the 2026 FIFA World Cup—the most of any venue in the tournament. The schedule includes five group stage matches (June 14, 17, 22, 25, and 27), two Round of 32 matches (June 30 and July 3), one Round of 16 match (July 6), and a semifinal on July 14.
            </p>
            <p className="leading-relaxed mb-6">
              AT&T Stadium narrowly missed hosting the final, which was awarded to MetLife Stadium in New Jersey, but hosting a semifinal guarantees at least one team's journey to the final will pass through Arlington. Expect capacity crowds approaching 92,000 for knockout rounds, with the semifinal generating electric atmosphere as fans from around the world converge on North Texas.
            </p>
            <p className="leading-relaxed">
              This marks the second time the Dallas area has hosted World Cup matches. In 1994, the Cotton Bowl in Fair Park hosted six matches, including the memorable Brazil-Netherlands quarterfinal that's still regarded as one of the greatest World Cup matches ever played. Thirty-two years later, the region welcomes the tournament back in a venue purpose-built for such grand occasions.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d] text-3xl"></i>
            Getting to the Stadium
          </h3>
          <div className="mb-8">
            <p className="leading-relaxed"><strong>Important Note:</strong> Arlington is the largest city in the United States without a traditional public mass transit system. There is no direct train or bus line to AT&T Stadium. However, special arrangements are being made for World Cup 2026.</p>
          </div>
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-train-line text-[#01b47d]"></i>
              By Public Transit (World Cup Special Service)
            </h4>
            <p className="leading-relaxed">
              For the 2026 World Cup, Dallas Area Rapid Transit (DART) plans to implement special transportation including Trinity Railway Express (TRE) trains running at peak frequency between Victory Station (near Dallas) and CentrePort Station (Fort Worth), with private shuttle service to AT&T Stadium. Additionally, up to 50 DART buses will use a dedicated express lane on Interstate 30 to transport fans from Victory Station to a staging area near the stadium.
            </p>
            <p className="leading-relaxed"><strong>From Downtown Dallas:</strong></p>
            <ul className="leading-relaxed ml-6">
              <li>Take DART or TRE to Victory Station or CentrePort Station</li>
              <li>Board World Cup shuttle to AT&T Stadium (approximately 30-45 minutes total)</li>
              <li>Regular DART fare: $2.50-$5.00; World Cup shuttle pricing TBA</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-taxi-line text-[#01b47d]"></i>
              By Rideshare/Taxi
            </h4>
            <p className="leading-relaxed">Uber and Lyft are the most practical options for most visitors:</p>
            <ul className="leading-relaxed ml-6">
              <li><strong>From Downtown Dallas:</strong> 20-25 minutes (20 miles), typically $25-45 depending on surge pricing</li>
              <li><strong>From DFW Airport:</strong> 15-20 minutes (17 miles), typically $20-35</li>
              <li><strong>From Downtown Fort Worth:</strong> 15-20 minutes (12 miles), typically $20-30</li>
            </ul>
            <p className="leading-relaxed"><strong>Tip:</strong> The designated rideshare pickup area is approximately half a mile from the stadium, requiring a walk. On matchdays, expect surge pricing and longer wait times post-match. Book your ride before exiting the stadium.</p>
          </div>
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-roadster-line text-[#01b47d]"></i>
              By Car
            </h4>
            <p className="leading-relaxed">If driving, AT&T Stadium has extensive parking, though expect matchday premiums:</p>
            <ul className="leading-relaxed ml-6">
              <li><strong>Official stadium lots:</strong> Parking typically ranges from $40-75 for Cowboys games; World Cup rates expected to be higher</li>
              <li><strong>Private lots nearby:</strong> $30-60, often requiring advance purchase</li>
              <li><strong>From Downtown Dallas:</strong> Take I-30 West to Exit 28A (Collins Street)</li>
              <li><strong>From DFW Airport:</strong> Take TX-360 South to I-30 East</li>
            </ul>
            <p className="leading-relaxed"><strong>Traffic Advisory:</strong> Arrive at least 3 hours before kickoff. Post-match traffic can take 45+ minutes just to exit parking areas.</p>
          </div>
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-bus-line text-[#01b47d]"></i>
              By Private Transfer/Shuttle
            </h4>
            <p className="leading-relaxed">Many Arlington hotels offer matchday shuttles. Downtown Arlington bars and restaurants including J. Gilligan's Bar & Grill and Grease Monkey run shuttles for approximately $15-20 per person. Book early through platforms like Viator or GetYourGuide for guaranteed transfers from Dallas/Fort Worth airports.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] text-3xl"></i>
            Where to Stay
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Entertainment District (Walking Distance to Stadium)
              </h4>
              <p className="leading-relaxed mb-4">This is prime territory for World Cup fans wanting to be steps from the action:</p>
              <ul className="list-disc ml-6">
                <li><strong>Loews Arlington Hotel</strong> (luxury, adjacent to Texas Live!): Modern high-rise with 888 rooms, rooftop pool, and direct access to Arlington's entertainment complex. From $250/night.</li>
                <li><strong>Live! by Loews Arlington</strong> (upscale, adjacent to Texas Live!): Contemporary 300-room hotel with floor-to-ceiling windows overlooking the stadium district. From $200/night.</li>
                <li><strong>Sheraton Arlington Hotel</strong> (mid-range): Full-service property within walking distance to all three major stadiums. From $150/night.</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-building-line text-[#01b47d]"></i>
                Arlington Central (1-3 miles from stadium)
              </h4>
              <ul className="list-disc ml-6">
                <li><strong>Hilton Arlington</strong> (mid-range): Approximately 1.5 miles from AT&T Stadium and Six Flags Over Texas. Self-parking $20/day. From $130/night.</li>
                <li><strong>Courtyard by Marriott Arlington Entertainment District</strong> (mid-range): Modern chain hotel with shuttle options. From $120/night.</li>
                <li><strong>Red Roof Inn Arlington Entertainment District</strong> (budget): Basic accommodations within 2 miles of stadium. From $60-80/night.</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-plane-line text-[#01b47d]"></i>
                Near DFW Airport (10 miles from stadium)
              </h4>
              <p className="leading-relaxed mb-4">Practical for international visitors with early flights or those wanting free airport shuttles:</p>
              <ul className="list-disc ml-6">
                <li><strong>Hyatt Regency DFW</strong> (mid-range): Inside airport terminal, ultimate convenience. From $140/night.</li>
                <li><strong>Grand Hyatt DFW</strong> (luxury): Connected to terminal, spa, multiple restaurants. From $180/night.</li>
                <li>Various airport hotels with free shuttles: Hampton Inn, Holiday Inn Express, Comfort Suites ($90-130/night)</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-building-4-line text-[#01b47d]"></i>
                Downtown Dallas (20 miles from stadium)
              </h4>
              <p className="leading-relaxed mb-4">For visitors wanting urban nightlife and culture between matches:</p>
              <ul className="list-disc ml-6">
                <li><strong>The Joule</strong> (luxury boutique): Stylish downtown hotel with rooftop pool. From $250/night.</li>
                <li><strong>Kimpton Pittman Hotel</strong> (upscale boutique): Arts District location, pet-friendly. From $180/night.</li>
                <li><strong>Aloft Dallas Downtown</strong> (mid-range): Modern design, near nightlife. From $120/night.</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-[#01b47d]"></i>
                Booking Strategy
              </h4>
              <p className="leading-relaxed">Use platforms like Booking.com, Expedia, or Airbnb to compare rates. Book at least 6-9 months in advance for World Cup dates. Consider vacation rentals in Arlington for groups wanting multiple bedrooms at better value than hotel suites.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-lightbulb-line text-[#01b47d] text-3xl"></i>
            Matchday Tips & Insider Advice
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-time-line text-[#01b47d]"></i>
                Arrival Time
              </h4>
              <p className="leading-relaxed">Security and entry procedures will be extensive for World Cup matches. Plan to arrive 2.5-3 hours before kickoff. Gates typically open 2 hours pre-match, giving you time to explore the massive facility, grab food, and soak in pre-match atmosphere.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-shield-check-line text-[#01b47d]"></i>
                Bag Policy
              </h4>
              <p className="leading-relaxed">AT&T Stadium enforces strict NFL bag policies. Allowed bags must be clear plastic, vinyl, or PVC and not exceed 12" × 6" × 12", or small clutch purses (4.5" × 6.5"). Leave backpacks and large bags at your hotel.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-suitcase-line text-[#01b47d]"></i>
                What to Bring
              </h4>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Mobile ticket on your phone (all tickets are mobile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Valid photo ID (passport for international visitors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Light jacket or sweater (stadium air conditioning can be aggressive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Sunglasses if roof is open</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Portable phone charger</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Cash for vendors outside stadium</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-sun-line text-[#01b47d]"></i>
                Weather Considerations
              </h4>
              <p className="leading-relaxed">June/July in North Texas means heat—often 95°F+ (35°C+). The retractable roof and climate control mean comfort inside, but dress for extreme heat when arriving. Sunscreen and hydration essential if tailgating or exploring outdoor plazas.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                Food & Drink Inside
              </h4>
              <p className="leading-relaxed">The stadium offers extensive concessions from BBQ and Tex-Mex to pizza and burgers. Prices are premium ($12-18 for entrees, $10-15 for beer). Notable spots:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Club Audi for upscale dining (club ticket holders)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Silver Mine Subs for quick bites</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-[#01b47d] mt-1"></i>
                  <span>Multiple Tex-Mex and taco stands throughout concourses</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-whiskey-line text-[#01b47d]"></i>
                Alcohol
              </h4>
              <p className="leading-relaxed">Beer and cocktails available throughout (prices $12-16). Texas allows alcohol sales at sporting events, though FIFA may have specific policies for World Cup matches.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-door-open-line text-[#01b47d]"></i>
                Best Gates
              </h4>
              <p className="leading-relaxed">Gates A and E on the east side typically have shorter security lines. Premium ticket holders have dedicated entrances on the west side.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-route-line text-[#01b47d]"></i>
                Post-Match Exit Strategy
              </h4>
              <p className="leading-relaxed">Don't rush. Wait 15-20 minutes after final whistle for crowds to thin. If using rideshare, walk toward Texas Live! entertainment complex for better pickup locations and shorter waits. Public transit shuttles will run for 60-90 minutes post-match.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] text-3xl"></i>
            Things to Do Nearby
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-restaurant-line text-[#01b47d]"></i>
                Pre-Match (Within Walking Distance):
              </h4>
              <p className="leading-relaxed mb-4"><strong>Texas Live!</strong> (adjacent): This sprawling entertainment complex is Arlington's pre-match headquarters. The Live! Arena features a 100-foot LED screen for watching other World Cup matches, while Troy's restaurant (owned by Cowboys legend Troy Aikman) offers elevated sports bar fare and craft cocktails. Arlington Backyard is an outdoor concert venue with stadium views.</p>
              <p className="leading-relaxed mb-4"><strong>J. Gilligan's Bar & Grill</strong> (1.5 miles): Famous for their Irish Nachos and providing shuttles to the stadium. Arrive 3 hours before kickoff for good seating.</p>
              <p className="leading-relaxed"><strong>Hurtado Barbecue</strong> (2.5 miles): One of Texas's top barbecue spots. Expect lines but worth it for authentic brisket and birria tacos.</p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-user-smile-line text-[#01b47d]"></i>
                Family Attractions:
              </h4>
              <ul className="list-disc ml-6">
                <li><strong>Six Flags Over Texas</strong> (1 mile): The original Six Flags theme park features 14 world-class roller coasters and 100+ attractions. If you have a day between matches, this is essential Texas entertainment.</li>
                <li><strong>Six Flags Hurricane Harbor</strong> (across I-30): Water park with wave pools, lazy rivers, and slides—perfect for beating the Texas heat.</li>
                <li><strong>Globe Life Field</strong> (adjacent): Home of the 2023 World Series champion Texas Rangers. Stadium tours available on non-game days.</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-building-line text-[#01b47d]"></i>
                Culture & Sightseeing (20-30 minutes away):
              </h4>
              <ul className="list-disc ml-6">
                <li><strong>Dallas Arts District:</strong> Museums including Dallas Museum of Art (free admission), Nasher Sculpture Center, and Perot Museum of Nature & Science</li>
                <li><strong>Fort Worth Stockyards:</strong> Historic district with twice-daily cattle drives, western shops, and Texas honky-tonks</li>
                <li><strong>Sixth Floor Museum at Dealey Plaza:</strong> Chronicles President Kennedy's assassination</li>
                <li><strong>Bishop Arts District (Dallas):</strong> Trendy neighborhood with galleries, boutiques, and restaurants</li>
              </ul>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Celebrations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-party-popper-line text-[#01b47d] text-3xl"></i>
            Post-Match Celebrations
          </h3>
          <p className="leading-relaxed">
            Return to Texas Live! for late-night celebrations with fellow fans. Downtown Arlington offers additional bars and restaurants along Front Street and Division Street, though the energy will be concentrated at Texas Live! on matchdays.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Dallas */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] text-3xl"></i>
            Beyond the Stadium: Explore Dallas
          </h3>
          <div className="space-y-6">
            <p className="leading-relaxed">
              Dallas's vibrant culture and Texas hospitality create an exciting World Cup 2026 experience beyond AT&T Stadium.
            </p>
            <div>
              <p className="font-semibold">Discover Dallas:</p>
              <p>
                Explore our complete <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Dallas World Cup 2026 Guide</Link> for essential information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hotels near AT&T Stadium in Arlington</li>
                <li>Transportation to the stadium</li>
                <li>Downtown Dallas attractions</li>
                <li>Texas BBQ and dining scene</li>
                <li>Match day logistics and tips</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Other Texas & Central Stadiums:</p>
              <p>
                Catching multiple matches in Texas? Check out <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston. Also visit <Link to="/world-cup-2026-stadiums/arrowhead-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Arrowhead Stadium</Link> in Kansas City.
              </p>
            </div>
            <p>
              <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-medal-line text-[#01b47d] text-3xl"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              AT&T Stadium embodies American sports ambition at its most spectacular—a venue where cutting-edge technology, architectural audacity, and genuine football atmosphere converge. While it lacks the intimate European stadium charm, it compensates with scale, spectacle, and world-class amenities that will make the 2026 World Cup semifinal an unforgettable experience. The lack of direct public transit is Arlington's Achilles' heel, but special World Cup services and abundant rideshare options mitigate the challenge.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Who Will Love It Most:</strong> Fans who appreciate architectural marvels, technology enthusiasts, and anyone wanting a quintessentially American stadium experience. Families will find abundant entertainment options nearby, while international visitors get authentic Texas culture without compromise.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Don't Miss:</strong> Arrive early to explore the art collection, experience that jaw-dropping first view of the field from the main concourse, and witness the center-hung video board in action—it's genuinely one of global sport's most impressive sights.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Book Now:</strong> With nine matches—the most of any 2026 venue—accommodations and transport will be in extreme demand. International fans should secure hotels 9-12 months in advance, particularly for the July 14 semifinal. Consider booking nearby Dallas or Fort Worth hotels if Arlington is fully booked, and research rideshare credits or airport transfer packages through platforms like Welcome Pickups or Viator to lock in rates before surge pricing hits.
            </p>
            <p className="leading-relaxed">
              Arlington waited 32 years to welcome the World Cup back to North Texas. This time, they're ready with a stadium befitting football's grandest stage.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

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
            <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] hover:text-[#008f63] font-medium flex items-center gap-1 group">
              View all stadiums <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation 1: Dallas City Guide */}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/dallas-world-cup-2026.webp" 
                alt="Dallas World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Host City Guide</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Dallas</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete Dallas travel guide for FIFA World Cup 2026: Match schedule, transportation, and planning tips.</p>
              </div>
            </Link>

            {/* Recommendation 2: Houston City Guide */}
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
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Texas Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Houston</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete guide to NRG Stadium and Space City's World Cup events.</p>
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
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${siteUrl}${pageUrl}`} 
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
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#01b47d]/30 text-[#01b47d] dark:text-[#01b47d]">
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

      {/* Footer - Standard */}
      <Footer />
    </div>
  );
};
