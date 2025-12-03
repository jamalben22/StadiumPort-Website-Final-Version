import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, Music, Sun } from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupGPage() {
  return (
    <>
      <Helmet>
        <title>Group G World Cup 2026: Host Cities, Schedule & Travel Guide | Stadiumport</title>
        <meta name="description" content="The complete travel guide for World Cup 2026 Group G. Explore the Pacific Coast: Vancouver, Seattle, and Los Angeles. Cascadia forests to Hollywood sun." />
        <meta name="keywords" content="Group G World Cup 2026, Vancouver World Cup, Seattle World Cup, Los Angeles World Cup, Cascadia Corridor, Pacific Coast Travel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group G World Cup 2026 Travel Guide",
            "name": "Group G World Cup 2026 Travel Guide",
            "description": "The complete travel guide for World Cup 2026 Group G. Explore the Pacific Coast: Vancouver, Seattle, and Los Angeles. Cascadia forests to Hollywood sun.",
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
              "@id": "https://stadiumport.com/groups/group-g"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-[#01b47d]/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#01b47d]/20 text-[#01b47d] text-sm font-bold mb-6 border border-[#01b47d]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#01b47d] animate-pulse"></span>
              GROUP G GUIDE
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              The Pacific <br className="hidden md:block" />
              Coast
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
              From the misty rainforests of Cascadia to the golden beaches of Southern California. A journey of spectacular natural beauty and modern culture.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-5xl mx-auto px-6 -mt-20">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><MapPin className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Region</div>
              <div className="text-xl font-bold">West Coast</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Train className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Connectivity</div>
              <div className="text-xl font-bold">Cascadia Rail & Air</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Mountain className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Landscape</div>
              <div className="text-xl font-bold">Mountains to Ocean</div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-6">
                Group G offers the most dramatic scenery of the tournament. It anchors the West Coast, connecting the twin jewels of the Pacific Northwest—Vancouver and Seattle—with the entertainment capital of the world, Los Angeles.
              </p>
              <p>
                Fans will travel through the "Cascadia Corridor," a region defined by coffee, craft beer, and soccer passion, before heading south to the glitz and scale of SoFi Stadium. It's a group of stark contrasts: rain jackets and sunglasses, pine trees and palm trees.
              </p>
            </div>
          </section>

          {/* Host Cities & Stadiums */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Host Cities & Stadiums</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                  Three iconic cities defining the Western seaboard.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              
              {/* Vancouver Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=2070&auto=format&fit=crop" 
                      alt="Vancouver" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Vancouver</h3>
                      <p className="text-[#01b47d]/20 font-medium">The Glass City</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">BC Place</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">54,500</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      A stunning waterfront stadium in the heart of downtown. Known for its retractable roof and incredible atmosphere.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Yaletown or Gastown. Walk to the match.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seattle Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2070&auto=format&fit=crop" 
                      alt="Seattle" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Seattle</h3>
                      <p className="text-[#01b47d]/20 font-medium">The Emerald City</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">Lumen Field</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">69,000</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      Home of the "Sounders" and the loudest fans in America. The stadium offers skyline views and sits right in the city center.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Pioneer Square or Downtown.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Los Angeles Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2070&auto=format&fit=crop" 
                      alt="Los Angeles" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Los Angeles</h3>
                      <p className="text-[#01b47d]/20 font-medium">City of Angels</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">SoFi Stadium</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">70,240</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      The world's most expensive stadium. A futuristic palace in Inglewood that will host the USA's opening match and the World Cup Final.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Culver City or Santa Monica.</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">The Group G Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Coffee Culture</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Seattle invented modern coffee culture; Vancouver perfected it. Expect the best espresso of the tournament in these cities.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Mountain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nature's Edge</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Within 30 minutes of any stadium, you can be hiking a mountain or walking on a beach. The geography here is breathtaking.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hollywood Glamour</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Los Angeles brings the star power. Expect celebrity sightings, massive media coverage, and a true show-business atmosphere.
                </p>
              </div>
            </div>
          </section>

          {/* Transport Guide */}
          <section className="mb-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transport: The West Coast Route</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Train className="w-5 h-5" /> The Cascadia Corridor
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Traveling between Seattle and Vancouver is a highlight. The Amtrak Cascades train offers stunning coastal views.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Train: ~4 hours (Scenic route)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Drive: ~3 hours (Check border wait times)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5" /> Flying South
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    To reach Los Angeles from the north, flying is essential unless you have days to spare for a road trip.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>YVR/SEA to LAX: ~2.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Tip: Fly into Burbank (BUR) for easier access</li>
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
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 15</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Los Angeles</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">SoFi Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G1 vs G2</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 16</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Vancouver</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">BC Place</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G3 vs G4</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 39</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Los Angeles</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">SoFi Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G4 vs G2</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 40</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Vancouver</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">BC Place</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G1 vs G3</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 61</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Los Angeles</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">SoFi Stadium</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G4 vs G1</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-6 font-medium text-slate-900 dark:text-white">Match 62</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Seattle</td>
                      <td className="p-6 text-slate-600 dark:text-slate-400">Lumen Field</td>
                      <td className="p-6 text-slate-900 dark:text-white font-semibold">G2 vs G3</td>
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
              Find Tickets for Group G
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

        </main>
          <Footer />
      </div>
    </>
  );
}
