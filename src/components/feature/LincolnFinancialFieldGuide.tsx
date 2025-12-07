import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface LincolnFinancialFieldGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const LincolnFinancialFieldGuide: React.FC<LincolnFinancialFieldGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  // Rating State
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  
  // Save State
  const [isSaved, setIsSaved] = useState(false);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-stadiums/lincoln-financial-field-guide';

  // TOC Logic
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
    
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollPercent(Math.min(100, Math.max(0, (scrolled / docHeight) * 100)));
    };

    window.addEventListener('scroll', handleScroll);
    
    // Load saved state
    const saved = localStorage.getItem('lincoln_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('lincoln_guide_rating');
    if (rated) {
      setUserRating(parseInt(rated));
      setHasRated(true);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSave = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    if (newState) {
      localStorage.setItem('lincoln_guide_saved', 'true');
    } else {
      localStorage.removeItem('lincoln_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('lincoln_guide_rating', rating.toString());
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#01b47d] text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      {/* Editorial Hero — World Class Redesign */}
      {!hideHero && (
        <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <OptimizedImage
              src="/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp"
              alt="Interior view of Lincoln Financial Field in Philadelphia, Pennsylvania, one of the U.S. venues for FIFA World Cup 2026 matches."
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              width={1600}
              height={900}
              priority={true}
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-90" />
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 z-10">
            <div className="max-w-5xl mx-auto w-full">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
                <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-[#01b47d]">
                  <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                  <li className="text-slate-600" aria-hidden="true">/</li>
                  <li><Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link></li>
                  <li className="text-slate-600" aria-hidden="true">/</li>
                  <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Lincoln Financial Field</span></li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
                Lincoln Financial Field: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">World Cup 2026 Venue Guide</span>
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <span>Philadelphia, PA</span>
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
                  <span>67,594 Capacity</span>
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

      {/* Sidebar TOC - Desktop */}
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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

      {/* Mobile TOC */}
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
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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

      {/* Main Content */}
      <main id="main-content" className="editorial-article-premium py-16" itemScope itemType="https://schema.org/Article">
        
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap theme-emerald">
          {/* Quick Summary */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosting <strong>6 matches</strong> including a Round of 16 clash on <strong>July 4, 2026</strong></li>
               <li>• Capacity: <strong>67,594</strong> (expandable for major events)</li>
               <li>• Home of <strong>Philadelphia Eagles</strong> (NFL) & <strong>Temple Owls</strong></li>
               <li>• Features unique "eagle wing" canopies and solar power infrastructure</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-flag-line text-[#01b47d]"></i>
            Philadelphia's Historic Stage
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="leading-relaxed mb-6">
            <span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Philadelphia</Link>, Lincoln Financial Field is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>. When it hosts six matches — including a knockout round clash on July 4th, America's 250th birthday — the city will deliver one of the tournament's most electrifying backdrops. This isn't just another modern NFL stadium pressed into service for soccer. The Linc, as locals affectionately call it, has earned its World Cup stripes through years of hosting international matches, from Copa América to the Women's World Cup. With over half a million visitors expected to descend on Philly for these six matches, this stadium in the birthplace of American independence promises a matchday experience steeped in history, passion, and that unmistakable Philadelphia edge.
          </p>
          <p className="leading-relaxed">
            The stadium's design itself speaks to the city's character. Inspired by the diverse neighborhoods of Philadelphia, its asymmetrical seating provides unique viewing experiences throughout the stadium, while the aggressive canopy profile evokes an eagle's wing, instantly identifiable to global audiences. This is where architecture, sports culture, and American history collide — and where your World Cup 2026 journey could reach its crescendo.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-building-2-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Official Name:</span>
                  <span className="leading-relaxed ml-2">Lincoln Financial Field (Philadelphia Stadium during World Cup)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-map-pin-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Location:</span>
                  <span className="leading-relaxed ml-2">South Philadelphia, Sports Complex (1 Lincoln Financial Field Way)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-calendar-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Opened:</span>
                  <span className="leading-relaxed ml-2">August 3, 2003</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-group-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Capacity:</span>
                  <span className="leading-relaxed ml-2">67,594 (expandable to ~69,000)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-shield-star-line text-amber-400 text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Primary Tenant:</span>
                  <span className="leading-relaxed ml-2">Philadelphia Eagles (NFL), Temple Owls (NCAA)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-pencil-ruler-2-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Architect:</span>
                  <span className="leading-relaxed ml-2">NBBJ (Dan Meis, FAIA)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-money-dollar-circle-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Cost:</span>
                  <span className="leading-relaxed ml-2">$512 million</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-sun-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-bold">Surface/Roof:</span>
                  <span className="leading-relaxed ml-2">Natural grass / Open-air with partial canopy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Powers on 100% clean energy with 11,000 solar panels and 14 wind turbines</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Recognized in 2013 as one of the "greenest" stadiums in the NFL</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Three open corner plazas providing skyline views</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Wing-shaped canopies directing noise back toward the field</span>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Philadelphia */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Philadelphia
          </h3>
          <p className="leading-relaxed mb-4">Philadelphia's revolutionary history and vibrant culture make it a must-visit World Cup 2026 destination.</p>
          <div className="p-4 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
            <p className="leading-relaxed"><strong>Discover Philadelphia:</strong> Explore our complete <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Philadelphia World Cup 2026 Guide</Link> for comprehensive information:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Hotels near Lincoln Financial Field</li>
              <li>Transportation to the stadium</li>
              <li>Historic sites and Independence Hall</li>
              <li>Famous cheesesteaks and food scene</li>
              <li>Match day planning essentials</li>
            </ul>
          </div>
          <p className="leading-relaxed mb-4"><strong>Other East Coast Stadiums:</strong> Catching multiple matches in the region? Check out <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">MetLife Stadium</Link> in NY/NJ or <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Gillette Stadium</Link> in Boston.</p>
          <p className="leading-relaxed"><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-time-line text-[#01b47d]"></i>
            History & Legacy
          </h3>
          <p className="leading-relaxed mb-6">
            Lincoln Financial Field opened on August 3, 2003, after two years of construction that began in May 2001, replacing the aging Veterans Stadium that had served both the Eagles and Phillies since 1971. The decision to build a football-specific venue transformed South Philadelphia's Sports Complex into a world-class destination.
          </p>
          <p className="leading-relaxed mb-6">
            The stadium's first ticketed event was a match between Manchester United and FC Barcelona, watched by 68,396 people — a fitting inaugural for a venue destined for international football glory. Since then, the Linc has hosted multiple international tournaments, including matches from the 2003 Women's World Cup, the CONCACAF Gold Cup Final, and Copa América Centenario.
          </p>
          <p className="leading-relaxed mb-6">
            Between 2013 and 2014, the Eagles invested over $125 million in major upgrades, adding 1,600 seats, new HD video boards in both end zones, pedestrian bridges connecting upper deck concourses, and upgraded luxury suites. These improvements, along with its proven track record hosting major events, made Lincoln Financial Field an obvious choice for FIFA 2026.
          </p>
          <p className="leading-relaxed">
            For Eagles fans, this stadium has witnessed extraordinary moments — from the 2005 NFC Championship victory that sent Philadelphia to the Super Bowl, to countless playoff battles. Now it prepares to add World Cup history to its growing legacy.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-building-4-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <p className="leading-relaxed mb-6">
            The 67,000-seat stadium is widely recognized as one of the NFL's most successful venues, featuring a design philosophy rooted in Philadelphia's rich traditions. Unlike cookie-cutter multipurpose stadiums, the Linc was purpose-built for American football, which translates beautifully to soccer with excellent sightlines throughout.
          </p>
          <p className="leading-relaxed mb-6">
            Nearly two-thirds of seats are located on the sidelines just 60 feet from the field, arranged in two three-tier grandstands with two-tier sections beyond the end zones. Three open corner plazas not only provide stunning views of the Philadelphia skyline but also allow natural ventilation while maintaining an intimate atmosphere.
          </p>
          <p className="leading-relaxed mb-6">
            The stadium's signature feature — wing-like canopy coverings that protect fans from the elements while serving to focus stadium noise back toward the field — creates the kind of acoustic intensity that European fans will recognize and American supporters have weaponized for two decades.
          </p>
          <p className="leading-relaxed mb-6">
            The exterior uses a brick façade referencing Philadelphia's historic architecture, while exposed steel structures evoke the city's industrial heritage and bridge engineering. Inside, you'll find 172 luxury suites and 10,828 club seats, though most World Cup attendees will experience the stadium from general seating areas that offer excellent views regardless of location.
          </p>
          <p className="leading-relaxed">
            Accessibility is taken seriously here, with double the number of wheelchair-accessible seats compared to Veterans Stadium, distributed throughout the venue. The stadium operates with walk-through weapons detection technology at all entry points, ensuring smooth security processing.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d]"></i>
            What Matches to Expect
          </h3>
          <p className="leading-relaxed mb-6">
            Lincoln Financial Field will host six World Cup 2026 matches: five Group Stage fixtures (June 14, 19, 22, 25, and 27) and one knockout Round of 16 match on Saturday, July 4, 2026.
          </p>
          <p className="leading-relaxed mb-6">
            That July 4th match is historic: it falls on the 250th birthday of the United States, making it one of the tournament's most symbolically charged fixtures. Picture this — a knockout World Cup match, winner advances to the quarterfinals, played in the city where America was founded, on the nation's semiquincentennial. The atmosphere will be absolutely electric regardless of which nations compete.
          </p>
          <p className="leading-relaxed mb-6">
            Matches are expected to kick off at 12:00, 15:00, 18:00, and 21:00 local time (Eastern Time). While FIFA hasn't announced specific team assignments yet (the Final Draw is expected in late 2025), Philadelphia's track record suggests high-profile matches given the stadium's capacity and the city's logistical capabilities.
          </p>
          <p className="leading-relaxed">
            Expect capacity crowds approaching 70,000 for each match. The city has hosted major soccer before, but nothing approaching this scale and global attention. Since opening, Lincoln Financial Field has hosted three NFC Championship Games, nearly 40 concerts, the Army-Navy classic, and several high-profile international soccer matches. This World Cup will be its defining moment on the global stage.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-route-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-train-line text-[#01b47d]"></i> By Metro (SEPTA Broad Street Line) — Recommended</h4>
              <p className="leading-relaxed mb-4">
                The SEPTA Broad Street Subway Line (also known as the orange line) runs south from Center City directly to NRG Station, the final southbound stop that sits steps from Lincoln Financial Field. This is by far your best option.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 ml-6 list-disc">
                <li><strong>Journey time:</strong> 14 minutes from 15th Street/City Hall station to NRG Station</li>
                <li><strong>Frequency:</strong> Every 15 minutes during regular service (expect increased frequency on match days)</li>
                <li><strong>Cost:</strong> $2.50 one-way cash fare</li>
                <li><strong>Note:</strong> SEPTA customers can tap contactless credit/debit cards, smartphones, or watches to ride</li>
              </ul>
              <p className="leading-relaxed mt-4">
                From NRG Station, simply follow the massive crowds east on Pattison Avenue for about three blocks to the stadium entrance. For major events, SEPTA typically provides additional trains making all stops, especially pre-match.
              </p>
              <p className="leading-relaxed mt-2">
                <strong>Pro tip:</strong> Buy your SEPTA Key Card or prepare contactless payment before match day to avoid queues. Download the SEPTA app for real-time service updates.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-bus-line text-[#01b47d]"></i> By Bus</h4>
              <p className="leading-relaxed">
                Several bus routes serve the stadium area, including Routes 4, 17, 63, 68, and LOOP, with stops at Broad Street & Pattison Avenue near the stadium complex. However, buses will be slower than the subway on match days due to traffic congestion.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-car-line text-amber-400"></i> By Car — Not Recommended on Match Days</h4>
              <p className="leading-relaxed mb-4">
                Lincoln Financial Field offers approximately 22,000 parking spaces across 38 lots in the Sports Complex, but expect severe congestion on World Cup match days.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 ml-6 list-disc">
                <li><strong>Parking costs:</strong> Official stadium parking for major events ranges from $35-$75 for standard vehicles.</li>
                <li><strong>From I-95:</strong> Exit at Broad Street (Exit 17) or Packer Avenue (Exit 19).</li>
                <li><strong>From I-76:</strong> Follow signs to I-95 South, then proceed as above.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>Reality check:</strong> It can take up to an hour to exit the parking lots after Eagles games — expect similar or worse for World Cup matches. Consider off-site parking and metro instead.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-taxi-line text-[#01b47d]"></i> By Rideshare/Taxi</h4>
              <p className="leading-relaxed mb-4">
                Uber and Lyft are widely used in Philadelphia. The designated drop-off and pickup zone is at the northeast corner of Pattison Avenue and Broad Street, next to the Broad Street subway station.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 ml-6 list-disc">
                <li><strong>From Center City:</strong> 10-15 minutes (approx. $13-17, surge pricing likely)</li>
                <li><strong>From Airport (PHL):</strong> 20-30 minutes (approx. $25-40 base fare)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>Important:</strong> Surge pricing will be extreme after matches. Budget accordingly or plan to wait 30-45 minutes for prices to normalize while grabbing post-match food at nearby Xfinity Live!
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-plane-line text-[#01b47d]"></i> From the Airport</h4>
              <p className="leading-relaxed mb-2">
                <strong>Philadelphia International Airport (PHL)</strong> is approximately 8 miles from the stadium.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 ml-6 list-disc">
                <li><strong>SEPTA Airport Line</strong> to Jefferson Station or Suburban Station, transfer to Broad Street Line southbound to NRG Station (45-60 minutes total, ~$8).</li>
                <li><strong>Taxi:</strong> Flat rate of $32.50 to Center City, add $10-15 to continue to stadium.</li>
                <li><strong>Rideshare:</strong> $25-45 depending on traffic and surge pricing.</li>
              </ul>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay
          </h3>
          <p className="leading-relaxed mb-6">
            Philadelphia offers accommodation for every budget, and your choice depends on balancing stadium access with sightseeing and nightlife. The city is compact, so even Center City hotels are only 15 minutes from the stadium via metro.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-map-pin-2-line text-[#01b47d]"></i> Center City (Rittenhouse Square & Old City) — Highly Recommended</h4>
              <p className="leading-relaxed mb-4">
                This is where most international visitors should base themselves. Center City is Philadelphia's walkable downtown neighborhood, densely packed with historic sights, museums, galleries, and restaurants.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Rittenhouse Square</strong> is known for chic hotels and a buzzing alfresco dining scene. <strong>Old City</strong> features cobblestone streets and Independence Mall. Both connect to the Broad Street Line via multiple stops, putting you 14-20 minutes from the stadium.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-wallet-3-line text-[#01b47d]"></i> Budget Options ($80-150/night)</h4>
              <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>Holiday Inn Express Philadelphia-Midtown (convenient location)</li>
                <li>Pod Philly (micro-hotel concept, great for solo travelers)</li>
                <li>Apple Hostels of Philadelphia (Old City, social atmosphere)</li>
                <li>Extended Stay America locations (practical for longer visits)</li>
              </ul>
              <p className="leading-relaxed mt-4 text-sm">
                Check <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> for deals.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-bank-card-line text-[#01b47d]"></i> Mid-Range ($150-300/night)</h4>
              <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>Hyatt Centric Center City Philadelphia (Rittenhouse Square)</li>
                <li>Club Quarters Hotel Rittenhouse Square (Chestnut Street)</li>
                <li>Marriott Old City or Renaissance Philadelphia Downtown (Historic district)</li>
                <li>Kimpton Hotel Palomar Philadelphia (Stylish boutique)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-gem-line text-[#01b47d]"></i> Luxury ($300+/night)</h4>
              <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>The Rittenhouse Hotel (Largest rooms in the city, park views)</li>
                <li>The Ritz-Carlton Philadelphia (Former bank building, opulent)</li>
                <li>Four Seasons Philadelphia (Comcast Center tower)</li>
                <li>Sofitel Philadelphia at Rittenhouse Square (French luxury)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-community-line text-[#01b47d]"></i> South Philadelphia — For Die-Hard Fans</h4>
              <p className="leading-relaxed mb-4">
                If you want to be walking distance from the stadium, consider hotels near the Navy Yard or along South Broad Street. Dining options are limited compared to Center City. Chains like Courtyard by Marriott or Hampton Inn serve this area.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-lightbulb-line text-amber-400"></i>
            Matchday Tips & Insider Advice
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
            <li><strong>Arrive Early:</strong> Gates typically open 90 minutes before kickoff. Parking lots open 5 hours before for tailgating. Aim to arrive 90-120 minutes early to clear security and explore.</li>
            <li><strong>Strict Bag Policy:</strong> Only clear plastic bags (max 12" x 6" x 12") or small clutches (max 4.5" x 6.5") are permitted. No backpacks or large purses. No bag check facilities exist.</li>
            <li><strong>What to Bring:</strong> Clear bag, Photo ID, Mobile ticket, Sunscreen, Light rain jacket, Portable charger. Cash-to-card stations are available inside.</li>
            <li><strong>Weather:</strong> Expect 75-95°F (24-35°C) with high humidity. The stadium is open-air with partial canopy coverage. Hydrate constantly.</li>
            <li><strong>Food & Drink:</strong> Try local favorites like <strong>Tony Luke's</strong> (roast pork), <strong>Chickie's & Pete's</strong> (Crabfries), and <strong>Bassett's Ice Cream</strong>. Prices are high ($12-18 for beer).</li>
            <li><strong>Best Entry:</strong> Enter through the gate closest to your seat. East side gates (near I-95) often process faster.</li>
            <li><strong>Post-Match:</strong> Metro riders should head to NRG Station. Rideshare users should walk a few blocks away or wait 45 mins. Drivers should wait at Xfinity Live! for traffic to clear.</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-store-2-line text-[#01b47d]"></i> Xfinity Live! (Adjacent)</h4>
              <p className="leading-relaxed">
                Located in the heart of the Sports Complex, Xfinity Live! boasts 80,000 square feet of dining and entertainment. Features Broad Street Bullies Pub, PBR Philly, and Victory Beer Hall. It's the pre/post-match central for fans.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-restaurant-line text-[#01b47d]"></i> Chickie's & Pete's</h4>
              <p className="leading-relaxed">
                Famous Philly sports bar within walking distance (5 mins). Known for Crabfries and massive burgers. 24,000 square feet of interactive sports entertainment.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-hotel-line text-[#01b47d]"></i> Live! Casino & Hotel Philadelphia</h4>
              <p className="leading-relaxed">
                A 24-hour casino minutes from the stadium. Features gaming tables, sports betting, and restaurants like Jack's Bar & Grill. Great for late-night entertainment.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-building-line text-[#01b47d]"></i> Center City Attractions (20 mins via Metro)</h4>
              <p className="leading-relaxed">
                <strong>Independence Hall & Liberty Bell:</strong> See where America was founded. Reserve tickets for Independence Hall in advance.
              </p>
              <p className="leading-relaxed mt-2">
                <strong>Reading Terminal Market:</strong> A food lover's paradise with diverse cuisine and local specialties.
              </p>
              <p className="leading-relaxed mt-2">
                <strong>Rocky Steps (Art Museum):</strong> Run up the 72 stone steps for iconic views of the Benjamin Franklin Parkway.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            Final Verdict
          </h3>
          <p className="leading-relaxed mb-6">
            Lincoln Financial Field offers everything a World Cup venue should: a passionate fan culture, excellent sightlines, efficient public transportation, and a city bursting with American history. While purpose-built for football, its intimate bowl design translates beautifully to soccer.
          </p>
          <p className="leading-relaxed mb-6">
            The July 4th knockout match on America's 250th birthday makes this one of the most historically significant fixtures in the tournament. But even group stage matches will crackle with energy — Philadelphia fans are legendary for their passion.
          </p>
          <div className="p-6 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
            <p className="leading-relaxed">
              <strong>One unforgettable thing not to miss:</strong> Being in this stadium on July 4, 2026. If you can secure tickets to that fixture specifically, it will be the matchday experience of a lifetime.
            </p>
          </div>
          <p className="leading-relaxed">
            <strong>Take action now:</strong> Book accommodation immediately when match schedules are announced. Philadelphia hotels will sell out fast. Browse <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Expedia</a> now to bookmark properties in Center City.
          </p>
          <p className="leading-relaxed mt-4">
            The 2026 World Cup comes to America only once. Make sure Philadelphia — and Lincoln Financial Field — are part of your journey.
          </p>
          <hr className="editorial-divider" />
        </article>
        
        {/* Rate This Guide & Share */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          {/* Rate This Guide */}
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
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Share Guide */}
          <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
                <div className="flex items-center gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=Lincoln%20Financial%20Field%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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

              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

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

      </main>
    </div>
  );
};
