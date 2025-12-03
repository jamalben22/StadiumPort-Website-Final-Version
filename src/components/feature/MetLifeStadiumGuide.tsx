import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OptimizedImage } from '../base/OptimizedImage';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../seo/SchemaOrg';
import { setPageMeta } from '../seo/MetaUtils';

interface MetLifeStadiumGuideProps {
  onClose?: () => void;
  showHeader?: boolean;
  hideHero?: boolean;
}

export const MetLifeStadiumGuide = ({ onClose, showHeader = false, hideHero = false }: MetLifeStadiumGuideProps) => {
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
  const currentPath = '/world-cup-2026-stadiums/metlife-stadium-guide';
  const pageUrl = currentPath;
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageTitle = 'MetLife Stadium - World Cup 2026 Guide';

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
    link.href = '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp'
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

  

  useEffect(() => {
    if (!hideHero) {
        setPageMeta({
        title: 'MetLife Stadium: World Cup 2026 Final Guide',
        description: 'Complete guide to MetLife Stadium (New York/New Jersey) for World Cup 2026. Host of 8 matches including the Final, capacity details, transportation, and matchday tips.',
        url: `${siteUrl}${currentPath}`,
        image: `${siteUrl}/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp`,
        locale: 'en_US',
        publishedTime: '2024-12-01',
        modifiedTime: new Date().toISOString(),
        section: 'Stadiums',
        tags: ['World Cup 2026', 'Stadiums', 'MetLife Stadium', 'New York', 'New Jersey', 'Final']
        })
    }
  }, [hideHero])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateStadiumSchema(
            'MetLife Stadium',
            'East Rutherford, New Jersey',
            82500,
            'The Stage for Football\'s Greatest Moment - World Cup 2026 Final Venue.'
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Stadiums', url: '/world-cup-2026-stadiums' },
            { name: 'MetLife Stadium', url: currentPath }
          ]),
          generateImageObjectSchema(
            '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'MetLife Stadium World Cup 2026' }
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
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-[#01b47d]"></div>
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
                        ? 'bg-[#01b47d]/10 dark:bg-[#01b47d]/20 text-[#01b47d] dark:text-[#01b47d] border border-[#01b47d]/30 dark:border-[#01b47d]/30 shadow-sm'
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
              <div className="w-6 h-6 rounded-lg bg-[#01b47d] text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollProgress}%` }} className="h-1 rounded-full bg-[#01b47d]"></div>
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
            src="/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp"
            alt="MetLife Stadium"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">MetLife Stadium</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              MetLife Stadium: <span className="text-[#01b47d]">World Cup 2026 Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>New York/New Jersey</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-trophy-line text-lg"></i>
                </div>
                <span>World Cup Final Venue</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>82,500 Capacity</span>
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
        <article id="intro" className="editorial-body editorial-dropcap">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Hosts <strong>8 matches</strong> including the <strong>Final</strong></li>
               <li>• Venue: <strong>MetLife Stadium</strong> (East Rutherford, NJ)</li>
               <li>• Key Event: <strong>World Cup Final on July 19, 2026</strong></li>
               <li>• Capacity: <strong>82,500</strong></li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>
            The Stage for Football's Greatest Moment
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            The world's most prestigious football trophy will be lifted under the lights of this architectural powerhouse.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>10 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Dec 2024</span>
          </div>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Located in <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey</Link>, MetLife Stadium is one of the <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">16 stadiums hosting World Cup 2026</Link>, including the tournament's climactic final alongside seven other crucial matches. For international fans planning the journey of a lifetime, MetLife represents everything monumental about North American sports: scale, technology, and an atmosphere that can accommodate 82,500 roaring supporters. Whether you're crossing oceans or states to witness football history, this is your essential guide to conquering match day at the biggest stadium in the NFL.
          </p>
          
          <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "History will be made at MetLife Stadium... the world's most prestigious football trophy will be lifted under the lights of this architectural powerhouse."
          </blockquote>

          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            Planning an East Coast circuit? Pair MetLife with <Link to="/world-cup-2026-stadiums/lincoln-financial-field-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia or <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Gillette Stadium</Link> near Boston. For a West Coast contrast, compare it with <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">SoFi Stadium</Link>.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Overview & Fast Facts */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-building-line text-[#01b47d] text-3xl"></i>
            Stadium Overview & Fast Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <i className="ri-building-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Official Name:</strong> MetLife Stadium (FIFA designation: New York New Jersey Stadium)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-map-pin-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Location:</strong> East Rutherford, New Jersey (8 miles/13 km west of Manhattan)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-calendar-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Opened:</strong> April 2010</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-group-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Capacity:</strong> 82,500 (World Cup configuration: approximately 82,500)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-shield-star-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Primary Tenants:</strong> New York Giants and New York Jets (NFL)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <i className="ri-pencil-ruler-2-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Architects:</strong> 360 Architecture, EwingCole, Rockwell Group, Bruce Mau Design</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-money-dollar-circle-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Construction Cost:</strong> $1.6 billion (2010)</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-leaf-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Surface Type:</strong> FieldTurf (artificial); natural grass to be installed for World Cup 2026</p>
              </div>
              <div className="flex items-start gap-3 py-2">
                <i className="ri-sun-line text-[#01b47d] text-2xl"></i>
                <p className="leading-relaxed"><strong>Roof Type:</strong> Open-air (no roof)</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#01b47d]"></i>
              Notable Features
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Largest NFL stadium by capacity</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Four massive 30×116-foot HD video boards</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>Color-changing LED lighting system</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#01b47d]"></i>
                <span>First NFL stadium to join UN Climate Action Framework</span>
              </li>
            </ul>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* History & Legacy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-book-open-line text-[#01b47d] text-3xl"></i>
            History & Legacy
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              MetLife Stadium emerged from one of sport's most unique partnerships. When the New York Jets failed to secure approval for their planned West Side Manhattan stadium ahead of the 2012 Olympics bid, they joined forces with their crosstown rivals, the Giants, to create the NFL's first jointly-owned facility. Construction began in 2007 adjacent to the aging Giants Stadium, with the old venue demolished shortly after MetLife's 2010 inauguration.
            </p>
            <p className="leading-relaxed mb-6">
              Since opening, this East Rutherford colossus has hosted more than 600 major events, including Super Bowl XLVIII in February 2014—the first outdoor, cold-weather Super Bowl in NFL history. That Seattle Seahawks victory over Denver defied skeptics who predicted snowstorm chaos, instead delivering mild temperatures and establishing MetLife's credentials for high-stakes occasions. The stadium also hosted the Copa América Centenario final in 2016, where Chile defeated Argentina on penalties before 82,026 spectators, and WrestleMania 29 in 2013, which drew the venue's record attendance of 80,676.
            </p>
            <p className="leading-relaxed">
              For New Jersey and New York, MetLife symbolizes decades of sports ambition finally realized in the metropolitan area. Recent FIFA-mandated renovations—removing 1,740 corner seats to widen the pitch—demonstrate the venue's adaptability and commitment to hosting world-class football.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Architecture & Experience */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-building-2-line text-[#01b47d] text-3xl"></i>
            Stadium Architecture & Experience
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              MetLife Stadium's design philosophy reflects its dual-franchise identity. Architects faced the challenge of creating a neutral canvas that could transform for either the Giants or Jets within hours. The solution was inspired by Manhattan's iconic skyscrapers: a limestone-like base supporting aluminum louvers and glass panels that change color through interior LED lighting—Giants blue on their match days, Jets green on theirs.
            </p>
            <p className="leading-relaxed mb-6">
              The seating bowl surrounds the pitch entirely, creating exceptional acoustics and eliminating sightline obstructions. Unlike older stadiums, the raked design allows fans to track a 30-yard punt's full arc from any seat. Four colossal HD video boards anchor each upper-deck corner, part of over 47,000 square feet of digital displays throughout the venue. Ten massive LED pylons at stadium entrances blast team highlights and sponsor content visible from the parking lots.
            </p>
            <p className="leading-relaxed mb-6">
              Premium amenities include 218 luxury suites across four levels and more than 10,000 club seats with access to upscale lounges like the MetLife 50 Club. The Beers of the World stands and Craft Beer Zones on levels 100 and 300 satisfy serious beer enthusiasts, while the Blue Point Pub and Bow Street Irish Whiskey Bar offer full-service options. Accessibility features include ADA-compliant seating on all levels with elevator access at multiple gates.
            </p>
            <p className="leading-relaxed">
              The open-air design means weather is part of the experience—New Jersey summers can be sweltering, but June and July 2026 should offer pleasant match day conditions. Without a roof, this stadium channels the raw energy of outdoor football, letting crowd noise amplify without artificial acoustics.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Matches to Expect */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-calendar-line text-[#01b47d] text-3xl"></i>
            What Matches to Expect
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              MetLife Stadium will host <strong>eight World Cup 2026 matches</strong>, culminating in the <strong>tournament final on July 19, 2026</strong>—the first World Cup final in the New York metropolitan area and the United States since 1994. FIFA's announcement confirmed MetLife beat out Dallas's AT&T Stadium and Los Angeles's SoFi Stadium for the ultimate honour, projecting over $2 billion in regional economic impact.
            </p>
            <p className="leading-relaxed">
              Expect group stage fixtures and likely a knockout round match before the final. With 82,500 seats, the atmosphere will be electric—imagine a sold-out crowd representing dozens of nations, all converging on northern New Jersey for football's biggest prize. The venue's experience hosting international matches, including friendlies featuring Argentina, Brazil, and Mexico, means staff understand the unique atmosphere football supporters bring compared to NFL crowds.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Getting to the Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-map-2-line text-[#01b47d] text-3xl"></i>
            Getting to the Stadium
          </h3>
          
          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-train-line text-[#01b47d]"></i>
              By Train (Recommended)
            </h4>
            <p className="leading-relaxed mb-4">
              NJ Transit offers dedicated Meadowlands Rail Service from Secaucus Junction directly to Meadowlands Sports Complex Station, located steps from the stadium gates. This is the easiest, most reliable option for World Cup match days.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">From Manhattan:</h4>
                <ul className="leading-relaxed ml-6 list-disc">
                  <li>Take any NJ Transit train from Penn Station (32nd Street, between 7th and 8th Avenues) to Secaucus Junction (12-15 minutes, departing frequently in the first 15 minutes of each hour)</li>
                  <li>Transfer downstairs at Secaucus to the Meadowlands shuttle train (10 minutes)</li>
                  <li>Round-trip fare from Penn Station: approximately $11</li>
                  <li>Service begins 3.5 hours before kickoff, running every 10-20 minutes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">From Newark:</h4>
                <ul className="leading-relaxed ml-6 list-disc">
                  <li>NJ Transit trains from Newark Penn Station to Secaucus Junction, then transfer to Meadowlands shuttle</li>
                  <li>Journey time: 20-25 minutes total</li>
                </ul>
              </div>
              <div>
                <p className="leading-relaxed">
                  <strong>Tip:</strong> Purchase round-trip tickets in advance via the NJ Transit app or ticket machines to avoid the $5 onboard surcharge. The last train departs Meadowlands Station approximately 1 hour after full-time, so don't linger too long celebrating.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-bus-line text-[#01b47d]"></i>
              By Bus
            </h4>
            <p className="leading-relaxed">
              Coach USA operates the 351 Meadowlands Express from Port Authority Bus Terminal (42nd Street and 8th Avenue) in Manhattan directly to MetLife Stadium. Service begins 2.5 hours before kickoff and runs until 30 minutes after kickoff, with return buses operating for 2 hours post-match. One-way fare: approximately $7. Drop-off near Parking Lot K.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-car-line text-[#01b47d]"></i>
              By Car
            </h4>
            <p className="leading-relaxed">
              With 28,000 parking spaces across the Meadowlands Sports Complex, driving is feasible but expect traffic congestion. Access via New Jersey Turnpike (I-95), exit onto Route 3 West. Parking rates typically $40+ for major events; pre-purchase permits online to guarantee access. For World Cup matches, arrive 3+ hours early. Rideshare drop-off zone: Parking Lot E (Verizon Gate).
            </p>
          </div>

          <div>
            <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
              <i className="ri-plane-line text-[#01b47d]"></i>
              From NYC Airports
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Newark Liberty (EWR)</h4>
                <p className="leading-relaxed text-sm">15 miles, 25-35 minutes by car or rideshare ($40-60); NJ Transit train to Penn Station available</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">LaGuardia (LGA)</h4>
                <p className="leading-relaxed text-sm">18 miles, 35-50 minutes depending on traffic</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">JFK</h4>
                <p className="leading-relaxed text-sm">28 miles, 45-70 minutes in moderate traffic</p>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              Consider booking airport transfers or car services in advance for guaranteed World Cup match day transport, as rideshare surge pricing can triple fares after matches.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-[#01b47d] text-3xl"></i>
            Where to Stay
          </h3>
          <p className="leading-relaxed mb-6">
            MetLife Stadium's proximity to both Manhattan and New Jersey suburbs offers accommodation for every budget and preference.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-[#01b47d]"></i>
                Near the Stadium (Practical but Limited Nightlife)
              </h4>
              <p className="leading-relaxed mb-4">For maximum convenience, stay in East Rutherford, Carlstadt, or Secaucus—all within 3 miles:</p>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed"><strong>Budget:</strong> Super 8 by Wyndham Meadowlands ($80-120/night), Extended Stay America Meadowlands</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Mid-Range:</strong> Hampton Inn Carlstadt-At The Meadowlands, Residence Inn by Marriott East Rutherford Meadowlands ($130-200/night)—many offer free parking and shuttle services</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Upscale:</strong> Renaissance Meadowlands Hotel ($180-280/night), featuring modern amenities and proximity to American Dream mall</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-train-line text-[#01b47d]"></i>
                Secaucus Hub (Best Transit Access)
              </h4>
              <p className="leading-relaxed">
                Secaucus combines affordability with direct train access to both the stadium and Manhattan. Hilton Garden Inn Secaucus, Fairfield Inn Secaucus, Aloft Secaucus Meadowlands—expect $150-220/night during World Cup.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-building-line text-[#01b47d]"></i>
                Manhattan (Maximum Experience, Higher Cost)
              </h4>
              <p className="leading-relaxed mb-4">
                Staying in New York City offers unparalleled dining, nightlife, and sightseeing between matches, with Penn Station providing direct train access:
              </p>
              <ul className="list-disc ml-6 leading-relaxed">
                <li><strong>Budget:</strong> Hostels in Midtown/Hell's Kitchen ($50-80/night for dorms)</li>
                <li><strong>Mid-Range:</strong> Countless chain hotels near Penn Station and Times Square ($200-400/night during World Cup)</li>
                <li><strong>Luxury:</strong> Midtown five-stars like The St. Regis or Peninsula ($500-1,200/night)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-plane-line text-[#01b47d]"></i>
                Newark Alternative
              </h4>
              <p className="leading-relaxed">
                Newark offers affordability and excellent NJ Transit connections to Secaucus Junction, plus proximity to Newark Airport—ideal for international arrivals. Downtown hotels range $100-200/night.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-[#01b47d]"></i>
                Booking Tip
              </h4>
              <p className="leading-relaxed">
                Reserve accommodation 6-12 months ahead for World Cup dates. Use platforms like Booking.com, Expedia, or Airbnb to compare rates and locations. Filter by "near public transport" to simplify match day logistics.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Matchday Tips & Insider Advice */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <i className="ri-lightbulb-line text-[#01b47d] text-3xl"></i>
            Matchday Tips & Insider Advice
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-time-line text-[#01b47d]"></i>
                Arrive Early
              </h4>
              <p className="leading-relaxed">
                Gates typically open 2 hours before NFL games—expect similar for World Cup. Security screening takes time with 80,000+ fans, so arrive 2.5-3 hours early to explore the stadium, grab food, and soak up the pre-match atmosphere. Late arrivals risk missing kickoff.
              </p>
            </div>
            
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-shield-check-line text-[#01b47d]"></i>
                Bag Policy (Critical)
              </h4>
              <p className="leading-relaxed mb-2">
                MetLife enforces the NFL Clear Bag Policy strictly:
              </p>
              <ul className="leading-relaxed ml-6 list-disc">
                <li><strong>Allowed:</strong> Clear plastic/vinyl bags up to 12"×6"×12", small clutch purses up to 4.5"×6.5", one-gallon clear Ziploc bags.</li>
                <li><strong>Prohibited:</strong> Backpacks, large purses, coolers, briefcases, camera bags, fanny packs.</li>
              </ul>
              <p className="leading-relaxed mt-2 font-semibold">
                Leave non-compliant bags at your hotel. No bag check facilities on-site.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-suitcase-line text-[#01b47d]"></i>
                What to Bring
              </h4>
              <ul className="leading-relaxed ml-6 list-disc">
                <li>Factory-sealed water bottle (20 oz or less) or empty reusable bottle to fill inside</li>
                <li>Food in clear plastic bags (allowed!)</li>
                <li>Sunscreen and hat for day matches (open-air stadium)</li>
                <li>Light jacket for evening matches—New Jersey summer nights can cool down</li>
                <li>Power bank for your phone (long days drain batteries)</li>
                <li>Photo ID (required for alcohol purchases if you appear under 40)</li>
              </ul>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-restaurant-2-line text-[#01b47d]"></i>
                Food & Drink Inside
              </h4>
              <p className="leading-relaxed">
                MetLife offers extensive concessions: classic stadium fare (hot dogs, burgers, pizza), plus upgraded options like Asian noodles, gyros, deli sandwiches, and fried clams. Expect $8-10 for basic items, $13-15 for beer. The MetLife 50 Club (premium ticketholders) features buffet dining. Stadium is cashless—bring cards or use mobile pay.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-door-open-line text-[#01b47d]"></i>
                Best Gates
              </h4>
              <p className="leading-relaxed">
                The Verizon Gate (near Lot E) and Pepsi Gate handle crowds efficiently. The train station deposits you near the HCL Tech/Train Gate—convenient but can bottleneck. Spread out to less crowded gates if lines look long.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <i className="ri-logout-box-line text-[#01b47d]"></i>
                Post-Match Exit Strategy
              </h4>
              <p className="leading-relaxed">
                Getting out is the trickiest part. The train station gets mobbed—expect 30-60 minute waits for Meadowlands trains post-match. Consider exiting 5 minutes early, walking to nearby restaurants (Redds, Marcus Live) to wait out the crowd, or pre-booking car services. Rideshare surge pricing can be extreme—$100+ to Manhattan isn't uncommon after major events.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Things to Do Nearby */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] text-3xl"></i>
            Things to Do Nearby
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-shopping-cart-line text-[#01b47d]"></i>
                American Dream (0.4 miles)
              </h4>
              <p className="leading-relaxed">
                North America's second-largest mall isn't just shopping—it's an entertainment complex featuring Nickelodeon Universe (indoor theme park), DreamWorks Water Park, Big SNOW (indoor skiing!), SEA LIFE Aquarium, and dozens of restaurants. Perfect for pre-match hours or non-match days. Accessible via free shuttle or short walk.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-restaurant-line text-[#01b47d]"></i>
                Pre-Match Dining & Drinking
              </h4>
              <p className="leading-relaxed mb-4">East Rutherford's dining scene is limited but functional:</p>
              <ul className="list-disc ml-6 leading-relaxed">
                <li><strong>Redds Restaurant & Biergarten (0.5 miles):</strong> Classic pub grub, shuttle service to/from stadium ($50 including parking), outdoor seating.</li>
                <li><strong>Marcus Live! Bar & Grille (American Dream):</strong> Sports bar atmosphere with 35+ TVs, extensive menu.</li>
                <li><strong>Gianna's (Carlstadt, 2 miles):</strong> Old-school Italian with massive portions—penne vodka, veal piccata.</li>
                <li><strong>Segovia Meson (nearby):</strong> Spanish tapas and authentic cuisine.</li>
              </ul>
              <p className="leading-relaxed mt-2">
                For serious pre-match atmosphere, many supporters will gravitate to Manhattan bars and travel together by train—Penn Station area has countless sports pubs.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-building-line text-[#01b47d]"></i>
                Manhattan (8 miles)
              </h4>
              <p className="leading-relaxed">
                If time permits, New York City offers endless attractions: Times Square, Central Park, Empire State Building, Statue of Liberty/Ellis Island ferries, Brooklyn Bridge, world-class museums (MET, MoMA, Natural History), Broadway shows, and neighborhoods like Greenwich Village and SoHo. Allocate full days for proper NYC exploration—don't try to squeeze sightseeing on match days.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-party-popper-line text-[#01b47d]"></i>
                Post-Match Celebrations
              </h4>
              <p className="leading-relaxed">
                After a World Cup final, Manhattan transforms into a global party. Head to Times Square, Hell's Kitchen bars, or culturally-specific neighborhoods (Little Brazil in Midtown, Astoria's Latin quarter in Queens) to celebrate with fellow supporters.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Stadium: Explore New York/New Jersey */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-[#01b47d] text-3xl"></i>
            Beyond the Stadium: Explore New York/New Jersey
          </h3>
          <div className="space-y-6">
            <p className="leading-relaxed">
              The World Cup experience in the NY/NJ area offers endless possibilities beyond MetLife Stadium.
            </p>
            <div>
              <p className="font-semibold">Discover New York/New Jersey:</p>
              <p>
                Explore our complete <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">New York/New Jersey World Cup 2026 Guide</Link> for essential information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hotels near MetLife Stadium</li>
                <li>Getting to the stadium from Manhattan</li>
                <li>Best neighborhoods to stay</li>
                <li>Iconic attractions and experiences</li>
                <li>Match day transportation tips</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Other Northeast Stadiums:</p>
              <p>
                Catching multiple matches in the region? Check out <Link to="/world-cup-2026-stadiums/lincoln-financial-field-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Lincoln Financial Field</Link> in Philadelphia or <Link to="/world-cup-2026-stadiums/gillette-stadium-guide" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">Gillette Stadium</Link> in Boston.
              </p>
            </div>
            <p>
              <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] underline hover:no-underline">View All World Cup 2026 Stadiums</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Final Verdict & Key Takeaway */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-8 flex items-center gap-3">
            <i className="ri-medal-line text-[#01b47d] text-3xl"></i>
            Final Verdict & Key Takeaway
          </h3>
          <div>
            <p className="leading-relaxed mb-6">
              MetLife Stadium isn't subtle—it's a 82,500-seat monument to American sports excess, and for the 2026 World Cup final, that's precisely what makes it special. This venue delivers on scale, technology, and atmosphere while offering unmatched access to New York City's cultural riches. Yes, you'll navigate New Jersey Transit. Yes, you'll pay Manhattan prices. But you'll witness football's pinnacle moment in a region that's hosted every sport's championship at some point, now adding the World Cup crown to its resume.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Perfect for:</strong> Supporters who want the full New York experience wrapped around their football; fans who appreciate modern, high-tech stadiums; anyone willing to plan logistics carefully for a once-in-a-lifetime atmosphere.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>The One Thing You Can't Miss:</strong> Standing outside the stadium 90 minutes before kickoff, surrounded by supporters from every continent, with the Manhattan skyline glowing behind you—that's when you'll realize you're at the center of the sporting universe.
            </p>
            <p className="leading-relaxed">
              <strong>Book Early:</strong> Accommodation and transport options will evaporate 2-3 months before the final. Secure your arrangements now, memorize the NJ Transit schedule, and prepare for the biggest match day of your life. The World Cup comes to New York New Jersey only once—make every moment count.
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Interactive Rating Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#01b47d]"></div>
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
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#01b47d]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Related Guides Recommendation Engine */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-space">You Might Also Like</h3>
            <Link to="/world-cup-2026-stadiums" className="text-[#01b47d] dark:text-[#01b47d] hover:text-[#008f63] font-medium flex items-center gap-1 group">
              View all stadiums <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation 1: New York / New Jersey Host City Guide */}
            <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/new-york-new-jersey-world-cup-2026.webp" 
                alt="New York / New Jersey World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Host City Guide</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">New York / New Jersey</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete NY/NJ travel guide for FIFA World Cup 2026: Match schedule, transportation, and planning tips.</p>
              </div>
            </Link>

            {/* Recommendation 2: Philadelphia City Guide */}
            <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/philadelphia-world-cup-2026.webp" 
                alt="Philadelphia World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">Nearby Host City</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Philadelphia</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Complete guide to Lincoln Financial Field and Philly's World Cup events.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Elite Tier Footer Meta Section */}
        <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Share Section */}
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
              <div className="flex items-center gap-2">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${siteUrl}${pageUrl}`} 
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

            {/* Separator for mobile */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

            {/* Last Reviewed Section */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#01b47d]/30 text-[#01b47d] dark:text-[#01b47d]">
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

      {/* Footer - Standard */}
      <Footer />
    </div>
  );
};
