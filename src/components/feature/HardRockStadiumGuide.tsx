import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface HardRockStadiumGuideProps {
  onClose?: () => void;
}

// Hard Rock Stadium — PART 1/5
// Premium design system aligned with MetLife/Estadio Azteca/Arrowhead guides
export const HardRockStadiumGuide: React.FC<HardRockStadiumGuideProps> = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Preview Card - Collapsed State */}
      {!isExpanded && (
        <div className="relative">
          {/* Hero (gradient as placeholder to avoid external fetch issues) */}
          <div className="relative h-[520px] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-sky-500/60 via-emerald-500/50 to-indigo-600/60 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Overlay content for collapsed preview */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white truncate">
                      Hard Rock Stadium: Your Complete 2026 FIFA World Cup Guide
                    </h2>
                    <p className="mt-1 text-slate-700 dark:text-slate-300 text-sm">
                      Where Miami's Sunshine Meets Football's Biggest Stage
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800">
                      <i className="ri-team-line"></i>
                      <span className="font-medium">World Cup Capacity: 67,518</span>
                    </div>
                    <button
                      onClick={toggleExpanded}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                    >
                      <i className="ri-book-open-line mr-2"></i>
                      Read Full Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State (PART 1/5 content only, verbatim) */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Hero Section - Miami Style */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="/images/hard-rock-stadium-miami-world-cup-2026.webp"
                alt="Exterior view of Hard Rock Stadium in Miami, Florida, a major FIFA World Cup 2026 host venue."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <span className="text-2xl">🌴</span>
                <span className="text-white font-inter font-medium">Hard Rock Stadium • 67,518 Capacity</span>
                <span className="text-gold-400">•</span>
                <span className="text-emerald-300 font-semibold">World Cup Venue</span>
              </div>
              
              <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                Hard Rock Stadium
                <br />
                <span className="text-gold-400">FIFA World Cup 2026</span>
              </h1>
              
              <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Where Miami's Sunshine Meets Football's Biggest Stage
              </p>

              {/* Stadium Info Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-400/30">
                <i className="ri-map-pin-line text-emerald-300 text-lg"></i>
                <span className="text-emerald-200 font-inter font-medium">Miami Gardens, Florida • USA</span>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Where Miami's Sunshine Meets Football's Biggest Stage */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Where Miami's Sunshine Meets Football's Biggest Stage
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Picture this: a futuristic canopy shading 65,000 roaring fans from the Florida sun, palm trees swaying beyond the stadium walls, and the electric energy of a World Cup quarterfinal under the Miami night sky. Hard Rock Stadium will host seven World Cup 2026 matches, including four group stage games, a Round of 32 clash, a quarterfinal, and the prestigious third-place playoff — making it one of the tournament's most active venues.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  This isn't just another football stadium. Since opening in 1987, this Miami Gardens landmark has hosted six Super Bowls, the 2024 Copa América final, WrestleMania, and Formula 1's Miami Grand Prix. But what makes it truly special for World Cup 2026 is how it blends cutting-edge design with Miami's irresistible culture — where you can watch elite football in world-class comfort, then dance salsa in Little Havana or soak up South Beach vibes within 30 minutes.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The stadium's signature feature? An elegant open-air canopy that provides shade and weather protection while amplifying crowd noise, creating atmosphere that rivals any enclosed arena. Combined with Miami's unmatched international vibe and year-round sunshine, Hard Rock Stadium promises one of World Cup 2026's most memorable experiences.
                </p>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Stadium Overview & Fast Facts */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-information-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Official Name:</strong> Hard Rock Stadium (FIFA World Cup name: "Miami Stadium")
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-map-2-line text-sky-400 dark:text-sky-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Location:</strong> Miami Gardens, Florida (northern Miami suburb)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-road-map-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Address:</strong> 347 Don Shula Drive, Miami Gardens, FL 33056
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-calendar-2-line text-amber-400 dark:text-amber-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Opened:</strong> 1987
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-team-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>World Cup Capacity:</strong> 67,518
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-user-3-line text-sky-400 dark:text-sky-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Standard Capacity:</strong> 64,767
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-shield-star-line text-amber-400 dark:text-amber-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Primary Tenants:</strong> Miami Dolphins (NFL), Miami Hurricanes (NCAA)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Architect:</strong> HOK (original); HOK with Arquitectonica (2015-16 renovation)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-building-line text-sky-400 dark:text-sky-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Structural Engineer:</strong> Thornton Tomasetti
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-grid-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Surface Type:</strong> Natural grass
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-umbrella-line text-sky-400 dark:text-sky-300 text-xl"></i>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Roof Type:</strong> Open-air canopy covering seating areas (field exposed)
                  </p>
                </div>
                <div className="md:col-span-2 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold mb-3">
                    Notable Features:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                    <li>Massive cable-supported canopy suspended by eight concrete mega-columns and 350-foot steel masts</li>
                    <li>Four corner-mounted video boards</li>
                    <li>Over 1,090 tap handles (one of highest in NFL)</li>
                    <li>First privately-financed multipurpose stadium in US history</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* History & Legacy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-time-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                History & Legacy
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Hard Rock Stadium began life in 1987 as Joe Robbie Stadium, named after the Miami Dolphins' founder. It was revolutionary at the time — America's first major multipurpose venue built entirely with private financing, designed to accommodate both American football and baseball seamlessly.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Through the decades, it's been known as Pro Player Stadium, Dolphins Stadium, and Sun Life Stadium before Hard Rock Cafe International acquired naming rights in August 2016. Each era brought upgrades, but the venue's true transformation came with the $350 million modernization completed between 2015-2016.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The stadium's trophy cabinet is enviable: six Super Bowls (including Super Bowl LIV in 2020), two World Series, four BCS National Championships, and WrestleMania XXVIII. In 2024, it hosted the Copa América final between Argentina and Colombia, won 1-0 by Argentina. The venue has also welcomed tennis royalty at the Miami Open and roaring engines at Formula 1's Miami Grand Prix since 2022.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  For World Cup 2026, Miami's selection was strategic. The stadium's proven track record, substantial renovations completed in 2015-16, and Miami's status as an international gateway made it an obvious choice. The city's Cuban, Latin American, and Caribbean populations create a football-mad atmosphere unmatched in most US cities.
                </p>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Stadium Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-4-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Walking into Hard Rock Stadium feels like entering a spaceship that's crash-landed in the tropics. The defining architectural feature is its 14-acre canopy, supported by eight reinforced concrete super columns and 64 locked coil steel cables spanning up to 300 feet. It's engineering poetry — providing shelter from Miami's legendary afternoon downpours and scorching sun without enclosing the stadium, keeping that open-air football atmosphere alive.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The canopy's lightweight, elegant structure not only provides shade but amplifies crowd noise, creating an unmistakable home-field advantage. On matchday, you'll feel the roar bounce off the canopy and cascade down into the bowl — it's intimidating for opponents and exhilarating for supporters.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The stadium is symmetrical and two-tiered all the way around, meaning there isn't a bad seat in the house. Sightlines are excellent from every angle, a rarity in venues converted from American football. The seating bowl wraps tightly around the pitch, bringing fans close to the action.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Inside, the fan experience received meticulous attention during renovations. Every seat in the 29-year-old facility was replaced, and innovative seating products accommodate all fans, from corporate clients to families and millennials. The 100 and 300 Level concourses offer modern food service with local Miami flavor. Innovative "Living Room" boxes meld home viewing and game-day experiences, featuring four individual recliners, programmable HDTVs, and access to the exclusive 72 Club lounge.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Crucially for international visitors, accessibility is strong. The stadium meets modern standards with ADA parking, elevators to all levels, and companion seating throughout. Hard Rock Stadium became the first NFL venue to create a special allergy-friendly kitchen limiting gluten, nuts, milk, and shellfish allergens, ensuring every fan can enjoy the matchday food safely.
                </p>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* What Matches to Expect */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Hard Rock Stadium will host four group stage matches on June 15, 21, 24, and 27, kicking off World Cup action early in the tournament. You'll witness teams fighting for crucial points to advance, with the electric tension only group stage football can deliver.
                </p>
              </div>
            </div>

            {/* Knockout Stages & Final Phases */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <i className="ri-trophy-line text-emerald-500 dark:text-emerald-300 text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                  The knockout stages bring higher stakes.
                </h2>
              </div>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Miami will host one Round of 32 match, one quarterfinal, and the third-place playoff — the bronze medal match that closes out the tournament on July 18. That means Miami gets the honor of hosting one of the final games before the grand finale.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  With Miami's demographics — significant Latin American, Caribbean, and European communities — expect passionate, colorful support regardless of who's playing. Nearly 1 million visitors are expected to flood into Greater Miami for the tournament. The atmosphere will be distinctly international, blending Miami's multicultural energy with World Cup fever.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  While specific match assignments remain unconfirmed, the quarterfinal and third-place playoff suggest top-tier teams will grace this pitch. You might witness a heavyweight knockout clash or watch two elite sides battle for bronze in what's often an underrated spectacle of attacking football.
                </p>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-route-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Miami's public transit isn't London or Tokyo, but getting to Hard Rock Stadium for World Cup matches is absolutely manageable with planning. Here are your options:
                </p>
              </div>

              {/* By Metro & Bus (Most Economical) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-bus-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Metro & Bus (Most Economical)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Take the Metrorail to Golden Glades Interchange Station, then transfer to Metrobus Route 297 (East-West Connection) which takes you directly to Hard Rock Stadium. Total journey: approximately 1 hour 30 minutes from downtown Miami, depending on wait times.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Route 297 is your friend. This special event service operates two hours before and after major games, connecting with Metrorail at Earlington Heights, Brownsville, and Dr. Martin Luther King Jr. stations. Fare is just $2.25 each way — incredible value. Download the Miami-Dade Transit app for real-time updates.
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-emerald-800 dark:text-emerald-200">
                    <strong>Pro tip:</strong> Take Route 297 from Earlington Heights MetroMover Station early, as buses may run full by the time they reach subsequent stops.
                  </p>
                </div>
              </div>

              {/* By Brightline Train (Fast & Comfortable) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-train-line text-sky-400 dark:text-sky-300 text-3xl"></i>
                  By Brightline Train (Fast & Comfortable)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    This is the future arriving early. Brightline's Aventura station is roughly 7 miles from the stadium, and the Hard Rock Stadium Connect shuttle offers direct transport for select events. By World Cup 2026, expect Brightline to offer special tournament trains with coordinated shuttles — it's Florida's premium inter-city rail service connecting Miami, Fort Lauderdale, West Palm Beach, and Orlando.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Journey time from downtown Miami: 30-40 minutes including shuttle transfer. This is your best bet if you're staying in Fort Lauderdale or further north.
                  </p>
                </div>
              </div>

              {/* By Car (Parking Required) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-car-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  By Car (Parking Required)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Driving offers flexibility but requires pre-purchased parking. There will be no parking for purchase on-site on game days — you must buy passes in advance. Official parking ranges from $52 to $90 depending on zone and game importance.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    From downtown Miami: 25-30 minutes via I-95 North or Florida's Turnpike (traffic permitting). From Miami Beach: 35-45 minutes. From Fort Lauderdale Airport: 25 minutes.
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200">
                    <strong>Traffic warning:</strong> Miami's game-day traffic is infamous. Leave 90 minutes before kickoff minimum, especially for evening matches when rush hour compounds congestion.
                  </p>
                </div>
              </div>

              {/* By Rideshare (Convenient but Surge Pricing) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-taxi-line text-sky-400 dark:text-sky-300 text-3xl"></i>
                  By Rideshare (Convenient but Surge Pricing)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Uber and Lyft are everywhere in Miami. The ride from downtown hotels typically takes 30-40 minutes depending on traffic. Expect $35-50 each way normally, but surge pricing on World Cup matchdays could double or triple that.
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800">
                  <p className="text-sky-900 dark:text-sky-200">
                    <strong>Important:</strong> Post-match rideshare pickup can be chaotic. Recent matchday experiences report "disaster" trying to leave, with unofficial drivers trying to hussle rides. Stay patient, use designated pickup zones, and consider walking 10-15 minutes away from the stadium to escape congestion.
                  </p>
                </div>
              </div>

              {/* Budget Alternative: Park & Ride */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-parking-box-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Budget Alternative: Park & Ride
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Hard Rock Stadium introduced a Park & Ride option for approximately $10, with free shuttles to the stadium — saving $60-80 versus official lots. Locations will be announced closer to match dates, but this is your best value if driving.
                  </p>
                </div>
              </div>

              {/* From Airports */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-flight-takeoff-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  From Airports
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Miami International Airport (MIA):</strong> 20 minutes by car, 45 minutes via Metrorail + bus. Closest major airport.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Fort Lauderdale-Hollywood (FLL):</strong> 30 minutes by car, slightly longer by Tri-Rail + transfer. Often cheaper flights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Where to Stay
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Miami offers accommodation for every budget, but with World Cup 2026 bringing unprecedented crowds, book early. Here's the strategic breakdown:
                </p>
              </div>

              {/* Near the Stadium (Convenience First) */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-map-pin-line text-sky-400 dark:text-sky-300 text-3xl"></i>
                  Near the Stadium (Convenience First)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Hotels in Miami Gardens, Aventura, and nearby neighborhoods put you closest to matchday action. Properties like Miami Lakes Hotel offer shuttle service to Hard Rock Stadium and appeal to fans prioritizing quick stadium access. Stadium Hotel is literally one mile from Hard Rock Stadium with 217 balcony rooms — perfect if football is your only priority.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Budget:</strong> Quality Inn, La Quinta Miami Lakes ($120-200/night)
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Mid-Range:</strong> Hilton Miami Aventura, Hampton Inn Miramar ($180-280/night)
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Upscale:</strong> JW Marriott Turnberry Resort & Spa ($350+/night)
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Pros:</strong> Short commute, quieter neighborhoods, often better value
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Cons:</strong> Limited nightlife, farther from Miami's cultural attractions
                    </p>
                  </div>
                </div>
              </div>

              {/* Downtown Miami & Brickell (Best Balance) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Downtown Miami & Brickell (Best Balance)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Downtown/Brickell is as central as it gets, with great public transport, array of dining options, and the FIFA Fan Festival expected downtown so you could walk from your hotel to watch matches on giant screens. It's 25-30 minutes to the stadium but puts you in Miami's cosmopolitan heart.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Budget:</strong> Sleep Inn Miami Springs near airport ($110-180/night)
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Mid-Range:</strong> AC Hotel Miami Brickell, Courtyard Downtown ($200-350/night)
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Luxury:</strong> Kimpton Epic, InterContinental Miami ($400-700/night)
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Pros:</strong> Central location, public transit hub, business hotels with solid amenities
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Cons:</strong> Less "beachy" Miami vibe, matchday commute requires planning
                    </p>
                  </div>
                </div>
              </div>

              {/* Miami Beach & South Beach (Ultimate Experience) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-beach-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  Miami Beach & South Beach (Ultimate Experience)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Miami Beach puts you on famous white sand beaches with trendy nightlife and world-class dining, though the big nightclubs are here, about 15 minutes from Downtown by taxi. It's 40-50 minutes to the stadium, but you're living the full Miami dream.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Budget:</strong> South Beach hostels, budget chains in North Beach ($100-200/night)</p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Mid-Range:</strong> Local House Miami Beach (boutique, eco-friendly, $250-400/night)</p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Luxury:</strong> The Ritz-Carlton Bal Harbour, Acqualina Resort, The St. Regis Bal Harbour ($500-1000+/night)</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Pros:</strong> Iconic beach experience, incredible food scene, nightlife capital</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Cons:</strong> Longest stadium commute, most expensive area, crowded during World Cup</p>
                  </div>
                </div>
              </div>

              {/* Hollywood & Fort Lauderdale (Value Alternative) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  <i className="ri-compass-3-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Hollywood & Fort Lauderdale (Value Alternative)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Dolce by Wyndham Hollywood offers matchday shuttle service to Hard Rock Stadium and sits across from Seminole Hard Rock Casino. Hollywood Beach provides quieter beach vibes than South Beach at better prices.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Budget:</strong> Best Western Hollywood, extended stays ($120-200/night)</p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Mid-Range:</strong> Margaritaville Hollywood Beach Resort, 9 miles from stadium with family-friendly beach access ($280-450/night)</p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Luxury:</strong> DoubleTree Resort Hollywood Beach ($350-600/night)</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Pros:</strong> Good value, beach access, shorter stadium distance than South Beach</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Cons:</strong> Outside Miami proper, requires car or longer transit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Booking Strategy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-calendar-check-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Booking Strategy
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ol className="list-decimal pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                  <li><strong>Book now.</strong> With nearly 1 million visitors expected, hotels will fill fast</li>
                  <li><strong>Use flexible rate options</strong> through `https://booking.com`  or Expedia to adjust if match schedules change</li>
                  <li><strong>Consider Airbnb</strong> for groups or longer stays — Miami has excellent vacation rental inventory</li>
                  <li><strong>Check hotel shuttle services</strong> — many properties add World Cup shuttles for major events</li>
                </ol>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>

              {/* Arrive Early (Seriously) */}
              <div className="mt-2">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-time-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Arrive Early (Seriously)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Plan to arrive at least 1-2 hours before kickoff to find parking, go through security, and get settled. World Cup security will be more thorough than regular Dolphins games. Gates typically open 2-3 hours before kickoff — use that time to soak in the atmosphere, grab food, and explore.
                  </p>
                </div>
              </div>

              {/* What to Bring (Bag Policy is Strict) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-shopping-bag-4-line text-sky-400 dark:text-sky-300 text-3xl"></i>
                  What to Bring (Bag Policy is Strict)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Hard Rock Stadium enforces a clear bag policy: only clear plastic bags up to 12" x 6" x 12" are permitted, or small clutches no larger than 4.5" x 6.5". This is non-negotiable. Don't show up with a backpack.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">Allowed:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                    <li>Factory-sealed plastic water bottles 20 oz. or less</li>
                    <li>Phone, wallet, keys</li>
                    <li>Binoculars, small camera</li>
                    <li>Medical items (with documentation)</li>
                    <li>Sunscreen (critical in Florida!)</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold mt-4">Prohibited:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                    <li>Backpacks, large bags, coolers</li>
                    <li>Outside food/beverages (except sealed water)</li>
                    <li>Professional cameras with detachable lenses</li>
                    <li>Umbrellas (the canopy has you covered)</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200">
                    Bag check is available near Gates 3, 5, 8, and 14 for $12-20, but closes 60 minutes after gates close — don't rely on this.
                  </p>
                </div>
              </div>

              {/* Food & Drink Inside */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-restaurant-2-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Food & Drink Inside
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Hard Rock Stadium punches above its weight for stadium cuisine. The venue offers 38 branded food concepts, with 70% sourcing from South Florida vendors. This isn't your typical hotdog-and-nachos situation.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">Must-try vendors:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                    <li><strong>Café Versailles</strong> for authentic Cuban sandwiches and croquetas (Little Havana institution since 1971)</li>
                    <li><strong>Mojo Donuts</strong> for the Abuelita donut filled with arroz con leche</li>
                    <li><strong>Fuku</strong> for David Chang's spicy fried chicken sandwich</li>
                    <li><strong>O-B House</strong> for Fort Lauderdale-favorite pancakes (early games)</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                    Beer selection is exceptional. Over 50 craft beers available at two taprooms. Prices are stadium-standard ($10-14 for beer, $5-8 for food items), but quality justifies the cost.
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800">
                  <p className="text-sky-900 dark:text-sky-200">
                    <strong>Pro tip:</strong> The stadium is completely cashless — convert cash to prepaid VISA gift cards at team stores if needed.
                  </p>
                </div>
              </div>

              {/* Beat the Heat */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-temp-hot-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  Beat the Heat
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Miami in June-July is hot. Really hot. Miami's heat can be intense, so carry water and stay hydrated. The canopy provides shade, but it's still 85-95°F (29-35°C) with humidity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">Heat survival:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                    <li>Wear lightweight, light-colored clothing</li>
                    <li>Bring sunscreen (even under the canopy, reflected UV is real)</li>
                    <li>Hydrate constantly — water refill stations available</li>
                    <li>Consider evening matches if heat-sensitive</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Post-Match Exit Strategy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-walk-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Post-Match Exit Strategy
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  This is where patience pays off. Parking lot and rideshare exits can be chaotic, with reports of "disaster" experiences. Options:
                </p>
                <ol className="list-decimal pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                  <li><strong>Wait 30 minutes</strong> — grab a post-match beer, let crowds thin</li>
                  <li><strong>Walk 10-15 minutes away</strong> before calling rideshare to avoid surge zones</li>
                  <li><strong>Use public transit</strong> — Route 297 buses run two hours after games</li>
                  <li><strong>Pre-arrange pickup location</strong> away from main gates</li>
                </ol>
              </div>
            </div>

            {/* What NOT to Do */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-close-circle-line text-rose-400 dark:text-rose-300 text-4xl"></i>
                What NOT to Do
              </h2>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                <li>Don't bring prohibited bags (you'll waste time going back to car)</li>
                <li>Don't underestimate travel time — Miami traffic is unpredictable</li>
                <li>Don't skip sunscreen (Florida sun is unforgiving)</li>
                <li>Don't bring strollers into seating sections (storage available)</li>
                <li>Don't leave valuables in car — parking lots see heavy foot traffic</li>
              </ul>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Things to Do Nearby */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-map-pin-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Things to Do Nearby
              </h2>

              {/* Pre-Match: Fan Zones & Tailgating */}
              <div className="mt-2">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-flag-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Pre-Match: Fan Zones & Tailgating
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    While Hard Rock Stadium isn't surrounded by traditional sports bars (it's in suburban Miami Gardens), the stadium itself creates the atmosphere. Premium experiences include the Members Lounge in the MIA Event Center and the MIA Garage Tailgate adjacent to the North entrance.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    For authentic pregame vibes, head to downtown Miami or Wynwood 3-4 hours before kickoff, soak in the fan festival atmosphere, then transit to the stadium.
                  </p>
                </div>
              </div>

              {/* Cultural Experiences (20-30 Minutes Away) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-brush-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  Cultural Experiences (20-30 Minutes Away)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Wynwood Walls (25 minutes):</strong><br/>
                    Miami's street art capital featuring famous murals by global artists, craft breweries, trendy cafes, and an outdoor museum atmosphere — admission is free. Perfect for colorful photos and pre-match energy.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Neighborhood Highlights */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-community-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Neighborhood Highlights
              </h2>
              {/* Little Havana (30 minutes) */}
              <div className="mt-2">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-community-line text-amber-400 dark:text-amber-300 text-3xl"></i>
                  Little Havana (30 minutes)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Experience Cuban culture at its most vibrant on Calle Ocho (SW 8th Street) with art galleries, Cuban restaurants, the Latin Walk of Fame, and Ball & Chain for live Latin jazz. This is non-negotiable for World Cup visitors wanting authentic Miami culture.
                  </p>
                </div>
              </div>
              {/* South Beach & Art Deco District (40 minutes) */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                  <i className="ri-building-3-line text-sky-400 dark:text-sky-300 text-3xl"></i>
                  South Beach & Art Deco District (40 minutes)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Famous white sand beaches, turquoise waters, pastel Art Deco buildings, and iconic Ocean Drive. Arrive early morning or late afternoon to avoid peak crowds.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Nature Escapes */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-leaf-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Nature Escapes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Everglades National Park (45 minutes):</strong>
                    Unique subtropical wilderness — book an airboat tour to see alligators in their natural habitat. Half-day excursion ideal for rest days between matches.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Key Biscayne & Bill Baggs Park (35 minutes):</strong>
                    Beautiful beaches with historic lighthouse, less crowded than South Beach, perfect for post-match recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Nightlife & Celebration */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-night-clear-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Nightlife & Celebration
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-beer-line text-emerald-400 dark:text-emerald-300"></i>
                    Wynwood Breweries:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Wynwood Brewing Co. and J. Wakefield Brewing (Star Wars-themed) offer craft beer in hip industrial spaces. Great for post-match casual celebration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-building-line text-sky-400 dark:text-sky-300"></i>
                    Brickell Lounges:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Miami's financial district transforms into sophisticated nightlife after dark. Rooftop bars with skyline views, upscale cocktails, international crowd.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-music-2-line text-rose-400 dark:text-rose-300"></i>
                    South Beach Clubs:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    World-famous nightlife — LIV at Fontainebleau, Story, and E11EVEN for when you want to dance until sunrise. Dress codes enforced, expensive, but uniquely Miami.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Tours & Activities */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-compass-3-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Tours & Activities
              </h2>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                <li><strong>Biscayne Bay boat tours</strong> — see celebrity mansions and Miami skyline from water</li>
                <li><strong>Little Havana food walking tour</strong> — taste authentic Cuban cuisine with cultural context</li>
                <li><strong>Vizcaya Museum & Gardens</strong> — stunning Italian Renaissance villa overlooking the bay</li>
              </ul>
            </div>

            {/* Divider '---' */}
            <div className="relative">
              <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <span className="sr-only">---</span>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-star-smile-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Hard Rock Stadium delivers something rare in World Cup venues: world-class football infrastructure wrapped in genuine cultural excitement. This isn't a soulless suburban bowl — Miami's international DNA, diverse neighborhoods, and infectious energy make it feel like a true World Cup host city.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">Who will love it most:</p>
                <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 mb-6">
                  <li>Fans who want beaches AND football (30-minute drive to paradise)</li>
                  <li>Food lovers (stadium cuisine and Miami restaurants are exceptional)</li>
                  <li>Groups traveling together (accommodation options for every budget)</li>
                  <li>Anyone seeking an authentic international atmosphere</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  <strong>The one unforgettable thing you shouldn't miss:</strong> Arrive early enough to walk Miami's neighborhoods before your match. Start in Little Havana for a Cuban coffee and pastelito, drift through Wynwood's street art, then head to the stadium. That journey — from sipping cafecito to hearing 67,000 fans roar under the canopy — captures what makes this venue special. It's not just a stadium; it's Miami's entire multicultural soul compressed into 90 minutes of football.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold mb-6">
                  Book early, pack light (remember that clear bag policy!), embrace the heat, and get ready for World Cup magic where the sunshine never quits.
                </p>
                <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 dark:from-emerald-900/20 dark:to-sky-900/20 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-slate-800 dark:text-slate-200 italic">
                    Ready to secure your Miami World Cup experience? Book accommodations through `https://booking.com` , `https://expedia.com` , or `https://airbnb.com`  to lock in rates before the rush. Airport transfers and car rentals through major providers ensure smooth arrival — Miami rewards advance planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Controls — match MetLife premium single button */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleGotItClick}
                className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 px-6 py-3"
              >
                <i className="ri-check-line mr-2"></i>
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};