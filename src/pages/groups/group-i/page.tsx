import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, Train, Info, ArrowRight, Plane, Ticket, Building2, Coffee, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupIPage() {
  return (
    <>
      <Helmet>
        <title>Group I World Cup 2026: Host Cities, Schedule & Travel Guide | Stadiumport</title>
        <meta name="description" content="The complete travel guide for World Cup 2026 Group I. Explore the Northeast Corridor: Boston, New York/New Jersey, Philadelphia, and Toronto." />
        <meta name="keywords" content="Group I World Cup 2026, Boston World Cup, New York World Cup, Philadelphia World Cup, Toronto World Cup, Northeast Travel Guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group I World Cup 2026 Travel Guide",
            "name": "Group I World Cup 2026 Travel Guide",
            "description": "The complete travel guide for World Cup 2026 Group I. Explore the Northeast Corridor: Boston, New York/New Jersey, Philadelphia, and Toronto.",
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
              "@id": "https://stadiumport.com/groups/group-i"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-violet-500/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-violet-500/20 text-violet-400 text-sm font-bold mb-6 border border-violet-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              GROUP I GUIDE
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              The Rail <br className="hidden md:block" />
              Corridor
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
              The most connected group in the tournament. From the revolutionary history of Boston and Philadelphia to the global crossroads of New York and Toronto.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-5xl mx-auto px-6 -mt-20">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-violet-400 mb-2"><MapPin className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Region</div>
              <div className="text-xl font-bold">Northeast & Canada</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-violet-400 mb-2"><Train className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Primary Transport</div>
              <div className="text-xl font-bold">Amtrak & VIA Rail</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-violet-400 mb-2"><Building2 className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Vibe</div>
              <div className="text-xl font-bold">Historic & Urban</div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-6">
                Group I is a dream for the urban explorer. Centered around the densely populated Northeast Corridor, this group features four of North America's most walkable and transit-rich cities: Boston, New York/New Jersey, Philadelphia, and Toronto.
              </p>
              <p>
                This is the only group where flying is largely optional. High-speed rail connects the US cities, while Toronto is a short flight or scenic train ride away. Fans can expect world-class museums, revolutionary history, diverse neighborhoods, and some of the most passionate sporting cultures on the continent.
              </p>
            </div>
          </section>

          {/* Host Cities & Stadiums */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Host Cities & Stadiums</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                  Historic venues and modern marvels in the heart of the East.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Boston Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505881502353-a1986add3762?q=80&w=2016&auto=format&fit=crop" 
                    alt="Boston" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Boston</h3>
                    <p className="text-violet-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Gillette Stadium
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    America's college town. Walk the Freedom Trail by day and take the commuter rail to Foxborough for the match.
                  </p>
                  <Link to="/cities/boston" className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 transition-colors">
                    Explore Boston <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* New York/NJ Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop" 
                    alt="New York City" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">New York / NJ</h3>
                    <p className="text-violet-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> MetLife Stadium
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Final Host</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    The center of the world. Stay in Manhattan or Brooklyn and take the NJ Transit train directly to the stadium gates.
                  </p>
                  <Link to="/cities/new-york-new-jersey" className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 transition-colors">
                    Explore NY/NJ <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Philadelphia Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517009572053-93fb56df73e3?q=80&w=2070&auto=format&fit=crop" 
                    alt="Philadelphia" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Philadelphia</h3>
                    <p className="text-violet-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Lincoln Financial Field
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    The birthplace of America. A passionate sports city with incredible food, history, and a stadium complex serviced by the subway.
                  </p>
                  <Link to="/cities/philadelphia" className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 transition-colors">
                    Explore Philadelphia <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Toronto Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Toronto" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Toronto</h3>
                    <p className="text-violet-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> BMO Field
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider">
                      Canada
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Canada's global city. Multicultural, safe, and vibrant. The stadium is right on the waterfront, easily accessible by GO Train or streetcar.
                  </p>
                  <Link to="/cities/toronto" className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 transition-colors">
                    Explore Toronto <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2184&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transport: The Amtrak Advantage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                    <Train className="w-5 h-5" /> The Northeast Regional
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    This is the most rail-friendly group in the World Cup. Amtrak's Northeast Regional and Acela trains connect Boston, New York, and Philadelphia with speed and comfort.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>Boston to NYC: ~3.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>NYC to Philadelphia: ~1.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>City center to city center service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5" /> Connecting to Toronto
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Toronto adds an international flair. While trains exist (The Maple Leaf), flights are often more time-efficient for the cross-border leg.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>NYC to Toronto: ~1.5 hour flight</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>Train option: 12+ hours (scenic but slow)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>Billy Bishop Airport (YTZ) is right downtown</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white">The Group Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Historic Cities</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Walk the cobblestones of Philadelphia's Old City, Boston's Beacon Hill, and see the Statue of Liberty. This group is a history lesson come to life.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Café Culture</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  From New York's bagel shops to Toronto's diverse coffee scene and Philly's reading terminal market. The street food and café culture is unmatched.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Arts & Nightlife</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Broadway shows, Toronto International Film Festival vibes, and Philadelphia's live music venues. The entertainment options are endless.
                </p>
              </div>
            </div>
          </section>

        </main>
          <Footer />
      </div>
    </>
  );
}
