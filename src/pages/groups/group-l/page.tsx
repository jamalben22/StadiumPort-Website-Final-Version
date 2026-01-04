import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, 
  Music, Sun, Car, Flame, Shield, Smartphone, Briefcase, 
  Globe, CreditCard, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

export default function GroupLPage() {
  return (
    <>
      <Helmet>
        <title>Group L World Cup 2026 Travel Guide: Toronto, NY, Boston, Philly & Dallas | stadiumport</title>
        <meta name="description" content="The definitive travel guide for World Cup 2026 Group L. Master the logistics of following your team across Toronto, New York, Boston, Philadelphia, and Dallas. Flight strategies, budget breakdowns, and visa tips." />
        <meta name="keywords" content="Group L World Cup 2026, Toronto World Cup travel, Dallas World Cup travel, New York World Cup guide, Boston World Cup guide, Philadelphia World Cup, multi-city World Cup itinerary" />
        <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL}/2026-world-cup-group-l-travel-guide`} />
      </Helmet>

      <SchemaOrg 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group L World Cup 2026 Travel Guide: The Cross-Continental Challenge",
            "description": "Complete logistics guide for World Cup Group L fans traveling between Toronto, New York, Boston, Philadelphia, and Dallas.",
            "author": { "@type": "Organization", "name": "stadiumport" },
            "publisher": { 
              "@type": "Organization", 
              "name": "stadiumport",
              "logo": { "@type": "ImageObject", "url": "https://stadiumport.com/logo.png" }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${import.meta.env.VITE_SITE_URL}/2026-world-cup-group-l-travel-guide` }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${import.meta.env.VITE_SITE_URL}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Groups",
                "item": `${import.meta.env.VITE_SITE_URL}/world-cup-2026-groups`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Group L",
                "item": `${import.meta.env.VITE_SITE_URL}/2026-world-cup-group-l-travel-guide`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best order to visit Group L cities?",
                "acceptedAnswer": { "@type": "Answer", "text": "Start in the Northeast (Boston-NYC-Philly) using Amtrak trains, then fly to Toronto or Dallas. The Northeast cities are clustered; Dallas and Toronto are the outliers." }
              },
              {
                "@type": "Question",
                "name": "How much to follow Group L across all cities?",
                "acceptedAnswer": { "@type": "Answer", "text": "Budget at least $4,500-$6,000 per person for a 2-week trip covering 3-4 matches, including flights, mid-range hotels, and tickets." }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for both Canada and the US?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most likely. If you are not a US/Canadian citizen, you will likely need a US Visa (or ESTA) and a Canadian Visa (or eTA). Apply for both well in advance." }
              },
              {
                "@type": "Question",
                "name": "Which Group L city is the most expensive?",
                "acceptedAnswer": { "@type": "Answer", "text": "New York City and Boston command the highest hotel rates, often exceeding $400/night during peak summer events." }
              },
              {
                "@type": "Question",
                "name": "Can I take a train from Boston to NYC?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Amtrak Acela or Northeast Regional takes about 3.5 to 4 hours and drops you in the city center (Moynihan Train Hall), avoiding airport traffic." }
              },
              {
                "@type": "Question",
                "name": "How do I survive Dallas heat during matches?",
                "acceptedAnswer": { "@type": "Answer", "text": "AT&T Stadium is climate-controlled (indoors). However, outdoor fan zones will be 95°F+ (35°C+). Hydrate heavily and stay indoors between 11 AM and 5 PM." }
              }
            ]
          }
        ]}
      />

      <Header />

      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-teal-500/30">
        
        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-white dark:to-navy-900"></div>
          
          <div className="relative max-w-5xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-teal-500/20 text-teal-400 text-sm font-bold mb-6 border border-teal-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              GROUP L • THE URBAN GIANTS
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              The Northeast Corridor <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">& The Outliers</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
              Toronto. Boston. New York. Philadelphia. Dallas. Five massive metros. Two countries. One incredible logistics challenge. Here is your master plan.
            </p>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-6 -mt-20 pb-24">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-white/90 dark:bg-navy-800/90 backdrop-blur-md border border-slate-200 dark:border-navy-700 p-6 rounded-2xl shadow-lg">
              <div className="text-teal-600 dark:text-teal-400 mb-2"><Globe className="w-6 h-6" /></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mb-1">Geography</div>
              <div className="text-xl font-bold">USA & Canada</div>
            </div>
            <div className="bg-white/90 dark:bg-navy-800/90 backdrop-blur-md border border-slate-200 dark:border-navy-700 p-6 rounded-2xl shadow-lg">
              <div className="text-teal-600 dark:text-teal-400 mb-2"><Train className="w-6 h-6" /></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mb-1">Primary Link</div>
              <div className="text-xl font-bold">Amtrak Northeast</div>
            </div>
            <div className="bg-white/90 dark:bg-navy-800/90 backdrop-blur-md border border-slate-200 dark:border-navy-700 p-6 rounded-2xl shadow-lg">
              <div className="text-teal-600 dark:text-teal-400 mb-2"><CreditCard className="w-6 h-6" /></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mb-1">Cost Tier</div>
              <div className="text-xl font-bold">$$$$ (Premium)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">

              {/* 1. Overview & Context */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                  <MapPin className="text-teal-500" /> Group L Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                  <p>
                    Group L is the heavyweight division of World Cup host cities. You have <strong>New York City</strong> (the tournament HQ), <strong>Toronto</strong> (Canada's financial capital), <strong>Boston</strong> and <strong>Philadelphia</strong> (historic US pillars), and <strong>Dallas</strong> (a modern titan).
                  </p>
                  <p>
                    Unlike other groups that are geographically compact, Group L is split. The "Northeast Cluster" (Boston, NYC, Philly) allows for easy train travel. However, Toronto requires a border crossing, and Dallas is a 3-4 hour flight away. Following a team through this group requires strategic flight booking and a willingness to navigate big-city transit systems.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-1">The "Golden Rule" of Group L:</p>
                    <p className="text-blue-800 dark:text-blue-200 m-0">
                      Do not drive between Dallas and the other cities. It is a 24+ hour drive. Fly to/from Dallas. Use trains between Boston, NYC, and Philly.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Multi-City Travel Strategy */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                  <Plane className="text-teal-500" /> Multi-City Travel Strategy
                </h2>
                
                <div className="space-y-8">
                  {/* Route Visualization */}
                  <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-navy-700">
                    <h3 className="text-lg font-bold mb-4">The Optimal Route Sequence</h3>
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-navy-600 text-center w-full md:w-auto">
                        <span className="block text-xs text-slate-400 uppercase">Start</span>
                        Toronto (YYZ)
                      </div>
                      <ArrowRight className="hidden md:block text-slate-400" />
                      <div className="block md:hidden text-slate-400">↓</div>
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-navy-600 text-center w-full md:w-auto">
                        <span className="block text-xs text-slate-400 uppercase">Train</span>
                        Boston (BOS)
                      </div>
                      <ArrowRight className="hidden md:block text-slate-400" />
                      <div className="block md:hidden text-slate-400">↓</div>
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-navy-600 text-center w-full md:w-auto">
                        <span className="block text-xs text-slate-400 uppercase">Train</span>
                        New York (JFK/EWR)
                      </div>
                      <ArrowRight className="hidden md:block text-slate-400" />
                      <div className="block md:hidden text-slate-400">↓</div>
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-navy-600 text-center w-full md:w-auto">
                        <span className="block text-xs text-slate-400 uppercase">Train</span>
                        Philadelphia (PHL)
                      </div>
                      <ArrowRight className="hidden md:block text-slate-400" />
                      <div className="block md:hidden text-slate-400">↓</div>
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-navy-600 text-center w-full md:w-auto">
                        <span className="block text-xs text-slate-400 uppercase">Fly</span>
                        Dallas (DFW)
                      </div>
                    </div>
                  </div>

                  {/* Transport Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-navy-800">
                        <tr>
                          <th className="px-6 py-3">Route</th>
                          <th className="px-6 py-3">Mode</th>
                          <th className="px-6 py-3">Time</th>
                          <th className="px-6 py-3">Est. Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-navy-700">
                        <tr>
                          <td className="px-6 py-4 font-medium">Boston ↔ NYC</td>
                          <td className="px-6 py-4"><span className="inline-flex items-center gap-1"><Train className="w-3 h-3" /> Amtrak</span></td>
                          <td className="px-6 py-4">3h 45m</td>
                          <td className="px-6 py-4">$45 - $180</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">NYC ↔ Philly</td>
                          <td className="px-6 py-4"><span className="inline-flex items-center gap-1"><Train className="w-3 h-3" /> Amtrak</span></td>
                          <td className="px-6 py-4">1h 20m</td>
                          <td className="px-6 py-4">$35 - $120</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">NYC ↔ Toronto</td>
                          <td className="px-6 py-4"><span className="inline-flex items-center gap-1"><Plane className="w-3 h-3" /> Flight</span></td>
                          <td className="px-6 py-4">1h 45m</td>
                          <td className="px-6 py-4">$180 - $350</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Any City ↔ Dallas</td>
                          <td className="px-6 py-4"><span className="inline-flex items-center gap-1"><Plane className="w-3 h-3" /> Flight</span></td>
                          <td className="px-6 py-4">3h - 4h</td>
                          <td className="px-6 py-4">$250 - $500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Transport */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-600 text-slate-900 dark:text-white font-bold py-4 px-6 rounded-xl transition-all">
                      <Plane className="w-5 h-5" /> Check Flight Deals
                    </a>
                    <a href="https://amtrak.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all">
                      <Train className="w-5 h-5" /> Book Amtrak Tickets
                    </a>
                  </div>
                </div>
              </section>

              {/* 3. Accommodation Strategy */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                  <Utensils className="text-teal-500" /> Accommodation Strategy
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700">
                    <h3 className="text-xl font-bold mb-3">New York City (The Budget Killer)</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      Manhattan hotels will be $400+. <strong>Smart Move:</strong> Stay in Long Island City (Queens) or Weehawken/Jersey City (NJ). Both offer 15-minute transit to Manhattan at 60% of the price.
                    </p>

                  </div>

                  <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700">
                    <h3 className="text-xl font-bold mb-3">Dallas (The Sprawl)</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      AT&T Stadium is in Arlington, 20 miles from Dallas. <strong>Smart Move:</strong> If you want nightlife, stay in Uptown Dallas and Uber to the game. If you just want the match, stay in an Arlington hotel (book 9 months out).
                    </p>

                  </div>

                  {/* Affiliate Block: Hotels */}
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-100 dark:border-teal-800/50 mt-4">
                    <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">Secure Your Base Now</h4>
                    <p className="text-sm text-teal-800 dark:text-teal-200 mb-4">Group L cities have the highest occupancy rates in North America. Don't wait.</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors">
                        Find Hotels on Booking.com
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-navy-600 px-5 py-2 rounded-lg font-bold text-sm hover:border-teal-500 transition-colors">
                        Compare on Expedia
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Budget Breakdown */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                  <CreditCard className="text-teal-500" /> Budget Breakdown
                </h2>
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <tr>
                        <th className="px-6 py-4">Expense Category</th>
                        <th className="px-6 py-4">Economy (Backpacker)</th>
                        <th className="px-6 py-4">Mid-Range (Standard)</th>
                        <th className="px-6 py-4">Premium (Comfort)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-navy-700 bg-white dark:bg-navy-900">
                      <tr>
                        <td className="px-6 py-4 font-medium">Accommodation (Avg/Night)</td>
                        <td className="px-6 py-4">$80 - $120 (Hostels/Shared)</td>
                        <td className="px-6 py-4">$250 - $350 (3★ Hotel)</td>
                        <td className="px-6 py-4">$500+ (4★+ City Center)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">Inter-City Transport</td>
                        <td className="px-6 py-4">$300 (Bus/Train)</td>
                        <td className="px-6 py-4">$600 (Flight/Acela)</td>
                        <td className="px-6 py-4">$1,200 (Direct Flights)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">Daily Food & Drink</td>
                        <td className="px-6 py-4">$40</td>
                        <td className="px-6 py-4">$100</td>
                        <td className="px-6 py-4">$250+</td>
                      </tr>
                      <tr className="bg-teal-50 dark:bg-teal-900/10">
                        <td className="px-6 py-4 font-bold">Total 14-Day Est.</td>
                        <td className="px-6 py-4 font-bold text-teal-700 dark:text-teal-400">$2,800</td>
                        <td className="px-6 py-4 font-bold text-teal-700 dark:text-teal-400">$6,500</td>
                        <td className="px-6 py-4 font-bold text-teal-700 dark:text-teal-400">$12,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3 italic">
                  *Estimates per person excluding match tickets. NYC and Boston will skew these averages higher.
                </p>
              </section>

              {/* 5. City-by-City Essentials */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">City Essentials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {[
                    { name: "New York / NJ", desc: "The global stage. Infinite dining, complex transit, massive energy." },
                    { name: "Toronto", desc: "Multicultural, walkable, safe. Don't forget the eTA visa." },
                    { name: "Boston", desc: "Historic charm meets sports passion. Stadium is 45 min from city." },
                    { name: "Philadelphia", desc: "Best value. Walkable center. Incredible food scene. Intense fans." },
                    { name: "Dallas", desc: "Big, hot, and flashy. Car-centric culture. World-class stadium." }
                  ].map((city) => (
                    <div key={city.name} className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-teal-500 transition-colors group">
                      <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{city.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Visa & Entry */}
              <section className="bg-slate-50 dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="text-teal-500" /> Border Crossing: USA & Canada
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2">🇺🇸 USA Entry</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                      <li><strong>ESTA:</strong> Required for Visa Waiver countries (EU, UK, Aus, etc.). Cost ~$21. Valid 2 years.</li>
                      <li><strong>B1/B2 Visa:</strong> Required for others. Wait times can be 6+ months. Apply NOW.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">🇨🇦 Canada Entry</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                      <li><strong>eTA:</strong> Electronic Travel Authorization required for most flyers. Cost ~$7 CAD.</li>
                      <li><strong>Land Crossing:</strong> Rules differ if entering by train/bus from USA. Check latest strictures.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-800 dark:text-amber-200 flex gap-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <strong>Warning:</strong> A DUI conviction (even decades old) can make you inadmissible to Canada. Check your eligibility before booking.
                  </p>
                </div>
              </section>

              {/* 7. Insider Tips */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                  <Briefcase className="text-teal-500" /> What Group L Veterans Know
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "The 'Patriot Train' is Mandatory", text: "Driving to Gillette Stadium (Boston) is a nightmare. Always take the special event train from South Station. Tickets sell out; buy them on the MBTA app." },
                    { title: "Philly's Sports Complex is Unique", text: "Unlike other cities, Philly's stadiums are all in one massive complex south of the city. The Broad Street Line subway takes you straight there. It's safe, fast, and full of fans." },
                    { title: "NYC Airports Strategy", text: "Fly into Newark (EWR) if staying in NJ or Manhattan. Fly into LGA for Queens. Avoid JFK for domestic hops if possible (furthest commute)." },
                    { title: "Dallas Tunnels", text: "Downtown Dallas has an underground tunnel system connecting buildings. Use it to walk during the day and avoid the 100°F heat." }
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-white dark:bg-navy-800 rounded-lg shadow-sm">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full text-teal-600 dark:text-teal-400 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{tip.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{tip.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. FAQ */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="grid gap-4">
                  {[
                    { q: "Best SIM card for USA & Canada?", a: "Get an eSIM like Airalo that covers North America (regional plan). It avoids swapping cards at the border." },
                    { q: "Is safety an issue in these cities?", a: "Generally safe. Exercise standard caution in NYC subway at night. Philly center is safe, but avoid North Philly. Dallas is safe but car-centric." },
                    { q: "Can I use US Dollars in Toronto?", a: "No. You need Canadian Dollars (CAD). Credit cards are accepted everywhere, so you rarely need cash." },
                    { q: "How early should I get to MetLife Stadium?", a: "Early. Security lines are notoriously slow. Aim for 2.5 hours before kickoff to enjoy the fan zone." }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.q}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Affiliate: Gear */}
              <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700 sticky top-24">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-teal-500" /> Essential Gear
                </h3>
                <div className="space-y-4">
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                        <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Universal Power Adapter</p>
                        <p className="text-xs text-slate-500">Essential for international fans</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                        <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Cooling Towels</p>
                        <p className="text-xs text-slate-500">Mandatory for Dallas & NYC heat</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                        <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Clear Stadium Bag</p>
                        <p className="text-xs text-slate-500">Required for entry (NFL rules)</p>
                      </div>
                    </div>
                  </a>
                  <div className="pt-4 border-t border-slate-100 dark:border-navy-700">
                    <Link to="/planning/packing-list" className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                      View Full Packing List
                    </Link>
                  </div>
                </div>
              </div>

              {/* Timeline Checklist */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">Planning Timeline</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">12 Mos</div>
                    <div>Book Dallas & NYC Hotels (Refundable)</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">9 Mos</div>
                    <div>Apply for US/Canada Visas</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">6 Mos</div>
                    <div>Book Inter-City Flights</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">3 Mos</div>
                    <div>Book Amtrak Tickets</div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
