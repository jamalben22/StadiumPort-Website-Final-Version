import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupBPage() {
  return (
    <>
      <Helmet>
        <title>Group B World Cup 2026 Travel Guide – Toronto, Vancouver, Seattle & Bay Area | Stadiumport</title>
        <meta name="description" content="Explore the complete Group B travel guide for the 2026 FIFA World Cup. Discover host cities, stadiums, where to stay, border rules, mobility tips, and the best routes across Toronto, Vancouver, Seattle, and San Francisco." />
        <meta name="keywords" content="Group B World Cup 2026 travel, Canada World Cup 2026 travel, Toronto World Cup travel, Vancouver World Cup travel, Seattle World Cup travel, Levi’s Stadium World Cup travel" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7]">
        <main className="pt-28 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/40 text-[#008f63] dark:text-[#01b47d] font-bold border border-[#01b47d]/20 dark:border-[#008f63]">
              ✅ GROUP B — The Great North & West Travel Guide
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-400 italic">
              *A Transcontinental World Cup Journey Through Canada & the Pacific Coast*
            </p>
          </div>

          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
              H1: Group B Travel Guide — The Great North & West
            </h1>
            <div className="space-y-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                From the shimmering shores of Lake Ontario to the misty peaks of the Pacific Northwest, Group B delivers one of the most dramatic geographic shifts of the entire 2026 tournament. Fans will experience <strong>Toronto’s multicultural energy</strong> before jumping across the continent to the coastal icons of <strong>Vancouver, Seattle, and the San Francisco Bay Area</strong>.
              </p>
              <p>
                This is the “Canadian Group,” but it’s also a love letter to the North American West—forests, ocean air, mountain skylines, coffee culture, and some of the world’s most unique stadium atmospheres.
              </p>
              <p>
                It requires one long-haul flight, but once you reach the Pacific Corridor, the journey becomes a scenic, laid-back breeze.
              </p>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: Host Cities & Stadiums</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">(Link each city and stadium to your existing guides.)</p>

            <div className="space-y-10">
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Toronto — The Opening Act</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> BMO Field</p>
                  <p><strong>Capacity:</strong> ~45,000 (expanded for WC26)</p>
                  <p><strong>Vibe:</strong> International, energetic, historic stage for Canada’s hosting kickoff.</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  Toronto will host one of the tournament’s flagship opening matches. Expect massive crowds, intense media coverage, and an electric multicultural atmosphere unmatched anywhere else in Canada.
                </p>
                <div className="mt-6 space-y-2 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide">➡️ <span className="italic">Link: Toronto Host City Guide</span></Link>
                  <Link to="/world-cup-2026-stadiums/bmo-field-guide">➡️ <span className="italic">Link: BMO Field Stadium Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Vancouver — The Pacific Hub</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> BC Place</p>
                  <p><strong>Capacity:</strong> 54,500</p>
                  <p><strong>Vibe:</strong> Coastal, scenic, modern, ultra-photogenic.</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  A city where mountains touch the sea. BC Place’s translucent roof creates one of the loudest indoor atmospheres in North America, while the surrounding city offers world-class natural views at every turn.
                </p>
                <div className="mt-6 space-y-2 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide">➡️ <span className="italic">Link: Vancouver Host City Guide</span></Link>
                  <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide">➡️ <span className="italic">Link: BC Place Stadium Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Seattle — The Emerald City</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Lumen Field</p>
                  <p><strong>Capacity:</strong> 69,000</p>
                  <p><strong>Vibe:</strong> Passionate, loud, legendary fan culture.</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  Seattle is arguably the heart of American soccer culture. Expect the famous “March to the Match,” booming supporter sections, and unmatched acoustic noise in a stadium engineered to amplify sound.
                </p>
                <div className="mt-6 space-y-2 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide">➡️ <span className="italic">Link: Seattle Host City Guide</span></Link>
                  <Link to="/world-cup-2026-stadiums/lumen-field-guide">➡️ <span className="italic">Link: Lumen Field Stadium Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">San Francisco Bay Area — California Tech Coast</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Stadium:</strong> Levi’s Stadium (Santa Clara)</p>
                  <p><strong>Capacity:</strong> 68,500</p>
                  <p><strong>Vibe:</strong> Sunny, high-tech, open-air.</p>
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  Although branded “San Francisco,” the stadium sits in Silicon Valley’s clean, modern districts. Expect immaculate weather, efficient transit, and premium amenities.
                </p>
                <div className="mt-6 space-y-2 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide">➡️ <span className="italic">Link: Bay Area Host City Guide</span></Link>
                  <Link to="/world-cup-2026-stadiums/levis-stadium-guide">➡️ <span className="italic">Link: Levi’s Stadium Stadium Guide</span></Link>
                </div>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: The Group B Experience — Coastal Majesty Meets Northern Energy</h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">Group B is defined by nature, coastlines, and contrast.</p>
            <div className="space-y-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                You’ll begin in <strong>Toronto</strong>, a bustling global capital of skyscrapers, lakefront promenades, and multicultural food. Then you head west—into the serene, forest-lined world of <strong>Cascadia</strong>: Vancouver and Seattle, two cities famous for mountains, fresh air, and a coffee culture as serious as their soccer fandom.
              </p>
              <p>
                Continue south to the <strong>San Francisco Bay Area</strong>, where sunshine and tech culture meet world-class dining and iconic landmarks.
              </p>
            </div>
            <p className="font-semibold mt-6 mb-3">Expect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>Unmatched scenery</strong> (Pacific mountains + harbors)</li>
              <li><strong>Ultra-loud stadiums</strong> (BC Place & Lumen Field are famous for noise)</li>
              <li><strong>Modern, clean infrastructure</strong></li>
              <li><strong>World-class seafood, sushi, coffee, and microbreweries</strong></li>
              <li><strong>A friendly, relaxed fan environment</strong></li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">This is one of the most <strong>photogenic and comfortable</strong> travel groups of the entire tournament.</p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: Key Travel Stats</h2>
            <div className="overflow-x-auto bg-white dark:bg-[#1c1c1e] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-4 font-bold">Climate</td>
                    <td className="p-4">Mild / Coastal (cooler in evenings)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Currencies</td>
                    <td className="p-4">CAD (Canada) / USD (USA)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Border Requirements</td>
                    <td className="p-4">Passport needed; some fans require visas or ESTA</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Safety Level</td>
                    <td className="p-4">Very High in all four metro areas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: City-by-City Breakdown</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-8">Below is your premium summary for the Group B page. <span className="italic">(Deeper details should link to your full city guides.)</span></p>

            <div className="space-y-12">
              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Toronto — The Global Gateway</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">Toronto sets the stage for Group B with world-class energy and diversity. It’s North America’s most multicultural city, with neighborhoods representing every corner of the globe.</p>
                <p className="font-semibold mb-3">Best Areas to Stay:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Liberty Village</strong> — walkable to BMO Field, trendy cafés, young vibe.</li>
                  <li><strong>King West</strong> — nightlife, upscale dining, central location.</li>
                  <li><strong>Downtown Core</strong> — chain hotels, transit access, waterfront.</li>
                </ul>
                <p className="font-semibold mt-4">Transit Tip:</p>
                <p className="text-slate-700 dark:text-slate-300">Use the <strong>GO Train to Exhibition Station</strong> on match days—faster, cleaner, and more reliable than streetcars stuck in traffic.</p>
                <div className="mt-4 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide">➡️ <span className="italic">Link: Full Toronto Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Vancouver — Glass City by the Sea</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">Vancouver is consistently ranked one of the world’s most livable cities. Expect ocean breezes, mountain backdrops, clean streets, and one of the best stadium atmospheres in the tournament.</p>
                <p className="font-semibold mb-3">Best Areas to Stay:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Yaletown</strong> — stylish restaurants, marina views, close to BC Place.</li>
                  <li><strong>Gastown</strong> — historic, lively, nightlife (edges can be gritty).</li>
                  <li><strong>Coal Harbour</strong> — upscale, quiet, the best views in the city.</li>
                </ul>
                <p className="font-semibold mt-4">What to Eat:</p>
                <p className="text-slate-700 dark:text-slate-300">Vancouver sushi is legendary. Try <strong>Aburi Oshi Sushi</strong>, a local specialty.</p>
                <div className="mt-4 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide">➡️ <span className="italic">Link: Full Vancouver Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Seattle — Soccer City USA</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">Seattle fans bring Premier League-level passion to North America. Lumen Field is built to trap sound, making it one of the loudest stadiums in the world.</p>
                <p className="font-semibold mb-3">Best Areas to Stay:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Pioneer Square</strong> — steps from the stadium; historic, convenient.</li>
                  <li><strong>Capitol Hill</strong> — nightlife, culture, LGBTQ+ friendly, great cafés.</li>
                  <li><strong>South Lake Union</strong> — modern, clean, tech-focused district.</li>
                </ul>
                <p className="font-semibold mt-4">Fan Experience:</p>
                <p className="text-slate-700 dark:text-slate-300">Arrive early for the <strong>March to the Match</strong>, one of America’s great soccer traditions.</p>
                <div className="mt-4 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide">➡️ <span className="italic">Link: Full Seattle Guide</span></Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">San Francisco Bay Area — Sunshine & Silicon Valley</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">The Bay Area offers the easiest weather and smoothest logistics of Group B. Levi’s Stadium is in Santa Clara, close to airports, hotels, and effortless transit.</p>
                <p className="font-semibold mb-3">Best Areas to Stay:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Santa Clara / San Jose</strong> — closest to the stadium; no-stress matchdays.</li>
                  <li><strong>San Francisco (City)</strong> — iconic attractions; allow 90 minutes to reach the stadium.</li>
                </ul>
                <p className="font-semibold mt-4">Transport Note:</p>
                <p className="text-slate-700 dark:text-slate-300"><strong>VTA Light Rail</strong> is the smartest way to reach Levi’s Stadium. Rideshare zones are congested and often pushed far from the gates.</p>
                <div className="mt-4 text-[#01b47d] dark:text-[#01b47d] font-semibold">
                  <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide">➡️ <span className="italic">Link: Full Bay Area Guide</span></Link>
                </div>
              </div>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: Inter-City Mobility for Group B</h2>

            <h3 className="text-xl md:text-2xl font-bold mb-3">Toronto → Vancouver (The Long Haul)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">Your only major flight of this group.</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
              <li><strong>Duration:</strong> ~5 hours (transcontinental)</li>
              <li><strong>Airlines:</strong> Air Canada, WestJet</li>
              <li><strong>Tip:</strong> Book early—summer demand is extremely high.</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Vancouver → Seattle (The Cascadia Corridor)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">One of the most scenic travel segments of the entire World Cup.</p>
              <p className="text-slate-700 dark:text-slate-300 font-semibold">2 Best Options:</p>
              <h4 className="text-lg md:text-xl font-bold mt-3 mb-2">Amtrak Cascades</h4>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                <li>~4 hours</li>
                <li>Runs along coastline and forests</li>
                <li>Stunning photography route</li>
              </ul>
              <h4 className="text-lg md:text-xl font-bold mt-4 mb-2">Driving</h4>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                <li>~3 hours (depending on border wait)</li>
                <li>Easy, safe highways</li>
                <li>Car rentals often cheaper in Seattle than Vancouver</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Seattle → San Francisco Bay Area</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Direct flights run constantly between SEA, SFO, SJC, and OAK.</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>Flight time:</strong> ~2 hours</li>
                <li><strong>Airlines:</strong> Alaska Airlines dominates the route; also Delta & United.</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Crossing the Canada–US Border</h3>
              <p className="text-slate-700 dark:text-slate-300">You may cross the border multiple times. Check your visa or <strong>ESTA</strong> status for re-entry permissions.</p>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: Book Early — The Pacific Corridor Sells Out Fast</h2>
            <p className="text-slate-700 dark:text-slate-300">Vancouver and Seattle are two of the <strong>most expensive</strong> and <strong>most in-demand</strong> cities for WC26 due to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Limited hotel inventory</li>
              <li>Massive tourism interest</li>
              <li>Local soccer cultures</li>
              <li>High-quality venues</li>
              <li>Border travel demand</li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300">Booking early can save 30–55% compared to matchweek prices.</p>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">H2: Start Planning Your Group B Journey</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Check Flights to Canada & the Pacific Coast</h3>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-black rounded-2xl p-8 text-center text-white">
              <p className="italic">(Place affiliate widget/button here)</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mt-10 mb-3">Book Hotels for Group B Cities</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">Toronto, Vancouver, Seattle, and the Bay Area — compare prices instantly.</p>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-black rounded-2xl p-8 text-center text-white">
              <p className="italic">(Place affiliate widget/button here)</p>
            </div>
          </section>

          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore More 2026 World Cup Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Host Cities & Stadiums</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Toronto Host City Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-stadiums/bmo-field-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">BMO Field Stadium Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Vancouver Host City Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">BC Place Stadium Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Seattle Host City Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-stadiums/lumen-field-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Lumen Field Stadium Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Bay Area Host City Guide</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Levi's Stadium Stadium Guide</Link>
                        </li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Tournament Planning</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/2026-world-cup-draw-travel-hub" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Draw Travel Hub</Link>
                        </li>
                        <li>
                            <Link to="/world-cup-2026-travel-tips" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Travel Tips Guide</Link>
                        </li>
                        <li>
                            <Link to="/2026-world-cup-group-a-travel-guide" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Group A Travel Guide</Link>
                        </li>
                         <li>
                            <Link to="/groups/group-c" className="text-[#01b47d] dark:text-[#01b47d] hover:underline">Group C Travel Guide</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
