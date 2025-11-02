import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export function AtlantaCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* Hero Section - MetLife-style visual */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Atlanta: Your Ultimate 2026 FIFA World Cup Travel Guide
          </h1>
        </div>
      </div>

      {/* Main Content - Part 1/5 only, verbatim text in exact sequence */}
      <main className="p-8 md:p-12 space-y-12">
        {/* Opening Section */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p><strong>The Capital of the South Hosts a Semifinal</strong></p>
            <p>
              Thirty years after the eyes of the world turned to Atlanta for the 1996 Olympic Games, the city is back on the global stage—and this time, it's bringing football. From June 15 through July 15, 2026, Mercedes-Benz Stadium will host eight FIFA World Cup matches, including one of only two semifinals. That's right: one of the last four teams standing will battle for a spot in the Final right here in Georgia's capital, making Atlanta a cornerstone of the tournament's most dramatic moments.
            </p>
            <p>
              If you've never visited Atlanta, prepare to have your assumptions challenged. This isn't a sleepy Southern city—it's a booming metropolis of nearly 500,000 (6 million in the metro area) with world-class infrastructure, a food scene that rivals any American city, and a stadium that literally redefines modern architecture. Mercedes-Benz Stadium's retractable "pinwheel" roof opens in less than eight minutes, its halo board is the world's largest video screen, and it's built to handle crowds with efficiency that would make German engineers jealous. Add in Atlanta's role as a transportation hub (Hartsfield-Jackson is the world's busiest airport) and its status as America's civil rights capital, and you have a city ready to show the world why it's called "the capital of the South."
            </p>
          </div>
        </div>

        {/* The Stadium */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            The Stadium: Mercedes-Benz Stadium (Atlanta Stadium for FIFA 2026)
          </h2>

          <div className="space-y-8">
            {/* Architectural Marvel */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-star-line text-amber-400 dark:text-amber-300"></i>
                An Architectural Marvel Built for Football
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Mercedes-Benz Stadium opened in August 2017 at a cost of $1.6 billion and has a capacity of 71,000 seats for most events, expandable to over 75,000 for World Cup matches. This isn't just another American football stadium converted for soccer—Mercedes-Benz was designed from day one with soccer in mind, featuring retractable lower bowl seats to widen the field and mechanized curtains that can limit capacity to around 42,500 for more intimate matches.
                </p>
                <p>
                  During the tournament, FIFA will refer to the venue as "Atlanta Stadium" due to sponsorship regulations prohibiting corporate names. The stadium underwent a $200 million upgrade specifically for the World Cup, touching every aspect of the facility with improvements above and below ground.
                </p>
              </div>
            </div>

            {/* Roof */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-sun-line text-amber-400 dark:text-amber-300"></i>
                The Roof That Broke the Mold
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Mercedes-Benz Stadium's signature feature is its retractable roof consisting of eight translucent, triangular panels forming a unique "pinwheel" design inspired by the Roman Pantheon. When opened, the panels create the illusion of a bird's wings extended—a nod to the Atlanta Falcons. The roof can open or close in approximately eight to ten minutes, providing flexibility for weather conditions while allowing natural light and fresh air when conditions permit.
                </p>
                <p>
                  The stadium also features a circular, 360-degree LED halo board that's 58 feet tall and 1,100 feet around—three times larger than the largest single display board in the NFL. This isn't just impressive; it creates an immersive viewing experience that wraps around the entire stadium.
                </p>
              </div>
            </div>

            {/* Match Schedule */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-calendar-event-line text-emerald-400 dark:text-emerald-300"></i>
                Match Schedule at Mercedes-Benz Stadium
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Atlanta will host eight matches spanning a full month of tournament action, from opening group stage games through one of the tournament's most critical moments:
                </p>
                <p><strong>Group Stage Matches</strong>: June 15, 18, 21, 24, 27</p>
                <p><strong>Round of 32</strong>: July 1</p>
                <p><strong>Round of 16</strong>: July 7</p>
                <p><strong>Semifinal</strong>: July 15, 2026</p>
                <p>
                  That July 15 semifinal makes Atlanta the second most important U.S. host city after New York/New Jersey (which hosts the Final). This match will determine one of the two teams playing for the championship four days later—making Atlanta essential viewing for any serious football fan.
                </p>
              </div>
            </div>

            {/* What Makes Special */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-award-line text-rose-500 dark:text-rose-300"></i>
                What Makes This Stadium Special
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Atlanta United FC, the city's MLS team, has set multiple MLS attendance records at Mercedes-Benz Stadium, including the largest crowd ever for a standalone MLS match (72,035) in 2018. The stadium hosted Super Bowl LIII (2019), the College Football Playoff National Championship (2018 and 2025), matches during the 2024 Copa América, and will host Super Bowl LXII in 2028.
                </p>
                <p>
                  The venue was built soccer-specific from day one, and it shows. Natural grass meets FIFA regulations, sightlines are exceptional, and the Atlanta United supporters' sections generate an atmosphere that rivals European clubs. When 70,000 fans sing in unison under that iconic roof, you'll understand why this place is special.
                </p>
                <p>
                  The stadium is located in downtown Atlanta, adjacent to Centennial Olympic Park and the Georgia World Congress Center, making it genuinely accessible from hotels, transit, and the city's major attractions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-route-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Getting There: Transportation Made Easy
          </h2>

          <div className="space-y-8">
            {/* From Airport */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-blue-400 dark:text-sky-300"></i>
                From Hartsfield-Jackson Atlanta International Airport
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Atlanta's airport isn't just big—it's the busiest airport in the world, serving over 100 million passengers annually with connections to 181 countries. For World Cup visitors, this means finding flights to Atlanta will be easier than almost any other host city.
                </p>
              </div>
            </div>

            {/* MARTA Rail */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-train-line text-purple-500 dark:text-purple-300"></i>
                MARTA Rail (The Smart Choice)
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  The Metropolitan Atlanta Rapid Transit Authority (MARTA) offers the fastest and most cost-effective way to reach downtown and Mercedes-Benz Stadium. The airport station is located inside the Domestic Terminal, between the North and South baggage claim areas.
                </p>
                <p>
                  Both the Red and Gold lines depart from the airport and reach downtown's Five Points station in just 15-18 minutes. From Five Points, you're one or two stops from any downtown hotel. For the stadium, exit at GWCC/CNN Center or Vine City stations—both are within a 5-10 minute walk of Mercedes-Benz Stadium.
                </p>
                <p>
                  <strong>Fares</strong>: A single ride costs just $2.50 on a Breeze Card (which costs $2 to purchase). Download the Breeze Mobile 2.0 app to load funds digitally and avoid vending machine lines.
                </p>
              </div>
            </div>

            {/* Pro Tip - International Terminal Transfer */}
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800">
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line text-amber-500 text-2xl mt-1"></i>
                <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white">
                  <p>
                    <strong>Pro Tip</strong>: If arriving at the International Terminal, you'll need to take the free shuttle to the Domestic Terminal to access MARTA. Allow an extra 45-60 minutes for this transfer.
                  </p>
                </div>
              </div>
            </div>

            {/* Rideshares and Taxis */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-rose-500 dark:text-rose-300"></i>
                Rideshares and Taxis
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Uber and Lyft operate throughout Atlanta with reliable service. Expect the airport-to-downtown trip to cost $25-35 and take 20-25 minutes in light traffic. Taxis offer flat rates to downtown of around $40 for up to four passengers.
                </p>
              </div>
            </div>

            {/* Match Day Access */}
            <div className="dark:text-white">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-football-line text-emerald-500 dark:text-emerald-300"></i>
                Getting to Mercedes-Benz Stadium on Match Days
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  The stadium sits in downtown Atlanta with excellent transit access. MARTA is the highly recommended way to reach the stadium, especially on match days when parking fills up and traffic congests.
                </p>
                <p>
                  <strong>MARTA Stations for the Stadium</strong>:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>GWCC/CNN Station (W-1)</strong>: Approximately a 5-minute walk to the stadium</li>
                  <li><strong>Vine City Station (W-2)</strong>: Approximately a 10-minute walk to the stadium</li>
                </ul>
                <p>
                  Both stations are on the Blue and Green lines. If you're coming from the airport or downtown hotels on the Red or Gold lines, transfer at Five Points station to catch the Blue or Green line west toward the stadium.
                </p>
                <p>
                  Trains run frequently on match days with additional service. Expect crowds but efficient operations—MARTA knows how to move people during major events.
                </p>
                <p>
                  <strong>Rideshare Strategy</strong>: If you prefer Uber or Lyft, budget $15-25 from downtown hotels. On match days, expect surge pricing, especially immediately before kickoff and after the final whistle. Consider walking to nearby hotels or restaurants to request your ride and avoid stadium pickup chaos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Where to Stay */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h2>

          <div className="space-y-10">
            {/* Downtown Atlanta */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Downtown Atlanta: Maximum Convenience</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Why Stay Here</strong>: Direct MARTA access to Mercedes-Benz Stadium, walking distance to major attractions (Georgia Aquarium, World of Coca-Cola, Centennial Olympic Park), and the energy of the city's core.
                </p>
                <p>
                  <strong>Hotel Options</strong>: The Omni Hotel at CNN Center sits adjacent to the stadium and CNN headquarters, offering premium comfort with unbeatable proximity to World Cup matches. For luxury, the Georgia Tech Hotel and Conference Center provides upscale accommodations with modern amenities, while the Hilton Atlanta offers classic reliability near major downtown attractions.
                </p>
                <p>
                  <strong>Perfect For</strong>: Visitors prioritizing convenience to the stadium, business travelers, and anyone who wants to be in the thick of the action without needing additional transportation.
                </p>
                <p>
                  <strong>Book Early</strong>: Downtown hotels will see premium World Cup pricing. Reserve 6-12 months in advance through <span className="font-mono">https://www.booking.com</span>  or <span className="font-mono">https://www.hotels.com</span>  to lock in rates and guarantee availability.
                </p>
              </div>
            </div>

            {/* Midtown Atlanta */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Midtown Atlanta: Arts, Culture, and Transit Access</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Why Stay Here</strong>: Just north of downtown, Midtown is Atlanta's cultural heart—home to the Fox Theatre, High Museum of Art, Atlanta Botanical Garden, and Piedmont Park. The neighborhood offers a more walkable, neighborhood feel while maintaining excellent MARTA access on the Red and Gold lines.
                </p>
                <p>
                  <strong>Hotel Options</strong>: The Georgian Terrace Hotel across from the Fox Theatre offers historic charm with modern renovations. For contemporary style, the AC Hotel by Marriott Atlanta Midtown delivers clean design and central location, while the Stonehurst Place B&B provides intimate, local flavor in a beautifully restored Victorian home.
                </p>
                <p>
                  <strong>What You'll Find</strong>: Tree-lined streets, independent restaurants, craft cocktail bars, and a thriving arts scene. Midtown is where locals spend their evenings, and you'll discover Atlanta's creative energy here.
                </p>
                <p>
                  <strong>Transit to Stadium</strong>: MARTA's Red or Gold line from any Midtown station (North Avenue, Midtown, Arts Center) to Five Points, then transfer to Blue or Green line west to GWCC/CNN Center. Total journey: 20-25 minutes.
                </p>
                <p>
                  <strong>Perfect For</strong>: Couples, art enthusiasts, foodies seeking independent restaurants, and travelers who want neighborhood character alongside transit convenience.
                </p>
              </div>
            </div>

            {/* Buckhead */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Buckhead: Atlanta's Luxury Neighborhood</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Why Stay Here</strong>: Eight miles north of downtown, Buckhead offers Atlanta's most upscale accommodations, shopping (Lenox Square, Phipps Plaza), and fine dining. This is where you'll find luxury hotels, tree-lined streets with historic mansions, and a more refined atmosphere.
                </p>
                <p>
                  <strong>Hotel Options</strong>: The St. Regis Atlanta and The Whitley, a Luxury Collection Hotel, represent Atlanta's pinnacle luxury experiences. For reliable upscale comfort, the Westin Buckhead Atlanta and InterContinental Buckhead provide excellent service with MARTA station proximity.
                </p>
                <p>
                  <strong>Getting to Matches</strong>: Buckhead MARTA Station connects you directly to downtown and the stadium via the Red line. Journey time: 30-35 minutes to the stadium.
                </p>
                <p>
                  <strong>Perfect For</strong>: Travelers seeking luxury accommodations, shoppers, families wanting more space, and anyone willing to trade downtown proximity for upscale neighborhood charm.
                </p>
              </div>
            </div>

            {/* East Side */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">East Side: BeltLine, Breweries, and Local Flavor</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Why Stay Here</strong>: Neighborhoods like Inman Park, Virginia-Highland, and Little Five Points offer Atlanta's most eclectic, bohemian vibe. You'll find craft breweries, vintage shops, street art, and the Atlanta BeltLine—a former railway corridor transformed into a 22-mile walking and cycling trail connecting neighborhoods.
                </p>
                <p>
                  <strong>What You'll Find</strong>: The Hotel Clermont offers boutique charm with rooftop bar views and throwback style. Vacation rentals in Inman Park or Little Five Points put you in residential neighborhoods with authentic local character.
                </p>
                <p>
                  <strong>Getting to Matches</strong>: MARTA buses or rideshares connect the East Side to downtown/stadium in 25-35 minutes. The BeltLine connects to Piedmont Park and Midtown, making it easy to explore on foot or bike between matches.
                </p>
                <p>
                  <strong>Perfect For</strong>: Younger travelers, beer enthusiasts, couples seeking neighborhood exploration, and anyone who values local authenticity over tourist central.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beyond the Match */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Beyond the Match: What to Do in Atlanta
          </h2>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white">
              <p>
                Atlanta's attractions span civil rights history, world-class museums, Olympic legacy sites, and entertainment that reflects the city's position as capital of the American South.
              </p>
            </div>

            {/* Georgia Aquarium */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Georgia Aquarium: The World's Largest</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Located at Pemberton Place next to World of Coca-Cola, the Georgia Aquarium holds more than 11 million gallons of water and houses tens of thousands of aquatic animals across seven major galleries. This is the largest aquarium in the United States and features whale sharks, manta rays, beluga whales, and immersive underwater tunnel viewing.
                </p>
                <p>
                  <strong>Logistics</strong>: Adult admission starts around $45. Budget 2-3 hours for the full experience. Located downtown, easily walkable from most hotels or accessible via MARTA to Peachtree Center station.
                </p>
                <p>
                  <strong>Combo Tickets</strong>: Consider the Georgia Aquarium &amp; World of Coca-Cola Combo Ticket to save money and visit both attractions in one day.
                </p>
              </div>
            </div>

            {/* World of Coca-Cola */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">World of Coca-Cola: Atlanta's Most Iconic Brand</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  The 92,000-square-foot World of Coca-Cola museum showcases the history and cultural impact of Coca-Cola, invented in Atlanta in 1886 by Dr. John S. Pemberton. The museum features a 4D theater experience, exhibits about the "secret formula," and the ultimate highlight: a tasting room where you can sample over 100 different Coca-Cola beverages from around the world.
                </p>
                <p>
                  <strong>Admission</strong>: $19-21 for adults. The tasting room alone is worth the price—where else can you try Beverly (Italy's infamous bitter soda) alongside exotic flavors from every continent?
                </p>
                <p>
                  <strong>Location</strong>: Pemberton Place, adjacent to the Georgia Aquarium and Centennial Olympic Park.
                </p>
              </div>
            </div>

            {/* MLK National Historical Park */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Martin Luther King Jr. National Historical Park</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Atlanta is the birthplace and lifetime home of Dr. Martin Luther King Jr., and this National Historical Park preserves his birth home, Ebenezer Baptist Church where he preached, and the King Center where he and Coretta Scott King are entombed.
                </p>
                <p>
                  <strong>Why Visit</strong>: This isn't optional—it's essential. Understanding America's civil rights movement and Dr. King's legacy provides context for Atlanta's identity as a city that continuously pushes for progress. Guided tours of the birth home are free but require advance reservations.
                </p>
                <p>
                  <strong>Location</strong>: Auburn Avenue in the Sweet Auburn neighborhood, accessible via MARTA to King Memorial station.
                </p>
                <p>
                  <strong>Budget</strong>: Free admission, though donations are appreciated. Budget 2-3 hours for the full experience.
                </p>
              </div>
            </div>

            {/* Centennial Olympic Park */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Centennial Olympic Park: Atlanta's Green Heart</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Built for the 1996 Summer Olympics, this 22-acre downtown park features the iconic Fountain of Rings (the world's largest interactive fountain incorporating the Olympic symbol), green space, playgrounds, and regular concerts and events.
                </p>
                <p>
                  <strong>Match Day Strategy</strong>: On World Cup match days, expect the park to transform into an unofficial fan zone. Supporters from competing nations will gather here before and after matches, creating a spontaneous global celebration.
                </p>
                <p>
                  <strong>Location</strong>: Adjacent to Mercedes-Benz Stadium, Georgia Aquarium, World of Coca-Cola, and the National Center for Civil and Human Rights.
                </p>
              </div>
            </div>

            {/* Fox Theatre */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Fox Theatre: Atlanta's Most Beautiful Building</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  This 1929 movie palace is one of America's most stunning historic theaters, featuring Moorish-Egyptian architecture with gilded ceilings, onion domes, and Middle Eastern-inspired design. Catch a Broadway show, concert, or simply take a guided tour to experience the building's opulent interior.
                </p>
                <p>
                  <strong>Location</strong>: Midtown, at Peachtree Street and Ponce de Leon Avenue, accessible via MARTA.
                </p>
              </div>
            </div>

            {/* BeltLine */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">The BeltLine: Atlanta's Transformation Project</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  The Atlanta BeltLine is a 22-mile loop of former railway corridors being transformed into parks, trails, transit, and affordable housing. The Eastside Trail is the most developed section, connecting Piedmont Park to Inman Park with public art, restaurants, breweries, and shopping along the way.
                </p>
                <p>
                  <strong>Perfect For</strong>: Walking, running, cycling between matches. Rent a bike and spend an afternoon exploring neighborhoods from a local's perspective.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Food */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-restaurant-line text-rose-500 dark:text-rose-300 text-4xl"></i>
            Food: From Soul Food to Southern Innovation
          </h2>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white">
              <p>
                Atlanta's food scene reflects its status as capital of the South—traditional soul food and BBQ sit alongside innovative New American cuisine, international flavors from the city's growing immigrant communities, and chef-driven restaurants earning national attention.
              </p>
            </div>

            {/* Southern BBQ */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Southern BBQ: Atlanta Style</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Atlanta doesn't adhere to one regional BBQ style—you'll find Texas brisket, Carolina pork, and Memphis ribs, often on the same menu.
                </p>
                <p>
                  <strong>Fox Bros. Bar-B-Q</strong>: The most recognizable BBQ brand in Atlanta, with multiple locations including one at Truist Park and Chattahoochee Food Works. Their brisket, ribs, and sausage rival anything in Texas or the Carolinas. Try the burnt ends and Brunswick stew.
                </p>
                <p>
                  <strong>Heirloom Market BBQ</strong>: A husband-and-wife team (he's from Tennessee, she's a former Korean pop star) created Atlanta's most unique BBQ experience, blending Southern smoke with Korean spices. The pulled pork sandwich with kimchi slaw is legendary. Located on Akers Mill Road near the Chattahoochee River—order takeout and eat by the water.
                </p>
                <p>
                  <strong>Rodney Scott's Whole Hog BBQ</strong>: One of only two pitmasters to win a James Beard Award for best chef, Rodney Scott brought his Charleston whole-hog tradition to Atlanta's West End. The dining space is beautiful (floor-to-ceiling glass, modern industrial), and the pork is transcendent.
                </p>
                <p>
                  <strong>DAS BBQ</strong>: Texas-style brisket and spicy sausage in Atlanta's Westside. The name nods to German-Czech meat markets that pioneered Texas BBQ. This is the place for purists who want brisket done right.
                </p>
              </div>
            </div>

            {/* Soul Food */}
            <div className="dark:text-white">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Soul Food: The Real Deal</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Busy Bee Cafe</strong>: A West End institution since 1947, serving fried chicken, meatloaf, collard greens, mac and cheese, and other soul food classics that taste like Sunday dinner at your grandmother's house (if your grandmother was from Georgia).
                </p>
                <p>
                  <strong>This Is It! BBQ</strong>: More than BBQ—this South Side spot serves authentic soul food alongside smoked meats. The rib tips are legendary, and the sides (mac and cheese, collard greens, candied yams) are cooked with heart and heritage.
                </p>
                <p>
                  <strong>Paschal's</strong>: A historic restaurant that served as an unofficial headquarters for civil rights leaders during the 1960s. Dr. King, Ralph Abernathy, and other leaders met here to strategize. Today, it still serves classic Southern soul food in a restaurant steeped in history.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beyond Southern Food */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-store-2-line text-fuchsia-500 dark:text-fuchsia-300 text-4xl"></i>
            Beyond Southern Food
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Atlanta's diversity shows up on its plates:
            </p>
            <p>
              <strong>Buford Highway</strong>: This international food corridor northeast of downtown features authentic cuisine from Korea, Vietnam, China, Mexico, and beyond. Explore strip malls hiding some of Atlanta's best food.
            </p>
            <p>
              <strong>Ponce City Market</strong>: A former Sears warehouse transformed into a food hall, retail space, and rooftop amusement park. Sample from dozens of vendors offering everything from oysters to ramen.
            </p>
            <p>
              <strong>Krog Street Market</strong>: Inman Park's food hall features high-quality vendors in a converted warehouse. Perfect for groups wanting variety.
            </p>
          </div>
        </div>

        {/* Weather & Packing */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-sun-cloudy-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            Weather &amp; What to Pack
          </h2>

          <div className="space-y-8 dark:text-white">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">June and July in Atlanta: Hot, Humid, and Thundery</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Atlanta's summers are defined by three words: hot, humid, and afternoon thunderstorms. But don't let that scare you—locals manage just fine, and the stadium's air conditioning makes matches comfortable.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">June Weather</h4>
                <ul className="list-disc pl-6 prose prose-lg max-w-none dark:prose-invert">
                  <li>Average high: 88°F (31°C)</li>
                  <li>Average low: 67°F (20°C)</li>
                  <li>Humidity: 70% average</li>
                  <li>Rainfall: 3-4 inches spread over 10-15 days</li>
                  <li>Sunshine: 10-12 hours per day</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">July Weather</h4>
                <ul className="list-disc pl-6 prose prose-lg max-w-none dark:prose-invert">
                  <li>Average high: 91°F (33°C)</li>
                  <li>Average low: 72°F (22°C)</li>
                  <li>Humidity: 69-75% (it will feel muggy)</li>
                  <li>Rainfall: 2-4 inches spread over 15-17 days</li>
                  <li>Sunshine: 10-11 hours per day (July is Atlanta's hottest month)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">What This Means for You</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  <strong>Heat Management</strong>: Atlanta summers require constant hydration and smart planning. Outdoor activities are best in the morning (before 11 AM) or evening (after 6 PM). Midday heat with 75% humidity creates "feels like" temperatures over 100°F (38°C).
                </p>
                <p>
                  <strong>Clothing</strong>: Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). Shorts and t-shirts are standard. Atlanta is casual—even upscale restaurants rarely require more than "smart casual" attire.
                </p>
                <p>
                  <strong>Rain Prep</strong>: Afternoon thunderstorms are common and often intense but brief. Carry a compact umbrella or light rain jacket. These storms typically roll through in 30-60 minutes, clearing by evening.
                </p>
                <p>
                  <strong>Sun Protection</strong>: Sunglasses, sunscreen (SPF 30+), and a hat are essential. The summer sun is intense, and you'll be outdoors more than you think.
                </p>
                <p>
                  <strong>Layers</strong>: One light jacket or long-sleeve shirt for aggressive indoor air conditioning—the temperature contrast from 90°F outside to 68°F inside can be jarring.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Stadium Policies</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  Mercedes-Benz Stadium's bag policy typically requires clear bags (12" x 6" x 12" or smaller) or small clutches (4.5" x 6.5"). Check the official stadium website before your visit and plan accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips for International Visitors */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-global-line text-cyan-500 dark:text-cyan-300 text-4xl"></i>
            Practical Tips for International Visitors
          </h2>

          <div className="space-y-8 dark:text-white">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Money Matters</h3>
              <ul className="list-disc pl-6 prose prose-lg max-w-none dark:prose-invert">
                <li><strong>Currency</strong>: US Dollar (USD)</li>
                <li><strong>Cards</strong>: Credit cards accepted everywhere; contactless payment widely available</li>
                <li><strong>Tipping</strong>: 18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</li>
                <li><strong>ATMs</strong>: Widely available; use bank-affiliated machines to avoid excessive fees</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Safety &amp; Getting Around</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  Atlanta is generally safe for visitors, especially in tourist areas and well-traveled neighborhoods. Basic street smarts apply: be aware of your surrounings, keep valuables secure, and stick to well-lit areas at night.
                </p>
                <p>
                  <strong>MARTA</strong>: Clean, safe, and reliable during daytime and evening hours. All MARTA buses and trains feature video surveillance. Download the MARTA app for real-time arrivals and trip planning.
                </p>
                <p>
                  <strong>Walking</strong>: Downtown, Midtown, and Buckhead are walkable during the day. At night, stick to main streets and well-lit areas. Atlanta is a car city, so some neighborhoods lack sidewalk connectivity.
                </p>
                <p>
                  <strong>Driving</strong>: If you rent a car, Atlanta's highway system (I-75, I-85, I-20) connects everything, but traffic can be brutal during rush hours (7-9 AM, 4-7 PM). Parking downtown costs $15-30 per day.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Language &amp; Connectivity</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                <p>
                  English is the primary language, with Southern accents common (though less so in tourist areas due to transplants). Atlanta's diversity means you'll hear Spanish, Korean, Vietnamese, and dozens of other languages throughout the city.
                </p>
                <p>
                  Free Wi-Fi is available in many cafés, hotels, and MARTA stations. Consider a US SIM card or international data plan for navigation and communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Information & Booking Strategy */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-ticket-line text-indigo-500 dark:text-indigo-300 text-4xl"></i>
            Ticket Information &amp; Booking Strategy
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-4">
            <p>
              <strong>How to Get World Cup Tickets</strong>
            </p>
            <p>
              Tickets for the 2026 FIFA World Cup are sold in multiple phases. The first presale draw began September 10, 2025, for people 18 and older with FIFA accounts and Visa cardholders. Group stage tickets start at $60, with prices increasing significantly for knockout rounds and the semifinal.
            </p>
            <p>
              Register at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.fifa.com/tickets</a> for future ticket phases. The July 15 semifinal will be among the tournament's most sought-after tickets outside the Final itself.
            </p>
            <p>
              <strong>Hospitality Packages</strong>: If you miss the general ticket lottery, official hospitality packages through FIFA's partner On Location start at $1,450 per match for group stage games, rising significantly for the semifinal. These include premium seating, exclusive lounge access, and food and beverage service—worth considering for guaranteed access to critical matches.
            </p>
          </div>
        </div>

        {/* Why Atlanta */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-earth-line text-teal-500 dark:text-teal-300 text-4xl"></i>
            Why Atlanta Will Make Your World Cup Unforgettable
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white">
            <p>
              Atlanta surprises first-time visitors who arrive expecting Southern stereotypes. This is a global city—the busiest airport in the world, Fortune 500 headquarters, and international communities from every continent create a cosmopolitan energy that rivals any American metro.
            </p>
            <p>
              But it's also undeniably Southern. The food tastes like your grandmother's kitchen (if she was from Georgia). Strangers say hello on the street. And when 70,000 fans pack Mercedes-Benz Stadium for a World Cup semifinal, you'll experience something uniquely Atlanta: world-class infrastructure wrapped in Southern hospitality.
            </p>
            <p>
              From the moment you step off MARTA into the stadium to the post-match celebrations in Centennial Olympic Park, Atlanta delivers the tournament experience amplified by a city that knows how to host the world (they've done it before with the Olympics) while maintaining the soul of the South.
            </p>
            <p>
              Only two U.S. cities will have hosted both the Summer Olympics and the FIFA World Cup—Atlanta and Los Angeles. That's the kind of company Atlanta keeps. And on July 15, 2026, when one team punches its ticket to the Final, you'll understand why this city is special.
            </p>
          </div>
        </div>

        {/* Start Planning */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-sky-500 dark:text-sky-300 text-4xl"></i>
            Start Planning Your 2026 World Cup Trip to Atlanta
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              The countdown is on. Hotels are booking up. Flights are being reserved. And Atlanta is preparing to welcome the world—again.
            </p>
            <p><strong>Your Action Plan</strong>:</p>
            <ol className="list-decimal pl-6">
              <li>
                <strong>Register for FIFA tickets</strong> at
                {' '}<a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.fifa.com/tickets</a>{' '}for future phases
              </li>
              <li>
                <strong>Book accommodations early</strong> via
                {' '}<a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.booking.com</a>{' '}or{' '}
                <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.hotels.com</a>{' '}—6-12 months in advance is essential for World Cup dates
              </li>
              <li>
                <strong>Research flights</strong> to Atlanta (ATL) through
                {' '}<a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.skyscanner.com</a>{' '}or{' '}
                <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">https://www.google.com/flights</a>
              </li>
              <li>
                <strong>Download the MARTA Breeze app</strong> for seamless transit
              </li>
              <li>
                <strong>Make reservations</strong> at top restaurants—places like Fox Bros., Heirloom Market BBQ, and Busy Bee Cafe fill up during major events
              </li>
              <li>
                <strong>Plan rest-day activities</strong>: Georgia Aquarium, MLK National Historical Park, BeltLine exploration
              </li>
            </ol>
            <p>
              Atlanta will host eight matches during the 2026 FIFA World Cup at Mercedes-Benz Stadium, including five group-stage contests, two knockout round games, and a semifinal on July 15 that will determine one of the two teams playing for the championship. The economic impact is projected at $5 billion for the region, and hundreds of thousands of visitors will descend on the city for the events.
            </p>
          </div>
        </div>

        {/* Final Word */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white text-center">
            <p className="font-bold text-xl">
              See you in Atlanta. Y'all ready for some football?
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}