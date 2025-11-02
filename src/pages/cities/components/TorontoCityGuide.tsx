import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export function TorontoCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* Hero Section - MetLife-style visual, verbatim title */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Toronto: Your Complete Guide to Canada's World Cup Debut
          </h1>
        </div>
      </div>

      {/* Main Content - Part 1/5 verbatim */}
      <main className="p-8 md:p-12 space-y-12">
        {/* Making History at BMO Field */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Making History at BMO Field
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Toronto isn't just hosting the 2026 FIFA World Cup—it's hosting <strong>history</strong>. On June 12, 2026, Canada's Men's National Team will play their very first FIFA World Cup match on home soil, and you'll want to be there when it happens. Picture this: 45,736 fans packed into Toronto Stadium (BMO Field) at Exhibition Place, the energy electric as the Maple Leaf flag waves across a sea of red. This isn't just another match—it's a national milestone, and Toronto is the stage.
            </p>
            <p>
              The city will host six World Cup matches total between June and July 2026, making it one of just two Canadian host cities (alongside Vancouver). BMO Field is undergoing a major transformation, adding over 17,000 temporary seats to reach the tournament capacity of 45,736—intimate enough to feel the roar, big enough to create unforgettable atmosphere.
            </p>
          </div>
        </div>

        {/* Why Toronto Will Win Your Heart */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            Why Toronto Will Win Your Heart
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              If you've never been to Toronto, prepare yourself. Canada's largest city is famously nicknamed "The World in a City," and once you're here, you'll understand why. This is a place where over 200 languages are spoken daily, where you can eat authentic dim sum for breakfast, Italian porchetta for lunch, and Caribbean jerk chicken for dinner—all within walking distance of each other.
            </p>
            <p>
              The city sits on the shores of Lake Ontario, giving it a waterfront vibe that balances its urban energy. The iconic CN Tower—standing 553 meters tall—dominates the skyline and offers panoramic views that, on clear days, stretch all the way to Niagara Falls. But Toronto's charm isn't just in its big landmarks. It's in the cobblestone streets of the Distillery District, the bohemian energy of Kensington Market, and the tree-lined neighborhoods where Victorian houses meet modern coffee culture.
            </p>
          </div>
        </div>

        {/* Getting to BMO Field: Easier Than You Think */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting to BMO Field: Easier Than You Think
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              BMO Field sits on the grounds of Exhibition Place, about 3 kilometers west of downtown Toronto, right on the lakefront. Here's the best part: you don't need a car, and honestly, you probably don't want one on game day.
            </p>
            <p>
              <strong>The GO Train (Your Best Bet)</strong>: Exhibition GO Station is directly connected to BMO Field, sitting one stop west of Union Station on the Lakeshore West line. Trains run every 30 minutes, and the journey from downtown Union Station takes just 7 minutes. During World Cup matches, expect increased service. Just follow the crowds through the pedestrian tunnel, and you'll emerge right at Exhibition Place.
            </p>
            <p>
              <strong>TTC Streetcars</strong>: The 509 Harbourfront and 511 Bathurst streetcars both stop at Exhibition Loop, just steps from the stadium entrance. These are your budget-friendly options, connecting directly to Toronto's extensive subway system.
            </p>
            <p>
              <strong>Pro tip</strong>: Download the Transit app before you arrive—it shows real-time arrivals for TTC, GO Transit, and everything else. Torontonians swear by it.
            </p>
          </div>
        </div>

        {/* Where to Stay: Your Tournament Home Base */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Where to Stay: Your Tournament Home Base
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Toronto's accommodation scene is as diverse as the city itself, and for World Cup 2026, location matters. Here's the insider breakdown:
            </p>
            <p>
              <strong>Entertainment District (Prime Tournament Zone)</strong>: This is where you want to be. The Toronto Marriott City Centre sits inside Rogers Centre, steps from the CN Tower, Ripley's Aquarium, and Metro Toronto Convention Centre. The Sheraton Centre Toronto Hotel occupies the financial district with 130,000 square feet of space and features a stunning 43rd-floor Club Lounge with sweeping downtown views. Both connect to the PATH system—Toronto's underground pedestrian network linking hotels, restaurants, and transit without stepping outside.
            </p>
            <p>
              <strong>Waterfront Luxury</strong>: Hotel X Toronto redefines lakefront hospitality with a 55-foot partially indoor-outdoor rooftop pool and six acres of landscaped gardens. It offers complimentary house car service within 5 kilometers, meaning free rides to BMO Field.
            </p>
            <p>
              <strong>Family-Friendly Downtown</strong>: Chelsea Hotel has been a Toronto landmark since 1975, offering a Family Fun Zone with a 130-foot indoor waterslide and exclusive discount programs to attractions like Ripley's Aquarium and the Royal Ontario Museum.
            </p>
            <p>
              <strong>Budget-Conscious Travelers</strong>: Look at hotels near Union Station or in the Financial District. You'll trade some walkability for better rates, but the Delta Hotels Toronto connects via the PATH system and sits within walking distance of major transportation hubs.
            </p>
            <p>
              <strong>Book early</strong>. World Cup demand will be intense, and Toronto's hotel scene fills fast during major events. June 2026 rooms are already on booking sites—don't wait.
            </p>
          </div>
        </div>

        {/* The Weather Factor: Pack Smart */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            The Weather Factor: Pack Smart
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              June in Toronto typically sees daytime temperatures around 24°C (75°F), dropping to about 13°C (55°F) at night, with normally 9 hours of bright sunshine daily. Toronto experiences significant rainfall in June, averaging over 20 rainy days, so layers are your friend.
            </p>
            <p>
              <strong>What to pack</strong>: Light jacket or hoodie for evening matches, comfortable walking shoes (you'll clock 15,000+ steps daily), and definitely bring a compact rain jacket or umbrella. Toronto weather can shift quickly, especially near the lake. Sunscreen is essential—those 9 hours of June sunshine are no joke, particularly if you're sitting in open-air sections at BMO Field.
            </p>
          </div>
        </div>

        {/* Beyond the Stadium: Why You'll Want Extra Days */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Beyond the Stadium: Why You'll Want Extra Days
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Here's the truth: if you're flying to Toronto just for a match and leaving immediately, you're missing the point. This city rewards exploration.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">The Distillery District (Must-Visit)</h3>
            <p>
              The Distillery District is a restored Victorian industrial complex spanning 5 hectares with over 40 heritage buildings now housing galleries, artists' studios, and restaurants. Originally the Gooderham and Worts whiskey distillery, it once produced nearly half of Ontario's total spirits volume. Today, it's pedestrian-only cobblestone streets, brick warehouses, and some of Toronto's best dining. Sunday afternoons here are magical—live music, street performers, and that perfect golden-hour lighting for photos.
            </p>
          </div>
        </div>

        {/* CN Tower & Rogers Centre */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            CN Tower & Rogers Centre
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              The CN Tower isn't just Toronto's signature landmark—it features the EdgeWalk experience, where brave visitors walk hands-free along a 1.5-meter-wide ledge at 356 meters, the world's highest full-circle open-air walk. The 360 Restaurant rotates once every 72 minutes, offering seasonal Canadian cuisine with Ontario wine pairings. Book dinner here, and observation deck access is complimentary.
            </p>
            <p>
              Right at the tower's base, Rogers Centre is home to the Toronto Blue Jays—Canada's only Major League Baseball team. If you're here in June, there's a good chance the Jays are in town. Catching a baseball game before or after your World Cup match? That's a sports fan's dream weekend.
            </p>
          </div>
        </div>

        {/* St. Lawrence Market */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-store-3-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            St. Lawrence Market
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              National Geographic declared St. Lawrence Market the "Best Food Market in the World" in 2011, beating London's Borough Market and New York's Union Square Greenmarket. Since 1803, this market has housed 200 vendors selling everything from local mustard to international cheeses and fresh pasta. Come hungry, come early (Saturday mornings are prime time), and don't leave without trying the famous peameal bacon sandwich—it's a Toronto rite of passage.
            </p>
          </div>
        </div>

        {/* Neighborhood Hopping: Where the Real Toronto Lives */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-community-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Neighborhood Hopping: Where the Real Toronto Lives
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Kensington Market</h3>
              <p>
                This distinctive multicultural neighborhood was designated a National Historic Site of Canada in November 2006. Originally established in the 1920s by Jewish families selling goods from stands outside their homes, today it showcases influences from Asia, the Caribbean, Europe, and Latin America. Vintage clothing stores line Kensington Avenue in colorful Victorian houses, while international food stalls serve everything from Mexican burritos to Indian tapas. It's chaotic, eclectic, and absolutely Toronto.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Yorkville</h3>
              <p>
                Once a hippie neighborhood, Yorkville is now Toronto's fashion district, sometimes called the "Mink Mile" for its designer boutiques including Tiffany, Chanel, and Hermès lining Bloor Street. Even if luxury shopping isn't your thing, the people-watching here is elite, and the nearby Royal Ontario Museum (ROM) is one of Canada's premier museums with over 13 million art objects and natural history specimens.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">The Entertainment District</h3>
              <p>
                Stretching from Queen Street West to Front Street, University Avenue to Spadina Avenue, the Entertainment District includes the CN Tower, Scotiabank Arena (home to the Raptors and Maple Leafs), and numerous theaters and performance venues. After matches, this is where the city parties—restaurants, bars, and clubs stay buzzing until the early hours.
              </p>
            </div>
          </div>
        </div>

        {/* Eating Your Way Through Toronto */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-restaurant-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            Eating Your Way Through Toronto
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              This is where Toronto becomes dangerous for your wallet and your diet—but in the best way possible.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Pre-Match Fuel</h3>
              <p>
                Just north of Exhibition Place in Liberty Village, you'll find Local Public Eatery, The Craft Brasserie, Liberty Commons, Left Field Brewery, and Brazen Head Irish Pub—all easy walks to BMO Field and perfect for building pre-game energy with fellow fans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">St. Lawrence Market Essentials</h3>
              <p>
                St. Urbain serves wood-fired Montreal-style bagels and became TikTok famous for the Craigle—part croissant, part bagel. Churrasco of St. Lawrence has operated since 1989, serving authentic Portuguese BBQ chicken and Bifana sandwiches. Their Pasteis de Nata rival anything you'll find in Portugal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Downtown Gems</h3>
              <p>
                The dining scene here is world-class. Amano Trattoria near Union Station, led by acclaimed Chef Michael Angeloni, consistently ranks among Toronto's top Italian destinations with seasonal menus using the freshest ingredients. HOTHOUSE in the St. Lawrence neighborhood offers multicultural menus reflecting Toronto's diversity, featuring their famous Sunday brunch buffet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Can't-Miss Toronto Experiences</h3>
              <p>
                The city's food scene reflects its incredible diversity. You'll find authentic Chinatown dim sum, Little Italy trattorias, Greek tavernas, Caribbean jerk chicken spots, and innovative fusion restaurants all within the downtown core. St. Lawrence Market operates Tuesday through Saturday, so plan accordingly—it's closed Sunday and Monday.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Around Like a Local */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-bus-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting Around Like a Local
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Toronto's transit system takes getting used to, but it's comprehensive. The TTC (Toronto Transit Commission) operates subways, streetcars, and buses. You can access BMO Field via the Exhibition GO station or TTC streetcars from Union Station. A PRESTO card (Toronto's transit payment card) is your friend—available at Union Station and any convenience store with a green-and-white PRESTO sign. Load it with CAD $50 and you're set for a long weekend.
            </p>
            <p>
              <strong>The PATH System</strong>: This is Toronto's secret weapon—over 30 kilometers of underground walkways connecting subway stations, office towers, hotels, and shopping centers. In June, you won't need it for weather, but it's the fastest way to navigate downtown during busy periods.
            </p>
            <p>
              <strong>Toronto Pearson Airport</strong>: The UP Express train connects the airport to Union Station in 25 minutes for around CAD $12.35. Trains run every 15 minutes. Skip the taxi line—this is faster and way cheaper.
            </p>
          </div>
        </div>

        {/* Tournament Practicalities */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-information-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Tournament Practicalities
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Tickets</strong>: FIFA ticket sales opened with the Visa Presale Draw running September 10-19, 2025. Register at FIFA.com/tickets even if you missed early sales—additional phases will open closer to the tournament.
            </p>
          </div>
        </div>

        {/* Fan Festival */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Fan Festival
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Fan Festival</strong>: Toronto has officially designated Fort York National Historic Site and The Bentway as venues for the FIFA Fan Festival, offering free live broadcasts and official FIFA World Cup atmosphere. These free events run throughout the tournament—perfect for non-ticket holders or pre-match gathering points.
            </p>
          </div>
        </div>

        {/* Safety & Practicalities */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-shield-check-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Safety & Practicalities
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Safety & Practicalities</strong>: Toronto is exceptionally safe for international visitors. The downtown core is walkable day and night, though standard urban awareness applies. Tap water is perfectly safe to drink. Tipping culture mirrors the U.S.—15-20% at restaurants is standard. Most places accept credit cards, but carry some Canadian cash for markets and streetcars.
            </p>
          </div>
        </div>

        {/* Why Toronto Deserves Your Full Attention */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-4xl"></i>
            Why Toronto Deserves Your Full Attention
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Look, plenty of cities can host big matches. But Toronto brings something different to World Cup 2026. This is a place where you'll hear a dozen languages walking down one street, where neighborhoods shift from luxury boutiques to vintage shops to ethnic markets in just a few blocks. It's a city preparing to showcase "exceptional diversity, creativity, and international character" to a global audience.
            </p>
            <p>
              June 12, 2026, marks the first-ever FIFA World Cup men's match on Canadian soil, and the energy will be unlike anything you've experienced at a football tournament. Canadians are passionate about hockey, sure—but football is rising fast here, and this World Cup moment will define a generation of the sport in Canada.
            </p>
            <p>
              Stay an extra day. Hell, stay three. Explore Kensington Market on Saturday morning, catch a Blue Jays game Saturday afternoon, hit the Distillery District Sunday evening, and save Monday for the CN Tower and waterfront trails. Take the ferry to Toronto Islands for skyline views. Eat peameal bacon at St. Lawrence Market. Have a beer at Left Field Brewery before walking to BMO Field.
            </p>
            <p>
              Because here's what travel should be: not just checking stadiums off a list, but actually experiencing the cities that host these moments. Toronto isn't just a World Cup venue—it's a destination that rewards curiosity, celebrates diversity, and creates memories that outlast the final whistle.
            </p>
          </div>
        </div>

        {/* Book your Toronto experience now */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-flag-line text-indigo-500 dark:text-indigo-300 text-4xl"></i>
            Book your Toronto experience now
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Book your Toronto experience now</strong>. June 2026 will be here before you know it, and this city is ready to welcome the world.
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}