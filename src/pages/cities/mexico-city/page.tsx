import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function MexicoCityArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide';

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
    link.href = '/images/cities/mexico-city-world-cup-2026.webp'
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
  const pageUrl = '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide';

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    const entry = getEditorialEntry('city','mexico-city')
    setPageMeta({
      title: 'Mexico City World Cup 2026: Complete Travel Guide',
      description: 'Showcase Mexico City’s vibrant skyline, deep culture, and historic status as a global football capital hosting World Cup matches at Estadio Azteca.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/mexico-city-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Mexico City', 'Estadio Azteca']
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Mexico City World Cup 2026: Complete Travel Guide',
            'Showcase Mexico City’s vibrant skyline, deep culture, and historic status as a global football capital hosting World Cup matches at Estadio Azteca.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Mexico City', 'Estadio Azteca'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Mexico City', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/mexico-city-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Mexico City skyline – World Cup 2026' }
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
            src="/images/cities/mexico-city-world-cup-2026.webp"
            alt="Mexico City skyline"
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
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Mexico City</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Mexico City World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Mexico</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>Estadio Azteca</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>90,000 Capacity</span>
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
          {/* Rate This Guide + Share Section */}
          <div className="mb-12 p-8 bg-slate-50 dark:bg-navy-800 rounded-2xl border border-slate-100 dark:border-navy-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Was this guide helpful?</h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRate(star)}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        (hasRated ? userRating >= star : false) 
                          ? 'text-amber-400 ri-star-fill' 
                          : 'text-slate-300 hover:text-amber-400 ri-star-line'
                      }`}
                      disabled={hasRated}
                      aria-label={`Rate ${star} stars`}
                    />
                  ))}
                  <span className="ml-3 text-sm text-slate-500 dark:text-slate-400">
                    {hasRated ? 'Thanks for your feedback!' : 'Rate this guide'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Share:</span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out this Mexico City World Cup 2026 Guide!')}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="p-3 rounded-full bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-md hover:text-[#1DA1F2] transition-all"
                    aria-label="Share on Twitter"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="p-3 rounded-full bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-md hover:text-[#1877F2] transition-all"
                    aria-label="Share on Facebook"
                  >
                    <i className="ri-facebook-fill"></i>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      // Optional: Show toast
                    }}
                    className="p-3 rounded-full bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-md hover:text-emerald-500 transition-all"
                    aria-label="Copy Link"
                  >
                    <i className="ri-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Content Sections — Premium editorial presentation */}
      <section id="main-content" className="editorial-article-premium mexico-city-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Mexico City hosts <strong>5 matches</strong> (June–July 2026)</li>
               <li>• Venue: <strong>Estadio Azteca</strong> (90,000 capacity)</li>
               <li>• Key Event: <strong>Opening Match (June 11)</strong></li>
               <li>• Highlights: Historic Center, Chapultepec, Food Scene</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>The Only Stadium to Host Three World Cup Opening Matches
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            After witnessing Pelé's 1970 triumph and Maradona's controversial brilliance in 1986, the Azteca prepares to add another chapter to the greatest stadium story ever told.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`On June 11, 2026, football history will repeat itself in the most spectacular way possible. `}<Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Azteca</Link>{`—El Coloso de Santa Úrsula—will welcome the world for the opening match of the FIFA World Cup 2026, becoming the only stadium on Earth to host an opening match for the third time. Mexico City is one of the 16 host cities for World Cup 2026—`}<Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the host cities hub</Link>{`.`}
          </p>
          <p className="whitespace-pre-line">
            {`Mexico City will host five matches total during the tournament: three group stage games, one round of 32 match, and one round of 16 match. The stadium is undergoing its most extensive renovation in decades—a two-year, $180 million transformation that will increase capacity to 90,000 spectators while adding 2,000 square meters of LED screens, new hospitality areas covering over 7,000 square meters, and completely modernized facilities. The renovated Azteca reopens March 28, 2026, just 75 days before kickoff.`}
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-emerald-50 to-white dark:from-navy-900 dark:to-navy-800 border border-emerald-100 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-400 mb-4">
              <i className="ri-bookmark-line"></i> Essential Mexico City Links
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Estadio Azteca Guide</Link>
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
                   <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Legend of El Azteca */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-community-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            The Legend of El Azteca
          </h2>
          <p>
            Since opening in 1966, Estadio Azteca has stood alone among the world's great stadiums. This is the only venue to host two World Cup finals (1970 and 1986), the only stadium where both Pelé and Maradona lifted the trophy, and soon, the only stadium to welcome three separate World Cup tournaments. The venue sits at 2,240 meters above sea level in the Coyoacán borough, and that altitude isn't just a statistic—it's a game-changer that's influenced countless historic matches.
          </p>
          <p>
            The stadium earned its nickname "Coloso de Santa Úrsula" (Colossus of Santa Úrsula) for good reason. Before recent renovations began in 2024, it held 87,523 seats, making it Latin America's largest stadium and the sixth-largest football venue worldwide. The expansion to 90,000 for 2026 ensures Mexico's fortress will host World Cup matches under conditions that challenge even the most elite athletes. Visiting teams have learned the hard way that playing at altitude, in front of 90,000 passionate Mexican fans, creates one of football's most intimidating atmospheres.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to Estadio Azteca */}
        <article id="transport" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Getting to Estadio Azteca: Your Transport Strategy
          </h2>
          <p>
            Estadio Azteca sits in southern Mexico City, about 15 kilometers from the historic center. The good news? You don't need a car. The better news? Mexico City's Metro system connects directly to the stadium via the Xochimilco Light Rail.
          </p>
          <p>
            <strong>Metro Line 2 + Xochimilco Light Rail (The Best Route)</strong>: Take Metro Line 2 (the Blue Line) south to Tasqueña station, the line's southern terminus. At Tasqueña, transfer to the Xochimilco Light Rail and take it just two stops to Estadio Azteca station. The light rail drops you steps from the stadium entrance. Total journey time from downtown Zócalo to the stadium: approximately 45 minutes. Trains run frequently, and for 2026, expect enhanced service on match days.
          </p>
          <p>
            <strong>Important Update</strong>: The Tasqueña light rail station underwent major expansion in 2025, adding a Barcelona-style platform configuration specifically to handle increased World Cup crowds. The renovation ensures smooth passenger flow even when tens of thousands converge on the stadium.
          </p>
          <p>
            <strong>Metro Cards</strong>: Purchase a rechargeable Metro card at any station. Load it with 200-300 pesos and you'll have sufficient credit for a weekend of travel. Single fares run about 5-7 pesos—remarkably affordable compared to North American transit systems.
          </p>
          <p>
            <strong>Pro tip</strong>: Download the "Mi Transporte" or "Moovit" app before arriving. Both show real-time Metro and light rail arrivals, helping you navigate the system like a local.
          </p>
          <p className="mt-4">
            Planning a multi-city World Cup itinerary? Combine matches in <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Guadalajara</Link> and <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Monterrey</Link>. For a cross-border experience, add <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Los Angeles</Link> to your trip.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Where to Stay: Finding Your Mexico City Base
          </h2>
          <p>
            Mexico City sprawls across 1,500 square kilometers, so location matters. For World Cup 2026, you'll want accommodation that balances access to the Azteca with proximity to the city's incredible dining, nightlife, and cultural attractions.
          </p>
          <p>
            <strong>Historic Center (Centro Histórico)</strong>: Gran Hotel Ciudad de México overlooks the Zócalo from a stunning 1890s building, featuring a rooftop restaurant with unmatched views of the plaza. Zocalo Central & Rooftop Mexico City occupies a prime position next to the National Cathedral, offering refurbished rooms (some with Zócalo views), free breakfast, and that spectacular rooftop terrace. These properties place you steps from Metro Line 2 at Zócalo station—a straight shot to Tasqueña and the light rail to Azteca.
          </p>
          <p>
            <strong>Reforma District (Business & Culture Hub)</strong>: Sofitel Mexico City Reforma delivers French elegance meets Mexican culture with 275 rooms featuring sweeping city views, a 39th-floor spa, and Cityzen—the rooftop bar on the 38th floor with signature cocktails and panoramic vistas. Mexico City Marriott Reforma Hotel sits on Paseo de la Reforma near Zona Rosa, providing easy access to Chapultepec Park and direct Metro connections. Barceló México Reforma occupies downtown's Paseo de la Reforma with 505 rooms, complete wellness facilities, and a tequila museum on-site.
          </p>
          <p>
            <strong>Polanco (Upscale & Walking Distance to Chapultepec)</strong>: The Hyatt Regency Mexico City and surrounding Polanco hotels put you in Mexico City's most exclusive neighborhood, steps from the National Museum of Anthropology and Chapultepec Park. This area combines luxury shopping, world-class dining (including Pujol and Quintonil), and convenient Metro access.
          </p>
          <p>
            <strong>Condesa & Roma (Hip Neighborhoods)</strong>: Condesa DF, designed by Parisian designer India Mahdavi, occupies a 1928 building filled with custom furniture and opening onto wooden terraces. These bohemian neighborhoods offer tree-lined streets, boutique hotels, exceptional restaurants, and authentic Mexico City character. You'll trade direct stadium access for cultural immersion—totally worth it if you're staying several days.
          </p>
          <p>
            <strong>Book immediately</strong>. Mexico City expects over five million visitors during the World Cup period, and the city's hotel infrastructure, while extensive, will face unprecedented demand. June 2026 reservations opened months ago—waiting means settling for less desirable locations or paying premium prices.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Weather */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-cloud-rain-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            June Weather: What to Expect and Pack
          </h2>
          <p>
            June marks the beginning of Mexico City's rainy season, fundamentally changing the weather equation. Expect daytime highs around 23-25°C (74-77°F), dropping to 12-13°C (54-55°F) at night—comfortable overall, but that altitude creates cool evenings even in summer.
          </p>
          <p>
            The challenge? June typically sees 15-23 rainy days with monthly rainfall reaching 108-112mm. Rain usually arrives as afternoon or evening showers rather than all-day downpours, but count on getting wet at some point during your stay.
          </p>
          <p>
            <strong>Pack strategically</strong>: Layering is essential. Lightweight rain jacket (non-negotiable), comfortable walking shoes that can handle wet streets, light sweater or hoodie for evening matches and air-conditioned spaces, and sunscreen—despite the clouds, UV exposure at 2,240 meters altitude is intense. The high elevation means thinner atmosphere and stronger sun. Bring sunglasses and stay hydrated.
          </p>
          <p>
            <strong>Altitude Awareness</strong>: Many visitors underestimate Mexico City's 2,240-meter elevation. Take it easy your first day—walk slowly, drink extra water, avoid heavy alcohol consumption immediately after arriving, and don't be surprised if you feel slightly winded climbing stairs. Your body needs 24-48 hours to adjust.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Pitch */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Beyond the Pitch: Mexico City Demands Exploration
          </h2>
          <p>
            If you're flying to Mexico City just for a match and leaving immediately, you're making a catastrophic mistake. This city rewards—no, demands—exploration.
          </p>
          
          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/cities/mexico-city-world-cup-2026.webp"
               alt="Mexico City attractions"
               className="absolute inset-0"
               imgClassName="w-full h-full object-cover"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Chapultepec Park & Castle (Non-Negotiable)</h4>
          <p>
            Bosque de Chapultepec sprawls across 866 hectares, making it one of the largest urban parks in the Western Hemisphere. Within its green expanse sit nine museums, gardens, a zoo, over 100 statues and fountains, and the crown jewel: Chapultepec Castle.
          </p>
          <p>
            Castillo de Chapultepec occupies Chapultepec Hill's summit, offering breathtaking panoramic views of Mexico City. Built in the 18th century as a summer retreat for Spanish viceroys, it later became the official residence of Mexican presidents and Emperor Maximilian I. Today, it houses the National Museum of History, showcasing preserved rooms that reflect different eras, impressive murals by Mexican masters, and historical artifacts spanning centuries.
          </p>
          <p>
            The National Museum of Anthropology, also within Chapultepec, ranks among the world's premier archaeological museums. Its collection includes the Stone of the Sun (Aztec Calendar Stone), the massive Olmec heads, and countless artifacts from Maya, Aztec, Toltec, and other Mesoamerican civilizations. Budget at least three hours—you could easily spend an entire day here.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">The Zócalo & Historic Center (Where It All Began)</h4>
          <p>
            Plaza de la Constitución—the Zócalo—ranks among the world's largest public squares and serves as Mexico City's beating heart. The Metropolitan Cathedral dominates the plaza's north side, built between 1573 and 1813 with stones from destroyed Aztec temples. Adjacent sits the Palacio Nacional, featuring Diego Rivera's epic murals depicting Mexican history.
          </p>
          <p>
            Templo Mayor ruins, discovered in 1978, reveal the Aztec capital Tenochtitlan's main temple directly beneath modern Mexico City. The adjacent museum showcases artifacts recovered from excavations, including the massive circular Coyolxauhqui stone.
          </p>
          <p>
            Walking distance from Zócalo, Palacio de Bellas Artes stuns with Art Nouveau and Art Deco architecture, housing murals by Diego Rivera, David Alfaro Siqueiros, and José Clemente Orozco. The building hosts ballet, opera, and cultural performances—check the schedule before your visit.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Teotihuacan (The City Where Gods Were Born)</h4>
          <p>
            About 50 kilometers northeast of Mexico City, Teotihuacan ranks as Mexico's most visited archaeological site and a UNESCO World Heritage Site since 1987. This ancient Mesoamerican city reached its zenith around 100 AD, covering 83 square kilometers with a population potentially exceeding 100,000.
          </p>
          <p>
            The Pyramid of the Sun rises 65 meters—one of the tallest pre-modern pyramids worldwide. The Pyramid of the Moon anchors the Avenue of the Dead, the site's main thoroughfare. Climbing these pyramids offers unforgettable views across the Valley of Mexico, though the altitude and stairs challenge even fit visitors.
          </p>
          <p>
            <strong>Getting There</strong>: Buses depart regularly from Mexico City's North Bus Terminal (Terminal del Norte) to Teotihuacan. Journey time: about one hour. Alternatively, book a guided tour that includes transportation, often with stops at the Basilica de Guadalupe and a chance to taste pulque (traditional fermented agave drink).
          </p>
          <p>
            <strong>Pro tip</strong>: Arrive early—by 8 AM if possible. Morning light creates perfect photography conditions, crowds remain manageable, and temperatures stay comfortable before afternoon heat arrives. Sunrise hot air balloon flights over Teotihuacan offer magical perspectives of the pyramids emerging from morning mist.
          </p>

          <h4 className="editorial-h4 animate-fade-up mb-2 mt-6">Xochimilco (Floating Gardens & Weekend Fiesta)</h4>
          <p>
            Southern Mexico City's Xochimilco borough preserves canals and chinampas (artificial islands) dating to pre-Hispanic times—a UNESCO World Heritage Site since 1987. Rent a brightly painted trajinera (flat-bottomed boat) and float through the waterways while mariachi bands, food vendors, and flower sellers navigate alongside in their own boats.
          </p>
          <p>
            Weekends transform Xochimilco into a floating party, with locals celebrating birthdays, anniversaries, and simply Sunday afternoon. Weekdays offer more tranquil experiences. Either way, bring cash for food, drinks, and mariachi serenades. A two-hour trajinera rental typically costs 350-600 pesos depending on boat size and negotiation skills.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Culinary Capital */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-rose-400 dark:text-rose-300 text-3xl"></i>
            The Culinary Capital: World-Class Dining Awaits
          </h2>
          <p>
            Mexico City's food scene has exploded onto the global stage, earning the city its own Michelin Guide in 2024 and claiming spots on every major international restaurant ranking.
          </p>
          <p>
            <strong>Pujol (Two Michelin Stars)</strong>: Chef Enrique Olvera's flagship occupies Polanco, consistently ranking among the world's 50 best restaurants. The signature dish—Mole Madre, Mole Nuevo—features mole aged over 3,500 days served alongside fresh mole. The seven-course tasting menu runs around 3,500 pesos (approximately $175 USD), and you'll want to book five to seven weeks in advance. The experience justifies every peso—this is Mexican haute cuisine at its absolute finest.
          </p>
          <p>
            <strong>Quintonil (Two Michelin Stars, World's #3 Restaurant 2025)</strong>: Chef Jorge Vallejo and manager Alejandra Flores created something extraordinary in this Polanco dining room. The seasonal tasting menu prioritizes heirloom vegetables, native herbs, and insects, with 98% of ingredients sourced from Mexico. The 11-course tasting menu costs around 4,500 pesos ($260 USD), and critics praise Quintonil's boundary-pushing Mexican cuisine combined with exceptional hospitality—it's the complete package.
          </p>
          <p>
            <strong>Contramar (Bib Gourmand)</strong>: This La Condesa classic, operating since 1998, sets the standard for Mexico City seafood. The pescado a la talla (grilled fish with red and green rubs) is legendary, and the lively atmosphere makes every meal feel celebratory. Prices remain reasonable compared to Pujol and Quintonil—expect 500-800 pesos per person before drinks.
          </p>
          <p>
            <strong>Street Food & Markets</strong>: St. Lawrence Market gets all the Toronto attention, but Mexico City's mercados are where locals actually eat. Mercado de San Juan specializes in exotic ingredients and prepared foods. Mercado Roma in Roma neighborhood offers upscale food stalls in a modern setting. For authentic tacos, hit street stands in Roma, Condesa, or near your hotel—locals will point you toward their favorites. Tacos al pastor, tacos de carnitas, and quesadillas run 15-30 pesos each. Eat where you see crowds of Mexicans.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting Around Like a Chilango */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-routes-line text-blue-400 dark:text-sky-300 text-3xl"></i>
            Getting Around Like a Chilango (Mexico City Local)
          </h2>
          <p>
            Mexico City's Metro system—Sistema de Transporte Colectivo—operates 195 stations across 12 lines covering 225 kilometers. At 5-7 pesos per ride, it's one of the world's most affordable rapid transit systems.
          </p>
          <p>
            <strong>Metro Tips</strong>: Avoid rush hours (7-10 AM, 5-8 PM) when trains pack sardine-tight. Women-only cars operate during peak hours—look for pink signage. Keep wallets and phones secured—pickpockets target distracted tourists. Each station features unique iconography, making navigation easier even without reading Spanish.
          </p>
          <p>
            <strong>Metrobús</strong>: This bus rapid transit system operates dedicated lanes on major avenues. Line 4 connects both airport terminals to the city center. Load your Metro card and use it across Metro, Metrobús, and some EcoBici bike-sharing stations.
          </p>
          <p>
            <strong>Taxis & Ride-Sharing</strong>: Uber and Didi operate extensively throughout Mexico City and remain safe, reliable options. Official white-and-pink taxis (Taxi Rosa) offer service from airports and major hotels. Avoid hailing random taxis on streets—use ride-sharing apps or hotel-arranged transportation instead.
          </p>
          <p>
            <strong>Walking</strong>: The historic center, Roma, Condesa, and Polanco neighborhoods reward pedestrian exploration. Paseo de la Reforma—the city's main boulevard—stretches from Chapultepec to the historic center, lined with monuments, sculptures, and Sunday street closures for cyclists and pedestrians.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Mexico City Intelligence */}
        <article id="tips" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-information-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Practical Mexico City Intelligence
          </h2>
          <p>
            <strong>Airport to City Center</strong>: Mexico City International Airport (Benito Juárez) sits about 13 kilometers east of downtown. Metrobús Line 4 connects both terminals directly to the city center—the cheapest option at around 30 pesos. Official airport taxis cost 200-400 pesos depending on destination. Uber/Didi run 150-300 pesos to central areas.
          </p>
          <p>
            <strong>Currency & Tipping</strong>: Mexican pesos (MXN) are the currency. Credit cards work at hotels, restaurants, and most shops, but carry cash for street food, markets, and small purchases. Tipping: 10-15% at casual restaurants, 15-20% at upscale dining, 10-20 pesos per drink at bars, 20-50 pesos per day for hotel housekeeping.
          </p>
          <p>
            <strong>Language</strong>: Spanish dominates, though many tourist-facing businesses employ English speakers. Learning basic Spanish phrases (por favor, gracias, cuánto cuesta, la cuenta por favor) improves interactions and shows respect.
          </p>
          <p>
            <strong>Safety</strong>: Mexico City, like any major metropolis, requires standard urban awareness. The historic center, Polanco, Condesa, Roma, and Chapultepec remain safe day and night with normal precautions. Avoid displaying expensive jewelry or electronics, keep phones secured in crowded Metro cars, don't accept drinks from strangers, and use official taxis or ride-sharing apps rather than street taxis.
          </p>
          <p>
            The city has installed over 123,000 security cameras for the World Cup, aiming to become "the most video-surveilled city in the Americas." Security presence will be substantial around Estadio Azteca and fan zones.
          </p>
          <p>
            <strong>Drinking Water</strong>: Tap water isn't safe for drinking—stick with bottled water widely available everywhere. Most hotels provide complimentary bottled water daily.
          </p>

          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3 mt-8">
            <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Fan Festival & World Cup Atmosphere
          </h2>
          <p>
            Mexico City designated the historic Zócalo plaza for the official FIFA Fan Festival, offering free live match broadcasts on massive screens throughout the tournament. The Zócalo transforms into a celebration zone with food vendors, entertainment, and that electric Mexican football passion that makes this country special.
          </p>
          <p>
            FIFA tickets continue selling through FIFA.com/tickets, with additional phases opening closer to the tournament. Register even if you missed early sales—returns and last-minute availability appear regularly.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Why Mexico City Deserves Extra Days */}
        <article className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-amber-400 dark:text-amber-300 text-3xl"></i>
            Why Mexico City Deserves Extra Days
          </h2>
          <p>
            Here's the truth that most World Cup guides won't tell you: Mexico City isn't just a host city—it's one of the Western Hemisphere's most fascinating, frustrating, overwhelming, and ultimately rewarding destinations. The World Cup gives you permission to visit; the city gives you reasons to stay.
          </p>
          <p>
            This is where 21 million people create daily chaos and unexpected magic. Where ancient Aztec temples sit beneath colonial cathedrals that neighbor modern skyscrapers. Where street tacos at midnight rival Michelin-starred dinners at 9 PM. Where museums hold treasures that would headline collections anywhere else in the world. Where altitude challenges your lungs, mole challenges your palate, and mariachi serenades challenge you not to dance.
          </p>
          <p>
            Extend your trip. Arrive three days before your match. Leave three days after. Walk the Zócalo at sunrise when street cleaners restore the plaza to morning glory. Take that hot air balloon flight over Teotihuacan. Eat tacos al pastor from a street stand at 2 AM. Visit Frida Kahlo's Casa Azul in Coyoacán. Attend a Lucha Libre wrestling match. Ride a trajinera through Xochimilco canals on a Sunday afternoon. Watch sunset from the Cityzen rooftop bar while sipping mezcal cocktails.
          </p>
          <p>
            Because June 11, 2026, makes history at Estadio Azteca, but your Mexico City story should be longer than 90 minutes.
          </p>
          <p>
            <strong>Book your Mexico City experience now</strong>. The opening match. The altitude. The passion. The history. This is where the 2026 World Cup begins—make sure you're there.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article id="tour-planning" className="editorial-body theme-emerald">
          <h2 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-400 dark:text-emerald-300 text-3xl"></i>
            Plan Your Mexico World Cup Adventure
          </h2>
          <p>
            Mexico City is the perfect starting point for exploring Mexico's World Cup host cities and experiencing the country's rich football culture.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4">Popular Combinations:</h4>
            </div>
            <div>
              <h4 className="editorial-h4">Mexico Circuit</h4>
              <p>
                Discover all three Mexican host cities: Start in Mexico City (current), travel west to <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="underline">Guadalajara</Link> for mariachi and tequila culture, then north to <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="underline">Monterrey</Link> for mountain landscapes and modern energy.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Cross-Border Experience</h4>
              <p>
                Many international visitors combine Mexico City with US host cities like <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="underline">Los Angeles</Link>, <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="underline">Dallas</Link>, or <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="underline">Houston</Link> for a diverse North American adventure.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Central America Gateway</h4>
              <p>
                Mexico City's location makes it easy to explore other Mexican destinations or connect to nearby Central American countries before or after the tournament.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link to="/world-cup-2026-host-cities" className="underline">Browse All World Cup 2026 Host Cities</Link>
          </p>
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
            {/* Recommendation 1: Guadalajara */}
            <Link to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/guadalajara-world-cup-2026.webp" 
                alt="Guadalajara World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">Mexican Host</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Guadalajara</h4>
                <p className="text-slate-300 text-sm line-clamp-2">The heart of mariachi and tequila culture.</p>
              </div>
            </Link>

            {/* Recommendation 2: Monterrey */}
            <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/monterrey-world-cup-2026.webp" 
                alt="Monterrey World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">Mountain City</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">Monterrey</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Stunning mountains and modern Mexican energy.</p>
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
                <a href={`https://twitter.com/intent/tweet?text=Mexico%20City%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
