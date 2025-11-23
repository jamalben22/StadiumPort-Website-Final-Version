import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface EstadioBBVAGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const EstadioBBVAGuide: React.FC<EstadioBBVAGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp"
              alt="Interior of Estadio BBVA in Monterrey, Mexico — state-of-the-art venue hosting FIFA World Cup 2026 matches."
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Stadium Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏔️ Mountain View Icon
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Estadio BBVA
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-group-line text-xl text-emerald-400"></i>
                <span className="font-semibold">~53,500 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-xl text-sky-400"></i>
                <span>Monterrey, Nuevo León, Mexico</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button
                onClick={toggleExpanded}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
              >
                <i className="ri-book-open-line"></i>
                Read Full Guide
              </button>
              <button
                onClick={handleGotItClick}
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                <i className="ri-check-line"></i>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — cohesive with article style */}
          {!hideHero && (
            <section className="editorial-hero">
              <div className="editorial-hero-media">
                <OptimizedImage
                  src="/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp"
                  alt="Interior of Estadio BBVA in Monterrey, Mexico — state-of-the-art venue hosting FIFA World Cup 2026 matches."
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
                  <h1 className="editorial-hero-title">Estadio BBVA</h1>
                  <div className="editorial-hero-meta">
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      <span>Monterrey, Nuevo León</span>
                    </div>
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-group-line"></i>
                      <span>~53,500 capacity</span>
                    </div>
                    <div className="meta-item flex items-center gap-2">
                      <i className="ri-mountain-line"></i>
                      <span>Cerro de la Silla View</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Breadcrumbs */}
          {!hideHero && (
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link to="/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Home</Link></li>
                <li className="text-slate-400">›</li>
                <li><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Stadiums</Link></li>
                <li className="text-slate-400">›</li>
                <li className="text-slate-700 dark:text-slate-200">Estadio BBVA</li>
              </ol>
            </nav>
          )}

          {/* Content Sections — Editorial presentation */}
          <section className="editorial-article py-12">
            {/* Guide Title & Introduction (PART 1/4) */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-book-open-line text-emerald-500"></i>
                Estadio BBVA: Your Complete Guide to Monterrey's World Cup 2026 Venue
              </h2>
              <p>
                Located in <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link>, Estadio BBVA is one of the most technologically advanced stadiums in Latin America. Estadio BBVA is one of the 16 stadiums hosting World Cup 2026—{' '}<Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the full Stadiums hub</Link>.
              </p>
              <p>
                Rising from the edge of Monterrey like a metallic fortress, Estadio BBVA—nicknamed "El Gigante de Acero" (The Steel Giant)—represents a new generation of Latin American football architecture. When this architectural marvel hosts four World Cup 2026 matches, international fans will discover why Mexico's industrial capital built a stadium that honors its brewing and steel-making heritage while delivering one of the most intimate viewing experiences in world football. With the majestic Cerro de la Silla mountain framing the north stand and seats positioned just nine meters from the pitch, this venue promises an atmosphere unlike any other in the tournament.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Overview & Fast Facts (PART 1/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500"></i>
                Stadium Overview & Fast Facts
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p><strong>Official Name:</strong> Estadio BBVA (FIFA designation: Estadio Monterrey for World Cup 2026)</p>
                  <p><strong>Nickname:</strong> El Gigante de Acero (The Steel Giant)</p>
                  <p><strong>Location:</strong> Guadalupe, Greater Monterrey, Nuevo León, Mexico (approximately 10km east of downtown Monterrey)</p>
                  <p><strong>Opened:</strong> August 2, 2015</p>
                  <p><strong>Capacity:</strong> 53,500 (World Cup configuration) / 51,000 (standard)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Primary Tenant:</strong> C.F. Monterrey (Rayados) - Liga MX</p>
                  <p><strong>Architect/Design Firm:</strong> Populous (lead: David Lizarraga) in collaboration with VFO Arquitectos (Federico Velasco)</p>
                  <p><strong>Surface Type:</strong> Hybrid turf (97% natural grass reinforced with 3% synthetic fibers)</p>
                  <p><strong>Roof Type:</strong> Open-air with distinctive cantilevered canopy</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-2"><strong>Notable Features:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>LEED Silver certified (first football stadium in North America to earn this certification)</li>
                  <li>34-degree grandstand inclination for optimal sightlines</li>
                  <li>Asymmetric steel façade with aluminum "gills" for natural ventilation</li>
                  <li>4,500 premium club seats and 324 luxury suites</li>
                  <li>Advanced LED lighting system meeting FIFA Standard A</li>
                  <li>Cashless payment technology throughout venue</li>
                </ul>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* History & Legacy (PART 1/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500"></i>
                History & Legacy
              </h2>
              <p>Estadio BBVA replaced the beloved Estadio Tecnológico, ending C.F. Monterrey's 63-year tenure at their historic home. Constructed between August 2011 and July 2015, the $200 million project represented the most expensive stadium investment in Mexican football history at the time. FEMSA, the beverage and retail giant that owns both the club and the facility, envisioned a venue that would elevate the entire Latin American stadium experience.</p>
              <p>The stadium's inaugural match on August 2, 2015, saw Monterrey defeat Portuguese giants Benfica 3-0 in the eighth edition of the Eusébio Cup. Since opening, the venue has hosted Copa MX finals, CONCACAF Champions League matches, and Mexican national team fixtures. In 2022, it welcomed the CONCACAF W Championship, hosting eight matches in the women's international tournament.</p>
              <p>Beyond football, Estadio BBVA has become northern Mexico's premier entertainment destination, hosting world-class concerts featuring artists like Coldplay, The Weeknd, Shakira, and Justin Bieber. The stadium's design and acoustics create an electric atmosphere that resonates far beyond matchdays.</p>
              <p>For World Cup 2026, the venue underwent significant enhancements, including a complete pitch renovation with FIFA-approved hybrid turf grown in specialized Nuevo León nurseries, upgraded warm-up zones, and a state-of-the-art LED lighting system that reduces energy consumption by over 40 percent. Total World Cup preparation investment reached $7.2 million, ensuring the stadium meets the tournament's exacting standards.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Stadium Architecture & Experience (PART 1/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-pencil-ruler-2-line text-emerald-500"></i>
                Stadium Architecture & Experience
              </h2>
              <p>Designed by Kansas City-based Populous—the firm behind iconic venues like Yankee Stadium and London's Olympic Stadium—Estadio BBVA is purposefully sculptural. The design draws profound inspiration from Monterrey's industrial identity: the self-supported tripodal structure is clad in rolled steel trusses and aluminum sheeting, paying homage to the steel mills that once defined the city's economy. The asymmetric sweeping shape evokes the silhouette of brewing stills, celebrating Monterrey's rich brewing tradition (the city is home to brands like Tecate and Dos Equis).</p>
              <p>The stadium's most breathtaking feature is its relationship with the landscape. The southern end slopes downward, deliberately framing spectacular views of the famous Cerro de la Silla (Saddle Mountain), whose distinctive silhouette has become synonymous with Monterrey. Crescent-shaped aluminum "gills" crown the exterior, functioning both as architectural statements and practical ventilation systems that channel cooling breezes into the seating bowl—essential in Monterrey's warm climate.</p>
              <p>Inside, the experience is unmatched. The 34-degree rake of the grandstands creates one of the steepest, most intimidating atmospheres in North American football. Every seat offers exceptional sightlines, with the first row positioned just nine meters from the pitch—compared to 27 meters at the old Estadio Tecnológico. This proximity puts fans practically on top of the action, amplifying every tackle, every pass, every roar.</p>
              <p>The seating bowl accommodates 4,500 club seats across two exclusive lounges, plus 324 luxury suites with outdoor terraces. A unique feature allows premium ticket holders to watch players emerge from the tunnel via a special balcony overlooking the access corridor—a behind-the-scenes glimpse that heightens the matchday ritual.</p>
              <p>Sustainability credentials are equally impressive. Estadio BBVA earned LEED Silver certification in 2015, becoming North America's first football stadium to achieve this environmental recognition. Over a third of the site consists of green space with native vegetation designed to filter rainwater and recharge aquifers. The northern boundary features a wooded trail connecting to a new Ecological Park, while permeable "Grasspave" parking surfaces balance vehicle access with water absorption.</p>
              <hr className="editorial-divider" />
            </article>

            {/* What Matches to Expect (PART 2/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-football-line text-emerald-500"></i>
                What Matches to Expect
              </h2>
              <p>Estadio BBVA will host four World Cup 2026 fixtures: three group stage matches scheduled for June 14, 20, and 24, plus one Round of 32 knockout match on June 29. While specific matchups remain to be confirmed, the venue's 53,500 capacity and dramatic mountain backdrop position it perfectly for memorable afternoon and evening fixtures.</p>
              <p>Monterrey's football culture is legendary. C.F. Monterrey's supporters—known as La Adicción Azul (The Blue Addiction)—create one of Liga MX's most passionate atmospheres. Expect World Cup crowds to embrace this energy, with international fans blending seamlessly with local traditions. The stadium's steep stands and excellent acoustics mean every chant, every song, every collective gasp will reverberate throughout the bowl.</p>
              <p>This is Monterrey's first World Cup since Mexico hosted the tournament in 1986 (when matches were played at the old Estadio Tecnológico and Estadio Universitario). For a city passionate about football and proud of its industrial heritage, June 2026 represents a homecoming decades in the making.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Related Stadiums (after What Matches to Expect) */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-links-line text-emerald-500"></i>
                Related Stadiums
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
    Planning a Mexico or cross-border circuit? Visit{' '}
                <Link to="/world-cup-2026-stadiums/estadio-azteca" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link> in Mexico City,{' '}
                <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Akron</Link> in Guadalajara, and{' '}
                <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium (PART 2/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500"></i>
                Getting to the Stadium
              </h2>
              <div className="mt-6 space-y-6">
                {/* By Metro/Train */}
                <div>
                  <h3 className="editorial-h3 flex items-center gap-2">
                    <i className="ri-train-line text-emerald-500"></i>
                    By Metro/Train
                  </h3>
                  <p>The Metrorrey system provides the most economical route to Estadio BBVA. Take <strong>Line 1 (Yellow Line)</strong> eastbound to <strong>Exposición Station</strong>, the line's final stop. From Exposición, the stadium is approximately a 20-minute walk (roughly 2 kilometers). You'll cross the Rio La Silla bridge and pass Expo Ganadera and the Domo Care arena before arriving at the venue.</p>
                  <p>From downtown Monterrey's historic center (Barrio Antiguo area), board Line 1 at stations like Central, Cuauhtémoc, or Del Golfo. The journey takes approximately 25-30 minutes. Metro fares are MXN $7.70 (around USD $0.40), making this the most budget-friendly option. Service runs from 4:45 AM to midnight.</p>
                  <p><strong>Pro tip:</strong> On matchdays, trains fill quickly. Arrive at your departure station at least 90 minutes before kickoff to account for crowds and the walk from Exposición.</p>
                </div>

                {/* By Bus */}
                <div>
                  <h3 className="editorial-h3 flex items-center gap-2">
                    <i className="ri-bus-line text-emerald-500"></i>
                    By Bus
                  </h3>
                  <p>Multiple bus routes serve the stadium directly. From downtown's Avenida Juárez, routes <strong>214</strong>, <strong>223</strong>, and <strong>TME</strong> stop at <strong>Pablo Livas (Estadio BBVA)</strong>, just 3-5 minutes' walk from the gates. Other convenient routes include <strong>093</strong>, <strong>185</strong>, and several in the <strong>070</strong> and <strong>108</strong> series.</p>
                  <p>Bus fares typically range from MXN $10-15 (USD $0.50-0.80). Frequency increases dramatically on matchdays, though expect standing-room-only conditions closer to kickoff.</p>
                </div>

                {/* By Car */}
                <div>
                  <h3 className="editorial-h3 flex items-center gap-2">
                    <i className="ri-car-line text-emerald-500"></i>
                    By Car
                  </h3>
                  <p>From downtown Monterrey, follow <strong>Avenida Constitución</strong> east, which becomes <strong>Carretera Miguel Alemán (Highway 54D)</strong>. Continue east for approximately 10 kilometers, following signs for Guadalupe and Estadio BBVA. Journey time ranges from 15-25 minutes depending on traffic, though allow 45+ minutes on matchdays.</p>
                  <p>Parking at Estadio BBVA requires a pre-purchased <strong>abono</strong> (season pass). On-site lots are NOT available for matchday drive-ups. FIFA has designated nearby recommended parking areas; follow digital signage and police direction. Expect parking fees around MXN $150-300 (USD $8-16) at off-site lots, with a 10-15 minute walk to the stadium.</p>
                  <p><strong>Access points:</strong> Main vehicle entrances are via Acceso Sur (Avenida Pablo Livas), Acceso Norte (Avenida Exposición near the Expo Ganadera), and Acceso Oriente (Avenida Nuevo León).</p>
                </div>

                {/* By Rideshare/Taxi */}
                <div>
                  <h3 className="editorial-h3 flex items-center gap-2">
                    <i className="ri-taxi-line text-emerald-500"></i>
                    By Rideshare/Taxi
                  </h3>
                  <p>Uber and Didi operate throughout Monterrey. Designated drop-off zones are clearly marked around the stadium perimeter—follow staff directions and look for signage. From downtown, expect fares around MXN $100-200 (USD $5-11), though surge pricing on matchdays can double or triple rates.</p>
                  <p>Traditional taxis from Monterrey's General Mariano Escobedo International Airport (MTY) to the stadium take approximately 22 minutes, covering 23 kilometers (14 miles). Airport authorized taxis charge zone-based flat rates (approximately MXN $350-450 / USD $18-24). Book at official airport kiosks to avoid unlicensed operators.</p>
                </div>

                {/* Walking/Biking */}
                <div>
                  <h3 className="editorial-h3 flex items-center gap-2">
                    <i className="ri-walk-line text-emerald-500"></i>
                    Walking/Biking
                  </h3>
                  <p>Walking from downtown Monterrey to the stadium (approximately 10km) is feasible but not recommended given distances and summer heat. Cycling is possible via dedicated bike lanes along major routes, though secure bike parking at the stadium is limited.</p>
                </div>

                {/* Journey times summary */}
                <div>
                  <h4 className="editorial-h4 mb-2">Journey times summary:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>- Downtown to stadium via metro: 30-40 minutes (including walk)</li>
                    <li>- Airport to stadium via taxi: 20-25 minutes</li>
                    <li>- Downtown to stadium via car: 15-25 minutes (45+ on matchdays)</li>
                  </ul>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Where to Stay (PART 2/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500"></i>
                Where to Stay
              </h2>
              <h3 className="editorial-h3">Best Neighborhoods</h3>
              <p><strong>Barrio Antiguo</strong> (Downtown/Centro): Monterrey's historic heart offers cobblestone streets, colonial architecture, and the city's best nightlife. Staying here puts you steps from Macroplaza, Paseo Santa Lucía, and dozens of bars and restaurants. It's approximately 25-30 minutes from the stadium via metro (Line 1 runs directly through the area). Perfect for fans who want cultural immersion and post-match celebrations.</p>
              <p><strong>San Pedro Garza García</strong>: The upscale suburb southwest of downtown, San Pedro is Monterrey's Beverly Hills—home to high-end shopping at Plaza Fiesta San Agustín and Galerias Valle Oriente, excellent restaurants, and modern hotels. It's quieter and more polished than Centro, ideal for families or travelers seeking comfort over bohemian charm. Expect 25-35 minute drives to the stadium (longer on matchdays) or combine metro and taxi.</p>
              <p><strong>Zona Tec/Fundidora Park Area</strong>: Near Monterrey Arena and Fundidora Park, this area offers proximity to major attractions, shopping at Paseo Santa Lucía, and convenient metro access. It splits the difference between downtown buzz and residential calm. Stadium access via Line 1 takes 15-20 minutes.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Accommodation Options (PART 3/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500"></i>
                Accommodation Options
              </h2>
              <h3 className="editorial-h3">Budget Options</h3>
              <p><strong>Hostels in Barrio Antiguo</strong> (from MXN $300-600 / USD $15-30 per night): Small guesthouses and budget hotels offer basic but clean accommodations near nightlife. Search platforms like Hostelworld for options.</p>
              <p><strong>City Express Monterrey Aeropuerto</strong> (from USD $40): Located near the airport with free shuttle service, this chain hotel offers reliable, no-frills comfort. Book through Budget-friendly chains like <strong>Fiesta Inn</strong> and <strong>City Express</strong> appear throughout the metro area, typically starting around USD $45-70 per night.</p>

              <h3 className="editorial-h3">Mid-Range Picks</h3>
              <p><strong>Krystal Monterrey / Wyndham Monterrey Ambassador Centro</strong> (from USD $60-85): Centrally located near Macroplaza and Barrio Antiguo with walkable access to metro stations. These properties offer modern amenities, business centers, and helpful staff. Book via Booking.com or Expedia for competitive rates.</p>
              <p><strong>Holiday Inn Monterrey Parque Fundidora</strong> (from USD $70-95): Positioned between downtown and the stadium with easy Line 1 metro access. Features pools, fitness centers, and on-site dining. Ideal for families.</p>
              <p><strong>NH Collection Monterrey / Habita Monterrey</strong> (from USD $85-120): Boutique-style hotels in San Pedro Garza García offering stylish rooms, rooftop bars, and upscale dining. Perfect for travelers prioritizing comfort and design. Check availability on Booking.com or Hotels.com.</p>

              <h3 className="editorial-h3">Luxury Options</h3>
              <p><strong>Live Aqua Monterrey</strong> (from USD $180-255): A stunning resort-style property in San Pedro's financial district featuring a spa, gourmet restaurant, and contemporary Mexican design. Indulge in rooftop pools with mountain views.</p>
              <p><strong>Grand Fiesta Americana Monterrey Valle</strong> (from USD $140-180): Full-service luxury in Valle Oriente with spacious rooms, club lounges, and proximity to high-end shopping. Book through Expedia or the hotel's direct website.</p>
              <p><strong>Presidente InterContinental Monterrey</strong> (from USD $150-200): IHG's flagship Monterrey property offers concierge services, elegant accommodations, and extensive business facilities. Located in San Pedro, it's a favorite among FIFA officials and corporate travelers.</p>

              <h3 className="editorial-h3">FIFA Accommodation</h3>
              <p>Official FIFA Fan Fest sites and accommodation packages will be announced closer to the tournament. Monitor FIFA's official 2026 website for authorized booking platforms to avoid scams.</p>

              <p><strong>Booking tip:</strong> Monterrey hotel prices surge during major events. Book accommodations 6-9 months in advance via Booking.com, Expedia, or Airbnb to secure the best rates and availability. Consider staying outside peak zones and using metro/rideshares for flexibility.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Matchday Tips & Insider Advice (PART 3/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-lightbulb-flash-line text-emerald-500"></i>
                Matchday Tips & Insider Advice
              </h2>
              <p><strong>Arrive Early:</strong> Gates typically open 2-3 hours before kickoff for World Cup matches. Aim to arrive at least 90 minutes early to clear security, find your seat, and soak in the pre-match atmosphere. Monterrey summer heat can be intense—hydrate before entering.</p>
              <p><strong>Best Gates:</strong> The stadium has multiple access points. Acceso Sur (south entrance off Avenida Pablo Livas) and Acceso Norte (north entrance near Expo Ganadera/Metro Exposición) are the primary public gates. Check your ticket for designated entry points—FIFA will assign specific gates based on seating sections.</p>
              <p><strong>Food & Drink:</strong> Inside the stadium, expect typical concessions: tacos, tortas, nachos, hot dogs, plus beer and soft drinks. Prices run MXN $80-200 (USD $4-11) for food items and MXN $60-120 (USD $3-6) for beverages. While quality is decent, it's stadium pricing—eat a proper meal beforehand to save money.</p>
              <p>The new <strong>"Pa' Tu Butaca"</strong> app allows in-seat food delivery, though availability and pricing may vary for World Cup matches. Cash is no longer accepted; the stadium operates a <strong>cashless system</strong> (credit/debit cards and contactless payments only).</p>
              <p><strong>What to Bring:</strong> FIFA World Cup 2026 bag policy allows clear bags up to 12" × 6" × 12" (30 × 15 × 30 cm) or non-clear clutches/wallets up to 4.5" × 6.5" (11 × 16.5 cm). Bring sunscreen (afternoon matches can be scorching), a hat, sunglasses, and portable phone chargers. Tickets are mobile-only via the FIFA Ticketing app—ensure your phone is charged and ready.</p>
              <h4 className="editorial-h4">What NOT to Do</h4>
              <ul className="list-disc list-inside">
                <li>Prohibited items include professional cameras with detachable lenses, selfie sticks, large umbrellas, outside food and beverages, fireworks, flares, and hard-sided containers.</li>
              </ul>
              <p>Smoking and vaping are banned throughout the stadium. Re-entry is not permitted once you exit.</p>
              <p><strong>ID & Security:</strong> Valid government-issued photo ID is required—carry your passport or official ID matching your ticket name. Security screening includes magnetometers and bag checks; cooperate with staff and avoid bringing unnecessary items.</p>
              <p><strong>Post-Match Transport:</strong> Expect crowds and delays. Metro trains will be packed—consider walking to Lerdo de Tejada or Eloy Cavazos stations (slightly farther but less congested than Exposición). Rideshare surge pricing can be extreme; walk 10-15 minutes away from the stadium to find more reasonable fares. Pre-arrange a designated meeting point if traveling with groups.</p>
              <hr className="editorial-divider" />
            </article>
            {/* Things to Do Nearby (PART 4/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-map-pin-2-line text-emerald-500"></i>
                Things to Do Nearby
              </h2>
              <h3 className="editorial-h3">Pre-Match Activities</h3>
              <p><strong>Expo Ganadera & Domo Care</strong>: Located adjacent to the stadium, this fairground and arena complex hosts events and exhibitions. On matchdays, expect fan zones, live music, and food vendors creating a festive carnival atmosphere.</p>
              <p><strong>Parque Fundidora</strong> (5km west, 10 minutes by car): This massive urban park, built on the site of a former steel foundry, features museums, walking trails, the iconic Horno 3 blast furnace, and Paseo Santa Lucía—a picturesque artificial river perfect for pre-match strolls. Arrive early and enjoy the greenery before heading to the stadium.</p>

              <h3 className="editorial-h3">Nearby Attractions (Within 30 Minutes)</h3>
              <p><strong>Cerro de la Silla Hike</strong>: The mountain you'll see from the stadium's north stand. Hiking to the summit takes 4-6 hours round-trip and offers panoramic views of Monterrey. Not a matchday activity, but essential for adventurous fans staying multiple days.</p>
              <p><strong>Macroplaza & Barrio Antiguo</strong> (10km west): Mexico's largest public square, Macroplaza spans 40 hectares and connects to the historic Barrio Antiguo district. Explore museums (Museo de Historia Mexicana, MARCO contemporary art museum), the Metropolitan Cathedral, and the Faro de Comercio monument. Post-match, Barrio Antiguo's bars and clubs stay open until 2-3 AM.</p>
              <p><strong>Paseo Santa Lucía</strong>: A 2.5-kilometer riverwalk linking Macroplaza to Parque Fundidora. Rent a paddle boat, dine at waterside cafés, or simply enjoy the landscaped promenade. Evening walks here are magical.</p>

              <h3 className="editorial-h3">Local Food & Bars</h3>
              <p><strong>Cabrito (Roasted Goat)</strong>: Monterrey's signature dish. Try it at <strong>El Rey del Cabrito</strong> just south of Barrio Antiguo or <strong>El Gran Pastor</strong> in San Pedro.</p>
              <p><strong>Machacado con Huevo</strong>: Dried beef with scrambled eggs, a breakfast staple. Sample authentic versions at local fondas.</p>
              <p><strong>Mercado Barrio Antiguo</strong>: A food hall with 25+ vendors serving everything from tacos and elote to Belgian fries and craft cocktails. Perfect for groups with diverse tastes.</p>
              <p><strong>Pre-Match Bars:</strong> Barrio Antiguo reigns supreme. <strong>Almacén 42</strong> pours 42 Mexican craft beers on tap, <strong>Café Iguana</strong> has anchored the nightlife scene since 1991 with live rock and blues, and <strong>Sierra Madre Brewing Co.</strong> serves local brews in a historic setting. For rooftop vibes, try <strong>Me Muero de Hambre</strong> with mountain views.</p>

              <h3 className="editorial-h3">Post-Match Celebrations</h3>
              <p>After the final whistle, head back to <strong>Barrio Antiguo</strong> where the party continues until dawn. <strong>Casa Morelos</strong>, <strong>La Tumba</strong>, and <strong>Gargantuas Cultural Space</strong> offer live music ranging from rock to jazz. For upscale options, San Pedro's lounges and rooftop bars provide a more refined atmosphere.</p>
              <hr className="editorial-divider" />
            </article>

            {/* Beyond the Stadium: Explore Monterrey */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-compass-3-line text-emerald-500"></i>
                Beyond the Stadium: Explore Monterrey
              </h2>
              <p>Monterrey's mountain backdrop and modern energy create a unique World Cup 2026 destination.</p>
              <p>
                Explore our complete{' '}
                <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey World Cup 2026 Guide</Link>{' '}for everything you need:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hotels near Estadio BBVA</li>
                <li>Mountain attractions and outdoor activities</li>
                <li>Modern Mexican cuisine scene</li>
                <li>Transportation around Monterrey</li>
                <li>Border crossing and travel tips</li>
              </ul>
              <p>
                <strong>Other Stadiums:</strong>{' '}
                Completing a Mexico tour? Visit{' '}
                <Link to="/world-cup-2026-stadiums/estadio-azteca" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link>{' '}in Mexico City and{' '}
                <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Akron</Link>{' '}in Guadalajara. Close to Texas? Check out{' '}
                <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link>{' '}in Dallas.
              </p>
              <p>
                <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict & Key Takeaway (PART 4/4) */}
            <article className="editorial-body">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-lightbulb-line text-emerald-500"></i>
                Final Verdict & Key Takeaway
              </h2>
              <p>Estadio BBVA is where industrial heritage meets cutting-edge design, where intimate sightlines amplify every moment, and where the majestic Sierra Madre mountains remind you that football, at its best, connects us to something larger than the game itself. This isn't just another modern stadium—it's a temple to Mexican football culture, built for fans who live and breathe the sport.</p>

              <p>Who will love it most? Anyone who values atmosphere over amenities, proximity over prestige, and raw passion over corporate polish. Estadio BBVA rewards the true believer.</p>

              <p><strong>Don't miss:</strong> Arriving early enough to stand at the north end, gaze up at Cerro de la Silla framed by the stadium's steel canopy, and understand why they call this place The Steel Giant. That view alone is worth the journey.</p>

              <p><strong>Book now:</strong> Monterrey accommodations fill fast. Secure your hotel, flights, and match tickets early through official FIFA channels. The combination of limited capacity and Mexico's passionate football culture means this venue will sell out quickly. Start planning your 2026 adventure today—Estadio BBVA awaits.</p>

              <hr className="editorial-divider" />
              <p><em>Travel smart: Use Booking.com or Expedia for competitive hotel rates, compare flights through Skyscanner or Google Flights, and book airport transfers through authorized services like Uber or official taxi kiosks. For authentic local experiences, consider Airbnb rentals in Barrio Antiguo or San Pedro. Your World Cup dream starts with the right preparation.</em></p>
            </article>

            
          </section>
        </div>
      )}
    </div>
  );
};