import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, Music, Sun } from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupFPage() {
  return (
    <>
      <Helmet>
        <title>Group F World Cup 2026: Host Cities, Schedule & Travel Guide | Stadiumport</title>
        <meta name="description" content="The complete travel guide for World Cup 2026 Group F. Explore the Tex-Mex Corridor: Monterrey, Dallas, Houston, and Kansas City via the I-35 route." />
        <meta name="keywords" content="Group F World Cup 2026, Monterrey World Cup, Dallas World Cup, Houston World Cup, Kansas City World Cup, I-35 Road Trip" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group F World Cup 2026 Travel Guide",
            "name": "Group F World Cup 2026 Travel Guide",
            "description": "The complete travel guide for World Cup 2026 Group F. Explore the Tex-Mex Corridor: Monterrey, Dallas, Houston, and Kansas City via the I-35 route.",
            "author": {
              "@type": "Organization",
              "name": "Stadiumport"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stadiumport",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stadiumport.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://stadiumport.com/groups/group-f"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-[#01b47d]/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531218150217-545e9da31e4e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#01b47d]/20 text-[#01b47d] text-sm font-bold mb-6 border border-[#01b47d]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#01b47d] animate-pulse"></span>
              GROUP F GUIDE
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              The Tex-Mex <br className="hidden md:block" />
              Corridor
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
              A journey through the heart of North America. From the mountains of Monterrey to the plains of Kansas City, connected by a single legendary highway.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-5xl mx-auto px-6 -mt-20">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><MapPin className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Region</div>
              <div className="text-xl font-bold">Central & South</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Car className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Connectivity</div>
              <div className="text-xl font-bold">I-35 Highway Route</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Flame className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Experience</div>
              <div className="text-xl font-bold">Heat & BBQ</div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-6">
                Group F is unique in the tournament. It is the only group where a true road trip is not just possible, but recommended. Three of the four host cities (Monterrey, Dallas, Kansas City) lie directly on the I-35 corridor, with Houston just a short detour away.
              </p>
              <p>
                This is a route defined by intense passion, intense heat, and incredible food. Fans will experience the dramatic mountains of Northern Mexico, the cosmopolitan energy of Texas, and the jazz-infused hospitality of the Midwest.
              </p>
            </div>
          </section>

          {/* Host Cities & Stadiums */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Host Cities & Stadiums</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                  Four cities, two countries, one unforgettable route.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              
              {/* Monterrey Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop" 
                      alt="Monterrey" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Monterrey</h3>
                      <p className="text-[#01b47d]/20 font-medium">City of Mountains</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">Estadio BBVA</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">53,500</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      Known as "The Steel Giant," this stadium offers one of the most breathtaking views in world football, with Saddle Mountain as a backdrop.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">San Pedro Garza García.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dallas Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1545153996-945845c0431d?q=80&w=2070&auto=format&fit=crop" 
                      alt="Dallas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Dallas</h3>
                      <p className="text-[#01b47d]/20 font-medium">The Big D</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">AT&T Stadium</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">80,000+</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      Located in Arlington. A coliseum of modern sports with the world's most famous video board. Expect massive crowds and spectacle.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Uptown Dallas or near the stadium in Arlington.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Houston Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?q=80&w=2069&auto=format&fit=crop" 
                      alt="Houston" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Houston</h3>
                      <p className="text-[#01b47d]/20 font-medium">Space City</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">NRG Stadium</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">72,220</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      A diverse, sprawling metropolis known for its culinary scene. NRG Stadium is a retractable-roof fortress that gets incredibly loud.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Galleria or Downtown.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kansas City Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618592028206-9c220456a078?q=80&w=2070&auto=format&fit=crop" 
                      alt="Kansas City" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Kansas City</h3>
                      <p className="text-[#01b47d]/20 font-medium">Heart of America</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">Arrowhead Stadium</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">76,416</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      The northern anchor of the group. Famous for the loudest outdoor stadium in the world and the best BBQ on the planet.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Power & Light District.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Group Experience */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">The Group F Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Culinary Heaven</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  This is the "Foodie Group." Monterrey's cabrito, Texas brisket, Tex-Mex tacos, and Kansas City burnt ends. Come hungry.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Summer Heat</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  It will be hot. Temperatures often exceed 100°F (38°C). Fortunately, Monterrey, Dallas, and Houston all have high-tech stadiums.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">The Road Trip</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The only group where renting a car makes sense. The drive from Dallas to KC is iconic, passing through the American heartland.
                </p>
              </div>
            </div>
          </section>

          {/* Transport Guide */}
          <section className="mb-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transport: The I-35 Route</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5" /> Driving Times
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Interstate 35 is the backbone of this group. It's a straight shot north from the border to Kansas.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Dallas to Houston: ~3.5 hours (I-45)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Dallas to Kansas City: ~8 hours (I-35)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Ticket className="w-5 h-5" /> Border Crossing
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    For Monterrey, we recommend flying to avoid border delays. Flights to Dallas/Houston are short and frequent.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>MTY to IAH/DFW: ~1.5 hour flight</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Visa required for US & Mexico entry</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Official Schedule */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white">Official Schedule</h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="p-6 text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">Match</th>
                      <th className="p-6 text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">City</th>
                      <th className="p-6 text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">Venue</th>
                      <th className="p-6 text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">Fixture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 11</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Monterrey</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Estadio BBVA</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F1 vs F2</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 12</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Houston</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">NRG Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F3 vs F4</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 35</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Monterrey</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Estadio BBVA</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F4 vs F2</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 36</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Houston</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">NRG Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F1 vs F3</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 57</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Dallas</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">AT&T Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F4 vs F1</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 58</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Kansas City</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Arrowhead Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">F2 vs F3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-24 text-center">
            <Link 
              to="/tickets" 
              className="inline-flex items-center gap-3 bg-[#01b47d] hover:bg-[#008f63] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-[#01b47d]/20"
            >
              <Ticket className="w-5 h-5" />
              Find Tickets for Group F
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

        </main>
          <Footer />
      </div>
    </>
  );
}
