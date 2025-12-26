import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Users, Train, Plane, Sun, Mountain, Info, 
  ArrowRight, Star, Clock, Wallet, Heart, Camera, Bus, Car, 
  ShieldCheck, Droplets, Utensils, AlertTriangle, Zap, Globe, 
  DollarSign, Thermometer, Umbrella, Coffee, Ticket, Building2, Briefcase
} from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

export default function GroupIPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-i-travel-guide';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Helmet>
        <title>Group I World Cup 2026 Travel Guide: Boston, NYC, Philly & Toronto | Stadiumport</title>
        <meta name="description" content="The definitive travel guide for Group I (The Rail Corridor). Master the Amtrak route between Boston, NY/NJ, Philadelphia, and Toronto. Hotel hacks, stadium logistics, and cross-border travel." />
        <meta name="keywords" content="World Cup 2026 Group I, Boston World Cup travel, New York NJ World Cup guide, Philadelphia World Cup, Toronto World Cup travel, Amtrak World Cup route" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group I Travel Guide: The Rail Corridor",
            "description": "The definitive travel guide for Group I. Master the logistics of Boston, New York/NJ, Philadelphia, and Toronto.",
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
                "name": "Do I need a car for Group I cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. In fact, a car is a liability. Boston, NYC, Philadelphia, and Toronto have the best public transit in North America. Parking is famously expensive ($50+/night). Use Amtrak for inter-city travel and Metro/Subway within cities."
                }
              },
              {
                "@type": "Question",
                "name": "How do I travel between USA and Toronto?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 'Maple Leaf' train from NYC to Toronto is scenic but slow (12 hours). We recommend flying (1.5 hrs) for this leg unless you have extra time. Remember: You need a passport and potentially a Canadian eTA or Visa to cross the border."
                }
              },
              {
                "@type": "Question",
                "name": "Where should I stay for MetLife Stadium matches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stay in Manhattan (Midtown) near Penn Station for the best experience, and take the NJ Transit train to the stadium. Staying near the stadium (East Rutherford) is boring and isolated."
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
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-slate-900/95 to-slate-900"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 font-medium text-sm mb-6 backdrop-blur-sm">
                <Train className="w-4 h-4 fill-violet-400" />
                <span>The Rail Corridor Group</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Group I: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                  The Urban Core
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Four historic cities. One high-speed rail line. From the Liberty Bell to the CN Tower, this is the most connected, walkable, and culturally dense group in the tournament.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#strategy" className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2">
                  Start Planning <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#booking" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center gap-2">
                  Book Your Trip <Plane className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-violet-400 mb-2"><Train className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">150 mph</div>
                  <div className="text-sm text-slate-400">Acela Top Speed</div>
                </div>
                <div>
                  <div className="text-violet-400 mb-2"><Users className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">82,500</div>
                  <div className="text-sm text-slate-400">Final Venue Capacity</div>
                </div>
                <div>
                  <div className="text-violet-400 mb-2"><Wallet className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">$$$$</div>
                  <div className="text-sm text-slate-400">Highest Hotel Rates</div>
                </div>
                <div>
                  <div className="text-violet-400 mb-2"><Globe className="w-8 h-8" /></div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-slate-400">Countries (USA/CAN)</div>
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
                  Group I offers a unique luxury in the 2026 World Cup: <strong className="text-violet-600 dark:text-violet-400">you never have to touch a steering wheel.</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Linked by the Northeast Corridor rail line, Boston, New York, and Philadelphia form a seamless transit megaregion. Toronto, the northern jewel, adds an international flair just a short flight away. This is a group for lovers of history, public transit, and intense urban energy.
                </p>
              </div>
            </section>

            {/* Strategic Overview Table */}
            <section id="strategy" className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <Info className="w-8 h-8 text-violet-500" /> Strategic Overview
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
                          <Train className="w-4 h-4" />
                        </div>
                        <span><strong>Rail Connectivity:</strong> Amtrak trains run hourly between Boston, NYC, and Philly. No airport security lines.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded text-emerald-600 dark:text-emerald-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <span><strong>Walkability:</strong> You can explore all four city centers entirely on foot or subway.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded text-emerald-600 dark:text-emerald-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <span><strong>Cultural Density:</strong> World-class museums, Broadway, and historical sites are minutes from fan zones.</span>
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
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <span><strong>Cost:</strong> NYC and Boston have the highest hotel rates in the tournament ($400+/night avg).</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-rose-100 dark:bg-rose-900/30 p-1 rounded text-rose-500">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span><strong>Stadium Distance:</strong> Gillette (Boston) and MetLife (NJ) are far from city centers (45-60 mins).</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1 bg-rose-100 dark:bg-rose-900/30 p-1 rounded text-rose-500">
                          <Ticket className="w-4 h-4" />
                        </div>
                        <span><strong>Border Crossing:</strong> Entering Canada for Toronto requires valid documents (Passport/eTA).</span>
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
                
                {/* New York / New Jersey */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors"></div>
                      <OptimizedImage src="/images/cities/new-york-new-jersey-world-cup-2026.webp" alt="New York" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">New York / New Jersey</h3>
                        <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-bold px-3 py-1 rounded-full">FINAL HOST</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        The center of the world. MetLife Stadium (NJ) hosts the Final. Unmatched energy, infinite dining, and logistical complexity.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Manhattan / Jersey City
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> EWR / JFK / LGA
                        </span>
                      </div>
                      <div className="flex gap-3">

                        <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Book Hotels <Building2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Philadelphia */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                       <OptimizedImage src="/images/cities/philadelphia-world-cup-2026.webp" alt="Philadelphia" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Philadelphia</h3>
                        <span className="bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full">HISTORIC</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        The birthplace of America. Passionate sports culture, walkable downtown, and Lincoln Financial Field is easily accessible by subway.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Center City
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> PHL (Philadelphia Int)
                        </span>
                      </div>
                      <div className="flex gap-3">

                        <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Book Hotels <Building2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boston */}
                <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                       <OptimizedImage src="/images/cities/boston-world-cup-2026.webp" alt="Boston" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Boston</h3>
                        <span className="bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full">ACADEMIC</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        European charm meets American sports fanaticism. Gillette Stadium is a trek (Foxborough), so plan your transport carefully.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Back Bay / Seaport
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> BOS (Logan)
                        </span>
                      </div>
                      <div className="flex gap-3">

                        <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1 text-sm ml-auto">
                          Book Hotels <Building2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* Toronto */}
                 <div className="group bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-48 h-32 rounded-xl bg-slate-200 dark:bg-navy-900 overflow-hidden flex-shrink-0 relative">
                       <OptimizedImage src="/images/cities/toronto-world-cup-2026.webp" alt="Toronto" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Toronto</h3>
                        <span className="bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full">CANADIAN HUB</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                        Canada's largest city. Multicultural, clean, and vibrant. BMO Field is right on the waterfront, easily accessible by streetcar.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Building2 className="w-4 h-4" /> Downtown / Liberty Village
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Plane className="w-4 h-4" /> YYZ (Pearson)
                        </span>
                      </div>
                      <div className="flex gap-3">

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
                <Ticket className="w-8 h-8 text-violet-500" /> Trip Planning Toolkit
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Flights Card */}
                <a href="https://expedia.com/flights" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all block">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Book Flights</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Search multi-city flights. Tip: Fly into NYC (JFK/EWR) and out of Toronto (YYZ).
                  </p>
                  <div className="text-violet-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Check Prices <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Hotels Card */}
                <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all block">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Find Hotels</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    NYC hotels average $400+. Save 40% by staying in Jersey City or Hoboken near the PATH train.
                  </p>
                  <div className="text-violet-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Search Deals <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Insurance Card */}
                <a href="https://safetywing.com" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 hover:border-violet-500 transition-all block">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Travel Insurance</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Crossing the border? Ensure your medical coverage works in both the USA and Canada.
                  </p>
                  <div className="text-violet-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </section>

            {/* Insider Knowledge */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 relative z-10 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" /> Insider Tips: What FIFA Won't Tell You
                </h3>
                <div className="grid gap-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-violet-400">1</div>
                    <div>
                      <h4 className="font-bold mb-1">The "Penn Station" Confusion</h4>
                      <p className="text-slate-300 text-sm">NYC has two "Penn Stations" (Moynihan Train Hall and the old dungeon). Amtrak leaves from the beautiful Moynihan Hall. NJ Transit (to stadium) leaves from the old side. Don't mix them up.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-violet-400">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Cheesesteaks & Etiquette</h4>
                      <p className="text-slate-300 text-sm">In Philadelphia, order your cheesesteak "Whiz Wit" (Cheez Whiz with onions). Do not hold up the line or you will be roasted by the locals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-violet-400">3</div>
                    <div>
                      <h4 className="font-bold mb-1">Toronto's "PATH" Underground</h4>
                      <p className="text-slate-300 text-sm">If it's raining in Toronto, use the PATH system—19 miles of underground shopping tunnels connecting downtown hotels to Union Station. You can walk for miles without going outside.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Group I FAQ</h2>
               <div className="space-y-4">
                 <div className="bg-white dark:bg-navy-800 rounded-xl p-6 border border-slate-100 dark:border-navy-700">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-2">Is the Amtrak Acela worth the extra cost?</h3>
                   <p className="text-slate-600 dark:text-slate-300 text-sm">Generally, yes for business travelers, but for fans? The "Northeast Regional" train is only 15 minutes slower and costs 40% less. Book the Regional train 3 weeks in advance for the best deal.</p>
                 </div>
                 <div className="bg-white dark:bg-navy-800 rounded-xl p-6 border border-slate-100 dark:border-navy-700">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-2">Can I drink alcohol on the train?</h3>
                   <p className="text-slate-600 dark:text-slate-300 text-sm">Yes, Amtrak allows you to bring and consume your own alcohol (in moderation) on the train, unlike planes. They also have a café car selling drinks.</p>
                 </div>
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking Links */}
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-violet-500" /> Quick Booking
              </h3>
              <div className="space-y-3">
                <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-slate-50 dark:bg-navy-900 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Hotels</span>
                    <ArrowRight className="w-4 h-4 text-violet-500" />
                  </div>
                  <p className="text-xs text-slate-500">Compare NYC & Boston rates</p>
                </a>
                <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-slate-50 dark:bg-navy-900 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Flights</span>
                    <ArrowRight className="w-4 h-4 text-violet-500" />
                  </div>
                  <p className="text-xs text-slate-500">Flights to JFK / YYZ</p>
                </a>
              </div>
            </div>
            
            {/* Northeast Essentials Kit */}
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700 sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-violet-500" /> Urban Travel Kit
              </h3>
              <div className="space-y-4">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                      <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Power Bank (20k mAh)</p>
                      <p className="text-xs text-slate-500">Essential for long stadium days</p>
                    </div>
                  </div>
                </a>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                      <Umbrella className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Compact Umbrella</p>
                      <p className="text-xs text-slate-500">Northeast weather is unpredictable</p>
                    </div>
                  </div>
                </a>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                      <Users className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Walking Shoes</p>
                      <p className="text-xs text-slate-500">You will walk 15k+ steps/day</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-700">
                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                  <p className="text-xs font-bold text-violet-800 dark:text-violet-300 mb-1 uppercase tracking-wide">Pro Tip</p>
                  <p className="text-sm text-violet-900 dark:text-violet-100">
                    Download the "Citymapper" app. It works perfectly in NYC, Boston, Philly, and Toronto, and is far superior to Google Maps for public transit.
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
