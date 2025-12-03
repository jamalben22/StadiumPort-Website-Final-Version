import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Info, 
  Ticket, 
  Check, 
  Star, 
  ArrowRight, 
  Share2, 
  Building, 
  Users, 
  Train, 
  Bus, 
  Car, 
  AlertTriangle, 
  Trophy, 
  ClipboardCheck, 
  Briefcase, 
  Plane, 
  Leaf, 
  Shield, 
  Sun, 
  Wallet,
  Bookmark,
  ChevronRight
} from 'lucide-react';



export default function MiamiCityGuide() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/miami-world-cup-2026-guide';

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
    const slug = (t: string) => t
      .toLowerCase()
      .replace(new RegExp('[^a-z0-9\\s-]', 'g'), '')
      .trim()
      .replace(new RegExp('\\s+', 'g'), '-')
      .slice(0, 60);
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
    link.href = '/images/cities/miami-world-cup-2026.webp'
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

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
  const pageUrl = '/world-cup-2026-host-cities/miami-world-cup-2026-guide';

  useEffect(() => {
    const entry = getEditorialEntry('city','miami')
    setPageMeta({
      title: 'Miami – World Cup 2026 Guide',
      description: 'The ultimate guide to World Cup 2026 in Miami. Hard Rock Stadium info, match schedule, hotels, transportation, and local tips for fans.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/miami-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : undefined,
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Miami', 'Hard Rock Stadium', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Miami – World Cup 2026 Guide',
            'The ultimate guide to World Cup 2026 in Miami. Hard Rock Stadium info, match schedule, hotels, transportation, and local tips for fans.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','miami')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Miami', 'Hard Rock Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Miami', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/miami-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Miami skyline – World Cup 2026' }
          )
        ]}
      />

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
                        ? 'bg-[#01b47d]/5 dark:bg-[#008f63]/20 text-[#008f63] dark:text-[#01b47d] border border-[#01b47d]/20 dark:border-[#008f63]/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                    } ${level === 3 ? 'pl-6' : ''}`}
                  >
                    <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-[#01b47d]' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#01b47d]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tl from-[#01b47d]/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </nav>
      </aside>

      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#01b47d] to-[#01b47d] text-white flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
            </div>
            <ChevronRight className={`w-5 h-5 transition-transform ${isMobileTocOpen ? 'rotate-90' : ''}`} />
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
                          ? 'bg-[#01b47d]/10 dark:bg-[#01b47d]/20 text-[#01b47d] dark:text-[#01b47d] border-l-4 border-[#01b47d]'
                          : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                      } ${level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-[#01b47d]' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
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
            src="/images/cities/miami-world-cup-2026.webp"
            alt="Miami skyline"
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
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-[#01b47d]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <Link to="/world-cup-2026-host-cities" className="hover:text-white transition-colors duration-300">Host Cities</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Miami</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Miami World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>USA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <Building className="w-5 h-5" />
                </div>
                <span>Hard Rock Stadium</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <span>65,326 Capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-[#01b47d]' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-[#01b47d]/20 ring-1 ring-[#01b47d]/50' : 'bg-white/5 group-hover/save:bg-[#01b47d]/20'}`}>
                  {isSaved ? <Bookmark className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
                </div>
                <span className="font-medium">{isSaved ? 'Saved' : 'Save Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Premium editorial presentation aligned with NYC/LA */}
      <section id="main-content" className="editorial-article-premium miami-page py-16">
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY: 7 matches, Bronze Final, Hard Rock Stadium] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Miami hosts <strong>7 matches</strong> including the <strong>Bronze Final</strong></li>
               <li>• Venue: <strong>Hard Rock Stadium</strong> (Miami Gardens)</li>
               <li>• Key Dates: June 15 – July 18, 2026</li>
               <li>• Hub for Americas: Gateway to Latin America & Caribbean</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-[#01b47d]" />Your Complete Travel Guide to South Florida's Soccer Spectacle
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            The Magic City is ready to shine. Sun, culture, and world-class football await in 2026.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <Clock className="w-4 h-4" /> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="leading-relaxed mb-6">
              When FIFA brings the beautiful game to Miami in summer 2026, nearly a million international fans will descend on South Florida for seven high-stakes matches—more than almost any other host city. Miami is one of the <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">16 host cities</Link> for the 2026 World Cup. This isn't just another tournament stop. 
            </p>
            
            <div className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
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
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-[#01b47d]/5 to-white dark:from-navy-900 dark:to-navy-800 border border-[#01b47d]/10 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-[#008f63] dark:text-[#01b47d] mb-4">
              <Bookmark className="w-5 h-5" /> Essential Resources
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">Hard Rock Stadium Guide</Link>
                  <span className="block text-sm text-slate-500 mt-1">Capacity: 65,326 • Surface: Natural Grass</span>
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
                   <strong>Nearby Connections:</strong><br/>
                   <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Atlanta</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Houston</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>
                </div>
              </div>
            </div>
          </div>

            {/* [SCROLL ANCHOR: The Stadium] */}
            <article id="stadium" className="editorial-body theme-emerald">
            {/* [SCROLL ANCHOR] */}
            <div id="stadium-anchor" className="scroll-mt-24"></div>

            <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBuildingMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradBuildingMIA)" />
                <rect x="7" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
                <rect x="12" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
                <rect x="9" y="6" width="6" height="2" rx="1" fill="#14b8a6" />
              </svg>
              The Stadium: <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Hard Rock Stadium</Link>
            </h2>
            
            {/* [STAT HIGHLIGHT SECTION] */}
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 my-8">
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-navy-600 pb-4">
                <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStarMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarMIA)" />
                </svg>
                The Numbers That Matter
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-[#01b47d] mt-1" />
                            <span><strong>65,326 Capacity</strong> <span className="block text-sm text-slate-500">(Expandable for major events)</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-[#01b47d] mt-1" />
                            <span><strong>Canopy Protection</strong> <span className="block text-sm text-slate-500">Roof covers 92% of fans from sun/rain</span></span>
                        </li>
                      </ul>
                  </div>
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <Leaf className="w-5 h-5 text-[#01b47d] mt-1" />
                            <span><strong>Natural Grass</strong> <span className="block text-sm text-slate-500">World-class surface for the tournament</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#01b47d] mt-1" />
                            <span><strong>15 Miles from Downtown</strong> <span className="block text-sm text-slate-500">Located in Miami Gardens</span></span>
                        </li>
                      </ul>
                  </div>
              </div>
            </div>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              <span className="font-semibold text-slate-900 dark:text-white">📍 347 Don Shula Drive, Miami Gardens, FL 33056</span>
              <br /><br />
              Miami's World Cup action unfolds at Hard Rock Stadium in Miami Gardens, temporarily rebranded as "Miami Stadium" for the tournament. Located at 347 Don Shula Drive, Miami Gardens, FL 33056, this isn't your typical American football venue awkwardly retrofitted for soccer. The stadium was originally built to FIFA specifications by Miami Dolphins founder Joe Robbie—himself a passionate soccer fan who once owned professional teams in the city.
            </p>

            <div className="my-8">
              <OptimizedImage
                src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp"
                alt="Wide angle interior shot of Hard Rock Stadium during a match"
                className="rounded-xl shadow-lg w-full"
                width={1600}
                height={900}
                placeholder="empty"
              />
              <p className="text-sm text-center text-slate-500 mt-2 italic">Hard Rock Stadium features a canopy roof that covers 92% of fans, protecting them from the Florida sun and rain.</p>
            </div>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              The numbers tell the story of Miami's commitment: 65,326 permanent seats configured for football/soccer, a partial canopy roof that shields fans from Florida's infamous summer rain and blazing sun, and a world-class natural grass playing surface that's hosted El Clásico between Real Madrid and Barcelona (which set North American soccer attendance records). Recent renovations transformed it into a European-style venue with improved sightlines, premium amenities, and technology upgrades.
            </p>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Here's what matters for World Cup visitors: the stadium sits in a suburban setting about 15 miles north of downtown Miami and roughly 20 miles from Miami Beach. There's limited accommodation within walking distance, so you'll need a transportation plan. But the stadium itself? It's proven it can handle the biggest stages—six Super Bowls, the Copa América 2024 Final, and Formula One's Miami Grand Prix. FIFA didn't choose Miami Gardens by accident.
            </p>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>


          {/* [SCROLL ANCHOR: Match Schedule] */}
            <article id="schedule" className="editorial-body theme-amber">
            <div id="schedule-anchor" className="scroll-mt-24"></div>

            {/* [QUICK SUMMARY] */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
               <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Schedule at a Glance</h4>
               <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                 <li>• <strong>4 Group Stage Matches</strong> (June 15–27)</li>
                 <li>• <strong>3 Knockout Matches</strong> (Round of 32 to Bronze Final)</li>
                 <li>• <strong>Bronze Final:</strong> Saturday, July 18, 2026</li>
                 <li>• <strong>Total:</strong> 7 matches (Major allocation)</li>
               </ul>
            </div>

            <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradCalendarMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradCalendarMIA)" />
                <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
                <circle cx="8" cy="3.5" r="1" fill="#ffffff" />
                <circle cx="16" cy="3.5" r="1" fill="#ffffff" />
                <rect x="7" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
                <rect x="12" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
                <rect x="17" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
              </svg>
              The Match Schedule: Seven Games You Don't Want to Miss
            </h2>

            {/* [SUBTITLE/DECK] */}
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
              From the group stage opener to the prestigious Bronze Final: Your chronological guide to South Florida's summer of football.
            </p>

            <p className="leading-relaxed mb-8">
              Miami's seven-match allocation is a testament to Hard Rock Stadium's global status. Here's what's coming:
            </p>

            <div className="space-y-8">
              <div className="bg-white dark:bg-navy-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-navy-700">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  <svg className="h4-icon-svg" role="img" aria-label="Group stage" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradGroupMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#gradGroupMIA)" />
                    <rect x="6" y="8" width="12" height="2" rx="1" fill="#ffffff" />
                    <rect x="6" y="11" width="8" height="2" rx="1" fill="#ffffff" />
                  </svg>
                  Group Stage (Four Matches)
                </h4>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                      <span className="font-mono text-[#01b47d] font-bold">01</span>
                      <span><strong>Monday, June 15, 2026</strong> – Group H Match (Opener)</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                      <span className="font-mono text-[#01b47d] font-bold">02</span>
                      <span><strong>Sunday, June 21, 2026</strong> – Group H Match</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                      <span className="font-mono text-[#01b47d] font-bold">03</span>
                      <span><strong>Wednesday, June 24, 2026</strong> – Group C Match</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                      <span className="font-mono text-[#01b47d] font-bold">04</span>
                      <span><strong>Saturday, June 27, 2026</strong> – Group K Match</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-800/30">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTrophyMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradTrophyMIA)" />
                    <circle cx="12" cy="9" r="1.5" fill="#ffffff" />
                  </svg>
                  Knockout Stage (Three Matches)
                </h4>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                      <span className="font-mono text-amber-500 font-bold">R32</span>
                      <span><strong>Friday, July 3, 2026</strong> – Round of 32</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white dark:bg-navy-900 rounded-lg border border-amber-100 dark:border-amber-800/30">
                      <span className="font-mono text-amber-500 font-bold">QF</span>
                      <span><strong>Saturday, July 11, 2026</strong> – Quarter-Final</span>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-100 to-white dark:from-amber-900/40 dark:to-navy-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
                      <span className="font-mono text-amber-600 dark:text-amber-400 font-bold text-lg">3rd</span>
                      <span className="text-lg"><strong>Saturday, July 18, 2026</strong> – <span className="uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">BRONZE FINAL</span></span>
                  </li>
                </ul>

                <div className="mt-6 pl-4 border-l-2 border-amber-200 dark:border-amber-800">
                  <p className="leading-relaxed italic text-slate-700 dark:text-slate-300">
                    That Bronze Final on July 18 is particularly special. Only a handful of cities worldwide earn the privilege of hosting this prestigious match where two fallen semi-finalists battle for the podium. If you can only attend one match, the knockout rounds offer guaranteed intensity and world-class talent.
                  </p>
                </div>
              </div>
              
              {/* [PULL QUOTE] */}
              <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                 "If you can only attend one match, make it this one."
              </blockquote>
            </div>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Transportation] */}
          <article id="transport" className="editorial-body theme-indigo">
            <div id="transport-anchor" className="scroll-mt-24"></div>

            {/* [QUICK SUMMARY] */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
               <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Transport Reality Check</h4>
               <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                 <li>• <strong>Brightline + Shuttle:</strong> Best overall experience</li>
                 <li>• <strong>Metrobus:</strong> $2.25 budget option (Route 297)</li>
                 <li>• <strong>Rideshare:</strong> Convenient but expect surges</li>
                 <li>• <strong>Driving:</strong> Requires pre-booked parking</li>
               </ul>
            </div>

            <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Train" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradTrainMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <rect x="4" y="5" width="16" height="14" rx="2" fill="url(#gradTrainMIA)" />
                <path d="M8 19l-2 3h12l-2-3" fill="#818cf8" />
                <circle cx="8" cy="15" r="1.5" fill="#ffffff" />
                <circle cx="16" cy="15" r="1.5" fill="#ffffff" />
                <rect x="7" y="8" width="10" height="4" rx="1" fill="#ffffff" />
              </svg>
              Getting There: The Transportation Equation
            </h2>

            <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
              Hard Rock Stadium sits in Miami Gardens, about 15 miles north of downtown. Here is your realistic guide to bridging the gap.
            </p>

            <div className="my-8">
              <OptimizedImage
                src="/images/safety-guide/article mode/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp"
                alt="Public transportation options for World Cup 2026 fans in Miami"
                className="rounded-xl shadow-lg w-full"
                width={1600}
                height={900}
                placeholder="empty"
              />
            </div>

            <div className="space-y-12">
              {/* Brightline + Shuttle */}
              <section className="relative">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
                <div className="pl-0 md:pl-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                    <Train className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
                    1. Brightline + Stadium Shuttle (Recommended)
                  </h4>
                  <p className="leading-relaxed mb-4">
                    The smoothest move for match day is taking Brightline—South Florida's sleek intercity rail—to <strong>Aventura Station</strong>, then hopping the free Hard Rock Stadium Connect shuttle. Shuttles depart 10 minutes after each train arrival and deliver you directly to the stadium gates.
                  </p>
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                    <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                      <li><strong>Cost:</strong> $15-25 (Train) + Free Shuttle</li>
                      <li><strong>Time:</strong> Reliable; avoids highway traffic</li>
                      <li><strong>Pros:</strong> Premium comfort, WiFi, direct shuttle connection</li>
                      <li><strong>Cons:</strong> Trains sell out fast; requires advance booking</li>
                    </ul>
                  </div>
                  <div className="callout-pro-tip bg-[#01b47d]/5 dark:bg-[#008f63]/20 border border-[#01b47d]/10 dark:border-[#008f63] p-5 rounded-lg">
                    <h5 className="font-bold text-[#008f63] dark:text-[#01b47d]/10 mb-2 flex items-center gap-2">
                      <Info className="w-5 h-5" /> Insider Tip
                    </h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Brightline connects Fort Lauderdale, Aventura, and Miami's central districts. If you're staying in Brickell, Downtown, or Wynwood, get to a Brightline station early.
                    </p>
                  </div>
                </div>
              </section>

              {/* Metrobus */}
              <section className="relative">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
                <div className="pl-0 md:pl-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                    <Bus className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
                    2. Metrobus Route 297 (Budget Choice)
                  </h4>
                  <p className="leading-relaxed mb-4">
                    On event days, Miami-Dade Transit operates <strong>Metrobus Route 297</strong> from Earlington Heights Metrorail Station directly to the stadium. It's the most affordable way to reach the venue.
                  </p>
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                     <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                      <li><strong>Cost:</strong> $2.25 each way (Integrates with Metrorail)</li>
                      <li><strong>Time:</strong> 90+ minutes from Downtown (Rail + Bus)</li>
                      <li><strong>Pros:</strong> Unbeatable value</li>
                      <li><strong>Cons:</strong> Buses fill quickly; standing room only likely</li>
                    </ul>
                  </div>
                   <div className="callout-warning">
                    <div className="callout-icon flex items-center gap-2 font-medium">
                      <AlertTriangle className="w-4 h-4" /> <span>Important</span>
                    </div>
                    <p className="leading-relaxed mt-2 text-sm">
                      Arrive at Earlington Heights at least 90 minutes before kickoff. If you cut it close, you risk watching full buses pass you by.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rideshare/Taxi */}
              <section className="relative">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900 rounded-full"></div>
                <div className="pl-0 md:pl-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                    <Car className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    3. Rideshare/Taxi (Convenient)
                  </h4>
                  <p className="leading-relaxed mb-4">
                    Uber and Lyft work, but expect <strong>surge pricing</strong>. A typical ride from downtown Miami runs $35-50+, but can double post-match.
                  </p>
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                    <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                      <li><strong>Cost:</strong> $35-100+ (High variance)</li>
                      <li><strong>Time:</strong> 45-60 mins (traffic dependent)</li>
                      <li><strong>Pros:</strong> Door-to-door service</li>
                      <li><strong>Cons:</strong> Expensive surges; long wait times for pickup</li>
                    </ul>
                  </div>
                  <div className="callout-warning">
                     <div className="callout-icon flex items-center gap-2 font-medium">
                        <AlertTriangle className="w-4 h-4" /> <span>Surge Warning</span>
                     </div>
                     <p className="leading-relaxed mt-2 text-sm">
                        Designated rideshare pickup is at <strong>Lot 42</strong>—a 25-45 minute walk from stadium exits.
                     </p>
                  </div>
                </div>
              </section>

              {/* Driving */}
              <section className="relative">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
                <div className="pl-0 md:pl-6">
                  <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                    <Car className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
                    4. Driving + Parking (Flexible)
                  </h4>
                  <p className="leading-relaxed mb-4">
                    Stadium parking exists but sells out quickly. Pre-purchase passes online weeks before your match.
                  </p>
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                    <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                      <li><strong>Cost:</strong> $40-60 (Standard) to $100+ (VIP)</li>
                      <li><strong>Time:</strong> Flexible arrival; slow exit</li>
                      <li><strong>Pros:</strong> Comfort of own vehicle</li>
                      <li><strong>Cons:</strong> Brutal exit traffic (2+ hours)</li>
                    </ul>
                  </div>
                  <div className="callout-pro-tip bg-[#01b47d]/5 dark:bg-[#008f63]/20 border border-[#01b47d]/10 dark:border-[#008f63] p-5 rounded-lg">
                    <h5 className="font-bold text-[#008f63] dark:text-[#01b47d]/10 mb-2 flex items-center gap-2">
                      <Info className="w-5 h-5" /> Money Saver
                    </h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Some fans park at <strong>Aventura Mall</strong> (free) and Brightline to the stadium, or park at Metrorail stations with garages ($4.50/day) and take the Route 297 bus.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Transport options summary table */}
            <div className="comparison-table overflow-x-auto -mx-4 md:mx-0 mt-8">
              <table aria-label="Transport options comparison — Miami" className="min-w-[720px] w-full text-sm">
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
                    <td className="p-3">Brightline + Shuttle</td>
                    <td className="p-3">$15-25 + Free</td>
                    <td className="p-3">45–60 minutes</td>
                    <td className="p-3">Premium comfort; direct shuttle</td>
                    <td className="p-3">Requires booking; strict schedule</td>
                  </tr>
                  <tr>
                    <td className="p-3">Rideshare/Taxi</td>
                    <td className="p-3">$35–50+ (surge higher)</td>
                    <td className="p-3">45–60 minutes</td>
                    <td className="p-3">Door-to-door convenience</td>
                    <td className="p-3">Surge pricing; long waits</td>
                  </tr>
                  <tr>
                    <td className="p-3">Driving + Parking</td>
                    <td className="p-3">$40–60 (VIP $100+)</td>
                    <td className="p-3">Variable</td>
                    <td className="p-3">Flexible; tailgate option</td>
                    <td className="p-3">Traffic; 2+ hour exit</td>
                  </tr>
                  <tr>
                    <td className="p-3">Metrobus (Rt 297)</td>
                    <td className="p-3">$2.25</td>
                    <td className="p-3">90+ minutes</td>
                    <td className="p-3">Unbeatable value</td>
                    <td className="p-3">Standing room; longer travel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="editorial-divider my-12 border-slate-200 dark:border-navy-700" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Neighborhoods] */}
            {/* [25% MILESTONE] */}
        {/* Where to Stay: Neighborhood Playbook for World Cup Visitors */}
        <article id="stay" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Downtown/Brickell:</strong> Best for transit & atmosphere</li>
               <li>• <strong>South Beach:</strong> Best for beach & nightlife</li>
               <li>• <strong>Miami Gardens:</strong> Best for stadium proximity</li>
               <li>• <strong>Coral Gables:</strong> Best for upscale & cultural</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradHotelMIA" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradHotelMIA)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhood Playbook for World Cup Visitors
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Your accommodation choice determines whether you experience urban Miami culture, beach vibes, or prioritize stadium convenience. Here’s the strategic breakdown:
          </p>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/cities/miami-world-cup-2026.webp"
              alt="Miami skyline at sunset"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>

          <p className="leading-relaxed mb-6">
            Miami's geography is spread out. The stadium is inland, the beaches are on barrier islands, and the cultural center is downtown.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "If you secure match tickets, reserve accommodation immediately. Downtown sells out fast."
          </blockquote>

          {/* Downtown Miami/Brickell */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBuildingMIA2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                 <path d="M4 21V7h16v14" fill="url(#gradBuildingMIA2)" />
                 <rect x="8" y="10" width="2" height="2" fill="#ffffff" />
                 <rect x="14" y="10" width="2" height="2" fill="#ffffff" />
                 <rect x="8" y="14" width="2" height="2" fill="#ffffff" />
                 <rect x="14" y="14" width="2" height="2" fill="#ffffff" />
              </svg>
              Downtown Miami/Brickell (Best for Transit + Atmosphere)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> You're at the hub of Miami's public transit network (Metrorail, Metromover, buses), walking distance to <strong>Bayfront Park</strong> (expected FIFA Fan Festival location), and surrounded by restaurants, rooftop bars, and nightlife. The energy here during the World Cup will be electric—international flags, outdoor viewing parties, fans from 50 nations mingling in the streets.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Metrorail to Earlington Heights → Route 297 bus (75-90 minutes total). Or Brightline from nearby stations if your hotel is within walking distance.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Mix of business hotels, modern high-rises, and boutique properties. Expect <strong>$275-400/night</strong> for mid-range options during the tournament. Luxury properties like <strong>Hotel AKA Miami Brickell</strong> offer sophistication and bay views; budget travelers should book early or consider hostels like <strong>Miami River Inn</strong> (between Downtown and Little Havana).
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
              <p className="leading-relaxed">
                <strong>Book Early:</strong> Downtown sells out fast. If you secure match tickets in late 2025, reserve accommodation immediately. Consider booking refundable rates given ticket lottery uncertainty.
              </p>
            </div>
          </div>

          <hr className="editorial-divider" />
        </article>

        {/* South Beach */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
             <svg className="heading-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradSunMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="5" fill="url(#gradSunMIA)" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            South Beach/Miami Beach (Best for Beach + Nightlife)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> This is peak Miami—Art Deco architecture, sugar-sand beaches, poolside parties, and Ocean Drive's legendary people-watching. If you're turning the World Cup into a full Florida vacation, South Beach delivers the postcard experience. Just accept you'll commute to matches.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Getting to stadium:</strong> Most complex option. Take <strong>Metrobus 150 Express</strong> or <strong>Beach Trolley</strong> to mainland transit, then connect to Metrorail/Brightline. Budget <strong>2+ hours each way</strong>. Many fans bite the bullet on rideshare for match days ($60-80 each way with surge pricing).
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Accommodation vibe:</strong> Everything from budget motels to five-star oceanfront resorts. <strong>Hotel Continental Miami Beach</strong> offers retro-chic rooms one block from the beach; <strong>Kimpton Angler's Hotel</strong> provides boutique luxury with rooftop pools. Expect <strong>$350-600/night</strong> for oceanfront mid-range during World Cup. Hostels like <strong>Freehand Miami</strong> in Mid-Beach offer dorm beds under $100.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
             <p className="leading-relaxed">
               <strong>Reality check:</strong> South Beach is gorgeous but geographically inconvenient for stadium access. Best suited for fans attending 1-2 matches who prioritize beach time over logistics.
             </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Miami Gardens */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Map Pin" viewBox="0 0 24 24">
               <defs>
                 <linearGradient id="gradPinMIA" x1="0" x2="1" y1="0" y2="1">
                   <stop offset="0" stopColor="#10b981" />
                   <stop offset="1" stopColor="#14b8a6" />
                 </linearGradient>
               </defs>
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="url(#gradPinMIA)" />
               <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
            </svg>
            Miami Gardens/Aventura (Best for Stadium Proximity)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> Minimize commute stress. You're <strong>10-20 minutes from Hard Rock Stadium</strong> by car, or a short bus ride on non-game days. Aventura offers massive shopping (Aventura Mall) and easy Brightline access.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Getting to stadium:</strong> Drive (15 minutes, pre-book parking), rideshare ($20-30), or local buses. This area is designed for cars, so public transit options thin out.
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Accommodation vibe:</strong> Practical, not glamorous. <strong>Stadium Hotel</strong> sits closest to the venue (literally visible from some rooms) with budget-friendly rates and sports bar. <strong>Aloft Miami Aventura</strong> delivers modern design near Aventura Mall. <strong>Miami Lakes Hotel</strong> offers full resort amenities including golf. Expect <strong>$180-320/night</strong> range.
          </p>
          <p className="leading-relaxed mb-3">
             <strong>Best for:</strong> Hardcore fans attending multiple matches who prioritize stadium convenience over Miami's cultural scene. Also families, since accommodation tends to be more spacious and affordable than downtown.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Coral Gables */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
             <svg className="heading-icon-svg" role="img" aria-label="Leaf" viewBox="0 0 24 24">
               <defs>
                 <linearGradient id="gradLeafMIA" x1="0" x2="1" y1="0" y2="1">
                   <stop offset="0" stopColor="#ec4899" />
                   <stop offset="1" stopColor="#db2777" />
                 </linearGradient>
               </defs>
               <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-15 4.25" fill="url(#gradLeafMIA)" />
             </svg>
            Coral Gables/Coconut Grove (Best for Upscale + Cultural)
          </h3>
          <p className="leading-relaxed mb-3">
            <strong>Why stay here:</strong> Escape the chaos. These elegant neighborhoods south of downtown offer tree-lined streets, boutique hotels, Mediterranean architecture, and attractions like <strong>Vizcaya Museum</strong>. More "refined vacation" than "spring break."
          </p>
          <p className="leading-relaxed mb-3">
             <strong>Getting to stadium:</strong> Metrorail connects Coconut Grove to downtown (transfer to Route 297 bus). From Coral Gables, budget 60-90 minutes. Driving on match days: 30-45 minutes depending on traffic.
          </p>
          <p className="leading-relaxed mb-3">
             <strong>Accommodation vibe:</strong> Historic inns, upscale hotels, fewer budget options. Expect <strong>$280-450/night</strong> during World Cup. Attracts couples and travelers who want sophistication between matches.
          </p>
          <hr className="editorial-divider" />
        </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Attractions] */}
            {/* [50% MILESTONE] */}

          {/* Beyond the Matches: What to Do in Miami */}
          <article id="culture" className="editorial-body theme-emerald">
            {/* [QUICK SUMMARY] */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Culture & Leisure</h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• <strong>Arts:</strong> Wynwood Walls (Street Art)</li>
                <li>• <strong>History:</strong> Art Deco District & Vizcaya</li>
                <li>• <strong>Culture:</strong> Little Havana (Calle Ocho)</li>
                <li>• <strong>Nature:</strong> Everglades National Park</li>
              </ul>
            </div>

            <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Sparkles" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradSparkMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M6 12 l2 -4 l2 4 l-2 4z" fill="url(#gradSparkMIA)" />
                <path d="M14 8 l2 -3 l2 3 l-2 3z" fill="#0ea5e9" />
                <path d="M14 16 l2 -3 l2 3 l-2 3z" fill="#38bdf8" />
              </svg>
              Beyond the Matches: What to Do in Miami
            </h3>
            
            {/* [SUBTITLE/DECK] */}
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
              You didn't fly thousands of miles to only see 90 minutes of football. Miami delivers world-class experiences when you're not at the stadium.
            </p>

            <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
              <OptimizedImage
                src="/images/safety-guide/A_realistic_high-detail_photo_of_a_solo_traveler_at_a_World_Cup_2026_host_city.webp"
                alt="Exploring Miami's diverse neighborhoods"
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover"
                width={1600}
                height={900}
                placeholder="empty"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                 <p className="text-white text-sm italic">From street art in Wynwood to historic Vizcaya, Miami offers endless exploration.</p>
              </div>
            </div>

            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Compass" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradCompassMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="url(#gradCompassMIA)" />
                <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
              </svg>
              Must-See Attractions
            </h4>

            <div className="space-y-6">
              {/* Wynwood Walls */}
              <div>
                <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                  <svg className="heading-icon-svg" role="img" aria-label="Palette" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradPaletteMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#fb7185" />
                        <stop offset="1" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <path d="M12 4 a8 8 0 1 0 0 16 h1 a2.5 2.5 0 0 0 0 -5 h-1 a1.5 1.5 0 0 1 -1.5 -1.5 v-1 a1.5 1.5 0 0 1 1.5 -1.5 h1 a2.5 2.5 0 0 0 0 -5 z" fill="url(#gradPaletteMIA)" />
                  </svg>
                  Wynwood Walls
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The world's coolest outdoor street art museum—free, always open, constantly evolving. Over 35 large-scale murals by internationally renowned artists transform warehouse walls into living canvases. Surrounding Wynwood neighborhood pulses with galleries, craft breweries (Cervecería La Tropical), and coffee shops (Panther Coffee).
                </p>
              </div>

              {/* Vizcaya */}
              <div>
                <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                  <svg className="heading-icon-svg" role="img" aria-label="Museum" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradMuseumMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#0ea5e9" />
                        <stop offset="1" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="8" width="18" height="10" rx="2" fill="url(#gradMuseumMIA)" />
                    <rect x="6" y="5" width="12" height="4" rx="1.5" fill="#0ea5e9" />
                  </svg>
                  Vizcaya Museum and Gardens
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  This jaw-dropping Italian Renaissance-style villa (built 1916) sits on Biscayne Bay with 10 acres of formal gardens that rival European estates. The museum houses original furnishings and art collections. <strong>Admission: $25</strong>. Perfect for a relaxed morning before evening matches.
                </p>
              </div>

              {/* Little Havana */}
              <div>
                <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                  <svg className="heading-icon-svg" role="img" aria-label="Music" viewBox="0 0 24 24">
                     <defs>
                      <linearGradient id="gradMusicMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#e11d48" />
                        <stop offset="1" stopColor="#fb7185" />
                      </linearGradient>
                    </defs>
                    <path d="M9 5 v10 a3 3 0 1 1 -2 2.8 V7 h8 v6 a3 3 0 1 1 -2 2.8 V5z" fill="url(#gradMusicMIA)" />
                  </svg>
                  Little Havana
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Miami's Cuban heart beats along <strong>Calle Ocho (SW 8th Street)</strong>. Watch master cigar rollers at work, sip authentic café cubano, catch live salsa music at <strong>Ball & Chain</strong>, and play dominoes at <strong>Máximo Gómez Park</strong>. The neighborhood explodes with energy on <strong>Viernes Culturales</strong> (last Friday of each month).
                </p>
              </div>

              {/* Miami Beach */}
              <div>
                <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                  <svg className="heading-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradSunMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="4" fill="url(#gradSunMIA)" />
                    <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Miami Beach & Art Deco District
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Beyond tanning, the <strong>Art Deco Historic District</strong> in South Beach contains over 800 preserved buildings from the 1920s-30s in pastel colors and geometric designs. Free self-guided walking tours via app. After your architecture fix, hit the sand: <strong>South Beach</strong> is iconic; <strong>North Beach</strong> offers calmer vibes.
                </p>
              </div>

              {/* Everglades */}
              <div>
                <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                  <svg className="heading-icon-svg" role="img" aria-label="Leaf" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLeafMIA" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path d="M12 21 c-5 -5 -7 -10 -2 -15 c3 0 6 3 9 9 c-5 3 -10 4 -15 2" fill="url(#gradLeafMIA)" />
                  </svg>
                  Everglades National Park
                </h5>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  If you have a free day, explore this UNESCO World Heritage Site 45 minutes southwest. Airboat tours ($30-60) deliver close encounters with alligators, while hiking trails and kayaking routes reveal one of Earth's most unique ecosystems.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Food Scene] */}
          <article id="food" className="editorial-body theme-emerald">
            {/* [QUICK SUMMARY] */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Culinary Highlights</h4>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• <strong>Cuban:</strong> Versailles & El Rey de las Fritas</li>
                <li>• <strong>Seafood:</strong> Joe's Stone Crab & Garcia's</li>
                <li>• <strong>Late Night:</strong> La Sandwicherie (5 AM)</li>
                <li>• <strong>Vibe:</strong> Coyo Taco & 1-800-Lucky</li>
              </ul>
            </div>

            <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Food" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradFoodMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="5" y="7" width="4" height="10" rx="1" fill="#f59e0b" />
                <rect x="11" y="7" width="8" height="10" rx="2" fill="url(#gradFoodMIA)" />
              </svg>
              Food Scene: Taste the Culture
            </h3>
            
            {/* [SUBTITLE/DECK] */}
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
              Miami's culinary landscape mirrors its demographics—Cuban, Haitian, Colombian, Argentine, and Peruvian influences collide with American and contemporary fusion.
            </p>

            <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
              <OptimizedImage
                src="/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp"
                alt="Miami Dining Guide"
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover"
                width={1600}
                height={900}
                placeholder="empty"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>

            <p className="leading-relaxed mb-6">
              Explore the flavors:
            </p>

            {/* Pre-Match Fueling */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Fuel" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradFuelMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M12 5 c2 2 2 4 0 6 c-2 2 -2 4 0 6" fill="url(#gradFuelMIA)" />
                </svg>
                Pre-Match Fueling
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>Versailles Restaurant</strong> (Little Havana): Iconic Cuban institution. Order the Cubano sandwich, ropa vieja, or pastelitos. Always busy; arrive off-peak.</li>
                <li><strong>Zak the Baker</strong> (Wynwood): Artisan bakery with outstanding pastries, sandwiches, coffee. Grab breakfast before stadium-bound transit.</li>
                <li><strong>La Sandwicherie</strong> (South Beach): Late-night legend serving fresh French sandwiches until 5 AM. Perfect post-nightlife fuel.</li>
              </ul>
            </div>

            {/* Post-Match Celebrating */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Celebration" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradCelebMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="6" y="7" width="3" height="10" rx="1" fill="#f59e0b" />
                  <rect x="11" y="7" width="7" height="10" rx="2" fill="url(#gradCelebMIA)" />
                </svg>
                Post-Match Celebrating
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>Joe's Stone Crab</strong> (South Beach): Miami Beach institution (seasonal, but World Cup timing works). Reserve days ahead.</li>
                <li><strong>Coyo Taco</strong> (Wynwood): Elevated street tacos in lively atmosphere. Great for group celebrations.</li>
                <li><strong>Garcia's Seafood Grille & Fish Market</strong> (Miami River): Waterfront seafood with local vibe, away from tourist traps.</li>
              </ul>
            </div>

            {/* Budget-Friendly */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Budget" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradBudgetMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradBudgetMIA)" />
                  <circle cx="16" cy="12" r="1.5" fill="#ffffff" />
                </svg>
                Budget-Friendly
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside">
                <li><strong>1-800-Lucky</strong> (Wynwood): Asian-inspired food hall with multiple vendors, outdoor seating, reasonable prices.</li>
                <li><strong>Fritanga Monimbo</strong> (Little Havana): Authentic Nicaraguan cuisine, massive portions, under $15/person.</li>
                <li><strong>El Rey de las Fritas</strong> (Little Havana): Cuban fritas (burgers) and batidos (shakes). Total meal under $10.</li>
              </ul>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Practical Info] */}
          {/* [75% MILESTONE] */}
        {/* Practical Information: What You Need to Know */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Essential Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Airport:</strong> MIA (8 mi) or FLL (30 mi)</li>
               <li>• <strong>Weather:</strong> Hot & humid (88-92°F); rain likely</li>
               <li>• <strong>Transit:</strong> Metromover is free in Downtown</li>
               <li>• <strong>Language:</strong> English & Spanish widely spoken</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradInfoMIA" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradInfoMIA)" />
              <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
              <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Information: What You Need to Know
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating a new city requires insider knowledge. From airports to tipping culture, here is your survival guide.
          </p>

          {/* Getting to Miami */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPlaneMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M3 12 l8 -2 l0 -5 l2 5 l8 2 l-8 2 l-2 5 l0 -5z" fill="url(#gradPlaneMIA)" />
              </svg>
              Getting to Miami
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Miami International Airport (MIA)</strong> sits 8 miles northwest of downtown—about <strong>15-20 minutes by car</strong>, <strong>15 minutes via Metrorail Orange Line</strong> ($2.25), or <strong>$25-30 taxi/rideshare</strong>. Book flights early; prices spike as matches approach.
            </p>
            <p className="leading-relaxed">
              <strong>Fort Lauderdale-Hollywood International Airport (FLL)</strong>, 30 miles north, sometimes offers cheaper flights. Take <strong>Brightline train</strong> to Miami (30 minutes) or drive/rideshare (45-60 minutes).
            </p>
          </div>

          {/* Weather & What to Pack */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                 <defs>
                  <linearGradient id="gradSunMIA2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="4" fill="url(#gradSunMIA2)" />
                <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3 M5 5 l2 2 M17 17 l2 2 M19 5 l-2 2 M7 17 l-2 2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Weather & What to Pack
            </h4>
            <p className="leading-relaxed mb-3">
              Expect <strong>hot, humid, with afternoon thunderstorms</strong>. Daily highs 88-92°F (31-33°C), humidity 70-80%.
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Lightweight, breathable clothing (linen/cotton)</li>
              <li>Sunscreen (SPF 50+), sunglasses, hat</li>
              <li>Reusable water bottle (stay hydrated)</li>
              <li>Light rain jacket or poncho</li>
            </ul>
          </div>

          {/* Money & Costs */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Wallet" viewBox="0 0 24 24">
                 <defs>
                  <linearGradient id="gradWalletMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradWalletMIA)" />
                <circle cx="16" cy="12" r="1.5" fill="#ffffff" />
              </svg>
              Money & Costs
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Stadium parking:</strong> $40-60 pre-purchased</li>
              <li><strong>Mid-range hotel:</strong> $275-400/night</li>
              <li><strong>Meals:</strong> $15-25 (casual), $40-70 (mid-range)</li>
              <li><strong>Public transit:</strong> $2.25/trip, $5.65 daily cap</li>
            </ul>
          </div>

          {/* Safety & Connectivity */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradShieldMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M12 3 c0 0 -8 4 -8 12 c0 4 8 6 8 6 s8 -2 8 -6 c0 -8 -8 -12 -8 -12z" fill="url(#gradShieldMIA)" />
              </svg>
              Safety & Connectivity
            </h4>
            <p className="leading-relaxed mb-3">
              Miami is generally safe for tourists in popular areas. <strong>Standard urban precautions</strong> apply. The World Cup brings heightened security.
            </p>
            <p className="leading-relaxed">
              <strong>Free WiFi</strong> is available at the airport and most hotels. <strong>5G coverage</strong> is excellent. English is official, but <strong>Spanish dominates</strong> in many neighborhoods.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

          {/* FIFA Fan Festival & Match Day Atmosphere Section */}
          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Fan Festival] */}
          <article id="fan-festival" className="editorial-body theme-amber">
            <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
              <svg className="heading-icon-svg" role="img" aria-label="Fan Festival" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradFanMIA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <rect x="2" y="7" width="20" height="10" rx="2" fill="url(#gradFanMIA)" />
                <path d="M12 17v4M8 21h8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              </svg>
              FIFA Fan Festival & Match Day Atmosphere
            </h3>

            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              While official details are still being finalized, FIFA typically establishes a massive <strong>Fan Festival</strong> in each host city—a free, family-friendly zone with giant screens, live music, food vendors, and sponsor activations. Miami's is expected at <strong>Bayfront Park</strong> in Downtown Miami, offering stunning Biscayne Bay views and central location.
            </p>

            <div className="my-8">
              <OptimizedImage
                src="/images/safety-guide/A_realistic_high-detail_photo_of_a_family_with_children_entering_or_walking_near_stadium.webp"
                alt="Fans gathering for the FIFA Fan Festival in Miami"
                className="rounded-xl shadow-lg w-full"
                width={1600}
                height={900}
                placeholder="empty"
              />
              <p className="text-sm text-center text-slate-500 mt-2 italic">Join thousands of fans at Bayfront Park for the ultimate watch party experience.</p>
            </div>

            {/* Why Fan Festivals Matter */}
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Crowd" viewBox="0 0 24 24">
                   <defs>
                    <linearGradient id="gradCrowdMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <circle cx="9" cy="7" r="4" fill="url(#gradCrowdMIA)" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" fill="url(#gradCrowdMIA)" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#gradCrowdMIA)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" stroke="url(#gradCrowdMIA)" strokeWidth="2" strokeLinecap="round" />
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
                <svg className="h4-icon-svg" role="img" aria-label="Party" viewBox="0 0 24 24">
                   <defs>
                    <linearGradient id="gradPartyMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M3 21l18 -18" stroke="url(#gradPartyMIA)" strokeWidth="2" />
                  <path d="M3 10l7 7" stroke="url(#gradPartyMIA)" strokeWidth="2" />
                  <path d="M10 3l7 7" stroke="url(#gradPartyMIA)" strokeWidth="2" />
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
                <svg className="h4-icon-svg" role="img" aria-label="Culture" viewBox="0 0 24 24">
                   <defs>
                    <linearGradient id="gradCultureMIA" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f43f5e" />
                      <stop offset="1" stopColor="#e11d48" />
                    </linearGradient>
                  </defs>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#gradCultureMIA)" />
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-lg">
                <ClipboardCheck className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Booking Strategy: How to Plan Your World Cup Trip
              </h2>
            </div>

            {/* Timeline for Success */}

            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#01b47d] dark:text-[#01b47d]" />
                Timeline for Success
              </h4>

              {/* Now (Late 2025) */}
              <div className="mb-6">
                <h5 className="editorial-h4 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#01b47d] dark:text-[#01b47d]" />
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
                  <Ticket className="w-5 h-5 text-[#01b47d] dark:text-[#01b47d]" />
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
                  <Briefcase className="w-5 h-5 text-[#01b47d] dark:text-[#01b47d]" />
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
              Travel planning tip: Combine Miami with <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link> or <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link> for a Southern Gulf experience with distinct regional flavors and matchday atmospheres.
            </p>

            {/* Affiliate Opportunity Moment */}
          <div className="callout-pro-tip">
            <h4 className="editorial-h4 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#01b47d] dark:text-[#01b47d]" />
              Pro Booking Tip
            </h4>
            <p className="leading-relaxed">Once you know your travel dates, <strong>book hotels through trusted platforms</strong> offering World Cup packages or flexible cancellation policies. Properties near downtown Miami, Brightline stations, and Metrorail access book fastest. Comparison shopping across multiple booking engines often reveals 10-20% price differences for identical rooms—worth the 15 minutes research.</p>
          </div>
            <hr className="editorial-divider" />
          </article>

          {/* [BREATHING ROOM] */}
          {/* [SCROLL ANCHOR: Why Miami Wins] */}
          <article className="editorial-body">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Why Miami Wins the World Cup Host City Lottery
              </h2>
            </div>

            <p className="leading-relaxed mb-4">
              Let's be honest: some World Cup host cities are purely functional—you watch matches, maybe see a museum, then move on. Miami is different. This city was built for celebration. The nightlife doesn't quit. The beaches deliver postcard perfection. The food scene rivals any global capital. And unlike some North American hosts where soccer is niche, Miami <strong>breathes</strong> football.
            </p>

            <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              &ldquo;Unlike some North American hosts where soccer is niche, Miami <span className="text-[#01b47d] dark:text-[#01b47d]">breathes</span> football.&rdquo;
            </blockquote>

            <p className="leading-relaxed mb-4">
              The stadium itself reflects this DNA—<strong>purpose-built for the sport</strong>, repeatedly hosting international matches that prove South Florida understands the beautiful game. When 65,000 fans pack Hard Rock Stadium for a World Cup knockout match in July 2026, with <strong>South Florida's energy</strong> spilling into every neighborhood, you'll understand why FIFA chose this city.
            </p>

            <p className="leading-relaxed mb-4">
              <strong>Seven matches spanning four weeks</strong> means you can build an entire vacation around the tournament. Attend an early group stage fixture, explore the Keys, return for a quarterfinal. Or plant yourself downtown for the full month, sampling different neighborhoods daily, catching matches at the Fan Festival, and experiencing Miami at peak global attention.
            </p>

            <p className="leading-relaxed mb-4">
              The <strong>logistics require planning</strong>—this isn't a compact European city where you walk everywhere—but the payoff is enormous. Where else can you watch world-class football in the morning, snorkel the reef by afternoon, dance salsa in Little Havana at sunset, then watch another match under the lights?
            </p>

            <div className="bg-gradient-to-r from-[#01b47d] to-[#01b47d] text-white rounded-xl p-6 text-center">
              <p className="text-lg font-semibold leading-relaxed">
                <strong>Book early, plan transit thoughtfully, embrace the heat, and prepare for one of the most memorable World Cup experiences any host city can offer.</strong>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Related Destinations */}
          <article className="editorial-body">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-lg">
                <Plane className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Plan Your Tropical World Cup Adventure
              </h2>
            </div>
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
                    <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Atlanta</Link>
                    {' '}for Southern charm, then continue to{' '}
                    <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Houston</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Dallas</Link>
                    {' '}for a taste of Texas.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Latin American Gateway</h4>
                  <p>
                    Miami's strong cultural ties to Latin America make it perfect for combining with Mexican host cities like{' '}
                    <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Mexico City</Link>
                    ,{' '}
                    <Link to="/world-cup-2026-host-cities/guadalajara" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Guadalajara</Link>
                    , or{' '}
                    <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Monterrey</Link>
                    .
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="editorial-h4">Coastal Contrast</h4>
                  <p>
                    Experience both coasts by connecting Miami with West Coast cities like{' '}
                    <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Los Angeles</Link>
                    {' '}or{' '}
                    <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">San Francisco Bay Area</Link>
                    {' '}for a complete American World Cup tour.
                  </p>
                </div>
              </div>
              <p>
                <Link to="/world-cup-2026-host-cities" className="text-[#008f63] dark:text-[#01b47d] underline hover:no-underline">Browse All World Cup 2026 Host Cities</Link>
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Final Checklist Section */}
          <article className="editorial-body">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-lg">
                <ClipboardCheck className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Final Checklist: Your Miami World Cup Essentials
              </h3>
            </div>

            <div className="my-8">
              <OptimizedImage
                src="/images/safety-guide/A_realistic_high-detail_photo_of_a_solo_traveler_walking_confidently_through_a_world_cup_2026.webp"
                alt="World Cup fan ready for the tournament"
                className="rounded-xl shadow-lg w-full"
                width={1600}
                height={900}
                placeholder="empty"
              />
              <p className="text-sm text-center text-slate-500 mt-2 italic">Double-check your essentials before heading to the Magic City.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Match tickets secured through FIFA official channels
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Hotel booked in Downtown/Brickell for transit access (or Miami Gardens for stadium proximity)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Flights confirmed to MIA (or FLL with Brightline backup)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Stadium parking pre-purchased OR transit plan mapped (Brightline + shuttle)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Attraction tickets purchased online (Vizcaya, PAMM, etc.)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Miami transit app downloaded (GO Miami-Dade)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Portable charger packed (your phone will die by halftime otherwise)
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Sunscreen, hydration pack, comfortable shoes ready
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Restaurant reservations made for splurge meals
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700 flex items-start gap-3 group hover:border-[#008f63]/30 transition-colors">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/50 flex items-center justify-center text-[#01b47d] dark:text-[#01b47d]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                  <span className="text-slate-700 dark:text-slate-200 leading-snug text-sm font-medium">
                  Clear stadium-compliant bag purchased (12″ × 6″ × 12″ max)
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

        <section className="max-w-4xl mx-auto px-6 pb-12">
          {/* Interactive Rating Section */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
                <p className="text-[#01b47d] dark:text-[#01b47d] font-medium">
                  <i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Related Guides Recommendation Engine */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
              <Link to="/world-cup-2026-host-cities" className="text-[#01b47d] dark:text-[#01b47d] hover:text-[#008f63] font-medium flex items-center gap-1 group">
                View all cities <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommendation 1: Houston (Texas Connection) */}
              <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
                <OptimizedImage 
                  src="/images/cities/houston-world-cup-2026.webp" 
                  alt="Houston World Cup Guide"
                  className="absolute inset-0 w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                  placeholder="empty" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Texas Neighbor</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Houston</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">Complete guide to NRG Stadium and Space City's World Cup events.</p>
                </div>
              </Link>

              {/* Recommendation 2: Los Angeles (West Coast Hub) */}
              <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
                <OptimizedImage 
                  src="/images/cities/los-angeles-world-cup-2026.webp" 
                  alt="Los Angeles World Cup Guide"
                  className="absolute inset-0 w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                  placeholder="empty"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Entertainment Hub</span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Los Angeles</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">SoFi Stadium guide and Hollywood entertainment for fans.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Elite Tier Footer Meta Section */}
          <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
                <div className="flex items-center gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=Miami%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`}
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
                     className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#008f63] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                     aria-label="Copy Link">
                    <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                  </button>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#01b47d] dark:text-[#01b47d]">
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
