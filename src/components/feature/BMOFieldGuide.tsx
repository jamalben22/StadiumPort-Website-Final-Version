import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

interface BMOFieldGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const BMOFieldGuide: React.FC<BMOFieldGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/bmo-field-guide';

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
    const saved = localStorage.getItem('bmofield_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('bmofield_guide_rating');
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
      localStorage.setItem('bmofield_guide_saved', 'true');
    } else {
      localStorage.removeItem('bmofield_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('bmofield_guide_rating', rating.toString());
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
               <li>• Hosting Canada's first-ever men's World Cup match (June 12, 2026)</li>
               <li>• Capacity: <strong>45,736</strong> (World Cup configuration)</li>
               <li>• Home of <strong>Toronto FC</strong> (MLS) and <strong>Argonauts</strong> (CFL)</li>
               <li>• Located at Exhibition Place, Toronto</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d]"></i>
            Canada's Soccer Cathedral Prepares for Its Biggest Moment
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <div>
            <p className="leading-relaxed mb-6"><span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Toronto</Link>, BMO Field is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>. On June 12, 2026, history will be made when Canada's men's national team takes the pitch for the country's first-ever men's FIFA World Cup match on home soil. This lakefront venue—Canada's original soccer-specific stadium—has spent nearly two decades building toward this moment, evolving from a modest 20,000-seat arena into a crown jewel ready to welcome the world's greatest tournament.</p>
            <p className="leading-relaxed">
              BMO Field will host six World Cup matches total, including five group stage fixtures and one knockout round game, with a temporarily expanded capacity reaching 45,736 seats. The stadium sits on Exhibition Place, where Toronto's sporting heritage runs deep, offering international fans an intimate yet electric atmosphere that European visitors will recognize—this is no cavernous NFL bowl, but a purpose-built football stadium where every seat brings you close to the action. Toronto joins Vancouver as Canada's two host cities for the tournament, which will be jointly staged across 16 venues in the United States, Mexico, and Canada.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-map-pin-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Official Name:</strong> BMO Field (will be "Toronto Stadium" during World Cup per FIFA naming protocols)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-map-2-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Location:</strong> Exhibition Place, Old Toronto, Ontario
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-calendar-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Opened:</strong> April 28, 2007
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-group-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Capacity:</strong> 45,736 (World Cup 2026) / 30,000 (standard)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-shield-star-line text-amber-400 dark:text-amber-300 text-xl"></i>
              <p className="leading-relaxed">
                <strong>Primary Tenants:</strong> Toronto FC (MLS), Toronto Argonauts (CFL)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-community-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Original Architect:</strong> Brisbin Brook Beynon Architects
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-building-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Expansion Architect:</strong> Gensler (2014-2016)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-football-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Surface Type:</strong> Natural grass (Kentucky Bluegrass)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-umbrella-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <p className="leading-relaxed">
                <strong>Roof Type:</strong> Partial canopy cover (east, west, and south stands)
              </p>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <i className="ri-star-line text-gold-400 dark:text-amber-300 text-xl"></i>
              <p className="leading-relaxed">
                <strong>Notable Features:</strong> Corner-mounted LED video boards (50 x 30 feet), rooftop hospitality patio, heated pitch system
              </p>
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
          <div>
            <p className="leading-relaxed mb-6">
              BMO Field rose from the footprint of Exhibition Stadium, the former home of the Toronto Blue Jays and Argonauts, after its 1999 demolition. Built specifically to host the 2007 FIFA U-20 World Cup and serve as the inaugural home for Major League Soccer's Toronto FC, this venue represented a watershed moment for Canadian soccer—the nation's first purpose-built football stadium in the modern era.
            </p>
            <p className="leading-relaxed mb-6">
              Over 260,000 fans attended 12 matches during the 2007 U-20 World Cup, including the final won by Argentina. Since then, BMO Field has witnessed Toronto FC's transformation from expansion side to continental champions, hosting the 2017 MLS Cup final victory—a defining moment in Canadian club soccer. The stadium also hosted the 2014 FIFA U-20 Women's World Cup, the 104th Grey Cup in 2016, and even the NHL's Centennial Classic outdoor game in 2017, which drew over 40,000 spectators.
            </p>
            <p className="leading-relaxed">
              For the World Cup, Toronto is investing $146 million in comprehensive upgrades, including 17,000 temporary seats (10,000 north, 7,000 south), four new LED video boards, upgraded Wi-Fi and sound systems, luxury suites, and a striking rooftop patio that will remain as a permanent legacy feature. The stadium underwent major renovations between 2014-2016, adding an upper deck, partial roof coverage, and expanding from its original 21,500 capacity to 30,000.
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
          <div>
            <p className="leading-relaxed mb-6">
              BMO Field's design philosophy prioritizes intimacy and atmosphere over sheer size. Designed by Brisbin Brook Beynon Architects with structural engineering by Halcrow-Yolles, the original stadium featured straightforward pre-engineered steel bleacher systems wrapped in light-colored brick facades. The three-sided bowl design deliberately kept fans close to the pitch, creating the intense atmosphere that MLS supporters crave.
            </p>
            <p className="leading-relaxed mb-6">
              The 2014-2016 transformation by Gensler brought European stadium sophistication to Toronto's waterfront. The east stand gained a dramatic upper tier, while a striking canopy roof now shelters most permanent seating—critical for Toronto's unpredictable weather. Four corner pillars support this modern covering, which doesn't diminish the open-air character but provides welcome protection from rain and snow.
            </p>
            <p className="leading-relaxed mb-6">
              The new corner-mounted LED video boards measure 50 by 30 feet with over five million pixels, ensuring every replay is crystal-clear from any seat. Sightlines remain excellent throughout, with the steeper upper deck bringing fans surprisingly close to the action. The north end features standing sections where Toronto FC's most passionate supporters create a wall of red and generate the deafening noise that visiting teams dread.
            </p>
            <p className="leading-relaxed">
              For 2026, temporary seating will extend the bowl at both ends, creating a more enclosed atmosphere for the World Cup while maintaining the stadium's soccer-specific character. Permanent additions include new hospitality areas, with a rooftop patio accommodating 1,000 fans, a centre-field lounge on the west side, and renovated luxury suites.
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
          <div>
            <p className="leading-relaxed mb-6">
              BMO Field will host six FIFA World Cup 2026 matches: five group stage games on June 12, 17, 20, 23, and 26, plus one Round of 32 knockout match on July 2. Canada's opening match on June 12 will mark the first-ever men's World Cup fixture played on Canadian soil—a historic occasion that promises to sell out within seconds and generate an atmosphere unlike anything Toronto has experienced.
            </p>
            <p className="leading-relaxed">
              Expect capacity crowds of 45,000+ for every match, with the intimate stadium design ensuring noise levels rival South American venues. Match times will likely be scheduled for noon, 3 p.m., 6 p.m., and 9 p.m. local time (Eastern Time). The stadium's lakefront location means afternoon games could feature stunning views across Lake Ontario, while evening fixtures will showcase Toronto's illuminated skyline.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>
          <p className="leading-relaxed">
            BMO Field's location at Exhibition Place, just west of downtown, offers multiple convenient transport options—though matchday crowds will test every system. Plan ahead and allow extra time.
          </p>

          {/* Transport Options */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-train-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>By GO Train (Recommended):</strong>  Exhibition GO Station sits directly adjacent to BMO Field, just one stop west of Union Station on the Lakeshore West line. The journey takes 7 minutes and costs $3-5. Trains run every 20 minutes normally, with increased service on event days. Exit the station and you're a 2-minute walk from the north entrance. This is your fastest, most reliable option from downtown or Pearson Airport (via Union Station).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-train-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>By TTC Streetcar:</strong>  From Union Station, take the 509 Harbourfront streetcar toward Fleet Loop, then transfer to the 509/511 replacement bus toward Lake Shore and Bathurst. Walk south on Nova Scotia Avenue to reach the stadium. From Bathurst Station on Line 2 (Bloor), board the 511 streetcar using the same transfer. Journey time: 25-35 minutes from downtown.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-bus-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>By TTC Bus:</strong>  From Dufferin Station on Line 2, take the 29 bus south directly to Exhibition, with service operating every few minutes on event days. This route deposits you at the north end of Exhibition Place, a 5-minute walk to BMO Field.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-subway-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>Future Transit:</strong>  Toronto's under-construction Ontario Line subway will eventually connect Exhibition GO Station directly to the city's northeast, reducing travel time from Don Mills & Eglinton to under 30 minutes. This won't be complete for the 2026 World Cup, but demonstrates the stadium's long-term transit connectivity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-car-line text-amber-400 dark:text-amber-300 text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>By Car (Not Recommended for World Cup):</strong>  Take the Gardiner Expressway to the Lake Shore Boulevard West exit, then turn left onto Ontario Drive. However, parking costs $25-30 per game normally—expect higher World Cup pricing—and lots fill hours before kickoff. Exhibition Place offers 5,000 parking spots across multiple surface lots and an underground garage at Enercare Centre. Traffic congestion will be severe on matchdays; driving is genuinely your worst option.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-taxi-line text-[#01b47d] dark:text-[#01b47d] text-xl"></i>
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>By Rideshare/Taxi:</strong>  Drop-off zones are located along Princes' Boulevard and near Gate 1. During World Cup, expect surge pricing and potential road closures. Budget $20-35 from downtown hotels, more from the airport.
                </p>
              </div>
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
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="leading-relaxed">
                <strong>Liberty Village (5-10 minute walk):</strong>  This trendy neighborhood north of the stadium offers the perfect base for World Cup fans. Once an industrial area, Liberty Village now buzzes with converted lofts, modern condos, and a thriving restaurant scene. Sonder at The Liberty provides stylish apartment-style accommodations with full kitchens and rooftop views, starting around $150-200 CAD per night. Short-term rentals through Airbnb are plentiful here, offering better value than hotels.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>King West & Entertainment District (15-20 minute transit):</strong>  Toronto's nightlife epicenter puts you near world-class dining and the city's best bars. Mid-range chains like Holiday Inn and Marriott properties cluster here ($200-300 CAD), while boutique options include the Drake Hotel and Gladstone House ($250-350 CAD). The 504 King streetcar connects directly to Liberty Village.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Downtown Core (20-30 minute transit):</strong>  Maximum sightseeing convenience but higher prices. Budget options include HI Toronto Hostel ($40-60 CAD dorm beds). Luxury seekers should consider One King West Hotel & Residence, a stunning conversion of the historic Dominion Bank Building with suites from $300 CAD. The Ritz-Carlton Toronto and Shangri-La offer five-star indulgence ($500+ CAD).
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Waterfront (10-15 minute walk):</strong>  Hotel X Toronto sits directly on Exhibition Place grounds, offering rooftop bars with CN Tower views and literally stumbling-distance access to BMO Field. Premium pricing ($300-500 CAD) but unmatched convenience.
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="leading-relaxed">
                <strong>Booking Strategy:</strong>  Reserve accommodation immediately when World Cup tickets are confirmed. Toronto hotel inventory will evaporate fast, particularly in Liberty Village and along transit lines. Consider Booking.com's free cancellation policies for flexibility, or lock in Airbnb properties with host SuperHost status for reliability.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300"></i>
            Matchday Tips & Insider Advice
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="leading-relaxed">
                <strong>Timing:</strong>  Arrive 2-3 hours early for World Cup matches. Security protocols will be extensive, and FIFA's stricter screening processes will create longer queues than regular TFC games. Gates typically open 90 minutes before kickoff, but expect this extended for the tournament. The pre-match atmosphere at Liberty Village bars is part of the experience—don't miss it.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Entry Points:</strong>  During renovations and potentially for World Cup, southern gates may be prioritized entry points, with northern access potentially restricted. Check your ticket carefully for designated gate information and follow FIFA's instructions.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Bag Policy:</strong>  BMO Field enforces a clear bag policy. Small transparent bags are permitted; leave backpacks and large purses at your hotel. Prohibited items include outside food/beverages, professional cameras, noisemakers, and large flags/banners.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Food & Drink:</strong>  Inside, look for the signature Porchetta Sandwich (carved to order), creative poutine varieties at the Frites stand (Jerk Chicken, Steak & Ale, Vegan Curry), and Pizza Pizza for quick slices. Beer selection includes Labatt products and local craft options from Mill St. Brewery and Brickworks Ciderhouse. Prices run $10-12 for beer, $5 for soft drinks—typical stadium markup. The venue operates cashless, so bring debit/credit cards only.
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="leading-relaxed">
                <strong>Weather Preparation:</strong>  Toronto in June/July can be hot (25-30°C / 77-86°F) and humid, but afternoon thunderstorms appear suddenly. The partial roof covers most seats but not all. Bring sunscreen for day matches and a light rain jacket for evening games. Sections 113-124 (west side) offer best shade/cover.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Exit */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-walk-line text-[#01b47d]"></i>
            Post-Match Exit
          </h3>
          <div>
            <p className="leading-relaxed">
              Exhibition GO Station will be mobbed after final whistle—expect 20-30 minute platform waits for World Cup crowds. Consider walking north through Liberty Village (10 minutes) to catch less-crowded TTC options on King Street, or linger at nearby bars to let crowds disperse.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-2-line text-[#01b47d]"></i>
            Things to Do Nearby
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="leading-relaxed">
                <strong>Pre-Match Atmosphere:</strong>  Brazen Head Irish Pub (165 East Liberty Street) is Toronto FC fans' spiritual home, just a 10-12 minute walk from the stadium. Arrive early for their two-level patio—it fills with red-clad supporters 2 hours before kickoff. Other Liberty Village favorites include LOCAL Public Eatery (sports bar atmosphere), Liberty Commons (Oliver & Bonacini's craft brewery), and Left Field Brewery.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Exhibition Place & Waterfront:</strong>  The stadium sits on Exhibition Place grounds, home to Coca-Cola Coliseum, Enercare Centre, and Ontario Place. During summer, this lakefront area buzzes with festivals and events. The Martin Goodman Trail offers scenic waterfront cycling and walking routes stretching east toward downtown.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Downtown Attractions (15-30 minutes away):</strong>  The CN Tower (553 meters tall) dominates Toronto's skyline, offering 360-degree observation decks and the thrilling EdgeWalk experience. Ripley's Aquarium of Canada sits adjacent to the tower, while the Hockey Hall of Fame celebrates Canada's national passion. Rogers Centre (home of the Blue Jays) and Scotiabank Arena (Raptors and Maple Leafs) are within walking distance of each other downtown.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                <strong>Neighborhoods Worth Exploring:</strong>  Kensington Market (30 minutes by transit) offers vintage shops and multicultural eateries in a bohemian setting. The Distillery District (25 minutes) showcases Victorian industrial architecture converted into galleries, restaurants, and boutiques. Queen Street West (15 minutes from Liberty Village) pulses with independent fashion, record stores, and Toronto's coolest cafes.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Celebrations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-beer-line text-amber-400 dark:text-amber-300"></i>
            Post-Match Celebrations
          </h3>
          <div>
            <p className="leading-relaxed">
              Beyond Liberty Village bars, head to King West's Entertainment District for late-night clubs and international cuisine. For craft beer enthusiasts, Bellwoods Brewery (Trinity Bellwoods area) and Blood Brothers Brewing (near Exhibition) showcase Ontario's thriving beer scene.
            </p>
          </div>
          <p className="leading-relaxed mt-4">
            Planning matches across North America? Consider <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">BC Place</Link> in Vancouver or <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">MetLife Stadium</Link> in New York/New Jersey.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Toronto */}
        <section className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Toronto
          </h3>
          <div className="space-y-6">
            <p className="leading-relaxed">Toronto's world-class attractions and multicultural vibrancy make it a premier World Cup 2026 destination.</p>
            <div>
              <h4 className="editorial-h4 mb-2">Discover Toronto</h4>
              <p className="leading-relaxed">Explore our complete <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Toronto World Cup 2026 Guide</Link> for essential information:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                <li>Hotels near BMO Field and downtown</li>
                <li>Toronto's efficient public transit system</li>
                <li>Top attractions and neighborhoods</li>
                <li>Diverse dining scene</li>
                <li>Match day planning tips</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 mb-2">Other Canadian Stadium</h4>
                <p className="leading-relaxed">Visiting both Canadian host cities? Check out <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">BC Place</Link> in Vancouver.</p>
            </div>
            <p className="leading-relaxed"><Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
          </div>
          <hr className="editorial-divider" />
        </section>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-check-double-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <div>
              <p>
                BMO Field delivers what few World Cup venues can: genuine football atmosphere in an intimate, purpose-built stadium. This isn't a repurposed NFL giant where supporters feel disconnected from the action—it's a proper football ground where 45,000 voices create a cauldron of noise that reverberates through the seating bowl and across Exhibition Place.
              </p>
            </div>
            <div>
              <p>
                <strong>Who Will Love It Most:</strong>  European fans accustomed to close-to-the-pitch stadiums will feel right at home. South American supporters will appreciate the passionate atmosphere and standing sections. First-time World Cup visitors get an accessible, walkable urban setting with Toronto's multicultural food scene and waterfront beauty as bonus attractions.
              </p>
            </div>
            <div>
              <p>
                <strong>The Unforgettable Moment:</strong>  Don't miss Canada's opening match on June 12, 2026—the first men's World Cup game ever played on Canadian soil. Even if you're supporting another nation, experiencing this historic occasion in a stadium full of red-clad Canadians celebrating their World Cup dream will be a memory for a lifetime. The noise, emotion, and sheer release of decades of anticipation will be spectacular.
              </p>
            </div>
            <div>
              <p>
                <strong>Book Now:</strong>  Toronto World Cup accommodation will vanish faster than you can say "maple syrup." Secure your Liberty Village Airbnb or downtown hotel immediately upon confirming match tickets. Transit passes can be purchased closer to the event, but early birds lock in the best pre-match bar reservations at Brazen Head and LOCAL Public Eatery.
              </p>
            </div>
            <div>
              <p>BMO Field may be among the tournament's smaller venues, but for pure football atmosphere and authentic Canadian hospitality, it will punch well above its weight class. See you on the terraces.</p>
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
                  <a href={`https://twitter.com/intent/tweet?text=BMO%20Field%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
