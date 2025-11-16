import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface BCPlaceStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const BCPlaceStadiumGuide: React.FC<BCPlaceStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {showHeader && <Header />}

      {/* Collapsed Preview Card (MetLife/Azteca-style) */}
      {!expanded && !hideHero && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <div className="relative h-56 sm:h-72 md:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=BC%20Place%20Vancouver%20retractable%20roof%20stadium%20with%20mountain%20and%20ocean%20backdrop%2C%20downtown%20Vancouver%20aerial%20view%2C%20dramatic%20lighting%2C%20Pacific%20Northwest%20atmosphere&width=1200&height=600&seq=bcplace-hero&orientation=landscape')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                  BC Place Stadium: Your Ultimate 2026 FIFA World Cup Guide
                </h1>
                <p className="mt-2 text-white/90 max-w-3xl">
                  Where Mountains Meet Ocean Meet the Pitch
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="inline-flex items-center gap-2">
                  <i className="ri-map-pin-line text-emerald-500"></i>
                  <span>Downtown Vancouver, British Columbia</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2">
                  <i className="ri-group-line text-sky-500"></i>
                  <span>Capacity: 54,000 (World Cup configuration)</span>
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-navy-900 text-white hover:bg-navy-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <i className="ri-book-open-line mr-2"></i>
                Read Full Guide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Premium Guide — Editorial layout matching NYC guide */}
      {expanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — cohesive with NYC guide styling */}
          {!hideHero && (
            <section className="editorial-hero">
              <div className="editorial-hero-media">
                <OptimizedImage
                  src="/images/stadiums/bc-place-vancouver-world-cup-2026.webp"
                  alt="Interior view of BC Place Stadium in Vancouver, Canada, showcasing the venue for FIFA World Cup 2026 matches."
                  className="editorial-hero-image-wrapper"
                  imgClassName="editorial-hero-image"
                  width={1600}
                  height={900}
                  placeholder="empty"
                  sizes="100vw"
                  priority={true}
                />
                <div className="editorial-hero-overlay"></div>
              </div>
              <div className="editorial-hero-content">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
                  <ol className="flex items-center gap-2 text-sm text-white/90">
                    <li><Link to="/" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                    <li className="opacity-70">›</li>
                    <li><Link to="/world-cup-2026-stadiums" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Stadiums</Link></li>
                    <li className="opacity-70">›</li>
                    <li>BC Place</li>
                  </ol>
                </nav>
                <div className="editorial-hero-inner">
                  <div className="editorial-hero-eyebrow">
                    <span className="editorial-hero-pulse"></span>
                    <span>World Cup 2026</span>
                  </div>
                  <h1 className="editorial-hero-title">BC Place Stadium</h1>
                  <div className="editorial-hero-meta">
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-group-line"></i>
                      <span>54,000 capacity</span>
                    </div>
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      <span>Vancouver, Canada</span>
                    </div>
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-sun-line"></i>
                      <span>Cable-supported retractable roof</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Content Sections — Editorial presentation */}
          <main className="editorial-article py-12">
            {/* Introduction — exact text preserved */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-landscape-line text-emerald-500"></i>
                Where Mountains Meet Ocean Meet the Pitch
              </h2>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                There's something magical about watching world-class football under a retractable roof that opens to reveal snow-capped mountains and Pacific skies. Located in the beating heart of <Link to="/world-cup-2026-host-cities/vancouver" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Vancouver</Link>, BC Place isn't just another tournament venue—it's where Canada's World Cup dream becomes reality. <strong>BC Place is one of the </strong>
                <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>
                {`, welcoming 54,000 fans in a stadium that's hosted everything from Olympic glory to the Women's World Cup Final. This architectural marvel combines cutting-edge technology with West Coast soul, offering international fans an experience that's quintessentially Canadian: sophisticated, stunning, and accessible. When the world descends on Vancouver in June and July 2026, BC Place will prove why it's one of North America's most electrifying football venues.`}
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-information-line text-emerald-500"></i>
                Stadium Overview & Fast Facts
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-building-2-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Official Name</span>
                      <p className="leading-relaxed">BC Place Stadium</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-map-pin-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Location</span>
                      <p className="leading-relaxed">Downtown Vancouver, British Columbia (777 Pacific Boulevard)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-calendar-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Opened</span>
                      <p className="leading-relaxed">June 19, 1983</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-group-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Capacity</span>
                      <p className="leading-relaxed">54,000 (World Cup configuration)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-user-star-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Primary Tenants</span>
                      <p className="leading-relaxed">Vancouver Whitecaps FC (MLS), BC Lions (CFL)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-pencil-ruler-2-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Original Architect</span>
                      <p className="leading-relaxed">Studio Phillips Barratt, Ltd.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-pencil-ruler-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Renovation Architects (2010-2011)</span>
                      <p className="leading-relaxed">Stantec Architecture Ltd., Geiger Engineers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-football-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Surface Type</span>
                      <p className="leading-relaxed">Natural grass (installed for World Cup, FIFA specification)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-sun-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Type</span>
                      <p className="leading-relaxed">Cable-supported retractable roof (world's largest of its kind)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div>
                      <i className="ri-arrow-up-down-line text-emerald-500 text-3xl mr-2"></i>
                      <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Opening</span>
                      <p className="leading-relaxed">100m x 85m (7,500 square metres of open sky)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>Notable Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Second-largest centre-hung HD video board in North America</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>36-foot LED exterior facade lighting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Fully retractable in 20 minutes</span>
                  </div>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500"></i>
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
                <i className="ri-building-3-line text-emerald-500"></i>
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
                <i className="ri-calendar-event-line text-emerald-500"></i>
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
                  Just 3 hours south, catch matches at <Link to="/world-cup-2026-stadiums/lumen-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Lumen Field</Link> in Seattle. Also explore <Link to="/world-cup-2026-stadiums/bmo-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BMO Field</Link> in Toronto for coast-to-coast Canada, and on the West Coast, <Link to="/world-cup-2026-stadiums/levis-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Levi's Stadium</Link>.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-train-line text-emerald-500"></i>
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

<p><em>{`Airport Transfer Tip: Consider booking private airport transfers through `}<a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">booking.com</a>{`  or pre-arranging car rentals to explore Vancouver and surrounding areas between matches—the Sea-to-Sky Highway to Whistler is one of the world's most scenic drives.`}</em></p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Where to Stay */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500"></i>
                Where to Stay
              </h3>
              <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
                <p><strong>Downtown Core (Walking Distance):</strong> {`Staying downtown puts you 10-20 minutes on foot from BC Place while immersing you in Vancouver's energy. The Georgian Court Hotel (just steps from the stadium) offers boutique elegance, while YWCA Hotel Vancouver provides excellent budget-friendly rooms within easy walking distance. Hampton Inn & Suites Vancouver Downtown delivers reliable mid-range comfort with modern amenities.`}</p>

                <p><strong>Yaletown (10-15 Minute Walk):</strong> {`Vancouver's trendiest neighborhood combines heritage industrial architecture with upscale dining and nightlife. L'Hermitage Hotel and Rosedale on Robson Suite Hotel offer stylish accommodations with full kitchens—perfect for extended stays. Yaletown's pedestrian-friendly streets and Canada Line access make it ideal for blending stadium access with sightseeing.`}</p>

                <p><strong>Gastown (15-Minute Walk or Quick Transit):</strong> {`Vancouver's oldest neighborhood features cobblestone streets, Victorian architecture, and exceptional restaurants. While accommodation options are limited compared to downtown, the location offers authentic Vancouver character and easy Stadium-Chinatown SkyTrain access.`}</p>

                <p><strong>Budget Options:</strong> {`HI Vancouver Central and Samesun Vancouver provide hostel accommodations with private rooms available. Both offer social atmospheres perfect for meeting fellow football fans. Slightly outside downtown, these locations connect easily via transit.`}</p>

                <p><strong>Luxury Experiences:</strong> {`JW Marriott Parq Vancouver and the DOUGLAS, Autograph Collection combine five-star service with proximity to BC Place (literally adjacent to the stadium). Fairmont Hotel Vancouver and Rosewood Hotel Georgia deliver historic grandeur with modern luxury in the downtown core.`}</p>

<p><em>{`Booking Strategy: Vancouver's peak summer tourism season coincides with the World Cup. Secure accommodation 6-12 months ahead through `}<a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">booking.com</a>{`  or `}<a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia</a>{` for best selection and rates. Consider Airbnb options in neighborhoods like Mount Pleasant or Main Street—just 10-15 minutes by transit but offering authentic local flavor at lower prices.`}</em></p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Matchday Tips & Insider Advice */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-lightbulb-line text-emerald-500"></i>
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
                <i className="ri-suitcase-line text-emerald-500"></i>
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
                <i className="ri-close-circle-line text-emerald-500"></i>
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
                <i className="ri-navigation-line text-emerald-500"></i>
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
                <i className="ri-compass-3-line text-emerald-500"></i>
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
                <i className="ri-football-line text-emerald-500"></i>
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
                <i className="ri-trophy-line text-emerald-500"></i>
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
                <i className="ri-compass-3-line text-emerald-500"></i>
                Beyond the Stadium: Explore Vancouver
              </h3>
              <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
                <p>
                  Vancouver's stunning natural beauty and cosmopolitan culture make it a premier World Cup 2026 destination.
                </p>
                <div>
                  <p className="font-semibold">Discover Vancouver:</p>
                  <p>
                    Explore our complete <Link to="/world-cup-2026-host-cities/vancouver" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Vancouver World Cup 2026 Guide</Link> for everything you need:
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
                    Just 3 hours south, catch matches at <Link to="/world-cup-2026-stadiums/lumen-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Lumen Field</Link> in Seattle. Also check out <Link to="/world-cup-2026-stadiums/bmo-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BMO Field</Link> in Toronto for coast-to-coast Canada.
                  </p>
                </div>
                <p>
                  <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict & Key Takeaway */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-check-double-line text-emerald-500"></i>
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

            {/* Back CTA — editorial style aligned right */}
            <div className="mt-8 flex justify-end">
              <Link to="/world-cup-2026-stadiums" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">
                <i className="ri-check-line mr-2"></i>
                Got It
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};