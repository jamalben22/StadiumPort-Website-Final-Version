import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Users, Train, Plane, Sun, Mountain, Info, 
  ArrowRight, Star, Clock, Wallet, Heart, Camera, Bus, Car, 
  ShieldCheck, Droplets, Utensils, AlertTriangle, Zap, Globe, 
  DollarSign, Thermometer, Umbrella, Coffee, Ticket, Building2, Briefcase, Music, Wind, Smartphone
} from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

export default function GroupJPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-j';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Helmet>
        <title>Group J World Cup 2026 Travel Guide: Kansas City, Dallas & San Francisco | Stadiumport</title>
        <meta name="description" content="The definitive travel guide for Group J (The American Frontier). Master the logistics of Kansas City, Dallas, and San Francisco. Stadium guides, heat survival, and rental car strategies." />
        <meta name="keywords" content="World Cup 2026 Group J, Kansas City World Cup travel, Dallas World Cup guide, San Francisco World Cup, Arrowhead Stadium, AT&T Stadium, Levi's Stadium" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group J Travel Guide: The American Frontier",
            "description": "The definitive travel guide for Group J. Experience the loudest stadium in the world in Kansas City, the grandeur of Dallas, and the innovation of San Francisco.",
            "author": {
              "@type": "Organization",
              "name": "Stadiumport"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stadiumport",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/images/Logos/stadiumport-logo.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${siteUrl}${pageUrl}`
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need a car for Group J cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, for Kansas City and Dallas, a rental car is virtually essential. Public transit is limited and stadiums are far from downtown. For San Francisco, you can manage without one using Caltrain and VTA to reach the stadium."
                }
              },
              {
                "@type": "Question",
                "name": "How hot will it be in Dallas and Kansas City?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Extremely hot. Expect highs of 90°F-100°F (32°C-38°C) in June/July. Hydration and staying indoors during peak sun hours is critical. AT&T Stadium (Dallas) is air-conditioned; Arrowhead (KC) is open-air."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Levi's Stadium located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is in Santa Clara, not San Francisco proper. It's about 45 miles south of the city (1 hour drive or 1.5 hours by public transit). Plan your accommodation accordingly."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero Section - Cinematic & Emotional */}
        <div className="relative bg-slate-900 text-white py-24 px-6 md:px-12 overflow-hidden">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-slate-900/95 to-slate-900"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-medium text-sm mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>The American Frontier Group</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Group J: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                  Scale & Sound
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                From the deafening roar of Arrowhead to the tech-driven innovation of Silicon Valley. This group spans half a continent and features the most impressive stadiums in the tournament.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#strategy" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2">
                  Start Planning <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#booking" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center gap-2">
                  Book Rentals <Car className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-amber-400 mb-2"><Users className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">142.2 dB</div>
                  <div className="text-sm text-slate-400">World Record Noise (KC)</div>
                </div>
                <div>
                  <div className="text-amber-400 mb-2"><Building2 className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">92,967</div>
                  <div className="text-sm text-slate-400">Largest Venue (Dallas)</div>
                </div>
                <div>
                  <div className="text-amber-400 mb-2"><Thermometer className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">100°F+</div>
                  <div className="text-sm text-slate-400">Summer Highs</div>
                </div>
                <div>
                  <div className="text-amber-400 mb-2"><Globe className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">1,500mi</div>
                  <div className="text-sm text-slate-400">Max Travel Distance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            
            {/* Intro Text */}
            <section className="mb-16">
              <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                <p className="lead text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
                  Group J defines the American philosophy: <strong className="text-amber-600 dark:text-amber-400">Go big or go home.</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  You will experience the extremes of the host nation here. The raw, passionate energy of the Midwest in Kansas City, the sheer opulence of Dallas's "Jerry World," and the sophisticated, coastal tech-hub of San Francisco. Be warned: these cities are far apart. Your logistical planning here is not about trains—it's about flights and rental cars.
                </p>
              </div>
            </section>

            {/* Strategic Overview Table */}
            <section id="strategy" className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Info className="w-8 h-8 text-amber-500" /> Strategic Overview
              </h2>
              <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-navy-700">
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> The Advantages
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded text-emerald-600 dark:text-emerald-400">
                          <Music className="w-4 h-4" />
                        </div>
                        <span><strong>Atmosphere:</strong> Kansas City fans are legendary. Arrowhead Stadium holds the Guinness World Record for crowd noise.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded text-emerald-600 dark:text-emerald-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <span><strong>Food Culture:</strong> You are in the BBQ capitals of the world (KC & Dallas) and the fine-dining hub of the West (SF).</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded text-emerald-600 dark:text-emerald-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span><strong>Infrastructure:</strong> AT&T Stadium and Levi's Stadium are modern marvels with massive screens and premium amenities.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 dark:bg-navy-900/50">
                    <h3 className="text-lg font-bold text-rose-500 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> The Challenges
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-rose-100 dark:bg-rose-900/30 p-1 rounded text-rose-500">
                          <Thermometer className="w-4 h-4" />
                        </div>
                        <span><strong>Extreme Heat:</strong> Dallas and KC summers are brutal. Tailgating can be dangerous if you aren't hydrated.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-rose-100 dark:bg-rose-900/30 p-1 rounded text-rose-500">
                          <Plane className="w-4 h-4" />
                        </div>
                        <span><strong>Distance:</strong> San Francisco is a 4-hour flight from Dallas. You cannot drive between all these cities reasonably.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-rose-100 dark:bg-rose-900/30 p-1 rounded text-rose-500">
                          <Car className="w-4 h-4" />
                        </div>
                        <span><strong>Transit Deserts:</strong> Outside of SF, public transit is poor. You will likely need to rent a car or budget heavily for Uber.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Host City Matrix */}
            <section id="cities" className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Host City Matrix</h2>
              <div className="grid gap-6">
                
                {/* Kansas City */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors"></div>
                      <OptimizedImage src="/images/cities/kansas-city-world-cup-2026.webp" alt="Kansas City" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kansas City</h3>
                        <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full">LOUDEST VENUE</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        The heart of the Midwest. Famous for jazz, fountains, and BBQ. Arrowhead Stadium is an intimidating fortress for visiting teams.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Power & Light District
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> MCI (Kansas City Intl)
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link to="/cities/kansas-city" className="text-amber-600 hover:text-amber-500 font-medium flex items-center gap-1 text-sm">
                          Full Guide <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="https://expedia.com/cars" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Rent Car <Car className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dallas */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                       <OptimizedImage src="/images/cities/dallas-world-cup-2026.webp" alt="Dallas" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Dallas</h3>
                        <span className="bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full">LARGEST VENUE</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        Everything is bigger in Texas. AT&T Stadium (Arlington) is world-famous. Stay in Dallas proper for culture, or Arlington for convenience.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Deep Ellum / Arlington
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> DFW / DAL
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link to="/cities/dallas" className="text-amber-600 hover:text-amber-500 font-medium flex items-center gap-1 text-sm">
                          Full Guide <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="https://expedia.com/cars" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Rent Car <Car className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* San Francisco */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                       <OptimizedImage src="/images/cities/san-francisco-world-cup-2026.webp" alt="San Francisco" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">San Francisco</h3>
                        <span className="bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full">TECH HUB</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        The Bay Area brings innovation and natural beauty. Levi's Stadium is in Santa Clara, close to tech giants. Don't miss the Golden Gate Bridge.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Union Square / Santa Clara
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> SFO / SJC / OAK
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link to="/cities/san-francisco" className="text-amber-600 hover:text-amber-500 font-medium flex items-center gap-1 text-sm">
                          Full Guide <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Book Hotels <Building2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Trip Planning Toolkit - Affiliate Section */}
            <section id="booking" className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Ticket className="w-8 h-8 text-amber-500" /> Trip Planning Toolkit
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Car Rental Card */}
                <a href="https://expedia.com/cars" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all block">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Rent a Car</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Essential for Dallas and Kansas City. Book early to avoid price surges during match weeks.
                  </p>
                  <div className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Check Rates <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Flights Card */}
                <a href="https://expedia.com/flights" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all block">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Book Flights</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Long distances between SF and Dallas/KC mean flying is the only viable option for this group.
                  </p>
                  <div className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Search Routes <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Hotels Card */}
                <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-amber-500 transition-all block">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Find Hotels</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    SF is expensive; Dallas/KC offer better value. Look for hotels with pools to beat the heat.
                  </p>
                  <div className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Search Deals <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </section>

            {/* Insider Knowledge */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 relative z-10 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" /> Insider Tips: What FIFA Won't Tell You
                </h3>
                <div className="grid gap-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-amber-400">1</div>
                    <div>
                      <h4 className="font-bold mb-1">The Arrowhead Tailgate</h4>
                      <p className="text-slate-300 text-sm">In Kansas City, the party starts 4 hours before kickoff in the parking lot. If you don't have a car, make friends. It is the best tailgating scene in America, period.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-amber-400">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Dallas Traffic is Real</h4>
                      <p className="text-slate-300 text-sm">Arlington (AT&T Stadium) is in the middle of nowhere. There is NO train station. Uber prices surge 400% after games. Rent a car and buy a parking pass in advance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-amber-400">3</div>
                    <div>
                      <h4 className="font-bold mb-1">San Francisco Microclimates</h4>
                      <p className="text-slate-300 text-sm">It might be 60°F and foggy in SF, but 90°F and sunny at Levi's Stadium (Santa Clara). Dress in layers. "The coldest winter I ever spent was a summer in San Francisco" is a real thing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Group J FAQ</h2>
               <div className="space-y-4">
                 <div className="bg-white dark:bg-navy-800 rounded-xl p-6 border border-slate-100 dark:border-navy-700">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-2">Which airport should I fly into for Levi's Stadium?</h3>
                   <p className="text-slate-600 dark:text-slate-300 text-sm">San Jose (SJC) is closest (10 mins). San Francisco (SFO) is 45 mins away. Oakland (OAK) is 45-60 mins away. SJC is the most convenient for match days.</p>
                 </div>
                 <div className="bg-white dark:bg-navy-800 rounded-xl p-6 border border-slate-100 dark:border-navy-700">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-2">Is it safe to walk in these cities?</h3>
                   <p className="text-slate-600 dark:text-slate-300 text-sm">Generally yes, but use caution in parts of downtown San Francisco (Tenderloin) and Dallas at night. Kansas City's Power & Light district is very safe and walkable.</p>
                 </div>
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking Links */}
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-500" /> Quick Booking
              </h3>
              <div className="space-y-3">
                <a href="https://expedia.com/cars" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-slate-50 dark:bg-navy-900 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Rental Cars</span>
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-xs text-slate-500">Crucial for Dallas/KC</p>
                </a>
                <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-slate-50 dark:bg-navy-900 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Domestic Flights</span>
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-xs text-slate-500">Flights to SFO / DFW / MCI</p>
                </a>
              </div>
            </div>
            
            {/* Frontier Survival Kit */}
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700 sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-500" /> Frontier Survival Kit
              </h3>
              <div className="space-y-4">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 transition-colors">
                      <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Cooling Towel</p>
                      <p className="text-xs text-slate-500">Lifesaver for 100°F heat</p>
                    </div>
                  </div>
                </a>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 transition-colors">
                      <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Portable Neck Fan</p>
                      <p className="text-xs text-slate-500">Stay cool in stadium queues</p>
                    </div>
                  </div>
                </a>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 transition-colors">
                      <Music className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Noise Cancelling Buds</p>
                      <p className="text-xs text-slate-500">For flights & loud crowds</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-700">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1 uppercase tracking-wide">Pro Tip</p>
                  <p className="text-sm text-amber-900 dark:text-amber-100">
                    In Kansas City, book a "Burnt Ends" BBQ tour. It's the local specialty. In Dallas, visit the Fort Worth Stockyards for a true cowboy experience.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
