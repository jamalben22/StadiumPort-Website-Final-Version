import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';
import { getEditorialEntry } from '../seo/EditorialCalendar';

interface EstadioBBVAGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const EstadioBBVAGuide = ({ onClose, showHeader = false, hideHero = false }: EstadioBBVAGuideProps) => {
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
  const currentPath = '/world-cup-2026-stadiums/estadio-bbva-guide'; // Normalized path

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
    link.href = '/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-stadiums/estadio-bbva-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'

  useEffect(() => {
    if (!hideHero) {
        setPageMeta({
        title: 'Estadio BBVA: World Cup 2026 Guide',
        description: 'Complete guide to Estadio BBVA (Monterrey) for World Cup 2026. Capacity, seating, transportation, and tips for Mexico\'s most modern stadium.',
        url: `${siteUrl}${pageUrl}`,
        image: `${siteUrl}/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-11-30',
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'Estadio BBVA', 'Monterrey']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'Estadio BBVA',
            'Monterrey',
            53500,
            'Modern stadium in Monterrey with stunning mountain views.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'Estadio BBVA', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Estadio BBVA World Cup 2026' }
          )
        ]}
      />

      {showHeader && <Header />}
      
      {/* TOC Sidebar - Desktop */}
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
                        ? 'bg-[#01b47d]/10 dark:bg-[#01b47d]/20 text-[#01b47d] dark:text-[#01b47d] border border-[#01b47d]/30 dark:border-[#01b47d]/40 shadow-sm'
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

      {/* TOC Mobile */}
      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#01b47d] to-[#01b47d] text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
      {!hideHero && (
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp"
            alt="Estadio BBVA"
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
                  <Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link>
                </li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li>
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Estadio BBVA</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Estadio BBVA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>Monterrey, Mexico</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>4 Matches</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>~53,500 Capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-[#01b47d]' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-[#01b47d]/20 ring-1 ring-[#01b47d]/50' : 'bg-white/5 group-hover/save:bg-[#01b47d]/20'}`}>
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
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosts <strong>4 matches</strong> (3 Group, 1 Round of 32)</li>
               <li>• Venue: <strong>Estadio BBVA</strong> (Monterrey)</li>
               <li>• Key Feature: <strong>Stunning Mountain Views</strong></li>
               <li>• Nickname: "El Gigante de Acero" (The Steel Giant)</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-book-open-line text-[#01b47d]"></i>
            Estadio BBVA: Your Complete Guide to Monterrey's World Cup 2026 Venue
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            One of the most technologically advanced stadiums in Latin America, framed by the majestic Cerro de la Silla.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2024</span>
          </div>

          <p>
            Located in <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Monterrey</Link>, Estadio BBVA is one of the most technologically advanced stadiums in Latin America. Estadio BBVA is one of the 16 stadiums hosting <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">World Cup 2026</Link>.
          </p>
          <p>
            Rising from the edge of Monterrey like a metallic fortress, Estadio BBVA—nicknamed "El Gigante de Acero" (The Steel Giant)—represents a new generation of Latin American football architecture. When this architectural marvel hosts four World Cup 2026 matches, international fans will discover why Mexico's industrial capital built a stadium that honors its brewing and steel-making heritage while delivering one of the most intimate viewing experiences in world football. With the majestic Cerro de la Silla mountain framing the north stand and seats positioned just nine meters from the pitch, this venue promises an atmosphere unlike any other in the tournament.
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d] text-3xl"></i>
            Stadium Overview & Fast Facts
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-building-2-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Official Name</span>
                  <p>Estadio BBVA (FIFA designation: Estadio Monterrey)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-map-pin-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Location</span>
                  <p>Guadalupe, Greater Monterrey, Nuevo León, Mexico</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-group-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Capacity</span>
                  <p>~53,500 (World Cup configuration)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-calendar-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Opened</span>
                  <p>August 2, 2015</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-home-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Home Team</span>
                  <p>C.F. Monterrey (Rayados)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-pencil-ruler-2-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Architect</span>
                  <p>Populous / VFO Arquitectos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-grass-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Playing Surface</span>
                  <p>Hybrid turf (97% natural, 3% synthetic)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <i className="ri-leaf-line text-[#01b47d]"></i>
                  <span className="ml-2 font-semibold">Sustainability</span>
                  <p>LEED Silver Certified</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 dark:bg-navy-900/50 p-4 rounded-lg">
            <p className="font-semibold mb-2">Notable Features:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>34-degree grandstand inclination for optimal sightlines</li>
              <li>Asymmetric steel façade with aluminum "gills" for natural ventilation</li>
              <li>Advanced LED lighting system meeting FIFA Standard A</li>
              <li>Cashless payment technology throughout venue</li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-time-line text-[#01b47d] text-3xl"></i>
            History & Legacy
          </h3>
          <p>Estadio BBVA replaced the beloved Estadio Tecnológico, ending C.F. Monterrey's 63-year tenure at their historic home. Constructed between August 2011 and July 2015, the $200 million project represented the most expensive stadium investment in Mexican football history at the time. FEMSA, the beverage and retail giant that owns both the club and the facility, envisioned a venue that would elevate the entire Latin American stadium experience.</p>
          <p>The stadium's inaugural match on August 2, 2015, saw Monterrey defeat Portuguese giants Benfica 3-0 in the eighth edition of the Eusébio Cup. Since opening, the venue has hosted Copa MX finals, CONCACAF Champions League matches, and Mexican national team fixtures. In 2022, it welcomed the CONCACAF W Championship, hosting eight matches in the women's international tournament.</p>
          <p>Beyond football, Estadio BBVA has become northern Mexico's premier entertainment destination, hosting world-class concerts featuring artists like Coldplay, The Weeknd, Shakira, and Justin Bieber. The stadium's design and acoustics create an electric atmosphere that resonates far beyond matchdays.</p>
          <p>For World Cup 2026, the venue underwent significant enhancements, including a complete pitch renovation with FIFA-approved hybrid turf grown in specialized Nuevo León nurseries, upgraded warm-up zones, and a state-of-the-art LED lighting system that reduces energy consumption by over 40 percent. Total World Cup preparation investment reached $7.2 million, ensuring the stadium meets the tournament's exacting standards.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-pencil-ruler-2-line text-[#01b47d] text-3xl"></i>
            Stadium Architecture & Experience
          </h3>
          <p>Designed by Kansas City-based Populous—the firm behind iconic venues like Yankee Stadium and London's Olympic Stadium—Estadio BBVA is purposefully sculptural. The design draws profound inspiration from Monterrey's industrial identity: the self-supported tripodal structure is clad in rolled steel trusses and aluminum sheeting, paying homage to the steel mills that once defined the city's economy. The asymmetric sweeping shape evokes the silhouette of brewing stills, celebrating Monterrey's rich brewing tradition (the city is home to brands like Tecate and Dos Equis).</p>
          <p>The stadium's most breathtaking feature is its relationship with the landscape. The southern end slopes downward, deliberately framing spectacular views of the famous Cerro de la Silla (Saddle Mountain), whose distinctive silhouette has become synonymous with Monterrey. Crescent-shaped aluminum "gills" crown the exterior, functioning both as architectural statements and practical ventilation systems that channel cooling breezes into the seating bowl—essential in Monterrey's warm climate.</p>
          <p>Inside, the experience is unmatched. The 34-degree rake of the grandstands creates one of the steepest, most intimidating atmospheres in North American football. Every seat offers exceptional sightlines, with the first row positioned just nine meters from the pitch—compared to 27 meters at the old Estadio Tecnológico. This proximity puts fans practically on top of the action, amplifying every tackle, every pass, every roar.</p>
          <p>The seating bowl accommodates 4,500 club seats across two exclusive lounges, plus 324 luxury suites with outdoor terraces. A unique feature allows premium ticket holders to watch players emerge from the tunnel via a special balcony overlooking the access corridor—a behind-the-scenes glimpse that heightens the matchday ritual.</p>
          <p>Sustainability credentials are equally impressive. Estadio BBVA earned LEED Silver certification in 2015, becoming North America's first football stadium to achieve this environmental recognition. Over a third of the site consists of green space with native vegetation designed to filter rainwater and recharge aquifers. The northern boundary features a wooded trail connecting to a new Ecological Park, while permeable "Grasspave" parking surfaces balance vehicle access with water absorption.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d] text-3xl"></i>
            What Matches to Expect
          </h3>
          <p>Estadio BBVA will host four World Cup 2026 fixtures: three group stage matches scheduled for June 14, 20, and 24, plus one Round of 32 knockout match on June 29. While specific matchups remain to be confirmed, the venue's 53,500 capacity and dramatic mountain backdrop position it perfectly for memorable afternoon and evening fixtures.</p>
          <p>Monterrey's football culture is legendary. C.F. Monterrey's supporters—known as La Adicción Azul (The Blue Addiction)—create one of Liga MX's most passionate atmospheres. Expect World Cup crowds to embrace this energy, with international fans blending seamlessly with local traditions. The stadium's steep stands and excellent acoustics mean every chant, every song, every collective gasp will reverberate throughout the bowl.</p>
          <p>This is Monterrey's first World Cup since Mexico hosted the tournament in 1986 (when matches were played at the old Estadio Tecnológico and Estadio Universitario). For a city passionate about football and proud of its industrial heritage, June 2026 represents a homecoming decades in the making.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-links-line text-[#01b47d] text-3xl"></i>
            Related Stadiums
          </h3>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Planning a Mexico or cross-border circuit? Visit{' '}
            <Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio Azteca</Link> in Mexico City,{' '}
            <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio Akron</Link> in Guadalajara, and{' '}
            <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">AT&amp;T Stadium</Link> in Dallas.
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d] text-3xl"></i>
            Getting to the Stadium
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d]"></i>
                By Metro/Train
              </h4>
              <p>The Metrorrey system provides the most economical route to Estadio BBVA. Take <strong>Line 1 (Yellow Line)</strong> eastbound to <strong>Exposición Station</strong>, the line's final stop. From Exposición, the stadium is approximately a 20-minute walk (roughly 2 kilometers). You'll cross the Rio La Silla bridge and pass Expo Ganadera and the Domo Care arena before arriving at the venue.</p>
              <p>From downtown Monterrey's historic center (Barrio Antiguo area), board Line 1 at stations like Central, Cuauhtémoc, or Del Golfo. The journey takes approximately 25-30 minutes. Metro fares are MXN $7.70 (around USD $0.40), making this the most budget-friendly option. Service runs from 4:45 AM to midnight.</p>
              <p><strong>Pro tip:</strong> On matchdays, trains fill quickly. Arrive at your departure station at least 90 minutes before kickoff to account for crowds and the walk from Exposición.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-bus-line text-[#01b47d]"></i>
                By Bus
              </h4>
              <p>Multiple bus routes serve the stadium directly. From downtown's Avenida Juárez, routes <strong>214</strong>, <strong>223</strong>, and <strong>TME</strong> stop at <strong>Pablo Livas (Estadio BBVA)</strong>, just 3-5 minutes' walk from the gates. Other convenient routes include <strong>093</strong>, <strong>185</strong>, and several in the <strong>070</strong> and <strong>108</strong> series.</p>
              <p>Bus fares typically range from MXN $10-15 (USD $0.50-0.80). Frequency increases dramatically on matchdays, though expect standing-room-only conditions closer to kickoff.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-car-line text-[#01b47d]"></i>
                By Car
              </h4>
              <p>From downtown Monterrey, follow <strong>Avenida Constitución</strong> east, which becomes <strong>Carretera Miguel Alemán (Highway 54D)</strong>. Continue east for approximately 10 kilometers, following signs for Guadalupe and Estadio BBVA. Journey time ranges from 15-25 minutes depending on traffic, though allow 45+ minutes on matchdays.</p>
              <p>Parking at Estadio BBVA requires a pre-purchased <strong>abono</strong> (season pass). On-site lots are NOT available for matchday drive-ups. FIFA has designated nearby recommended parking areas; follow digital signage and police direction. Expect parking fees around MXN $150-300 (USD $8-16) at off-site lots, with a 10-15 minute walk to the stadium.</p>
              <p><strong>Access points:</strong> Main vehicle entrances are via Acceso Sur (Avenida Pablo Livas), Acceso Norte (Avenida Exposición near the Expo Ganadera), and Acceso Oriente (Avenida Nuevo León).</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-taxi-line text-[#01b47d]"></i>
                By Rideshare/Taxi
              </h4>
              <p>Uber and Didi operate throughout Monterrey. Designated drop-off zones are clearly marked around the stadium perimeter—follow staff directions and look for signage. From downtown, expect fares around MXN $100-200 (USD $5-11), though surge pricing on matchdays can double or triple rates.</p>
              <p>Traditional taxis from Monterrey's General Mariano Escobedo International Airport (MTY) to the stadium take approximately 22 minutes, covering 23 kilometers (14 miles). Airport authorized taxis charge zone-based flat rates (approximately MXN $350-450 / USD $18-24). Book at official airport kiosks to avoid unlicensed operators.</p>
            </div>

            <div>
              <h4 className="editorial-h4 flex items-center gap-2">
                <i className="ri-walk-line text-[#01b47d]"></i>
                Walking/Biking
              </h4>
              <p>Walking from downtown Monterrey to the stadium (approximately 10km) is feasible but not recommended given distances and summer heat. Cycling is possible via dedicated bike lanes along major routes, though secure bike parking at the stadium is limited.</p>
            </div>

            <div className="bg-slate-50 dark:bg-navy-900/50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Journey times summary:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>Downtown to stadium via metro: 30-40 minutes (including walk)</li>
                <li>Airport to stadium via taxi: 20-25 minutes</li>
                <li>Downtown to stadium via car: 15-25 minutes (45+ on matchdays)</li>
              </ul>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] text-3xl"></i>
            Where to Stay
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4">Best Neighborhoods</h4>
              <p><strong>Barrio Antiguo</strong> (Downtown/Centro): Monterrey's historic heart offers cobblestone streets, colonial architecture, and the city's best nightlife. Staying here puts you steps from Macroplaza, Paseo Santa Lucía, and dozens of bars and restaurants. It's approximately 25-30 minutes from the stadium via metro (Line 1 runs directly through the area). Perfect for fans who want cultural immersion and post-match celebrations.</p>
              <p><strong>San Pedro Garza García</strong>: The upscale suburb southwest of downtown, San Pedro is Monterrey's Beverly Hills—home to high-end shopping at Plaza Fiesta San Agustín and Galerias Valle Oriente, excellent restaurants, and modern hotels. It's quieter and more polished than Centro, ideal for families or travelers seeking comfort over bohemian charm. Expect 25-35 minute drives to the stadium (longer on matchdays) or combine metro and taxi.</p>
              <p><strong>Zona Tec/Fundidora Park Area</strong>: Near Monterrey Arena and Fundidora Park, this area offers proximity to major attractions, shopping at Paseo Santa Lucía, and convenient metro access. It splits the difference between downtown buzz and residential calm. Stadium access via Line 1 takes 15-20 minutes.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-bed-line text-[#01b47d] text-3xl"></i>
            Accommodation Options
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4">Budget Options</h4>
              <p><strong>Hostels in Barrio Antiguo</strong> (from MXN $300-600 / USD $15-30 per night): Small guesthouses and budget hotels offer basic but clean accommodations near nightlife. Search platforms like Hostelworld for options.</p>
              <p><strong>City Express Monterrey Aeropuerto</strong> (from USD $40): Located near the airport with free shuttle service, this chain hotel offers reliable, no-frills comfort. Book through Budget-friendly chains like <strong>Fiesta Inn</strong> and <strong>City Express</strong> appear throughout the metro area, typically starting around USD $45-70 per night.</p>
            </div>

            <div>
              <h4 className="editorial-h4">Mid-Range Picks</h4>
              <p><strong>Krystal Monterrey / Wyndham Monterrey Ambassador Centro</strong> (from USD $60-85): Centrally located near Macroplaza and Barrio Antiguo with walkable access to metro stations. These properties offer modern amenities, business centers, and helpful staff. Book via Booking.com or Expedia for competitive rates.</p>
              <p><strong>Holiday Inn Monterrey Parque Fundidora</strong> (from USD $70-95): Positioned between downtown and the stadium with easy Line 1 metro access. Features pools, fitness centers, and on-site dining. Ideal for families.</p>
              <p><strong>NH Collection Monterrey / Habita Monterrey</strong> (from USD $85-120): Boutique-style hotels in San Pedro Garza García offering stylish rooms, rooftop bars, and upscale dining. Perfect for travelers prioritizing comfort and design. Check availability on Booking.com or Hotels.com.</p>
            </div>

            <div>
              <h4 className="editorial-h4">Luxury Options</h4>
              <p><strong>Live Aqua Monterrey</strong> (from USD $180-255): A stunning resort-style property in San Pedro's financial district featuring a spa, gourmet restaurant, and contemporary Mexican design. Indulge in rooftop pools with mountain views.</p>
              <p><strong>Grand Fiesta Americana Monterrey Valle</strong> (from USD $140-180): Full-service luxury in Valle Oriente with spacious rooms, club lounges, and proximity to high-end shopping. Book through Expedia or the hotel's direct website.</p>
              <p><strong>Presidente InterContinental Monterrey</strong> (from USD $150-200): IHG's flagship Monterrey property offers concierge services, elegant accommodations, and extensive business facilities. Located in San Pedro, it's a favorite among FIFA officials and corporate travelers.</p>
            </div>

            <div>
              <h4 className="editorial-h4">FIFA Accommodation</h4>
              <p>Official FIFA Fan Fest sites and accommodation packages will be announced closer to the tournament. Monitor FIFA's official 2026 website for authorized booking platforms to avoid scams.</p>
              <p><strong>Booking tip:</strong> Monterrey hotel prices surge during major events. Book accommodations 6-9 months in advance via Booking.com, Expedia, or Airbnb to secure the best rates and availability. Consider staying outside peak zones and using metro/rideshares for flexibility.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-flash-line text-[#01b47d] text-3xl"></i>
            Matchday Tips & Insider Advice
          </h3>
          <p><strong>Arrive Early:</strong> Gates typically open 2-3 hours before kickoff for World Cup matches. Aim to arrive at least 90 minutes early to clear security, find your seat, and soak in the pre-match atmosphere. Monterrey summer heat can be intense—hydrate before entering.</p>
          <p><strong>Best Gates:</strong> The stadium has multiple access points. Acceso Sur (south entrance off Avenida Pablo Livas) and Acceso Norte (north entrance near Expo Ganadera/Metro Exposición) are the primary public gates. Check your ticket for designated entry points—FIFA will assign specific gates based on seating sections.</p>
          <p><strong>Food & Drink:</strong> Inside the stadium, expect typical concessions: tacos, tortas, nachos, hot dogs, plus beer and soft drinks. Prices run MXN $80-200 (USD $4-11) for food items and MXN $60-120 (USD $3-6) for beverages. While quality is decent, it's stadium pricing—eat a proper meal beforehand to save money.</p>
          <p>The new <strong>"Pa' Tu Butaca"</strong> app allows in-seat food delivery, though availability and pricing may vary for World Cup matches. Cash is no longer accepted; the stadium operates a <strong>cashless system</strong> (credit/debit cards and contactless payments only).</p>
          <p><strong>What to Bring:</strong> FIFA World Cup 2026 bag policy allows clear bags up to 12" × 6" × 12" (30 × 15 × 30 cm) or non-clear clutches/wallets up to 4.5" × 6.5" (11 × 16.5 cm). Bring sunscreen (afternoon matches can be scorching), a hat, sunglasses, and portable phone chargers. Tickets are mobile-only via the FIFA Ticketing app—ensure your phone is charged and ready.</p>
          
          <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
            <h4 className="editorial-h4 text-red-800 dark:text-red-300 mb-2">What NOT to Do</h4>
            <ul className="list-disc list-inside text-red-700 dark:text-red-200">
              <li>Prohibited items include professional cameras with detachable lenses, selfie sticks, large umbrellas, outside food and beverages, fireworks, flares, and hard-sided containers.</li>
            </ul>
          </div>

          <div className="mt-6 space-y-4">
            <p>Smoking and vaping are banned throughout the stadium. Re-entry is not permitted once you exit.</p>
            <p><strong>ID & Security:</strong> Valid government-issued photo ID is required—carry your passport or official ID matching your ticket name. Security screening includes magnetometers and bag checks; cooperate with staff and avoid bringing unnecessary items.</p>
            <p><strong>Post-Match Transport:</strong> Expect crowds and delays. Metro trains will be packed—consider walking to Lerdo de Tejada or Eloy Cavazos stations (slightly farther but less congested than Exposición). Rideshare surge pricing can be extreme; walk 10-15 minutes away from the stadium to find more reasonable fares. Pre-arrange a designated meeting point if traveling with groups.</p>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-2-line text-[#01b47d] text-3xl"></i>
            Things to Do Nearby
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4">Pre-Match Activities</h4>
              <p><strong>Expo Ganadera & Domo Care</strong>: Located adjacent to the stadium, this fairground and arena complex hosts events and exhibitions. On matchdays, expect fan zones, live music, and food vendors creating a festive carnival atmosphere.</p>
              <p><strong>Parque Fundidora</strong> (5km west, 10 minutes by car): This massive urban park, built on the site of a former steel foundry, features museums, walking trails, the iconic Horno 3 blast furnace, and Paseo Santa Lucía—a picturesque artificial river perfect for pre-match strolls. Arrive early and enjoy the greenery before heading to the stadium.</p>
            </div>

            <div>
              <h4 className="editorial-h4">Nearby Attractions (Within 30 Minutes)</h4>
              <p><strong>Cerro de la Silla Hike</strong>: The mountain you'll see from the stadium's north stand. Hiking to the summit takes 4-6 hours round-trip and offers panoramic views of Monterrey. Not a matchday activity, but essential for adventurous fans staying multiple days.</p>
              <p><strong>Macroplaza & Barrio Antiguo</strong> (10km west): Mexico's largest public square, Macroplaza spans 40 hectares and connects to the historic Barrio Antiguo district. Explore museums (Museo de Historia Mexicana, MARCO contemporary art museum), the Metropolitan Cathedral, and the Faro de Comercio monument. Post-match, Barrio Antiguo's bars and clubs stay open until 2-3 AM.</p>
              <p><strong>Paseo Santa Lucía</strong>: A 2.5-kilometer riverwalk linking Macroplaza to Parque Fundidora. Rent a paddle boat, dine at waterside cafés, or simply enjoy the landscaped promenade. Evening walks here are magical.</p>
            </div>

            <div>
              <h4 className="editorial-h4">Local Food & Bars</h4>
              <p><strong>Cabrito (Roasted Goat)</strong>: Monterrey's signature dish. Try it at <strong>El Rey del Cabrito</strong> just south of Barrio Antiguo or <strong>El Gran Pastor</strong> in San Pedro.</p>
              <p><strong>Machacado con Huevo</strong>: Dried beef with scrambled eggs, a breakfast staple. Sample authentic versions at local fondas.</p>
              <p><strong>Mercado Barrio Antiguo</strong>: A food hall with 25+ vendors serving everything from tacos and elote to Belgian fries and craft cocktails. Perfect for groups with diverse tastes.</p>
              <p><strong>Pre-Match Bars:</strong> Barrio Antiguo reigns supreme. <strong>Almacén 42</strong> pours 42 Mexican craft beers on tap, <strong>Café Iguana</strong> has anchored the nightlife scene since 1991 with live rock and blues, and <strong>Sierra Madre Brewing Co.</strong> serves local brews in a historic setting. For rooftop vibes, try <strong>Me Muero de Hambre</strong> with mountain views.</p>
            </div>

            <div>
              <h4 className="editorial-h4">Post-Match Celebrations</h4>
              <p>After the final whistle, head back to <strong>Barrio Antiguo</strong> where the party continues until dawn. <strong>Casa Morelos</strong>, <strong>La Tumba</strong>, and <strong>Gargantuas Cultural Space</strong> offer live music ranging from rock to jazz. For upscale options, San Pedro's lounges and rooftop bars provide a more refined atmosphere.</p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] text-3xl"></i>
            Beyond the Stadium: Explore Monterrey
          </h3>
          <p>Monterrey's mountain backdrop and modern energy create a unique World Cup 2026 destination.</p>
          <p>
            Explore our complete{' '}
            <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Monterrey World Cup 2026 Guide</Link>{' '}for everything you need:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hotels near Estadio BBVA</li>
            <li>Mountain attractions and outdoor activities</li>
            <li>Modern Mexican cuisine scene</li>
            <li>Transportation around Monterrey</li>
            <li>Border crossing and travel tips</li>
          </ul>
          <p className="mt-4">
            <strong>Other Stadiums:</strong>{' '}
            Completing a Mexico tour? Visit{' '}
            <Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio Azteca</Link>{' '}in Mexico City and{' '}
            <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Estadio Akron</Link>{' '}in Guadalajara. Close to Texas? Check out{' '}
            <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">AT&amp;T Stadium</Link>{' '}in Dallas.
          </p>
          <p className="mt-2">
            <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-[#01b47d] text-3xl"></i>
            Final Verdict & Key Takeaway
          </h3>
          <p className="mb-6">Estadio BBVA is where industrial heritage meets cutting-edge design, where intimate sightlines amplify every moment, and where the majestic Sierra Madre mountains remind you that football, at its best, connects us to something larger than the game itself. This isn't just another modern stadium—it's a temple to Mexican football culture, built for fans who live and breathe the sport.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-heart-line text-[#01b47d] text-3xl"></i>
                  Who will love it most:
                </h4>
                <p>Anyone who values atmosphere over amenities, proximity over prestige, and raw passion over corporate polish. Estadio BBVA rewards the true believer.</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                  <i className="ri-star-line text-[#01b47d] text-3xl"></i>
                  Don't miss:
                </h4>
                <p>Arriving early enough to stand at the north end, gaze up at Cerro de la Silla framed by the stadium's steel canopy, and understand why they call this place The Steel Giant. That view alone is worth the journey.</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2">
                <i className="ri-calendar-check-line text-[#01b47d] text-3xl"></i>
                Book now:
              </h4>
              <p>Monterrey accommodations fill fast. Secure your hotel, flights, and match tickets early through official FIFA channels. The combination of limited capacity and Mexico's passionate football culture means this venue will sell out quickly. Start planning your 2026 adventure today—Estadio BBVA awaits.</p>
            </div>
          </div>

          <p className="italic text-center text-slate-600 dark:text-slate-400">
            Travel smart: Use Booking.com or Expedia for competitive hotel rates, compare flights through Skyscanner or Google Flights, and book airport transfers through authorized services like Uber or official taxi kiosks. For authentic local experiences, consider Airbnb rentals in Barrio Antiguo or San Pedro. Your World Cup dream starts with the right preparation.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Rate This Guide + Share Section */}
        <div className="mt-12 mb-16 p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Rate This Guide</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">How helpful was this Estadio BBVA guide?</p>
          
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
            <p className="text-[#01b47d] font-medium animate-fade-up mb-6">Thanks for your feedback!</p>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
            <span className="text-slate-600 dark:text-slate-400 font-medium">Share this guide:</span>
            <div className="flex gap-3">
              <button 
                onClick={() => navigator.share?.({ title: 'Estadio BBVA Guide', url: window.location.href }).catch(() => {})}
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-[#008f63] hover:text-white transition-colors"
              >
                <i className="ri-share-line"></i>
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=Check out this Estadio BBVA guide for World Cup 2026!&url=${encodeURIComponent('https://stadiumport.com' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-[#008f63] hover:text-white transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://stadiumport.com' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-[#008f63] hover:text-white transition-colors"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a 
                href={`mailto:?subject=Estadio BBVA Guide&body=Check out this guide: ${'https://stadiumport.com' + pageUrl}`}
                className="p-2 rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-[#008f63] hover:text-white transition-colors"
              >
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Recommended Guides */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
            <i className="ri-compass-discover-line text-[#01b47d]"></i>
            You Might Also Like
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
             <Link to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="/images/cities/monterrey-world-cup-2026.webp"
                  alt="Monterrey City Guide"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Monterrey City Guide</div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">Complete travel guide to Monterrey for World Cup 2026.</p>
              </div>
             </Link>

             <Link to="/world-cup-2026-stadiums/estadio-azteca-guide" className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src="/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp"
                  alt="Estadio Azteca"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Estadio Azteca</div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">Historic 3-time World Cup host stadium in Mexico City.</p>
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
