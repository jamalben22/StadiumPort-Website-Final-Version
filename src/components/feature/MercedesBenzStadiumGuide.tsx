import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface MercedesBenzStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

// Mercedes‑Benz Stadium Guide — PART 1/4 only
// Design language mirrors MetLife/Estadio Azteca/Arrowhead guides: same spacing, icons, gradients, and responsiveness.
export const MercedesBenzStadiumGuide: React.FC<MercedesBenzStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero (placeholder gradient for now; replace with image when provided) */}
          <div className="relative h-[520px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Mercedes-Benz Stadium
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">75,000 capacity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>Downtown Atlanta, Georgia</span>
                </div>
              </div>

              {/* 1–2 sentence tagline using exact sentences from Part 1 */}
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Stand beneath the world's first retractable petal roof as it opens like a camera aperture to the Georgia sky. Watch 75,000 voices reverberate off the circular halo board—the largest video screen in professional sports.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
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

          {/* Editorial Hero — NYC style */}
          {!hideHero && (
          <section className="editorial-hero">
            <div className="editorial-hero-media">
              <OptimizedImage
                src="/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp"
                alt="Exterior view of Mercedes-Benz Stadium in Atlanta, Georgia, one of the premier venues for the FIFA World Cup 2026."
                className="editorial-hero-image-wrapper"
                imgClassName="editorial-hero-image"
                width={1600}
                height={900}
                priority={true}
                placeholder="empty"
                sizes="100vw"
              />
              <div className="editorial-hero-overlay"></div>
            </div>
            <div className="editorial-hero-content">
              <div className="editorial-hero-inner">
                <h1 className="editorial-hero-title">Mercedes-Benz Stadium</h1>
                <div className="editorial-hero-meta">
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    <span>Downtown Atlanta, Georgia</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-group-line"></i>
                    <span>75,000 capacity</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-award-line"></i>
                    <span>Semifinal Host Venue</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections — Editorial presentation */}
          <section className="editorial-article py-12">
            {/* Introduction */}
            <article className="editorial-body editorial-dropcap">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Stand beneath the world's first retractable petal roof as it opens like a camera aperture to the Georgia sky. Watch 75,000 voices reverberate off the circular halo board—the largest video screen in professional sports. Welcome to Mercedes-Benz Stadium, a venue that didn't just raise the bar for American stadium design when it opened in 2017; it obliterated it entirely. As one of 11 US host cities, Atlanta will welcome eight World Cup matches in 2026, including a semifinal—making this architectural marvel the stage where footballing dreams will either flourish or shatter. For the tournament, FIFA regulations require the stadium to be called "Atlanta Stadium", but locals will always know it by its revolutionary spirit.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Located in <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>, Mercedes-Benz Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500"></i>
                Stadium Overview & Fast Facts
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-price-tag-3-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Official Name:</strong> Mercedes-Benz Stadium (Atlanta Stadium during World Cup)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Location:</strong> Downtown Atlanta, Georgia (1 AMB Drive NW)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-calendar-2-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Opened:</strong> August 2017</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-group-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Capacity:</strong> 75,000 (expandable to 83,000)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-shield-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Primary Tenants:</strong> Atlanta Falcons (NFL), Atlanta United FC (MLS)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-pencil-ruler-2-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Architect:</strong> HOK (with tvsdesign, Goode Van Slyke Architecture, Stanley Beaman & Sears)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-sun-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Surface:</strong> Natural grass will be installed for World Cup matches (replacing standard artificial turf)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-home-gear-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Roof Type:</strong> Retractable eight-panel "petal" roof (opens in 8 minutes, closes in 7)</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-tv-2-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Signature Feature:</strong> 360-degree "Halo Board" video screen—58 feet high, 1,075 feet around</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-leaf-line text-emerald-500 text-xl"></i>
                    <p className="text-slate-700 dark:text-slate-200"><strong>Sustainability:</strong> First professional sports stadium in North America to achieve LEED Platinum certification with 88 points—the highest score ever for a sports venue</p>
                  </div>
                </div>
              </div>

              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-history-line text-emerald-500"></i>
                History & Legacy
              </h3>
              <div className="space-y-6">
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
                <i className="ri-brush-line text-emerald-500"></i>
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
                <i className="ri-calendar-event-line text-emerald-500"></i>
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

            {/* Related Stadiums (after What Matches to Expect) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-links-line text-emerald-500"></i>
                Related Stadiums
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-2">
                Planning an East/South circuit? Consider nearby or regional venues:
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <Link to="/world-cup-2026-stadiums/att-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas ·
                {' '}<Link to="/world-cup-2026-stadiums/lincoln-financial-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia ·
                {' '}<Link to="/world-cup-2026-stadiums/metlife-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">MetLife Stadium</Link> in New York/New Jersey
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-route-line text-emerald-500"></i>
                Getting to the Stadium
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-train-line text-emerald-500 text-3xl"></i>
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
                      <i className="ri-time-line text-emerald-500"></i>
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
                    <i className="ri-car-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-taxi-line text-emerald-500 text-3xl"></i>
                    By Rideshare/Taxi
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    The designated rideshare pickup zone is at GWCC Bus Lane C on Northside Drive, about a 10-minute walk from Gate 1 via the Home Depot Backyard Bridge. Post-match surge pricing can be brutal—expect 2-3x normal rates. If wait times become excessive, walk to Vine City MARTA Station instead.
                  </p>
                </div>

                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-walk-line text-emerald-500 text-3xl"></i>
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
                <i className="ri-hotel-bed-line text-emerald-500"></i>
                Where to Stay
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-money-dollar-circle-line text-emerald-500 text-3xl"></i>
                    Budget Options ($80-150/night)
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Look to neighborhoods slightly outside downtown. East Point and Hapeville (near the airport) offer affordable chains with easy MARTA access. Hostels are scarce in Atlanta, but budget hotels along the Red/Gold MARTA lines provide the best value. Book accommodations early—World Cup demand will spike prices dramatically.
                  </p>
                </div>

                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-bank-card-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-vip-crown-line text-emerald-500 text-3xl"></i>
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
                <i className="ri-lightbulb-flash-line text-emerald-500"></i>
                Matchday Tips & Insider Advice
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-time-line text-emerald-500 text-3xl"></i>
                    Arrive Early
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Gates typically open 2 hours before kickoff for World Cup matches. Data shows over 6,000 Falcons fans per game now arrive an hour early to enjoy the food and atmosphere—expect World Cup crowds to follow suit. Security lines move efficiently but budget 20-30 minutes for entry during peak arrival times.
                  </p>
                </div>

                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-briefcase-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-restaurant-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-checkbox-circle-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-close-circle-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-train-line text-emerald-500 text-3xl"></i>
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
                <i className="ri-compass-3-line text-emerald-500"></i>
                Things to Do Nearby
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
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
                    <i className="ri-restaurant-2-line text-emerald-500 text-3xl"></i>
                    Fan Zones & Bars
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Downtown Atlanta isn't known for concentrated sports bar districts, but nearby options include Stats Brewpub and CNN Center food court establishments. For authentic Atlanta nightlife, venture to Midtown (10 minutes via MARTA) for craft cocktail bars along Crescent Avenue, or explore the vibrant BeltLine's Ponce City Market area for rooftop bars with skyline views.
                  </p>
                </div>

                <div>
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                    <i className="ri-community-line text-emerald-500 text-3xl"></i>
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
                <i className="ri-map-2-line text-emerald-500"></i>
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
                <i className="ri-compass-3-line text-emerald-500"></i>
                Beyond the Stadium: Explore Atlanta
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed">
                <p>
                  Explore our complete <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta World Cup 2026 Guide</Link> for essential travel info, neighborhoods, transport, and top experiences.
                </p>
                <p>
                  Catching multiple matches in the South? Visit
                  {' '}<Link to="/world-cup-2026-stadiums/att-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas,
                  {' '}<Link to="/world-cup-2026-stadiums/nrg-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">NRG Stadium</Link> in Houston, or
                  {' '}<Link to="/world-cup-2026-stadiums/hard-rock-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Hard Rock Stadium</Link> in Miami.
                </p>
                <p>
                  <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict & Key Takeaway */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-award-line text-emerald-500"></i>
                Final Verdict & Key Takeaway
              </h3>
              <div className="space-y-6">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Mercedes-Benz Stadium isn't just hosting World Cup matches—it's showcasing what happens when visionary ownership meets cutting-edge architecture and genuine commitment to fan experience. The stadium's LEED Platinum certification, revolutionary retractable roof, and fan-first pricing model make it unlike any venue you've experienced. The surrounding downtown energy, MARTA accessibility, and Atlanta's rich civil rights history create a matchday experience that transcends 90 minutes of football.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  This venue will love passionate supporters who appreciate architectural innovation, sustainable design, and affordable concessions. Don't miss the spectacle of the roof opening before kickoff—when eight massive petals retract to reveal the Atlanta sky, you'll understand why this stadium represents the future of sports architecture.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Book your accommodation now.</strong> Atlanta's hotel inventory will be stretched thin during the World Cup, and prices only climb as matches approach. Secure MARTA-accessible downtown or Midtown hotels 6-12 months in advance through booking platforms to lock in reasonable rates. Purchase parking passes the moment they become available if you're driving.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The world's football elite will descend on Atlanta in 2026. Make sure you're there to witness history beneath the most innovative roof in sports.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            
          </section>
        </div>
      )}
    </div>
  );
};