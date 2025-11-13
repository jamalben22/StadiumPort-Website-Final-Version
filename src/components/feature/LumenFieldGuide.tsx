import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface LumenFieldGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

// Lumen Field Guide — PART 1/4
// Design language mirrors MetLife/Estadio Azteca/Arrowhead guides: same spacing, icons, gradients, and responsiveness.
export const LumenFieldGuide: React.FC<LumenFieldGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {!hideHero && (
        <section className="editorial-hero">
          <div className="editorial-hero-media">
            <OptimizedImage
              src="/images/stadiums/lumen-field-seattle-world-cup-2026.webp"
              alt="Inside view of Lumen Field in Seattle, Washington, showcasing the atmosphere for the FIFA World Cup 2026."
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
            {/* Breadcrumbs */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
              <ol className="flex items-center gap-2 text-white/90">
                <li><Link to="/" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                <li className="opacity-70">›</li>
                <li><Link to="/world-cup-2026-stadiums" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Stadiums</Link></li>
                <li className="opacity-70">›</li>
                <li>Lumen Field</li>
              </ol>
            </nav>
            <div className="editorial-hero-inner">
              <div className="editorial-hero-eyebrow">
                <span className="editorial-hero-pulse"></span>
                <span>FIFA World Cup 2026</span>
              </div>
              <h1 className="editorial-hero-title">Lumen Field</h1>
              <div className="editorial-hero-meta">
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  <span>SoDo, Seattle, Washington</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-group-line"></i>
                  <span>69,000 capacity</span>
                </div>
              </div>
              <p className="editorial-hero-tagline">Where the 12th Man meets the world's game.</p>
            </div>
          </div>
        </section>
      )}

      {/* Editorial Article — NYC style */}
      <section className="editorial-article py-12">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            When FIFA selected <Link to="/world-cup-2026-host-cities/seattle" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Seattle</Link> to host matches for the 2026 World Cup, they chose more than just a stadium—they picked a sonic fortress. <strong>Lumen Field is one of the </strong>
            <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>
            {`, bringing the tournament to the Pacific Northwest.`} Lumen Field, home to one of sport's most legendary atmospheres, will transform into Seattle Stadium for the tournament, welcoming global football to the Pacific Northwest for the first time since the 2003 Women's World Cup. This isn't a venue that simply accommodates fans; it amplifies them, channeling 68,000 voices into a deafening roar that once registered 137.6 decibels—louder than a jet engine at takeoff. Built specifically with World Cup hosting in mind back in 2002, this open-air cathedral sits against Seattle's stunning skyline and Puget Sound, offering visiting fans an experience where architectural ingenuity meets raw passion.
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
                <i className="ri-building-2-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Official Name</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Lumen Field (rebranded "Seattle Stadium" during World Cup 2026)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Location</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">SoDo neighborhood, Seattle, Washington (1 mile south of downtown)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-calendar-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Opened</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">2002</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-group-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Capacity</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">69,000 (World Cup configuration) / 68,740 (standard NFL)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-team-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Primary Tenants</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Seattle Seahawks (NFL), Seattle Sounders FC (MLS), OL Reign (NWSL)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-pencil-ruler-2-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Architect</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Ellerbe Becket (with LMN Architects)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-grass-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Surface Type</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">FieldTurf artificial (FIFA-required grass to be installed for 2026)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-umbrella-line text-emerald-500 text-xl"></i>
                <div>
                  <p className="text-slate-600 dark:text-slate-300">Roof Type</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Partial cantilever roof covering 70% of seats</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-emerald-500"></i>
              Notable Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>Second-loudest stadium in NFL history</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>Open north end with skyline views</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>Field-level luxury suites (first in NFL)</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-emerald-500"></i>
                <span>WaMu Theater event complex</span>
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
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Washington state voters approved the stadium's construction via referendum in 1997, with legislation specifically calling out the ability to host the FIFA World Cup—making Lumen Field literally built for this moment. The venue rose on the site of the demolished Kingdome, opening in September 2002 with Microsoft co-founder Paul Allen driving the vision for an intimate, noise-amplifying design inspired by the University of Washington's Husky Stadium.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Since opening, Lumen Field has established itself as one of North America's most intimidating sporting venues. Seahawks fans set Guinness World Records for loudest outdoor stadium in both 2013 (136.6 decibels) and 2014 (137.6 decibels), with the architectural design trapping and amplifying crowd noise back onto the field. The stadium has hosted three NFC Championship Games, multiple MLS Cup finals including the 2019 edition that drew a record 69,274 spectators, the 2016 Copa América, and international friendlies featuring Barcelona, Manchester United, and Chelsea.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              For 2026, the stadium is receiving $19.4 million in state funding for upgrades including FIFA-mandated grass installation, enhanced security systems, and seating improvements—ensuring world-class standards for football's biggest stage.
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
              Lumen Field's design is a masterclass in acoustic engineering disguised as a football stadium. Built on just 30 acres—the smallest footprint of modern NFL stadiums—architects cantilevered the upper decks over lower sections, pushing seats closer to the action while the partial roof covering 70% of seating deflects crowd noise directly back onto the pitch. The result? An intimidation machine.
            </p>
            <p>
              The U-shaped configuration keeps the north end open, framing spectacular views of downtown Seattle's skyline, the Space Needle, and Mount Rainier on clear days. This open design also channels winds from Puget Sound across the field, adding another tactical wrinkle for visiting teams.
            </p>
            <p>
              Inside, the stadium offers 111 luxury suites across three levels, over 7,000 club seats, and 1,400 accessibility-friendly seats thoughtfully distributed throughout sections. The lower bowl's steep rake means exceptional sightlines from every angle—you're never far from the action. Wide concourses provide breathing room during halftime, with views stretching from the Olympic Mountains to the working waterfront, while the south end's Hawks' Nest features 3,000 bleacher seats where Sounders supporters create a wall of sound and color.
            </p>
            <p>
              The venue's commitment to sustainability has earned international recognition, including a 2018 award at the International Stadium Business Summit in London. Expect these values front and center during the World Cup, with organizers targeting zero-waste operations.
            </p>
            <p>
              Just hours from <Link to="/world-cup-2026-stadiums/bc-place-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BC Place</Link> in Vancouver, Lumen Field is part of the Pacific Northwest's World Cup presence.
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
              Seattle will host six World Cup 2026 matches at Lumen Field, including one USMNT group stage fixture and two knockout round games. While specific matchups won't be finalized until closer to the tournament, Seattle's inclusion among elite venues suggests the stadium could host a Round of 32 or Round of 16 encounter—and possibly more if the Americans advance deep.
            </p>
            <p>
              The stadium previously hosted three 2016 Copa América matches, including a U.S. quarterfinal victory over Ecuador, plus the crucial 2013 World Cup qualifier between the U.S. and Panama—proof that Seattle delivers when international football comes calling. With FIFA expecting over 2 billion viewers watching Seattle's matches globally, the atmosphere will be electric, potentially matching or exceeding the decibel levels that made this venue legendary.
            </p>
            <p>
              Along with <Link to="/world-cup-2026-stadiums/levis-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Levi's Stadium</Link> and <Link to="/world-cup-2026-stadiums/sofi-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">SoFi Stadium</Link>, Lumen Field showcases the West Coast's World Cup venues.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-500"></i>
            Getting to the Stadium
          </h3>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Lumen Field sits in Seattle's SoDo (South of Downtown) district, exceptionally well-connected by public transit—one of the best-served stadiums in North America.
          </p>

          <div className="space-y-8 mt-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-train-line text-emerald-500 text-3xl"></i>
                By Light Rail (Recommended)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Sound Transit's 1 Line has two stations within walking distance: Stadium Station (2-minute walk) and International District/Chinatown Station (7-minute walk). Trains run from SeaTac Airport to Lynnwood, with airport-to-stadium journey taking approximately 38 minutes. One-way adult fares are $3, with reduced fares for seniors, disabled riders, and youth. Purchase tickets at station kiosks or via Transit GO mobile app. Expect trains to be packed 90 minutes before kickoff—arrive early.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                <strong>Pro tip:</strong> Park & Ride facilities are available at Northgate Transit Center (north Seattle) and Angle Lake Station (south), allowing you to drive partway and ride the train to avoid downtown congestion.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-bus-2-line text-emerald-500 text-3xl"></i>
                By Bus
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                King County Metro operates 15+ routes stopping within three blocks of the stadium. Sound Transit Express buses connect from throughout Pierce, King, and Snohomish counties every 30 minutes. Check Metro's real-time transit app for matchday schedules.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-train-line text-emerald-500 text-3xl"></i>
                By Commuter Rail
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Sounder commuter trains arrive at King Street Station (5-minute walk from stadium) on select weekend matchdays—check Sound Transit's event calendar. Amtrak Cascades service connects Seattle to Portland, Vancouver BC, and points between, with the station directly adjacent to Lumen Field.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-steering-line text-emerald-500 text-3xl"></i>
                By Car
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Not recommended for World Cup matches. The stadium's parking garage accommodates 2,000 vehicles, with 3,100 spaces onsite and 8,400 in surrounding areas, but these sell out months ahead for major events. If driving, budget $40-65 for parking. Alternative garages include Union Station (northeast) and Metro Garage (east), both within 10-minute walks.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-taxi-line text-emerald-500 text-3xl"></i>
                By Rideshare/Taxi
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The designated drop-off zone is located at S Charles Street and Occidental Avenue (near the Pro Shop). Surge pricing will be severe after matches—consider walking 10-15 minutes toward downtown or Pioneer Square for better pickup zones.
              </p>
            </div>

            <div>
              <p className="text-slate-900 dark:text-slate-50 font-semibold mb-3 flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                <span>Journey Times:</span>
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-2">
                <li>- SeaTac Airport: 38 minutes (light rail)</li>
                <li>- Downtown Seattle hotels: 10-15 minutes (light rail/bus)</li>
                <li>- Bellevue: 45-60 minutes (bus + light rail)</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
                Seattle also has ferry connections from Bainbridge Island and Bremerton, with terminals 10 minutes' walk from the stadium—a spectacular arrival if you're staying across Puget Sound.
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
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Seattle's accommodation options balance proximity to Lumen Field with access to the city's broader attractions. Book early—the 2026 tournament will strain capacity.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-walk-line text-emerald-500 text-3xl"></i>
                Walking Distance to Stadium (Pioneer Square/SoDo)
              </h4>
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                <p><strong>Embassy Suites by Hilton Seattle Downtown Pioneer Square</strong> sits one block from Lumen Field, offering complimentary cooked-to-order breakfast, evening manager's reception, indoor pool, and spacious suites with separate living areas. Perfect for families or groups wanting minimal travel time. Mid-range pricing.</p>
                <p><strong>Best Western Plus Pioneer Square Hotel Downtown</strong> provides exceptional value in the historic district, with free breakfast, proximity to waterfront dining, and easy stadium access (0.4 miles). Budget-friendly choice.</p>
                <p><strong>citizenM Seattle Pioneer Square</strong> offers compact, tech-forward rooms with king beds, 24/7 communal spaces, and trendy design—ideal for solo travelers or couples prioritizing location over space. <strong>Populus Seattle</strong> brings boutique luxury to Pioneer Square with locally-sourced amenities, rooftop bar, and rooms celebrating Pacific Northwest craftsmanship. Mid-range to upscale.</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-building-2-line text-emerald-500 text-3xl"></i>
                Downtown Seattle (1-2 Miles)
              </h4>
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                <p><strong>Fairmont Olympic Hotel</strong> delivers grand-dame elegance in a 1924 building with 450 rooms, sumptuous Olympic Bar, spa, and refined service—for those wanting historic luxury alongside easy stadium access. Luxury pricing.</p>
                <p><strong>Hyatt Regency Seattle</strong> combines business-friendly amenities with adventure access, featuring nearby cycling and climbing, plus quick light rail connections to the stadium. Mid-range, excellent for active travelers.</p>
<p>Consider booking through <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">booking.com</a>  or <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia</a> for competitive rates and flexible cancellation policies—essential given uncertain match schedules. Airbnb also offers condos in Belltown and Capitol Hill, both 20 minutes from the stadium via light rail.</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-community-line text-emerald-500 text-3xl"></i>
                Alternative Neighborhoods
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Capitol Hill:</strong> Seattle's vibrant LGBTQ+ hub with nightlife and restaurants, 15 minutes by light rail. <strong>Fremont/Ballard:</strong> Quirky neighborhoods north of downtown, 30-40 minutes via bus, offering brewery tours and local character.
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
                Timing
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Arrive 90-120 minutes early for World Cup matches. Security will be tighter than standard Seahawks games, and light rail stations will be mobbed. Stadium gates typically open 2 hours before kickoff, allowing time to explore the venue and soak in pre-match atmosphere.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-shopping-bag-3-line text-emerald-500 text-3xl"></i>
                Bag Policy
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Only clear bags up to 12" x 6" x 12" are permitted. Small clutches under 4.5" x 6.5" are allowed. No backpacks, diaper bags, or computer bags. Outside food is permitted if carried in approved bags.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-sun-line text-emerald-500 text-3xl"></i>
                Weather
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                June-July in Seattle means 65-75°F (18-24°C) with low humidity, but pack a light jacket—evenings cool quickly. The roof covers 70% of seats, but end zones and lower sections are exposed. Sunscreen recommended for afternoon matches.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-line text-emerald-500 text-3xl"></i>
                Food & Drink
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Lumen Field is cashless—credit cards and contactless payments only. Local favorites include Maria Luisa Empanadas, Big Walt's Kitchen (hot chicken sandwich), Ivar's fish & chips, and vegan options at Cook T's Kitchen. Craft beer at Craft House, Starbucks coffee throughout. Prices run $12-18 for entrees, $14-16 for beer.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-football-line text-emerald-500 text-3xl"></i>
                Best Sections
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Lower bowl sidelines (sections 111-137) offer prime viewing. For budget-conscious fans, upper deck corners (sections 301-303, 339-341) provide excellent value with full field views. Sounders supporters traditionally occupy the south end (sections 121-123)—expect standing, chanting, and flags if seated nearby.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-walk-line text-emerald-500 text-3xl"></i>
                Post-Match Exodus
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Stadium Station will be absolute chaos—consider walking 10 minutes to International District/Chinatown Station for easier boarding. Alternatively, head to Pioneer Square bars and wait 60-90 minutes for transit crowds to thin.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-emerald-500 text-3xl"></i>
                Don't Miss
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The 12th Man flag raising platform in the south end, Pioneer Square's totem pole and pergola (5-minute walk), and the Olympic Sculpture Park (30 minutes north via waterfront).
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-500"></i>
            Things to Do Nearby
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-line text-emerald-500 text-3xl"></i>
                Pre-Match
              </h4>
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                <p><strong>King Street Bar & Oven</strong> (since 1997) serves excellent stone-oven pizza and craft beer two blocks from the stadium—arrive 2+ hours early for a table. <strong>The Central Saloon</strong>, Seattle's oldest bar, channels classic dive atmosphere with live music and cold beer.</p>
                <p><strong>Dead Line</strong> offers sophisticated cocktails and South American-leaning menu in sleek Pioneer Square setting—perfect for elevated pre-match dining. <strong>Damn The Weather</strong> provides natural wines and excellent pasta in a versatile space welcoming solo travelers and groups alike.</p>
                <p><strong>The Hall on Occidental</strong> creates ultimate sports bar atmosphere with craft beer, elevated comfort food, and all-ages welcome (until midnight).</p>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-2-line text-emerald-500 text-3xl"></i>
                Cultural Attractions (Within 30 Minutes)
              </h4>
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                <p><strong>Pike Place Market</strong> (1 mile north): Seattle's iconic farmers market overlooking Elliott Bay—arrive early to beat crowds. Watch fish-throwing fishmongers, sample artisan cheese, and grab world-class coffee.</p>
                <p><strong>Seattle Waterfront</strong> (0.5 miles): Recently renovated with public piers, Seattle Aquarium, and Ye Olde Curiosity Shop. The Great Wheel offers 175-foot views of Puget Sound and Olympic Mountains ($15-18).</p>
                <p><strong>Pioneer Square Underground Tour</strong> (2 blocks): Explore Seattle's buried 1890s streets beneath modern sidewalks—fascinating glimpse into the city's wild past. Tours run hourly, $25-30.</p>
                <p><strong>International District</strong> (0.4 miles): Authentic Asian restaurants, Uwajimaya supermarket, and Wing Luke Museum celebrating Asian Pacific American history.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Day Trips */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-500"></i>
            Day Trips
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p><strong>Bainbridge Island</strong> (35-minute ferry): Escape the city for waterfront trails, wineries, and small-town charm. Ferries depart from terminals near stadium.</p>
            <p><strong>Mount Rainier National Park</strong> (2.5 hours drive): Rent a car and experience Washington's alpine crown jewel—one of America's most stunning national parks.</p>
            <p>For tours and activities, platforms like GetYourGuide and Viator offer excellent options including food tours, brewery crawls, and Pacific Northwest adventures—worth booking ahead for popular dates.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Seattle */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-500"></i>
            Beyond the Stadium: Explore Seattle
          </h3>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>
              Seattle's Pacific Northwest charm and coffee culture create an unforgettable World Cup 2026 experience beyond Lumen Field.
            </p>
            <div>
              <p className="font-semibold">Discover Seattle:</p>
              <p>
                Explore our complete <Link to="/world-cup-2026-host-cities/seattle" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Seattle World Cup 2026 Guide</Link> for comprehensive information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hotels near Lumen Field and downtown</li>
                <li>Seattle's efficient public transit</li>
                <li>Pike Place Market and top attractions</li>
                <li>Coffee culture and local dining</li>
                <li>Match day transportation tips</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Other Pacific Northwest Stadium:</p>
              <p>
                Visiting the Pacific Northwest? Just a short drive to <Link to="/world-cup-2026-stadiums/bc-place-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">BC Place</Link> in Vancouver for a cross-border experience.
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
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-medal-line text-emerald-500"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Lumen Field represents everything special about North American soccer culture: intimate design, passionate supporters, and a venue that makes visiting teams genuinely uncomfortable. For World Cup 2026, this stadium offers international visitors more than great football—it's a gateway to the Pacific Northwest's natural beauty, progressive urban culture, and that distinctly Seattle blend of outdoorsy grit and tech-forward thinking.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>Who will love it most?</strong> Fans who appreciate atmosphere over glitz, travelers who want to explore beyond the stadium, and anyone curious about why Seattle consistently ranks among the world's most livable cities.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>The one thing you absolutely cannot miss?</strong> Experience the ground shake during a goal celebration. When 69,000 fans erupt simultaneously under that amplifying roof, you'll understand why visiting players describe it as "the most insane place" they've ever competed.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Book your accommodation now through trusted platforms—Seattle's hotel inventory will strain under World Cup demand, and proximity to light rail stations will be worth its weight in gold. This is your chance to experience football's biggest tournament in one of its loudest stadiums. Don't just watch history—feel it reverberate through your chest.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

            {/* Got It Button - match MetLife premium style */}
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
  );
};