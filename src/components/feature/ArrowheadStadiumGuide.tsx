import React, { useState } from 'react';
import { Button } from '../base/Button';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface ArrowheadStadiumGuideProps {
}

export const ArrowheadStadiumGuide: React.FC<ArrowheadStadiumGuideProps> = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGotItClick = () => {
    navigate('/venues');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in pt-20">
          {/* Header Section */}
          <div className="bg-white border-b border-slate-200 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 dark:border-slate-700 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-gold-400 dark:from-red-300 dark:to-gold-300 rounded-full animate-pulse"></div>
              <span className="text-red-400 dark:text-red-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Arrowhead Stadium
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <i className="ri-group-line text-xl text-red-400 dark:text-red-300"></i>
                <span className="font-semibold">76,416 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <i className="ri-map-pin-line text-xl text-gold-400 dark:text-gold-300"></i>
                <span>Kansas City, Missouri</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <i className="ri-volume-up-line text-xl text-red-400 dark:text-red-300"></i>
                <span className="font-semibold">World's Loudest Stadium</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Introduction Section */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="rounded-2xl p-8 mb-8 border bg-white border-slate-200 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 dark:border-slate-700/60">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <i className="ri-volume-up-line text-red-500 dark:text-red-300 text-4xl"></i>
                  The World's Loudest Stadium Welcomes the World's Game
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                  Welcome to the loudest stadium in the world. When 76,000 Kansas City Chiefs fans unleash their legendary roar, Arrowhead Stadium doesn't just host football—it creates seismic activity. For the 2026 World Cup, this 50-year-old palace of passion will channel that same energy toward the beautiful game.
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                  This isn't your typical modern, sterile venue. Arrowhead Stadium is a monument to American sports culture, where tailgating is an art form, barbecue smoke mingles with crowd noise, and the atmosphere builds hours before kickoff. When FIFA selected this Kansas City landmark, they chose authenticity over luxury—and that's exactly what makes it special.
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  For international visitors, Arrowhead offers something no other World Cup venue can: a genuine slice of Americana wrapped around world-class football facilities. This is where you'll experience the heartland of American sports passion, complete with legendary Kansas City barbecue, Midwestern hospitality, and a sound level that has literally registered on seismographs.
                </p>
              </div>
            </div>

            {/* Stadium Overview */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-building-line text-red-400 dark:text-red-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-building-2-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Official Name</span>
                      <p className="text-slate-900 dark:text-white font-semibold">GEHA Field at Arrowhead Stadium</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-map-pin-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Location</span>
                      <p className="text-slate-900 dark:text-white font-semibold">Kansas City, Missouri (Truman Sports Complex)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-group-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Capacity</span>
                      <p className="text-slate-900 dark:text-white font-semibold">76,416 (World Cup configuration)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-calendar-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Opened</span>
                      <p className="text-slate-900 dark:text-white font-semibold">August 12, 1972</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-grass-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Playing Surface</span>
                      <p className="text-slate-900 dark:text-white font-semibold">Natural Grass</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-home-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Home Team</span>
                      <p className="text-slate-900 dark:text-white font-semibold">Kansas City Chiefs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-volume-up-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Noise Record</span>
                      <p className="text-slate-900 dark:text-white font-semibold">142.2 decibels (2014)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <i className="ri-car-line text-red-400 dark:text-red-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">Parking</span>
                      <p className="text-slate-900 dark:text-white font-semibold">27,000+ spaces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-gold-400 dark:text-gold-300"></i>
                  Notable Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>World's loudest outdoor stadium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>Iconic arrowhead-shaped design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>Massive tailgating culture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>Natural grass playing surface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>Open-air bowl design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-red-400 dark:text-red-300"></i>
                    <span>Historic American football venue</span>
                  </div>
                </div>
              </div>
            </div>

            {/* History & Legacy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-time-line text-gold-400 dark:text-gold-300 text-4xl"></i>
                History & Legacy
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Arrowhead Stadium opened in 1972 as part of the ambitious Truman Sports Complex, a revolutionary concept that placed two stadiums—one for football, one for baseball—side by side in suburban Kansas City. Architect Charles Deaton designed Arrowhead with a singular focus: create the loudest, most intimidating environment in professional sports.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  The stadium's distinctive arrowhead shape isn't just aesthetic—it's acoustic engineering. The bowl design funnels crowd noise directly onto the field, creating a sound amplification effect that has terrorized visiting teams for five decades. In 2014, Chiefs fans officially broke the Guinness World Record for loudest crowd roar at an outdoor stadium, reaching 142.2 decibels—louder than a jet engine.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Beyond noise, Arrowhead pioneered the modern tailgating experience. The stadium's massive parking lots transform into temporary cities on game days, with elaborate setups featuring grills, tents, and full outdoor kitchens. This isn't just pre-game socializing—it's a cultural institution that begins at dawn and continues hours after the final whistle.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  For Kansas City, Arrowhead represents more than football success—it's proof that smaller American cities can compete with coastal giants. The Chiefs' recent Super Bowl victories (2020, 2023) validated decades of passionate support, and the stadium's selection for the 2026 World Cup confirms its status as a world-class venue worthy of football's biggest stage.
                </p>
              </div>
            </div>

            {/* Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-building-4-line text-red-400 dark:text-red-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Arrowhead Stadium's design philosophy prioritizes atmosphere over luxury. The three-tiered bowl creates an intimate connection between fans and field, with the steepest upper deck in the NFL ensuring excellent sightlines from every seat. Unlike modern stadiums with extensive concourses and amenities, Arrowhead keeps fans focused on the action—and contributing to the noise.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  The stadium's exterior features a distinctive red brick facade with arrowhead-shaped architectural elements that have become iconic symbols of Kansas City sports. Recent renovations have modernized amenities while preserving the venue's character: upgraded concessions, improved restrooms, and enhanced accessibility, but the fundamental bowl design remains unchanged.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  What sets Arrowhead apart is its authentic, unfiltered atmosphere. There are no retractable roofs or climate control systems—weather is part of the experience. Summer games can be sweltering, winter contests brutally cold, but the 2026 World Cup's June-July schedule should provide ideal conditions for international visitors.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The natural grass playing surface, maintained to NFL standards, will provide excellent conditions for World Cup matches. The field's dimensions easily accommodate soccer's requirements, and FIFA-mandated temporary seating adjustments will optimize sightlines for the beautiful game while preserving the stadium's legendary acoustics.
                </p>
              </div>
            </div>

            {/* What Matches to Expect */}
            <div className="rounded-2xl p-8 border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-football-line text-red-500 dark:text-red-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Arrowhead Stadium will host <strong>six World Cup 2026 matches</strong>, including crucial group stage fixtures and likely a knockout round contest. With its 76,416 capacity, the venue will create an electric atmosphere that combines international football passion with Kansas City's legendary crowd energy.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Expect matches featuring major footballing nations, as FIFA typically assigns high-profile games to venues with proven track records for atmosphere and organization. The stadium's reputation for creating hostile environments for visiting teams will translate perfectly to World Cup knockout drama, where crowd support can genuinely influence results.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The venue's experience hosting major events—including AFC Championship games, college football playoffs, and international soccer friendlies—ensures smooth operations for World Cup matches. Kansas City's passionate sports culture will embrace international visitors while maintaining the intimidating atmosphere that makes Arrowhead special.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-red-400 dark:text-red-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              
              {/* By Public Transportation */}
              <div className="mb-8 p-6 rounded-xl border bg-white border-slate-200 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-bus-line text-red-500 dark:text-red-300 text-2xl"></i>
                  By Public Transportation
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Kansas City Area Transportation Authority (KCATA)</strong> operates special event bus service to Arrowhead Stadium from downtown Kansas City and major hotels. The #129 Arrowhead Express runs from downtown's Grand Boulevard Transit Center directly to the stadium, with service beginning 3 hours before kickoff and continuing 2 hours post-match.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>KC Streetcar</strong> connects downtown Kansas City attractions to the bus terminal, making public transit a viable option for visitors staying in the city center. The streetcar is free and runs every 10-15 minutes, connecting Union Station, Power & Light District, and the River Market.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Cost:</strong> $1.50 each way for bus service. <strong>Travel time:</strong> 45-60 minutes from downtown Kansas City, depending on traffic and stops.
                </p>
              </div>

              {/* By Rideshare/Taxi */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-red-400 dark:text-red-300 text-2xl"></i>
                  By Rideshare/Taxi
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Uber and Lyft</strong> operate designated pickup/drop-off zones at Arrowhead Stadium, located in Lot M (north side of stadium). Expect surge pricing during major events—fares from downtown Kansas City typically range $25-45 each way, potentially doubling during peak demand.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Traditional taxis</strong> are available but less common in Kansas City. Pre-arrange return trips through hotel concierges or taxi companies, as post-match availability can be limited.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Pro tip:</strong> Walk 10-15 minutes away from the stadium after matches to avoid surge pricing and pickup delays. The nearby Walmart Supercenter or McDonald's on Blue Ridge Cutoff provide easier pickup locations.
                </p>
              </div>

              {/* By Bike */}
              <div className="mb-8 p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-bike-line text-red-400 dark:text-red-300 text-2xl"></i>
                  By Bike
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Kansas City's <strong>BikeKC</strong> bike-share system doesn't extend to Arrowhead Stadium, but dedicated cyclists can use city bike lanes and trails. The <strong>Blue River Parkway Trail</strong> provides a scenic route from downtown, though the 12-mile journey requires good fitness and weather cooperation.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Bike parking:</strong> Limited secure bike racks available near stadium entrances. Consider bringing a high-quality lock, as the area experiences heavy foot traffic during events.
                </p>
              </div>

              {/* From Airports */}
              <div className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-plane-line text-red-400 dark:text-red-300 text-2xl"></i>
                  From Kansas City International Airport (MCI)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Distance:</strong> 25 miles (40 km) northwest of Arrowhead Stadium. <strong>Travel time:</strong> 30-45 minutes by car, depending on traffic.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Rental cars:</strong> All major agencies operate from MCI's consolidated rental facility. Take I-29 South to I-435 East to I-70 East to reach the stadium area.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Airport shuttles:</strong> SuperShuttle and GO Airport Shuttle provide shared-ride service to hotels and the stadium area. Advance reservations recommended, especially during World Cup matches.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Rideshare from airport:</strong> $35-55 to downtown Kansas City, $40-65 directly to Arrowhead Stadium (higher during surge pricing).
                </p>
              </div>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-red-500 dark:text-red-300 text-4xl"></i>
                Where to Stay
              </h2>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                Kansas City offers diverse accommodation options, from downtown luxury hotels to suburban convenience near the stadium.
              </p>

              {/* Downtown Kansas City */}
              <div className="mb-8 p-6 bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-building-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Downtown Kansas City (Best Overall Experience)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Stay in the heart of Kansas City's cultural and entertainment district, with easy access to restaurants, nightlife, and attractions. The Power & Light District offers the city's best dining and entertainment options.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <i className="ri-star-line text-gold-400 dark:text-gold-300"></i>
                      The Fontaine (Luxury)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Autograph Collection hotel in the Power & Light District. Rooftop bar, upscale dining, walking distance to entertainment. $280-400/night during World Cup.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <i className="ri-star-line text-gold-400 dark:text-gold-300"></i>
                      Hotel Phillips (Historic Luxury)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">1931 Art Deco landmark with modern amenities. Downtown location, elegant rooms, historic character. $220-320/night.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <i className="ri-building-2-line text-blue-400 dark:text-blue-300"></i>
                      Marriott Downtown (Mid-Range)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Reliable chain hotel in the heart of downtown. Connected to convention center, multiple dining options. $180-280/night.</p>
                  </div>
                </div>
              </div>

              {/* Crown Center */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-shopping-cart-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Crown Center (Family-Friendly)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Shopping and entertainment complex with hotels, restaurants, and family attractions. Connected to Union Station and its science museum, planetarium, and dining options.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sheraton Crown Center</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Large hotel connected to shopping and dining. Indoor walkways to Union Station. $160-240/night.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Westin Crown Center</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Upscale option with excellent amenities. Connected to Crown Center shops and restaurants. $200-300/night.</p>
                  </div>
                </div>
              </div>

              {/* Country Club Plaza */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-store-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Country Club Plaza (Upscale Shopping District)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Spanish-inspired outdoor shopping district with upscale retail, fine dining, and beautiful architecture. More residential feel, 15 minutes from downtown.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">The Raphael Hotel</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Boutique European-style hotel on the Plaza. Elegant rooms, fine dining, walkable to shops. $190-290/night.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">InterContinental Kansas City</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Luxury hotel at the Plaza. Rooftop restaurant, spa services, premium amenities. $250-380/night.</p>
                  </div>
                </div>
              </div>

              {/* Near Stadium */}
              <div className="p-6 bg-white rounded-xl border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Near Stadium (Convenience Over Atmosphere)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Limited options near Arrowhead Stadium, mostly chain hotels along I-70. Convenient for match days but lacking in dining and entertainment options.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Drury Inn & Suites Stadium</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Closest hotel to Arrowhead Stadium. Free breakfast, evening snacks, indoor pool. $120-180/night.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Holiday Inn Express Independence</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">15 minutes from stadium. Basic amenities, free breakfast, reliable chain quality. $100-150/night.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="rounded-2xl p-8 border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-line text-gold-400 dark:text-gold-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>

              {/* What to Bring */}
              <div className="mb-6 p-6 rounded-xl border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <i className="ri-suitcase-line text-red-500 dark:text-red-300"></i>
                  What to Bring
                </h3>
                <ul className="text-slate-700 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="ri-sun-line text-gold-400 dark:text-gold-300 mt-1"></i>
                    <span>Sunscreen and hat (summer sun can be intense, limited shade in upper sections)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-drop-line text-blue-400 dark:text-blue-300 mt-1"></i>
                    <span>Water bottle (empty, to fill inside) - Kansas City summers are hot and humid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-shirt-line text-green-400 dark:text-green-300 mt-1"></i>
                    <span>Layers for evening matches (temperatures can drop significantly after sunset)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-id-card-line text-orange-400 dark:text-orange-300 mt-1"></i>
                    <span>Photo ID (required for alcohol purchases if you appear under 40)</span>
                  </li>
                </ul>
              </div>

              {/* Food & Drink */}
              <div className="mb-6 p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-orange-500 dark:text-orange-300"></i>
                  Food & Drink Inside
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Better Option:</strong> Eat beforehand. Kansas City's legendary BBQ joints (see below) offer infinitely better value and taste than stadium concessions.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Stadium concessions include standard fare (hot dogs, nachos, beer) plus Kansas City specialties like burnt ends and barbecue sandwiches. Expect $8-12 for food items, $10-14 for beer. Premium club areas offer upgraded dining options for suite and club seat holders.
                </p>
              </div>

              {/* Best Gates */}
              <div className="mb-6 p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <i className="ri-door-open-line text-blue-500 dark:text-blue-300"></i>
                  Best Gates/Entrances
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Gates 1-6 encircle the stadium. Your ticket will designate the recommended gate based on seat location. Arrive at any gate, but entering through your designated gate reduces walking distance to seats.
                </p>
              </div>

              {/* Post-Match Transport */}
              <div className="p-6 rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <i className="ri-car-line text-red-500 dark:text-red-300"></i>
                  Post-Match Transport
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong>Critical Advice:</strong> Do NOT rush to your car or rideshare immediately. Parking lot exodus and rideshare queues are nightmarish. Instead:
                </p>
                <ol className="text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
                  <li>Stay in your seat 15-20 minutes after final whistle</li>
                  <li>Explore the stadium or visit concessions (usually faster when crowds thin)</li>
                  <li>Walk to a nearby restaurant/bar for post-match atmosphere</li>
                  <li>By the time you leave (60-90 minutes post-match), traffic and rideshare availability improve dramatically</li>
                </ol>
              </div>
            </div>

            {/* Atmosphere & Culture */}
            <div className="rounded-2xl p-8 border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-heart-line text-red-400 dark:text-red-300 text-4xl"></i>
                Atmosphere & Culture
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Kansas City knows how to support its teams. Expect friendly, passionate crowds, though the demographic will skew more diverse and international than typical Chiefs games. American fans are generally welcoming to visitors—don't hesitate to chat with locals about the match, Kansas City, or their beloved BBQ.
                </p>
              </div>
            </div>

            {/* Things to Do Nearby */}
            <div className="rounded-2xl p-8 border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-compass-line text-red-500 dark:text-red-300 text-4xl"></i>
                Things to Do Nearby
              </h2>

              {/* Pre-Match BBQ Pilgrimage */}
              <div className="mb-8 p-6 rounded-xl border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Pre-Match BBQ Pilgrimage
                </h3>
                <div className="bg-white border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">LC's Bar-B-Q (5800 Blue Parkway)</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">Five minutes from the stadium, perfect for authentic KC BBQ before the match. Counter-service, no-frills, legendary ribs and burnt ends.</p>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <i className="ri-map-2-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Nearby Attractions (within 30 minutes)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-building-3-line text-gold-500 dark:text-amber-300"></i>
                      National WWI Museum and Memorial (Downtown)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      America's only museum dedicated to The Great War, with world-class exhibits and stunning Liberty Memorial Tower views of the Kansas City skyline. Allow 2-3 hours. ($18 adults, $10 youth)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-trophy-line text-gold-500 dark:text-amber-300"></i>
                      Negro Leagues Baseball Museum (18th & Vine District)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Essential visit celebrating African American baseball history and Kansas City's pivotal role. Often combined with American Jazz Museum next door. ($15 adults)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-goblet-line text-gold-500 dark:text-amber-300"></i>
                      Boulevard Brewing Company (Southwest Boulevard)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Kansas City's largest craft brewery offers tours and tastings. Perfect post-match or rest-day activity. (Tours $10-15)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-shopping-bag-line text-gold-500 dark:text-amber-300"></i>
                      Country Club Plaza
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Ten minutes from stadium, this Spanish-inspired shopping district features upscale retail, restaurants, and beautiful architecture. Great for non-match days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Downtown Pre-Match Options */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <i className="ri-building-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Downtown Pre-Match Options
                </h3>
                
                <div className="space-y-4">
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Power and Light District</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      If you're staying downtown, this eight-block entertainment complex hosts official fan fest events, watch parties, and 50+ bars/restaurants. Free KC Streetcar connects to other downtown attractions.
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">18th & Vine Jazz District</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Historic African American neighborhood where KC jazz legends were born. Live music venues, museums, and soul food restaurants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essential Kansas City BBQ Experiences */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <i className="ri-fire-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Essential Kansas City BBQ Experiences
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Arthur Bryant's (1727 Brooklyn Ave)</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Legendary since the 1920s, proclaimed "single best restaurant in the world" by food critic Calvin Trillin. Try the burnt ends—Arthur Bryant invented them. Tangy, vinegar-forward sauce. ($12-18 per plate)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Gates Bar-B-Q (Multiple locations)</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Known for enthusiastic "HI, MAY I HELP YOU?" greeting and thick, sweet-and-spicy sauce. The 12th & Brooklyn location is closest to 18th & Vine. ($10-16 per plate)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Joe's Kansas City Bar-B-Que (47th & Mission Road, KS)</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Housed in a gas station, frequently ranked America's best BBQ. Arrive early—lines form quickly. Z-Man sandwich is legendary. ($12-20)
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Q39 (Multiple locations)</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Modern approach to KC BBQ with upscale atmosphere. Excellent if you want craft cocktails with your ribs. ($18-28)
                    </p>
                  </div>
                </div>
              </div>

              {/* Post-Match Celebrations */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <i className="ri-music-line text-red-500 dark:text-red-300 text-2xl"></i>
                  Post-Match Celebrations
                </h3>
                
                <div className="space-y-4">
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Westport Entertainment District</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Young, energetic nightlife area with dozens of bars and live music venues. 15 minutes from stadium, 5 minutes from Plaza.
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Crossroads Arts District</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Hipster-friendly craft cocktail bars, brewery taprooms, and late-night eateries. First Fridays art walk (April-October) is legendary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="rounded-2xl p-8 border bg-white border-slate-200 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <i className="ri-trophy-line text-gold-400 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Arrowhead Stadium delivers something few World Cup venues can claim: genuine, unfiltered American sports culture combined with world-class facilities and Midwestern hospitality. This isn't a sterile, modern bowl designed by committee—it's a 50-year-old palace of passion where sound becomes a physical force and the crowds create their own weather system.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-thumb-up-line text-red-500 dark:text-red-300"></i>
                      Who will love it most:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Fans seeking authentic atmosphere over luxury amenities. Groups who embrace tailgate culture and American BBQ. Anyone who wants to experience why American football fans are among the world's most passionate. Travelers willing to explore beyond the stadium to discover Kansas City's hidden gems—world-class jazz history, incredible BBQ, and surprisingly vibrant arts scenes.
                    </p>
                  </div>
                  
                  <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <i className="ri-star-line text-gold-400"></i>
                      Don't miss:
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      The tailgate scene in Arrowhead's massive parking lots, where Kansas Citians will welcome you with cold beverages and smoking grills loaded with ribs. The experience begins hours before kickoff—embrace it. Inside, find your way to one of the upper deck sections to truly appreciate the bowl's acoustics when the crowd roars.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <i className="ri-calendar-check-line text-blue-500 dark:text-blue-300"></i>
                    Book early:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Kansas City's hotel inventory is smaller than mega-cities like New York or Los Angeles. Secure downtown accommodations 6-12 months in advance through booking.com, Expedia, or airbnb.com. For transport flexibility, consider pre-booking airport transfers via Viator or specialized World Cup shuttle packages that eliminate parking hassles.
                  </p>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-6">
                  The 2026 World Cup gives you a rare chance to experience American sporting passion channeled toward the beautiful game. When those 70,000 fans fill Arrowhead's bowl and the roar cascades onto the pitch, you'll understand why this stadium holds its place in sporting history. Just remember: bring sun protection, book accommodations early, and save room for burnt ends. Welcome to Kansas City—where the world's game meets the world's loudest fans.
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