import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, Info, ArrowRight, Plane, Utensils, Ticket, Sun, Music, Wind, Building2, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

const GroupJPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white">
      <Helmet>
        <title>Group J World Cup 2026: Kansas City, Dallas & San Francisco | Stadiumport</title>
        <meta name="description" content="The complete guide to Group J. Experience the loudest stadium in the world in Kansas City, the grandeur of Dallas, and the innovation of San Francisco." />
        <meta name="keywords" content="Group J World Cup 2026, Kansas City host city, Dallas World Cup, San Francisco Bay Area World Cup, Arrowhead Stadium, AT&T Stadium, Levi's Stadium" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group J World Cup 2026 Travel Guide",
            "description": "The complete guide to Group J. Experience the loudest stadium in the world in Kansas City, the grandeur of Dallas, and the innovation of San Francisco.",
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
              "@id": "https://stadiumport.com/groups/group-j"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-6 border border-amber-500/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            GROUP J GUIDE
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
            The American <br className="hidden md:block" />
            Frontier
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
            A journey of scale and sound. From the loudest stadium in the world in the Midwest to the tech capital of the West Coast.
          </p>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <div className="relative z-10 max-w-5xl mx-auto -mt-12 px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-amber-400">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Host Cities</span>
            </div>
            <div className="text-2xl font-semibold text-white">Kansas City • Dallas • San Francisco</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-amber-400">
              <Ticket className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Key Venues</span>
            </div>
            <div className="text-2xl font-semibold text-white">Arrowhead • AT&T • Levi's</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-amber-400">
              <Plane className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Travel Focus</span>
            </div>
            <div className="text-2xl font-semibold text-white">Midwest & West Coast</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        
        {/* Overview */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Group Experience</h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="lead text-xl md:text-2xl text-slate-800 font-light mb-8">
              Group J offers a definitive American experience, spanning the vast central plains to the Pacific Ocean. This is a group defined by impressive infrastructure, passionate local fanbases, and diverse cultural landscapes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-amber-500" />
                  Heartland & Heritage
                </h3>
                <p>
                  Kansas City and Dallas represent the heart of American sports culture. Expect massive tailgates, world-class barbecue, and stadiums that are cathedrals to the sport. The atmosphere here is raw, loud, and incredibly welcoming.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-amber-500" />
                  West Coast Innovation
                </h3>
                <p>
                  San Francisco brings a different energy—sophisticated, coastal, and tech-forward. Levi's Stadium offers a modern, high-tech spectator experience in the heart of Silicon Valley, surrounded by California's famous wine country.
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
            {/* Kansas City */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1636467050623-3b22c874d451?q=80&w=2070&auto=format&fit=crop" 
                    alt="Kansas City" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    Missouri / Kansas
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Kansas City</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Home to the "loudest stadium in the world" (Arrowhead). KC is a hidden gem of fountains, jazz, and the undisputed capital of American barbecue.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">Arrowhead Stadium</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">76,416</div>
                    </div>
                  </div>
                  <Link to="/cities/kansas-city" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:translate-x-1 duration-300">
                    Explore Kansas City Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Dallas */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1545195276-595d94c09093?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dallas" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    Texas
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Dallas</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A city that does everything big. AT&T Stadium is a marvel of engineering. Beyond the game, explore the Arts District and the legendary Deep Ellum music scene.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">AT&T Stadium</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">92,967</div>
                    </div>
                  </div>
                  <Link to="/cities/dallas" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:translate-x-1 duration-300">
                    Explore Dallas Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* San Francisco */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2089&auto=format&fit=crop" 
                    alt="San Francisco" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    California
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">San Francisco Bay</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The cultural jewel of the West Coast. From the Golden Gate Bridge to Napa Valley vineyards, the Bay Area offers a sophisticated backdrop to the tournament.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">Levi's Stadium</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">68,500</div>
                    </div>
                  </div>
                  <Link to="/cities/san-francisco" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:translate-x-1 duration-300">
                    Explore San Francisco Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
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
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic Flying</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Distances in Group J are substantial. Kansas City to San Francisco is a 4-hour flight. Dallas is the central hub (American Airlines) connecting both.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Primary Hubs</div>
                      <div className="text-sm text-slate-600">DFW (Dallas), SFO (San Francisco), MCI (Kansas City)</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Flight Times</div>
                      <div className="text-sm text-slate-600">DAL-SFO: ~4h | KC-DAL: ~1.5h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Where to Stay</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-900">Kansas City:</strong> Stay near Power & Light District for nightlife and streetcar access.<br/>
                    <strong className="text-slate-900">Dallas:</strong> Uptown or Downtown for walkability; Arlington is car-dependent.<br/>
                    <strong className="text-slate-900">San Francisco:</strong> Union Square or Embarcadero for city vibes; Santa Clara is 45 mins south.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Local Flavor</h2>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-400" />
                Culinary Highlights
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-amber-500/50">01</span>
                  <div>
                    <strong className="block text-lg text-amber-400 mb-1">KC BBQ</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Burnt ends and ribs. Visit Joe's Kansas City or Arthur Bryant's for the real deal.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-amber-500/50">02</span>
                  <div>
                    <strong className="block text-lg text-amber-400 mb-1">Tex-Mex</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Dallas is famous for it. Try brisket tacos and authentic margaritas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-amber-500/50">03</span>
                  <div>
                    <strong className="block text-lg text-amber-400 mb-1">Mission Burritos</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">San Francisco's staple. Massive, flavorful, and perfect for matchday fuel.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for the Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Group J spans some of the most exciting cities in the US. Start planning your itinerary now to secure the best flights and hotels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planning" className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg">
                Start Planning Trip
              </Link>
              <Link to="/tickets" className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-bold rounded-full hover:bg-amber-800 transition-all shadow-lg border border-amber-600">
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

export default GroupJPage;
