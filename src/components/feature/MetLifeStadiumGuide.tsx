import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface MetLifeStadiumGuideProps {
  onClose?: () => void;
}

export const MetLifeStadiumGuide = ({ onClose }: MetLifeStadiumGuideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGotItClick = () => {
    navigate('/venues');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      {/* Preview Card - Collapsed State */}
      {!isExpanded && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src="https://readdy.ai/api/search-image?query=MetLife%20Stadium%20New%20Jersey%20aerial%20view%20at%20night%2C%20modern%20NFL%20stadium%20architecture%20with%20dramatic%20lighting%2C%20massive%20sports%20venue%20with%20New%20York%20City%20skyline%20backdrop%2C%20contemporary%20design%20excellence&width=800&height=400&seq=metlife1&orientation=landscape"
              alt="MetLife Stadium aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            
            {/* Stadium Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏆 World Cup Final Venue
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              MetLife Stadium
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-group-line text-xl text-blue-400"></i>
                <span className="font-semibold">82,500 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                <span>New York/New Jersey</span>
              </div>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              When the referee blows the final whistle on July 19, 2026, history will be made at MetLife Stadium. The world's most prestigious football trophy will be lifted under the lights of this architectural powerhouse, just eight miles from the Manhattan skyline.
            </p>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in pt-20">
          {/* Header Section */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 p-8 md:p-12 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 dark:from-emerald-300 dark:to-sky-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 dark:text-emerald-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              MetLife Stadium
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-blue-400 dark:text-sky-300"></i>
                <span className="font-semibold">82,500 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span>New York/New Jersey</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-trophy-line text-xl text-gold-400 dark:text-amber-300"></i>
                <span className="font-semibold">World Cup Final Venue</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Introduction Section */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                  <i className="ri-trophy-line text-gold-400 dark:text-amber-300 text-4xl"></i>
                  The Stage for Football's Greatest Moment
                </h2>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  This isn't just another World Cup venue—it's <em>the</em> venue, hosting the tournament's climactic final alongside seven other crucial matches. For international fans planning the journey of a lifetime, MetLife represents everything monumental about North American sports: scale, technology, and an atmosphere that can accommodate 82,500 roaring supporters. Whether you're crossing oceans or states to witness football history, this is your essential guide to conquering match day at the biggest stadium in the NFL.
                </p>
              </div>
            </div>

          {/* Stadium Overview */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
              Stadium Overview & Fast Facts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Official Name</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">MetLife Stadium (FIFA designation: New York New Jersey Stadium)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Location</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">East Rutherford, New Jersey (8 miles/13 km west of Manhattan)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-calendar-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Opened</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">April 2010</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Capacity</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">82,500 (World Cup configuration: approximately 82,500)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-team-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Primary Tenants</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">New York Giants and New York Jets (NFL)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-pencil-ruler-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Architects</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">360 Architecture, EwingCole, Rockwell Group, Bruce Mau Design</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-grass-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Surface</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">FieldTurf (artificial); natural grass to be installed for World Cup 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-money-dollar-circle-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Construction Cost</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">$1.6 billion (2010)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-star-line text-gold-400 dark:text-amber-300"></i>
                Notable Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                  <span>Largest NFL stadium</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                  <span>Four massive 30×116-foot HD video boards</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                  <span>Color-changing LED lighting system</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                  <span>First NFL stadium to join UN Climate Action Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                  <span>Open-air (no roof)</span>
                </div>
              </div>
            </div>
          </div>

          {/* History & Legacy */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-time-line text-gold-400 dark:text-amber-300 text-4xl"></i>
              History & Legacy
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                MetLife Stadium emerged from one of sport's most unique partnerships. When the New York Jets failed to secure approval for their planned West Side Manhattan stadium ahead of the 2012 Olympics bid, they joined forces with their crosstown rivals, the Giants, to create the NFL's first jointly-owned facility. Construction began in 2007 adjacent to the aging Giants Stadium, with the old venue demolished shortly after MetLife's 2010 inauguration.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                Since opening, this East Rutherford colossus has hosted more than 600 major events, including Super Bowl XLVIII in February 2014—the first outdoor, cold-weather Super Bowl in NFL history. That Seattle Seahawks victory over Denver defied skeptics who predicted snowstorm chaos, instead delivering mild temperatures and establishing MetLife's credentials for high-stakes occasions. The stadium also hosted the Copa América Centenario final in 2016, where Chile defeated Argentina on penalties before 82,026 spectators, and WrestleMania 29 in 2013, which drew the venue's record attendance of 80,676.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                For New Jersey and New York, MetLife symbolizes decades of sports ambition finally realized in the metropolitan area. Recent FIFA-mandated renovations—removing 1,740 corner seats to widen the pitch—demonstrate the venue's adaptability and commitment to hosting world-class football.
              </p>
            </div>
          </div>

          {/* Architecture & Experience */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-building-4-line text-blue-400 dark:text-sky-300 text-4xl"></i>
              Stadium Architecture & Experience
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-slate-900 dark:text-slate-200 leading-relaxed mb-6">
                MetLife Stadium's design philosophy reflects its dual-franchise identity. Architects faced the challenge of creating a neutral canvas that could transform for either the Giants or Jets within hours. The solution was inspired by Manhattan's iconic skyscrapers: a limestone-like base supporting aluminum louvers and glass panels that change color through interior LED lighting—Giants blue on their match days, Jets green on theirs.
              </p>
              
              <p className="text-slate-900 dark:text-slate-200 leading-relaxed mb-6">
                The seating bowl surrounds the pitch entirely, creating exceptional acoustics and eliminating sightline obstructions. Unlike older stadiums, the raked design allows fans to track a 30-yard punt's full arc from any seat. Four colossal HD video boards anchor each upper-deck corner, part of over 47,000 square feet of digital displays throughout the venue. Ten massive LED pylons at stadium entrances blast team highlights and sponsor content visible from the parking lots.
              </p>
              
              <p className="text-slate-900 dark:text-slate-200 leading-relaxed mb-6">
                Premium amenities include 218 luxury suites across four levels and more than 10,000 club seats with access to upscale lounges like the MetLife 50 Club. The Beers of the World stands and Craft Beer Zones on levels 100 and 300 satisfy serious beer enthusiasts, while the Blue Point Pub and Bow Street Irish Whiskey Bar offer full-service options. Accessibility features include ADA-compliant seating on all levels with elevator access at multiple gates.
              </p>
              
              <p className="text-slate-900 dark:text-slate-200 leading-relaxed">
                The open-air design means weather is part of the experience—New Jersey summers can be sweltering, but June and July 2026 should offer pleasant match day conditions. Without a roof, this stadium channels the raw energy of outdoor football, letting crowd noise amplify without artificial acoustics.
              </p>
            </div>
          </div>

          {/* What Matches to Expect */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
              What Matches to Expect
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                MetLife Stadium will host <strong>eight World Cup 2026 matches</strong>, culminating in the <strong>tournament final on July 19, 2026</strong>—the first World Cup final in the New York metropolitan area and the United States since 1994. FIFA's announcement confirmed MetLife beat out Dallas's AT&T Stadium and Los Angeles's SoFi Stadium for the ultimate honour, projecting over $2 billion in regional economic impact.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Expect group stage fixtures and likely a knockout round match before the final. With 82,500 seats, the atmosphere will be electric—imagine a sold-out crowd representing dozens of nations, all converging on northern New Jersey for football's biggest prize. The venue's experience hosting international matches, including friendlies featuring Argentina, Brazil, and Mexico, means staff understand the unique atmosphere football supporters bring compared to NFL crowds.
              </p>
            </div>
          </div>

          {/* Getting to the Stadium */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
              Getting to the Stadium
            </h2>
            
            {/* By Train */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                By Train (Recommended)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                NJ Transit offers dedicated Meadowlands Rail Service from Secaucus Junction directly to Meadowlands Sports Complex Station, located steps from the stadium gates. This is the easiest, most reliable option for World Cup match days.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-building-line text-blue-400 dark:text-sky-300"></i>
                    From Manhattan:
                  </h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-2 ml-6">
                    <li>• Take any NJ Transit train from Penn Station (32nd Street, between 7th and 8th Avenues) to Secaucus Junction (12-15 minutes, departing frequently in the first 15 minutes of each hour)</li>
                    <li>• Transfer downstairs at Secaucus to the Meadowlands shuttle train (10 minutes)</li>
                    <li>• Round-trip fare from Penn Station: approximately $11</li>
                    <li>• Service begins 3.5 hours before kickoff, running every 10-20 minutes</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-building-2-line text-blue-400 dark:text-sky-300"></i>
                    From Newark:
                  </h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-2 ml-6">
                    <li>• NJ Transit trains from Newark Penn Station to Secaucus Junction, then transfer to Meadowlands shuttle</li>
                    <li>• Journey time: 20-25 minutes total</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-gold-400 dark:text-amber-300"></i>
                    Tips:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Purchase round-trip tickets in advance via the NJ Transit app or ticket machines to avoid the $5 onboard surcharge. The last train departs Meadowlands Station approximately 1 hour after full-time, so don't linger too long celebrating.
                  </p>
                </div>
              </div>
            </div>

            {/* By Bus */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-bus-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                By Bus
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Coach USA operates the 351 Meadowlands Express from Port Authority Bus Terminal (42nd Street and 8th Avenue) in Manhattan directly to MetLife Stadium. Service begins 2.5 hours before kickoff and runs until 30 minutes after kickoff, with return buses operating for 2 hours post-match. One-way fare: approximately $7. Drop-off near Parking Lot K.
              </p>
            </div>

            {/* By Car */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-car-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                By Car
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                With 28,000 parking spaces across the Meadowlands Sports Complex, driving is feasible but expect traffic congestion. Access via New Jersey Turnpike (I-95), exit onto Route 3 West. Parking rates typically $40+ for major events; pre-purchase permits online to guarantee access. For World Cup matches, arrive 3+ hours early. Rideshare drop-off zone: Parking Lot E (Verizon Gate).
              </p>
            </div>

            {/* From Airports */}
            <div className="p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                From NYC Airports:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Newark Liberty (EWR)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">15 miles, 25-35 minutes by car or rideshare ($40-60); NJ Transit train to Penn Station available</p>
                </div>
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">LaGuardia (LGA)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">18 miles, 35-50 minutes depending on traffic</p>
                </div>
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">JFK</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">28 miles, 45-70 minutes in moderate traffic</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mt-4 text-sm">
                Consider booking airport transfers or car services in advance for guaranteed World Cup match day transport, as rideshare surge pricing can triple fares after matches.
              </p>
            </div>
          </div>

          {/* Where to Stay */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
              Where to Stay
            </h2>
            
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-8">
              MetLife Stadium's proximity to both Manhattan and New Jersey suburbs offers accommodation for every budget and preference.
            </p>

            {/* Near Stadium */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                Near the Stadium (Practical but Limited Nightlife)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                For maximum convenience, stay in East Rutherford, Carlstadt, or Secaucus—all within 3 miles:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-money-dollar-circle-line text-green-400 dark:text-emerald-300"></i>
                    Budget:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Super 8 by Wyndham Meadowlands ($80-120/night), Extended Stay America Meadowlands</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-star-line text-blue-400 dark:text-sky-300"></i>
                    Mid-Range:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Hampton Inn Carlstadt-At The Meadowlands, Residence Inn by Marriott East Rutherford Meadowlands ($130-200/night)—many offer free parking and shuttle services</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800/70 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-vip-crown-line text-gold-400 dark:text-amber-300"></i>
                    Upscale:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Renaissance Meadowlands Hotel ($180-280/night), featuring modern amenities and proximity to American Dream mall</p>
                </div>
              </div>
            </div>

            {/* Secaucus Hub */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-train-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                Secaucus Hub (Best Transit Access)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Secaucus combines affordability with direct train access to both the stadium and Manhattan:
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                Hilton Garden Inn Secaucus, Fairfield Inn Secaucus, Aloft Secaucus Meadowlands—expect $150-220/night during World Cup
              </p>
            </div>

            {/* Manhattan */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-building-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                Manhattan (Maximum Experience, Higher Cost)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Staying in New York City offers unparalleled dining, nightlife, and sightseeing between matches, with Penn Station providing direct train access:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <i className="ri-money-dollar-circle-line text-green-400 dark:text-emerald-300 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Budget:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Hostels in Midtown/Hell's Kitchen ($50-80/night for dorms)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-star-line text-blue-400 dark:text-sky-300 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Mid-Range:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Countless chain hotels near Penn Station and Times Square ($200-400/night during World Cup)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-vip-crown-line text-gold-400 dark:text-amber-300 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Luxury:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Midtown five-stars like The St. Regis or Peninsula ($500-1,200/night)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newark Alternative */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                Newark Alternative
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Newark offers affordability and excellent NJ Transit connections to Secaucus Junction, plus proximity to Newark Airport—ideal for international arrivals. Downtown hotels range $100-200/night.
              </p>
            </div>

            {/* Booking Tip */}
            <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-gold-400 dark:text-amber-300"></i>
                Booking Tip:
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Reserve accommodation 6-12 months ahead for World Cup dates. Use platforms like https://www.booking.com, https://www.expedia.com, or https://www.airbnb.com to compare rates and locations. Filter by "near public transport" to simplify match day logistics.
              </p>
            </div>
          </div>

          {/* Matchday Tips */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-calendar-check-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
              Matchday Tips & Insider Advice
            </h2>

            {/* Arrive Early */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-time-line text-emerald-400 dark:text-emerald-300"></i>
                Arrive Early
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Gates typically open 2 hours before NFL games—expect similar for World Cup. Security screening takes time with 80,000+ fans, so arrive 2.5-3 hours early to explore the stadium, grab food, and soak up the pre-match atmosphere. Late arrivals risk missing kickoff.
              </p>
            </div>

            {/* Bag Policy */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-shield-check-line text-red-400 dark:text-red-300"></i>
                Bag Policy (Critical)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                MetLife enforces the NFL Clear Bag Policy strictly:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-slate-900/50 border border-green-200 dark:border-green-500/30 p-4 rounded-lg">
                  <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">✅ Allowed:</h4>
                  <ul className="text-slate-700 dark:text-slate-200 text-sm space-y-1">
                    <li>• Clear plastic/vinyl bags up to 12"×6"×12"</li>
                    <li>• Small clutch purses up to 4.5"×6.5" (non-clear OK)</li>
                    <li>• One-gallon clear Ziploc bags</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-slate-900/50 border border-red-200 dark:border-red-500/30 p-4 rounded-lg">
                  <h4 className="text-red-700 dark:text-red-300 font-semibold mb-2">❌ Prohibited:</h4>
                  <ul className="text-slate-700 dark:text-slate-200 text-sm space-y-1">
                    <li>• Backpacks</li>
                    <li>• Large purses</li>
                    <li>• Coolers</li>
                    <li>• Briefcases</li>
                    <li>• Camera bags</li>
                    <li>• Fanny packs</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mt-4 font-semibold">
                Leave non-compliant bags at your hotel. No bag check facilities on-site.
              </p>
            </div>

            {/* What to Bring */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-suitcase-line text-blue-400 dark:text-sky-300"></i>
                What to Bring
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="ri-drop-line text-blue-400 dark:text-sky-300"></i>
                    Factory-sealed water bottle (20 oz or less) or empty reusable bottle to fill inside
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-restaurant-line text-emerald-400 dark:text-emerald-300"></i>
                    Food in clear plastic bags (allowed!)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-sun-line text-yellow-400 dark:text-amber-300"></i>
                    Sunscreen and hat for day matches (open-air stadium)
                  </li>
                </ul>
                <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="ri-shirt-line text-purple-400 dark:text-violet-300"></i>
                    Light jacket for evening matches—New Jersey summer nights can cool down
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-battery-charge-line text-green-400 dark:text-emerald-300"></i>
                    Power bank for your phone (long days drain batteries)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-id-card-line text-orange-400 dark:text-orange-300"></i>
                    Photo ID (required for alcohol purchases if you appear under 40)
                  </li>
                </ul>
              </div>
            </div>

            {/* Food & Drink */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-restaurant-2-line text-orange-400 dark:text-orange-300"></i>
                Food & Drink Inside
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                MetLife offers extensive concessions: classic stadium fare (hot dogs, burgers, pizza), plus upgraded options like Asian noodles, gyros, deli sandwiches, and fried clams. Expect $8-10 for basic items, $13-15 for beer. The MetLife 50 Club (premium ticketholders) features buffet dining. Stadium is cashless—bring cards or use mobile pay.
              </p>
            </div>

            {/* Best Gates */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-door-open-line text-blue-400 dark:text-sky-300"></i>
                Best Gates
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The Verizon Gate (near Lot E) and Pepsi Gate handle crowds efficiently. The train station deposits you near the HCL Tech/Train Gate—convenient but can bottleneck. Spread out to less crowded gates if lines look long.
              </p>
            </div>

            {/* Exit Strategy */}
            <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                <i className="ri-logout-box-line text-amber-400 dark:text-amber-300"></i>
                Post-Match Exit Strategy
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Getting out is the trickiest part. The train station gets mobbed—expect 30-60 minute waits for Meadowlands trains post-match. Consider:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                <li className="flex items-start gap-2">
                  <i className="ri-time-line text-amber-400 dark:text-amber-300 mt-1"></i>
                  Exiting 5 minutes before full-time whistle if the result is decided (controversial but effective)
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-restaurant-line text-amber-400 dark:text-amber-300 mt-1"></i>
                  Walking to nearby restaurants (Redds, Marcus Live) for a drink while crowds thin
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-car-line text-amber-400 dark:text-amber-300 mt-1"></i>
                  Pre-booking car services for designated pickup times
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-bus-line text-amber-400 dark:text-amber-300 mt-1"></i>
                  Using the 351 bus back to Port Authority (also gets crowded)
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-200 mt-4 font-semibold">
                Rideshare surge pricing can be extreme—$100+ to Manhattan isn't uncommon after major events.
              </p>
            </div>
          </div>

          {/* Things to Do Nearby */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-compass-3-line text-purple-400 dark:text-violet-300 text-4xl"></i>
              Things to Do Nearby
            </h2>

            {/* American Dream */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-shopping-cart-line text-purple-400 dark:text-violet-300 text-2xl"></i>
                American Dream (0.4 miles)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                North America's second-largest mall isn't just shopping—it's an entertainment complex featuring Nickelodeon Universe (indoor theme park), DreamWorks Water Park, Big SNOW (indoor skiing!), SEA LIFE Aquarium, and dozens of restaurants. Perfect for pre-match hours or non-match days. Accessible via free shuttle or short walk.
              </p>
            </div>

            {/* Pre-Match Dining */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-restaurant-line text-orange-400 dark:text-orange-300 text-2xl"></i>
                Pre-Match Dining & Drinking
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                East Rutherford's dining scene is limited but functional:
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Redds Restaurant & Biergarten (0.5 miles)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Classic pub grub, shuttle service to/from stadium ($50 including parking), outdoor seating</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Marcus Live! Bar & Grille (American Dream)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Sports bar atmosphere with 35+ TVs, extensive menu</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Gianna's (Carlstadt, 2 miles)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Old-school Italian with massive portions—penne vodka, veal piccata</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Segovia Meson (nearby)</h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Spanish tapas and authentic cuisine</p>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-200 mt-4 text-sm">
                For serious pre-match atmosphere, many supporters will gravitate to Manhattan bars and travel together by train—Penn Station area has countless sports pubs.
              </p>
            </div>

            {/* Manhattan */}
            <div className="mb-8 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-building-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                Manhattan (8 miles)
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                If time permits, New York City offers endless attractions: Times Square, Central Park, Empire State Building, Statue of Liberty/Ellis Island ferries, Brooklyn Bridge, world-class museums (MET, MoMA, Natural History), Broadway shows, and neighborhoods like Greenwich Village and SoHo. Allocate full days for proper NYC exploration—don't try to squeeze sightseeing on match days.
              </p>
            </div>

            {/* Post-Match Celebrations */}
            <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                <i className="ri-party-popper-line text-gold-400 dark:text-amber-300 text-2xl"></i>
                Post-Match Celebrations
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                After a World Cup final, Manhattan transforms into a global party. Head to Times Square, Hell's Kitchen bars, or culturally-specific neighborhoods (Little Brazil in Midtown, Astoria's Latin quarter in Queens) to celebrate with fellow supporters.
              </p>
            </div>
          </div>

          {/* Final Verdict */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <i className="ri-medal-line text-gold-400 dark:text-amber-300 text-4xl"></i>
              Final Verdict & Key Takeaway
            </h2>
            
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                MetLife Stadium isn't subtle—it's a 82,500-seat monument to American sports excess, and for the 2026 World Cup final, that's precisely what makes it special. This venue delivers on scale, technology, and atmosphere while offering unmatched access to New York City's cultural riches. Yes, you'll navigate New Jersey Transit. Yes, you'll pay Manhattan prices. But you'll witness football's pinnacle moment in a region that's hosted every sport's championship at some point, now adding the World Cup crown to its resume.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 dark:bg-slate-800/70 border border-emerald-200 dark:border-slate-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                    <i className="ri-thumb-up-line text-emerald-400 dark:text-emerald-300"></i>
                    Perfect for:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200">
                    Supporters who want the full New York experience wrapped around their football; fans who appreciate modern, high-tech stadiums; anyone willing to plan logistics carefully for a once-in-a-lifetime atmosphere.
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                    <i className="ri-star-line text-blue-400 dark:text-sky-300"></i>
                    The One Thing You Can't Miss:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200">
                    Standing outside the stadium 90 minutes before kickoff, surrounded by supporters from every continent, with the Manhattan skyline glowing behind you—that's when you'll realize you're at the center of the sporting universe.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-alarm-line text-red-400 dark:text-red-300"></i>
                  Book Early:
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Accommodation and transport options will evaporate 2-3 months before the final. Secure your arrangements now, memorize the NJ Transit schedule, and prepare for the biggest match day of your life. The World Cup comes to New York New Jersey only once—make every moment count.
                </p>
              </div>
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