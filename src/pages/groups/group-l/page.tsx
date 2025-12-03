import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, Info, ArrowRight, Plane, Utensils, Ticket, Sun, Music, Building2, Train, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

const GroupLPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white">
      <Helmet>
        <title>Group L World Cup 2026: New York, Toronto, Boston, Philly & Dallas | Stadiumport</title>
        <meta name="description" content="The definitive guide to Group L. Experience the world's biggest cities: New York/NJ, Toronto, Philadelphia, Boston, and Dallas. Travel, tickets, and local culture." />
        <meta name="keywords" content="Group L World Cup 2026, MetLife Stadium, Toronto BMO Field, Philadelphia Lincoln Financial Field, Boston Gillette Stadium, Dallas AT&T Stadium" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group L World Cup 2026 Travel Guide",
            "description": "The definitive guide to Group L. Experience the world's biggest cities: New York/NJ, Toronto, Philadelphia, Boston, and Dallas. Travel, tickets, and local culture.",
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
              "@id": "https://stadiumport.com/groups/group-l"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#01b47d]/20 text-[#01b47d] text-sm font-bold mb-6 border border-[#01b47d]/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#01b47d] animate-pulse"></span>
            GROUP L GUIDE
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
            The Metropolitan <br className="hidden md:block" />
            Stage
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
            A tour of power and history. From the skyscrapers of New York and Toronto to the historic streets of Boston and Philadelphia, anchored by the scale of Dallas.
          </p>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <div className="relative z-10 max-w-5xl mx-auto -mt-12 px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-[#01b47d]">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">5 Host Cities</span>
            </div>
            <div className="text-lg font-semibold text-white leading-tight">New York/NJ • Toronto • Boston • Philadelphia • Dallas</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-[#01b47d]">
              <Ticket className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Key Venue</span>
            </div>
            <div className="text-2xl font-semibold text-white">MetLife Stadium</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-[#01b47d]">
              <Train className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Travel Focus</span>
            </div>
            <div className="text-2xl font-semibold text-white">Rail & Air</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        
        {/* Overview */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Group Experience</h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="lead text-xl md:text-2xl text-slate-800 font-light mb-8">
              Group L represents the highest concentration of urban energy in the tournament. It connects the "Northeast Corridor"—the economic and cultural backbone of the East Coast—with the massive infrastructure of Dallas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#01b47d]" />
                  Urban Density
                </h3>
                <p>
                  This is a group for city lovers. You'll experience the 24-hour energy of New York, the historic charm of Boston and Philly, and the multicultural vibrancy of Toronto. Public transit is excellent in the northern cities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#01b47d]" />
                  The Texas Connection
                </h3>
                <p>
                  Dallas acts as the outlier and the anchor. While the northern cities are connected by train, Dallas requires a flight. It offers a completely different scale—massive highways, huge stadiums, and big skies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Host Cities */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Host Cities</h2>
            <div className="h-px flex-1 bg-slate-200 ml-8"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            
            {/* New York / NJ */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop" 
                    alt="New York City" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    New Jersey / New York
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">New York / NJ</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The host of the World Cup Final. MetLife Stadium is just across the river from Manhattan. Experience the undisputed capital of the world.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">MetLife Stadium</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">82,500</div>
                    </div>
                  </div>
                  <Link to="/cities/new-york" className="inline-flex items-center text-[#01b47d] font-semibold hover:text-[#008f63] transition-colors group-hover:translate-x-1 duration-300">
                    Explore NY/NJ Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Toronto */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop" 
                    alt="Toronto" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    Ontario, Canada
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Toronto</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Canada's largest city and the most multicultural metropolis on Earth. BMO Field offers an intimate, European-style atmosphere on the shores of Lake Ontario.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">BMO Field</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">45,736</div>
                    </div>
                  </div>
                  <Link to="/cities/toronto" className="inline-flex items-center text-[#01b47d] font-semibold hover:text-[#008f63] transition-colors group-hover:translate-x-1 duration-300">
                    Explore Toronto Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Boston & Philly */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Boston */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Massachusetts, USA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Boston</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The cradle of the revolution. Gillette Stadium is a fortress. A walkable city with deep history and fierce sports passion.
                    </p>
                    <Link to="/cities/boston" className="inline-flex items-center text-[#01b47d] font-semibold hover:text-[#008f63] text-sm">
                        View Boston Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                {/* Philadelphia */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Pennsylvania, USA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Philadelphia</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        America's first capital. Lincoln Financial Field is intense. Famous for its passionate fans, history, and cheesesteaks.
                    </p>
                    <Link to="/cities/philadelphia" className="inline-flex items-center text-[#01b47d] font-semibold hover:text-[#008f63] text-sm">
                        View Philadelphia Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                 {/* Dallas */}
                 <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8 md:col-span-2">
                    <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Texas, USA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Dallas</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The outlier of the group in distance but not stature. AT&T Stadium is the crown jewel of NFL stadiums and brings a massive scale to the group.
                    </p>
                    <Link to="/cities/dallas" className="inline-flex items-center text-[#01b47d] font-semibold hover:text-[#008f63] text-sm">
                        View Dallas Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>

          </div>
        </section>

        {/* Travel & Logistics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Travel & Mobility</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#01b47d]/5 flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-[#01b47d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">The Rail Corridor</h3>
                  <p className="text-slate-600 leading-relaxed">
                    For the northern leg (Boston-NY-Philly), Amtrak is your best friend. The Acela Express connects downtown to downtown faster than flying when security is factored in.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Amtrak Acela</div>
                      <div className="text-sm text-slate-600">NY to Philly: 1h 15m | NY to Boston: 3h 30m</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Flying</div>
                      <div className="text-sm text-slate-600">Toronto and Dallas require flights. YYZ and DFW are major global hubs.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#01b47d]/5 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#01b47d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Where to Stay</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-900">NYC:</strong> Midtown or Lower Manhattan for transit access.<br/>
                    <strong className="text-slate-900">Toronto:</strong> Entertainment District near CN Tower.<br/>
                    <strong className="text-slate-900">Philly:</strong> Center City (Rittenhouse Square).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Local Flavor</h2>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#01b47d]" />
                Culinary Highlights
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-[#01b47d]/50">01</span>
                  <div>
                    <strong className="block text-lg text-[#01b47d] mb-1">NY Pizza</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Fold it. Eat it. Joe's Pizza in Greenwich Village is a classic.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-[#01b47d]/50">02</span>
                  <div>
                    <strong className="block text-lg text-[#01b47d] mb-1">Philly Cheesesteak</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Whiz wit. Pat's or Geno's are the tourist spots; try Dalessandro's for local love.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-[#01b47d]/50">03</span>
                  <div>
                    <strong className="block text-lg text-[#01b47d] mb-1">Peameal Bacon</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">A Toronto staple. Get a sandwich at St. Lawrence Market.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01b47d] to-[#01b47d] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Grand Tour Awaits</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Group L offers the most iconic city experiences in North America. Secure your travel and tickets early for these high-demand destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planning" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#01b47d] font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg">
                Start Planning Trip
              </Link>
              <Link to="/tickets" className="inline-flex items-center justify-center px-8 py-4 bg-[#008f63] text-white font-bold rounded-full hover:bg-[#008f63] transition-all shadow-lg border border-[#01b47d]">
                Ticket Info
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupLPage;
