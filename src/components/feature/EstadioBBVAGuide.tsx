import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface EstadioBBVAGuideProps {
  onClose?: () => void;
}

export const EstadioBBVAGuide: React.FC<EstadioBBVAGuideProps> = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/venues');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Preview Card - Collapsed State */}
      {!isExpanded && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Estadio%20BBVA%20Monterrey%20aerial%20view%20with%20Cerro%20de%20la%20Silla%20mountain%20backdrop%2C%20modern%20soccer%20stadium%20with%20unique%20roof%20design%2C%20dramatic%20natural%20landscape%2C%20vibrant%20city%20lights&width=800&height=400&seq=estadiobbva1&orientation=landscape"
              alt="Estadio BBVA aerial view with Cerro de la Silla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

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
        <div className="animate-fade-in pt-20">
          {/* Header Section */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 p-8 md:p-12 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 dark:from-emerald-300 dark:to-sky-300 rounded-full animate-pulse"></div>
              <span className="text-emerald-500 dark:text-emerald-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Estadio BBVA
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span className="font-semibold">~53,500 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-sky-400 dark:text-sky-300"></i>
                <span>Monterrey, Nuevo León</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-mountain-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span className="font-semibold">Cerro de la Silla View</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Guide Title & Introduction (PART 1/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-book-open-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Estadio BBVA: Your Complete Guide to Monterrey's World Cup 2026 Venue
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Rising from the edge of Monterrey like a metallic fortress, Estadio BBVA—nicknamed "El Gigante de Acero" (The Steel Giant)—represents a new generation of Latin American football architecture. When this architectural marvel hosts four World Cup 2026 matches, international fans will discover why Mexico's industrial capital built a stadium that honors its brewing and steel-making heritage while delivering one of the most intimate viewing experiences in world football. With the majestic Cerro de la Silla mountain framing the north stand and seats positioned just nine meters from the pitch, this venue promises an atmosphere unlike any other in the tournament.</p>
              </div>
            </div>

            {/* Stadium Overview & Fast Facts (PART 1/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Official Name:</strong> Estadio BBVA (FIFA designation: Estadio Monterrey for World Cup 2026)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Nickname:</strong> El Gigante de Acero (The Steel Giant)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Location:</strong> Guadalupe, Greater Monterrey, Nuevo León, Mexico (approximately 10km east of downtown Monterrey)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Opened:</strong> August 2, 2015</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Capacity:</strong> 53,500 (World Cup configuration) / 51,000 (standard)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Primary Tenant:</strong> C.F. Monterrey (Rayados) - Liga MX</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Architect/Design Firm:</strong> Populous (lead: David Lizarraga) in collaboration with VFO Arquitectos (Federico Velasco)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Surface Type:</strong> Hybrid turf (97% natural grass reinforced with 3% synthetic fibers)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <p className="text-slate-900 dark:text-slate-50"><strong>Roof Type:</strong> Open-air with distinctive cantilevered canopy</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-slate-900 dark:text-slate-50 mb-2"><strong>Notable Features:</strong></p>
                <ul className="space-y-2">
                  <li className="text-slate-700 dark:text-slate-200">LEED Silver certified (first football stadium in North America to earn this certification)</li>
                  <li className="text-slate-700 dark:text-slate-200">34-degree grandstand inclination for optimal sightlines</li>
                  <li className="text-slate-700 dark:text-slate-200">Asymmetric steel façade with aluminum "gills" for natural ventilation</li>
                  <li className="text-slate-700 dark:text-slate-200">4,500 premium club seats and 324 luxury suites</li>
                  <li className="text-slate-700 dark:text-slate-200">Advanced LED lighting system meeting FIFA Standard A</li>
                  <li className="text-slate-700 dark:text-slate-200">Cashless payment technology throughout venue</li>
                </ul>
              </div>
            </div>

            {/* History & Legacy (PART 1/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                History & Legacy
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Estadio BBVA replaced the beloved Estadio Tecnológico, ending C.F. Monterrey's 63-year tenure at their historic home. Constructed between August 2011 and July 2015, the $200 million project represented the most expensive stadium investment in Mexican football history at the time. FEMSA, the beverage and retail giant that owns both the club and the facility, envisioned a venue that would elevate the entire Latin American stadium experience.</p>
                <p>The stadium's inaugural match on August 2, 2015, saw Monterrey defeat Portuguese giants Benfica 3-0 in the eighth edition of the Eusébio Cup. Since opening, the venue has hosted Copa MX finals, CONCACAF Champions League matches, and Mexican national team fixtures. In 2022, it welcomed the CONCACAF W Championship, hosting eight matches in the women's international tournament.</p>
                <p>Beyond football, Estadio BBVA has become northern Mexico's premier entertainment destination, hosting world-class concerts featuring artists like Coldplay, The Weeknd, Shakira, and Justin Bieber. The stadium's design and acoustics create an electric atmosphere that resonates far beyond matchdays.</p>
                <p>For World Cup 2026, the venue underwent significant enhancements, including a complete pitch renovation with FIFA-approved hybrid turf grown in specialized Nuevo León nurseries, upgraded warm-up zones, and a state-of-the-art LED lighting system that reduces energy consumption by over 40 percent. Total World Cup preparation investment reached $7.2 million, ensuring the stadium meets the tournament's exacting standards.</p>
              </div>
            </div>

            {/* Stadium Architecture & Experience (PART 1/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-pencil-ruler-2-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Designed by Kansas City-based Populous—the firm behind iconic venues like Yankee Stadium and London's Olympic Stadium—Estadio BBVA is purposefully sculptural. The design draws profound inspiration from Monterrey's industrial identity: the self-supported tripodal structure is clad in rolled steel trusses and aluminum sheeting, paying homage to the steel mills that once defined the city's economy. The asymmetric sweeping shape evokes the silhouette of brewing stills, celebrating Monterrey's rich brewing tradition (the city is home to brands like Tecate and Dos Equis).</p>
                <p>The stadium's most breathtaking feature is its relationship with the landscape. The southern end slopes downward, deliberately framing spectacular views of the famous Cerro de la Silla (Saddle Mountain), whose distinctive silhouette has become synonymous with Monterrey. Crescent-shaped aluminum "gills" crown the exterior, functioning both as architectural statements and practical ventilation systems that channel cooling breezes into the seating bowl—essential in Monterrey's warm climate.</p>
                <p>Inside, the experience is unmatched. The 34-degree rake of the grandstands creates one of the steepest, most intimidating atmospheres in North American football. Every seat offers exceptional sightlines, with the first row positioned just nine meters from the pitch—compared to 27 meters at the old Estadio Tecnológico. This proximity puts fans practically on top of the action, amplifying every tackle, every pass, every roar.</p>
                <p>The seating bowl accommodates 4,500 club seats across two exclusive lounges, plus 324 luxury suites with outdoor terraces. A unique feature allows premium ticket holders to watch players emerge from the tunnel via a special balcony overlooking the access corridor—a behind-the-scenes glimpse that heightens the matchday ritual.</p>
                <p>Sustainability credentials are equally impressive. Estadio BBVA earned LEED Silver certification in 2015, becoming North America's first football stadium to achieve this environmental recognition. Over a third of the site consists of green space with native vegetation designed to filter rainwater and recharge aquifers. The northern boundary features a wooded trail connecting to a new Ecological Park, while permeable "Grasspave" parking surfaces balance vehicle access with water absorption.</p>
              </div>
            </div>

            {/* What Matches to Expect (PART 2/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-football-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Estadio BBVA will host four World Cup 2026 fixtures: three group stage matches scheduled for June 14, 20, and 24, plus one Round of 32 knockout match on June 29. While specific matchups remain to be confirmed, the venue's 53,500 capacity and dramatic mountain backdrop position it perfectly for memorable afternoon and evening fixtures.</p>
                <p>Monterrey's football culture is legendary. C.F. Monterrey's supporters—known as La Adicción Azul (The Blue Addiction)—create one of Liga MX's most passionate atmospheres. Expect World Cup crowds to embrace this energy, with international fans blending seamlessly with local traditions. The stadium's steep stands and excellent acoustics mean every chant, every song, every collective gasp will reverberate throughout the bowl.</p>
                <p>This is Monterrey's first World Cup since Mexico hosted the tournament in 1986 (when matches were played at the old Estadio Tecnológico and Estadio Universitario). For a city passionate about football and proud of its industrial heritage, June 2026 represents a homecoming decades in the making.</p>
              </div>
            </div>

            {/* Getting to the Stadium (PART 2/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Getting to the Stadium
              </h2>

              {/* By Metro/Train */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-500 dark:text-emerald-300"></i>
                  By Metro/Train
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                  <p>The Metrorrey system provides the most economical route to Estadio BBVA. Take <strong>Line 1 (Yellow Line)</strong> eastbound to <strong>Exposición Station</strong>, the line's final stop. From Exposición, the stadium is approximately a 20-minute walk (roughly 2 kilometers). You'll cross the Rio La Silla bridge and pass Expo Ganadera and the Domo Care arena before arriving at the venue.</p>
                  <p>From downtown Monterrey's historic center (Barrio Antiguo area), board Line 1 at stations like Central, Cuauhtémoc, or Del Golfo. The journey takes approximately 25-30 minutes. Metro fares are MXN $7.70 (around USD $0.40), making this the most budget-friendly option. Service runs from 4:45 AM to midnight.</p>
                  <p><strong>Pro tip:</strong> On matchdays, trains fill quickly. Arrive at your departure station at least 90 minutes before kickoff to account for crowds and the walk from Exposición.</p>
                </div>
              </div>

              {/* By Bus */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-emerald-500 dark:text-emerald-300"></i>
                  By Bus
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                  <p>Multiple bus routes serve the stadium directly. From downtown's Avenida Juárez, routes <strong>214</strong>, <strong>223</strong>, and <strong>TME</strong> stop at <strong>Pablo Livas (Estadio BBVA)</strong>, just 3-5 minutes' walk from the gates. Other convenient routes include <strong>093</strong>, <strong>185</strong>, and several in the <strong>070</strong> and <strong>108</strong> series.</p>
                  <p>Bus fares typically range from MXN $10-15 (USD $0.50-0.80). Frequency increases dramatically on matchdays, though expect standing-room-only conditions closer to kickoff.</p>
                </div>
              </div>

              {/* By Car */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-car-line text-emerald-500 dark:text-emerald-300"></i>
                  By Car
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                  <p>From downtown Monterrey, follow <strong>Avenida Constitución</strong> east, which becomes <strong>Carretera Miguel Alemán (Highway 54D)</strong>. Continue east for approximately 10 kilometers, following signs for Guadalupe and Estadio BBVA. Journey time ranges from 15-25 minutes depending on traffic, though allow 45+ minutes on matchdays.</p>
                  <p>Parking at Estadio BBVA requires a pre-purchased <strong>abono</strong> (season pass). On-site lots are NOT available for matchday drive-ups. FIFA has designated nearby recommended parking areas; follow digital signage and police direction. Expect parking fees around MXN $150-300 (USD $8-16) at off-site lots, with a 10-15 minute walk to the stadium.</p>
                  <p><strong>Access points:</strong> Main vehicle entrances are via Acceso Sur (Avenida Pablo Livas), Acceso Norte (Avenida Exposición near the Expo Ganadera), and Acceso Oriente (Avenida Nuevo León).</p>
                </div>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-emerald-500 dark:text-emerald-300"></i>
                  By Rideshare/Taxi
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                  <p>Uber and Didi operate throughout Monterrey. Designated drop-off zones are clearly marked around the stadium perimeter—follow staff directions and look for signage. From downtown, expect fares around MXN $100-200 (USD $5-11), though surge pricing on matchdays can double or triple rates.</p>
                  <p>Traditional taxis from Monterrey's General Mariano Escobedo International Airport (MTY) to the stadium take approximately 22 minutes, covering 23 kilometers (14 miles). Airport authorized taxis charge zone-based flat rates (approximately MXN $350-450 / USD $18-24). Book at official airport kiosks to avoid unlicensed operators.</p>
                </div>
              </div>

              {/* Walking/Biking */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-walk-line text-emerald-500 dark:text-emerald-300"></i>
                  Walking/Biking
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                  <p>Walking from downtown Monterrey to the stadium (approximately 10km) is feasible but not recommended given distances and summer heat. Cycling is possible via dedicated bike lanes along major routes, though secure bike parking at the stadium is limited.</p>
                </div>
              </div>

              {/* Journey times summary */}
              <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Journey times summary:</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                  <li>- Downtown to stadium via metro: 30-40 minutes (including walk)</li>
                  <li>- Airport to stadium via taxi: 20-25 minutes</li>
                  <li>- Downtown to stadium via car: 15-25 minutes (45+ on matchdays)</li>
                </ul>
              </div>
            </div>

            {/* Where to Stay (PART 2/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Where to Stay
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <h3>Best Neighborhoods</h3>
                <p><strong>Barrio Antiguo</strong> (Downtown/Centro): Monterrey's historic heart offers cobblestone streets, colonial architecture, and the city's best nightlife. Staying here puts you steps from Macroplaza, Paseo Santa Lucía, and dozens of bars and restaurants. It's approximately 25-30 minutes from the stadium via metro (Line 1 runs directly through the area). Perfect for fans who want cultural immersion and post-match celebrations.</p>
                <p><strong>San Pedro Garza García</strong>: The upscale suburb southwest of downtown, San Pedro is Monterrey's Beverly Hills—home to high-end shopping at Plaza Fiesta San Agustín and Galerias Valle Oriente, excellent restaurants, and modern hotels. It's quieter and more polished than Centro, ideal for families or travelers seeking comfort over bohemian charm. Expect 25-35 minute drives to the stadium (longer on matchdays) or combine metro and taxi.</p>
                <p><strong>Zona Tec/Fundidora Park Area</strong>: Near Monterrey Arena and Fundidora Park, this area offers proximity to major attractions, shopping at Paseo Santa Lucía, and convenient metro access. It splits the difference between downtown buzz and residential calm. Stadium access via Line 1 takes 15-20 minutes.</p>
              </div>
            </div>

            {/* Accommodation Options (PART 3/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Accommodation Options
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <h3>Budget Options</h3>
                <p><strong>Hostels in Barrio Antiguo</strong> (from MXN $300-600 / USD $15-30 per night): Small guesthouses and budget hotels offer basic but clean accommodations near nightlife. Search platforms like Hostelworld for options.</p>
                <p><strong>City Express Monterrey Aeropuerto</strong> (from USD $40): Located near the airport with free shuttle service, this chain hotel offers reliable, no-frills comfort. Book through Budget-friendly chains like <strong>Fiesta Inn</strong> and <strong>City Express</strong> appear throughout the metro area, typically starting around USD $45-70 per night.</p>

                <h3>Mid-Range Picks</h3>
                <p><strong>Krystal Monterrey / Wyndham Monterrey Ambassador Centro</strong> (from USD $60-85): Centrally located near Macroplaza and Barrio Antiguo with walkable access to metro stations. These properties offer modern amenities, business centers, and helpful staff. Book via Booking.com or Expedia for competitive rates.</p>
                <p><strong>Holiday Inn Monterrey Parque Fundidora</strong> (from USD $70-95): Positioned between downtown and the stadium with easy Line 1 metro access. Features pools, fitness centers, and on-site dining. Ideal for families.</p>
                <p><strong>NH Collection Monterrey / Habita Monterrey</strong> (from USD $85-120): Boutique-style hotels in San Pedro Garza García offering stylish rooms, rooftop bars, and upscale dining. Perfect for travelers prioritizing comfort and design. Check availability on Booking.com or Hotels.com.</p>

                <h3>Luxury Options</h3>
                <p><strong>Live Aqua Monterrey</strong> (from USD $180-255): A stunning resort-style property in San Pedro's financial district featuring a spa, gourmet restaurant, and contemporary Mexican design. Indulge in rooftop pools with mountain views.</p>
                <p><strong>Grand Fiesta Americana Monterrey Valle</strong> (from USD $140-180): Full-service luxury in Valle Oriente with spacious rooms, club lounges, and proximity to high-end shopping. Book through Expedia or the hotel's direct website.</p>
                <p><strong>Presidente InterContinental Monterrey</strong> (from USD $150-200): IHG's flagship Monterrey property offers concierge services, elegant accommodations, and extensive business facilities. Located in San Pedro, it's a favorite among FIFA officials and corporate travelers.</p>

                <h3>FIFA Accommodation</h3>
                <p>Official FIFA Fan Fest sites and accommodation packages will be announced closer to the tournament. Monitor FIFA's official 2026 website for authorized booking platforms to avoid scams.</p>

                <p><strong>Booking tip:</strong> Monterrey hotel prices surge during major events. Book accommodations 6-9 months in advance via Booking.com, Expedia, or Airbnb to secure the best rates and availability. Consider staying outside peak zones and using metro/rideshares for flexibility.</p>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice (PART 3/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-flash-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p><strong>Arrive Early:</strong> Gates typically open 2-3 hours before kickoff for World Cup matches. Aim to arrive at least 90 minutes early to clear security, find your seat, and soak in the pre-match atmosphere. Monterrey summer heat can be intense—hydrate before entering.</p>
                <p><strong>Best Gates:</strong> The stadium has multiple access points. Acceso Sur (south entrance off Avenida Pablo Livas) and Acceso Norte (north entrance near Expo Ganadera/Metro Exposición) are the primary public gates. Check your ticket for designated entry points—FIFA will assign specific gates based on seating sections.</p>
                <p><strong>Food & Drink:</strong> Inside the stadium, expect typical concessions: tacos, tortas, nachos, hot dogs, plus beer and soft drinks. Prices run MXN $80-200 (USD $4-11) for food items and MXN $60-120 (USD $3-6) for beverages. While quality is decent, it's stadium pricing—eat a proper meal beforehand to save money.</p>
                <p>The new <strong>"Pa' Tu Butaca"</strong> app allows in-seat food delivery, though availability and pricing may vary for World Cup matches. Cash is no longer accepted; the stadium operates a <strong>cashless system</strong> (credit/debit cards and contactless payments only).</p>
                <p><strong>What to Bring:</strong> FIFA World Cup 2026 bag policy allows clear bags up to 12" × 6" × 12" (30 × 15 × 30 cm) or non-clear clutches/wallets up to 4.5" × 6.5" (11 × 16.5 cm). Bring sunscreen (afternoon matches can be scorching), a hat, sunglasses, and portable phone chargers. Tickets are mobile-only via the FIFA Ticketing app—ensure your phone is charged and ready.</p>
                <h3>What NOT to Do</h3>
                <ul>
                  <li>Prohibited items include professional cameras with detachable lenses, selfie sticks, large umbrellas, outside food and beverages, fireworks, flares, and hard-sided containers.</li>
                </ul>
                <p>Smoking and vaping are banned throughout the stadium. Re-entry is not permitted once you exit.</p>
                <p><strong>ID & Security:</strong> Valid government-issued photo ID is required—carry your passport or official ID matching your ticket name. Security screening includes magnetometers and bag checks; cooperate with staff and avoid bringing unnecessary items.</p>
                <p><strong>Post-Match Transport:</strong> Expect crowds and delays. Metro trains will be packed—consider walking to Lerdo de Tejada or Eloy Cavazos stations (slightly farther but less congested than Exposición). Rideshare surge pricing can be extreme; walk 10-15 minutes away from the stadium to find more reasonable fares. Pre-arrange a designated meeting point if traveling with groups.</p>
              </div>
            </div>
            {/* Things to Do Nearby (PART 4/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-pin-2-line text-emerald-500 dark:text-emerald-300 text-4xl"></i>
                Things to Do Nearby
              </h2>

              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <h3>Pre-Match Activities</h3>
                <p><strong>Expo Ganadera & Domo Care</strong>: Located adjacent to the stadium, this fairground and arena complex hosts events and exhibitions. On matchdays, expect fan zones, live music, and food vendors creating a festive carnival atmosphere.</p>
                <p><strong>Parque Fundidora</strong> (5km west, 10 minutes by car): This massive urban park, built on the site of a former steel foundry, features museums, walking trails, the iconic Horno 3 blast furnace, and Paseo Santa Lucía—a picturesque artificial river perfect for pre-match strolls. Arrive early and enjoy the greenery before heading to the stadium.</p>

                <h3>Nearby Attractions (Within 30 Minutes)</h3>
                <p><strong>Cerro de la Silla Hike</strong>: The mountain you'll see from the stadium's north stand. Hiking to the summit takes 4-6 hours round-trip and offers panoramic views of Monterrey. Not a matchday activity, but essential for adventurous fans staying multiple days.</p>
                <p><strong>Macroplaza & Barrio Antiguo</strong> (10km west): Mexico's largest public square, Macroplaza spans 40 hectares and connects to the historic Barrio Antiguo district. Explore museums (Museo de Historia Mexicana, MARCO contemporary art museum), the Metropolitan Cathedral, and the Faro de Comercio monument. Post-match, Barrio Antiguo's bars and clubs stay open until 2-3 AM.</p>
                <p><strong>Paseo Santa Lucía</strong>: A 2.5-kilometer riverwalk linking Macroplaza to Parque Fundidora. Rent a paddle boat, dine at waterside cafés, or simply enjoy the landscaped promenade. Evening walks here are magical.</p>

                <h3>Local Food & Bars</h3>
                <p><strong>Cabrito (Roasted Goat)</strong>: Monterrey's signature dish. Try it at <strong>El Rey del Cabrito</strong> just south of Barrio Antiguo or <strong>El Gran Pastor</strong> in San Pedro.</p>
                <p><strong>Machacado con Huevo</strong>: Dried beef with scrambled eggs, a breakfast staple. Sample authentic versions at local fondas.</p>
                <p><strong>Mercado Barrio Antiguo</strong>: A food hall with 25+ vendors serving everything from tacos and elote to Belgian fries and craft cocktails. Perfect for groups with diverse tastes.</p>
                <p><strong>Pre-Match Bars:</strong> Barrio Antiguo reigns supreme. <strong>Almacén 42</strong> pours 42 Mexican craft beers on tap, <strong>Café Iguana</strong> has anchored the nightlife scene since 1991 with live rock and blues, and <strong>Sierra Madre Brewing Co.</strong> serves local brews in a historic setting. For rooftop vibes, try <strong>Me Muero de Hambre</strong> with mountain views.</p>

                <h3>Post-Match Celebrations</h3>
                <p>After the final whistle, head back to <strong>Barrio Antiguo</strong> where the party continues until dawn. <strong>Casa Morelos</strong>, <strong>La Tumba</strong>, and <strong>Gargantuas Cultural Space</strong> offer live music ranging from rock to jazz. For upscale options, San Pedro's lounges and rooftop bars provide a more refined atmosphere.</p>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway (PART 4/4) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>

              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Estadio BBVA is where industrial heritage meets cutting-edge design, where intimate sightlines amplify every moment, and where the majestic Sierra Madre mountains remind you that football, at its best, connects us to something larger than the game itself. This isn't just another modern stadium—it's a temple to Mexican football culture, built for fans who live and breathe the sport.</p>

                <p>Who will love it most? Anyone who values atmosphere over amenities, proximity over prestige, and raw passion over corporate polish. Estadio BBVA rewards the true believer.</p>

                <p><strong>Don't miss:</strong> Arriving early enough to stand at the north end, gaze up at Cerro de la Silla framed by the stadium's steel canopy, and understand why they call this place The Steel Giant. That view alone is worth the journey.</p>

                <p><strong>Book now:</strong> Monterrey accommodations fill fast. Secure your hotel, flights, and match tickets early through official FIFA channels. The combination of limited capacity and Mexico's passionate football culture means this venue will sell out quickly. Start planning your 2026 adventure today—Estadio BBVA awaits.</p>

                <hr className="my-6 border-slate-200 dark:border-slate-700" />
                <p><em>Travel smart: Use Booking.com or Expedia for competitive hotel rates, compare flights through Skyscanner or Google Flights, and book airport transfers through authorized services like Uber or official taxi kiosks. For authentic local experiences, consider Airbnb rentals in Barrio Antiguo or San Pedro. Your World Cup dream starts with the right preparation.</em></p>
              </div>
            </div>

            {/* Got It Button */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleGotItClick}
                className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 px-6 py-3"
              >
                <i className="ri-check-line mr-2"></i>
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};