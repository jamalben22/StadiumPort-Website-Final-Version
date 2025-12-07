import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface GilletteStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const GilletteStadiumGuide: React.FC<GilletteStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/gillette-stadium-guide';

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
    const saved = localStorage.getItem('gillette_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('gillette_guide_rating');
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
      localStorage.setItem('gillette_guide_saved', 'true');
    } else {
      localStorage.removeItem('gillette_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('gillette_guide_rating', rating.toString());
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
              src="/images/stadiums/gillette-stadium-foxborough-world-cup-2026.webp"
              alt="Inside view of Gillette Stadium in Foxborough, Massachusetts, hosting FIFA World Cup 2026 games in the United States."
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
                  <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Gillette Stadium</span></li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
                Gillette Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">World Cup 2026 Venue Guide</span>
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <span>Foxborough, MA</span>
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
                  <span>70,000 WC Capacity</span>
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
               <li>• Hosting <strong>7 matches</strong> including a Quarterfinal</li>
               <li>• Capacity: <strong>~70,000</strong> (World Cup configuration)</li>
               <li>• Home of <strong>New England Patriots</strong> (NFL) & <strong>Revolution</strong> (MLS)</li>
               <li>• Features iconic lighthouse and 360-degree connectivity</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-flag-line text-[#01b47d]"></i>
            New England's Fortress Ready for the World
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="leading-relaxed mb-6">
            <span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Boston</Link>, Gillette Stadium is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>. Set in Foxborough, approximately 22 miles southwest of Boston, this modern arena combines efficiency with fan-first design, delivering a top-tier matchday experience and stadium operations that rival the best in North America. Hosting seven matches—including a quarterfinal—it represents a stadium that actually works, surrounded by infrastructure designed for massive crowds and a proven record of sellouts since 2002.
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
                <p className="leading-relaxed"><i className="ri-building-2-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Official Name:</strong> Gillette Stadium (Boston Stadium during World Cup 2026)</p>
                <p className="leading-relaxed"><i className="ri-map-pin-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Location:</strong> Foxborough, Massachusetts (22 miles southwest of Boston)</p>
                <p className="leading-relaxed"><i className="ri-calendar-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Opened:</strong> May 11, 2002</p>
                <p className="leading-relaxed"><i className="ri-group-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Capacity:</strong> 64,628 (standard) / ~70,000 (World Cup)</p>
            </div>
            <div className="space-y-4">
                <p className="leading-relaxed"><i className="ri-shield-star-line text-amber-400 text-xl align-middle mr-2"></i> <strong>Primary Tenants:</strong> New England Patriots (NFL), New England Revolution (MLS)</p>
                <p className="leading-relaxed"><i className="ri-briefcase-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Owner/Operator:</strong> Kraft Sports Group</p>
                <p className="leading-relaxed"><i className="ri-pencil-ruler-2-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Architect:</strong> HOK Sport (now Populous)</p>
                <p className="leading-relaxed"><i className="ri-star-line text-[#01b47d] text-xl align-middle mr-2"></i> <strong>Notable Features:</strong> 218-foot lighthouse observation deck, largest outdoor curved-radius video board in North America</p>
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
          <p className="leading-relaxed mb-6">
            Gillette Stadium rose from necessity and ambition. For three decades, the Patriots endured Foxboro Stadium—a bare-bones concrete structure so basic it required portable toilets to supplement inadequate plumbing. By the late 1990s, owner Robert Kraft knew his team needed a modern home to compete financially in the NFL. After failed proposals for stadiums in Hartford, Providence, and South Boston, Kraft decided to self-fund a $325 million venue on the same Foxborough site.
          </p>
          <p className="leading-relaxed mb-6">
            Construction began in March 2000, and just 26 months later, the stadium opened its gates. Kraft personally oversaw the design, insisting on a distinctive "front door" entrance inspired by Disneyland, complete with a lighthouse and bridge referencing New England maritime heritage. The venue immediately became synonymous with winning—the Patriots have claimed six Super Bowl titles since moving here, establishing one of sport's greatest dynasties.
          </p>
          <p className="leading-relaxed mb-6">
            But World Cup history runs deeper here than you might expect. The old Foxboro Stadium hosted six matches during the 1994 FIFA World Cup, including a quarterfinal where Italy defeated Spain 2-1 before 53,400 spectators. Diego Maradona scored his final World Cup goal on that very ground. Now, 32 years later, the sport returns to hallowed turf—only this time in a world-class facility that ranks second among all US World Cup venues for quality and accessibility.
          </p>
          <p className="leading-relaxed">
            The stadium underwent a dramatic $250 million renovation completed in 2023, adding the signature Lighthouse tower, the massive north end video board, and enhanced connectivity throughout the venue. For World Cup 2026, Gillette will temporarily shed its corporate name to become "Boston Stadium," following FIFA's sponsor-neutrality requirements, though locals will undoubtedly still call it by its familiar name.
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
            Gillette Stadium strikes an intriguing balance—it's unmistakably modern yet distinctly regional. The lighthouse and pedestrian bridge at the north entrance aren't merely decorative; they're deliberate nods to New England's maritime identity, creating a sense of place that many soulless NFL venues lack. The recently added 218-foot lighthouse offers 360-degree observation decks, providing stunning views of the stadium bowl, surrounding foliage (spectacular during autumn), and the Neponset River that the Krafts helped restore.
          </p>
          <p className="leading-relaxed mb-6">
            The seating bowl follows a classic three-tier design, with every seat angled toward the 50-yard line—a rarity that delivers exceptional sightlines from virtually anywhere in the house. The middle tier houses 5,876 club seats within the Cross Insurance Clubs, expansive spaces with cathedral ceilings and floor-to-ceiling glass overlooking the field. The 92 luxury suites are among the NFL's largest, ranging from 800 to 2,700 square feet.
          </p>
          <p className="leading-relaxed mb-6">
            Acoustics here are genuinely impressive for an open-air venue. The steep seating rake traps noise and directs it toward the field, creating an intimidating environment that has contributed to the Patriots' legendary home-field advantage. That same atmosphere should translate beautifully to football matches, where supporter sections can generate authentic cauldron conditions.
          </p>
          <p className="leading-relaxed">
            The 2023 renovations transformed the fan experience. The north end video board measures 22,000 square feet—the largest curved-radius outdoor board at any sports venue in the United States. Combined with the south end board, you're looking at three-quarters of an acre of video displays. New hospitality spaces like the 50,000-square-foot G-P Atrium and connectivity bridges mean you can now circumnavigate the entire upper concourse, a feature sorely lacking in the stadium's first two decades.
          </p>
          <p className="leading-relaxed mt-4">
            Accessibility features are comprehensive, with wheelchair-accessible seating throughout all levels, adult changing tables in first-aid facilities, and dedicated accessible parking with shuttle service. The stadium is also completely cashless, with cash-to-card kiosks available if you prefer physical currency.
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
            Gillette Stadium will host seven FIFA World Cup 2026 matches across four weeks, making it one of the tournament's busiest venues. The schedule includes five group-stage matches (June 13, 16, 19, 23, and 26), one Round of 32 match (June 29), and the tournament's first quarterfinal on July 9. That quarterfinal represents the highest-stakes match awarded to any New England venue in World Cup history—potentially featuring global heavyweights battling for a semifinal berth.
          </p>
          <p className="leading-relaxed mb-6">
            Match times will likely fall at noon, 3 p.m., 6 p.m., and 9 p.m. Eastern Time, accommodating both North American audiences and global television markets. Expect capacity crowds for every fixture—Gillette has sold out every home event since 2002, and World Cup demand will be extraordinary. The stadium's ability to accommodate up to 70,000 for special events means FIFA will likely push capacity beyond the standard 64,628.
          </p>
          <p className="leading-relaxed">
            The atmosphere should be electric. New England sports fans are notoriously passionate, knowledgeable, and vocal. While this region isn't traditionally a football hotbed compared to other US markets, the World Cup transcends normal sporting boundaries. The large Portuguese, Brazilian, Irish, and Italian communities in the greater Boston area will ensure robust, authentic support for certain nations.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-route-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>
          <p className="leading-relaxed mb-6">
            Foxborough sits at the convergence of major northeastern highways, roughly equidistant from Boston and Providence. Here's how to navigate matchday transport:
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-train-line text-[#01b47d]"></i> By MBTA Commuter Rail (Recommended)</h4>
              <p className="leading-relaxed mb-4">
                The star option for World Cup matches. Special event trains will run from Boston's South Station, with stops at Back Bay and Dedham Corporate Center, directly to Foxboro Station—located just a quarter-mile from the stadium via a pedestrian walkway. Round-trip tickets cost $20, and trains are timed to arrive about an hour before kickoff and depart 30 minutes after the final whistle.
              </p>
              <p className="leading-relaxed mb-4">
                Trains also run from Providence, Rhode Island (T.F. Green Airport station), with stops at South Attleboro, Attleboro, and Mansfield. This route serves fans traveling from southern New England and New York via Amtrak connections.
              </p>
              <p className="leading-relaxed mb-4">
                Journey times: 50-70 minutes from Boston South Station, 45 minutes from Providence. Book tickets in advance through the MBTA mTicket app—they sell out quickly for major events. The MBTA is expanding Foxboro Station infrastructure specifically for the World Cup, adding temporary high-level platforms to accommodate expected crowds of 20,000 riders per match.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-car-line text-amber-400"></i> By Car</h4>
              <p className="leading-relaxed mb-4">
                If driving, take I-95 to Exit 9 (Route 1 South from the north) or I-495 to Exit 14A (Route 1 North from the south). Parking lots open four hours before kickoff. Stadium-side prepaid parking passes (available online) cost around $25-40 and are essential—free parking is available on the non-stadium side of Route 1, but you'll face a 10-15 minute walk and post-match traffic chaos.
              </p>
              <p className="leading-relaxed">
                Journey times: 35 minutes from Boston Logan Airport (without traffic), 25 minutes from downtown Providence. Warning: Route 1 becomes a parking lot after events. Budget an extra hour for exit delays.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-taxi-line text-[#01b47d]"></i> By Rideshare/Taxi</h4>
              <p className="leading-relaxed mb-4">
                Uber and Lyft operate designated drop-off and pickup zones in Lot 15 near the CVS Health Gate. Expect surge pricing before and after matches—sometimes 2-3x normal rates. Rideshare from Boston typically costs $60-100 each way, from Providence $45-75.
              </p>
              <p className="leading-relaxed">
                Smart tip: Walk 10-15 minutes away from the stadium to a nearby hotel or Patriot Place for cheaper, faster pickups.
              </p>
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
            Foxborough itself offers limited accommodation, but the stadium's location between two major cities creates options across all budgets. Book early—World Cup demand will be intense.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-building-2-line text-[#01b47d]"></i> On-Site (Premium)</h4>
              <p className="leading-relaxed mb-4">
                <strong>Renaissance Boston Patriot Place Hotel</strong> and <strong>Hilton Garden Inn Foxborough Patriot Place</strong> sit directly adjacent to the stadium within Patriot Place. You can literally walk to your seat in five minutes. Both offer indoor pools, on-site dining, and pet-friendly rooms. Expect premium pricing during the tournament, but the convenience is unmatched.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-hotel-bed-line text-[#01b47d]"></i> Nearby Foxborough/Mansfield (Mid-Range)</h4>
              <p className="leading-relaxed mb-4">
                Several chain hotels cluster around the stadium within 2-5 miles: Hampton Inn & Suites Foxborough/Mansfield, Sonesta Select Boston Foxborough Mansfield, Residence Inn Foxborough, and Comfort Inn Foxboro Mansfield. These typically run $150-250/night normally—expect $300-500 during World Cup. Most offer free parking and breakfast. Convenient for driving to matches but limited nightlife.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-building-line text-[#01b47d]"></i> Boston (30-40 minutes, All Budgets)</h4>
              <p className="leading-relaxed mb-4">
                Staying in Boston proper provides far richer cultural experiences, dining, and nightlife. The HI Boston Hostel near Chinatown offers budget beds ($40-70), while mid-range chains like Hampton Inn, Courtyard, and Fairfield cluster around Back Bay and Cambridge ($200-350/night). Luxury seekers should consider The Liberty Hotel (converted jail), Four Seasons, or Mandarin Oriental ($500-900). Boston's MBTA train access to the stadium makes this viable despite the distance.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-map-pin-2-line text-[#01b47d]"></i> Providence, Rhode Island (Value Option)</h4>
              <p className="leading-relaxed mb-4">
                Often overlooked, Providence offers better value than Boston with excellent train connections to the stadium. Consider Graduate Providence, Omni Providence, or Renaissance Providence ($150-300). The city has a fantastic food scene, WaterFire art installations, and Brown University's campus.
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
            <li><strong>Arrive Early:</strong> Gates open 2-3 hours before kickoff. Security screening takes time, especially with FIFA-mandated protocols. Aim to arrive 90 minutes early to explore the stadium, grab food, and soak in pre-match atmosphere.</li>
            <li><strong>Bag Policy is Strict:</strong> Only clear plastic bags (max 12" x 12" x 6") or small clutches (max 6.5" x 4.5") are permitted. No backpacks, purses, or camera bags. Leave non-compliant bags at your hotel—the stadium doesn't offer storage.</li>
            <li><strong>Best Entrances:</strong> The main Ticketmaster Gate (north end, by the lighthouse) is spectacular but crowded. Side gates at CVS Health (west) and Enel X (east) typically move faster. Upper deck ticket holders should use designated upper-level entrances to avoid climbing stairs through lower concourses.</li>
            <li><strong>Food & Drink:</strong> Gillette ranks first among NFL venues for food safety. Highlights include Backyard Barbecue (pulled pork, brisket), Ale House (pizza, pretzel logs), and international options. Everything is pricey ($10-18 for meals, $12-15 for beer). The stadium is completely cashless—credit/debit only. Smart move: Eat at Patriot Place before entering.</li>
            <li><strong>What to Bring:</strong> Photo ID (required for alcohol, strictly enforced), phone/mobile ticket, layers (New England weather is unpredictable), sunscreen and hat for day matches.</li>
            <li><strong>Post-Match Transport:</strong> Trains depart 30 minutes after the final whistle—don't dawdle. If driving, consider waiting 30-45 minutes in Patriot Place bars/restaurants to let traffic clear. Rideshares are chaos immediately post-match; walk 10 minutes toward Route 1 hotels for easier pickups.</li>
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
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-shopping-bag-3-line text-[#01b47d]"></i> Patriot Place (Adjacent)</h4>
              <p className="leading-relaxed">
                This open-air shopping and entertainment complex surrounds the stadium with 1.3 million square feet of retail, dining, and activities. Pre-match atmosphere thrives here with 19 restaurants and bars including Six String Grill & Stage, Scorpion Bar, and Davio's. The Hall at Patriot Place houses the Patriots Hall of Fame—even non-NFL fans appreciate the interactive exhibits.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-building-line text-[#01b47d]"></i> Boston (30-40 minutes)</h4>
              <p className="leading-relaxed">
                One of America's most walkable, historic cities. The Freedom Trail connects 16 Revolutionary War sites through downtown. Fenway Park offers tours. The North End serves authentic Italian cuisine. Harvard and MIT campuses in Cambridge showcase academic America.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-goblet-line text-amber-400"></i> Craft Beer Trail</h4>
              <p className="leading-relaxed">
                New England excels at craft brewing. Wormtown Brewery at Patriot Place pours local favorites. Sam Adams brewery in Boston offers tours. Tree House Brewing in Charlton (30 minutes west) ranks among America's best—worth the detour for beer enthusiasts.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-anchor-line text-[#01b47d]"></i> Cape Cod (60-75 minutes)</h4>
              <p className="leading-relaxed">
                If extending your stay, Cape Cod's beaches, seafood shacks, and charming towns offer classic New England coastal experiences. Provincetown at the tip combines beaches with vibrant arts and LGBTQ+ culture.
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
            Gillette Stadium might lack the architectural bombast of newer World Cup venues, but it compensates with something more valuable: functionality married to character. This is a venue that actually works—transportation exists, infrastructure scales for massive crowds, and the surrounding Patriot Place ecosystem provides pre- and post-match experiences that isolated stadiums can't match.
          </p>
          <p className="leading-relaxed mb-6">
            The quarterfinal on July 9 could be the match of your life—imagine witnessing the last eight teams battling with a World Cup semifinal at stake, in a stadium that knows how to host championship moments. For international visitors, this is your gateway to understanding American sports culture while experiencing the beauty and history of New England.
          </p>
          <div className="p-6 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
            <p className="leading-relaxed">
              <strong>One unforgettable thing not to miss:</strong> Climb the lighthouse observation deck before kickoff. The 360-degree views of the stadium bowl, the surrounding forests (stunning in summer green), and the entire Patriot Place complex provide perspective on how this venue sits in its landscape—uniquely New England, uniquely American, and for seven special days in 2026, uniquely global.
            </p>
          </div>
          <p className="leading-relaxed">
            Book your accommodation early through <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a>, secure train tickets as soon as they go on sale, and prepare for World Cup football in one of the tournament's most underrated venues. Boston Stadium awaits.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Boston */}
        <section className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Boston
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>Boston's rich history and New England charm create an unforgettable World Cup 2026 experience.</p>
            <div>
              <h4 className="editorial-h4 mb-2">Discover Boston</h4>
              <p>Explore our complete <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Boston World Cup 2026 Guide</Link> for everything you need:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Where to stay near Gillette Stadium</li>
                <li>Getting to the stadium from Boston</li>
                <li>Historic attractions and the Freedom Trail</li>
                <li>Best seafood and local cuisine</li>
                <li>Transportation and match day tips</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 mb-2">Other Northeast Stadiums</h4>
              <p>Planning a Northeast circuit? Check out <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">MetLife Stadium</Link> in NY/NJ or <Link to="/world-cup-2026-stadiums/lincoln-financial-field-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia.</p>
            </div>
            <p><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          </div>
          <hr className="editorial-divider" />
        </section>
        
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
                  <a href={`https://twitter.com/intent/tweet?text=Gillette%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
