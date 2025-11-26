import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function MiamiCityGuide() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/miami-world-cup-2026.webp'
    document.head.appendChild(link)
  }, [])
  const pageUrl = '/world-cup-2026-host-cities/miami-world-cup-2026-guide';
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    const ogImage = `${siteUrl}/images/cities/miami-world-cup-2026.webp`;
    const fullUrl = `${siteUrl}/world-cup-2026-host-cities/miami-world-cup-2026-guide`;
    const entry = getEditorialEntry('city','miami')
    setPageMeta({ 
      title: 'Miami 2026 FIFA World Cup: Complete Travel Guide | StadiumPort', 
      description: 'Complete Miami World Cup 2026 travel guide. 7 matches including Bronze Final at Hard Rock Stadium. Hotels, transportation, attractions, and insider tips for South Florida\'s soccer spectacle.', 
      url: fullUrl, image: ogImage, locale: 'en_US', 
      publishedTime: entry?.isPublished ? entry.datePublished : undefined, 
      modifiedTime: new Date().toISOString(), section: 'Host Cities', 
      tags: ['World Cup 2026', 'Host Cities', 'Miami', 'Hard Rock Stadium', ...(entry?.keywords||[])] 
    })
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities` },
    { name: 'Miami', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities/miami-world-cup-2026-guide` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    'Miami 2026 FIFA World Cup Travel Guide',
    'Complete guide to Miami World Cup 2026 with 7 matches including Bronze Final. Travel tips, hotels, transportation, and attractions in South Florida.',
    `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities/miami-world-cup-2026-guide`,
    { datePublished: (getEditorialEntry('city','miami')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Miami', 'Hard Rock Stadium'] }
  );

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, cityGuideSchema, generateImageObjectSchema('/images/cities/miami-world-cup-2026.webp', { width: 1600, height: 900, caption: 'Miami skyline – World Cup 2026' })]} />
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
        <Header />
        
        {/* Editorial Hero — cohesive with NYC article style */}
        <section className="editorial-hero">
          <div className="editorial-hero-media">
            <OptimizedImage
              src="/images/cities/miami-world-cup-2026.webp"
              alt="Miami skyline at golden hour"
              className="editorial-hero-image-wrapper"
              imgClassName="editorial-hero-image hero-focus-miami"
              width={1600}
              height={900}
              priority={true}
              placeholder="empty"
              sizes="100vw"
            />
            <div className="editorial-hero-overlay"></div>
          </div>

          <div className="editorial-hero-content">
            <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
            </div>
              <nav aria-label="Breadcrumb navigation for Miami" className="breadcrumb-ultra-premium mt-2">
                <ol>
                  <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link" title="Home">
                      <svg className="breadcrumb-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="truncate">Home</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-separator" aria-hidden="true">›</li>
                  <li className="breadcrumb-item">
                    <Link to="/world-cup-2026-host-cities" className="breadcrumb-link" title="Host Cities">
                      <span className="truncate">Host Cities</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <span className="breadcrumb-current" title="Miami" aria-current="page">
                    <span className="truncate">Miami</span>
                  </span>
                </li>
                </ol>
              </nav>
              <h1 className="editorial-hero-title">Miami World Cup 2026: Complete Travel Guide</h1>
              <div className="editorial-hero-meta">
                <div className="meta-item flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradPinM" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPinM)" />
                    <circle cx="12" cy="9" r="2.3" fill="#ffffff" />
                  </svg>
                  <span>USA</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <span>Hard Rock Stadium</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <span>65,326 Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script dangerouslySetInnerHTML={{ __html: '' }} />

        {/* Content Sections — Editorial presentation aligned to LA premium */}
        <section id="main-content" className="editorial-article-premium miami-page py-16">
          
          {/* Introduction */}
          <article className="editorial-body editorial-dropcap theme-emerald">
            {/* Opening Architecture */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
                South Florida's Global Football Festival
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                Your definitive guide to seven high-stakes matches, the prestigious Bronze Final, and navigating Miami's electric fan culture during World Cup 2026.
              </p>
              
              {/* Quick Summary Box */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
                <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider text-sm mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Quick Summary
                </h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> <strong>7 Matches:</strong> Hosting one of the highest allocations including the Bronze Final.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> <strong>Venue:</strong> Hard Rock Stadium (Miami Gardens), 15 miles from downtown.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> <strong>Transport:</strong> Brightline + Shuttle is the recommended route.</li>
                </ul>
                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 8 Min Read</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> Updated Nov 2025</span>
                </div>
              </div>

              {/* [TL;DR SECTION] */}
              <div className="mb-8 p-5 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider text-xs">TL;DR</span>
                  <span className="text-[10px] text-amber-600/60 font-mono">[EXTRACTED FROM CONCLUSION]</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "Book early, plan transit thoughtfully, embrace the heat, and prepare for one of the most memorable World Cup experiences any host city can offer."
                </p>
              </div>

              {/* Table of Contents */}
              <div className="mb-12 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-100 dark:border-navy-700">
                <h4 className="font-serif font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-navy-600 pb-2">In This Guide</h4>
                <nav className="grid md:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                  <a href="#stadium" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">01</span> The Stadium</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#schedule" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">02</span> Match Schedule</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#transport" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">03</span> Transportation</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#accommodation" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">04</span> Neighborhoods</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#attractions" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">05</span> Attractions</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#food" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">06</span> Food Scene</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#practical" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">07</span> Practical Info</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                  <a href="#booking" className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center gap-3"><span className="font-mono text-emerald-500/50 text-xs">08</span> Booking Strategy</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">→</span>
                  </a>
                </nav>
              </div>
            </div>

            <p className="leading-relaxed mb-6">
              When FIFA brings the beautiful game to Miami in summer 2026, nearly a million international fans will descend on South Florida for seven high-stakes matches—more than almost any other host city. Miami is one of the <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 host cities</Link> for the 2026 World Cup. This isn't just another tournament stop. 
            </p>
            
            <div className="my-10 pl-6 border-l-4 border-emerald-500 italic text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              "Miami... promises to transform the World Cup experience into a month-long carnival where every neighborhood becomes a fan zone."
            </div>

            <p className="leading-relaxed mb-6">
              Miami, with its electric cultural energy, world-class beaches, and deep soccer roots, promises to transform the World Cup experience into a month-long carnival where every neighborhood becomes a fan zone.
            </p>
            
            <p className="leading-relaxed">
              If you're planning your pilgrimage to watch football in the Magic City, this guide delivers the real intel you need: where the matches happen, how to actually get around, which neighborhoods to book, and what to do when you're not watching the world's best players battle it out.
            </p>
            {/* [SCROLL ANCHOR: Start of Main Guide] */}
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* Essential Links module - Enhanced */}
          <div className="callout-premium p-6 sm:p-8 bg-slate-50 dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 my-8">
            <div className="font-serif font-bold text-xl text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span>🔗</span> Essential Resources
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-slate-800 dark:text-slate-200">
              <Link to="/world-cup-2026-stadiums/hard-rock-stadium" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-navy-700 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-navy-600 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">🏟️</span>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-emerald-700 dark:text-emerald-400">Stadium Guide</span>
                  <span className="text-xs text-slate-500">Hard Rock Stadium</span>
                </div>
              </Link>
              <Link to="/world-cup-2026-host-cities" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-navy-700 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-navy-600 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">🗺️</span>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-emerald-700 dark:text-emerald-400">Host Cities</span>
                  <span className="text-xs text-slate-500">Explore all 16 venues</span>
                </div>
              </Link>
              <div className="flex flex-col p-3 gap-1">
                 <span className="font-bold text-sm flex items-center gap-2">✈️ Nearby Connections</span>
                 <div className="text-xs flex flex-wrap gap-2">
                    <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="hover:text-emerald-600 underline decoration-slate-300">Atlanta</Link>
                    <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="hover:text-emerald-600 underline decoration-slate-300">Houston</Link>
                    <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="hover:text-emerald-600 underline decoration-slate-300">Mexico City</Link>
                 </div>
              </div>
            </div>
          </div>

            {/* [SCROLL ANCHOR: The Stadium] */}
            <article id="stadium" className="editorial-body theme-emerald">
            {/* [INTERNAL LINK: Hard Rock Stadium Detailed Guide] */}
            {/* [IMAGE PLACEHOLDER: Aerial view of Hard Rock Stadium showing canopy roof] */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                The Stadium: <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="text-emerald-600 hover:text-emerald-700 decoration-2 hover:underline">Hard Rock Stadium</Link>
              </h2>
            </div>
            
            {/* Stat Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg text-center border border-slate-100 dark:border-navy-700">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">65,326</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Capacity</div>
              </div>
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg text-center border border-slate-100 dark:border-navy-700">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Grass</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Surface</div>
              </div>
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg text-center border border-slate-100 dark:border-navy-700">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Canopy</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Protection</div>
              </div>
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg text-center border border-slate-100 dark:border-navy-700">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">15 mi</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">From Downtown</div>
              </div>
            </div>

            <p className="whitespace-pre-line leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              <span className="font-semibold text-slate-900 dark:text-white">📍 347 Don Shula Drive, Miami Gardens, FL 33056</span>
              {`\n\nMiami's World Cup action unfolds at Hard Rock Stadium in Miami Gardens, temporarily rebranded as "Miami Stadium" for the tournament. Located at 347 Don Shula Drive, Miami Gardens, FL 33056, this isn't your typical American football venue awkwardly retrofitted for soccer. The stadium was originally built to FIFA specifications by Miami Dolphins founder Joe Robbie—himself a passionate soccer fan who once owned professional teams in the city.`}
            </p>

            {/* Visual Placeholder */}
            <div className="my-8 bg-slate-100 dark:bg-navy-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-navy-600">
              <div className="text-center p-6">
                <svg className="w-12 h-12 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span className="text-sm text-slate-500 font-medium">[IMAGE PLACEHOLDER: Wide angle interior shot of Hard Rock Stadium during a match]</span>
              </div>
            </div>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              The numbers tell the story of Miami's commitment: 65,326 permanent seats configured for football/soccer, a partial canopy roof that shields fans from Florida's infamous summer rain and blazing sun, and a world-class natural grass playing surface that's hosted El Clásico between Real Madrid and Barcelona (which set North American soccer attendance records). Recent renovations transformed it into a European-style venue with improved sightlines, premium amenities, and technology upgrades.
            </p>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Here's what matters for World Cup visitors: the stadium sits in a suburban setting about 15 miles north of downtown Miami and roughly 20 miles from Miami Beach. There's limited accommodation within walking distance, so you'll need a transportation plan. But the stadium itself? It's proven it can handle the biggest stages—six Super Bowls, the Copa América 2024 Final, and Formula One's Miami Grand Prix. FIFA didn't choose Miami Gardens by accident.
            </p>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Match Schedule] */}
            <article id="schedule" className="editorial-body theme-amber">
            {/* [CITATION: FIFA Official World Cup 2026 Schedule] */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                The Match Schedule: Seven Games You Don't Want to Miss
              </h2>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-navy-800 dark:to-navy-900 border border-amber-100 dark:border-navy-700 rounded-xl p-6 md:p-8 mb-8 shadow-sm">
              <h3 className="font-bold text-lg text-amber-800 dark:text-amber-400 mb-4 uppercase tracking-wide">Tournament Timeline</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                Miami scored one of the most generous World Cup allocations with seven matches spanning four weeks, including knockout rounds that guarantee drama.
              </p>

              <div className="space-y-6">
                {/* Group Stage */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-navy-700 pb-2 mb-3">Group Stage</h4>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jun</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">15</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Group H Match</div>
                         <div className="text-sm text-slate-500">Opening Miami Fixture</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jun</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">21</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Group H Match</div>
                         <div className="text-sm text-slate-500">Sunday Match</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jun</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">24</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Group C Match</div>
                         <div className="text-sm text-slate-500">Wednesday Night</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jun</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">27</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Group K Match</div>
                         <div className="text-sm text-slate-500">Saturday Showdown</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Knockout Stage */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-navy-700 pb-2 mb-3">Knockout Stage</h4>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm border-l-4 border-amber-400">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jul</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">03</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Round of 32</div>
                         <div className="text-sm text-slate-500">Group J Winner vs. Group H Runner-Up</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-navy-900 rounded-lg shadow-sm border-l-4 border-amber-500">
                      <div className="bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded text-center min-w-[60px]">
                         <div className="text-xs uppercase text-slate-500">Jul</div>
                         <div className="text-xl font-bold text-slate-900 dark:text-white">11</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-900 dark:text-white">Quarter-Final</div>
                         <div className="text-sm text-slate-500">Top 8 Teams</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 rounded-lg shadow-md border border-amber-200 dark:border-amber-700 transform hover:scale-[1.01] transition-transform">
                      <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded shadow-sm text-center min-w-[70px]">
                         <div className="text-xs uppercase text-amber-600 font-bold">Jul</div>
                         <div className="text-2xl font-black text-slate-900 dark:text-white">18</div>
                      </div>
                      <div>
                         <div className="font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                           🏆 Bronze Final
                         </div>
                         <div className="text-sm text-slate-700 dark:text-slate-300 font-medium">Third-Place Match</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              That final fixture—the Bronze Final on July 18—is particularly special. Only a handful of cities worldwide earn the privilege of hosting this prestigious match where two fallen semi-finalists battle for the podium. If you can only attend one match, the knockout rounds offer guaranteed intensity and world-class talent.
            </p>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Transportation] */}
            <article id="transport" className="editorial-body theme-indigo">
            {/* [CITATION: Miami-Dade Transit Authority] */}
            {/* [IMAGE PLACEHOLDER: Modern Metromover car passing through downtown skyline] */}
            {/* [INFOGRAPHIC: Visual comparison of transport times and costs vs driving] */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Getting There: Transportation Made Easy
              </h2>
            </div>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              Hard Rock Stadium sits in Miami Gardens, about 15 miles north of downtown Miami and 20 miles from South Beach. While the suburban location means limited walkable accommodation, multiple transportation options connect you to the action.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Your Best Options</h3>

            <div className="space-y-6">
              {/* Option 1 */}
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-lg text-indigo-700 dark:text-indigo-400 mb-2 flex items-center gap-2">
                  1. Brightline + Stadium Shuttle <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full ml-2">Recommended</span>
                </h4>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  The smoothest move for match day is taking Brightline—South Florida's sleek intercity rail—to Aventura Station, then hopping the free Hard Rock Stadium Connect shuttle. Shuttles depart 10 minutes after each train arrival and deliver you directly to the stadium gates. This combo avoids traffic nightmares and costs around $15-25 for the train (depending on origin station), plus zero for the shuttle.
                </p>
                <div className="bg-indigo-50 dark:bg-navy-800 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">Insider Tip:</strong>
                  Brightline connects Fort Lauderdale, Aventura, and Miami's central districts. If you're staying in Brickell, Downtown, or Wynwood, get to a Brightline station early. These trains will be packed on match days.
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border-l-4 border-slate-300 dark:border-navy-600">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">2. Metrobus Route 297 (Game Day Special)</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  On event days, Miami-Dade Transit operates Metrobus Route 297 from Earlington Heights Metrorail Station directly to the stadium. Fare is $2.25 each way—unbeatable value if you're already using the Metrorail system. Important caveat: buses fill up fast. Arrive at Earlington Heights at least 90 minutes before kickoff, or risk standing on the platform watching full buses pass.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  From most Miami neighborhoods, you'll need to take Metrorail to Earlington Heights first. The Orange Line connects Miami International Airport to downtown in about 15 minutes; the Green Line serves Dadeland South, Coconut Grove, and beyond. The entire system costs $2.25 per trip (daily cap of $5.65 with contactless payment).
                </p>
              </div>
            </div>

            <div className="my-10 overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm">
              <table className="w-full text-sm text-left" aria-label="Transport options comparison">
                <thead className="bg-slate-50 dark:bg-navy-800 text-slate-700 dark:text-slate-300 uppercase font-bold tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Option</th>
                    <th className="px-6 py-4">Cost</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Pros</th>
                    <th className="px-6 py-4">Cons</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-navy-700 bg-white dark:bg-navy-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                    <td className="px-6 py-4 font-bold text-emerald-600">Brightline + Shuttle</td>
                    <td className="px-6 py-4">$15–25</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Fast</span></td>
                    <td className="px-6 py-4">Avoids traffic; direct to gates</td>
                    <td className="px-6 py-4">Trains fill on match days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">Metrobus Route 297</td>
                    <td className="px-6 py-4">$2.25</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Moderate</span></td>
                    <td className="px-6 py-4">Best value; integrates with Metrorail</td>
                    <td className="px-6 py-4">Buses fill quickly; arrive early</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Rideshare/Taxi</td>
                    <td className="px-6 py-4">$35–50+</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Variable</span></td>
                    <td className="px-6 py-4">Door-to-door convenience</td>
                    <td className="px-6 py-4">Surge pricing; long waits</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Driving</td>
                    <td className="px-6 py-4">$40–100+</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Variable</span></td>
                    <td className="px-6 py-4">Flexible; best for multi-city trips</td>
                    <td className="px-6 py-4">Traffic; long exit times</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* Rideshare/Taxi Section */}
          <article className="editorial-body theme-indigo">
            {/* [SCROLL ANCHOR: Rideshare Logistics] */}
            <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <svg className="h4-icon-svg w-8 h-8" role="img" aria-label="Taxi" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradTaxiM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <rect x="3" y="10" width="18" height="6" rx="2" fill="url(#gradTaxiM)" />
                <rect x="9" y="7" width="6" height="3" rx="1" fill="#f59e0b" />
                <circle cx="7" cy="17" r="2" fill="#0ea5e9" />
                <circle cx="17" cy="17" r="2" fill="#0ea5e9" />
              </svg>
              3. Rideshare/Taxi
            </h4>

            {/* [STRUCTURE: Warning Callout with Visual Hierarchy] */}
            <div className="callout-warning border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/10 p-6 rounded-r-xl mb-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1 bg-amber-100 dark:bg-amber-800 p-2 rounded-full">
                   <svg className="w-5 h-5 text-amber-600 dark:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
                <div className="space-y-4">
                  <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                    Uber and Lyft work, but expect <strong className="text-amber-700 dark:text-amber-400 font-bold">surge pricing</strong> to bite hard after matches end. A typical ride from downtown Miami runs <strong className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded text-amber-800 dark:text-amber-300">$35-50+</strong> each way depending on traffic and demand. Post-match, you could wait 45+ minutes and pay double. 
                  </p>
                  
                  {/* [PULL QUOTE: Extracted for Emphasis] */}
                  <blockquote className="border-l-2 border-amber-300 dark:border-amber-700 pl-4 italic text-slate-600 dark:text-slate-400 my-2">
                    "Many fans book rideshare departures 30-40 minutes into the match to beat the exodus, then watch the final minutes on their phones during the ride. Smart? Maybe. Ideal? No."
                  </blockquote>

                  <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                    Designated rideshare pickup is at <strong>Lot 42 on NW 27th Avenue</strong>—a 25-45 minute walk from stadium exits when crowds surge. Some fans use the free rideshare shuttle to a nearby pickup point, which helps but requires advance reservation.
                  </p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider my-10 border-slate-200 dark:border-navy-700" />
          </article>

          {/* Driving + Parking Section */}
          <article className="editorial-body theme-indigo">
            <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <svg className="h4-icon-svg w-8 h-8" role="img" aria-label="Car" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradCarM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <rect x="4" y="10" width="16" height="5" rx="2" fill="url(#gradCarM)" />
                <path d="M6 10 L9 7 H15 L18 10" fill="#6366f1" />
                <circle cx="8" cy="16" r="2" fill="#0ea5e9" />
                <circle cx="16" cy="16" r="2" fill="#0ea5e9" />
              </svg>
              4. Driving + Parking
            </h4>
            
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p className="leading-relaxed mb-4 text-slate-600 dark:text-slate-400">
                If you're renting a car (which makes sense for exploring South Florida beyond the matches), <strong>stadium parking exists but sells out quickly</strong>. Pre-purchase passes online weeks before your match. Standard parking runs <strong>$40-60</strong>, with VIP lots reaching <strong>$100+</strong>. 
              </p>
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium text-sm bg-rose-50 dark:bg-rose-900/20 p-2 rounded w-fit mb-4">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                 <span>Traffic in and out is brutal—allow 2+ hours post-match to escape the lot.</span>
              </div>
            </div>

            {/* [STRUCTURE: Pro Tip Box] */}
            <div className="callout-pro-tip bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                Money Saver
              </div>
              <div className="flex gap-4">
                <div className="callout-icon bg-indigo-100 dark:bg-indigo-800 p-2 rounded-full h-fit text-indigo-600 dark:text-indigo-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Pro parking hack</h5>
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                    Some fans park at <strong>Aventura Mall</strong> (free) and Brightline to the stadium, or park at Metrorail stations with garages ($4.50/day) and take the Route 297 bus. Both options require advance scouting but save serious money.
                  </p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider my-10 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Neighborhoods] */}
            {/* [25% MILESTONE] */}
            <article id="accommodation" className="editorial-body theme-violet">
            {/* [IMAGE PLACEHOLDER: Art Deco hotels on Ocean Drive at twilight] */}
            <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3 text-2xl md:text-3xl font-serif text-slate-900 dark:text-white">
              <svg className="heading-icon-svg w-8 h-8" role="img" aria-label="Hotel" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradHotelM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradHotelM)" />
                <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
                <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              </svg>
              Where to Stay: Neighborhood Playbook for World Cup Visitors
            </h3>
            
            {/* [OPENING DECK] */}
            <p className="leading-relaxed mb-8 text-lg text-slate-600 dark:text-slate-300 font-medium">
              Miami's geography spreads across 30+ miles from north to south. Choosing the right base camp determines whether you maximize your trip or spend half of it stuck in traffic. Here's the honest breakdown:
            </p>

            {/* [NEIGHBORHOOD CARD 1: Downtown/Brickell] */}
            <section className="mb-8 p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 relative overflow-hidden group hover:border-violet-200 dark:hover:border-violet-800 transition-all">
              <div className="absolute top-0 right-0 bg-violet-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                Best for Transit + Atmosphere
              </div>
              
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-xl text-slate-900 dark:text-white">
                <svg className="h4-icon-svg w-6 h-6" role="img" aria-label="Building" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradBuildingM3" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="9" width="5" height="7" rx="1" fill="url(#gradBuildingM3)" />
                  <rect x="11" y="6" width="5" height="10" rx="1" fill="#0ea5e9" />
                  <rect x="17" y="10" width="2" height="6" rx="1" fill="url(#gradBuildingM3)" />
                </svg>
                Downtown Miami/Brickell
              </h4>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-xs">?</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Why stay here:</strong>
                     You're at the hub of Miami's public transit network (Metrorail, Metromover, buses), walking distance to <strong>Bayfront Park</strong> (expected FIFA Fan Festival location), and surrounded by restaurants, rooftop bars, and nightlife. The energy here during the World Cup will be electric—international flags, outdoor viewing parties, fans from 50 nations mingling in the streets.
                   </p>
                </div>
                
                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">➜</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Getting to stadium:</strong>
                     Metrorail to Earlington Heights → Route 297 bus (75-90 minutes total). Or Brightline from nearby stations if your hotel is within walking distance.
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">⌂</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Accommodation vibe:</strong>
                     Mix of business hotels, modern high-rises, and boutique properties. Expect <strong>$275-400/night</strong> for mid-range options during the tournament. Luxury properties like <strong>Hotel AKA Miami Brickell</strong> offer sophistication and bay views; budget travelers should book early or consider hostels like <strong>Miami River Inn</strong> (between Downtown and Little Havana).
                   </p>
                </div>

                <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-900/10 rounded-lg border border-violet-100 dark:border-violet-800/30">
                  <p className="leading-relaxed text-sm text-violet-800 dark:text-violet-300 font-medium">
                    <span className="uppercase font-bold text-xs tracking-wider mr-2">Book Early:</span>
                    Downtown sells out fast. If you secure match tickets in late 2025, reserve accommodation immediately. Consider booking refundable rates given ticket lottery uncertainty.
                  </p>
                </div>
              </div>
            </section>

            {/* [NEIGHBORHOOD CARD 2: South Beach] */}
            <section className="mb-8 p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 relative overflow-hidden group hover:border-amber-200 dark:hover:border-amber-800 transition-all">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                Best for Beach + Nightlife
              </div>
              
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-xl text-slate-900 dark:text-white">
                <svg className="h4-icon-svg w-6 h-6" role="img" aria-label="Sun" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradSunM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="4" fill="url(#gradSunM)" />
                </svg>
                South Beach/Miami Beach
              </h4>

              <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs">?</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Why stay here:</strong>
                     This is peak Miami—Art Deco architecture, sugar-sand beaches, poolside parties, and Ocean Drive's legendary people-watching. If you're turning the World Cup into a full Florida vacation, South Beach delivers the postcard experience. Just accept you'll commute to matches.
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">➜</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Getting to stadium:</strong>
                     Most complex option. Take <strong>Metrobus 150 Express</strong> or <strong>Beach Trolley</strong> to mainland transit, then connect to Metrorail/Brightline. Budget <strong>2+ hours each way</strong>. Many fans bite the bullet on rideshare for match days ($60-80 each way with surge pricing).
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">⌂</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Accommodation vibe:</strong>
                     Everything from budget motels to five-star oceanfront resorts. <strong>Hotel Continental Miami Beach</strong> offers retro-chic rooms one block from the beach; <strong>Kimpton Angler's Hotel</strong> provides boutique luxury with rooftop pools. Expect <strong>$350-600/night</strong> for oceanfront mid-range during World Cup. Hostels like <strong>Freehand Miami</strong> in Mid-Beach offer dorm beds under $100.
                   </p>
                </div>

                {/* [REALITY CHECK] */}
                <div className="mt-4 p-4 bg-slate-50 dark:bg-navy-900/50 rounded-lg border-l-4 border-slate-300 dark:border-slate-600">
                  <p className="leading-relaxed text-sm text-slate-600 dark:text-slate-400 italic">
                    <strong className="text-slate-800 dark:text-slate-200 not-italic">Reality check:</strong> South Beach is gorgeous but geographically inconvenient for stadium access. Best suited for fans attending 1-2 matches who prioritize beach time over logistics.
                  </p>
                </div>
              </div>
            </section>

            {/* [NEIGHBORHOOD CARD 3: Miami Gardens] */}
            <section className="mb-8 p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 relative overflow-hidden group hover:border-emerald-200 dark:hover:border-emerald-800 transition-all">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                Best for Stadium Proximity
              </div>
              
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-xl text-slate-900 dark:text-white">
                <svg className="h4-icon-svg w-6 h-6" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPinM2" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPinM2)" />
                  <circle cx="12" cy="9" r="2.3" fill="#ffffff" />
                </svg>
                Miami Gardens/Aventura/North Miami
              </h4>

              <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">?</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Why stay here:</strong>
                     Minimize commute stress. You're <strong>10-20 minutes from Hard Rock Stadium</strong> by car, or a short bus ride on non-game days. Aventura offers massive shopping (Aventura Mall) and easy Brightline access.
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">➜</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Getting to stadium:</strong>
                     Drive (15 minutes, pre-book parking), rideshare ($20-30), or local buses. This area is designed for cars, so public transit options thin out.
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">⌂</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Accommodation vibe:</strong>
                     Practical, not glamorous. <strong>Stadium Hotel</strong> sits closest to the venue (literally visible from some rooms) with budget-friendly rates and sports bar. <strong>Aloft Miami Aventura</strong> delivers modern design near Aventura Mall. <strong>Miami Lakes Hotel</strong> offers full resort amenities including golf. Expect <strong>$180-320/night</strong> range.
                   </p>
                </div>

                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                  <p className="leading-relaxed text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                    <span className="uppercase font-bold text-xs tracking-wider mr-2">Who this suits:</span>
                    Hardcore fans attending multiple matches who prioritize stadium convenience over Miami's cultural scene. Also families, since accommodation tends to be more spacious and affordable than downtown.
                  </p>
                </div>
              </div>
            </section>

            {/* [NEIGHBORHOOD CARD 4: Coral Gables] */}
            <section className="mb-6 p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 relative overflow-hidden group hover:border-pink-200 dark:hover:border-pink-800 transition-all">
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                Best for Upscale + Cultural
              </div>
              
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-3 text-xl text-slate-900 dark:text-white">
                <svg className="h4-icon-svg w-6 h-6" role="img" aria-label="Leaf" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLeafM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M6 16 c6 -8 10 -8 12 -6 c0 6 -6 10 -12 6z" fill="url(#gradLeafM)" />
                </svg>
                Coral Gables/Coconut Grove
              </h4>

              <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 font-bold text-xs">?</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Why stay here:</strong>
                     Escape the chaos. These elegant neighborhoods south of downtown offer tree-lined streets, boutique hotels, Mediterranean architecture, and attractions like <strong>Vizcaya Museum</strong>. More "refined vacation" than "spring break."
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">➜</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Getting to stadium:</strong>
                     Metrorail connects Coconut Grove to downtown (transfer to Route 297 bus). From Coral Gables, budget 60-90 minutes. Driving on match days: 30-45 minutes depending on traffic.
                   </p>
                </div>

                <div className="flex gap-4 items-start">
                   <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">⌂</div>
                   <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                     <strong className="text-slate-900 dark:text-slate-100 block mb-1">Accommodation vibe:</strong>
                     Historic inns, upscale hotels, fewer budget options. Expect <strong>$280-450/night</strong> during World Cup. Attracts couples and travelers who want sophistication between matches.
                   </p>
                </div>
              </div>
            </section>
            <hr className="editorial-divider my-10 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Attractions] */}
            {/* [50% MILESTONE] */}
            <article id="attractions" className="editorial-body theme-teal">
            {/* [IMAGE PLACEHOLDER: Vibrant street art mural at Wynwood Walls] */}
            <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3 text-2xl md:text-3xl font-serif text-slate-900 dark:text-white">
              <svg className="heading-icon-svg w-8 h-8" role="img" aria-label="Compass" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradCompassM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="url(#gradCompassM)" />
                <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
              </svg>
              Beyond the Matches: What to Do in Miami
            </h3>
            
            <p className="leading-relaxed mb-8 text-lg text-slate-600 dark:text-slate-300 font-medium">
              You didn't fly thousands of miles to only see 90 minutes of football. Miami delivers world-class experiences when you're not at the stadium:
            </p>

            {/* Must-Do Attractions - Editorial Grid */}
            <div className="mb-8">
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 text-xl text-teal-800 dark:text-teal-400 border-b border-teal-100 dark:border-teal-800 pb-2">
                <svg className="h4-icon-svg w-6 h-6" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStarM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarM)" />
                </svg>
                Must-Do Attractions
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* [ATTRACTION CARD: Wynwood] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Wynwood Walls</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    The world's coolest outdoor street art museum—free, always open, constantly evolving. Over 35 large-scale murals by internationally renowned artists transform warehouse walls into living canvases. Surrounding Wynwood neighborhood pulses with galleries, craft breweries (Cervecería La Tropical), coffee shops (Panther Coffee), and trendy restaurants.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">⏱ 2-3 hours</span>
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Metromover/Rideshare</span>
                  </div>
                </div>

                {/* [ATTRACTION CARD: Vizcaya] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Vizcaya Museum and Gardens</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    This jaw-dropping Italian Renaissance-style villa (built 1916) sits on Biscayne Bay with 10 acres of formal gardens that rival European estates. The museum houses original furnishings, art collections, and photography-worthy courtyards. <strong>Admission: $25</strong>. Perfect for a relaxed morning before evening matches.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Coconut Grove</span>
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Metrorail (Vizcaya Station)</span>
                  </div>
                </div>

                {/* [ATTRACTION CARD: Little Havana] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Little Havana</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    Miami's Cuban heart beats along <strong>Calle Ocho (SW 8th Street)</strong>. Watch master cigar rollers at work, sip authentic café cubano, catch live salsa music at <strong>Ball & Chain</strong>, and play dominoes at <strong>Máximo Gómez Park</strong>. The neighborhood explodes with energy on <strong>Viernes Culturales</strong> (last Friday of each month)—street festivals with art, music, and food vendors.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Budget-Friendly</span>
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Cultural Hub</span>
                  </div>
                </div>

                {/* [ATTRACTION CARD: Miami Beach] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Miami Beach & Art Deco District</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    Beyond tanning, Miami Beach offers architectural history. The <strong>Art Deco Historic District</strong> in South Beach contains over 800 preserved buildings from the 1920s-30s in pastel colors and geometric designs. Free self-guided walking tours via app, or book guided tours ($25-40). After your architecture fix, hit the sand: <strong>South Beach</strong> is iconic but crowded; <strong>North Beach</strong> and <strong>Mid-Beach</strong> offer calmer vibes.
                  </p>
                </div>
                
                {/* [ATTRACTION CARD: PAMM] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Pérez Art Museum Miami (PAMM)</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    Striking contemporary art museum on Biscayne Bay with rotating exhibitions and a permanent collection focused on international art of the 20th-21st centuries. <strong>Admission: $18</strong>. The outdoor hanging gardens and waterfront sculpture terrace alone justify a visit.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Downtown</span>
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Metromover</span>
                  </div>
                </div>

                {/* [ATTRACTION CARD: Everglades] */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-lg border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Everglades National Park</h5>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    If you have a free day between matches, rent a car and explore this UNESCO World Heritage Site 45 minutes southwest. Airboat tours ($30-60) deliver close encounters with alligators, while hiking trails and kayaking routes reveal one of Earth's most unique ecosystems. Many operators offer hotel pickup in Miami.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Day Trip</span>
                    <span className="bg-white dark:bg-navy-900 px-2 py-1 rounded border border-slate-200 dark:border-navy-600">? Nature</span>
                  </div>
                </div>
              </div>

              {/* [STRUCTURE: Practical Tips Box] */}
              <div className="mt-8 callout-pro-tip bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 p-6 rounded-xl">
                <h5 className="editorial-h4 mb-4 flex items-center gap-2 text-teal-800 dark:text-teal-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Practical Touring Tips
                </h5>
                <ul className="leading-relaxed space-y-3 list-none text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-1">✓</span>
                    <span><strong>Miami gets HOT</strong> in June/July (85-92°F / 29-33°C with humidity). Hydrate constantly, wear sunscreen, seek shade midday.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-1">✓</span>
                    <span><strong>Book popular attractions online</strong> to skip lines during World Cup crush.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-1">✓</span>
                    <span><strong>The Metromover is FREE</strong> and covers downtown/Brickell—perfect for attraction-hopping in that zone.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-1">✓</span>
                    <span><strong>Consider a Go Miami Card</strong> (all-inclusive pass) if hitting multiple paid attractions; can save 30-40% versus individual tickets.</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="editorial-divider my-10 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Food Scene] */}
            <article id="food" className="editorial-body theme-rose">
            {/* [IMAGE PLACEHOLDER: Platter of Cuban sandwiches and cortaditos at Versailles] */}
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Food" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradFoodM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="5" y="7" width="4" height="10" rx="1" fill="#f59e0b" />
                <rect x="11" y="7" width="8" height="10" rx="2" fill="url(#gradFoodM)" />
              </svg>
              Miami Food Scene: Fuel for Match Days
            </h3>
            <p className="leading-relaxed mb-8">
              Miami's culinary landscape mirrors its demographics—Cuban, Haitian, Colombian, Argentine, Peruvian influences collide with American and contemporary fusion.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Pre-Match Fueling */}
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-sky-600 dark:text-sky-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Pre-Match Fueling
                </h4>
                <ul className="space-y-4">
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Versailles Restaurant</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Little Havana</span>
                    Iconic Cuban institution. Order the Cubano sandwich, ropa vieja, or pastelitos. Always busy; arrive off-peak.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Zak the Baker</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Wynwood</span>
                    Artisan bakery with outstanding pastries, sandwiches, coffee. Grab breakfast before stadium-bound transit.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">La Sandwicherie</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">South Beach</span>
                    Late-night legend serving fresh French sandwiches until 5 AM. Perfect post-nightlife fuel.
                  </li>
                </ul>
              </div>

              {/* Post-Match Celebrating */}
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg>
                  Post-Match Celebrating
                </h4>
                <ul className="space-y-4">
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Joe's Stone Crab</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">South Beach</span>
                    Miami Beach institution (seasonal, but World Cup timing works). Reserve days ahead.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Coyo Taco</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Wynwood</span>
                    Elevated street tacos in lively atmosphere. Great for group celebrations.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Garcia's Seafood Grille & Fish Market</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Miami River</span>
                    Waterfront seafood with local vibe, away from tourist traps.
                  </li>
                </ul>
              </div>

              {/* Budget-Friendly */}
              <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Budget-Friendly
                </h4>
                <ul className="space-y-4">
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">1-800-Lucky</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Wynwood</span>
                    Asian-inspired food hall with multiple vendors, outdoor seating, reasonable prices.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">Fritanga Monimbo</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Little Havana</span>
                    Authentic Nicaraguan cuisine, massive portions, under $15/person.
                  </li>
                  <li className="leading-relaxed text-sm text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white text-base mb-1">El Rey de las Fritas</strong>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2 block">Little Havana</span>
                    Cuban fritas (burgers) and batidos (shakes). Total meal under $10.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Practical Info] */}
          {/* [75% MILESTONE] */}
          <article id="practical" className="editorial-body theme-sky">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradInfoM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="url(#gradInfoM)" />
                <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
                <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
              </svg>
              Practical Information: What You Need to Know
            </h3>

            {/* Getting to Miami */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPlaneM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M3 12 l8 -2 l0 -5 l2 5 l8 2 l-8 2 l-2 5 l0 -5z" fill="url(#gradPlaneM)" />
                </svg>
                Getting to Miami
              </h4>
              <p className="leading-relaxed mb-4">
                <strong>Miami International Airport (MIA)</strong> sits 8 miles northwest of downtown—about <strong>15-20 minutes by car</strong>, <strong>15 minutes via Metrorail Orange Line</strong> ($2.25), or <strong>$25-30 taxi/rideshare</strong> to downtown. The airport handles 50+ million passengers annually with direct flights from every continent. Book flights early; prices spike as matches approach.
              </p>
              <p className="leading-relaxed">
                <strong>Fort Lauderdale-Hollywood International Airport (FLL)</strong>, 30 miles north, sometimes offers cheaper flights. From FLL, take <strong>Brightline train</strong> to Miami (30 minutes, $15-20) or drive/rideshare (45-60 minutes, $50-70).
              </p>
              <p className="leading-relaxed">
                Miami also serves as a gateway city for North American football travel, with strong flight and cultural connections to <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>.
              </p>
            </div>

            {/* Weather & What to Pack */}
            {/* [INFOGRAPHIC: Monthly temperature and humidity averages for June/July] */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                  <use href="#gradSunM" />
                  <circle cx="12" cy="12" r="4" fill="url(#gradSunM)" />
                </svg>
                Weather & What to Pack
              </h4>
              <p className="leading-relaxed mb-4">
                Expect <strong>hot, humid, with afternoon thunderstorms</strong>. Daily highs 88-92°F (31-33°C), humidity 70-80%. Pack:
              </p>
              <p className="leading-relaxed mb-4">
                Miami's tropical weather contrasts with cities like <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link> and <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>—plan accordingly if you’re building a multi-city itinerary.
              </p>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li>Lightweight, breathable clothing</li>
                <li>Sunscreen (SPF 50+), sunglasses, hat</li>
                <li>Reusable water bottle (you'll need it)</li>
                <li>Light rain jacket or poncho</li>
                <li>Comfortable walking shoes (you'll be on your feet)</li>
              </ul>
            </div>

            {/* Money & Costs */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                  <use href="#gradMoneyM" />
                  <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradMoneyM)" />
                </svg>
                Money & Costs
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>Stadium parking:</strong> $40-60 pre-purchased</li>
                <li><strong>Mid-range hotel (Downtown):</strong> $275-400/night during World Cup</li>
                <li><strong>Meals:</strong> $15-25 (casual), $40-70 (mid-range), $100+ (high-end)</li>
                <li><strong>Public transit:</strong> $2.25/trip, $5.65 daily cap</li>
                <li><strong>Rideshare (downtown to stadium):</strong> $35-50 each way</li>
              </ul>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Safety & Connectivity Section */}
          <article className="editorial-body theme-sky">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradShieldM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradShieldM)" />
                <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Safety & Connectivity
            </h3>

            {/* Safety & Common Sense */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                  <use href="#gradShieldM" />
                  <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradShieldM)" />
                </svg>
                Safety & Common Sense
              </h4>
              <p className="leading-relaxed mb-4">
                Miami is generally safe for tourists in popular areas (Downtown, Brickell, South Beach, Wynwood, Coral Gables). <strong>Standard urban precautions</strong> apply: <em>avoid isolated areas late at night</em>, secure valuables, use legitimate rideshare apps only. The World Cup brings <strong>heightened security</strong>; expect bag checks at attractions and transport hubs.
              </p>
            </div>

            {/* Phone & Connectivity */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Wifi" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradWifiM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <path d="M4 10 c4 -4 12 -4 16 0" fill="none" stroke="url(#gradWifiM)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 13 c3 -3 7 -3 10 0" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1.8" fill="#0ea5e9" />
                </svg>
                Phone & Connectivity
              </h4>
              <p className="leading-relaxed mb-4">
                <strong>Free WiFi</strong> available at: Metrorail/Metrobus, Miami International Airport, most hotels, cafes, and restaurants. Consider purchasing a US SIM card or activating international roaming if staying multiple days. <strong>5G coverage</strong> is excellent throughout metro Miami.
              </p>
            </div>

            {/* Language */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Chat" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradChatM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M4 6 h16 v9 a2 2 0 0 1 -2 2 H9 l-4 3 v-3 a2 2 0 0 1 -1 -2z" fill="url(#gradChatM)" />
                </svg>
                Language
              </h4>
              <p className="leading-relaxed">
                English is official, but <strong>Spanish dominates</strong> in many neighborhoods. <em>Bilingual signage is common.</em> Basic Spanish phrases help in Little Havana, Cuban restaurants, and with some service workers.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* FIFA Fan Festival & Match Day Atmosphere Section */}
          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Fan Festival] */}
          <article className="editorial-body theme-purple">
            {/* [VIDEO: Atmosphere of past World Cup Fan Festivals or Miami soccer crowds] */}
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Football" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradFootballM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="6" fill="url(#gradFootballM)" />
                <path d="M12 6 l2 3 l-2 2 l-2 -2 z" fill="#ffffff" />
                <path d="M12 18 l2 -3 l-2 -2 l-2 2 z" fill="#ffffff" />
              </svg>
              FIFA Fan Festival & Match Day Atmosphere
            </h3>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              While official details are still being finalized, FIFA typically establishes a massive <strong>Fan Festival</strong> in each host city—a free, family-friendly zone with giant screens, live music, food vendors, and sponsor activations. Miami's is expected at <strong>Bayfront Park</strong> in Downtown Miami, offering stunning Biscayne Bay views and central location.
              {/* [STAT HIGHLIGHT: 10,000+ Fans at Bayfront Park] */}
            </p>

            {/* Why Fan Festivals Matter */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="TV" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradTVM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#gradTVM)" />
                  <rect x="10" y="18" width="4" height="2" rx="1" fill="#0ea5e9" />
                </svg>
                Why Fan Festivals Matter
              </h4>
              <p className="leading-relaxed">
                No match ticket? The Fan Festival becomes your World Cup. Tens of thousands gather to watch matches on enormous screens, surrounded by flags, face paint, and fans from every nation. The energy rivals stadium atmosphere. Arrive early for popular matches; capacity limits apply.
              </p>
            </div>

            {/* Neighborhood Watch Parties */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Group" viewBox="0 0 24 24">
                  <use href="#gradGroupM" />
                  <circle cx="8" cy="12" r="3" fill="url(#gradGroupM)" />
                  <circle cx="16" cy="12" r="3" fill="#0ea5e9" />
                </svg>
                Neighborhood Watch Parties
              </h4>
              <p className="leading-relaxed mb-4">
                Expect every sports bar, brewery, and restaurant with TVs to become <strong>unofficial fan zones</strong>. Wynwood, South Beach, Brickell, and Little Havana will buzz with street parties, especially for knockout rounds. Many establishments offer:
              </p>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li>Outdoor projector screens</li>
                <li>Themed menus (match-day specials)</li>
                <li>Extended hours for late matches</li>
                <li>Live DJs between matches</li>
              </ul>
            </div>

            {/* Cultural Vibe */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Heart" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradHeartM" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#fb7185" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path d="M12 20 c-6 -4 -8 -7 -8 -10 a4 4 0 0 1 7 -2 a4 4 0 0 1 7 2 c0 3 -2 6 -8 10z" fill="url(#gradHeartM)" />
                </svg>
                Cultural Vibe
              </h4>
              <p className="leading-relaxed">
                Miami's soccer obsession runs deep—Inter Miami CF just brought Lionel Messi to MLS, and the city regularly hosts international friendlies between global powerhouses. Expect <em>knowledgeable, passionate crowds</em> who understand the game. The city's Latin American demographic means matches involving Argentina, Brazil, Colombia, Mexico, or Uruguay will feel like home fixtures.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Booking Strategy] */}
          <article id="booking" className="editorial-body theme-gold">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Calendar check" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradCalCheckM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradCalCheckM)" />
                <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
                <path d="M9 13 l2 2 l4 -4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Booking Strategy: How to Plan Your World Cup Trip
            </h3>

            {/* Timeline for Success */}
            {/* [TIMELINE GRAPHIC: Visual timeline of booking milestones] */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Clock" viewBox="0 0 24 24">
                  <use href="#gradClockM" />
                  <circle cx="12" cy="12" r="9" fill="url(#gradClockM)" />
                </svg>
                Timeline for Success
              </h4>

              {/* Now (Late 2025) */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
                    <use href="#gradCalendarM" />
                    <rect x="5" y="8" width="14" height="10" rx="2" fill="url(#gradCalendarM)" />
                  </svg>
                  Now (Late 2025)
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Register with FIFA</strong> for ticket lottery (draws begin September 2025)</li>
                  <li>Research hotel options but hold on booking until ticket confirmation</li>
                  <li><strong>Set airfare price alerts</strong>; consider booking refundable fares if confident</li>
                </ul>
              </div>

              {/* Upon Securing Tickets */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Ticket" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTicketM" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <path d="M5 9 h14 v6 h-2 a2 2 0 1 1 0 -4 h-10 a2 2 0 1 0 0 4 h-2z" fill="url(#gradTicketM)" />
                  </svg>
                  Upon Securing Tickets (Late 2025/Early 2026)
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Immediately book accommodation</strong> (prices climb daily after tickets awarded)</li>
                  <li><strong>Finalize flights</strong> (use points/miles if possible to reduce costs)</li>
                  <li><strong>Reserve rental car</strong> if planning South Florida exploration beyond matches</li>
                  <li><strong>Pre-purchase stadium parking</strong> if driving</li>
                </ul>
              </div>

              {/* 2-4 Weeks Before Departure */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Suitcase" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradSuitcaseM" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <rect x="6" y="9" width="12" height="8" rx="2" fill="url(#gradSuitcaseM)" />
                    <rect x="9" y="7" width="6" height="2" rx="1" fill="#0ea5e9" />
                  </svg>
                  2-4 Weeks Before Departure
                </h5>
                <ul className="leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Book popular restaurants</strong> requiring reservations (Joe's Stone Crab, upscale dining)</li>
                  <li><strong>Purchase attraction tickets</strong> online for fast-track entry</li>
                  <li>Confirm transit plans and download Miami transit apps</li>
                  <li>Check stadium clear bag policy and purchase compliant bag</li>
                </ul>
              </div>
            </div>

            <p className="leading-relaxed mb-6">
              Travel planning tip: Combine Miami with <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> or <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link> for a Southern Gulf experience with distinct regional flavors and matchday atmospheres.
            </p>

            {/* Affiliate Opportunity Moment */}
            {/* [EXPERT INSIGHT CALLOUT] */}
          <div className="callout-pro-tip">
            <h4 className="editorial-h4 mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradStarM2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarM2)" />
              </svg>
              Pro Booking Tip
            </h4>
            <p className="leading-relaxed">Once you know your travel dates, <strong>book hotels through trusted platforms</strong> offering World Cup packages or flexible cancellation policies. Properties near downtown Miami, Brightline stations, and Metrorail access book fastest. Comparison shopping across multiple booking engines often reveals 10-20% price differences for identical rooms—worth the 15 minutes research.</p>
          </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Why Miami Wins] */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                <use href="#gradTrophyM" />
                <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradTrophyM)" />
              </svg>
              Why Miami Wins the World Cup Host City Lottery
            </h3>

            <p className="leading-relaxed mb-4">
              Let's be honest: some World Cup host cities are purely functional—you watch matches, maybe see a museum, then move on. Miami is different. This city was built for celebration. The nightlife doesn't quit. The beaches deliver postcard perfection. The food scene rivals any global capital. And unlike some North American hosts where soccer is niche, Miami <strong>breathes</strong> football.
            </p>

            {/* [PULL QUOTE] */}
            <div className="my-12 relative">
               <div className="absolute top-0 left-0 text-6xl text-emerald-200 dark:text-emerald-800 font-serif -mt-8 -ml-4 select-none">"</div>
               <p className="relative z-10 text-2xl md:text-3xl font-serif font-bold text-slate-800 dark:text-slate-100 leading-tight text-center px-8">
                 Unlike some North American hosts where soccer is niche, Miami <span className="text-emerald-600 dark:text-emerald-400">breathes</span> football.
               </p>
            </div>

            <p className="leading-relaxed mb-4">
              The stadium itself reflects this DNA—<strong>purpose-built for the sport</strong>, repeatedly hosting international matches that prove South Florida understands the beautiful game. When 65,000 fans pack Hard Rock Stadium for a World Cup knockout match in July 2026, with <strong>South Florida's energy</strong> spilling into every neighborhood, you'll understand why FIFA chose this city.
            </p>

            <p className="leading-relaxed mb-4">
              <strong>Seven matches spanning four weeks</strong> means you can build an entire vacation around the tournament. Attend an early group stage fixture, explore the Keys, return for a quarterfinal. Or plant yourself downtown for the full month, sampling different neighborhoods daily, catching matches at the Fan Festival, and experiencing Miami at peak global attention.
            </p>

            <p className="leading-relaxed mb-4">
              The <strong>logistics require planning</strong>—this isn't a compact European city where you walk everywhere—but the payoff is enormous. Where else can you watch world-class football in the morning, snorkel the reef by afternoon, dance salsa in Little Havana at sunset, then watch another match under the lights?
            </p>

            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <p className="text-lg font-semibold leading-relaxed">
                <strong>Book early, plan transit thoughtfully, embrace the heat, and prepare for one of the most memorable World Cup experiences any host city can offer.</strong>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Related Destinations */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                <use href="#gradPinM" />
                <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPinM)" />
              </svg>
              Plan Your Tropical World Cup Adventure
            </h2>
            <div className="space-y-6">
              <p>
                Miami's unique location and tropical climate make it an ideal base for exploring Southern host cities and international destinations.
              </p>
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up flex items-center gap-2">Popular Combinations</h3>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Southern States Circuit</h4>
                  <p>
                    Experience the diverse American South: Start in Miami (current, no link), head to{' '}
                    <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
                    {' '}for Southern charm, then continue to{' '}
                    <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                    {' '}for a taste of Texas.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Latin American Gateway</h4>
                  <p>
                    Miami's strong cultural ties to Latin America make it perfect for combining with Mexican host cities like{' '}
                    <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>
                    ,{' '}
                    <Link to="/world-cup-2026-host-cities/guadalajara" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara</Link>
                    , or{' '}
                    <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link>
                    .
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Coastal Contrast</h4>
                  <p>
                    Experience both coasts by connecting Miami with West Coast cities like{' '}
                    <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">San Francisco Bay Area</Link>
                    {' '}for a complete American World Cup tour.
                  </p>
                </div>
              </div>
              <p>
                <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Browse All World Cup 2026 Host Cities</Link>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Final Checklist Section */}
          <article className="editorial-body">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Checklist" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradChecklistM" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#gradChecklistM)" />
                <path d="M7 10 l2 2 l3 -3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="13" width="8" height="2" rx="1" fill="#ffffff" />
              </svg>
              Final Checklist: Your Miami World Cup Essentials
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Match tickets secured through FIFA official channels
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Hotel booked in Downtown/Brickell for transit access (or Miami Gardens for stadium proximity)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Flights confirmed to MIA (or FLL with Brightline backup)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Stadium parking pre-purchased OR transit plan mapped (Brightline + shuttle)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Attraction tickets purchased online (Vizcaya, PAMM, etc.)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Miami transit app downloaded (GO Miami-Dade)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Portable charger packed (your phone will die by halftime otherwise)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Sunscreen, hydration pack, comfortable shoes ready
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Restaurant reservations made for splurge meals
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-emerald-500/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Clear stadium-compliant bag purchased (12" x 6" x 12" max)
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="leading-relaxed mb-4">
                The 2026 FIFA World Cup in Miami isn't just another sporting event—it's a once-in-a-lifetime collision of the world's most popular sport with one of America's most dynamic cities. Whether you're there for football, culture, beaches, or all three, Miami delivers.
              </p>
              <div className="text-2xl text-slate-900 dark:text-slate-200">¡Vamos!</div>
            </div>
            <hr className="editorial-divider" />
          </article>



        </section>

        <section className="max-w-3xl mx-auto px-6 pb-12">
          <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
            <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by StadiumPort Team</div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

/**
 * =============================================================================
 * ENHANCEMENT KEY & DESIGN SPECIFICATIONS
 * =============================================================================
 * 
 * 1. ENHANCEMENT KEY
 * ------------------
 * - [QUICK SUMMARY]: Bulleted executive summary added at top for 30-second scan.
 * - [TL;DR]: Bottom-line conclusion moved up for immediate value.
 * - [STAT HIGHLIGHTS]: Key data points (Capacity, Surface, etc.) visualized in grids.
 * - [VISUAL PLACEHOLDERS]: Descriptive markers for image injection.
 * - [SCROLL ANCHORS]: Hidden IDs or markers for navigation.
 * - [MILESTONES]: Progress indicators to encourage completion.
 * - [BREATHING ROOM]: Explicit vertical spacing to reduce cognitive load.
 * - [INTERNAL LINK]: Markers for future cross-linking.
 * - [CITATION]: Markers for external authority references.
 * - [SCHEMA SUGGESTIONS]: JSON-LD enhancements for SEO.
 * 
 * 2. DESIGN SPECIFICATIONS
 * ------------------------
 * Typography:
 * - Headlines (H1, H2): Serif font (Merriweather/Playfair) for editorial authority.
 * - Body: Sans-serif (Inter/Roboto) for readability.
 * - Line Length: 60-75 characters for optimal reading speed.
 * - Font Size: 18px base for body text (mobile-first).
 * 
 * Color Palette (Miami Theme):
 * - Primary: Emerald Green (#10b981) - representing the field and tropical vibes.
 * - Secondary: Ocean Blue (#0ea5e9) - representing the coast.
 * - Accents: Amber/Gold (#f59e0b) - representing sun and energy.
 * - Backgrounds: Off-white/Slate-50 for reduced eye strain vs pure white.
 * 
 * Spacing & Layout:
 * - Grid: 12-column responsive grid.
 * - Vertical Rhythm: 8px baseline grid.
 * - White Space: Generous padding (py-16) between major sections.
 * 
 * 3. TECHNICAL IMPLEMENTATION NOTES
 * ---------------------------------
 * - Images: Use WebP format with lazy loading and explicit width/height to prevent layout shift (CLS).
 * - Accessibility: Ensure color contrast ratios > 4.5:1. All interactive elements must have focus states.
 * - Performance: Code split heavy components (like Maps).
 * - Dark Mode: Use `dark:` variants for all color classes.
 * 
 * 4. A/B TESTING VARIATIONS
 * -------------------------
 * - Headline A: "South Florida's Global Football Festival" (Current - Editorial)
 * - Headline B: "Miami World Cup 2026: The Ultimate Fan Guide" (Direct - SEO)
 * - Pull Quote A: "Miami... promises to transform the World Cup experience..." (Inspirational)
 * - Pull Quote B: "Brightline + Shuttle is the recommended route." (Practical)
 * 
 * 5. SEO SCHEMA STRATEGY
 * ----------------------
 * - Current: CityGuide, Breadcrumb, ImageObject.
 * - Recommended Additions: 
 *   - Event Schema for each match (Group Stage, Round of 32, QF, Bronze Final).
 *   - FAQPage Schema for the "Practical Information" section.
 *   - VideoObject Schema if embedding match highlights.
 * =============================================================================
 */
