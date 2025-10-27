import { useState } from 'react';

interface EstadioAztecaGuideProps {
  onClose?: () => void;
}

export const EstadioAztecaGuide = ({ onClose }: EstadioAztecaGuideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGotItClick = () => {
    if (onClose) {
      onClose();
    } else {
      toggleExpanded();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
      {/* Preview Card - Collapsed State */}
      {!isExpanded && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src="https://readdy.ai/api/search-image?query=Estadio%20Azteca%20Mexico%20City%20aerial%20view%20at%20sunset%2C%20massive%20football%20stadium%20architecture%20with%20dramatic%20lighting%2C%20largest%20stadium%20Latin%20America%20volcanic%20rock%20foundation%2C%20iconic%20World%20Cup%20venue&width=800&height=400&seq=azteca1&orientation=landscape"
              alt="Estadio Azteca aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
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
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 border-b border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-gold-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-trophy-line text-xl text-emerald-400"></i>
                <span className="font-semibold">Opening Match Venue</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Introduction Section */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <i className="ri-trophy-line text-gold-400 text-4xl"></i>
                  The Cathedral Where World Cup History Repeats
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Stand at the foot of Mexico City's colossal stadium, and you'll understand why they call it "El Coloso de Santa Úrsula." Rising from volcanic rock at 2,200 meters above sea level, Estadio Azteca isn't just the largest stadium in Latin America—it's the only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy. In 2026, this legendary colossus will make history once again, becoming the first stadium ever to host three FIFA World Cups. As the opening match kicks off on June 11, 2026, with Mexico taking center stage, you'll witness footballing royalty welcoming the world's greatest tournament home for an unprecedented third time.
                </p>
              </div>
            </div>

          {/* Stadium Overview */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-building-line text-emerald-400 text-4xl"></i>
              Stadium Overview & Fast Facts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-building-2-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Official Name</span>
                    <p className="text-white font-semibold">Estadio Azteca (commercially known as Estadio Banorte; FIFA designation: Estadio Ciudad de México for World Cup 2026)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-map-pin-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Location</span>
                    <p className="text-white font-semibold">Coyoacán borough, southern Mexico City (Santa Úrsula Coapa neighborhood)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-road-map-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Address</span>
                    <p className="text-white font-semibold">Calzada de Tlalpan 3465, Col. Santa Úrsula Coapa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-calendar-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Opened</span>
                    <p className="text-white font-semibold">May 29, 1966</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-group-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Capacity</span>
                    <p className="text-white font-semibold">87,523 (standard); 83,264 (FIFA World Cup 2026 configuration)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-team-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Primary Tenants</span>
                    <p className="text-white font-semibold">Club América (Liga MX), Mexico National Football Team, Cruz Azul (Liga MX)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-pencil-ruler-2-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Architect</span>
                    <p className="text-white font-semibold">Pedro Ramírez Vázquez and Rafael Mijares Alcérreca</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-grass-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Surface Type</span>
                    <p className="text-white font-semibold">Hybrid grass (newly installed for 2026)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-building-4-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Roof Type</span>
                    <p className="text-white font-semibold">Open-air with partial cantilevered canopy over lateral sections</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                  <i className="ri-mountain-line text-gold-400 text-xl"></i>
                  <div>
                    <span className="text-slate-400 text-sm">Altitude</span>
                    <p className="text-white font-semibold">2,200 meters (7,200 feet) above sea level</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="ri-star-line text-gold-400"></i>
                Notable Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>Only stadium to host two World Cup finals (1970, 1986)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>Largest stadium in Mexico and Latin America</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>Six-tier seating bowl</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>856 executive suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>State-of-the-art LED screens installed throughout</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400"></i>
                  <span>Built on volcanic rock from Xitle volcano</span>
                </div>
              </div>
            </div>
          </div>

          {/* History & Legacy */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-time-line text-gold-400 text-4xl"></i>
              History & Legacy
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
                Conceived during President Adolfo López Mateos's tenure to prepare Mexico City for the 1968 Summer Olympics, Estadio Azteca broke ground in 1961 after architects Pedro Ramírez Vázquez and Rafael Mijares Alcérreca studied Europe's greatest stadiums. Construction proved monumental—crews removed 180,000 cubic meters of volcanic rock from the Xitle volcano site before the stadium opened with a 2-2 friendly between Club América and Italy's Torino on May 29, 1966.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                The Azteca's legend solidified just four years later. The 1970 World Cup final saw Pelé's Brazil dismantle Italy 4-1 in what many consider the greatest team performance in football history. The stadium also hosted the "Game of the Century"—Italy's 4-3 extra-time thriller against West Germany in the semifinals. Sixteen years later, in 1986, Diego Maradona delivered two of the sport's most famous goals minutes apart: the infamous "Hand of God" and the breathtaking "Goal of the Century" against England in the quarterfinals. Argentina went on to win the final 3-2 over West Germany—once again at Azteca.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Beyond football, the stadium has witnessed Julio César Chávez's legendary boxing nights (including a 132,247-attendance record in 1993), NFL games since 2005 as part of the International Series, and concerts by Michael Jackson, U2, and Paul McCartney. The stadium underwent major renovations in 2016 that reduced capacity from over 100,000 to 87,000 while adding modern amenities. A comprehensive renovation project costing approximately 2 billion Mexican pesos (€110 million) has been underway since late 2024, with the stadium scheduled to reopen March 28, 2026—just 75 days before the World Cup opener.
              </p>
            </div>
          </div>

          {/* Architecture & Experience */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-building-4-line text-emerald-400 text-4xl"></i>
              Stadium Architecture & Experience
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
                Estadio Azteca's circular design creates a steep, imposing bowl that places fans remarkably close to the action despite its massive scale. The original architects prioritized sightlines—the lower tier rests against natural slopes, ensuring virtually every seat offers unobstructed views of the 105m × 68m pitch, which sits 9.5 meters below ground level.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                The six-tier seating configuration (sections 100-600) wraps around the playing surface, with two main tiers separated by a ring of 856 luxury boxes. The partial cantilevered roof covers lateral sections, providing shade while maintaining an open-air atmosphere. Modern renovations have introduced high-resolution LED panels at both ends, replacing the phosphorous boards installed in 1998, while new LED exterior screens create a striking visual identity.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                At altitude, Azteca's acoustics are exceptional—sound builds in waves, with chants originating behind goals rolling through upper tiers and settling over midfield like thunder. The stadium's sheer volume (capacity has exceeded 119,000 for football and 132,000 for boxing) creates an intimidating fortress atmosphere. Accessibility features include wheelchair ramps, elevators, dedicated accessible seating zones, and assistance services—though early arrival is recommended for optimal positioning.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                The ongoing 2026 renovation includes new changing rooms beneath the boxes, an extended players' tunnel, completely replaced seating, enhanced hospitality zones with restaurants and bars, restored facade with LED lighting, and the critical hybrid pitch designed for FIFA standards. The result blends historic character with world-class modern infrastructure.
              </p>
            </div>
          </div>

          {/* What Matches to Expect */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-football-line text-emerald-400 text-4xl"></i>
              What Matches to Expect
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
                Estadio Azteca will host <strong>five matches during the 2026 World Cup</strong>, including the tournament's <strong>opening ceremony and match on June 11, 2026</strong>—marking the stadium's record third opening match (after 1970 and 1986). The confirmed schedule includes three group stage matches (June 11, 17, and 24), a Round of 32 fixture on June 30, and a Round of 16 knockout match on July 5.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                The opening match atmosphere promises to be explosive, with Mexico expected to play before a capacity crowd. Two of the group stage matches will feature El Tri, virtually guaranteeing sold-out attendance and the passionate, thunderous support Mexican fans are famous for. Expect kickoff times at 12:00, 15:00, 18:00, and 21:00 local Central Time, accommodating global television audiences.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                This historic venue's third World Cup appearance follows its legendary status from hosting finals in 1970 and 1986, plus memorable matches from the 1968 Olympics and 1999 FIFA Confederations Cup. The 2026 tournament adds another chapter to Azteca's unmatched World Cup legacy.
              </p>
            </div>
          </div>

          {/* Getting to the Stadium */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-map-2-line text-emerald-400 text-4xl"></i>
              Getting to the Stadium
            </h2>
            
            {/* By Metro + Light Rail */}
            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-400"></i>
                By Metro + Light Rail (Recommended)
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed mb-4">
                  The most reliable transport option combines Mexico City's Metro with the Xochimilco Light Rail (Tren Ligero). Take Metro Line 2 (dark blue) to its southern terminus at <strong>Tasqueña station</strong>—easily accessible from the historic center (Zócalo station) or via transfers from most central locations. At Tasqueña (a major transportation hub), transfer to the <strong>Tren Ligero</strong> southbound.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Purchase a separate ticket for the light rail (approximately 5-7 pesos). The journey from Tasqueña to <strong>Estadio Azteca station</strong> takes 15 minutes, with trains departing every 10 minutes. The light rail station sits directly in front of the stadium—you'll exit and see the imposing structure immediately.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-emerald-400 font-semibold mb-2">Journey Time & Tips:</p>
                  <p className="text-slate-300 text-sm">
                    <strong>From city center:</strong> 40-60 minutes total, though allow 90-120 minutes on matchdays due to crowds at Tasqueña. The platform has been recently expanded with Barcelona-style configuration for 2026 to handle World Cup crowds.
                  </p>
                  <p className="text-slate-300 text-sm mt-2">
                    <strong>Pro tip:</strong> Metro Line 2 crosses the historic center, making it convenient from popular tourist areas. Download the CDMX Metro app for real-time updates.
                  </p>
                </div>
              </div>
            </div>

            {/* By Bus */}
            <div className="mb-8 p-6 bg-slate-800/30 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="ri-bus-line text-gold-400"></i>
                By Bus
              </h3>
              <p className="text-slate-300 leading-relaxed">
                RTP (Red de Transporte de Pasajeros) operates bus routes along Calzada de Tlalpan serving the stadium. Route 2A departs from Base CETRAM Taxqueña and reaches Tlalpan y Estadio Azteca stop in approximately 22 minutes, with buses every 5 minutes. Fare ranges from 4-20 pesos depending on distance.
              </p>
            </div>

            {/* By Car */}
            <div className="mb-8 p-6 bg-slate-800/30 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="ri-car-line text-gold-400"></i>
                By Car
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed mb-4">
                  From downtown Mexico City, follow Avenida Tlalpan south (approximately 15 kilometers). Stay on the right side of the metro/light rail tracks—the stadium appears on your right. Alternatively, use the Anillo Periférico ring road, taking the "Estadio Azteca" exit.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                  <p className="text-red-400 font-semibold mb-2">Parking & Traffic Warning:</p>
                  <p className="text-slate-300 text-sm">
                    On-site parking opens 4 hours before events. Published rates are MXN $120 for cars/motorcycles, MXN $360 for minibuses, MXN $480 for buses. However, expect severe traffic congestion on matchdays—departures from city center should allow 60-90 minutes minimum, potentially 2+ hours during peak times.
                  </p>
                </div>
              </div>
            </div>

            {/* By Rideshare/Taxi */}
            <div className="mb-8 p-6 bg-slate-800/30 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="ri-taxi-line text-gold-400"></i>
                By Rideshare/Taxi
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed mb-4">
                  Uber and DiDi are widely used and safe in Mexico City. Drop-off zones are designated around the stadium perimeter near entry gates. From popular neighborhoods (Roma Norte, Condesa, Polanco), expect 25-40 minutes normal traffic, 45-60+ minutes matchday traffic. Surge pricing is guaranteed for major matches—fares from central areas could reach $300-500 pesos (US$15-25).
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                  <p className="text-blue-400 font-semibold mb-2">Airport Transfers:</p>
                  <p className="text-slate-300 text-sm">
                    From Mexico City International Airport (MEX), the journey is 12-13 miles (20 kilometers), taking 18-25 minutes by car in light traffic, 45-90 minutes in typical traffic. Rideshare costs $400-600 pesos (US$20-30). Pre-booking through hotel concierge or booking platforms provides fixed rates and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Where to Stay */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-hotel-line text-emerald-400 text-4xl"></i>
              Where to Stay
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none mb-8">
              <p className="text-slate-300 leading-relaxed">
                Estadio Azteca sits far south of Mexico City's tourist heartland, making accommodation location crucial for balancing stadium access with exploring the capital's vibrant culture.
              </p>
            </div>

            {/* Best Neighborhoods */}
            <div className="space-y-8">
              {/* Roma Norte & La Condesa */}
              <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-400"></i>
                  Roma Norte & La Condesa (30-40 minutes to stadium)
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  These adjacent "sister neighborhoods" are hands-down the best base for World Cup visitors. Tree-lined streets, world-class restaurants, third-wave coffee shops, craft cocktail bars, Parque México, and Art Deco architecture create an irresistible atmosphere. Roma Norte offers edgier, more artistic vibes with street art and galleries, while Condesa provides leafy parks and a more laid-back European feel. Both connect easily via Metro Line 2 (transfer at various stations) to reach Tasqueña/Azteca.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-2">Budget</h4>
                    <p className="text-slate-300 text-sm">Hostel Home (Roma), Gael Condesa, Casa Pancha</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Mid-range</h4>
                    <p className="text-slate-300 text-sm">Hotel Villa Condesa, Stanza Hotel (Roma), Red Tree House (Condesa—book months ahead!), Casa Mali by Dominion</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">Luxury</h4>
                    <p className="text-slate-300 text-sm">Condesa DF (boutique icon with rooftop bar), Casa Decu, The Ignacia Guest House (Roma Norte)</p>
                  </div>
                </div>
              </div>

              {/* Polanco */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-building-3-line text-gold-400"></i>
                  Polanco (30-40 minutes to stadium)
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Mexico City's upscale answer to Beverly Hills, Polanco offers luxury shopping, Michelin-starred restaurants (including Pujol), proximity to Chapultepec Park and museums, and five-star service. Less walkable and charming than Roma/Condesa but impeccable for those seeking refinement.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Mid-range</h4>
                    <p className="text-slate-300 text-sm">Green Park Hotel (Art Deco gem), Hotel Polanco</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">Luxury</h4>
                    <p className="text-slate-300 text-sm">Camino Real Polanco, Sofitel Mexico City Reforma (rooftop pool with Angel of Independence views), Pug Seal (quirky boutique with artist-designed rooms)</p>
                  </div>
                </div>
              </div>

              {/* Centro Histórico */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-ancient-gate-line text-gold-400"></i>
                  Centro Histórico (45-60 minutes to stadium)
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The historic heart surrounds the Zócalo main square with colonial architecture, museums, and cultural landmarks. Convenient for sightseeing but farther from the stadium. Vibrant during day, quieter at night.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Mid-range</h4>
                    <p className="text-slate-300 text-sm">Gran Hotel Ciudad de México (stunning lobby), Downtown Mexico</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">Luxury</h4>
                    <p className="text-slate-300 text-sm">Downtown Mexico, Hotel Histórico Central</p>
                  </div>
                </div>
              </div>

              {/* Coyoacán */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-palette-line text-gold-400"></i>
                  Coyoacán (15-25 minutes to stadium)
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The bohemian neighborhood surrounding the Frida Kahlo Museum offers colonial charm, cobblestone streets, and local culture. Closest area to Estadio Azteca with character, though accommodation options are limited and you're farther from central nightlife.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-2">Budget</h4>
                    <p className="text-slate-300 text-sm">Casa Ayvar, Hostal Cuija Coyoacán, La Casita de Coyoacán</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Mid-range</h4>
                    <p className="text-slate-300 text-sm">Hotels near Viveros de Coyoacán</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-blue-400"></i>
                Accommodation Strategy
              </h3>
              <p className="text-slate-300">
                Most visitors should stay in Roma Norte/Condesa for the ideal blend of city experience and reasonable stadium access. Use Metro on matchdays, Uber for nightlife. Early World Cup accommodation booking is critical—prices surge 200-400% closer to tournament dates.
              </p>
            </div>
          </div>

          {/* Matchday Tips */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-football-line text-emerald-400 text-4xl"></i>
              Matchday Tips & Insider Advice
            </h2>
            
            <div className="space-y-8">
              {/* Arrive Early */}
              <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-time-line text-emerald-400"></i>
                  Arrive Early
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Security lines and crowd management at 80,000+ capacity events require patience. Gates open 3-4 hours before kickoff—arriving 90 minutes pre-match minimum allows time to clear security, find seats, soak in atmosphere, and purchase food/drinks before kickoff. For the opening match, consider arriving 2+ hours early.
                </p>
              </div>

              {/* Food & Drink */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-line text-gold-400"></i>
                  Food & Drink Inside
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Forget traditional concession stands—Azteca operates on a brilliant vendor system. Throughout the match, vendors navigate aisles and seats selling cervezas (beers, approximately 100-150 pesos/$5-7 USD), pizza (60 pesos/$3), tacos, candy, and snacks (20-100 pesos/$1-5). Money and drinks pass efficiently fan-to-fan. Many locals run informal tabs with vendors who count cups at match end. It's remarkably efficient, though be aware vendors moving through rows can briefly obstruct views.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Outside the stadium perimeter, food stalls sell quesadillas, tacos, and traditional Mexican snacks at lower prices (20-50 pesos). Water bottles cost approximately 20-40 pesos inside.
                  </p>
                </div>
              </div>

              {/* What to Bring */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-suitcase-line text-gold-400"></i>
                  What to Bring
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Valid photo ID (passport for international visitors)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Tickets (digital on phone or printed confirmation)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Small amount of cash (vendors prefer cash)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Weather-appropriate clothing (light jacket for altitude)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Fully charged phone</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-checkbox-circle-line text-emerald-400"></i>
                      <span>Small clear bag (recommended)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Altitude Adjustment */}
              <div className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-mountain-line text-red-400"></i>
                  Altitude Adjustment
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  At 7,200 feet, Mexico City's thin air affects everyone. If you're arriving from lower elevations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-drop-line text-blue-400"></i>
                      <span>Stay hydrated (drink water constantly)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-forbid-line text-red-400"></i>
                      <span>Avoid heavy alcohol consumption day before/day of match</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-walk-line text-emerald-400"></i>
                      <span>Take stairs slowly—the six-tier stadium means significant climbing</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <i className="ri-calendar-check-line text-gold-400"></i>
                      <span>Consider arriving 1-2 days early to acclimate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atmosphere */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-volume-up-line text-gold-400"></i>
                  Atmosphere Expectations
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Mexican football culture is passionate but family-friendly. The altitude amplifies sound—when chants begin behind goals, the roar physically washes over you. Expect constant chants (call-and-response between supporter groups), cell phone light displays (fans tape yellow/blue film over lights), loud, continuous noise (40,000+ in supporter sections behind goals), plenty of families, kids, and older fans, significant police presence (riot gear visible but crowds are civil), and colorful language in chants but generally playful atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Things to Do Nearby */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-compass-3-line text-emerald-400 text-4xl"></i>
              Things to Do Nearby
            </h2>
            
            <div className="space-y-8">
              {/* Pre-Match Atmosphere */}
              <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-team-line text-emerald-400"></i>
                  Pre-Match Atmosphere & Fan Zones
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Parking lot tailgates</strong> (3-4 hours before kickoff) are legendary. Local supporters and tour groups gather for tacos, beer, music, and pre-match celebrations. If you're connecting with tour operators like Homefans, they arrange tailgate access with other fans.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Street vendors</strong> surround the stadium selling team merchandise, scarves, hats (100-200 pesos), and food. Arrive early to browse and haggle gently.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>FIFA Fan Fest</strong> for 2026 will be hosted at Zócalo square in Mexico City's historic center, offering big-screen viewing, entertainment, and cultural experiences throughout the tournament.
                  </p>
                </div>
              </div>

              {/* Coyoacán */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-palette-line text-gold-400"></i>
                  Coyoacán (15-20 minutes by Metro/taxi)
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The charming bohemian neighborhood offers colonial streets, plazas, and cultural treasures:
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-2">Frida Kahlo Museum (Casa Azul)</h4>
                    <p className="text-slate-300 text-sm">
                      The cobalt-blue house where Mexico's most famous artist was born, lived, and died. Original artworks, personal belongings, and Diego Rivera's collections fill the intimate space. <strong>Critical:</strong> Tickets must be purchased online weeks in advance—they sell out instantly. Entry: 230-270 pesos ($12-14 USD) depending on day. Open Tuesday-Sunday 10:00-18:00, closed Mondays. Address: Londres 247, Col. Del Carmen.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Jardín Centenario & Jardín Hidalgo</h4>
                    <p className="text-slate-300 text-sm">
                      Coyoacán's twin central plazas burst with cafes, restaurants, street performers, and weekend artisan markets. Perfect for post-match decompression with mezcal or churros.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nearby Dining */}
              <div className="p-6 bg-slate-800/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-gold-400"></i>
                  Nearby Dining & Cantinas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-2">Pre-match tacos</h4>
                    <p className="text-slate-300 text-sm">
                      Local tour operators and fans recommend authentic taco spots within walking distance. Street-level taquerías around the stadium serve al pastor, carnitas, and barbacoa (30-80 pesos per order).
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-gold-400 font-semibold mb-2">Post-match cantinas</h4>
                    <p className="text-slate-300 text-sm">
                      Traditional bars in Coyoacán center (Cantina La Coyoacana, others along Jardín Centenario) offer cold Coronas, micheladas, and local atmosphere for celebrating or commiserating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Verdict */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-trophy-line text-gold-400 text-4xl"></i>
              Final Verdict & Key Takeaway
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none mb-8">
              <p className="text-slate-300 leading-relaxed mb-6">
                Estadio Azteca transcends sport—it's a pilgrimage site where football's greatest moments crystallized into legend. Standing in the bowl where Pelé danced, where Maradona's genius and controversy collided, where 130,000+ voices have shaken volcanic rock, you're not just watching a match—you're stepping into history. The 2026 World Cup opening match will etch another immortal chapter as this cathedral welcomes the tournament for an unprecedented third time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <i className="ri-heart-line text-emerald-400"></i>
                    Who will love it most:
                  </h3>
                  <p className="text-slate-300">
                    Football romantics, history enthusiasts, and anyone seeking raw, passionate atmosphere at altitude. Families will find it accessible and welcoming despite the size. First-time World Cup attendees couldn't ask for a more legendary venue.
                  </p>
                </div>
                
                <div className="bg-gold-500/10 border border-gold-500/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <i className="ri-star-line text-gold-400"></i>
                    Don't miss:
                  </h3>
                  <p className="text-slate-300">
                    Arriving early to absorb the pre-match energy building in waves. The moment the Mexican national anthem echoes through 80,000+ voices at altitude, with the opening match spotlight focused on this storied ground, will be unforgettable.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-blue-400"></i>
                  Final advice:
                </h3>
                <p className="text-slate-300 mb-4">
                  Book accommodation in Roma Norte or Condesa 4-6 months ahead—these neighborhoods offer the perfect blend of Mexico City's cultural heartbeat and reasonable stadium access. Secure your World Cup tickets early through official FIFA channels or verified hospitality packages. Master the Metro Line 2 to Tasqueña/Tren Ligero route. Embrace the altitude with hydration.
                </p>
                <p className="text-slate-300 italic">
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