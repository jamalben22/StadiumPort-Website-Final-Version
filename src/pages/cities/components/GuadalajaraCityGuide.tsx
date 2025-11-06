import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';

export function GuadalajaraCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* SEO Schema & Meta */}
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Guadalajara World Cup 2026 – Estadio Akron & City Experience',
            'Highlight Guadalajara’s cultural identity, artistic charm, and World Cup spirit around Estadio Akron in Mexico’s heartland.',
            `${import.meta.env.VITE_SITE_URL || 'http://localhost:3000'}/world-cup-2026-cities/guadalajara`
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-cities' },
            { name: 'Guadalajara', url: '/world-cup-2026-cities/guadalajara' }
          ]),
          generateImageObjectSchema('/images/cities/guadalajara-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'Guadalajara skyline – World Cup 2026 host city'
          })
        ]}
      />

      {(() => {
        const pageUrl = `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/world-cup-2026-cities/guadalajara`;
        const ogImage = `${import.meta.env.VITE_SITE_URL || ''}/images/cities/guadalajara-world-cup-2026.webp`;
        const title = 'Guadalajara World Cup 2026 – Estadio Akron & City Experience';
        const description = 'Highlight Guadalajara’s cultural identity, artistic charm, and World Cup spirit around Estadio Akron in Mexico’s heartland.';

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          document.title = title;
          const setMeta = (selector: string, attr: string, value: string) => {
            const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
            if (el) el.setAttribute(attr, value);
          };
          setMeta('meta[name="description"]', 'content', description);
          setMeta('link[rel="canonical"]', 'href', pageUrl);
          setMeta('meta[property="og:title"]', 'content', title);
          setMeta('meta[property="og:description"]', 'content', description);
          setMeta('meta[property="og:url"]', 'content', pageUrl);
          setMeta('meta[property="og:image"]', 'content', ogImage);
          setMeta('meta[property="twitter:title"]', 'content', title);
          setMeta('meta[property="twitter:description"]', 'content', description);
          setMeta('meta[property="twitter:url"]', 'content', pageUrl);
          setMeta('meta[property="twitter:image"]', 'content', ogImage);
        }, []);
        return null;
      })()}

      {/* Editorial Hero — matches NYC guide header styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/guadalajara-world-cup-2026.webp"
            alt="Guadalajara skyline – World Cup 2026 host city"
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
            <h1 className="editorial-hero-title">Guadalajara</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Mexico</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <span>Estadio Akron</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>48,071 capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Editorial presentation aligned with NYC guide */}
      <main className="editorial-article py-12">
        {/* Four Matches at the Volcano-Shaped Stadium */}
        <article className="editorial-body editorial-dropcap">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Four Matches at the Volcano-Shaped Stadium
          </h3>
          <p>
            On June 11, 2026—the same night Mexico City hosts the World Cup's opening match—Guadalajara kicks off its own World Cup journey at Estadio Akron, one of Mexico's most architecturally striking football venues. This city that gave the world mariachi music, tequila, and the iconic tortas ahogadas will host four group stage matches, including Mexico's second match on June 18. Get ready for what locals promise will be the most passionate atmosphere of the entire tournament.
          </p>
          <p>
            Estadio Akron holds 48,071 seats within a design that literally resembles a volcano, with a grassy exterior that blends into the landscape. Since opening in 2010, it's become home to Club Deportivo Guadalajara—Las Chivas—one of Mexico's most beloved football clubs and the only team in Liga MX that fields exclusively Mexican players. For World Cup 2026, FIFA will temporarily rename it "Estadio Guadalajara" under their corporate sponsorship policies, but locals will always call it Akron.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* The Pearl of the West Welcomes the World */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            The Pearl of the West Welcomes the World
          </h3>
          <p>
            Guadalajara isn't Mexico City's overwhelming sprawl or Cancún's beach resort energy—it's something different entirely. With a metro population just over five million, Mexico's second-largest city feels manageable, walkable, and genuinely welcoming. This is the cultural heart of Mexico, the place that birthed mariachi music in Plaza de los Mariachis, perfected tequila in nearby agave fields, and created the charreada (Mexican rodeo) that defines vaquero culture.
          </p>
          <p>
            The city wears its history proudly while embracing modernity. Walk through the historic center and you'll find stunning Spanish colonial architecture—the twin-towered Guadalajara Cathedral, Teatro Degollado, Hospicio Cabañas—then turn a corner into Colonia Americana where Art Nouveau mansions have been converted into hip coffee shops and boutique hotels. This balance between tradition and contemporary life makes Guadalajara uniquely charming.
          </p>
          <p>
            And here's what separates Guadalajara from other host cities: football isn't just popular here—it's tribal. The city hosts two fierce Liga MX rivals: Chivas playing at Estadio Akron and Atlas F.C. at the historic Estadio Jalisco (which hosted matches in both 1970 and 1986 World Cups). The Clásico Tapatío derby between these teams brings the entire city to a standstill. When Mexico plays at Estadio Akron on June 18, expect atmosphere that will make your hair stand up.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Getting to Estadio Akron: Plan Your Route */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting to Estadio Akron: Plan Your Route
          </h3>
          <p>
            Estadio Akron sits in Zapopan, a suburb about 30 minutes west of Guadalajara Centro, depending on traffic. Here's your transportation breakdown:
          </p>
          <p>
            <strong>Rideshare (The Easiest Option)</strong>: Uber operates extensively throughout Guadalajara and remains the most reliable way to reach Estadio Akron. From downtown hotels to the stadium typically costs 120-180 pesos (approximately $7-10 USD). On match days, expect surge pricing and heavy traffic—leave at least 90 minutes before kickoff.
          </p>
          <p>
            <strong>Public Transportation</strong>: Reaching the stadium via public transit takes 60-90 minutes and usually requires at least one transfer. While doable, it's not the most efficient option, especially after evening matches when you're navigating unfamiliar routes in the dark.
          </p>
          <p>
            <strong>Match Day Shuttles</strong>: FIFA and local organizers will likely implement shuttle services from central pickup points near major hotels and plazas. These haven't been officially confirmed yet, but stay updated through guadalajarafwc26.com as the tournament approaches. If shuttles materialize, they'll probably be your best bet—especially for avoiding traffic and parking headaches.
          </p>
          <p>
            <strong>Pro tip</strong>: If staying near Colonia Americana or Centro Histórico, consider organizing rideshare carpools with other fans heading to the match. Split costs, reduce traffic congestion, and build pre-game energy together.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Where to Stay: Finding Your Guadalajara Base */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Where to Stay: Finding Your Guadalajara Base
          </h3>
          <p>
            Guadalajara's accommodation scene balances historic charm with modern comfort, and location dramatically impacts your experience. Here's the insider breakdown:
          </p>
          <p>
            <strong>Colonia Americana (The Perfect Tournament Base)</strong>: This tree-lined neighborhood is Guadalajara's Brooklyn—hip, walkable, and packed with excellent restaurants and bars. Avenida Chapultepec serves as the main artery, closing to car traffic on weekends for pedestrian markets, live music, and outdoor dining.
          </p>
          <p>
            Villa Ganz is cataloged as Guadalajara's first boutique hotel, operating for over 30 years with just 10 rooms in a restored mansion. The location in Lafayette (adjacent to Colonia Americana) puts you blocks from Gallo Altanero—a "World's Best Bars" winner—and endless dining options. La Perla Hotel Boutique B&amp;B occupies a vintage home with two-foot-thick adobe walls, hundred-year-old Moorish mosaic floors, and nightly rooftop margaritas that have become legendary among repeat visitors.
          </p>
          <p>
            Bellwort Hotel brought 44 modernist rooms to Avenida Unión in 2021 after a complete renovation of a 1967 apartment building. The second-floor heated pool, convenient gym, and walkability to surrounding restaurants make it ideal for World Cup travelers who want contemporary comfort in an authentic neighborhood.
          </p>
          <p>
            <strong>Centro Histórico (Historic Heart)</strong>: DoubleTree by Hilton Guadalajara Centro Historico occupies a beautifully preserved historic building 0.8 miles from Colonia Americana, offering family-friendly amenities and that signature DoubleTree welcome cookie. Hotel Morales Historical &amp; Colonial Downtown Core blends boutique charm with colonial architecture, featuring free cribs and on-site childcare for families.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 2: Additional Stay Options & Booking */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Zapopan (Closest to the Stadium)
          </h3>
          <p>
            Hyatt Regency Guadalajara sits in upscale Zapopan near Andares Shopping Center—Guadalajara's most exclusive retail destination. If you plan to take the tequila tour in Santiago de Tequila, return here to sip craft cocktails at the hotel pool. Several business-style properties near Estadio Akron offer convenience for match days but less atmosphere for exploring authentic Guadalajara culture.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-bank-card-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Budget-Conscious Options
          </h3>
          <p>
            Hotel Isabel in Colonia Americana provides clean, cheap accommodation with a pool and communal barbecue areas—perfect for meeting fellow travelers. The building feels more like an apartment complex than a traditional hotel, creating that social hostel vibe without sacrificing privacy.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <p>
            <strong>Book immediately</strong>. Guadalajara expects massive World Cup demand, and the city's best properties fill fast during major events. June 2026 reservations opened months ago—waiting means settling for less desirable neighborhoods or inflated prices.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 2: June Weather */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-cloud-rain-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            June Weather: What to Expect
          </h3>
          <p>
            Daytime highs typically reach 30-32°C (86-90°F) in Guadalajara during June, falling to 16-18°C (61-64°F) at night—warm overall but that altitude (1,566 meters above sea level) creates surprisingly comfortable evenings. The challenge? June marks the rainy season's beginning, fundamentally changing the weather equation.
          </p>
          <p>
            Expect 14-23 rainy days throughout June with total monthly precipitation reaching 111-193mm. Rain typically arrives as afternoon or evening thunderstorms rather than all-day downpours, but count on getting wet at some point during your stay. There are normally 7 hours of bright sunshine each day despite the clouds and rain.
          </p>
          <p>
            <strong>Pack strategically</strong>: Lightweight, breathable clothing (cotton or linen) for daytime heat, compact rain jacket or umbrella (non-negotiable), comfortable walking shoes that handle wet streets, light sweater for evening matches and air-conditioned restaurants, sunscreen and sunglasses—UV exposure remains intense despite cloud cover, and a hat for sun protection during afternoon exploration.
          </p>
          <p>
            The heat index can feel 8°C (15°F) hotter than actual temperature due to humidity reaching 60-63% in June. Stay hydrated, seek shade during midday heat (10 AM-4 PM), and embrace the siesta culture—restaurants and shops often close for a few hours in early afternoon.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 2: Beyond Football */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Beyond Football: The Real Guadalajara Experience
          </h3>
          <p>
            If you're flying to Guadalajara just for a match and leaving immediately, you're committing a travel crime. This city rewards exploration.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Tequila Town (The Pilgrimage Every Fan Must Make)
          </h3>
          <p>
            About 65 kilometers northwest of Guadalajara sits Tequila, the UNESCO World Heritage town where Mexico's most famous spirit was born. The entire landscape—endless blue agave fields stretching across volcanic soil—earned UNESCO protection in 2006 as an "outstanding example of cultural landscape."
          </p>
          <p>
            Tour options range from quick distillery visits to full-day experiences. Casa Sauza, Jose Cuervo, and dozens of smaller craft distilleries offer tastings and tours explaining how agave plants (taking 7-10 years to mature) become tequila through traditional or modern production methods. The best tours include agave field walks, jimador demonstrations (watching skilled workers harvest agave with coas), barrel room visits, and multi-tequila tastings comparing blanco, reposado, añejo, and extra añejo expressions.
          </p>
          <p>
            The Tequila Express tourist train departs Guadalajara on weekends, offering all-inclusive experiences with live mariachi, meals, and distillery visits. Alternatively, hire a private driver or join organized tours departing daily from Guadalajara hotels.
          </p>
          <p>
            <strong>Pro tip</strong>: Sample the local drink "cantarito"—a refreshing mix of tequila, orange juice, grapefruit soda, and lime served in traditional clay cups. It's lighter than straight tequila and perfect for hot June afternoons.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-government-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Historic Guadalajara: Architecture and Culture
          </h3>
          <p>
            Plaza de Armas anchors the historic center, surrounded by the stunning Guadalajara Cathedral with its iconic twin neo-Gothic towers covered in yellow tiles. Built between 1558 and 1618, the cathedral represents over a century of architectural evolution blending Gothic, Baroque, Moorish, and Neoclassical elements.
          </p>
          <p>
            Teatro Degollado, built between 1856 and 1866, hosts opera, ballet, and the Jalisco Philharmonic Orchestra. The neoclassical façade features a relief depicting Apollo surrounded by the nine muses. Inside, the ceiling mural pays homage to Dante's Divine Comedy. Check the performance schedule—catching a show here adds cultural depth to your World Cup journey.
          </p>
          <p>
            Hospicio Cabañas, now Instituto Cultural Cabañas, achieved UNESCO World Heritage status in 1997 as one of the oldest and largest orphanage-hospital complexes in the Americas. The interior chapel ceiling features murals by José Clemente Orozco, considered among Mexico's finest artistic treasures. The Man of Fire fresco alone justifies the visit.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ancient-gate-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Tlaquepaque and Tonalá: Artisan Heaven
          </h3>
          <p>
            Just southeast of central Guadalajara, these colonial towns showcase traditional Mexican crafts—pottery, blown glass, textiles, and folk art. Tlaquepaque's pedestrian-friendly streets feature over 300 shops and galleries alongside colorful colonial architecture and the beautiful Parroquia de San Pedro Apóstol church.
          </p>
          <p>
            Sunday mornings at Tonalá's street market transform the town into Mexico's largest artisan market, with hundreds of vendors selling everything from clay pots to intricate sculptures. Arrive early (before 10 AM) for best selection and cooler temperatures.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Plaza de las 9 Esquinas: Birria Central
          </h3>
          <p>
            This plaza has become legendary for birria—the slow-cooked goat stew that defines Jalisco cuisine. Several restaurants surround the plaza, each claiming the best recipe. Order a cazuela (large bowl) with your choice of meat cuts, accompanied by fresh handmade tortillas, onions, cilantro, and lime. The rich, spicy broth warms the soul, and the tender meat practically melts.
          </p>
          <p>
            Las 9 Esquinas operates as a communal dining experience—expect to share tables, eat with locals, and possibly have mariachi bands serenade your table for tips. This is Guadalajara at its most authentic.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 3: Eating Your Way Through Guadalajara */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Eating Your Way Through Guadalajara
          </h3>
          <p>
            Forget what you think you know about Mexican food—Guadalajara operates on its own delicious wavelength.
          </p>
          <p>
            <strong>Tortas Ahogadas (The Sandwich That Defines a City)</strong>: Literally "drowned sandwich," this is Guadalajara's signature dish. A birote salado (special crusty sourdough roll) is stuffed with carnitas (typically pork loin, though adventurous eaters request surtido—all the meats including pork belly, stomach, and crispy skin), then completely submerged in a spicy tomato-chile de árbol sauce. The bread's crusty exterior withstands the drowning, maintaining texture while absorbing flavor.
          </p>
          <p>
            Locals insist tortas ahogadas can only be made in Guadalajara because of elevation, water quality, and local yeast strains—making birote salado impossible to replicate elsewhere. Truth or legend? Doesn't matter when you're eating one.
          </p>
          <p>
            Tortas Toño dominates the torta ahogada scene with multiple locations across Guadalajara. The Providencia and Chapalita restaurants stay packed with locals who've been eating here for decades. Prices run 59-70 pesos ($3-4 USD) depending whether you order classic pork or the shrimp version. El Viejito and Tortas Ahogadas Clement's also earn local praise, with Clement's pork belly variation selling out fast on busy weekends.
          </p>
          <p>
            <strong>Birria (The Stew You'll Dream About)</strong>: This slow-cooked goat stew marinated in chilies, garlic, and spices creates a rich, aromatic broth with impossibly tender meat. Traditional birria requires hours of preparation, resulting in deep flavors that reward patient cooking.
          </p>
          <p>
            La Victoria has been perfecting birria since 1948, earning endorsements from local celebrity chefs including Paco Ruano (of Alcalde restaurant). Featured on "Las Crónicas del Taco," this birreria represents old Guadalajara—walls covered with historic newspaper clippings, family recipes passed through generations, and locals who've eaten here their entire lives. Order a mixed bowl to sample different cuts, from spine and ribs to leaner loin.
          </p>
          <p>
            Birriería "David" inside Mercado Alcalde operates the same stall for over 50 years. Locals line up before 10 AM opening time because the best cuts sell out fast. The veal birria here earns devoted fans who return weekly.
          </p>
          <p>
            <strong>Fine Dining Excellence</strong>: Alcalde, ranked #12 in Latin America's 50 Best Restaurants 2023, showcases Chef Francisco "Paco" Ruano's "cocina franca"—traditional Mexican ingredients with precise European-style plating. Having worked at Mugaritz and Noma before opening Alcalde in 2013, Ruano brings world-class credentials to contemporary Mexican cuisine. The tasting menu changes quarterly and runs approximately 3,700 pesos ($185 USD) per person. Reserve at least two weeks ahead.
          </p>
          <p>
            Xokol in the Santa Tere neighborhood offers cutting-edge cuisine from chef team Xrysw Ruelas and Oscar Segundo. The vibrant open kitchen and communal dining table create intimate atmosphere where innovation meets tradition. Expect surprising flavor combinations using local Jalisco ingredients prepared with modern techniques.
          </p>
          <p>
            <strong>Carne en su Jugo (Comfort in a Bowl)</strong>: This hearty dish combines beef, beans, bacon, and a rich, smoky broth—pure comfort food that Guadalajara locals swear their grandmother makes best. The Santa Teresita neighborhood concentrates several excellent options for sampling this regional specialty.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 3: Getting Around Like a Tapatío */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Getting Around Like a Tapatío (Guadalajara Local)
          </h3>
          <p>
            Guadalajara's Peribús (bus rapid transit) and conventional bus network operate extensively, but navigation can challenge first-time visitors. Uber and local taxis provide more straightforward options for tourists on limited time.
          </p>
          <p>
            <strong>Uber</strong>: Widely available, safe, and affordable. Downtown to Zapopan typically costs 80-150 pesos. Use Uber for stadium trips, restaurant hopping, and reaching attractions outside walking distance.
          </p>
          <p>
            <strong>Walking</strong>: Colonia Americana, Centro Histórico, and nearby neighborhoods reward pedestrian exploration. Avenida Chapultepec closes to vehicles on weekends, creating perfect conditions for strolling between cafes, bars, and shops.
          </p>
          <p>
            <strong>Bike Shares</strong>: MiBici bike-sharing system operates throughout central Guadalajara with stations near major attractions. Download the app, register, and explore on two wheels. Sunday street closures on Avenida Chapultepec create ideal cycling conditions.
          </p>
          <p>
            <strong>Airport to City</strong>: Miguel Hidalgo y Costilla International Airport (GDL) sits about 17 kilometers south of downtown. Uber from airport to Centro or Colonia Americana costs 180-280 pesos (approximately $10-15 USD) and takes 25-40 minutes depending on traffic. Official airport taxis cost slightly more but provide fixed rates.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 3: Practical Guadalajara Intelligence */}
        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Practical Guadalajara Intelligence
          </h3>
          <p>
            <strong>Language</strong>: Spanish dominates, though tourist-facing businesses employ English speakers. Learning basic phrases (buenos días, por favor, gracias, la cuenta) improves interactions and shows respect.
          </p>
          <p>
            <strong>Currency & Tipping</strong>: Mexican pesos (MXN) are the currency. Credit cards work at hotels, established restaurants, and shops, but carry cash for street food, markets, and smaller establishments. Tipping: 10-15% at casual restaurants, 15-20% at upscale dining, 20-50 pesos per day for hotel housekeeping, 10-20 pesos per drink at bars.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-shield-check-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Safety
          </h3>
          <p>
            Guadalajara ranks among Mexico's safer large cities for tourists. Centro Histórico, Colonia Americana, Zapopan, and Tlaquepaque remain safe day and night with normal urban awareness. Avoid displaying expensive jewelry or electronics, keep phones secured in crowded areas, use official taxis or Uber rather than street taxis, and don't accept drinks from strangers.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-water-flash-line text-sky-400 dark:text-sky-300 text-3xl"></i>
            Drinking Water
          </h3>
          <p>
            Tap water isn't safe for drinking—stick with bottled water widely available everywhere. Most restaurants and hotels provide complimentary bottled water.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-article">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-night-clear-line text-fuchsia-400 dark:text-fuchsia-300 text-3xl"></i>
            Nightlife
          </h3>
          <p>
            Guadalajara's bar scene concentrates in Colonia Americana along Avenida Chapultepec. Gallo Altanero earned recognition among "World's Best Bars" for innovative cocktails and vibrant atmosphere. Bars typically stay open until 2-3 AM on weekends, with some clubs operating until dawn.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-yellow-400 dark:text-yellow-300 text-3xl"></i>
            Fan Festival & World Cup Atmosphere
          </h3>
          <p>
            Plaza Liberación in Guadalajara's Historic Center will host the official FIFA Fan Festival, offering interactive activities, live match broadcasts, and free limited-access celebrations throughout the tournament. This becomes the gathering point for fans without match tickets, creating festival atmosphere with food vendors, entertainment, and massive screens.
          </p>
          <p>
            FIFA ticket sales continue through FIFA.com/tickets, with additional release phases closer to the tournament. Register even if you missed early sales—returns and last-minute availability appear regularly.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Why Guadalajara Deserves Extra Days
          </h3>
          <p>
            Here's what most World Cup guides won't tell you: Guadalajara isn't just affordable compared to other host cities—it's authentically Mexican in ways that tourist-heavy destinations have lost. This city hasn't been sanitized for international visitors. You'll eat where locals eat, drink where locals drink, and experience Mexican culture that hasn't been packaged for export.
          </p>
          <p>
            The World Cup gives you permission to visit; the city gives you reasons to extend your stay. Arrive three days before your match. Take that tequila tour to Santiago. Eat tortas ahogadas at three different places to pick your favorite. Watch sunset from Teatro Degollado's steps while mariachi groups tune instruments. Shop for pottery in Tlaquepaque. Try birria at Las 9 Esquinas. Dance in Colonia Americana bars until 3 AM. Walk through Mercado San Juan de Dios—one of Latin America's largest indoor markets.
          </p>
          <p>
            Because June 11, 18, 23, and 26 bring World Cup matches to Estadio Akron, but Guadalajara offers experiences that outlast any 90-minute match. This is Mexico's cultural soul, the place where traditions aren't performed for tourists—they're simply how people live.
          </p>
          <p>
            Book your Guadalajara journey now. The matches. The mariachi. The tequila. The tortas ahogadas that will haunt your dreams. This is where Mexico's heart beats loudest—make sure you feel it.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}