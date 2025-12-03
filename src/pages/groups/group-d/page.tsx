import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupDPage() {
  return (
    <>
      <Helmet>
        <title>Group D World Cup 2026 Travel Guide – Seattle, San Francisco & Los Angeles | Stadiumport</title>
        <meta name="description" content="Group D World Cup 2026 travel guide. The Golden Coast route featuring Seattle, San Francisco Bay Area, and Los Angeles. Host cities, stadiums, logistics, and travel tips." />
        <meta name="keywords" content="Group D World Cup 2026, West Coast World Cup 2026, Seattle World Cup, San Francisco World Cup, Los Angeles World Cup, SoFi Stadium, Levi's Stadium, Lumen Field" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]">
        <main className="pt-28 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 font-bold border border-orange-200 dark:border-orange-800">
              🌴 GROUP D GUIDE
            </div>
          </div>

          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
              The Golden Coast
            </h1>
            <div className="space-y-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] dark:text-white">
                Seattle • San Francisco Bay Area • Los Angeles
              </h2>
              <p className="italic text-slate-500 dark:text-slate-400">
                Ultra-modern cities. Iconic stadiums. Endless coastline.
              </p>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Group D at a Glance */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">⭐ Group D at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-slate-700 dark:text-slate-300 mb-8">
              <p><strong>Host Region:</strong> U.S. West Coast</p>
              <p><strong>Travel Style:</strong> Short-haul flights (hourly routes)</p>
              <p><strong>Atmosphere:</strong> Tech, film, music & modern American culture</p>
              <p><strong>Difficulty:</strong> Moderate (long distances, simple logistics)</p>
            </div>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Group D is the <strong>West Coast dream route</strong>—a seamless blend of coffee culture, ocean views, high-tech arenas, and cinematic landscapes. From Seattle’s electric supporter culture to the futuristic glow of SoFi Stadium, this is one of the most visually stunning and culturally rich itineraries of the 2026 World Cup.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold mb-4">Expect:</p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>✔ World-class stadiums</li>
              <li>✔ Direct hourly flights</li>
              <li>✔ Perfect summer weather</li>
              <li>✔ A traveler-friendly coastline</li>
            </ul>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Host Cities & Stadiums */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">🏟 Host Cities & Stadiums</h2>
            
            <div className="space-y-10">
              {/* Los Angeles */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">🇺🇸 Los Angeles | The Entertainment Capital</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Stadium: SoFi Stadium — 70,240</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    The world’s most expensive stadium ($5.5B+) and an architectural icon. A translucent roof, open-air bowl, 4K dual-sided videoboard, and the most premium fan amenities in the tournament.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Where to Stay</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Santa Monica</strong> — Beachfront, upscale, walkable.</li>
                    <li><strong>West Hollywood (WeHo)</strong> — Nightlife, restaurants, safest for tourists.</li>
                    <li>Avoid: LAX airport hotels (poor experience + traffic-heavy).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Getting There</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Metro K Line</strong> → Free shuttle to SoFi (best option).</li>
                    <li><strong>Rideshare</strong> is available but slow; allow 90+ minutes on matchday.</li>
                  </ul>
                </div>
              </div>

              {/* San Francisco Bay Area */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">🌉 San Francisco Bay Area | The Tech Hub</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Stadium: Levi’s Stadium — 68,500</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Located in <strong>Santa Clara</strong>, not San Francisco. Dry, sunny climate. One of the most sustainable and technologically advanced stadiums in the U.S.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Where to Stay</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>San Jose / Santa Clara</strong> — Best for matchday convenience.</li>
                    <li><strong>Union Square (SF)</strong> — Best for tourism, but long commute.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Getting There</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>VTA Light Rail</strong> is the only stress-free option.</li>
                    <li>Rideshare drop-offs are far + traffic is heavy on major matches.</li>
                  </ul>
                </div>
              </div>

              {/* Seattle */}
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">🌲 Seattle | The Emerald City</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Stadium: Lumen Field — 69,000</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    The loudest stadium in American soccer. A downtown location, dramatic skyline views, and a fan culture that will make Group D matches unforgettable.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Where to Stay</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Pioneer Square</strong> — Steps from the stadium.</li>
                    <li><strong>Downtown Seattle</strong> — Walkable and transit-connected.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Getting There</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Link Light Rail</strong> from the airport → 40 min → Downtown.</li>
                    <li>Avoid rental cars unless road-tripping.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Travel Logistics */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">✈️ Travel Logistics: The West Coast Air Corridor</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Group D’s cities are connected by <strong>one of the busiest air networks in the world</strong>.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Flight Times</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>LA → San Francisco</strong>: ~1 hour</li>
                  <li><strong>San Francisco → Seattle</strong>: ~2 hours</li>
                  <li><strong>LA → Seattle</strong>: ~2 hr 45 min</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Best Airlines</h3>
                <p className="text-slate-700 dark:text-slate-300">Alaska Airlines, Delta, United, Southwest.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Pro Tips</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Use <strong>Burbank (BUR)</strong> instead of LAX for stress-free travel.</li>
                  <li>Use <strong>San Jose (SJC)</strong> instead of SFO for faster bag claim & transit.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Optional Scenic Routes */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🛣️ Optional Scenic Routes (If You Have 3–4 Days Between Matches)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-3">🌊 Highway 1: LA → SF Coastal Drive</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  One of the world’s most beautiful drives. Big Sur cliffs, elephant seals, redwood forests, ocean views the entire way.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-3">🚆 Amtrak Coast Starlight: LA ↔ Seattle</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A legendary 35-hour rail journey with Pacific shoreline views, volcanoes, forests, and mountain passes. A bucket-list experience—not ideal for tight schedules.
                </p>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Climate & Atmosphere */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🌦 Climate & Atmosphere</h2>
            
            <div className="overflow-x-auto bg-white dark:bg-[#1c1c1e] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4 font-semibold text-slate-900 dark:text-white">City</th>
                    <th className="p-4 font-semibold text-slate-900 dark:text-white">Weather (June/July)</th>
                    <th className="p-4 font-semibold text-slate-900 dark:text-white">Vibe</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-4 font-medium">Seattle</td>
                    <td className="p-4">22°C / 71°F</td>
                    <td className="p-4">Coffee culture, music, maritime</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Bay Area</td>
                    <td className="p-4">26°C / 79°F</td>
                    <td className="p-4">Tech, innovation, modern suburbs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Los Angeles</td>
                    <td className="p-4">28°C / 82°F</td>
                    <td className="p-4">Beaches, nightlife, Hollywood</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              Bring layers for San Francisco—summer evenings are surprisingly cold.
            </p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Practical Tips */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🧳 Practical Tips for Group D Fans</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Don’t try to drive Seattle → LA</h3>
                <p className="text-slate-700 dark:text-slate-300">20 hours, multiple states, exhausting. Not worth it unless you’re doing a scenic trip.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Book early</h3>
                <p className="text-slate-700 dark:text-slate-300">LA, SF, and Seattle are top global summer destinations even without the World Cup.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Public transit &gt; rideshare</h3>
                <p className="text-slate-700 dark:text-slate-300">Especially for stadiums in SF and LA.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">4. ESTA / Visa</h3>
                <p className="text-slate-700 dark:text-slate-300">All international travelers must verify ESTA or U.S. visa entry requirements.</p>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* CTA Section */}
          <section className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🎟️ Ready for the West Coast Experience?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              This is one of the most exciting groups of the tournament. Lock in your base city and flights before prices surge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/flights" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#01b47d] hover:bg-[#008f63] text-white font-bold transition-colors text-lg shadow-lg shadow-[rgba(1,180,125,0.2)]"
              >
                Search Flights →
              </Link>
              <Link 
                to="/hotels" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#01b47d] text-white font-bold border border-[#01b47d] hover:bg-[#008f63] transition-colors text-lg"
              >
                Book Hotels in Group D Cities →
              </Link>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}
