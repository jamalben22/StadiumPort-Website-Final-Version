import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export function VancouverCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* Hero Section - MetLife-style visual, verbatim title */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vancouver: Where Mountains Meet Ocean Meet the Pitch
          </h1>
        </div>
      </div>

      {/* Main Content - Part 1/5 verbatim */}
      <main className="p-8 md:p-12 space-y-12">
        {/* Seven Matches Under the World's Largest Retractable Roof */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Seven Matches Under the World's Largest Retractable Roof
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              On June 13, 2026, Vancouver kicks off its FIFA World Cup journey with the first of seven matches at BC Place Stadium—and this city is about to remind the world why it's called "The Jewel of the Pacific." The venue features a retractable roof revealing over 7,500 square metres of open sky, making it the only World Cup stadium where you might watch football under actual blue sky one moment and complete weather protection the next. Welcome to Vancouver, where nature and innovation create something spectacular.
            </p>
            <p>
              Vancouver will host five group stage matches, including two Team Canada matches, one round of 32 match, and one round of 16 match, with the action running from mid-June through early July. BC Place holds 54,500 seats surrounded by more than 50 suites and hospitality lounges, creating an intimate yet electric atmosphere that will showcase Canada's Pacific coast to billions of viewers worldwide.
            </p>
          </div>
        </div>

        {/* The Stadium That Defies Expectations */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            The Stadium That Defies Expectations
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Since opening in 1983, BC Place remains a jaw-dropping piece of architecture situated in the heart of the city's business and entertainment district. But here's what makes it truly special for World Cup 2026: the world's second-largest 4-sided centre hung HD video board suspended above the field, surrounded by over 1,250 digital screens making BC Place one of the most technologically advanced venues in the world.
            </p>
            <p>
              The retractable roof isn't just functional—it's a marvel. The cable-supported fabric roof is the largest of its kind in the world, specifically designed and engineered for Vancouver's climate. The retractable centre portion measures approximately 100 meters by 85 meters—effectively covering the entire playing surface, while seated guests remain covered rain or shine. The roof takes approximately 20 minutes to open or close, and match organizers will determine its position based on weather conditions and the desired atmosphere.
            </p>
            <p>
              This stadium has serious pedigree. BC Place hosted the electric FIFA Women's World Cup Canada 2015 final, multiple CFL Grey Cup Championships, and the stunning Opening and Closing Ceremonies of the 2010 Olympic Winter Games. It knows how to handle big moments.
            </p>
          </div>
        </div>

        {/* Getting to BC Place: Easier Than You'd Think */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting to BC Place: Easier Than You'd Think
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              BC Place Stadium sits at 777 Pacific Boulevard in downtown Vancouver, and public transit makes reaching it beautifully simple.
            </p>
            <p>
              <strong>Stadium-Chinatown SkyTrain Station (Your Best Route)</strong>: Stadium-Chinatown is an elevated station on the Expo Line located at the eastern entrance of the Dunsmuir Tunnel, serving Downtown Vancouver. Upon exiting the SkyTrain, walk up the stairs to Beatty Street and turn left—Gates A, B, and H are approximately a five-minute walk up Beatty Street. Alternatively, head down the stairs to Expo Boulevard, and the stadium is five minutes to the right.
            </p>
            <p>
              <strong>Transit Tip</strong>: The elevator at the Stadium-Chinatown SkyTrain Station is expected to be out of service from October 21, 2025, for about four months. If you require elevator access during this period, plan an extra 15-20 minutes to detour through Burrard Street Station.
            </p>
            <p>
              <strong>Multiple Bus Routes</strong>: The 17, 210, 211, 214, 22, 250, and 253 buses all stop near BC Place, connecting you from various Vancouver neighborhoods. Download the TransLink app before arriving—it shows real-time arrivals and helps navigate the system like a local.
            </p>
          </div>
        </div>

        {/* Where to Stay: Your Pacific Coast Home Base */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Where to Stay: Your Pacific Coast Home Base
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Vancouver's accommodation landscape balances urban sophistication with waterfront luxury, and for World Cup 2026, location matters.
            </p>
            <p>
              <strong>Coal Harbour Luxury</strong>: The Fairmont Pacific Rim stands as Vancouver's definitive five-star experience. This Forbes Five-Star hotel features 367 guest rooms and suites with dreamy Stearns & Foster beds, spacious spa-like marble bathrooms, and a variety of city and mountain views. The property features an 8,500 square foot Willow Stream Spa, rooftop pool and deck with spacious cabanas, and a full fitness center with outdoor terrace featuring Jacuzzis and meditation pods. The location near Canada Place puts you steps from the SkyTrain and a short ride to BC Place.
            </p>
            <p>
              <strong>Downtown Rosewood Hotel Georgia</strong>: Home to the acclaimed Hawksworth Restaurant, this historic property combines old-world elegance with modern luxury. The location on Georgia Street positions you perfectly for accessing the Stadium-Chinatown SkyTrain station.
            </p>
            <p>
              <strong>Westin Bayshore</strong>: Situated on the waterfront near Stanley Park, this property offers complimentary shuttle service and spectacular views. It's slightly farther from BC Place but provides a resort-like atmosphere within the city.
            </p>
            <p>
              <strong>Mid-Range Excellence</strong>: Look at properties along Robson Street or near the Vancouver Convention Centre. These neighborhoods connect easily via SkyTrain or bus to BC Place while keeping you in the heart of downtown dining and shopping.
            </p>
            <p>
              <strong>Book immediately</strong>. Vancouver's hotel inventory fills fast during major events, and World Cup 2026 will create unprecedented demand. Properties are already accepting reservations for June 2026—waiting means settling for less desirable options or paying premium prices.
            </p>
          </div>
        </div>

        {/* June in Vancouver: What the Weather Will Bring */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            June in Vancouver: What the Weather Will Bring
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Daytime temperatures usually reach 20°C in Vancouver in June, falling to 11°C at night, with normally 8 hours of bright sunshine each day. But here's what you really need to know: Vancouver in June brings notable rainfall, with an average of 19 rainy days and total precipitation of 76.9mm.
            </p>
          </div>
        </div>

        {/* PART 2/5: Packing & Beyond Football */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-suitcase-line text-indigo-400 dark:text-indigo-300 text-4xl"></i>
            Pack strategically
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Pack strategically</strong>: Layers are essential. A light waterproof jacket becomes your best friend—Vancouver's coastal location means weather can shift quickly. Comfortable walking shoes rated for wet conditions, because you'll explore this city on foot. Sunglasses and sunscreen for those eight daily sunshine hours (UV can be stronger than you expect near water). A compact umbrella fits in any day bag.
            </p>
            <p>
              The good news? BC Place should be considered an 'open-air' stadium whether the roof is open or closed, and guests are encouraged to dress accordingly based on the temperature outdoors. Even if it's pouring outside, you'll be dry inside—but dress for the actual outdoor temperature.
            </p>
          </div>
        </div>

        {/* Beyond Football: Why Vancouver Will Steal Your Heart */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            Beyond Football: Why Vancouver Will Steal Your Heart
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              If you're flying to Vancouver just for a match and leaving immediately, you're making a terrible mistake. This city demands exploration.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Stanley Park (Non-Negotiable)</h3>
            <p>
              Canada's largest city park spans over 400 hectares of coastal rainforest and seawall trails. The 9-kilometer Seawall loop offers stunning views of the North Shore Mountains, English Bay, and downtown skyline. The Stanley Park Totem Poles at Brockton Point are one of British Columbia's most visited tourist attractions, brought to life through First Nations artistry. Rent a bike near the park entrance and circle the entire seawall in about two hours—it's one of the world's most scenic urban bike rides.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Capilano Suspension Bridge Park</h3>
            <p>
              Cross the legendary Suspension Bridge, walk through a rainforest canopy with Treetops Adventure, experience an adrenaline-pumping walk above the canyon with Cliffwalk and do so much more. This attraction sits in North Vancouver, about 20 minutes from downtown by car or bus. The bridge stretches 137 meters long and hangs 70 meters above the Capilano River—not for the faint of heart, but absolutely worth the adrenaline rush. Budget about 90 minutes for the full experience.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Granville Island (Food Lover's Paradise)</h3>
            <p>
              Granville Island Public Market is a haven for good food and shopping, featuring over 50 vendors selling everything from fresh BC salmon to artisan cheeses, local art, and live music. This isn't technically an island—it's a peninsula on False Creek—but who cares when the food is this good? Come hungry. The Aquabus water taxi from downtown offers scenic transit directly to the island.
            </p>
            <p>
              Saturday mornings are prime time here. Arrive by 10 AM, grab coffee from a market vendor, and wander through the stalls before the afternoon crowds arrive. Local tip: the public market operates daily, but surrounding galleries and shops often close Mondays.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Gastown (Where Vancouver Began)</h3>
            <p>
              This historic neighbourhood boasts cobblestone streets lined with hip boutiques, inviting restaurants and traditional First Nations art galleries—and has been entertaining residents and visitors alike for over a century. The famous steam clock whistles on the hour (yes, it's touristy, but still worth seeing). Gastown's restaurants range from casual cafes to fine dining, and the neighborhood comes alive at night with bars and lounges.
            </p>
          </div>
        </div>

        {/* Vancouver's Dining Scene: World-Class and Worth Every Dollar */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            Vancouver's Dining Scene: World-Class and Worth Every Dollar
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              This city's culinary reputation is built on fresh Pacific seafood, Asian influences, and farm-to-table philosophy that takes local sourcing seriously.
            </p>
            <p>
              <strong>Miku (The Aburi Experience)</strong>: Originally located on West Hastings St in Coal Harbour, Miku first introduced Aburi-style cuisine to Vancouver in 2008. Executive Chef Kazuhiro Hayashi takes advantage of fresh, regional ingredients as well as Ocean Wise seafood options to showcase the best of what Vancouver has to offer. The flame-seared sushi technique creates caramelized flavors you won't find anywhere else. Book the waterfront patio if weather cooperates—views of Canada Place and the North Shore Mountains are spectacular.
            </p>
            <p>
              <strong>Hawksworth Restaurant (Vancouver's Finest)</strong>: Since bursting on to the scene in 2011, Hawksworth Restaurant has earned its place amongst the finest restaurants in the world, winning multiple accolades from renowned local and international authorities. Located in the Rosewood Hotel Georgia, the dining room is a Vancouver landmark that is steeped in history, with menus conceived by celebrated Canadian Chef David Hawksworth showcasing ingredient-led contemporary cuisine firmly rooted in the classics. This is where you celebrate a Canada victory or drown your sorrows in style. Reserve well in advance.
            </p>
            <p>
              <strong>Botanist (Hotel Dining Elevated)</strong>: Located at the Fairmont Pacific Rim, Botanist features Mediterranean-inspired cooking with Pacific Northwest ingredients. The space transitions seamlessly from restaurant to bar, with floor-to-ceiling windows overlooking Coal Harbour. The cocktail program alone justifies a visit—bartenders treat mixology like art.
            </p>
            <p>
              <strong>Pre-Match Fuel Near BC Place</strong>: The neighborhoods around BC Place—particularly nearby Yaletown—feature dozens of casual options perfect for building pre-game energy. Walk south on Hamilton Street toward Yaletown for brewpubs, pizza spots, and sports bars filled with fellow fans.
            </p>
          </div>
        </div>

        {/* Getting Around Like a Vancouverite */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting Around Like a Vancouverite
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Vancouver's TransLink system operates SkyTrains, buses, and SeaBus ferries. Purchase a Compass Card (the tap-to-pay transit card) at any SkyTrain station or convenience store displaying the Compass logo. Load it with CAD $40-50 for a weekend—single fares run about $3.10 for adults in Zone 1 (downtown).
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">The SkyTrain System</h3>
            <p>
              The Expo Line connects Stadium-Chinatown directly to Waterfront Station (downtown core), Commercial-Broadway (hip neighborhood), and points east. The Canada Line runs from Vancouver International Airport to downtown in 25 minutes—take it instead of taxis or rideshares. Trains run frequently from early morning until after midnight.
            </p>
          </div>
        </div>

        {/* PART 3/5: Water Taxis */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-ship-line text-sky-400 dark:text-sky-300 text-4xl"></i>
            Water Taxis
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Water Taxis</strong>: Aquabus and False Creek Ferries operate small boats connecting downtown to Granville Island, Science World, and Olympic Village. These aren't technically part of TransLink but accept Compass Cards. Riding a water taxi beats sitting in traffic and offers fantastic photo opportunities.
            </p>
          </div>
        </div>

        {/* PART 3/5: Walking */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-walk-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Walking
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Walking</strong>: Downtown Vancouver is eminently walkable. From the stadium to Gastown takes 15 minutes on foot. To Stanley Park's entrance from downtown is about 20 minutes. Wear comfortable shoes—the city rewards wandering.
            </p>
          </div>
        </div>

        {/* PART 3/5: Practical Vancouver Intelligence */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-information-line text-indigo-400 dark:text-indigo-300 text-4xl"></i>
            Practical Vancouver Intelligence
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Currency &amp; Tipping</strong>: Canada uses the Canadian dollar (CAD). Credit cards work everywhere, but carry some cash for food trucks and market vendors. Tipping culture mirrors the U.S.—15-20% at restaurants is standard. Bartenders expect $1-2 per drink.
            </p>
            <p>
              <strong>Language</strong>: English is the primary language, but Vancouver's diversity means you'll hear Mandarin, Cantonese, Punjabi, and dozens of other languages throughout the city. Service industry workers overwhelmingly speak English.
            </p>
            <p>
              <strong>Safety</strong>: Vancouver ranks as one of North America's safest major cities. The downtown core, including areas around BC Place, remains safe day and night. Standard urban awareness applies—don't leave valuables visible in cars, watch your belongings in crowded areas—but violent crime against tourists is exceptionally rare.
            </p>
            <p>
              <strong>Drinking Culture</strong>: British Columbia has government-run liquor stores (BC Liquor Stores) alongside private shops. Beer and wine are available in many grocery stores. Drinking age is 19. Bars close around 2-3 AM on weekends.
            </p>
          </div>
        </div>

        {/* PART 4/5: World Cup Specific Information */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            World Cup Specific Information
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>FIFA Tickets</strong>: Official ticket sales operate through FIFA.com/tickets. Additional ticket release phases will continue closer to the tournament. Register even if you missed early sales—returns and last-minute availability can appear.
            </p>
            <p>
              <strong>Fan Zones</strong>: Vancouver will designate official FIFA Fan Festival locations for free live broadcasts, creating festival atmospheres throughout the tournament. These typically feature food vendors, entertainment, and massive screens. Follow vancouverfwc26.ca for official announcements about fan zone locations.
            </p>
            <p>
              <strong>Airport to Downtown</strong>: Vancouver International Airport (YVR) sits 12 kilometers south of downtown. The Canada Line SkyTrain connects the airport to downtown's Waterfront Station in approximately 25 minutes. Trains run every 6-8 minutes during peak hours, cost around CAD $11, and operate until past midnight. This is faster and cheaper than taxis or rideshares—skip the ground transportation line and head directly to the SkyTrain platform.
            </p>
          </div>
        </div>

        {/* PART 5/5: Why Vancouver Deserves More Than a Match Day */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-heart-2-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            Why Vancouver Deserves More Than a Match Day
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Here's what makes this World Cup host city different: Vancouver isn't trying to be anything other than itself. It's not Toronto's cosmopolitan energy or Montreal's European charm—it's a Pacific Rim city where mountains rise directly from the ocean, where you can ski Grouse Mountain in the morning and sail False Creek in the afternoon, where Asian cuisine rivals anything you'll find in Asia itself.
            </p>
            <p>
              The city wears its environmental consciousness proudly—you'll notice extensive bike infrastructure, aggressive recycling programs, and a genuine commitment to sustainability that shapes everything from restaurant sourcing to transit policy. This isn't performative; it's how Vancouver operates.
            </p>
            <p>
              June 2026 offers Vancouver a chance to showcase itself during the best possible moment. There are normally 8 hours of bright sunshine each day in Vancouver in June, the gardens burst with color, and the city's outdoor energy peaks. Patios fill, beaches come alive, and locals pour into Stanley Park and along the seawall.
            </p>
            <p>
              Extend your stay. Seriously. Arrive two days before your match and leave two days after. Take the ferry to Victoria (British Columbia's capital on Vancouver Island) for a day trip. Drive the Sea-to-Sky Highway to Whistler. Explore the trails on the North Shore. Kayak False Creek at sunset. Eat your way through Richmond's authentic Asian food scene (often called the most authentic Chinese food outside Asia).
            </p>
            <p>
              Book your flight now. Reserve your hotel today. Buy your match tickets the moment they're available. June 13 through July 7, 2026, Vancouver will show the world why it's consistently rated among the planet's most liveable cities—and you'll understand why people who visit rarely want to leave.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}