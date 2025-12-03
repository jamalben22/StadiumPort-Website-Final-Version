import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, Music, Sun } from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupCPage() {
  return (
    <>
      <Helmet>
        <title>Group C World Cup 2026 Travel Guide – Boston, NYC, Philadelphia, Atlanta & Miami | Stadiumport</title>
        <meta name="description" content="Experience the full Group C travel guide for the 2026 FIFA World Cup. Explore host cities, stadiums, where to stay, transport routes, and expert logistics across Boston, New York/New Jersey, Philadelphia, Atlanta, and Miami." />
        <meta name="keywords" content="Group C World Cup 2026 travel, East Coast World Cup 2026 travel, Boston World Cup travel guide, New York World Cup 2026 travel, Philadelphia World Cup travel, Atlanta World Cup travel guide, Miami World Cup travel, MetLife Stadium World Cup Final travel, Mercedes-Benz Stadium World Cup travel" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]">
        <main className="pt-28 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/40 text-[#008f63] dark:text-[#01b47d] font-bold border border-[#01b47d]/20 dark:border-[#008f63]">
              ✅ GROUP C GUIDE
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-400 italic">
              The Atlantic Coast Route
            </p>
          </div>

          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
              The Atlantic Coast Route
            </h1>
            <div className="space-y-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>Historic cities, mega-stadiums, and tropical energy — Group C stretches across the Eastern Seaboard like no other route in the 2026 FIFA World Cup.</strong>
              </p>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">Group C is one of the most diverse and culturally rich travel tracks of the entire tournament. Matches are split between:</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">1. The Northeast Corridor</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-3">A dense, historic band of American megacities connected by the Amtrak high-speed rail line:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>Boston</strong></li>
              <li><strong>New York / New Jersey</strong></li>
              <li><strong>Philadelphia</strong></li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">This region offers walkable downtowns, legendary food scenes, and the highest concentration of fans and media in the United States.</p>
            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3">2. The Southern Leg</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-3">A quick flight brings you to the modern, entertainment-driven cities of:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>Atlanta</strong></li>
              <li><strong>Miami</strong></li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">This southern combo blends global nightlife, tropical weather, and some of the most technologically advanced stadiums on the planet.</p>
            <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Expect massive crowds, world-class infrastructure, and nonstop travel energy.</strong> Group C is built for fans who want culture, convenience, and spectacle.</p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Host Cities & Stadiums</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Five iconic cities. Five elite venues.</p>

            <div className="space-y-10">
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Boston — “The Cradle of Liberty”</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Gillette Stadium</p>
                  <p><strong>Capacity:</strong> 65,878</p>
                  <p><strong>Location:</strong> Foxborough, MA (45 minutes from Boston)</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Boston delivers a mix of American heritage, Irish pubs, seafood markets, and spirited sports culture.</p>
                <p className="font-semibold mt-4">Where to Stay</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Back Bay</strong> — upscale, walkable, near transit</li>
                  <li><strong>Seaport District</strong> — modern, waterfront, restaurant-packed</li>
                </ul>
                <p className="font-semibold mt-4">Matchday Intelligence</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Foxborough is far from downtown — <strong>take the MBTA special event trains</strong> or official shuttles.</li>
                  <li>Stadium security is strict; arrive early.</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">New York / New Jersey — “The World Stage”</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> MetLife Stadium</p>
                  <p><strong>Capacity:</strong> 82,500</p>
                  <p><strong>Role:</strong> Host of the <strong>2026 World Cup Final</strong></p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Nothing compares to the energy of NYC — skyscrapers, global cuisine, endless nightlife, and the biggest media presence on earth.</p>
                <p className="font-semibold mt-4">Where to Stay</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Midtown Manhattan</strong> — best balance of transit and attractions</li>
                </ul>
                <p className="font-semibold mt-4">Matchday Intelligence</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Direct trains from Penn Station to Secaucus Junction → shuttle to stadium</li>
                  <li>Expect the highest demand for hotels in the entire tournament</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Philadelphia — “City of Brotherly Love”</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Lincoln Financial Field</p>
                  <p><strong>Capacity:</strong> 69,796</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Historic, passionate, and food-obsessed. Philly offers some of the most loyal sports fans in the U.S.</p>
                <p className="font-semibold mt-4">Where to Stay</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Center City</strong> — central, convenient, great dining</li>
                  <li><strong>Old City</strong> — colonial history, walkable</li>
                </ul>
                <p className="font-semibold mt-4">Matchday Intelligence</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>The stadium complex is metro-connected (Broad Street Line).</li>
                  <li>Tailgates here are legendary.</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Atlanta — “The Capital of the South”</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Mercedes-Benz Stadium</p>
                  <p><strong>Capacity:</strong> 71,000</p>
                  <p><strong>Highlight:</strong> Most technologically advanced stadium in the world</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Atlanta is modern, bold, and buzzing with music culture — from trap to R&B.</p>
                <p className="font-semibold mt-4">Where to Stay</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Midtown</strong> — artsy, safe, transit-friendly</li>
                  <li><strong>Downtown</strong> — closest to the stadium</li>
                </ul>
                <p className="font-semibold mt-4">Matchday Intelligence</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>The stadium’s overhead "iris" roof and massive halo screen create an unmatched viewing experience.</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Miami — “The Magic City”</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Hard Rock Stadium</p>
                  <p><strong>Capacity:</strong> 64,767</p>
                  <p><strong>Highlights:</strong> Beaches, nightlife, Latin American energy</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">Miami blends global fashion, Caribbean culture, and some of the wildest fan atmospheres in the tournament.</p>
                <p className="font-semibold mt-4">Where to Stay</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>South Beach</strong> — iconic, lively, beach access</li>
                  <li><strong>Brickell</strong> — modern, upscale, great restaurants</li>
                </ul>
                <p className="font-semibold mt-4">Matchday Intelligence</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Hard Rock Stadium is <strong>not</strong> near the beach; plan 25–40 minutes by Uber.</li>
                  <li>Heat and humidity will be strong — hydrate well.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Group C Experience</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-3">A Cultural Highway</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">From Boston’s colonial streets to Miami’s neon-lit Latin nightlife, Group C is a full-spectrum cultural journey.</p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Musical Pilgrimage</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>Philly soul</strong></li>
              <li><strong>NYC hip-hop</strong></li>
              <li><strong>Atlanta trap</strong></li>
              <li><strong>Miami reggaeton & Latin fusion</strong></li>
            </ul>
            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">Iconic Venues</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>MetLife Stadium</strong> — Host of the Final</li>
              <li><strong>Mercedes-Benz Stadium</strong> — World-class engineering</li>
              <li><strong>Hard Rock Stadium</strong> — Entertainment capital</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">Climate Variety</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Prepare for:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Mild Northeast summer</li>
              <li>Hot, humid Southern heat</li>
              <li>Potential thunderstorms in Miami/Atlanta</li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">Pack for multiple climates.</p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transport & Mobility Guide</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Northeast Corridor (Boston → NYC → Philadelphia)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Best Way:</strong> Amtrak Acela (high-speed)</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Boston → NYC: <strong>3h 30m</strong></li>
              <li>NYC → Philadelphia: <strong>1h 15m</strong></li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">This route is faster, smoother, and more convenient than flying. Stations are in the heart of each city — no long airport transfers.</p>

            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">Southern Leg (Northeast → Atlanta → Miami)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">Flights are required.</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>NYC / Philly → Atlanta: <strong>~2.5 hours</strong></li>
              <li>Atlanta → Miami: <strong>~2 hours</strong></li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>ATL is the busiest airport in the world</strong> — flights are constant and usually well-priced.</p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Base Camps & Travel Strategy</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Best Base Camp (Overall): New York City</h3>
            <p className="text-slate-700 dark:text-slate-300">Central for the Northeast and best flight access to ATL/MIA.</p>
            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">Budget Strategy</h3>
            <p className="text-slate-700 dark:text-slate-300">Hotels in Boston and Miami spike heavily — NYC and Philly offer more value.</p>
            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">Smart Routing</h3>
            <p className="text-slate-700 dark:text-slate-300">Follow this path for minimal backtracking: <strong>Boston → NYC → Philadelphia → Atlanta → Miami</strong></p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for the East Coast Run?</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">Group C is one of the most dynamic travel loops of the World Cup — a blend of history, nightlife, megacities, and elite stadium experiences.</p>
            <p className="text-slate-700 dark:text-slate-300">Secure your accommodation and flights before demand surges.</p>
            <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">Book Your Trip</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>✔ Find Hotels in Group C Cities</strong></li>
              <li><strong>✔ Check Flights for Group C Route</strong></li>
            </ul>
          </section>
        </main>
        
        <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

        <section className="mb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore More 2026 World Cup Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Host Cities & Stadiums</h3>
                  <ul className="space-y-2">
                      <li>
                          <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Boston Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">New York / New Jersey Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Philadelphia Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Atlanta Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Miami Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Gillette Stadium Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">MetLife Stadium Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-stadiums/lincoln-financial-field-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Lincoln Financial Field Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Mercedes-Benz Stadium Guide</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Hard Rock Stadium Guide</Link>
                      </li>
                  </ul>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Tournament Planning</h3>
                  <ul className="space-y-2">
                      <li>
                          <Link to="/2026-world-cup-draw-travel-hub" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Draw Travel Hub</Link>
                      </li>
                      <li>
                          <Link to="/world-cup-2026-travel-tips" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Travel Tips Guide</Link>
                      </li>
                      <li>
                          <Link to="/2026-world-cup-group-a-travel-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Group A Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/2026-world-cup-group-b-travel-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Group B Travel Guide</Link>
                      </li>
                      <li>
                          <Link to="/groups/group-d" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Group D Travel Guide</Link>
                      </li>
                  </ul>
              </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
