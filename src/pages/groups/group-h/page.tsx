import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, Music, Sun } from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupHPage() {
  return (
    <>
      <Helmet>
        <title>Group H World Cup 2026: Host Cities, Schedule & Travel Guide | Stadiumport</title>
        <meta name="description" content="The complete travel guide for World Cup 2026 Group H. Experience the Southern Heat: Atlanta, Miami, Houston, and Guadalajara. Culture, nightlife, and football passion." />
        <meta name="keywords" content="Group H World Cup 2026, Atlanta World Cup, Miami World Cup, Houston World Cup, Guadalajara World Cup, Southern US Travel, Mexico Travel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group H World Cup 2026 Travel Guide",
            "name": "Group H World Cup 2026 Travel Guide",
            "description": "The complete travel guide for World Cup 2026 Group H. Experience the Southern Heat: Atlanta, Miami, Houston, and Guadalajara.",
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
              "@id": "https://stadiumport.com/groups/group-h"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-red-500/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535202435489-d82d072e3105?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-fuchsia-500/20 text-fuchsia-400 text-sm font-bold mb-6 border border-fuchsia-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
              GROUP H GUIDE
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              The Southern <br className="hidden md:block" />
              Heat
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
              A vibrant journey through culture, rhythm, and passion. From the hip-hop capital of Atlanta to the Latin soul of Miami and Guadalajara.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-5xl mx-auto px-6 -mt-20">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-fuchsia-400 mb-2"><MapPin className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Region</div>
              <div className="text-xl font-bold">South & Mexico</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-fuchsia-400 mb-2"><Plane className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Travel Mode</div>
              <div className="text-xl font-bold">Major Flight Hubs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <div className="text-fuchsia-400 mb-2"><Thermometer className="w-6 h-6" /></div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-medium mb-1">Climate</div>
              <div className="text-xl font-bold">Hot & Humid</div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-6">
                Group H is defined by its energy. These are cities that don't just host matches; they throw parties. From Atlanta's urban beat to Miami's international glamour, Houston's diversity, and Guadalajara's deep traditions, this group offers the most culturally distinct experience of the tournament.
              </p>
              <p>
                Travel here revolves around three of the world's most connected airports (ATL, MIA, IAH), making it easy to hop between cities despite the distances. Prepare for heat, humidity, and an unforgettable atmosphere.
              </p>
            </div>
          </section>

          {/* Host Cities & Stadiums */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Host Cities & Stadiums</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                  Four iconic venues across the southern United States and Mexico.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Atlanta Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Atlanta" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Atlanta</h3>
                    <p className="text-fuchsia-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Mercedes-Benz Stadium
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Home to the world's busiest airport and a stadium that redefines architecture. Stay in Midtown for easy MARTA access to the games.
                  </p>
                  <Link to="/cities/atlanta" className="inline-flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-bold hover:text-fuchsia-700 transition-colors">
                    Explore Atlanta <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Miami Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535498730771-e735b998cddb?q=80&w=2068&auto=format&fit=crop" 
                    alt="Miami" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Miami</h3>
                    <p className="text-fuchsia-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Hard Rock Stadium
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    The gateway to Latin America. Stay in Wynwood or Brickell and use the Brightline shuttle to reach the stadium in Miami Gardens.
                  </p>
                  <Link to="/cities/miami" className="inline-flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-bold hover:text-fuchsia-700 transition-colors">
                    Explore Miami <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Houston Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?q=80&w=2069&auto=format&fit=crop" 
                    alt="Houston" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Houston</h3>
                    <p className="text-fuchsia-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> NRG Stadium
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
                      USA
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    America's most diverse city. Enjoy incredible food scenes and air-conditioned comfort at NRG Stadium.
                  </p>
                  <Link to="/cities/houston" className="inline-flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-bold hover:text-fuchsia-700 transition-colors">
                    Explore Houston <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Guadalajara Card */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584464430617-1c7f3d619c77?q=80&w=2070&auto=format&fit=crop" 
                    alt="Guadalajara" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">Guadalajara</h3>
                    <p className="text-fuchsia-300 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Estadio Akron
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
                      Mexico
                    </span>
                    <div className="flex gap-1">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Multiple Matches</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    The birthplace of mariachi and tequila. Experience the pure passion of Mexican football in a stunning modern venue.
                  </p>
                  <Link to="/cities/guadalajara" className="inline-flex items-center text-fuchsia-600 dark:text-fuchsia-400 font-bold hover:text-fuchsia-700 transition-colors">
                    Explore Guadalajara <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Transport Guide */}
          <section className="mb-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transport: The Air Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5" /> Hub-to-Hub Travel
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    This group covers significant distance, but benefits from world-class connectivity. Atlanta (ATL) and Houston (IAH) are major global hubs.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>ATL to MIA: ~2 hours (Frequent flights)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>MIA to IAH: ~2.5 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>IAH to GDL: ~2.5 hours (Direct flights available)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5" /> Local Logistics
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Once on the ground, each city has its own rhythm. Atlanta has MARTA, but Miami, Houston, and Guadalajara are car-centric.
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>Atlanta: Use MARTA train to stadium</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>Miami: Brightline + Shuttle is best</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>Guadalajara: Rideshare is recommended</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Group Experience */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white">The Group Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Musical Heritage</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  From the trap capital of Atlanta to the clubs of Miami and the mariachi plazas of Guadalajara. The soundtrack to this group is legendary.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Culinary Diversity</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Soul food, Cuban sandwiches, Tex-Mex BBQ, and authentic Torta Ahogadas. This is arguably the best food group in the tournament.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Passion & Heat</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Expect intense match atmospheres and intense weather. Hydrate often and embrace the late-night culture of these cities.
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
