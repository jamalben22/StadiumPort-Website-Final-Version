import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Trophy, Plane, Sun, Mountain, Info, ArrowRight, Star, Clock, Wallet, Heart, Camera, Bus, Car, ShieldCheck, Droplets, Utensils, AlertTriangle, Zap, Globe, DollarSign, Thermometer, Umbrella, Coffee, Ticket, Train, PiggyBank, MessageCircle, CheckCircle2, Briefcase, HelpCircle, ExternalLink, Search } from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function GroupAPage() {
  return (
    <>
      <Helmet>
        <title>Group A World Cup 2026: Complete Travel Guide | Stadiumport</title>
        <meta name="description" content="Complete travel guide for Group A of the 2026 World Cup. Mexico City, Guadalajara, and Monterrey. Opening ceremony, stadiums, and cultural tips." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#008f63] via-slate-900 to-slate-900 text-white py-24 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/80"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#01b47d]/20 border border-[#01b47d]/30 text-[#01b47d] font-medium text-sm mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-emerald-300" />
              <span>The Opening Ceremony Group</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Group A World Cup 2026: <br className="hidden md:block" />
              <span className="text-[#01b47d]">Complete Travel Guide</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light text-slate-300 mb-8 max-w-3xl">
              Mexico's Football Triangle — The Opening Ceremony Group
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#01b47d]" />
                <span>Last Updated: December 5, 2025</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#01b47d]" />
                <span>Draw Date: December 5, 2025</span>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-6 md:px-12 py-16">
          
          {/* Introduction */}
          <section className="mb-20">
            <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
              <p className="lead text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                Group A holds a special distinction in World Cup 2026 history: <strong className="text-[#008f63] dark:text-[#01b47d]">this is where the tournament begins.</strong> On June 11, 2026, Estadio Azteca in Mexico City will host the opening ceremony and Mexico's first match, making Group A the most prestigious and culturally immersive cluster in the entire tournament.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                All Group A matches are hosted exclusively in <strong className="text-slate-900 dark:text-slate-100">Mexico's three most passionate football cities</strong>: Mexico City, Guadalajara, and Monterrey. This creates an incredibly compact, efficient travel route through the birthplace of Latin American football greatness.
              </p>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Why Group A is the Ultimate World Cup Experience */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <Trophy className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Why Group A is the Ultimate World Cup Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Opening Ceremony Advantage</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span><strong>June 11, 2026</strong>: The world watches as Estadio Azteca hosts its third World Cup opening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>Group A teams and fans receive unprecedented global media attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>First matches set the tournament's emotional tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>Travel infrastructure will be at peak readiness</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d] mb-6">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Geographic Perfection</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Unlike groups scattered across three countries, Group A offers:</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span><strong>Three cities, one country, zero border crossings</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>Flight times under 90 minutes between all venues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>Compact travel = lower costs, more football, less stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#01b47d] mt-1.5">•</span>
                    <span>Shared currency (Mexican Peso), language, and culture</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cultural Immersion</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">This is Mexico at its most authentic:</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span>Aztec pyramids within metro distance of stadiums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span>Mariachi birthplace (Guadalajara)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span>Tequila distilleries offering match-day tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span>Street food recognized as UNESCO Intangible Cultural Heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span>Football culture that rivals anywhere on Earth</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* The Three Stadiums */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                The Three Stadiums: Where Legends Are Made
              </h2>
            </div>

            <div className="space-y-16">
              {/* Stadium 1: Estadio Azteca */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">Mexico City</span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">The Colossus</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">1. Estadio Azteca</h3>
                      <p className="text-lg text-slate-500 dark:text-slate-400">FIFA Tournament Name: <strong>Estadio Ciudad de México</strong></p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span><strong>Capacity:</strong> 87,523</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4" />
                        <span><strong>Altitude:</strong> 2,200 meters (7,218 feet)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span><strong>Home to:</strong> Club América, Mexico National Team</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-yellow-500" /> Why It Matters
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Estadio Azteca isn't just a stadium—it's a monument to football history. The only venue worldwide to host <strong className="text-slate-900 dark:text-white">three FIFA World Cups</strong> (1970, 1986, 2026), it witnessed:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 mb-4">
                        <li>Pelé lifting the 1970 trophy</li>
                        <li>Diego Maradona's "Hand of God" and "Goal of the Century" (1986)</li>
                        <li>Mexico's most passionate home atmosphere</li>
                      </ul>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm bg-yellow-50 dark:bg-yellow-900/10 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                        The altitude significantly impacts play, reducing oxygen availability by approximately 20% compared to sea level, which favors teams with acclimatized players and affects ball flight dynamics.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Stadium Renovations for 2026</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-green-500">✓</span> $100 million upgrade completed March 2026</li>
                          <li className="flex items-start gap-2"><span className="text-green-500">✓</span> New LED lighting system (FIFA Standard A)</li>
                          <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Redesigned player tunnels and locker rooms</li>
                          <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Enhanced VIP hospitality zones</li>
                          <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Hybrid grass pitch optimized for altitude</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Getting There</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                          <li>• 30 minutes from Mexico City International Airport (MEX)</li>
                          <li>• Metro Line 2 to "Taxqueña" station, then light rail</li>
                          <li>• Uber/DiDi widely available ($8-15 USD from city center)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                      Read Full Estadio Azteca Stadium Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Read Complete Mexico City Host City Guide
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stadium 2: Estadio Akron */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">Guadalajara</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">2. Estadio Akron</h3>
                      <p className="text-lg text-slate-500 dark:text-slate-400">FIFA Tournament Name: <strong>Estadio Guadalajara</strong></p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span><strong>Capacity:</strong> 48,071</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4" />
                        <span><strong>Altitude:</strong> 1,566 meters (5,141 feet)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span><strong>Home to:</strong> Chivas de Guadalajara</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-red-500" /> Why It Matters
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Guadalajara represents the soul of Mexican football tradition. Chivas—the only major club that exclusively fields Mexican players—commands one of the most loyal fanbases in world football, known as "Rebaño Sagrado" (Sacred Flock).
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        The stadium's volcano-inspired architecture features a distinctive "floating cloud" canopy roof and grass-covered exterior slopes that create one of the most visually striking venues in football.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Cultural Context</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-red-500">•</span> Birthplace of mariachi music (declared UNESCO heritage)</li>
                          <li className="flex items-start gap-2"><span className="text-red-500">•</span> Heart of tequila country (UNESCO World Heritage region 45 minutes away)</li>
                          <li className="flex items-start gap-2"><span className="text-red-500">•</span> More relaxed pace than Mexico City but equally passionate about football</li>
                          <li className="flex items-start gap-2"><span className="text-red-500">•</span> Known as "Pearl of the West" for colonial architecture and artisan traditions</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                        <h4 className="text-sm font-bold text-red-800 dark:text-red-300 mb-1">Travel Note:</h4>
                        <p className="text-sm text-red-700 dark:text-red-400">
                          The stadium is located in Zapopan (Guadalajara metropolitan area), approximately 45-60 minutes by Uber from the historic city center. Budget extra time for traffic on match days.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                      Read Full Estadio Akron Stadium Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Read Complete Guadalajara Host City Guide
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stadium 3: Estadio BBVA */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#01b47d]"></div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] text-xs font-bold uppercase tracking-wider">Monterrey</span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">The Steel Giant</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">3. Estadio BBVA</h3>
                      <p className="text-lg text-slate-500 dark:text-slate-400">FIFA Tournament Name: <strong>Estadio Monterrey</strong></p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span><strong>Capacity:</strong> 53,500</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4" />
                        <span><strong>Altitude:</strong> 540 meters (1,772 feet)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span><strong>Home to:</strong> CF Monterrey (Rayados)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-[#01b47d]" /> Why It Matters
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Dubbed "El Gigante de Acero" (The Steel Giant), Estadio BBVA represents Mexico's modern football evolution. Opened in 2015 at a cost of $200 million, it features:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 mb-4">
                        <li>The most dramatic backdrop in world football: <strong>Cerro de la Silla Mountain</strong> (1,820m peak)</li>
                        <li>Seats just 9 meters from the pitch (closest in Mexico)</li>
                        <li>324 luxury skyboxes (highest concentration in Latin America)</li>
                        <li>LEED Silver environmental certification</li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Design Inspiration</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          The aluminum-clad exterior pays homage to Monterrey's steel manufacturing heritage, while the curved roof evokes the brewing vats of local beer producers (Dos Equis, Tecate).
                        </p>
                      </div>
                      <div className="bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-4 rounded-xl border border-[#01b47d]/10 dark:border-[#008f63]/30">
                        <h4 className="text-sm font-bold text-[#008f63] dark:text-[#01b47d] mb-1">Match Experience:</h4>
                        <p className="text-sm text-[#008f63] dark:text-[#01b47d]">
                          Arrive early to photograph the mountain backdrop from the north stands—it's one of football's most Instagram-worthy views. The asymmetric roof design frames Cerro de la Silla perfectly while providing shade from Monterrey's intense heat.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                      Read Full Estadio BBVA Stadium Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Read Complete Monterrey Host City Guide
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Essential Match Schedule Information */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Essential Match Schedule Information
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Group A Match Dates</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-6">
                    Post-Draw Update Coming Dec 5
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                      <div className="w-12 h-12 rounded-full bg-[#01b47d] text-white flex flex-col items-center justify-center font-bold text-xs shadow-md">
                        <span>JUN</span>
                        <span className="text-lg">11</span>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-900 dark:text-white">Mexico's Opening Match</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Estadio Azteca, Mexico City</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 opacity-75">
                      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex flex-col items-center justify-center font-bold text-xs">
                        <span>JUN</span>
                        <span className="text-lg">18</span>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-900 dark:text-white">Matchday 2</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">2026</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 opacity-75">
                      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex flex-col items-center justify-center font-bold text-xs">
                        <span>JUN</span>
                        <span className="text-lg">24</span>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-900 dark:text-white">Matchday 3</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">2026</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Kickoff Times</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Expect matches at <strong>12:00, 15:00, 18:00, or 21:00</strong> local time (Central Time Zone UTC-6)
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-900/30 flex gap-4">
                    <Info className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm font-medium italic">
                      Note: Specific team matchups will be determined at the FIFA World Cup Draw on December 5, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* City-by-City Travel Intelligence */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <Plane className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                City-by-City Travel Intelligence
              </h2>
            </div>

            <div className="space-y-20">
              {/* City 1: Mexico City */}
              <div className="space-y-8">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Mexico City - The Ancient Capital</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Population: 22+ million</span>
                    <span className="hidden md:inline text-slate-300">|</span>
                    <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> Vibe: Historic chaos meets modern sophistication</span>
                  </div>
                  <p className="mt-2 text-[#01b47d] dark:text-[#01b47d] font-medium">Best For: Museums, street food, ancient ruins, nightlife</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Where to Stay */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-[#01b47d]" /> Where to Stay
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">1. Polanco <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Luxury/Safety</span></h5>
                          <span className="text-xs font-bold text-slate-500">$180-350/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>5-star hotels: St. Regis, W Mexico City, JW Marriott</li>
                          <li>Upscale shopping and dining</li>
                          <li>20 minutes to Estadio Azteca</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">2. Roma Norte / Condesa <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Hipster</span></h5>
                          <span className="text-xs font-bold text-slate-500">$80-180/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Boutique hotels and Airbnbs</li>
                          <li>Trendy restaurants, bars, coffee shops</li>
                          <li>25-30 minutes to stadium</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">3. Reforma Corridor <span className="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-2">Business</span></h5>
                          <span className="text-xs font-bold text-slate-500">$120-250/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>International chains (Hilton, Hyatt, Sheraton)</li>
                          <li>Central location, easy Uber access</li>
                          <li>20-25 minutes to stadium</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Food */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" /> Must-Experience
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Teotihuacán Pyramids</strong> (1-hour from city): Climb the Pyramid of the Sun before it gets crowded (arrive 8am)</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Museo Nacional de Antropología</strong>: World-class Aztec and Maya artifacts (3-4 hours needed)</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Mercado Roma</strong>: Upscale food market with craft beer and artisanal vendors</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Xochimilco Floating Gardens</strong>: Rent a colorful trajinera boat, bring mariachis and snacks</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Lucha Libre at Arena México</strong>: Mexican wrestling spectacle (Tuesday, Friday, Sunday nights)</span></li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" /> Food You Cannot Miss
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                        <li><strong>Tacos al Pastor:</strong> El Tizoncito, El Huequito, Taquería Orinoco</li>
                        <li><strong>Fine Dining:</strong> Pujol (#13 World's 50 Best), Quintonil, Sud 777</li>
                        <li><strong>Street Food:</strong> Tacos de canasta at metro stations, churros at El Moro</li>
                        <li><strong>Markets:</strong> Mercado San Juan for exotic ingredients, Mercado de Coyoacán</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-xl border border-orange-100 dark:border-orange-900/30">
                    <h4 className="text-sm font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                      <Mountain className="w-4 h-4" /> Altitude Adjustment (2,240m)
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1 list-disc pl-4">
                      <li>Mild shortness of breath & faster intoxication</li>
                      <li>Dehydration (drink 3-4L water daily)</li>
                      <li>Allow 24-48 hours to acclimatize before strenuous activity</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4" /> Safety Notes
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                      <li>Use Uber/DiDi instead of street taxis</li>
                      <li>Avoid displaying expensive jewelry/electronics</li>
                      <li>Polanco, Roma, Condesa, and Coyoacán are safest neighborhoods</li>
                      <li>Tourist zones around stadiums see increased security</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                    Read Full Mexico City Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* City 2: Guadalajara */}
              <div className="space-y-8 pt-12 border-t border-slate-100 dark:border-slate-800">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Guadalajara - Mariachi & Tequila Heartland</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Population: 5.3 million</span>
                    <span className="hidden md:inline text-slate-300">|</span>
                    <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> Vibe: Traditional Mexican culture with modern amenities</span>
                  </div>
                  <p className="mt-2 text-[#01b47d] dark:text-[#01b47d] font-medium">Best For: Tequila tours, authentic food, colonial architecture</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Where to Stay */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-[#01b47d]" /> Where to Stay
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">1. Providencia <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Safe/Upscale</span></h5>
                          <span className="text-xs font-bold text-slate-500">$90-180/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Close to Estadio Akron</li>
                          <li>Modern hotels and shopping</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">2. Colonia Americana <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Cultural/Cool</span></h5>
                          <span className="text-xs font-bold text-slate-500">$70-150/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Named one of the world's coolest neighborhoods</li>
                          <li>Art galleries, cafes, nightlife</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">3. Centro Histórico <span className="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-2">Historic/Budget</span></h5>
                          <span className="text-xs font-bold text-slate-500">$50-120/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Beautiful colonial architecture</li>
                          <li>Less safe after dark (stay aware)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Food */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" /> Must-Experience
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Tequila Town</strong> (1 hour away): UNESCO World Heritage Site. Tour Jose Cuervo or Casa Herradura.</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Hospicio Cabañas</strong>: UNESCO site with José Clemente Orozco murals</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Mercado San Juan de Dios</strong>: One of Latin America's largest indoor markets</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> <span><strong>Tlaquepaque & Tonalá</strong>: Artisan villages famous for pottery and blown glass</span></li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" /> Signature Foods
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                        <li><strong>Torta Ahogada:</strong> "Drowned sandwich" (Tortas Ahogadas el Güero)</li>
                        <li><strong>Birria:</strong> Slow-cooked goat stew (Birriería Las 9 Esquinas)</li>
                        <li><strong>Carne en su Jugo:</strong> Beef broth with bacon (Karnes Garibaldi)</li>
                        <li><strong>Tejuino:</strong> Fermented corn drink</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Match Day Tradition
                  </h4>
                  <p className="text-red-700 dark:text-red-400">
                    Arrive at Plaza de Armas 3-4 hours before kickoff to join fan gatherings, mariachi performances, and street celebrations. This is where Guadalajara's football passion becomes visible.
                  </p>
                </div>

                <div className="flex justify-start">
                  <Link to="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                    Read Full Guadalajara Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* City 3: Monterrey */}
              <div className="space-y-8 pt-12 border-t border-slate-100 dark:border-slate-800">
                <div className="border-l-4 border-[#01b47d] pl-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Monterrey - The Mountain Metropolis</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Population: 5.3 million</span>
                    <span className="hidden md:inline text-slate-300">|</span>
                    <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> Vibe: Wealthy, modern, business-focused with stunning natural setting</span>
                  </div>
                  <p className="mt-2 text-[#01b47d] dark:text-[#01b47d] font-medium">Best For: Mountain scenery, modern dining, outdoor adventure</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Where to Stay */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-[#01b47d]" /> Where to Stay
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">1. San Pedro Garza García <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Luxury/Safest</span></h5>
                          <span className="text-xs font-bold text-slate-500">$150-350/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Mexico's wealthiest suburb</li>
                          <li>Ultra-luxury hotels</li>
                          <li>15 minutes to stadium</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">2. Barrio Antiguo <span className="text-xs font-normal text-[#01b47d] bg-[#01b47d]/10 dark:bg-[#008f63]/30 px-2 py-0.5 rounded ml-2">Nightlife</span></h5>
                          <span className="text-xs font-bold text-slate-500">$80-160/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Colorful colonial buildings</li>
                          <li>Bars, clubs, museums</li>
                          <li>20 minutes to stadium</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold text-slate-900 dark:text-white">3. Near Estadio BBVA <span className="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-2">Convenience</span></h5>
                          <span className="text-xs font-bold text-slate-500">$100-200/night</span>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                          <li>Limited character but walking distance to venue</li>
                          <li>Chain hotels</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Must-Experience */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" /> Must-Experience
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span> 
                        <div>
                          <strong>Cerro de la Silla Hike</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Moderate difficulty, 3-4 hours round trip, incredible city views</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span> 
                        <div>
                          <strong>Parque Fundidora</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Former steel mill converted to massive urban park</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span> 
                        <div>
                          <strong>Paseo Santa Lucía</strong>
                          <p className="text-xs text-slate-500 mt-0.5">2.5km riverwalk connecting downtown to Parque Fundidora</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span> 
                        <div>
                          <strong>Macroplaza</strong>
                          <p className="text-xs text-slate-500 mt-0.5">One of the world's largest public squares</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span> 
                        <div>
                          <strong>Grutas de García</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Stunning cave system 45 minutes outside city</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-[#01b47d]" /> Modern Dining Scene
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Monterrey has evolved into Mexico's fine dining capital outside CDMX:</p>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li><strong>Pangea:</strong> Tasting menu focused on northern Mexican ingredients</li>
                      <li><strong>Koli Cocina de Origen:</strong> Modern regional cuisine</li>
                      <li><strong>Mochomos:</strong> Premium steakhouse (famous for carne asada)</li>
                    </ul>
                  </div>

                  <div className="bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-6 rounded-2xl border border-[#01b47d]/10 dark:border-[#008f63]/30">
                    <h4 className="font-bold text-[#008f63] dark:text-[#01b47d] mb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5" /> Stadium Photo Tip
                    </h4>
                    <p className="text-[#008f63] dark:text-[#01b47d] text-sm mb-4">
                      The north stands of Estadio BBVA offer the iconic Cerro de la Silla mountain backdrop. Arrive 90 minutes early for sunset photos—the lighting is perfect 30-45 minutes before kickoff.
                    </p>
                    <Link to="#" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-[#01b47d]/10 dark:bg-[#008f63] text-[#008f63] dark:text-[#01b47d]/20 font-semibold text-sm hover:bg-[#008f63]/20 dark:hover:bg-[#008f63] transition-colors">
                      Read Full Monterrey Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* How to Travel Between Group A Cities */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <Plane className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                How to Travel Between Group A Cities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-[#01b47d] dark:border-[#01b47d]/50 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#01b47d] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#01b47d]" /> Domestic Flights
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Mexico's domestic aviation network is excellent and affordable.</p>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Flight Times:</h4>
                    <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                      <li><strong>CDMX ↔ GDL:</strong> 1h 10min (15+ daily)</li>
                      <li><strong>CDMX ↔ MTY:</strong> 1h 25min (20+ daily)</li>
                      <li><strong>GDL ↔ MTY:</strong> 1h 30min (10+ daily)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Cost:</h4>
                    <p className="text-slate-600 dark:text-slate-400">$60-150 USD one-way</p>
                  </div>
                  <div className="bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-3 rounded-lg border border-[#01b47d]/10 dark:border-[#008f63]/30">
                    <p className="text-xs text-[#008f63] dark:text-[#01b47d]">
                      <strong>Pro Tip:</strong> Book directly with airlines (Aeroméxico, Volaris, Viva Aerobus) and check-in online 24h before.
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#01b47d]" /> Luxury Buses
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Mexico's first-class bus network rivals European train systems.</p>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Best For:</h4>
                    <p className="text-slate-600 dark:text-slate-400">Night travel between CDMX and Guadalajara (6-7 hours). Save on hotel night.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Companies:</h4>
                    <p className="text-slate-600 dark:text-slate-400">ETN, Primera Plus, Estrella de Oro</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Avoid:</h4>
                    <p className="text-slate-600 dark:text-slate-400">Routes to Monterrey (too long, 9-12 hours).</p>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-75">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Car className="w-5 h-5 text-red-500" /> Car Rental
                </h3>
                <p className="text-sm text-red-500 font-medium mb-4">Not Recommended for Group A</p>
                
                <div className="space-y-4 text-sm">
                  <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                    <li>Toll roads are expensive ($60-100 USD)</li>
                    <li>8-12 hour drives are exhausting</li>
                    <li>Parking at stadiums is chaotic</li>
                    <li>Insurance requirements are complex</li>
                  </ul>
                  <p className="text-slate-600 dark:text-slate-400 italic">Better to fly and use Uber in each city.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Local Transportation */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Local Transportation in Each City
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CDMX */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Mexico City</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Train className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Metro:</strong> Extensive, cheap ($0.25 USD), crowded during rush hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Uber/DiDi:</strong> Safe, affordable ($3-10 USD). Avoid street taxis.</span>
                  </li>
                </ul>
              </div>

              {/* Guadalajara */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Guadalajara</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Uber/DiDi:</strong> Primary transportation ($3-12 USD typical)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Train className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Metro/Light Rail:</strong> Limited but useful</span>
                  </li>
                </ul>
              </div>

              {/* Monterrey */}
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Monterrey</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Uber/DiDi:</strong> Most convenient ($3-10 USD typical)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Train className="w-4 h-4 text-slate-500 mt-0.5" />
                    <span><strong>Metro:</strong> Clean, modern, safe</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Essential Travel Stats */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
              Essential Travel Stats
            </h2>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-slate-400" /> Currency
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Mexican Peso (MXN) - Approx. $1 USD = 17-18 MXN</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" /> Language
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Spanish (English spoken in tourist areas, luxury hotels)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-slate-400" /> Climate (June)
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        <div className="grid sm:grid-cols-3 gap-2">
                          <span><strong>CDMX:</strong> 65-78°F (18-26°C)</span>
                          <span><strong>GDL:</strong> 70-88°F (21-31°C)</span>
                          <span><strong>MTY:</strong> 75-95°F (24-35°C)</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Umbrella className="w-4 h-4 text-slate-400" /> Rainy Season
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">June = afternoon thunderstorms (brief but intense)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" /> Time Zone
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Central Time (UTC-6, same as US Central)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-slate-400" /> Voltage
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">127V, 60Hz (Type A/B plugs - same as USA)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-slate-400" /> Tipping
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">10-15% restaurants, $1-2 USD per bag porters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Safety & Health Essentials */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Safety & Health Essentials
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-6 rounded-2xl border border-[#01b47d]/10 dark:border-[#008f63]/30">
                  <h3 className="text-lg font-bold text-[#008f63] dark:text-[#01b47d] mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5" /> Water Safety
                  </h3>
                  <ul className="text-sm text-[#008f63] dark:text-[#01b47d] space-y-2 list-disc pl-4">
                    <li><strong>DO NOT</strong> drink tap water anywhere in Mexico</li>
                    <li>Bottled water is cheap and available everywhere</li>
                    <li>Ice in restaurants/hotels is usually safe (filtered water)</li>
                    <li>Brush teeth with bottled water to be extra safe</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                  <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <Utensils className="w-5 h-5" /> Food Safety
                  </h3>
                  <ul className="text-sm text-orange-800 dark:text-orange-400 space-y-2 list-disc pl-4">
                    <li>Cooked street food is generally safe if vendor is busy</li>
                    <li>Avoid raw salads at budget establishments</li>
                    <li>"Agua de frutas" (fruit water) is safe if made with purified water</li>
                    <li>Trust your gut: busy vendors = fast turnover = fresh food</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-slate-500" /> Altitude Sickness (CDMX)
                  </h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Drink 3-4 liters of water daily</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Avoid heavy alcohol first 24 hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Eat light meals initially</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Coca tea helps (legal and effective)</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" /> Travel Insurance
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Strongly Recommended for medical emergencies, trip cancellation, and lost baggage.</p>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Recommended: <span className="font-normal text-slate-600 dark:text-slate-400">World Nomads, SafetyWing, Allianz Travel</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Booking Strategy */}
          <section className="mb-24">
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-12 text-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#01b47d]/20 border border-[#01b47d]/30 text-[#01b47d] text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" /> Strategy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Booking Strategy: Why Early Matters
                </h2>
                <p className="text-lg text-slate-300 mb-8">
                  Group A cities will experience the <strong>highest accommodation demand</strong> of any group. Limited inventory + Opening Ceremony + National Team = <strong>Scarcity</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 className="text-lg font-bold text-white mb-4">Price Escalation Timeline</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex justify-between"><span>12+ months before</span> <span className="text-[#01b47d]">Normal</span></li>
                      <li className="flex justify-between"><span>6-12 months before</span> <span className="text-yellow-400">+20-40%</span></li>
                      <li className="flex justify-between"><span>3-6 months before</span> <span className="text-orange-400">+50-100%</span></li>
                      <li className="flex justify-between"><span>1-3 months before</span> <span className="text-red-400">+100-200%</span></li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 className="text-lg font-bold text-white mb-4">Smart Tactics</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start gap-2"><span className="text-[#01b47d]">1.</span> Book refundable rates until Dec 5 draw</li>
                      <li className="flex items-start gap-2"><span className="text-[#01b47d]">2.</span> Monitor prices weekly with Google Alerts</li>
                      <li className="flex items-start gap-2"><span className="text-[#01b47d]">3.</span> Consider Airbnb as hotels sell out</li>
                      <li className="flex items-start gap-2"><span className="text-[#01b47d]">4.</span> Book all three cities simultaneously</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Money-Saving Tips */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Money-Saving Tips
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#01b47d]" /> Flights
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-4">
                  <li>Book domestic Mexico flights <strong>before</strong> international arrivals (separate tickets often cheaper)</li>
                  <li>Fly Tuesday-Thursday for lower prices</li>
                  <li>Use Skyscanner price alerts</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-[#01b47d]" /> Accommodation
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-4">
                  <li><strong>Stay in residential neighborhoods</strong>, not tourist zones (50% savings)</li>
                  <li><strong>Share Airbnbs</strong> with friends (split costs)</li>
                  <li><strong>Book Monday-Thursday nights</strong> when possible (weekends spike for finals)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-orange-500" /> Food
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-4">
                  <li>Street tacos: $0.50-1 USD each (2-3 = full meal)</li>
                  <li>Comida corrida (lunch special): $4-7 USD for 3-course meal</li>
                  <li>Markets: Fresh fruit, snacks, drinks at fraction of restaurant prices</li>
                  <li>Bring reusable water bottle, refill at hotels</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-purple-500" /> Transportation
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-4">
                  <li>Uber Pool/DiDi Shared: 30-50% cheaper than solo rides</li>
                  <li>Metro in CDMX: $0.25 USD vs $8-10 Uber</li>
                  <li>Walk when safe (Roma, Condesa, Polanco, Centro Histórico daylight)</li>
                </ul>
              </div>
            </div>

            {/* Daily Budget */}
            <div className="bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-6 rounded-2xl border border-[#01b47d]/10 dark:border-[#008f63]/30">
              <h3 className="text-lg font-bold text-[#008f63] dark:text-[#01b47d] mb-4">Estimated Daily Budget</h3>
              <div className="grid md:grid-cols-3 gap-6">
                 <div>
                   <span className="block text-xs font-bold uppercase tracking-wider text-[#01b47d] dark:text-[#01b47d] mb-1">Budget</span>
                   <span className="text-2xl font-bold text-slate-900 dark:text-white">$50-80 USD</span>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Hostels, street food, public transit</p>
                 </div>
                 <div>
                   <span className="block text-xs font-bold uppercase tracking-wider text-[#01b47d] dark:text-[#01b47d] mb-1">Mid-Range</span>
                   <span className="text-2xl font-bold text-slate-900 dark:text-white">$120-200 USD</span>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">3-star hotels, mix of restaurants, Ubers</p>
                 </div>
                 <div>
                   <span className="block text-xs font-bold uppercase tracking-wider text-[#01b47d] dark:text-[#01b47d] mb-1">Luxury</span>
                   <span className="text-2xl font-bold text-slate-900 dark:text-white">$300+ USD</span>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">5-star hotels, fine dining, private transport</p>
                 </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Cultural Etiquette & Spanish Phrases */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Cultural Etiquette & Spanish Phrases
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Basic Courtesy</h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#34C759] flex-shrink-0" /> Greet with "Buenos días" (morning), "Buenas tardes" (afternoon), "Buenas noches" (evening)</li>
                    <li className="flex items-start gap-2"><span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#34C759] flex-shrink-0" /> Mexicans are warm and friendly—smile and attempt Spanish</li>
                    <li className="flex items-start gap-2"><span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#34C759] flex-shrink-0" /> Haggling expected in markets (not stores/restaurants)</li>
                    <li className="flex items-start gap-2"><span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#34C759] flex-shrink-0" /> Tipping: 10-15% restaurants, round up for taxis</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#01b47d]" /> Football-Specific
                  </h3>
                   <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-slate-900 dark:text-white font-medium">Let's go Mexico!</span>
                      <span className="text-slate-500 italic">¡Vamos México!</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-slate-900 dark:text-white font-medium">Goal!</span>
                      <span className="text-slate-500 italic">¡Gol!</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-slate-900 dark:text-white font-medium">Referee!</span>
                      <span className="text-slate-500 italic">¡Árbitro!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Essential Spanish for Travelers</h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Hello</span>
                    <span className="text-slate-500 italic">Hola (OH-lah)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Please/Thank you</span>
                    <span className="text-slate-500 italic">Por favor / Gracias</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Do you speak English?</span>
                    <span className="text-slate-500 italic">¿Habla inglés?</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">How much?</span>
                    <span className="text-slate-500 italic">¿Cuánto cuesta?</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Where is...?</span>
                    <span className="text-slate-500 italic">¿Dónde está...?</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">The check, please</span>
                    <span className="text-slate-500 italic">La cuenta, por favor</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Bathroom</span>
                    <span className="text-slate-500 italic">Baño</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Help!</span>
                    <span className="text-slate-500 italic">¡Ayuda!</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* What to Pack for Group A */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                What to Pack for Group A
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Essentials */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Essentials</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Valid passport (6+ months)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Travel insurance docs</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Credit cards (Visa/MC)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Cash in USD</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Portable charger</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Universal adapter</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Sunscreen SPF 50+</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Reusable water bottle</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Light rain jacket</li>
                </ul>
              </div>

              {/* Clothing */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Clothing</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Comfortable walking shoes</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Team jersey/colors</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Layers (CDMX cool nights)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Hat/sunglasses</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> Light, breathable fabrics</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" /> One "nice" outfit</li>
                </ul>
              </div>

              {/* Medications */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Medications</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> Ibuprofen (altitude)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> Imodium (just in case)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> Prescription meds</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /> Hand sanitizer</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Start Planning Your Group A Journey */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Start Planning Your Group A Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#01b47d] rounded-2xl p-8 text-white text-center shadow-lg hover:bg-[#008f63] transition-colors">
                <Plane className="w-10 h-10 mx-auto mb-4 text-[#01b47d]/20" />
                <h3 className="text-xl font-bold mb-2">Book Flights</h3>
                <p className="text-[#01b47d]/10 text-sm mb-6">Find best deals to Mexico City, Guadalajara, and Monterrey.</p>
                <Link to="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#008f63] font-bold rounded-lg hover:bg-[#008f63]/5 transition-colors">
                  Search Group A Flights <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-[#01b47d] rounded-2xl p-8 text-white text-center shadow-lg hover:bg-[#008f63] transition-colors">
                <Wallet className="w-10 h-10 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-2">Reserve Accommodation</h3>
                <p className="text-white/90 text-sm mb-6">Lock in hotels and vacation rentals before prices surge.</p>
                <Link to="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#01b47d] font-bold rounded-lg hover:bg-slate-50 transition-colors">
                  Browse Group A Hotels <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-slate-700 rounded-2xl p-8 text-white text-center shadow-lg hover:bg-slate-800 transition-colors">
                <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-slate-300" />
                <h3 className="text-xl font-bold mb-2">Get Travel Insurance</h3>
                <p className="text-slate-300 text-sm mb-6">Protect your investment with comprehensive coverage.</p>
                <Link to="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#01b47d] text-white font-bold rounded-lg hover:bg-[#008f63] transition-colors">
                  Compare Insurance Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-20"></div>

          {/* Related Guides & FAQ */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Related Guides */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Related World Cup 2026 Guides</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#01b47d] dark:text-[#01b47d] mb-3 uppercase text-xs tracking-wider">Tournament Essentials</h4>
                  <ul className="space-y-3 text-sm">
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> World Cup 2026 Complete Travel Guide</Link></li>
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Draw Breakdown & Bracket Analysis (Updates Dec 5)</Link></li>
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Ticketing Guide & Resale Markets</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#01b47d] dark:text-[#01b47d] mb-3 uppercase text-xs tracking-wider">Other Group Guides</h4>
                  <ul className="space-y-3 text-sm">
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Group B Travel Guide</Link></li>
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Group C Travel Guide</Link></li>
                    <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> All 12 Groups Overview</Link></li>
                  </ul>
                </div>
                <div>
                   <h4 className="font-bold text-[#01b47d] dark:text-[#01b47d] mb-3 uppercase text-xs tracking-wider">Mexico Deep Dives</h4>
                   <ul className="space-y-3 text-sm">
                     <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Mexico City Complete Guide</Link></li>
                     <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Guadalajara Complete Guide</Link></li>
                     <li><Link to="#" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#008f63] dark:hover:text-[#008f63] group"><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> Monterrey Complete Guide</Link></li>
                   </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#01b47d]" /> Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: When is the December 5 draw, and how will it affect Group A?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: The FIFA World Cup 2026 Official Draw happens December 5, 2025. It will reveal which 4 teams are assigned to Group A. This guide will be updated immediately after with team-specific travel considerations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: Do I need a visa to visit Mexico?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: US, Canadian, EU, UK, Australian, and most Latin American citizens receive automatic 180-day tourist permits upon arrival. No advance visa required. Check mexico.travel for your specific nationality.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: Is it safe to travel to Mexico during the World Cup?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: Tourist areas in Mexico City, Guadalajara, and Monterrey are generally safe, especially during major international events when security is heightened. Use common sense: avoid displaying valuables, use official transportation, stay in well-trafficked areas at night. FIFA and Mexican authorities will implement extensive security around stadiums and Fan Fest zones.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: Can I use US dollars in Mexico?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: Some tourist businesses accept USD, but you'll get poor exchange rates. Use ATMs to withdraw pesos (check if your bank charges international fees), or exchange at airport kiosks. Credit cards work at most hotels/restaurants/stores.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: How early should I arrive at stadiums?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: Aim for 2-3 hours before kickoff for security screening lines, finding your seat, pre-match atmosphere, food/drinks, and restroom visits before crowds peak.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: What's the best way to get World Cup tickets?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: Official tickets sold through FIFA.com in phases. Sign up for FIFA account now and enable all notifications. Resale markets (StubHub, Viagogo) will have markup. Hospitality packages (guaranteed tickets + extras) are available through official FIFA partners.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Q: Can I buy tickets at the stadium?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A: No. World Cup matches are 100% advance ticketing through digital/mobile tickets. No walk-up sales. No physical tickets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
            <p className="text-slate-900 dark:text-white font-medium mb-2">Last Verified: December 5, 2025</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              Stadiumport is an independent travel guide and is not affiliated with FIFA. All recommendations are based on verified data and firsthand research.
            </p>
          </div>

        </main>
        
        <Footer />
      </div>
    </>
  );
}
