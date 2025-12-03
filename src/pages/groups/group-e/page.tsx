import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Info, Train, Plane, Building2, Ticket, Calendar, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupEPage() {
  return (
    <>
      <Helmet>
        <title>Group E World Cup 2026: Host Cities, Schedule & Travel Guide | Stadiumport</title>
        <meta name="description" content="The complete travel guide for World Cup 2026 Group E. Follow your team across Philadelphia, Houston, Toronto, Kansas City, and New York/New Jersey." />
        <meta name="keywords" content="Group E World Cup 2026, Philadelphia World Cup, Houston World Cup, Toronto World Cup, Kansas City World Cup, New York NJ World Cup" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group E World Cup 2026 Travel Guide",
            "name": "Group E World Cup 2026 Travel Guide",
            "description": "The complete travel guide for World Cup 2026 Group E. Follow your team across Philadelphia, Houston, Toronto, Kansas City, and New York/New Jersey.",
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
              "@id": "https://stadiumport.com/groups/group-e"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-[#01b47d]/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#01b47d]/20 text-[#01b47d] text-sm font-bold mb-6 border border-[#01b47d]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#01b47d] animate-pulse"></span>
              GROUP E GUIDE
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              The Continental <br className="hidden md:block" />
              Tour
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
              From the historic streets of Philadelphia to the vast plains of Kansas City and the energy of Houston. Group E is a true journey across North America's diverse landscapes.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-5xl mx-auto px-6 -mt-20">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><MapPin className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Regions</div>
              <div className="text-xl font-bold">East & Central</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Building2 className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Key Hub</div>
              <div className="text-xl font-bold">Philadelphia (2 Matches)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-[#01b47d] mb-2"><Plane className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Transport</div>
              <div className="text-xl font-bold">Flights Required</div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-6">
                Group E presents an exciting logistical challenge and a rewarding travel experience. Unlike the tightly clustered regional groups, Group E spans the Eastern Seaboard (Philadelphia, New York/New Jersey) and the Central United States (Houston, Kansas City), with a stop in Toronto.
              </p>
              <p>
                Fans following this group will experience the full spectrum of North American culture: the colonial history of Philadelphia, the cosmopolitan flair of Toronto, the BBQ and jazz of Kansas City, the space-age ambition of Houston, and the global stage of New York. Be prepared to fly—this is a group for the true explorer.
              </p>
            </div>
          </section>

          {/* Host Cities & Stadiums */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Host Cities & Stadiums</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                  Five distinct cities hosting Group E matches. Each offers a unique atmosphere and world-class venue.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              
              {/* Philadelphia Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1516533075015-a3838414c3ca?q=80&w=2070&auto=format&fit=crop" 
                      alt="Philadelphia" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Philadelphia</h3>
                      <p className="text-[#01b47d]/20 font-medium">Host of 2 Group Matches</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">Lincoln Financial Field</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">69,796</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      The "Linc" is famous for its intense atmosphere. Located in the South Philadelphia Sports Complex, it's easily accessible and surrounded by fan culture.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Center City for history & food.</span>
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
                      A massive retractable-roof stadium known for its loud acoustics. Houston offers incredible diversity and world-class culinary experiences.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Downtown or near the Galleria.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toronto Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507992781348-310259076fe0?q=80&w=2070&auto=format&fit=crop" 
                      alt="Toronto" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Toronto</h3>
                      <p className="text-[#01b47d]/20 font-medium">Canada's Downtown</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">BMO Field</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">45,736</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      A stunning waterfront venue with skyline views. Toronto is one of the most multicultural cities in the world, offering an incredible fan atmosphere.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Liberty Village or Entertainment District.</span>
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
                      The loudest outdoor stadium in the world. Kansas City is famous for its BBQ and hospitality. A true American heartland experience.
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

              {/* New York / New Jersey Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=2070&auto=format&fit=crop" 
                      alt="New York City" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">New York / NJ</h3>
                      <p className="text-[#01b47d]/20 font-medium">The World's Stage</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Stadium</p>
                        <p className="font-bold text-[#01b47d] dark:text-[#01b47d] text-xl">MetLife Stadium</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">Capacity</p>
                        <p className="text-slate-700 dark:text-slate-300 text-xl">82,500</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      Hosting the World Cup Final and key group matches. A massive venue in New Jersey, best accessed from Manhattan via train.
                    </p>
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#01b47d] mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-sm">Where to Stay</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">Midtown Manhattan.</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">The Group E Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Culinary Diversity</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  From Philly cheesesteaks and KC barbecue to Houston's Tex-Mex and Toronto's global fusion. This group is a food lover's dream tour.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Ticket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Massive Venues</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Group E features some of the largest stadiums in the tournament, including the 82,500-seat MetLife Stadium and the 76,000-seat Arrowhead.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-full flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diverse Cultures</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Experience the distinct cultures of the East Coast, the Midwest, the South, and Canada—all in one group stage.
                </p>
              </div>
            </div>
          </section>

          {/* Transport Guide */}
          <section className="mb-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2184&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transport & Mobility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5" /> Air Travel is Essential
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Due to the distances between cities (e.g., Philadelphia to Houston is ~1,500 miles), flying is the only practical option for following your team. Book flights early.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>PHL to IAH (Houston): ~3.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>IAH to YYZ (Toronto): ~3.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>YYZ to MCI (Kansas City): ~3 hours (connection likely)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#01b47d] mb-4 flex items-center gap-2">
                    <Train className="w-5 h-5" /> Regional Rail Options
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    For the Eastern leg (Philadelphia and New York/NJ), Amtrak is excellent.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>Philly to NYC: 1h 15m via Amtrak Acela</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#01b47d] rounded-full"></span>NYC to Newark Airport (EWR): 30 mins via NJ Transit</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready for the Journey?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Group E offers a cross-continental adventure. Secure your accommodations early, especially in host cities on match days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/accommodation" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#01b47d] border border-transparent rounded-full hover:bg-[#008f63] hover:shadow-lg hover:-translate-y-1">
                Find Hotels
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/flights" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#01b47d] transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-700 dark:text-[#01b47d] dark:hover:bg-slate-800">
                Check Flights
              </Link>
            </div>
          </section>
        </main>
          <Footer />
      </div>
    </>
  );
}
