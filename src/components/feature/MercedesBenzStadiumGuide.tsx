import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';

interface MercedesBenzStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const MercedesBenzStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: MercedesBenzStadiumGuideProps) => {
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
  const currentPath = '/world-cup-2026-stadiums/mercedes-benz-stadium-guide';

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
    link.href = '/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-stadiums/mercedes-benz-stadium-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    if (!hideHero) {
        setPageMeta({
        title: 'Mercedes-Benz Stadium: World Cup 2026 Guide',
        description: 'Complete guide to Mercedes-Benz Stadium (Atlanta) for World Cup 2026. Semifinal host, capacity, transportation, and tips for this architectural marvel.',
        url: `${siteUrl}${pageUrl}`,
        image: `${siteUrl}/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-11-30',
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'Mercedes-Benz Stadium', 'Atlanta']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'Mercedes-Benz Stadium',
            'Atlanta',
            75000,
            'A revolutionary stadium featuring a retractable petal roof and 360-degree halo board.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'Mercedes-Benz Stadium', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Mercedes-Benz Stadium World Cup 2026' }
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
            src="/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp"
            alt="Mercedes-Benz Stadium"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Mercedes-Benz Stadium</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Mercedes-Benz Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Atlanta, Georgia</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>Semifinal Host</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>75,000 Capacity</span>
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
               <li>• Hosts <strong>8 matches</strong> (Semifinal Host)</li>
               <li>• Venue: <strong>Mercedes-Benz Stadium</strong> (Atlanta)</li>
               <li>• Key Feature: <strong>Retractable "Petal" Roof</strong></li>
               <li>• Nickname: "Atlanta Stadium" (for WC)</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            The Capital of the South Hosts a Semifinal
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Stand beneath the world's first retractable petal roof as it opens like a camera aperture to the Georgia sky.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>11 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2024</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Watch 75,000 voices reverberate off the circular halo board—the largest video screen in professional sports. Welcome to Mercedes-Benz Stadium, a venue that didn't just raise the bar for American stadium design when it opened in 2017; it obliterated it entirely. As one of 11 US host cities, Atlanta will welcome eight World Cup matches in 2026, including a semifinal—making this architectural marvel the stage where footballing dreams will either flourish or shatter. For the tournament, FIFA regulations require the stadium to be called "Atlanta Stadium", but locals will always know it by its revolutionary spirit.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            Located in <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link>, Mercedes-Benz Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-price-tag-3-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Official Name:</strong> Mercedes-Benz Stadium (Atlanta Stadium during World Cup)</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Location:</strong> Downtown Atlanta, Georgia (1 AMB Drive NW)</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-calendar-2-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Opened:</strong> August 2017</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-group-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Capacity:</strong> 75,000 (expandable to 83,000)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-shield-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Primary Tenants:</strong> Atlanta Falcons (NFL), Atlanta United FC (MLS)</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-pencil-ruler-2-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Architect:</strong> HOK (with tvsdesign, Goode Van Slyke Architecture, Stanley Beaman & Sears)</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-sun-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Surface:</strong> Natural grass will be installed for World Cup matches (replacing standard artificial turf)</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-home-gear-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Roof Type:</strong> Retractable eight-panel "petal" roof (opens in 8 minutes, closes in 7)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-tv-2-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Signature Feature:</strong> 360-degree "Halo Board" video screen—58 feet high, 1,075 feet around</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-leaf-line text-[#01b47d] text-xl"></i>
                <p className="text-slate-700 dark:text-slate-200"><strong>Sustainability:</strong> First professional sports stadium in North America to achieve LEED Platinum certification with 88 points—the highest score ever for a sports venue</p>
              </div>
            </div>
          </div>

          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-history-line text-[#01b47d]"></i>
            History & Legacy
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              When Atlanta's Georgia Dome was imploded in November 2017, it symbolized more than demolition—it marked a city's commitment to redefining what a modern stadium could be. Mercedes-Benz Stadium cost an estimated $1.6 billion and officially opened on August 26, 2017, with owner Arthur Blank's vision prioritizing fan experience and environmental responsibility over maximizing concession revenue.
            </p>
            <p>
              The stadium's resume already reads like a sporting hall of fame. It hosted Super Bowl LIII in 2019, the College Football Playoff National Championship in both 2018 and 2025, and MLS Cup 2018. Atlanta United shattered MLS attendance records here, regularly packing 70,000+ fans for league matches. The stadium hosted six matches during the 2025 FIFA Club World Cup and two matches during the 2024 Copa América, including the tournament's opening match.
            </p>
            <p>
              For the World Cup, approximately $200 million in upgrades will be completed by summer 2026, including the natural grass installation—a requirement for FIFA competitions. Having successfully hosted the 1996 Summer Olympics, Atlanta becomes one of only two US cities to host both the Olympics and a FIFA World Cup (alongside Los Angeles).
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-brush-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Walk up to Mercedes-Benz Stadium and you'll immediately understand why architecture critics call it a game-changer. Eight massive triangular "petals" formed from ETFE plastic overlap to create a facade that resembles falcon wings—a nod to the home team. The transparent sections create what HOK architects call a "window to the city," flooding the interior with natural light and offering floor-to-ceiling views of Atlanta's downtown skyline.
            </p>
            <p>
              But the roof is the showstopper. Inspired by the oculus of Rome's Pantheon, the eight-panel retractable roof opens and closes like a camera aperture, creating an optical illusion of rotation while each petal actually moves along straight, parallel tracks. The entire operation takes less than 10 minutes, allowing natural ventilation during pleasant weather while providing protection during Atlanta's notorious summer thunderstorms.
            </p>
            <p>
              Inside, the seating bowl wraps spectators close to the action with excellent sightlines from all 75,000 seats. The circular 360-degree Halo Board hangs from the retractable roof structure, spanning 58 feet high and 1,075 feet in circumference—creating an immersive theater-in-the-round experience. Retractable seating allows the venue to shift between NFL and soccer configurations, bringing fans within feet of the touchline for World Cup matches.
            </p>
            <p>
              The stadium's sustainability credentials aren't window dressing. Over 4,000 solar panels generate enough renewable energy to power nine Falcons games or 13 Atlanta United matches. Water-efficient fixtures reduce consumption by 47% compared to baseline standards, while a 2.1 million-gallon stormwater management system includes bioswales and a 680,000-gallon cistern that harvests rainwater for irrigation.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-event-line text-[#01b47d]"></i>
            What Matches to Expect
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Atlanta will host eight World Cup 2026 matches: five group stage games (June 15, 18, 21, 24, 27), one Round of 32 match (July 1), one Round of 16 match (July 7), and a semifinal (July 15). That's the second-most matches among all North American venues, trailing only Dallas.
            </p>
            <p>
              While the USMNT will play its group stage matches in Los Angeles and Seattle, if the United States advances to the knockout rounds, Atlanta could host them. Expect electric atmospheres regardless—Atlanta's passionate soccer culture, forged through Atlanta United's MLS success, means this city knows how to create matchday magic. With capacity potentially expanded to 83,000 for the semifinal, the decibel levels could rival South American stadiums.
            </p>
            <p>
              An economic impact study estimates the World Cup will generate $415 million in revenue for Atlanta—the equivalent of hosting eight Super Bowls in one summer.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d] text-3xl"></i>
                By MARTA (Metro)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                This is your best option, full stop. Take the Blue or Green Line to GWCC/CNN Center Station, which is right at the stadium's doorstep—the preferred arrival and departure point. Vine City Station is the alternative, featuring a pedestrian bridge to the stadium and typically experiencing fewer crowds.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                If you're on the Red or Gold Line, transfer at Five Points Station to either westbound Blue or Green Line. MARTA fares are just $2.50 each way, and you can purchase roundtrip tickets through the Breeze Mobile 2.0 app to skip the ticket machine lines. Trains run frequently, especially during major events.
              </p>
              <div className="mt-6">
                <p className="text-slate-900 dark:text-slate-50 font-semibold mb-3 flex items-center gap-2">
                  <i className="ri-time-line text-[#01b47d]"></i>
                  <span>Journey Times:</span>
                </p>
                <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-2">
                  <li>From Hartsfield-Jackson Airport: 25-30 minutes (Red/Gold Line to Five Points, transfer to Blue/Green)</li>
                  <li>From Midtown: 10-15 minutes (Red/Gold Line to Five Points, transfer to Blue/Green)</li>
                  <li>From Buckhead: 20-25 minutes (Red Line to Five Points, transfer)</li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Pro tip:</strong> Several MARTA stations offer free daily parking, including Lindbergh, West End, Ashby, and Inman Park/Reynoldstown—perfect for park-and-ride.
                </p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-car-line text-[#01b47d] text-3xl"></i>
                By Car & Parking
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Over 20,000 parking spots are available within a 20-minute walk, but pre-purchasing passes through the stadium website is essential—lots regularly sell out before World Cup-caliber events. Official lots include the Red Deck, Silver Deck, Blue Lot, and Yellow Lot, with prices typically ranging from $25-$60 depending on proximity.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Expect heavy traffic 2-3 hours before kickoff, especially on Interstate 75/85 (the Downtown Connector). Arrive early or face gridlock. GPS: 1 AMB Drive NW, Atlanta, GA 30313.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-taxi-line text-[#01b47d] text-3xl"></i>
                By Rideshare/Taxi
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The designated rideshare pickup zone is at GWCC Bus Lane C on Northside Drive, about a 10-minute walk from Gate 1 via the Home Depot Backyard Bridge. Post-match surge pricing can be brutal—expect 2-3x normal rates. If wait times become excessive, walk to Vine City MARTA Station instead.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-walk-line text-[#01b47d] text-3xl"></i>
                Walking & Biking
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Downtown Atlanta hotels are 10-20 minutes on foot. The stadium offers free bike valet service starting two hours before events and continuing one hour after, with digital check-in via text message.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-bed-line text-[#01b47d]"></i>
            Where to Stay
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-[#01b47d] text-3xl"></i>
                Budget Options ($80-150/night)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Look to neighborhoods slightly outside downtown. East Point and Hapeville (near the airport) offer affordable chains with easy MARTA access. Hostels are scarce in Atlanta, but budget hotels along the Red/Gold MARTA lines provide the best value. Book accommodations early—World Cup demand will spike prices dramatically.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-bank-card-line text-[#01b47d] text-3xl"></i>
                Mid-Range ($150-250/night)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Downtown:</strong> Hampton Inn Atlanta-Georgia Tech-Downtown, Hyatt Place Atlanta/Downtown, and Holiday Inn Express Atlanta Downtown sit within walking distance or one MARTA stop from the stadium. The Courtland Grand Hotel and Inn at the Peachtrees offer boutique charm at reasonable rates.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>Midtown (1-2 miles north):</strong> Hotel Indigo Atlanta Midtown, Crowne Plaza Atlanta-Midtown, and Element Atlanta Midtown balance proximity to the stadium with access to Midtown's restaurant and nightlife scene. A short MARTA ride brings you downtown.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Booking platforms like Booking.com and Expedia regularly offer competitive rates, especially when booked 3-6 months in advance. For World Cup matches, expect prices to increase 50-100% above normal rates.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-vip-crown-line text-[#01b47d] text-3xl"></i>
                Luxury ($250-500+/night)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Adjacent to Stadium:</strong> Omni Hotel at Centennial Park (0.25 miles) and Embassy Suites by Hilton Atlanta at Centennial Olympic Park offer the closest upscale accommodations, with full-service spas, rooftop pools, and walkability to the stadium.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>Downtown Core:</strong> The Westin Peachtree Plaza, Atlanta Marriott Marquis, and Twelve Downtown (Autograph Collection) provide iconic downtown experiences with superior dining and amenities.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>Midtown:</strong> The Georgian Terrace and Renaissance Atlanta Midtown combine historic elegance with modern luxury, positioned near Piedmont Park and the BeltLine for post-match exploration.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>Alternative:</strong> Airbnb rentals in neighborhoods like Old Fourth Ward, Inman Park, or Virginia-Highland offer authentic Atlanta experiences with MARTA connectivity.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-flash-line text-[#01b47d]"></i>
            Matchday Tips & Insider Advice
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-time-line text-[#01b47d] text-3xl"></i>
                Arrive Early
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Gates typically open 2 hours before kickoff for World Cup matches. Data shows over 6,000 Falcons fans per game now arrive an hour early to enjoy the food and atmosphere—expect World Cup crowds to follow suit. Security lines move efficiently but budget 20-30 minutes for entry during peak arrival times.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-briefcase-line text-[#01b47d] text-3xl"></i>
                Bag Policy
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Mercedes-Benz Stadium enforces a strict clear bag policy: clear bags must not exceed 12" x 6" x 12", or you can bring a small non-clear bag no larger than 4.5" x 6.5". Clear backpacks, fanny packs, and tote bags are permitted. You're allowed one factory-sealed 500mL bottle of water per person—no other outside beverages permitted.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Non-compliant bags can be stored at Mobile Locker Company trucks near Gates 1 and 2 for a fee, but spaces fill quickly. Best practice: don't bring a bag at all.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-line text-[#01b47d] text-3xl"></i>
                Food & Drink Inside
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                This is where Mercedes-Benz Stadium flips the script on stadium economics. Owner Arthur Blank's "fan-first" pricing means hot dogs cost $1.50, pretzels and popcorn $2, pizza and fries $3, and draft beer $5. Soft drinks cost $2 with free refills—prices comparable to street food, not typical stadium gouging.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Local favorites include Fox Bros. Bar-B-Q, Chick-fil-A, and specialty items from Concentrics Restaurants. The cashless stadium accepts cards and mobile payments only. Lines move surprisingly fast thanks to whole-dollar pricing and triple the number of concession stands compared to the old Georgia Dome.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>What's Actually Good:</strong> The ATL Bud burger ($8), Fox Bros. pulled pork, and Jim 'N Nick's barbecue draw rave reviews. For dessert, King of Pops gourmet popsicles are a local cult favorite.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d] text-3xl"></i>
                What to Bring
              </h4>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-2">
                <li>Mobile ticket on your phone (printed tickets may not be accepted)</li>
                <li>Clear bag (if needed) meeting size requirements</li>
                <li>Sunscreen and sunglasses (roof may be open)</li>
                <li>Light jacket (AC can be aggressive even in June/July)</li>
                <li>Portable phone charger</li>
                <li>Valid government-issued photo ID</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-close-circle-line text-[#01b47d] text-3xl"></i>
                What NOT to Do
              </h4>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-2">
                <li>Don't bring outside food (except baby formula/infant needs), cameras with lenses over 6", selfie sticks, or any professional recording equipment</li>
                <li>Don't rely on post-match rideshares without expecting surge pricing</li>
                <li>Don't attempt to bring in non-sealed water bottles or refillable containers</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d] text-3xl"></i>
                Post-Match Transport
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                MARTA is your exit strategy. Trains run extended service for major events, though expect packed cars for 30-45 minutes post-match. If rideshare zones have excessive wait times, walk to Vine City MARTA Station for quicker departure. Parking lots clear slowly—budget 45-60 minutes to exit if you drove.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d] text-3xl"></i>
                Pre-Match (Within 15 Minutes Walk)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Centennial Olympic Park anchors the entertainment district, surrounded by the Georgia Aquarium (one of the world's largest), World of Coca-Cola, College Football Hall of Fame, and National Center for Civil and Human Rights. The SkyView Atlanta Ferris wheel offers 200-foot views of the cityscape.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                The Home Depot Backyard, a designated fan plaza outside the stadium, hosts pre-match festivities and tailgating for ticketed fans—complete with food trucks, live music, and activities.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-2-line text-[#01b47d] text-3xl"></i>
                Fan Zones & Bars
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Downtown Atlanta isn't known for concentrated sports bar districts, but nearby options include Stats Brewpub and CNN Center food court establishments. For authentic Atlanta nightlife, venture to Midtown (10 minutes via MARTA) for craft cocktail bars along Crescent Avenue, or explore the vibrant BeltLine's Ponce City Market area for rooftop bars with skyline views.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-community-line text-[#01b47d] text-3xl"></i>
                Post-Match Exploration
              </h4>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>The BeltLine (20 minutes via rideshare/MARTA):</strong> Atlanta's converted rail trail connects neighborhoods like Old Fourth Ward and Inman Park, lined with breweries, restaurants, and public art. Krog Street Market and Ponce City Market are food halls showcasing Atlanta's culinary diversity.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Martin Luther King Jr. National Historical Park (15 minutes):</strong> Visit Dr. King's childhood home, Ebenezer Baptist Church, and reflecting pool—a powerful and free experience.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Piedmont Park (15 minutes to Midtown):</strong> Atlanta's 200-acre central park offers skyline views, walking trails, and weekend festivals.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Sweet Auburn Curb Market (10 minutes):</strong> Historic market dating to 1918, featuring local vendors, soul food, and international cuisine.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Day Trips */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d]"></i>
            Day Trips
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Stone Mountain Park (30 minutes east), Georgia Aquarium, and the Atlanta BeltLine Eastside Trail justify extending your stay beyond matchday.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Atlanta */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Atlanta
          </h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Explore our complete <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Atlanta World Cup 2026 Guide</Link> for essential travel info, neighborhoods, transport, and top experiences.
            </p>
            <p>
              Catching multiple matches in the South? Visit
              {' '}<Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas,
              {' '}<Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston, or
              {' '}<Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Hard Rock Stadium</Link> in Miami.
            </p>
            <p>
              <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-award-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Mercedes-Benz Stadium isn't just hosting World Cup matches—it's showcasing what happens when visionary ownership meets cutting-edge architecture and genuine commitment to fan experience. The stadium's LEED Platinum certification, revolutionary retractable roof, and fan-first pricing model make it unlike any venue you've experienced. The surrounding downtown energy, MARTA accessibility, and Atlanta's rich civil rights history create a matchday experience that transcends 90 minutes of football.
            </p>
            <p>
              This venue will love passionate supporters who appreciate architectural innovation, sustainable design, and affordable concessions. Don't miss the spectacle of the roof opening before kickoff—when eight massive petals retract to reveal the Atlanta sky, you'll understand why this stadium represents the future of sports architecture.
            </p>
            <p>
              <strong>Book your accommodation now.</strong> Atlanta's hotel inventory will be stretched thin during the World Cup, and prices only climb as matches approach. Secure MARTA-accessible downtown or Midtown hotels 6-12 months in advance through booking platforms to lock in reasonable rates. Purchase parking passes the moment they become available if you're driving.
            </p>
            <p>
              The world's football elite will descend on Atlanta in 2026. Make sure you're there to witness history beneath the most innovative roof in sports.
            </p>
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
                {hasRated && <span className="ml-3 text-[#01b47d] font-medium animate-fade-in">Thanks for voting!</span>}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Share this guide</h3>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Mercedes-Benz Stadium: World Cup 2026 Guide',
                        text: 'Check out this complete guide to Mercedes-Benz Stadium for World Cup 2026!',
                        url: window.location.href,
                      })
                    } else {
                       navigator.clipboard.writeText(window.location.href);
                       alert('Link copied to clipboard!');
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#01b47d] text-white rounded-lg hover:bg-[#008f63] transition-colors"
                >
                  <i className="ri-share-line"></i>
                  <span>Share</span>
                </button>
                <a 
                  href={`https://twitter.com/intent/tweet?text=Check out this complete guide to Mercedes-Benz Stadium for World Cup 2026!&url=${encodeURIComponent('https://stadiumport.com/world-cup-2026-stadiums/mercedes-benz-stadium-guide')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <i className="ri-twitter-x-line"></i>
                  <span>Post</span>
                </a>
                <a 
                  href={`mailto:?subject=Mercedes-Benz Stadium Guide&body=Check out this guide: https://stadiumport.com/world-cup-2026-stadiums/mercedes-benz-stadium-guide`}
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
