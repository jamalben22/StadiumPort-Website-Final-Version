import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, Info, ArrowRight, Plane, Utensils, Ticket, Sun, Music, Globe, Building2, Flame, Droplets, Wind, AlertTriangle, Smartphone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

const GroupKPage: React.FC = () => {
  const siteUrl = 'https://stadiumport.com';
  const pageUrl = '/groups/group-k';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-rose-500 selection:text-white">
      <Helmet>
        <title>World Cup 2026 Group K Travel Guide: Mexico City, Miami, Atlanta & Houston</title>
        <meta name="description" content="The definitive travel guide for Group K. Master the logistics of the 'Southern Crossing'—from Estadio Azteca's altitude to Miami's humidity. Expert tips for flights, hotels, and survival." />
        <meta name="keywords" content="Group K World Cup 2026, Mexico City travel guide, Miami World Cup, Atlanta Mercedes-Benz Stadium, Houston NRG Stadium, Guadalajara World Cup, Group K tickets" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
        <meta property="og:title" content="Group K World Cup 2026: The Southern Heat & Hubs Guide" />
        <meta property="og:description" content="The ultimate Pan-American itinerary. Navigate 5 cities, 2 nations, and the tournament's most vibrant cultures." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group K Travel Guide: The Southern Crossing",
            "description": "The definitive travel guide for Group K. Experience the historic heights of Mexico City, the humidity of Houston and Miami, and the energy of Atlanta.",
            "author": {
              "@type": "Organization",
              "name": "StadiumPort"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StadiumPort",
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
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Groups",
                "item": `${siteUrl}/world-cup-2026-groups`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Group K",
                "item": `${siteUrl}${pageUrl}`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I travel between Group K cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Flying is mandatory. The distances between Mexico City, Houston, Atlanta, and Miami are too great for driving. Use major hubs (IAH, ATL, MIA, MEX) for efficient connections."
                }
              },
              {
                "@type": "Question",
                "name": "What is the weather like for Group K matches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Expect extreme heat and humidity in Houston, Miami, and Atlanta (though stadiums are climate-controlled). Mexico City offers cooler, high-altitude weather but frequent rain."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for Group K?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if you are following the full group, you will likely need travel documentation for both the United States and Mexico. Check entry requirements well in advance."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      {/* Hero Section - Cinematic & High Energy */}
      <div className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070" 
            alt="Mexico City Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/80 to-slate-50 dark:to-navy-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold mb-6 border border-rose-500/30 backdrop-blur-sm uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                Travel Guide
              </div>
              <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                The Southern <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Crossing</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                A transcontinental odyssey from the historic heights of Estadio Azteca to the neon humidity of Miami. Five cities, two nations, and the most culturally vibrant atmosphere in the tournament.
              </p>
            </div>
            
            {/* Quick Stats Box */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl min-w-[280px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm uppercase tracking-wider font-bold">Avg Temp</span>
                  <span className="text-xl font-bold text-white">88°F / 31°C</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm uppercase tracking-wider font-bold">Total Miles</span>
                  <span className="text-xl font-bold text-white">~2,800</span>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm uppercase tracking-wider font-bold">Key Hub</span>
                  <span className="text-rose-400 font-bold">ATL / IAH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Strategic Overview */}
            <section className="bg-white dark:bg-navy-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-navy-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Strategic Overview</h2>
              <div className="prose prose-lg text-slate-600 dark:text-slate-300 mb-8">
                <p>
                  Group K is the logistical heavyweight of the 2026 World Cup. Spanning from the high-altitude plateau of Mexico City to the coastal humidity of Miami, this group requires strategic planning around <strong>flights</strong> and <strong>climate management</strong>.
                </p>
                <p>
                  Unlike other groups where rail or driving is feasible, Group K demands air travel. You are navigating the "Golden Triangle" of North American aviation hubs (Atlanta, Houston, Miami), which ensures connectivity but requires early booking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                  <h3 className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    The Advantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>World-Class Hubs:</strong> ATL, IAH, and MIA offer direct flights to virtually anywhere on Earth.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Stadium Comfort:</strong> Houston, Atlanta, and Miami (canopy) offer climate-controlled viewing despite outdoor heat.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span><strong>Cultural Depth:</strong> From Mariachi to Trap Music, this group offers the richest cultural variety.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800">
                  <h3 className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    The Challenges
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Extreme Humidity:</strong> Outdoor movement in Houston/Miami/Atlanta is physically draining in summer.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Border Crossings:</strong> Moving between Mexico and the US requires valid visas and adds travel time.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-rose-500 font-bold">•</span>
                      <span><strong>Cost:</strong> Miami and Atlanta hotel rates will likely be among the highest in the tournament.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Host Cities Matrix */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Host Cities</h2>
                <span className="text-sm font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">5 Destinations</span>
              </div>

              <div className="space-y-8">
                {/* Mexico City */}
                <div className="group relative bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-5 relative h-64 md:h-auto">
                      <OptimizedImage 
                        src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070" 
                        alt="Mexico City" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                        Historic Core
                      </div>
                    </div>
                    <div className="md:col-span-7 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mexico City</h3>
                        <span className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" /> Mexico
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                        The spiritual home of CONCACAF football. Estadio Azteca is legendary. Prepare for high altitude (7,300ft) and potential afternoon rainstorms.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-navy-900 p-3 rounded-lg">
                          <div className="text-xs text-slate-400 font-bold uppercase mb-1">Stadium</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">Estadio Azteca</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-navy-900 p-3 rounded-lg">
                          <div className="text-xs text-slate-400 font-bold uppercase mb-1">Vibe</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">Passionate & Historic</div>
                        </div>
                      </div>
                      <Link to="/cities/mexico-city" className="inline-flex items-center text-rose-600 hover:text-rose-700 font-bold text-sm">
                        Full CDMX Guide <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Houston */}
                <div className="group relative bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-5 relative h-64 md:h-auto">
                      <OptimizedImage 
                        src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?q=80&w=2069" 
                        alt="Houston" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                        Logistics Hub
                      </div>
                    </div>
                    <div className="md:col-span-7 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Houston</h3>
                        <span className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          <MapPin className="w-3 h-3" /> Texas, USA
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                        Space City offers air-conditioned relief at NRG Stadium and arguably the best food scene in the South. A critical flight connection point for the group.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-navy-900 p-3 rounded-lg">
                          <div className="text-xs text-slate-400 font-bold uppercase mb-1">Stadium</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">NRG Stadium</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-navy-900 p-3 rounded-lg">
                          <div className="text-xs text-slate-400 font-bold uppercase mb-1">Food</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">Viet-Cajun / BBQ</div>
                        </div>
                      </div>
                      <Link to="/cities/houston" className="inline-flex items-center text-rose-600 hover:text-rose-700 font-bold text-sm">
                        Full Houston Guide <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Miami & Atlanta & Guadalajara Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Miami */}
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Miami</h3>
                      <MapPin className="w-4 h-4 text-rose-500" />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Global glamour, intense nightlife, and Hard Rock Stadium's elite facilities.
                    </p>
                    <Link to="/cities/miami" className="text-sm font-bold text-rose-600 hover:underline">View Guide →</Link>
                  </div>

                  {/* Atlanta */}
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Atlanta</h3>
                      <MapPin className="w-4 h-4 text-rose-500" />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      The world's busiest airport meets the world's finest stadium (Mercedes-Benz).
                    </p>
                    <Link to="/cities/atlanta" className="text-sm font-bold text-rose-600 hover:underline">View Guide →</Link>
                  </div>

                  {/* Guadalajara */}
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Guadalajara</h3>
                      <MapPin className="w-4 h-4 text-rose-500" />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Tequila, Mariachi, and pure football tradition at Estadio Akron.
                    </p>
                    <Link to="/cities/guadalajara" className="text-sm font-bold text-rose-600 hover:underline">View Guide →</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* "What FIFA Won't Tell You" - Insider Section */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Flame className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Info className="w-6 h-6 text-rose-500" />
                  Insider Intel: The Southern Reality
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-rose-400 font-bold mb-2">The "AC" Trap</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      While stadiums in Houston, Atlanta, and Miami (shade) are cool, the <strong>transit</strong> to them is not. You will spend hours in 90°F+ (32°C+) heat waiting for trains or Ubers. Dress for the outdoors, not just the match.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-rose-400 font-bold mb-2">Traffic is Real</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Atlanta and Houston have legendary traffic jams. "20 minutes away" usually means 50 minutes. Buffer your travel times significantly, especially for 5 PM kickoffs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-rose-400 font-bold mb-2">The Altitude Adjustment</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Flying from sea-level Miami to 7,300ft Mexico City is a shock to the system. Hydrate aggressively 24 hours before flying to avoid altitude sickness.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-rose-400 font-bold mb-2">Late Night Culture</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Dinner in Miami and Mexico City often starts at 9 PM or later. Don't expect vibrant restaurant vibes at 6 PM. Adjust your internal clock.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Trip Planning Toolkit - Sticky */}
            <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg border border-slate-100 dark:border-navy-700 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-navy-700 pb-4">
                <Plane className="w-5 h-5 text-rose-500" />
                <h3 className="font-bold text-slate-900 dark:text-white">Trip Planning Toolkit</h3>
              </div>
              
              <div className="space-y-4">
                <a href="https://expedia.com/affiliate-link-placeholder" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Book Flights Early</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500">Essential for Group K's long distances.</p>
                </a>

                <div className="h-px bg-slate-100 dark:bg-navy-700"></div>

                <a href="https://booking.com/affiliate-link-placeholder" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Find Cool Stays</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500">Hotels with verified AC are non-negotiable.</p>
                </a>

                <div className="h-px bg-slate-100 dark:bg-navy-700"></div>

                <a href="https://safetywing.com/affiliate-link-placeholder" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Travel Insurance</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500">Crucial for cross-border health coverage.</p>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-700">
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-rose-700 dark:text-rose-400 mb-1">Pro Tip: Visa Check</p>
                      <p className="text-xs text-rose-600/80 dark:text-rose-400/80">
                        Check your passport expiry now. You need 6 months validity for Mexico entry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Southern Survival Kit */}
            <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-slate-900 dark:text-white">Humidity Survival Kit</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <a href="https://amazon.com/affiliate-link-placeholder" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-navy-900 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-navy-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Droplets className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">Cooling Towels</h4>
                    <p className="text-xs text-slate-500 mt-1">Instant relief for 95°F tailgate parties.</p>
                  </div>
                </a>

                <a href="https://amazon.com/affiliate-link-placeholder" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-navy-900 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-navy-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Wind className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">Portable Neck Fan</h4>
                    <p className="text-xs text-slate-500 mt-1">Don't laugh—you'll wish you had one in Miami.</p>
                  </div>
                </a>

                <a href="https://amazon.com/affiliate-link-placeholder" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-navy-900 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-navy-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Smartphone className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">Waterproof Phone Pouch</h4>
                    <p className="text-xs text-slate-500 mt-1">For sudden tropical downpours and sweat protection.</p>
                  </div>
                </a>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-slate-400">As an Amazon Associate we earn from qualifying purchases.</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GroupKPage;