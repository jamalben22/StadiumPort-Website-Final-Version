import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface LincolnFinancialFieldGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

// Lincoln Financial Field Guide — PART 1/4 content only
// Design language mirrors MetLife/Estadio Azteca/Arrowhead/Levi's guides: same spacing, icons, gradients, and responsiveness.
export const LincolnFinancialFieldGuide: React.FC<LincolnFinancialFieldGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Breadcrumbs */}
      {!hideHero && (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Home</Link></li>
            <li className="text-slate-400">›</li>
            <li><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Stadiums</Link></li>
            <li className="text-slate-400">›</li>
            <li className="text-slate-700 dark:text-slate-200">Lincoln Financial Field</li>
          </ol>
        </nav>
      )}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp"
              alt="Lincoln Financial Field aerial view in Philadelphia"
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Lincoln Financial Field
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">67,594 capacity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>Philadelphia, Pennsylvania</span>
                </div>
              </div>

              {/* Tagline using exact sentences from Part 1 */}
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                When Lincoln Financial Field hosts six World Cup matches in summer 2026 — including a knockout round clash on July 4th, America's 250th birthday — Philadelphia will deliver one of the tournament's most electrifying backdrops. This isn't just another modern NFL stadium pressed into service for soccer.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
                  aria-label="Read Full Guide"
                >
                  <i className="ri-book-open-line"></i>
                  Read Full Guide
                </button>
                <button
                  onClick={handleGotItClick}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                >
                  <i className="ri-check-line"></i>
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — aligned with NYC guide styling */}
          {!hideHero && (
          <section className="editorial-hero">
            <div className="editorial-hero-media">
              <OptimizedImage
                src="/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp"
                alt="Interior view of Lincoln Financial Field in Philadelphia, Pennsylvania, one of the U.S. venues for FIFA World Cup 2026 matches."
                className="editorial-hero-image-wrapper"
                imgClassName="editorial-hero-image"
                width={1600}
                height={900}
                placeholder="blur"
                sizes="100vw"
                priority={true}
              />
              <div className="editorial-hero-overlay"></div>
            </div>

            <div className="editorial-hero-content">
              <div className="editorial-hero-inner">
                <h1 className="editorial-hero-title">Lincoln Financial Field</h1>
                <div className="editorial-hero-meta">
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-group-line"></i>
                    <span>67,594 capacity</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    <span>Philadelphia, Pennsylvania</span>
                  </div>
                </div>
                <p className="leading-relaxed mt-6 text-white/90">
                  Where America’s birthday meets football’s greatest stage.
                </p>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections — Editorial presentation aligned with NYC */}
          <main className="editorial-article py-12">
            {/* Introduction Section */}
            <article className="editorial-body editorial-dropcap">
              <p className="leading-relaxed mb-6">
                <span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Philadelphia</Link>, Lincoln Financial Field is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">World Cup 2026</Link>. When it hosts six matches — including a knockout round clash on July 4th, America's 250th birthday — the city will deliver one of the tournament's most electrifying backdrops. This isn't just another modern NFL stadium pressed into service for soccer. The Linc, as locals affectionately call it, has earned its World Cup stripes through years of hosting international matches, from Copa América to the Women's World Cup. With over half a million visitors expected to descend on Philly for these six matches, this stadium in the birthplace of American independence promises a matchday experience steeped in history, passion, and that unmistakable Philadelphia edge.
              </p>
              <p className="leading-relaxed">
                The stadium's design itself speaks to the city's character. Inspired by the diverse neighborhoods of Philadelphia, its asymmetrical seating provides unique viewing experiences throughout the stadium, while the aggressive canopy profile evokes an eagle's wing, instantly identifiable to global audiences. This is where architecture, sports culture, and American history collide — and where your World Cup 2026 journey could reach its crescendo.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500 text-3xl"></i>
                Stadium Overview & Fast Facts
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-building-2-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Official Name</span>
                      <p className="leading-relaxed">Lincoln Financial Field (temporarily "Philadelphia Stadium" during World Cup)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-flag-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Nickname</span>
                      <p className="leading-relaxed">The Linc</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-map-pin-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Location</span>
                      <p className="leading-relaxed">South Philadelphia, Sports Complex (1 Lincoln Financial Field Way)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-calendar-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Opened</span>
                      <p className="leading-relaxed">August 3, 2003</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-group-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Capacity</span>
                      <p className="leading-relaxed">67,594 (expandable to approximately 69,000 for major events)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-user-star-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Primary Tenant</span>
                      <p className="leading-relaxed">Philadelphia Eagles (NFL), Temple Owls (NCAA Football)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-pencil-ruler-2-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Architect</span>
                      <p className="leading-relaxed">NBBJ (designed by Dan Meis, FAIA)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-money-dollar-circle-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Construction Cost</span>
                      <p className="leading-relaxed">$512 million</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-sun-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Surface Type</span>
                      <p className="leading-relaxed">Natural grass</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-sun-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Type</span>
                      <p className="leading-relaxed">Open-air with partial canopy coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>
                  Notable Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Powers on 100% clean energy with 11,000 solar panels and 14 wind turbines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Recognized in 2013 as one of the "greenest" stadiums in the NFL, with renewable energy installations accounting for 30% of the facility's electricity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Three open corner plazas providing skyline views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Wing-shaped canopies directing noise back toward the field</span>
                  </div>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Beyond the Stadium: Explore Philadelphia */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
                Beyond the Stadium: Explore Philadelphia
              </h3>
              <p className="leading-relaxed mb-4">Philadelphia's revolutionary history and vibrant culture make it a must-visit World Cup 2026 destination.</p>
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-slate-800/70 border-l-4 border-emerald-500 mb-6">
                <p className="leading-relaxed"><strong>Discover Philadelphia:</strong> Explore our complete <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Philadelphia World Cup 2026 Guide</Link> for comprehensive information:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Hotels near Lincoln Financial Field</li>
                  <li>Transportation to the stadium</li>
                  <li>Historic sites and Independence Hall</li>
                  <li>Famous cheesesteaks and food scene</li>
                  <li>Match day planning essentials</li>
                </ul>
              </div>
              <p className="leading-relaxed mb-4"><strong>Other East Coast Stadiums:</strong> Catching multiple matches in the region? Check out <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">MetLife Stadium</Link> in NY/NJ or <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Gillette Stadium</Link> in Boston.</p>
              <p className="leading-relaxed"><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500 text-3xl"></i>
                History & Legacy
              </h3>
              <div>
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
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Architecture & Experience */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-pantone-line text-emerald-500 text-3xl"></i>
                Stadium Architecture & Experience
              </h3>
              <div>
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
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* What Matches to Expect */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
                What Matches to Expect
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Lincoln Financial Field will host six World Cup 2026 matches: five Group Stage fixtures (June 14, 19, 22, 25, and 27) and one knockout Round of 16 match on Saturday, July 4, 2026.
                </p>
                <p className="leading-relaxed">
                  That July 4th match is historic: it falls on the 250th birthday of the United States, making it one of the tournament's most symbolically charged fixtures. Picture this — a knockout World Cup match, winner advances to the quarterfinals, played in the city where America was founded, on the nation's semiquincentennial. The atmosphere will be absolutely electric regardless of which nations compete.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* PART 2/4: Match times & crowd expectations (verbatim paragraphs) */}
            <article className="editorial-body">
              <div>
                <p className="leading-relaxed mb-6">
                  Matches are expected to kick off at 12:00, 15:00, 18:00, and 21:00 local time (Eastern Time). While FIFA hasn't announced specific team assignments yet (the Final Draw is expected in late 2025), Philadelphia's track record suggests high-profile matches given the stadium's capacity and the city's logistical capabilities.
                </p>
                <p className="leading-relaxed">
                  Expect capacity crowds approaching 70,000 for each match. The city has hosted major soccer before, but nothing approaching this scale and global attention. Since opening, Lincoln Financial Field has hosted three NFC Championship Games, nearly 40 concerts, the Army-Navy classic, and several high-profile international soccer matches. This World Cup will be its defining moment on the global stage.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500 text-3xl"></i>
                Getting to the Stadium
              </h3>

              {/* By Metro */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-500"></i>
                  By Metro (SEPTA Broad Street Line) — Recommended
                </h4>
                <p className="leading-relaxed mb-4">
                  The SEPTA Broad Street Subway Line (also known as the orange line) runs south from Center City directly to NRG Station, the final southbound stop that sits steps from Lincoln Financial Field. This is by far your best option.
                </p>
                <div className="space-y-2">
                  <p><strong>Journey time:</strong> 14 minutes from 15th Street/City Hall station to NRG Station</p>
                  <p><strong>Frequency:</strong> Every 15 minutes during regular service (expect increased frequency on match days)</p>
                  <p><strong>Cost:</strong> $2.50 one-way cash fare</p>
                  <p><strong>Note:</strong> SEPTA customers can tap contactless credit/debit cards, smartphones, or watches to ride</p>
                </div>
                <p className="leading-relaxed mt-4">
                  From NRG Station, simply follow the massive crowds east on Pattison Avenue for about three blocks to the stadium entrance. For major events, SEPTA typically provides additional trains making all stops, especially pre-match.
                </p>
                <p className="leading-relaxed">
                  <strong>Pro tip:</strong> Buy your SEPTA Key Card or prepare contactless payment before match day to avoid queues. Download the SEPTA app for real-time service updates.
                </p>
              </div>

              {/* By Bus */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-emerald-500"></i>
                  By Bus
                </h4>
                <p className="leading-relaxed">
                  Several bus routes serve the stadium area, including Routes 4, 17, 63, 68, and LOOP, with stops at Broad Street & Pattison Avenue near the stadium complex. However, buses will be slower than the subway on match days due to traffic congestion.
                </p>
              </div>

              {/* By Car */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-car-line text-emerald-500"></i>
                  By Car — Not Recommended on Match Days
                </h4>
                <p className="leading-relaxed mb-4">
                  Lincoln Financial Field offers approximately 22,000 parking spaces across 38 lots in the Sports Complex, but expect severe congestion on World Cup match days.
                </p>
                <div className="space-y-2">
                  <p><strong>Parking costs:</strong> Official stadium parking for major events ranges from $35-$75 for standard vehicles, with prices varying by lot proximity. Reserved parking in premium lots (J, K, L) costs more but provides faster exit access.</p>
                  <p><strong>Arriving by Interstate:</strong></p>
                  <ul className="ml-6 space-y-2">
                    <li>- From I-95 North or South: Exit at Broad Street (Exit 17) and follow into stadium parking, or exit at Packer Avenue (Exit 19), turn left onto Lincoln Financial Field Way</li>
                    <li>- From I-76 (Pennsylvania Turnpike): Follow signs to I-95 South, then proceed as above</li>
                  </ul>
                  <p><strong>Reality check:</strong> It can take up to an hour to exit the parking lots after Eagles games — expect similar or worse for World Cup matches with international fans unfamiliar with the area. Consider off-site parking and metro instead.</p>
                </div>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-emerald-500"></i>
                  By Rideshare/Taxi
                </h4>
                <p className="leading-relaxed mb-4">
                  Uber and Lyft are widely used in Philadelphia. The designated drop-off and pickup zone is at the northeast corner of Pattison Avenue and Broad Street, next to the Broad Street subway station.
                </p>
                <div className="space-y-2">
                  <p><strong>From Center City:</strong> 10-15 minutes (approximately $13-17, surge pricing likely on match days)</p>
                  <p><strong>From Philadelphia International Airport (PHL):</strong> 20-30 minutes (approximately $25-40 base fare, plus surge)</p>
                  <p><strong>Important:</strong> Surge pricing will be extreme after matches. Budget accordingly or plan to wait 30-45 minutes for prices to normalize while grabbing post-match food at nearby Xfinity Live!</p>
                </div>
              </div>

              {/* From the Airport */}
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-plane-line text-emerald-500"></i>
                  From the Airport
                </h4>
                <div className="space-y-2">
                  <p><strong>Philadelphia International Airport (PHL)</strong> is approximately 8 miles from the stadium:</p>
                  <ul className="ml-6 space-y-2">
                    <li>- <strong>SEPTA Airport Line</strong> to Jefferson Station or Suburban Station, transfer to Broad Street Line southbound to NRG Station (45-60 minutes total, approximately $8)</li>
                    <li>- <strong>Taxi:</strong> Flat rate of $32.50 to Center City, add $10-15 to continue to stadium</li>
                    <li>- <strong>Rideshare:</strong> $25-45 depending on traffic and surge pricing</li>
                  </ul>
                  <p>Consider staying in Center City and using the Broad Street Line rather than shuttling directly to the stadium from the airport — it gives you time to explore Philadelphia's historic attractions.</p>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Where to Stay */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500 text-3xl"></i>
                Where to Stay
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Philadelphia offers accommodation for every budget, and your choice depends on balancing stadium access with sightseeing and nightlife. The city is compact, so even Center City hotels are only 15 minutes from the stadium via metro.
                </p>

                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-2-line text-emerald-500"></i>
                  Best Neighborhoods for World Cup Visitors
                </h4>

                <p className="font-semibold leading-relaxed">
                  Center City (Rittenhouse Square & Old City) — Highly Recommended
                </p>
                <p className="leading-relaxed mb-6">
                  This is where most international visitors should base themselves. Center City is Philadelphia's walkable downtown neighborhood, densely packed with historic sights, museums, galleries, and restaurants, including smaller areas like Old City, Rittenhouse Square, Midtown Village, and Washington Square West.
                </p>
                <p className="leading-relaxed mb-6">
                  Rittenhouse Square is considered a chi-chi neighborhood known for chic hotels and a buzzing alfresco drinking and dining scene along Broad Street, Market Street, and South Street, with cool locally owned galleries, independent boutiques, theaters, and music venues. The square itself hosts festivals, farmers' markets, and family-friendly events.
                </p>
                <p className="leading-relaxed mb-6">
                  Old City features cobblestone streets with 17th and 18th-century architecture radiating from Independence Mall, home to the Liberty Bell, Independence Hall, and Penn's Landing on the Delaware River. It's the historic heart of Philadelphia.
                </p>
                <p className="leading-relaxed">
                  <strong>Direct metro access:</strong> Both neighborhoods connect to the Broad Street Line via multiple stops, putting you 14-20 minutes from the stadium.
                </p>

                {/* PART 3/4: Accommodation Options */}
                <h4 className="editorial-h4 animate-fade-up mt-8 mb-4 flex items-center gap-2">
                  <i className="ri-wallet-3-line text-emerald-500"></i>
                  Budget Options ($80-150/night)
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Holiday Inn Express Philadelphia-Midtown (convenient location, reliable chain)</li>
                  <li>Pod Philly (micro-hotel concept, perfect for budget-conscious solo travelers)</li>
                  <li>Apple Hostels of Philadelphia (Old City location, social atmosphere for backpackers)</li>
                  <li>Extended Stay America locations (practical for longer visits)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Consider booking through <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Hotels.com</a> for deals on budget chains with free cancellation options.
                </p>

                <h4 className="editorial-h4 animate-fade-up mt-8 mb-4 flex items-center gap-2">
                  <i className="ri-bank-card-line text-emerald-500"></i>
                  Mid-Range ($150-300/night)
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Hyatt Centric Center City Philadelphia (boutique hotel in Rittenhouse Square, 310 rooms, rooftop bar)</li>
                  <li>Club Quarters Hotel Rittenhouse Square (corporate-focused hotel on Chestnut Street, Center City)</li>
                  <li>Marriott Old City or Renaissance Philadelphia Downtown (both offering unique charm in historic district)</li>
                  <li>Kimpton Hotel Palomar Philadelphia (stylish boutique in Rittenhouse)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Search <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.expedia.com" data-discover="true">https://www.expedia.com</a>  for package deals combining hotel + airport transfers, often saving 15-20% versus booking separately.
                </p>

                <h4 className="editorial-h4 animate-fade-up mt-8 mb-4 flex items-center gap-2">
                  <i className="ri-gem-line text-emerald-500"></i>
                  Luxury ($300+/night)
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>The Rittenhouse Hotel (overlooking Rittenhouse Square, rooms measure 450-600 square feet — the largest in the city, with stunning marble bathrooms and park views)</li>
                  <li>The Ritz-Carlton Philadelphia (former bank building, opulent interiors)</li>
                  <li>Four Seasons Philadelphia (Comcast Center tower, floor-to-ceiling windows)</li>
                  <li>Sofitel Philadelphia at Rittenhouse Square (French luxury meets Philly charm)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  For luxury travelers, consider <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.virtuoso.com" data-discover="true">https://www.virtuoso.com</a>  or <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.mrandmrssmith.com" data-discover="true">https://www.mrandmrssmith.com</a>  for boutique hotels with exclusive perks.
                </p>

                <h4 className="editorial-h4 animate-fade-up mt-8 mb-4 flex items-center gap-2">
                  <i className="ri-community-line text-emerald-500"></i>
                  South Philadelphia — For Die-Hard Fans
                </h4>
                <p className="leading-relaxed">
                  If you want to be walking distance from the stadium and don't care about tourist attractions, consider hotels near the Navy Yard or along South Broad Street. However, dining and entertainment options are limited compared to Center City. Budget chains like Courtyard by Marriott or Hampton Inn serve this area.
                </p>

                <h4 className="editorial-h4 animate-fade-up mt-8 mb-4 flex items-center gap-2">
                  <i className="ri-calendar-check-line text-emerald-500"></i>
                  Booking Strategy
                </h4>
                <p className="leading-relaxed">
                  Philadelphia will be packed during World Cup 2026. Book accommodation as soon as match schedules are announced. Prices will surge 200-300% during the tournament, and availability will be extremely limited within 3-4 months of the event.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* PART 3/4: Matchday Tips & Insider Advice */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-lightbulb-line text-emerald-500 text-3xl"></i>
                Matchday Tips & Insider Advice
              </h3>

              {/* Arrive Early (But Not Too Early) */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-time-line text-emerald-500"></i>
                  Arrive Early (But Not Too Early)
                </h4>
                <p className="leading-relaxed mb-4">
                  Stadium parking lots typically open 5 hours before kickoff for tailgating events, with Lot K opening first. However, unless you're tailgating, arriving 90-120 minutes before kickoff is optimal — enough time to clear security, explore the concourses, grab food, and soak in the atmosphere without standing around unnecessarily.
                </p>
                <p className="leading-relaxed">
                  Gates typically open 90 minutes before kickoff. All guests and belongings are subject to security inspection using walk-through weapons detection technology at entry points.
                </p>
              </div>

              {/* Bag Policy — Strictly Enforced */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-shield-check-line text-emerald-500"></i>
                  Bag Policy — Strictly Enforced
                </h4>
                <p className="leading-relaxed mb-4">
                  Lincoln Financial Field enforces a strict clear bag policy: fans may carry either one clear plastic/vinyl/PVC bag not exceeding 12" x 6" x 12", or one small clutch bag no larger than 4.5" x 6.5".
                </p>
                <p className="font-semibold">Permitted:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>One-gallon clear plastic freezer bag (Ziploc-style)</li>
                  <li>Clear stadium bags (purchase beforehand or at nearby stores)</li>
                  <li>Small clutch/wallet under 4.5" x 6.5"</li>
                  <li>Diaper bags (though clear bags expedite entry)</li>
                  <li>Food wrapped in clear plastic (yes, you can bring your Philly hoagie!)</li>
                </ul>
                <p className="font-semibold mt-4">Prohibited:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Backpacks, purses larger than clutch size, briefcases, fanny packs</li>
                  <li>Outside beverages, including alcohol</li>
                  <li>Professional camera equipment (lenses over 6 inches)</li>
                  <li>Large umbrellas, signs, flags on sticks, noisemakers</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  There are no bag check facilities at the stadium. Plan accordingly or risk being turned away at the gates.
                </p>
              </div>

              {/* What to Bring */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-shopping-bag-3-line text-emerald-500"></i>
                  What to Bring
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Stadium-approved clear bag</li>
                  <li>Government-issued photo ID</li>
                  <li>Mobile ticket (Lincoln Financial Field uses mobile ticketing)</li>
                  <li>Sunscreen (summer in Philadelphia can be brutal)</li>
                  <li>Light rain jacket (it's an open-air stadium)</li>
                  <li>Portable phone charger (smaller than your phone)</li>
                  <li>Cash-to-card conversion stations are available if you prefer not going entirely cashless, located at Pepsi Lobby and Main Concourse behind Sections 105 and 121</li>
                </ul>
              </div>

              {/* Weather Preparation */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-sun-line text-emerald-500"></i>
                  Weather Preparation
                </h4>
                <p className="leading-relaxed mb-4">
                  June and early July in Philadelphia means warm to hot temperatures (75-95°F / 24-35°C) with high humidity and occasional afternoon thunderstorms. The stadium has no roof — partial canopy coverage protects some upper deck seats but expect direct sun exposure.
                </p>
                <p className="leading-relaxed">
                  Hydrate constantly. Bring or buy water inside (refill stations available).
                </p>
              </div>

              {/* Food & Drink Inside */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-emerald-500"></i>
                  Food & Drink Inside
                </h4>
                <p className="leading-relaxed mb-4">
                  Stadium food can be pricey, but the Linc offers authentic local options beyond standard concession fare. Look for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li><strong>Tony Luke's</strong> (roast pork sandwiches — the underappreciated Philly specialty)</li>
                  <li><strong>Chickie's & Pete's</strong> (famous Crabfries)</li>
                  <li><strong>Campo's Deli</strong> (Italian hoagies)</li>
                  <li><strong>Bassett's Ice Cream</strong> (since 1861, available at the stadium)</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Beer prices will be steep ($12-15 for domestic, $15-18 for craft), but this is a World Cup — pace yourself and enjoy the atmosphere.
                </p>
                <p className="leading-relaxed">
                  <strong>Money-saving tip:</strong> Bring your own food wrapped in clear plastic. Stop at Reading Terminal Market beforehand for authentic Philly sandwiches at half the stadium price.
                </p>
              </div>

              {/* Best Gates/Entry Points */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-door-open-line text-emerald-500"></i>
                  Best Gates/Entry Points
                </h4>
                <p className="leading-relaxed">
                  Enter through the gate closest to your seat section to minimize walking. Check your mobile ticket for the recommended entry point. Gates on the east side (near I-95) tend to process slightly faster than west side gates during peak entry times.
                </p>
              </div>

              {/* Post-Match Exit Strategy */}
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-route-line text-emerald-500"></i>
                  Post-Match Exit Strategy
                </h4>
                <p className="leading-relaxed mb-4">
                  After Eagles games, it can take up to an hour to exit parking lots. World Cup matches will be similar or worse. Three strategies:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-6">
                  <li>
                    <strong>Metro riders:</strong> You're golden. Walk to NRG Station and hop the Broad Street Line north. For Sunday Eagles games, SEPTA offers free Sports Express Trains between 3 PM and 7 PM. Expect similar service for World Cup matches.
                  </li>
                  <li>
                    <strong>Drivers:</strong> Relax and wait. Head to Xfinity Live! for post-match celebration (detailed below), let traffic clear for 45 minutes, then exit smoothly.
                  </li>
                  <li>
                    <strong>Rideshare users:</strong> Walk several blocks away from the stadium complex before requesting pickup, or wait 30-45 minutes for surge pricing to drop.
                  </li>
                </ol>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* PART 4/4: Things to Do Nearby */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
                Things to Do Nearby
              </h3>

              {/* Xfinity Live! — Pre & Post-Match Central */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-store-2-line text-emerald-500"></i>
                  Xfinity Live! — Pre & Post-Match Central
                </h4>
                <p>
                  Located in the heart of the Sports Complex, Xfinity Live! boasts 80,000 square feet of dining and entertainment, including Broad Street Bullies Pub (featuring Flyers memorabilia), Lorenzo and Sons (enormous cheese pizza slices), and PBR Philly (mechanical bull riding and Southern dishes).
                </p>
                <p>
                  Victory Beer Hall offers craft beer with spectacular city skyline views, while multiple bars ensure you can always find space even on packed match days. This is where fans from competing nations will mix before and after matches — expect incredible atmosphere.
                </p>
                <p><strong>Walking distance:</strong> 3 minutes</p>
                <p><strong>Atmosphere:</strong> Loud, crowded, festive — exactly what you want for World Cup</p>
              </div>

              {/* Chickie's & Pete's */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-line text-emerald-500"></i>
                  Chickie's & Pete's
                </h4>
                <p>
                  This iconic Philly sports bar, within walking distance of Lincoln Financial Field, is famous for its Crabfries (crispy crinkle-cut fries dusted with secret spices) and electric atmosphere. With 24,000 square feet, multiple bars, and private rooms, it's the world's first interactive sports bar featuring Play2 entertainment centers.
                </p>
                <p><strong>Walking distance:</strong> 5 minutes</p>
                <p><strong>Specialties:</strong> Crabfries, wings, mussels, and massive burgers</p>
              </div>

              {/* Live! Casino & Hotel Philadelphia */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-hotel-line text-emerald-500"></i>
                  Live! Casino & Hotel Philadelphia
                </h4>
                <p>
                  A 24-hour casino just minutes from the stadium, featuring nearly 2,000 slot machines, gaming tables (poker, blackjack), sports betting, and multiple restaurants including Jack's Bar & Grill (American pub fare with Delaware River views) and Mian (authentic Asian cuisine). The casino also hosts live music performances in its concert venue.
                </p>
                <p><strong>Distance:</strong> 10 minutes by rideshare</p>
                <p><strong>Perfect for:</strong> Post-match celebration or late-night entertainment</p>
              </div>

              {/* Center City Philadelphia */}
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-building-line text-emerald-500"></i>
                  Center City Philadelphia (20-30 Minutes via Metro)
                </h4>
                <p>
                  After your match, return to Center City for Philadelphia's main attractions:
                </p>
                <p><strong>Independence National Historical Park</strong></p>
                <p>
                  No visit to Philadelphia is complete without seeing Independence Hall (where both the Declaration of Independence and U.S. Constitution were signed) and the Liberty Bell Center. Timed tickets for Independence Hall tours must be reserved in advance at Recreation.gov ($1 processing fee per ticket), while the Liberty Bell requires no tickets but does require security screening.
                </p>
                <p><strong>Reading Terminal Market</strong></p>
                <p>
                  With over 6 million annual visitors, Reading Terminal Market is one of Philadelphia's most popular attractions, offering local produce, meats, seafood, baked goods, and diverse international cuisine under one roof. The Famous 4th Street Cookie Company here was named by The Food Network as one of the best cookie bakeries in the US.
                </p>
                <p><strong>Philadelphia Museum of Art & Rocky Steps</strong></p>
                <p>
                  Since Rocky's first triumphant run in 1976, the 72 stone steps of the Philadelphia Museum of Art have become an international destination for travelers who jog up the stairs and pump their fists with spectacular views of Benjamin Franklin Parkway and the city skyline. The bronze Rocky statue at the bottom provides the perfect photo opportunity.
                </p>
                <p><strong>Distance:</strong> 20 minutes via SEPTA Broad Street Line to City Hall, then 10-minute walk or quick bus ride</p>
                <p className="leading-relaxed mt-4">Planning an East Coast circuit? Check out <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">MetLife Stadium</Link> in NY/NJ or <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Gillette Stadium</Link> near Boston. For a southeastern option, consider <Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mercedes‑Benz Stadium</Link> in Atlanta.</p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* PART 4/4: Final Verdict & Key Takeaway */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-checkbox-circle-line text-emerald-500 text-3xl"></i>
                Final Verdict & Key Takeaway
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Lincoln Financial Field offers everything a World Cup venue should: a passionate fan culture, excellent sightlines, efficient public transportation, and a city bursting with American history and world-class dining. While it's purpose-built for American football rather than soccer, the intimate bowl design and deafening acoustics translate beautifully to the beautiful game.
                </p>
                <p className="leading-relaxed mb-6">
                  The July 4th knockout match on America's 250th birthday makes this one of the most historically significant fixtures in the entire 2026 tournament. But even the group stage matches will crackle with energy — Philadelphia fans are legendary for their passion (and occasional intensity), and they'll embrace this global moment with characteristic fervor.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong>Who will love it most?</strong> History enthusiasts who want their football with a side of American independence, foodies chasing authentic regional cuisine, and fans who appreciate stadiums with character over sterile corporate venues.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong>The one unforgettable thing you shouldn't miss?</strong> Being in this stadium on July 4, 2026, as America celebrates its semiquincentennial and a World Cup knockout match simultaneously. If you can secure tickets to that fixture specifically, it will be the matchday experience of a lifetime.
                </p>
                <p className="leading-relaxed mb-6">
              <strong>Take action now:</strong> Book your accommodation immediately when match schedules are announced. Philadelphia hotels will sell out fast, and prices will skyrocket. Browse options on <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> , <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia.com</a> , or <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Airbnb.com</a>  now to bookmark properties in Center City or Rittenhouse Square. Research SEPTA routes, purchase a clear stadium bag, and start planning your historical Philadelphia itinerary around the match days.
                </p>
                <p className="leading-relaxed">
                  The 2026 World Cup comes to America only once. Make sure Philadelphia — and Lincoln Financial Field — are part of your journey.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            
          </main>
        </div>
      )}
    </div>
  );
};