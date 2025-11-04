import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
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
                <i className="ri-map-pin-line text-emerald-300 text-lg"></i>
                <span className="text-emerald-200 font-inter font-medium">Mexico City • Altitude: 2,240m</span>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Introduction Section */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                  <i className="ri-trophy-line text-gold-400 dark:text-gold-300 text-4xl"></i>
                  The Cathedral Where World Cup History Repeats
                </h2>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  Stand at the foot of Mexico City's colossal stadium, and you'll understand why they call it "El Coloso de Santa Úrsula." Rising from volcanic rock at 2,200 meters above sea level, Estadio Azteca isn't just the largest stadium in Latin America—it's the only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy. In 2026, this legendary colossus will make history once again, becoming the first stadium ever to host three FIFA World Cups. As the opening match kicks off on June 11, 2026, with Mexico taking center stage, you'll witness footballing royalty welcoming the world's greatest tournament home for an unprecedented third time.
                </p>
              </div>
            </div>

            {/* Stadium Overview */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-building-2-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Official Name</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">Estadio Azteca (commercially known as Estadio Banorte; FIFA designation: Estadio Ciudad de México for World Cup 2026)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-map-pin-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Location</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">Coyoacán borough, southern Mexico City (Santa Úrsula Coapa neighborhood)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-group-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Capacity</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">87,523 (reduced from original 114,600 for safety and comfort)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-calendar-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Opened</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">May 29, 1966 (renovated 2016-2018 for 2026 World Cup)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-home-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Home Teams</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">Club América, Mexico National Team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-mountain-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Altitude</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">2,240 meters (7,349 feet) above sea level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-grass-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Playing Surface</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">Natural grass (Bermuda hybrid)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-trophy-line text-gold-400 dark:text-gold-300 text-xl"></i>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">World Cup Legacy</span>
                      <p className="text-slate-900 dark:text-slate-50 font-semibold">Only stadium to host 3 World Cups (1970, 1986, 2026)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2026 World Cup Matches */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                2026 World Cup Matches at Azteca
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Estadio Azteca will host <strong>five matches during the 2026 World Cup</strong>, including the tournament's <strong>opening ceremony and match on June 11, 2026</strong>—marking the stadium's record third opening match (after 1970 and 1986). The confirmed schedule includes three group stage matches, one Round of 16 match, and potentially a quarterfinal, depending on final FIFA allocations.
                </p>
                
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The opening match atmosphere promises to be explosive, with Mexico expected to play before a capacity crowd. Two of the group stage matches will feature El Tri, virtually guaranteeing sold-out attendance and the passionate, thunderous support Mexican fans are famous for. Expect kickoff times between 12:00 PM and 6:00 PM local time to accommodate global television audiences.
                </p>
                
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  This historic venue's third World Cup appearance follows its legendary status from hosting finals in 1970 and 1986, plus memorable matches from the 1968 Olympics and 1999 FIFA Confederations Cup. The 2026 tournament adds another chapter to Azteca's unmatched World Cup legacy.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              
              {/* By Metro + Light Rail */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300"></i>
                  By Metro + Light Rail (Recommended)
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    The most reliable transport option combines Mexico City's Metro with the Xochimilco Light Rail (Tren Ligero). Take Metro Line 2 (dark blue) to its southern terminus at <strong>Tasqueña station</strong>—easily accessible from the historic center (Zócalo station) or via transfers from other lines.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    Purchase a separate ticket for the light rail (approximately 5-7 pesos). The journey from Tasqueña to <strong>Estadio Azteca station</strong> takes 15 minutes, with trains departing every 10 minutes. The light rail station sits directly in front of the stadium—you'll exit and see the massive structure immediately.
                  </p>
                  <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                    <p className="text-emerald-600 dark:text-emerald-300 font-semibold mb-2">Journey Time & Tips:</p>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      <strong>From city center:</strong> 40-60 minutes total, though allow 90-120 minutes on matchdays due to crowds at Tasqueña. The platform has been recently expanded with Barcelona-style configuration for 2026 to handle World Cup crowds.
                    </p>
                    <p className="text-slate-700 dark:text-slate-200 text-sm mt-2">
                      <strong>Pro tip:</strong> Metro Line 2 crosses the historic center, making it convenient from popular tourist areas. Download the CDMX Metro app for real-time updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* By Bus */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-gold-400 dark:text-gold-300"></i>
                  By Bus
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  RTP (Red de Transporte de Pasajeros) operates bus routes along Calzada de Tlalpan serving the stadium. Route 2A departs from Base CETRAM Taxqueña and reaches Tlalpan y Estadio Azteca stop in approximately 22 minutes, with buses every 5 minutes. Fare ranges from 4-20 pesos depending on distance. Metrobús Line 2 also serves the area via Universidad station, though requires a transfer to local transport.
                </p>
              </div>

              {/* By Car */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-car-line text-gold-400 dark:text-gold-300"></i>
                  By Car
                </h3>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                    From downtown Mexico City, follow Avenida Tlalpan south (approximately 15 kilometers). Stay on the right side of the metro/light rail tracks—the stadium appears on your right. Alternatively, use the Anillo Periférico ring road, taking the "Estadio Azteca" exit.
                  </p>
                  <div className="bg-white dark:bg-slate-900/60 border border-red-300 dark:border-red-500/40 p-4 rounded-lg">
                    <p className="text-red-600 dark:text-red-300 font-semibold mb-2">Parking & Traffic Warning:</p>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      On-site parking opens 4 hours before events. Published rates are MXN $120 for cars/motorcycles, MXN $360 for minibuses, MXN $480 for buses. However, expect severe traffic congestion on matchdays—departures from city center should allow 60-90 minutes minimum, potentially 2+ hours for World Cup matches.
                    </p>
                  </div>
                </div>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-gold-400 dark:text-gold-300"></i>
                  By Rideshare/Taxi
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Uber, Didi, and traditional taxis serve the stadium, though expect surge pricing and longer wait times on matchdays. From Roma Norte/Condesa neighborhoods, typical fares range MXN $150-300 (USD $8-16) in normal traffic, potentially doubling during events. Request pickup from designated rideshare zones post-match to avoid walking long distances.
                </p>
              </div>
            </div>

            {/* Seating Guide */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-layout-grid-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Seating Guide & Stadium Layout
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  {/* Premium Seating */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-vip-crown-line text-gold-400 dark:text-gold-300"></i>
                      Premium Seating (Palcos & Suites)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                      Located in the middle tiers on both sides, premium boxes offer climate control, exclusive dining, and the best sightlines. Palco Azteca (east side) and Palco Dorado (west side) provide luxury amenities with dedicated entrances and parking.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Price range:</strong> $800-2,500 USD for World Cup matches
                    </div>
                  </div>
                  
                  {/* Mid-Tier Seating */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-eye-line text-emerald-400 dark:text-emerald-300"></i>
                      Mid-Tier Seating (Preferente)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                      The sweet spot for most fans—elevated enough for excellent views, close enough to feel the atmosphere. Sections 200-300 level offer covered seating with good amenities access. East and west sides provide optimal viewing angles.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Price range:</strong> $200-600 USD for World Cup matches
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* General Admission */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-group-line text-emerald-400 dark:text-emerald-300"></i>
                      General Admission (General)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                      Upper tiers and corners offer authentic Mexican football atmosphere at accessible prices. Sections 400-500 level can be steep but provide unique stadium perspectives. Expect passionate, vocal crowds in these areas.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Price range:</strong> $75-250 USD for World Cup matches
                    </div>
                  </div>
                  
                  {/* Behind Goals */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-football-line text-emerald-400 dark:text-emerald-300"></i>
                      Behind Goals (Cabeceras)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                      The heart of Azteca's atmosphere. North and south ends house the most passionate supporters, with organized chants, flags, and non-stop energy. Perfect for experiencing authentic Mexican football culture, though views can be distant from midfield action.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Price range:</strong> $50-200 USD for World Cup matches
                    </div>
                  </div>
                </div>
              </div>

              {/* Stadium Tips */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                    <i className="ri-sun-line text-gold-400 dark:text-gold-300"></i>
                    Sun & Weather
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                    East side gets afternoon sun, west side offers shade during day matches. Mexico City's high altitude means intense UV exposure—bring sunscreen and hat. Afternoon thunderstorms possible June-September.
                  </p>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                    <i className="ri-volume-up-line text-gold-400 dark:text-gold-300"></i>
                    Atmosphere Zones
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                    Sections behind goals (north/south) offer the most vocal support. East side (Palco Azteca) tends to be more family-friendly. West side gets rowdier during Club América matches.
                  </p>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                    <i className="ri-wheelchair-line text-gold-400 dark:text-gold-300"></i>
                    Accessibility
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                    Wheelchair-accessible seating available in multiple sections with dedicated parking and entrances. Elevators serve all levels. Contact stadium services in advance for specific accommodations.
                  </p>
                </div>
              </div>
            </div>

            {/* Food, Drinks & Amenities */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-restaurant-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Food, Drinks & Stadium Amenities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  {/* Food Options */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-restaurant-2-line text-emerald-400 dark:text-emerald-300"></i>
                      Food & Dining
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300 mt-1"></i>
                        <div>
                          <p className="text-slate-900 dark:text-slate-50 font-semibold">Traditional Mexican</p>
                          <p className="text-slate-700 dark:text-slate-200 text-sm">Tacos, quesadillas, tortas, elote (street corn), and regional specialties throughout concourses</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300 mt-1"></i>
                        <div>
                          <p className="text-slate-900 dark:text-slate-50 font-semibold">Premium Dining</p>
                          <p className="text-slate-700 dark:text-slate-200 text-sm">Full-service restaurants in VIP areas, including Palco Azteca Restaurant with panoramic views</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300 mt-1"></i>
                        <div>
                          <p className="text-slate-900 dark:text-slate-50 font-semibold">International Options</p>
                          <p className="text-slate-700 dark:text-slate-200 text-sm">Pizza, burgers, hot dogs, and Asian fusion available in main concourses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Beverages */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-cup-line text-gold-400 dark:text-gold-300"></i>
                      Beverages
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-beer-line text-gold-400 dark:text-gold-300"></i>
                        <span>Local beers: Corona, Dos Equis, Tecate, Modelo</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-glass-line text-gold-400 dark:text-gold-300"></i>
                        <span>Soft drinks, fresh juices, agua frescas</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-drop-line text-gold-400 dark:text-gold-300"></i>
                        <span>Bottled water (essential at altitude)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Stadium Amenities */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-store-line text-emerald-400 dark:text-emerald-300"></i>
                      Stadium Amenities
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-shirt-line text-emerald-400 dark:text-emerald-300"></i>
                        <span>Official merchandise stores (multiple locations)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-bank-card-line text-emerald-400 dark:text-emerald-300"></i>
                        <span>ATMs and currency exchange</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-first-aid-kit-line text-emerald-400 dark:text-emerald-300"></i>
                        <span>Medical stations and first aid</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-wifi-line text-emerald-400 dark:text-emerald-300"></i>
                        <span>Free WiFi throughout stadium</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* What to Bring */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-suitcase-line text-gold-400 dark:text-gold-300"></i>
                      What to Bring
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Valid photo ID (passport for international visitors)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Tickets (digital on phone or printed confirmation)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Small amount of cash (vendors prefer cash)</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Sunscreen and hat (high altitude UV)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Light jacket (evenings can be cool)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                          <span>Portable phone charger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-money-dollar-circle-line text-blue-400 dark:text-blue-300"></i>
                  Typical Stadium Pricing (World Cup 2026)
                </h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-300">Beer</p>
                    <p className="text-slate-900 dark:text-slate-50 font-semibold">$8-12 USD</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-300">Tacos (3)</p>
                    <p className="text-slate-900 dark:text-slate-50 font-semibold">$6-10 USD</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-300">Soft Drink</p>
                    <p className="text-slate-900 dark:text-slate-50 font-semibold">$4-6 USD</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-300">Jersey</p>
                    <p className="text-slate-900 dark:text-slate-50 font-semibold">$80-120 USD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre & Post-Match Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-time-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Pre & Post-Match Experience
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Pre-Match */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-play-circle-line text-emerald-400 dark:text-emerald-300"></i>
                      Pre-Match (Arrive 2-3 Hours Early)
                    </h3>
                    <div className="space-y-3">
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                        The area around Azteca transforms into a massive street party 3-4 hours before kickoff. Vendors sell everything from team scarves to traditional Mexican food, while mariachi bands and drum groups create an electric atmosphere.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-music-line text-gold-400 dark:text-gold-300"></i>
                          <span>Live mariachi performances near main entrances</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-restaurant-line text-gold-400 dark:text-gold-300"></i>
                          <span>Street food vendors throughout the plaza</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-camera-line text-gold-400 dark:text-gold-300"></i>
                          <span>Photo opportunities with stadium backdrop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stadium Museum */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-museum-line text-gold-400 dark:text-gold-300"></i>
                      Estadio Azteca Museum
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                      Open on non-match days, the museum showcases World Cup history, including Pelé's 1,000th goal ball and Diego Maradona memorabilia. Stadium tours available with field access and locker room visits.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Hours:</strong> Tuesday-Sunday 10 AM - 5 PM<br/>
                      <strong>Price:</strong> $15-25 USD (tours $30-45 USD)
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Post-Match */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-stop-circle-line text-emerald-400 dark:text-emerald-300"></i>
                      Post-Match (Allow Extra Time)
                    </h3>
                    <div className="space-y-3">
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                        Expect 30-60 minutes to exit the stadium area due to crowd flow. The light rail and metro stations can become extremely congested, so consider waiting 20-30 minutes before heading to transport.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-time-line text-gold-400 dark:text-gold-300"></i>
                          <span>Stay hydrated while waiting in exit queues</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-group-line text-gold-400 dark:text-gold-300"></i>
                          <span>Stick with your group in crowded areas</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <i className="ri-phone-line text-gold-400 dark:text-gold-300"></i>
                          <span>Download offline maps in case of poor signal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Nearby Attractions */}
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                      <i className="ri-map-pin-line text-gold-400 dark:text-gold-300"></i>
                      Nearby Attractions
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-building-line text-gold-400 dark:text-gold-300"></i>
                        <span>Xochimilco floating gardens (15 minutes)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-ancient-gate-line text-gold-400 dark:text-gold-300"></i>
                        <span>Coyoacán historic center (20 minutes)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <i className="ri-shopping-bag-line text-gold-400 dark:text-gold-300"></i>
                        <span>Plaza Cuicuilco shopping center (10 minutes)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Verdict */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-trophy-line text-gold-400 dark:text-gold-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Estadio Azteca transcends sport—it's a pilgrimage site where football's greatest moments crystallized into legend. Standing in the bowl where Pelé danced, where Maradona's genius and controversy collided, where 130,000+ voices have shaken volcanic rock, you're not just watching a match—you're participating in football's most sacred ritual.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                      <i className="ri-heart-line text-emerald-400 dark:text-emerald-300"></i>
                      Who will love it most:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200">
                      Football romantics, history enthusiasts, and anyone seeking raw, passionate atmosphere at altitude. Families will find it accessible and welcoming despite the size. First-time World Cup attendees couldn't ask for a more legendary venue.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                      <i className="ri-star-line text-gold-400 dark:text-gold-300"></i>
                      Don't miss:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200">
                      Arriving early to absorb the pre-match energy building in waves. The moment the Mexican national anthem echoes through 80,000+ voices at altitude, with the opening match spotlight focused on this storied ground, will be unforgettable.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-blue-400 dark:text-blue-300"></i>
                    Final advice:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-4">
                    Book accommodation in Roma Norte or Condesa 4-6 months ahead—these neighborhoods offer the perfect blend of Mexico City's cultural heartbeat and reasonable stadium access. Secure your World Cup tickets early through official FIFA channels or verified hospitality packages. Master the Metro + Light Rail combination for stress-free transport.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 italic">
                    And when those first chants erupt from behind the goals, let the sound wash over you—you're experiencing football at its most primal, passionate peak.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text mb-4">
                  Viva Azteca. Viva México. Viva el Mundial.
                </p>
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