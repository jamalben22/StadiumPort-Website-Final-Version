import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface LevisStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const LevisStadiumGuide: React.FC<LevisStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/levis-stadium-guide';

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
    const saved = localStorage.getItem('levis_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('levis_guide_rating');
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
      localStorage.setItem('levis_guide_saved', 'true');
    } else {
      localStorage.removeItem('levis_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('levis_guide_rating', rating.toString());
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
              src="/images/stadiums/levis-stadium-santa-clara-world-cup-2026.webp"
              alt="Exterior view of Levi's Stadium in Santa Clara, California, one of the official FIFA World Cup 2026 stadiums."
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
                  <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Levi's Stadium</span></li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
                Levi's Stadium: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">World Cup 2026 Venue Guide</span>
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <span>Santa Clara, CA</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-building-line text-lg"></i>
                  </div>
                  <span>Levi's Stadium</span>
                </div>
                <div className="flex items-center gap-3 group/meta">
                  <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                    <i className="ri-group-line text-lg"></i>
                  </div>
                  <span>68,500 Capacity</span>
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
               <li>• Hosting <strong>6 matches</strong> including a Round of 32 clash on <strong>July 1, 2026</strong></li>
               <li>• Capacity: <strong>68,500</strong> (expandable to 75,000)</li>
               <li>• Home of <strong>San Francisco 49ers</strong> (NFL)</li>
               <li>• Features LEED Gold certification and rooftop "Faithful Farm"</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Silicon Valley's World Cup Stage
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
            <span className="editorial-first-letter">L</span>ocated in the <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">San Francisco Bay Area</Link>, Levi's Stadium is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>. Picture this: you're standing inside one of America's most technologically advanced stadiums, surrounded by 68,500 roaring fans from every corner of the planet, as the world's best footballers compete under the California sun. Welcome to Levi's Stadium — the Bay Area's gateway to World Cup 2026, where cutting-edge innovation meets the beautiful game in the heart of Silicon Valley.
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            This isn't just any stadium. Levi's Stadium will host six FIFA World Cup 2026 matches: five group stage fixtures (June 13, 16, 19, 22, and 25) and one crucial Round of 32 clash on July 1. As the 49ers' gleaming home since 2014, this venue has already proven its mettle on football's biggest stages, hosting the 2016 Copa América Centenario, the 2017 Concacaf Gold Cup, and matches featuring international giants like F.C. Barcelona and A.C. Milan. Now it's ready to welcome the world.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-building-2-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Official Name:</span>
                  <span className="leading-relaxed ml-2">Levi's Stadium (San Francisco Bay Area Stadium)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-map-pin-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Location:</span>
                  <span className="leading-relaxed ml-2">Santa Clara, CA (40 miles south of SF)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-calendar-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Opened:</span>
                  <span className="leading-relaxed ml-2">July 17, 2014</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-group-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Capacity:</span>
                  <span className="leading-relaxed ml-2">68,500 (expandable to 75,000)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-shield-star-line text-amber-400 text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Primary Tenant:</span>
                  <span className="leading-relaxed ml-2">San Francisco 49ers (NFL)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-pencil-ruler-2-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Architect:</span>
                  <span className="leading-relaxed ml-2">HNTB Architecture</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-money-dollar-circle-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Cost:</span>
                  <span className="leading-relaxed ml-2">$1.27 billion</span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-sun-line text-[#01b47d] text-xl align-middle mr-2"></i>
                  <span className="leading-relaxed font-bold">Surface/Roof:</span>
                  <span className="leading-relaxed ml-2">Natural grass / Open-air</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>First NFL stadium to achieve LEED Gold certification</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>27,000-square-foot green roof with native plants</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Faithful Farm — first rooftop farm on an NFL stadium</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>State-of-the-art technology infrastructure with terabit WiFi</span>
              </div>
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
              Built in just five months — making it the fastest-constructed stadium in NFL history — Levi's Stadium opened on July 17, 2014, at a cost of $1.2 billion. The facility represents a dramatic modernization from the 49ers' previous home at windswept Candlestick Park, trading nostalgia for Silicon Valley sophistication.
            </p>
            <p>
              Since its debut, the stadium has become a magnet for mega-events. It hosted Super Bowl 50 in 2016, featuring an iconic halftime show with Coldplay, Bruno Mars, and Beyoncé, and has welcomed everyone from Taylor Swift to Beyoncé to Metallica for sold-out concerts. The 49ers Museum on-site celebrates one of the NFL's most storied franchises, honoring legends like Joe Montana, Jerry Rice, and Steve Young.
            </p>
            <p>
              The World Cup connection runs deep in Bay Area DNA. During the 1994 FIFA World Cup, nearby Stanford Stadium in Palo Alto hosted six matches with an average attendance of 81,736, including an epic July 4 encounter between the United States and Brazil. That tournament transformed American soccer culture, and now, 32 years later, Levi's Stadium becomes the region's second World Cup venue, carrying the torch into a new era.
            </p>
            <p>
              Looking ahead to 2026, the San Francisco 49ers plan to invest $120 million to upgrade the stadium's infrastructure, including premium seating improvements and scoreboard enhancements to meet FIFA standards.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-pantone-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Designed by internationally renowned firm HNTB, Levi's Stadium is an open-air venue with a natural grass field, featuring a seating capacity of 68,500 that places approximately two-thirds of fans (around 45,000) in the lower bowl — one of the largest lower bowls in the entire NFL. This creates an intimate, immersive atmosphere despite the venue's massive scale.
            </p>
            <p>
              The stadium's signature architectural element? The 27,000-square-foot green roof atop the suite tower on the west side, home to 16 native plant species. But the real showstopper is the Faithful Farm — a quarter-acre rooftop farm converted from 6,500 square feet of green roof in July 2016, featuring 40 rotational crops including herbs, tomatoes, peppers, and edible flowers harvested for dishes served in club spaces during games.
            </p>
            <p>
              Three solar bridges connect the main parking area to the stadium, incorporating hundreds of solar panels that contribute to the venue's renewable energy generation. Technology is woven into every corner: the stadium boasts terabit WiFi capacity — enough bandwidth to give every smartphone and tablet about 15MB of speed, even with a full house.
            </p>
            <p>
              The viewing experience is exceptional, with 174 luxury suites and approximately 8,500 club seats offering premium amenities, while most suites are positioned on one side of the field, allowing upper deck fans to sit closer to the action. Fair warning for summer matches: the east side of the stadium lacks overhangs, meaning afternoon games can be brutally hot for fans in direct sun. World Cup matches in June and early July? Pack sunscreen and water.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            What Matches to Expect
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Levi's Stadium will host six 2026 FIFA World Cup matches — five in the group stage and one in the Round of 32. While specific team matchups won't be determined until December 2025, expect electrifying atmospheres as the tournament's expanded 48-team format brings unprecedented global diversity to Santa Clara.
            </p>
            <p>
              Match times will likely be scheduled at noon, 3 PM, 6 PM, and 9 PM local Pacific Time, perfect for accommodating international broadcast audiences. The knockout round match on July 1 will be particularly intense — sixteen teams fighting for a spot in the Round of 16, with elimination on the line.
            </p>
            <p>
              The tournament is expected to bring hundreds of thousands of fans to the Bay Area, generating millions of dollars in economic impact and thousands of jobs. This will be the largest FIFA World Cup in history, and Levi's Stadium sits at the center of it all.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-route-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>

          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-train-line text-[#01b47d]"></i> By Light Rail (Recommended)</h4>
              <p className="mb-2">
                Valley Transportation Authority (VTA) Light Rail is the most direct route, with trains dropping passengers at Great America Station on the north side of the stadium. The station entrance is a 5-minute (0.32 km) walk from Levi's Stadium.
              </p>
              <ul className="list-disc ml-6 mb-2 text-sm">
                <li><strong>Routes:</strong> Orange and Green Lines serve the stadium</li>
                <li><strong>Frequency:</strong> Regular service plus enhanced matchday frequencies</li>
                <li><strong>Cost:</strong> Standard VTA fare (~$2.50); joint Caltrain + VTA Day Pass available</li>
              </ul>
              <p>
                VTA adds extra light rail service up to two hours before games and one hour after, with ambassadors at key locations to guide passengers. Pro tip: arrive early for the best connections and avoid post-match congestion.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-train-line text-[#01b47d]"></i> By Train from San Francisco</h4>
              <p className="mb-2">
                Caltrain riders from San Francisco should take the train to Mountain View Station, then transfer to VTA light rail Orange Line for the 10-minute ride to Great America Station. A joint Caltrain + VTA Day Pass costs an additional $7.50 compared to a Caltrain Day Pass and is valid through the last train of the night.
              </p>
              <ul className="list-disc ml-6 mb-2 text-sm">
                <li><strong>Journey time:</strong> Approximately 1 to 1.5 hours total from San Francisco</li>
                <li><strong>Cost:</strong> $7-$10 one-way</li>
              </ul>
              <p>
                For fans coming from the East Bay, BART connects with VTA at Milpitas Station; transfer to the VTA Orange Line which serves Levi's Stadium.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-car-line text-[#01b47d]"></i> By Car</h4>
              <p className="mb-2"><strong>Address:</strong> 4900 Marie P DeBartolo Way, Santa Clara, CA 95054</p>
              <p className="mb-2">
                Levi's Stadium is located near several major highways including US-101, State Route 237, and Interstate 880. The drive from San Francisco takes 45-60 minutes, though traffic during major events can extend the journey.
              </p>
              <p>
                <strong>Parking:</strong> Stadium lots range from $30-$50 depending on the event and location. Pre-purchase parking passes through official channels to avoid sellouts. Over 21,000 parking spaces are available, including use of the adjacent Santa Clara Golf and Tennis Club fairways during major events.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-taxi-line text-[#01b47d]"></i> By Rideshare / Taxi</h4>
              <p className="mb-2">
                Rideshare drop-off is along the bus stop south of Great America Parkway, while pick-up is located at Red Lot 7. Expect fares from San Francisco to run $40-$70 one-way, with significantly higher prices during surge pricing after matches. Post-match rideshare pick-up involves a 10-15 minute walk to designated zones, and wait times can be lengthy.
              </p>
              <p>
                Consider pre-booking airport transfer services through platforms like <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> for guaranteed rides without surge pricing headaches.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-bike-line text-[#01b47d]"></i> By Bike</h4>
              <p>
                Multiple bicycle routes lead to Levi's Stadium via San Tomas Aquino Creek Trail, Guadalupe River Trail, and John W. Christian Greenbelt Trail. Free bicycle valet parking is available outside Gates A and C, opening 3 hours before events and staying open 1 hour after.
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

          <div className="space-y-8 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-walk-line text-[#01b47d]"></i> Walking Distance (Under 1 Mile)</h4>
              <p>
                The Hilton Santa Clara and Hyatt Regency Santa Clara are both less than a 5-minute walk from Levi's Stadium, making them the ultimate convenience picks for World Cup matchdays. The Hilton features a heated outdoor pool, 24/7 fitness center with Peloton bikes, and California-inspired dining at La Fontana restaurant. Expect premium pricing during the tournament ($300-$500/night), but you can't beat rolling out of bed and strolling to the stadium.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-hotel-bed-line text-[#01b47d]"></i> Mid-Range Options (1-2 Miles)</h4>
              <p className="mb-2">
                Santa Clara Marriott is about 1 mile from the stadium (25-minute walk), featuring a heated outdoor pool, hot tub, fitness center, and two restaurants including Bosc + Bartlett for casual dining. Embassy Suites by Hilton Santa Clara Silicon Valley offers indoor heated pool, fitness center, and included cooked-to-order breakfast. These properties typically run $200-$350/night.
              </p>
              <p>
                For budget-conscious travelers, consider chain hotels in nearby Sunnyvale or San Jose (15-20 minutes away), easily accessible via light rail.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-home-heart-line text-[#01b47d]"></i> Alternative Accommodations</h4>
              <p>
                Airbnb and vacation rentals in Santa Clara neighborhoods offer excellent value for groups, with many properties just a 5-10 minute drive from the stadium, featuring full kitchens, outdoor spaces, and parking. Search platforms like <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Airbnb</a> or <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a> for options sleeping 4-8 guests.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-calendar-check-line text-[#01b47d]"></i> Planning Advice</h4>
              <p>
                Based on previous high-profile events at Levi's Stadium, hotel rooms in Santa Clara are expected to sell out quickly, with some properties requiring three-to-four-night minimum stays. Book early — ideally 6-12 months before the tournament — and consider staying in downtown San Jose (10 minutes away) or even San Francisco if you're planning to explore the broader Bay Area.
              </p>
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
          <ul className="list-disc pl-6 space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
            <li><strong>Arrive Early:</strong> VTA adds more light rail and buses two hours before games and one hour after. Plan to arrive at least 90-120 minutes before kickoff to navigate security, grab food, and soak in the pre-match atmosphere. World Cup crowds will be significantly larger than typical 49ers games.</li>
            <li><strong>What to Bring (Bag Policy):</strong> Levi's Stadium only allows clear bags, clear backpacks, fanny packs, or bags/purses measuring no larger than 12 x 6 x 12 inches. You can also bring a gallon-size clear plastic bag or small cloth bag (4.5 x 6.5 inches max). There is no bag check service, so don't bring anything that won't pass through security.</li>
            <li><strong>Beat the Heat:</strong> June matches may expose east-side seats to intense afternoon sun, as the stadium lacks overhangs on that side. Bring sunscreen, wear a hat, and stay hydrated. Sealed transparent water bottles are permitted.</li>
            <li><strong>Food & Drink Strategy:</strong> Levi's Stadium's Touchdown Terrace on the outer concourse features portable stands from Bay Area restaurants including Barbacco (Italian), Copita (Mexican), The Chairman (Asian street food), Michael Mina's Bourbon Pub, and Salt & Straw ice cream. Popular dishes include Dungeness Crab Pretzels, Korean Bibimbap Bowls, Poke Nachos, and famous Garlic Fries.</li>
            <li><strong>Best Gates/Sections:</strong> Gates A, B, and F are main entry points. For rideshare pick-up after matches, exit Gates A, B, or F to reach Red Lot 7. Lower bowl seats (sections 101-149) offer the best sightlines and atmosphere.</li>
            <li><strong>Post-Match Transport:</strong> Expect crowds. VTA provides extra light rail service for up to one hour following events, with security managing queues on the Gate A side facing Tasman Drive. Be patient — trains will be packed. Consider hanging around the stadium area for 30-45 minutes after the final whistle to let crowds thin, grabbing a post-match drink at nearby hotels.</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-time-line text-[#01b47d]"></i> Pre-Match: California's Great America</h4>
              <p>
                California's Great America, located adjacent to the stadium, is Northern California's premier amusement park with over 40 rides and attractions, including thrilling roller coasters like RailBlazer and Gold Striker, plus South Bay Shores waterpark included with admission. Perfect for families making a day of it.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-building-4-line text-[#01b47d]"></i> 49ers Museum</h4>
              <p>
                Located inside Levi's Stadium, the 49ers Museum takes visitors on an interactive journey featuring life-sized statues, stats, and biographies of legends like Jerry Rice, Steve Young, and Joe Montana, plus Bill Walsh's office recreation. Open on non-event days with free parking.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-store-2-line text-[#01b47d]"></i> Santana Row (15 minutes)</h4>
              <p>
                For upscale dining and shopping, head to Santana Row in San Jose — a Mediterranean-style outdoor complex with restaurants, bars, boutiques, and a great pre- or post-match scene.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-community-line text-[#01b47d]"></i> Downtown San Jose (15 minutes)</h4>
              <p>
                Explore the Rosicrucian Egyptian Museum (featuring 4,000 ancient Egyptian artifacts — the largest collection in western North America), the Tech Interactive science museum, or San Pedro Square Market for local food and drinks.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-school-line text-[#01b47d]"></i> Stanford University (15 minutes)</h4>
              <p>
                Drive to nearby Palo Alto to tour Stanford's beautiful campus, including the de Saisset Museum featuring Renaissance to contemporary art, with works by Ansel Adams and Andy Warhol.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-flag-line text-[#01b47d]"></i> Fan Zones & Tailgating</h4>
              <p>
                The Hilton Santa Clara operates "Tailg8" in their parking lot — open to the public 3 hours before Levi's Stadium events and 1 hour after, featuring food, drinks, and fellow fans. Official tailgating is permitted in ten designated stadium parking areas, with restrictions: use your parking spot only, no open-fire grilling, no glass containers, and all activities must cease at kickoff.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore San Francisco Bay Area */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-map-pin-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore San Francisco Bay Area
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The Bay Area's innovation hub and iconic landmarks make it a premier World Cup 2026 destination.</p>
          <div className="p-4 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
            <p className="leading-relaxed"><strong>Discover San Francisco Bay Area:</strong> Explore our complete <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">San Francisco Bay Area World Cup 2026 Guide</Link> for everything you need:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Hotels near Levi's Stadium in Santa Clara</li>
              <li>Getting to the stadium from San Francisco</li>
              <li>Golden Gate Bridge and top attractions</li>
              <li>Silicon Valley experiences</li>
              <li>Transportation and match day logistics</li>
            </ul>
          </div>
          <p className="leading-relaxed mb-4"><strong>Other West Coast Stadiums:</strong> Planning a West Coast tour? Check out <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">SoFi Stadium</Link> in Los Angeles or <Link to="/world-cup-2026-stadiums/lumen-field" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lumen Field</Link> in Seattle.</p>
          <p className="leading-relaxed"><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-check-double-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Levi's Stadium is where Silicon Valley's tech-forward innovation meets the world's most passionate sporting event. This isn't a historic coliseum steeped in centuries of football lore — it's a gleaming, 21st-century marvel designed to deliver comfort, technology, and accessibility at every turn. The LEED Gold certification, rooftop farm, and terabit WiFi aren't just gimmicks; they represent a stadium built for the future.
            </p>
            <p>
              <strong>Who will love it most?</strong> Travelers who appreciate modern amenities, tech-savvy fans who want seamless connectivity, and anyone who values efficient transport links and premium facilities. The lack of shade on hot days is a legitimate drawback, but thoughtful planning (sunscreen, hydration, strategic seating) will see you through.
            </p>
            <div className="p-6 rounded-xl bg-[#01b47d]/10 dark:bg-slate-800/70 border-l-4 border-[#01b47d] mb-6">
              <p className="leading-relaxed">
                <strong>One unforgettable experience you shouldn't miss:</strong> Arrive early to explore Touchdown Terrace on the outer concourse, sampling dishes from Bay Area culinary stars while soaking in the global energy of World Cup fans from every nation. Then find your seat in that massive lower bowl, feel the stadium shake with 68,500 voices, and witness history unfold in the heart of Silicon Valley.
              </p>
            </div>
            <p>
              <strong>Act now:</strong> With six World Cup matches on tap and hotels expected to sell out months in advance, book your accommodation early through <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Booking.com</a>, <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Expedia</a>, or <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Airbnb</a>. Secure transport plans (Caltrain + VTA combo tickets or pre-booked transfers), and get ready for the summer of a lifetime.
            </p>
            <p>
              Welcome to Levi's Stadium. Welcome to World Cup 2026. The world is coming to Silicon Valley — will you be there?
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
                  <a href={`https://twitter.com/intent/tweet?text=Levi's%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
