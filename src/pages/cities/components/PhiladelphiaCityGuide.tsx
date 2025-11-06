import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';

export function PhiladelphiaCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Philadelphia – World Cup 2026 Guide',
            'Comprehensive Philadelphia travel guide for FIFA World Cup 2026: Lincoln Financial Field details, match schedule, transportation, and where to stay.',
            `${import.meta.env.VITE_SITE_URL || 'http://localhost:3000'}/world-cup-2026-cities/philadelphia`
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-cities' },
            { name: 'Philadelphia', url: '/world-cup-2026-cities/philadelphia' }
          ]),
          generateImageObjectSchema('/images/cities/philadelphia-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'Philadelphia skyline – World Cup 2026'
          })
        ]}
      />

      {/* Editorial Hero — cohesive with NYC guide styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/philadelphia-world-cup-2026.webp"
            alt="Philadelphia skyline – World Cup 2026"
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
            <h1 className="editorial-hero-title">Philadelphia</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>USA</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <span>Lincoln Financial Field</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>69,796 capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Editorial presentation aligned with NYC */}
      <main className="editorial-article py-12">
        {/* Introduction block */}
        <article className="editorial-body editorial-dropcap">
          <div>
            <p className="leading-relaxed mb-6">
              On July 4, 2026—exactly 250 years after the Declaration of Independence was signed in this very city—Philadelphia will host a FIFA World Cup Round of 16 knockout match at Lincoln Financial Field. Let that sink in: America's Semiquincentennial, the birthplace of democracy, and the world's most watched sporting event, all colliding on the same day. This isn't just a football match; it's a historic moment that will never be repeated.
            </p>
            <p className="leading-relaxed">
              Between June 14 and July 4, Lincoln Financial Field will host six World Cup matches drawing over half a million visitors to the City of Brotherly Love. If you've never visited Philadelphia, prepare for a city where cobblestone streets meet world-class museums, where Revolutionary War history sits beside cutting-edge culinary innovation, and where the most iconic sandwich in America (yes, the cheesesteak) is debated with religious fervor. Philadelphia combines accessibility, walkability, affordability, and authenticity in ways that coastal metropolises can't match. You'll experience American history at its source while watching the world's game played at its highest level.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>
            The Stadium: Lincoln Financial Field (Philadelphia Stadium for FIFA 2026)
          </h2>

          <div className="space-y-8">
            {/* An Eagles' Nest Designed for Glory */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-eagle-line text-emerald-500"></i>
                An Eagles' Nest Designed for Glory
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Lincoln Financial Field opened in 2003 at a cost of $512 million and has a capacity of 69,796 seats. The stadium was specifically designed to resemble an eagle—the Philadelphia Eagles' mascot—with wing-like canopies over the east and west stands and the Eagles Nest balcony behind the north end zone. The three open corners provide fans with views of the Philadelphia skyline and the surrounding South Philadelphia Sports Complex.
                </p>
                <p className="leading-relaxed">
                  During the World Cup, FIFA will refer to the venue as "Philadelphia Stadium" due to sponsorship regulations that prohibit corporate names during international tournaments. The stadium underwent renovations ahead of the tournament, including modernization of the playing field surface and seating upgrades to meet FIFA's requirements for hosting such a major event.
                </p>
              </div>
            </div>

            {/* One of the "Greenest" Stadiums in the World */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-leaf-line text-emerald-500"></i>
                One of the "Greenest" Stadiums in the World
              </h3>
              <div>
                <p className="leading-relaxed">
                  In 2013, Lincoln Financial Field was recognized as one of the greenest stadiums in the NFL. The facility features 11,000 solar panels and 14 wind turbines installed on the outside and atop the stadium, accounting for 30% of the electricity used to power the facility. This sustainable approach makes Lincoln Financial Field a model for modern sports venues worldwide.
                </p>
              </div>
            </div>

            {/* Match Schedule at Lincoln Financial Field */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-calendar-event-line text-emerald-500"></i>
                Match Schedule at Lincoln Financial Field
              </h3>
              <div>
                <p className="leading-relaxed mb-6">Philadelphia will host six matches between June 14 and July 4, 2026:</p>
                <div className="space-y-2 mb-6">
                  <p><strong>Group Stage Matches</strong>: June 14, 19, 22, 25, 27</p>
                  <p><strong>Round of 16 (Independence Day!)</strong>: July 4, 2026</p>
                </div>
                <p className="leading-relaxed">
                  That July 4th knockout match is the crown jewel of Philadelphia's World Cup schedule. The 250th anniversary of American independence coinciding with a World Cup knockout stage game creates a once-in-a-lifetime collision of patriotic celebration and global football drama. Expect fireworks (literally), red-white-and-blue everything, and an atmosphere unlike any other World Cup match.
                </p>
              </div>
            </div>

            {/* What Makes This Stadium Special */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                What Makes This Stadium Special
              </h3>
              <div>
                <p className="leading-relaxed mb-6">
                  Since opening, Lincoln Financial Field has hosted three NFC Championship Games, nearly 40 concerts, the annual Army-Navy football classic, and several high-profile international soccer matches, including the Women's World Cup, CONCACAF Gold Cup Final, and Copa América. The venue can expand to hold 72,000 for special events, and its location in South Philadelphia places it in the heart of the city's sports culture.
                </p>
                <p className="leading-relaxed">
                  The stadium sits within the South Philadelphia Sports Complex on Pattison Avenue, easily accessible via SEPTA's Broad Street Line, making it one of the most transit-friendly World Cup venues in North America.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation Section */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-roadster-line text-emerald-500"></i>
            Getting There: Transportation Made Easy
          </h2>

          <div className="space-y-8">
            {/* SEPTA Broad Street Line (Subway) */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                SEPTA Broad Street Line (Subway)
              </h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The Broad Street Line (Orange Line) runs directly from Center City to NRG Station (formerly Pattison Station), located adjacent to Lincoln Financial Field. From City Hall or any downtown subway station, it's a straight shot south—no transfers required.
                </p>
                <p><strong>Travel Time</strong>: 15-20 minutes from City Hall to NRG Station</p>
                <p><strong>Fare</strong>: $2.00 with a SEPTA Key card ($2.50 cash)</p>
                <p><strong>Frequency</strong>: Trains run frequently throughout the day, with additional service on match days</p>
                <p className="leading-relaxed">
                  Exit at NRG Station and you're a 5-minute walk from the stadium entrance. On match days, expect large crowds but efficient operations—SEPTA knows how to move people during Eagles games, concerts, and major events.
                </p>
                <p><strong>Pro Tip</strong>: Purchase a SEPTA Key Day Pass ($8) if you plan to use transit for sightseeing earlier in the day before heading to the match. Unlimited rides make exploring Philadelphia affordable.</p>
              </div>
            </div>

            {/* Rideshares */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-emerald-500"></i>
                Rideshares
              </h3>
              <div>
                <p className="leading-relaxed">
                  Budget $15-25 from Center City hotels to Lincoln Financial Field via Uber or Lyft. Expect surge pricing immediately before kickoff and after the final whistle. Consider walking a few blocks away from the stadium after the match to request your ride and avoid the highest surges.
                </p>
              </div>
            </div>

            {/* From Philadelphia International Airport (PHL) */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-emerald-500"></i>
                From Philadelphia International Airport (PHL)
              </h3>
              <div>
                <p className="leading-relaxed">
                  Philadelphia International Airport is located approximately 12 miles southwest of Center City and is one of America's major East Coast hubs, serving over 100 airlines with connections to destinations worldwide.
                </p>
              </div>
            </div>

            {/* SEPTA Airport Line */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                SEPTA Airport Line (The Best Option)
              </h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The Southeast Pennsylvania Transportation Authority (SEPTA) provides direct train service from all airport terminals to Center City in just 25 minutes. The Airport Line runs every 30 minutes on weekdays (5 AM to midnight) and hourly on weekends.
                </p>
                <p className="leading-relaxed">
                  <strong>Fares</strong>: A single ride from the airport to Center City costs $6.50 when using a SEPTA Key Travel Wallet, or $6.75 for a Quick Trip (one-way ticket purchased from kiosks). If you're in a rush, you can pay $8 cash directly onboard the train, though purchasing in advance saves money.
                </p>
                <p className="leading-relaxed">
                  <strong>SEPTA Key Card</strong>: Purchase a SEPTA Key card for $4.95 at any airport station kiosk or SEPTA Sales Office. Load the Travel Wallet with funds and use it for all SEPTA services throughout your stay. This is the most cost-effective approach for visitors using public transit multiple times.
                </p>
                <p className="leading-relaxed">
                  <strong>Stops in Center City</strong>: The Airport Line stops at Jefferson Station (near Reading Terminal Market and Convention Center), Suburban Station (downtown business district), and 30th Street Station (major Amtrak hub and University City). All three stops put you within walking distance or short ride to most downtown hotels.
                </p>
              </div>
            </div>

            {/* Rideshares and Taxis */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-emerald-500"></i>
                Rideshares and Taxis
              </h3>
              <div>
                <p className="leading-relaxed">
                  Uber and Lyft operate at PHL with designated pickup zones in Zone 7 (cross the pedestrian bridge from baggage claim). Expect the airport-to-Center City trip to cost around $29, though surge pricing applies during peak times. Taxis offer similar fares with flat rates available to downtown.
                </p>
              </div>
            </div>

            {/* Getting to Lincoln Financial Field on Match Days */}
            <div>
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-roadster-line text-emerald-500"></i>
                Getting to Lincoln Financial Field on Match Days
              </h3>
              <div>
                <p className="leading-relaxed">
                  The stadium is located in South Philadelphia, approximately 4 miles south of Center City, making it easily accessible via public transit.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h2>

          <div className="space-y-6">
            <p>
              Philadelphia offers exceptional accommodation options across walkable neighborhoods connected by transit. Here's where to base yourself.
            </p>

            {/* Center City: Maximum Convenience */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Center City: Maximum Convenience
              </h3>
              <p>
                <strong>Why Stay Here</strong>: Philadelphia's downtown core puts you within walking distance of Independence Hall, Reading Terminal Market, Rittenhouse Square, and direct Broad Street Line access to Lincoln Financial Field. This is the heart of the action.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Loews Philadelphia Hotel in the historic PSFS Building offers luxury accommodations near City Hall and Reading Terminal Market. For boutique charm, the Warwick Rittenhouse Square provides classic elegance near Rittenhouse Square's restaurants and shopping. Budget-conscious travelers should consider the Holiday Inn Express Philadelphia-Penns Landing, offering reliable comfort near Independence Mall.
              </p>
              <p>
                <strong>What You'll Find</strong>: World-class museums, Independence National Historical Park, Reading Terminal Market, and endless restaurant options all within walking distance. This is tourist central, but for good reason—everything is here.
              </p>
              <p>
                <strong>Transit to Stadium</strong>: Walk to any Broad Street Line station (City Hall, Walnut-Locust, Lombard-South) and ride directly to NRG Station. Journey time: 15-20 minutes.
              </p>
              <p>
                <strong>Book Early</strong>: Center City hotels will see premium World Cup pricing, especially around July 4th. Reserve 6-12 months in advance through `https://www.booking.com`  or `https://www.hotels.com`  to lock in rates.
              </p>
            </div>

            {/* Rittenhouse Square: Upscale Elegance */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Rittenhouse Square: Upscale Elegance
              </h3>
              <p>
                <strong>Why Stay Here</strong>: One of Philadelphia's most prestigious neighborhoods, Rittenhouse Square offers tree-lined streets, upscale shopping, award-winning restaurants, and a beautiful public park at its center. It's quieter than downtown while remaining highly walkable.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Rittenhouse Hotel provides five-star luxury overlooking the square with exceptional service and on-site dining. The AKA Rittenhouse Square offers extended-stay suites perfect for longer World Cup visits. For value near luxury, the Warwick Rittenhouse Square delivers charm at more accessible rates.
              </p>
              <p>
                <strong>Perfect For</strong>: Couples seeking romance, food enthusiasts wanting Philly's best restaurants, and travelers who value neighborhood elegance over tourist proximity.
              </p>
              <p>
                <strong>Transit</strong>: A 10-minute walk to Walnut-Locust or Lombard-South stations on the Broad Street Line connects you directly to the stadium.
              </p>
            </div>

            {/* Old City: Colonial Charm Meets Modern Cool */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Old City: Colonial Charm Meets Modern Cool
              </h3>
              <p>
                <strong>Why Stay Here</strong>: Just steps from Independence Hall and the Liberty Bell, Old City offers cobblestone streets, art galleries, boutique shops, and nightlife in America's most historic square mile. The neighborhood transforms from daytime history tours to evening cocktail culture.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Wyndham Philadelphia Historic District offers modern comfort adjacent to Independence National Historical Park. For upscale boutique style, Penn's View Hotel provides intimate European charm with exceptional service and an on-site wine bar.
              </p>
              <p>
                <strong>What You'll Find</strong>: Colonial history by day, wine bars and jazz clubs by night. Old City perfectly balances tourism with local authenticity.
              </p>
              <p>
                <strong>Transit</strong>: Walk to 2nd Street Station (Market-Frankford Line) or catch the Broad Street Line from City Hall. Total journey to stadium: 20-25 minutes.
              </p>
            </div>

            {/* University City: Budget-Friendly Near Penn & Drexel */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                University City: Budget-Friendly Near Penn & Drexel
              </h3>
              <p>
                <strong>Why Stay Here</strong>: West Philadelphia's University City neighborhood—home to the University of Pennsylvania and Drexel University—offers more affordable accommodations, diverse dining options, and a younger, energetic vibe. The Amtrak 30th Street Station location makes arrivals and departures seamless.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Study at University City offers boutique comfort with literary-themed design. The Inn at Penn provides upscale Ivy League elegance on Penn's campus. Budget travelers should consider the Home2 Suites by Hilton Philadelphia-Convention Center for reliable comfort and value.
              </p>
              <p>
                <strong>Perfect For</strong>: Budget-conscious travelers, families, and anyone prioritizing value over downtown address prestige.
              </p>
              <p>
                <strong>Transit</strong>: 30th Street Station connects to the Broad Street Line via subway, or take SEPTA buses directly to the stadium area.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Match */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-500"></i>
            Beyond the Match: What to Do in Philadelphia
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia's attractions span Revolutionary War history, world-class museums, and authentic neighborhood experiences that reveal the city's character.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-star-line text-emerald-500"></i>
              Independence National Historical Park: The Birthplace of America
            </h3>

            {/* Independence Hall */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Independence Hall</h4>
              <p>
                This UNESCO World Heritage Site is where the Declaration of Independence (1776) and the U.S. Constitution (1787) were debated and signed. Guided tours take you through the Assembly Room where America's Founding Fathers—Washington, Franklin, Jefferson, Adams—shaped democracy itself.
              </p>
              <p><strong>Admission</strong>: Free, but tickets required (purchase online for $1). Tours run daily 9 AM-5 PM.</p>
              <p><strong>Budget</strong>: 45-60 minutes for the tour, plus security screening time</p>
            </div>

            {/* The Liberty Bell Center */}
            <div className="space-y-4">
              <h4 className="editorial-h4">The Liberty Bell Center</h4>
              <p>
                View the iconic Liberty Bell—originally the Pennsylvania State House bell, later adopted by abolitionists as a symbol of freedom—in its glass chamber with Independence Hall providing the dramatic backdrop. The inscription reads: "Proclaim Liberty Throughout All the Land Unto All the Inhabitants thereof."
              </p>
              <p><strong>Admission</strong>: Free, no tickets required. Security screening similar to airports (no large bags).</p>
              <p><strong>Pro Tip</strong>: The Liberty Bell is visible through exterior windows 24/7, so even if the Center is closed, you can still view and photograph it.</p>
            </div>

            {/* Other Sites and Location */}
            <div className="space-y-4">
              <p>
                <strong>Other Sites</strong>: Congress Hall (where the U.S. Congress met 1790-1800), Benjamin Franklin Museum, Carpenters' Hall (First Continental Congress meeting site), and the President's House Memorial (outdoor exhibit on George Washington's presidential residence).
              </p>
              <p>
                <strong>Location</strong>: Old City, bounded by 2nd, 6th, Walnut, and Arch Streets—all within easy walking distance of each other.
              </p>
            </div>

            {/* Museum of the American Revolution */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Museum of the American Revolution
              </h3>
              <p>
                Opened in 2017, this museum tells the complex story of America's founding through immersive exhibits, rare artifacts (including George Washington's actual war tent), and diverse perspectives. The storytelling goes beyond textbook narratives to explore how ordinary people—enslaved individuals, Native Americans, women, immigrants—experienced the Revolutionary era.
              </p>
              <p><strong>Admission</strong>: Adults $21, students $17</p>
              <p><strong>Location</strong>: 101 S. 3rd Street, steps from Independence Hall</p>
              <p><strong>Budget</strong>: 2-3 hours</p>
            </div>

            {/* Reading Terminal Market */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-2-line text-emerald-500"></i>
                Reading Terminal Market: Philadelphia's Culinary Heart
              </h3>
              <p>
                One of America's oldest and largest public markets (established 1893), Reading Terminal Market features more than 80 merchants offering everything from Pennsylvania Dutch baked goods to authentic cheesesteaks, international cuisine, artisan cheese, fresh produce, and flowers.
              </p>
              <p><strong>Must-Try Vendors</strong>:</p>
              <div className="space-y-3">
                <p>
                  <strong>Uncle Gus' Steaks</strong>: The newest cheesesteak sensation, opened in January 2025 by the owners of Angelo's Pizzeria (South Philly's highest-rated cheesesteak), Tommy DiNic's, and Pearl's Oyster Bar. The collaboration brings Angelo's legendary house-made bread and decades of sandwich expertise together for what many consider the market's—and potentially Philadelphia's—best cheesesteak.
                </p>
                <p>
                  <strong>Tommy DiNic's</strong>: Famous for the roast pork sandwich voted "best sandwich in America" by food critics. Thinly sliced roast pork with sharp provolone and broccoli rabe on a Sarcone's Italian roll. The Roast Pork &amp; Roast Beef Combo (slightly off-menu) combines two signature sandwiches into one legendary creation.
                </p>
                <p>
                  <strong>Beiler's Bakery</strong>: Pennsylvania Dutch donuts and baked goods that disappear by mid-morning. Arrive early for the best selection.
                </p>
                <p>
                  <strong>Bassetts Ice Cream</strong>: America's oldest ice cream company (since 1861), still family-owned and serving small-batch flavors.
                </p>
                <p>
                  <strong>Dutch Eating Place</strong>: Amish and Pennsylvania Dutch comfort food including chicken pot pie, stuffed cabbage, and pork and sauerkraut.
                </p>
              </div>
              <p><strong>Location</strong>: 51 N. 12th Street, Center City (between Market and Arch Streets)</p>
              <p><strong>Hours</strong>: 8 AM-6 PM most days</p>
              <p><strong>Pro Tip</strong>: Arrive before 11:30 AM to beat the lunch rush, or after 2 PM when crowds thin out.</p>
            </div>

            {/* Philadelphia Museum of Art */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-image-line text-emerald-500"></i>
                Philadelphia Museum of Art: The Rocky Steps
              </h3>
              <p>
                One of America's largest art museums with over 240,000 works spanning 2,000 years, the Philadelphia Museum of Art features exceptional collections of European, American, and Asian art. The building itself—a Greek Revival masterpiece atop Fairmount Hill—offers stunning city views.
              </p>
              <p>
                <strong>The Rocky Steps</strong>: The 72 steps leading to the museum's east entrance became famous in the 1976 film <em>Rocky</em>. Tourists (and locals) still run up the steps and pose with the Rocky Statue at the bottom for photos. It's touristy, yes—but also genuinely fun.
              </p>
              <p><strong>Admission</strong>: Adults $25 (advance tickets recommended)</p>
              <p><strong>Location</strong>: 2600 Benjamin Franklin Parkway</p>
              <p><strong>Budget</strong>: 2-4 hours depending on your art appetite</p>
            </div>

            {/* Eastern State Penitentiary */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-government-line text-emerald-500"></i>
                Eastern State Penitentiary: Gothic Prison History
              </h3>
              <p>
                Once the world's most famous prison (1829-1971), housing Al Capone and other notorious criminals, Eastern State Penitentiary is now a hauntingly beautiful historic site. The crumbling cellblocks, Gothic architecture, and isolation cells tell the story of prison reform and the birth of the penitentiary system.
              </p>
              <p><strong>Admission</strong>: Adults $19</p>
              <p><strong>Location</strong>: 2027 Fairmount Avenue</p>
              <p><strong>Pro Tip</strong>: The annual Halloween Nights attraction transforms the prison into one of America's top haunted houses (but World Cup is in summer, so you'll experience the daytime historical tour).</p>
            </div>

            {/* Elfreth's Alley */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-home-2-line text-emerald-500"></i>
                Elfreth's Alley: America's Oldest Residential Street
              </h3>
              <p>
                Dating from 1703, this narrow cobblestone street features 32 homes continuously occupied for over 300 years. Wander the alley for free, or tour the Elfreth's Alley Museum (No. 124-126) to see 18th-century living conditions.
              </p>
              <p><strong>Admission</strong>: Street is free, museum $5</p>
              <p><strong>Location</strong>: Between 2nd and Front Streets, just north of Market Street</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food: Beyond the Cheesesteak */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-emerald-500"></i>
            Food: Beyond the Cheesesteak (But Also, Definitely Cheesesteaks)
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia's food scene extends far beyond its most famous sandwich, though we'll start there because it's mandatory.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-star-line text-emerald-500"></i>
              The Cheesesteak Debate: A Philadelphia Obsession
            </h3>
            <p>
              The cheesesteak was invented in Philadelphia in the 1930s, and locals have been arguing about the best version ever since. Here's what you need to know:
            </p>
            {/* The Classic Order */}
            <div className="space-y-4">
              <h4 className="editorial-h4">The Classic Order</h4>
              <p>
                "Whiz wit" (Cheez Whiz with fried onions) or "provolone witout" (provolone cheese without onions). American cheese is also popular. Never ask for Swiss.
              </p>
            </div>

            {/* Top Cheesesteak Destinations */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Top Cheesesteak Destinations
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="editorial-h4">Pat's King of Steaks vs. Geno's Steaks</h4>
                  <p>
                    These South Philly rivals face each other across the intersection of 9th Street and Passyunk Avenue. The rivalry is legendary, the sandwiches are solid, and the experience is touristy but authentic. Open 24/7, often with lines late at night. Both accept cash only.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Reading Terminal Market</h4>
                  <p>
                    Uncle Gus' Steaks (the new gold standard, opened January 2025), Spataro's Cheesesteaks (chopped, juicy, messy), and Carmen's (the "Franklin" with cream cheese is unique). Eating indoors with AC and seating beats standing on a South Philly sidewalk.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Steve's Prince of Steaks</h4>
                  <p>
                    Multiple locations including 16th & Chestnut (near Rittenhouse). Locals swear by Steve's for generous portions and quality ingredients.
                  </p>
                </div>
                <div>
                  <h4 className="editorial-h4">Jim's Steaks</h4>
                  <p>
                    South Street location (400 South Street) draws crowds for griddle-chopped meat and a fun atmosphere in a neighborhood known for nightlife.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond the Cheesesteak: Philly's Diverse Food Scene */}
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Beyond the Cheesesteak: Philly's Diverse Food Scene
              </h3>
              <div className="space-y-3">
                <p><strong>Roast Pork Sandwich</strong>: Many locals insist the roast pork sandwich—not the cheesesteak—is Philadelphia's best. Tommy DiNic's at Reading Terminal Market is the benchmark.</p>
                <p><strong>Hoagies</strong>: Philadelphia's version of the submarine sandwich, with specific bread (Amoroso's rolls), proper layering technique, and oil/vinegar/oregano seasoning. Primo Hoagies and Wawa (convenience store chain) both serve excellent versions.</p>
                <p><strong>Water Ice (pronounced "wooder ice")</strong>: Italian ice, but Philly does it better. Rita's Water Ice is the local chain; John's Water Ice (4TH & snyder) is the iconic South Philly spot.</p>
                <p><strong>Soft Pretzels</strong>: Philadelphia soft pretzels are thinner, chewier, and saltier than other cities' versions. Buy them from sidewalk vendors or Philly Pretzel Factory.</p>
                <p><strong>Fine Dining</strong>: Zahav (modern Israeli cuisine, James Beard Award winner), Friday Saturday Sunday (Stephen Starr's elegantbrunch and dinner spot), and Vernick Food &amp; Drink (New American, exceptional cocktails) represent Philly's upscale dining evolution.</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & What to Pack */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-sun-cloudy-line text-emerald-500"></i>
            Weather &amp; What to Pack
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-sun-line text-emerald-500"></i>
              June and July in Philadelphia: Warm with Occasional Rain
            </h3>
            <p>
              Philadelphia summers are warm and humid with occasional thunderstorms. Here's what to expect:
            </p>
            <div className="space-y-4">
              <h4 className="editorial-h4">June Weather</h4>
              <p><strong>Average high</strong>: 81°F (27°C)</p>
              <p><strong>Average low</strong>: 62°F (17°C)</p>
              <p><strong>Humidity</strong>: Moderate (around 67%)</p>
              <p><strong>Rainfall</strong>: 10 days of rain on average, totaling around 96mm for the month</p>
              <p><strong>Sunshine</strong>: 9 hours of bright sunshine daily (60% of daylight hours)</p>
            </div>
            <div className="space-y-4">
              <h4 className="editorial-h4">July Weather</h4>
              <p><strong>Average high</strong>: 88°F (31°C)</p>
              <p><strong>Average low</strong>: 68°F (20°C)</p>
              <p><strong>Humidity</strong>: Moderate to high (around 67%)</p>
              <p><strong>Rainfall</strong>: Less frequent than June, but thunderstorms can be intense</p>
              <p><strong>Sunshine</strong>: Long days with 15 hours of daylight</p>
            </div>
            <div className="space-y-4">
              <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                <i className="ri-suitcase-line text-emerald-500"></i>
                What to Pack
              </h3>
              <p><strong>Clothing</strong>: Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). Philadelphia is casual—shorts and t-shirts work for most activities. Even upscale restaurants rarely require more than "smart casual."</p>
              <p><strong>Sun Protection</strong>: Sunglasses, sunscreen (SPF 30+), and a hat for outdoor activities and match days.</p>
              <p><strong>Rain Gear</strong>: Compact umbrella or light rain jacket for afternoon thunderstorms, especially in June.</p>
              <p><strong>Walking Shoes</strong>: Philadelphia is highly walkable. Comfortable shoes are essential—you'll cover miles exploring historic sites and neighborhoods.</p>
              <p><strong>Layers</strong>: One light jacket for overly air-conditioned indoor spaces (museums, restaurants).</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Policies */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-shopping-bag-3-line text-emerald-500"></i>
            Stadium Policies
          </h2>
          <div className="space-y-6">
            <p>
              Lincoln Financial Field typically requires clear bags (12" x 6" x 12" or smaller) or small clutches (4.5" x 6.5"). Check the official stadium website before your visit to confirm current policies.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Tips for International Visitors */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-global-line text-emerald-500"></i>
            Practical Tips for International Visitors
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-bank-card-line text-emerald-500"></i>
              Money Matters
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Currency</strong>: US Dollar (USD)</li>
              <li><strong>Cards</strong>: Credit cards accepted everywhere; contactless payment widely available</li>
              <li><strong>Tipping</strong>: 18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</li>
              <li><strong>ATMs</strong>: Widely available; use bank-affiliated machines to avoid excessive fees</li>
              <li><strong>Cost of Living</strong>: Philadelphia is more affordable than New York, Boston, or Washington DC—expect reasonable prices for food, accommodations, and attractions</li>
            </ul>

            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-shield-check-line text-emerald-500"></i>
              Safety &amp; Getting Around
            </h3>
            <p>
              Philadelphia is generally safe for visitors, especially in Center City, Old City, Rittenhouse Square, and University City. Basic street smarts apply: be aware of your surroundings, keep valuables secure, and stick to well-lit areas at night.
            </p>
            <p><strong>Walking</strong>: Center City, Old City, Rittenhouse, and Society Hill are highly walkable. Philadelphia's grid layout makes navigation intuitive.</p>
            <p><strong>SEPTA</strong>: The public transit system includes subways, buses, trolleys, and regional rail. Download the SEPTA app for real-time arrivals and trip planning. All modes feature video surveillance and regular police presence.</p>
            <p><strong>Biking</strong>: Indego bike share offers stations throughout Center City and surrounding neighborhoods. Perfect for exploring the Schuylkill River Trail or connecting neighborhoods.</p>

            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-chat-4-line text-emerald-500"></i>
              Language &amp; Connectivity
            </h3>
            <p>
              English is the primary language. You'll hear Philadelphia's distinctive accent (pronouncing "water" as "wooder," "Eagles" as "Iggles"). The city's diversity means you'll also hear Spanish, Chinese, Vietnamese, and dozens of other languages throughout neighborhoods.
            </p>
            <p>
              Free Wi-Fi is available in most cafés, hotels, public spaces, and SEPTA subway stations. Consider a US SIM card or international data plan for navigation and communication.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-ticket-2-line text-emerald-500"></i>
            Ticket Information &amp; Booking Strategy
          </h2>
          <div className="space-y-6">
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-ticket-line text-emerald-500"></i>
              How to Get World Cup Tickets
            </h3>
            <p>
              Tickets for the 2026 FIFA World Cup are sold in multiple phases. The first presale draw began September 10, 2025, exclusively for Visa cardholders. Group stage tickets start at $60, with prices increasing for knockout rounds.
            </p>
            <p>
              Register at `https://www.fifa.com/tickets`  for future ticket phases. The teams playing in Philadelphia's group stage matches won't be known until the Final Draw on December 5, 2025, when matchups, dates, locations, and kickoff times are assigned.
            </p>
            <div className="space-y-2">
              <h4 className="editorial-h4">July 4th Premium</h4>
              <p>
                The Independence Day Round of 16 match will be among the most sought-after tickets in Philadelphia's schedule. Expect high demand and premium pricing.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="editorial-h4">Hospitality Packages</h4>
              <p>
                If you miss the general ticket lottery, official hospitality packages through FIFA's partner On Location include premium seating, exclusive lounge access, and food and beverage service. Packages typically start at $1,450 per match for group stage games, with knockout rounds priced significantly higher.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* FIFA Fan Festival at Lemon Hill */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-community-line text-emerald-500"></i>
            FIFA Fan Festival at Lemon Hill
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia will host the tournament-long, free-admission FIFA Fan Festival at Lemon Hill in East Fairmount Park. The massive international celebration will feature giant screens broadcasting live matches, food and beverage vendors, live music and entertainment, and international cultural events and parties. The FIFA Fan Festival expects 15,000-20,000 attendees each match day.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Philadelphia Will Make Your World Cup Unforgettable */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-award-line text-emerald-500"></i>
            Why Philadelphia Will Make Your World Cup Unforgettable
          </h2>
          <div className="space-y-6">
            <p>
              Philadelphia doesn't have New York's scale or Los Angeles' glamour, but it offers something neither can match: the convergence of American history and global sport at a singular moment in time.
            </p>
            <p>
              When you walk Independence Hall's corridors where democracy was born, then watch a World Cup knockout match on the 250th anniversary of that independence, you're experiencing layers of history that intersect only once. Add in authentic neighborhoods where locals still shout "Yo!" as a greeting, cheesesteaks that justify the hype, and world-class museums that rival any city's, and Philadelphia delivers the complete World Cup experience.
            </p>
            <p>
              This is a city where you can follow Benjamin Franklin's footsteps in the morning, eat a roast pork sandwich that changes your life at lunch, and watch elite international football in the evening—all without breaking the bank or battling impossible crowds.
            </p>
            <p>
              Over half a million visitors will descend on Philadelphia for the six World Cup matches. The city hosted the 1926 Sesquicentennial International Exposition celebrating America's 150th birthday. In 2026, for the Semiquincentennial (250th birthday), Philadelphia returns to the world stage with the world's game.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Start Planning Your 2026 World Cup Trip to Philadelphia */}
        <article className="editorial-body">
          <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-emerald-500"></i>
            Start Planning Your 2026 World Cup Trip to Philadelphia
          </h2>
          <div className="space-y-6">
            <p>
              The countdown is on. Hotels are booking up. Flights are being reserved. And Philadelphia is preparing to show the world why this city matters.
            </p>
            <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
              <i className="ri-check-double-line text-emerald-500"></i>
              Your Action Plan
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Register for FIFA tickets</strong> at `https://www.fifa.com/tickets`  for future phases</li>
              <li><strong>Book accommodations early</strong> via `https://www.booking.com`  or `https://www.hotels.com` —6-12 months in advance is essential, especially for July 4th</li>
              <li><strong>Research flights</strong> to Philadelphia (PHL) through `https://www.skyscanner.com`  or `https://www.google.com/flights` </li>
              <li><strong>Purchase a SEPTA Key card</strong> immediately upon arrival for seamless transit</li>
              <li><strong>Plan Independence Hall tour</strong> in advance—book the $1 tickets online weeks before your visit</li>
              <li><strong>Embrace the July 4th experience</strong>—this collision of American independence and World Cup football will never happen again</li>
            </ol>
            <p>
              Philadelphia will host six matches during the 2026 FIFA World Cup at Lincoln Financial Field, including five group-stage contests and a Round of 16 knockout match on July 4, 2026—the 250th anniversary of American independence. The city expects the matches to generate significant economic impact and welcome visitors from around the world to the birthplace of American democracy.
            </p>
            <p>
              <strong>See you in Philadelphia. Come for the football. Stay for the history. Leave with cheesesteak stains and unforgettable memories.</strong>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}