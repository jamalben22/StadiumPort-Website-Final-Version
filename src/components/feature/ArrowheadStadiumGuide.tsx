import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';


interface ArrowheadStadiumGuideProps {
  showHeader?: boolean;
  hideHero?: boolean;
}

export const ArrowheadStadiumGuide: React.FC<ArrowheadStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
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
  const pageUrl = '/world-cup-2026-stadiums/arrowhead-stadium-guide';

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
    const saved = localStorage.getItem('arrowhead_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('arrowhead_guide_rating');
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
      localStorage.setItem('arrowhead_guide_saved', 'true');
    } else {
      localStorage.removeItem('arrowhead_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('arrowhead_guide_rating', rating.toString());
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



      {/* Main Content */}
      <main id="main-content" className="editorial-article-premium py-16" itemScope itemType="https://schema.org/Article">
        
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap theme-emerald">
          {/* Quick Summary */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• World's loudest outdoor stadium (142.2 dB record)</li>
               <li>• Capacity: <strong>76,416</strong> (World Cup configuration)</li>
               <li>• Home of the <strong>Kansas City Chiefs</strong></li>
               <li>• Located in Truman Sports Complex</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-volume-up-line text-[#01b47d]"></i>
            The World's Loudest Stadium Welcomes the World's Game
          </h2>

          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Welcome to the loudest stadium in the world. When 76,000 Kansas City Chiefs fans unleash their legendary roar, Arrowhead Stadium doesn't just host football—it creates seismic activity.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Dec 2025</span>
          </div>

          <p className="whitespace-pre-line">
            For the 2026 World Cup, this 50-year-old palace of passion will channel that same energy toward the beautiful game.
          </p>
          
          <p className="leading-relaxed mt-4">
            This isn't your typical modern, sterile venue. Arrowhead Stadium is a monument to American sports culture, where tailgating is an art form, barbecue smoke mingles with crowd noise, and the atmosphere builds hours before kickoff. When FIFA selected this Kansas City landmark, they chose authenticity over luxury—and that's exactly what makes it special.
          </p>
          
          <p className="leading-relaxed mt-4">
            For international visitors, Arrowhead offers something no other World Cup venue can: a genuine slice of Americana wrapped around world-class football facilities. This is where you'll experience the heartland of American sports passion, complete with legendary Kansas City barbecue, Midwestern hospitality, and a sound level that has literally registered on seismographs.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
            Located in <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Kansas City</Link>, Arrowhead Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-building-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-building-2-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Official Name</span>
                  <p className="text-slate-900 dark:text-white font-semibold">GEHA Field at Arrowhead Stadium</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-map-pin-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Location</span>
                  <p className="text-slate-900 dark:text-white font-semibold">Kansas City, Missouri (Truman Sports Complex)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-group-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Capacity</span>
                  <p className="text-slate-900 dark:text-white font-semibold">76,416 (World Cup configuration)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-calendar-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Opened</span>
                  <p className="text-slate-900 dark:text-white font-semibold">August 12, 1972</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <i className="ri-grass-line text-[#01b47d] text-xl"></i>
                <div>
                  <span className="font-semibold">Playing Surface</span>
                  <p className="text-slate-900 dark:text-white font-semibold">Natural Grass</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-home-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Home Team</span>
                  <p className="text-slate-900 dark:text-white font-semibold">Kansas City Chiefs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-volume-up-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Noise Record</span>
                  <p className="text-slate-900 dark:text-white font-semibold">142.2 decibels (2014)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-car-line text-[#01b47d] text-xl mr-2"></i>
                  <span className="font-semibold">Parking</span>
                  <p className="text-slate-900 dark:text-white font-semibold">27,000+ spaces</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="editorial-h3">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>World's loudest outdoor stadium</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Iconic arrowhead-shaped design</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Massive tailgating culture</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Natural grass playing surface</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Open-air bowl design</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Historic American football venue</span>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-time-line text-[#01b47d]"></i>
            History & Legacy
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Arrowhead Stadium opened in 1972 as part of the ambitious Truman Sports Complex, a revolutionary concept that placed two stadiums—one for football, one for baseball—side by side in suburban Kansas City. Architect Charles Deaton designed Arrowhead with a singular focus: create the loudest, most intimidating environment in professional sports.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The stadium's distinctive arrowhead shape isn't just aesthetic—it's acoustic engineering. The bowl design funnels crowd noise directly onto the field, creating a sound amplification effect that has terrorized visiting teams for five decades. In 2014, Chiefs fans officially broke the Guinness World Record for loudest crowd roar at an outdoor stadium, reaching 142.2 decibels—louder than a jet engine.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Beyond noise, Arrowhead pioneered the modern tailgating experience. The stadium's massive parking lots transform into temporary cities on game days, with elaborate setups featuring grills, tents, and full outdoor kitchens. This isn't just pre-game socializing—it's a cultural institution that begins at dawn and continues hours after the final whistle.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              For Kansas City, Arrowhead represents more than football success—it's proof that smaller American cities can compete with coastal giants. The Chiefs' recent Super Bowl victories (2020, 2023) validated decades of passionate support, and the stadium's selection for the 2026 World Cup confirms its status as a world-class venue worthy of football's biggest stage.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Architecture & Experience */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-building-4-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Arrowhead Stadium's design philosophy prioritizes atmosphere over luxury. The three-tiered bowl creates an intimate connection between fans and field, with the steepest upper deck in the NFL ensuring excellent sightlines from every seat. Unlike modern stadiums with extensive concourses and amenities, Arrowhead keeps fans focused on the action—and contributing to the noise.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The stadium's exterior features a distinctive red brick facade with arrowhead-shaped architectural elements that have become iconic symbols of Kansas City sports. Recent renovations have modernized amenities while preserving the venue's character: upgraded concessions, improved restrooms, and enhanced accessibility, but the fundamental bowl design remains unchanged.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              What sets Arrowhead apart is its authentic, unfiltered atmosphere. There are no retractable roofs or climate control systems—weather is part of the experience. Summer games can be sweltering, winter contests brutally cold, but the 2026 World Cup's June-July schedule should provide ideal conditions for international visitors.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The natural grass playing surface, maintained to NFL standards, will provide excellent conditions for World Cup matches. The field's dimensions easily accommodate soccer's requirements, and FIFA-mandated temporary seating adjustments will optimize sightlines for the beautiful game while preserving the stadium's legendary acoustics.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-football-line text-[#01b47d]"></i>
            What Matches to Expect
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Arrowhead Stadium will host <strong>six World Cup 2026 matches</strong>, including crucial group stage fixtures and likely a knockout round contest. With its 76,416 capacity, the venue will create an electric atmosphere that combines international football passion with Kansas City's legendary crowd energy.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Expect matches featuring major footballing nations, as FIFA typically assigns high-profile games to venues with proven track records for atmosphere and organization. The stadium's reputation for creating hostile environments for visiting teams will translate perfectly to World Cup knockout drama, where crowd support can genuinely influence results.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The venue's experience hosting major events—including AFC Championship games, college football playoffs, and international soccer friendlies—ensures smooth operations for World Cup matches. Kansas City's passionate sports culture will embrace international visitors while maintaining the intimidating atmosphere that makes Arrowhead special.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Stadiums */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-links-line text-[#01b47d]"></i>
            Related Stadiums
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Planning matches across the Central and Southern US? Consider
            {' '}<Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas,
            {' '}<Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston, or
            {' '}<Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Mercedes‑Benz Stadium</Link> in Atlanta.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-map-2-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h2>
          
          <div className="mb-8 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-bus-line text-[#01b47d] text-2xl"></i>
              By Public Transportation
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Kansas City Area Transportation Authority (KCATA)</strong> operates special event bus service to Arrowhead Stadium from downtown Kansas City and major hotels. The #129 Arrowhead Express runs from downtown's Grand Boulevard Transit Center directly to the stadium, with service beginning 3 hours before kickoff and continuing 2 hours post-match.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>KC Streetcar</strong> connects downtown Kansas City attractions to the bus terminal, making public transit a viable option for visitors staying in the city center. The streetcar is free and runs every 10-15 minutes, connecting Union Station, Power & Light District, and the River Market.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Cost:</strong> $1.50 each way for bus service. <strong>Travel time:</strong> 45-60 minutes from downtown Kansas City, depending on traffic and stops.
            </p>
          </div>

          <div className="mb-8 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-taxi-line text-[#01b47d] text-2xl"></i>
              By Rideshare/Taxi
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Uber and Lyft</strong> operate designated pickup/drop-off zones at Arrowhead Stadium, located in Lot M (north side of stadium). Expect surge pricing during major events—fares from downtown Kansas City typically range $25-45 each way, potentially doubling during peak demand.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Traditional taxis</strong> are available but less common in Kansas City. Pre-arrange return trips through hotel concierges or taxi companies, as post-match availability can be limited.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Pro tip:</strong> Walk 10-15 minutes away from the stadium after matches to avoid surge pricing and pickup delays. The nearby Walmart Supercenter or McDonald's on Blue Ridge Cutoff provide easier pickup locations.
            </p>
          </div>

          <div className="mb-8 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-bike-line text-[#01b47d] text-2xl"></i>
              By Bike
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Kansas City's <strong>BikeKC</strong> bike-share system doesn't extend to Arrowhead Stadium, but dedicated cyclists can use city bike lanes and trails. The <strong>Blue River Parkway Trail</strong> provides a scenic route from downtown, though the 12-mile journey requires good fitness and weather cooperation.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Bike parking:</strong> Limited secure bike racks available near stadium entrances. Consider bringing a high-quality lock, as the area experiences heavy foot traffic during events.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-plane-line text-[#01b47d] text-2xl"></i>
              From Kansas City International Airport (MCI)
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Distance:</strong> 25 miles (40 km) northwest of Arrowhead Stadium. <strong>Travel time:</strong> 30-45 minutes by car, depending on traffic.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Rental cars:</strong> All major agencies operate from MCI's consolidated rental facility. Take I-29 South to I-435 East to I-70 East to reach the stadium area.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Airport shuttles:</strong> SuperShuttle and GO Airport Shuttle provide shared-ride service to hotels and the stadium area. Advance reservations recommended, especially during World Cup matches.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Rideshare from airport:</strong> $35-55 to downtown Kansas City, $40-65 directly to Arrowhead Stadium (higher during surge pricing).
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay
          </h2>
          
          <p className="text-slate-700 dark:text-slate-300">
            Kansas City offers diverse accommodation options, from downtown luxury hotels to suburban convenience near the stadium.
          </p>

          <div className="mb-8 space-y-4">
            <h3 className="editorial-h3">
              <i className="ri-building-line text-[#01b47d] text-2xl"></i>
              Downtown Kansas City (Best Overall Experience)
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Stay in the heart of Kansas City's cultural and entertainment district, with easy access to restaurants, nightlife, and attractions. The Power & Light District offers the city's best dining and entertainment options.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-star-line text-[#01b47d]"></i>
                  The Fontaine (Luxury)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">Autograph Collection hotel in the Power & Light District. Rooftop bar, upscale dining, walking distance to entertainment. $280-400/night during World Cup.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-star-line text-[#01b47d]"></i>
                  Hotel Phillips (Historic Luxury)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">1931 Art Deco landmark with modern amenities. Downtown location, elegant rooms, historic character. $220-320/night.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-building-2-line text-[#01b47d]"></i>
                  Marriott Downtown (Mid-Range)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">Reliable chain hotel in the heart of downtown. Connected to convention center, multiple dining options. $180-280/night.</p>
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h3 className="editorial-h3">
              <i className="ri-shopping-cart-line text-[#01b47d] text-2xl"></i>
              Crown Center (Family-Friendly)
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Shopping and entertainment complex with hotels, restaurants, and family attractions. Connected to Union Station and its science museum, planetarium, and dining options.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sheraton Crown Center</h4>
                <p className="text-slate-700 dark:text-slate-300">Large hotel connected to shopping and dining. Indoor walkways to Union Station. $160-240/night.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Westin Crown Center</h4>
                <p className="text-slate-700 dark:text-slate-300">Upscale option with excellent amenities. Connected to Crown Center shops and restaurants. $200-300/night.</p>
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h3 className="editorial-h3">
              <i className="ri-store-line text-[#01b47d] text-2xl"></i>
              Country Club Plaza (Upscale Shopping District)
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Spanish-inspired outdoor shopping district with upscale retail, fine dining, and beautiful architecture. More residential feel, 15 minutes from downtown.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">The Raphael Hotel</h4>
                <p className="text-slate-700 dark:text-slate-300">Boutique European-style hotel on the Plaza. Elegant rooms, fine dining, walkable to shops. $190-290/night.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">InterContinental Kansas City</h4>
                <p className="text-slate-700 dark:text-slate-300">Luxury hotel at the Plaza. Rooftop restaurant, spa services, premium amenities. $250-380/night.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="editorial-h3">
              <i className="ri-map-pin-line text-[#01b47d] text-2xl"></i>
              Near Stadium (Convenience Over Atmosphere)
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Limited options near Arrowhead Stadium, mostly chain hotels along I-70. Convenient for match days but lacking in dining and entertainment options.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Drury Inn & Suites Stadium</h4>
                <p className="text-slate-700 dark:text-slate-300">Closest hotel to Arrowhead Stadium. Free breakfast, evening snacks, indoor pool. $120-180/night.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Holiday Inn Express Independence</h4>
                <p className="text-slate-700 dark:text-slate-300">15 minutes from stadium. Basic amenities, free breakfast, reliable chain quality. $100-150/night.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-lightbulb-line text-[#01b47d]"></i>
            Matchday Tips & Insider Advice
          </h2>

          <div className="mb-6 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-suitcase-line text-[#01b47d]"></i>
              What to Bring
            </h3>
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <i className="ri-sun-line text-[#01b47d] mt-1"></i>
                <span>Sunscreen and hat (summer sun can be intense, limited shade in upper sections)</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-drop-line text-[#01b47d] mt-1"></i>
                <span>Water bottle (empty, to fill inside) - Kansas City summers are hot and humid</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-shirt-line text-[#01b47d] mt-1"></i>
                <span>Layers for evening matches (temperatures can drop significantly after sunset)</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-id-card-line text-[#01b47d] mt-1"></i>
                <span>Photo ID (required for alcohol purchases if you appear under 40)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-restaurant-2-line text-[#01b47d]"></i>
              Food & Drink Inside
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Better Option:</strong> Eat beforehand. Kansas City's legendary BBQ joints (see below) offer infinitely better value and taste than stadium concessions.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Stadium concessions include standard fare (hot dogs, nachos, beer) plus Kansas City specialties like burnt ends and barbecue sandwiches. Expect $8-12 for food items, $10-14 for beer. Premium club areas offer upgraded dining options for suite and club seat holders.
            </p>
          </div>

          <div className="mb-6 space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-door-open-line text-[#01b47d]"></i>
              Best Gates/Entrances
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Gates 1-6 encircle the stadium. Your ticket will designate the recommended gate based on seat location. Arrive at any gate, but entering through your designated gate reduces walking distance to seats.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="editorial-h3">
              <i className="ri-car-line text-[#01b47d]"></i>
              Post-Match Transport
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Critical Advice:</strong> Do NOT rush to your car or rideshare immediately. Parking lot exodus and rideshare queues are nightmarish. Instead:
            </p>
            <ol className="text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
              <li>Stay in your seat 15-20 minutes after final whistle</li>
              <li>Explore the stadium or visit concessions (usually faster when crowds thin)</li>
              <li>Walk to a nearby restaurant/bar for post-match atmosphere</li>
              <li>By the time you leave (60-90 minutes post-match), traffic and rideshare availability improve dramatically</li>
            </ol>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Atmosphere & Culture */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-heart-line text-[#01b47d]"></i>
            Atmosphere & Culture
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Kansas City knows how to support its teams. Expect friendly, passionate crowds, though the demographic will skew more diverse and international than typical Chiefs games. American fans are generally welcoming to visitors—don't hesitate to chat with locals about the match, Kansas City, or their beloved BBQ.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-compass-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h2>

          <div className="mb-8 space-y-4">
            <h3 className="editorial-h3">
              <i className="ri-restaurant-line text-[#01b47d] text-2xl"></i>
              Pre-Match BBQ Pilgrimage
            </h3>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">LC's Bar-B-Q (5800 Blue Parkway)</h4>
              <p className="text-slate-700 dark:text-slate-300">Five minutes from the stadium, perfect for authentic KC BBQ before the match. Counter-service, no-frills, legendary ribs and burnt ends.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="editorial-h3">
              <i className="ri-map-2-line text-[#01b47d] text-2xl"></i>
              Nearby Attractions (within 30 minutes)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-building-3-line text-[#01b47d]"></i>
                  National WWI Museum and Memorial (Downtown)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  America's only museum dedicated to The Great War, with world-class exhibits and stunning Liberty Memorial Tower views of the Kansas City skyline. Allow 2-3 hours. ($18 adults, $10 youth)
                </p>
              </div>
              
              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-trophy-line text-[#01b47d]"></i>
                  Negro Leagues Baseball Museum (18th & Vine District)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Essential visit celebrating African American baseball history and Kansas City's pivotal role. Often combined with American Jazz Museum next door. ($15 adults)
                </p>
              </div>
              
              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-goblet-line text-[#01b47d]"></i>
                  Boulevard Brewing Company (Southwest Boulevard)
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Kansas City's largest craft brewery offers tours and tastings. Perfect post-match or rest-day activity. (Tours $10-15)
                </p>
              </div>
              
              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-shopping-bag-line text-[#01b47d]"></i>
                  Country Club Plaza
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Ten minutes from stadium, this Spanish-inspired shopping district features upscale retail, restaurants, and beautiful architecture. Great for non-match days.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="editorial-h3">
              <i className="ri-building-line text-[#01b47d] text-2xl"></i>
              Downtown Pre-Match Options
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Power and Light District</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  If you're staying downtown, this eight-block entertainment complex hosts official fan fest events, watch parties, and 50+ bars/restaurants. Free KC Streetcar connects to other downtown attractions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">18th & Vine Jazz District</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Historic African American neighborhood where KC jazz legends were born. Live music venues, museums, and soul food restaurants.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="editorial-h3">
              <i className="ri-fire-line text-[#01b47d] text-2xl"></i>
              Essential Kansas City BBQ Experiences
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Arthur Bryant's (1727 Brooklyn Ave)</h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Legendary since the 1920s, proclaimed "single best restaurant in the world" by food critic Calvin Trillin. Try the burnt ends—Arthur Bryant invented them. Tangy, vinegar-forward sauce. ($12-18 per plate)
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Gates Bar-B-Q (Multiple locations)</h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Known for enthusiastic "HI, MAY I HELP YOU?" greeting and thick, sweet-and-spicy sauce. The 12th & Brooklyn location is closest to 18th & Vine. ($10-16 per plate)
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Joe's Kansas City Bar-B-Que (47th & Mission Road, KS)</h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Housed in a gas station, frequently ranked America's best BBQ. Arrive early—lines form quickly. Z-Man sandwich is legendary. ($12-20)
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Q39 (Multiple locations)</h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Modern approach to KC BBQ with upscale atmosphere. Excellent if you want craft cocktails with your ribs. ($18-28)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="editorial-h3">
              <i className="ri-music-line text-[#01b47d] text-2xl"></i>
              Post-Match Celebrations
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Westport Entertainment District</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Young, energetic nightlife area with dozens of bars and live music venues. 15 minutes from stadium, 5 minutes from Plaza.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Crossroads Arts District</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Hipster-friendly craft cocktail bars, brewery taprooms, and late-night eateries. First Fridays art walk (April-October) is legendary.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Kansas City
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Explore our complete <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Kansas City World Cup 2026 Guide</Link> for transport, neighborhoods, and essential tips.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Catching more matches nearby? Consider
              {' '}<Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas,
              {' '}<Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">NRG Stadium</Link> in Houston, and
              {' '}<Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Mercedes‑Benz Stadium</Link> in Atlanta.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h2">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h2>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Arrowhead Stadium delivers something few World Cup venues can claim: genuine, unfiltered American sports culture combined with world-class facilities and Midwestern hospitality. This isn't a sterile, modern bowl designed by committee—it's a 50-year-old palace of passion where sound becomes a physical force and the crowds create their own weather system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="editorial-h3">
                  <i className="ri-thumb-up-line text-[#01b47d]"></i>
                  Who will love it most:
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Fans seeking authentic atmosphere over luxury amenities. Groups who embrace tailgate culture and American BBQ. Anyone who wants to experience why American football fans are among the world's most passionate. Travelers willing to explore beyond the stadium to discover Kansas City's hidden gems—world-class jazz history, incredible BBQ, and surprisingly vibrant arts scenes.
                </p>
              </div>
              
              <div>
                <h3 className="editorial-h3">
                  <i className="ri-star-line text-[#01b47d]"></i>
                  Don't miss:
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  The tailgate scene in Arrowhead's massive parking lots, where Kansas Citians will welcome you with cold beverages and smoking grills loaded with ribs. The experience begins hours before kickoff—embrace it. Inside, find your way to one of the upper deck sections to truly appreciate the bowl's acoustics when the crowd roars.
                </p>
              </div>
            </div>

            <div>
              <h3 className="editorial-h3">
                <i className="ri-calendar-check-line text-[#01b47d]"></i>
                Book early:
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Kansas City's hotel inventory is smaller than mega-cities like New York or Los Angeles. Secure downtown accommodations 6-12 months in advance through booking.com, Expedia, or airbnb.com. For transport flexibility, consider pre-booking airport transfers via Viator or specialized World Cup shuttle packages that eliminate parking hassles.
              </p>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-6">
              The 2026 World Cup gives you a rare chance to experience American sporting passion channeled toward the beautiful game. When those 70,000 fans fill Arrowhead's bowl and the roar cascades onto the pitch, you'll understand why this stadium holds its place in sporting history. Just remember: bring sun protection, book accommodations early, and save room for burnt ends. Welcome to Kansas City—where the world's game meets the world's loudest fans.
            </p>
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
                  <a href={`https://twitter.com/intent/tweet?text=Arrowhead%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
