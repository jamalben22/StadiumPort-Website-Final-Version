import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

export default function KansasCityArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide';

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
    link.href = '/images/cities/kansas-city-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    // Manually setting meta for Kansas City since it might not be in the EditorialCalendar yet
    setPageMeta({
      title: 'Kansas City – World Cup 2026 Guide',
      description: 'Complete Kansas City World Cup 2026 travel guide: Arrowhead Stadium details, match schedule, transportation, hotels, and attractions.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/kansas-city-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: '2025-11-16T09:00:00Z',
      modifiedTime: new Date().toISOString(),
      section: 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Kansas City', 'Arrowhead Stadium']
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Kansas City – World Cup 2026 Guide',
            'Complete Kansas City World Cup 2026 travel guide: Arrowhead Stadium details, match schedule, transportation, hotels, and attractions.',
            `${siteUrl}${pageUrl}`,
            { datePublished: '2025-11-16T09:00:00Z', dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Kansas City', 'Arrowhead Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Kansas City', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/kansas-city-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Kansas City skyline – World Cup 2026' }
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
            src="/images/cities/kansas-city-world-cup-2026.webp"
            alt="Kansas City skyline"
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
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Kansas City</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Kansas City World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>USA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>Arrowhead Stadium</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>76,416 Capacity</span>
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

      {/* Content Sections — Premium editorial presentation aligned with NYC/LA/Dallas */}
      <section id="main-content" className="editorial-article-premium dallas-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* Quick Summary */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Kansas City hosts <strong>6 matches</strong></li>
               <li>• Venue: <strong>Arrowhead Stadium</strong> (Kansas City Stadium)</li>
               <li>• Key Event: <strong>Quarterfinal on July 11</strong></li>
               <li>• Regional Hub: Midwest / Heartland</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>The Heart of America Hosts the Heart of the Game
          </h2>
          
          {/* Subtitle/Deck */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Authentic BBQ, deafening stadium noise, and genuine hospitality. Welcome to the World Cup in America's Heartland.
          </p>

          {/* Estimated Read Time */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>7 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`Kansas City might be the smallest host city for the 2026 FIFA World Cup, but don't let that fool you—this is where American football passion meets Midwest hospitality in the most electric way possible. Kansas City is one of the 16 host cities for World Cup 2026. From June 16 through July 11, Arrowhead Stadium (known worldwide as one of the loudest venues in sports) will host six World Cup matches, including a quarterfinal. If you've never experienced Kansas City, prepare for authentic BBQ that'll ruin you for life, genuine friendliness that feels almost surreal, and a stadium atmosphere that literally holds world records for decibel levels.`}
          </p>

          <blockquote className="my-10 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "From the moment you taste your first burnt end to the final whistle of the quarterfinal under Arrowhead's deafening roar, Kansas City delivers experiences you'll remember forever."
          </blockquote>

          <p className="whitespace-pre-line">
            {`This isn't a flashy coastal city trying to impress you. This is the real America—BBQ joints that have been perfecting brisket since the 1940s, fountains on every corner (seriously, KC has more fountains than any city except Rome), and locals who'll give you directions then invite you to their tailgate. The 2026 World Cup gives Kansas City its moment to show the world what Midwestern culture is all about: unpretentious, welcoming, and unexpectedly unforgettable.`}
          </p>

        </article>

        {/* FIFA Fan Festival & Match Day Atmosphere */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Group" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradGroup2KC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="8" cy="12" r="3" fill="url(#gradGroup2KC)" />
              <circle cx="16" cy="12" r="3" fill="#0ea5e9" />
              <rect x="5" y="15" width="14" height="3" rx="1.5" fill="#0ea5e9" />
            </svg>
            FIFA Fan Festival & Match Day Atmosphere
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Join thousands of fans at Union Station and the WWI Memorial—the "World Cup Living Room" of the Midwest.
          </p>

          <p className="leading-relaxed mb-4">
            While official plans are being finalized, the <strong>FIFA Fan Festival</strong> is expected to take over the iconic <strong>National WWI Museum and Memorial</strong> lawn and <strong>Union Station</strong> area. This is the same sacred ground where hundreds of thousands gathered for the 2023 NFL Draft and Chiefs Super Bowl parades. Expect giant screens, live music, and a sea of red (and every other color) creating a festival atmosphere for ticket-less fans.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
            <p className="leading-relaxed">
              <strong>Why Fan Festivals matter for KC:</strong> With six matches including a quarterfinal, this festival becomes the city's heartbeat. The natural amphitheater of the Liberty Memorial lawn offers one of the most dramatic backdrops in North America for watching matches with <strong>50,000+ fellow fans</strong>.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Neighborhood Watch Parties */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="TV" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradTVKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#gradTVKC)" />
              <rect x="10" y="18" width="4" height="2" rx="1" fill="#0ea5e9" />
            </svg>
            Neighborhood Watch Parties
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Can't get a ticket? No problem. The entire city transforms into a massive watch party.
          </p>

          <p className="leading-relaxed mb-4">
            Kansas City's neighborhoods each offer a distinct viewing vibe, from high-energy districts to chill historic spots:
          </p>
          <ul className="leading-relaxed space-y-2 list-disc list-inside">
            <li><strong>Power & Light District (KC Live!)</strong>: The city's premier "living room"—a massive covered outdoor courtyard with huge screens and stadium-level energy.</li>
            <li><strong>Westport</strong>: Historic district with the highest density of bars and patios, perfect for pub-crawling between matches.</li>
            <li><strong>Crossroads Arts District</strong>: Breweries and taprooms offering a more local, craft-focused watch experience.</li>
            <li><strong>River Market</strong>: Weekend vibes near the Missouri River with diverse food hall options.</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        {/* Local Soccer Passion */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Soccer" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSoccerKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="6" fill="url(#gradSoccerKC)" />
              <path d="M12 6 l2 3 l-2 2 l-2 -2 z" fill="#ffffff" />
              <path d="M12 18 l2 -3 l-2 -2 l-2 2 z" fill="#ffffff" />
            </svg>
            Local Soccer Passion
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             They call it the "Soccer Capital of America" for a reason. The passion here rivals any European city.
          </p>

          <p className="leading-relaxed">
            Don't mistake this for just an NFL town. <strong>Sporting KC</strong> boasts one of the longest sellout streaks in MLS history at <strong>Children's Mercy Park</strong>. The city is home to the <strong>National Training and Coaching Development Center</strong> (The Pinnacle), where the US National Teams train. The region has produced top talent and features a deeply knowledgeable fanbase that understands the nuances of the beautiful game. When the World Cup arrives, it's coming to a city that has been ready for decades.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Match Day at Arrowhead Stadium */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Clock" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradClockKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradClockKC)" />
              <path d="M12 12 l0 -4 M12 12 l3 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Match Day at Arrowhead Stadium
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating the loudest stadium in the world requires strategy. Here is how to handle the experience.
          </p>

          <p className="leading-relaxed mb-3">
            Arrive <strong>3–4 hours early</strong>. Unlike many stadiums, the experience at Arrowhead begins in the parking lot. Tailgating is an essential part of the culture here.
          </p>
          <p className="leading-relaxed">
            <strong>Truman Sports Complex</strong> (home to Arrowhead and Kauffman Stadium) is an island of sports. There is no "neighborhood" to walk to; you drive or shuttle in, and once you are there, you are part of the massive pre-match festival. Plan your transportation carefully—rideshare drop-off zones can be a hike, and traffic is heavy.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Section */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500"></i>
            The Stadium: Arrowhead Stadium
          </h3>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026.webp"
              alt="Arrowhead Stadium Interior"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
            />
          </div>
          <div className="space-y-8">
            {/* Loudest Venue */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-volume-up-line text-emerald-500"></i>
                One of the World's Loudest Venues
              </h4>
              <div className="space-y-4">
                <p>
                  Arrowhead Stadium opened in 1972 and has a capacity of 76,416 seats, making it one of the larger World Cup venues in the United States. What truly sets this stadium apart isn't just size—it's sound. In a 2014 NFL match between the Kansas City Chiefs and New England Patriots, the decibel count hit 142.2, a record that still stands today as the loudest stadium in the USA.
                </p>
                <p>
                  The stadium's unique design creates this acoustic phenomenon. Two towering stands run alongside the pitch, while smaller stands behind both goals complete a three-tiered bowl that wraps sound around and amplifies it back onto the field. For World Cup matches, this means visiting teams will face not just their opponents but also a wall of noise from 76,000 passionate supporters.
                </p>
                <p>
                  During the tournament, FIFA will refer to the venue as "Kansas City Stadium" due to sponsorship regulations. The stadium underwent an $800 million renovation ahead of the World Cup, touching every aspect of the 52-year-old venue with improvements above and below ground.
                </p>
              </div>
            </div>
            {/* Match Schedule */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-calendar-event-line text-emerald-500"></i>
                Match Schedule at Arrowhead Stadium
              </h4>

              <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
                <OptimizedImage
                  src="/images/images articles/kansas city guide/Interactive Tournament Timeline Graphic.webp"
                  alt="Interactive Tournament Timeline - Kansas City"
                  className="absolute inset-0"
                  imgClassName="w-full h-full object-contain"
                  width={1600}
                  height={900}
                  placeholder="empty"
                  sizes="(min-width: 1024px) 960px, 100vw"
                  disableSrcSet={true}
                />
              </div>

              <div className="space-y-6">
                <p>
                  Kansas City will host six World Cup matches spanning nearly a month of tournament action, culminating in a massive Quarterfinal clash:
                </p>
                
                {/* Group Stage Matches */}
                <div className="bg-slate-50 dark:bg-navy-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-navy-700">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <i className="ri-flag-line"></i>
                    Group Stage (Four Matches)
                  </h4>
                  <ul className="space-y-3 list-none">
                    <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                        <span className="font-mono text-emerald-500 font-bold">01</span>
                        <span><strong>Tuesday, June 16, 2026</strong> – Group Stage match</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                        <span className="font-mono text-emerald-500 font-bold">02</span>
                        <span><strong>Saturday, June 20, 2026</strong> – Group Stage match</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                        <span className="font-mono text-emerald-500 font-bold">03</span>
                        <span><strong>Thursday, June 25, 2026</strong> – Group Stage match</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                        <span className="font-mono text-emerald-500 font-bold">04</span>
                        <span><strong>Saturday, June 27, 2026</strong> – Group Stage match</span>
                    </li>
                  </ul>
                </div>

                {/* Knockout Stage */}
                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-800/30">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                    <i className="ri-trophy-line"></i>
                    Knockout Stage (Two Matches)
                  </h4>
                  <ul className="space-y-3 list-none">
                    <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                        <span className="font-mono text-amber-500 font-bold">R32</span>
                        <span><strong>Friday, July 3, 2026</strong> – Round of 32</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-100 to-white dark:from-amber-900/40 dark:to-navy-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
                        <span className="font-mono text-amber-600 dark:text-amber-400 font-bold text-lg">QF</span>
                        <span className="text-lg"><strong>Saturday, July 11, 2026</strong> – <span className="uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">QUARTERFINAL</span></span>
                    </li>
                  </ul>

                  <div className="mt-6 pl-4 border-l-2 border-amber-200 dark:border-amber-800">
                    <p className="leading-relaxed italic text-slate-700 dark:text-slate-300">
                      That quarterfinal on July 11 is the crown jewel. It represents the deepest stage of the tournament any U.S. venue will host outside the semifinals and final, making Kansas City a critical stop for teams with championship ambitions.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                    <i className="ri-information-line text-emerald-500"></i>
                    Tournament context for planning
                  </h4>
                  <p className="leading-relaxed">
                    The expanded 48-team format creates more group stage matches but also means knockout rounds feature razor-thin margins. By the time the Quarterfinal arrives on July 11, you're watching the best 8 teams in the world.
                  </p>
                </div>
              </div>
            </div>

            {/* What Makes This Stadium Special */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                What Makes This Stadium Special
              </h4>
              <div className="space-y-4">
                <p>
                  Arrowhead Stadium is currently home to the Kansas City Chiefs, who have risen to NFL prominence behind quarterback Patrick Mahomes and won two Super Bowls in recent years. The stadium's football pedigree is impeccable, but soccer has history here too.
                </p>
                <p>
                  MLS side Sporting Kansas City (originally Kansas City Wizards) played at Arrowhead from 1996 to 2007 before moving to their own stadium. Soccer returned in April 2024 when Inter Miami faced Sporting Kansas City thanks to the Lionel Messi effect, proving the stadium can handle major football events.
                </p>
                <p>
                  The stadium hosted matches during the 2024 Copa América, including a group match between USA and Uruguay, giving FIFA a preview of what Kansas City can deliver. The facility features natural grass specifically cultivated for the low temperatures Kansas City experiences—'NorthBridge Bermudagrass' is the optimal surface for this climate.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to Arrowhead Stadium: The Transportation Equation */}
        <article id="transport" className="editorial-body">
          {/* [SCROLL ANCHOR] */}
          <div id="transport-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Transport Reality Check</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>No direct rail</strong> to stadium door</li>
               <li>• <strong>RideKC Bus 229:</strong> Free airport-downtown service</li>
               <li>• <strong>Rideshare:</strong> Most common for stadium access</li>
               <li>• <strong>Driving:</strong> Massive parking lots available</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Route" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradRouteKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path d="M4 18 c4 -6 6 -6 10 -2 s6 2 6 -4" fill="none" stroke="url(#gradRouteKC)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="6" cy="18" r="2" fill="#0ea5e9" />
              <circle cx="20" cy="8" r="2" fill="#0ea5e9" />
            </svg>
            Getting to Arrowhead Stadium: The Transportation Equation
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Navigating Kansas City requires a mix of free public transit and strategic rideshare planning. Here is your realistic guide to reaching the venue.
          </p>

          <p className="leading-relaxed mb-6">
            Kansas City is famous for its sprawl, but it makes up for it with one of the most car-friendly infrastructures in America. Unlike dense coastal cities, getting around by car here is generally straightforward—until match day traffic hits.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
             "Kansas City is famous for its sprawl... getting around by car here is generally straightforward—until match day traffic hits."
          </blockquote>

          <p className="leading-relaxed mb-6">
            Kansas City connects easily to <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link> for a heartland double-header, and many fans combine it with <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link> or <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>.
          </p>

          {/* [VISUAL: Regional Transit Map Placeholder] */}
          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-navy-700">
             <span className="text-slate-400 font-medium flex items-center gap-2"><i className="ri-map-2-line"></i> [VISUAL: Regional Transit Map (MCI - Downtown - Arrowhead)]</span>
          </div>

          {/* Best Options */}
          <div className="space-y-12">
            {/* RideKC Bus (Most Economical) */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-emerald-200 dark:bg-emerald-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-emerald-800 dark:text-emerald-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Bus" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradBusKC" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="5" width="16" height="14" rx="2" fill="url(#gradBusKC)" />
                    <circle cx="7" cy="17" r="1.5" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.5" fill="#ffffff" />
                    <rect x="6" y="8" width="12" height="5" rx="1" fill="#ffffff" />
                  </svg>
                  RideKC Bus (Free & Economical)
                </h4>
                <p className="leading-relaxed whitespace-pre-line mb-4">
                  {`RideKC offers fare-free bus service throughout the city, including the essential Route 229 which connects Kansas City International Airport (MCI) to downtown. While regular routes don't serve the stadium directly on match days, shuttle services are typically organized for major events.

  • Take Bus 229 from MCI to Downtown (Free)
  • Use KC Streetcar for downtown mobility (Free)
  • Connect to match-day shuttles or rideshare for the final leg to Arrowhead`}
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> $0 (Fare-free system)</li>
                    <li><strong>Time:</strong> Budget 60 minutes Airport-to-Downtown</li>
                    <li><strong>Pros:</strong> Absolutely free; modern streetcar is excellent for downtown exploration</li>
                    <li><strong>Cons:</strong> No direct rail to stadium; requires transfer to shuttle or rideshare</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="callout-must-know">
                    <div className="callout-icon flex items-center gap-2 font-medium">
                      <span>Streetcar Note</span>
                    </div>
                    <p className="leading-relaxed mt-2 text-sm">
                      The KC Streetcar is expanding! By 2026, the Main Street Extension should be operational, connecting downtown to the Country Club Plaza and UMKC, making the city even more connected.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rideshare/Taxi */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Taxi" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTaxiKC" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="10" width="18" height="6" rx="2" fill="url(#gradTaxiKC)" />
                    <rect x="9" y="7" width="6" height="3" rx="1" fill="#f59e0b" />
                    <circle cx="7" cy="17" r="2" fill="#0ea5e9" />
                    <circle cx="17" cy="17" r="2" fill="#0ea5e9" />
                  </svg>
                  Rideshare/Taxi (Most Convenient)
                </h4>
                <p className="leading-relaxed mb-4">
                  Uber and Lyft are the primary way visitors get to Arrowhead. From downtown Kansas City, plan on $25–40 each way under normal conditions; match-day surges will increase this significantly. The stadium has designated rideshare zones, but patience is key.
                </p>
                <div className="callout-pro-tip border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 p-5 rounded-r-lg">
                  <h5 className="text-md font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <div className="callout-icon">
                      <svg className="h4-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
                        <defs>
                          <linearGradient id="gradBulbKC" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0" stopColor="#f59e0b" />
                            <stop offset="1" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                        <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradBulbKC)" />
                        <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
                      </svg>
                    </div>
                    Smart Hacks
                  </h5>
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-amber-900/80 dark:text-amber-200/80">
                    <li>Schedule your ride well in advance if possible.</li>
                    <li>If staying near the Plaza or Westport, consider sharing a ride with other fans to split the cost.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Driving + Parking */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Car" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradCarKC" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="10" width="16" height="5" rx="2" fill="url(#gradCarKC)" />
                    <path d="M6 10 L9 7 H15 L18 10" fill="#6366f1" />
                    <circle cx="8" cy="16" r="2" fill="#0ea5e9" />
                    <circle cx="16" cy="16" r="2" fill="#0ea5e9" />
                  </svg>
                  Driving + Tailgating (The KC Way)
                </h4>
                <p className="leading-relaxed mb-4">
                  Driving to Arrowhead is the most authentic experience because it unlocks tailgating. The parking complex is massive. You must purchase parking passes in advance online—do not expect to pay at the gate.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Cost:</strong> $40–60 for standard lots (pre-purchased)</li>
                    <li><strong>Reality check:</strong> Traffic exiting the stadium is legendary (and not in a good way). Plan to stay late and BBQ.</li>
                  </ul>
                </div>
                <div className="callout-must-know">
                  <p className="leading-relaxed text-sm">
                    <strong>Tip:</strong> Arrive 3-4 hours early. Tailgating at Arrowhead is a cultural event with smokers, games, and friendly locals.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Transport options summary table */}
          <div className="comparison-table overflow-x-auto -mx-4 md:mx-0 mt-12">
            <table aria-label="Transport options comparison — Kansas City" className="min-w-[720px] w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-3">Option</th>
                  <th className="text-left p-3">Approx. Cost</th>
                  <th className="text-left p-3">Typical Time</th>
                  <th className="text-left p-3">Pros</th>
                  <th className="text-left p-3">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">RideKC Bus + Shuttle</td>
                  <td className="p-3">$0 (Free) + Shuttle cost</td>
                  <td className="p-3">60–90 minutes</td>
                  <td className="p-3">Free; avoids parking</td>
                  <td className="p-3">Requires transfers</td>
                </tr>
                <tr>
                  <td className="p-3">Rideshare/Taxi</td>
                  <td className="p-3">$30–50 each way (surge higher)</td>
                  <td className="p-3">25–45 minutes</td>
                  <td className="p-3">Door-to-door convenience</td>
                  <td className="p-3">Surge pricing; waits</td>
                </tr>
                <tr>
                  <td className="p-3">Driving + Parking</td>
                  <td className="p-3">$40–60 (Parking pass)</td>
                  <td className="p-3">Variable</td>
                  <td className="p-3">Tailgating enabled; flexible</td>
                  <td className="p-3">Post-match traffic jams</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay: Neighborhood Playbook for the Metroplex */}
        <article id="stay" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Downtown:</strong> Best for nightlife & Power & Light District</li>
               <li>• <strong>Crossroads:</strong> Creative arts hub & boutique hotels</li>
               <li>• <strong>Country Club Plaza:</strong> Upscale shopping & Spanish architecture</li>
               <li>• <strong>Arrowhead:</strong> Proximity to stadium (book ASAP)</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradHotelKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradHotelKC)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhood Guide
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Kansas City offers diverse accommodation options, from downtown hotels with skyline views to neighborhood gems with local character. Here's where to base yourself.
          </p>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/kansas city guide/Interactive Neighborhood Map.webp"
               alt="Interactive Neighborhood Map (Stadium vs. Downtown)"
               className="absolute inset-0"
               imgClassName="w-full h-full object-contain"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <p className="leading-relaxed mb-6">
             Your accommodation choice largely depends on whether you want the immersive fan experience of the Power & Light District or the convenience of being near the stadium on match day.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-emerald-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "Downtown puts you in the center of Kansas City's energy, walkable to restaurants, bars, and entertainment."
          </blockquote>

          {/* Downtown / Power & Light */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPinKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPinKC)" />
                <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
              </svg>
              Downtown/Power & Light District (Maximum Convenience)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Downtown puts you in the center of Kansas City's energy, walkable to restaurants, bars, and entertainment. The <strong>Power & Light District</strong> is Kansas City's heartbeat—eight blocks of great food, live music, and nightlife where locals and tourists converge.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Hotel options:</strong> <em>The Kansas City Marriott Downtown</em> sits adjacent to the convention center and within walking distance of Power & Light. <em>The Loews Kansas City</em> provides upscale accommodations near the convention center with a fitness center and shared lounge.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Best for:</strong> Visitors who want walkability, easy access to nightlife, and proximity to cultural attractions without needing a car for everything except match days.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
              <p className="leading-relaxed">
                <strong>Note:</strong> For boutique charm, the <em>Crossroads Hotel</em> is technically in the nearby Arts District but often considered part of the greater downtown experience.
              </p>
            </div>
          </div>

          {/* Crossroads Arts District */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Brush" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBrushKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#fb7185" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path d="M5 16 c3 0 4 -2 7 -6 l2 -2 l3 3 l-2 2 c-4 3 -6 4 -6 7 c-2 0 -3 -1 -4 -4z" fill="url(#gradBrushKC)" />
              </svg>
              Crossroads Arts District (Creative Energy)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Just south of downtown, the Crossroads is Kansas City's creative hub—galleries, street art, independent coffee shops, and restaurants that define Kansas City's evolving cultural scene. Every First Friday, the neighborhood hosts an art walk that draws thousands.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>What you'll find:</strong> <em>The Crossroads Hotel</em> embodies the neighborhood's spirit with contemporary design, a ground-floor restaurant serving local cuisine, and a rooftop bar with skyline views. <em>The Hampton Inn & Suites Kansas City Downtown Crossroads</em> offers modern comfort with free Wi-Fi.
            </p>
            <p className="leading-relaxed">
              <strong>Best for:</strong> Art lovers, foodies seeking KC's best independent restaurants, and travelers who want neighborhood character without sacrificing downtown proximity.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Country Club Plaza */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="City" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCityKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect x="4" y="9" width="5" height="7" rx="1" fill="url(#gradCityKC)" />
              <rect x="10" y="6" width="5" height="10" rx="1" fill="#0ea5e9" />
              <rect x="16" y="10" width="4" height="6" rx="1" fill="url(#gradCityKC)" />
            </svg>
            Country Club Plaza (Shopping & Spanish Architecture)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> Built in the 1920s, the Country Club Plaza is America's first suburban shopping district, featuring sumptuous Spanish architecture, fountains on every corner, and upscale shopping. The area offers tree-lined streets, outdoor dining, and a more relaxed vibe than downtown.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Hotel options:</strong> <em>The Raphael Hotel, Autograph Collection</em> provides luxury accommodations in the heart of the Plaza with European-inspired design. <em>The Hampton Inn & Suites Kansas City-Country Club Plaza</em> offers reliable comfort steps from shopping and dining.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Best for:</strong> Families wanting walkable shopping and dining, couples seeking romance, and travelers who prefer a quieter base with easy rideshare access to downtown and Arrowhead.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Near Arrowhead Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
             <svg className="heading-icon-svg" role="img" aria-label="District" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradDistrictKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradDistrictKC)" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#0ea5e9" />
            </svg>
            Near Arrowhead Stadium (Proximity Over Charm)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> If you're attending multiple matches or prioritizing stadium proximity, consider hotels near Arrowhead. Several mid-range chains offer good value and put you minutes from kickoff.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Trade-off:</strong> You'll sacrifice walkable dining and urban energy for convenience. Budget extra time and money for rideshares to explore downtown between matches.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Best for:</strong> Groups attending multiple matches, families wanting more space, and budget-conscious travelers who don't mind driving.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Matches: What to Do in Kansas City */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Culture & Leisure</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>History:</strong> National WWI Museum & Memorial</li>
               <li>• <strong>Arts:</strong> Nelson-Atkins Museum (Free admission)</li>
               <li>• <strong>Music:</strong> 18th & Vine Jazz District</li>
               <li>• <strong>Landmarks:</strong> Union Station & City of Fountains</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Sparkles" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSparkKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M6 12 l2 -4 l2 4 l-2 4z" fill="url(#gradSparkKC)" />
              <path d="M14 8 l2 -3 l2 3 l-2 3z" fill="#0ea5e9" />
              <path d="M14 16 l2 -3 l2 3 l-2 3z" fill="#38bdf8" />
            </svg>
            Beyond the Matches: What to Do in Kansas City
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Kansas City surprises visitors who arrive expecting Midwest stereotypes. This is a city with world-class museums, James Beard Award-winning restaurants, and a cultural scene that rivals cities twice its size.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/kansas city guide/Interactive Map of Top Attractions.webp"
               alt="Interactive Map of Top Attractions"
               className="absolute inset-0"
               imgClassName="w-full h-full object-contain"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
            <svg className="h4-icon-svg" role="img" aria-label="Compass" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCompassKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradCompassKC)" />
              <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
            </svg>
            Must-See Attractions
          </h4>

          <div className="space-y-6">
            {/* National WWI Museum */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Museum" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradMuseumKC" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="8" width="18" height="10" rx="2" fill="url(#gradMuseumKC)" />
                  <rect x="6" y="5" width="12" height="4" rx="1.5" fill="#0ea5e9" />
                  <rect x="6" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                  <rect x="10.5" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                  <rect x="15" y="10" width="3" height="5" rx="0.8" fill="#ffffff" />
                </svg>
                National WWI Museum and Memorial
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Kansas City is home to America's official World War I Museum and Memorial, and it's spectacular. The museum features extensive exhibits covering the Great War from all sides, with artifacts, interactive displays, and personal stories that bring history to life. The memorial tower offers panoramic views of Kansas City's skyline and surrounding landscape.
              </p>
            </div>

            {/* Nelson-Atkins Museum */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Palette" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPaletteKC" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#fb7185" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path d="M12 4 a8 8 0 1 0 0 16 h1 a2.5 2.5 0 0 0 0 -5 h-1 a1.5 1.5 0 0 1 -1.5 -1.5 v-1 a1.5 1.5 0 0 1 1.5 -1.5 h1 a2.5 2.5 0 0 0 0 -5 z" fill="url(#gradPaletteKC)" />
                  <circle cx="8" cy="10" r="1.5" fill="#ffffff" />
                  <circle cx="9" cy="14" r="1.5" fill="#ffffff" />
                  <circle cx="13" cy="10" r="1.5" fill="#ffffff" />
                </svg>
                The Nelson-Atkins Museum of Art
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                The Nelson-Atkins Museum ranks among America's finest art museums, housing 42,000 works spanning 5,000 years of human creativity. The collection includes one of the top three Asian art collections worldwide, exceptional Impressionist and Post-Impressionist works, and commissioned contemporary installations. The museum's architecture is itself art—the original 1933 building paired with Steven Holl's acclaimed Bloch Building addition (2007). Outside, giant badminton shuttlecocks on the lawn have become Kansas City icons.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800/30 inline-block">
                 <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                   <strong>Best Part:</strong> Admission is always free.
                 </p>
              </div>
            </div>

            {/* Union Station */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Station" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStationKC" x1="0" x2="1" y1="0" y2="1">
                       <stop offset="0" stopColor="#f59e0b" />
                       <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="url(#gradStationKC)" />
                  <rect x="8" y="8" width="8" height="8" rx="1" fill="#ffffff" />
                  <path d="M12 2 v2 M12 20 v2" stroke="#f59e0b" strokeWidth="2" />
                </svg>
                Union Station: Living History
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Opened in 1914, Union Station is a sublime example of the magnificent architecture that once defined American train stations. Today, it's Kansas City's living history museum with rotating world-class exhibits, Science City (interactive science museum), a planetarium, and model train displays. The Grand Hall alone is worth the visit—breathtaking Beaux-Arts architecture that transports you back to the golden age of rail travel.
              </p>
            </div>

            {/* 18th & Vine */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                 <svg className="heading-icon-svg" role="img" aria-label="Music" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradMusicKC" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#e11d48" />
                      <stop offset="1" stopColor="#fb7185" />
                    </linearGradient>
                  </defs>
                  <path d="M9 5 v10 a3 3 0 1 1 -2 2.8 V7 h8 v6 a3 3 0 1 1 -2 2.8 V5z" fill="url(#gradMusicKC)" />
                </svg>
                18th & Vine Historic Jazz District
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Kansas City is a jazz city—Charlie Parker, Count Basie, and the sound that defined an era all came from here. The 18th & Vine district is where it happened, and today it houses the <strong>American Jazz Museum</strong> and <strong>Negro Leagues Baseball Museum</strong>. It's a pilgrimage site for music and sports history buffs alike.
              </p>
            </div>

            {/* Fountains */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                 <svg className="heading-icon-svg" role="img" aria-label="Water" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradWaterKC" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                   <path d="M12 3 c0 0 -6 8 -6 12 a6 6 0 0 0 12 0 c0 -4 -6 -12 -6 -12z" fill="url(#gradWaterKC)" />
                </svg>
                Kansas City Fountains
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Kansas City has more fountains than any city in the world except Rome—over 200, earning it the nickname "City of Fountains." The <strong>J.C. Nichols Memorial Fountain</strong> at Country Club Plaza is the most photographed, but you'll discover fountains throughout downtown and residential neighborhoods.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food Scene: Welcome to BBQ Paradise */}
        <article className="editorial-body theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Culinary Highlights</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>BBQ Trinity:</strong> Joe's, Gates, Arthur Bryant's</li>
               <li>• <strong>Must-Try:</strong> Burnt Ends & Z-Man Sandwich</li>
               <li>• <strong>Beyond BBQ:</strong> The Antler Room & Boulevard Brewing</li>
               <li>• <strong>Experience:</strong> Arrowhead Tailgating (Essential)</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Food" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradFoodKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="4" height="10" rx="1" fill="#f59e0b" />
              <rect x="11" y="7" width="8" height="10" rx="2" fill="url(#gradFoodKC)" />
            </svg>
            Food Scene: Welcome to BBQ Paradise
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Let's address this upfront: Kansas City BBQ is a religion, not just a meal. This city takes smoked meat more seriously than anywhere else in America.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/kansas city guide/Interactive Dining Guide.webp"
               alt="Interactive Dining Guide"
               className="absolute inset-0"
               imgClassName="w-full h-full object-contain"
               width={1600}
               height={900}
               placeholder="empty"
               sizes="(min-width: 1024px) 960px, 100vw"
               disableSrcSet={true}
             />
          </div>

          {/* BBQ Holy Trinity */}
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Barbecue" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBBQKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <path d="M12 5 c2 2 2 4 0 6 c-2 2 -2 4 0 6" fill="url(#gradBBQKC)" />
              </svg>
              The Holy Trinity of KC BBQ
            </h4>
            <div className="space-y-4">
               <div>
                 <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-1">Joe's Kansas City Bar-B-Que</h5>
                 <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                   The most famous address in Kansas City BBQ is a gas station in Kansas City, Kansas. Yes, you read that right. Joe's original location operates out of a working gas station—and it's been called one of "13 Places You Must Eat Before You Die" by Anthony Bourdain. <strong>Order the Z-Man:</strong> sliced brisket, smoked provolone, and onion rings on a toasted Kaiser roll.
                 </p>
               </div>
               <div>
                 <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-1">Gates Bar-B-Q</h5>
                 <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                   When you walk into any Gates location, staff will belt out "Hi, may I help you?" in a sassy, ear-piercing greeting that's been a Kansas City tradition since the 1940s. It's friendly, welcoming, and unforgettable—just like their BBQ.
                 </p>
               </div>
               <div>
                 <h5 className="font-bold text-slate-900 dark:text-slate-50 mb-1">Arthur Bryant's</h5>
                 <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                   In 1972, Kansas City native Calvin Trillin wrote in Playboy that Arthur Bryant's was "the best restaurant on the planet." Presidents Truman, Carter, and Reagan visited this no-frills spot with fluorescent lighting, Formica tables, and five-gallon jars of sauce in the windows.
                 </p>
               </div>
            </div>
          </div>

          {/* KC BBQ Style */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/70 dark:border-slate-700 mb-8">
            <h4 className="editorial-h4 mb-3 flex items-center gap-2">
               <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               Understanding Kansas City BBQ Style
            </h4>
            <p className="mb-3 text-slate-700 dark:text-slate-300">Kansas City BBQ differs from Texas, Memphis, and Carolina styles in two key ways:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300 mb-3">
              <li><strong>Any meat goes</strong>: While Texas focuses on brisket and Carolina on pork, Kansas City smokes everything—pork, beef, chicken, turkey, lamb, sausage, and sometimes fish.</li>
              <li><strong>Thick, sweet tomato-based sauce</strong>: Kansas City sauce has more sweetness than other regional styles, often incorporating molasses.</li>
            </ol>
            <p className="text-slate-700 dark:text-slate-300"><strong>Burnt ends</strong> deserve special mention: These are the crusty, fatty, flavorful pieces cut from the point of a smoked beef brisket. They're a Kansas City specialty.</p>
          </div>

          {/* Beyond BBQ */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Restaurant" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradRestaurantKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="6" y="7" width="3" height="10" rx="1" fill="#f59e0b" />
                <rect x="11" y="7" width="7" height="10" rx="2" fill="url(#gradRestaurantKC)" />
              </svg>
              Beyond BBQ: KC's Evolving Food Scene
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-200">
              From <strong>The Rieger's</strong> farm-to-table American cuisine to <strong>Port Fonda's</strong> modern Mexican in Westport, the culinary scene is exploding. Don't miss <strong>The Antler Room</strong> for innovative small plates, or local breweries like <strong>Boulevard Brewing Company</strong>, KC's largest craft brewery.
            </p>
          </div>

          {/* Match Day Food Strategy */}
          <div className="mb-6">
             <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
               <svg className="h4-icon-svg" role="img" aria-label="Stadium" viewBox="0 0 24 24">
                 <defs>
                   <linearGradient id="gradStadiumFoodKC" x1="0" x2="1" y1="0" y2="1">
                     <stop offset="0" stopColor="#e11d48" />
                     <stop offset="1" stopColor="#fb7185" />
                   </linearGradient>
                 </defs>
                  <path d="M4 12 c0 -4 4 -8 8 -8 s8 4 8 8" fill="none" stroke="url(#gradStadiumFoodKC)" strokeWidth="2" />
                  <rect x="4" y="12" width="16" height="4" rx="1" fill="#f59e0b" />
               </svg>
               Match Day Food Strategy
             </h4>
             <p className="leading-relaxed text-slate-700 dark:text-slate-200">
               Tailgating is a religion at Arrowhead Stadium. Arrive early on match days and you'll find parking lots transformed into outdoor parties with grills, games, and Kansas City hospitality on full display. Locals may invite you to join—say yes.
             </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Information: What You Need to Know */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Essential Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Airport:</strong> MCI (New Terminal opened 2023)</li>
               <li>• <strong>Weather:</strong> 88°F+ Heat & Humidity</li>
               <li>• <strong>Safety:</strong> Tourist zones very safe</li>
               <li>• <strong>Culture:</strong> "Midwest Nice" is real</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradInfoKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradInfoKC)" />
              <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
              <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Information: What You Need to Know
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating Kansas City is easier than most major metros. From the brand-new airport to local customs, here is your survival guide.
          </p>

          {/* Getting to Kansas City */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPlaneKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M3 12 l8 -2 l0 -5 l2 5 l8 2 l-8 2 l-2 5 l0 -5z" fill="url(#gradPlaneKC)" />
              </svg>
              Getting to Kansas City
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Kansas City International Airport (MCI)</strong> opened a stunning new single terminal in 2023, completely transforming the arrival experience. It's located about <strong>20 miles north of downtown</strong>.
            </p>
            <p className="leading-relaxed mb-2"><strong>Ground transportation from MCI:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>RideKC Bus 229:</strong> The only public transit option. It's free, takes ~60 minutes, and drops off in downtown.</li>
              <li><strong>Rideshare (Uber/Lyft):</strong> The most popular choice. Expect $35–50 to downtown (25–30 minutes).</li>
              <li><strong>Rental Cars:</strong> A consolidated rental car facility is a short shuttle ride from the terminal.</li>
            </ul>
          </div>

          {/* Weather & What to Pack */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradSunKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="4" fill="url(#gradSunKC)" />
                <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3 M5 5 l2 2 M17 17 l2 2 M19 5 l-2 2 M7 17 l-2 2" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Weather & What to Pack
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>Highs:</strong> 85–95°F (29–35°C)</li>
              <li><strong>Lows:</strong> 65–75°F (18–24°C)</li>
              <li><strong>Humidity:</strong> Moderate to High (sticky afternoons)</li>
              <li><strong>Storms:</strong> Sudden thunderstorms are common in summer</li>
            </ul>
            <p className="leading-relaxed mb-2"><strong>Pack:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Light, breathable fabrics (cotton, linen)</li>
              <li>Comfortable walking shoes (you'll do a lot of walking)</li>
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Light rain jacket or compact umbrella</li>
              <li>A light layer for air-conditioned interiors</li>
            </ul>
          </div>

          {/* Money & Costs */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradMoneyKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradMoneyKC)" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
                <path d="M12 10 v4 M10.5 11.5 h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Money & Costs
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Currency:</strong> US Dollar (USD)</li>
              <li><strong>Payments:</strong> Cards/contactless accepted everywhere. Cash useful for small tips.</li>
              <li><strong>Tipping:</strong> 18–20% restaurants, $1/drink bars, 15–20% rideshare.</li>
              <li><strong>Value:</strong> KC is significantly more affordable than coastal cities like LA or NY.</li>
            </ul>
          </div>

          {/* Safety & Street Smarts */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradShieldKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradShieldKC)" />
                <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Safety & Street Smarts
            </h4>
            <p className="leading-relaxed mb-3">
              Kansas City is generally safe for visitors, especially in the main tourist zones (Downtown, Plaza, Crossroads, Power & Light).
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Downtown/Plaza:</strong> Safe and well-patrolled.</li>
              <li><strong>Car Safety:</strong> If renting a car, never leave valuables in plain sight.</li>
              <li><strong>Awareness:</strong> Like any city, stay aware of your surroundings at night.</li>
            </ul>
          </div>

          {/* Language & Culture */}
          <div>
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Chat" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradChatKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M4 6 h16 v9 a2 2 0 0 1 -2 2 H9 l-4 3 v-3 a2 2 0 0 1 -1 -2z" fill="url(#gradChatKC)" />
              </svg>
              Language & Culture
            </h4>
            <p className="leading-relaxed mb-3">
              English is the primary language. Kansas Citians are known for genuine Midwest friendliness—don't be surprised if strangers strike up conversations.
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Greetings:</strong> "Hi" or "Hello" is common. Handshakes are standard.</li>
              <li><strong>Sports:</strong> Locals take pride in the Chiefs (NFL) and their city. It's a great conversation starter.</li>
              <li><strong>BBQ Etiquette:</strong> Don't ask for "sauce on the side" unless you want a funny look—but they'll probably do it anyway.</li>
            </ul>
          </div>
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Ticket" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradTicketKC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <path d="M5 9 h14 v6 h-2 a2 2 0 1 1 0 -4 h-10 a2 2 0 1 0 0 4 h-2z" fill="url(#gradTicketKC)" />
            </svg>
            Ticket Information &amp; Booking Strategy
          </h3>
          <div className="space-y-6">
            <p>
              Tickets for the 2026 World Cup are sold in phases. Register at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">fifa.com/tickets</a>. The quarterfinal match on July 11 will be among the most sought-after tickets at Arrowhead Stadium.
            </p>
            <p>
              <strong>Hospitality Packages</strong>: Official hospitality packages start around $1,400 per match. These include premium seating, exclusive lounge access, and food and beverage service—worth considering if you want guaranteed access without lottery uncertainty.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why KC Will Make It Unforgettable (Match Day Atmosphere) */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Heart" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradHeartKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#e11d48" />
                  <stop offset="1" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <path d="M12 21.35 l-1.45 -1.32 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 c1.74 0 3.41 0.81 4.5 2.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 c0 3.78 -3.4 6.86 -8.55 11.54 L12 21.35 z" fill="url(#gradHeartKC)" />
            </svg>
            Why Kansas City Will Make Your World Cup Unforgettable
          </h3>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">The KC Experience</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Atmosphere:</strong> World's Loudest Stadium (142.2 dB)</li>
               <li>• <strong>Accessibility:</strong> Central location & affordable costs</li>
               <li>• <strong>Authenticity:</strong> Genuine heartland hospitality</li>
               <li>• <strong>Food:</strong> Best BBQ on the planet</li>
             </ul>
          </div>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             This isn't New York's intensity or Los Angeles' glamour—it's real people who genuinely love their city and want to share it.
          </p>

          <div className="space-y-6">
            <p className="leading-relaxed mb-4">
              Over 1 million visitors are expected across all World Cup host cities, and Kansas City's portion of that celebration will showcase something unique: authentic American culture without pretense or flash.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
              <p className="leading-relaxed">
                 You'll eat BBQ that ruins you for life, experience stadium noise that literally breaks world records, and meet locals who'll invite you to their tailgate within five minutes of conversation. From the moment you taste your first burnt end to the final whistle of the quarterfinal under Arrowhead's deafening roar, Kansas City delivers experiences you'll remember forever.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Map" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradMapKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path d="M20.5 3l-.16 .03l-5.96 2.12l-6.66 -2.32l-.1 -.03l-.1 .03l-6.96 2.52l-.5 .18v15.12l.16 -.03l5.96 -2.12l6.66 2.32l.1 .03l.1 -.03l6.96 -2.52l.5 -.18v-15.12z" fill="url(#gradMapKC)" />
            </svg>
            Plan Your Heartland World Cup Experience
          </h3>
          <p className="leading-relaxed mb-4">
            Kansas City's central location makes it the perfect base for exploring America's heartland and connecting to cities across the country.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-slate-900 dark:text-white mb-1">Central States Circuit</p>
              <p>
                Experience authentic American heartland: Kansas City for BBQ and Midwest charm, then head to{' '}
                <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Dallas</Link>
                {' '}for Texas energy and culture.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-slate-900 dark:text-white mb-1">Heartland to South</p>
              <p>
                Connect the Midwest with the South: Kansas City to{' '}
                <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Houston</Link>
                {' '}or{' '}
                <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Atlanta</Link>
                .
              </p>
            </div>
          </div>
        </article>
        
        {/* Start Planning */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
             <svg className="heading-icon-svg" role="img" aria-label="Checklist" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradPlanKC" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f59e0b" />
                  <stop offset="1" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="16" height="16" rx="2" fill="url(#gradPlanKC)" />
              <path d="M9 12 l2 2 l4 -4" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start Planning Your Trip
          </h3>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Readiness Tracker</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Tickets:</strong> Register at FIFA.com</li>
               <li>• <strong>Logistics:</strong> Book hotel 6-12 months out</li>
               <li>• <strong>Transit:</strong> Download RideKC app</li>
               <li>• <strong>Dining:</strong> Reserve BBQ spots early</li>
             </ul>
          </div>
          <div className="space-y-6">
            <h4 className="editorial-h4">Your Action Plan</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Register for FIFA tickets</strong> at fifa.com/tickets</li>
              <li><strong>Book accommodations early</strong> (6-12 months in advance recommended)</li>
              <li><strong>Research flights</strong> to Kansas City (MCI)</li>
              <li><strong>Download the RideKC Transit app</strong> for free airport bus service</li>
              <li><strong>Make BBQ reservations</strong> (Joe's Kansas City fills up fast)</li>
            </ol>
            <p className="font-bold text-xl text-emerald-800 dark:text-emerald-300 mt-4">
              See you in the City of Fountains!
            </p>
          </div>
        </article>

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
            {/* Recommendation 1: Dallas (Regional Partner) */}
            <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/dallas-world-cup-2026.webp" 
                alt="Dallas World Cup 2026"
                className="absolute inset-0 w-full h-full"
                imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                <span className="inline-block px-2 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded mb-2 w-fit">
                  Regional Partner
                </span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Dallas</h4>
                <p className="text-slate-300 text-sm line-clamp-2">
                  Texas-sized excitement awaits just a short flight or drive south.
                </p>
              </div>
            </Link>

            {/* Recommendation 2: Houston (Texas Connection) */}
            <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/houston-world-cup-2026.webp" 
                alt="Houston World Cup 2026"
                className="absolute inset-0 w-full h-full"
                imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                <span className="inline-block px-2 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider rounded mb-2 w-fit">
                  Southern Connection
                </span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Houston</h4>
                <p className="text-slate-300 text-sm line-clamp-2">
                  Explore America's energy capital and space city.
                </p>
              </div>
            </Link>
          </div>
        </div>

      </section>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by StadiumPort Team</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
