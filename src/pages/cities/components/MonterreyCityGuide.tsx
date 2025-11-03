import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export function MonterreyCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Monterrey 2026 FIFA World Cup: Your Complete Travel Guide to Mexico's Steel Giant
          </h1>
        </div>
      </div>

      <main className="p-8 md:p-12 space-y-12">
        {/* Intro paragraphs */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              When the 2026 FIFA World Cup kicks off, Monterrey will welcome the world to one of Mexico's most dynamic cities—where modern ambition meets raw football passion against a backdrop of jagged mountains. This industrial powerhouse in northeastern Mexico isn't just hosting four World Cup matches; it's ready to show international fans why it claims the most loyal football crowds in the country.
            </p>
            <p>
              Nestled in the Santa Catarina Valley and framed by the iconic Cerro de la Silla mountain, Monterrey is Mexico's third-largest city and its wealthiest metropolitan area. But strip away the glass skyscrapers and you'll find a city that bleeds blue and white for C.F. Monterrey Rayados—a club that's sold out stadiums for decades and turned match day into a cultural phenomenon.
            </p>
            <p>
              If you're planning to catch a World Cup match in Monterrey, you're in for something special. This isn't a tourist resort; it's a real Mexican city with serious football heritage, incredible carne asada, and a stadium that rivals anything in North America.
            </p>
          </div>
        </div>

        {/* The Stadium */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            The Stadium: Estadio BBVA – Where Steel Meets Football
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p><strong>Official World Cup Name:</strong> Estadio Monterrey</p>
            <p><strong>Actual Name:</strong> Estadio BBVA (nicknamed "El Gigante de Acero" – The Steel Giant)</p>
            <p><strong>Capacity:</strong> 53,500 (one of the largest in Mexico)</p>
            <p><strong>Location:</strong> Guadalupe suburb, part of the Monterrey metropolitan area</p>
            <p><strong>World Cup Matches:</strong> Four confirmed matches</p>

            <p>
              Estadio BBVA opened in 2015 and immediately set a new standard for football venues in Latin America. Designed by international firm Populous, the stadium's metallic facade pays homage to Monterrey's steel manufacturing heritage, while its curved aluminum sheets evoke the beer vats the city is famous for producing.
            </p>
            <p>
              But here's what matters for traveling fans: the sightlines are phenomenal. Every seat in the house offers unobstructed views of the pitch, and the steep rake of seating creates an intimidating cauldron of noise when the crowd gets behind their team. The compact design and curved roof amplify sound, making match atmosphere absolutely electric—something Rayados supporters have been exploiting since day one.
            </p>
            <p>
              The stadium sits against the Sierra Madre Oriental mountains, offering one of the most photogenic backdrops in world football. On a clear day, the view from the stands includes the distinctive saddle-shaped Cerro de la Silla mountain that defines Monterrey's skyline.
            </p>
            <p>
              For the 2026 World Cup, the stadium will feature upgraded pitch technology including an underground ventilation system to maintain grass quality despite Monterrey's summer heat. FIFA has confirmed four matches here: three Group Stage encounters and one Round of 32 match scheduled across June 14, 20, 24, and 29, 2026.
            </p>
          </div>
        </div>

        {/* Getting to the Stadium */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-routes-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Getting to the Stadium
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Estadio BBVA is located in Guadalupe, roughly 15 minutes east of downtown Monterrey. Here's how to get there:
            </p>
            <p>
              <strong>By Metro:</strong> Take Metrorrey Line 1 to Estación Lerdo de Tejada, then walk about nine minutes to the stadium entrance. The Metrorrey is modern, air-conditioned, and runs from approximately 5:00 AM to midnight. Fares are affordable at around 15 MXN with integrated TransMetro bus transfers.
            </p>
            <p>
              <strong>By Bus:</strong> Several bus routes service the stadium area, including routes 214, 223, TME, and 093. The closest stop is Pablo Livas (Estadio B.B.V.A.), just four minutes from the gates. Buses run later than the metro, with some routes operating until after 1:00 AM—perfect for evening matches.
            </p>
            <p>
              <strong>By Rideshare:</strong> Uber operates widely in Monterrey and will drop you near the stadium gates. Expect surge pricing on match days, but it's still convenient if you're traveling in a group or from farther neighborhoods like San Pedro.
            </p>
            <p>
              <strong>By Car:</strong> Parking is available adjacent to the stadium, though spaces fill quickly for major matches. If you're driving, arrive early—especially for World Cup games when traffic will be intense.
            </p>
            <p>
              <strong>Pro Tip:</strong> FIFA typically operates dedicated shuttle services from city center and official Fan Fest locations during major tournaments. Watch for official announcements closer to the matches.
            </p>
          </div>
        </div>

        {/* Where to Stay */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Where to Stay: Neighborhoods That Put You in the Action
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Monterrey's accommodation landscape ranges from luxury high-rises in affluent San Pedro to budget-friendly spots in Centro. Here's where to base yourself depending on your travel style.
            </p>
          </div>
        </div>

        {/* Centro/Monterrey Centro */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-map-pin-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Centro/Monterrey Centro – For Culture Vultures and Budget Travelers
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Downtown Monterrey puts you in the heart of the action. This is where you'll find the massive Macroplaza (one of the world's largest public squares), the Metropolitan Cathedral, and walkable access to museums, bars, and authentic taquerías. The neighborhood mixes colonial architecture with modern developments, and it's well-connected by metro.
            </p>
            <p>
              <strong>Why Stay Here:</strong> Central location, cultural attractions within walking distance, excellent public transport links, affordable hotels and hostels
            </p>
            <p>
              <strong>Match Day Access:</strong> Direct metro access to stadium via Line 1
            </p>
            <p>
              <strong>Book Through:</strong> Search hotels in "Monterrey Centro" on Booking.com, Hotels.com, or Expedia to compare prices and find deals on properties near Macroplaza
            </p>
            <p>
              <strong>Vibe Check:</strong> Urban and bustling during the day; some areas get quieter at night. Stick to well-populated streets after dark.
            </p>
          </div>
        </div>

        {/* San Pedro Garza García */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-building-2-line text-indigo-400 dark:text-indigo-300 text-3xl"></i>
            San Pedro Garza García – For Luxury and Safety
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              If budget isn't a concern, San Pedro is Monterrey's most upscale district. This affluent area southwest of central Monterrey is home to luxury hotels, high-end shopping centers (including Fashion Drive and Paseo San Pedro), gourmet restaurants, and a vibrant nightlife scene. It's consistently rated one of Mexico's safest areas.
            </p>
            <p>
              <strong>Why Stay Here:</strong> Premium accommodations, top dining options, proximity to Chipinque Ecological Park, sophisticated atmosphere
            </p>
            <p>
              <strong>Match Day Access:</strong> About 20-30 minutes to stadium by car/Uber; public transport requires transfers
            </p>
            <p>
              <strong>Book Through:</strong> Filter for "San Pedro Garza García" on Hotels.com or Expedia; look for properties near Fashion Drive for walkability
            </p>
            <p>
              <strong>Vibe Check:</strong> Polished, modern, and safe—but you're paying for the experience. Perfect for travelers who want resort-style comfort in an urban setting.
            </p>
          </div>
        </div>

        {/* Barrio Antiguo – For Nightlife and Character */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-map-pin-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Barrio Antiguo – For Nightlife and Character
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Want to stay where Monterrey's history comes alive? Barrio Antiguo (Old Quarter) features cobblestone streets, colorful colonial buildings, and the city's best nightlife. Converted historic houses now host bars, microbreweries, and clubs, making this the place to be on match nights. It's adjacent to Centro and walking distance to major attractions.
            </p>
            <p>
              <strong>Why Stay Here:</strong> Historic charm, buzzing nightlife, boutique hotel options, walking distance to cultural sites
            </p>
            <p>
              <strong>Match Day Access:</strong> Short walk to metro stations on Line 1
            </p>
            <p>
              <strong>Book Through:</strong> Look for boutique hotels and Airbnb apartments in "Barrio Antiguo" – unique properties in restored colonial buildings are the draw here
            </p>
            <p>
              <strong>Vibe Check:</strong> Bohemian and lively, especially Thursday through Sunday nights. Popular with younger crowds and soccer fans celebrating after matches.
            </p>
          </div>
        </div>

        {/* Near Fundidora Park – For Families and Convenience */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
            <i className="ri-leaf-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Near Fundidora Park – For Families and Convenience
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Fundidora Park is a massive former steel mill complex transformed into one of Monterrey's premier urban parks—and it's the official FIFA Fan Fest location for 2026. Hotels near the park offer easy access to both the Fan Fest and the stadium, plus family-friendly attractions within the park itself.
            </p>
            <p>
              <strong>Why Stay Here:</strong> Proximity to Fan Fest, family attractions, green space, convenient stadium access
            </p>
            <p>
              <strong>Match Day Access:</strong> Excellent—short metro ride or FIFA shuttle to stadium
            </p>
            <p>
              <strong>Book Through:</strong> Search "Parque Fundidora hotels" on Booking.com or check IHG properties (Holiday Inn Express Monterrey - Fundidora)
            </p>
            <p>
              <strong>Vibe Check:</strong> Mix of business and leisure travelers; great for families wanting a bit of everything.
            </p>
            <p>
              <strong>Smart Booking Strategy:</strong> Prices will surge for World Cup dates. Book early through sites like Booking.com (flexible cancellation policies), compare rates on Kayak or Google Hotels, or consider vacation rentals via Airbnb for group travel. Many hotels offer free airport shuttles—confirm when booking.
            </p>
          </div>
        </div>

        {/* Getting Around Monterrey: Navigate Like a Local */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-routes-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Getting Around Monterrey: Navigate Like a Local
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Monterrey's public transportation is modern and expanding, making it easy to explore without renting a car.
            </p>

            <h3 className="text-xl font-bold">Metrorrey (Metro System)</h3>
            <p>
              Monterrey's metro consists of three lines (Line 1, Line 2, and Line 3) covering 40 stations across 40 kilometers. It's the fastest way to cross the city during rush hours. Trains are clean, air-conditioned, and reliable.
            </p>
            <p><strong>Key Routes for Fans:</strong></p>
            <p>- Line 1 connects downtown (Exposición station near Fundidora Park) to the stadium area (Lerdo de Tejada)</p>
            <p>- Tickets cost around 15 MXN and can include TransMetro bus transfers</p>
            <p>- Operates roughly 5:00 AM to midnight daily</p>

            <h3 className="text-xl font-bold">Ecovía (Bus Rapid Transit)</h3>
            <p>
              Ecovía is a dedicated Bus Rapid Transit system running east-west across the city. It's efficient and connects to Metrorrey at several points, including Mitras station on Line 1.
            </p>

            <h3 className="text-xl font-bold">Local Buses and TransMetro</h3>
            <p>
              Monterrey's extensive bus network covers areas the metro doesn't reach. TransMetro routes connect to metro stations, offering integrated fares. Use the Moovit app for real-time schedules and route planning.
            </p>

            <h3 className="text-xl font-bold">Taxis and Rideshare</h3>
            <p>
              Uber is widely available and reliable in Monterrey. It's your best bet for late-night travel or getting to neighborhoods outside the metro network. Official taxis are also safe—just use app-based services or hotel taxi stands rather than hailing on the street.
            </p>

            <h3 className="text-xl font-bold">Airport to City</h3>
            <p>
              <strong>General Mariano Escobedo International Airport (MTY)</strong> is about 24 kilometers northeast of downtown in Apodaca.
            </p>
            <p>- <strong>Express Bus:</strong> Colectivo buses operate three routes (Centro, San Pedro, Sur) from Terminal A to various parts of the city. Journey takes 40-60 minutes; tickets around 110-200 MXN.</p>
            <p>- <strong>Uber/Taxi:</strong> 30-minute ride to downtown; pre-book or use airport taxi kiosks</p>
            <p>- <strong>SkyBus:</strong> New express service to Valle Oriente Station with luxury coaches (reservations advised)</p>
            <p>
              <strong>Pro Tip:</strong> Download Moovit or Google Maps before arriving—both provide excellent public transport navigation in Monterrey.
            </p>
          </div>
        </div>

        {/* Match Day in Monterrey: What to Expect */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-football-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            Match Day in Monterrey: What to Expect
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <h3 className="text-xl font-bold">The Clásico Regio: Understanding Local Football Culture</h3>
            <p>
              Monterrey is home to two Liga MX giants: C.F. Monterrey Rayados and Tigres UANL. Their rivalry, the Clásico Regio, is one of the fiercest in Mexican football. These clubs regularly sell out 50,000+ capacity stadiums regardless of weather or table position. The Rayados fanbase, known as "La Adicción," fills Estadio BBVA with navy blue and white flags, non-stop chanting, and drumbeats that shake the concrete.
            </p>
            <p>
              When World Cup matches come to town, expect that same energy multiplied by international scale. Mexican fans embrace visiting supporters, but they won't be quiet spectators—prepare for 90 minutes of relentless atmosphere.
            </p>

            <h3 className="text-xl font-bold">Official Fan Fest: Fundidora Park</h3>
            <p>
              FIFA's official Fan Fest for Monterrey will be located at Fundidora Park, the city's iconic urban green space built on the grounds of a former steel foundry. Expect big screens showing matches, concerts, food vendors, and interactive soccer experiences. The park is massive—wear comfortable shoes and arrive early on match days.
            </p>
            <p>
              <strong>Access:</strong> Metro Line 1 to Exposición station, or short walk from Centro Monterrey hotels
            </p>

            <h3 className="text-xl font-bold">Monterrey's Heat Factor</h3>
            <p>
              Let's address the elephant in the room: Monterrey gets hot in June. Daytime temperatures regularly hit 32-35°C (90-95°F), with humidity around 70%. FIFA has flagged several 2026 stadiums for extreme heat conditions, and Monterrey is on that list.
            </p>
            <p>
              <strong>How FIFA is Responding:</strong> Match times will be carefully scheduled, with some games in the cooler evening hours. The stadium's design includes natural airflow through metallic "gills" in the facade, and shade coverage for most seats.
            </p>
            <p>
              <strong>How You Should Prepare:</strong>
            </p>
            <p>- Hydrate constantly—bring an empty water bottle to refill inside the stadium</p>
            <p>- Wear lightweight, breathable fabrics and a hat with a brim</p>
            <p>- Sunscreen is non-negotiable</p>
            <p>- Schedule downtime in air-conditioned spaces between activities</p>
          </div>
        </div>

        {/* Where Fans Gather: Sports Bars and Watch Parties */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-tv-2-line text-violet-400 dark:text-violet-300 text-4xl"></i>
            Where Fans Gather: Sports Bars and Watch Parties
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p><strong>Boston's Pizza Galerías Monterrey:</strong> Lively pub atmosphere with HD screens and decent food—perfect for watching other World Cup matches</p>
            <p><strong>Skygamers Sport Bar (Centro):</strong> Energetic sports bar with multiple screens and soccer-focused events</p>
            <p><strong>Mulligan's Monterrey (San Pedro):</strong> Upscale sports bar with premium drinks and big match ambiance</p>
            <p><strong>Barrio Antiguo bars:</strong> After matches, the cobblestone streets fill with fans celebrating—join the party at one of the many microbreweries or street-side bars</p>
          </div>
        </div>

        {/* Beyond Football: Monterrey's Can't-Miss Experiences */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-sky-400 dark:text-sky-300 text-4xl"></i>
            Beyond Football: Monterrey's Can't-Miss Experiences
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <h3 className="text-xl font-bold">Macroplaza: Mexico's Grand Public Square</h3>
            <p>
              Macroplaza is one of the world's largest public squares, stretching across multiple city blocks in downtown Monterrey. The iconic 70-meter-tall Faro del Comercio (Lighthouse of Commerce) is impossible to miss—it shoots green lasers at night. Surrounding the plaza you'll find the Metropolitan Cathedral, Palacio de Gobierno, fountains, gardens, and the entrance to Paseo Santa Lucía.
            </p>
            <p><strong>Why Visit:</strong> Central meeting point, free to explore, surrounded by museums and restaurants, evening atmosphere comes alive with street vendors and performers</p>

            <h3 className="text-xl font-bold">Paseo Santa Lucía: The Turquoise Ribbon</h3>
            <p>
              This 2.3-kilometer artificial river walk connects Macroplaza to Fundidora Park with turquoise water, pedestrian bridges, sculpture installations, and waterside cafes. Walk it at sunset or take a boat tour—it's one of Monterrey's most successful urban regeneration projects.
            </p>

            <h3 className="text-xl font-bold">Museo de Arte Contemporáneo (MARCO)</h3>
            <p>
              Marked by Juan Soriano's massive black dove sculpture at its entrance, MARCO is Mexico's premier contemporary art museum. The collection showcases modern works from Mexican and international artists across spacious, light-filled galleries.
            </p>
            <p><strong>Entry:</strong> Small admission fee; closed Mondays</p>
            <p><strong>Location:</strong> Steps from Macroplaza</p>

            <h3 className="text-xl font-bold">Chipinque Ecological Park: Escape to the Mountains</h3>
            <p>
              Just 15 minutes from San Pedro, Chipinque offers over 60 kilometers of hiking and mountain biking trails through pine forests in the Sierra Madre foothills. The park's lookout points provide stunning city views, and the cooler mountain air is a relief from downtown heat.
            </p>
            <p><strong>Access:</strong> Taxi/Uber from San Pedro (no direct public transport)</p>
            <p><strong>Best Time:</strong> Early morning or late afternoon to avoid midday sun</p>

            <h3 className="text-xl font-bold">Cerro de la Silla: Monterrey's Iconic Mountain</h3>
            <p>
              The saddle-shaped Cerro de la Silla defines Monterrey's skyline. Experienced hikers can tackle the steep trail to the 1,820-meter summit (about 3-4 hours round trip). Views from the top are spectacular, but come prepared—it's challenging and hot.
            </p>
            <p><strong>Pro Tip:</strong> Go with a local guide or group, bring plenty of water, and start early in the morning.</p>

            <h3 className="text-xl font-bold">Parque Fundidora: Industrial History Meets Modern Leisure</h3>
            <p>
              Fundidora Park transformed an old steel foundry into a cultural and recreational hub. Inside you'll find the impressive Museo del Acero (Steel Museum) inside a preserved blast furnace, playgrounds, an artificial lake, water park, Sesame Street theme park, and CONARTE contemporary art center.
            </p>
            <p><strong>Why Visit:</strong> FIFA Fan Fest location, family-friendly, industrial heritage, green space</p>
            <p><strong>Access:</strong> Metro Line 1 to Exposición station</p>

            <h3 className="text-xl font-bold">The Carne Asada Experience: Monterrey's Ultimate Social Tradition</h3>
            <p>
              Forget restaurant recommendations—the best bite in Monterrey is at a carne asada. This Mexican BBQ tradition is sacred here, where locals fire up grills for any excuse to gather. If you're lucky enough to get invited to one, accept immediately. Expect perfectly grilled arrachera (skirt steak), chorizo, fresh flour tortillas, pico de gallo, guacamole, and ice-cold beer. It's not just food; it's how Monterrey socializes.
            </p>
            <p><strong>Can't get invited?</strong> Head to Mercado Juárez or Zona Rosa for street tacos that capture the city's meat-obsessed culture. Try cabrito (roast goat), machacado con huevo (dried beef with eggs), or classic tacos de trompo.</p>

            <h3 className="text-xl font-bold">Barrio Antiguo at Night</h3>
            <p>
              By day, Barrio Antiguo is a quiet historic district. By night—especially Thursday through Sunday—it transforms into Monterrey's nightlife epicenter. Bars, microbreweries, live music venues, and clubs fill the colonial buildings. The streets buzz with energy as locals and travelers mingle over craft beer and mezcal cocktails.
            </p>
          </div>
        </div>

        {/* Practical Intel: What You Need to Know */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-information-line text-indigo-400 dark:text-indigo-300 text-4xl"></i>
            Practical Intel: What You Need to Know
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <h3 className="text-xl font-bold">Weather in June</h3>
            <p>
              Monterrey in June is hot and increasingly humid as rainy season approaches. Average high temperatures reach 32-33°C (90-91°F) with lows around 21-22°C (70-72°F). Expect 10-11 hours of daily sunshine, but occasional afternoon thunderstorms are possible (though rainfall amounts remain moderate at this time of year).
            </p>
            <p><strong>What to Pack:</strong> Lightweight, breathable clothing; wide-brimmed hat; quality sunglasses; sunscreen SPF 50+; refillable water bottle; light rain jacket (just in case)</p>

            <h3 className="text-xl font-bold">Safety and Street Smarts</h3>
            <p>
              Monterrey has significantly improved its safety situation in recent years and is now considered one of Mexico's safer major cities. The tourist areas—Centro, San Pedro, Barrio Antiguo, Fundidora Park—are generally safe with visible police presence.
            </p>
            <p><strong>Common Sense Tips:</strong></p>
            <p>- Stick to well-populated, well-lit areas at night</p>
            <p>- Use Uber instead of hailing street taxis</p>
            <p>- Keep valuables secure and don't flash expensive electronics</p>
            <p>- Avoid the Colonia Independencia neighborhood (northeast of downtown)</p>
            <p>- Stay aware of your surroundings, especially after bar-hopping</p>
            <p>
              Mexican fans are welcoming and love sharing their football passion with visitors. You're more likely to be invited for tacos than to encounter any trouble.
            </p>

            <h3 className="text-xl font-bold">Budget Expectations</h3>
            <p>
              Monterrey offers excellent value compared to U.S. or European cities, though it's pricier than other Mexican destinations.
            </p>
            <p><strong>Daily Budget Estimates (Per Person):</strong></p>
            <p>- <strong>Budget:</strong> $40-60 USD (hostel, street food, public transport, basic sightseeing)</p>
            <p>- <strong>Mid-Range:</strong> $80-150 USD (3-star hotel, mix of restaurants, some taxis, attractions)</p>
            <p>- <strong>Comfort:</strong> $200+ USD (4-5 star hotel, quality dining, rideshares, guided experiences)</p>
            <p>
              World Cup match days will inflate accommodation prices significantly—book as early as possible.
            </p>

            <h3 className="text-xl font-bold">Language</h3>
            <p>
              Spanish is the primary language. English is spoken in upscale hotels, tourist areas, and by younger residents in San Pedro, but don't rely on it everywhere. Download Google Translate offline and learn basic phrases:
            </p>
            <p>- <em>¿Dónde está el estadio?</em> (Where is the stadium?)</p>
            <p>- <em>Una cerveza, por favor</em> (One beer, please)</p>
            <p>- <em>¿Cuánto cuesta?</em> (How much does it cost?)</p>
            <p>- <em>¡Vamos!</em> (Let's go! – useful at matches)</p>
            <p>
              Mexicans appreciate when visitors make an effort to speak Spanish, even if it's rough.
            </p>
          </div>
        </div>

        {/* Money Matters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-wallet-3-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            Money Matters
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>- Currency: Mexican Peso (MXN)</p>
            <p>- ATMs widely available (use bank-affiliated machines in secure locations)</p>
            <p>- Credit cards accepted at most hotels and restaurants; carry cash for street vendors, tacos, and public transport</p>
            <p>- Tipping: 10-15% at restaurants; 10-20 MXN for valet/baggage handlers; round up for taxis</p>
          </div>
        </div>

        {/* Book Your Monterrey World Cup Adventure */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-flag-line text-red-400 dark:text-red-300 text-4xl"></i>
            Book Your Monterrey World Cup Adventure
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              Monterrey isn't trying to be Cancún or Playa del Carmen—and that's exactly what makes it special for a World Cup experience. This is real Mexico: a modern industrial city with deep football roots, incredible food culture, mountain adventures, and fans who live and breathe the game.
            </p>
            <p>
              When you take your seat in Estadio BBVA with 53,000 other roaring fans, the Sierra Madre mountains rising behind the stands, you'll understand why FIFA chose Monterrey to represent Mexico's northeastern spirit on football's biggest stage.
            </p>
            <p><strong>Ready to plan your trip?</strong></p>
            <p>🏨 <strong>Book Accommodation Early:</strong> Search "Monterrey Centro," "San Pedro Garza García," or "Fundidora Park hotels" on Booking.com, Expedia, or Hotels.com to lock in World Cup rates before they skyrocket</p>
            <p>✈️ <strong>Find Flights:</strong> Use Google Flights, Kayak, or Going.com to track fares to General Mariano Escobedo International Airport (MTY). Direct flights available from major U.S. cities</p>
            <p>🎫 <strong>Stay Updated:</strong> Check FIFA's official website and FWC26Monterrey.com for match schedules, ticket sales, and Fan Fest details as they're announced</p>
            <p>🗺️ <strong>Plan Your Days:</strong> Balance match day with experiences—mix football fever with mountain hikes, museum visits, and carne asadas</p>
            <p>
              Monterrey is ready to show the world what Mexican football passion looks like. Will you be there when the whistle blows?
            </p>
            <p><strong>¡Vamos México! See you in Monterrey 2026!</strong> ⚽🇲🇽</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}