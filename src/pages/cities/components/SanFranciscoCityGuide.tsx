import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export function SanFranciscoCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* Hero Section - MetLife-style visual, verbatim title */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            San Francisco Bay Area 2026 FIFA World Cup: Your Complete Travel Guide to Silicon Valley's Soccer Showcase
          </h1>
        </div>
      </div>

      {/* Main Content - Part 1/5 verbatim */}
      <main className="p-8 md:p-12 space-y-12">
        {/* Introduction and Match Schedule */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Match Schedule:</strong> June 13, 16, 19, 22, 25 (Group Stage) | July 1 (Round of 32)
            </p>
            <p>
              When the 2026 FIFA World Cup arrives in the Bay Area, it's <strong>technically</strong> happening in Santa Clara—but every international fan will fly into San Francisco, stay in San Francisco, and experience the Bay Area's cultural energy radiating from San Francisco. The matches may unfold at <strong>Levi's Stadium</strong> in Silicon Valley, but this is San Francisco's World Cup moment, and the city plans to celebrate accordingly.
            </p>
            <p>
              <strong>Six matches</strong> across three weeks (five group stage encounters plus a Round of 32 knockout showdown on July 1) bring the world's game to a region that invented modern tech, perfected sourdough bread, and painted the most photographed bridge on Earth a color officially called "International Orange." This is Northern California's chance to show 70,000+ fans per match that innovation, natural beauty, and football passion coexist in perfect harmony.
            </p>
            <p>
              Whether you're watching Canada's opening match on June 13 or witnessing Round of 32 intensity on July 1, the Bay Area delivers what few World Cup hosts can: a compact, walkable city (San Francisco) connected via functioning public transit to a purpose-built stadium (in Santa Clara), wrapped in coastal beauty, sourdough culture, and genuine Northern California hospitality.
            </p>
            <p>
              This guide delivers the real intel: stadium access from San Francisco, transportation hacks, neighborhood strategies, and what to do when you're not watching football in Silicon Valley's backyard.
            </p>
          </div>
        </div>

        {/* The Stadium: Levi's Stadium (San Francisco Bay Area Stadium) */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            The Stadium: Levi's Stadium (San Francisco Bay Area Stadium)
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Let's address geography up front: <strong>Levi's Stadium</strong> sits in <strong>Santa Clara</strong>, not San Francisco—about <strong>40 miles south</strong> of the city. For FIFA branding purposes, it's "San Francisco Bay Area Stadium," but locals know it as the home of the <strong>San Francisco 49ers</strong>, located at <strong>4900 Marie P. DeBartolo Way, Santa Clara, CA 95054</strong> in the heart of Silicon Valley.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">The Stadium Specs:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>68,500 seats</strong> for football/soccer configuration (expandable to 75,000)</li>
                <li><strong>Natural grass</strong> installed specifically for World Cup (replaces usual synthetic turf)</li>
                <li><strong>LEED Gold certified</strong>—first professional football stadium in the U.S. to achieve this environmental distinction</li>
                <li><strong>Opened July 2014</strong> with $1.3 billion construction cost</li>
                <li><strong>Located 10 minutes from San Jose Airport</strong>, 40 miles from San Francisco</li>
              </ul>
            </div>
            <p>
              Here's what makes Levi's Stadium World Cup-ready: It hosted <strong>Super Bowl 50</strong> in 2016, <strong>Copa América 2024 matches</strong> (including Brazil-Colombia), the <strong>2019 College Football Playoff National Championship</strong>, and <strong>Super Bowl LX in February 2026</strong>—just four months before the World Cup kicks off. FIFA chose this venue knowing it handles massive events with military precision.
            </p>
            <p>
              The stadium features an <strong>open-air design</strong> with premium technology—<strong>4K video board</strong>, <strong>LED field lighting</strong>, and <strong>45,000 lower bowl seats</strong> (one of the largest in the NFL) ensuring excellent sightlines. Unlike older stadiums where soccer feels like an afterthought, Levi's Stadium was designed as a multi-use facility from day one, with football/soccer configuration prioritized alongside American football.
            </p>
            <p>
              <strong>Important context:</strong> Santa Clara sits in Silicon Valley—home to Apple, Google, Meta, Intel, and thousands of tech companies. The stadium is surrounded by corporate offices, not residential neighborhoods. It's a purpose-built event destination, meaning you'll need to plan transportation rather than stumbling into a match after exploring charming streets. But that infrastructure supports 70,000+ fans efficiently—something not every World Cup venue can claim.
            </p>
          </div>
        </div>

        {/* The Match Schedule: Six Games Including Knockout Drama */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-calendar-event-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            The Match Schedule: Six Games Including Knockout Drama
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              The Bay Area's six-match allocation spans three tournament weeks, culminating in a Round of 32 knockout match that delivers elimination football:
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Group Stage (Five Matches)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Friday, June 13, 2026</strong> – <strong>Canada's opening World Cup match</strong></li>
                <li><strong>Tuesday, June 16, 2026</strong> – Group Stage</li>
                <li><strong>Friday, June 19, 2026</strong> – Group Stage</li>
                <li><strong>Monday, June 22, 2026</strong> – Group Stage</li>
                <li><strong>Thursday, June 25, 2026</strong> – Group Stage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Knockout Stage (One Match)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Wednesday, July 1, 2026</strong> – <strong>Round of 32</strong></li>
              </ul>
            </div>
            <p>
              That <strong>June 13 Canada opener</strong> will be massive for our neighbors to the north. Bay Area hotels will fill with maple leaf flags, Toronto accents, and fans who've waited decades for their home nation to co-host a World Cup. Expect Canadian energy to dominate the stadium and San Francisco's bars for 48 hours.
            </p>
            <p>
              The <strong>Round of 32 on July 1</strong> guarantees drama—only 32 teams remain, every match is elimination, and you're watching quarterfinal-caliber talent battling for survival. This is the match that separates tournament tourists from serious football fans.
            </p>
            <p>
              <strong>Tournament timing advantage:</strong> The Bay Area's three-week window (June 13-July 1) creates sustained World Cup atmosphere without overstaying. FIFA Fan Festivals remain active, international supporters linger between matches exploring wine country or coastal towns, and the region buzzes with tournament energy that feels concentrated rather than diluted across six weeks.
            </p>
          </div>
        </div>

        {/* Getting to Levi's Stadium: The Silicon Valley Commute */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting to Levi's Stadium: The Silicon Valley Commute
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Here's the honest Bay Area reality: <strong>Levi's Stadium is 40 miles from San Francisco</strong>. You're not walking from your downtown hotel. But the Bay Area offers multiple transit options if you plan ahead and set realistic expectations.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Your Best Options</h3>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">1. BART + VTA Light Rail (Most Economical)</h4>
              <p>
                The Bay Area's transit backbone connects San Francisco to Silicon Valley via <strong>BART (Bay Area Rapid Transit)</strong> and <strong>VTA (Santa Clara Valley Transportation Authority) light rail</strong>.
              </p>
              <p><strong>Route:</strong> San Francisco BART station → <strong>Milpitas BART Station</strong> (transfer) → <strong>VTA Orange Line light rail</strong> → <strong>Great America Station</strong> (5-minute walk to stadium)</p>
              <p><strong>Cost:</strong> BART $2.15-10.30 depending on origin + VTA $2.50 single ride = <strong>$5-13 total</strong></p>
              <p><strong>Time:</strong> 90-120 minutes door-to-stadium</p>
              <p><strong>Frequency:</strong> BART every 8-12 minutes; VTA every 15 minutes</p>
              <p><strong>Hours:</strong> BART operates 5 AM-midnight weekdays, 6 AM-midnight weekends; VTA light rail runs similar hours</p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
                <p className="m-0">Download the <strong>Clipper card app</strong> or purchase physical Clipper cards at BART stations—it works across BART, VTA, Muni, Caltrain, and AC Transit. The unified payment system is the Bay Area's secret weapon for visitors.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
                <p className="m-0"><strong>Match-day reality:</strong> This route requires two transfers (BART to VTA, then walking to stadium). Allow extra time for crowds at Milpitas Station where thousands transfer simultaneously. Trains will be packed, but it's reliable, economical, and avoids parking nightmares.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">2. Caltrain + VTA Light Rail (If Staying in Peninsula)</h4>
              <p>If you're staying in <strong>Palo Alto</strong>, <strong>Mountain View</strong>, or anywhere along the Peninsula between San Francisco and San Jose:</p>
              <p><strong>Route:</strong> San Francisco Caltrain (4th &amp; King) → <strong>Mountain View Station</strong> → <strong>VTA light rail</strong> → <strong>Great America Station</strong></p>
              <p><strong>Cost:</strong> Caltrain $3.75-11.50 zone-based + VTA $2.50 = <strong>$6-14 total</strong></p>
              <p><strong>Time:</strong> 75-105 minutes</p>
              <p>Caltrain electrified in 2024, now offering <strong>faster, quieter, more frequent</strong> service. Weekend schedules run every 30 minutes versus hourly pre-electrification—game-changer for World Cup visitors.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">3. Rideshare/Taxi (Most Convenient, Most Expensive)</h4>
              <p>Uber and Lyft work from San Francisco to Santa Clara, but <strong>prepare for sticker shock and surge pricing</strong>:</p>
              <p><strong>Cost from SF:</strong> $60-90 each way normally; <strong>$120-180 with post-match surge</strong></p>
              <p><strong>Time:</strong> 45-70 minutes depending on traffic</p>
              <p><strong>Pickup location:</strong> Designated rideshare areas at Levi's Stadium (expect 30-60 minute waits after matches)</p>
              <p>Many fans split rideshares to justify costs—4 passengers dividing $150 = $37.50 each, comparable to premium transit with door-to-door service.</p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
                <p className="m-0"><strong>Smart hack:</strong> Take BART/Caltrain TO the match (save money, avoid traffic), then split rideshare home when tired and willing to pay for convenience.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">4. Driving + Pre-Booked Parking</h4>
              <p>If you rent a car to explore wine country, coastal highways, or redwood forests, driving to matches works—<strong>with advance parking reservations</strong>.</p>
              <p><strong>Stadium parking:</strong> $40-60 standard lots (pre-purchase weeks ahead online); $100+ VIP proximity</p>
              <p><strong>Reality:</strong> Post-match exodus takes 60-90 minutes. Highway 101 and nearby freeways become parking lots.</p>
              <p><strong>Alternative parking strategy:</strong> Park at <strong>Great America theme park</strong> (adjacent to stadium, shared lot access on match days) or suburban <strong>VTA stations</strong> with free parking, then light rail to stadium.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">5. Game-Day Shuttles (If Staying Near San Jose Airport)</h4>
              <p>Hotels near <strong>San Jose Mineta International Airport</strong> (10 minutes from stadium) often coordinate shuttle services for major events. Ask when booking. Some properties include match-day shuttles as amenities for World Cup visitors.</p>
            </div>
          </div>
        </div>

        {/* Where to Stay: San Francisco vs. Silicon Valley Strategy */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Where to Stay: San Francisco vs. Silicon Valley Strategy
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              The Bay Area geography creates a strategic choice: <strong>stay in San Francisco</strong> (where culture, attractions, and energy concentrate) and commute to matches, or <strong>stay near the stadium</strong> (convenience, shorter transit) and sacrifice San Francisco's charm.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">San Francisco (Best for Full Bay Area Experience)</h3>
            <p><strong>Why stay here:</strong> You're in one of America's most beautiful cities—<strong>Golden Gate Bridge</strong>, <strong>Alcatraz</strong>, <strong>cable cars</strong>, <strong>diverse neighborhoods</strong>, world-class dining, and genuine urban energy. FIFA Fan Festivals will center in San Francisco, likely at <strong>Civic Center Plaza</strong> or <strong>Embarcadero waterfront</strong>. World Cup atmosphere concentrates where international visitors naturally gather.</p>
            <p><strong>Getting to stadium:</strong> BART to Milpitas → VTA light rail (90-120 minutes), or rideshare ($60-90 each way).</p>
            <p><strong>Accommodation vibe:</strong> Options range from <strong>historic hotels</strong> (Fairmont, Palace, Mark Hopkins) to <strong>boutique properties</strong> (Hotel Zephyr at Fisherman's Wharf) to <strong>modern high-rises</strong> (Hyatt Regency Embarcadero). Expect <strong>$275-500/night</strong> for mid-range during World Cup; premium waterfront properties reach <strong>$450-700/night</strong>.</p>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Best neighborhoods:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Union Square/Downtown:</strong> Maximum transit connections, walkable attractions, central Fan Festival location</li>
                <li><strong>Fisherman's Wharf:</strong> Touristy but fun; waterfront views, seafood, Pier 39 sea lions</li>
                <li><strong>North Beach (Little Italy):</strong> Neighborhood charm, Italian restaurants, cafes, close to downtown</li>
                <li><strong>Mission District:</strong> Hip, diverse, excellent food scene; warmer microclimate than foggy coastal areas</li>
                <li><strong>Marina District:</strong> Upscale, near Golden Gate Bridge and Palace of Fine Arts</li>
              </ul>
            </div>
            <p><strong>Reality check:</strong> The 90-minute commute to matches is real. Budget 2+ hours each way factoring in transfers and crowds. But you'll experience San Francisco authentically rather than living in suburban Silicon Valley.</p>
            <p><strong>Book through comparison sites:</strong> Properties near BART stations (Powell, Montgomery, Embarcadero, Civic Center) offer best transit access to stadium. Check multiple booking platforms—identical rooms often show 15-25% price variance.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Santa Clara/San Jose (Best for Stadium Proximity)</h3>
            <p><strong>Why stay here:</strong> Eliminate commute stress entirely. You're <strong>10-20 minutes from Levi's Stadium</strong> by light rail or car.</p>
            <p><strong>Getting to stadium:</strong> VTA light rail from downtown San Jose (20 minutes, $2.50) or drive/rideshare (10-15 minutes, $15-25).</p>
            <p><strong>Accommodation vibe:</strong> <strong>San Jose</strong> offers downtown hotels near VTA light rail stations; <strong>Santa Clara</strong> has properties within walking distance of California's Great America theme park (adjacent to stadium). Expect <strong>$200-375/night</strong> for mid-range during World Cup.</p>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Best options:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hyatt Regency Santa Clara</strong> (adjacent to convention center, 15-minute walk to stadium)</li>
                <li><strong>Santa Clara Marriott</strong> (near stadium, business hotel)</li>
                <li><strong>Hilton San Jose</strong> (downtown, near VTA stations)</li>
                <li><strong>Hotel Valencia Santana Row</strong> (upscale San Jose shopping district)</li>
              </ul>
            </div>
            <p>
              <strong>Reality check:</strong> Santa Clara and San Jose are functional Silicon Valley cities, not tourist destinations. You'll find corporate office parks, tech campuses, strip malls, and efficient transit—but limited cultural attractions compared to San Francisco. Perfect for fans attending multiple matches who prioritize logistics over sightseeing.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Wine Country Alternative (Napa/Sonoma)</h3>
            <p><strong>Why stay here:</strong> Combine World Cup with California wine country—<strong>Napa Valley</strong> (60 miles north of San Francisco) and <strong>Sonoma County</strong> (50 miles north) offer world-class wineries, farm-to-table dining, and vineyard landscapes.</p>
            <p><strong>Getting to stadium:</strong> Drive to BART station in outer San Francisco suburbs (Millbrae, Colma), park free, take BART/VTA to stadium (adds 45-60 minutes versus staying in SF).</p>
            <p><strong>Best for:</strong> Fans attending 1-2 matches who build vacation around wine tasting, not attending every group stage game.</p>
          </div>
        </div>

        {/* Beyond the Matches: What to Do in San Francisco */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Beyond the Matches: What to Do in San Francisco
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              You didn't fly to California to only watch 90 minutes of football. San Francisco delivers iconic attractions between matches:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Must-Do Attractions</h3>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Golden Gate Bridge</h4>
            <p>
              The 1.7-mile suspension bridge painted "International Orange" (not red) opened in 1937 and remains the most photographed bridge worldwide. <strong>Walk across</strong> from San Francisco side (45 minutes one-way, free), bike to <strong>Sausalito</strong> then ferry back (<strong>$40</strong> bike rental), or drive to <strong>Vista Point</strong> north side for postcard views.
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
              <p className="m-0"><strong>Pro tip:</strong> Visit morning for clearest skies; fog typically rolls in afternoon. The bridge is <strong>5-10°F colder</strong> than downtown—bring layers even on sunny days.</p>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Alcatraz Island</h4>
            <p>
              The infamous former federal prison (1934-1963) housed Al Capone, "Machine Gun" Kelly, and Robert Stroud (the "Birdman"). Now a <strong>National Park</strong>, Alcatraz offers award-winning audio tours narrated by former guards and inmates. <strong>Tickets: $45</strong> (book weeks ahead—sells out fast).
            </p>
            <p>
              Ferries depart from <strong>Pier 33 Alcatraz Landing</strong>; total visit takes 2.5-3 hours including boat rides. Combine with Fisherman's Wharf exploration.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Cable Cars</h4>
            <p>
              San Francisco's moving National Historic Landmarks (since 1964) climb the city's steepest hills on three routes. <strong>Powell-Hyde Line</strong> offers best views—<strong>Lombard Street</strong> (crooked street), <strong>Russian Hill</strong>, Alcatraz Island vistas, ending at <strong>Hyde Street Pier</strong> near Fisherman's Wharf.
            </p>
            <p>
              <strong>Fare: $8 single ride</strong>, <strong>$13 all-day pass</strong> (includes Muni buses/light rail). Board at <strong>Powell &amp; Market</strong> (expect lines) or walk uphill to mid-route stops for shorter waits.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Fisherman's Wharf &amp; Pier 39</h4>
            <p>
              Tourist central, but genuinely entertaining: <strong>sea lions</strong> (hundreds bark on floating docks), <strong>clam chowder bread bowls</strong> at <strong>Boudin Bakery</strong>, street performers, <strong>Ghirardelli Square</strong> (chocolate factory), and ferry departures for Alcatraz. Draws <strong>12.5 million visitors yearly</strong>—embrace the tourist experience or visit early morning to avoid peak crowds.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Golden Gate Park</h4>
            <p>
              Urban oasis bigger than New York's Central Park (1,017 acres) houses <strong>California Academy of Sciences</strong> (aquarium, planetarium, rainforest dome; <strong>$40</strong>), <strong>de Young Museum</strong> (American art, tower with city views; <strong>$15</strong>), <strong>Japanese Tea Garden</strong> (<strong>$10</strong>), <strong>Conservatory of Flowers</strong> (Victorian greenhouse; <strong>$10</strong>), and endless meadows for picnics.
            </p>
            <p>
              Budget a full day if exploring thoroughly; rent bikes (<strong>$35-45/day</strong>) to cover the park's 3-mile length.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Painted Ladies (Alamo Square)</h4>
            <p>
              The seven colorful Victorian houses facing downtown skyline (featured in <em>Full House</em> opening credits) offer San Francisco's most Instagrammed view. Located at <strong>Alamo Square Park</strong>; free, always accessible. Visit sunset for golden-hour photography.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Mission District Murals</h4>
            <p>
              <strong>Balmy Alley</strong> and <strong>Clarion Alley</strong> showcase vibrant street art addressing social justice, immigration, and community identity. The Mission is San Francisco's sunniest, warmest neighborhood—perfect for afternoon exploring, followed by <strong>Mission-style burritos</strong> at <strong>La Taqueria</strong> or <strong>El Farolito</strong>.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Coit Tower</h4>
            <p>
              The 210-foot Art Deco tower atop <strong>Telegraph Hill</strong> offers 360° city views (<strong>$10</strong>). The surrounding <strong>Telegraph Hill neighborhood</strong> features <strong>Filbert Steps</strong>—wooden stairs through hidden gardens descending to the Embarcadero waterfront. Free, beautiful, locals' favorite.
            </p>
          </div>
        </div>

        {/* San Francisco Food Scene: Fuel for Match Days */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            San Francisco Food Scene: Fuel for Match Days
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              The Bay Area invented farm-to-table dining and still leads American food culture. Here's what you need:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Pre-Match Fueling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tartine Bakery</strong> (Mission): Legendary sourdough bread, morning buns, pastries. Arrive early or face long lines.</li>
              <li><strong>Swan Oyster Depot</strong> (Nob Hill): Seafood counter serving Dungeness crab, oysters, clam chowder since 1912. Cash only, expect waits.</li>
              <li><strong>Boudin Bakery</strong> (Fisherman's Wharf): Clam chowder served in sourdough bread bowl—touristy but iconic.</li>
              <li><strong>Burma Superstar</strong> (Richmond District): Burmese cuisine, rainbow salad, tea leaf salad. Always crowded; worth it.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Post-Match Celebrating</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gary Danko</strong> (Russian Hill): Michelin-starred fine dining, <strong>$90+</strong> prix fixe. Reserve weeks ahead.</li>
              <li><strong>Foreign Cinema</strong> (Mission): California-Mediterranean in outdoor courtyard with film screenings. Brunch legendary.</li>
              <li><strong>Zuni Café</strong> (Civic Center): Roast chicken for two (requires 1-hour advance order), oysters, California cuisine since 1979.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Budget-Friendly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>La Taqueria</strong> (Mission): James Beard Award-winning burritos. Carne asada burrito <strong>$12</strong>. No rice (controversial but correct).</li>
              <li><strong>Golden Boy Pizza</strong> (North Beach): Square Sicilian-style pizza, clam and garlic specialty. <strong>$4-6/slice</strong>.</li>
              <li><strong>Ike's Place</strong> (multiple locations): Overstuffed sandwiches, creative combinations, massive portions. <strong>$12-15</strong>.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Coffee Culture</h3>
            <p>San Francisco takes coffee seriously. Skip Starbucks; hit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Blue Bottle Coffee</strong> (multiple locations): Bay Area-born, now national, consistently excellent</li>
              <li><strong>Sightglass Coffee</strong> (SoMa): Roasts on-site, industrial-chic space</li>
              <li><strong>Ritual Coffee Roasters</strong> (Mission): Local favorite since 2005</li>
            </ul>
          </div>
        </div>

        {/* Practical Information: What You Need to Know */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-information-line text-indigo-400 dark:text-indigo-300 text-4xl"></i>
            Practical Information: What You Need to Know
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Getting to the Bay Area</h3>
            <p><strong>San Francisco International Airport (SFO)</strong> sits <strong>13 miles south of downtown</strong>—about <strong>30 minutes via BART</strong> (<strong>$10.30</strong>) or <strong>20-30 minutes by car</strong> (<strong>$45-65</strong> taxi/rideshare). The airport handles <strong>55+ million passengers annually</strong> with direct flights from every continent.</p>
            <p><strong>BART connection:</strong> Follow signs from baggage claim to International Terminal → take <strong>AirTrain</strong> (free, automated people-mover) to <strong>BART station</strong> → board Red or Yellow Line to downtown San Francisco (Embarcadero, Montgomery, Powell stations). Trains depart every 8-12 minutes.</p>
            <p><strong>San Jose Mineta International Airport (SJC)</strong>, 10 minutes from Levi's Stadium, offers alternative arrival point. From SJC, take <strong>VTA bus #60</strong> to <strong>Milpitas BART Station</strong> (<strong>$2.50</strong>, 25 minutes), then BART to San Francisco.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Weather &amp; What to Pack</h3>
            <p>San Francisco in June/July delivers <strong>cool summer</strong> with famous microclimates:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Downtown/Financial District:</strong> 60-70°F (16-21°C)</li>
              <li><strong>Mission District:</strong> 65-75°F (warmest neighborhood, sunniest)</li>
              <li><strong>Sunset/Ocean Beach:</strong> 55-65°F (foggy, windy)</li>
              <li><strong>Fog:</strong> Expect it daily, especially afternoons near Golden Gate Bridge and western neighborhoods</li>
            </ul>
            <p><strong>Mark Twain (allegedly) said:</strong> "The coldest winter I ever spent was a summer in San Francisco." <strong>It's true.</strong></p>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Pack:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Layers</strong> (critical—temperature swings 20°F throughout day)</li>
                <li>Light jacket or fleece (you'll wear it daily)</li>
                <li>Long pants (shorts work in Mission; freeze at Ocean Beach)</li>
                <li>Comfortable walking shoes (SF is hilly—15,000+ steps daily)</li>
                <li>Sunglasses and sunscreen (sun strong when fog clears)</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Money &amp; Costs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stadium parking: <strong>$40-60</strong> (pre-purchased)</li>
              <li>Mid-range hotel (SF): <strong>$275-500/night</strong></li>
              <li>Mid-range hotel (San Jose/Santa Clara): <strong>$200-375/night</strong></li>
              <li>Meals: <strong>$12-20</strong> (casual), <strong>$35-60</strong> (mid-range), <strong>$100+</strong> (upscale)</li>
              <li>BART single ride: <strong>$2.15-10.30</strong> depending on distance</li>
              <li><strong>Clipper card:</strong> Works across all Bay Area transit (BART, Muni, VTA, Caltrain, AC Transit)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Public Transit Passes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Clipper card:</strong> Load value, tap on/off all Bay Area transit (<strong>$3</strong> card fee + stored value)</li>
              <li><strong>Muni Passport:</strong> Unlimited San Francisco Muni (buses, light rail, cable cars) for 1-day (<strong>$13</strong>), 3-day (<strong>$31</strong>), 7-day (<strong>$41</strong>)</li>
              <li>Purchase Clipper cards at BART stations, airports, or via <strong>Clipper mobile app</strong></li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Safety &amp; Street Smarts</h3>
            <p>San Francisco is generally safe in tourist areas (Fisherman's Wharf, Union Square, North Beach, Marina, Embarcadero). Exercise standard urban caution:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tenderloin neighborhood</strong> (west of Union Square): High concentrations of homelessness, open drug use. Avoid walking through late at night.</li>
              <li><strong>Mid-Market Street</strong> (between Civic Center and Powell): Similar issues; take BART/Muni instead of walking.</li>
              <li><strong>Car break-ins:</strong> San Francisco has significant car break-in problem. <strong>Never leave anything visible in parked cars</strong>—not bags, not sunglasses, not phone chargers. Thieves smash windows in seconds.</li>
            </ul>
            <p>Tourist neighborhoods (listed above) are well-policed and safe for walking day/night.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Phone &amp; Connectivity</h3>
            <p>Free WiFi: BART stations, SFO Airport, most cafes/restaurants, public spaces. 5G coverage excellent throughout Bay Area. Consider US SIM or international roaming for extended stays.</p>
          </div>
        </div>

        {/* FIFA Fan Festival & Match Day Atmosphere */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            FIFA Fan Festival &amp; Match Day Atmosphere
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              While official locations await confirmation, San Francisco's <strong>FIFA Fan Festival</strong> will likely occupy <strong>Civic Center Plaza</strong> (central location, existing infrastructure, adjacent to City Hall) or <strong>Embarcadero waterfront</strong> (bay views, outdoor space). Expect <strong>30,000-50,000 daily visitors</strong> during matches, with giant screens, live music, food vendors, and international flags creating festival atmosphere.
            </p>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Neighborhood Watch Parties:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mission District</strong>: Dolores Park outdoor screenings (if permitted); bars on Valencia Street</li>
                <li><strong>Marina District</strong>: Sports bars with waterfront patios</li>
                <li><strong>North Beach</strong>: Italian cafes transform into viewing zones</li>
                <li><strong>Castro</strong>: LGBTQ+ friendly bars host diverse watch parties</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Bay Area Soccer Culture:</h4>
              <p>Don't underestimate Northern California's football knowledge. The <strong>San Jose Earthquakes</strong> (MLS) have played here since 1974, winning multiple championships. <strong>Stanford University</strong> has produced World Cup players. The region's diverse immigrant communities—Mexican, Salvadoran, Brazilian, Italian, Asian—bring authentic football passion.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Match Day at Levi's Stadium:</h4>
              <p>Arrive <strong>2-3 hours early</strong> for smooth entry. Security screening for 68,500 people takes time. <strong>California's Great America</strong> theme park (adjacent) operates match days—families combine World Cup with roller coasters.</p>
            </div>
          </div>
        </div>

        {/* Booking Strategy: How to Plan Your Bay Area World Cup Trip */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Booking Strategy: How to Plan Your Bay Area World Cup Trip
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Timeline That Works:</h3>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Now Through Late 2025:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor FIFA for ticket sale announcements (lottery opens late 2025)</li>
                <li>Research accommodation but wait for ticket confirmation</li>
                <li>Set flight alerts for SFO or SJC</li>
                <li>Join Bay Area World Cup communities online</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Immediately After Securing Tickets:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Book hotels within 24-48 hours</strong> (San Francisco properties near BART sell out fastest)</li>
                <li>Finalize flights—SFO offers direct international connections</li>
                <li>Purchase <strong>Clipper card</strong> online for Bay Area transit</li>
                <li>Reserve rental car only if exploring wine country, redwoods, coastal highways</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2–4 Weeks Before Travel */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-time-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            2–4 Weeks Before Travel
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <ul className="list-disc pl-6 space-y-2">
              <li>Book <strong>Alcatraz tickets</strong> (sells out months ahead)</li>
              <li>Purchase attraction tickets online for skip-the-line entry</li>
              <li>Make restaurant reservations (<strong>Gary Danko</strong>, <strong>Zuni Café</strong>, <strong>Foreign Cinema</strong>)</li>
              <li>Confirm stadium clear bag policy (typically <strong>12" x 6" x 12"</strong> max)</li>
              <li>Download transit apps: <strong>Clipper</strong>, <strong>Transit</strong> (real-time Bay Area transit), <strong>Google Maps</strong></li>
            </ul>

            <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/40">
              <p className="m-0"><strong>Affiliate booking moment:</strong> When comparing hotel prices, check <strong>Booking.com</strong>, <strong>Expedia</strong>, <strong>Hotels.com</strong>, and <strong>direct hotel websites</strong>—rates vary <strong>15–25%</strong> for identical rooms. Properties near <strong>Powell</strong> or <strong>Montgomery BART</strong> stations deliver best access to both San Francisco attractions and stadium transit. Membership programs (<strong>Hotels.com rewards</strong>, <strong>Expedia points</strong>) offer additional savings for multi-night stays.</p>
            </div>
          </div>
        </div>

        {/* Why the Bay Area Wins the World Cup Experience */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Why the Bay Area Wins the World Cup Experience
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Let's address the elephant: <strong>The stadium is 40 miles from San Francisco.</strong> That's the biggest logistical compromise of any U.S. host city. But here's what the Bay Area offers that nowhere else can:
            </p>
            <p>
              You get <strong>world-class football</strong> in a purpose-built stadium (Levi's Stadium) <strong>plus</strong> one of America's most beautiful cities (San Francisco) <strong>plus</strong> wine country (Napa/Sonoma) <strong>plus</strong> coastal beauty (Big Sur, Monterey) <strong>plus</strong> redwood forests (Muir Woods) <strong>plus</strong> Silicon Valley innovation culture—all within 90 minutes of each other.
            </p>
            <p>Six matches over three weeks means you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attend Canada's opener on June 13</li>
              <li>Spend two days wine tasting in Napa mid-week</li>
              <li>Drive the Pacific Coast Highway to Big Sur</li>
              <li>Return for Round of 32 on July 1</li>
              <li>Walk across Golden Gate Bridge</li>
              <li>Catch Alcatraz sunset tour</li>
              <li>Experience Mission District murals</li>
              <li>Ride cable cars at sunset</li>
            </ul>
            <p>
              The 90-minute stadium commute becomes a feature, not a bug—it forces you to experience the full Bay Area, not just one venue.
            </p>
            <p>
              The <strong>Round of 32 on July 1</strong> delivers knockout drama: 32 teams remain, every match elimination, 68,500 fans witnessing quarterfinal-caliber football. If you secure tickets to this match, you've succeeded.
            </p>
            <p><strong>Book BART-accessible San Francisco accommodation, embrace layers, download the Clipper app, and prepare to discover why people leave their hearts in San Francisco—then travel to Silicon Valley to watch the world's best football.</strong></p>
          </div>
        </div>

        {/* Final Checklist: Your Bay Area World Cup Essentials */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-checkbox-circle-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Final Checklist: Your Bay Area World Cup Essentials
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ <strong>Match tickets secured through FIFA official channels</strong></li>
              <li>✅ <strong>Hotel booked near SF BART stations</strong> (Powell, Montgomery, Embarcadero)</li>
              <li>✅ <strong>Flights confirmed to SFO or SJC</strong></li>
              <li>✅ <strong>Clipper card ordered</strong> (works all Bay Area transit)</li>
              <li>✅ <strong>Alcatraz tickets purchased</strong> (book 2+ months ahead)</li>
              <li>✅ <strong>Stadium-compliant clear bag</strong> (12" x 6" x 12" max)</li>
              <li>✅ <strong>Layered clothing packed</strong> (jacket essential, even June/July)</li>
              <li>✅ <strong>Comfortable walking shoes</strong> (SF hills = daily workout)</li>
              <li>✅ <strong>Transit apps downloaded</strong> (Clipper, Transit, Google Maps)</li>
              <li>✅ <strong>Restaurant reservations made</strong> (upscale dining books weeks ahead)</li>
            </ul>
            <p>
              The 2026 FIFA World Cup in the Bay Area isn't just matches at a stadium—it's the chance to experience world-class football in Silicon Valley while exploring one of Earth's most beautiful cities, wrapped in fog, sourdough, and California innovation.
            </p>
            <p>
              Whether you're here for Canada's opener on June 13 or the Round of 32 on July 1, the Bay Area delivers what few cities can: <strong>football, culture, and natural beauty converging in perfect Northern California harmony.</strong>
            </p>
            <p><strong>Welcome to the City by the Bay. The fog is real, the sourdough is legendary, and the football awaits.</strong> ⚽🌁🌉</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}