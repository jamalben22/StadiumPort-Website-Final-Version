import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';

interface BCPlaceStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const BCPlaceStadiumGuide: React.FC<BCPlaceStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
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
  const pageUrl = '/world-cup-2026-stadiums/bc-place-stadium-guide';

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
    const saved = localStorage.getItem('bcplace_guide_saved');
    if (saved) setIsSaved(true);
    
    const rated = localStorage.getItem('bcplace_guide_rating');
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
      localStorage.setItem('bcplace_guide_saved', 'true');
    } else {
      localStorage.removeItem('bcplace_guide_saved');
    }
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem('bcplace_guide_rating', rating.toString());
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
               <li>• World's largest cable-supported retractable roof</li>
               <li>• Capacity: <strong>54,000</strong> (World Cup configuration)</li>
               <li>• Home of <strong>Vancouver Whitecaps FC</strong> (MLS)</li>
               <li>• Located in Downtown Vancouver</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-landscape-line text-[#01b47d]"></i>
            Where Mountains Meet Ocean Meet the Pitch
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} 2025</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            There's something magical about watching world-class football under a retractable roof that opens to reveal snow-capped mountains and Pacific skies. Located in the beating heart of <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Vancouver</Link>, BC Place isn't just another tournament venue—it's where Canada's World Cup dream becomes reality. <strong>BC Place is one of the </strong>
            <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>
            {`, welcoming 54,000 fans in a stadium that's hosted everything from Olympic glory to the Women's World Cup Final. This architectural marvel combines cutting-edge technology with West Coast soul, offering international fans an experience that's quintessentially Canadian: sophisticated, stunning, and accessible. When the world descends on Vancouver in June and July 2026, BC Place will prove why it's one of North America's most electrifying football venues.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-[#01b47d]"></i>
            Stadium Overview & Fast Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-building-2-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Official Name</span>
                  <p className="leading-relaxed">BC Place Stadium</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-map-pin-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Location</span>
                  <p className="leading-relaxed">Downtown Vancouver, British Columbia (777 Pacific Boulevard)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-calendar-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Opened</span>
                  <p className="leading-relaxed">June 19, 1983</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-group-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Capacity</span>
                  <p className="leading-relaxed">54,000 (World Cup configuration)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-user-star-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Primary Tenants</span>
                  <p className="leading-relaxed">Vancouver Whitecaps FC (MLS), BC Lions (CFL)</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-pencil-ruler-2-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Original Architect</span>
                  <p className="leading-relaxed">Studio Phillips Barratt, Ltd.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-pencil-ruler-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Renovation Architects (2010-2011)</span>
                  <p className="leading-relaxed">Stantec Architecture Ltd., Geiger Engineers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-football-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Surface Type</span>
                  <p className="leading-relaxed">Natural grass (installed for World Cup, FIFA specification)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-sun-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Type</span>
                  <p className="leading-relaxed">Cable-supported retractable roof (world's largest of its kind)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div>
                  <i className="ri-arrow-up-down-line text-[#01b47d] text-3xl mr-2"></i>
                  <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Opening</span>
                  <p className="leading-relaxed">100m x 85m (7,500 square metres of open sky)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Second-largest centre-hung HD video board in North America</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>36-foot LED exterior facade lighting</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Fully retractable in 20 minutes</span>
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
              {`When BC Place opened its doors in 1983, it featured the world's largest air-supported dome—a billowing white "marshmallow" that became Vancouver's most recognizable skyline feature. Built for Expo 86 and a then-staggering $126 million, the stadium launched with the Vancouver Whitecaps defeating Seattle 2-1 before 60,342 ecstatic fans. For nearly three decades, it defined Vancouver sports culture, hosting ten Grey Cup championships and countless concerts from U2 to The Rolling Stones.`}
            </p>
            <p>
              {`The stadium's rebirth came between 2010 and 2011 with a transformative $563 million renovation. The aging air-supported roof was replaced with the world's largest cable-supported retractable roof system, inspired by Frankfurt's Commerzbank-Arena. This wasn't just cosmetic—the renovation breathed new life into the venue, improving acoustics, sightlines, and creating the bright, airy atmosphere that defines modern BC Place.`}
            </p>
            <p>
              {`The venue has proven its World Cup credentials. In 2015, BC Place hosted the FIFA Women's World Cup Final, where the United States defeated Japan before a passionate crowd. The stadium also welcomed 61,600 spectators for the 2010 Winter Olympics Opening and Closing Ceremonies—the first Olympic Opening Ceremony held indoors. These moments cemented BC Place's reputation for delivering unforgettable sporting spectacles on the world stage.`}
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-3-line text-[#01b47d]"></i>
            Stadium Architecture & Experience
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              {`BC Place is architectural theatre. The retractable roof—supported by 18 suspension bridge-like structures—can open or close in just 20 minutes, revealing panoramic mountain and sky views when weather permits. When closed, the translucent Tenara fabric allows 40% light transmission, creating a naturally lit indoor environment unlike traditional domed stadiums. The exterior facade features ETFE panels that transform the building into a 36-foot LED canvas, illuminating downtown Vancouver with customizable light displays.`}
            </p>
            <p>
              {`Inside, the seating bowl wraps tightly around the pitch in two main tiers, creating an intimate atmosphere despite the stadium's size. For World Cup 2026, the upper bowl will be fully configured (unlike Whitecaps matches where it's curtained), maximizing capacity and creating a wall of sound. Sightlines are excellent throughout—the steep rake brings fans close to the action, while the modern seating includes cup holders and comfortable spacing.`}
            </p>
            <p>
              {`The stadium's centre-hung video board ranks as North America's second-largest, with the main panel measuring 68 feet by 38 feet—equivalent to 450 standard 42-inch TVs. Eight distinct colour-coded concourses help with wayfinding, while wide access ramps (no more rotating doors from the old dome days) improve crowd flow. Premium areas include Pacific Rim Suites, Club Lounges, and the newly renovated Edgewater Lounge and Field Club—hospitality upgrades made specifically for FIFA requirements.`}
            </p>
            <p>
              {`Accessibility is comprehensive, with wheelchair seating platforms integrated throughout the bowl, family and universal washrooms on every level, Mamava lactation pods, and a dedicated accessible drop-off with direct elevator access.`}
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
              {`Vancouver will host seven 2026 FIFA World Cup matches across three weeks—five group stage fixtures (June 13, 18, 21, 24, 26) and two knockout rounds (Round of 32 on July 2, Round of 16 on July 7). Expect at least two Canada national team matches, plus one featuring the United States, meaning BC Place will be ground zero for North American football fever.`}
            </p>
            <p>
              {`Given BC Place's proven track record with major tournaments and Vancouver's multicultural population, atmosphere will be extraordinary. The city's diverse communities—with strong connections to every football-playing nation—guarantee that every match will feel like a home game for someone. The retractable roof means FIFA can create optimal conditions, whether that's an open-air summer evening or weather-protected intensity.`}
            </p>
            <p>
              {`Matches are scheduled for 12:00, 15:00, 18:00, and 21:00 Pacific Time, with evening kickoffs likely offering the most spectacular visual experience as the roof opens to twilight skies. This will be only the second time Canada has hosted men's World Cup matches on home soil, making these fixtures genuinely historic moments.`}
            </p>
            <p>
              Just 3 hours south, catch matches at <Link to="/world-cup-2026-stadiums/lumen-field-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lumen Field</Link> in Seattle. Also explore <Link to="/world-cup-2026-stadiums/bmo-field-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">BMO Field</Link> in Toronto for coast-to-coast Canada, and on the West Coast, <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Levi's Stadium</Link>.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-[#01b47d]"></i>
            Getting to the Stadium
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p><strong>By SkyTrain (Recommended):</strong> {`Stadium-Chinatown Station on the Expo Line sits just 5 minutes' walk from BC Place's northern gates. Exit at Beatty Street, turn left, and gates A, B, and H are straight ahead. Alternatively, use the lower Expo Boulevard exit for a 5-minute walk to the stadium's south side. SkyTrain runs frequently from early morning until past 1:00 AM, with extended service on event nights. Travel time from downtown Waterfront Station: 4 minutes. From Vancouver International Airport (YVR): take the Canada Line to Waterfront, transfer to Expo Line—total journey approximately 35-40 minutes.`}</p>
            <p>{`Yaletown-Roundhouse Station (Canada Line) offers a 10-15 minute scenic walk through Yaletown's heritage warehouses and trendy restaurant district.`}</p>
            <p><em>{`Pro tip: Purchase a day pass or load funds onto a Compass Card before match day. Stadium-Chinatown gets extremely busy post-match—consider walking 5-10 minutes to Granville or Waterfront stations to avoid platform crowding.`}</em></p>

            <p><strong>By Bus:</strong> {`Multiple TransLink routes service the area: Routes 5, 6, 17, 22, 23, 210, 211, 214, 250, and 257. Buses run frequently but expect delays during rush hours and major events. Check TransLink's trip planner at translink.ca for real-time updates and service adjustments.`}</p>

            <p><strong>By Car & Parking:</strong> {`Parking downtown on match days is limited and expensive—lots closest to the stadium range from $10-$30. Plaza of Nations (across Pacific Boulevard) offers additional parking, but use the overhead walkway to cross safely. Alternative strategy: park at suburban SkyTrain stations (park-and-ride lots available at stations like Braid, Lougheed, or King George) and ride transit in—often faster and cheaper than downtown parking.`}</p>
            <p>{`Rideshare drop-off is at Parq Vancouver Casino, adjacent to the stadium. Expect surge pricing post-match and potential delays due to downtown traffic congestion. Pre-book your return ride or walk to a less congested pickup zone.`}</p>

            <p><strong>By Bike:</strong> {`Complimentary secure bike parking provided by The Bicycle Valet operates at Gate C from gates opening until 30 minutes post-match.`}</p>

<p><em>{`Airport Transfer Tip: Consider booking private airport transfers through `}<a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">booking.com</a>{`  or pre-arranging car rentals to explore Vancouver and surrounding areas between matches—the Sea-to-Sky Highway to Whistler is one of the world's most scenic drives.`}</em></p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d]"></i>
            Where to Stay
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p><strong>Downtown Core (Walking Distance):</strong> {`Staying downtown puts you 10-20 minutes on foot from BC Place while immersing you in Vancouver's energy. The Georgian Court Hotel (just steps from the stadium) offers boutique elegance, while YWCA Hotel Vancouver provides excellent budget-friendly rooms within easy walking distance. Hampton Inn & Suites Vancouver Downtown delivers reliable mid-range comfort with modern amenities.`}</p>

            <p><strong>Yaletown (10-15 Minute Walk):</strong> {`Vancouver's trendiest neighborhood combines heritage industrial architecture with upscale dining and nightlife. L'Hermitage Hotel and Rosedale on Robson Suite Hotel offer stylish accommodations with full kitchens—perfect for extended stays. Yaletown's pedestrian-friendly streets and Canada Line access make it ideal for blending stadium access with sightseeing.`}</p>

            <p><strong>Gastown (15-Minute Walk or Quick Transit):</strong> {`Vancouver's oldest neighborhood features cobblestone streets, Victorian architecture, and exceptional restaurants. While accommodation options are limited compared to downtown, the location offers authentic Vancouver character and easy Stadium-Chinatown SkyTrain access.`}</p>

            <p><strong>Budget Options:</strong> {`HI Vancouver Central and Samesun Vancouver provide hostel accommodations with private rooms available. Both offer social atmospheres perfect for meeting fellow football fans. Slightly outside downtown, these locations connect easily via transit.`}</p>

            <p><strong>Luxury Experiences:</strong> {`JW Marriott Parq Vancouver and the DOUGLAS, Autograph Collection combine five-star service with proximity to BC Place (literally adjacent to the stadium). Fairmont Hotel Vancouver and Rosewood Hotel Georgia deliver historic grandeur with modern luxury in the downtown core.`}</p>

<p><em>{`Booking Strategy: Vancouver's peak summer tourism season coincides with the World Cup. Secure accommodation 6-12 months ahead through `}<a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">booking.com</a>{`  or `}<a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-[#01b47d] hover:text-[#008f63] underline">Expedia</a>{` for best selection and rates. Consider Airbnb options in neighborhoods like Mount Pleasant or Main Street—just 10-15 minutes by transit but offering authentic local flavor at lower prices.`}</em></p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-[#01b47d]"></i>
            Matchday Tips & Insider Advice
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p><strong>Arrival Time:</strong> {`Gates typically open 2 hours before kickoff. For World Cup matches, arrive 90 minutes early minimum—security screening will be thorough, lines will be long, and you'll want time to soak up the atmosphere. Evening matches during Vancouver's stunning summer twilight are worth experiencing from your seat as the sun sets over English Bay.`}</p>

            <p><strong>Best Gates & Entrances:</strong> {`Gates A, B, and H (north side via Beatty Street from Stadium-Chinatown Station) handle the majority of crowd flow. For potentially shorter lines, try Gates F or G on the Pacific Boulevard side, though these require walking around the stadium perimeter.`}</p>

            <p><strong>Food & Drink:</strong> {`BC Place is now a cashless venue—all concessions accept debit, credit, and digital payments only. A cash-to-card kiosk operates at Section 235 for currency exchange. Concession options range from classic stadium fare (burgers, hot dogs, nachos) to locally inspired items. Prices are typical stadium rates ($8-15 for food items, $12-16 for beer). Pro tip: eat a substantial meal beforehand at nearby restaurants—you'll save money and time.`}</p>

            <p>{`Outside food and beverages aren't permitted, except empty personal water bottles up to 1 liter (refill at fountains located throughout concourses). Water bottle tip: Stay hydrated—Vancouver summer days can be warm, especially if the roof is closed.`}</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What to Bring */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-suitcase-line text-[#01b47d]"></i>
            What to Bring
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>{`BC Place enforces a clear bag policy: one clear bag up to approximately 12"x6"x12" or small clutch, plus medical/childcare items after inspection. Backpacks and large bags are prohibited. Ensure mobile tickets are downloaded before arrival—digital connectivity can be spotty with 54,000 people on networks.`}</p>

            <p>{`Weather preparation: Even in summer, bring a light jacket or sweater—Vancouver evenings cool down, and the roof being open means you're exposed to elements. Sunscreen, hat, and sunglasses recommended for day matches with open roof.`}</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What NOT to Do */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-close-circle-line text-[#01b47d]"></i>
            What NOT to Do
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {`No selfie sticks, no outside alcohol, no smoking anywhere inside gates. Cameras must be smaller than 6 inches with lens attached. Leave large electronics (laptops, tablets over 12"x12"x6") at your accommodation. No re-entry once you've entered the stadium.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Post-Match Transport */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-navigation-line text-[#01b47d]"></i>
            Post-Match Transport
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {`Stadium-Chinatown Station gets absolutely mobbed post-match. Smart alternatives: walk 10 minutes to Granville or Waterfront stations, or head to Yaletown-Roundhouse via the scenic False Creek seawall walk. If using rideshare, walk several blocks away from the immediate stadium area to avoid surge pricing and traffic gridlock—try pickup locations near Yaletown or along Robson Street.`}
          </p>
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
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">Pre-Match Atmosphere:</h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {`Terry Fox Plaza (immediately outside BC Place) will likely host FIFA Fan Festival activities and big-screen viewing areas. Arrive early to experience the global football party. Parq Vancouver Casino offers dining and entertainment options steps from the stadium.`}
              </p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">Yaletown (10-Minute Walk):</h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {`Explore this converted warehouse district's trendy restaurants and breweries. The Yaletown Keg features a year-round rooftop patio with stadium views, while craft beer enthusiasts should visit Yaletown Brewing Company. Pre-match options range from quick tacos at Tacofino to upscale Italian at Robba da Matti.`}
              </p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">Gastown (15 Minutes):</h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {`Vancouver's historic heart features cobblestone streets, the famous steam clock, and exceptional dining. Alibi Room draws locals with 50+ craft beers, while L'Abattoir delivers French-West Coast fusion in a stunning historic building. Save Gastown exploration for post-match celebrations—its bars and restaurants stay lively late.`}
              </p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">False Creek Seawall:</h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {`This waterfront pedestrian path connects BC Place to Granville Island Public Market (20-minute walk)—perfect for pre-match food shopping or post-match sunset strolls. Water taxis provide scenic transit across False Creek.`}
              </p>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">Nearby Attractions:</h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {`Science World geodesic dome (15-minute walk) offers interactive exhibits. Rogers Arena, home of the Vancouver Canucks, sits adjacent to BC Place. Vancouver Public Library's stunning Colosseum-inspired architecture (5-minute walk) provides a unique photo backdrop.`}
              </p>
            </div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
<strong>Activity Booking Tip:</strong> {`Consider booking a `}https://booking.com{`  or Vancouver City Tour for non-match days—these experiences showcase Vancouver's culinary diversity and stunning natural setting. Grouse Mountain gondola rides and Capilano Suspension Bridge offer breathtaking nature experiences just 30 minutes from downtown.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* PART 4: New Section Title 1 */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d]"></i>
            PART 4: New Section Title 1
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {`This is placeholder content for PART 4 of the BC Place guide. The actual content will be integrated here later.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* PART 5: New Section Title 2 */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            PART 5: New Section Title 2
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {`This is placeholder content for PART 5 of the BC Place guide. The actual content will be integrated here later.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Vancouver */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d]"></i>
            Beyond the Stadium: Explore Vancouver
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Vancouver's stunning natural beauty and cosmopolitan culture make it a premier World Cup 2026 destination.
            </p>
            <div>
              <p className="font-semibold">Discover Vancouver:</p>
              <p>
                Explore our complete <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Vancouver World Cup 2026 Guide</Link> for everything you need:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hotels near BC Place and downtown</li>
                <li>Mountains and ocean attractions</li>
                <li>Diverse neighborhoods and dining</li>
                <li>Transportation around Vancouver</li>
                <li>Match day planning essentials</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Other Stadiums Nearby:</p>
              <p>
                Just 3 hours south, catch matches at <Link to="/world-cup-2026-stadiums/lumen-field" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lumen Field</Link> in Seattle. Also check out <Link to="/world-cup-2026-stadiums/bmo-field" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">BMO Field</Link> in Toronto for coast-to-coast Canada.
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
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-check-double-line text-[#01b47d]"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>{`BC Place delivers everything a World Cup venue should: world-class infrastructure, electric atmosphere, stunning architecture, and seamless urban integration. Unlike stadiums marooned in parking lots, BC Place sits in Vancouver's vibrant downtown core, surrounded by restaurants, hotels, transit, and entertainment. The retractable roof adds a "wow factor" few venues can match—the moment those massive panels pull back to reveal mountains and sky creates an unforgettable connection between football and Vancouver's natural magnificence.`}</p>

            <p>{`This stadium is perfect for fans who want the complete World Cup experience: arrive by efficient transit, explore world-class dining and culture, watch football in a technologically advanced venue, then celebrate victory (or commiserate defeat) in nearby bars and restaurants—all without ever needing a car. Vancouver's legendary hospitality, combined with Canada's genuine excitement about hosting the World Cup, guarantees BC Place will be one of 2026's most memorable venues.`}</p>

            <p>{`The one unforgettable moment? Being inside BC Place when Canada's national team takes the pitch. The stadium holds the record for largest attendance for any Canadian national team event (any sport, men's or women's), and the atmosphere when 54,000 fans sing "O Canada" will give you goosebumps you'll remember forever.`}</p>

<p><strong>{`Book early.`}</strong> {`Vancouver's summer peak tourism season coincides with the World Cup, and accommodation near transit lines fills quickly. Secure your `}https://booking.com{`  and start planning your Vancouver adventure now—this isn't just about watching world-class football; it's about experiencing one of the planet's most beautiful cities at its proudest moment.`}</p>

            <p><em>{`See you under the retractable roof.`}</em></p>
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
                  <a href={`https://twitter.com/intent/tweet?text=BC%20Place%20Stadium%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
