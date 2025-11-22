import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Link } from 'react-router-dom';

export function MexicoCityGuide() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/mexico-city-world-cup-2026.webp'
    document.head.appendChild(link)
  }, [])
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />

      {/* SEO Schema & Meta */}
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Mexico City World Cup 2026: Complete Travel Guide',
            'Showcase Mexico City’s vibrant skyline, deep culture, and historic status as a global football capital hosting World Cup matches at Estadio Azteca.',
            `${siteUrl}/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Mexico City', 'Estadio Azteca'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Host Cities', url: `${siteUrl}/world-cup-2026-host-cities` },
            { name: 'Mexico City', url: `${siteUrl}/world-cup-2026-host-cities/mexico-city` }
          ]),
          generateImageObjectSchema('/images/cities/mexico-city-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'Mexico City skyline – World Cup 2026 host city'
          })
        ]}
      />

      {(() => {
        const pageUrl = `${siteUrl}/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide`;
        const ogImage = `${siteUrl}/images/cities/mexico-city-world-cup-2026.webp`;
        const title = 'Mexico City World Cup 2026: Complete Travel Guide | StadiumPort';
        const description = 'Showcase Mexico City’s vibrant skyline, deep culture, and historic status as a global football capital hosting World Cup matches at Estadio Azteca.';

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
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
          setPageMeta({ title, description, url: pageUrl, image: ogImage, locale: 'en_US', publishedTime: '2025-11-16T09:00:00Z', modifiedTime: new Date().toISOString(), section: 'Host Cities', tags: ['World Cup 2026', 'Host Cities', 'Mexico City', 'Estadio Azteca'] })
        }, []);
        return null;
      })()}

      {/* Editorial Hero — matches NYC guide header styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/mexico-city-world-cup-2026.webp"
            alt="Mexico City skyline – World Cup 2026 host city"
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
            </div>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb navigation for Mexico City" className="breadcrumb-ultra-premium mt-2">
              <ol>
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link" title="Home">
                    <svg className="breadcrumb-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="truncate">Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <Link to="/world-cup-2026-host-cities" className="breadcrumb-link" title="Host Cities">
                    <span className="truncate">Host Cities</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <span className="breadcrumb-current" title="Mexico City" aria-current="page">
                    <span className="truncate">Mexico City</span>
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">Mexico City World Cup 2026: Complete Travel Guide</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Mexico</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <Link to="/world-cup-2026-stadiums/estadio-azteca" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 text-emerald-700 dark:text-emerald-400">Estadio Azteca</Link>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>90,000 capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Editorial presentation aligned with NYC guide */}
      <main id="main-content" className="editorial-article py-12">
        {/* The Only Stadium to Host Three World Cup Opening Matches */}
        <article className="editorial-body editorial-dropcap">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            The Only Stadium to Host Three World Cup Opening Matches
          </h3>
          <p>
            On June 11, 2026, football history will repeat itself in the most spectacular way possible. <Link to="/world-cup-2026-stadiums/estadio-azteca" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link>—El Coloso de Santa Úrsula—will welcome the world for the opening match of the FIFA World Cup 2026, becoming the only stadium on Earth to host an opening match for the third time. Mexico City is one of the 16 host cities for World Cup 2026—{' '}<Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the host cities hub</Link>. After witnessing Pelé's 1970 triumph and Maradona's controversial brilliance in 1986, the Azteca prepares to add another chapter to the greatest stadium story ever told.
          </p>
          <p>
            Mexico City will host five matches total during the tournament: three group stage games, one round of 32 match, and one round of 16 match. The stadium is undergoing its most extensive renovation in decades—a two-year, $180 million transformation that will increase capacity to 90,000 spectators while adding 2,000 square meters of LED screens, new hospitality areas covering over 7,000 square meters, and completely modernized facilities. The renovated Azteca reopens March 28, 2026, just 75 days before kickoff.
          </p>
        </article>
        {/* Essential Links module */}
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
          <div className="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential Mexico City Links</div>
          <div className="space-y-1 text-slate-800 dark:text-slate-200">
            <div>
              🏟️ <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/estadio-azteca" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Estadio Azteca Guide</Link>
            </div>
            <div>
              🗺️ <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
            </div>
            <div>
              ✈️ <strong>Nearby Cities:</strong> <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</Link> | <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link> | <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</Link>
            </div>
          </div>
        </div>
        <hr className="editorial-divider" />

        {/* The Legend of El Azteca */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            The Legend of El Azteca
          </h3>
          <p>
            Since opening in 1966, Estadio Azteca has stood alone among the world's great stadiums. This is the only venue to host two World Cup finals (1970 and 1986), the only stadium where both Pelé and Maradona lifted the trophy, and soon, the only stadium to welcome three separate World Cup tournaments. The venue sits at 2,240 meters above sea level in the Coyoacán borough, and that altitude isn't just a statistic—it's a game-changer that's influenced countless historic matches.
          </p>
          <p>
            The stadium earned its nickname "Coloso de Santa Úrsula" (Colossus of Santa Úrsula) for good reason. Before recent renovations began in 2024, it held 87,523 seats, making it Latin America's largest stadium and the sixth-largest football venue worldwide. The expansion to 90,000 for 2026 ensures Mexico's fortress will host World Cup matches under conditions that challenge even the most elite athletes. Visiting teams have learned the hard way that playing at altitude, in front of 90,000 passionate Mexican fans, creates one of football's most intimidating atmospheres.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Getting to Estadio Azteca: Your Transport Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting to Estadio Azteca: Your Transport Strategy
          </h3>
          <p>
            Estadio Azteca sits in southern Mexico City, about 15 kilometers from the historic center. The good news? You don't need a car. The better news? Mexico City's Metro system connects directly to the stadium via the Xochimilco Light Rail.
          </p>
          <p>
            <strong>Metro Line 2 + Xochimilco Light Rail (The Best Route)</strong>: Take Metro Line 2 (the Blue Line) south to Tasqueña station, the line's southern terminus. At Tasqueña, transfer to the Xochimilco Light Rail and take it just two stops to Estadio Azteca station. The light rail drops you steps from the stadium entrance. Total journey time from downtown Zócalo to the stadium: approximately 45 minutes. Trains run frequently, and for 2026, expect enhanced service on match days.
          </p>
          <p>
            <strong>Important Update</strong>: The Tasqueña light rail station underwent major expansion in 2025, adding a Barcelona-style platform configuration specifically to handle increased World Cup crowds. The renovation ensures smooth passenger flow even when tens of thousands converge on the stadium.
          </p>
          <p>
            <strong>Metro Cards</strong>: Purchase a rechargeable Metro card at any station. Load it with 200-300 pesos and you'll have sufficient credit for a weekend of travel. Single fares run about 5-7 pesos—remarkably affordable compared to North American transit systems.
          </p>
          <p>
            <strong>Pro tip</strong>: Download the "Mi Transporte" or "Moovit" app before arriving. Both show real-time Metro and light rail arrivals, helping you navigate the system like a local.
          </p>
          <p className="mt-4">
            Planning a multi-city World Cup itinerary? Combine matches in <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara</Link> and <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link>. For a cross-border experience, add <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link> to your trip.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Where to Stay: Finding Your Mexico City Base */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Where to Stay: Finding Your Mexico City Base
          </h3>
          <p>
            Mexico City sprawls across 1,500 square kilometers, so location matters. For World Cup 2026, you'll want accommodation that balances access to the Azteca with proximity to the city's incredible dining, nightlife, and cultural attractions.
          </p>
          <p>
            <strong>Historic Center (Centro Histórico)</strong>: Gran Hotel Ciudad de México overlooks the Zócalo from a stunning 1890s building, featuring a rooftop restaurant with unmatched views of the plaza. Zocalo Central & Rooftop Mexico City occupies a prime position next to the National Cathedral, offering refurbished rooms (some with Zócalo views), free breakfast, and that spectacular rooftop terrace. These properties place you steps from Metro Line 2 at Zócalo station—a straight shot to Tasqueña and the light rail to Azteca.
          </p>
          <p>
            <strong>Reforma District (Business & Culture Hub)</strong>: Sofitel Mexico City Reforma delivers French elegance meets Mexican culture with 275 rooms featuring sweeping city views, a 39th-floor spa, and Cityzen—the rooftop bar on the 38th floor with signature cocktails and panoramic vistas. Mexico City Marriott Reforma Hotel sits on Paseo de la Reforma near Zona Rosa, providing easy access to Chapultepec Park and direct Metro connections. Barceló México Reforma occupies downtown's Paseo de la Reforma with 505 rooms, complete wellness facilities, and a tequila museum on-site.
          </p>
          <p>
            <strong>Polanco (Upscale & Walking Distance to Chapultepec)</strong>: The Hyatt Regency Mexico City and surrounding Polanco hotels put you in Mexico City's most exclusive neighborhood, steps from the National Museum of Anthropology and Chapultepec Park. This area combines luxury shopping, world-class dining (including Pujol and Quintonil), and convenient Metro access.
          </p>
          <p>
            <strong>Condesa & Roma (Hip Neighborhoods)</strong>: Condesa DF, designed by Parisian designer India Mahdavi, occupies a 1928 building filled with custom furniture and opening onto wooden terraces. These bohemian neighborhoods offer tree-lined streets, boutique hotels, exceptional restaurants, and authentic Mexico City character. You'll trade direct stadium access for cultural immersion—totally worth it if you're staying several days.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 2: Booking, Weather, and Exploration */}
        <article className="editorial-body">
          <p>
            <strong>Book immediately</strong>. Mexico City expects over five million visitors during the World Cup period, and the city's hotel infrastructure, while extensive, will face unprecedented demand. June 2026 reservations opened months ago—waiting means settling for less desirable locations or paying premium prices.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-cloud-rain-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            June Weather: What to Expect and Pack
          </h3>
          <p>
            June marks the beginning of Mexico City's rainy season, fundamentally changing the weather equation. Expect daytime highs around 23-25°C (74-77°F), dropping to 12-13°C (54-55°F) at night—comfortable overall, but that altitude creates cool evenings even in summer.
          </p>
          <p>
            The challenge? June typically sees 15-23 rainy days with monthly rainfall reaching 108-112mm. Rain usually arrives as afternoon or evening showers rather than all-day downpours, but count on getting wet at some point during your stay.
          </p>
          <p>
            <strong>Pack strategically</strong>: Layering is essential. Lightweight rain jacket (non-negotiable), comfortable walking shoes that can handle wet streets, light sweater or hoodie for evening matches and air-conditioned spaces, and sunscreen—despite the clouds, UV exposure at 2,240 meters altitude is intense. The high elevation means thinner atmosphere and stronger sun. Bring sunglasses and stay hydrated.
          </p>
          <p>
            <strong>Altitude Awareness</strong>: Many visitors underestimate Mexico City's 2,240-meter elevation. Take it easy your first day—walk slowly, drink extra water, avoid heavy alcohol consumption immediately after arriving, and don't be surprised if you feel slightly winded climbing stairs. Your body needs 24-48 hours to adjust.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Beyond the Pitch: Mexico City Demands Exploration
          </h3>
          <p>
            If you're flying to Mexico City just for a match and leaving immediately, you're making a catastrophic mistake. This city rewards—no, demands—exploration.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ancient-gate-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Chapultepec Park & Castle (Non-Negotiable)
          </h3>
          <p>
            Bosque de Chapultepec sprawls across 866 hectares, making it one of the largest urban parks in the Western Hemisphere. Within its green expanse sit nine museums, gardens, a zoo, over 100 statues and fountains, and the crown jewel: Chapultepec Castle.
          </p>
          <p>
            Castillo de Chapultepec occupies Chapultepec Hill's summit, offering breathtaking panoramic views of Mexico City. Built in the 18th century as a summer retreat for Spanish viceroys, it later became the official residence of Mexican presidents and Emperor Maximilian I. Today, it houses the National Museum of History, showcasing preserved rooms that reflect different eras, impressive murals by Mexican masters, and historical artifacts spanning centuries.
          </p>
          <p>
            The National Museum of Anthropology, also within Chapultepec, ranks among the world's premier archaeological museums. Its collection includes the Stone of the Sun (Aztec Calendar Stone), the massive Olmec heads, and countless artifacts from Maya, Aztec, Toltec, and other Mesoamerican civilizations. Budget at least three hours—you could easily spend an entire day here.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-government-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            The Zócalo & Historic Center (Where It All Began)
          </h3>
          <p>
            Plaza de la Constitución—the Zócalo—ranks among the world's largest public squares and serves as Mexico City's beating heart. The Metropolitan Cathedral dominates the plaza's north side, built between 1573 and 1813 with stones from destroyed Aztec temples. Adjacent sits the Palacio Nacional, featuring Diego Rivera's epic murals depicting Mexican history.
          </p>
          <p>
            Templo Mayor ruins, discovered in 1978, reveal the Aztec capital Tenochtitlan's main temple directly beneath modern Mexico City. The adjacent museum showcases artifacts recovered from excavations, including the massive circular Coyolxauhqui stone.
          </p>
          <p>
            Walking distance from Zócalo, Palacio de Bellas Artes stuns with Art Nouveau and Art Deco architecture, housing murals by Diego Rivera, David Alfaro Siqueiros, and José Clemente Orozco. The building hosts ballet, opera, and cultural performances—check the schedule before your visit.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ancient-pavilion-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Teotihuacan (The City Where Gods Were Born)
          </h3>
          <p>
            About 50 kilometers northeast of Mexico City, Teotihuacan ranks as Mexico's most visited archaeological site and a UNESCO World Heritage Site since 1987. This ancient Mesoamerican city reached its zenith around 100 AD, covering 83 square kilometers with a population potentially exceeding 100,000.
          </p>
          <p>
            The Pyramid of the Sun rises 65 meters—one of the tallest pre-modern pyramids worldwide. The Pyramid of the Moon anchors the Avenue of the Dead, the site's main thoroughfare. Climbing these pyramids offers unforgettable views across the Valley of Mexico, though the altitude and stairs challenge even fit visitors.
          </p>
          <p>
            <strong>Getting There</strong>: Buses depart regularly from Mexico City's North Bus Terminal (Terminal del Norte) to Teotihuacan. Journey time: about one hour. Alternatively, book a guided tour that includes transportation, often with stops at the Basilica de Guadalupe and a chance to taste pulque (traditional fermented agave drink).
          </p>
          <p>
            <strong>Pro tip</strong>: Arrive early—by 8 AM if possible. Morning light creates perfect photography conditions, crowds remain manageable, and temperatures stay comfortable before afternoon heat arrives. Sunrise hot air balloon flights over Teotihuacan offer magical perspectives of the pyramids emerging from morning mist.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-sailboat-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Xochimilco (Floating Gardens & Weekend Fiesta)
          </h3>
          <p>
            Southern Mexico City's Xochimilco borough preserves canals and chinampas (artificial islands) dating to pre-Hispanic times—a UNESCO World Heritage Site since 1987. Rent a brightly painted trajinera (flat-bottomed boat) and float through the waterways while mariachi bands, food vendors, and flower sellers navigate alongside in their own boats.
          </p>
          <p>
            Weekends transform Xochimilco into a floating party, with locals celebrating birthdays, anniversaries, and simply Sunday afternoon. Weekdays offer more tranquil experiences. Either way, bring cash for food, drinks, and mariachi serenades. A two-hour trajinera rental typically costs 350-600 pesos depending on boat size and negotiation skills.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 3: The Culinary Capital */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            The Culinary Capital: World-Class Dining Awaits
          </h3>
          <p>
            Mexico City's food scene has exploded onto the global stage, earning the city its own Michelin Guide in 2024 and claiming spots on every major international restaurant ranking.
          </p>
          <p>
            <strong>Pujol (Two Michelin Stars)</strong>: Chef Enrique Olvera's flagship occupies Polanco, consistently ranking among the world's 50 best restaurants. The signature dish—Mole Madre, Mole Nuevo—features mole aged over 3,500 days served alongside fresh mole. The seven-course tasting menu runs around 3,500 pesos (approximately $175 USD), and you'll want to book five to seven weeks in advance. The experience justifies every peso—this is Mexican haute cuisine at its absolute finest.
          </p>
          <p>
            <strong>Quintonil (Two Michelin Stars, World's #3 Restaurant 2025)</strong>: Chef Jorge Vallejo and manager Alejandra Flores created something extraordinary in this Polanco dining room. The seasonal tasting menu prioritizes heirloom vegetables, native herbs, and insects, with 98% of ingredients sourced from Mexico. The 11-course tasting menu costs around 4,500 pesos ($260 USD), or 6,825 pesos with wine pairing. Critics praise Quintonil's boundary-pushing Mexican cuisine combined with exceptional hospitality—it's the complete package.
          </p>
          <p>
            <strong>Contramar (Bib Gourmand)</strong>: This La Condesa classic, operating since 1998, sets the standard for Mexico City seafood. The pescado a la talla (grilled fish with red and green rubs) is legendary, and the lively atmosphere makes every meal feel celebratory. Prices remain reasonable compared to Pujol and Quintonil—expect 500-800 pesos per person before drinks.
          </p>
          <p>
            <strong>Street Food & Markets</strong>: St. Lawrence Market gets all the Toronto attention, but Mexico City's mercados are where locals actually eat. Mercado de San Juan specializes in exotic ingredients and prepared foods. Mercado Roma in Roma neighborhood offers upscale food stalls in a modern setting. For authentic tacos, hit street stands in Roma, Condesa, or near your hotel—locals will point you toward their favorites. Tacos al pastor, tacos de carnitas, and quesadillas run 15-30 pesos each. Eat where you see crowds of Mexicans.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Getting Around Like a Chilango (Mexico City Local)
          </h3>
          <p>
            Mexico City's Metro system—Sistema de Transporte Colectivo—operates 195 stations across 12 lines covering 225 kilometers. At 5-7 pesos per ride, it's one of the world's most affordable rapid transit systems.
          </p>
          <p>
            <strong>Metro Tips</strong>: Avoid rush hours (7-10 AM, 5-8 PM) when trains pack sardine-tight. Women-only cars operate during peak hours—look for pink signage. Keep wallets and phones secured—pickpockets target distracted tourists. Each station features unique iconography, making navigation easier even without reading Spanish.
          </p>
          <p>
            <strong>Metrobús</strong>: This bus rapid transit system operates dedicated lanes on major avenues. Line 4 connects both airport terminals to the city center. Load your Metro card and use it across Metro, Metrobús, and some EcoBici bike-sharing stations.
          </p>
          <p>
            <strong>Taxis & Ride-Sharing</strong>: Uber and Didi operate extensively throughout Mexico City and remain safe, reliable options. Official white-and-pink taxis (Taxi Rosa) offer service from airports and major hotels. Avoid hailing random taxis on streets—use ride-sharing apps or hotel-arranged transportation instead.
          </p>
          <p>
            <strong>Walking</strong>: The historic center, Roma, Condesa, and Polanco neighborhoods reward pedestrian exploration. Paseo de la Reforma—the city's main boulevard—stretches from Chapultepec to the historic center, lined with monuments, sculptures, and Sunday street closures for cyclists and pedestrians.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Part 4: Practical Mexico City Intelligence */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Practical Mexico City Intelligence
          </h3>
          <p>
            <strong>Airport to City Center</strong>: Mexico City International Airport (Benito Juárez) sits about 13 kilometers east of downtown. Metrobús Line 4 connects both terminals directly to the city center—the cheapest option at around 30 pesos. Official airport taxis cost 200-400 pesos depending on destination. Uber/Didi run 150-300 pesos to central areas.
          </p>
          <p>
            <strong>Currency & Tipping</strong>: Mexican pesos (MXN) are the currency. Credit cards work at hotels, restaurants, and most shops, but carry cash for street food, markets, and small purchases. Tipping: 10-15% at casual restaurants, 15-20% at upscale dining, 10-20 pesos per drink at bars, 20-50 pesos per day for hotel housekeeping.
          </p>
          <p>
            <strong>Language</strong>: Spanish dominates, though many tourist-facing businesses employ English speakers. Learning basic Spanish phrases (por favor, gracias, cuánto cuesta, la cuenta por favor) improves interactions and shows respect.
          </p>
          <p>
            <strong>Safety</strong>: Mexico City, like any major metropolis, requires standard urban awareness. The historic center, Polanco, Condesa, Roma, and Chapultepec remain safe day and night with normal precautions. Avoid displaying expensive jewelry or electronics, keep phones secured in crowded Metro cars, don't accept drinks from strangers, and use official taxis or ride-sharing apps rather than street taxis.
          </p>
          <p>
            The city has installed over 123,000 security cameras for the World Cup, aiming to become "the most video-surveilled city in the Americas." Security presence will be substantial around Estadio Azteca and fan zones.
          </p>
          <p>
            <strong>Drinking Water</strong>: Tap water isn't safe for drinking—stick with bottled water widely available everywhere. Most hotels provide complimentary bottled water daily.
          </p>
        </article>
        <hr className="editorial-divider" />

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Fan Festival & World Cup Atmosphere
          </h3>
          <p>
            Mexico City designated the historic Zócalo plaza for the official FIFA Fan Festival, offering free live match broadcasts on massive screens throughout the tournament. The Zócalo transforms into a celebration zone with food vendors, entertainment, and that electric Mexican football passion that makes this country special.
          </p>
          <p>
            FIFA tickets continue selling through FIFA.com/tickets, with additional phases opening closer to the tournament. Register even if you missed early sales—returns and last-minute availability appear regularly.
          </p>
        </article>
        <hr className="editorial-divider" />

        {/* Related Destinations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Plan Your Mexico World Cup Adventure
          </h3>
          <p>
            Mexico City is the perfect starting point for exploring Mexico's World Cup host cities and experiencing the country's rich football culture.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4">Popular Combinations:</h4>
            </div>
            <div>
              <h4 className="editorial-h4">Mexico Circuit</h4>
              <p>
                Discover all three Mexican host cities: Start in Mexico City (current), travel west to <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="underline">Guadalajara</Link> for mariachi and tequila culture, then north to <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline">Monterrey</Link> for mountain landscapes and modern energy.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Cross-Border Experience</h4>
              <p>
                Many international visitors combine Mexico City with US host cities like <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="underline">Los Angeles</Link>, <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="underline">Dallas</Link>, or <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="underline">Houston</Link> for a diverse North American adventure.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Central America Gateway</h4>
              <p>
                Mexico City's location makes it easy to explore other Mexican destinations or connect to nearby Central American countries before or after the tournament.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link to="/world-cup-2026-host-cities" className="underline">Browse All World Cup 2026 Host Cities</Link>
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Part 5: Why Mexico City Deserves Extra Days */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Why Mexico City Deserves Extra Days
          </h3>
          <p>
            Here's the truth that most World Cup guides won't tell you: Mexico City isn't just a host city—it's one of the Western Hemisphere's most fascinating, frustrating, overwhelming, and ultimately rewarding destinations. The World Cup gives you permission to visit; the city gives you reasons to stay.
          </p>
          <p>
            This is where 21 million people create daily chaos and unexpected magic. Where ancient Aztec temples sit beneath colonial cathedrals that neighbor modern skyscrapers. Where street tacos at midnight rival Michelin-starred dinners at 9 PM. Where museums hold treasures that would headline collections anywhere else in the world. Where altitude challenges your lungs, mole challenges your palate, and mariachi serenades challenge you not to dance.
          </p>
          <p>
            Extend your trip. Arrive three days before your match. Leave three days after. Walk the Zócalo at sunrise when street cleaners restore the plaza to morning glory. Take that hot air balloon flight over Teotihuacan. Eat tacos al pastor from a street stand at 2 AM. Visit Frida Kahlo's Casa Azul in Coyoacán. Attend a Lucha Libre wrestling match. Ride a trajinera through Xochimilco canals on a Sunday afternoon. Watch sunset from the Cityzen rooftop bar while sipping mezcal cocktails.
          </p>
          <p>
            Because June 11, 2026, makes history at Estadio Azteca, but your Mexico City story should be longer than 90 minutes.
          </p>
          <p>
            <strong>Book your Mexico City experience now</strong>. The opening match. The altitude. The passion. The history. This is where the 2026 World Cup begins—make sure you're there.
          </p>

        </article>
      </main>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by StadiumPort Team</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}