import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';
import { getEditorialEntry } from '../seo/EditorialCalendar';

interface EstadioAztecaGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const EstadioAztecaGuide = ({ onClose, showHeader = false, hideHero = false }: EstadioAztecaGuideProps) => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-stadiums/estadio-azteca-guide'; // Normalized path

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
    link.href = '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-stadiums/estadio-azteca-guide'; // Adjust if needed
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    // Since this is a component, we might want to be careful about setting page meta if it's used in a list
    // But the user requested "Transform the entire Estadio Azteca Guide page", so we assume it's the main view.
    if (!hideHero) {
        setPageMeta({
        title: 'Estadio Azteca: World Cup 2026 Guide',
        description: 'Complete guide to Estadio Azteca for World Cup 2026. Capacity, seating, transportation, and tips for the historic 3-time host venue in Mexico City.',
        url: `${siteUrl}${pageUrl}`,
        image: `${siteUrl}/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-11-30', // Using today's date or keeping generic
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'Estadio Azteca', 'Mexico City']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'Estadio Azteca',
            'Mexico City',
            87523,
            'Historic 3-time World Cup host stadium in Mexico City.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'Estadio Azteca', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Estadio Azteca World Cup 2026' }
          )
        ]}
      />

      {showHeader && <Header />}
      
      {/* TOC Sidebar - Desktop */}
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

      {/* TOC Mobile */}
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
      {!hideHero && (
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp"
            alt="Estadio Azteca"
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
                  <Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-emerald-500/50 pb-0.5" aria-current="page">Estadio Azteca</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Estadio Azteca: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Mexico City</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>3x World Cup Host</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-emerald-400 group-hover/meta:bg-emerald-500/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>87,523 Capacity</span>
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
      )}

      {/* Content Sections — Premium editorial presentation */}
      <section id="main-content" className="editorial-article-premium dallas-page py-16">
        
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-emerald-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosts <strong>5 matches</strong>, including Opening Match</li>
               <li>• Venue: <strong>Estadio Azteca</strong> (Mexico City)</li>
               <li>• Key Event: <strong>Opening Match on June 11, 2026</strong></li>
               <li>• Legacy: First stadium to host 3 World Cups</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>
            The Cathedral Where World Cup History Repeats
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            The only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2024</span>
          </div>

          <p>
            Located in <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City</Link>, Estadio Azteca is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">World Cup 2026</Link>. Stand at the foot of Mexico City's colossal stadium, and you'll understand why they call it "El Coloso de Santa Úrsula." Rising from volcanic rock at 2,200 meters above sea level, Estadio Azteca isn't just the largest stadium in Latin America—it's the only venue on Earth where both Pelé and Diego Maradona lifted the World Cup trophy. In 2026, this legendary colossus will make history once again, becoming the first stadium ever to host three FIFA World Cups. As the opening match kicks off on June 11, 2026, with Mexico taking center stage, you'll witness footballing royalty welcoming the world's greatest tournament home for an unprecedented third time.
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-emerald-500 text-3xl"></i>
            Stadium Overview & Fast Facts
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-building-2-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Official Name</span>
                  <p>Estadio Azteca (commercially known as Estadio Banorte; FIFA designation: Estadio Ciudad de México for World Cup 2026)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-map-pin-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Location</span>
                  <p>Coyoacán borough, southern Mexico City (Santa Úrsula Coapa neighborhood)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-group-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Capacity</span>
                  <p>87,523 (reduced from original 114,600 for safety and comfort)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-calendar-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Opened</span>
                  <p>May 29, 1966 (renovated 2016-2018 for 2026 World Cup)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-home-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Home Teams</span>
                  <p>Club América, Mexico National Team</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-mountain-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Altitude</span>
                  <p>2,240 meters (7,349 feet) above sea level</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-grass-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">Playing Surface</span>
                  <p>Natural grass (Bermuda hybrid)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-trophy-line text-emerald-500"></i>
                  <span className="ml-2 font-semibold">World Cup Legacy</span>
                  <p>Only stadium to host 3 World Cups (1970, 1986, 2026)</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore Mexico City */}
        <section className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-500 text-3xl"></i>
            Beyond the Stadium: Explore Mexico City
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
            <p>Mexico City offers an incredible cultural experience that extends far beyond the historic Estadio Azteca.</p>
            <div>
              <h4 className="editorial-h4 mb-2">Discover Mexico City</h4>
              <p>Explore our complete <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Mexico City World Cup 2026 Guide</Link> for comprehensive travel information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Where to stay near Estadio Azteca</li>
                <li>Transportation in Mexico City</li>
                <li>Must-visit attractions and neighborhoods</li>
                <li>Best food and dining experiences</li>
                <li>Safety tips and local customs</li>
              </ul>
            </div>
            <div>
              <h4 className="editorial-h4 mb-2">Other Mexican Stadiums</h4>
              <p>Attending multiple matches in Mexico? Check out <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio Akron</Link> in Guadalajara or <Link to="/world-cup-2026-stadiums/estadio-bbva" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Estadio BBVA</Link> in Monterrey.</p>
            </div>
            <p><Link to="/world-cup-2026-stadiums" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">View All World Cup 2026 Stadiums</Link></p>
            <p className="text-slate-700 dark:text-slate-200">For iconic venue comparison, also see <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">SoFi Stadium</Link>.</p>
          </div>
          <hr className="editorial-divider" />
        </section>

        {/* 2026 World Cup Matches */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-emerald-500 text-3xl"></i>
            2026 World Cup Matches at Azteca
          </h3>
          
          <p>
            Estadio Azteca will host <strong>five matches during the 2026 World Cup</strong>, including the tournament's <strong>opening ceremony and match on June 11, 2026</strong>—marking the stadium's record third opening match (after 1970 and 1986). The confirmed schedule includes three group stage matches, one Round of 16 match, and potentially a quarterfinal, depending on final FIFA allocations.
          </p>
          
          <p>
            The opening match atmosphere promises to be explosive, with Mexico expected to play before a capacity crowd. Two of the group stage matches will feature El Tri, virtually guaranteeing sold-out attendance and the passionate, thunderous support Mexican fans are famous for. Expect kickoff times between 12:00 PM and 6:00 PM local time to accommodate global television audiences.
          </p>
          
          <p>
            This historic venue's third World Cup appearance follows its legendary status from hosting finals in 1970 and 1986, plus memorable matches from the 1968 Olympics and 1999 FIFA Confederations Cup. The 2026 tournament adds another chapter to Azteca's unmatched World Cup legacy.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-500 text-3xl"></i>
            Getting to the Stadium
          </h3>
          
          {/* By Metro + Light Rail */}
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-train-line text-emerald-500 text-3xl"></i>
              By Metro + Light Rail (Recommended)
            </h4>
            <div>
              <p>
                The most reliable transport option combines Mexico City's Metro with the Xochimilco Light Rail (Tren Ligero). Take Metro Line 2 (dark blue) to its southern terminus at <strong>Tasqueña station</strong>—easily accessible from the historic center (Zócalo station) or via transfers from other lines.
              </p>
              <p>
                Purchase a separate ticket for the light rail (approximately 5-7 pesos). The journey from Tasqueña to <strong>Estadio Azteca station</strong> takes 15 minutes, with trains departing every 10 minutes. The light rail station sits directly in front of the stadium—you'll exit and see the massive structure immediately.
              </p>
              <div className="mt-4 bg-slate-50 dark:bg-navy-900/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Journey Time & Tips:</p>
                <ul className="space-y-2">
                  <li>
                    <strong>From city center:</strong> 40-60 minutes total, though allow 90-120 minutes on matchdays due to crowds at Tasqueña. The platform has been recently expanded with Barcelona-style configuration for 2026 to handle World Cup crowds.
                  </li>
                  <li>
                    <strong>Pro tip:</strong> Metro Line 2 crosses the historic center, making it convenient from popular tourist areas. Download the CDMX Metro app for real-time updates.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Bus */}
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-bus-line text-emerald-500 text-3xl"></i>
              By Bus
            </h4>
            <p>
              RTP (Red de Transporte de Pasajeros) operates bus routes along Calzada de Tlalpan serving the stadium. Route 2A departs from Base CETRAM Taxqueña and reaches Tlalpan y Estadio Azteca stop in approximately 22 minutes, with buses every 5 minutes. Fare ranges from 4-20 pesos depending on distance. Metrobús Line 2 also serves the area via Universidad station, though requires a transfer to local transport.
            </p>
          </div>

          {/* By Car */}
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-car-line text-emerald-500 text-3xl"></i>
              By Car
            </h4>
            <div>
              <p>
                From downtown Mexico City, follow Avenida Tlalpan south (approximately 15 kilometers). Stay on the right side of the metro/light rail tracks—the stadium appears on your right. Alternatively, use the Anillo Periférico ring road, taking the "Estadio Azteca" exit.
              </p>
              <div className="mt-4 bg-slate-50 dark:bg-navy-900/50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Parking & Traffic Warning:</p>
                <p>
                  On-site parking opens 4 hours before events. Published rates are MXN $120 for cars/motorcycles, MXN $360 for minibuses, MXN $480 for buses. However, expect severe traffic congestion on matchdays—departures from city center should allow 60-90 minutes minimum, potentially 2+ hours for World Cup matches.
                </p>
              </div>
            </div>
          </div>

          {/* By Rideshare/Taxi */}
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-taxi-line text-emerald-500 text-3xl"></i>
              By Rideshare/Taxi
            </h4>
            <p>
              Uber, Didi, and traditional taxis serve the stadium, though expect surge pricing and longer wait times on matchdays. From Roma Norte/Condesa neighborhoods, typical fares range MXN $150-300 (USD $8-16) in normal traffic, potentially doubling during events. Request pickup from designated rideshare zones post-match to avoid walking long distances.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Seating Guide */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-layout-grid-line text-emerald-500 text-3xl"></i>
            Seating Guide & Stadium Layout
          </h3>
          
          <div className="mb-8">
            <div className="space-y-6">
              {/* Premium Seating */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-vip-crown-line text-emerald-500 text-3xl"></i>
                  Premium Seating (Palcos & Suites)
                </h4>
                <p>
                  Located in the middle tiers on both sides, premium boxes offer climate control, exclusive dining, and the best sightlines. Palco Azteca (east side) and Palco Dorado (west side) provide luxury amenities with dedicated entrances and parking.
                </p>
                <div className="mt-2">
                  <strong>Price range:</strong> $800-2,500 USD for World Cup matches
                </div>
              </div>
              
              {/* Mid-Tier Seating */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-eye-line text-emerald-500 text-3xl"></i>
                  Mid-Tier Seating (Preferente)
                </h4>
                <p>
                  The sweet spot for most fans—elevated enough for excellent views, close enough to feel the atmosphere. Sections 200-300 level offer covered seating with good amenities access. East and west sides provide optimal viewing angles.
                </p>
                <div className="mt-2">
                  <strong>Price range:</strong> $200-600 USD for World Cup matches
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* General Admission */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-group-line text-emerald-500 text-3xl"></i>
                  General Admission (General)
                </h4>
                <p>
                  Upper tiers and corners offer authentic Mexican football atmosphere at accessible prices. Sections 400-500 level can be steep but provide unique stadium perspectives. Expect passionate, vocal crowds in these areas.
                </p>
                <div className="mt-2">
                  <strong>Price range:</strong> $75-250 USD for World Cup matches
                </div>
              </div>
              
              {/* Behind Goals */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-football-line text-emerald-500 text-3xl"></i>
                  Behind Goals (Cabeceras)
                </h4>
                <p>
                  The heart of Azteca's atmosphere. North and south ends house the most passionate supporters, with organized chants, flags, and non-stop energy. Perfect for experiencing authentic Mexican football culture, though views can be distant from midfield action.
                </p>
                <div className="mt-2">
                  <strong>Price range:</strong> $50-200 USD for World Cup matches
                </div>
              </div>
            </div>
          </div>

          {/* Stadium Tips */}
          <div className="space-y-6">
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-sun-line text-emerald-500 text-3xl"></i>
                Sun & Weather
              </h4>
              <p>
                East side gets afternoon sun, west side offers shade during day matches. Mexico City's high altitude means intense UV exposure—bring sunscreen and hat. Afternoon thunderstorms possible June-September.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-volume-up-line text-emerald-500 text-3xl"></i>
                Atmosphere Zones
              </h4>
              <p>
                Sections behind goals (north/south) offer the most vocal support. East side (Palco Azteca) tends to be more family-friendly. West side gets rowdier during Club América matches.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-wheelchair-line text-emerald-500 text-3xl"></i>
                Accessibility
              </h4>
              <p>
                Wheelchair-accessible seating available in multiple sections with dedicated parking and entrances. Elevators serve all levels. Contact stadium services in advance for specific accommodations.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food, Drinks & Amenities */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-restaurant-line text-emerald-500 text-3xl"></i>
            Food, Drinks & Stadium Amenities
          </h3>
          
          <div className="mb-8">
            <div className="space-y-6">
              {/* Food Options */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-restaurant-2-line text-emerald-500 text-3xl"></i>
                  Food & Dining
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                    <div>
                      <p className="font-semibold">Traditional Mexican</p>
                      <p>Tacos, quesadillas, tortas, elote (street corn), and regional specialties throughout concourses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                    <div>
                      <p className="font-semibold">Premium Dining</p>
                      <p>Full-service restaurants in VIP areas, including Palco Azteca Restaurant with panoramic views</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-line text-emerald-500 mt-1"></i>
                    <div>
                      <p className="font-semibold">International Options</p>
                      <p>Pizza, burgers, hot dogs, and Asian fusion available in main concourses</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Beverages */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-cup-line text-emerald-500 text-3xl"></i>
                  Beverages
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-beer-line text-emerald-500"></i>
                    <span>Local beers: Corona, Dos Equis, Tecate, Modelo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-glass-line text-emerald-500"></i>
                    <span>Soft drinks, fresh juices, agua frescas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-drop-line text-emerald-500"></i>
                    <span>Bottled water (essential at altitude)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Stadium Amenities */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-store-line text-emerald-500 text-3xl"></i>
                  Stadium Amenities
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-shirt-line text-emerald-500"></i>
                    <span>Official merchandise stores (multiple locations)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-bank-card-line text-emerald-500"></i>
                    <span>ATMs and currency exchange</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-first-aid-kit-line text-emerald-500"></i>
                    <span>Medical stations and first aid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-wifi-line text-emerald-500"></i>
                    <span>Free WiFi throughout stadium</span>
                  </div>
                </div>
              </div>
              
              {/* What to Bring */}
              <div className="mb-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-suitcase-line text-emerald-500 text-3xl"></i>
                  What to Bring
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Valid photo ID (passport for international visitors)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Tickets (digital on phone or printed confirmation)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Small amount of cash (vendors prefer cash)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Sunscreen and hat (high altitude UV)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Light jacket (evenings can be cool)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-emerald-500"></i>
                      <span>Portable phone charger</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="mt-2">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-money-dollar-circle-line text-emerald-500 text-3xl"></i>
              Typical Stadium Pricing (World Cup 2026)
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-slate-50 dark:bg-navy-900/50 rounded-lg">
                <p className="text-slate-500 text-sm">Beer</p>
                <p className="font-bold text-emerald-600">$8-12 USD</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-navy-900/50 rounded-lg">
                <p className="text-slate-500 text-sm">Tacos (3)</p>
                <p className="font-bold text-emerald-600">$6-10 USD</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-navy-900/50 rounded-lg">
                <p className="text-slate-500 text-sm">Soft Drink</p>
                <p className="font-bold text-emerald-600">$4-6 USD</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-navy-900/50 rounded-lg">
                <p className="text-slate-500 text-sm">Jersey</p>
                <p className="font-bold text-emerald-600">$80-120 USD</p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Pre & Post-Match Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-emerald-500 text-3xl"></i>
            Pre & Post-Match Experience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Pre-Match */}
              <div className="space-y-3">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-play-circle-line text-emerald-500 text-3xl"></i>
                  Pre-Match (Arrive 2-3 Hours Early)
                </h4>
                <p>
                  The area around Azteca transforms into a massive street party 3-4 hours before kickoff. Vendors sell everything from team scarves to traditional Mexican food, while mariachi bands and drum groups create an electric atmosphere.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-music-line text-emerald-500"></i>
                    <span>Live mariachi performances near main entrances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-restaurant-line text-emerald-500"></i>
                    <span>Street food vendors throughout the plaza</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-camera-line text-emerald-500"></i>
                    <span>Photo opportunities with stadium backdrop</span>
                  </div>
                </div>
              </div>
              
              {/* Stadium Museum */}
              <div className="space-y-3">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-museum-line text-emerald-500 text-3xl"></i>
                  Estadio Azteca Museum
                </h4>
                <p className="mb-3">
                  Open on non-match days, the museum showcases World Cup history, including Pelé's 1,000th goal ball and Diego Maradona memorabilia. Stadium tours available with field access and locker room visits.
                </p>
                <div>
                  <strong>Hours:</strong> Tuesday-Sunday 10 AM - 5 PM<br/>
                  <strong>Price:</strong> $15-25 USD (tours $30-45 USD)
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Post-Match */}
              <div className="space-y-3">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-stop-circle-line text-emerald-500 text-3xl"></i>
                  Post-Match (Allow Extra Time)
                </h4>
                <p>
                  Expect 30-60 minutes to exit the stadium area due to crowd flow. The light rail and metro stations can become extremely congested, so consider waiting 20-30 minutes before heading to transport.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-emerald-500"></i>
                    <span>Stay hydrated while waiting in exit queues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-emerald-500"></i>
                    <span>Stick with your group in crowded areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-phone-line text-emerald-500"></i>
                    <span>Download offline maps in case of poor signal</span>
                  </div>
                </div>
              </div>
              
              {/* Nearby Attractions */}
              <div className="space-y-2">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-map-pin-line text-emerald-500 text-3xl"></i>
                  Nearby Attractions
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="ri-building-line text-emerald-500"></i>
                    <span>Xochimilco floating gardens (15 minutes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-ancient-gate-line text-emerald-500"></i>
                    <span>Coyoacán historic center (20 minutes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-shopping-bag-line text-emerald-500"></i>
                    <span>Plaza Cuicuilco shopping center (10 minutes)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500 text-3xl"></i>
            Final Verdict & Key Takeaway
          </h3>
          
          <p className="mb-6">
            Estadio Azteca transcends sport—it's a pilgrimage site where football's greatest moments crystallized into legend. Standing in the bowl where Pelé danced, where Maradona's genius and controversy collided, where 130,000+ voices have shaken volcanic rock, you're not just watching a match—you're participating in football's most sacred ritual.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-heart-line text-emerald-500 text-3xl"></i>
                  Who will love it most:
                </h4>
                <p>
                  Football romantics, history enthusiasts, and anyone seeking raw, passionate atmosphere at altitude. Families will find it accessible and welcoming despite the size. First-time World Cup attendees couldn't ask for a more legendary venue.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500 text-3xl"></i>
                  Don't miss:
                </h4>
                <p>
                  Arriving early to absorb the pre-match energy building in waves. The moment the Mexican national anthem echoes through 80,000+ voices at altitude, with the opening match spotlight focused on this storied ground, will be unforgettable.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                <i className="ri-lightbulb-line text-emerald-500 text-3xl"></i>
                Final advice:
              </h4>
              <p className="mb-4">
                Book accommodation in Roma Norte or Condesa 4-6 months ahead—these neighborhoods offer the perfect blend of Mexico City's cultural heartbeat and reasonable stadium access. Secure your World Cup tickets early through official FIFA channels or verified hospitality packages. Master the Metro + Light Rail combination for stress-free transport.
              </p>
              <p className="italic">
                And when those first chants erupt from behind the goals, let the sound wash over you—you're experiencing football at its most primal, passionate peak.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
              Viva Azteca. Viva México. Viva el Mundial.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Rate This Guide + Share Section */}
        <div className="mt-12 mb-16 p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Rate This Guide</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">How helpful was this Estadio Azteca guide?</p>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRate(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-2 transition-transform hover:scale-110 focus:outline-none"
              >
                <i 
                  className={`text-3xl ${
                    (hoverRating || userRating) >= star 
                      ? 'ri-star-fill text-yellow-400' 
                      : 'ri-star-line text-slate-300'
                  }`}
                ></i>
              </button>
            ))}
          </div>
          
          {hasRated && (
            <p className="text-emerald-600 font-medium animate-fade-up mb-6">Thanks for your feedback!</p>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
            <span className="text-slate-600 dark:text-slate-400 font-medium">Share this guide:</span>
            <div className="flex gap-3">
              <button 
                onClick={() => navigator.share?.({ title: 'Estadio Azteca Guide', url: window.location.href }).catch(() => {})}
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <i className="ri-share-line"></i>
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=Check out this Estadio Azteca guide for World Cup 2026!&url=${encodeURIComponent('https://stadiumport.com' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://stadiumport.com' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a 
                href={`mailto:?subject=Estadio Azteca Guide&body=Check out this guide: ${'https://stadiumport.com' + pageUrl}`}
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-red-500 hover:text-white transition-colors"
              >
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Recommended Guides */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
            <i className="ri-compass-discover-line text-emerald-500"></i>
            You Might Also Like
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
             <Link to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="/images/cities/mexico-city-world-cup-2026.webp"
                  alt="Mexico City Guide"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Mexico City Guide</div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">Complete travel guide to Mexico City for World Cup 2026.</p>
              </div>
             </Link>

             <Link to="/world-cup-2026-stadiums/estadio-bbva" className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp"
                  alt="Estadio BBVA"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Estadio BBVA</div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">Explore Monterrey's Steel Giant, Mexico's most modern stadium.</p>
              </div>
             </Link>

             <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp"
                  alt="SoFi Stadium"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">SoFi Stadium</div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">Compare with Los Angeles' ultra-modern World Cup venue.</p>
              </div>
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
