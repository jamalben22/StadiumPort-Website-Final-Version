import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface NRGStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const NRGStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: NRGStadiumGuideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGotItClick = () => {
    navigate('/world-cup-2026-stadiums');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp"
              alt="Exterior view of NRG Stadium in Houston, Texas — one of the major FIFA World Cup 2026 venues in the USA."
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Stadium Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-sky-600 to-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⚽ FIFA World Cup 2026 Host Venue
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">NRG Stadium</h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-group-line text-xl text-sky-400"></i>
                <span className="font-semibold">72,220 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                <span>Houston, Texas</span>
              </div>
            </div>

            {/* Tagline populated from full guide content when expanded */}
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Climate-controlled comfort and world-class infrastructure in the heart of Houston.
            </p>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Miami-style Hero Header */}
          {!hideHero && (
          <section className="editorial-hero">
            <div className="editorial-hero-media">
              <OptimizedImage
                src="/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp"
                alt="Exterior view of NRG Stadium in Houston, Texas — one of the major FIFA World Cup 2026 venues in the USA."
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
                <div className="editorial-hero-eyebrow">
                  <span className="editorial-hero-pulse"></span>
                  <span>FIFA World Cup 2026</span>
                </div>

                <h1 className="editorial-hero-title">NRG Stadium</h1>

                <div className="editorial-hero-meta">
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    <span>Houston, Texas</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-group-line"></i>
                    <span>72,220 capacity</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections — Editorial style */}
          <section className="editorial-article py-12">
            {/* Introduction Section (Part 1) */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500"></i>
                NRG Stadium: Your Complete Guide to World Cup 2026 in Houston
              </h2>
              <p className="whitespace-pre-line">
                {`When the world's greatest football tournament arrives in Texas in summer 2026, there's no better place to experience the beautiful game than inside NRG Stadium's air-conditioned comfort. As one of only two Texas venues selected to host World Cup matches, this architectural marvel in Houston will welcome seven fixtures—including knockout rounds—to its retractable-roofed bowl. Picture this: 72,000 passionate fans from every corner of the globe, creating an electric atmosphere as nations battle for glory, all while enjoying the intimacy of an indoor arena with the grandeur of an open-air spectacle. Whether you're tracking down your national team or simply want to witness football history, Houston's sporting cathedral promises an unforgettable World Cup experience.`}
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts (Part 1) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500"></i>
                Stadium Overview & Fast Facts
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Official Name:</strong> NRG Stadium (will be branded "Houston Stadium" for FIFA World Cup 2026)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Location:</strong> South Houston, NRG Park complex (off Loop 610 South)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Opened:</strong> August 24, 2002</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Capacity:</strong> 72,220 (standard); expandable for major events</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Primary Tenant:</strong> Houston Texans (NFL)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Additional Tenants:</strong> Houston Livestock Show and Rodeo, Texas Bowl</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Architect/Design Firm:</strong> Populous (formerly HOK Sport), Houston Stadium Consultants (Hermes Reed Architects, Lockwood Andrews & Newnam)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Surface Type:</strong> Artificial turf (Matrix Turf with Helix Technology)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Roof Type:</strong> Retractable fabric roof (opens/closes in 7 minutes)</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3"><strong>Notable Features:</strong></p>
                <ul className="list-disc ml-6 text-slate-700 dark:text-slate-200 space-y-2">
                  <li>First NFL stadium with retractable roof</li>
                  <li>Massive 14,549 sq ft video boards (among largest in sports)</li>
                  <li>186 luxury suites and 7,000+ club seats</li>
                  <li>Climate-controlled comfort (essential for Texas summers)</li>
                  <li>1.9 million square feet total area</li>
                  <li>State-of-the-art high-density WiFi system</li>
                </ul>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy (Part 1) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500"></i>
                History & Legacy
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Built at a cost of $352 million and completed in just 30 months, NRG Stadium opened its doors on August 24, 2002, as the home of the expansion Houston Texans franchise. The venue's creation marked Houston's triumphant return to the NFL after the Oilers departed for Tennessee in 1997, and it symbolized the city's determination to remain a major-league sports destination.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The stadium made history as the first NFL facility to feature a retractable roof, pioneering a design concept that balanced the atmosphere of outdoor football with the comfort and versatility of an enclosed arena. Its translucent fabric roof and extensive glass facades create a sense of transparency that makes the building appear to glow at night—a stunning visual landmark on Houston's skyline.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">NRG Stadium has hosted two Super Bowls (XXXVIII in 2004 and LI in 2017), WrestleMania 25, and the 2024 College Football Playoff National Championship. The venue's soccer credentials are equally impressive, having welcomed numerous U.S. Men's National Team matches, Mexico national team friendlies, CONCACAF Gold Cup fixtures, and Copa América Centenario matches in 2016. During a 2016 Copa América semifinal, the stadium witnessed Lionel Messi score a memorable free kick en route to becoming Argentina's all-time leading scorer.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">The stadium shares its NRG Park campus with the historic Astrodome—once dubbed the "Eighth Wonder of the World"—creating a tangible link between Houston's sports heritage and its modern ambitions.</p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Architecture & Experience (Part 1) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-4-line text-emerald-500"></i>
                Stadium Architecture & Experience
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Designed using principles of kinetic architecture, NRG Stadium offers a remarkable sense of transparency through its fabric roof and expansive glass panels that provide open-air views from the concourses directly to the field. The architectural vision, realized by Populous in collaboration with local firms, was to create a venue that could transform from intimate arena to open-air spectacle in mere minutes.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The stadium's most iconic feature—its retractable roof—operates on a sophisticated system that can fully open or close in just seven minutes, making it one of the fastest-transforming venues in professional sports. During typical summer conditions (and certainly for World Cup matches), expect the roof to remain closed, with powerful air conditioning maintaining comfortable temperatures despite Houston's notorious heat and humidity.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">Inside, the seating bowl wraps tightly around the pitch, creating excellent sightlines from virtually every angle. The three-tier configuration brings fans close to the action while maintaining clear views. Premium amenities include over 7,000 club seats, 186 luxury suites, and multiple lounges and bars, though World Cup match tickets will primarily offer general seating across all levels.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">The 2013 installation of twin 50-foot-high by 277-foot-wide HD video boards above each end zone transformed the viewing experience. These colossal displays—totaling over 14,000 square feet—rank among the largest in sports and ensure no moment is missed, whether you're watching replays or checking scores from simultaneous matches.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Acoustically, the enclosed design amplifies crowd noise impressively when the roof is closed, creating an intimidating cauldron of sound for visiting teams. Accessibility features include elevator access to all levels, dedicated ADA seating areas with excellent sightlines, and specialized transportation options for guests with mobility challenges.</p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* What Matches to Expect (Part 1) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-calendar-event-line text-emerald-500"></i>
                What Matches to Expect
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston will host seven FIFA World Cup 2026 matches at NRG Stadium: five group stage fixtures (June 14, 17, 20, 23, and 26) plus two knockout rounds—a Round of 32 match on June 29 and a Round of 16 clash on July 4. The July 4th Independence Day knockout match promises to be particularly electric, combining America's biggest holiday with World Cup drama.</p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">While Houston won't host U.S. Men's National Team group matches or the tournament's latter stages beyond the Round of 16, expect the stadium to welcome a diverse array of nations competing across multiple groups. With FIFA's expanded 48-team format, Houston's geographic position and world-class facilities make it ideal for hosting teams from across the globe.</p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">Each match will see the stadium at or near its full 72,000+ capacity, with sold-out crowds expected for all fixtures. The climate-controlled environment means comfortable viewing conditions regardless of Houston's summer weather, and the intimate stadium configuration will create an intense, pressure-cooker atmosphere for knockout stage drama.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium (Part 2) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500"></i>
                Getting to the Stadium
              </h3>

              {/* By Metro Rail (Recommended) */}
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                By Metro Rail (Recommended)
              </h4>
              <p className="leading-relaxed mb-4">The METRORail Red Line provides direct access to NRG Park via the Stadium Park/Astrodome station, located just steps from the stadium entrance. Trains run approximately every 12 minutes during regular service, with increased frequency during major events. The journey from downtown Houston's Preston Station takes approximately 28 minutes.</p>
              <p className="leading-relaxed mb-2"><strong>Single fare:</strong> $1.25 each way</p>
              <p className="leading-relaxed mb-4"><strong>Pro tip:</strong> Park-and-ride facilities at Fannin South Station (one stop south of the stadium) offer $15 parking packages that include round-trip rail fare—an excellent value compared to stadium parking.</p>
              <p className="leading-relaxed">For World Cup matches, arrive at least 90 minutes early. Trains will be packed post-match, so consider exploring nearby restaurants or bars for an hour after the final whistle to let crowds disperse.</p>

              {/* By Bus */}
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
                <i className="ri-bus-line text-emerald-500"></i>
                By Bus
              </h4>
              <p className="leading-relaxed">Three METRO bus routes serve NRG Park: Routes 11, 14, and 84, providing connections from various Houston neighborhoods. Bus service is less frequent than rail, so check ridemetro.org for current schedules and route maps.</p>

              {/* By Car & Parking */}
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
                <i className="ri-car-line text-emerald-500"></i>
                By Car & Parking
              </h4>
              <p className="leading-relaxed mb-4">Driving? Prepare for significant matchday traffic. NRG Park offers over 26,000 parking spaces across multiple color-coded lots, with parking passes ranging from $27 to over $150 depending on proximity to the stadium. Lots open 2.5 hours before kickoff, and prepaid parking passes are strongly recommended as cash parking is not available for major events.</p>
              <p className="font-semibold mb-2">Parking tips:</p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Book passes early through official channels or platforms like SpotHero</li>
                <li>RV and oversized vehicles require two parking passes</li>
                <li>Off-site lots 10-20 minutes away offer cheaper alternatives for budget-conscious fans</li>
                <li>Expect 30-45 minute delays exiting after matches</li>
              </ul>
              <p className="font-semibold mb-2">From airports:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Houston Hobby Airport (HOU):</strong> 10 miles, approximately 20 minutes via I-45 North to Loop 610 West</li>
                <li><strong>George Bush Intercontinental (IAH):</strong> 28 miles, approximately 35-45 minutes via I-69 South to Loop 610 South</li>
              </ul>

              {/* By Rideshare/Taxi */}
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2 mt-6">
                <i className="ri-taxi-line text-emerald-500"></i>
                By Rideshare/Taxi
              </h4>
              <p className="leading-relaxed">Official rideshare drop-off and pickup zones are located in the Yellow Lot 37 on Maine Street at Gate 16. Expect surge pricing during peak arrival and departure times—budget $25-40 from downtown, $40-60 from IAH, or $20-30 from Hobby Airport. Allow extra time for post-match traffic congestion.</p>

              <hr className="editorial-divider" />
            </article>

            {/* Where to Stay (Part 2) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500"></i>
                Where to Stay
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Houston's sprawling layout means accommodation choices depend on your priorities: proximity to public transit, walkable nightlife, or cultural attractions.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2">Best Neighborhoods for World Cup Visitors</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Downtown:</strong> Puts you on the METRORail Red Line for easy stadium access (25-minute ride). Convenient for exploring Houston's Theater District and EaDo (East Downtown), where the official FIFA Fan Festival will transform the area into a 34-day celebration near Shell Energy Stadium. Expect hotel rates to surge during the tournament.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4"><strong>Midtown/Museum District:</strong> Offers walkable neighborhoods packed with nightlife, restaurants, and cultural attractions like the Museum of Fine Arts and Houston Museum of Natural Science. Red Line access makes stadium trips straightforward. Hotel ZaZa Museum District provides luxury with a poolside party vibe perfect for pre-game gatherings.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6"><strong>Montrose:</strong> Houston's eclectic arts district combines trendy restaurants, craft cocktail bars, and vintage shops with a bohemian atmosphere. Slightly farther from the stadium but offers authentic local flavor and excellent dining.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2">Budget Options</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Chain hotels near the Medical Center and South Main corridor offer competitive rates (typically $100-150/night outside tournament weeks). Consider booking accommodations early through platforms like <a href="http://booking.com/" target="_blank" rel="noopener" className="text-sky-600 dark:text-sky-400 underline">booking.com</a> or Expedia, as over 90% of Houston's hotels were already booked by late 2025 for the World Cup period.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2">Mid-Range Picks</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">Downtown Houston hotels—including newer properties like the Home2Suites and Tru by Hilton added specifically for World Cup capacity—provide modern amenities and transit convenience. Expect $200-300/night during the tournament.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2">Luxury Options</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">The Omni Houston Hotel near NRG Stadium may serve as a base for visiting national teams, while the JW Marriott Downtown (recently expanded) offers upscale comfort in the city center. For unique experiences, explore boutique properties in Montrose or splurge on the Hotel ZaZa's Texas-sized luxury.</p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Pro tip:</strong> Consider accommodations in nearby suburbs like Sugar Land or The Woodlands if downtown prices spike too high. Just factor in longer commute times.</p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Matchday Tips & Insider Advice (Part 2) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-lightbulb-line text-emerald-500"></i>
                Matchday Tips & Insider Advice
              </h3>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                Arrive early
              </h4>
              <p className="leading-relaxed">Security screening for World Cup matches will be extensive. Plan to arrive at least 90 minutes before kickoff to clear security, explore the stadium, grab food, and soak in the pre-match atmosphere.</p>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-shopping-bag-3-line text-emerald-500"></i>
                What to bring &amp; Bag policy
              </h4>
              <p className="leading-relaxed mb-2"><strong>What to bring:</strong> Valid government-issued ID (required for entry), phone/camera (for memories), sunscreen (even indoors—UV can penetrate the roof fabric), and a portable phone charger.</p>
              <p className="leading-relaxed"><strong>Bag policy:</strong> Expect FIFA's standard restrictions—small clear bags only, with specific size limitations.</p>

              {/* Part 3 additions */}
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-prohibited-line text-emerald-500"></i>
                What NOT to bring
              </h4>
              <p className="leading-relaxed">Large bags, backpacks, outside food/beverages, noisemakers, laser pointers, or any prohibited items. Check FIFA's official guidelines before traveling.</p>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-restaurant-line text-emerald-500"></i>
                Food &amp; drink inside
              </h4>
              <p className="leading-relaxed">Stadium concessions will feature typical American stadium fare (burgers, hot dogs, nachos, pizza) alongside international options. Prices will be premium ($10-15 for meals, $8-12 for beer). The connected climate control means you can comfortably enjoy hot food despite outdoor temperatures exceeding 95°F (35°C).</p>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-sun-line text-emerald-500"></i>
                Beat the heat
              </h4>
              <p className="leading-relaxed">Houston in June-July is brutally hot and humid. NRG's air conditioning is essential—expect comfortable 72°F (22°C) temperatures inside regardless of outdoor conditions. Dress in breathable fabrics and stay hydrated.</p>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-train-line text-emerald-500"></i>
                Post-match transport
              </h4>
              <p className="leading-relaxed">The METRORail operates special event service with increased frequency during Texans games and will likely extend this for World Cup matches. Still, expect packed trains. Exit strategy: Consider lingering at one of the stadium's bars or exploring nearby restaurants for 45-60 minutes to avoid the rush.</p>

              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                <i className="ri-wifi-line text-emerald-500"></i>
                Mobile connectivity
              </h4>
              <p className="leading-relaxed">The stadium features a state-of-the-art high-density WiFi system designed to handle simultaneous connections from all 72,000+ guests—perfect for sharing match moments on social media or checking live scores from other venues.</p>

              <hr className="editorial-divider" />
            </article>

            {/* Things to Do Nearby (Part 3) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-map-pin-user-line text-emerald-500"></i>
                Things to Do Nearby
              </h3>

              {/* Pre-Match Spots */}
              <h4 className="editorial-h4 animate-fade-up mb-2">Pre-Match Spots</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3"><strong>Along the METRORail Red Line:</strong> Stop at Midtown stations for pre-game drinks at Bad News Bar or fuel up with Vietnamese bánh mì at Cali Sandwich &amp; Pho near the McGowan stop. Cajun restaurant Zydeco offers quick po'boys and gumbo before heading to the stadium.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3"><strong>Pitch 25:</strong> This sports bar near NRG Stadium, founded by a former Houston Dynamo player, features over 100 beers on tap, indoor turf fields, and lawn games—ideal for pre-match tailgating atmospheres.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Little Woodrow's Rice Village:</strong> Just two miles from the stadium, this popular sports bar offers Tuesday trivia nights and all-day $3 Lone Star beers.</p>
              

              {/* Cultural Attractions */}
              <h4 className="editorial-h4 animate-fade-up mb-2">Cultural Attractions (15-20 minutes away)</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">Hermann Park offers paddle boating, a miniature train ride, and the serene McGovern Centennial Gardens—perfect for morning strolls before afternoon matches. The Houston Zoo (6,000+ animals) and Museum District (including the Houston Museum of Natural Science with its planetarium and butterfly center) provide excellent half-day excursions.</p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed"><strong>Rice Village:</strong> This upscale shopping district blends boutiques, cafes, wine bars, and dessert spots for leisurely browsing between matches.</p>
              

              {/* Post-Match Celebrations */}
              <h4 className="editorial-h4 animate-fade-up mb-2">Post-Match Celebrations</h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">Montrose and EaDo neighborhoods come alive after matches, with bars and patios packed with jubilant supporters dissecting every play. The official FIFA Fan Festival in EaDo provides extended celebration spaces with live entertainment, giant screens broadcasting other matches, and international food vendors.</p>
              

              {/* Must-visit Houston experiences */}
              <h4 className="editorial-h4 animate-fade-up mb-2">Must-visit Houston experiences</h4>
                <ul className="list-disc ml-6 text-slate-700 dark:text-slate-200 space-y-2">
                  <li>Space Center Houston (NASA's Johnson Space Center visitor complex)</li>
                  <li>Buffalo Bayou Park (kayaking, hike/bike trails, skyline views)</li>
                  <li>Original Ninfa's on Navigation (legendary Tex-Mex, birthplace of fajitas)</li>
                  <li>James Turrell's Twilight Epiphany Skyspace at Rice University</li>
                </ul>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict & Key Takeaway (Part 4) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-flag-line text-emerald-500"></i>
                Final Verdict & Key Takeaway
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">NRG Stadium represents the perfect synthesis of Texas ambition and world-class sports infrastructure—a venue that delivers NFL-caliber comfort and intimacy while accommodating World Cup-sized crowds. The retractable roof technology means you'll experience matches in climate-controlled perfection, a crucial advantage during Houston's sweltering summer. The city's remarkable diversity, exceptional dining scene, and southern hospitality create a welcoming atmosphere for international visitors, while the fan-friendly stadium configuration ensures every seat offers compelling views of the action.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-user-star-line text-emerald-500"></i>
                  This stadium is perfect for:
                </h4>
                <p className="leading-relaxed">Fans who appreciate architectural innovation, anyone wanting guaranteed comfort (no weather worries!), and travelers seeking excellent transport connections via METRORail. The knockout round fixtures on June 29 and especially July 4 promise unforgettable atmospheres.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                  <i className="ri-star-line text-emerald-500"></i>
                  Don't miss:
                </h4>
                <p className="leading-relaxed">The experience of walking into NRG Stadium through those glass-facade concourses as the building glows against Houston's skyline. Arrive early, grab some Tex-Mex from a nearby food truck, ride the Metro with singing supporters from dozens of nations, and prepare for seven minutes of pure World Cup magic.</p>

                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 mt-4">
                  <i className="ri-calendar-check-line text-emerald-500"></i>
                  Book now:
                </h4>
                <p className="leading-relaxed">With over 90% of Houston hotels already reserved for the tournament and estimates of over 500,000 visitors arriving for the matches, early planning is essential. Secure your <a href="http://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">booking.com</a> or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia</a>, explore Airbnb options in Montrose or Museum District, and consider booking airport transfers in advance through trusted shuttle services to avoid July 4th weekend surcharges.</p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">Houston is ready to welcome the world. Are you ready to experience World Cup 2026 in Texas style?</p>
              </div>
              <hr className="editorial-divider" />
            </article>

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
          </section>
        </div>
      )}
    </div>
  );
};