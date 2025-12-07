import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface HardRockStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const HardRockStadiumGuide: React.FC<HardRockStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/hard-rock-stadium-guide';

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
    const saved = localStorage.getItem('hardrock_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('hardrock_guide_rating');
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
      localStorage.setItem('hardrock_guide_saved', 'true');
    } else {
      localStorage.removeItem('hardrock_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('hardrock_guide_rating', rating.toString());
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#01b47d] text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

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

      {/* Editorial Hero — World Class Redesign */}
      {!hideHero && (
        <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <OptimizedImage
              src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp"
              alt="Interior view of Hard Rock Stadium in Miami Gardens — vibrant atmosphere ahead of FIFA World Cup 2026 matches."
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
                  <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Hard Rock Stadium</span></li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
                Hard Rock Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">World Cup 2026 Venue Guide</span>
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <span>Miami Gardens, FL</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-building-line text-lg"></i>
                  </div>
                  <span>Hard Rock Stadium</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-group-line text-lg"></i>
                  </div>
                  <span>67,518 Capacity</span>
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

      {/* Main Content */}
      <main id="main-content" className="editorial-article-premium py-16" itemScope itemType="https://schema.org/Article">
        
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap theme-emerald">
          {/* Quick Summary */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosting <strong>7 matches</strong> including Quarterfinal & 3rd Place Playoff</li>
               <li>• Capacity: <strong>67,518</strong> (World Cup configuration)</li>
               <li>• Home of <strong>Miami Dolphins</strong> (NFL)</li>
               <li>• Features signature open-air shade canopy</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-sun-line text-[#01b47d]"></i>
            Where Miami's Sunshine Meets Football's Biggest Stage
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>12 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="leading-relaxed mb-6">
            <span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Miami</Link>, Hard Rock Stadium is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>. Picture this: a futuristic canopy shading 65,000 roaring fans from the Florida sun, palm trees swaying beyond the stadium walls, and the electric energy of a World Cup quarterfinal under the Miami night sky. The stadium will host seven matches, including four group stage games, a Round of 32 clash, a quarterfinal, and the prestigious third-place playoff — making it one of the tournament's most active venues.
          </p>
          <p className="leading-relaxed mb-6">
            This isn't just another football stadium. Since opening in 1987, this Miami Gardens landmark has hosted six Super Bowls, the 2024 Copa América final, WrestleMania, and Formula 1's Miami Grand Prix. But what makes it truly special for World Cup 2026 is how it blends cutting-edge design with Miami's irresistible culture — where you can watch elite football in world-class comfort, then dance salsa in Little Havana or soak up South Beach vibes within 30 minutes.
          </p>
          <p className="leading-relaxed">
            The stadium's signature feature? An elegant open-air canopy that provides shade and weather protection while amplifying crowd noise, creating atmosphere that rivals any enclosed arena. Combined with Miami's unmatched international vibe and year-round sunshine, Hard Rock Stadium promises one of World Cup 2026's most memorable experiences.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-map-pin-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Official Name</span>
                <p className="leading-relaxed">Hard Rock Stadium (FIFA World Cup name: "Miami Stadium")</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-map-2-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Location</span>
                <p className="leading-relaxed">Miami Gardens, Florida (northern Miami suburb)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-road-map-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Address</span>
                <p className="leading-relaxed">347 Don Shula Drive, Miami Gardens, FL 33056</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-calendar-2-line text-amber-400 dark:text-amber-300 text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Opened</span>
                <p className="leading-relaxed">1987</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-team-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">World Cup Capacity</span>
                <p className="leading-relaxed">67,518</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-user-3-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Standard Capacity</span>
                <p className="leading-relaxed">64,767</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-shield-star-line text-amber-400 dark:text-amber-300 text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Primary Tenants</span>
                <p className="leading-relaxed">Miami Dolphins (NFL), Miami Hurricanes (NCAA)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-building-2-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Architect</span>
                <p className="leading-relaxed">HOK (original); HOK with Arquitectonica (2015-16 renovation)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-building-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Structural Engineer</span>
                <p className="leading-relaxed">Thornton Tomasetti</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-grid-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Surface Type</span>
                <p className="leading-relaxed">Natural grass</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div>
                <i className="ri-umbrella-line text-[#01b47d] dark:text-[#01b47d] text-xl mr-2"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Type</span>
                <p className="leading-relaxed">Open-air canopy covering seating areas (field exposed)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2 md:col-span-2">
              <div>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold mb-3">Notable Features</span>
                <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                  <li>Massive cable-supported canopy suspended by eight concrete mega-columns and 350-foot steel masts</li>
                  <li>Four corner-mounted video boards</li>
                  <li>Over 1,090 tap handles (one of highest in NFL)</li>
                  <li>First privately-financed multipurpose stadium in US history</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-[#01b47d]"></i>
            History & Legacy
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Hard Rock Stadium began life in 1987 as Joe Robbie Stadium, named after the Miami Dolphins' founder. It was revolutionary at the time — America's first major multipurpose venue built entirely with private financing, designed to accommodate both American football and baseball seamlessly.
            </p>
            <p>
              Through the decades, it's been known as Pro Player Stadium, Dolphins Stadium, and Sun Life Stadium before Hard Rock Cafe International acquired naming rights in August 2016. Each era brought upgrades, but the venue's true transformation came with the $350 million modernization completed between 2015-2016.
            </p>
            <p>
              The stadium's trophy cabinet is enviable: six Super Bowls (including Super Bowl LIV in 2020), two World Series, four BCS National Championships, and WrestleMania XXVIII. In 2024, it hosted the Copa América final between Argentina and Colombia, won 1-0 by Argentina. The venue has also welcomed tennis royalty at the Miami Open and roaring engines at Formula 1's Miami Grand Prix since 2022.
            </p>
            <p>
              For World Cup 2026, Miami's selection was strategic. The stadium's proven track record, substantial renovations completed in 2015-16, and Miami's status as an international gateway made it an obvious choice. The city's Cuban, Latin American, and Caribbean populations create a football-mad atmosphere unmatched in most US cities.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-4-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Walking into Hard Rock Stadium feels like entering a spaceship that's crash-landed in the tropics. The defining architectural feature is its 14-acre canopy, supported by eight reinforced concrete super columns and 64 locked coil steel cables spanning up to 300 feet. It's engineering poetry — providing shelter from Miami's legendary afternoon downpours and scorching sun without enclosing the stadium, keeping that open-air football atmosphere alive.
            </p>
            <p>
              The canopy's lightweight, elegant structure not only provides shade but amplifies crowd noise, creating an unmistakable home-field advantage. On matchday, you'll feel the roar bounce off the canopy and cascade down into the bowl — it's intimidating for opponents and exhilarating for supporters.
            </p>
            <p>
              The stadium is symmetrical and two-tiered all the way around, meaning there isn't a bad seat in the house. Sightlines are excellent from every angle, a rarity in venues converted from American football. The seating bowl wraps tightly around the pitch, bringing fans close to the action.
            </p>
            <p>
              Inside, the fan experience received meticulous attention during renovations. Every seat in the 29-year-old facility was replaced, and innovative seating products accommodate all fans, from corporate clients to families and millennials. The 100 and 300 Level concourses offer modern food service with local Miami flavor. Innovative "Living Room" boxes meld home viewing and game-day experiences, featuring four individual recliners, programmable HDTVs, and access to the exclusive 72 Club lounge.
            </p>
            <p>
              Crucially for international visitors, accessibility is strong. The stadium meets modern standards with ADA parking, elevators to all levels, and companion seating throughout. Hard Rock Stadium became the first NFL venue to create a special allergy-friendly kitchen limiting gluten, nuts, milk, and shellfish allergens, ensuring every fan can enjoy the matchday food safely.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d]"></i>
            What Matches to Expect
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Hard Rock Stadium will host four group stage matches on June 15, 21, 24, and 27, kicking off World Cup action early in the tournament. You'll witness teams fighting for crucial points to advance, with the electric tension only group stage football can deliver.
            </p>
            <h4 className="editorial-h4 flex items-center gap-2">
              <i className="ri-trophy-line text-[#01b47d]"></i>
              The knockout stages bring higher stakes.
            </h4>
            <p>
              Miami will host one Round of 32 match, one quarterfinal, and the third-place playoff — the bronze medal match that closes out the tournament on July 18. That means Miami gets the honor of hosting one of the final games before the grand finale.
            </p>
            <p>
              With Miami's demographics — significant Latin American, Caribbean, and European communities — expect passionate, colorful support regardless of who's playing. Nearly 1 million visitors are expected to flood into Greater Miami for the tournament. The atmosphere will be distinctly international, blending Miami's multicultural energy with World Cup fever.
            </p>
            <p>
              While specific match assignments remain unconfirmed, the quarterfinal and third-place playoff suggest top-tier teams will grace this pitch. You might witness a heavyweight knockout clash or watch two elite sides battle for bronze in what's often an underrated spectacle of attacking football.
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
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Miami's public transit isn't London or Tokyo, but getting to Hard Rock Stadium for World Cup matches is absolutely manageable with planning. Here are your options:
          </p>

          <div className="space-y-8">
            {/* By Metro & Bus */}
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-bus-line text-[#01b47d]"></i>
                By Metro & Bus (Most Economical)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Take the Metrorail to Golden Glades Interchange Station, then transfer to Metrobus Route 297 (East-West Connection) which takes you directly to Hard Rock Stadium. Total journey: approximately 1 hour 30 minutes from downtown Miami, depending on wait times.
                </p>
                <p className="mb-4">
                  Route 297 is your friend. This special event service operates two hours before and after major games, connecting with Metrorail at Earlington Heights, Brownsville, and Dr. Martin Luther King Jr. stations. Fare is just $2.25 each way — incredible value. Download the Miami-Dade Transit app for real-time updates.
                </p>
                <div className="p-4 rounded-xl bg-[#01b47d]/10 border border-[#01b47d]/30">
                  <p className="text-[#01b47d] font-medium">
                    Pro tip: Take Route 297 from Earlington Heights MetroMover Station early, as buses may run full by the time they reach subsequent stops.
                  </p>
                </div>
              </div>
            </div>

            {/* By Brightline */}
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d]"></i>
                By Brightline Train (Fast & Comfortable)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                This is the future arriving early. Brightline's Aventura station is roughly 7 miles from the stadium, and the Hard Rock Stadium Connect shuttle offers direct transport for select events. By World Cup 2026, expect Brightline to offer special tournament trains with coordinated shuttles — it's Florida's premium inter-city rail service connecting Miami, Fort Lauderdale, West Palm Beach, and Orlando.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Journey time from downtown Miami: 30-40 minutes including shuttle transfer. This is your best bet if you're staying in Fort Lauderdale or further north.
              </p>
            </div>

            {/* By Car */}
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-car-line text-amber-400"></i>
                By Car (Parking Required)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Driving offers flexibility but requires pre-purchased parking. There will be no parking for purchase on-site on game days — you must buy passes in advance. Official parking ranges from $52 to $90 depending on zone and game importance.
                </p>
                <p className="mb-4">
                  From downtown Miami: 25-30 minutes via I-95 North or Florida's Turnpike (traffic permitting). From Miami Beach: 35-45 minutes. From Fort Lauderdale Airport: 25 minutes.
                </p>
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">
                    Traffic warning: Miami's game-day traffic is infamous. Leave 90 minutes before kickoff minimum, especially for evening matches when rush hour compounds congestion.
                  </p>
                </div>
              </div>
            </div>

            {/* By Rideshare */}
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-taxi-line text-[#01b47d]"></i>
                By Rideshare (Convenient but Surge Pricing)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Uber and Lyft are everywhere in Miami. The ride from downtown hotels typically takes 30-40 minutes depending on traffic. Expect $35-50 each way normally, but surge pricing on World Cup matchdays could double or triple that.
                </p>
                <div className="p-4 rounded-xl bg-[#01b47d]/5 border border-[#01b47d]/20">
                  <p className="text-[#008f63] dark:text-[#01b47d] font-medium">
                    Important: Post-match rideshare pickup can be chaotic. Recent matchday experiences report "disaster" trying to leave, with unofficial drivers trying to hussle rides. Stay patient, use designated pickup zones, and consider walking 10-15 minutes away from the stadium to escape congestion.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Options */}
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-parking-box-line text-[#01b47d]"></i>
                Budget Alternative: Park & Ride
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Hard Rock Stadium introduced a Park & Ride option for approximately $10, with free shuttles to the stadium — saving $60-80 versus official lots. Locations will be announced closer to match dates, but this is your best value if driving.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-flight-takeoff-line text-amber-400"></i>
                From Airports
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Miami International Airport (MIA):</strong> 20 minutes by car, 45 minutes via Metrorail + bus. Closest major airport.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Fort Lauderdale-Hollywood (FLL):</strong> 30 minutes by car, slightly longer by Tri-Rail + transfer. Often cheaper flights.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            Miami offers accommodation for every budget, but with World Cup 2026 bringing unprecedented crowds, book early. Here's the strategic breakdown:
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Near the Stadium (Convenience First)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Hotels in Miami Gardens, Aventura, and nearby neighborhoods put you closest to matchday action. Properties like Miami Lakes Hotel offer shuttle service to Hard Rock Stadium and appeal to fans prioritizing quick stadium access. Stadium Hotel is literally one mile from Hard Rock Stadium with 217 balcony rooms — perfect if football is your only priority.
                </p>
                <ul className="space-y-1 mb-4">
                  <li><strong>Budget:</strong> Quality Inn, La Quinta Miami Lakes ($120-200/night)</li>
                  <li><strong>Mid-Range:</strong> Hilton Miami Aventura, Hampton Inn Miramar ($180-280/night)</li>
                  <li><strong>Upscale:</strong> JW Marriott Turnberry Resort & Spa ($350+/night)</li>
                </ul>
                <p><strong>Pros:</strong> Short commute, quieter neighborhoods, often better value</p>
                <p><strong>Cons:</strong> Limited nightlife, farther from Miami's cultural attractions</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-building-2-line text-[#01b47d]"></i>
                Downtown Miami & Brickell (Best Balance)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Downtown/Brickell is as central as it gets, with great public transport, array of dining options, and the FIFA Fan Festival expected downtown so you could walk from your hotel to watch matches on giant screens. It's 25-30 minutes to the stadium but puts you in Miami's cosmopolitan heart.
                </p>
                <ul className="space-y-1 mb-4">
                  <li><strong>Budget:</strong> Sleep Inn Miami Springs near airport ($110-180/night)</li>
                  <li><strong>Mid-Range:</strong> AC Hotel Miami Brickell, Courtyard Downtown ($200-350/night)</li>
                  <li><strong>Luxury:</strong> Kimpton Epic, InterContinental Miami ($400-700/night)</li>
                </ul>
                <p><strong>Pros:</strong> Central location, public transit hub, business hotels with solid amenities</p>
                <p><strong>Cons:</strong> Less "beachy" Miami vibe, matchday commute requires planning</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-beach-line text-amber-400"></i>
                Miami Beach & South Beach (Ultimate Experience)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Miami Beach puts you on famous white sand beaches with trendy nightlife and world-class dining, though the big nightclubs are here, about 15 minutes from Downtown by taxi. It's 40-50 minutes to the stadium, but you're living the full Miami dream.
                </p>
                <ul className="space-y-1 mb-4">
                  <li><strong>Budget:</strong> South Beach hostels, budget chains in North Beach ($100-200/night)</li>
                  <li><strong>Mid-Range:</strong> Local House Miami Beach (boutique, eco-friendly, $250-400/night)</li>
                  <li><strong>Luxury:</strong> The Ritz-Carlton Bal Harbour, Acqualina Resort, The St. Regis Bal Harbour ($500-1000+/night)</li>
                </ul>
                <p><strong>Pros:</strong> Iconic beach experience, incredible food scene, nightlife capital</p>
                <p><strong>Cons:</strong> Longest stadium commute, most expensive area, crowded during World Cup</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-compass-3-line text-[#01b47d]"></i>
                Hollywood & Fort Lauderdale (Value Alternative)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Dolce by Wyndham Hollywood offers matchday shuttle service to Hard Rock Stadium and sits across from Seminole Hard Rock Casino. Hollywood Beach provides quieter beach vibes than South Beach at better prices.
                </p>
                <ul className="space-y-1 mb-4">
                  <li><strong>Budget:</strong> Best Western Hollywood, extended stays ($120-200/night)</li>
                  <li><strong>Mid-Range:</strong> Margaritaville Hollywood Beach Resort, 9 miles from stadium with family-friendly beach access ($280-450/night)</li>
                  <li><strong>Luxury:</strong> DoubleTree Resort Hollywood Beach ($350-600/night)</li>
                </ul>
                <p><strong>Pros:</strong> Good value, beach access, shorter stadium distance than South Beach</p>
                <p><strong>Cons:</strong> Outside Miami proper, requires car or longer transit</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Booking Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-check-line text-[#01b47d]"></i>
            Booking Strategy
          </h3>
          <ol className="list-decimal pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
            <li><strong>Book now.</strong> With nearly 1 million visitors expected, hotels will fill fast</li>
            <li><strong>Use flexible rate options</strong> through <a href="https://booking.com" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> or Expedia to adjust if match schedules change</li>
            <li><strong>Consider Airbnb</strong> for groups or longer stays — Miami has excellent vacation rental inventory</li>
            <li><strong>Check hotel shuttle services</strong> — many properties add World Cup shuttles for major events</li>
          </ol>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-amber-400"></i>
            Matchday Tips & Insider Advice
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-time-line text-[#01b47d]"></i>
                Arrive Early (Seriously)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Plan to arrive at least 1-2 hours before kickoff to find parking, go through security, and get settled. World Cup security will be more thorough than regular Dolphins games. Gates typically open 2-3 hours before kickoff — use that time to soak in the atmosphere, grab food, and explore.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-shopping-bag-4-line text-[#01b47d]"></i>
                What to Bring (Bag Policy is Strict)
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Hard Rock Stadium enforces a clear bag policy: only clear plastic bags up to 12" x 6" x 12" are permitted, or small clutches no larger than 4.5" x 6.5". This is non-negotiable. Don't show up with a backpack.
                </p>
                <p className="font-semibold">Allowed:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Factory-sealed plastic water bottles 20 oz. or less</li>
                  <li>Phone, wallet, keys</li>
                  <li>Binoculars, small camera</li>
                  <li>Medical items (with documentation)</li>
                  <li>Sunscreen (critical in Florida!)</li>
                </ul>
                <p className="font-semibold">Prohibited:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Backpacks, large bags, coolers</li>
                  <li>Outside food/beverages (except sealed water)</li>
                  <li>Professional cameras with detachable lenses</li>
                  <li>Umbrellas (the canopy has you covered)</li>
                </ul>
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200">
                    Bag check is available near Gates 3, 5, 8, and 14 for $12-20, but closes 60 minutes after gates close — don't rely on this.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                Food & Drink Inside
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Hard Rock Stadium punches above its weight for stadium cuisine. The venue offers 38 branded food concepts, with 70% sourcing from South Florida vendors. This isn't your typical hotdog-and-nachos situation.
                </p>
                <p className="font-semibold">Must-try vendors:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li><strong>Café Versailles</strong> for authentic Cuban sandwiches and croquetas (Little Havana institution since 1971)</li>
                  <li><strong>Mojo Donuts</strong> for the Abuelita donut filled with arroz con leche</li>
                  <li><strong>Fuku</strong> for David Chang's spicy fried chicken sandwich</li>
                  <li><strong>O-B House</strong> for Fort Lauderdale-favorite pancakes (early games)</li>
                </ul>
                <p className="mb-4">
                  Beer selection is exceptional. Over 50 craft beers available at two taprooms. Prices are stadium-standard ($10-14 for beer, $5-8 for food items), but quality justifies the cost.
                </p>
                <div className="p-4 rounded-xl bg-[#01b47d]/5 border border-[#01b47d]/20">
                  <p className="text-[#008f63] dark:text-[#01b47d] font-medium">
                    Pro tip: The stadium is completely cashless — convert cash to prepaid VISA gift cards at team stores if needed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-temp-hot-line text-amber-400"></i>
                Beat the Heat
              </h4>
              <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <p className="mb-4">
                  Miami in June-July is hot. Really hot. Miami's heat can be intense, so carry water and stay hydrated. The canopy provides shade, but it's still 85-95°F (29-35°C) with humidity.
                </p>
                <p className="font-semibold">Heat survival:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Wear lightweight, light-colored clothing</li>
                  <li>Bring sunscreen (even under the canopy, reflected UV is real)</li>
                  <li>Hydrate constantly — water refill stations available</li>
                  <li>Consider evening matches if heat-sensitive</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Exit Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-walk-line text-[#01b47d]"></i>
            Post-Match Exit Strategy
          </h3>
          <div className="text-slate-700 dark:text-slate-200 leading-relaxed">
            <p className="mb-4">
              This is where patience pays off. Parking lot and rideshare exits can be chaotic, with reports of "disaster" experiences. Options:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Wait 30 minutes</strong> — grab a post-match beer, let crowds thin</li>
              <li><strong>Walk 10-15 minutes away</strong> before calling rideshare to avoid surge zones</li>
              <li><strong>Use public transit</strong> — Route 297 buses run two hours after games</li>
              <li><strong>Pre-arrange pickup location</strong> away from main gates</li>
            </ol>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What NOT to Do */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-close-circle-line text-rose-400"></i>
            What NOT to Do
          </h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
            <li>Don't bring prohibited bags (you'll waste time going back to car)</li>
            <li>Don't underestimate travel time — Miami traffic is unpredictable</li>
            <li>Don't skip sunscreen (Florida sun is unforgiving)</li>
            <li>Don't bring strollers into seating sections (storage available)</li>
            <li>Don't leave valuables in car — parking lots see heavy foot traffic</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-flag-line text-[#01b47d]"></i>
                Pre-Match: Fan Zones & Tailgating
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                While Hard Rock Stadium isn't surrounded by traditional sports bars (it's in suburban Miami Gardens), the stadium itself creates the atmosphere. Premium experiences include the Members Lounge in the MIA Event Center and the MIA Garage Tailgate adjacent to the North entrance. For authentic pregame vibes, head to downtown Miami or Wynwood 3-4 hours before kickoff, soak in the fan festival atmosphere, then transit to the stadium.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-brush-line text-amber-400"></i>
                Cultural Experiences (20-30 Minutes Away)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Wynwood Walls (25 minutes):</strong> Miami's street art capital featuring famous murals by global artists, craft breweries, trendy cafes, and an outdoor museum atmosphere — admission is free. Perfect for colorful photos and pre-match energy.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Miami */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Miami
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Miami's tropical paradise atmosphere and vibrant culture create an electric World Cup 2026 experience.</p>
          <div className="p-4 rounded-xl bg-[#01b47d]/10 border-l-4 border-[#01b47d] mb-6">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Discover Miami:</strong> Explore our complete <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Miami World Cup 2026 Guide</Link> for essential travel information:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-slate-700 dark:text-slate-200">
              <li>Hotels near Hard Rock Stadium</li>
              <li>Best beaches and neighborhoods</li>
              <li>Art Deco District and South Beach</li>
              <li>Cuban cuisine and nightlife</li>
              <li>Transportation and match day tips</li>
            </ul>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Other Southern Stadiums:</strong> Visiting multiple cities in the South? Check out <Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Mercedes‑Benz Stadium</Link> in Atlanta or <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston.</p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          <hr className="editorial-divider" />
        </article>

        {/* Neighborhood Highlights */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-amber-400"></i>
            Neighborhood Highlights
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-community-line text-amber-400"></i>
                Little Havana (30 minutes)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Experience Cuban culture at its most vibrant on Calle Ocho (SW 8th Street) with art galleries, Cuban restaurants, the Latin Walk of Fame, and Ball & Chain for live Latin jazz. This is non-negotiable for World Cup visitors wanting authentic Miami culture.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-building-3-line text-[#01b47d]"></i>
                South Beach & Art Deco District (40 minutes)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Famous white sand beaches, turquoise waters, pastel Art Deco buildings, and iconic Ocean Drive. Arrive early morning or late afternoon to avoid peak crowds.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Nature Escapes */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-leaf-line text-[#01b47d]"></i>
            Nature Escapes
          </h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              <strong>Everglades National Park (45 minutes):</strong> Unique subtropical wilderness — book an airboat tour to see alligators in their natural habitat. Half-day excursion ideal for rest days between matches.
            </p>
            <p>
              <strong>Key Biscayne & Bill Baggs Park (35 minutes):</strong> Beautiful beaches with historic lighthouse, less crowded than South Beach, perfect for post-match recovery.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Nightlife & Celebration */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-night-clear-line text-amber-400"></i>
            Nightlife & Celebration
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-beer-line text-[#01b47d]"></i>
                Wynwood Breweries
              </h4>
              <p>Wynwood Brewing Co. and J. Wakefield Brewing (Star Wars-themed) offer craft beer in hip industrial spaces. Great for post-match casual celebration.</p>
            </div>
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-building-line text-[#01b47d]"></i>
                Brickell Lounges
              </h4>
              <p>Miami's financial district transforms into sophisticated nightlife after dark. Rooftop bars with skyline views, upscale cocktails, international crowd.</p>
            </div>
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-music-2-line text-rose-400"></i>
                South Beach Clubs
              </h4>
              <p>World-famous nightlife — LIV at Fontainebleau, Story, and E11EVEN for when you want to dance until sunrise. Dress codes enforced, expensive, but uniquely Miami.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Tours & Activities */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Tours & Activities
          </h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
            <li><strong>Biscayne Bay boat tours</strong> — see celebrity mansions and Miami skyline from water</li>
            <li><strong>Little Havana food walking tour</strong> — taste authentic Cuban cuisine with cultural context</li>
            <li><strong>Vizcaya Museum & Gardens</strong> — stunning Italian Renaissance villa overlooking the bay</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-star-smile-line text-amber-400"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Hard Rock Stadium delivers something rare in World Cup venues: world-class football infrastructure wrapped in genuine cultural excitement. This isn't a soulless suburban bowl — Miami's international DNA, diverse neighborhoods, and infectious energy make it feel like a true World Cup host city.
            </p>
            <div>
              <p className="font-semibold">Who will love it most:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fans who want beaches AND football (30-minute drive to paradise)</li>
                <li>Food lovers (stadium cuisine and Miami restaurants are exceptional)</li>
                <li>Groups traveling together (accommodation options for every budget)</li>
                <li>Anyone seeking an authentic international atmosphere</li>
              </ul>
            </div>
            <p>
              <strong>The one unforgettable thing you shouldn't miss:</strong> Arrive early enough to walk Miami's neighborhoods before your match. Start in Little Havana for a Cuban coffee and pastelito, drift through Wynwood's street art, then head to the stadium. That journey — from sipping cafecito to hearing 67,000 fans roar under the canopy — captures what makes this venue special. It's not just a stadium; it's Miami's entire multicultural soul compressed into 90 minutes of football.
            </p>
            <p className="font-semibold">
              Book early, pack light (remember that clear bag policy!), embrace the heat, and get ready for World Cup magic where the sunshine never quits.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#01b47d] to-[#01b47d]/5 border border-[#01b47d]/30">
              <p className="text-slate-800 dark:text-slate-200 italic">
                Ready to secure your Miami World Cup experience? Book accommodations through <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a>, <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Expedia.com</a>, or <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Airbnb.com</a> to lock in rates before the rush. Airport transfers and car rentals through major providers ensure smooth arrival — Miami rewards advance planning.
              </p>
            </div>
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
                  <a href={`https://twitter.com/intent/tweet?text=Hard%20Rock%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
