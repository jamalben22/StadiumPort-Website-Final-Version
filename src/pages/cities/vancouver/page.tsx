import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function VancouverArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide';

  useEffect(() => {
    // Load saved state
    const saved = localStorage.getItem('stadiumport_saved_guides');
    if (saved) {
      const guides = JSON.parse(saved);
      setIsSaved(guides.includes(currentPath));
    }
    
    // Load rating
    const rating = localStorage.getItem(`stadiumport_rating_${currentPath}`);
    if (rating) {
      setUserRating(parseInt(rating));
      setHasRated(true);
    }
  }, []);

  const toggleSave = () => {
    const saved = localStorage.getItem('stadiumport_saved_guides');
    let guides = saved ? JSON.parse(saved) : [];
    if (isSaved) {
      guides = guides.filter((g: string) => g !== currentPath);
    } else {
      guides.push(currentPath);
    }
    localStorage.setItem('stadiumport_saved_guides', JSON.stringify(guides));
    setIsSaved(!isSaved);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    localStorage.setItem(`stadiumport_rating_${currentPath}`, rating.toString());
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.editorial-body h2, .editorial-body h3')) as HTMLElement[];
    const used = new Set<string>();
    const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
    const items = nodes.map((el, idx) => {
      const text = (el.textContent || `Section ${idx + 1}`).trim();
      let id = el.id || slug(text) || `section-${idx + 1}`;
      while (used.has(id)) id = `${id}-${idx}`;
      el.id = id;
      el.style.scrollMarginTop = '120px';
      used.add(id);
      return { id, label: text, level: el.tagName === 'H2' ? 2 : 3 };
    });
    setTocSections(items);
    if (items.length && !activeId) setActiveId(items[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    nodes.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/vancouver-world-cup-2026.webp'
    document.head.appendChild(link)
  }, [])
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const pageUrl = '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','vancouver')
    setPageMeta({
      title: 'Vancouver World Cup 2026: Complete Travel Guide',
      description: 'Capture Vancouver’s breathtaking skyline between ocean and mountains, celebrating its eco-friendly urban charm and BC Place Stadium.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/vancouver-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Vancouver', 'BC Place']
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Vancouver World Cup 2026: Complete Travel Guide',
            'Capture Vancouver’s breathtaking skyline between ocean and mountains, celebrating its eco-friendly urban charm and BC Place Stadium.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Vancouver', 'BC Place'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Vancouver', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/vancouver-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Vancouver skyline with mountains – World Cup 2026' }
          )
        ]}
      />

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
            </div>
          </div>
          <div className="px-3 pb-4 max-h-[70vh] overflow-y-auto overscroll-contain">
            <ul className="space-y-1">
              {tocSections.map(({ id, label, level }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-300 ${
                      activeId === id
                        ? 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-700/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                    } ${level === 3 ? 'pl-6' : ''}`}
                  >
                    <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </nav>
      </aside>

      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
            </div>
            <i className={`ri-arrow-up-s-line transition-transform ${isMobileTocOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {isMobileTocOpen && (
            <div className="mt-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl overflow-hidden">
              <ul className="max-h-[50vh] overflow-auto">
                {tocSections.map(({ id, label, level }) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(id);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setIsMobileTocOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                        activeId === id
                          ? 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-l-4 border-emerald-400'
                          : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                      } ${level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                      <span className="text-sm font-medium text-black dark:text-slate-300">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Hero — World Class Redesign */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/cities/vancouver-world-cup-2026.webp"
            alt="Vancouver skyline"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          {/* Sophisticated gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-90" />
        </div>

        {/* Content Container - Bottom aligned */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 z-10">
          <div className="max-w-5xl mx-auto w-full">
            {/* Breadcrumbs - Elegant & Minimal */}
            <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-emerald-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <Link to="/world-cup-2026-host-cities" className="hover:text-white transition-colors duration-300">Host Cities</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Vancouver</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Vancouver World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Canada</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>BC Place</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>54,500 Capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-emerald-500/20 ring-1 ring-emerald-500/50' : 'bg-white/5 group-hover/save:bg-emerald-500/20'}`}>
                  <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} text-lg`}></i>
                </div>
                <span className="font-medium">{isSaved ? 'Saved' : 'Save Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Premium editorial presentation */}
      <section id="main-content" className="editorial-article-premium vancouver-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Vancouver hosts <strong>7 matches</strong> (June–July 2026)</li>
               <li>• Venue: <strong>BC Place</strong> (Downtown)</li>
               <li>• Key Feature: <strong>World's largest retractable roof</strong></li>
               <li>• Highlights: Mountains, Ocean, Stanley Park</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>Seven Matches Under the World's Largest Retractable Roof
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Welcome to Vancouver, where nature and innovation create something spectacular.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`On June 13, 2026, Vancouver kicks off its FIFA World Cup journey with the first of seven matches at `}<Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">BC Place</Link>{` Stadium—and this city is about to remind the world why it's called "The Jewel of the Pacific." Vancouver is one of the `}<Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">16 host cities</Link>{` for World Cup 2026. The venue features a retractable roof revealing over 7,500 square metres of open sky, making it the only World Cup stadium where you might watch football under actual blue sky one moment and complete weather protection the next. Welcome to Vancouver, where nature and innovation create something spectacular.`}
          </p>
          <p className="whitespace-pre-line">
            {`Vancouver will host five group stage matches, including two Team Canada matches, one round of 32 match, and one round of 16 match, with the action running from mid-June through early July. BC Place holds 54,500 seats surrounded by more than 50 suites and hospitality lounges, creating an intimate yet electric atmosphere that will showcase Canada's Pacific coast to billions of viewers worldwide.`}
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-emerald-50 to-white dark:from-navy-900 dark:to-navy-800 border border-emerald-100 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400 mb-4">
              <i className="ri-bookmark-line"></i> Essential Vancouver Links
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">BC Place Guide</Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🗺️</span>
                <div>
                  <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Explore All 16 Cities</Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✈️</span>
                <div>
                   <strong>Nearby Cities:</strong> <br/>
                   <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium That Defies Expectations */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            The Stadium That Defies Expectations
          </h2>
          <p>
            Since opening in 1983, BC Place remains a jaw-dropping piece of architecture situated in the heart of the city's business and entertainment district. But here's what makes it truly special for World Cup 2026: the world's second-largest 4-sided centre hung HD video board suspended above the field, surrounded by over 1,250 digital screens making BC Place one of the most technologically advanced venues in the world.
          </p>
          <p>
            The retractable roof isn't just functional—it's a marvel. The cable-supported fabric roof is the largest of its kind in the world, specifically designed and engineered for Vancouver's climate. The retractable centre portion measures approximately 100 meters by 85 meters—effectively covering the entire playing surface, while seated guests remain covered rain or shine. The roof takes approximately 20 minutes to open or close, and match organizers will determine its position based on weather conditions and the desired atmosphere.
          </p>
          <p>
            This stadium has serious pedigree. BC Place hosted the electric FIFA Women's World Cup Canada 2015 final, multiple CFL Grey Cup Championships, and the stunning Opening and Closing Ceremonies of the 2010 Olympic Winter Games. It knows how to handle big moments.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to BC Place */}
        <article id="transport" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting to BC Place: Easier Than You'd Think
          </h2>
          <p>
            BC Place Stadium sits at 777 Pacific Boulevard in downtown Vancouver, and public transit makes reaching it beautifully simple.
          </p>
          <p>
            <strong>Stadium-Chinatown SkyTrain Station (Your Best Route)</strong>: Stadium-Chinatown is an elevated station on the Expo Line located at the eastern entrance of the Dunsmuir Tunnel, serving Downtown Vancouver. Upon exiting the SkyTrain, walk up the stairs to Beatty Street and turn left—Gates A, B, and H are approximately a five-minute walk up Beatty Street. Alternatively, head down the stairs to Expo Boulevard, and the stadium is five minutes to the right.
          </p>
          <p>
            <strong>Transit Tip</strong>: The elevator at the Stadium-Chinatown SkyTrain Station is expected to be out of service from October 21, 2025, for about four months. If you require elevator access during this period, plan an extra 15-20 minutes to detour through Burrard Street Station.
          </p>
          <p>
            <strong>Multiple Bus Routes</strong>: The 17, 210, 211, 214, 22, 250, and 253 buses all stop near BC Place, connecting you from various Vancouver neighborhoods. Download the TransLink app before arriving—it shows real-time arrivals and helps navigate the system like a local.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Where to Stay: Your Pacific Coast Home Base
          </h2>
          <p>
            Vancouver's accommodation landscape balances urban sophistication with waterfront luxury, and for World Cup 2026, location matters.
          </p>
          <p>
            <strong>Coal Harbour Luxury</strong>: The Fairmont Pacific Rim stands as Vancouver's definitive five-star experience. This Forbes Five-Star hotel features 367 guest rooms and suites with dreamy Stearns & Foster beds, spacious spa-like marble bathrooms, and a variety of city and mountain views. The property features an 8,500 square foot Willow Stream Spa, rooftop pool and deck with spacious cabanas, and a full fitness center with outdoor terrace featuring Jacuzzis and meditation pods. The location near Canada Place puts you steps from the SkyTrain and a short ride to BC Place.
          </p>
          <p>
            <strong>Downtown Rosewood Hotel Georgia</strong>: Home to the acclaimed Hawksworth Restaurant, this historic property combines old-world elegance with modern luxury. The location on Georgia Street positions you perfectly for accessing the Stadium-Chinatown SkyTrain station.
          </p>
          <p>
            <strong>Westin Bayshore</strong>: Situated on the waterfront near Stanley Park, this property offers complimentary shuttle service and spectacular views. It's slightly farther from BC Place but provides a resort-like atmosphere within the city.
          </p>
          <p>
            <strong>Mid-Range Excellence</strong>: Look at properties along Robson Street or near the Vancouver Convention Centre. These neighborhoods connect easily via SkyTrain or bus to BC Place while keeping you in the heart of downtown dining and shopping.
          </p>
          <p>
            <strong>Book immediately</strong>. Vancouver's hotel inventory fills fast during major events, and World Cup 2026 will create unprecedented demand. Properties are already accepting reservations for June 2026—waiting means settling for less desirable options or paying premium prices.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & Packing */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            June in Vancouver: What the Weather Will Bring
          </h2>
          <p>
            Daytime temperatures usually reach 20°C in Vancouver in June, falling to 11°C at night, with normally 8 hours of bright sunshine each day. But here's what you really need to know: Vancouver in June brings notable rainfall, with an average of 19 rainy days and total precipitation of 76.9mm.
          </p>
          <div className="mt-6">
             <h4 className="editorial-h4 animate-fade-up mb-2">Pack strategically</h4>
             <p>
                Layers are essential. A light waterproof jacket becomes your best friend—Vancouver's coastal location means weather can shift quickly. Comfortable walking shoes rated for wet conditions, because you'll explore this city on foot. Sunglasses and sunscreen for those eight daily sunshine hours (UV can be stronger than you expect near water). A compact umbrella fits in any day bag.
             </p>
             <p>
                The good news? BC Place should be considered an 'open-air' stadium whether the roof is open or closed, and guests are encouraged to dress accordingly based on the temperature outdoors. Even if it's pouring outside, you'll be dry inside—but dress for the actual outdoor temperature.
             </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond Football */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Beyond Football: Why Vancouver Will Steal Your Heart
          </h2>
          <p>
            If you're flying to Vancouver just for a match and leaving immediately, you're making a terrible mistake. This city demands exploration.
          </p>
          
          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/cities/vancouver-world-cup-2026.webp"
               alt="Vancouver attractions"
               className="absolute inset-0"
               imgClassName="w-full h-full object-cover"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-2">Stanley Park (Non-Negotiable)</h4>
          <p>
            Canada's largest city park spans over 400 hectares of coastal rainforest and seawall trails. The 9-kilometer Seawall loop offers stunning views of the North Shore Mountains, English Bay, and downtown skyline. The Stanley Park Totem Poles at Brockton Point are one of British Columbia's most visited tourist attractions, brought to life through First Nations artistry. Rent a bike near the park entrance and circle the entire seawall in about two hours—it's one of the world's most scenic urban bike rides.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Capilano Suspension Bridge Park</h4>
          <p>
            Cross the legendary Suspension Bridge, walk through a rainforest canopy with Treetops Adventure, experience an adrenaline-pumping walk above the canyon with Cliffwalk and do so much more. This attraction sits in North Vancouver, about 20 minutes from downtown by car or bus. The bridge stretches 137 meters long and hangs 70 meters above the Capilano River—not for the faint of heart, but absolutely worth the adrenaline rush. Budget about 90 minutes for the full experience.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Granville Island (Food Lover's Paradise)</h4>
          <p>
            Granville Island Public Market is a haven for good food and shopping, featuring over 50 vendors selling everything from fresh BC salmon to artisan cheeses, local art, and live music. This isn't technically an island—it's a peninsula on False Creek—but who cares when the food is this good? Come hungry. The Aquabus water taxi from downtown offers scenic transit directly to the island.
          </p>
          <p>
            Saturday mornings are prime time here. Arrive by 10 AM, grab coffee from a market vendor, and wander through the stalls before the afternoon crowds arrive. Local tip: the public market operates daily, but surrounding galleries and shops often close Mondays.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Gastown (Where Vancouver Began)</h4>
          <p>
            This historic neighbourhood boasts cobblestone streets lined with hip boutiques, inviting restaurants and traditional First Nations art galleries—and has been entertaining residents and visitors alike for over a century. The famous steam clock whistles on the hour (yes, it's touristy, but still worth seeing). Gastown's restaurants range from casual cafes to fine dining, and the neighborhood comes alive at night with bars and lounges.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Dining Scene */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Vancouver's Dining Scene: World-Class and Worth Every Dollar
          </h2>
          <p>
            This city's culinary reputation is built on fresh Pacific seafood, Asian influences, and farm-to-table philosophy that takes local sourcing seriously.
          </p>
          <div className="mt-6">
             <p><strong>Miku (The Aburi Experience)</strong>: Originally located on West Hastings St in Coal Harbour, Miku first introduced Aburi-style cuisine to Vancouver in 2008. Executive Chef Kazuhiro Hayashi takes advantage of fresh, regional ingredients as well as Ocean Wise seafood options to showcase the best of what Vancouver has to offer. The flame-seared sushi technique creates caramelized flavors you won't find anywhere else. Book the waterfront patio if weather cooperates—views of Canada Place and the North Shore Mountains are spectacular.</p>
          </div>
          <div className="mt-6">
             <p><strong>Hawksworth Restaurant (Vancouver's Finest)</strong>: Since bursting on to the scene in 2011, Hawksworth Restaurant has earned its place amongst the finest restaurants in the world, winning multiple accolades from renowned local and international authorities. Located in the Rosewood Hotel Georgia, the dining room is a Vancouver landmark that is steeped in history, with menus conceived by celebrated Canadian Chef David Hawksworth showcasing ingredient-led contemporary cuisine firmly rooted in the classics. This is where you celebrate a Canada victory or drown your sorrows in style. Reserve well in advance.</p>
          </div>
          <div className="mt-6">
             <p><strong>Botanist (Hotel Dining Elevated)</strong>: Located at the Fairmont Pacific Rim, Botanist features Mediterranean-inspired cooking with Pacific Northwest ingredients. The space transitions seamlessly from restaurant to bar, with floor-to-ceiling windows overlooking Coal Harbour. The cocktail program alone justifies a visit—bartenders treat mixology like art.</p>
          </div>
          <div className="mt-6">
             <p><strong>Pre-Match Fuel Near BC Place</strong>: The neighborhoods around BC Place—particularly nearby Yaletown—feature dozens of casual options perfect for building pre-game energy. Walk south on Hamilton Street toward Yaletown for brewpubs, pizza spots, and sports bars filled with fellow fans.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting Around Like a Vancouverite */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting Around Like a Vancouverite
          </h2>
          <p>
            Vancouver's TransLink system operates SkyTrains, buses, and SeaBus ferries. Purchase a Compass Card (the tap-to-pay transit card) at any SkyTrain station or convenience store displaying the Compass logo. Load it with CAD $40-50 for a weekend—single fares run about $3.10 for adults in Zone 1 (downtown).
          </p>
          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">The SkyTrain System</h4>
          <p>
            The Expo Line connects Stadium-Chinatown directly to Waterfront Station (downtown core), Commercial-Broadway (hip neighborhood), and points east. The Canada Line runs from Vancouver International Airport to downtown in 25 minutes—take it instead of taxis or rideshares. Trains run frequently from early morning until after midnight.
          </p>
          <p>
            Vancouver is just a few hours from{' '}
            <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>, making a cross-border trip incredibly easy for World Cup fans. Many travelers pair the two for a perfect Pacific Northwest experience.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-ship-line text-sky-400 dark:text-sky-300 text-3xl"></i>
            Water Taxis
          </h2>
          <p>
            <strong>Water Taxis</strong>: Aquabus and False Creek Ferries operate small boats connecting downtown to Granville Island, Science World, and Olympic Village. These aren't technically part of TransLink but accept Compass Cards. Riding a water taxi beats sitting in traffic and offers fantastic photo opportunities.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-walk-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Walking
          </h2>
          <p>
            <strong>Walking</strong>: Downtown Vancouver is eminently walkable. From the stadium to Gastown takes 15 minutes on foot. To Stanley Park's entrance from downtown is about 20 minutes. Wear comfortable shoes—the city rewards wandering.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Info */}
        <article id="tips" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-indigo-400 dark:text-indigo-300 text-3xl"></i>
            Practical Vancouver Intelligence
          </h2>
          <p>
            <strong>Currency &amp; Tipping</strong>: Canada uses the Canadian dollar (CAD). Credit cards work everywhere, but carry some cash for food trucks and market vendors. Tipping culture mirrors the U.S.—15-20% at restaurants is standard. Bartenders expect $1-2 per drink.
          </p>
          <p>
            <strong>Language</strong>: English is the primary language, but Vancouver's diversity means you'll hear Mandarin, Cantonese, Punjabi, and dozens of other languages throughout the city. Service industry workers overwhelmingly speak English.
          </p>
          <p>
            <strong>Safety</strong>: Vancouver ranks as one of North America's safest major cities. The downtown core, including areas around BC Place, remains safe day and night. Standard urban awareness applies—don't leave valuables visible in cars, watch your belongings in crowded areas—but violent crime against tourists is exceptionally rare.
          </p>
          <p>
            <strong>Drinking Culture</strong>: British Columbia has government-run liquor stores (BC Liquor Stores) alongside private shops. Beer and wine are available in many grocery stores. Drinking age is 19. Bars close around 2-3 AM on weekends.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            World Cup Specific Information
          </h2>
          <p>
            <strong>FIFA Tickets</strong>: Official ticket sales operate through <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">FIFA.com/tickets</a>. Additional ticket release phases will continue closer to the tournament. Register even if you missed early sales—returns and last-minute availability can appear.
          </p>
          <p>
            <strong>Fan Zones</strong>: Vancouver will designate official FIFA Fan Festival locations for free live broadcasts, creating festival atmospheres throughout the tournament. These typically feature food vendors, entertainment, and massive screens. Follow vancouverfwc26.ca for official announcements about fan zone locations.
          </p>
          <p>
            <strong>Airport to Downtown</strong>: Vancouver International Airport (YVR) sits 12 kilometers south of downtown. The Canada Line SkyTrain connects the airport to downtown's Waterfront Station in approximately 25 minutes. Trains run every 6-8 minutes during peak hours, cost around CAD $11, and operate until past midnight. This is faster and cheaper than taxis or rideshares—skip the ground transportation line and head directly to the SkyTrain platform.
          </p>
          <p>
            Combine{' '}
            <span className="font-semibold">Vancouver</span> with{' '}
            <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link>{' '}to experience Canada coast-to-coast during World Cup 2026—two distinct cities, one unforgettable national journey.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Why Vancouver Deserves More */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-heart-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Why Vancouver Deserves More Than a Match Day
          </h2>
          <p>
            Here's what makes this World Cup host city different: Vancouver isn't trying to be anything other than itself. It's not Toronto's cosmopolitan energy or Montreal's European charm—it's a Pacific Rim city where mountains rise directly from the ocean, where you can ski Grouse Mountain in the morning and sail False Creek in the afternoon, where Asian cuisine rivals anything you'll find in Asia itself.
          </p>
          <p>
            Many visitors create a Pacific Coast tour: <span className="font-semibold">Vancouver</span>,{' '}
            <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>,{' '}
            <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>{' '}— a classic West Coast circuit that pairs perfectly with match schedules and travel logistics.
          </p>
          <p>
            The city wears its environmental consciousness proudly—you'll notice extensive bike infrastructure, aggressive recycling programs, and a genuine commitment to sustainability that shapes everything from restaurant sourcing to transit policy. This isn't performative; it's how Vancouver operates.
          </p>
          <p>
            June 2026 offers Vancouver a chance to showcase itself during the best possible moment. There are normally 8 hours of bright sunshine each day in Vancouver in June, the gardens burst with color, and the city's outdoor energy peaks. Patios fill, beaches come alive, and locals pour into Stanley Park and along the seawall.
          </p>
          <p>
            Extend your stay. Seriously. Arrive two days before your match and leave two days after. Take the ferry to Victoria (British Columbia's capital on Vancouver Island) for a day trip. Drive the Sea-to-Sky Highway to Whistler. Explore the trails on the North Shore. Kayak False Creek at sunset. Eat your way through Richmond's authentic Asian food scene (often called the most authentic Chinese food outside Asia).
          </p>
          <p>
            Book your flight now. Reserve your hotel today. Buy your match tickets the moment they're available. June 13 through July 7, 2026, Vancouver will show the world why it's consistently rated among the planet's most liveable cities—and you'll understand why people who visit rarely want to leave.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-500"></i>
            Plan Your Pacific & Canadian World Cup Journey
          </h2>
          <div className="space-y-6 text-slate-700 dark:text-slate-200 text-xl leading-relaxed">
            <p>
              Vancouver's stunning location makes it perfect for exploring the Pacific Northwest and experiencing Canada's coast-to-coast diversity during World Cup 2026.
            </p>
            <p>
              <strong>Pacific Northwest Perfection</strong>
              <br />
              Experience the best cross-border pairing: <span className="font-semibold">Vancouver</span> for mountain-meets-ocean beauty, then just 3 hours south to{' '}
              <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>{' '}for coffee culture and American Pacific Northwest charm. This is one of the easiest and most scenic World Cup city combinations.
            </p>
            <p>
              <strong>Coast to Coast Canada</strong>
              <br />
              Explore both Canadian host cities: Start in <span className="font-semibold">Vancouver</span> on the Pacific, then fly across the country to{' '}
              <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link>{' '}on the Atlantic for a complete Canadian World Cup experience showcasing two distinct Canadian personalities.
            </p>
            <p>
              <strong>Ultimate West Coast Circuit</strong>
              <br />
              Create the definitive Pacific Coast adventure: <span className="font-semibold">Vancouver</span> to{' '}
              <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>{' '}to{' '}
              <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>{' '}to{' '}
              <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</Link>{' '}
              — four incredible cities, stunning coastal scenery, and diverse cultures all along the Pacific Ocean.
            </p>
            <p>
              <strong>Mountain Cities Connection</strong>
              <br />
              Vancouver's mountain setting pairs beautifully with other scenic destinations. Combine with{' '}
              <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>{' '}for more Pacific Northwest beauty, or venture to{' '}
              <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link>{' '}for another mountain-city experience.
            </p>
            <p>
              <Link to="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Interactive Rating Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-space">Rate this Guide</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">How helpful was this guide for your World Cup planning?</p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                  aria-label={`Rate ${star} stars`}
                >
                  <i className={`text-3xl ri-star-${(hoverRating || userRating) >= star ? 'fill' : 'line'} ${(hoverRating || userRating) >= star ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'} transition-colors duration-200`}></i>
                </button>
              ))}
            </div>
            
            <div className={`transition-all duration-500 ${hasRated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                <i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!
              </p>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Related Guides Recommendation Engine */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
            <Link to="/world-cup-2026-host-cities" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-medium flex items-center gap-1 group">
              View all cities <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation 1: Seattle */}
            <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/seattle-world-cup-2026.webp" 
                alt="Seattle World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">Pacific Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Seattle</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Pacific Northwest sister city just 3 hours south.</p>
              </div>
            </Link>

            {/* Recommendation 2: Toronto */}
            <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/toronto-world-cup-2026.webp" 
                alt="Toronto World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Canadian Host</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Toronto</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Canada's other host city and multicultural hub.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Elite Tier Footer Meta Section */}
        <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Share Section */}
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
              <div className="flex items-center gap-2">
                <a href={`https://twitter.com/intent/tweet?text=Vancouver%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on X">
                  <i className="ri-twitter-x-line text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${pageUrl}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#1877F2] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Share on Facebook">
                  <i className="ri-facebook-circle-fill text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <button onClick={() => navigator.clipboard.writeText(`${siteUrl}${pageUrl}`)}
                   className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-500 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                   aria-label="Copy Link">
                  <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* Separator for mobile */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

            {/* Last Reviewed Section */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <i className="ri-shield-check-fill text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Verified & Updated</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                   {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </div>
  );
}
