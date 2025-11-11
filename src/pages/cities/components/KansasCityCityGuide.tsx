import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';

export function KansasCityCityGuide() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-host-cities/kansas-city';

  useEffect(() => {
    const title = 'Kansas City – World Cup 2026 Guide';
    const description = 'Complete Kansas City World Cup 2026 travel guide: Arrowhead Stadium details, match schedule, transportation, hotels, and attractions.';
    const fullUrl = `${siteUrl}${pageUrl}`;
    const ogImage = `${siteUrl}/images/cities/kansas-city-world-cup-2026.webp`;
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', fullUrl);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', fullUrl);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
    setMeta('meta[property="twitter:url"]', 'content', fullUrl);
    setMeta('meta[property="twitter:image"]', 'content', ogImage);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Kansas City – World Cup 2026 Guide',
            'Complete Kansas City World Cup 2026 travel guide: Arrowhead Stadium details, match schedule, transportation, hotels, and attractions.',
            `${siteUrl}${pageUrl}`
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Host Cities', url: `${siteUrl}/world-cup-2026-host-cities` },
            { name: 'Kansas City', url: `${siteUrl}${pageUrl}` }
          ]),
          generateImageObjectSchema('/images/cities/kansas-city-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'Kansas City skyline – World Cup 2026 host city'
          })
        ]}
      />
      <Header />

      {/* Editorial Hero — cohesive with NYC guide styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/kansas-city-world-cup-2026.webp"
            alt="Kansas City skyline"
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="blur"
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
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex items-center text-sm text-slate-200 gap-2">
                <li>
                  <Link to="/" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link>
                </li>
                <li>›</li>
                <li>
                  <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Host Cities</Link>
                </li>
                <li>›</li>
                <li className="text-slate-300">Kansas City World Cup 2026 Guide</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">Kansas City</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Kansas City, Missouri</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <span>Arrowhead Stadium</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>6 Matches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Editorial presentation aligned with NYC */}
      <main className="editorial-article py-12">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>
            The Heart of America Hosts the Heart of the Game
          </h2>
          <p>
            Kansas City might be the smallest host city for the 2026 FIFA World Cup, but don't let that fool you—this is where American football passion meets Midwest hospitality in the most electric way possible.
            {' '}Kansas City is one of the{' '}
            <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 host cities</Link>
            {' '}for World Cup 2026.
            {' '}From June 16 through July 11,{' '}
            <Link to="/world-cup-2026-stadiums/arrowhead-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Arrowhead Stadium</Link>
            {' '}(known worldwide as one of the loudest venues in sports) will host six World Cup matches, including a quarterfinal. If you've never experienced Kansas City, prepare for authentic BBQ that'll ruin you for life, genuine friendliness that feels almost surreal, and a stadium atmosphere that literally holds world records for decibel levels.
          </p>
          <p>
            This isn't a flashy coastal city trying to impress you. This is the real America—BBQ joints that have been perfecting brisket since the 1940s, fountains on every corner (seriously, KC has more fountains than any city except Rome), and locals who'll give you directions then invite you to their tailgate. The 2026 World Cup gives Kansas City its moment to show the world what Midwestern culture is all about: unpretentious, welcoming, and unexpectedly unforgettable.
          </p>
          {/* Essential Kansas City Links */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
            <div className="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential Kansas City Links</div>
            <div className="space-y-1 text-slate-800 dark:text-slate-200">
              <div>
                🏟️ <strong>Stadium:</strong>{' '}
                <Link to="/world-cup-2026-stadiums/arrowhead-stadium" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Arrowhead Stadium Guide</Link>
              </div>
              <div>
                🗺️ <strong>All Host Cities:</strong>{' '}
                <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </div>
              <div>
                ✈️ <strong>Nearby Cities:</strong>{' '}
                <Link to="/world-cup-2026-host-cities/dallas" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Dallas</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/houston" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Houston</Link>{' '}|
                {' '}<Link to="/world-cup-2026-host-cities/atlanta" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Atlanta</Link>
              </div>
            </div>
          </div>
          {/* Regional planning cross-links */}
          <p className="leading-relaxed mt-4">
            Pair Kansas City with{' '}
            <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
            {' '}for a central states circuit. Connect the Midwest with the South by adding{' '}
            <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
            {' '}or{' '}
            <Link to="/world-cup-2026-host-cities/atlanta" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
            . For contrast and travel planning, combine Kansas City with a coastal city like{' '}
            <Link to="/world-cup-2026-host-cities/los-angeles" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link>
            .
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Section */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>
            The Stadium: Arrowhead Stadium, Kansas City, MO (Kansas City Stadium for FIFA 2026)
          </h3>
          <div className="space-y-8">
            {/* Loudest Venue */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-volume-up-line text-emerald-500"></i>
                One of the World's Loudest Venues
              </h4>
              <div className="space-y-4">
                <p>
                  Arrowhead Stadium opened in 1972 and has a capacity of 76,416 seats, making it one of the larger World Cup venues in the United States. What truly sets this stadium apart isn't just size—it's sound. In a 2014 NFL match between the Kansas City Chiefs and New England Patriots, the decibel count hit 142.2, a record that still stands today as the loudest stadium in the USA.
                </p>
                <p>
                  The stadium's unique design creates this acoustic phenomenon. Two towering stands run alongside the pitch, while smaller stands behind both goals complete a three-tiered bowl that wraps sound around and amplifies it back onto the field. For World Cup matches, this means visiting teams will face not just their opponents but also a wall of noise from 76,000 passionate supporters.
                </p>
                <p>
                  During the tournament, FIFA will refer to the venue as "Kansas City Stadium" due to sponsorship regulations. The stadium underwent an $800 million renovation ahead of the World Cup, touching every aspect of the 52-year-old venue with improvements above and below ground.
                </p>
              </div>
            </div>
            {/* Match Schedule */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-calendar-event-line text-emerald-500"></i>
                Match Schedule at Arrowhead Stadium, Kansas City, MO
              </h4>
              <div className="space-y-3">
                <p>
                  Kansas City will host six World Cup matches spanning nearly a month of tournament action:
                </p>
                <div className="space-y-2">
                  <p><strong>Group Stage Matches</strong>: June 16, 20, 25, 27</p>
                  <p><strong>Round of 32</strong>: July 3</p>
                  <p><strong>Quarterfinal</strong>: July 11, 2026</p>
                </div>
                <p>
                  That quarterfinal on July 11 represents the deepest stage of the tournament any U.S. venue will host outside the semifinals and final, making Kansas City a critical stop for teams with championship ambitions.
                </p>
              </div>
            </div>

            {/* What Makes This Stadium Special */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                What Makes This Stadium Special
              </h4>
              <div className="space-y-4">
                <p>
                  Arrowhead Stadium is currently home to the Kansas City Chiefs, who have risen to NFL prominence behind quarterback Patrick Mahomes and won two Super Bowls in recent years. The stadium's football pedigree is impeccable, but soccer has history here too.
                </p>
                <p>
                  MLS side Sporting Kansas City (originally Kansas City Wizards) played at Arrowhead from 1996 to 2007 before moving to their own stadium. Soccer returned in April 2024 when Inter Miami faced Sporting Kansas City thanks to the Lionel Messi effect, proving the stadium can handle major football events.
                </p>
                <p>
                  The stadium hosted matches during the 2024 Copa América, including a group match between USA and Uruguay, giving FIFA a preview of what Kansas City can deliver. The facility features natural grass specifically cultivated for the low temperatures Kansas City experiences—'NorthBridge Bermudagrass' is the optimal surface for this climate.
                </p>
                <p>
                  Arrowhead is located in Kansas City, Missouri, which sits on the border of Missouri and Kansas states. The stadium is easily accessible from downtown Kansas City, making it convenient for visitors staying in the urban core.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation Section */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-roadster-line text-emerald-500"></i>
            Getting There: Transportation Made Easy
          </h3>
          <div className="space-y-8">
            {/* From the Airport */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-plane-line text-emerald-500"></i>
                From the Airport
              </h4>
              <div className="space-y-4">
                <p>
                  Kansas City International Airport (MCI) is the main airport serving the region, located approximately 15 miles northwest of downtown Kansas City. In 2026, visitors will be greeted by a brand new single terminal that opened to replace the previous outdated facility—Kansas City invested in this infrastructure specifically with the World Cup in mind.
                </p>
                <p>
                  The airport serves domestic and international flights with connections to 181 countries through major hubs, making Kansas City accessible from virtually anywhere in the world.
                </p>
              </div>
            </div>
            {/* Airport to Downtown Transportation */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Airport to Downtown Transportation
              </h4>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/70 dark:border-slate-700">
                  <h4 className="editorial-h4 mb-3 flex items-center gap-2">
                    <i className="ri-bus-line text-emerald-500"></i>
                    RideKC Bus Line 229 (Free!)
                  </h4>
                  <p>
                    The most budget-friendly option is RideKC Bus Line 229, which operates fare-free service directly from MCI Airport to downtown Kansas City. The journey takes approximately 60 minutes in light traffic, with buses departing hourly throughout the day.
                  </p>
                  <p>
                    The bus stops at both airport terminals and makes multiple stops throughout downtown, dropping passengers near major hotels and the Power & Light entertainment district. This is an excellent option for solo travelers or anyone comfortable with public transit.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/70 dark:border-slate-700">
                  <h4 className="editorial-h4 mb-3 flex items-center gap-2">
                    <i className="ri-taxi-line text-emerald-500"></i>
                    Taxi and Rideshare
                  </h4>
                  <p>
                    Taxis are available 24/7 at designated locations outside the terminal, with flat rates to downtown averaging around $50 for up to four passengers. Uber and Lyft operate throughout Kansas City with reliable service. Expect the trip to downtown to take 20-25 minutes depending on traffic.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/70 dark:border-slate-700">
                  <p>
                    <strong>Pro Tip</strong>: Download the RideKC Transit app before arrival to track bus times and plan your route. For groups of three or more, rideshares often cost less per person than taxis and offer more convenience.
                  </p>
                </div>
              </div>
            </div>

            {/* Getting to Arrowhead Stadium on Match Days */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-roadster-line text-emerald-500"></i>
                Getting to Arrowhead Stadium, Kansas City, MO on Match Days
              </h4>
              <div className="space-y-4">
                <p>
                  The stadium is located about 10-12 miles east of downtown Kansas City, making it easily accessible via car or rideshare. Unfortunately, there is no direct public transit from downtown to Arrowhead Stadium, so plan accordingly.
                </p>
                <p className="leading-relaxed mt-4">
                  Planning a broader trip? Build a heartland-to-south route: start in Kansas City, then head to{' '}
                  <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                  {' '}and{' '}
                  <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
                  {', '}or pivot east to{' '}
                  <Link to="/world-cup-2026-host-cities/atlanta" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
                  {' '}for a diverse American experience.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Logistics */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-calendar-event-line text-emerald-500"></i>
            Matchday Logistics: Rideshare, Parking, Streetcar
          </h3>
          <div className="space-y-8">
            {/* Rideshare Strategy */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-taxi-line text-emerald-500"></i>
                Rideshare Strategy
              </h4>
              <p>
                Budget $20-35 for an Uber or Lyft from downtown hotels to Arrowhead. On match days, expect surge pricing, especially in the hours before kickoff and immediately after the final whistle. Book your return ride immediately after the match ends to avoid the highest surges.
              </p>
            </div>
            {/* Parking */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-parking-box-line text-emerald-500"></i>
                Parking
              </h4>
              <p>
                If you're renting a car, Arrowhead offers extensive parking lots. Arrive early on match days—parking fills up quickly for major events, and you'll want time to soak in the tailgate atmosphere.
              </p>
            </div>
            {/* KC Streetcar */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                Kansas City Streetcar (Bonus)
              </h4>
              <p>
                While it doesn't reach Arrowhead, the KC Streetcar offers free transportation between River Market, downtown, Union Station, and the Crossroads Arts District—perfect for exploring the city between matches.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h3>

          <div className="space-y-6">
            <p>
              Kansas City offers diverse accommodation options, from downtown hotels with skyline views to neighborhood gems with local character. Here's where to base yourself.
            </p>

            {/* Downtown / Power & Light */}
            <div className="space-y-4">
              <h4 className="editorial-h4">
                Downtown/Power &amp; Light District: Maximum Convenience
              </h4>
              <p>
                <strong>Why Stay Here</strong>: Downtown puts you in the center of Kansas City's energy, walkable to restaurants, bars, and entertainment. The Power &amp; Light District is Kansas City's heartbeat—eight blocks of great food, live music, and nightlife where locals and tourists converge.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Kansas City Marriott Downtown sits adjacent to the convention center and within walking distance of Power &amp; Light District, offering spacious rooms with city views and on-site dining. The Loews Kansas City provides upscale accommodations near the convention center with a fitness center and shared lounge.
              </p>
              <p>
                For boutique charm, the Crossroads Hotel in the nearby Crossroads Arts District offers a fitness center, restaurant, bar, and 24-hour front desk in one of KC's most creative neighborhoods.
              </p>
              <p>
                <strong>Perfect For</strong>: Visitors who want walkability, easy access to nightlife, and proximity to cultural attractions without needing a car for everything except match days.
              </p>
              <p>
                <strong>Book Smart</strong>: Downtown hotels fill up during major events. Reserve 6-12 months in advance through `https://www.booking.com`  or `https://www.hotels.com`  to lock in better rates and guarantee availability.
              </p>
            </div>

            {/* Crossroads Arts District */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Crossroads Arts District: Creative Energy</h4>
              <p>
                <strong>Why Stay Here</strong>: Just south of downtown, the Crossroads is Kansas City's creative hub—galleries, street art, independent coffee shops, and restaurants that define Kansas City's evolving cultural scene. Every First Friday, the neighborhood hosts an art walk that draws thousands.
              </p>
              <p>
                <strong>What You'll Find</strong>: The Crossroads Hotel embodies the neighborhood's spirit with contemporary design, a ground-floor restaurant serving local cuisine, and a rooftop bar with skyline views. The Hampton Inn &amp; Suites Kansas City Downtown Crossroads offers modern comfort with free Wi-Fi and a fitness center.
              </p>
              <p>
                <strong>Perfect For</strong>: Art lovers, foodies seeking KC's best independent restaurants, and travelers who want neighborhood character without sacrificing downtown proximity.
              </p>
            </div>

            {/* Country Club Plaza */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Country Club Plaza: Shopping and Spanish Architecture</h4>
              <p>
                <strong>Why Stay Here</strong>: Built in the 1920s, the Country Club Plaza is America's first suburban shopping district, featuring sumptuous Spanish architecture, fountains on every corner, and upscale shopping. The area offers tree-lined streets, outdoor dining, and a more relaxed vibe than downtown.
              </p>
              <p>
                <strong>Hotel Options</strong>: The Raphael Hotel, Autograph Collection provides luxury accommodations in the heart of the Plaza with European-inspired design. The Hampton Inn &amp; Suites Kansas City-Country Club Plaza offers reliable comfort steps from shopping and dining.
              </p>
              <p>
                <strong>Perfect For</strong>: Families wanting walkable shopping and dining, couples seeking romance, and travelers who prefer a quieter base with easy rideshare access to downtown and Arrowhead.
              </p>
            </div>

            {/* Near Arrowhead Stadium */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Near Arrowhead Stadium, Kansas City, MO: Proximity Over Neighborhood Charm</h4>
              <p>
                <strong>Why Stay Here</strong>: If you're attending multiple matches or prioritizing stadium proximity, consider hotels near Arrowhead. Several mid-range chains offer good value and put you minutes from kickoff.
              </p>
              <p>
                <strong>Trade-Off</strong>: You'll sacrifice walkable dining and urban energy for convenience. Budget extra time and money for rideshares to explore downtown between matches.
              </p>
              <p>
                <strong>Perfect For</strong>: Groups attending multiple matches, families wanting more space, and budget-conscious travelers who don't mind driving.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Match */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-500"></i>
            Beyond the Match: What to Do in Kansas City
          </h3>

          <div className="space-y-6">
            <p>
              Kansas City surprises visitors who arrive expecting Midwest stereotypes. This is a city with world-class museums, James Beard Award-winning restaurants, and a cultural scene that rivals cities twice its size.
            </p>

            {/* WWI Museum */}
            <div className="space-y-3">
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-museum-line text-emerald-500"></i>
                National WWI Museum and Memorial
              </h4>
              <p>
                Kansas City is home to America's official World War I Museum and Memorial, and it's spectacular. The museum features extensive exhibits covering the Great War from all sides, with artifacts, interactive displays, and personal stories that bring history to life.
              </p>
              <p>
                The memorial tower offers panoramic views of Kansas City's skyline and surrounding landscape. Admission is $18 for adults, and you should budget 2-3 hours for the full experience.
              </p>
              <p>
                <strong>Why It Matters</strong>: This is the most comprehensive WWI museum in the United States and one of the finest in the world. Even if military history isn't your primary interest, the museum's storytelling and architecture make it worthwhile.
              </p>
            </div>

            {/* Nelson-Atkins Museum */}
            <div className="space-y-3">
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-landscape-line text-emerald-500"></i>
                The Nelson-Atkins Museum of Art
              </h4>
              <p>
                The Nelson-Atkins Museum ranks among America's finest art museums, housing 42,000 works spanning 5,000 years of human creativity. The collection includes one of the top three Asian art collections worldwide, exceptional Impressionist and Post-Impressionist works, and commissioned contemporary installations.
              </p>
              <p>
                The museum's architecture is itself art—the original 1933 building paired with Steven Holl's acclaimed Bloch Building addition (2007). Outside, giant badminton shuttlecocks on the lawn have become Kansas City icons, perfect for photos.
              </p>
              <p>
                <strong>Best Part</strong>: Admission is always free. The museum offers guided tours, and Rozzelle Court Restaurant serves lunch in a beautiful Italian courtyard-inspired setting.
              </p>
              <p>
                <strong>Pro Tip</strong>: The museum is located near Country Club Plaza. Plan to spend 2-4 hours depending on your art appetite, then walk to the Plaza for shopping and dinner.
              </p>
            </div>

            {/* Union Station */}
            <div className="space-y-3">
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-building-2-line text-emerald-500"></i>
                Union Station: Living History
              </h4>
              <p>
                Opened in 1914, Union Station is a sublime example of the magnificent architecture that once defined American train stations. Today, it's Kansas City's living history museum with rotating world-class exhibits, Science City (interactive science museum), a planetarium, and model train displays.
              </p>
              <p>
                The station's Grand Hall alone is worth the visit—breathtaking Beaux-Arts architecture that transports you back to the golden age of rail travel. Various exhibits have included topics from King Tut to the Maya civilization.
              </p>
              <p>
                <strong>Location Bonus</strong>: Union Station sits on the free KC Streetcar line, making it easy to combine with downtown exploration.
              </p>
            </div>

            {/* 18th & Vine Historic Jazz District */}
            <div className="space-y-3">
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-music-2-line text-emerald-500"></i>
                18th &amp; Vine Historic Jazz District
              </h4>
              <p>
                Kansas City is a jazz city—Charlie Parker, Count Basie, and the sound that defined an era all came from here. The 18th &amp; Vine district is where it happened, and today it houses the American Jazz Museum and Negro Leagues Baseball Museum.
              </p>
              <p>
                Learn about different jazz styles, rhythms, and instruments at interactive exhibits, then explore the lesser-known history of African American baseball teams like the KC Monarchs who flourished when Black players were excluded from Major League Baseball.
              </p>
              <p>
                <strong>Evening Strategy</strong>: After museum visits, catch live jazz at The Blue Room (inside the Jazz Museum) or check out The Mutual Musicians Foundation, where musicians jam until sunrise on weekends—a Kansas City tradition since 1917.
              </p>
            </div>

            {/* Kansas City Fountains */}
            <div className="space-y-3">
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-water-flash-line text-emerald-500"></i>
                Kansas City Fountains
              </h4>
              <p>
                Kansas City has more fountains than any city in the world except Rome—over 200, earning it the nickname "City of Fountains." The J.C. Nichols Memorial Fountain at Country Club Plaza is the most photographed, but you'll discover fountains throughout downtown and residential neighborhoods.
              </p>
              <p>
                These aren't just decorative—they're part of Kansas City's identity and urban planning philosophy. On hot summer days (and World Cup matches will be played during KC's warmest months), the fountains provide visual relief and neighborhood gathering spots.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-emerald-500"></i>
            Food: Welcome to BBQ Paradise
          </h3>
          <div className="space-y-6">
            <p>
              Let's address this upfront: Kansas City BBQ is a religion, not just a meal. This city takes smoked meat more seriously than anywhere else in America, and you're about to understand why.
            </p>

            {/* BBQ Holy Trinity */}
            <div className="space-y-3">
              <h4 className="editorial-h4">The BBQ Holy Trinity</h4>
              <h4 className="editorial-h4">Joe's Kansas City Bar-B-Que (formerly Oklahoma Joe's)</h4>
              <p>
                The most famous address in Kansas City BBQ is a gas station in Kansas City, Kansas. Yes, you read that right. Joe's original location operates out of a working gas station—and it's been called one of "13 Places You Must Eat Before You Die" by Anthony Bourdain.
              </p>
              <p>
                Order the Z-Man: sliced brisket, smoked provolone, and onion rings on a toasted Kaiser roll. It's Kansas City's most iconic sandwich. Add burnt ends (the crusty, fatty, flavorful meat cut from smoked brisket), ribs, and BBQ beans with meat mixed in.
              </p>
              <p><strong>Locations</strong>: Original Gas Station (3002 W. 47th Ave, Kansas City, KS), plus Leawood and Olathe</p>
              <p><strong>Budget</strong>: $15-25 per person</p>
              <p><strong>Expect Lines</strong>: The gas station location always has a queue, but it moves fast</p>

              <h4 className="editorial-h4">Gates Bar-B-Q</h4>
              <p>
                When you walk into any Gates location, staff will belt out "Hi, may I help you?" in a sassy, ear-piercing greeting that's been a Kansas City tradition since the 1940s. It's friendly, welcoming, and unforgettable—just like their BBQ.
              </p>
              <p>
                Gates offers classic Kansas City-style sauce with sweet and tangy flavor profiles. The beef on bun rivals anything in the city, and their ribs bring the perfect smoke-to-meat ratio. Gates has multiple locations with recognizable red-roofed buildings and a logo featuring a strutting man in tuxedo and top hat.
              </p>
              <p><strong>What to Order</strong>: Beef on bun, ribs, burnt ends, and a side of fries</p>
              <p><strong>Locations</strong>: Multiple across Kansas City (Main Street, Brooklyn Avenue, State Line)</p>
              <p><strong>Pro Tip</strong>: The sauce stays at the top of the game—so good it's sold in grocery stores nationwide</p>

              <h4 className="editorial-h4">Arthur Bryant's</h4>
              <p>
                In 1972, Kansas City native Calvin Trillin wrote in Playboy that Arthur Bryant's was "the best restaurant on the planet." Presidents Truman, Carter, and Reagan visited this no-frills spot with fluorescent lighting, Formica tables, and five-gallon jars of sauce in the windows.
              </p>
              <p>
                Bryant's represents old-school Kansas City BBQ—unchanged decor, traditional recipes, and flavor that needs no sauce (though their sauce is legendary). The restaurant walls display photos of famous politicians, actors, and sports figures who've made the pilgrimage.
              </p>
              <p><strong>Location</strong>: 1727 Brooklyn Ave, Kansas City, MO</p>
              <p><strong>Style</strong>: Counter service, very casual, cash-friendly</p>
              <p><strong>Budget</strong>: $12-20 per person</p>
            </div>

            {/* KC BBQ Style */}
            <div className="space-y-3">
              <h4 className="editorial-h4">Understanding Kansas City BBQ Style</h4>
              <p>Kansas City BBQ differs from Texas, Memphis, and Carolina styles in two key ways:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Any meat goes</strong>: While Texas focuses on brisket and Carolina on pork, Kansas City smokes everything—pork, beef, chicken, turkey, lamb, sausage, and sometimes fish.</li>
                <li><strong>Thick, sweet tomato-based sauce</strong>: Kansas City sauce has more sweetness than other regional styles, often incorporating molasses. However, the best BBQ joints smoke meat so well that sauce is optional—it enhances rather than masks the flavor.</li>
              </ol>
              <p><strong>Burnt ends</strong> deserve special mention: These are the crusty, fatty, flavorful pieces cut from the point of a smoked beef brisket. They're a Kansas City specialty, and once you try them, you'll understand the obsession.</p>
            </div>

            {/* Beyond BBQ: KC's Evolving Food Scene */}
            <div className="space-y-4">
              <h4 className="editorial-h4">Beyond BBQ: KC's Evolving Food Scene</h4>

              <div className="space-y-2">
                <h4 className="editorial-h4">The Rieger</h4>
                <p>
                  A Crossroads Arts District cornerstone serving farm-to-table American cuisine with a Midwest accent. James Beard Award-nominated chef Howard Hanna creates seasonal dishes using local ingredients. The burger is legendary.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="editorial-h4">Port Fonda</h4>
                <p>
                  Modern Mexican cuisine in Westport with fresh takes on tacos, enchiladas, and creative cocktails. The fish tacos and margaritas draw crowds nightly.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="editorial-h4">The Antler Room</h4>
                <p>
                  This Crossroads restaurant earned national acclaim for innovative small plates that change with the seasons. Think creative tasting menus that showcase Midwest ingredients with global techniques.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="editorial-h4">Local Breweries</h4>
                <p>
                  Boulevard Brewing Company is Kansas City's largest craft brewery with free tours and a tasting room. Crane Brewing in the Crossroads and KC Bier Co in the West Bottoms offer local flavor in neighborhood settings.
                </p>
              </div>
            </div>

            {/* Match Day Food Strategy */}
            <div className="space-y-3">
              <h4 className="editorial-h4">Match Day Food Strategy</h4>
              <p>
                Tailgating is a religion at Arrowhead Stadium. Arrive early on match days and you'll find parking lots transformed into outdoor parties with grills, games, and Kansas City hospitality on full display. Locals may invite you to join—say yes. Bring drinks or snacks to share, and you'll make friends for life.
              </p>
              <p>
                Inside the stadium, concessions offer typical stadium fare plus Kansas City BBQ options. But honestly, eat before you arrive—Kansas City's BBQ scene is too good to waste stomach space on stadium food.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & What to Pack */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-sun-line text-emerald-500"></i>
            Weather &amp; What to Pack
          </h3>
          <div className="space-y-6">
            <h4 className="editorial-h4">June and July in Kansas City: Warm and Potentially Humid</h4>
            <p>Kansas City summers are warm, with occasional heat waves and afternoon thunderstorms. Here's what to expect:</p>

            <div className="space-y-2">
              <h4 className="editorial-h4">June Weather</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Average high</strong>: 86°F (30°C)</li>
                <li><strong>Average low</strong>: 66°F (19°C)</li>
                <li><strong>Rainfall</strong>: 26% chance on any given day, with light to moderate rain</li>
                <li><strong>Humidity</strong>: Moderate (around 66%)</li>
              </ul>
              <p>
                June is warm and pleasant with more frequent rain than July. Afternoon thunderstorms can roll through quickly, so carry a compact umbrella or light rain jacket.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">July Weather</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Average high</strong>: 91°F (33°C)</li>
                <li><strong>Average low</strong>: 70°F (21°C)</li>
                <li><strong>Rainfall</strong>: 24% chance on any given day</li>
                <li><strong>Humidity</strong>: Moderate (around 66%)</li>
                <li><strong>Sunshine</strong>: July offers the most consistent sunshine of the year</li>
              </ul>
              <p>
                July gets hotter with drier conditions and more reliable sun. The July 11 quarterfinal could be played in 90°F+ heat, though matches scheduled for evening kickoffs will be more comfortable.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">What to Pack</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Clothing</strong>: Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). T-shirts, shorts, and comfortable walking shoes are standard. Kansas City is casual—even nice restaurants rarely require more than smart casual attire.</li>
                <li><strong>Sun Protection</strong>: Sunglasses, sunscreen (SPF 30+), and a hat for any daytime activities. The Midwest sun is stronger than many international visitors expect.</li>
                <li><strong>Rain Gear</strong>: A compact umbrella or light rain jacket for afternoon thunderstorms, especially in June.</li>
                <li><strong>Layers</strong>: One light jacket or long-sleeve shirt for overly air-conditioned indoor spaces and cooler evenings.</li>
                <li><strong>Hydration</strong>: Bring a refillable water bottle. Kansas City heat and humidity require constant hydration.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">Stadium Policies</h4>
              <p>
                Check Arrowhead Stadium's official bag policy before your visit—clear bags are typically required for security. Plan to travel light on match days.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Tips for International Visitors */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-passport-line text-emerald-500"></i>
            Practical Tips for International Visitors
          </h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="editorial-h4">Money Matters</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Currency</strong>: US Dollar (USD)</li>
                <li><strong>Cards</strong>: Credit cards accepted everywhere; contactless payment widely available</li>
                <li><strong>Tipping</strong>: 18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</li>
                <li><strong>ATMs</strong>: Widely available; use bank-affiliated machines to avoid high fees</li>
                <li><strong>Cost of Living</strong>: Kansas City is more affordable than coastal U.S. cities—expect lower hotel and restaurant prices than New York or Los Angeles</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">Safety &amp; Getting Around</h4>
              <p>
                Kansas City is generally safe for visitors, especially in tourist areas and well-traveled neighborhoods. Basic street smarts apply: be aware of your surroundings, keep valuables secure, and stick to well-lit areas at night.
              </p>
              <h4 className="editorial-h4">Driving</h4>
              <p>
                Kansas City is a car-friendly city with easy-to-navigate roads. If you rent a car, parking is plentiful and affordable compared to larger U.S. cities. Highway I-70 and I-35 connect major areas.
              </p>
              <h4 className="editorial-h4">Walking</h4>
              <p>
                Downtown, Power &amp; Light District, Crossroads Arts District, and Country Club Plaza are walkable. Other areas require a car or rideshare.
              </p>
              <h4 className="editorial-h4">KC Streetcar</h4>
              <p>
                Free streetcar service runs between River Market and Union Station, stopping at major downtown attractions. It's a convenient way to explore the urban core without a car.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">Language &amp; Local Culture</h4>
              <p>
                English is the primary language. Kansas Citians are known for genuine Midwest friendliness—don't be surprised if strangers strike up conversations or offer help without being asked. It's not fake; it's just how people are here.
              </p>
              <p>
                <strong>Local Pride</strong>: Kansas City takes pride in its BBQ, its Chiefs, and its underdog status. Locals love showing off their city to visitors—ask for recommendations and you'll get passionate, detailed responses.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="editorial-h4">Heat Management</h4>
              <p>
                Summer in Kansas City can be hot. Plan outdoor activities for early morning or evening when possible. Take advantage of air-conditioned museums, shopping, and restaurants during peak afternoon heat.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-ticket-2-line text-emerald-500"></i>
            Ticket Information &amp; Booking Strategy
          </h3>
          <div className="space-y-6">
            <h4 className="editorial-h4">How to Get World Cup Tickets</h4>
            <p>
              Tickets for the 2026 World Cup are sold in phases. The first presale draw began September 10, 2025, open to people 18 and older with FIFA accounts and Visa cardholders. Group stage tickets start at $60, with prices increasing for knockout rounds.
            </p>
            <p>
              Register at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer">https://www.fifa.com/tickets</a> for future ticket phases. The quarterfinal match on July 11 will be among the most sought-after tickets at Arrowhead Stadium.
            </p>

            <h4 className="editorial-h4">Hospitality Packages</h4>
            <p>
              Official hospitality packages for Kansas City matches start at $1,400 per match. These include premium seating, exclusive lounge access, and food and beverage service—worth considering if you want guaranteed access without lottery uncertainty.
            </p>

            <h4 className="editorial-h4">Alternative: Premium Experiences</h4>
            <p>
              If you miss the general ticket lottery, hospitality packages eliminate uncertainty. They cost significantly more but bundle tickets with VIP treatment, making them popular for once-in-a-lifetime matches like quarterfinals.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why KC Will Make It Unforgettable */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-heart-2-line text-emerald-500"></i>
            Why Kansas City Will Make Your World Cup Unforgettable
          </h3>
          <div className="space-y-6">
            <p>
              Over 1 million visitors are expected across all World Cup host cities, and Kansas City's portion of that celebration will showcase something unique: authentic American culture without pretense or flash.
            </p>
            <p>
              This isn't New York's intensity or Los Angeles' glamour—it's real people who genuinely love their city and want to share it. You'll eat BBQ that ruins you for life, experience stadium noise that literally breaks world records, and meet locals who'll invite you to their tailgate within five minutes of conversation.
            </p>
            <p>
              Kansas City might be the smallest host city, but that's its strength. You're not just another tourist in a massive metropolis—you're a guest in a city that's excited to show you what it's got.
            </p>
            <p>
              From the moment you taste your first burnt end to the final whistle of the quarterfinal under Arrowhead's deafening roar, Kansas City delivers experiences you'll remember forever. No pretense. No attitude. Just "Welcome to KC—y'all ready for some football?"
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Start Planning */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-road-map-line text-emerald-500"></i>
            Start Planning Your 2026 World Cup Trip to Kansas City
          </h3>
          <div className="space-y-6">
            <p>The countdown is on. Hotels are booking up. Flights are being reserved. And Kansas City is preparing to show the world what Midwest hospitality looks like.</p>
            <h4 className="editorial-h4">Your Action Plan</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Register for FIFA tickets</strong> at
                {' '}
                <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer">https://www.fifa.com/tickets</a>
                {' '}for future phases
              </li>
              <li>
                <strong>Book accommodations early</strong> via
                {' '}
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">https://www.booking.com</a>
                {' '}or{' '}
                <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer">https://www.hotels.com</a>
                {' '}—6-12 months in advance recommended
              </li>
              <li>
                <strong>Research flights</strong> to Kansas City (MCI) through
                {' '}
                <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer">https://www.skyscanner.com</a>
                {' '}or{' '}
                <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer">https://www.google.com/flights</a>
              </li>
              <li><strong>Download the RideKC Transit app</strong> for free airport bus service</li>
              <li><strong>Make BBQ reservations</strong> if possible—Joe's Kansas City and top spots fill up during major events</li>
              <li><strong>Plan cultural activities</strong>: Nelson-Atkins Museum, WWI Museum, Union Station, 18th &amp; Vine Jazz District</li>
            </ol>
            <p>
              Kansas City will host six World Cup matches at Arrowhead Stadium from June 16 through July 11, 2026, including a quarterfinal that could determine which team advances to the semifinals. This is Kansas City's moment to prove the heart of America has the heart to host the world's game.
            </p>
            <p><strong>See you in the City of Fountains.</strong> Bring your appetite, your team colors, and your loudest voice. Kansas City's ready to show you why this place is special.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-road-map-line text-emerald-500"></i>
            Plan Your Heartland World Cup Experience
          </h3>
          <p className="leading-relaxed mb-4">
            Kansas City's central location makes it the perfect base for exploring America's heartland and connecting to cities across the country.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-inter font-semibold">Popular Combinations:</p>
            </div>
            <div className="space-y-2">
              <p className="font-inter font-semibold">Central States Circuit</p>
              <p>
                Experience authentic American heartland: Kansas City (current) for BBQ and Midwest charm, then head to{' '}
                <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                {' '}for Texas energy and culture.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-inter font-semibold">Heartland to South</p>
              <p>
                Connect the Midwest with the South: Kansas City (current) to{' '}
                <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                {' '}to{' '}
                <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
                {' '}or{' '}
                <Link to="/world-cup-2026-host-cities/atlanta" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
                {' '}for a diverse American experience.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-inter font-semibold">Coast to Heartland</p>
              <p>
                Combine Kansas City with coastal cities like{' '}
                <Link to="/world-cup-2026-host-cities/los-angeles" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link>
                ,{' '}
                <Link to="/world-cup-2026-host-cities/san-francisco" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">San Francisco Bay Area</Link>
                , or{' '}
<Link to="/world-cup-2026-host-cities/new-york-new-jersey" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">New York/New Jersey</Link>
                {' '}to experience the full diversity of American culture from the heartland to the coasts.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link to="/world-cup-2026-host-cities" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
          </p>
        </article>

        {/* Back CTA */}
        <div className="mt-8 flex justify-end">
          <Link to="/world-cup-2026-host-cities" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">
            <i className="ri-check-line mr-2"></i>
            Got It
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}