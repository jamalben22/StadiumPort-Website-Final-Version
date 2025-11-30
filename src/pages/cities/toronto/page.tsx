import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function TorontoArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/toronto-world-cup-2026-guide';

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
    link.href = '/images/cities/toronto-world-cup-2026.webp'
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
  const pageUrl = '/world-cup-2026-host-cities/toronto-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','toronto')
    setPageMeta({
      title: 'Toronto World Cup 2026: Complete Travel Guide',
      description: 'Emphasize Toronto’s multicultural energy, waterfront beauty, and the excitement surrounding BMO Field’s World Cup matches.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/toronto-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Toronto', 'BMO Field']
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Toronto World Cup 2026: Complete Travel Guide',
            'Emphasize Toronto’s multicultural energy, waterfront beauty, and the excitement surrounding BMO Field’s World Cup matches.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Toronto', 'BMO Field'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Toronto', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/toronto-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Toronto skyline with CN Tower – World Cup 2026' }
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
            src="/images/cities/toronto-world-cup-2026.webp"
            alt="Toronto skyline"
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
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Toronto</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Toronto World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Complete Travel Guide</span>
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
                <span>BMO Field</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>45,736 Capacity</span>
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
      <section id="main-content" className="editorial-article-premium toronto-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Toronto hosts <strong>6 matches</strong> (June–July 2026)</li>
               <li>• Venue: <strong>BMO Field</strong> (Exhibition Place)</li>
               <li>• Key Event: <strong>First-ever men's World Cup match in Canada</strong> (June 12)</li>
               <li>• Highlights: Multicultural neighborhoods, Waterfront, CN Tower</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>Making History at BMO Field
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Toronto isn't just hosting the 2026 FIFA World Cup—it's hosting history.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`Toronto is one of the 16 host cities for the 2026 World Cup—`}<Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the host cities hub</Link>{`. On June 12, 2026, Canada's Men's National Team will play their very first FIFA World Cup match on home soil, and you'll want to be there when it happens. Picture this: 45,736 fans packed into Toronto Stadium (`}<Link to="/world-cup-2026-stadiums/bmo-field" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">BMO Field</Link>{`) at Exhibition Place, the energy electric as the Maple Leaf flag waves across a sea of red. This isn't just another match—it's a national milestone, and Toronto is the stage.`}
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-10 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "This isn't just another match—it's a national milestone, and Toronto is the stage."
          </blockquote>

          <p className="whitespace-pre-line">
            {`The city will host six World Cup matches total between June and July 2026, making it one of just two Canadian host cities (alongside `}<Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Vancouver</Link>{`). BMO Field is undergoing a major transformation, adding over 17,000 temporary seats to reach the tournament capacity of 45,736—intimate enough to feel the roar, big enough to create unforgettable atmosphere.`}
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-emerald-50 to-white dark:from-navy-900 dark:to-navy-800 border border-emerald-100 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400 mb-4">
              <i className="ri-bookmark-line"></i> Essential Toronto Links
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/bmo-field-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">BMO Field Guide</Link>
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
                   <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Vancouver</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why Toronto Will Win Your Heart */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Why Toronto Will Win Your Heart
          </h2>
          <p>
            If you've never been to Toronto, prepare yourself. Canada's largest city is famously nicknamed "The World in a City," and once you're here, you'll understand why. This is a place where over 200 languages are spoken daily, where you can eat authentic dim sum for breakfast, Italian porchetta for lunch, and Caribbean jerk chicken for dinner—all within walking distance of each other.
          </p>
          <p>
            The city sits on the shores of Lake Ontario, giving it a waterfront vibe that balances its urban energy. The iconic CN Tower—standing 553 meters tall—dominates the skyline and offers panoramic views that, on clear days, stretch all the way to Niagara Falls. But Toronto's charm isn't just in its big landmarks. It's in the cobblestone streets of the Distillery District, the bohemian energy of Kensington Market, and the tree-lined neighborhoods where Victorian houses meet modern coffee culture.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to BMO Field */}
        <article id="transport" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting to BMO Field: Easier Than You Think
          </h2>
          <p>
            BMO Field sits on the grounds of Exhibition Place, about 3 kilometers west of downtown Toronto, right on the lakefront. Here's the best part: you don't need a car, and honestly, you probably don't want one on game day.
          </p>
          <p>
            <strong>The GO Train (Your Best Bet)</strong>: Exhibition GO Station is directly connected to BMO Field, sitting one stop west of Union Station on the Lakeshore West line. Trains run every 30 minutes, and the journey from downtown Union Station takes just 7 minutes. During World Cup matches, expect increased service. Just follow the crowds through the pedestrian tunnel, and you'll emerge right at Exhibition Place.
          </p>
          <p>
            <strong>TTC Streetcars</strong>: The 509 Harbourfront and 511 Bathurst streetcars both stop at Exhibition Loop, just steps from the stadium entrance. These are your budget-friendly options, connecting directly to Toronto's extensive subway system.
          </p>
          <p>
            <strong>Pro tip</strong>: Download the Transit app before you arrive—it shows real-time arrivals for TTC, GO Transit, and everything else. Torontonians swear by it.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Where to Stay: Your Tournament Home Base
          </h2>
          <p>
            Toronto's accommodation scene is as diverse as the city itself, and for World Cup 2026, location matters. Here's the insider breakdown:
          </p>
          <p>
            <strong>Entertainment District (Prime Tournament Zone)</strong>: This is where you want to be. The Toronto Marriott City Centre sits inside Rogers Centre, steps from the CN Tower, Ripley's Aquarium, and Metro Toronto Convention Centre. The Sheraton Centre Toronto Hotel occupies the financial district with 130,000 square feet of space and features a stunning 43rd-floor Club Lounge with sweeping downtown views. Both connect to the PATH system—Toronto's underground pedestrian network linking hotels, restaurants, and transit without stepping outside.
          </p>
          <p>
            <strong>Waterfront Luxury</strong>: Hotel X Toronto redefines lakefront hospitality with a 55-foot partially indoor-outdoor rooftop pool and six acres of landscaped gardens. It offers complimentary house car service within 5 kilometers, meaning free rides to BMO Field.
          </p>
          <p>
            <strong>Family-Friendly Downtown</strong>: Chelsea Hotel has been a Toronto landmark since 1975, offering a Family Fun Zone with a 130-foot indoor waterslide and exclusive discount programs to attractions like Ripley's Aquarium and the Royal Ontario Museum.
          </p>
          <p>
            <strong>Budget-Conscious Travelers</strong>: Look at hotels near Union Station or in the Financial District. You'll trade some walkability for better rates, but the Delta Hotels Toronto connects via the PATH system and sits within walking distance of major transportation hubs.
          </p>
          <p>
            <strong>Book early</strong>. World Cup demand will be intense, and Toronto's hotel scene fills fast during major events. June 2026 rooms are already on booking sites—don't wait.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Weather */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-sun-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            The Weather Factor: Pack Smart
          </h2>
          <p>
            June in Toronto typically sees daytime temperatures around 24°C (75°F), dropping to about 13°C (55°F) at night, with normally 9 hours of bright sunshine daily. Toronto experiences significant rainfall in June, averaging over 20 rainy days, so layers are your friend.
          </p>
          <p>
            <strong>What to pack</strong>: Light jacket or hoodie for evening matches, comfortable walking shoes (you'll clock 15,000+ steps daily), and definitely bring a compact rain jacket or umbrella. Toronto weather can shift quickly, especially near the lake. Sunscreen is essential—those 9 hours of June sunshine are no joke, particularly if you're sitting in open-air sections at BMO Field.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Beyond the Stadium: Why You'll Want Extra Days
          </h2>
          <p>
            Here's the truth: if you're flying to Toronto just for a match and leaving immediately, you're missing the point. This city rewards exploration.
          </p>
          
          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/cities/toronto-world-cup-2026.webp"
               alt="Toronto attractions"
               className="absolute inset-0"
               imgClassName="w-full h-full object-cover"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-2">The Distillery District (Must-Visit)</h4>
          <p>
            The Distillery District is a restored Victorian industrial complex spanning 5 hectares with over 40 heritage buildings now housing galleries, artists' studios, and restaurants. Originally the Gooderham and Worts whiskey distillery, it once produced nearly half of Ontario's total spirits volume. Today, it's pedestrian-only cobblestone streets, brick warehouses, and some of Toronto's best dining. Sunday afternoons here are magical—live music, street performers, and that perfect golden-hour lighting for photos.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-building-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            CN Tower & Rogers Centre
          </h2>
          <p>
            The CN Tower isn't just Toronto's signature landmark—it features the EdgeWalk experience, where brave visitors walk hands-free along a 1.5-meter-wide ledge at 356 meters, the world's highest full-circle open-air walk. The 360 Restaurant rotates once every 72 minutes, offering seasonal Canadian cuisine with Ontario wine pairings. Book dinner here, and observation deck access is complimentary.
          </p>
          <p>
            Right at the tower's base, Rogers Centre is home to the Toronto Blue Jays—Canada's only Major League Baseball team. If you're here in June, there's a good chance the Jays are in town. Catching a baseball game before or after your World Cup match? That's a sports fan's dream weekend.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-store-3-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            St. Lawrence Market
          </h2>
          <p>
            National Geographic declared St. Lawrence Market the "Best Food Market in the World" in 2011, beating London's Borough Market and New York's Union Square Greenmarket. Since 1803, this market has housed 200 vendors selling everything from local mustard to international cheeses and fresh pasta. Come hungry, come early (Saturday mornings are prime time), and don't leave without trying the famous peameal bacon sandwich—it's a Toronto rite of passage.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-community-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Neighborhood Hopping: Where the Real Toronto Lives
          </h2>
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-2">Kensington Market</h4>
            <p>
              This distinctive multicultural neighborhood was designated a National Historic Site of Canada in November 2006. Originally established in the 1920s by Jewish families selling goods from stands outside their homes, today it showcases influences from Asia, the Caribbean, Europe, and Latin America. Vintage clothing stores line Kensington Avenue in colorful Victorian houses, while international food stalls serve everything from Mexican burritos to Indian tapas. It's chaotic, eclectic, and absolutely Toronto.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Yorkville</h4>
            <p>
              Once a hippie neighborhood, Yorkville is now Toronto's fashion district, sometimes called the "Mink Mile" for its designer boutiques including Tiffany, Chanel, and Hermès lining Bloor Street. Even if luxury shopping isn't your thing, the people-watching here is elite, and the nearby Royal Ontario Museum (ROM) is one of Canada's premier museums with over 13 million art objects and natural history specimens.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">The Entertainment District</h4>
            <p>
              Stretching from Queen Street West to Front Street, University Avenue to Spadina Avenue, the Entertainment District includes the CN Tower, Scotiabank Arena (home to the Raptors and Maple Leafs), and numerous theaters and performance venues. After matches, this is where the city parties—restaurants, bars, and clubs stay buzzing until the early hours.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food Scene */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Eating Your Way Through Toronto
          </h2>
          <p>
            This is where Toronto becomes dangerous for your wallet and your diet—but in the best way possible.
          </p>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Pre-Match Fuel</h4>
            <p>
              Just north of Exhibition Place in Liberty Village, you'll find Local Public Eatery, The Craft Brasserie, Liberty Commons, Left Field Brewery, and Brazen Head Irish Pub—all easy walks to BMO Field and perfect for building pre-game energy with fellow fans.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">St. Lawrence Market Essentials</h4>
            <p>
              St. Urbain serves wood-fired Montreal-style bagels and became TikTok famous for the Craigle—part croissant, part bagel. Churrasco of St. Lawrence has operated since 1989, serving authentic Portuguese BBQ chicken and Bifana sandwiches. Their Pasteis de Nata rival anything you'll find in Portugal.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Downtown Gems</h4>
            <p>
              The dining scene here is world-class. Amano Trattoria near Union Station, led by acclaimed Chef Michael Angeloni, consistently ranks among Toronto's top Italian destinations with seasonal menus using the freshest ingredients. HOTHOUSE in the St. Lawrence neighborhood offers multicultural menus reflecting Toronto's diversity, featuring their famous Sunday brunch buffet.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="editorial-h4 animate-fade-up mb-2">Can't-Miss Toronto Experiences</h4>
            <p>
              The city's food scene reflects its incredible diversity. You'll find authentic Chinatown dim sum, Little Italy trattorias, Greek tavernas, Caribbean jerk chicken spots, and innovative fusion restaurants all within the downtown core. St. Lawrence Market operates Tuesday through Saturday, so plan accordingly—it's closed Sunday and Monday.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting Around Like a Local */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-bus-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting Around Like a Local
          </h2>
          <p>
            Toronto's transit system takes getting used to, but it's comprehensive. The TTC (Toronto Transit Commission) operates subways, streetcars, and buses. You can access BMO Field via the Exhibition GO station or TTC streetcars from Union Station. A PRESTO card (Toronto's transit payment card) is your friend—available at Union Station and any convenience store with a green-and-white PRESTO sign. Load it with CAD $50 and you're set for a long weekend.
          </p>
          <p>
            <strong>The PATH System</strong>: This is Toronto's secret weapon—over 30 kilometers of underground walkways connecting subway stations, office towers, hotels, and shopping centers. In June, you won't need it for weather, but it's the fastest way to navigate downtown during busy periods.
          </p>
          <p>
            <strong>Toronto Pearson Airport</strong>: The UP Express train connects the airport to Union Station in 25 minutes for around CAD $12.35. Trains run every 15 minutes. Skip the taxi line—this is faster and cheaper.
          </p>
          <p>
            Planning a multi-city itinerary? Cross-border connections are straightforward—consider pairing Toronto with <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</Link> or <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link> to expand your World Cup experience.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Information */}
        <article id="tips" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Tournament Practicalities
          </h2>
          <p>
            <strong>Tickets</strong>: FIFA ticket sales opened with the Visa Presale Draw running September 10-19, 2025. Register at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">FIFA.com/tickets</a> even if you missed early sales—additional phases will open closer to the tournament.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-group-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Fan Festival
          </h2>
          <p>
            <strong>Fan Festival</strong>: Toronto has officially designated Fort York National Historic Site and The Bentway as venues for the FIFA Fan Festival, offering free live broadcasts and official FIFA World Cup atmosphere. These free events run throughout the tournament—perfect for non-ticket holders or pre-match gathering points.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-shield-check-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Safety & Practicalities
          </h2>
          <p>
            <strong>Safety & Practicalities</strong>: Toronto is exceptionally safe for international visitors. The downtown core is walkable day and night, though standard urban awareness applies. Tap water is perfectly safe to drink. Tipping culture mirrors the U.S.—15-20% at restaurants is standard. Most places accept credit cards, but carry some Canadian cash for markets and streetcars.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Why Toronto Deserves Your Full Attention */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-heart-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            Why Toronto Deserves Your Full Attention
          </h2>
          <p>
            Look, plenty of cities can host big matches. But Toronto brings something different to World Cup 2026. This is a place where you'll hear a dozen languages walking down one street, where neighborhoods shift from luxury boutiques to vintage shops to ethnic markets in just a few blocks. It's a city preparing to showcase "exceptional diversity, creativity, and international character" to a global audience.
          </p>
          <p>
            June 12, 2026, marks the first-ever FIFA World Cup men's match on Canadian soil, and the energy will be unlike anything you've experienced at a football tournament. Canadians are passionate about hockey, sure—but football is rising fast here, and this World Cup moment will define a generation of the sport in Canada.
          </p>
          <p>
            Stay an extra day. Hell, stay three. Explore Kensington Market on Saturday morning, catch a Blue Jays game Saturday afternoon, hit the Distillery District Sunday evening, and save Monday for the CN Tower and waterfront trails. Take the ferry to Toronto Islands for skyline views. Eat peameal bacon at St. Lawrence Market. Have a beer at Left Field Brewery before walking to BMO Field.
          </p>
          <p>
            Because here's what travel should be: not just checking stadiums off a list, but actually experiencing the cities that host these moments. Toronto isn't just a World Cup venue—it's a destination that rewards curiosity, celebrates diversity, and creates memories that outlast the final whistle.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-500"></i>
            Plan Your Canadian World Cup Journey
          </h2>
          <p>
            Toronto is Canada's gateway city and pairs perfectly with other North American host cities for an unforgettable 2026 World Cup experience.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-inter font-semibold">Popular Combinations:</p>
            </div>
            <div>
              <p className="font-inter font-semibold">Coast to Coast Canada</p>
              <p>
                Experience both Canadian host cities: Start in Toronto (current, no link), then fly west to <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Vancouver</Link> for Pacific Coast beauty and a completely different Canadian vibe.
              </p>
            </div>
            <div>
              <p className="font-inter font-semibold">Cross-Border Northeast</p>
              <p>
                Toronto connects easily with US East Coast cities like <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</Link>, <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link>, and <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Philadelphia</Link> — perfect for a multi-country World Cup tour.
              </p>
            </div>
            <div>
              <p className="font-inter font-semibold">Great Lakes Circuit</p>
              <p>
                Combine Toronto with nearby US cities like Chicago (link when available) and explore the Great Lakes region.
              </p>
            </div>
          </div>
          <p className="mt-4">
            <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Book your Toronto experience now */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-flag-line text-indigo-500 dark:text-indigo-300 text-3xl"></i>
            Book your Toronto experience now
          </h2>
          <p>
            <strong>Book your Toronto experience now</strong>. June 2026 will be here before you know it, and this city is ready to welcome the world.
          </p>
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
            {/* Recommendation 1: Vancouver */}
            <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/vancouver-world-cup-2026.webp" 
                alt="Vancouver World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">Canadian Host</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Vancouver</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Canada's Pacific coast host city and BC Place guide.</p>
              </div>
            </Link>

            {/* Recommendation 2: New York / New Jersey */}
            <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/new-york-new-jersey-world-cup-2026.webp" 
                alt="New York/New Jersey World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Nearby & Final Host</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">New York / New Jersey</h4>
                <p className="text-slate-300 text-sm line-clamp-2">The World Cup Final host city and global cultural capital.</p>
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
                <a href={`https://twitter.com/intent/tweet?text=Toronto%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
