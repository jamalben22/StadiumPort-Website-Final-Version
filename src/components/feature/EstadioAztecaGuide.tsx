import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface EstadioAztecaGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const EstadioAztecaGuide = ({ onClose, showHeader = false, hideHero = false }: EstadioAztecaGuideProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGotItClick = () => {
    navigate('/world-cup-2026-stadiums');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}
      {/* Breadcrumbs */}
      {!hideHero && (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Home</Link></li>
            <li className="text-slate-400">›</li>
            <li><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Stadiums</Link></li>
            <li className="text-slate-400">›</li>
            <li className="text-slate-700 dark:text-slate-200">Estadio Azteca</li>
          </ol>
        </nav>
      )}
      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp"
              alt="Aerial view of Estadio Azteca in Mexico City, Mexico — historic stadium hosting FIFA World Cup 2026 matches"
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>
            
            {/* Stadium Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏆 3x World Cup Host
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-gold-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Estadio Azteca
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-group-line text-xl text-emerald-400"></i>
                <span className="font-semibold">87,523 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-xl text-gold-400"></i>
                <span>Mexico City</span>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Stand at the foot of Mexico City's colossal stadium, and you'll understand why they call it "El Coloso de Santa Úrsula." The only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy.
            </p>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Hero Section - Miami Style */}
          {!hideHero && (
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <OptimizedImage
                src="/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp"
                alt="Aerial view of Estadio Azteca in Mexico City, Mexico — historic stadium hosting FIFA World Cup 2026 matches"
                className="absolute inset-0"
                imgClassName="object-cover"
                width={1600}
                height={900}
                placeholder="blur"
                sizes="100vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <span className="text-2xl">🇲🇽</span>
                <span className="text-white font-inter font-medium">Estadio Azteca • 87,523 Capacity</span>
                <span className="text-gold-400">•</span>
                <span className="text-emerald-300 font-semibold">Opening Match Venue</span>
              </div>
              
              <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                Estadio Azteca
                <br />
                <span className="text-gold-400">FIFA World Cup 2026</span>
              </h1>
              
              <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                The Cathedral of Football - Where Legends Are Born
              </p>

              {/* Stadium Info Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-400/30">
                <i className="ri-map-pin-line text-emerald-300"></i>
                <span className="text-emerald-200 font-inter font-medium">Mexico City • Altitude: 2,240m</span>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections */}
          <main className="editorial-article py-12">
            {/* Introduction Section */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
                The Cathedral Where World Cup History Repeats
              </h2>
              <p>
                Located in <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>, Estadio Azteca is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">World Cup 2026</Link>. Stand at the foot of Mexico City's colossal stadium, and you'll understand why they call it "El Coloso de Santa Úrsula." Rising from volcanic rock at 2,200 meters above sea level, Estadio Azteca isn't just the largest stadium in Latin America—it's the only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy. In 2026, this legendary colossus will make history once again, becoming the first stadium ever to host three FIFA World Cups. As the opening match kicks off on June 11, 2026, with Mexico taking center stage, you'll witness footballing royalty welcoming the world's greatest tournament home for an unprecedented third time.
              </p>
              <hr className="editorial-divider" />
            </article>

            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-building-line text-emerald-500 text-3xl"></i>
                Stadium Overview & Fast Facts
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-building-2-line text-emerald-500"></i>
                      <span className="ml-2">Official Name</span>
                      <p>Estadio Azteca (commercially known as Estadio Banorte; FIFA designation: Estadio Ciudad de México for World Cup 2026)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-map-pin-line text-emerald-500"></i>
                      <span className="ml-2">Location</span>
                      <p>Coyoacán borough, southern Mexico City (Santa Úrsula Coapa neighborhood)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-group-line text-emerald-500"></i>
                      <span className="ml-2">Capacity</span>
                      <p>87,523 (reduced from original 114,600 for safety and comfort)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-calendar-line text-emerald-500"></i>
                      <span className="ml-2">Opened</span>
                      <p>May 29, 1966 (renovated 2016-2018 for 2026 World Cup)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-home-line text-emerald-500"></i>
                      <span className="ml-2">Home Teams</span>
                      <p>Club América, Mexico National Team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-mountain-line text-emerald-500"></i>
                      <span className="ml-2">Altitude</span>
                      <p>2,240 meters (7,349 feet) above sea level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-grass-line text-emerald-500"></i>
                      <span className="ml-2">Playing Surface</span>
                      <p>Natural grass (Bermuda hybrid)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <i className="ri-trophy-line text-emerald-500"></i>
                      <span className="ml-2">World Cup Legacy</span>
                      <p>Only stadium to host 3 World Cups (1970, 1986, 2026)</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Beyond the Stadium: Explore Mexico City */}
            <section className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-compass-3-line text-emerald-500 text-3xl"></i>
                Beyond the Stadium: Explore Mexico City
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
                <p>Mexico City offers an incredible cultural experience that extends far beyond the historic Estadio Azteca.</p>
                <div>
                  <h4 className="editorial-h4 mb-2">Discover Mexico City</h4>
                  <p>Explore our complete <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City World Cup 2026 Guide</Link> for comprehensive travel information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Where to stay near Estadio Azteca</li>
                    <li>Transportation in Mexico City</li>
                    <li>Must-visit attractions and neighborhoods</li>
                    <li>Best food and dining experiences</li>
                    <li>Safety tips and local customs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 mb-2">Other Mexican Stadiums</h4>
                  <p>Attending multiple matches in Mexico? Check out <Link to="/world-cup-2026-stadiums/estadio-akron" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Akron</Link> in Guadalajara or <Link to="/world-cup-2026-stadiums/estadio-bbva" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio BBVA</Link> in Monterrey.</p>
                </div>
                <p><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
                <p className="text-slate-700 dark:text-slate-200">For iconic venue comparison, also see <Link to="/world-cup-2026-stadiums/sofi-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">SoFi Stadium</Link>.</p>
              </div>
              <hr className="editorial-divider" />
            </section>

            {/* 2026 World Cup Matches */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-football-line text-emerald-500 text-3xl"></i>
                2026 World Cup Matches at Azteca
              </h3>
              
              <p>
                Estadio Azteca will host <strong>five matches during the 2026 World Cup</strong>, including the tournament's <strong>opening ceremony and match on June 11, 2026</strong>—marking the stadium's record third opening match (after 1970 and 1986). The confirmed schedule includes three group stage matches, one Round of 16 match, and potentially a quarterfinal, depending on final FIFA allocations.
              </p>
              
              <p>
                The opening match atmosphere promises to be explosive, with Mexico expected to play before a capacity crowd. Two of the group stage matches will feature El Tri, virtually guaranteeing sold-out attendance and the passionate, thunderous support Mexican fans are famous for. Expect kickoff times between 12:00 PM and 6:00 PM local time to accommodate global television audiences.
              </p>
              
              <p>
                This historic venue's third World Cup appearance follows its legendary status from hosting finals in 1970 and 1986, plus memorable matches from the 1968 Olympics and 1999 FIFA Confederations Cup. The 2026 tournament adds another chapter to Azteca's unmatched World Cup legacy.
              </p>
              <hr className="editorial-divider" />
            </article>

            {/* Getting to the Stadium */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-500 text-3xl"></i>
                Getting to the Stadium
              </h3>
              
              {/* By Metro + Light Rail */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-500 text-3xl"></i>
                  By Metro + Light Rail (Recommended)
                </h4>
                <div>
                  <p>
                    The most reliable transport option combines Mexico City's Metro with the Xochimilco Light Rail (Tren Ligero). Take Metro Line 2 (dark blue) to its southern terminus at <strong>Tasqueña station</strong>—easily accessible from the historic center (Zócalo station) or via transfers from other lines.
                  </p>
                  <p>
                    Purchase a separate ticket for the light rail (approximately 5-7 pesos). The journey from Tasqueña to <strong>Estadio Azteca station</strong> takes 15 minutes, with trains departing every 10 minutes. The light rail station sits directly in front of the stadium—you'll exit and see the massive structure immediately.
                  </p>
                  <div>
                    <p><strong>Journey Time & Tips:</strong></p>
                    <p>
                      <strong>From city center:</strong> 40-60 minutes total, though allow 90-120 minutes on matchdays due to crowds at Tasqueña. The platform has been recently expanded with Barcelona-style configuration for 2026 to handle World Cup crowds.
                    </p>
                    <p>
                      <strong>Pro tip:</strong> Metro Line 2 crosses the historic center, making it convenient from popular tourist areas. Download the CDMX Metro app for real-time updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* By Bus */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-emerald-500 text-3xl"></i>
                  By Bus
                </h4>
                <p>
                  RTP (Red de Transporte de Pasajeros) operates bus routes along Calzada de Tlalpan serving the stadium. Route 2A departs from Base CETRAM Taxqueña and reaches Tlalpan y Estadio Azteca stop in approximately 22 minutes, with buses every 5 minutes. Fare ranges from 4-20 pesos depending on distance. Metrobús Line 2 also serves the area via Universidad station, though requires a transfer to local transport.
                </p>
              </div>

              {/* By Car */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-car-line text-emerald-500 text-3xl"></i>
                  By Car
                </h4>
                <div>
                  <p>
                    From downtown Mexico City, follow Avenida Tlalpan south (approximately 15 kilometers). Stay on the right side of the metro/light rail tracks—the stadium appears on your right. Alternatively, use the Anillo Periférico ring road, taking the "Estadio Azteca" exit.
                  </p>
                  <div>
                    <p><strong>Parking & Traffic Warning:</strong></p>
                    <p>
                      On-site parking opens 4 hours before events. Published rates are MXN $120 for cars/motorcycles, MXN $360 for minibuses, MXN $480 for buses. However, expect severe traffic congestion on matchdays—departures from city center should allow 60-90 minutes minimum, potentially 2+ hours for World Cup matches.
                    </p>
                  </div>
                </div>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mb-8">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-emerald-500 text-3xl"></i>
                  By Rideshare/Taxi
                </h4>
                <p>
                  Uber, Didi, and traditional taxis serve the stadium, though expect surge pricing and longer wait times on matchdays. From Roma Norte/Condesa neighborhoods, typical fares range MXN $150-300 (USD $8-16) in normal traffic, potentially doubling during events. Request pickup from designated rideshare zones post-match to avoid walking long distances.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Seating Guide */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-layout-grid-line text-emerald-500 text-3xl"></i>
                Seating Guide & Stadium Layout
              </h3>
              
              <div className="mb-8">
                <div className="space-y-6">
                  {/* Premium Seating */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-vip-crown-line text-emerald-500 text-3xl"></i>
                      Premium Seating (Palcos & Suites)
                    </h4>
                    <p>
                      Located in the middle tiers on both sides, premium boxes offer climate control, exclusive dining, and the best sightlines. Palco Azteca (east side) and Palco Dorado (west side) provide luxury amenities with dedicated entrances and parking.
                    </p>
                    <div>
                      <strong>Price range:</strong> $800-2,500 USD for World Cup matches
                    </div>
                  </div>
                  
                  {/* Mid-Tier Seating */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-eye-line text-emerald-500 text-3xl"></i>
                      Mid-Tier Seating (Preferente)
                    </h4>
                    <p>
                      The sweet spot for most fans—elevated enough for excellent views, close enough to feel the atmosphere. Sections 200-300 level offer covered seating with good amenities access. East and west sides provide optimal viewing angles.
                    </p>
                    <div>
                      <strong>Price range:</strong> $200-600 USD for World Cup matches
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* General Admission */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-group-line text-emerald-500 text-3xl"></i>
                      General Admission (General)
                    </h4>
                    <p>
                      Upper tiers and corners offer authentic Mexican football atmosphere at accessible prices. Sections 400-500 level can be steep but provide unique stadium perspectives. Expect passionate, vocal crowds in these areas.
                    </p>
                    <div>
                      <strong>Price range:</strong> $75-250 USD for World Cup matches
                    </div>
                  </div>
                  
                  {/* Behind Goals */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-football-line text-emerald-500 text-3xl"></i>
                      Behind Goals (Cabeceras)
                    </h4>
                    <p>
                      The heart of Azteca's atmosphere. North and south ends house the most passionate supporters, with organized chants, flags, and non-stop energy. Perfect for experiencing authentic Mexican football culture, though views can be distant from midfield action.
                    </p>
                    <div>
                      <strong>Price range:</strong> $50-200 USD for World Cup matches
                    </div>
                  </div>
                </div>
              </div>

              {/* Stadium Tips */}
              <div className="space-y-6">
                <div className="mb-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-sun-line text-emerald-500 text-3xl"></i>
                    Sun & Weather
                  </h4>
                  <p>
                    East side gets afternoon sun, west side offers shade during day matches. Mexico City's high altitude means intense UV exposure—bring sunscreen and hat. Afternoon thunderstorms possible June-September.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-volume-up-line text-emerald-500 text-3xl"></i>
                    Atmosphere Zones
                  </h4>
                  <p>
                    Sections behind goals (north/south) offer the most vocal support. East side (Palco Azteca) tends to be more family-friendly. West side gets rowdier during Club América matches.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                    <i className="ri-wheelchair-line text-emerald-500 text-3xl"></i>
                    Accessibility
                  </h4>
                  <p>
                    Wheelchair-accessible seating available in multiple sections with dedicated parking and entrances. Elevators serve all levels. Contact stadium services in advance for specific accommodations.
                  </p>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Food, Drinks & Amenities */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-restaurant-line text-emerald-500 text-3xl"></i>
                Food, Drinks & Stadium Amenities
              </h3>
              
              <div className="mb-8">
                <div className="space-y-6">
                  {/* Food Options */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-restaurant-2-line text-emerald-500 text-3xl"></i>
                      Food & Dining
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                        <div>
                          <p>Traditional Mexican</p>
                          <p>Tacos, quesadillas, tortas, elote (street corn), and regional specialties throughout concourses</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                        <div>
                          <p>Premium Dining</p>
                          <p>Full-service restaurants in VIP areas, including Palco Azteca Restaurant with panoramic views</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                        <div>
                          <p>International Options</p>
                          <p>Pizza, burgers, hot dogs, and Asian fusion available in main concourses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Beverages */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-cup-line text-emerald-500 text-3xl"></i>
                      Beverages
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-beer-line text-emerald-500"></i>
                        <span>Local beers: Corona, Dos Equis, Tecate, Modelo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-glass-line text-emerald-500"></i>
                        <span>Soft drinks, fresh juices, agua frescas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-drop-line text-emerald-500"></i>
                        <span>Bottled water (essential at altitude)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Stadium Amenities */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-store-line text-emerald-500 text-3xl"></i>
                      Stadium Amenities
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-shirt-line text-emerald-500"></i>
                        <span>Official merchandise stores (multiple locations)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-bank-card-line text-emerald-500"></i>
                        <span>ATMs and currency exchange</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-first-aid-kit-line text-emerald-500"></i>
                        <span>Medical stations and first aid</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-wifi-line text-emerald-500"></i>
                        <span>Free WiFi throughout stadium</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* What to Bring */}
                  <div className="mb-6">
                    <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                      <i className="ri-suitcase-line text-emerald-500 text-3xl"></i>
                      What to Bring
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Valid photo ID (passport for international visitors)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Tickets (digital on phone or printed confirmation)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Small amount of cash (vendors prefer cash)</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Sunscreen and hat (high altitude UV)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Light jacket (evenings can be cool)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-checkbox-circle-line text-emerald-500"></i>
                          <span>Portable phone charger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="mt-2">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-money-dollar-circle-line text-emerald-500 text-3xl"></i>
                  Typical Stadium Pricing (World Cup 2026)
                </h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p>Beer</p>
                    <p>$8-12 USD</p>
                  </div>
                  <div className="text-center">
                    <p>Tacos (3)</p>
                    <p>$6-10 USD</p>
                  </div>
                  <div className="text-center">
                    <p>Soft Drink</p>
                    <p>$4-6 USD</p>
                  </div>
                  <div className="text-center">
                    <p>Jersey</p>
                    <p>$80-120 USD</p>
                  </div>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Pre & Post-Match Experience */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-time-line text-emerald-500 text-3xl"></i>
                Pre & Post-Match Experience
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Pre-Match */}
                  <div className="space-y-3">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-play-circle-line text-emerald-500 text-3xl"></i>
                      Pre-Match (Arrive 2-3 Hours Early)
                    </h4>
                    <p>
                      The area around Azteca transforms into a massive street party 3-4 hours before kickoff. Vendors sell everything from team scarves to traditional Mexican food, while mariachi bands and drum groups create an electric atmosphere.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-music-line text-emerald-500"></i>
                        <span>Live mariachi performances near main entrances</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-restaurant-line text-emerald-500"></i>
                        <span>Street food vendors throughout the plaza</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-camera-line text-emerald-500"></i>
                        <span>Photo opportunities with stadium backdrop</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stadium Museum */}
                  <div className="space-y-3">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-museum-line text-emerald-500 text-3xl"></i>
                      Estadio Azteca Museum
                    </h4>
                    <p className="mb-3">
                      Open on non-match days, the museum showcases World Cup history, including Pelé's 1,000th goal ball and Diego Maradona memorabilia. Stadium tours available with field access and locker room visits.
                    </p>
                    <div>
                      <strong>Hours:</strong> Tuesday-Sunday 10 AM - 5 PM<br/>
                      <strong>Price:</strong> $15-25 USD (tours $30-45 USD)
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Post-Match */}
                  <div className="space-y-3">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-stop-circle-line text-emerald-500 text-3xl"></i>
                      Post-Match (Allow Extra Time)
                    </h4>
                    <p>
                      Expect 30-60 minutes to exit the stadium area due to crowd flow. The light rail and metro stations can become extremely congested, so consider waiting 20-30 minutes before heading to transport.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-time-line text-emerald-500"></i>
                        <span>Stay hydrated while waiting in exit queues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-group-line text-emerald-500"></i>
                        <span>Stick with your group in crowded areas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-phone-line text-emerald-500"></i>
                        <span>Download offline maps in case of poor signal</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Nearby Attractions */}
                  <div className="space-y-2">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
                      Nearby Attractions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-building-line text-emerald-500"></i>
                        <span>Xochimilco floating gardens (15 minutes)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-ancient-gate-line text-emerald-500"></i>
                        <span>Coyoacán historic center (20 minutes)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-shopping-bag-line text-emerald-500"></i>
                        <span>Plaza Cuicuilco shopping center (10 minutes)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="editorial-divider" />
            </article>

            {/* Final Verdict */}
            <article className="editorial-body">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
                Final Verdict & Key Takeaway
              </h3>
              
              <p className="mb-6">
                Estadio Azteca transcends sport—it's a pilgrimage site where football's greatest moments crystallized into legend. Standing in the bowl where Pelé danced, where Maradona's genius and controversy collided, where 130,000+ voices have shaken volcanic rock, you're not just watching a match—you're participating in football's most sacred ritual.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-heart-line text-emerald-500 text-3xl"></i>
                      Who will love it most:
                    </h4>
                    <p>
                      Football romantics, history enthusiasts, and anyone seeking raw, passionate atmosphere at altitude. Families will find it accessible and welcoming despite the size. First-time World Cup attendees couldn't ask for a more legendary venue.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                      <i className="ri-star-line text-emerald-500 text-3xl"></i>
                      Don't miss:
                    </h4>
                    <p>
                      Arriving early to absorb the pre-match energy building in waves. The moment the Mexican national anthem echoes through 80,000+ voices at altitude, with the opening match spotlight focused on this storied ground, will be unforgettable.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-emerald-500 text-3xl"></i>
                    Final advice:
                  </h4>
                  <p className="mb-4">
                    Book accommodation in Roma Norte or Condesa 4-6 months ahead—these neighborhoods offer the perfect blend of Mexico City's cultural heartbeat and reasonable stadium access. Secure your World Cup tickets early through official FIFA channels or verified hospitality packages. Master the Metro + Light Rail combination for stress-free transport.
                  </p>
                  <p className="italic">
                    And when those first chants erupt from behind the goals, let the sound wash over you—you're experiencing football at its most primal, passionate peak.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-4">
                  Viva Azteca. Viva México. Viva el Mundial.
                </p>
              </div>
              <hr className="editorial-divider" />
            </article>
          </main>
        </div>
      )}
    </div>
  );
};