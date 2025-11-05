import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface ATTStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const ATTStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: ATTStadiumGuideProps) => {
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
              src="/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp"
              alt="Exterior view of AT&T Stadium in Arlington, Texas — modern NFL venue set to host FIFA World Cup 2026 matches in the United States."
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
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏆 Most Matches Host (9)
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              AT&T Stadium
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-group-line text-xl text-blue-400"></i>
                <span className="font-semibold">80,000 capacity (expandable to 100,000)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                <span>Arlington (Dallas–Fort Worth)</span>
              </div>
            </div>
            
            {/* Preview tagline intentionally omitted to preserve only provided copy */}

            <div className="flex gap-3">
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
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Miami-style Hero Header */}
          {!hideHero && (
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp"
              alt="Exterior view of AT&T Stadium in Arlington, Texas — modern NFL venue set to host FIFA World Cup 2026 matches in the United States."
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AT&T Stadium
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-white/90">
                <div className="flex items-center gap-2">
                  <i className="ri-group-line text-xl text-blue-300"></i>
                  <span className="font-semibold">80,000 capacity (expandable to 100,000)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-map-pin-line text-xl text-emerald-300"></i>
                  <span>Arlington (Dallas–Fort Worth)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-event-line text-xl text-blue-300"></i>
                  <span className="font-semibold">Most Matches Host (9)</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
                >
                  <i className="ri-arrow-up-line"></i>
                  Collapse preview
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
          )}

          {/* Content Sections — Editorial presentation aligned with NYC */}
          <main className="editorial-article py-12">

            {/* Guide Title & Introduction */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
                AT&amp;T Stadium: The Colossal Crown Jewel Hosting the Most World Cup 2026 Matches
              </h2>
              <p className="leading-relaxed">
                When FIFA officials sought a venue capable of delivering American football's grandeur at football's greatest tournament, they found their answer in Arlington, Texas. Rising from the flat North Texas landscape like a steel-and-glass cathedral, AT&amp;T Stadium—affectionately known as "Jerry World" after Cowboys owner Jerry Jones—will host nine matches during the 2026 FIFA World Cup, more than any other venue in the tournament. This includes a semifinal showdown that will determine one of the finalists. For international fans, this $1.15 billion architectural marvel represents everything audacious about American sports culture: a retractable roof spanning 1,225 feet, a center-hung video board once the world's largest, and seating for 80,000 that can expand beyond 100,000. This is where Super Bowls are decided, where college football championships unfold, and where the beautiful game will write new North American history.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500 text-3xl"></i>
                Stadium Overview &amp; Fast Facts
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-building-2-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Official Name:</strong> AT&amp;T Stadium</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-star-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Nickname:</strong> Jerry World</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-map-pin-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Location:</strong> Arlington, Texas (Dallas-Fort Worth metroplex)</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-map-2-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Address:</strong> 1 AT&amp;T Way, Arlington, TX 76011</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-calendar-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Opened:</strong> May 27, 2009</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-group-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Capacity:</strong> 80,000 (expandable to 105,000+ with standing room)</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-trophy-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>World Cup Capacity:</strong> Approximately 92,000</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-shield-star-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Primary Tenant:</strong> Dallas Cowboys (NFL)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-music-2-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Secondary Uses:</strong> Cotton Bowl Classic, Big 12 Championship, concerts, special events</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-pencil-ruler-2-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Architect:</strong> HKS, Inc. (Lead architect: Bryan Trubey)</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-tools-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Structural Engineer:</strong> Walter P Moore</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-briefcase-2-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>General Contractor:</strong> Manhattan Construction Company</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-money-dollar-circle-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Construction Cost:</strong> $1.15 billion</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-leaf-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Surface Type:</strong> Artificial turf (Matrix Turf); natural grass will be installed for World Cup 2026</p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <i className="ri-arrow-up-down-line text-emerald-500 text-2xl"></i>
                    <p className="leading-relaxed"><strong>Roof Type:</strong> Retractable (opens/closes in approximately 12 minutes)</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>
                  Notable Features
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Center-hung video board: 160 feet wide × 72 feet tall (previously world's largest)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>292-foot arched box trusses (longest single-span roof structure in the world)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Retractable glass end zone doors (180 feet wide × 120 feet tall)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Playing field sits 50 feet below street level</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>300+ luxury suites across five levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span>Over 3,000 LCD displays throughout the facility</span>
                  </li>
                </ul>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-book-open-line text-emerald-500 text-3xl"></i>
                History &amp; Legacy
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  AT&amp;T Stadium opened in 2009 as the third home in Dallas Cowboys history, replacing the iconic but aging Texas Stadium. The project was initiated in the mid-1990s when Jerry Jones envisioned a year-round entertainment venue that could host not just football but Super Bowls, concerts, and major international events. The stadium's actual construction cost ballooned from an estimated $650 million to $1.15 billion, making it one of the most expensive sports venues ever built.
                </p>
                <p className="leading-relaxed mb-6">
                  On February 6, 2011, AT&amp;T Stadium hosted Super Bowl XLV, where the Green Bay Packers defeated the Pittsburgh Steelers 31-25. The venue has since welcomed NCAA Final Four basketball tournaments, the College Football Playoff National Championship, multiple Gold Cup soccer tournaments, and concerts by the world's biggest artists. The stadium set an NFL regular season attendance record in 2009 with 105,121 spectators.
                </p>
                <p className="leading-relaxed">
                  For soccer fans, AT&amp;T Stadium has deep roots in the sport. The Dallas area previously hosted World Cup matches at the Cotton Bowl in 1994, including a legendary Brazil-Netherlands quarterfinal. The stadium has hosted multiple CONCACAF Gold Cup matches since opening, including opening matches in 2011, semifinals in 2013 and 2017, and quarterfinals in 2021 and 2023. In preparation for 2026, AT&amp;T Stadium is undergoing a reported $295 million renovation project focused on suite upgrades, and the playing surface will be widened and fitted with natural grass to comply with FIFA regulations.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Architecture & Experience */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-building-2-line text-emerald-500 text-3xl"></i>
                Stadium Architecture &amp; Experience
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  AT&amp;T Stadium's defining architectural feature is its pair of massive steel arches—each measuring 292 feet tall and spanning 1,225 feet—the longest single-span arched box trusses supporting any building structure on the planet. The exterior showcases a futuristic design with an 800-foot canted glass wall that floods the interior with natural light.
                </p>
                <p className="leading-relaxed mb-6">
                  Inside, the playing field sits 50 feet below street level, giving fans entering the stadium dramatic panoramic views of the bowl. The retractable glass end zone doors—each 180 feet wide and 120 feet tall—are the largest in the world and open or close in just 18 minutes, seamlessly connecting the interior with outdoor plaza areas. The retractable roof, when opened, reveals an opening reminiscent of Texas Stadium's iconic hole, but can be closed to create a climate-controlled environment regardless of North Texas weather.
                </p>
                <p className="leading-relaxed mb-6">
                  The crown jewel remains the center-hung video board, suspended 90 feet above the field. Measuring 160 feet long by 72 feet tall and weighing 1.2 million pounds, it was the world's largest HD video screen when installed. Four screens face in each direction, ensuring every seat has a perfect view of replays and live action.
                </p>
                <p className="leading-relaxed mb-6">
                  The seating bowl features 80,000 fixed seats across multiple tiers, with 15,000 club seats offering premium amenities and 300+ luxury suites positioned as close as 20 rows from the field. The acoustics capture crowd noise effectively, and when full for major matches, the atmosphere rivals any purpose-built football stadium.
                </p>
                <p className="leading-relaxed">
                  Accessibility is prioritized throughout, with elevators and escalators connecting all levels, wheelchair-accessible seating distributed across price points, and companion seating available. The stadium also houses a Dallas Cowboys Hall of Fame, team pro shop, and rotating art exhibitions featuring contemporary works curated by the Jones family.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* What Matches to Expect */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-calendar-line text-emerald-500 text-3xl"></i>
                What Matches to Expect
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  AT&amp;T Stadium will host nine matches during the 2026 FIFA World Cup—the most of any venue in the tournament. The schedule includes five group stage matches (June 14, 17, 22, 25, and 27), two Round of 32 matches (June 30 and July 3), one Round of 16 match (July 6), and a semifinal on July 14.
                </p>
                <p className="leading-relaxed mb-6">
                  AT&amp;T Stadium narrowly missed hosting the final, which was awarded to MetLife Stadium in New Jersey, but hosting a semifinal guarantees at least one team's journey to the final will pass through Arlington. Expect capacity crowds approaching 92,000 for knockout rounds, with the semifinal generating electric atmosphere as fans from around the world converge on North Texas.
                </p>
                <p className="leading-relaxed">
                  This marks the second time the Dallas area has hosted World Cup matches. In 1994, the Cotton Bowl in Fair Park hosted six matches, including the memorable Brazil-Netherlands quarterfinal that's still regarded as one of the greatest World Cup matches ever played. Thirty-two years later, the region welcomes the tournament back in a venue purpose-built for such grand occasions.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500 text-3xl"></i>
                Getting to the Stadium
              </h3>
              <div className="mb-8">
                <p className="leading-relaxed"><strong>Important Note:</strong> Arlington is the largest city in the United States without a traditional public mass transit system. There is no direct train or bus line to AT&amp;T Stadium. However, special arrangements are being made for World Cup 2026.</p>
              </div>
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-500"></i>
                  By Public Transit (World Cup Special Service)
                </h4>
                <p className="leading-relaxed">
                  For the 2026 World Cup, Dallas Area Rapid Transit (DART) plans to implement special transportation including Trinity Railway Express (TRE) trains running at peak frequency between Victory Station (near Dallas) and CentrePort Station (Fort Worth), with private shuttle service to AT&amp;T Stadium. Additionally, up to 50 DART buses will use a dedicated express lane on Interstate 30 to transport fans from Victory Station to a staging area near the stadium.
                </p>
                <p className="leading-relaxed"><strong>From Downtown Dallas:</strong></p>
                <ul className="leading-relaxed ml-6">
                  <li>Take DART or TRE to Victory Station or CentrePort Station</li>
                  <li>Board World Cup shuttle to AT&amp;T Stadium (approximately 30-45 minutes total)</li>
                  <li>Regular DART fare: $2.50-$5.00; World Cup shuttle pricing TBA</li>
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-emerald-500"></i>
                  By Rideshare/Taxi
                </h4>
                <p className="leading-relaxed">Uber and Lyft are the most practical options for most visitors:</p>
                <ul className="leading-relaxed ml-6">
                  <li><strong>From Downtown Dallas:</strong> 20-25 minutes (20 miles), typically $25-45 depending on surge pricing</li>
                  <li><strong>From DFW Airport:</strong> 15-20 minutes (17 miles), typically $20-35</li>
                  <li><strong>From Downtown Fort Worth:</strong> 15-20 minutes (12 miles), typically $20-30</li>
                </ul>
                <p className="leading-relaxed"><strong>Tip:</strong> The designated rideshare pickup area is approximately half a mile from the stadium, requiring a walk. On matchdays, expect surge pricing and longer wait times post-match. Book your ride before exiting the stadium.</p>
              </div>
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-roadster-line text-emerald-500"></i>
                  By Car
                </h4>
                <p className="leading-relaxed">If driving, AT&amp;T Stadium has extensive parking, though expect matchday premiums:</p>
                <ul className="leading-relaxed ml-6">
                  <li><strong>Official stadium lots:</strong> Parking typically ranges from $40-75 for Cowboys games; World Cup rates expected to be higher</li>
                  <li><strong>Private lots nearby:</strong> $30-60, often requiring advance purchase</li>
                  <li><strong>From Downtown Dallas:</strong> Take I-30 West to Exit 28A (Collins Street)</li>
                  <li><strong>From DFW Airport:</strong> Take TX-360 South to I-30 East</li>
                </ul>
                <p className="leading-relaxed"><strong>Traffic Advisory:</strong> Arrive at least 3 hours before kickoff. Post-match traffic can take 45+ minutes just to exit parking areas.</p>
              </div>
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-emerald-500"></i>
                  By Private Transfer/Shuttle
                </h4>
                <p className="leading-relaxed">Many Arlington hotels offer matchday shuttles. Downtown Arlington bars and restaurants including J. Gilligan's Bar &amp; Grill and Grease Monkey run shuttles for approximately $15-20 per person. Book early through platforms like Viator or GetYourGuide for guaranteed transfers from Dallas/Fort Worth airports.</p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Where to Stay */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500 text-3xl"></i>
                Where to Stay
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-map-pin-line text-emerald-500"></i>
                    Entertainment District (Walking Distance to Stadium)
                  </h4>
                  <p className="leading-relaxed mb-4">This is prime territory for World Cup fans wanting to be steps from the action:</p>
                  <ul className="list-disc ml-6">
                    <li><strong>Loews Arlington Hotel</strong> (luxury, adjacent to Texas Live!): Modern high-rise with 888 rooms, rooftop pool, and direct access to Arlington's entertainment complex. From $250/night.</li>
                    <li><strong>Live! by Loews Arlington</strong> (upscale, adjacent to Texas Live!): Contemporary 300-room hotel with floor-to-ceiling windows overlooking the stadium district. From $200/night.</li>
                    <li><strong>Sheraton Arlington Hotel</strong> (mid-range): Full-service property within walking distance to all three major stadiums. From $150/night.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-building-line text-emerald-500"></i>
                    Arlington Central (1-3 miles from stadium)
                  </h4>
                  <ul className="list-disc ml-6">
                    <li><strong>Hilton Arlington</strong> (mid-range): Approximately 1.5 miles from AT&amp;T Stadium and Six Flags Over Texas. Self-parking $20/day. From $130/night.</li>
                    <li><strong>Courtyard by Marriott Arlington Entertainment District</strong> (mid-range): Modern chain hotel with shuttle options. From $120/night.</li>
                    <li><strong>Red Roof Inn Arlington Entertainment District</strong> (budget): Basic accommodations within 2 miles of stadium. From $60-80/night.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-plane-line text-emerald-500"></i>
                    Near DFW Airport (10 miles from stadium)
                  </h4>
                  <p className="leading-relaxed mb-4">Practical for international visitors with early flights or those wanting free airport shuttles:</p>
                  <ul className="list-disc ml-6">
                    <li><strong>Hyatt Regency DFW</strong> (mid-range): Inside airport terminal, ultimate convenience. From $140/night.</li>
                    <li><strong>Grand Hyatt DFW</strong> (luxury): Connected to terminal, spa, multiple restaurants. From $180/night.</li>
                    <li>Various airport hotels with free shuttles: Hampton Inn, Holiday Inn Express, Comfort Suites ($90-130/night)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-building-4-line text-emerald-500"></i>
                    Downtown Dallas (20 miles from stadium)
                  </h4>
                  <p className="leading-relaxed mb-4">For visitors wanting urban nightlife and culture between matches:</p>
                  <ul className="list-disc ml-6">
                    <li><strong>The Joule</strong> (luxury boutique): Stylish downtown hotel with rooftop pool. From $250/night.</li>
                    <li><strong>Kimpton Pittman Hotel</strong> (upscale boutique): Arts District location, pet-friendly. From $180/night.</li>
                    <li><strong>Aloft Dallas Downtown</strong> (mid-range): Modern design, near nightlife. From $120/night.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-emerald-500"></i>
                    Booking Strategy
                  </h4>
                  <p className="leading-relaxed">Use platforms like Booking.com, Expedia, or Airbnb to compare rates. Book at least 6-9 months in advance for World Cup dates. Consider vacation rentals in Arlington for groups wanting multiple bedrooms at better value than hotel suites.</p>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Matchday Tips & Insider Advice */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-lightbulb-line text-emerald-500 text-3xl"></i>
                Matchday Tips &amp; Insider Advice
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-time-line text-emerald-500"></i>
                    Arrival Time
                  </h4>
                  <p className="leading-relaxed">Security and entry procedures will be extensive for World Cup matches. Plan to arrive 2.5-3 hours before kickoff. Gates typically open 2 hours pre-match, giving you time to explore the massive facility, grab food, and soak in pre-match atmosphere.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-shield-check-line text-emerald-500"></i>
                    Bag Policy
                  </h4>
                  <p className="leading-relaxed">AT&amp;T Stadium enforces strict NFL bag policies. Allowed bags must be clear plastic, vinyl, or PVC and not exceed 12" × 6" × 12", or small clutch purses (4.5" × 6.5"). Leave backpacks and large bags at your hotel.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-suitcase-line text-emerald-500"></i>
                    What to Bring
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Mobile ticket on your phone (all tickets are mobile)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Valid photo ID (passport for international visitors)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Light jacket or sweater (stadium air conditioning can be aggressive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Sunglasses if roof is open</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Portable phone charger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Cash for vendors outside stadium</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-sun-line text-emerald-500"></i>
                    Weather Considerations
                  </h4>
                  <p className="leading-relaxed">June/July in North Texas means heat—often 95°F+ (35°C+). The retractable roof and climate control mean comfort inside, but dress for extreme heat when arriving. Sunscreen and hydration essential if tailgating or exploring outdoor plazas.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-restaurant-2-line text-emerald-500"></i>
                    Food &amp; Drink Inside
                  </h4>
                  <p className="leading-relaxed">The stadium offers extensive concessions from BBQ and Tex-Mex to pizza and burgers. Prices are premium ($12-18 for entrees, $10-15 for beer). Notable spots:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Club Audi for upscale dining (club ticket holders)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Silver Mine Subs for quick bites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                      <span>Multiple Tex-Mex and taco stands throughout concourses</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-whiskey-line text-emerald-500"></i>
                    Alcohol
                  </h4>
                  <p className="leading-relaxed">Beer and cocktails available throughout (prices $12-16). Texas allows alcohol sales at sporting events, though FIFA may have specific policies for World Cup matches.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-door-open-line text-emerald-500"></i>
                    Best Gates
                  </h4>
                  <p className="leading-relaxed">Gates A and E on the east side typically have shorter security lines. Premium ticket holders have dedicated entrances on the west side.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-route-line text-emerald-500"></i>
                    Post-Match Exit Strategy
                  </h4>
                  <p className="leading-relaxed">Don't rush. Wait 15-20 minutes after final whistle for crowds to thin. If using rideshare, walk toward Texas Live! entertainment complex for better pickup locations and shorter waits. Public transit shuttles will run for 60-90 minutes post-match.</p>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Things to Do Nearby */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
                <i className="ri-compass-3-line text-emerald-500 text-3xl"></i>
                Things to Do Nearby
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-restaurant-line text-emerald-500"></i>
                    Pre-Match (Within Walking Distance):
                  </h4>
                  <p className="leading-relaxed mb-4"><strong>Texas Live!</strong> (adjacent): This sprawling entertainment complex is Arlington's pre-match headquarters. The Live! Arena features a 100-foot LED screen for watching other World Cup matches, while Troy's restaurant (owned by Cowboys legend Troy Aikman) offers elevated sports bar fare and craft cocktails. Arlington Backyard is an outdoor concert venue with stadium views.</p>
                  <p className="leading-relaxed mb-4"><strong>J. Gilligan's Bar &amp; Grill</strong> (1.5 miles): Famous for their Irish Nachos and providing shuttles to the stadium. Arrive 3 hours before kickoff for good seating.</p>
                  <p className="leading-relaxed"><strong>Hurtado Barbecue</strong> (2.5 miles): One of Texas's top barbecue spots. Expect lines but worth it for authentic brisket and birria tacos.</p>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-user-smile-line text-emerald-500"></i>
                    Family Attractions:
                  </h4>
                  <ul className="list-disc ml-6">
                    <li><strong>Six Flags Over Texas</strong> (1 mile): The original Six Flags theme park features 14 world-class roller coasters and 100+ attractions. If you have a day between matches, this is essential Texas entertainment.</li>
                    <li><strong>Six Flags Hurricane Harbor</strong> (across I-30): Water park with wave pools, lazy rivers, and slides—perfect for beating the Texas heat.</li>
                    <li><strong>Globe Life Field</strong> (adjacent): Home of the 2023 World Series champion Texas Rangers. Stadium tours available on non-game days.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-building-line text-emerald-500"></i>
                    Culture &amp; Sightseeing (20-30 minutes away):
                  </h4>
                  <ul className="list-disc ml-6">
                    <li><strong>Dallas Arts District:</strong> Museums including Dallas Museum of Art (free admission), Nasher Sculpture Center, and Perot Museum of Nature &amp; Science</li>
                    <li><strong>Fort Worth Stockyards:</strong> Historic district with twice-daily cattle drives, western shops, and Texas honky-tonks</li>
                    <li><strong>Sixth Floor Museum at Dealey Plaza:</strong> Chronicles President Kennedy's assassination</li>
                    <li><strong>Bishop Arts District (Dallas):</strong> Trendy neighborhood with galleries, boutiques, and restaurants</li>
                  </ul>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Post-Match Celebrations */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
                <i className="ri-party-popper-line text-emerald-500 text-3xl"></i>
                Post-Match Celebrations
              </h3>
              <p className="leading-relaxed">
                Return to Texas Live! for late-night celebrations with fellow fans. Downtown Arlington offers additional bars and restaurants along Front Street and Division Street, though the energy will be concentrated at Texas Live! on matchdays.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict & Key Takeaway */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
                <i className="ri-medal-line text-emerald-500 text-3xl"></i>
                Final Verdict &amp; Key Takeaway
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  AT&T Stadium embodies American sports ambition at its most spectacular—a venue where cutting-edge technology, architectural audacity, and genuine football atmosphere converge. While it lacks the intimate European stadium charm, it compensates with scale, spectacle, and world-class amenities that will make the 2026 World Cup semifinal an unforgettable experience. The lack of direct public transit is Arlington's Achilles' heel, but special World Cup services and abundant rideshare options mitigate the challenge.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong>Who Will Love It Most:</strong> Fans who appreciate architectural marvels, technology enthusiasts, and anyone wanting a quintessentially American stadium experience. Families will find abundant entertainment options nearby, while international visitors get authentic Texas culture without compromise.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong>Don't Miss:</strong> Arrive early to explore the art collection, experience that jaw-dropping first view of the field from the main concourse, and witness the center-hung video board in action—it's genuinely one of global sport's most impressive sights.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong>Book Now:</strong> With nine matches—the most of any 2026 venue—accommodations and transport will be in extreme demand. International fans should secure hotels 9-12 months in advance, particularly for the July 14 semifinal. Consider booking nearby Dallas or Fort Worth hotels if Arlington is fully booked, and research rideshare credits or airport transfer packages through platforms like Welcome Pickups or Viator to lock in rates before surge pricing hits.
                </p>
                <p className="leading-relaxed">
                  Arlington waited 32 years to welcome the World Cup back to North Texas. This time, they're ready with a stadium befitting football's grandest stage.
                </p>
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
              <hr className="editorial-divider" />
            </article>
          </main>
          
          </div>
      )}
    </div>
  );
};