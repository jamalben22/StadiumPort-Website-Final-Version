import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface LumenFieldGuideProps {
  onClose?: () => void;
}

// Lumen Field Guide — PART 1/4
// Design language mirrors MetLife/Estadio Azteca/Arrowhead guides: same spacing, icons, gradients, and responsiveness.
export const LumenFieldGuide: React.FC<LumenFieldGuideProps> = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Preview Card - Collapsed State */}
      {!isExpanded && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Lumen%20Field%20Seattle%20aerial%20view%20at%20night%2C%20modern%20NFL%20stadium%20architecture%20with%20partial%20roof%2C%20Seattle%20skyline%20backdrop%2C%20dramatic%20lighting%20open-air%20venue&width=1600&height=900&seq=lumen1&orientation=landscape"
              alt="Lumen Field aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Lumen Field</h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">69,000 capacity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>SoDo, Seattle, Washington</span>
                </div>
              </div>

              {/* 1–2 sentence tagline using exact sentences from Part 1 */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                When FIFA selected Seattle to host matches for the 2026 World Cup, they chose more than just a stadium—they picked a sonic fortress.
              </p>

              <div className="flex items-center gap-3">
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

            {/* Exact heading from PART 1/4 */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Lumen Field: Where the 12th Man Meets the World's Game
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-blue-400 dark:text-sky-300"></i>
                <span className="font-semibold">Capacity: 69,000 (World Cup configuration)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span>Location: SoDo neighborhood, Seattle, Washington (1 mile south of downtown)</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Intro narrative paragraph block */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  When FIFA selected Seattle to host matches for the 2026 World Cup, they chose more than just a stadium—they picked a sonic fortress. Lumen Field, home to one of sport's most legendary atmospheres, will transform into Seattle Stadium for the tournament, welcoming global football to the Pacific Northwest for the first time since the 2003 Women's World Cup. This isn't a venue that simply accommodates fans; it amplifies them, channeling 68,000 voices into a deafening roar that once registered 137.6 decibels—louder than a jet engine at takeoff. Built specifically with World Cup hosting in mind back in 2002, this open-air cathedral sits against Seattle's stunning skyline and Puget Sound, offering visiting fans an experience where architectural ingenuity meets raw passion.
                </p>
              </div>
            </div>

            {/* Stadium Overview & Fast Facts */}
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
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Lumen Field (rebranded "Seattle Stadium" during World Cup 2026)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Location</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">SoDo neighborhood, Seattle, Washington (1 mile south of downtown)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-calendar-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Opened</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">2002</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Capacity</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">69,000 (World Cup configuration) / 68,740 (standard NFL)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-team-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Primary Tenants</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Seattle Seahawks (NFL), Seattle Sounders FC (MLS), OL Reign (NWSL)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-pencil-ruler-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Architect</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Ellerbe Becket (with LMN Architects)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-grass-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Surface Type</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">FieldTurf artificial (FIFA-required grass to be installed for 2026)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-umbrella-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Roof Type</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Partial cantilever roof covering 70% of seats</p>
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
                    <span>Second-loudest stadium in NFL history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                    <span>Open north end with skyline views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                    <span>Field-level luxury suites (first in NFL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i>
                    <span>WaMu Theater event complex</span>
                  </div>
                </div>
              </div>
            </div>

            {/* History & Legacy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-time-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                History & Legacy
              </h2>
              <div className="prose dark:prose-invert prose-lg max-w-none">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Washington state voters approved the stadium's construction via referendum in 1997, with legislation specifically calling out the ability to host the FIFA World Cup—making Lumen Field literally built for this moment. The venue rose on the site of the demolished Kingdome, opening in September 2002 with Microsoft co-founder Paul Allen driving the vision for an intimate, noise-amplifying design inspired by the University of Washington's Husky Stadium.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Since opening, Lumen Field has established itself as one of North America's most intimidating sporting venues. Seahawks fans set Guinness World Records for loudest outdoor stadium in both 2013 (136.6 decibels) and 2014 (137.6 decibels), with the architectural design trapping and amplifying crowd noise back onto the field. The stadium has hosted three NFC Championship Games, multiple MLS Cup finals including the 2019 edition that drew a record 69,274 spectators, the 2016 Copa América, and international friendlies featuring Barcelona, Manchester United, and Chelsea.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  For 2026, the stadium is receiving $19.4 million in state funding for upgrades including FIFA-mandated grass installation, enhanced security systems, and seating improvements—ensuring world-class standards for football's biggest stage.
                </p>
              </div>
            </div>

            {/* Stadium Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-building-3-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="prose dark:prose-invert prose-lg max-w-none">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Lumen Field's design is a masterclass in acoustic engineering disguised as a football stadium. Built on just 30 acres—the smallest footprint of modern NFL stadiums—architects cantilevered the upper decks over lower sections, pushing seats closer to the action while the partial roof covering 70% of seating deflects crowd noise directly back onto the pitch. The result? An intimidation machine.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  The U-shaped configuration keeps the north end open, framing spectacular views of downtown Seattle's skyline, the Space Needle, and Mount Rainier on clear days. This open design also channels winds from Puget Sound across the field, adding another tactical wrinkle for visiting teams.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Inside, the stadium offers 111 luxury suites across three levels, over 7,000 club seats, and 1,400 accessibility-friendly seats thoughtfully distributed throughout sections. The lower bowl's steep rake means exceptional sightlines from every angle—you're never far from the action. Wide concourses provide breathing room during halftime, with views stretching from the Olympic Mountains to the working waterfront, while the south end's Hawks' Nest features 3,000 bleacher seats where Sounders supporters create a wall of sound and color.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The venue's commitment to sustainability has earned international recognition, including a 2018 award at the International Stadium Business Summit in London. Expect these values front and center during the World Cup, with organizers targeting zero-waste operations.
                </p>
              </div>
            </div>

            {/* What Matches to Expect */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-trophy-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="prose dark:prose-invert prose-lg max-w-none">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Seattle will host six World Cup 2026 matches at Lumen Field, including one USMNT group stage fixture and two knockout round games. While specific matchups won't be finalized until closer to the tournament, Seattle's inclusion among elite venues suggests the stadium could host a Round of 32 or Round of 16 encounter—and possibly more if the Americans advance deep.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  The stadium previously hosted three 2016 Copa América matches, including a U.S. quarterfinal victory over Ecuador, plus the crucial 2013 World Cup qualifier between the U.S. and Panama—proof that Seattle delivers when international football comes calling. With FIFA expecting over 2 billion viewers watching Seattle's matches globally, the atmosphere will be electric, potentially matching or exceeding the decibel levels that made this venue legendary.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Lumen Field sits in Seattle's SoDo (South of Downtown) district, exceptionally well-connected by public transit—one of the best-served stadiums in North America.
              </p>
              {/* By Light Rail (Recommended) */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  By Light Rail (Recommended)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Sound Transit's 1 Line has two stations within walking distance: Stadium Station (2-minute walk) and International District/Chinatown Station (7-minute walk). Trains run from SeaTac Airport to Lynnwood, with airport-to-stadium journey taking approximately 38 minutes. One-way adult fares are $3, with reduced fares for seniors, disabled riders, and youth. Purchase tickets at station kiosks or via Transit GO mobile app. Expect trains to be packed 90 minutes before kickoff—arrive early.
                </p>
                <div className="mt-4 bg-amber-50 dark:bg-slate-900/50 border border-amber-200 dark:border-amber-300/30 p-4 rounded-lg">
                  <p className="text-amber-700 dark:text-amber-300 font-semibold mb-1">
                    Pro tip:
                  </p>
                  <p className="text-slate-700 dark:text-slate-200">
                    Park & Ride facilities are available at Northgate Transit Center (north Seattle) and Angle Lake Station (south), allowing you to drive partway and ride the train to avoid downtown congestion.
                  </p>
                </div>
              </div>

              {/* By Bus */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-bus-2-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  By Bus
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  King County Metro operates 15+ routes stopping within three blocks of the stadium. Sound Transit Express buses connect from throughout Pierce, King, and Snohomish counties every 30 minutes. Check Metro's real-time transit app for matchday schedules.
                </p>
              </div>

              {/* By Commuter Rail */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  By Commuter Rail
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Sounder commuter trains arrive at King Street Station (5-minute walk from stadium) on select weekend matchdays—check Sound Transit's event calendar. Amtrak Cascades service connects Seattle to Portland, Vancouver BC, and points between, with the station directly adjacent to Lumen Field.
                </p>
              </div>

              {/* By Car */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-steering-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  By Car
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Not recommended for World Cup matches. The stadium's parking garage accommodates 2,000 vehicles, with 3,100 spaces onsite and 8,400 in surrounding areas, but these sell out months ahead for major events. If driving, budget $40-65 for parking. Alternative garages include Union Station (northeast) and Metro Garage (east), both within 10-minute walks.
                </p>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-taxi-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  By Rideshare/Taxi
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The designated drop-off zone is located at S Charles Street and Occidental Avenue (near the Pro Shop). Surge pricing will be severe after matches—consider walking 10-15 minutes toward downtown or Pioneer Square for better pickup zones.
                </p>
              </div>

              {/* Journey Times */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-time-line text-blue-400 dark:text-sky-300"></i>
                  Journey Times
                </h3>
                <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                  <li>- SeaTac Airport: 38 minutes (light rail)</li>
                  <li>- Downtown Seattle hotels: 10-15 minutes (light rail/bus)</li>
                  <li>- Bellevue: 45-60 minutes (bus + light rail)</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-200 mt-4">
                  Seattle also has ferry connections from Bainbridge Island and Bremerton, with terminals 10 minutes' walk from the stadium—a spectacular arrival if you're staying across Puget Sound.
                </p>
              </div>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Where to Stay
              </h2>
              <div className="prose dark:prose-invert prose-lg max-w-none">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Seattle's accommodation options balance proximity to Lumen Field with access to the city's broader attractions. Book early—the 2026 tournament will strain capacity.
                </p>
              </div>

              {/* Walking Distance to Stadium (Pioneer Square/SoDo) */}
              <div className="mt-4 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-walk-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  Walking Distance to Stadium (Pioneer Square/SoDo)
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <p><strong>Embassy Suites by Hilton Seattle Downtown Pioneer Square</strong> sits one block from Lumen Field, offering complimentary cooked-to-order breakfast, evening manager's reception, indoor pool, and spacious suites with separate living areas. Perfect for families or groups wanting minimal travel time. Mid-range pricing.</p>
                  <p><strong>Best Western Plus Pioneer Square Hotel Downtown</strong> provides exceptional value in the historic district, with free breakfast, proximity to waterfront dining, and easy stadium access (0.4 miles). Budget-friendly choice.</p>
                  <p><strong>citizenM Seattle Pioneer Square</strong> offers compact, tech-forward rooms with king beds, 24/7 communal spaces, and trendy design—ideal for solo travelers or couples prioritizing location over space. <strong>Populus Seattle</strong> brings boutique luxury to Pioneer Square with locally-sourced amenities, rooftop bar, and rooms celebrating Pacific Northwest craftsmanship. Mid-range to upscale.</p>
                </div>
              </div>

              {/* Downtown Seattle (1-2 Miles) */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  Downtown Seattle (1-2 Miles)
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <p><strong>Fairmont Olympic Hotel</strong> delivers grand-dame elegance in a 1924 building with 450 rooms, sumptuous Olympic Bar, spa, and refined service—for those wanting historic luxury alongside easy stadium access. Luxury pricing.</p>
                  <p><strong>Hyatt Regency Seattle</strong> combines business-friendly amenities with adventure access, featuring nearby cycling and climbing, plus quick light rail connections to the stadium. Mid-range, excellent for active travelers.</p>
                  <p>Consider booking through `http://booking.com`  or Expedia for competitive rates and flexible cancellation policies—essential given uncertain match schedules. Airbnb also offers condos in Belltown and Capitol Hill, both 20 minutes from the stadium via light rail.</p>
                </div>
              </div>

              {/* Alternative Neighborhoods */}
              <div className="mt-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-2xl"></i>
                  Alternative Neighborhoods
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Capitol Hill:</strong> Seattle's vibrant LGBTQ+ hub with nightlife and restaurants, 15 minutes by light rail. <strong>Fremont/Ballard:</strong> Quirky neighborhoods north of downtown, 30-40 minutes via bus, offering brewery tours and local character.
                </p>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-calendar-check-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>

              {/* Timing */}
              <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-time-line text-emerald-400 dark:text-emerald-300"></i>
                  Timing
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Arrive 90-120 minutes early for World Cup matches. Security will be tighter than standard Seahawks games, and light rail stations will be mobbed. Stadium gates typically open 2 hours before kickoff, allowing time to explore the venue and soak in pre-match atmosphere.
                </p>
              </div>

              {/* Bag Policy */}
              <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-shopping-bag-3-line text-blue-400 dark:text-sky-300"></i>
                  Bag Policy
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Only clear bags up to 12" x 6" x 12" are permitted. Small clutches under 4.5" x 6.5" are allowed. No backpacks, diaper bags, or computer bags. Outside food is permitted if carried in approved bags.
                </p>
              </div>

              {/* Weather */}
              <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-sun-line text-yellow-400 dark:text-amber-300"></i>
                  Weather
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  June-July in Seattle means 65-75°F (18-24°C) with low humidity, but pack a light jacket—evenings cool quickly. The roof covers 70% of seats, but end zones and lower sections are exposed. Sunscreen recommended for afternoon matches.
                </p>
              </div>

              {/* Food & Drink */}
              <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-restaurant-line text-emerald-400 dark:text-emerald-300"></i>
                  Food & Drink
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Lumen Field is cashless—credit cards and contactless payments only. Local favorites include Maria Luisa Empanadas, Big Walt's Kitchen (hot chicken sandwich), Ivar's fish & chips, and vegan options at Cook T's Kitchen. Craft beer at Craft House, Starbucks coffee throughout. Prices run $12-18 for entrees, $14-16 for beer.
                </p>
              </div>

              {/* Best Sections */}
              <div className="mb-2 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-football-line text-blue-400 dark:text-sky-300"></i>
                  Best Sections
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Lower bowl sidelines (sections 111-137) offer prime viewing. For budget-conscious fans, upper deck corners (sections 301-303, 339-341) provide excellent value with full field views. Sounders supporters traditionally occupy the south end (sections 121-123)—expect standing, chanting, and flags if seated nearby.
                </p>
              </div>

              {/* Post-Match Exodus */}
              <div className="mb-6 p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-walk-line text-amber-400 dark:text-amber-300"></i>
                  Post-Match Exodus
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Stadium Station will be absolute chaos—consider walking 10 minutes to International District/Chinatown Station for easier boarding. Alternatively, head to Pioneer Square bars and wait 60-90 minutes for transit crowds to thin.
                </p>
              </div>

              {/* Don't Miss */}
              <div className="mb-2 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-2">
                  <i className="ri-star-line text-amber-400 dark:text-amber-300"></i>
                  Don't Miss
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The 12th Man flag raising platform in the south end, Pioneer Square's totem pole and pergola (5-minute walk), and the Olympic Sculpture Park (30 minutes north via waterfront).
                </p>
              </div>
            </div>

            {/* Things to Do Nearby */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-compass-3-line text-purple-400 dark:text-violet-300 text-4xl"></i>
                Things to Do Nearby
              </h2>

              {/* Pre-Match */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-line text-orange-400 dark:text-orange-300 text-2xl"></i>
                  Pre-Match
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <p><strong>King Street Bar & Oven</strong> (since 1997) serves excellent stone-oven pizza and craft beer two blocks from the stadium—arrive 2+ hours early for a table. <strong>The Central Saloon</strong>, Seattle's oldest bar, channels classic dive atmosphere with live music and cold beer.</p>
                  <p><strong>Dead Line</strong> offers sophisticated cocktails and South American-leaning menu in sleek Pioneer Square setting—perfect for elevated pre-match dining. <strong>Damn The Weather</strong> provides natural wines and excellent pasta in a versatile space welcoming solo travelers and groups alike.</p>
                  <p><strong>The Hall on Occidental</strong> creates ultimate sports bar atmosphere with craft beer, elevated comfort food, and all-ages welcome (until midnight).</p>
                </div>
              </div>

              {/* Cultural Attractions (Within 30 Minutes) */}
              <div className="p-6 bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-2-line text-purple-400 dark:text-violet-300 text-2xl"></i>
                  Cultural Attractions (Within 30 Minutes)
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <p><strong>Pike Place Market</strong> (1 mile north): Seattle's iconic farmers market overlooking Elliott Bay—arrive early to beat crowds. Watch fish-throwing fishmongers, sample artisan cheese, and grab world-class coffee.</p>
                  <p><strong>Seattle Waterfront</strong> (0.5 miles): Recently renovated with public piers, Seattle Aquarium, and Ye Olde Curiosity Shop. The Great Wheel offers 175-foot views of Puget Sound and Olympic Mountains ($15-18).</p>
                  <p><strong>Pioneer Square Underground Tour</strong> (2 blocks): Explore Seattle's buried 1890s streets beneath modern sidewalks—fascinating glimpse into the city's wild past. Tours run hourly, $25-30.</p>
                  <p><strong>International District</strong> (0.4 miles): Authentic Asian restaurants, Uwajimaya supermarket, and Wing Luke Museum celebrating Asian Pacific American history.</p>
                </div>
              </div>
            </div>

            {/* Day Trips */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Day Trips
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                <p><strong>Bainbridge Island</strong> (35-minute ferry): Escape the city for waterfront trails, wineries, and small-town charm. Ferries depart from terminals near stadium.</p>
                <p><strong>Mount Rainier National Park</strong> (2.5 hours drive): Rent a car and experience Washington's alpine crown jewel—one of America's most stunning national parks.</p>
                <p>For tours and activities, platforms like GetYourGuide and Viator offer excellent options including food tours, brewery crawls, and Pacific Northwest adventures—worth booking ahead for popular dates.</p>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-medal-line text-gold-400 dark:text-amber-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              <div className="space-y-6">
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  Lumen Field represents everything special about North American soccer culture: intimate design, passionate supporters, and a venue that makes visiting teams genuinely uncomfortable. For World Cup 2026, this stadium offers international visitors more than great football—it's a gateway to the Pacific Northwest's natural beauty, progressive urban culture, and that distinctly Seattle blend of outdoorsy grit and tech-forward thinking.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  <strong>Who will love it most?</strong> Fans who appreciate atmosphere over glitz, travelers who want to explore beyond the stadium, and anyone curious about why Seattle consistently ranks among the world's most livable cities.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  <strong>The one thing you absolutely cannot miss?</strong> Experience the ground shake during a goal celebration. When 69,000 fans erupt simultaneously under that amplifying roof, you'll understand why visiting players describe it as "the most insane place" they've ever competed.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  Book your accommodation now through trusted platforms—Seattle's hotel inventory will strain under World Cup demand, and proximity to light rail stations will be worth its weight in gold. This is your chance to experience football's biggest tournament in one of its loudest stadiums. Don't just watch history—feel it reverberate through your chest.
                </p>
              </div>
            </div>

            {/* Got It Button - match MetLife premium style */}
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