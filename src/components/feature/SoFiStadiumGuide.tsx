import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { OptimizedImage } from '../base/OptimizedImage';

interface SoFiStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

// SoFi Stadium Guide – PART 1/4 content only
// Design language mirrors MetLife/Estadio Azteca/Arrowhead guides: same spacing, icons, gradients, and responsiveness.
export const SoFiStadiumGuide: React.FC<SoFiStadiumGuideProps> = ({ showHeader = false, hideHero = false }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const handleGotItClick = () => navigate('/world-cup-2026-stadiums');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {showHeader && <Header />}

      {/* Preview Card - Collapsed State */}
      {!isExpanded && !hideHero && (
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp"
              alt="SoFi Stadium aerial view with translucent roof"
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            {/* Preview Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                {/* Use exact wording from content part for the badge label */}
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                SoFi Stadium
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-group-line text-xl text-blue-400"></i>
                  <span className="font-semibold">70,000+ capacity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="ri-map-pin-line text-xl text-emerald-400"></i>
                  <span>Inglewood, California</span>
                </div>
              </div>

              {/* 1–2 sentence tagline using exact sentences from Part 1 */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                When the United States Men's National Team walks onto the pitch at SoFi Stadium on June 12, 2026, they'll be christening one of the world's most technologically advanced sporting cathedrals under the eyes of 70,000 roaring fans. This isn't just another World Cup venue—it's a $5 billion architectural marvel that has redefined what a stadium can be.
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
        <div className="animate-fade-in">
          {/* Miami-style Hero Header */}
          {!hideHero && (
          <div className="relative h-[520px] overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp"
              alt="Interior view of SoFi Stadium in Los Angeles, California, a host venue for FIFA World Cup 2026 matches."
              className="absolute inset-0"
              imgClassName="object-cover"
              width={1600}
              height={900}
              placeholder="blur"
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-emerald-900/70"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">2026 FIFA World Cup</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                SoFi Stadium
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-6 text-white/90">
                <div className="flex items-center gap-2">
                  <i className="ri-group-line text-xl text-blue-300"></i>
                  <span className="font-semibold">70,000+ capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-map-pin-line text-xl text-emerald-300"></i>
                  <span>Inglewood, California (Hollywood Park district), 3 miles from LAX Airport</span>
                </div>
              </div>

              <p className="text-slate-200 text-lg leading-relaxed mb-8 max-w-3xl">
                When the United States Men's National Team walks onto the pitch at SoFi Stadium on June 12, 2026, they'll be christening one of the world's most technologically advanced sporting cathedrals under the eyes of 70,000 roaring fans. This isn't just another World Cup venue—it's a $5 billion architectural marvel that has redefined what a stadium can be.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
                >
                  <i className="ri-arrow-up-line"></i>
                  Collapse preview
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

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Intro narrative paragraph block */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8">
                {/* Moved guide title into the intro section as a title div */}
                <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Your Complete Guide to the 2026 FIFA World Cup in Los Angeles
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
                  When the United States Men's National Team walks onto the pitch at SoFi Stadium on June 12, 2026, they'll be christening one of the world's most technologically advanced sporting cathedrals under the eyes of 70,000 roaring fans. This isn't just another World Cup venue—it's a $5 billion architectural marvel that has redefined what a stadium can be. With its translucent roof hovering like a spacecraft over Inglewood, its record-breaking Infinity Screen suspended above the field, and its unique indoor-outdoor design, SoFi represents the cutting edge of stadium innovation. For the eight World Cup matches set to unfold here, including America's tournament opener and a quarterfinal showdown, this venue promises an experience unlike any other in the competition.
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
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-building-2-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Official Name</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Los Angeles Stadium (FIFA designation) / SoFi Stadium</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Location</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Inglewood, California (Hollywood Park district), 3 miles from LAX Airport</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-calendar-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Opened</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">September 2020</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">World Cup Capacity</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">70,000+ (standard: 70,240; expandable to 100,000)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-team-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Primary Tenants</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Los Angeles Rams (NFL), Los Angeles Chargers (NFL), LA Bowl (college football)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-magic-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Architect/Design Firm</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">HKS Architects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-hammer-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Construction Team</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Turner-AECOM/Hunt joint venture</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                    <i className="ri-user-star-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                    <div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">Owner/Developer</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Stan Kroenke (Rams owner)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-leaf-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Surface Type</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">Natural grass (to be installed for World Cup; typically artificial turf)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-cloudy-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Roof Type</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">Translucent cable-net ETFE canopy (open-air sides)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="ri-ruler-line text-emerald-400 dark:text-emerald-300 text-xl"></i>
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Total Area</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">3.1 million square feet—the NFL's largest stadium</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-gold-400 dark:text-amber-300"></i>
                  Notable Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>Infinity Screen by Samsung: dual-sided 360° 4K video board (80 million pixels, 260-speaker system)</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>World's largest cable-net roof structure (19.5 acres, 302 ETFE panels)</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>Built 100 feet below grade with seismic moat protection</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>27,000 embedded LED pucks in roof visible from aircraft</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>260+ luxury suites, 13,000+ premium seats</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>Cashless venue with Evolv AI security screening</span></div>
                  <div className="flex items-start gap-2"><i className="ri-checkbox-circle-line text-emerald-400 dark:text-emerald-300"></i><span>YouTube Theater (6,000 seats) and American Airlines Plaza under same canopy</span></div>
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
                  SoFi Stadium stands on hallowed ground—the site of the legendary Hollywood Park Racetrack, which operated from 1938 to 2013. When construction began in 2016, it marked the first football stadium built in Los Angeles in nearly a century. Rams owner Stan Kroenke envisioned more than a sports venue; he wanted to create an entertainment destination worthy of the world's entertainment capital.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The stadium opened in September 2020 with a Rams-Cowboys game, though the pandemic kept stands largely empty for its inaugural season. It didn't take long to make up for lost time. In February 2022, SoFi became only the second stadium ever to host a conference championship game and the Super Bowl in the same season—with the Rams defeating the Cincinnati Bengals 23-20 in Super Bowl LVI on their home turf. The halftime show featuring Dr. Dre, Snoop Dogg, Eminem, Kendrick Lamar, and Mary J. Blige became an instant cultural touchstone.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Since then, the venue has hosted the 2023 College Football Playoff National Championship, WrestleMania 39, the 2023 CONCACAF Gold Cup Final (where Mexico defeated Panama 1-0 before 72,000 fans), and the 2024 Copa América matches. It was ranked the world's No. 1 stadium for top-grossing concert and live event ticket sales in 2023, hosting megastars like Taylor Swift, Beyoncé, The Rolling Stones, and Bad Bunny.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The 2026 World Cup continues Los Angeles' rich football heritage. The city previously hosted matches during the 1994 FIFA World Cup (at the Rose Bowl, including the final), the 1999 Women's World Cup, and numerous international friendlies. SoFi will make history as the only venue to host the Super Bowl (LVI in 2022), FIFA World Cup (2026), and Olympics (opening ceremonies in 2028) within three consecutive years—then add Super Bowl LXI in 2027 for good measure.
                </p>
              </div>
            </div>

            {/* Stadium Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-layout-grid-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  Walking toward SoFi feels like approaching an alien mothership hovering above the California landscape. The 19.5-acre translucent roof—comprising over 35,000 uniquely shaped anodized aluminum panels and 302 ETFE panels—creates what architects call a "fifth elevation," turning the roof itself into a dynamic canvas visible from approaching aircraft at nearby LAX.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The genius of SoFi's design lies in its paradox: it's both completely enclosed and refreshingly open-air. The ETFE canopy blocks 65% of UV rays while allowing natural light to flood the seating bowl, which sits 100 feet below grade level to comply with FAA height restrictions. Open sides on all four corners let Pacific Ocean breezes flow through, creating temperatures approximately 4 degrees cooler than outside—natural climate control without closing the venue off from the California sky.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The seating bowl wraps intimately around the field, with sightlines carefully engineered to bring every fan closer to the action than traditional NFL stadiums. The stepped terracing, combined with the descending ramps and landscaped paths leading down from street level, creates what HKS architects describe as a "meandering procession" rather than the typical elevator-and-corridor maze.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  But the showstopper is the Infinity Screen—a 120-yard-long, double-sided 4K video board that hangs from the roof like a hovering spacecraft, displaying 80 million pixels from 260 built-in speakers. It's the first center-hung, dual-sided display in any stadium, allowing fans in every section to follow replays, stats, and atmosphere shots without craning their necks.
                </p>
              </div>
            </div>

            {/* Premium Seating & Accessibility */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-vip-crown-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Premium Seating & Accessibility
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  The venue features over 260 luxury suites and 12 different club spaces, from the ultra-premium Boros Club to the Patio Suites with outdoor terraces. Premium areas include the Champions Club, VIP lounges, and field-level suites that put fans within feet of players entering the tunnel. Accessibility features are comprehensive, with wheelchair-accessible seating throughout all levels, assistive listening devices, accessible restrooms with baby-changing stations, and courtesy mobility shuttles between parking zones.
                </p>
              </div>
            </div>

            {/* What Matches to Expect */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-calendar-event-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">SoFi Stadium will host eight matches during the 2026 FIFA World Cup:</p>

                <p className="text-slate-900 dark:text-slate-100 font-semibold">Group Stage:</p>
                <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-6">
                  <li><strong>June 12, 2026:</strong> USA Men's National Team Opening Match (Group D) – <em>This is it—America's World Cup debut on home soil with all eyes on LA</em></li>
                  <li><strong>June 15, 2026:</strong> Group G Match</li>
                  <li><strong>June 18, 2026:</strong> Group B Match</li>
                  <li><strong>June 21, 2026:</strong> Group G Match</li>
                  <li><strong>June 25, 2026:</strong> USA Men's National Team 3rd Group Match (Group D) – <em>The USMNT returns to LA to potentially seal knockout stage qualification</em></li>
                </ul>

                <p className="text-slate-900 dark:text-slate-100 font-semibold">Knockout Stage:</p>
                <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-6">
                  <li><strong>June 28, 2026:</strong> Round of 32 (Group A Runner-up vs. Group B Runner-up)</li>
                  <li><strong>July 2, 2026:</strong> Round of 32 (Group H Winner vs. Group J Runner-up)</li>
                  <li><strong>July 10, 2026:</strong> Quarterfinal</li>
                </ul>

                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Expect capacity crowds approaching or exceeding 70,000 for every match, with the USA fixtures creating an atmosphere unlike anything American soccer has witnessed since the 1994 World Cup. The USMNT opener on June 12 will likely be one of the most-watched sporting events in U.S. television history, with fan zones across Los Angeles and potential celebrity sightings befitting LA's star power.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">By Metro & Free Shuttle (Best Option)</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-4">The most reliable way to reach SoFi is via Metro and the free SoFi Stadium Shuttle:</p>
                  <ol className="list-decimal pl-6 text-slate-700 dark:text-slate-200 space-y-2">
                    <li>Take the <strong>Metro C Line (Green)</strong> or <strong>K Line (Crenshaw/LAX)</strong> to <strong>LAX/Metro Transit Center Station</strong></li>
                    <li>Transfer to the <strong>free SoFi Stadium Shuttle</strong> at Bus Bay 8</li>
                    <li>Shuttles run every 3-5 minutes starting three hours before kickoff</li>
                    <li>Journey time: 5-10 minutes from LAX/Metro Transit Center to stadium</li>
                    <li>Return shuttles begin running near the end of matches and continue for 90 minutes post-game</li>
                  </ol>
                  <p className="text-slate-700 dark:text-slate-200 mt-4"><strong>Total journey time from Downtown LA:</strong> 45-60 minutes</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>From LAX Airport:</strong> 20-25 minutes</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Cost:</strong> $1.75 one-way Metro fare (free transfers for 2 hours); shuttle is free</p>
                  <p className="text-slate-700 dark:text-slate-200 mt-2"><strong>Pro tip:</strong> Load your TAP card in advance to avoid long queues after matches. Parking at Metro stations along the C and K Lines is available (some free, others $3 daily fee).</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">By Bus</h3>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">GTrans Line 7X Stadium Express (Sundays and select events):</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li>Departs from Harbor Gateway Transit Center (Bay 3)</li>
                    <li>Service every 30 minutes starting 8:30am</li>
                    <li><strong>Cost:</strong> $4 roundtrip (TAP card or cash)</li>
                    <li>Drop-off: Shuttle Lot on Arbor Vitae Street/S. Prairie Avenue</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Torrance Transit Line 10X:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li>Departs from Mary K. Giordano Regional Transit Center (465 Crenshaw Blvd)</li>
                    <li>First bus leaves 3 hours before kickoff</li>
                    <li><strong>Cost:</strong> $2 each way (TAP card)</li>
                    <li>Free parking at transit center (limited to 250 spaces)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">By Car & Parking</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>On-Site Parking:</strong> Extremely limited and requires advance purchase. Parking passes range from $50-$100+ depending on zone. Lots close one hour after matches end.</p>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Parking Zones:</strong> Hyundai Pink, Orange, Brown, Purple (color-coded passes required)</p>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Entry:</strong> Follow color-coded signage; use Waze/Google Maps and search "SoFi Stadium Parking [Your Zone]"</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Inglewood Park & Go (Recommended):</strong> Remote parking with shuttle service. Book in advance at inglewoodparkandgo.com. Drive-up rates are significantly higher than online pre-booking.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">By Rideshare/Taxi</h3>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li><strong>Drop-off/Pick-up Location:</strong> Kareem Court (access via westbound Pincay Drive)</li>
                    <li><strong>Peak Pricing Warning:</strong> Expect surge pricing of 2x-3x normal rates immediately post-match</li>
                    <li><strong>Alternative:</strong> Walk 10-15 minutes away from the stadium to avoid surcharges</li>
                    <li><strong>Yellow Cab Quick Code:</strong> "SOFI" for expedited pick-ups</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Walking/Biking</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2">Not recommended for most visitors due to limited pedestrian infrastructure and freeway proximity. Bike parking is available in designated areas around the perimeter.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>From Downtown Inglewood Station (Metro K Line):</strong> 1.5 miles, approximately 30-minute walk—viable option if shuttles are packed</p>
                </div>
              </div>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
                Where to Stay
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Walking Distance (&lt; 1 mile)</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>The Lum Hotel Los Angeles Stadium District</strong> – The only hotel within easy walking distance (0.6 miles). Modern rooms, rooftop bar at Cork &amp; Batter, outdoor pool. Connected to the Hollywood Park development. Expect premium pricing during World Cup.</p>
                  <p className="text-slate-700 dark:text-slate-200">👉 <em>Book via Booking.com or Hotels.com for best rates</em></p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Near SoFi &amp; LAX (1-3 miles)</h3>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Budget (Under $150/night):</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li><strong>Hollywood Park Motel</strong> – Basic but clean, 10-minute walk to stadium</li>
                    <li><strong>Best Western Airpark Hotel - LAX</strong> – Free breakfast, shuttle to LAX, 1.7 miles from SoFi</li>
                    <li><strong>Holiday Inn Express LAX</strong> – Reliable chain, free breakfast, pool</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Mid-Range ($150-$300/night):</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li><strong>Hampton Inn Los Angeles Int'l Airport/Hawthorne</strong> – Free breakfast, indoor pool, 1.7 miles</li>
                    <li><strong>Sonesta Los Angeles Airport LAX</strong> – Free airport shuttle, 3 miles from SoFi, modern amenities</li>
                    <li><strong>Hilton Los Angeles Airport</strong> – Full-service hotel, outdoor pool, 2.4 miles</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">Luxury ($300+/night):</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li><strong>Sheraton Gateway Los Angeles Hotel</strong> – Business-class amenities, excellent service, 3 miles</li>
                    <li><strong>Hyatt Regency LAX</strong> – Rooftop pool, upscale dining, convenient for airport arrivals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Alternative Neighborhoods (Easier LAX/Nightlife Access)</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Manhattan Beach</strong> (6 miles south): Beach town vibe with excellent restaurants, bars, and ocean views. Easy drive or Uber to SoFi.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Santa Monica/Venice Beach</strong> (10 miles west): Classic LA beach experience. Take Metro C Line toward Inglewood for games.</p>
                </div>

                {/* Additional Areas & Booking Advice */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Additional Areas &amp; Booking Advice</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Downtown Los Angeles</strong> (9 miles northeast): Urban energy, nightlife, cultural attractions. Metro A Line connects to C Line for SoFi access.</p>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Airbnb/VRBO Options:</strong> Inglewood and surrounding areas offer entire homes and apartments. Look in Westchester, El Segundo, and Hawthorne for proximity.</p>
                  <p className="text-slate-700 dark:text-slate-200">👉 <em>Book accommodation early—World Cup will cause unprecedented demand. Use Booking.com, Expedia, or Airbnb with flexible cancellation policies.</em></p>
                </div>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Matchday Tips &amp; Insider Advice
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Arrival Strategy</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-4"><strong>Arrive 2.5-3 hours early</strong> for World Cup matches. Security screening is advanced (Evolv AI scanners allow you to walk through with items in pockets), but crowd volume for high-profile matches will be massive. Use early arrival time to:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li>Explore American Airlines Plaza (outdoor pedestrian area under the canopy)</li>
                    <li>Grab food/drinks before crowds descend on concessions</li>
                    <li>Soak in pre-match atmosphere and fan zones</li>
                    <li>Take photos with the stadium as backdrop</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200 mt-4"><strong>Best Entry Gates:</strong><br/>Check your ticket for your designated gate (1-8). Gates on the south and east sides (5-7) typically have shorter lines. VIP ticket holders use separate priority entrances.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Clear Bag Policy (Critical!)</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2">SoFi enforces the <strong>NFL Clear Bag Policy</strong> strictly:</p>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Permitted:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li>Clear plastic/PVC/vinyl bags up to 12" x 6" x 12"</li>
                    <li>One-gallon clear freezer bags (Ziploc-style)</li>
                    <li>Small clutch purses (4.5" x 6.5") with or without strap</li>
                    <li>Clear backpacks/fanny packs (must be fully transparent)</li>
                  </ul>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Prohibited:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li>Non-clear bags, backpacks, diaper bags (unless medically necessary and clear)</li>
                    <li>Hard-sided coolers, briefcases, camera bags</li>
                    <li>Luggage of any kind</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Bag Valet:</strong> Non-compliant bags can be checked at bag valet stations (SW, NW, NE, SE corners of exterior perimeter) for a nominal fee (~$10). SoFi cardholders get free bag check.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">What to Bring</h3>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Must-Haves:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li>Mobile ticket on phone (add to mobile wallet before arrival)</li>
                    <li>Sunscreen and hat (California sun is intense; UV protection despite roof)</li>
                    <li>Lightweight jacket or sweater (evening matches can cool down)</li>
                    <li>Empty reusable water bottle (20 oz max, non-metal)—refill at water stations</li>
                    <li>Portable phone charger</li>
                    <li>Valid ID (alcohol purchases, security)</li>
                  </ul>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">What NOT to Bring:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li>Outside food/beverages (except medically necessary items or factory-sealed water bottles 20 oz or less)</li>
                    <li>Glass/metal containers</li>
                    <li>Weapons, noise-makers, laser pointers</li>
                    <li>Professional camera equipment (lenses over 6 inches)</li>
                    <li>Strollers (not permitted inside)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Food &amp; Drink Inside</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-4">SoFi has revolutionized stadium dining with <strong>LA-themed food hubs</strong> named after famous streets:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li><strong>LA Street Dog:</strong> Bacon-wrapped hot dogs with caramelized onions and jalapeño aioli</li>
                    <li><strong>Grab &amp; Go Markets:</strong> Quick snacks, sandwiches, drinks (multiple locations on all levels)</li>
                    <li><strong>Uber Eats at SoFi:</strong> Order ahead via app and pick up at designated stations (Sections 200, 300, 400/500)—skip concession lines!</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Price Reality:</strong> Expect $15-20 for entrees, $12-16 for beers, $6-8 for soft drinks. It's stadium pricing, but quality is above average.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Pro Tip:</strong> Eat a substantial meal before arriving or use Uber Eats order-ahead to maximize game-watching time.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Cashless Venue:</strong> All transactions by credit/debit card or mobile pay (Apple Pay, Google Pay). No cash accepted anywhere.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Post-Match Transport</h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Don't rush the exits immediately.</strong> Let crowds thin for 15-20 minutes while soaking in post-match atmosphere on American Airlines Plaza or in club areas (if accessible).</p>
                  <p className="text-slate-700 dark:text-slate-200 mb-2"><strong>Metro Shuttle:</strong> Expect 20-30 minute waits for shuttles during peak exodus. Walk to LAX/Metro Transit Center (1.5 miles, 25 minutes) if you're able—you'll likely board a train faster than waiting for shuttle.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Rideshare Strategy:</strong> Walk away from the stadium (north on Prairie Ave or west on Century Blvd) to avoid surge pricing dead zones. Prices can triple immediately outside; a 10-minute walk can save $30-50.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">What NOT to Do</h3>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li>Don't bring non-compliant bags (you'll be turned away or forced to pay for bag valet)</li>
                    <li>Don't rely on on-site parking without advance passes</li>
                    <li>Don't expect to buy tickets at the box office (World Cup = digital tickets only)</li>
                    <li>Don't smoke/vape anywhere inside or in American Airlines Plaza (designated areas outside perimeter only)</li>
                    <li>Don't forget sunscreen for day matches—the translucent roof lets UV through despite shade</li>
                  </ul>
                </div>
                
              </div>
            </div>

            {/* Things to Do Nearby */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Things to Do Nearby
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Pre-Match Food &amp; Drinks (&lt; 30 minutes)</h3>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Downtown Inglewood (2 miles):</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 mb-4 space-y-1">
                    <li><strong>Dulan's Soul Food Kitchen</strong> – Legendary fried chicken, mac &amp; cheese, collard greens. LA soul food institution.</li>
                    <li><strong>Banadir Somali Restaurant</strong> – Unique East African cuisine praised by Issa Rae. Rice platters with lamb, goat, or fish.</li>
                    <li><strong>Cork &amp; Batter</strong> – Three-level sports bar/restaurant with rooftop views across from Hollywood Park Casino. Perfect pre-game spot.</li>
                  </ul>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Near Stadium:</p>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li><strong>Randy's Donuts</strong> (Market Street) – Iconic LA landmark with the giant rooftop donut. Featured in <em>Iron Man</em>, <em>Wayne's World</em>. Grab fresh donuts for breakfast.</li>
                    <li><strong>The Nile Sports Bar</strong> – Local sports bar within blocks of SoFi. Happy hour specials.</li>
                    <li><strong>Fiesta Martin Bar &amp; Grill</strong> – Best Mexican food in Inglewood. Guadalajaran specialties.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Nearby Attractions (&lt; 30 minutes)</h3>
                  <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200 space-y-1">
                    <li><strong>Hollywood Park Casino</strong> (walking distance) – Card games, table games, entertainment. Open late for post-match unwinding.</li>
                    <li><strong>Kia Forum</strong> (0.7 miles) – Historic music venue (formerly The Forum) hosting concerts and comedy. Prince's legendary 21-show run was here.</li>
                    <li><strong>YouTube Theater</strong> (walking distance under SoFi canopy) – 6,000-seat performance venue. Check if any shows coincide with your World Cup visit.</li>
                    <li><strong>Kenneth Hahn State Recreation Area</strong> (3 miles) – 401-acre park with 7+ miles of trails, fishing pond, Japanese garden. Perfect for outdoor downtime.</li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Randy's Donuts / Dockweiler State Beach</strong> (4-6 miles) – Combine donut stop with beach relaxation in Playa del Rey.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>California Science Center & Natural History Museum</strong> (8 miles, near USC) – World-class museums with Space Shuttle Endeavour. Great for families.</p>
                  <p className="text-slate-700 dark:text-slate-200"><strong>Venice Beach & Santa Monica Pier</strong> (10 miles west) – Classic SoCal beach experience. Street performers, muscle beach, pier attractions.</p>
                </div>
              </div>
            </div>

            {/* Post-Match Celebration Areas */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mt-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-map-2-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Post-Match Celebration Areas
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
                <p className="text-slate-700 dark:text-slate-200"><strong>Downtown Inglewood</strong> – Market Street has bars, restaurants, local breweries like <strong>Three Weavers Brewing Company</strong>.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>Manhattan Beach</strong> (6 miles) – Upscale beach town with excellent bar/restaurant scene on Manhattan Beach Blvd.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>Santa Monica</strong> – Third Street Promenade and Main Street packed with bars, restaurants, live music.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>Downtown LA</strong> (9 miles) – Full urban nightlife: rooftop bars, clubs, live music venues, late-night eats.</p>
                <div className="mt-4 rounded-lg border border-amber-300/40 bg-amber-50 p-4 text-amber-900 dark:border-amber-600/40 dark:bg-amber-900/20 dark:text-amber-200">
                  👉 <em>Book tours and activities via Viator or GetYourGuide for discounted World Cup packages, including stadium tours (when available between matches), Hollywood tours, and beach activities.</em>
                </div>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mt-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
                <i className="ri-award-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
                <p className="text-slate-700 dark:text-slate-200">SoFi Stadium isn't just a World Cup venue—it's a $5 billion statement about the future of live sports. From the moment you descend into the seating bowl 100 feet below ground, to the first time you gaze up at the hovering Infinity Screen, to the way California sunshine filters through the translucent roof, you'll understand why this is considered one of the world's most remarkable stadiums.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>Who will love it most?</strong> Tech-forward fans who appreciate architectural innovation, NFL supporters experiencing World Cup atmosphere for the first time, and anyone seeking a quintessentially LA blend of sports, entertainment, and spectacle. If you crave intimacy over opulence, consider other venues—but for sheer "wow factor," SoFi delivers.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>The one unforgettable thing you shouldn't miss?</strong> Arrive early, walk through American Airlines Plaza as the sun sets, and watch the LED-embedded roof come alive with animations visible from aircraft overhead. It's the closest thing to attending a match inside a spacecraft.</p>
                <p className="text-slate-700 dark:text-slate-200"><strong>World Cup 2026 will sell out fast.</strong> Book your accommodation through trusted platforms like `https://www.booking.com` , `https://www.expedia.com` , or `https://www.airbnb.com`  now—Inglewood and LAX-area hotels will reach capacity months in advance. Pre-arrange transport (whether Metro TAP cards or parking passes) to avoid matchday stress. This is a once-in-a-lifetime tournament on American soil.</p>
                <p className="text-slate-900 dark:text-slate-100 font-semibold">Los Angeles Stadium awaits. Book early. Arrive ready. Experience history.</p>
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