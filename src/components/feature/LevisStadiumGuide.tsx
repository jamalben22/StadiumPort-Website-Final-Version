import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface LevisStadiumGuideProps {
  onClose?: () => void;
}

// Levi's Stadium Guide — PART 1/4 content only
// Design language mirrors MetLife/Estadio Azteca/Arrowhead/SOFI guides: same spacing, icons, gradients, and responsiveness.
export const LevisStadiumGuide: React.FC<LevisStadiumGuideProps> = () => {
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
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Levis%20Stadium%20Santa%20Clara%20aerial%20view%2C%20modern%20NFL%20stadium%20architecture%20with%20Bay%20Area%20backdrop%2C%20California%20sports%20venue%20with%20tech%20innovation%2C%20dramatic%20lighting%2C%20Silicon%20Valley%20atmosphere&width=800&height=400&seq=levis1&orientation=landscape"
              alt="Levi's Stadium aerial view in Santa Clara"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Levi's Stadium
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">68,500 capacity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>Santa Clara, California</span>
                </div>
              </div>

              {/* 1–2 sentence tagline using exact sentences from Part 1 */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Picture this: you're standing inside one of America's most technologically advanced stadiums, surrounded by 68,500 roaring fans from every corner of the planet, as the world's best footballers compete under the California sun. Welcome to Levi's Stadium — the Bay Area's gateway to World Cup 2026, where cutting-edge innovation meets the beautiful game in the heart of Silicon Valley.
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
        <div className="animate-fade-in pt-20">
          {/* Header Section */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 p-8 md:p-12 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 dark:from-emerald-300 dark:to-sky-300 rounded-full animate-pulse"></div>
              <span className="text-emerald-500 dark:text-emerald-300 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Levi's Stadium
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-blue-400 dark:text-sky-300"></i>
                <span className="font-semibold">68,500 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span>Santa Clara, California (Silicon Valley, 40 miles south of San Francisco)</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Intro narrative paragraph block */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Levi's Stadium: Silicon Valley's World Cup Stage
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed mb-4">
                  Picture this: you're standing inside one of America's most technologically advanced stadiums, surrounded by 68,500 roaring fans from every corner of the planet, as the world's best footballers compete under the California sun. Welcome to Levi's Stadium — the Bay Area's gateway to World Cup 2026, where cutting-edge innovation meets the beautiful game in the heart of Silicon Valley.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed mb-4">
                  This isn't just any stadium. Levi's Stadium will host six FIFA World Cup 2026 matches: five group stage fixtures (June 13, 16, 19, 22, and 25) and one crucial Round of 32 clash on July 1. As the 49ers' gleaming home since 2014, this venue has already proven its mettle on football's biggest stages, hosting the 2016 Copa América Centenario, the 2017 Concacaf Gold Cup, and matches featuring international giants like F.C. Barcelona and A.C. Milan. Now it's ready to welcome the world.
                </p>
              </div>
            </div>

            {/* Stadium Overview & Fast Facts */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Official Name</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Levi's Stadium (FIFA designation: San Francisco Bay Area Stadium)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Location</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Santa Clara, California (Silicon Valley, 40 miles south of San Francisco)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-calendar-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Opened</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">July 17, 2014</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Capacity</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">68,500 (expandable to 75,000 for major events)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-user-star-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Primary Tenant</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">San Francisco 49ers (NFL)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-pencil-ruler-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Architect/Design Firm</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">HNTB Architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-money-dollar-circle-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Construction Cost</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">$1.27 billion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-leaf-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Surface Type</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Natural grass field</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-sun-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Roof Type</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Open-air stadium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-star-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Notable Features</span>
                      <ul className="list-disc list-inside text-slate-900 dark:text-slate-100 font-semibold">
                        <li>First NFL stadium to achieve LEED Gold certification</li>
                        <li>27,000-square-foot green roof with native plants</li>
                        <li>Faithful Farm — first rooftop farm on an NFL stadium</li>
                        <li>174 luxury suites and 8,500 club seats</li>
                        <li>State-of-the-art technology infrastructure with terabit capacity WiFi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* History & Legacy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-time-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                History & Legacy
              </h2>
              <div className="space-y-6 text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
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
            </div>

            {/* Stadium Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-pantone-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="space-y-6 text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
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
            </div>

            {/* What Matches to Expect */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-trophy-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="space-y-6 text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
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
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-route-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Getting to the Stadium
              </h2>

              {/* By Light Rail (Recommended) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Light Rail (Recommended)
                </h3>
                <p>
                  Valley Transportation Authority (VTA) Light Rail is the most direct route, with trains dropping passengers at Great America Station on the north side of the stadium. The station entrance is a 5-minute (0.32 km) walk from Levi's Stadium.
                </p>
                <div className="space-y-1">
                  <div><strong>Routes:</strong> Orange and Green Lines serve the stadium</div>
                  <div><strong>Frequency:</strong> Regular service plus enhanced matchday frequencies</div>
                  <div><strong>Cost:</strong> Standard VTA fare (around $2.50 one-way); joint Caltrain + VTA Day Pass available</div>
                </div>
                <p>
                  VTA adds extra light rail service up to two hours before games and one hour after, with ambassadors at key locations to guide passengers. Pro tip: arrive early for the best connections and avoid post-match congestion.
                </p>
              </div>

              {/* By Train from San Francisco */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Train from San Francisco
                </h3>
                <p>
                  Caltrain riders from San Francisco should take the train to Mountain View Station, then transfer to VTA light rail Orange Line for the 10-minute ride to Great America Station. A joint Caltrain + VTA Day Pass costs an additional $7.50 compared to a Caltrain Day Pass and is valid through the last train of the night.
                </p>
                <div className="space-y-1">
                  <div><strong>Journey time:</strong> Approximately 1 to 1.5 hours total from San Francisco</div>
                  <div><strong>Cost:</strong> $7-$10 one-way</div>
                </div>
                <p>
                  For fans coming from the East Bay, BART connects with VTA at Milpitas Station; transfer to the VTA Orange Line which serves Levi's Stadium.
                </p>
              </div>

              {/* By Car */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-car-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Car
                </h3>
                <div><strong>Address:</strong> 4900 Marie P DeBartolo Way, Santa Clara, CA 95054</div>
                <p>
                  Levi's Stadium is located near several major highways including US-101, State Route 237, and Interstate 880. The drive from San Francisco takes 45-60 minutes, though traffic during major events can extend the journey.
                </p>
                <p>
                  <strong>Parking:</strong> Stadium lots range from $30-$50 depending on the event and location. Pre-purchase parking passes through official channels to avoid sellouts. Over 21,000 parking spaces are available, including use of the adjacent Santa Clara Golf and Tennis Club fairways during major events.
                </p>
              </div>

              {/* By Rideshare / Taxi */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-taxi-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Rideshare / Taxi
                </h3>
                <p>
                  Rideshare drop-off is along the bus stop south of Great America Parkway, while pick-up is located at Red Lot 7. Expect fares from San Francisco to run $40-$70 one-way, with significantly higher prices during surge pricing after matches. Post-match rideshare pick-up involves a 10-15 minute walk to designated zones, and wait times can be lengthy.
                </p>
                <p>
                  Consider pre-booking airport transfer services through platforms like `https://www.booking.com`  for guaranteed rides without surge pricing headaches.
                </p>
              </div>

              {/* By Bike */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-bike-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  By Bike
                </h3>
                <p>
                  Multiple bicycle routes lead to Levi's Stadium via San Tomas Aquino Creek Trail, Guadalupe River Trail, and John W. Christian Greenbelt Trail. Free bicycle valet parking is available outside Gates A and C, opening 3 hours before events and staying open 1 hour after.
                </p>
              </div>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Where to Stay
              </h2>

              {/* Walking Distance (Under 1 Mile) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Walking Distance (Under 1 Mile)
                </h3>
                <p>
                  The Hilton Santa Clara and Hyatt Regency Santa Clara are both less than a 5-minute walk from Levi's Stadium, making them the ultimate convenience picks for World Cup matchdays. The Hilton features a heated outdoor pool, 24/7 fitness center with Peloton bikes, and California-inspired dining at La Fontana restaurant. Expect premium pricing during the tournament ($300-$500/night), but you can't beat rolling out of bed and strolling to the stadium.
                </p>
              </div>

              {/* Mid-Range Options (1-2 Miles) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Mid-Range Options (1-2 Miles)
                </h3>
                <p>
                  Santa Clara Marriott is about 1 mile from the stadium (25-minute walk), featuring a heated outdoor pool, hot tub, fitness center, and two restaurants including Bosc + Bartlett for casual dining. Embassy Suites by Hilton Santa Clara Silicon Valley offers indoor heated pool, fitness center, and included cooked-to-order breakfast. These properties typically run $200-$350/night.
                </p>
                <p>
                  For budget-conscious travelers, consider chain hotels in nearby Sunnyvale or San Jose (15-20 minutes away), easily accessible via light rail.
                </p>
              </div>

              {/* Alternative Accommodations */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Alternative Accommodations
                </h3>
                <p>
                  Airbnb and vacation rentals in Santa Clara neighborhoods offer excellent value for groups, with many properties just a 5-10 minute drive from the stadium, featuring full kitchens, outdoor spaces, and parking. Search platforms like `https://www.airbnb.com`  or `https://www.booking.com`  for options sleeping 4-8 guests.
                </p>
              </div>

              {/* Planning Advice */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Planning Advice
                </h3>
                <p>
                  Based on previous high-profile events at Levi's Stadium, hotel rooms in Santa Clara are expected to sell out quickly, with some properties requiring three-to-four-night minimum stays. Book early — ideally 6-12 months before the tournament — and consider staying in downtown San Jose (10 minutes away) or even San Francisco if you're planning to explore the broader Bay Area.
                </p>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>

              {/* Arrive Early */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-time-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Arrive Early
                </h3>
                <p>
                  VTA adds more light rail and buses two hours before games and one hour after. Plan to arrive at least 90-120 minutes before kickoff to navigate security, grab food, and soak in the pre-match atmosphere. World Cup crowds will be significantly larger than typical 49ers games.
                </p>
              </div>

              {/* What to Bring (Bag Policy) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-shopping-bag-3-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  What to Bring (Bag Policy)
                </h3>
                <p>
                  Levi's Stadium only allows clear bags, clear backpacks, fanny packs, or bags/purses measuring no larger than 12 x 6 x 12 inches. You can also bring a gallon-size clear plastic bag or small cloth bag (4.5 x 6.5 inches max). There is no bag check service, so don't bring anything that won't pass through security.
                </p>
                <div><strong>What you CAN bring:</strong> Sealed plastic water bottles (transparent only), sunscreen (small bottles), phones, wallets, keys</div>
                <div><strong>What you CAN'T bring:</strong> Glass bottles, thermoses, outside food, non-clear bags, umbrellas, large camera equipment</div>
              </div>

              {/* Beat the Heat */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-sun-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Beat the Heat
                </h3>
                <p>
                  June matches may expose east-side seats to intense afternoon sun, as the stadium lacks overhangs on that side. Bring sunscreen, wear a hat, and stay hydrated. Sealed transparent water bottles are permitted.
                </p>
              </div>

              {/* Food & Drink Strategy */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-restaurant-2-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Food & Drink Strategy
                </h3>
                <p>
                  Levi's Stadium's Touchdown Terrace on the outer concourse features portable stands from Bay Area restaurants including Barbacco (Italian), Copita (Mexican), The Chairman (Asian street food), Michael Mina's Bourbon Pub, and Salt & Straw ice cream. Popular dishes include Dungeness Crab Pretzels, Korean Bibimbap Bowls, Poke Nachos, and famous Garlic Fries.
                </p>
                <p>
                  The Tap Room at the 50-yard line features 40 craft, import, and domestic beers, plus California wines on tap. Expect stadium pricing ($12-15 for beers, $15-20 for entrees), but quality is generally solid. Some areas now offer "frictionless" checkout using smartphone scanning.
                </p>
              </div>

              {/* Best Gates/Sections */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-door-open-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Best Gates/Sections
                </h3>
                <p>
                  Gates A, B, and F are main entry points. For rideshare pick-up after matches, exit Gates A, B, or F to reach Red Lot 7. Lower bowl seats (sections 101-149) offer the best sightlines and atmosphere.
                </p>
              </div>

              {/* Post-Match Transport */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Post-Match Transport
                </h3>
                <p>
                  Expect crowds. VTA provides extra light rail service for up to one hour following events, with security managing queues on the Gate A side facing Tasman Drive. Be patient — trains will be packed. Consider hanging around the stadium area for 30-45 minutes after the final whistle to let crowds thin, grabbing a post-match drink at nearby hotels.
                </p>
              </div>
            </div>

            {/* Things to Do Nearby */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-pin-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Things to Do Nearby
              </h2>

              {/* Pre-Match: California's Great America */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-time-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Pre-Match: California's Great America
                </h3>
                <p>
                  California's Great America, located adjacent to the stadium, is Northern California's premier amusement park with over 40 rides and attractions, including thrilling roller coasters like RailBlazer and Gold Striker, plus South Bay Shores waterpark included with admission. Perfect for families making a day of it.
                </p>
              </div>

              {/* 49ers Museum */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-building-4-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  49ers Museum
                </h3>
                <p>
                  Located inside Levi's Stadium, the 49ers Museum takes visitors on an interactive journey featuring life-sized statues, stats, and biographies of legends like Jerry Rice, Steve Young, and Joe Montana, plus Bill Walsh's office recreation. Open on non-event days with free parking.
                </p>
              </div>

              {/* Santana Row (15 minutes) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-store-2-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Santana Row (15 minutes)
                </h3>
                <p>
                  For upscale dining and shopping, head to Santana Row in San Jose — a Mediterranean-style outdoor complex with restaurants, bars, boutiques, and a great pre- or post-match scene.
                </p>
              </div>

              {/* Downtown San Jose (15 minutes) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Downtown San Jose (15 minutes)
                </h3>
                <p>
                  Explore the Rosicrucian Egyptian Museum (featuring 4,000 ancient Egyptian artifacts — the largest collection in western North America), the Tech Interactive science museum, or San Pedro Square Market for local food and drinks.
                </p>
              </div>

              {/* Stanford University (15 minutes) */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-school-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Stanford University (15 minutes)
                </h3>
                <p>
                  Drive to nearby Palo Alto to tour Stanford's beautiful campus, including the de Saisset Museum featuring Renaissance to contemporary art, with works by Ansel Adams and Andy Warhol.
                </p>
              </div>

              {/* Fan Zones & Tailgating */}
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <i className="ri-flag-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
                  Fan Zones & Tailgating
                </h3>
                <p>
                  The Hilton Santa Clara operates "Tailg8" in their parking lot — open to the public 3 hours before Levi's Stadium events and 1 hour after, featuring food, drinks, and fellow fans. Official tailgating is permitted in ten designated stadium parking areas, with restrictions: use your parking spot only, no open-fire grilling, no glass containers, and all activities must cease at kickoff.
                </p>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-check-double-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              <div className="space-y-4 p-6 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <p>
                  Levi's Stadium is where Silicon Valley's tech-forward innovation meets the world's most passionate sporting event. This isn't a historic coliseum steeped in centuries of football lore — it's a gleaming, 21st-century marvel designed to deliver comfort, technology, and accessibility at every turn. The LEED Gold certification, rooftop farm, and terabit WiFi aren't just gimmicks; they represent a stadium built for the future.
                </p>
                <p>
                  <strong>Who will love it most?</strong> Travelers who appreciate modern amenities, tech-savvy fans who want seamless connectivity, and anyone who values efficient transport links and premium facilities. The lack of shade on hot days is a legitimate drawback, but thoughtful planning (sunscreen, hydration, strategic seating) will see you through.
                </p>
                <p>
                  <strong>One unforgettable experience you shouldn't miss:</strong> Arrive early to explore Touchdown Terrace on the outer concourse, sampling dishes from Bay Area culinary stars while soaking in the global energy of World Cup fans from every nation. Then find your seat in that massive lower bowl, feel the stadium shake with 68,500 voices, and witness history unfold in the heart of Silicon Valley.
                </p>
                <p>
                  <strong>Act now:</strong> With six World Cup matches on tap and hotels expected to sell out months in advance, book your accommodation early through `https://www.booking.com` , `https://www.expedia.com` , or `https://www.airbnb.com` . Secure transport plans (Caltrain + VTA combo tickets or pre-booked transfers), and get ready for the summer of a lifetime.
                </p>
                <p>
                  Welcome to Levi's Stadium. Welcome to World Cup 2026. The world is coming to Silicon Valley — will you be there?
                </p>
              </div>
            </div>

            {/* Got It Button */}
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