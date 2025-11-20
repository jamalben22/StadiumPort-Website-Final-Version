import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface BMOFieldGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

// BMO Field — PART 1/4
// Premium design system aligned with MetLife/Estadio Azteca/Arrowhead guides
export const BMOFieldGuide: React.FC<BMOFieldGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

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
            <li className="text-slate-700 dark:text-slate-200">BMO Field</li>
          </ol>
        </nav>
      )}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
            <div className="relative h-[520px] overflow-hidden">
              <OptimizedImage
                src="/images/stadiums/bmo-field-toronto-world-cup-2026.webp"
                alt="Exterior view of BMO Field in Toronto, Canada, one of the official FIFA World Cup 2026 stadiums."
                className="absolute inset-0"
                imgClassName="object-cover"
                width={1600}
                height={900}
                placeholder="blur"
                sizes="100vw"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Preview Content removed to match established stadium page patterns */}
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State (PART 1/4 content only, verbatim) */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — matched to NYC guide styling */}
          {!hideHero && (
          <section className="editorial-hero">
            <div className="editorial-hero-media">
              <OptimizedImage
                src="/images/stadiums/bmo-field-toronto-world-cup-2026.webp"
                alt="Exterior view of BMO Field in Toronto, Canada, one of the official FIFA World Cup 2026 stadiums."
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
              <div className="editorial-hero-inner">
                <h1 className="editorial-hero-title">BMO Field</h1>
                <div className="editorial-hero-meta">
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-group-line"></i>
                    <span>~45,736 capacity</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    <span>Toronto, Ontario</span>
                  </div>
                </div>
                <p className="text-slate-200 dark:text-slate-200/90 mt-4 max-w-2xl">
                  Your complete 2026 FIFA World Cup stadium guide for Toronto's lakefront soccer cathedral.
                </p>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections — Editorial presentation */}
          <section className="editorial-article py-12">
            {/* Canada's Soccer Cathedral Prepares for Its Biggest Moment */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Canada's Soccer Cathedral Prepares for Its Biggest Moment
              </h3>
              <div>
                <p className="leading-relaxed mb-6"><span className="editorial-first-letter">L</span>ocated in <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Toronto</Link>, BMO Field is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">World Cup 2026</Link>. On June 12, 2026, history will be made when Canada's men's national team takes the pitch for the country's first-ever men's FIFA World Cup match on home soil. This lakefront venue—Canada's original soccer-specific stadium—has spent nearly two decades building toward this moment, evolving from a modest 20,000-seat arena into a crown jewel ready to welcome the world's greatest tournament.</p>
                <p className="leading-relaxed">
                  BMO Field will host six World Cup matches total, including five group stage fixtures and one knockout round game, with a temporarily expanded capacity reaching 45,736 seats. The stadium sits on Exhibition Place, where Toronto's sporting heritage runs deep, offering international fans an intimate yet electric atmosphere that European visitors will recognize—this is no cavernous NFL bowl, but a purpose-built football stadium where every seat brings you close to the action. Toronto joins Vancouver as Canada's two host cities for the tournament, which will be jointly staged across 16 venues in the United States, Mexico, and Canada.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-information-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Official Name:</strong> BMO Field (will be "Toronto Stadium" during World Cup per FIFA naming protocols)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Location:</strong> Exhibition Place, Old Toronto, Ontario
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-calendar-line text-blue-400 dark:text-sky-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Opened:</strong> April 28, 2007
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
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
                  <i className="ri-community-line text-blue-400 dark:text-sky-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Original Architect:</strong> Brisbin Brook Beynon Architects
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-building-line text-blue-400 dark:text-sky-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Expansion Architect:</strong> Gensler (2014-2016)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <p className="leading-relaxed">
                    <strong>Surface Type:</strong> Natural grass (Kentucky Bluegrass)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-umbrella-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
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
                <i className="ri-time-line text-gold-400 dark:text-amber-300 text-4xl"></i>
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
                <i className="ri-building-4-line text-blue-400 dark:text-sky-300 text-4xl"></i>
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
                <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
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
                <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Getting to the Stadium
              </h3>
              <p className="leading-relaxed">
                BMO Field's location at Exhibition Place, just west of downtown, offers multiple convenient transport options—though matchday crowds will test every system. Plan ahead and allow extra time.
              </p>

              {/* Transport Options */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div className="space-y-2 leading-relaxed">
                    <p>
                      <strong>By GO Train (Recommended):</strong>  Exhibition GO Station sits directly adjacent to BMO Field, just one stop west of Union Station on the Lakeshore West line. The journey takes 7 minutes and costs $3-5. Trains run every 20 minutes normally, with increased service on event days. Exit the station and you're a 2-minute walk from the north entrance. This is your fastest, most reliable option from downtown or Pearson Airport (via Union Station).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-train-line text-sky-400 dark:text-sky-300 text-xl"></i>
                  <div className="space-y-2 leading-relaxed">
                    <p>
                      <strong>By TTC Streetcar:</strong>  From Union Station, take the 509 Harbourfront streetcar toward Fleet Loop, then transfer to the 509/511 replacement bus toward Lake Shore and Bathurst. Walk south on Nova Scotia Avenue to reach the stadium. From Bathurst Station on Line 2 (Bloor), board the 511 streetcar using the same transfer. Journey time: 25-35 minutes from downtown.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-bus-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div className="space-y-2 leading-relaxed">
                    <p>
                      <strong>By TTC Bus:</strong>  From Dufferin Station on Line 2, take the 29 bus south directly to Exhibition, with service operating every few minutes on event days. This route deposits you at the north end of Exhibition Place, a 5-minute walk to BMO Field.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-subway-line text-blue-400 dark:text-sky-300 text-xl"></i>
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
                  <i className="ri-taxi-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
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
                <i className="ri-hotel-line text-emerald-400 dark:text-emerald-300"></i>
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
                <i className="ri-walk-line text-emerald-400 dark:text-emerald-300"></i>
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
                <i className="ri-map-pin-2-line text-sky-400 dark:text-sky-300"></i>
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

            {/* PART 4/4 — Post-Match Celebrations & Final Verdict (verbatim content) */}
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
                Planning matches across North America? Consider <Link to="/world-cup-2026-stadiums/bc-place-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BC Place</Link> in Vancouver or <Link to="/world-cup-2026-stadiums/metlife-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">MetLife Stadium</Link> in New York/New Jersey.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Beyond the Stadium: Explore Toronto */}
            <section className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-compass-3-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Beyond the Stadium: Explore Toronto
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
                <p>Toronto's world-class attractions and multicultural vibrancy make it a premier World Cup 2026 destination.</p>
                <div>
                  <h4 className="editorial-h4 mb-2">Discover Toronto</h4>
                  <p>Explore our complete <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Toronto World Cup 2026 Guide</Link> for essential information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Hotels near BMO Field and downtown</li>
                    <li>Toronto's efficient public transit system</li>
                    <li>Top attractions and neighborhoods</li>
                    <li>Diverse dining scene</li>
                    <li>Match day planning tips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Other Canadian Stadium</h4>
                  <p>Visiting both Canadian host cities? Check out <Link to="/world-cup-2026-stadiums/bc-place-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BC Place</Link> in Vancouver.</p>
                </div>
                <p><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
              </div>
              <hr className="editorial-divider" />
            </section>

            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-check-double-line text-emerald-400 dark:text-emerald-300"></i>
                Final Verdict & Key Takeaway
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed">
                    BMO Field delivers what few World Cup venues can: genuine football atmosphere in an intimate, purpose-built stadium. This isn't a repurposed NFL giant where supporters feel disconnected from the action—it's a proper football ground where 45,000 voices create a cauldron of noise that reverberates through the seating bowl and across Exhibition Place.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Who Will Love It Most:</strong>  European fans accustomed to close-to-the-pitch stadiums will feel right at home. South American supporters will appreciate the passionate atmosphere and standing sections. First-time World Cup visitors get an accessible, walkable urban setting with Toronto's multicultural food scene and waterfront beauty as bonus attractions.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>The Unforgettable Moment:</strong>  Don't miss Canada's opening match on June 12, 2026—the first men's World Cup game ever played on Canadian soil. Even if you're supporting another nation, experiencing this historic occasion in a stadium full of red-clad Canadians celebrating their World Cup dream will be a memory for a lifetime. The noise, emotion, and sheer release of decades of anticipation will be spectacular.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Book Now:</strong>  Toronto World Cup accommodation will vanish faster than you can say "maple syrup." Secure your Liberty Village Airbnb or downtown hotel immediately upon confirming match tickets. Transit passes can be purchased closer to the event, but early birds lock in the best pre-match bar reservations at Brazen Head and LOCAL Public Eatery.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">BMO Field may be among the tournament's smaller venues, but for pure football atmosphere and authentic Canadian hospitality, it will punch well above its weight class. See you on the terraces.</p>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            
          </section>
        </div>
      )}
    </div>
  );
};