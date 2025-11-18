import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { setPageMeta } from '../../../components/seo/MetaUtils';

export default function MiamiCityGuide() {
  const pageUrl = '/world-cup-2026-host-cities/miami';
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    const ogImage = `${siteUrl}/images/cities/miami-world-cup-2026.webp`;
    const fullUrl = `${siteUrl}/world-cup-2026-host-cities/miami`;
    setPageMeta({ 
      title: 'Miami 2026 FIFA World Cup: Complete Travel Guide | StadiumPort', 
      description: 'Complete Miami World Cup 2026 travel guide. 7 matches including Bronze Final at Hard Rock Stadium. Hotels, transportation, attractions, and insider tips for South Florida\'s soccer spectacle.', 
      url: fullUrl, image: ogImage, locale: 'en_US', 
      publishedTime: '2025-11-13T09:00:00Z', 
      modifiedTime: new Date().toISOString(), section: 'Host Cities', 
      tags: ['World Cup 2026', 'Host Cities', 'Miami', 'Hard Rock Stadium'] 
    })
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities` },
    { name: 'Miami', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities/miami` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    'Miami 2026 FIFA World Cup Travel Guide',
    'Complete guide to Miami World Cup 2026 with 7 matches including Bronze Final. Travel tips, hotels, transportation, and attractions in South Florida.',
    `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities/miami`,
    { datePublished: '2025-11-13T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Miami', 'Hard Rock Stadium'] }
  );

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, cityGuideSchema, generateImageObjectSchema('/images/cities/miami-world-cup-2026.webp', { width: 1600, height: 900, caption: 'Miami skyline – World Cup 2026' })]} />
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
        <Header />
        
        {/* Editorial Hero — cohesive with NYC article style */}
        <section className="editorial-hero">
          <div className="editorial-hero-media">
            <OptimizedImage
              src="/images/cities/miami-world-cup-2026.webp"
              alt="Miami skyline at golden hour"
              className="editorial-hero-image-wrapper"
              imgClassName="editorial-hero-image hero-focus-miami"
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
              <span>World Cup 2026</span>
            </div>
              <nav className="editorial-breadcrumbs mb-3">
                <ol className="list-none flex flex-wrap items-center gap-2 text-sm md:text-base">
                  <li>
                    <Link to="/" className="hover:underline">Home</Link>
                  </li>
                  <li className="text-slate-400">›</li>
                  <li>
                    <Link to="/world-cup-2026-host-cities" className="hover:underline">Host Cities</Link>
                  </li>
                  <li className="text-slate-400">›</li>
                  <li>
                    <span className="text-slate-600 dark:text-slate-300">Miami World Cup 2026 Guide</span>
                  </li>
                </ol>
              </nav>
              <h1 className="editorial-hero-title">
                Miami
              </h1>
              <div className="editorial-hero-meta">
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  <span>USA</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-building-line"></i>
                  <span>Hard Rock Stadium</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-group-line"></i>
                  <span>65,326 Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections — Editorial presentation aligned to NYC */}
        <section className="editorial-article py-12">
          
          {/* Introduction */}
          <article className="editorial-body editorial-dropcap">
            <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-trophy-line text-emerald-500"></i>
              Your Complete Travel Guide to South Florida's Soccer Spectacle
            </h2>
            <p className="leading-relaxed mb-6">
              When FIFA brings the beautiful game to Miami in summer 2026, nearly a million international fans will descend on South Florida for seven high-stakes matches—more than almost any other host city. Miami is one of the <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 host cities</Link> for the 2026 World Cup. This isn't just another tournament stop. Miami, with its electric cultural energy, world-class beaches, and deep soccer roots, promises to transform the World Cup experience into a month-long carnival where every neighborhood becomes a fan zone.
            </p>
            <p className="leading-relaxed">
              If you're planning your pilgrimage to watch football in the Magic City, this guide delivers the real intel you need: where the matches happen, how to actually get around, which neighborhoods to book, and what to do when you're not watching the world's best players battle it out.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Essential Links module */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
            <div className="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential Miami Links</div>
            <div className="space-y-1 text-slate-800 dark:text-slate-200">
              <div>
                🏟️ <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/hard-rock-stadium" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Hard Rock Stadium Guide</Link>
              </div>
              <div>
                🗺️ <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </div>
              <div>
                ✈️ <strong>Nearby Cities:</strong> <Link to="/world-cup-2026-host-cities/atlanta" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Atlanta</Link> | <Link to="/world-cup-2026-host-cities/houston" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Houston</Link> | <Link to="/world-cup-2026-host-cities/mexico-city" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>
              </div>
            </div>
          </div>

          {/* The Stadium Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-building-4-line text-emerald-500"></i>
              The Stadium: <Link to="/world-cup-2026-stadiums/hard-rock-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Hard Rock Stadium</Link> (Miami Stadium)
            </h3>
            <p className="whitespace-pre-line">
              {`347 Don Shula Drive, Miami Gardens, FL 33056

Miami's World Cup action unfolds at Hard Rock Stadium in Miami Gardens, temporarily rebranded as "Miami Stadium" for the tournament. Located at 347 Don Shula Drive, Miami Gardens, FL 33056, this isn't your typical American football venue awkwardly retrofitted for soccer. The stadium was originally built to FIFA specifications by Miami Dolphins founder Joe Robbie—himself a passionate soccer fan who once owned professional teams in the city.

The numbers tell the story of Miami's commitment: 65,326 permanent seats configured for football/soccer, a partial canopy roof that shields fans from Florida's infamous summer rain and blazing sun, and a world-class natural grass playing surface that's hosted El Clásico between Real Madrid and Barcelona (which set North American soccer attendance records). Recent renovations transformed it into a European-style venue with improved sightlines, premium amenities, and technology upgrades.

Here's what matters for World Cup visitors: the stadium sits in a suburban setting about 15 miles north of downtown Miami and roughly 20 miles from Miami Beach. There's limited accommodation within walking distance, so you'll need a transportation plan. But the stadium itself? It's proven it can handle the biggest stages—six Super Bowls, the Copa América 2024 Final, and Formula One's Miami Grand Prix. FIFA didn't choose Miami Gardens by accident.`}
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Match Schedule Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-calendar-event-line text-emerald-500"></i>
              The Match Schedule: Seven Games You Don't Want to Miss
            </h3>
            <p className="whitespace-pre-line">
              {`Four weeks of world-class football action

Miami scored one of the most generous World Cup allocations with seven matches spanning four weeks, including knockout rounds that guarantee drama:

Group Stage:
- Sunday, June 15, 2026 – Group H match (opening Miami fixture)
- Sunday, June 21, 2026 – Group H match
- Wednesday, June 24, 2026 – Group C match
- Saturday, June 27, 2026 – Group K match

Knockout Stage:
- Friday, July 3, 2026 – Round of 32: Group J Winner vs. Group H Runner-Up
- Saturday, July 11, 2026 – Quarter-Final
- Saturday, July 18, 2026 – Bronze Final (Third-Place Match)

That final fixture—the Bronze Final on July 18—is particularly special. Only a handful of cities worldwide earn the privilege of hosting this prestigious match where two fallen semi-finalists battle for the podium. If you can only attend one match, the knockout rounds offer guaranteed intensity and world-class talent.`}
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Transportation Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-train-line text-emerald-500"></i>
              Getting There: Transportation Made Easy
            </h3>
            <p className="whitespace-pre-line">
              {`Hard Rock Stadium sits in Miami Gardens, about 15 miles north of downtown Miami and 20 miles from South Beach. While the suburban location means limited walkable accommodation, multiple transportation options connect you to the action.

Your Best Options

1. Brightline + Stadium Shuttle (Recommended)

The smoothest move for match day is taking Brightline—South Florida's sleek intercity rail—to Aventura Station, then hopping the free Hard Rock Stadium Connect shuttle. Shuttles depart 10 minutes after each train arrival and deliver you directly to the stadium gates. This combo avoids traffic nightmares and costs around $15-25 for the train (depending on origin station), plus zero for the shuttle.

Brightline connects Fort Lauderdale, Aventura, and Miami's central districts. If you're staying in Brickell, Downtown, or Wynwood, get to a Brightline station early. These trains will be packed on match days.

2. Metrobus Route 297 (Game Day Special)

On event days, Miami-Dade Transit operates Metrobus Route 297 from Earlington Heights Metrorail Station directly to the stadium. Fare is $2.25 each way—unbeatable value if you're already using the Metrorail system. Important caveat: buses fill up fast. Arrive at Earlington Heights at least 90 minutes before kickoff, or risk standing on the platform watching full buses pass.

From most Miami neighborhoods, you'll need to take Metrorail to Earlington Heights first. The Orange Line connects Miami International Airport to downtown in about 15 minutes; the Green Line serves Dadeland South, Coconut Grove, and beyond. The entire system costs $2.25 per trip (daily cap of $5.65 with contactless payment).`}
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Rideshare/Taxi Section */}
          <article className="editorial-body">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-taxi-line text-emerald-500"></i>
              3. Rideshare/Taxi
            </h4>
            <p className="leading-relaxed mb-4">
              Uber and Lyft work, but expect <strong>surge pricing</strong> to bite hard after matches end. A typical ride from downtown Miami runs <strong>$35-50+</strong> each way depending on traffic and demand. Post-match, you could wait 45+ minutes and pay double. Many fans book rideshare departures 30-40 minutes into the match to beat the exodus, then watch the final minutes on their phones during the ride. Smart? Maybe. Ideal? No.
            </p>
            <p className="leading-relaxed">
              Designated rideshare pickup is at <strong>Lot 42 on NW 27th Avenue</strong>—a 25-45 minute walk from stadium exits when crowds surge. Some fans use the free rideshare shuttle to a nearby pickup point, which helps but requires advance reservation.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Driving + Parking Section */}
          <article className="editorial-body">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-car-line text-emerald-500"></i>
              4. Driving + Parking
            </h4>
            <p className="leading-relaxed mb-4">
              If you're renting a car (which makes sense for exploring South Florida beyond the matches), <strong>stadium parking exists but sells out quickly</strong>. Pre-purchase passes online weeks before your match. Standard parking runs <strong>$40-60</strong>, with VIP lots reaching <strong>$100+</strong>. Traffic in and out is brutal—allow 2+ hours post-match to escape the lot.
            </p>
            <p className="leading-relaxed">
              <strong>Pro parking hack:</strong> Some fans park at <strong>Aventura Mall</strong> (free) and Brightline to the stadium, or park at Metrorail stations with garages ($4.50/day) and take the Route 297 bus. Both options require advance scouting but save serious money.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Accommodation Guide Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-hotel-line text-emerald-500"></i>
              Where to Stay: Neighborhood Playbook for World Cup Visitors
            </h3>
            <p className="leading-relaxed mb-6">
              Miami's geography spreads across 30+ miles from north to south. Choosing the right base camp determines whether you maximize your trip or spend half of it stuck in traffic. Here's the honest breakdown:
            </p>

            {/* Downtown Miami/Brickell */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-building-line text-emerald-500"></i>
                Downtown Miami/Brickell (Best for Transit + Atmosphere)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why stay here:</strong> You're at the hub of Miami's public transit network (Metrorail, Metromover, buses), walking distance to <strong>Bayfront Park</strong> (expected FIFA Fan Festival location), and surrounded by restaurants, rooftop bars, and nightlife. The energy here during the World Cup will be electric—international flags, outdoor viewing parties, fans from 50 nations mingling in the streets.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Metrorail to Earlington Heights → Route 297 bus (75-90 minutes total). Or Brightline from nearby stations if your hotel is within walking distance.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Mix of business hotels, modern high-rises, and boutique properties. Expect <strong>$275-400/night</strong> for mid-range options during the tournament. Luxury properties like <strong>Hotel AKA Miami Brickell</strong> offer sophistication and bay views; budget travelers should book early or consider hostels like <strong>Miami River Inn</strong> (between Downtown and Little Havana).
              </p>
              <p className="leading-relaxed">
                <strong>Book early:</strong> Downtown sells out fast. If you secure match tickets in late 2025, reserve accommodation immediately. Consider booking refundable rates given ticket lottery uncertainty.
              </p>
            </div>

            {/* South Beach */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-sun-line text-emerald-500"></i>
                South Beach/Miami Beach (Best for Beach + Nightlife)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why stay here:</strong> This is peak Miami—Art Deco architecture, sugar-sand beaches, poolside parties, and Ocean Drive's legendary people-watching. If you're turning the World Cup into a full Florida vacation, South Beach delivers the postcard experience. Just accept you'll commute to matches.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Most complex option. Take <strong>Metrobus 150 Express</strong> or <strong>Beach Trolley</strong> to mainland transit, then connect to Metrorail/Brightline. Budget <strong>2+ hours each way</strong>. Many fans bite the bullet on rideshare for match days ($60-80 each way with surge pricing).
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Everything from budget motels to five-star oceanfront resorts. <strong>Hotel Continental Miami Beach</strong> offers retro-chic rooms one block from the beach; <strong>Kimpton Angler's Hotel</strong> provides boutique luxury with rooftop pools. Expect <strong>$350-600/night</strong> for oceanfront mid-range during World Cup. Hostels like <strong>Freehand Miami</strong> in Mid-Beach offer dorm beds under $100.
              </p>
              <p className="leading-relaxed">
                <strong>Reality check:</strong> South Beach is gorgeous but geographically inconvenient for stadium access. Best suited for fans attending 1-2 matches who prioritize beach time over logistics.
              </p>
            </div>

            {/* Miami Gardens/Aventura */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Miami Gardens/Aventura/North Miami (Best for Stadium Proximity)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why stay here:</strong> Minimize commute stress. You're <strong>10-20 minutes from Hard Rock Stadium</strong> by car, or a short bus ride on non-game days. Aventura offers massive shopping (Aventura Mall) and easy Brightline access.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Drive (15 minutes, pre-book parking), rideshare ($20-30), or local buses. This area is designed for cars, so public transit options thin out.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Practical, not glamorous. <strong>Stadium Hotel</strong> sits closest to the venue (literally visible from some rooms) with budget-friendly rates and sports bar. <strong>Aloft Miami Aventura</strong> delivers modern design near Aventura Mall. <strong>Miami Lakes Hotel</strong> offers full resort amenities including golf. Expect <strong>$180-320/night</strong> range.
              </p>
              <p className="leading-relaxed">
                <strong>Who this suits:</strong> Hardcore fans attending multiple matches who prioritize stadium convenience over Miami's cultural scene. Also families, since accommodation tends to be more spacious and affordable than downtown.
              </p>
            </div>

            {/* Coral Gables/Coconut Grove */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-leaf-line text-emerald-500"></i>
                Coral Gables/Coconut Grove (Best for Upscale + Cultural)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why stay here:</strong> Escape the chaos. These elegant neighborhoods south of downtown offer tree-lined streets, boutique hotels, Mediterranean architecture, and attractions like <strong>Vizcaya Museum</strong>. More "refined vacation" than "spring break."
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Metrorail connects Coconut Grove to downtown (transfer to Route 297 bus). From Coral Gables, budget 60-90 minutes. Driving on match days: 30-45 minutes depending on traffic.
              </p>
              <p className="leading-relaxed">
                <strong>Accommodation vibe:</strong> Historic inns, upscale hotels, fewer budget options. Expect <strong>$280-450/night</strong> during World Cup. Attracts couples and travelers who want sophistication between matches.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Beyond the Matches Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-compass-3-line text-emerald-500"></i>
              Beyond the Matches: What to Do in Miami
            </h3>
            <p className="leading-relaxed mb-6">
              You didn't fly thousands of miles to only see 90 minutes of football. Miami delivers world-class experiences when you're not at the stadium:
            </p>

            {/* Must-Do Attractions */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Must-Do Attractions
              </h4>
              
              {/* Wynwood Walls */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Wynwood Walls</strong>
                </h5>
                <p className="leading-relaxed">
                  The world's coolest outdoor street art museum—free, always open, constantly evolving. Over 35 large-scale murals by internationally renowned artists transform warehouse walls into living canvases. Surrounding Wynwood neighborhood pulses with galleries, craft breweries (Cervecería La Tropical), coffee shops (Panther Coffee), and trendy restaurants. Budget 2-3 hours to explore properly. Easiest access via <strong>Metromover</strong> from downtown or rideshare ($10-15).
                </p>
              </div>

              {/* Vizcaya Museum */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Vizcaya Museum and Gardens</strong>
                </h5>
                <p className="leading-relaxed">
                  This jaw-dropping Italian Renaissance-style villa (built 1916) sits on Biscayne Bay with 10 acres of formal gardens that rival European estates. The museum houses original furnishings, art collections, and photography-worthy courtyards. <strong>Admission: $25</strong>. Perfect for a relaxed morning before evening matches. Located in Coconut Grove; accessible via <strong>Metrorail to Vizcaya Station</strong> (literally named after the museum).
                </p>
              </div>

              {/* Little Havana */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Little Havana</strong>
                </h5>
                <p className="leading-relaxed">
                  Miami's Cuban heart beats along <strong>Calle Ocho (SW 8th Street)</strong>. Watch master cigar rollers at work, sip authentic café cubano, catch live salsa music at <strong>Ball & Chain</strong>, and play dominoes at <strong>Máximo Gómez Park</strong>. The neighborhood explodes with energy on <strong>Viernes Culturales</strong> (last Friday of each month)—street festivals with art, music, and food vendors. Budget-friendly exploring; most experiences are free or cheap.
                </p>
              </div>

              {/* Miami Beach & Art Deco */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Miami Beach & Art Deco District</strong>
                </h5>
                <p className="leading-relaxed">
                  Beyond tanning, Miami Beach offers architectural history. The <strong>Art Deco Historic District</strong> in South Beach contains over 800 preserved buildings from the 1920s-30s in pastel colors and geometric designs. Free self-guided walking tours via app, or book guided tours ($25-40). After your architecture fix, hit the sand: <strong>South Beach</strong> is iconic but crowded; <strong>North Beach</strong> and <strong>Mid-Beach</strong> offer calmer vibes.
                </p>
              </div>

              {/* PAMM */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Pérez Art Museum Miami (PAMM)</strong>
                </h5>
                <p className="leading-relaxed">
                  Striking contemporary art museum on Biscayne Bay with rotating exhibitions and a permanent collection focused on international art of the 20th-21st centuries. <strong>Admission: $18</strong>. The outdoor hanging gardens and waterfront sculpture terrace alone justify a visit. Located in Downtown Miami's Museum Park; walkable from Metromover.
                </p>
              </div>

              {/* Everglades */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-2">
                  <strong>Everglades National Park</strong>
                </h5>
                <p className="leading-relaxed">
                  If you have a free day between matches, rent a car and explore this UNESCO World Heritage Site 45 minutes southwest. Airboat tours ($30-60) deliver close encounters with alligators, while hiking trails and kayaking routes reveal one of Earth's most unique ecosystems. Many operators offer hotel pickup in Miami.
                </p>
              </div>

              {/* Practical Touring Tips */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-emerald-500"></i>
                  Practical Touring Tips
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Miami gets HOT</strong> in June/July (85-92°F / 29-33°C with humidity). Hydrate constantly, wear sunscreen, seek shade midday.</li>
                  <li><strong>Book popular attractions online</strong> to skip lines during World Cup crush.</li>
                  <li><strong>The Metromover is FREE</strong> and covers downtown/Brickell—perfect for attraction-hopping in that zone.</li>
                  <li><strong>Consider a Go Miami Card</strong> (all-inclusive pass) if hitting multiple paid attractions; can save 30-40% versus individual tickets.</li>
                </ul>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Food Scene Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-restaurant-line text-emerald-500"></i>
              Miami Food Scene: Fuel for Match Days
            </h3>
            <p className="leading-relaxed mb-6">
              Miami's culinary landscape mirrors its demographics—Cuban, Haitian, Colombian, Argentine, Peruvian influences collide with American and contemporary fusion.
            </p>

            {/* Pre-Match Fueling */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                Pre-Match Fueling
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="leading-relaxed">
                    <strong>Versailles Restaurant</strong> (Little Havana): Iconic Cuban institution. Order the Cubano sandwich, ropa vieja, or pastelitos. Always busy; arrive off-peak.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Zak the Baker</strong> (Wynwood): Artisan bakery with outstanding pastries, sandwiches, coffee. Grab breakfast before stadium-bound transit.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>La Sandwicherie</strong> (South Beach): Late-night legend serving fresh French sandwiches until 5 AM. Perfect post-nightlife fuel.
                  </p>
                </div>
              </div>
            </div>

            {/* Post-Match Celebrating */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-goblet-line text-emerald-500"></i>
                Post-Match Celebrating
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="leading-relaxed">
                    <strong>Joe's Stone Crab</strong> (South Beach): Miami Beach institution (seasonal, but World Cup timing works). Reserve days ahead.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Coyo Taco</strong> (Wynwood): Elevated street tacos in lively atmosphere. Great for group celebrations.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Garcia's Seafood Grille & Fish Market</strong> (Miami River): Waterfront seafood with local vibe, away from tourist traps.
                  </p>
                </div>
              </div>
            </div>

            {/* Budget-Friendly */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-emerald-500"></i>
                Budget-Friendly
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="leading-relaxed">
                    <strong>1-800-Lucky</strong> (Wynwood): Asian-inspired food hall with multiple vendors, outdoor seating, reasonable prices.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>Fritanga Monimbo</strong> (Little Havana): Authentic Nicaraguan cuisine, massive portions, under $15/person.
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed">
                    <strong>El Rey de las Fritas</strong> (Little Havana): Cuban fritas (burgers) and batidos (shakes). Total meal under $10.
                  </p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Practical Information Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-information-line text-emerald-500"></i>
              Practical Information: What You Need to Know
            </h3>

            {/* Getting to Miami */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-emerald-500"></i>
                Getting to Miami
              </h4>
              <p className="leading-relaxed mb-4">
                <strong>Miami International Airport (MIA)</strong> sits 8 miles northwest of downtown—about <strong>15-20 minutes by car</strong>, <strong>15 minutes via Metrorail Orange Line</strong> ($2.25), or <strong>$25-30 taxi/rideshare</strong> to downtown. The airport handles 50+ million passengers annually with direct flights from every continent. Book flights early; prices spike as matches approach.
              </p>
              <p className="leading-relaxed">
                <strong>Fort Lauderdale-Hollywood International Airport (FLL)</strong>, 30 miles north, sometimes offers cheaper flights. From FLL, take <strong>Brightline train</strong> to Miami (30 minutes, $15-20) or drive/rideshare (45-60 minutes, $50-70).
              </p>
              <p className="leading-relaxed">
                Miami also serves as a gateway city for North American football travel, with strong flight and cultural connections to <Link to="/world-cup-2026-host-cities/mexico-city" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>.
              </p>
            </div>

            {/* Weather & What to Pack */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-sun-line text-emerald-500"></i>
                Weather & What to Pack
              </h4>
              <p className="leading-relaxed mb-4">
                Expect <strong>hot, humid, with afternoon thunderstorms</strong>. Daily highs 88-92°F (31-33°C), humidity 70-80%. Pack:
              </p>
              <p className="leading-relaxed mb-4">
                Miami's tropical weather contrasts with cities like <Link to="/world-cup-2026-host-cities/atlanta" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link> and <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>—plan accordingly if you’re building a multi-city itinerary.
              </p>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li>Lightweight, breathable clothing</li>
                <li>Sunscreen (SPF 50+), sunglasses, hat</li>
                <li>Reusable water bottle (you'll need it)</li>
                <li>Light rain jacket or poncho</li>
                <li>Comfortable walking shoes (you'll be on your feet)</li>
              </ul>
            </div>

            {/* Money & Costs */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-emerald-500"></i>
                Money & Costs
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li>Stadium parking: $40-60 pre-purchased</li>
                <li>Mid-range hotel (Downtown): $275-400/night during World Cup</li>
                <li>Meals: $15-25 (casual), $40-70 (mid-range), $100+ (high-end)</li>
                <li>Public transit: $2.25/trip, $5.65 daily cap</li>
                <li>Rideshare (downtown to stadium): $35-50 each way</li>
              </ul>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Safety & Connectivity Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-shield-check-line text-emerald-500"></i>
              Safety & Connectivity
            </h3>

            {/* Safety & Common Sense */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-shield-line text-emerald-500"></i>
                Safety & Common Sense
              </h4>
              <p className="leading-relaxed mb-4">
                Miami is generally safe for tourists in popular areas (Downtown, Brickell, South Beach, Wynwood, Coral Gables). Standard urban precautions apply: avoid isolated areas late at night, secure valuables, use legitimate rideshare apps only. The World Cup brings heightened security; expect bag checks at attractions and transport hubs.
              </p>
            </div>

            {/* Phone & Connectivity */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-wifi-line text-emerald-500"></i>
                Phone & Connectivity
              </h4>
              <p className="leading-relaxed mb-4">
                Free WiFi available at: Metrorail/Metrobus, Miami International Airport, most hotels, cafes, and restaurants. Consider purchasing a US SIM card or activating international roaming if staying multiple days. 5G coverage is excellent throughout metro Miami.
              </p>
            </div>

            {/* Language */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-translate-2 text-emerald-500"></i>
                Language
              </h4>
              <p className="leading-relaxed">
                English is official, but <strong>Spanish dominates</strong> in many neighborhoods. Bilingual signage is common. Basic Spanish phrases help in Little Havana, Cuban restaurants, and with some service workers.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* FIFA Fan Festival & Match Day Atmosphere Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-football-line text-emerald-500"></i>
              FIFA Fan Festival & Match Day Atmosphere
            </h3>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              While official details are still being finalized, FIFA typically establishes a massive <strong>Fan Festival</strong> in each host city—a free, family-friendly zone with giant screens, live music, food vendors, and sponsor activations. Miami's is expected at <strong>Bayfront Park</strong> in Downtown Miami, offering stunning Biscayne Bay views and central location.
            </p>

            {/* Why Fan Festivals Matter */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-tv-line text-emerald-500"></i>
                Why Fan Festivals Matter
              </h4>
              <p className="leading-relaxed">
                No match ticket? The Fan Festival becomes your World Cup. Tens of thousands gather to watch matches on enormous screens, surrounded by flags, face paint, and fans from every nation. The energy rivals stadium atmosphere. Arrive early for popular matches; capacity limits apply.
              </p>
            </div>

            {/* Neighborhood Watch Parties */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-community-line text-emerald-500"></i>
                Neighborhood Watch Parties
              </h4>
              <p className="leading-relaxed mb-4">
                Expect every sports bar, brewery, and restaurant with TVs to become unofficial fan zones. Wynwood, South Beach, Brickell, and Little Havana will buzz with street parties, especially for knockout rounds. Many establishments offer:
              </p>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li>Outdoor projector screens</li>
                <li>Themed menus (match-day specials)</li>
                <li>Extended hours for late matches</li>
                <li>Live DJs between matches</li>
              </ul>
            </div>

            {/* Cultural Vibe */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-heart-line text-emerald-500"></i>
                Cultural Vibe
              </h4>
              <p className="leading-relaxed">
                Miami's soccer obsession runs deep—Inter Miami CF just brought Lionel Messi to MLS, and the city regularly hosts international friendlies between global powerhouses. Expect knowledgeable, passionate crowds who understand the game. The city's Latin American demographic means matches involving Argentina, Brazil, Colombia, Mexico, or Uruguay will feel like home fixtures.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Booking Strategy Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-calendar-check-line text-emerald-500"></i>
              Booking Strategy: How to Plan Your World Cup Trip
            </h3>

            {/* Timeline for Success */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                Timeline for Success
              </h4>

              {/* Now (Late 2025) */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <i className="ri-calendar-line text-emerald-500"></i>
                  Now (Late 2025)
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li>Register with FIFA for ticket lottery (draws begin September 2025)</li>
                  <li>Research hotel options but hold on booking until ticket confirmation</li>
                  <li>Set airfare price alerts; consider booking refundable fares if confident</li>
                </ul>
              </div>

              {/* Upon Securing Tickets */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <i className="ri-ticket-line text-emerald-500"></i>
                  Upon Securing Tickets (Late 2025/Early 2026)
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Immediately book accommodation</strong> (prices climb daily after tickets awarded)</li>
                  <li><strong>Finalize flights</strong> (use points/miles if possible to reduce costs)</li>
                  <li><strong>Reserve rental car</strong> if planning South Florida exploration beyond matches</li>
                  <li><strong>Pre-purchase stadium parking</strong> if driving</li>
                </ul>
              </div>

              {/* 2-4 Weeks Before Departure */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <i className="ri-suitcase-line text-emerald-500"></i>
                  2-4 Weeks Before Departure
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li>Book popular restaurants requiring reservations (Joe's Stone Crab, upscale dining)</li>
                  <li>Purchase attraction tickets online for fast-track entry</li>
                  <li>Confirm transit plans and download Miami transit apps</li>
                  <li>Check stadium clear bag policy and purchase compliant bag</li>
                </ul>
              </div>
            </div>

            <p className="leading-relaxed mb-6">
              Travel planning tip: Combine Miami with <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> or <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link> for a Southern Gulf experience with distinct regional flavors and matchday atmospheres.
            </p>

            {/* Affiliate Opportunity Moment */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <h4 className="editorial-h4 mb-3 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Pro Booking Tip
              </h4>
              <p className="leading-relaxed">
                Once you know your travel dates, <strong>book hotels through trusted platforms</strong> offering World Cup packages or flexible cancellation policies. Properties near downtown Miami, Brightline stations, and Metrorail access book fastest. Comparison shopping across multiple booking engines often reveals 10-20% price differences for identical rooms—worth the 15 minutes research.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Why Miami Wins Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-trophy-line text-emerald-500"></i>
              Why Miami Wins the World Cup Host City Lottery
            </h3>

            <p className="leading-relaxed mb-4">
              Let's be honest: some World Cup host cities are purely functional—you watch matches, maybe see a museum, then move on. Miami is different. This city was built for celebration. The nightlife doesn't quit. The beaches deliver postcard perfection. The food scene rivals any global capital. And unlike some North American hosts where soccer is niche, Miami <strong>breathes</strong> football.
            </p>

            <p className="leading-relaxed mb-4">
              The stadium itself reflects this DNA—purpose-built for the sport, repeatedly hosting international matches that prove South Florida understands the beautiful game. When 65,000 fans pack Hard Rock Stadium for a World Cup knockout match in July 2026, with South Florida's energy spilling into every neighborhood, you'll understand why FIFA chose this city.
            </p>

            <p className="leading-relaxed mb-4">
              Seven matches spanning four weeks means you can build an entire vacation around the tournament. Attend an early group stage fixture, explore the Keys, return for a quarterfinal. Or plant yourself downtown for the full month, sampling different neighborhoods daily, catching matches at the Fan Festival, and experiencing Miami at peak global attention.
            </p>

            <p className="leading-relaxed mb-4">
              The logistics require planning—this isn't a compact European city where you walk everywhere—but the payoff is enormous. Where else can you watch world-class football in the morning, snorkel the reef by afternoon, dance salsa in Little Havana at sunset, then watch another match under the lights?
            </p>

            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <p className="text-lg font-semibold leading-relaxed">
                <strong>Book early, plan transit thoughtfully, embrace the heat, and prepare for one of the most memorable World Cup experiences any host city can offer.</strong>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Related Destinations */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-map-pin-line text-emerald-500"></i>
              Plan Your Tropical World Cup Adventure
            </h2>
            <div className="space-y-6">
              <p>
                Miami's unique location and tropical climate make it an ideal base for exploring Southern host cities and international destinations.
              </p>
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">
                  <i className="ri-route-line text-emerald-500"></i>
                  Popular Combinations
                </h3>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Southern States Circuit</h4>
                  <p>
                    Experience the diverse American South: Start in Miami (current, no link), head to{' '}
                    <Link to="/world-cup-2026-host-cities/atlanta" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
                    {' '}for Southern charm, then continue to{' '}
                    <Link to="/world-cup-2026-host-cities/houston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/dallas" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                    {' '}for a taste of Texas.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Latin American Gateway</h4>
                  <p>
                    Miami's strong cultural ties to Latin America make it perfect for combining with Mexican host cities like{' '}
                    <Link to="/world-cup-2026-host-cities/mexico-city" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>
                    ,{' '}
                    <Link to="/world-cup-2026-host-cities/guadalajara" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara</Link>
                    , or{' '}
                    <Link to="/world-cup-2026-host-cities/monterrey" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link>
                    .
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Coastal Contrast</h4>
                  <p>
                    Experience both coasts by connecting Miami with West Coast cities like{' '}
                    <Link to="/world-cup-2026-host-cities/los-angeles" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/san-francisco" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">San Francisco Bay Area</Link>
                    {' '}for a complete American World Cup tour.
                  </p>
                </div>
              </div>
              <p>
                <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Browse All World Cup 2026 Host Cities</Link>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Final Checklist Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-checkbox-line text-emerald-500"></i>
              Final Checklist: Your Miami World Cup Essentials
            </h3>

            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>✔ Match tickets secured through FIFA official channels</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Hotel booked in Downtown/Brickell for transit access (or Miami Gardens for stadium proximity)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Flights confirmed to MIA (or FLL with Brightline backup)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Stadium parking pre-purchased OR transit plan mapped (Brightline + shuttle)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Attraction tickets purchased online (Vizcaya, PAMM, etc.)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Miami transit app downloaded (GO Miami-Dade)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Portable charger packed (your phone will die by halftime otherwise)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Sunscreen, hydration pack, comfortable shoes ready</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Restaurant reservations made for splurge meals</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>✔ Clear stadium-compliant bag purchased (12" x 6" x 12" max)</strong>
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="leading-relaxed mb-4">
                The 2026 FIFA World Cup in Miami isn't just another sporting event—it's a once-in-a-lifetime collision of the world's most popular sport with one of America's most dynamic cities. Whether you're there for football, culture, beaches, or all three, Miami delivers.
              </p>
              <div className="text-2xl text-slate-900 dark:text-slate-200">¡Vamos!</div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Back CTA */}
          <div className="mt-8 flex justify-end">
            <Link to="/world-cup-2026-host-cities" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">
              <i className="ri-check-line mr-2"></i>
              Got It
            </Link>
          </div>

        </section>

        <Footer />
      </div>
    </>
  );
}