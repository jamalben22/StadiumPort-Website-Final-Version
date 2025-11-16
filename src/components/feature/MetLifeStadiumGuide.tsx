import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface MetLifeStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const MetLifeStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: MetLifeStadiumGuideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

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
              src="/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp"
              alt="Exterior view of MetLife Stadium in East Rutherford, New Jersey — one of the key venues for FIFA World Cup 2026 in the USA"
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
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
              When the referee blows the final whistle on July 19, 2026, history will be made at MetLife Stadium. The world's most prestigious football trophy will be lifted under the lights of this architectural powerhouse, just eight miles from the Manhattan skyline.
            </p>
          </div>
        </div>
      )}

      {/* Full Guide - Expanded State */}
      {isExpanded && (
        <div className="animate-fade-in">
          {/* Editorial Hero — aligned with NYC guide styling */}
          {!hideHero && (
          <section className="editorial-hero">
            <div className="editorial-hero-media">
              <OptimizedImage
                src="/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp"
                alt="Exterior view of MetLife Stadium in East Rutherford, New Jersey — one of the key venues for FIFA World Cup 2026 in the USA"
                className="editorial-hero-image-wrapper"
                imgClassName="editorial-hero-image"
                width={1600}
                height={900}
                priority={true}
                placeholder="blur"
                sizes="100vw"
              />
              <div className="editorial-hero-overlay"></div>
            </div>

            <div className="editorial-hero-content">
              {/* Breadcrumbs */}
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 editorial-breadcrumbs">
                <ol className="flex items-center gap-2 text-sm text-white/90">
                  <li><Link to="/" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                  <li className="opacity-70">›</li>
                  <li><Link to="/world-cup-2026-stadiums" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Stadiums</Link></li>
                  <li className="opacity-70">›</li>
                  <li>MetLife Stadium</li>
                </ol>
              </nav>
              <div className="editorial-hero-inner">
                <div className="editorial-hero-eyebrow">
                  <span className="editorial-hero-pulse"></span>
                  <span>World Cup 2026</span>
                </div>
                <h1 className="editorial-hero-title">MetLife Stadium</h1>
                <div className="editorial-hero-meta">
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-group-line"></i>
                    <span>82,500 capacity</span>
                  </div>
                  <div className="meta-item flex items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    <span>New York/New Jersey</span>
                  </div>
                </div>
                <p className="leading-relaxed mt-6 text-white/90">
                  The Stage for Football's Greatest Moment
                </p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-white/20 bg-white/10 text-white">
                    🏆 World Cup Final Venue
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Content Sections — Editorial presentation aligned with NYC */}
          <main className="editorial-article py-12">
            {/* Introduction Section */}
            <article className="editorial-body editorial-dropcap">
              <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
                <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
                The Stage for Football's Greatest Moment
              </h2>
              <p className="leading-relaxed">
Located in <Link to="/world-cup-2026-host-cities/new-york-new-jersey" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">New York/New Jersey</Link>, MetLife Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>, including the tournament&apos;s climactic final alongside seven other crucial matches. For international fans planning the journey of a lifetime, MetLife represents everything monumental about North American sports: scale, technology, and an atmosphere that can accommodate 82,500 roaring supporters. Whether you&aposre crossing oceans or states to witness football history, this is your essential guide to conquering match day at the biggest stadium in the NFL.
              </p>
              <hr className="editorial-divider" />
            </article>

          {/* Stadium Overview */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-building-line text-emerald-500 text-3xl"></i>
              Stadium Overview & Fast Facts
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-building-2-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Official Name</span>
                    <p className="leading-relaxed">MetLife Stadium (FIFA designation: New York New Jersey Stadium)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Location</span>
                    <p className="leading-relaxed">East Rutherford, New Jersey (8 miles/13 km west of Manhattan)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-calendar-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Opened</span>
                    <p className="leading-relaxed">April 2010</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-group-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Capacity</span>
                    <p className="leading-relaxed">82,500 (World Cup configuration: approximately 82,500)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-team-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Primary Tenants</span>
                    <p className="leading-relaxed">New York Giants and New York Jets (NFL)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-pencil-ruler-2-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Architects</span>
                    <p className="leading-relaxed">360 Architecture, EwingCole, Rockwell Group, Bruce Mau Design</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-grass-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Surface</span>
                    <p className="leading-relaxed">FieldTurf (artificial); natural grass to be installed for World Cup 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div>
                    <i className="ri-money-dollar-circle-line text-emerald-500 text-3xl"></i>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">Construction Cost</span>
                    <p className="leading-relaxed">$1.6 billion (2010)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                Notable Features
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-500"></i>
                  <span>Largest NFL stadium</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-500"></i>
                  <span>Four massive 30×116-foot HD video boards</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-500"></i>
                  <span>Color-changing LED lighting system</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-500"></i>
                  <span>First NFL stadium to join UN Climate Action Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-emerald-500"></i>
                  <span>Open-air (no roof)</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-6">
                Planning an East Coast circuit? Pair MetLife with <Link to="/world-cup-2026-stadiums/lincoln-financial-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia or <Link to="/world-cup-2026-stadiums/gillette-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Gillette Stadium</Link> near Boston. For a West Coast contrast, compare it with <Link to="/world-cup-2026-stadiums/sofi-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">SoFi Stadium</Link>.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Beyond the Stadium: Explore New York/New Jersey */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-compass-3-line text-emerald-500 text-3xl"></i>
              Beyond the Stadium: Explore New York/New Jersey
            </h3>
            <div className="space-y-6">
              <p>The World Cup experience in the NY/NJ area offers endless possibilities beyond MetLife Stadium.</p>
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-map-pin-line text-emerald-500"></i>
                  Discover New York/New Jersey
                </h4>
                <p>
Explore our complete <Link to="/world-cup-2026-host-cities/new-york-new-jersey" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">New York/New Jersey World Cup 2026 Guide</Link> for everything you need:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hotels near MetLife Stadium</li>
                  <li>Getting to the stadium from Manhattan</li>
                  <li>Best neighborhoods to stay</li>
                  <li>Iconic attractions and experiences</li>
                  <li>Match day transportation tips</li>
                </ul>
              </div>
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-building-4-line text-emerald-500"></i>
                  Other Northeast Stadiums
                </h4>
                <p>
                  Catching multiple matches in the region? Check out <Link to="/world-cup-2026-stadiums/lincoln-financial-field" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia or <Link to="/world-cup-2026-stadiums/gillette-stadium" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Gillette Stadium</Link> in Boston.
                </p>
              </div>
              <p><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* History & Legacy */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-time-line text-emerald-500 text-3xl"></i>
              History & Legacy
            </h3>
            <div>
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
            <hr className="editorial-divider" />
          </article>

          {/* Architecture & Experience */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-building-4-line text-emerald-500 text-3xl"></i>
              Stadium Architecture & Experience
            </h3>
            <div>
              <p className="leading-relaxed mb-6">
                MetLife Stadium's design philosophy reflects its dual-franchise identity. Architects faced the challenge of creating a neutral canvas that could transform for either the Giants or Jets within hours. The solution was inspired by Manhattan's iconic skyscrapers: a limestone-like base supporting aluminum louvers and glass panels that change color through interior LED lighting—Giants blue on their match days, Jets green on theirs.
              </p>
              
              <p className="leading-relaxed mb-6">
                The seating bowl surrounds the pitch entirely, creating exceptional acoustics and eliminating sightline obstructions. Unlike older stadiums, the raked design allows fans to track a 30-yard punt's full arc from any seat. Four colossal HD video boards anchor each upper-deck corner, part of over 47,000 square feet of digital displays throughout the venue. Ten massive LED pylons at stadium entrances blast team highlights and sponsor content visible from the parking lots.
              </p>
              
              <p className="leading-relaxed mb-6">
                Premium amenities include 218 luxury suites across four levels and more than 10,000 club seats with access to upscale lounges like the MetLife 50 Club. The Beers of the World stands and Craft Beer Zones on levels 100 and 300 satisfy serious beer enthusiasts, while the Blue Point Pub and Bow Street Irish Whiskey Bar offer full-service options. Accessibility features include ADA-compliant seating on all levels with elevator access at multiple gates.
              </p>
              
              <p className="leading-relaxed">
                The open-air design means weather is part of the experience—New Jersey summers can be sweltering, but June and July 2026 should offer pleasant match day conditions. Without a roof, this stadium channels the raw energy of outdoor football, letting crowd noise amplify without artificial acoustics.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* What Matches to Expect */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-football-line text-emerald-500 text-3xl"></i>
              What Matches to Expect
            </h3>
            <div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                MetLife Stadium will host <strong>eight World Cup 2026 matches</strong>, culminating in the <strong>tournament final on July 19, 2026</strong>—the first World Cup final in the New York metropolitan area and the United States since 1994. FIFA's announcement confirmed MetLife beat out Dallas's AT&T Stadium and Los Angeles's SoFi Stadium for the ultimate honour, projecting over $2 billion in regional economic impact.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Expect group stage fixtures and likely a knockout round match before the final. With 82,500 seats, the atmosphere will be electric—imagine a sold-out crowd representing dozens of nations, all converging on northern New Jersey for football's biggest prize. The venue's experience hosting international matches, including friendlies featuring Argentina, Brazil, and Mexico, means staff understand the unique atmosphere football supporters bring compared to NFL crowds.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Getting to the Stadium */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-map-2-line text-emerald-500 text-3xl"></i>
              Getting to the Stadium
            </h3>
            {/* By Train */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                By Train (Recommended)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                NJ Transit offers dedicated Meadowlands Rail Service from Secaucus Junction directly to Meadowlands Sports Complex Station, located steps from the stadium gates. This is the easiest, most reliable option for World Cup match days.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                    <i className="ri-building-line text-emerald-500"></i>
                    From Manhattan:
                  </h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-2 ml-6">
                    <li>• Take any NJ Transit train from Penn Station (32nd Street, between 7th and 8th Avenues) to Secaucus Junction (12-15 minutes, departing frequently in the first 15 minutes of each hour)</li>
                    <li>• Transfer downstairs at Secaucus to the Meadowlands shuttle train (10 minutes)</li>
                    <li>• Round-trip fare from Penn Station: approximately $11</li>
                    <li>• Service begins 3.5 hours before kickoff, running every 10-20 minutes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                    <i className="ri-building-2-line text-emerald-500"></i>
                    From Newark:
                  </h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-2 ml-6">
                    <li>• NJ Transit trains from Newark Penn Station to Secaucus Junction, then transfer to Meadowlands shuttle</li>
                    <li>• Journey time: 20-25 minutes total</li>
                  </ul>
                </div>
                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-emerald-500"></i>
                    Tips:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    Purchase round-trip tickets in advance via the NJ Transit app or ticket machines to avoid the $5 onboard surcharge. The last train departs Meadowlands Station approximately 1 hour after full-time, so don't linger too long celebrating.
                  </p>
                </div>
              </div>
            </div>
            {/* By Bus */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-bus-line text-emerald-500"></i>
                By Bus
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Coach USA operates the 351 Meadowlands Express from Port Authority Bus Terminal (42nd Street and 8th Avenue) in Manhattan directly to MetLife Stadium. Service begins 2.5 hours before kickoff and runs until 30 minutes after kickoff, with return buses operating for 2 hours post-match. One-way fare: approximately $7. Drop-off near Parking Lot K.
              </p>
            </div>
            {/* By Car */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-car-line text-emerald-500"></i>
                By Car
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                With 28,000 parking spaces across the Meadowlands Sports Complex, driving is feasible but expect traffic congestion. Access via New Jersey Turnpike (I-95), exit onto Route 3 West. Parking rates typically $40+ for major events; pre-purchase permits online to guarantee access. For World Cup matches, arrive 3+ hours early. Rideshare drop-off zone: Parking Lot E (Verizon Gate).
              </p>
            </div>
            {/* From Airports */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-emerald-500"></i>
                From NYC Airports:
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Newark Liberty (EWR)</h4>
                  <p className="text-slate-700 dark:text-slate-200">15 miles, 25-35 minutes by car or rideshare ($40-60); NJ Transit train to Penn Station available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">LaGuardia (LGA)</h4>
                  <p className="text-slate-700 dark:text-slate-200">18 miles, 35-50 minutes depending on traffic</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">JFK</h4>
                  <p className="text-slate-700 dark:text-slate-200">28 miles, 45-70 minutes in moderate traffic</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mt-4">
                Consider booking airport transfers or car services in advance for guaranteed World Cup match day transport, as rideshare surge pricing can triple fares after matches.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Where to Stay */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-hotel-line text-emerald-500 text-3xl"></i>
              Where to Stay
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              MetLife Stadium's proximity to both Manhattan and New Jersey suburbs offers accommodation for every budget and preference.
            </p>
            {/* Near Stadium */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-map-pin-line text-emerald-500"></i>
                Near the Stadium (Practical but Limited Nightlife)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                For maximum convenience, stay in East Rutherford, Carlstadt, or Secaucus—all within 3 miles:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-money-dollar-circle-line text-emerald-500"></i>
                    Budget:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Super 8 by Wyndham Meadowlands ($80-120/night), Extended Stay America Meadowlands</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-star-line text-emerald-500"></i>
                    Mid-Range:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Hampton Inn Carlstadt-At The Meadowlands, Residence Inn by Marriott East Rutherford Meadowlands ($130-200/night)—many offer free parking and shuttle services</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                    <i className="ri-vip-crown-line text-emerald-500"></i>
                    Upscale:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">Renaissance Meadowlands Hotel ($180-280/night), featuring modern amenities and proximity to American Dream mall</p>
                </div>
              </div>
            </div>
            {/* Secaucus Hub */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-train-line text-emerald-500"></i>
                Secaucus Hub (Best Transit Access)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Secaucus combines affordability with direct train access to both the stadium and Manhattan:
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                Hilton Garden Inn Secaucus, Fairfield Inn Secaucus, Aloft Secaucus Meadowlands—expect $150-220/night during World Cup
              </p>
            </div>
            {/* Manhattan */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-building-line text-emerald-500"></i>
                Manhattan (Maximum Experience, Higher Cost)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Staying in New York City offers unparalleled dining, nightlife, and sightseeing between matches, with Penn Station providing direct train access:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <i className="ri-money-dollar-circle-line text-emerald-500 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Budget:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Hostels in Midtown/Hell's Kitchen ($50-80/night for dorms)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-star-line text-emerald-500 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Mid-Range:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Countless chain hotels near Penn Station and Times Square ($200-400/night during World Cup)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-vip-crown-line text-emerald-500 mt-1"></i>
                  <div>
                    <span className="text-slate-900 dark:text-slate-50 font-semibold">Luxury:</span>
                    <span className="text-slate-700 dark:text-slate-200 ml-2">Midtown five-stars like The St. Regis or Peninsula ($500-1,200/night)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Newark Alternative */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-plane-line text-emerald-500"></i>
                Newark Alternative
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Newark offers affordability and excellent NJ Transit connections to Secaucus Junction, plus proximity to Newark Airport—ideal for international arrivals. Downtown hotels range $100-200/night.
              </p>
            </div>
            {/* Booking Tip */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-emerald-500"></i>
                Booking Tip:
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Reserve accommodation 6-12 months ahead for World Cup dates. Use platforms like <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a>, <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Expedia.com</a>, or <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Airbnb.com</a> to compare rates and locations. Filter by "near public transport" to simplify match day logistics.
            </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Matchday Tips */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-calendar-check-line text-emerald-500 text-3xl"></i>
              Matchday Tips & Insider Advice
            </h3>
            {/* Arrive Early */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                Arrive Early
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Gates typically open 2 hours before NFL games—expect similar for World Cup. Security screening takes time with 80,000+ fans, so arrive 2.5-3 hours early to explore the stadium, grab food, and soak up the pre-match atmosphere. Late arrivals risk missing kickoff.
              </p>
            </div>
            {/* Bag Policy */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-shield-check-line text-emerald-500"></i>
                Bag Policy (Critical)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                MetLife enforces the NFL Clear Bag Policy strictly:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">✔ Allowed:</h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-1">
                    <li>• Clear plastic/vinyl bags up to 12"×6"×12"</li>
                    <li>• Small clutch purses up to 4.5"×6.5" (non-clear OK)</li>
                    <li>• One-gallon clear Ziploc bags</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✘ Prohibited:</h4>
                  <ul className="text-slate-700 dark:text-slate-200 space-y-1">
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
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-suitcase-line text-emerald-500"></i>
                What to Bring
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="ri-drop-line text-emerald-500"></i>
                    Factory-sealed water bottle (20 oz or less) or empty reusable bottle to fill inside
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-restaurant-line text-emerald-500"></i>
                    Food in clear plastic bags (allowed!)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-sun-line text-emerald-500"></i>
                    Sunscreen and hat for day matches (open-air stadium)
                  </li>
                </ul>
                <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="ri-shirt-line text-emerald-500"></i>
                    Light jacket for evening matches—New Jersey summer nights can cool down
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-battery-charge-line text-emerald-500"></i>
                    Power bank for your phone (long days drain batteries)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-id-card-line text-emerald-500"></i>
                    Photo ID (required for alcohol purchases if you appear under 40)
                  </li>
                </ul>
              </div>
            </div>
            {/* Food & Drink */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-restaurant-2-line text-emerald-500"></i>
                Food & Drink Inside
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                MetLife offers extensive concessions: classic stadium fare (hot dogs, burgers, pizza), plus upgraded options like Asian noodles, gyros, deli sandwiches, and fried clams. Expect $8-10 for basic items, $13-15 for beer. The MetLife 50 Club (premium ticketholders) features buffet dining. Stadium is cashless—bring cards or use mobile pay.
              </p>
            </div>
            {/* Best Gates */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-door-open-line text-emerald-500"></i>
                Best Gates
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The Verizon Gate (near Lot E) and Pepsi Gate handle crowds efficiently. The train station deposits you near the HCL Tech/Train Gate—convenient but can bottleneck. Spread out to less crowded gates if lines look long.
              </p>
            </div>
            {/* Exit Strategy */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-logout-box-line text-emerald-500"></i>
                Post-Match Exit Strategy
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                Getting out is the trickiest part. The train station gets mobbed—expect 30-60 minute waits for Meadowlands trains post-match. Consider:
              </p>
              <ul className="text-slate-700 dark:text-slate-200 space-y-2">
                <li className="flex items-start gap-2">
                  <i className="ri-time-line text-emerald-500 mt-1"></i>
                  Exiting 5 minutes before full-time whistle if the result is decided (controversial but effective)
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-restaurant-line text-emerald-500 mt-1"></i>
                  Walking to nearby restaurants (Redds, Marcus Live) for a drink while crowds thin
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-car-line text-emerald-500 mt-1"></i>
                  Pre-booking car services for designated pickup times
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-bus-line text-emerald-500 mt-1"></i>
                  Using the 351 bus back to Port Authority (also gets crowded)
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-200 mt-4 font-semibold">
                Rideshare surge pricing can be extreme—$100+ to Manhattan isn't uncommon after major events.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Things to Do Nearby */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-compass-3-line text-emerald-500 text-3xl"></i>
              Things to Do Nearby
            </h3>
            {/* American Dream */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-shopping-cart-line text-emerald-500"></i>
                American Dream (0.4 miles)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                North America's second-largest mall isn't just shopping—it's an entertainment complex featuring Nickelodeon Universe (indoor theme park), DreamWorks Water Park, Big SNOW (indoor skiing!), SEA LIFE Aquarium, and dozens of restaurants. Perfect for pre-match hours or non-match days. Accessible via free shuttle or short walk.
              </p>
            </div>
            {/* Pre-Match Dining */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-restaurant-line text-emerald-500"></i>
                Pre-Match Dining & Drinking
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                East Rutherford's dining scene is limited but functional:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Redds Restaurant & Biergarten (0.5 miles)</h4>
                  <p className="text-slate-700 dark:text-slate-200">Classic pub grub, shuttle service to/from stadium ($50 including parking), outdoor seating</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Marcus Live! Bar & Grille (American Dream)</h4>
                  <p className="text-slate-700 dark:text-slate-200">Sports bar atmosphere with 35+ TVs, extensive menu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Gianna's (Carlstadt, 2 miles)</h4>
                  <p className="text-slate-700 dark:text-slate-200">Old-school Italian with massive portions—penne vodka, veal piccata</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Segovia Meson (nearby)</h4>
                  <p className="text-slate-700 dark:text-slate-200">Spanish tapas and authentic cuisine</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200 mt-4">
                For serious pre-match atmosphere, many supporters will gravitate to Manhattan bars and travel together by train—Penn Station area has countless sports pubs.
              </p>
            </div>
            {/* Manhattan */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-building-line text-emerald-500"></i>
                Manhattan (8 miles)
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                If time permits, New York City offers endless attractions: Times Square, Central Park, Empire State Building, Statue of Liberty/Ellis Island ferries, Brooklyn Bridge, world-class museums (MET, MoMA, Natural History), Broadway shows, and neighborhoods like Greenwich Village and SoHo. Allocate full days for proper NYC exploration—don't try to squeeze sightseeing on match days.
              </p>
            </div>
            {/* Post-Match Celebrations */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-party-popper-line text-emerald-500"></i>
                Post-Match Celebrations
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                After a World Cup final, Manhattan transforms into a global party. Head to Times Square, Hell's Kitchen bars, or culturally-specific neighborhoods (Little Brazil in Midtown, Astoria's Latin quarter in Queens) to celebrate with fellow supporters.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Final Verdict */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <i className="ri-medal-line text-emerald-500 text-3xl"></i>
              Final Verdict & Key Takeaway
            </h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              MetLife Stadium isn't subtle—it's a 82,500-seat monument to American sports excess, and for the 2026 World Cup final, that's precisely what makes it special. This venue delivers on scale, technology, and atmosphere while offering unmatched access to New York City's cultural riches. Yes, you'll navigate New Jersey Transit. Yes, you'll pay Manhattan prices. But you'll witness football's pinnacle moment in a region that's hosted every sport's championship at some point, now adding the World Cup crown to its resume.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                  <i className="ri-thumb-up-line text-emerald-500"></i>
                  Perfect for:
                </h4>
                <p className="text-slate-700 dark:text-slate-200">
                  Supporters who want the full New York experience wrapped around their football; fans who appreciate modern, high-tech stadiums; anyone willing to plan logistics carefully for a once-in-a-lifetime atmosphere.
                </p>
              </div>
              <div>
                <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>
                  The One Thing You Can't Miss:
                </h4>
                <p className="text-slate-700 dark:text-slate-200">
                  Standing outside the stadium 90 minutes before kickoff, surrounded by supporters from every continent, with the Manhattan skyline glowing behind you—that's when you'll realize you're at the center of the sporting universe.
                </p>
              </div>
            </div>
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-alarm-line text-emerald-500"></i>
                Book Early:
              </h4>
              <p className="text-slate-700 dark:text-slate-200">
                Accommodation and transport options will evaporate 2-3 months before the final. Secure your arrangements now, memorize the NJ Transit schedule, and prepare for the biggest match day of your life. The World Cup comes to New York New Jersey only once—make every moment count.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

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
          </main>
        </div>
      )}
    </div>
  );
};