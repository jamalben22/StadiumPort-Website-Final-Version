import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface SoFiStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const SoFiStadiumGuide: React.FC<SoFiStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/sofi-stadium-guide';

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
    const saved = localStorage.getItem('sofi_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('sofi_guide_rating');
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
      localStorage.setItem('sofi_guide_saved', 'true');
    } else {
      localStorage.removeItem('sofi_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('sofi_guide_rating', rating.toString());
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
              src="/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp"
              alt="Interior view of SoFi Stadium in Los Angeles, California, a host venue for FIFA World Cup 2026 matches."
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
                  <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">SoFi Stadium</span></li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
                SoFi Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">World Cup 2026 Venue Guide</span>
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <span>Inglewood, CA</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-building-line text-lg"></i>
                  </div>
                  <span>SoFi Stadium</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-group-line text-lg"></i>
                  </div>
                  <span>70,000+ Capacity</span>
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
               <li>• Hosting <strong>8 matches</strong> (including USA Opener & Quarterfinal)</li>
               <li>• Capacity: <strong>70,000+</strong> (expandable to 100,000)</li>
               <li>• Home of <strong>Rams & Chargers</strong> (NFL)</li>
               <li>• Features Infinity Screen & translucent roof</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Hollywood Park's Crown Jewel
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>10 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="editorial-intro text-slate-700 dark:text-slate-200 mb-6">
            Located in <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Los Angeles</Link>, SoFi Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>, bringing world-class matches to Southern California. When the United States Men's National Team walks onto the pitch here on June 12, 2026, they'll be christening one of the world's most technologically advanced sporting cathedrals under the eyes of 70,000 roaring fans. This isn't just another World Cup venue—it's a $5 billion architectural marvel that has redefined what a stadium can be. With its translucent roof hovering like a spacecraft over Inglewood, its record-breaking Infinity Screen suspended above the field, and its unique indoor-outdoor design, SoFi represents the cutting edge of stadium innovation. For the eight World Cup matches set to unfold here, including America's tournament opener and a quarterfinal showdown, this venue promises an experience unlike any other in the competition.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-building-2-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Official Name:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Los Angeles Stadium (FIFA designation) / SoFi Stadium</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Location:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Inglewood, California (Hollywood Park district), 3 miles from LAX Airport</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-calendar-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Opened:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">September 2020</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-group-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">World Cup Capacity:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">70,000+ (standard: 70,240; expandable to 100,000)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-team-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Primary Tenants:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Los Angeles Rams (NFL), Los Angeles Chargers (NFL), LA Bowl</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-magic-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Architect:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">HKS Architects</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-user-star-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Owner/Developer:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Stan Kroenke (Rams owner)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <i className="ri-money-dollar-circle-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-bold">Cost:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">~$5 Billion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <i className="ri-leaf-line text-[#01b47d] text-xl"></i>
              <div>
                <span className="text-slate-600 dark:text-slate-300 font-bold">Surface Type</span>
                <p className="text-slate-900 dark:text-slate-100 font-semibold">Natural grass (for World Cup)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-cloudy-line text-[#01b47d] text-xl"></i>
              <div>
                <span className="text-slate-600 dark:text-slate-300 font-bold">Roof Type</span>
                <p className="text-slate-900 dark:text-slate-100 font-semibold">Translucent cable-net ETFE canopy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-ruler-line text-[#01b47d] text-xl"></i>
              <div>
                <span className="text-slate-600 dark:text-slate-300 font-bold">Total Area</span>
                <p className="text-slate-900 dark:text-slate-100 font-semibold">3.1 million square feet</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>Infinity Screen by Samsung: dual-sided 360° 4K video board</span></div>
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>World's largest cable-net roof structure (19.5 acres)</span></div>
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>Built 100 feet below grade with seismic moat protection</span></div>
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>27,000 embedded LED pucks in roof visible from aircraft</span></div>
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>260+ luxury suites, 13,000+ premium seats</span></div>
              <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-[#01b47d]"></i><span>YouTube Theater (6,000 seats) under same canopy</span></div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-time-line text-[#01b47d]"></i>
            History & Legacy
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              SoFi Stadium stands on hallowed ground—the site of the legendary Hollywood Park Racetrack, which operated from 1938 to 2013. When construction began in 2016, it marked the first football stadium built in Los Angeles in nearly a century. Rams owner Stan Kroenke envisioned more than a sports venue; he wanted to create an entertainment destination worthy of the world's entertainment capital.
            </p>
            <p>
              The stadium opened in September 2020 with a Rams-Cowboys game, though the pandemic kept stands largely empty for its inaugural season. It didn't take long to make up for lost time. In February 2022, SoFi became only the second stadium ever to host a conference championship game and the Super Bowl in the same season—with the Rams defeating the Cincinnati Bengals 23-20 in Super Bowl LVI on their home turf. The halftime show featuring Dr. Dre, Snoop Dogg, Eminem, Kendrick Lamar, and Mary J. Blige became an instant cultural touchstone.
            </p>
            <p>
              Since then, the venue has hosted the 2023 College Football Playoff National Championship, WrestleMania 39, the 2023 CONCACAF Gold Cup Final (where Mexico defeated Panama 1-0 before 72,000 fans), and the 2024 Copa América matches. It was ranked the world's No. 1 stadium for top-grossing concert and live event ticket sales in 2023, hosting megastars like Taylor Swift, Beyoncé, The Rolling Stones, and Bad Bunny.
            </p>
            <p>
              The 2026 World Cup continues Los Angeles' rich football heritage. The city previously hosted matches during the 1994 FIFA World Cup (at the Rose Bowl, including the final), the 1999 Women's World Cup, and numerous international friendlies. SoFi will make history as the only venue to host the Super Bowl (LVI in 2022), FIFA World Cup (2026), and Olympics (opening ceremonies in 2028) within three consecutive years—then add Super Bowl LXI in 2027 for good measure.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-layout-grid-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Walking toward SoFi feels like approaching an alien mothership hovering above the California landscape. The 19.5-acre translucent roof—comprising over 35,000 uniquely shaped anodized aluminum panels and 302 ETFE panels—creates what architects call a "fifth elevation," turning the roof itself into a dynamic canvas visible from approaching aircraft at nearby LAX.
            </p>
            <p>
              The genius of SoFi's design lies in its paradox: it's both completely enclosed and refreshingly open-air. The ETFE canopy blocks 65% of UV rays while allowing natural light to flood the seating bowl, which sits 100 feet below grade level to comply with FAA height restrictions. Open sides on all four corners let Pacific Ocean breezes flow through, creating temperatures approximately 4 degrees cooler than outside—natural climate control without closing the venue off from the California sky.
            </p>
            <p>
              The seating bowl wraps intimately around the field, with sightlines carefully engineered to bring every fan closer to the action than traditional NFL stadiums. The stepped terracing, combined with the descending ramps and landscaped paths leading down from street level, creates what HKS architects describe as a "meandering procession" rather than the typical elevator-and-corridor maze.
            </p>
            <p>
              But the showstopper is the Infinity Screen—a 120-yard-long, double-sided 4K video board that hangs from the roof like a hovering spacecraft, displaying 80 million pixels from 260 built-in speakers. It's the first center-hung, dual-sided display in any stadium, allowing fans in every section to follow replays, stats, and atmosphere shots without craning their necks.
            </p>
            <p>
              Along with <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">MetLife Stadium</Link>, SoFi ranks among the largest venues in the tournament. Tech-forward fans also compare its experience to <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Levi's Stadium</Link> in the Bay Area.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Premium Seating & Accessibility */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-vip-crown-line text-[#01b47d]"></i>
            Premium Seating & Accessibility
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              The venue features over 260 luxury suites and 12 different club spaces, from the ultra-premium Boros Club to the Patio Suites with outdoor terraces. Premium areas include the Champions Club, VIP lounges, and field-level suites that put fans within feet of players entering the tunnel. Accessibility features are comprehensive, with wheelchair-accessible seating throughout all levels, assistive listening devices, accessible restrooms with baby-changing stations, and courtesy mobility shuttles between parking zones.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-calendar-event-line text-[#01b47d]"></i>
            What Matches to Expect
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>SoFi Stadium will host eight matches during the 2026 FIFA World Cup:</p>

            <div className="ml-4">
              <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">Group Stage:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>June 12, 2026:</strong> USA Men's National Team Opening Match (Group D) – <em>This is it—America's World Cup debut on home soil with all eyes on LA</em></li>
                <li><strong>June 15, 2026:</strong> Group G Match</li>
                <li><strong>June 18, 2026:</strong> Group B Match</li>
                <li><strong>June 21, 2026:</strong> Group G Match</li>
                <li><strong>June 25, 2026:</strong> USA Men's National Team 3rd Group Match (Group D) – <em>The USMNT returns to LA to potentially seal knockout stage qualification</em></li>
              </ul>
            </div>

            <div className="ml-4">
              <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">Knockout Stage:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>June 28, 2026:</strong> Round of 32 (Group A Runner-up vs. Group B Runner-up)</li>
                <li><strong>July 2, 2026:</strong> Round of 32 (Group H Winner vs. Group J Runner-up)</li>
                <li><strong>July 10, 2026:</strong> Quarterfinal</li>
              </ul>
            </div>

            <p>
              Expect capacity crowds approaching or exceeding 70,000 for every match, with the USA fixtures creating an atmosphere unlike anything American soccer has witnessed since the 1994 World Cup. The USMNT opener on June 12 will likely be one of the most-watched sporting events in U.S. television history, with fan zones across Los Angeles and potential celebrity sightings befitting LA's star power.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-train-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>
          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-bus-wifi-line text-[#01b47d]"></i> By Metro & Free Shuttle (Best Option)</h4>
              <p className="mb-2">The most reliable way to reach SoFi is via Metro and the free SoFi Stadium Shuttle:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Take the <strong>Metro C Line (Green)</strong> or <strong>K Line (Crenshaw/LAX)</strong> to <strong>LAX/Metro Transit Center Station</strong></li>
                <li>Transfer to the <strong>free SoFi Stadium Shuttle</strong> at Bus Bay 8</li>
                <li>Shuttles run every 3-5 minutes starting three hours before kickoff</li>
                <li>Journey time: 5-10 minutes from LAX/Metro Transit Center to stadium</li>
                <li>Return shuttles begin running near the end of matches and continue for 90 minutes post-game</li>
              </ol>
              <p className="mt-4"><strong>Total journey time from Downtown LA:</strong> 45-60 minutes</p>
              <p><strong>From LAX Airport:</strong> 20-25 minutes</p>
              <p><strong>Cost:</strong> $1.75 one-way Metro fare (free transfers for 2 hours); shuttle is free</p>
              <p className="mt-2 text-sm italic"><strong>Pro tip:</strong> Load your TAP card in advance to avoid long queues after matches. Parking at Metro stations along the C and K Lines is available (some free, others $3 daily fee).</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-bus-2-line text-[#01b47d]"></i> By Bus</h4>
              <p className="font-semibold">GTrans Line 7X Stadium Express (Sundays and select events):</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Departs from Harbor Gateway Transit Center (Bay 3)</li>
                <li>Service every 30 minutes starting 8:30am</li>
                <li><strong>Cost:</strong> $4 roundtrip (TAP card or cash)</li>
                <li>Drop-off: Shuttle Lot on Arbor Vitae Street/S. Prairie Avenue</li>
              </ul>
              <p className="font-semibold">Torrance Transit Line 10X:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Departs from Mary K. Giordano Regional Transit Center (465 Crenshaw Blvd)</li>
                <li>First bus leaves 3 hours before kickoff</li>
                <li><strong>Cost:</strong> $2 each way (TAP card)</li>
                <li>Free parking at transit center (limited to 250 spaces)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-car-line text-[#01b47d]"></i> By Car & Parking</h4>
              <p className="mb-2"><strong>On-Site Parking:</strong> Extremely limited and requires advance purchase. Parking passes range from $50-$100+ depending on zone. Lots close one hour after matches end.</p>
              <p className="mb-2"><strong>Parking Zones:</strong> Hyundai Pink, Orange, Brown, Purple (color-coded passes required)</p>
              <p className="mb-2"><strong>Entry:</strong> Follow color-coded signage; use Waze/Google Maps and search "SoFi Stadium Parking [Your Zone]"</p>
              <p><strong>Inglewood Park & Go (Recommended):</strong> Remote parking with shuttle service. Book in advance at inglewoodparkandgo.com. Drive-up rates are significantly higher than online pre-booking.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-taxi-line text-[#01b47d]"></i> By Rideshare/Taxi</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Drop-off/Pick-up Location:</strong> Kareem Court (access via westbound Pincay Drive)</li>
                <li><strong>Peak Pricing Warning:</strong> Expect surge pricing of 2x-3x normal rates immediately post-match</li>
                <li><strong>Alternative:</strong> Walk 10-15 minutes away from the stadium to avoid surcharges</li>
                <li><strong>Yellow Cab Quick Code:</strong> "SOFI" for expedited pick-ups</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-walk-line text-[#01b47d]"></i> Walking/Biking</h4>
              <p className="mb-2">Not recommended for most visitors due to limited pedestrian infrastructure and freeway proximity. Bike parking is available in designated areas around the perimeter.</p>
              <p><strong>From Downtown Inglewood Station (Metro K Line):</strong> 1.5 miles, approximately 30-minute walk—viable option if shuttles are packed</p>
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
          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-walk-line text-[#01b47d]"></i> Walking Distance (&lt; 1 mile)</h4>
              <p className="mb-2"><strong>The Lum Hotel Los Angeles Stadium District</strong> – The only hotel within easy walking distance (0.6 miles). Modern rooms, rooftop bar at Cork & Batter, outdoor pool. Connected to the Hollywood Park development. Expect premium pricing during World Cup.</p>
              <p className="text-sm italic">Book via Booking.com or Hotels.com for best rates</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-plane-line text-[#01b47d]"></i> Near SoFi & LAX (1-3 miles)</h4>
              <p className="font-semibold">Budget (Under $150/night):</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Hollywood Park Motel</strong> – Basic but clean, 10-minute walk to stadium</li>
                <li><strong>Best Western Airpark Hotel - LAX</strong> – Free breakfast, shuttle to LAX, 1.7 miles from SoFi</li>
                <li><strong>Holiday Inn Express LAX</strong> – Reliable chain, free breakfast, pool</li>
              </ul>
              <p className="font-semibold">Mid-Range ($150-$300/night):</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Hampton Inn Los Angeles Int'l Airport/Hawthorne</strong> – Free breakfast, indoor pool, 1.7 miles</li>
                <li><strong>Sonesta Los Angeles Airport LAX</strong> – Free airport shuttle, 3 miles from SoFi, modern amenities</li>
                <li><strong>Hilton Los Angeles Airport</strong> – Full-service hotel, outdoor pool, 2.4 miles</li>
              </ul>
              <p className="font-semibold">Luxury ($300+/night):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Sheraton Gateway Los Angeles Hotel</strong> – Business-class amenities, excellent service, 3 miles</li>
                <li><strong>Hyatt Regency LAX</strong> – Rooftop pool, upscale dining, convenient for airport arrivals</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-community-line text-[#01b47d]"></i> Alternative Neighborhoods</h4>
              <p className="mb-2"><strong>Manhattan Beach</strong> (6 miles south): Beach town vibe with excellent restaurants, bars, and ocean views. Easy drive or Uber to SoFi.</p>
              <p><strong>Santa Monica/Venice Beach</strong> (10 miles west): Classic LA beach experience. Take Metro C Line toward Inglewood for games.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-calendar-check-line text-[#01b47d]"></i> Booking Advice</h4>
              <p className="mb-2"><strong>Downtown Los Angeles</strong> (9 miles northeast): Urban energy, nightlife, cultural attractions. Metro A Line connects to C Line for SoFi access.</p>
              <p className="mb-2"><strong>Airbnb/VRBO Options:</strong> Inglewood and surrounding areas offer entire homes and apartments. Look in Westchester, El Segundo, and Hawthorne for proximity.</p>
              <p className="text-sm italic">Book accommodation early—World Cup will cause unprecedented demand. Use Booking.com, Expedia, or Airbnb with flexible cancellation policies.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-lightbulb-line text-[#01b47d]"></i>
            Matchday Tips & Insider Advice
          </h3>
          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-time-line text-[#01b47d]"></i> Arrival Strategy</h4>
              <p className="mb-4"><strong>Arrive 2.5-3 hours early</strong> for World Cup matches. Security screening is advanced (Evolv AI scanners allow you to walk through with items in pockets), but crowd volume for high-profile matches will be massive. Use early arrival time to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Explore American Airlines Plaza (outdoor pedestrian area under the canopy)</li>
                <li>Grab food/drinks before crowds descend on concessions</li>
                <li>Soak in pre-match atmosphere and fan zones</li>
                <li>Take photos with the stadium as backdrop</li>
              </ul>
              <p className="mt-4"><strong>Best Entry Gates:</strong> Check your ticket for your designated gate (1-8). Gates on the south and east sides (5-7) typically have shorter lines. VIP ticket holders use separate priority entrances.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-handbag-line text-[#01b47d]"></i> Clear Bag Policy (Critical!)</h4>
              <p className="mb-2">SoFi enforces the <strong>NFL Clear Bag Policy</strong> strictly:</p>
              <p className="font-semibold">Permitted:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Clear plastic/PVC/vinyl bags up to 12" x 6" x 12"</li>
                <li>One-gallon clear freezer bags (Ziploc-style)</li>
                <li>Small clutch purses (4.5" x 6.5") with or without strap</li>
                <li>Clear backpacks/fanny packs (must be fully transparent)</li>
              </ul>
              <p className="font-semibold">Prohibited:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Non-clear bags, backpacks, diaper bags (unless medically necessary and clear)</li>
                <li>Hard-sided coolers, briefcases, camera bags</li>
                <li>Luggage of any kind</li>
              </ul>
              <p><strong>Bag Valet:</strong> Non-compliant bags can be checked at bag valet stations (SW, NW, NE, SE corners of exterior perimeter) for a nominal fee (~$10). SoFi cardholders get free bag check.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-shopping-basket-line text-[#01b47d]"></i> What to Bring</h4>
              <p className="font-semibold">Must-Haves:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Mobile ticket on phone (add to mobile wallet before arrival)</li>
                <li>Sunscreen and hat (California sun is intense; UV protection despite roof)</li>
                <li>Lightweight jacket or sweater (evening matches can cool down)</li>
                <li>Empty reusable water bottle (20 oz max, non-metal)—refill at water stations</li>
                <li>Portable phone charger</li>
                <li>Valid ID (alcohol purchases, security)</li>
              </ul>
              <p className="font-semibold">What NOT to Bring:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Outside food/beverages (except medically necessary items or factory-sealed water bottles 20 oz or less)</li>
                <li>Glass/metal containers</li>
                <li>Weapons, noise-makers, laser pointers</li>
                <li>Professional camera equipment (lenses over 6 inches)</li>
                <li>Strollers (not permitted inside)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-restaurant-line text-[#01b47d]"></i> Food & Drink Inside</h4>
              <p className="mb-4">SoFi has revolutionized stadium dining with <strong>LA-themed food hubs</strong> named after famous streets:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>LA Street Dog:</strong> Bacon-wrapped hot dogs with caramelized onions and jalapeño aioli</li>
                <li><strong>Grab & Go Markets:</strong> Quick snacks, sandwiches, drinks (multiple locations on all levels)</li>
                <li><strong>Uber Eats at SoFi:</strong> Order ahead via app and pick up at designated stations (Sections 200, 300, 400/500)—skip concession lines!</li>
              </ul>
              <p><strong>Price Reality:</strong> Expect $15-20 for entrees, $12-16 for beers, $6-8 for soft drinks. It's stadium pricing, but quality is above average.</p>
              <p><strong>Pro Tip:</strong> Eat a substantial meal before arriving or use Uber Eats order-ahead to maximize game-watching time.</p>
              <p><strong>Cashless Venue:</strong> All transactions by credit/debit card or mobile pay (Apple Pay, Google Pay). No cash accepted anywhere.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-error-warning-line text-[#01b47d]"></i> What NOT to Do</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Don't bring non-compliant bags (you'll be turned away or forced to pay for bag valet)</li>
                <li>Don't rely on on-site parking without advance passes</li>
                <li>Don't expect to buy tickets at the box office (World Cup = digital tickets only)</li>
                <li>Don't smoke/vape anywhere inside or in American Airlines Plaza (designated areas outside perimeter only)</li>
                <li>Don't forget sunscreen for day matches—the translucent roof lets UV through despite shade</li>
              </ul>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>
          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-restaurant-2-line text-[#01b47d]"></i> Pre-Match Food & Drinks (&lt; 30 minutes)</h4>
              <p className="font-semibold">Downtown Inglewood (2 miles):</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Dulan's Soul Food Kitchen</strong> – Legendary fried chicken, mac & cheese, collard greens. LA soul food institution.</li>
                <li><strong>Banadir Somali Restaurant</strong> – Unique East African cuisine praised by Issa Rae. Rice platters with lamb, goat, or fish.</li>
                <li><strong>Cork & Batter</strong> – Three-level sports bar/restaurant with rooftop views across from Hollywood Park Casino. Perfect pre-game spot.</li>
              </ul>
              <p className="font-semibold">Near Stadium:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Randy's Donuts</strong> (Market Street) – Iconic LA landmark with the giant rooftop donut. Featured in <em>Iron Man</em>, <em>Wayne's World</em>. Grab fresh donuts for breakfast.</li>
                <li><strong>The Nile Sports Bar</strong> – Local sports bar within blocks of SoFi. Happy hour specials.</li>
                <li><strong>Fiesta Martin Bar & Grill</strong> – Best Mexican food in Inglewood. Guadalajaran specialties.</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-star-smile-line text-[#01b47d]"></i> Nearby Attractions (&lt; 30 minutes)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Hollywood Park Casino</strong> (walking distance) – Card games, table games, entertainment. Open late for post-match unwinding.</li>
                <li><strong>Kia Forum</strong> (0.7 miles) – Historic music venue (formerly The Forum) hosting concerts and comedy. Prince's legendary 21-show run was here.</li>
                <li><strong>YouTube Theater</strong> (walking distance under SoFi canopy) – 6,000-seat performance venue. Check if any shows coincide with your World Cup visit.</li>
                <li><strong>Kenneth Hahn State Recreation Area</strong> (3 miles) – 401-acre park with 7+ miles of trails, fishing pond, Japanese garden. Perfect for outdoor downtime.</li>
              </ul>
              <p className="mt-2"><strong>Randy's Donuts / Dockweiler State Beach</strong> (4-6 miles) – Combine donut stop with beach relaxation in Playa del Rey.</p>
              <p><strong>California Science Center & Natural History Museum</strong> (8 miles, near USC) – World-class museums with Space Shuttle Endeavour. Great for families.</p>
              <p><strong>Venice Beach & Santa Monica Pier</strong> (10 miles west) – Classic SoCal beach experience. Street performers, muscle beach, pier attractions.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Celebration Areas */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-goblet-line text-[#01b47d]"></i>
            Post-Match Celebration Areas
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p><strong>Downtown Inglewood</strong> – Market Street has bars, restaurants, local breweries like <strong>Three Weavers Brewing Company</strong>.</p>
            <p><strong>Manhattan Beach</strong> (6 miles) – Upscale beach town with excellent bar/restaurant scene on Manhattan Beach Blvd.</p>
            <p><strong>Santa Monica</strong> – Third Street Promenade and Main Street packed with bars, restaurants, live music.</p>
            <p><strong>Downtown LA</strong> (9 miles) – Full urban nightlife: rooftop bars, clubs, live music venues, late-night eats.</p>
            <div className="mt-4 rounded-lg border border-amber-300/40 bg-amber-50 p-4 text-amber-900 dark:border-amber-600/40 dark:bg-amber-900/20 dark:text-amber-200">
              <em>Book tours and activities via <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Viator</a> or <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">GetYourGuide</a> for discounted World Cup packages, including stadium tours (when available between matches), Hollywood tours, and beach activities.</em>
            </div>
            <p>
              Fans attending multiple matches might also visit <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Levi's Stadium</Link> or <Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio Azteca</Link>.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Los Angeles */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Los Angeles
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>World Cup 2026 in Los Angeles extends far beyond match day at SoFi Stadium. The city offers incredible experiences for every visitor.</p>
            <div className="p-4 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
              <p className="leading-relaxed"><strong>Discover Los Angeles:</strong> Explore our complete <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Los Angeles World Cup 2026 Guide</Link> for comprehensive information on:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Where to stay near SoFi Stadium</li>
                <li>Best restaurants and nightlife</li>
                <li>Transportation options and getting around</li>
                <li>Top attractions and things to do</li>
                <li>Match day tips and local insights</li>
              </ul>
            </div>
            <p className="leading-relaxed"><strong>Other California Stadium:</strong> If you're catching multiple matches in California, check out <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Levi's Stadium</Link> in the San Francisco Bay Area.</p>
            <p><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-check-double-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>SoFi Stadium isn't just a World Cup venue—it's a $5 billion statement about the future of live sports. From the moment you descend into the seating bowl 100 feet below ground, to the first time you gaze up at the hovering Infinity Screen, to the way California sunshine filters through the translucent roof, you'll understand why this is considered one of the world's most remarkable stadiums.</p>
            <p><strong>Who will love it most?</strong> Tech-forward fans who appreciate architectural innovation, NFL supporters experiencing World Cup atmosphere for the first time, and anyone seeking a quintessentially LA blend of sports, entertainment, and spectacle. If you crave intimacy over opulence, consider other venues—but for sheer "wow factor," SoFi delivers.</p>
            <div className="p-6 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
              <p className="leading-relaxed"><strong>The one unforgettable thing you shouldn't miss:</strong> Arrive early, walk through American Airlines Plaza as the sun sets, and watch the LED-embedded roof come alive with animations visible from aircraft overhead. It's the closest thing to attending a match inside a spacecraft.</p>
            </div>
            <p><strong>World Cup 2026 will sell out fast.</strong> Book your accommodation through trusted platforms like <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#009466] underline">Booking.com</a>, <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#009466] underline">Expedia.com</a>, or <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#009466] underline">Airbnb.com</a> now—Inglewood and LAX-area hotels will reach capacity months in advance. Pre-arrange transport (whether Metro TAP cards or parking passes) to avoid matchday stress. This is a once-in-a-lifetime tournament on American soil.</p>
            <p className="font-bold text-slate-900 dark:text-slate-100">Los Angeles Stadium awaits. Book early. Arrive ready. Experience history.</p>
          </div>
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
                  <a href={`https://twitter.com/intent/tweet?text=SoFi%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
