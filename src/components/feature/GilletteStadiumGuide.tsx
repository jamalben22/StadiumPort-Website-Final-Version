import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface GilletteStadiumGuideProps {
  onClose?: () => void;
}

// Gillette Stadium Guide — PART 1/4 (verbatim content)
// Design language mirrors MetLife/Estadio Azteca/Arrowhead guides: same spacing, icons, gradients, and responsiveness.
export const GilletteStadiumGuide: React.FC<GilletteStadiumGuideProps> = () => {
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
              src="https://readdy.ai/api/search-image?query=Gillette%20Stadium%20Foxborough%20Massachusetts%20aerial%20view%20at%20sunset%2C%20modern%20NFL%20stadium%20architecture%20with%20lighthouse%20feature%2C%20New%20England%20scenery%20background%2C%20dramatic%20lighting&width=1600&height=900&seq=gillettestadium1&orientation=landscape"
              alt="Gillette Stadium aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Gillette Stadium</h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">64,628 capacity (70,000 WC config)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>Foxborough, Massachusetts</span>
                </div>
              </div>

              {/* Tagline from Part 1 intro */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                When the world's greatest football tournament returns to North America in summer 2026, one of its most compelling chapters will unfold in the unlikeliest of places—a stadium nestled off Route 1 in Foxborough, Massachusetts, where American football royalty has reigned for two decades.
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
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 dark:from-emerald-300 dark:to-sky-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 dark:text-emerald-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Gillette Stadium: Where New England's Football Legacy Meets World Cup Glory
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-blue-400 dark:text-sky-300"></i>
                <span className="font-semibold">64,628 capacity (up to ~70,000 for World Cup)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span>Foxborough, Massachusetts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-trophy-line text-xl text-gold-400 dark:text-amber-300"></i>
                <span className="font-semibold">Hosts 7 World Cup matches (incl. Quarterfinal)</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Introduction Section (verbatim) */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  When the world's greatest football tournament returns to North America in summer 2026, one of its most compelling chapters will unfold in the unlikeliest of places—a stadium nestled off Route 1 in Foxborough, Massachusetts, where American football royalty has reigned for two decades. Gillette Stadium, home to six-time Super Bowl champions the New England Patriots, will transform into "Boston Stadium" for the FIFA World Cup, hosting seven matches including a quarterfinal that could decide the tournament's destiny. This is where New England's fierce sporting culture meets the beautiful game, where a privately-funded architectural marvel built by Robert Kraft's vision will welcome the planet's most passionate football fans. For those traveling to witness World Cup history, this venue represents something rare: a stadium that actually works, surrounded by infrastructure designed for massive crowds, with a reputation for selling out every single event since opening in 2002.
                </p>
              </div>
            </div>

            {/* Stadium Overview & Fast Facts (verbatim labels and values) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Official Name: Gillette Stadium (Boston Stadium during World Cup 2026)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Location: Foxborough, Massachusetts (22 miles southwest of Boston, 18 miles northeast of Providence, Rhode Island)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-calendar-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Opened: May 11, 2002</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Capacity: 64,628 (standard) / up to 70,000 (World Cup configuration)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-team-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Primary Tenants: New England Patriots (NFL), New England Revolution (MLS)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-briefcase-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Owner/Operator: Kraft Sports Group</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-pencil-ruler-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Architect/Design Firm: HOK Sport (now Populous)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-grass-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Surface Type: FieldTurf (artificial)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-sun-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Roof Type: Open-air</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-star-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Notable Features: 218-foot lighthouse observation deck, largest outdoor curved-radius video board in North America (22,000 sq ft), 360-degree stadium connectivity, completely cashless venue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* History & Legacy: From Foxboro Dreams to World Cup Reality (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-time-line text-gold-400 dark:text-amber-300 text-4xl"></i>
                History & Legacy: From Foxboro Dreams to World Cup Reality
              </h2>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Gillette Stadium rose from necessity and ambition. For three decades, the Patriots endured Foxboro Stadium—a bare-bones concrete structure so basic it required portable toilets to supplement inadequate plumbing. By the late 1990s, owner Robert Kraft knew his team needed a modern home to compete financially in the NFL. After failed proposals for stadiums in Hartford, Providence, and South Boston, Kraft decided to self-fund a $325 million venue on the same Foxborough site.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Construction began in March 2000, and just 26 months later, the stadium opened its gates. Kraft personally oversaw the design, insisting on a distinctive "front door" entrance inspired by Disneyland, complete with a lighthouse and bridge referencing New England maritime heritage. The venue immediately became synonymous with winning—the Patriots have claimed six Super Bowl titles since moving here, establishing one of sport's greatest dynasties.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  But World Cup history runs deeper here than you might expect. The old Foxboro Stadium hosted six matches during the 1994 FIFA World Cup, including a quarterfinal where Italy defeated Spain 2-1 before 53,400 spectators. Diego Maradona scored his final World Cup goal on that very ground. Now, 32 years later, the sport returns to hallowed turf—only this time in a world-class facility that ranks second among all US World Cup venues for quality and accessibility.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The stadium underwent a dramatic $250 million renovation completed in 2023, adding the signature Lighthouse tower, the massive north end video board, and enhanced connectivity throughout the venue. For World Cup 2026, Gillette will temporarily shed its corporate name to become "Boston Stadium," following FIFA's sponsor-neutrality requirements, though locals will undoubtedly still call it by its familiar name.
                </p>
              </div>
            </div>

            {/* Stadium Architecture & Experience: New England Pride in Steel and Concrete (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-building-4-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience: New England Pride in Steel and Concrete
              </h2>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Gillette Stadium strikes an intriguing balance—it's unmistakably modern yet distinctly regional. The lighthouse and pedestrian bridge at the north entrance aren't merely decorative; they're deliberate nods to New England's maritime identity, creating a sense of place that many soulless NFL venues lack. The recently added 218-foot lighthouse offers 360-degree observation decks, providing stunning views of the stadium bowl, surrounding foliage (spectacular during autumn), and the Neponset River that the Krafts helped restore.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The seating bowl follows a classic three-tier design, with every seat angled toward the 50-yard line—a rarity that delivers exceptional sightlines from virtually anywhere in the house. The middle tier houses 5,876 club seats within the Cross Insurance Clubs, expansive spaces with cathedral ceilings and floor-to-ceiling glass overlooking the field. The 92 luxury suites are among the NFL's largest, ranging from 800 to 2,700 square feet.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Acoustics here are genuinely impressive for an open-air venue. The steep seating rake traps noise and directs it toward the field, creating an intimidating environment that has contributed to the Patriots' legendary home-field advantage. That same atmosphere should translate beautifully to football matches, where supporter sections can generate authentic cauldron conditions.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The 2023 renovations transformed the fan experience. The north end video board measures 22,000 square feet—the largest curved-radius outdoor board at any sports venue in the United States. Combined with the south end board, you're looking at three-quarters of an acre of video displays. New hospitality spaces like the 50,000-square-foot G-P Atrium and connectivity bridges mean you can now circumnavigate the entire upper concourse, a feature sorely lacking in the stadium's first two decades.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Accessibility features are comprehensive, with wheelchair-accessible seating throughout all levels, adult changing tables in first-aid facilities, and dedicated accessible parking with shuttle service. The stadium is also completely cashless, with cash-to-card kiosks available if you prefer physical currency.
                </p>
              </div>
            </div>

            {/* What Matches to Expect: Seven Games, One Quarterfinal (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-calendar-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                What Matches to Expect: Seven Games, One Quarterfinal
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Gillette Stadium will host seven FIFA World Cup 2026 matches across four weeks, making it one of the tournament's busiest venues. The schedule includes five group-stage matches (June 13, 16, 19, 23, and 26), one Round of 32 match (June 29), and the tournament's first quarterfinal on July 9. That quarterfinal represents the highest-stakes match awarded to any New England venue in World Cup history—potentially featuring global heavyweights battling for a semifinal berth.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Match times will likely fall at noon, 3 p.m., 6 p.m., and 9 p.m. Eastern Time, accommodating both North American audiences and global television markets. Expect capacity crowds for every fixture—Gillette has sold out every home event since 2002, and World Cup demand will be extraordinary. The stadium's ability to accommodate up to 70,000 for special events means FIFA will likely push capacity beyond the standard 64,628.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The atmosphere should be electric. New England sports fans are notoriously passionate, knowledgeable, and vocal. While this region isn't traditionally a football hotbed compared to other US markets, the World Cup transcends normal sporting boundaries. The large Portuguese, Brazilian, Irish, and Italian communities in the greater Boston area will ensure robust, authentic support for certain nations.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium: Your Transport Playbook (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-route-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Getting to the Stadium: Your Transport Playbook
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Foxborough sits at the convergence of major northeastern highways, roughly equidistant from Boston and Providence. Here's how to navigate matchday transport:
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-train-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  By MBTA Commuter Rail (Recommended)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  The star option for World Cup matches. Special event trains will run from Boston's South Station, with stops at Back Bay and Dedham Corporate Center, directly to Foxboro Station—located just a quarter-mile from the stadium via a pedestrian walkway. Round-trip tickets cost $20, and trains are timed to arrive about an hour before kickoff and depart 30 minutes after the final whistle.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Trains also run from Providence, Rhode Island (T.F. Green Airport station), with stops at South Attleboro, Attleboro, and Mansfield. This route serves fans traveling from southern New England and New York via Amtrak connections.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Journey times: 50-70 minutes from Boston South Station, 45 minutes from Providence. Book tickets in advance through the MBTA mTicket app—they sell out quickly for major events. The MBTA is expanding Foxboro Station infrastructure specifically for the World Cup, adding temporary high-level platforms to accommodate expected crowds of 20,000 riders per match.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Alternative: The Franklin/Foxboro Line offers regular weekday service if you're staying in the area beyond match day, though service is limited and doesn't align with evening fixtures.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-roadster-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  By Car
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  If driving, take I-95 to Exit 9 (Route 1 South from the north) or I-495 to Exit 14A (Route 1 North from the south). Parking lots open four hours before kickoff. Stadium-side prepaid parking passes (available online) cost around $25-40 and are essential—free parking is available on the non-stadium side of Route 1, but you'll face a 10-15 minute walk and post-match traffic chaos.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Journey times: 35 minutes from Boston Logan Airport (without traffic), 25 minutes from downtown Providence. Warning: Route 1 becomes a parking lot after events. Budget an extra hour for exit delays.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-taxi-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  By Rideshare/Taxi
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  Uber and Lyft operate designated drop-off and pickup zones in Lot 15 near the CVS Health Gate. Expect surge pricing before and after matches—sometimes 2-3x normal rates. Rideshare from Boston typically costs $60-100 each way, from Providence $45-75.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Smart tip: Walk 10-15 minutes away from the stadium to a nearby hotel or Patriot Place for cheaper, faster pickups.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-bus-2-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  By Bus
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Some tour operators may offer World Cup packages with direct bus service from Boston, Cambridge, and Providence. Check with Boston-based operators closer to the tournament.
                </p>
              </div>
            </div>

            {/* Where to Stay: From Budget Beds to Luxury Lodgings (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-purple-400 dark:text-purple-300 text-4xl"></i>
                Where to Stay: From Budget Beds to Luxury Lodgings
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Foxborough itself offers limited accommodation, but the stadium's location between two major cities creates options across all budgets. Book early—World Cup demand will be intense.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-vip-crown-line text-amber-400 dark:text-amber-300 text-2xl"></i>
                  On-Site (Premium)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  **Renaissance Boston Patriot Place Hotel** and **Hilton Garden Inn Foxborough Patriot Place** sit directly adjacent to the stadium within Patriot Place. You can literally walk to your seat in five minutes. Both offer indoor pools, on-site dining, and pet-friendly rooms. Expect premium pricing during the tournament, but the convenience is unmatched. `http://booking.com/`  or `http://hotels.com/`  to secure rates before prices spike.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Nearby Foxborough/Mansfield (Mid-Range)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Several chain hotels cluster around the stadium within 2-5 miles: Hampton Inn & Suites Foxborough/Mansfield, Sonesta Select Boston Foxborough Mansfield, Residence Inn Foxborough, and Comfort Inn Foxboro Mansfield. These typically run $150-250/night normally—expect $300-500 during World Cup. Most offer free parking and breakfast. Convenient for driving to matches but limited nightlife.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-ancient-gate-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Boston (30-40 minutes, All Budgets)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Staying in Boston proper provides far richer cultural experiences, dining, and nightlife. The HI Boston Hostel near Chinatown offers budget beds ($40-70), while mid-range chains like Hampton Inn, Courtyard, and Fairfield cluster around Back Bay and Cambridge ($200-350/night). Luxury seekers should consider The Liberty Hotel (converted jail), Four Seasons, or Mandarin Oriental ($500-900). Boston's MBTA train access to the stadium makes this viable despite the distance.
                </p>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  **Search multi-city options:** Sites like `http://expedia.com/`  and `http://kayak.com/`  let you compare Boston, Providence, and Foxborough simultaneously.
                </p>
              </div>
            </div>

            {/* Providence & Alternative Accommodations (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-community-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Providence, Rhode Island (25-30 minutes, Value Option)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Often overlooked, Providence offers better value than Boston with excellent train connections to the stadium. Consider Graduate Providence, Omni Providence, or Renaissance Providence ($150-300). The city has a fantastic food scene, WaterFire art installations, and Brown University's campus.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-home-8-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Alternative Accommodations
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  `http://airbnb.com/`  rentals in Walpole, Wrentham, and Sharon (towns surrounding Foxborough) might offer whole-home options for groups. Expect $250-500/night for houses sleeping 6-8.
                </p>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **Arrive Early**: Gates open 2-3 hours before kickoff. Security screening takes time, especially with FIFA-mandated protocols. Aim to arrive 90 minutes early to explore the stadium, grab food, and soak in pre-match atmosphere.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **Bag Policy is Strict**: Only clear plastic bags (max 12" x 12" x 6") or small clutches (max 6.5" x 4.5") are permitted. No backpacks, purses, or camera bags. Leave non-compliant bags at your hotel—the stadium doesn't offer storage.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **Best Entrances**: The main Ticketmaster Gate (north end, by the lighthouse) is spectacular but crowded. Side gates at CVS Health (west) and Enel X (east) typically move faster. Upper deck ticket holders should use designated upper-level entrances to avoid climbing stairs through lower concourses.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **Food & Drink**: Gillette ranks first among NFL venues for food safety. Highlights include Backyard Barbecue (pulled pork, brisket), Ale House (pizza, pretzel logs), and international options at various concession stands. Everything is pricey ($10-18 for meals, $12-15 for beer). The stadium is completely cashless—credit/debit only, though cash-to-card kiosks are available.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Smart move: Eat at Patriot Place before entering. Better quality, similar prices, actual seating.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **What to Bring**: Photo ID (required for alcohol, strictly enforced for under-25 with out-of-state IDs), phone/mobile ticket, layers (New England weather is unpredictable—June can be 65°F or 85°F, July typically 75-90°F), sunscreen and hat for day matches.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **What NOT to Bring**: Umbrellas, folding chairs, coolers, outside food/drink (except medical necessity), professional cameras with detachable lenses, selfie sticks, noisemakers, large flags.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  **Post-Match Transport**: Trains depart 30 minutes after the final whistle—don't dawdle. If driving, consider waiting 30-45 minutes in Patriot Place bars/restaurants to let traffic clear. Rideshares are chaos immediately post-match; walk 10 minutes toward Route 1 hotels for easier pickups.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  **Weather Preparation**: June can bring everything from sunny perfection to thunderstorms. July heat can be intense. The stadium is open-air with no protection—bring sunscreen, but remember umbrella prohibition means you'll get wet if it rains.
                </p>
              </div>
            </div>

            {/* Things to Do Nearby: More Than Just Matchday (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-compass-3-line text-indigo-400 dark:text-indigo-300 text-4xl"></i>
                Things to Do Nearby: More Than Just Matchday
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-store-3-line text-rose-400 dark:text-rose-300 text-2xl"></i>
                  Patriot Place (Adjacent)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                  This open-air shopping and entertainment complex surrounds the stadium with 1.3 million square feet of retail, dining, and activities. Pre-match atmosphere thrives here with 19 restaurants and bars including Six String Grill & Stage (live country music), Scorpion Bar (Mexican with rooftop views), Davio's Northern Italian Steakhouse, and Bar Louie.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  **The Hall at Patriot Place** houses the Patriots Hall of Fame ($15 entry)—even non-NFL fans appreciate the interactive exhibits and Tom Brady huddle experience. Bass Pro Shops, Cinema de Lux, and Splitsville Luxury Lanes bowling provide non-football entertainment. Parking is free at Patriot Place (separate from stadium lots).
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Boston (30-40 minutes)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  One of America's most walkable, historic cities deserves exploration. The Freedom Trail connects 16 Revolutionary War sites through downtown. Fenway Park (Red Sox) offers tours. The North End serves authentic Italian cuisine. Harvard and MIT campuses in Cambridge showcase academic America. Book walking tours through `http://viator.com/`  or `http://getyourguide.com/`  to maximize limited time.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-line text-blue-400 dark:text-sky-300 text-2xl"></i>
                  Providence (25-30 minutes)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Rhode Island's capital surprises visitors with Federal Hill's Italian restaurants, WaterFire evening art installations along riverwalks, and RISD Museum. Tony's Colonial Food (cash-only diner) is legendary.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-beer-line text-amber-400 dark:text-amber-300 text-2xl"></i>
                  Craft Beer Trail
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  New England excels at craft brewing. Wormtown Brewery at Patriot Place pours local favorites. Sam Adams brewery in Boston (Jamaica Plain) offers tours. Tree House Brewing in Charlton (30 minutes west) ranks among America's best—worth the detour for beer enthusiasts.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-2xl"></i>
                  Cape Cod (60-75 minutes)
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  If extending your stay, Cape Cod's beaches, seafood shacks, and charming towns offer classic New England coastal experiences. Provincetown at the tip combines beaches with vibrant arts and LGBTQ+ culture.
                </p>
              </div>
            </div>

            {/* Final Verdict: A Stadium That Delivers (verbatim) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-award-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Final Verdict: A Stadium That Delivers
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Gillette Stadium might lack the architectural bombast of newer World Cup venues, but it compensates with something more valuable: functionality married to character. This is a venue that actually works—transportation exists, infrastructure scales for massive crowds, and the surrounding Patriot Place ecosystem provides pre- and post-match experiences that isolated stadiums can't match.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Football purists will love the steep seating bowl and intimate atmosphere despite 65,000+ capacity. The acoustics channel noise onto the pitch brilliantly. History buffs will appreciate connections to the 1994 World Cup at neighboring Foxboro Stadium. American football fans get a chance to see where Brady and Belichick built a dynasty.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The quarterfinal on July 9 could be the match of your life—imagine witnessing the last eight teams battling with a World Cup semifinal at stake, in a stadium that knows how to host championship moments. For international visitors, this is your gateway to understanding American sports culture while experiencing the beauty and history of New England.
                </p>

                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-slate-800/70 border-l-4 border-emerald-500 mb-6">
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                    **One unforgettable thing not to miss:** Climb the lighthouse observation deck before kickoff. The 360-degree views of the stadium bowl, the surrounding forests (stunning in summer green), and the entire Patriot Place complex provide perspective on how this venue sits in its landscape—uniquely New England, uniquely American, and for seven special days in 2026, uniquely global.
                  </p>
                </div>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Book your accommodation early through `http://booking.com/` , secure train tickets as soon as they go on sale, and prepare for World Cup football in one of the tournament's most underrated venues. Boston Stadium awaits.
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