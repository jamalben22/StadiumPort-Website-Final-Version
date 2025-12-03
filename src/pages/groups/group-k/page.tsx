import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, Info, ArrowRight, Plane, Utensils, Ticket, Sun, Music, Globe, Building2, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

const GroupKPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white">
      <Helmet>
        <title>Group K World Cup 2026: Mexico City, Houston, Miami, Atlanta & Guadalajara | Stadiumport</title>
        <meta name="description" content="The ultimate Pan-American travel guide for Group K. Navigate the historic Estadio Azteca, the heat of Houston and Miami, and the energy of Atlanta and Guadalajara." />
        <meta name="keywords" content="Group K World Cup 2026, Estadio Azteca tickets, Houston World Cup, Miami Hard Rock Stadium, Atlanta Mercedes-Benz Stadium, Guadalajara Akron, World Cup travel guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group K World Cup 2026 Travel Guide",
            "description": "The ultimate Pan-American travel guide for Group K. Navigate the historic Estadio Azteca, the heat of Houston and Miami, and the energy of Atlanta and Guadalajara.",
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
              "@id": "https://stadiumport.com/groups/group-k"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-rose-500/20 text-rose-400 text-sm font-bold mb-6 border border-rose-500/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
            GROUP K GUIDE
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
            The Southern <br className="hidden md:block" />
            Crossing
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
            A transcontinental journey from the historic heights of Mexico City to the coastal heat of Miami. Five cities, two nations, and the most diverse atmosphere in the tournament.
          </p>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <div className="relative z-10 max-w-5xl mx-auto -mt-12 px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-rose-400">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">5 Host Cities</span>
            </div>
            <div className="text-lg font-semibold text-white leading-tight">Houston • Mexico City • Guadalajara • Atlanta • Miami</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-rose-400">
              <Ticket className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Key Venue</span>
            </div>
            <div className="text-2xl font-semibold text-white">Estadio Azteca</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-rose-400">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">Travel Focus</span>
            </div>
            <div className="text-2xl font-semibold text-white">Cross-Border</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        
        {/* Overview */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Group Experience</h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="lead text-xl md:text-2xl text-slate-800 font-light mb-8">
              Group K is the most geographically ambitious group in the tournament. Matches begin in the Texas/Mexico corridor before shifting east to the spectacle of Atlanta and Miami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-rose-500" />
                  Latin Soul
                </h3>
                <p>
                  With Mexico City and Guadalajara hosting, this group taps into the deepest football traditions on the continent. The energy at Estadio Azteca is spiritual. Houston serves as the cultural bridge, blending Texan hospitality with strong Mexican roots.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-rose-500" />
                  Coastal Grandeur
                </h3>
                <p>
                  The group concludes in the US Southeast. Atlanta's Mercedes-Benz Stadium is an architectural marvel with legendary atmosphere, while Miami brings international glamour and Caribbean flair to the final matchday.
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
            
            {/* Mexico City */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop" 
                    alt="Mexico City" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    Mexico
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Mexico City</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The historic heart of the World Cup. Estadio Azteca will become the first stadium to host three World Cups. A sprawling, vibrant metropolis of culture, history, and passion.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">Estadio Azteca</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">87,523</div>
                    </div>
                  </div>
                  <Link to="/cities/mexico-city" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors group-hover:translate-x-1 duration-300">
                    Explore CDMX Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Houston */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?q=80&w=2069&auto=format&fit=crop" 
                    alt="Houston" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wider uppercase mb-3">
                    <MapPin className="w-4 h-4" />
                    Texas, USA
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Houston</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Space City is the logistical anchor for this group. Expect air-conditioned comfort at NRG Stadium and a culinary scene that rivals any in the world.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Stadium</div>
                      <div className="font-semibold text-slate-900">NRG Stadium</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Capacity</div>
                      <div className="font-semibold text-slate-900">72,220</div>
                    </div>
                  </div>
                  <Link to="/cities/houston" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors group-hover:translate-x-1 duration-300">
                    Explore Houston Guide <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Atlanta & Miami Combined for Brevity/Layout or Separate? Let's separate them for premium feel */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Atlanta */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Georgia, USA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Atlanta</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Home to Mercedes-Benz Stadium, arguably the finest football venue in the US. A city of culture, music, and unmatched fan energy.
                    </p>
                    <Link to="/cities/atlanta" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 text-sm">
                        View Atlanta Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                {/* Miami */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Florida, USA
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Miami</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The gateway to the Americas. Hard Rock Stadium offers a premium, electric atmosphere. Prepare for humidity, nightlife, and global vibes.
                    </p>
                    <Link to="/cities/miami" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 text-sm">
                        View Miami Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                 {/* Guadalajara */}
                 <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-8 md:col-span-2">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wider uppercase mb-4">
                        <MapPin className="w-4 h-4" />
                        Jalisco, Mexico
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Guadalajara</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The home of Mariachi and Tequila. Estadio Akron sits in a beautiful volcanic landscape. A city of tradition that offers a pure, intense football experience.
                    </p>
                    <Link to="/cities/guadalajara" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 text-sm">
                        View Guadalajara Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>

          </div>
        </section>

        {/* Travel & Logistics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Travel & Borders</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Complex Itinerary</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fans following Group K will likely need to cross the US/Mexico border. Flights are mandatory.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Hubs</div>
                      <div className="text-sm text-slate-600">IAH (Houston), ATL (Atlanta), MEX (Mexico City)</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-bold text-slate-900 mb-1">Key Route</div>
                      <div className="text-sm text-slate-600">IAH to MEX is a frequent, short international hop (~2h).</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Visa Requirements</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Ensure you have multi-entry visas for both the US and Mexico if you plan to follow the entire group schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Local Flavor</h2>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-rose-400" />
                Culinary Highlights
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-rose-500/50">01</span>
                  <div>
                    <strong className="block text-lg text-rose-400 mb-1">Tacos al Pastor</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">The king of Mexico City street food. Essential late-night fuel.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-rose-500/50">02</span>
                  <div>
                    <strong className="block text-lg text-rose-400 mb-1">Viet-Cajun</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Houston's unique fusion. Crawfish with garlic butter and spices.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-4xl font-serif text-rose-500/50">03</span>
                  <div>
                    <strong className="block text-lg text-rose-400 mb-1">Cuban Sandwich</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">Miami's signature. Ham, roasted pork, swiss cheese, pickles, mustard.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Adventure</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Group K is a bucket-list experience for any football fan. Start organizing your visas and flights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planning" className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg">
                Start Planning Trip
              </Link>
              <Link to="/tickets" className="inline-flex items-center justify-center px-8 py-4 bg-rose-700 text-white font-bold rounded-full hover:bg-rose-800 transition-all shadow-lg border border-rose-600">
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

export default GroupKPage;
