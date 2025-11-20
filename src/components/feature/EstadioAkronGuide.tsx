import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';

interface EstadioAkronGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const EstadioAkronGuide: React.FC<EstadioAkronGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen">
      {showHeader && <Header />}

      {/* Collapsed Preview Card (MetLife-style) */}
      {!expanded && !hideHero && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <div className="relative h-56 sm:h-72 md:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=Estadio%20Akron%20Guadalajara%20aerial%20view%2C%20volcano-inspired%20stadium%20with%20grass-covered%20exterior%2C%20dramatic%20lighting%2C%20World%20Cup%20atmosphere&width=1200&height=600&seq=akron-hero&orientation=landscape')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                  Estadio Akron: Mexico's Volcanic Football Cathedral Awaits the World Cup
                </h1>
                <p className="mt-2 text-white/90 max-w-3xl">
                  Rising from the Guadalajara suburbs like a modern Mesoamerican temple, Estadio Akron doesn't just host football matches—it makes a statement.
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="inline-flex items-center gap-2">
                  <i className="ri-team-line text-emerald-500"></i>
                  <span>Club Deportivo Guadalajara (Chivas)</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2">
                  <i className="ri-user-star-line text-sky-500"></i>
                  <span>Capacity: 49,850 (standard) / 48,071 (World Cup)</span>
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-navy-900 text-white hover:bg-navy-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <i className="ri-book-open-line mr-2"></i>
                Read Full Guide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Premium Guide — NYC editorial style */}
      {expanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — matches NYC guide */}
          {!hideHero && (
            <header className="editorial-hero">
              <div className="editorial-hero-media">
                <img
                  src="/images/estadio-akron-guadalajara-world-cup-2026.webp"
                  alt="Inside view of Estadio Akron in Guadalajara, Mexico, a key venue for FIFA World Cup 2026 games."
                />
              </div>
              <div className="editorial-hero-content">
                <div className="editorial-hero-inner">
                  <h1 className="editorial-hero-title">Estadio Akron</h1>
                  <div className="editorial-hero-meta">~49,850 capacity · Guadalajara, Mexico</div>
                </div>
              </div>
            </header>
          )}

          {/* Breadcrumbs */}
          {!hideHero && (
            <nav className="editorial-breadcrumbs">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link to="/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Home</Link></li>
                <li className="text-slate-400">›</li>
                <li><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Stadiums</Link></li>
                <li className="text-slate-400">›</li>
                <li className="text-slate-700 dark:text-slate-200">Estadio Akron</li>
              </ol>
            </nav>
          )}

          {/* Editorial Article Container */}
          <section className="editorial-article">
            {/* Intro paragraph (below header) */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-landscape-line text-emerald-500"></i>
                Where Architecture Meets Landscape Meets the Pitch
              </h2>
              <p>
                Located in <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara</Link>, Estadio Akron is the modern home of Chivas and a showcase of Mexican football culture. Estadio Akron is one of the 16 stadiums hosting World Cup 2026—{' '}<Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the full Stadiums hub</Link>.
              </p>
              <p>
                Rising from the Guadalajara suburbs like a modern Mesoamerican temple, Estadio Akron doesn't just host football matches—it makes a statement. This architectural marvel, draped in 70,000 square meters of living grass that cascades down its volcano-inspired slopes, will welcome four World Cup 2026 fixtures, including a Mexico group stage clash that promises to ignite the passionate Tapatío spirit. For international fans, this is your chance to experience one of North America's most visually striking venues while immersing yourself in mariachi melodies, tequila sunsets, and the red-and-white fervor of Chivas country.
              </p>
              <hr className="editorial-divider" />
            </article>

          {/* Stadium Overview & Fast Facts */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-information-line text-sky-400"></i>
              Stadium Overview & Fast Facts
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-building-2-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Official Name</span>
                    <p className="leading-relaxed">Estadio Akron (FIFA designation: Estadio Guadalajara during World Cup 2026)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-map-pin-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Location</span>
                    <p className="leading-relaxed">Zapopan, Jalisco (western Guadalajara metropolitan area)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-calendar-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Opened</span>
                    <p className="leading-relaxed">July 30, 2010</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-group-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Capacity</span>
                    <p className="leading-relaxed">49,850 (standard) / 48,071 (World Cup configuration)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-user-star-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Primary Tenant</span>
                    <p className="leading-relaxed">Club Deportivo Guadalajara (Chivas) – Liga MX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-pencil-ruler-2-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Architect/Design Firm</span>
                    <p className="leading-relaxed">VFO Architects (volcano concept with artistic direction by Jean Marie Massaud and Daniel Pouzet)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-grass-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Surface Type</span>
                    <p className="leading-relaxed">Natural grass (replaced artificial turf in 2012)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-sun-line text-sky-400 text-3xl mr-2"></i>
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">Roof Type</span>
                    <p className="leading-relaxed">Open-air with suspended white ring canopy supported by 16 columns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-sky-400"></i>
                Notable Features
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-sky-400"></i>
                  <span>Grass-covered exterior resembling a volcano</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-sky-400"></i>
                  <span>Steep double-tiered bowl</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-sky-400"></i>
                  <span>Dedicated Chivas museum (Palco del Campeonísimo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-sky-400"></i>
                  <span>Over 4,800 parking spaces plus subterranean garage</span>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* History & Legacy */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-briefcase-4-line text-amber-400"></i>
              History & Legacy
            </h3>
            <p>
              Construction began in February 2004, less than two years after billionaire Jorge Vergara purchased CD Guadalajara, but financial challenges repeatedly stalled the project. The stadium finally opened six-and-a-half years later with a symbolic friendly between Chivas and Manchester United, featuring Javier "Chicharito" Hernández playing the first half for his beloved Guadalajara before switching jerseys to seal his Old Trafford transfer.
            </p>
            <p>
              Originally named Estadio Omnilife, the venue quickly established its credentials by hosting the 2010 Copa Libertadores final first leg and serving as centerpiece for the 2011 Pan American Games, where it staged both opening and closing ceremonies plus all football tournament matches. That same year, it welcomed eight fixtures from the FIFA U-17 World Cup, including a semifinal. The 2017 naming rights deal with lubricant brand Akron transformed the stadium's official moniker, though fans still affectionately call it "El Templo Mayor" (The Great Temple) or simply "La Fortaleza Rojiblanca" (The Red-and-White Fortress).
            </p>
            <p>
              The stadium's artificial surface initially drew criticism from players across Liga MX, prompting management to install natural grass in 2012—a decision that significantly improved playing conditions and matchday atmosphere. Recent renovations exceeding 250 million pesos have modernized the venue with upgraded LED video boards, enhanced sound systems, refreshed hospitality zones, and FIFA-compliant facilities ahead of World Cup 2026.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Stadium Architecture & Experience */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-building-3-line text-sky-400"></i>
              Stadium Architecture & Experience
            </h3>
            <p>
              VFO Architects conceived Estadio Akron as a dialogue between architecture and landscape—a "volcano" rising from Guadalajara's western plains with a fiery red crater of seating beneath a levitating white cloud of roof. The exterior's grass covering creates seamless integration with surrounding parkland, while sixteen slender supports hold the ring canopy aloft, creating an almost floating effect that maximizes natural light penetration.
            </p>
            <p>
              Inside, the double-tiered seating bowl wraps tightly around the pitch with minimal setback, ensuring intimate sightlines despite the 50,000-capacity. The steep rake places every seat at an optimal viewing angle—there are genuinely no bad views here. Premium suites occupy the middle tier, sandwiched between general admission sections that amplify crowd noise through their compact design. The open-air configuration means acoustics bounce energetically off the roof structure, though the lack of full enclosure prevents the cauldron-like intensity found in Europe's most raucous venues.
            </p>
            <p>
              Concourses ring the entire bowl, wide enough to handle peak traffic while maintaining stadium awareness—you rarely lose sight of the action. Facilities include modern restrooms throughout, accessible seating with elevator access to suite levels, and the official Tienda Chivas store anchoring the main atrium. The pre-match plaza outside offers space for festivals and fan zones, while post-match egress benefits from multiple exit points along the Circuito JVC loop road.
            </p>
            <p>
              First-aid stations operate on event days, and accessibility provisions meet international standards, though specific policies for service animals and medical needs are handled at staff discretion during entry.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* What Matches to Expect */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-calendar-event-line text-emerald-400"></i>
              What Matches to Expect
            </h3>
            <p>
              Estadio Akron will host four group stage fixtures during World Cup 2026, making it Mexico's busiest venue after Estadio Azteca. The schedule includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>June 11, 2026:</strong> Group A match (opening day fixture)</li>
              <li><strong>June 18, 2026:</strong> Mexico group stage match (expect 48,000+ attendance and electric atmosphere)</li>
              <li><strong>June 23, 2026:</strong> Group stage match</li>
              <li><strong>June 26, 2026:</strong> Group stage match</li>
            </ul>
            <p>
              Kick-off times will likely span 12:00, 15:00, 18:00, and 21:00 local (Central Time), optimizing global broadcast windows. The Mexico fixture on June 18 represents this stadium's crown jewel—Guadalajara's Chivas fanbase is among the most passionate in North America, and hosting El Tri in their home city promises standing-room intensity, mariachi serenades, and coordinated chants that'll echo for 90 minutes straight.
            </p>
            <p>
              While Estadio Akron lacks the historical gravitas of Azteca (which hosted the 1986 final), it delivers modern comfort with authentic Mexican football culture—a combination that should create memorable World Cup moments for first-time visitors.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Related Stadiums (after What Matches to Expect) */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-links-line text-emerald-500"></i>
              Related Stadiums
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Attending multiple matches? Consider{' '}
              <Link to="/world-cup-2026-stadiums/estadio-azteca" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link> in Mexico City,{' '}
              <Link to="/world-cup-2026-stadiums/estadio-bbva" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio BBVA</Link> in Monterrey, or{' '}
              <Link to="/world-cup-2026-stadiums/att-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Getting to the Stadium */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-road-map-line text-emerald-400"></i>
              Getting to the Stadium
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-bus-line text-sky-500"></i>
                  By Bus
                </h4>
                <p>
                  The Mi Transporte system and Macrobús BRT lines serve the stadium area. Key routes include <strong>T01</strong> and <strong>T02</strong> buses, which stop at "Estadio Chivas" station—approximately 15 minutes walking distance from the venue. From downtown Guadalajara, the <strong>Mi Transporte Eléctrico</strong> line runs from Juan Palomar Y Arias to Calzada de las Palmas station every 10 minutes (journey: 26-37 minutes, cost: approximately 10 pesos/$0.50 USD).
                </p>
                <p>
                  The <strong>Mi Macro Periférico</strong> BRT line offers efficient service with the Estadio Chivas station closest to the venue. Frequency is generally every 5-15 minutes during peak hours. Download the Moovit app for real-time navigation and schedule updates—it's the most reliable tool for Guadalajara public transit.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-train-line text-indigo-500"></i>
                  By Metro/Train
                </h4>
                <p>
                  Guadalajara's SITEUR light rail system doesn't directly reach the stadium, but you can combine train and bus. Take <strong>Line 2 (blue line)</strong> to Juárez station, then transfer to bus routes heading toward Zapopan. Total journey from Centro: approximately 45-70 minutes depending on connections.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-car-line text-rose-500"></i>
                  By Car
                </h4>
                <p>
                  From downtown Guadalajara, follow Avenida Vallarta (Highway 15D) west toward Zapopan/Nogales, then take Avenida del Bosque to Circuito JVC. From Miguel Hidalgo y Costilla International Airport (GDL), head northwest via Carretera Guadalajara-Chapala, merge onto Periférico Manuel Gómez Morín, and follow signage (29 minutes/19 miles without traffic).
                </p>
                <p>
                  The stadium operates expansive surface parking (4,800+ general spaces, 79 accessible spots) plus a 780-space subterranean garage reserved for suite holders. Bus parking accommodates up to 60 coaches. Parking typically costs 100-150 pesos ($5-8 USD), but expect premium pricing for World Cup matches. Check official Park & Ride pilots, which may offer free remote parking with dedicated shuttle service using controlled lanes on Circuito JVC.
                </p>
                <p>
                  <strong>Traffic Warning:</strong> Arrival 2-3 hours early is essential. Circuito JVC experiences severe congestion pre-match, and post-match departure can take an hour or more. Stadium operations adjust ingress/egress routes dynamically, so follow staff directions.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-taxi-line text-yellow-500"></i>
                  By Rideshare/Taxi
                </h4>
                <p>
                  Uber and Didi are reliable and affordable (10-15 minutes from central Zapopan neighborhoods, 150-250 pesos/$8-13 USD; 17 minutes from downtown Guadalajara, 180-300 pesos/$10-16 USD). Designated drop-off zones operate on Circuito JVC. Expect surge pricing before and after matches—potentially 2-3x normal rates during World Cup fixtures.
                </p>
                <p>
                  Airport taxis from GDL to the stadium run approximately 500-700 pesos ($27-38 USD). Book official licensed services through GAP (airport operator) for guaranteed rates and safety.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2">
                  <i className="ri-walk-line text-emerald-500"></i>
                  Walking/Biking
                </h4>
                <p>
                  The stadium sits in a suburban setting with limited walkability from tourist areas. Downtown Guadalajara is 7-10 miles away (impractical on foot). However, the stadium vicinity features green spaces ideal for pre-match strolls if you're staying nearby.
                </p>
                <p>
                  <strong>Pro Tip:</strong> For World Cup matches, consider booking accommodations in Zapopan's Andares or Chapalita neighborhoods—you'll be close enough for short Uber rides while avoiding downtown congestion.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Where to Stay */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-hotel-line text-sky-400"></i>
              Where to Stay
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="editorial-h4">Best Neighborhoods for Stadium Access + Sightseeing</h4>
                <p>
                  <strong>Zapopan (Andares/Chapalita):</strong> This upscale municipality west of Guadalajara puts you closest to Estadio Akron (10-15 minutes by car). Andares offers luxury shopping, rooftop restaurants, and modern hotels, while residential Chapalita provides tree-lined streets, Sunday art markets at Glorieta Chapalita, and mid-range accommodations. You'll sacrifice walkable access to historic sites but gain convenience for matchdays and safer neighborhoods.
                </p>
                <p>
                  <strong>Colonia Americana:</strong> Named the world's coolest neighborhood by Time Out Magazine in 2022, this hip district west of Centro Histórico buzzes with trendy cafés, cocktail bars, vegan restaurants, and nightlife along Avenida Chapultepec. It's a 20-minute Uber to the stadium but walking distance to museums and the Expiatorio Temple. Perfect for culture-seekers wanting both football and urban exploration.
                </p>
                <p>
                  <strong>Centro Histórico:</strong> First-timers gravitate here for colonial architecture, Guadalajara Cathedral, Teatro Degollado, and proximity to Instituto Cultural Cabañas. You'll be 17-20 minutes from the stadium via rideshare or public transit, but immersed in traditional Tapatío life. Traffic is heavier, streets are one-way labyrinths, but cultural density is unmatched.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4">Budget Options (Under $50 USD/night)</h4>
                <p>
                  <strong>Hostal de Pablo y Lucha</strong> (Centro Histórico): Family-run hostel offering clean private rooms and dorms ($11-38/night). Authentic Mexican hospitality, walking distance to major sights. Book via <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> or Hostelworld for best rates.
                </p>
                <p>
                  <strong>Hotel Dali Ejecutivo</strong> (Centro): Simple, reliable lodging near Guadalajara Cathedral ($30-45/night). Positive reviews for helpful staff and proximity to sightseeing. Search availability on Expedia or <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> .
                </p>
                <p>
                  <strong>Casa Ixaya by Barrio Mexico</strong> (Near Ciudad del Sol): Budget-friendly with modern amenities, though farther from tourist zones ($35-50/night).
                </p>
              </div>

              <div>
                <h4 className="editorial-h4">Mid-Range Picks ($50-150 USD/night)</h4>
                <p>
                  <strong>La Mansión Boutique</strong> (Chapalita): Colonial-style property in leafy neighborhood with excellent dining nearby ($80-120/night). Two-night minimum on weekends, but the location near Glorieta Chapalita park is ideal for stadium access. Book on <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> or Airbnb.
                </p>
                <p>
                  <strong>Hotel Indigo Guadalajara Expo by IHG</strong> (Zona Expo): Luxury-lite hotel featuring in-room massages, deli, and proximity to Expo Guadalajara ($90-140/night). Convenient for business travelers and families.
                </p>
                <p>
                  <strong>Voco Guadalajara Neruda by IHG</strong> (Near Parque Ávila Camacho): Modern hotel with restaurant, free WiFi, and helpful staff ($70-110/night). Central location balances sightseeing and stadium access.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Where to Stay – Additional Picks */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-hotel-line text-sky-400"></i>
              Where to Stay (Continued)
            </h3>
            <p>
              <strong>Villa Ganz</strong> (Zona Rosa): Ten-suite boutique property in quiet colonial building filled with antiques and local art ($100-150/night). Walking distance to museums and galleries, 15 minutes to stadium by Uber. Book via <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a> or directly with the hotel.
            </p>
            <h4 className="editorial-h4">Luxury Options ($150+ USD/night)</h4>
            <p>
              <strong>Hyatt Regency Andares Guadalajara</strong> (Zapopan): Upscale hotel adjacent to Andares shopping center, 10 minutes from stadium ($160-250/night). Rooftop pool, craft cocktails, and access to Guadalajara's most exclusive retail. Ideal for World Cup fans prioritizing convenience and comfort. Reserve through Hyatt's website or Expedia.
            </p>
            <p>
              <strong>Hard Rock Hotel Guadalajara</strong> (Zapopan): Thematic rock retreat with amplified suites featuring vinyl record collections, live music in the lobby bar, and 30th-floor rooftop spot ($180-280/night). Loud, proud, and perfect for VIP rock-star vibes.
            </p>
            <p>
              <strong>Quinta Real Guadalajara</strong> (Near Centro): Intimate 76-room luxury property in leafy residential area with antique furniture, marble bathrooms, and memorable pool ($170-260/night). Colonial charm meets modern indulgence.
            </p>
            <p>
              <strong>Hacienda Labor De Rivera</strong> (Teuchitlán, 1 hour outside Guadalajara): For a unique Mexican experience, consider this 1560-era hacienda-turned-spa-hotel surrounded by tequila distilleries ($200-350/night). Not practical for daily stadium trips but unforgettable for multi-day stays combining World Cup matches with agave field exploration.
            </p>
            <p>
              <strong>Pro Tip:</strong> Book accommodations 6-9 months ahead of World Cup 2026—Guadalajara's hotel inventory will tighten significantly, especially in Zapopan and Colonia Americana. Use `https://booking.com/` 's free cancellation options for flexibility, and consider Airbnb for family-sized apartments in Chapalita or Providencia neighborhoods.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Matchday Tips & Insider Advice */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-lightbulb-line text-amber-400"></i>
              Matchday Tips & Insider Advice
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-time-line text-indigo-500"></i> Arrive Early (2-3 Hours Before Kick-Off)</h4>
                <p>
                  Security lines swell quickly, and Circuito JVC traffic reaches gridlock levels. Arriving early lets you explore the pre-match plaza, grab food from vendors outside (tacos, tortas ahogadas, elotes), and soak in the mariachi-infused atmosphere that defines Guadalajara football culture. For the Mexico match on June 18, expect even bigger crowds—plan for 3+ hours pre-kick-off.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-door-open-line text-sky-500"></i> Best Gates/Entrances</h4>
                <p>
                  The main atrium on the stadium's east side handles the heaviest traffic. For faster entry, use secondary gates on the north or south sides, particularly if your seats are in those sections. Follow staff directions, as FIFA may implement tournament-specific entry procedures.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-restaurant-2-line text-rose-500"></i> Food & Drink Inside</h4>
                <p>
                  Concession stands ring the concourses offering standard stadium fare—nachos, hot dogs, quesadillas, churros—at premium prices (expect 80-150 pesos/$4-8 USD per item). Beer is served on tap, but long queues form quickly since it's the crowd favorite. Budget 30-45 minutes for a drink during halftime rushes.
                </p>
                <p>
                  <strong>Better Strategy:</strong> Eat outside before entering. Street food vendors near the parking lots serve authentic Jalisco specialties—<strong>tortas ahogadas</strong> (drowned sandwiches in spicy sauce), <strong>birria</strong> (slow-cooked goat), <strong>tacos de barbacoa</strong>, and <strong>elotes</strong> (grilled corn)—at a fraction of in-stadium prices (30-70 pesos/$1.50-4 USD). You'll enjoy better flavors and bigger portions while mingling with local fans.
                </p>
                <p>
                  Inside the stadium, the official Tienda Chivas store offers merchandise and memorabilia. Payment methods vary by event; have pesos cash ready as backup, though card acceptance is increasingly common.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-backpack-line text-emerald-500"></i> What to Bring</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Photo ID/Passport:</strong> Required for entry at FIFA events</li>
                  <li><strong>Bag Policy:</strong> Domestic Liga MX matches prohibit backpacks, umbrellas, and liquid containers over 100ml. World Cup policies will be similar—expect small clear bags only. Check FIFA's official guidelines closer to the tournament.</li>
                  <li><strong>Weather Gear:</strong> June in Guadalajara averages 77-86°F (25-30°C), but the stadium's open-air design means you'll feel full sun exposure. Bring sunscreen, hats, and sunglasses for day matches. Evening fixtures (21:00 kick-offs) can turn breezy—pack a light jacket.</li>
                  <li><strong>Cash:</strong> While card acceptance is improving, having 500-1,000 pesos ($27-55 USD) ensures you can buy food, drinks, and merchandise without delays.</li>
                </ul>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-close-circle-line text-red-500"></i> What NOT to Do</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Don't bring prohibited items:</strong> No professional cameras with detachable lenses, drones, air horns, fireworks, or large flags. Medications require prescriptions.</li>
                  <li><strong>Avoid driving if possible:</strong> Post-match traffic is brutal. Rideshares and public transit, while crowded, flow better than parking lot exits.</li>
                  <li><strong>Don't underestimate security wait times:</strong> Even with early arrival, expect 30-60 minutes from car to seat.</li>
                </ul>
              </div>

              <div>
                <h4 className="editorial-h4 flex items-center gap-2"><i className="ri-roadster-line text-indigo-500"></i> Post-Match Transport</h4>
                <p>
                  Exiting Estadio Akron tests patience. Stadium operations adjust egress routes on Circuito JVC, but expect 60-90 minutes to reach main roads. If using rideshare, walk 10-15 minutes away from the stadium before requesting pickup—you'll avoid surge pricing spikes and congestion bottlenecks.
                </p>
                <p>
                  Bus lines resume service quickly but fill to capacity. The Mi Macro Periférico BRT handles crowds better than local buses. Consider arranging private transport if traveling with family or arriving late at night.
                </p>
                <p>
                  <strong>Local Tip:</strong> For the ultimate post-match experience, join Chivas fans heading to nearby cantinas and taco stands. The celebration continues long after the final whistle, with mariachi bands, tequila toasts, and friendly debates about the match.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Things to Do Nearby */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-map-pin-line text-emerald-400"></i>
              Things to Do Nearby
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="editorial-h4">Pre-Match Bars & Fan Zones (Within 30 Minutes)</h4>
                <p>
                  <strong>Andares Shopping District</strong> (15 minutes from stadium): Upscale dining and entertainment complex with rooftop lounges, craft cocktail bars, and international restaurants. Great for pre-match meals with better food quality than stadium vendors. Try <strong>Alcalde</strong> (contemporary Mexican) or <strong>Hueso</strong> (avant-garde with bone-filled interior design).
                </p>
              </div>

              <div>
                <h4 className="editorial-h4">Neighborhood Highlights</h4>
                <p>
                  <strong>Chapalita</strong> (10 minutes): Residential neighborhood with relaxed cafés and family-friendly parks. Sunday art markets at Glorieta Chapalita run year-round. Low-key atmosphere before heading to the stadium.
                </p>
                <p>
                  <strong>Plaza de los Mariachis</strong> (25 minutes in Tlaquepaque): If time permits, this square is ground zero for live mariachi performances. Arrive 3-4 hours before kick-off to enjoy traditional music with tequila or beer, then Uber to the stadium. Authentic Guadalajara experience at its finest.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4">Nearby Attractions (Within 30 Minutes)</h4>
                <p>
                  <strong>Basílica de Nuestra Señora de Zapopan</strong> (12 minutes): Stunning 17th-century church and major pilgrimage site housing the miraculous Virgin of Zapopan statue. Pope John Paul II visited in 1979. Free entry, open daily. Adjacent plaza offers handicraft vendors and regional food.
                </p>
                <p>
                  <strong>Parque Metropolitano de Guadalajara</strong> (1.7 miles from stadium): Expansive urban green space with walking trails, picnic areas, and sports facilities. Perfect for morning strolls or post-match decompression.
                </p>
                <p>
                  <strong>Galerias Guadalajara & Plaza del Sol</strong> (2-4 miles): Major shopping malls offering retail therapy, cinemas, food courts, and family entertainment. Convenient for killing time between accommodation check-in and stadium departure.
                </p>
              </div>

              <div>
                <h4 className="editorial-h4">Guadalajara City Center Highlights (20-30 Minutes)</h4>
                <p>
                  <strong>Guadalajara Cathedral & Plaza de Armas</strong> (Downtown): Twin-towered icon of the city, completed in 1618 with neoclassical and neo-Gothic elements. Surrounding plazas feature fountains, street performers, and colonial architecture. Free entry; dress respectfully.
                </p>
                <p>
                  <strong>Instituto Cultural Cabañas</strong> (Downtown): UNESCO World Heritage site and former hospice, now an art museum showcasing José Clemente Orozco's famous murals. Admission approximately 70 pesos ($4 USD); closed Mondays.
                </p>
                <p>
                  <strong>Mercado San Juan de Dios</strong> (Downtown): Latin America's largest indoor market—40,000 square meters of food stalls, crafts, clothing, and souvenirs. Sensory overload in the best way. Practice basic Spanish phrases and be prepared to haggle. Try fresh fruit juices, tamales, and regional sweets.
                </p>
                <p>
                  <strong>Tlaquepaque</strong> (20 minutes southeast): Colorful pueblo mágico known for pottery, blown glass, and artisan handicrafts. Pedestrian-friendly historic center with mariachi bands performing at El Parian plaza. Ideal for afternoon exploration and dinner at <strong>Casa Luna</strong> or <strong>El Patio</strong>.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Day Trip: Tequila Town (1 Hour) */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-train-line text-rose-500"></i>
              Day Trip: Tequila Town (1 Hour)
            </h3>
            <p>
              No visit to Guadalajara is complete without exploring the UNESCO-listed town of <strong>Tequila, Jalisco</strong>, birthplace of Mexico's iconic spirit. Blue agave fields stretch across volcanic slopes, and distilleries like <strong>Jose Cuervo</strong>, <strong>Casa Herradura</strong>, and <strong>Sauza</strong> offer tours and tastings. The <strong>Tequila Express</strong> train provides luxury service with live music and multiple tastings en route—book through official channels months in advance. Alternatively, drive independently or book day tours through <strong>Viator</strong> or <strong>GetYourGuide</strong> ($60-120 USD including transportation, tastings, and lunch).
            </p>
            <p>
              <strong>World Cup Strategy:</strong> Schedule Tequila excursions on non-match days to maximize the experience without time pressure.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Beyond the Stadium: Explore Guadalajara */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-compass-3-line text-emerald-500"></i>
              Beyond the Stadium: Explore Guadalajara
            </h3>
            <p>
              Guadalajara's traditional Mexican culture and mariachi heritage create an authentic World Cup 2026 experience.
            </p>
            <p>
              Explore our complete{' '}
              <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara World Cup 2026 Guide</Link>{' '}for comprehensive information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hotels near Estadio Akron</li>
              <li>Historic city center and attractions</li>
              <li>Tequila region and distillery tours</li>
              <li>Authentic Mexican dining</li>
              <li>Transportation and match day tips</li>
            </ul>
            <p>
              <strong>Other Mexican Stadiums:</strong>{' '}
              Visit the iconic{' '}
              <Link to="/world-cup-2026-stadiums/estadio-azteca" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link>{' '}in Mexico City or modern{' '}
              <Link to="/world-cup-2026-stadiums/estadio-bbva" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio BBVA</Link>{' '}in Monterrey.
            </p>
            <p>
              <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Final Verdict & Key Takeaway */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-flag-line text-emerald-500"></i>
              Final Verdict & Key Takeaway
            </h3>
            <p>
              Estadio Akron represents modern Mexican football at its most ambitious—a venue that honors tradition through passionate fandom while embracing contemporary design and comfort. Its volcanic silhouette, natural grass pitch, and tight seating bowl create an atmosphere that amplifies every chant, every goal, every collective gasp from 50,000 throats. World Cup 2026 travelers seeking authentic Mexican passion without sacrificing infrastructure quality will find their sweet spot here.
            </p>
            <p>
              This stadium rewards fans who appreciate architectural innovation and cultural immersion over historic pedigree. You won't feel the ghosts of Pelé and Maradona (that's Azteca's domain), but you will experience mariachi serenades in parking lots, tequila sunsets over grass-covered slopes, and the unwavering red-and-white devotion of Chivas country. The Mexico group stage match on June 18 will be this venue's defining World Cup moment—securing tickets for that fixture means witnessing Mexican football culture at its most concentrated and joyful.
            </p>
            <p>
              <strong>One Unforgettable Thing Not to Miss:</strong> Arrive three hours early for the Mexico match. Join the tailgate festivities outside the stadium—street vendors serving tortas ahogadas and birria, mariachi bands strolling between cars, fans in sombreros and luchador masks sharing tequila shots with strangers. It's pre-game pageantry that rivals the match itself, and it's something you can only experience in Guadalajara.
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Call to Action */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-megaphone-line text-indigo-500"></i>
              Call to Action
            </h3>
            <p>
            Guadalajara's hotel inventory will vanish fast for World Cup 2026, especially properties in Zapopan with easy stadium access. Book accommodations now through <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://booking.com/" data-discover="true">https://booking.com/</a>  or <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.expedia.com" data-discover="true">Expedia</a> with flexible cancellation policies. Secure airport transfers or rental cars through <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.viator.com" data-discover="true">Viator</a> or <a className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline" href="https://www.getyourguide.com" data-discover="true">GetYourGuide</a> to avoid last-minute price surges. And most importantly, embrace the Tapatío spirit—Guadalajara's warmth, tequila, and football passion will turn your World Cup journey into a lifelong memory.
            </p>
            <p>
              <strong>¡Vamos a Guadalajara!</strong>
            </p>
            <hr className="editorial-divider" />
          </article>

          {/* Back CTA — match NYC editorial style */}
          
          </section>
        </div>
      )}
    </div>
  );
};