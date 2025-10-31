import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';

export default function MiamiCityGuide() {
  const navigate = useNavigate();
  const pageUrl = '/cities/miami';
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update meta tags
    document.title = 'Miami 2026 FIFA World Cup: Complete Travel Guide | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete Miami World Cup 2026 travel guide. 7 matches including Bronze Final at Hard Rock Stadium. Hotels, transportation, attractions, and insider tips for South Florida\'s soccer spectacle.');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities/miami`);
    }
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities` },
    { name: 'Miami', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities/miami` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    'Miami 2026 FIFA World Cup Travel Guide',
    'Complete guide to Miami World Cup 2026 with 7 matches including Bronze Final. Travel tips, hotels, transportation, and attractions in South Florida.',
    `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities/miami`
  );

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, cityGuideSchema]} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://readdy.ai/api/search-image?query=Miami%20skyline%20at%20golden%20hour%20with%20modern%20skyscrapers%20reflecting%20in%20Biscayne%20Bay%2C%20tropical%20palm%20trees%2C%20vibrant%20sunset%20colors%2C%20luxury%20waterfront%20cityscape%2C%20Art%20Deco%20architecture%20visible%20in%20distance&width=1920&height=800&seq=miami-hero&orientation=landscape"
              alt="Miami skyline at golden hour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-white font-inter font-medium">Hard Rock Stadium • 65,326 Capacity</span>
              <span className="text-gold-400">•</span>
              <span className="text-emerald-300 font-semibold">7 Matches Including Bronze Final</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Miami 2026
              <br />
              <span className="text-gold-400">FIFA World Cup</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Your Complete Travel Guide to South Florida's Soccer Spectacle
            </p>

            {/* Match Schedule Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-400/30">
              <i className="ri-calendar-line text-emerald-300 text-lg"></i>
              <span className="text-emerald-200 font-inter font-medium">June 15, 21, 24, 27 | July 3, 11, 18</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="p-6 md:p-10 space-y-10">
          
          {/* Introduction */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-trophy-line text-amber-400"></i>
              Miami 2026 FIFA World Cup: Your Complete Travel Guide to South Florida's Soccer Spectacle
            </h2>
            <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed whitespace-pre-line">
              {`When FIFA brings the beautiful game to Miami in summer 2026, nearly a million international fans will descend on South Florida for seven high-stakes matches—more than almost any other host city. This isn't just another tournament stop. Miami, with its electric cultural energy, world-class beaches, and deep soccer roots, promises to transform the World Cup experience into a month-long carnival where every neighborhood becomes a fan zone.

If you're planning your pilgrimage to watch football in the Magic City, this guide delivers the real intel you need: where the matches happen, how to actually get around, which neighborhoods to book, and what to do when you're not watching the world's best players battle it out.`}
            </p>
          </div>

          {/* The Stadium Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-building-4-line text-sky-400"></i>
              The Stadium: Hard Rock Stadium (Miami Stadium)
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
              {`347 Don Shula Drive, Miami Gardens, FL 33056

Miami's World Cup action unfolds at Hard Rock Stadium in Miami Gardens, temporarily rebranded as "Miami Stadium" for the tournament. Located at 347 Don Shula Drive, Miami Gardens, FL 33056, this isn't your typical American football venue awkwardly retrofitted for soccer. The stadium was originally built to FIFA specifications by Miami Dolphins founder Joe Robbie—himself a passionate soccer fan who once owned professional teams in the city.

The numbers tell the story of Miami's commitment: 65,326 permanent seats configured for football/soccer, a partial canopy roof that shields fans from Florida's infamous summer rain and blazing sun, and a world-class natural grass playing surface that's hosted El Clásico between Real Madrid and Barcelona (which set North American soccer attendance records). Recent renovations transformed it into a European-style venue with improved sightlines, premium amenities, and technology upgrades.

Here's what matters for World Cup visitors: the stadium sits in a suburban setting about 15 miles north of downtown Miami and roughly 20 miles from Miami Beach. There's limited accommodation within walking distance, so you'll need a transportation plan. But the stadium itself? It's proven it can handle the biggest stages—six Super Bowls, the Copa América 2024 Final, and Formula One's Miami Grand Prix. FIFA didn't choose Miami Gardens by accident.`}
            </p>
          </div>

          {/* Match Schedule Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-calendar-event-line text-emerald-400"></i>
              The Match Schedule: Seven Games You Don't Want to Miss
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
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
          </div>

          {/* Transportation Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-train-line text-blue-400"></i>
              Getting There: Transportation Made Easy
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
              {`Hard Rock Stadium sits in Miami Gardens, about 15 miles north of downtown Miami and 20 miles from South Beach. While the suburban location means limited walkable accommodation, multiple transportation options connect you to the action.

Your Best Options

1. Brightline + Stadium Shuttle (Recommended)

The smoothest move for match day is taking Brightline—South Florida's sleek intercity rail—to Aventura Station, then hopping the free Hard Rock Stadium Connect shuttle. Shuttles depart 10 minutes after each train arrival and deliver you directly to the stadium gates. This combo avoids traffic nightmares and costs around $15-25 for the train (depending on origin station), plus zero for the shuttle.

Brightline connects Fort Lauderdale, Aventura, and Miami's central districts. If you're staying in Brickell, Downtown, or Wynwood, get to a Brightline station early. These trains will be packed on match days.

2. Metrobus Route 297 (Game Day Special)

On event days, Miami-Dade Transit operates Metrobus Route 297 from Earlington Heights Metrorail Station directly to the stadium. Fare is $2.25 each way—unbeatable value if you're already using the Metrorail system. Important caveat: buses fill up fast. Arrive at Earlington Heights at least 90 minutes before kickoff, or risk standing on the platform watching full buses pass.

From most Miami neighborhoods, you'll need to take Metrorail to Earlington Heights first. The Orange Line connects Miami International Airport to downtown in about 15 minutes; the Green Line serves Dadeland South, Coconut Grove, and beyond. The entire system costs $2.25 per trip (daily cap of $5.65 with contactless payment).`}
            </p>
          </div>

          {/* Rideshare/Taxi Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-taxi-line text-yellow-400"></i>
              3. Rideshare/Taxi
            </h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Uber and Lyft work, but expect <strong>surge pricing</strong> to bite hard after matches end. A typical ride from downtown Miami runs <strong>$35-50+</strong> each way depending on traffic and demand. Post-match, you could wait 45+ minutes and pay double. Many fans book rideshare departures 30-40 minutes into the match to beat the exodus, then watch the final minutes on their phones during the ride. Smart? Maybe. Ideal? No.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Designated rideshare pickup is at <strong>Lot 42 on NW 27th Avenue</strong>—a 25-45 minute walk from stadium exits when crowds surge. Some fans use the free rideshare shuttle to a nearby pickup point, which helps but requires advance reservation.
            </p>
          </div>

          {/* Driving + Parking Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
              <i className="ri-car-line text-blue-400"></i>
              4. Driving + Parking
            </h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              If you're renting a car (which makes sense for exploring South Florida beyond the matches), <strong>stadium parking exists but sells out quickly</strong>. Pre-purchase passes online weeks before your match. Standard parking runs <strong>$40-60</strong>, with VIP lots reaching <strong>$100+</strong>. Traffic in and out is brutal—allow 2+ hours post-match to escape the lot.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>Pro parking hack:</strong> Some fans park at <strong>Aventura Mall</strong> (free) and Brightline to the stadium, or park at Metrorail stations with garages ($4.50/day) and take the Route 297 bus. Both options require advance scouting but save serious money.
            </p>
          </div>

          {/* Accommodation Guide Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-hotel-line text-emerald-400"></i>
              Where to Stay: Neighborhood Playbook for World Cup Visitors
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              Miami's geography spreads across 30+ miles from north to south. Choosing the right base camp determines whether you maximize your trip or spend half of it stuck in traffic. Here's the honest breakdown:
            </p>

            {/* Downtown Miami/Brickell */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-building-line text-blue-400"></i>
                Downtown Miami/Brickell (Best for Transit + Atmosphere)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Why stay here:</strong> You're at the hub of Miami's public transit network (Metrorail, Metromover, buses), walking distance to <strong>Bayfront Park</strong> (expected FIFA Fan Festival location), and surrounded by restaurants, rooftop bars, and nightlife. The energy here during the World Cup will be electric—international flags, outdoor viewing parties, fans from 50 nations mingling in the streets.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Metrorail to Earlington Heights → Route 297 bus (75-90 minutes total). Or Brightline from nearby stations if your hotel is within walking distance.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Mix of business hotels, modern high-rises, and boutique properties. Expect <strong>$275-400/night</strong> for mid-range options during the tournament. Luxury properties like <strong>Hotel AKA Miami Brickell</strong> offer sophistication and bay views; budget travelers should book early or consider hostels like <strong>Miami River Inn</strong> (between Downtown and Little Havana).
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Book early:</strong> Downtown sells out fast. If you secure match tickets in late 2025, reserve accommodation immediately. Consider booking refundable rates given ticket lottery uncertainty.
              </p>
            </div>

            {/* South Beach */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-sun-line text-orange-400"></i>
                South Beach/Miami Beach (Best for Beach + Nightlife)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Why stay here:</strong> This is peak Miami—Art Deco architecture, sugar-sand beaches, poolside parties, and Ocean Drive's legendary people-watching. If you're turning the World Cup into a full Florida vacation, South Beach delivers the postcard experience. Just accept you'll commute to matches.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Most complex option. Take <strong>Metrobus 150 Express</strong> or <strong>Beach Trolley</strong> to mainland transit, then connect to Metrorail/Brightline. Budget <strong>2+ hours each way</strong>. Many fans bite the bullet on rideshare for match days ($60-80 each way with surge pricing).
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Everything from budget motels to five-star oceanfront resorts. <strong>Hotel Continental Miami Beach</strong> offers retro-chic rooms one block from the beach; <strong>Kimpton Angler's Hotel</strong> provides boutique luxury with rooftop pools. Expect <strong>$350-600/night</strong> for oceanfront mid-range during World Cup. Hostels like <strong>Freehand Miami</strong> in Mid-Beach offer dorm beds under $100.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Reality check:</strong> South Beach is gorgeous but geographically inconvenient for stadium access. Best suited for fans attending 1-2 matches who prioritize beach time over logistics.
              </p>
            </div>

            {/* Miami Gardens/Aventura */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-green-400"></i>
                Miami Gardens/Aventura/North Miami (Best for Stadium Proximity)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Why stay here:</strong> Minimize commute stress. You're <strong>10-20 minutes from Hard Rock Stadium</strong> by car, or a short bus ride on non-game days. Aventura offers massive shopping (Aventura Mall) and easy Brightline access.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Drive (15 minutes, pre-book parking), rideshare ($20-30), or local buses. This area is designed for cars, so public transit options thin out.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Accommodation vibe:</strong> Practical, not glamorous. <strong>Stadium Hotel</strong> sits closest to the venue (literally visible from some rooms) with budget-friendly rates and sports bar. <strong>Aloft Miami Aventura</strong> delivers modern design near Aventura Mall. <strong>Miami Lakes Hotel</strong> offers full resort amenities including golf. Expect <strong>$180-320/night</strong> range.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Who this suits:</strong> Hardcore fans attending multiple matches who prioritize stadium convenience over Miami's cultural scene. Also families, since accommodation tends to be more spacious and affordable than downtown.
              </p>
            </div>

            {/* Coral Gables/Coconut Grove */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-leaf-line text-emerald-400"></i>
                Coral Gables/Coconut Grove (Best for Upscale + Cultural)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Why stay here:</strong> Escape the chaos. These elegant neighborhoods south of downtown offer tree-lined streets, boutique hotels, Mediterranean architecture, and attractions like <strong>Vizcaya Museum</strong>. More "refined vacation" than "spring break."
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                <strong>Getting to stadium:</strong> Metrorail connects Coconut Grove to downtown (transfer to Route 297 bus). From Coral Gables, budget 60-90 minutes. Driving on match days: 30-45 minutes depending on traffic.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Accommodation vibe:</strong> Historic inns, upscale hotels, fewer budget options. Expect <strong>$280-450/night</strong> during World Cup. Attracts couples and travelers who want sophistication between matches.
              </p>
            </div>
          </div>

          {/* Beyond the Matches Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-compass-3-line text-purple-400"></i>
              Beyond the Matches: What to Do in Miami
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              You didn't fly thousands of miles to only see 90 minutes of football. Miami delivers world-class experiences when you're not at the stadium:
            </p>

            {/* Must-Do Attractions */}
            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-star-line text-yellow-400"></i>
                Must-Do Attractions
              </h4>
              
              {/* Wynwood Walls */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Wynwood Walls</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The world's coolest outdoor street art museum—free, always open, constantly evolving. Over 35 large-scale murals by internationally renowned artists transform warehouse walls into living canvases. Surrounding Wynwood neighborhood pulses with galleries, craft breweries (Cervecería La Tropical), coffee shops (Panther Coffee), and trendy restaurants. Budget 2-3 hours to explore properly. Easiest access via <strong>Metromover</strong> from downtown or rideshare ($10-15).
                </p>
              </div>

              {/* Vizcaya Museum */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Vizcaya Museum and Gardens</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  This jaw-dropping Italian Renaissance-style villa (built 1916) sits on Biscayne Bay with 10 acres of formal gardens that rival European estates. The museum houses original furnishings, art collections, and photography-worthy courtyards. <strong>Admission: $25</strong>. Perfect for a relaxed morning before evening matches. Located in Coconut Grove; accessible via <strong>Metrorail to Vizcaya Station</strong> (literally named after the museum).
                </p>
              </div>

              {/* Little Havana */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Little Havana</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Miami's Cuban heart beats along <strong>Calle Ocho (SW 8th Street)</strong>. Watch master cigar rollers at work, sip authentic café cubano, catch live salsa music at <strong>Ball & Chain</strong>, and play dominoes at <strong>Máximo Gómez Park</strong>. The neighborhood explodes with energy on <strong>Viernes Culturales</strong> (last Friday of each month)—street festivals with art, music, and food vendors. Budget-friendly exploring; most experiences are free or cheap.
                </p>
              </div>

              {/* Miami Beach & Art Deco */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Miami Beach & Art Deco District</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Beyond tanning, Miami Beach offers architectural history. The <strong>Art Deco Historic District</strong> in South Beach contains over 800 preserved buildings from the 1920s-30s in pastel colors and geometric designs. Free self-guided walking tours via app, or book guided tours ($25-40). After your architecture fix, hit the sand: <strong>South Beach</strong> is iconic but crowded; <strong>North Beach</strong> and <strong>Mid-Beach</strong> offer calmer vibes.
                </p>
              </div>

              {/* PAMM */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Pérez Art Museum Miami (PAMM)</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Striking contemporary art museum on Biscayne Bay with rotating exhibitions and a permanent collection focused on international art of the 20th-21st centuries. <strong>Admission: $18</strong>. The outdoor hanging gardens and waterfront sculpture terrace alone justify a visit. Located in Downtown Miami's Museum Park; walkable from Metromover.
                </p>
              </div>

              {/* Everglades */}
              <div className="mb-6">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  <strong>Everglades National Park</strong>
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  If you have a free day between matches, rent a car and explore this UNESCO World Heritage Site 45 minutes southwest. Airboat tours ($30-60) deliver close encounters with alligators, while hiking trails and kayaking routes reveal one of Earth's most unique ecosystems. Many operators offer hotel pickup in Miami.
                </p>
              </div>

              {/* Practical Touring Tips */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-blue-500"></i>
                  Practical Touring Tips
                </h5>
                <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Miami gets HOT</strong> in June/July (85-92°F / 29-33°C with humidity). Hydrate constantly, wear sunscreen, seek shade midday.</li>
                  <li><strong>Book popular attractions online</strong> to skip lines during World Cup crush.</li>
                  <li><strong>The Metromover is FREE</strong> and covers downtown/Brickell—perfect for attraction-hopping in that zone.</li>
                  <li><strong>Consider a Go Miami Card</strong> (all-inclusive pass) if hitting multiple paid attractions; can save 30-40% versus individual tickets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Food Scene Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-restaurant-line text-red-400"></i>
              Miami Food Scene: Fuel for Match Days
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              Miami's culinary landscape mirrors its demographics—Cuban, Haitian, Colombian, Argentine, Peruvian influences collide with American and contemporary fusion.
            </p>

            {/* Pre-Match Fueling */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-time-line text-green-400"></i>
                Pre-Match Fueling
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Versailles Restaurant</strong> (Little Havana): Iconic Cuban institution. Order the Cubano sandwich, ropa vieja, or pastelitos. Always busy; arrive off-peak.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Zak the Baker</strong> (Wynwood): Artisan bakery with outstanding pastries, sandwiches, coffee. Grab breakfast before stadium-bound transit.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>La Sandwicherie</strong> (South Beach): Late-night legend serving fresh French sandwiches until 5 AM. Perfect post-nightlife fuel.
                  </p>
                </div>
              </div>
            </div>

            {/* Post-Match Celebrating */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-goblet-line text-purple-400"></i>
                Post-Match Celebrating
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Joe's Stone Crab</strong> (South Beach): Miami Beach institution (seasonal, but World Cup timing works). Reserve days ahead.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Coyo Taco</strong> (Wynwood): Elevated street tacos in lively atmosphere. Great for group celebrations.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Garcia's Seafood Grille & Fish Market</strong> (Miami River): Waterfront seafood with local vibe, away from tourist traps.
                  </p>
                </div>
              </div>
            </div>

            {/* Budget-Friendly */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-emerald-400"></i>
                Budget-Friendly
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>1-800-Lucky</strong> (Wynwood): Asian-inspired food hall with multiple vendors, outdoor seating, reasonable prices.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>Fritanga Monimbo</strong> (Little Havana): Authentic Nicaraguan cuisine, massive portions, under $15/person.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    <strong>El Rey de las Fritas</strong> (Little Havana): Cuban fritas (burgers) and batidos (shakes). Total meal under $10.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Information Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-information-line text-blue-400"></i>
              Practical Information: What You Need to Know
            </h3>

            {/* Getting to Miami */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-sky-400"></i>
                Getting to Miami
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                <strong>Miami International Airport (MIA)</strong> sits 8 miles northwest of downtown—about <strong>15-20 minutes by car</strong>, <strong>15 minutes via Metrorail Orange Line</strong> ($2.25), or <strong>$25-30 taxi/rideshare</strong> to downtown. The airport handles 50+ million passengers annually with direct flights from every continent. Book flights early; prices spike as matches approach.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>Fort Lauderdale-Hollywood International Airport (FLL)</strong>, 30 miles north, sometimes offers cheaper flights. From FLL, take <strong>Brightline train</strong> to Miami (30 minutes, $15-20) or drive/rideshare (45-60 minutes, $50-70).
              </p>
            </div>

            {/* Weather & What to Pack */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-sun-line text-orange-400"></i>
                Weather & What to Pack
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Expect <strong>hot, humid, with afternoon thunderstorms</strong>. Daily highs 88-92°F (31-33°C), humidity 70-80%. Pack:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                <li>Lightweight, breathable clothing</li>
                <li>Sunscreen (SPF 50+), sunglasses, hat</li>
                <li>Reusable water bottle (you'll need it)</li>
                <li>Light rain jacket or poncho</li>
                <li>Comfortable walking shoes (you'll be on your feet)</li>
              </ul>
            </div>

            {/* Money & Costs */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-green-400"></i>
                Money & Costs
              </h4>
              <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                <li>Stadium parking: $40-60 pre-purchased</li>
                <li>Mid-range hotel (Downtown): $275-400/night during World Cup</li>
                <li>Meals: $15-25 (casual), $40-70 (mid-range), $100+ (high-end)</li>
                <li>Public transit: $2.25/trip, $5.65 daily cap</li>
                <li>Rideshare (downtown to stadium): $35-50 each way</li>
              </ul>
            </div>
          </div>

          {/* Safety & Connectivity Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-shield-check-line text-green-400"></i>
              Safety & Connectivity
            </h3>

            {/* Safety & Common Sense */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-shield-line text-blue-400"></i>
                Safety & Common Sense
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Miami is generally safe for tourists in popular areas (Downtown, Brickell, South Beach, Wynwood, Coral Gables). Standard urban precautions apply: avoid isolated areas late at night, secure valuables, use legitimate rideshare apps only. The World Cup brings heightened security; expect bag checks at attractions and transport hubs.
              </p>
            </div>

            {/* Phone & Connectivity */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-wifi-line text-purple-400"></i>
                Phone & Connectivity
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Free WiFi available at: Metrorail/Metrobus, Miami International Airport, most hotels, cafes, and restaurants. Consider purchasing a US SIM card or activating international roaming if staying multiple days. 5G coverage is excellent throughout metro Miami.
              </p>
            </div>

            {/* Language */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-translate-2 text-orange-400"></i>
                Language
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                English is official, but <strong>Spanish dominates</strong> in many neighborhoods. Bilingual signage is common. Basic Spanish phrases help in Little Havana, Cuban restaurants, and with some service workers.
              </p>
            </div>
          </div>

          {/* FIFA Fan Festival & Match Day Atmosphere Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-football-line text-red-400"></i>
              FIFA Fan Festival & Match Day Atmosphere
            </h3>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              While official details are still being finalized, FIFA typically establishes a massive <strong>Fan Festival</strong> in each host city—a free, family-friendly zone with giant screens, live music, food vendors, and sponsor activations. Miami's is expected at <strong>Bayfront Park</strong> in Downtown Miami, offering stunning Biscayne Bay views and central location.
            </p>

            {/* Why Fan Festivals Matter */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-tv-line text-blue-400"></i>
                Why Fan Festivals Matter
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                No match ticket? The Fan Festival becomes your World Cup. Tens of thousands gather to watch matches on enormous screens, surrounded by flags, face paint, and fans from every nation. The energy rivals stadium atmosphere. Arrive early for popular matches; capacity limits apply.
              </p>
            </div>

            {/* Neighborhood Watch Parties */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-community-line text-green-400"></i>
                Neighborhood Watch Parties
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Expect every sports bar, brewery, and restaurant with TVs to become unofficial fan zones. Wynwood, South Beach, Brickell, and Little Havana will buzz with street parties, especially for knockout rounds. Many establishments offer:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                <li>Outdoor projector screens</li>
                <li>Themed menus (match-day specials)</li>
                <li>Extended hours for late matches</li>
                <li>Live DJs between matches</li>
              </ul>
            </div>

            {/* Cultural Vibe */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-heart-line text-pink-400"></i>
                Cultural Vibe
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Miami's soccer obsession runs deep—Inter Miami CF just brought Lionel Messi to MLS, and the city regularly hosts international friendlies between global powerhouses. Expect knowledgeable, passionate crowds who understand the game. The city's Latin American demographic means matches involving Argentina, Brazil, Colombia, Mexico, or Uruguay will feel like home fixtures.
              </p>
            </div>
          </div>

          {/* Booking Strategy Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-calendar-check-line text-emerald-400"></i>
              Booking Strategy: How to Plan Your World Cup Trip
            </h3>

            {/* Timeline for Success */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-time-line text-blue-400"></i>
                Timeline for Success
              </h4>

              {/* Now (Late 2025) */}
              <div className="mb-6">
                <h5 className="text-md font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-calendar-line text-orange-400"></i>
                  Now (Late 2025)
                </h5>
                <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                  <li>Register with FIFA for ticket lottery (draws begin September 2025)</li>
                  <li>Research hotel options but hold on booking until ticket confirmation</li>
                  <li>Set airfare price alerts; consider booking refundable fares if confident</li>
                </ul>
              </div>

              {/* Upon Securing Tickets */}
              <div className="mb-6">
                <h5 className="text-md font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-ticket-line text-green-400"></i>
                  Upon Securing Tickets (Late 2025/Early 2026)
                </h5>
                <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Immediately book accommodation</strong> (prices climb daily after tickets awarded)</li>
                  <li><strong>Finalize flights</strong> (use points/miles if possible to reduce costs)</li>
                  <li><strong>Reserve rental car</strong> if planning South Florida exploration beyond matches</li>
                  <li><strong>Pre-purchase stadium parking</strong> if driving</li>
                </ul>
              </div>

              {/* 2-4 Weeks Before Departure */}
              <div className="mb-6">
                <h5 className="text-md font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-suitcase-line text-purple-400"></i>
                  2-4 Weeks Before Departure
                </h5>
                <ul className="text-slate-700 dark:text-slate-200 leading-relaxed space-y-2 list-disc list-inside">
                  <li>Book popular restaurants requiring reservations (Joe's Stone Crab, upscale dining)</li>
                  <li>Purchase attraction tickets online for fast-track entry</li>
                  <li>Confirm transit plans and download Miami transit apps</li>
                  <li>Check stadium clear bag policy and purchase compliant bag</li>
                </ul>
              </div>
            </div>

            {/* Affiliate Opportunity Moment */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-star-line text-yellow-500"></i>
                Pro Booking Tip
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Once you know your travel dates, <strong>book hotels through trusted platforms</strong> offering World Cup packages or flexible cancellation policies. Properties near downtown Miami, Brightline stations, and Metrorail access book fastest. Comparison shopping across multiple booking engines often reveals 10-20% price differences for identical rooms—worth the 15 minutes research.
              </p>
            </div>
          </div>

          {/* Why Miami Wins Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 md:p-8 border border-red-200 dark:border-red-800">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-trophy-line text-yellow-500"></i>
              Why Miami Wins the World Cup Host City Lottery
            </h3>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Let's be honest: some World Cup host cities are purely functional—you watch matches, maybe see a museum, then move on. Miami is different. This city was built for celebration. The nightlife doesn't quit. The beaches deliver postcard perfection. The food scene rivals any global capital. And unlike some North American hosts where soccer is niche, Miami <strong>breathes</strong> football.
            </p>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              The stadium itself reflects this DNA—purpose-built for the sport, repeatedly hosting international matches that prove South Florida understands the beautiful game. When 65,000 fans pack Hard Rock Stadium for a World Cup knockout match in July 2026, with South Florida's energy spilling into every neighborhood, you'll understand why FIFA chose this city.
            </p>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Seven matches spanning four weeks means you can build an entire vacation around the tournament. Attend an early group stage fixture, explore the Keys, return for a quarterfinal. Or plant yourself downtown for the full month, sampling different neighborhoods daily, catching matches at the Fan Festival, and experiencing Miami at peak global attention.
            </p>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              The logistics require planning—this isn't a compact European city where you walk everywhere—but the payoff is enormous. Where else can you watch world-class football in the morning, snorkel the reef by afternoon, dance salsa in Little Havana at sunset, then watch another match under the lights?
            </p>

            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <p className="text-lg font-semibold leading-relaxed">
                <strong>Book early, plan transit thoughtfully, embrace the heat, and prepare for one of the most memorable World Cup experiences any host city can offer.</strong>
              </p>
            </div>
          </div>

          {/* Final Checklist Section */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <i className="ri-checkbox-line text-emerald-400"></i>
              Final Checklist: Your Miami World Cup Essentials
            </h3>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <i className="ri-checkbox-circle-fill text-emerald-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Match tickets secured through FIFA official channels</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <i className="ri-checkbox-circle-fill text-blue-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Hotel booked in Downtown/Brickell for transit access (or Miami Gardens for stadium proximity)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <i className="ri-checkbox-circle-fill text-purple-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Flights confirmed to MIA (or FLL with Brightline backup)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                <i className="ri-checkbox-circle-fill text-orange-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Stadium parking pre-purchased OR transit plan mapped (Brightline + shuttle)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-950/30 rounded-lg border border-pink-200 dark:border-pink-800">
                <i className="ri-checkbox-circle-fill text-pink-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Attraction tickets purchased online (Vizcaya, PAMM, etc.)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                <i className="ri-checkbox-circle-fill text-teal-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Miami transit app downloaded (GO Miami-Dade)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <i className="ri-checkbox-circle-fill text-indigo-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Portable charger packed (your phone will die by halftime otherwise)</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <i className="ri-checkbox-circle-fill text-yellow-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Sunscreen, hydration pack, comfortable shoes ready</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <i className="ri-checkbox-circle-fill text-red-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Restaurant reservations made for splurge meals</strong>
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-950/30 rounded-lg border border-slate-200 dark:border-slate-800">
                <i className="ri-checkbox-circle-fill text-slate-500 text-xl mt-0.5"></i>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Clear stadium-compliant bag purchased (12" x 6" x 12" max)</strong>
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                The 2026 FIFA World Cup in Miami isn't just another sporting event—it's a once-in-a-lifetime collision of the world's most popular sport with one of America's most dynamic cities. Whether you're there for football, culture, beaches, or all three, Miami delivers.
              </p>
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text">
                ¡Vamos! ⚽🌴🌊
              </div>
            </div>
          </div>

          {/* Got It Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={() => navigate('/cities')}
              className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 px-6 py-3"
            >
              <i className="ri-check-line mr-2"></i>
              Got It
            </button>
          </div>

        </section>

        <Footer />
      </div>
    </>
  );
}