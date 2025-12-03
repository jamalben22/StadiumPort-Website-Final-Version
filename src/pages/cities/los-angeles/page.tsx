import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

// Helper: convert **...** emphasis to <strong> while preserving text and spacing
const renderBoldText = (input: string) => {
  const parts = input.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const MatchScheduleTable = () => (
  <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
      <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 font-semibold border-b border-slate-200 dark:border-slate-700">
        <tr>
          <th className="p-3 whitespace-nowrap">Date</th>
          <th className="p-3">Round</th>
          <th className="p-3">Details</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-[#008f63] dark:text-[#01b47d]">June 12</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">USA Opening Match</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-[#008f63] dark:text-[#01b47d]">June 15, 18, 21</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group matches</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-[#008f63] dark:text-[#01b47d]">June 25</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Group Stage</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">USA Third Match</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-[#008f63] dark:text-[#01b47d]">June 28 & July 2</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Round of 32</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Knockout fixtures</td>
        </tr>
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
          <td className="p-3 font-medium text-[#008f63] dark:text-[#01b47d]">July 10</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Quarterfinal</td>
          <td className="p-3 text-slate-600 dark:text-slate-300">Semifinal berth at stake</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function LosAngelesArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide';

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
    link.href = '/images/cities/los-angeles-world-cup-2026.webp'
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

  const pageUrl = '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';

  useEffect(() => {
    const entry = getEditorialEntry('city','los-angeles')
    setPageMeta({
      title: 'Los Angeles – World Cup 2026 Guide',
      description: 'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.',
      url: `${siteUrl}${pageUrl}`,
      image: `${siteUrl}/images/cities/los-angeles-world-cup-2026.webp`,
      locale: 'en_US',
      publishedTime: entry?.isPublished ? entry.datePublished : undefined,
      modifiedTime: new Date().toISOString(),
      section: entry?.section || 'Host Cities',
      tags: ['World Cup 2026', 'Host Cities', 'Los Angeles', 'SoFi Stadium', ...(entry?.keywords||[])]
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Los Angeles – World Cup 2026 Guide',
            'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','los-angeles')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Los Angeles', 'SoFi Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-host-cities' },
            { name: 'Los Angeles', url: pageUrl }
          ]),
          generateImageObjectSchema(
            '/images/cities/los-angeles-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Los Angeles skyline – World Cup 2026' }
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
                          ? 'bg-[#01b47d]/5 dark:bg-[#008f63]/20 text-[#008f63] dark:text-[#01b47d] border-l-4 border-[#01b47d]'
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
            src="/images/cities/los-angeles-world-cup-2026.webp"
            alt="Los Angeles skyline"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">Los Angeles</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              Los Angeles World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
            </h1>

            {/* Meta Data - Clean Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>USA</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-building-line text-lg"></i>
                </div>
                <span>SoFi Stadium</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>70,240 Capacity</span>
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

      {/* Content Sections — Editorial presentation */}
      <main id="main-content" className="editorial-article-premium la-page py-16">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          
          {/* [QUICK SUMMARY: 8 matches, USA Opener, SoFi Stadium, SoCal Hub] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• Los Angeles hosts <strong>8 matches</strong>—including USA Opener</li>
               <li>• Venue: <strong>SoFi Stadium</strong> (Inglewood)</li>
               <li>• Key Event: <strong>USA vs. TBD (June 12)</strong> & Quarterfinal</li>
               <li>• Regional Hub: Southern California</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>Your Complete Travel Guide to the World's City
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Eight matches. Hollywood glamour. Endless summer. Welcome to the star of FIFA World Cup 2026.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <div className="text-premium-lead mb-8 leading-relaxed">
            <p className="whitespace-pre-line">
              As one of the <Link to="/world-cup-2026-host-cities" className="font-semibold text-[#008f63] dark:text-[#01b47d] underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">World Cup 2026 host cities</Link>, Los Angeles will welcome fans from around the globe with a mix of football energy and California sunshine.
            </p>
          </div>
          <div className="text-premium-lead mb-8 leading-relaxed">
            <p className="whitespace-pre-line">
              {`Get ready for the opening kick: The U.S. Men's National Team launches their World Cup journey at `}
              <Link to="/world-cup-2026-stadiums/sofi-stadium-guide" className="font-semibold text-[#008f63] dark:text-[#01b47d] underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">SoFi Stadium</Link>
              {` on June 12, 2026`}
            </p>
            
            {/* [PULL QUOTE] */}
            <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              "Los Angeles isn't just hosting the World Cup—it's throwing the party to end all parties."
            </blockquote>

            <p className="whitespace-pre-line">
              {`Los Angeles isn't just hosting the World Cup—it's throwing the party to end all parties. When the U.S. opens their 2026 campaign on June 12 at the gleaming SoFi Stadium in Inglewood, the City of Angels will welcome the world with 39 consecutive days of football fever, eight must-see matches, and a soccer culture that pulses through every corner of this sprawling metropolis. This is where beach vibes collide with championship ambitions, where tacos fuel pregame rituals, and where 3.6 million Mexican-Americans help create the most electric football atmosphere in North America.`}
            </p>
            <p className="whitespace-pre-line">
              {`Forget everything you think you know about LA. The traffic? Manageable with the right strategy. The sprawl? Part of the adventure. The stereotypes? Shattered the moment you step into a packed supporters' section at BMO Stadium or watch the sun set over the Pacific after a match day. Los Angeles has been preparing for this moment since 1994, when the Rose Bowl hosted the World Cup final. Three decades later, the city's newest architectural marvel is ready to prove why LA is the undisputed soccer capital of the United States.`}
            </p>
          </div>

          {/* Essential Links Module — Apple-level premium */}
          <div className="callout-premium mb-12 p-6 sm:p-8 mt-8 bg-gradient-to-br from-[#01b47d]/5 to-white dark:from-navy-900 dark:to-navy-800 border border-[#01b47d]/10 dark:border-navy-700 shadow-lg rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8">
              <div className="icon-premium-lg flex items-center justify-center">
                <i className="ri-links-line text-[#01b47d]" aria-hidden="true"></i>
              </div>
              <h3 className="editorial-h3 font-semibold text-slate-900 dark:text-slate-100 text-xl sm:text-2xl">Essential Los Angeles Links</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-football-line text-[#01b47d] text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">Stadium Guide</div>
                    <a className="text-[#008f63] dark:text-[#01b47d] hover:text-[#008f63] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200" href="/world-cup-2026-stadiums/sofi-stadium" data-discover="true">SoFi Stadium Guide<i className="ri-arrow-right-line text-xs transition-transform group-hover:translate-x-0.5"></i></a>
                  </div>
                </div>
              </div>

              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-map-2-line text-[#01b47d] text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">All Host Cities</div>
                    <a className="text-[#008f63] dark:text-[#01b47d] hover:text-[#008f63] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200" href="/world-cup-2026-host-cities" data-discover="true">Explore All 16 Cities<i className="ri-arrow-right-line text-xs transition-transform group-hover:translate-x-0.5"></i></a>
                  </div>
                </div>
              </div>

              <div className="premium-link-card group">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/60">
                  <div className="icon-premium-md flex items-center justify-center mt-0.5">
                    <i className="ri-plane-line text-[#01b47d] text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-base">Nearby Cities</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a className="text-[#008f63] dark:text-[#01b47d] hover:text-[#008f63] font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" data-discover="true">San Francisco Bay Area</a>
                      <a className="text-[#008f63] dark:text-[#01b47d] hover:text-[#008f63] font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" data-discover="true">Seattle</a>
                      <a className="text-[#008f63] dark:text-[#01b47d] hover:text-[#008f63] font-medium text-sm hover:underline transition-colors" href="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" data-discover="true">Vancouver</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider-premium mb-16"></div>
        </article>

        {/* SoFi Stadium */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLABuilding" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradLABuilding)" />
              <rect x="7" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="12" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#14b8a6" />
            </svg>
            SoFi Stadium: The $5 Billion Cathedral of Sport
          </h3>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAStar" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradLAStar)" />
                </svg>
                The Venue That Redefined Spectacular
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Built in 2020 at a jaw-dropping cost that makes it the most expensive stadium ever constructed, SoFi Stadium in Inglewood isn't just a venue—it's a destination experience. The translucent ETFE canopy hovers like a spaceship over the field, open on the sides to let coastal breezes flow through while protecting 70,240 fans (expandable to 100,240 for major events) from the elements. The Infinity Screen, a double-sided 4K marvel weighing 1,000 tonnes, dangles overhead with 260 speakers delivering crystal-clear replays from every angle.

For the World Cup, SoFi undergoes a fascinating transformation. FIFA's strict requirements mean the stadium's artificial turf gets replaced with natural grass, and clever engineering expands the pitch dimensions to regulation size by rolling back corner sections of the lower bowl. When match officials refer to it as "Los Angeles Stadium" (FIFA bans corporate naming during tournaments), you'll know you're witnessing something historic.`}
              </p>
              
            </div>

            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLACalendar" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradLACalendar)" />
                  <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
                  <rect x="7" y="12" width="3" height="3" rx="0.8" fill="#ffffff" />
                  <rect x="12" y="12" width="3" height="3" rx="0.8" fill="#ffffff" />
                </svg>
                Eight Matches That Matter
              </h4>
              <div className="callout-premium p-6 sm:p-8">
                <div className="space-y-3 mt-2">
                  <MatchScheduleTable />
                  <p className="text-premium-body">
                    The tournament schedule means you could attend multiple matches across different dates, building your own World Cup odyssey through Southern California's perfect June weather.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="editorial-h4 font-semibold animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAInfo" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradLAInfo)" />
                  <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
                  <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
                </svg>
                Match Day Intel: What You Need to Know
              </h4>
              <div className="callout-premium p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Getting In</div>
                    <p className="text-premium-body whitespace-pre-line">SoFi operates on mobile-only ticketing through FIFA's official app. Print-outs won't work, so charge that phone and have your QR code ready. Gates typically open 2-4 hours before kickoff—arrive early, because security screenings can stretch longer than you'd expect when 70,000 fans converge on Inglewood.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">What to Bring</div>
                    <p className="text-premium-body whitespace-pre-line">Clear bags only. Sunscreen is non-negotiable even under the canopy—LA's June sun is relentless. A light layer for evening matches makes sense; coastal air cools down after sunset.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">What to Leave Behind</div>
                    <p className="text-premium-body whitespace-pre-line">No large bags, no smoking devices, no poles or flag sticks that block views. Don't test security—they've hosted Super Bowls and know their business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Stadium Vibe</div>
                    <p className="text-premium-body whitespace-pre-line">SoFi sits inside the Hollywood Park entertainment complex, with pre-match energy across restaurants, bars, and public spaces surrounding the stadium. The newly opened Kali Hotel and Rooftop (launching 2026) anchors a fan village atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article className="editorial-body theme-indigo">
          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Train" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLATrain" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="4" width="18" height="12" rx="3" fill="url(#gradLATrain)" />
              <circle cx="8" cy="17" r="2" fill="#0ea5e9" />
              <circle cx="16" cy="17" r="2" fill="#0ea5e9" />
              <rect x="7" y="7" width="10" height="4" rx="1.5" fill="#ffffff" />
            </svg>
            Getting to SoFi: Transportation That Actually Works
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Navigating the sprawl: A realistic guide to reaching Inglewood from across the Southland.
          </p>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Transport Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Best Option:</strong> Metro C Line + Free Shuttle</li>
               <li>• <strong>Avoid:</strong> Driving (parking costs $100+)</li>
               <li>• <strong>Rideshare:</strong> Use designated zones only</li>
               <li>• <strong>Tip:</strong> Load TAP card on phone before arriving</li>
             </ul>
          </div>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/safety-guide/article mode/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp"
              alt="Public Transportation to Stadium"
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
            {/* Metro */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  <svg className="h4-icon-svg" role="img" aria-label="Metro" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLAMetro" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#10b981" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="6" width="18" height="10" rx="3" fill="url(#gradLAMetro)" />
                    <circle cx="8" cy="17" r="2" fill="#0ea5e9" />
                    <circle cx="16" cy="17" r="2" fill="#0ea5e9" />
                    <rect x="7" y="8" width="10" height="4" rx="1.5" fill="#ffffff" />
                  </svg>
                  Metro: Your Best Bet (Highly Recommended)
                </h4>
                <p className="leading-relaxed mb-4">
                  LA Metro rolls out a dedicated SoFi Stadium Shuttle connecting from the <strong>LAX/Metro Transit Center</strong> station. This is the official, most efficient way to reach the venue.
                </p>
                <div className="callout-pro-tip border-l-4 border-[#01b47d] bg-[#01b47d]/5 dark:bg-[#008f63]/10 p-5 rounded-r-lg mb-4">
                  <h5 className="text-md font-bold text-[#008f63] dark:text-[#01b47d]/10 mb-2 flex items-center gap-2">
                    <div className="callout-icon">
                      <i className="ri-lightbulb-flash-line"></i>
                    </div>
                    How it Works
                  </h5>
                  <ol className="leading-relaxed space-y-2 list-decimal list-inside text-[#008f63]/80 dark:text-[#01b47d]/20">
                    <li>Take <strong>C Line (Green)</strong> or <strong>K Line (Crenshaw)</strong> to LAX/Metro Transit Center</li>
                    <li>Board free SoFi Shuttle at Bus Bay 8 (every 5-8 mins)</li>
                    <li>Arrive at stadium in ~10 minutes</li>
                  </ol>
                </div>
                <p className="leading-relaxed">
                  The system connects seamlessly from Downtown LA (Metro B Line to Willowbrook/Rosa Parks, transfer to C Line), Hollywood, and Santa Monica. Regular fare is just <strong>$1.75</strong> with 2-hour transfers.
                </p>
              </div>
            </section>

            {/* Rideshare */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Taxi" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLATaxi" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="10" width="18" height="6" rx="2" fill="url(#gradLATaxi)" />
                    <rect x="9" y="7" width="6" height="3" rx="1" fill="#f59e0b" />
                    <circle cx="7" cy="17" r="2" fill="#0ea5e9" />
                    <circle cx="17" cy="17" r="2" fill="#0ea5e9" />
                  </svg>
                  Rideshare/Taxi (Convenient but Pricey)
                </h4>
                <p className="leading-relaxed mb-4">
                  Uber and Lyft work, but expect significant surge pricing and pickup chaos post-match. Designated zones help organize the madness, though waiting 30-45 minutes isn't unusual after major events.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700">
                   <p className="leading-relaxed text-sm">
                     <strong>Smart Strategy:</strong> Split the cost with friends or take the Metro away from the stadium zone before requesting a ride to save money and time.
                   </p>
                </div>
              </div>
            </section>

            {/* Driving */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  <svg className="h4-icon-svg" role="img" aria-label="Car" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLACar" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="10" width="16" height="5" rx="2" fill="url(#gradLACar)" />
                    <path d="M6 10 L9 7 H15 L18 10" fill="#6366f1" />
                    <circle cx="8" cy="16" r="2" fill="#0ea5e9" />
                    <circle cx="16" cy="16" r="2" fill="#0ea5e9" />
                  </svg>
                  Driving + Parking (Last Resort)
                </h4>
                <p className="leading-relaxed mb-4">
                  If you must drive, pre-purchase parking through the stadium's official provider. Zones (Orange, Green, Purple) open 2-4 hours pre-match.
                </p>
                <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm text-slate-700 dark:text-slate-300">
                  <li><strong>Cost:</strong> Significantly higher than Metro ($50-100+)</li>
                  <li><strong>Traffic:</strong> 405 Freeway is legendary for congestion; allow extra hours</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Transport options summary table */}
          <div className="comparison-table overflow-x-auto -mx-4 md:mx-0 mt-8">
            <table aria-label="Transport options comparison — Los Angeles" className="min-w-[720px] w-full text-sm">
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
                  <td className="p-3">Metro + Shuttle</td>
                  <td className="p-3">~$3.50 roundtrip</td>
                  <td className="p-3">60–90 mins</td>
                  <td className="p-3">Cheapest; avoids traffic</td>
                  <td className="p-3">Requires transfers</td>
                </tr>
                <tr>
                  <td className="p-3">Rideshare</td>
                  <td className="p-3">$40–80+ each way</td>
                  <td className="p-3">45–90 mins</td>
                  <td className="p-3">Direct; comfort</td>
                  <td className="p-3">Surge pricing; wait times</td>
                </tr>
                <tr>
                  <td className="p-3">Driving</td>
                  <td className="p-3">$50–100+ parking</td>
                  <td className="p-3">Variable</td>
                  <td className="p-3">Flexible schedule</td>
                  <td className="p-3">Traffic jams; expensive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="editorial-divider" />
        </article>



        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-violet">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-violet-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-violet-600 mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>West Hollywood:</strong> Central & Walkable ($$-$$$)</li>
               <li>• <strong>Santa Monica:</strong> Beach Vibes ($$$-$$$$)</li>
               <li>• <strong>Downtown LA:</strong> Transit Hub ($$-$$$)</li>
               <li>• <strong>Hollywood:</strong> First-Timers ($-$$)</li>
             </ul>
          </div>

          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLAHotel" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradLAHotel)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhoods for Every Football Fan
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Los Angeles sprawls across 1,302 square kilometers, making neighborhood choice critical. Your location determines whether you spend your trip on the beach or on the 405 Freeway.
          </p>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/cities/los-angeles-world-cup-2026.webp"
              alt="Los Angeles Neighborhood Overview"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
            />
          </div>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-violet-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "The Golden Rule of LA travel: Stay near where you plan to play. Traffic is not a myth; it's a lifestyle factor."
          </blockquote>
          
          <div className="mt-8 space-y-8">
            {/* West Hollywood */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMapPin" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradLAMapPin)" />
                  <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
                </svg>
                West Hollywood: The Central Command ($$-$$$)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why Stay Here:</strong> Centrally located between Hollywood and Beverly Hills, WeHo puts you walking distance from incredible restaurants, bars, and LA's vibrant LGBTQ+ scene. It's the Goldilocks zone—close enough to everything without being stuck in one corner of the city.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>The Vibe:</strong> Trendy, walkable, energetic. Sunset Strip nightlife meets excellent coffee shops and the city's best boutique hotels. You'll spot celebrities at Chateau Marmont and find killer Korean BBQ in adjacent Koreatown.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>World Cup Bonus:</strong> Easy Metro access via Hollywood/Western or Vermont/Sunset stations (15 minutes to Downtown, connect to C Line for SoFi). Uber to the stadium runs $25-35 without surge.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <p className="leading-relaxed">
                  <strong>Book Smart:</strong> <em>The Charlie West Hollywood</em> offers spacious suites with personality. <em>The Hollywood Roosevelt</em> (technically Hollywood, but close enough) sits steps from Walk of Fame and delivers old-school glamour at surprisingly fair rates.
                </p>
              </div>
            </div>

            {/* Santa Monica */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                   <defs>
                    <linearGradient id="gradLASun" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                  <path d="M12 2 v2 M12 20 v2 M2 12 h2 M20 12 h2 M4.9 4.9 l1.4 1.4 M17.7 17.7 l1.4 1.4 M4.9 19.1 l1.4 -1.4 M17.7 6.3 l1.4 -1.4" stroke="url(#gradLASun)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Santa Monica: Beach Town Bliss ($$$-$$$$)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why Stay Here:</strong> If you're treating the World Cup as part of a larger California adventure, Santa Monica delivers quintessential SoCal vibes. The beach, the pier, the sunshine—it's what you pictured when you booked that flight.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>The Vibe:</strong> Laid-back beachside community with excellent restaurants, Third Street Promenade shopping, and sunset views that'll dominate your Instagram. Families love it; so do couples seeking romance with waves as soundtrack.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>World Cup Reality Check:</strong> You're 45 minutes from SoFi by Metro (Expo Line to Downtown, transfer to C Line), longer by car during rush hour. Factor travel time carefully—you don't want to miss kickoff because you lingered over brunch.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <p className="leading-relaxed">
                  <strong>Book Smart:</strong> <em>Shore Hotel</em> sits across from the sand with eco-conscious amenities and modern style. <em>Casa Del Mar</em> oozes Renaissance Revival luxury for those with budgets to match.
                </p>
              </div>
            </div>

            {/* Downtown LA */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLADowntown" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="9" width="5" height="7" rx="1" fill="url(#gradLADowntown)" />
                  <rect x="11" y="6" width="5" height="10" rx="1" fill="#0ea5e9" />
                  <rect x="17" y="10" width="2" height="6" rx="1" fill="url(#gradLADowntown)" />
                </svg>
                Downtown LA: Arts, Culture & Connection ($$-$$$)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why Stay Here:</strong> Downtown puts you at the Metro hub (Union Station), near arts attractions (The Broad, MOCA, Walt Disney Concert Hall), and in the middle of LA's best public transit connections. The Arts District specifically offers warehouse-chic dining and breweries.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>The Vibe:</strong> Urban, artistic, diverse. Less touristy than Hollywood, grittier than Westside, but culturally rich. Night Market brings Filipino street food, Grand Central Market serves world cuisine, and Little Tokyo neighbors the convention center.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>World Cup Advantage:</strong> Best Metro access in the city. C Line direct from several DTLA stations to SoFi. Multiple hotel options from business-class (InterContinental) to design-forward (Freehand Los Angeles with rooftop pool).
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <p className="leading-relaxed">
                  <strong>Book Smart:</strong> <em>Downtown LA Proper</em> delivers boutique style in the historic district. Avoid Skid Row areas (east of Alameda Street) and stick to Arts District, Financial District, or near Grand Park.
                </p>
              </div>
            </div>

            {/* Hollywood */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Movie" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMovie" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="8" width="14" height="8" rx="2" fill="url(#gradLAMovie)" />
                  <circle cx="9" cy="12" r="1.5" fill="#ffffff" />
                  <circle cx="15" cy="12" r="1.5" fill="#ffffff" />
                </svg>
                Hollywood: Tourist Central with Purpose ($-$$)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why Stay Here:</strong> You came to LA, you want Hollywood Boulevard, Chinese Theatre, Watch of Fame, Griffith Observatory access. First-timers often regret skipping the classics.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>The Vibe:</strong> Touristy, yes. But also energetic, affordable (compared to beaches), and better than its reputation suggests. Hollywood & Highland area cleans up well; Hills neighborhoods offer canyon views.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>World Cup Value:</strong> Metro B Line (Red) connects directly to downtown transfers for SoFi access. Hostels exist for budget travelers; mid-range hotels cluster near Highland Avenue.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                <p className="leading-relaxed">
                  <strong>Book Smart:</strong> <em>Magic Castle Hotel</em> delivers character without breaking the bank. <em>The Hollywood Roosevelt</em> offers poolside glamour where Marilyn Monroe once sunbathed.
                </p>
              </div>
            </div>

            {/* Beverly Hills */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Crown" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLACrown" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M4 16 h16 v2 H4z" fill="#0ea5e9" />
                  <path d="M4 16 l3 -6 l5 4 l5 -4 l3 6z" fill="url(#gradLACrown)" />
                </svg>
                Beverly Hills: Luxury with Star Power ($$$$)
              </h4>
              <p className="leading-relaxed mb-3">
                <strong>Why Stay Here:</strong> You want to see where movie stars shop, dine at Michelin-starred restaurants, and possibly spot a Ferrari or three on Rodeo Drive. Beverly Hills sells a fantasy, and sometimes fantasies are worth funding.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>The Vibe:</strong> Polished, manicured, expensive. Palm tree-lined streets, luxury boutiques, old Hollywood elegance. Not walkable to much beyond its own borders, but Uber makes anywhere accessible.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>World Cup Consideration:</strong> You're paying for prestige, not proximity. Budget 30-40 minutes to SoFi by car, slightly more by Metro (no direct line; requires transfers).
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
                 <p className="leading-relaxed">
                   <strong>Book Smart:</strong> <em>Four Seasons Beverly Hills</em> justifies the splurge with impeccable service and that "I made it" feeling. Alternatively, Airbnb offers homes that sleep groups in nearby neighborhoods like Culver City or Marina del Rey for better value.
                 </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* LA Football Culture */}
        <article className="editorial-body theme-rose">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-rose-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 mb-2">Culture Check</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>El Tráfico:</strong> The fiercest rivalry in MLS</li>
               <li>• <strong>Street Scene:</strong> Pickup games on Venice Beach</li>
               <li>• <strong>Supporters:</strong> The 3252 (LAFC) & Riot Squad (Galaxy)</li>
               <li>• <strong>History:</strong> Hosting big matches since '94</li>
             </ul>
          </div>

          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Football" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLAFootball" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#e11d48" />
                  <stop offset="1" stopColor="#be123c" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="6" fill="url(#gradLAFootball)" />
              <path d="M12 6 l2 3 l-2 2 l-2 -2 z" fill="#ffffff" />
              <path d="M12 18 l2 -3 l-2 -2 l-2 2 z" fill="#ffffff" />
            </svg>
            Beyond the Pitch: What Makes LA Football Culture Special
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             From the glitz of the Galaxy to the grit of LAFC, this city doesn't just watch football—it lives it.
          </p>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/safety-guide/article mode/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World.webp"
              alt="Fans arriving at the stadium"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
            />
          </div>

          <div className="mt-6 space-y-6">
              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                    <use href="#gradLACrown" />
                    <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradLACrown)" />
                  </svg>
                  El Tráfico: The Rivalry That Defines LA Soccer
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Los Angeles isn't just hosting the World Cup—it's already living and breathing football culture year-round through one of MLS's fiercest rivalries: El Tráfico. When LA Galaxy (founded 1996, five-time MLS champions, based in suburban Carson at Dignity Health Sports Park) face Los Angeles FC (launched 2018, MLS Cup 2022 winners, downtown at Banc of California Stadium), the city splits down supporter lines.

**The Galaxy Way**: Legacy, history, "Since '96" pride. They brought David Beckham to MLS, hosted Zlatan Ibrahimović, and represent suburban family-friendly football culture. Their supporters believe in earned respect through decades of championships.

**The LAFC Difference**: Downtown energy, The 3252 supporters' section, Black Army ultras culture, and a stadium built specifically for soccer in the heart of the city. They're the scrappy upstart that won everything fast and made Galaxy fans nervous.

Visit BMO Stadium (formerly Banc of California, LAFC's home) before or after World Cup matches to understand what American soccer can be when done right. The 22,000-seat venue sits adjacent to USC campus, accessible via Expo Line Metro, and hosts some of the most passionate supporters in North American sports.`)}
               </p>
             </div>

              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="TV" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLATV" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#gradLATV)" />
                    <rect x="10" y="18" width="4" height="2" rx="1" fill="#0ea5e9" />
                  </svg>
                  Where to Watch With Locals
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Los Angeles boasts nearly 40 **LAFC-affiliated pubs** plus countless Galaxy bars, giving you authentic matchday experiences even when you're not at SoFi:

- **La Chuperia** (Lincoln Heights): LAFC stronghold with micheladas and carne asada
- **The Sunset Room** (Hacienda Heights): East LA Galaxy faithful
- **Underdogs** (Glendale): Barcelona fans converge here
- **Britannia Pub** (Santa Monica): Leeds United supporters' west-side haven
- **La Cita Bar** (Downtown): Mexican national team watch parties with full mariachi energy

During the World Cup, expect official FIFA Fan Festivals at **Exposition Park** (near Downtown, accessible via Expo Line) with big screens, food vendors, and cultural programming. Additional fan zones will dot Hollywood Park around SoFi and LA Live entertainment complex downtown.`)}
               </p>
             </div>

              <div className="callout-premium p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-2">
                  <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                  <svg className="h4-icon-svg" role="img" aria-label="Women" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradLAWoman" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#fb7185" />
                        <stop offset="1" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="8" r="3" fill="url(#gradLAWoman)" />
                    <rect x="11" y="11" width="2" height="6" rx="1" fill="#0ea5e9" />
                  </svg>
                  Angel City FC: Women's Game Rising
                </h4>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                 {renderBoldText(`Don't sleep on **Angel City FC** (NWSL), LA's women's professional team that proves the city's football passion extends beyond MLS. Founded in 2020 with ownership including actress Natalie Portman, tennis legend Serena Williams, and 13 former USWNT players, ACFC brings Banc of California Stadium alive with The Angel City Brigade supporters and matches that deserve your attention. With the USWNT scheduled to face Brazil at SoFi on April 5, 2026 (testing the World Cup grass installation), women's soccer momentum builds toward the tournament.`)}
              </p>
            </div>
           </div>
          <hr className="editorial-divider" />
        </article>

        {/* What to Do When You're Not at Matches */}
        <article className="editorial-body theme-teal">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">LA Bucket List</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Beaches:</strong> Santa Monica & Venice Boardwalk</li>
               <li>• <strong>Views:</strong> Griffith Observatory at sunset</li>
               <li>• <strong>Culture:</strong> LACMA & The Getty Center</li>
               <li>• <strong>Eats:</strong> Late-night Tacos & K-Town BBQ</li>
             </ul>
          </div>

          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Compass" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLACompass" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradLACompass)" />
              <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
            </svg>
            What to Do When You're Not at Matches
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             You came for the football, but you'll stay for the endless summer, the Hollywood magic, and the best tacos north of the border.
          </p>

          <div className="mt-6 space-y-6">
            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                </svg>
                Sun, Sand & Surf
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Santa Monica & Venice Beach**: Connected by a gorgeous bike/walk path, these beaches define California cool. Rent bikes ($10-15/day via Metro Bike Share), watch surfers at Venice Pier, people-watch on Venice Boardwalk's funky scene, and catch sunset from Santa Monica Pier's amusement park.

**Manhattan & Hermosa Beach**: South Bay beaches offer mellower vibes, better for families. Small aquariums, pedestrian-friendly downtown areas, and beach volleyball culture that's pure SoCal.

**Malibu**: Drive north on Pacific Coast Highway for dramatic coastline, celebrity homes (from a distance), and beaches that feel like undiscovered gems despite Malibu's reputation.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                  <use href="#gradLABuilding" />
                  <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradLABuilding)" />
                </svg>
                Cultural Heavy-Hitters
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Griffith Observatory**: Perched in Griffith Park, this 1935 art deco beauty offers free admission (parking $10), planetarium shows, and the best views of the Hollywood Sign and LA basin. Go at sunset, stay for city lights. Metro doesn't reach it directly; rideshare or DASH shuttle from Hollywood/Western Metro.

**The Getty Center**: Free admission (parking $20) to this architectural masterpiece in Brentwood showcasing European art, stunning gardens, and panoramic valley views. Worth a half-day minimum.

**LACMA (Los Angeles County Museum of Art)**: Massive collection spanning ancient to contemporary art. The Urban Light installation (those iconic vintage streetlamps) anchors Miracle Mile's Museum Row. Walking distance from Fairfax District's Farmers Market.

**The Broad** (Downtown): Free contemporary art museum (reservations recommended) featuring Kusama's Infinity Mirrors and works by Basquiat, Warhol, and Koons. Walkable from Grand Park and Disney Concert Hall.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Map" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMap" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <path d="M4 6 l6 -2 l6 2 l4 -2 v14 l-6 2 l-6 -2 l-4 2z" fill="url(#gradLAMap)" />
                </svg>
                Neighborhood Explorations
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Los Feliz & Silver Lake**: Hipster havens northeast of Hollywood with vintage shops, excellent brunch spots (Pine & Crane for Taiwanese, All Day Baby for new American), and Barnsdall Art Park's Frank Lloyd Wright Hollyhock House.

**Koreatown**: Dense, 24-hour energy with insane Korean BBQ (open late for post-match gorging), karaoke bars, spas, and The Line Hotel's rooftop for cocktails with views.

**Arts District** (Downtown): Warehouse-turned-gallery neighborhood with street art murals, Bestia (possibly LA's best Italian), Angel City Brewery, and Hauser & Wirth contemporary art gallery.

**Hollywood Hills Hikes**: Runyon Canyon (crowded but convenient), Griffith Park trails (to the Observatory or beyond), and Bronson Canyon (where the Batcave was filmed) offer workout-with-views experiences.`)}
               </p>
             </div>

            <div className="attraction-card-premium">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Restaurant" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLARest" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="6" y="7" width="3" height="10" rx="1" fill="#f59e0b" />
                  <rect x="11" y="7" width="7" height="10" rx="2" fill="url(#gradLARest)" />
                </svg>
                Food Scenes You Can't Miss
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`Los Angeles is arguably America's best food city, rivaling New York with deeper Mexican, Korean, Japanese, and Thai options:

**Tacos**: LA's taco trucks operate 24/7. Leo's Tacos (Hollywood), Tacos El Gordo (Chula Vista with LA outpost), and literally hundreds of neighborhood spots serve authenticity.

**Korean BBQ**: Kang Ho-Dong Baekjeong or Park's BBQ in Koreatown—order beef bulgogi, pork belly, and banchan sides. Go with a group, go hungry.

**Japanese Ramen**: Tsujita LA (Sawtelle), Silverlake Ramen, Daikokuya (Little Tokyo)—lines are common, worth it.

**High-End Splurge**: Providence (Michelin two-star seafood), Bestia (Arts District Italian), or République (French bistro in Hancock Park).

**Grand Central Market** (Downtown): Historic food hall with everything from Eggslut breakfast sandwiches to Sarita's Pupuseria to G&B Coffee's minimalist espresso.`)}
               </p>
             </div>
           </div>
           <hr className="editorial-divider" />
         </article>

        {/* Practical Travel Tips */}
        <article className="editorial-body theme-sky">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Travel Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Weather:</strong> Perfect 80°F days, cool nights</li>
               <li>• <strong>Safety:</strong> Stick to tourist zones; use common sense</li>
               <li>• <strong>Connectivity:</strong> US SIM cards at LAX; WiFi widely available</li>
               <li>• <strong>Money:</strong> Card is king; tipping 18-20% is standard</li>
             </ul>
          </div>

          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
              <use href="#gradLASun" />
              <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradLASun)" />
              <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Travel Tips for World Cup Visitors
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating the sprawl requires strategy. Here's how to survive the 405, the June Gloom, and the sheer scale of the city.
          </p>

          <div className="mt-6 space-y-6">
            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Sun cloud" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <circle cx="9" cy="11" r="3" fill="#cbd5e1" />
                  <circle cx="12" cy="12" r="4" fill="url(#gradLASun)" />
                </svg>
                Weather & What to Pack
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**June in LA**: Near-perfect. Daytime highs average 26-27°C (79-81°F), dropping to 15-17°C (59-63°F) at night. Virtually zero rain (June averages just 3mm total precipitation). Ten hours of sunshine daily. Coastal areas might experience "June Gloom"—morning fog that burns off by noon.

**July heats up** to 28-30°C (82-86°F) days, 18-20°C (64-68°F) nights. Still dry, still sunny, slightly warmer for later matches.

**Pack**: Sunscreen (SPF 50+), sunglasses, hat, light layers for evening, comfortable walking shoes (you'll log serious steps), team jerseys, and that camera. Evening matches under SoFi's canopy with ocean breezes can feel surprisingly cool—throw a light jacket in your bag.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAShield" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradLAShield)" />
                  <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Safety & Street Smarts
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`LA is generally safe for tourists in main areas, but street smarts apply:

- **Avoid**: Skid Row (Downtown east of Alameda), walking alone late at night in deserted areas near stadiums post-match
- **Watch**: Belongings on Metro (pickpocketing happens); car break-ins if you drive (don't leave visible valuables)
- **Stay aware**: In Hollywood, some blocks feel sketchy at night beyond the main tourist drag
- **Use common sense**: Groups are safer; well-lit areas are better; Uber/Lyft after late matches beats walking unknown neighborhoods

Popular tourist neighborhoods (Santa Monica, West Hollywood, Beverly Hills, Hollywood tourist zone) are well-patrolled and designed for visitors.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAMoney" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradLAMoney)" />
                  <circle cx="12" cy="12" r="3" fill="#ffffff" />
                  <path d="M12 10 v4 M10.5 11.5 h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Money Matters
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Credit cards work everywhere; most places don't accept cash-only. ATMs abound. Tipping culture is strong: 18-20% restaurants, $1-2 per drink at bars, round up for rideshares.

Costs add up fast in LA. Budget $15-25 for casual meals, $40-80 for mid-range dinners, $25-50 for Uber to SoFi from beach areas. Metro saves significant money—embrace public transit.`}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Passport" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAPassport" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="6" y="5" width="12" height="14" rx="2" fill="url(#gradLAPassport)" />
                  <circle cx="12" cy="11" r="3" fill="#ffffff" />
                </svg>
                Visa Requirements
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`International visitors (except Canadian and some visa waiver countries): Apply for **B-2 tourist visa** well in advance. Processing can take weeks during World Cup surge. Visa waiver program (ESTA) applies to many European, Asian, and Latin American countries—check eligibility at travel.state.gov.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Smartphone" viewBox="0 0 24 24">
                  <use href="#gradLASmart" />
                  <rect x="8" y="4" width="8" height="16" rx="2" fill="url(#gradLASmart)" />
                </svg>
                Phone & Connectivity
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {`Rent a US SIM at LAX airport convenience stores, or use providers like Airalo for e-SIMs. T-Mobile and AT&T dominate; Verizon works well too. Public WiFi exists at Metro stations, Starbucks, and most public spaces.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* World Cup Booking Strategy */}
        <article className="editorial-body theme-purple">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-purple-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-purple-600 mb-2">Booking Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Hotels:</strong> Book 12+ months out if possible</li>
               <li>• <strong>Flights:</strong> Look at BUR or LGB airports for easier access</li>
               <li>• <strong>Location:</strong> Stay near your primary activity zone</li>
               <li>• <strong>Insurance:</strong> Essential for big-ticket trips</li>
             </ul>
          </div>

          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Calendar check" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradLACalCheck" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradLACalCheck)" />
              <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
              <path d="M9 13 l2 2 l4 -4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Your World Cup Booking Strategy
          </h3>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             The early bird gets the room rate. Waiting until 2026 to book your stay is a rookie mistake.
          </p>

          <div className="mt-6 space-y-6">
            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Clock" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAClock" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradLAClock)" />
                  <path d="M12 12 l0 -4 M12 12 l3 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                When to Book
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Now**. Seriously. Los Angeles hotel inventory gets crushed during major events, and the World Cup dwarfs typical demand. June 2026 accommodation prices will soar as dates approach.

**Flight Strategy**: LAX is America's third-busiest airport with direct international connections from everywhere. Book 6-9 months out for best fares. Consider flying into Burbank (BUR) for Hollywood-area stays or Long Beach (LGB) for South Bay access—both smaller airports with less chaos.

**Hotel Bundles**: Many travel booking platforms offer flight+hotel packages that save 10-20% versus separate bookings. Look for deals that include Metro passes or airport transfers.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Search" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLASearch" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="11" cy="11" r="5" fill="url(#gradLASearch)" />
                  <rect x="15" y="15" width="5" height="2" rx="1" transform="rotate(45 17.5 16)" fill="#0ea5e9" />
                </svg>
                Where to Hunt Deals
              </h4>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`**Comparison Sites**: Start with the usual suspects (Booking.com, Expedia, Hotels.com) but cross-reference prices directly on hotel websites—sometimes they beat third-party rates or include perks like breakfast or parking.

**Alternative Accommodation**: Airbnb and VRBO offer apartments and homes, especially valuable for groups splitting costs. Filter by neighborhoods: West Hollywood, Culver City, and neighborhoods near Metro stations for convenience.

**Loyalty Programs**: If you're already deep in hotel points ecosystems (Marriott, Hilton, IHG), LA has robust properties in every loyalty chain. Redeem those points for championship matches.`)}
              </p>
            </div>

            <div className="callout-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-premium-md flex items-center justify-center">
                  <i className="ri-medal-line text-[#01b47d]" aria-hidden="true"></i>
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">The Affiliate Advantage</h5>
              </div>
              <p className="text-premium-body whitespace-pre-line">
                {renderBoldText(`Smart travelers use price comparison tools that scan hundreds of booking sites simultaneously. You're already planning an expensive trip—why not save hundreds on accommodation by letting technology find the best rates? Many booking platforms offer:

- **Price match guarantees**: Find it cheaper elsewhere? They'll match or refund the difference
- **Member-only discounts**: Sign up for booking sites' free loyalty programs for instant 10% off
- **Bundled savings**: Flight+hotel packages, match ticket + accommodation deals (when FIFA releases official packages)
- **Flexible cancellation**: World Cup plans change—book now with free cancellation options to lock rates

Check trusted booking partners that specialize in major sporting events—they often negotiate group rates and exclusive access to sold-out properties.`)}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Your Los Angeles World Cup Story Starts Here */}
        <article className="editorial-body theme-gold">
          <h3 className="editorial-h3 font-display font-bold text-3xl animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
              <use href="#gradLACrown" />
              <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradLACrown)" />
            </svg>
            Your Los Angeles World Cup Story Starts Here
          </h3>
          <div className="unforgettable-conclusion p-6 sm:p-8">
            <div className="conclusion-content">
              <div className="conclusion-icon">
                <svg className="h4-icon-svg" role="img" aria-label="Flag" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradLAFlag" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <path d="M5 5 v14" stroke="#0ea5e9" strokeWidth="2" />
                  <path d="M7 6 h10 l-2 3 l2 3 h-10z" fill="url(#gradLAFlag)" />
                </svg>
              </div>
              <div className="conclusion-text space-y-4">
                <p className="text-premium-body">
                Twenty years ago, the Rose Bowl hosted the last World Cup final on American soil. Now it's SoFi's turn to write history, starting with the U.S. opening match that'll send seismic hope through every American football fan. Eight matches. Thirty-nine days of festival atmosphere. A city that's hosted Olympics, Super Bowls, and Beyoncé residencies—finally getting its moment on soccer's biggest stage.
                </p>
                <p className="text-premium-body">
              Los Angeles doesn't do anything small. The beaches stretch forever, the food scene never sleeps, the culture mixes in ways you won't find anywhere else. This isn't just a World Cup host city; it's the city where dreams get chased under palm trees and championship runs begin with that first nervous kick on June 12.
                </p>
                <p className="text-premium-body">
              The Metro's running. The stadiums are ready. The tacos are waiting. And somewhere in West Hollywood, Silver Lake, or a beach parking lot in Santa Monica, fans from 48 nations are about to discover what locals already know: Los Angeles is the world's city, and in summer 2026, the world's game comes home.
                </p>
              </div>
            </div>
            <div className="conclusion-highlight mt-4">
              <p className="text-premium-body font-semibold text-center">
                <strong>Book smart. Travel Metro. Arrive early. And when that first whistle blows at SoFi Stadium, you'll know exactly why LA was built for this moment.</strong>
              </p>
            </div>
            <div className="cta-content mt-4">
              <div className="cta-icon">
                <svg className="h4-icon-svg" role="img" aria-label="Lightbulb" viewBox="0 0 24 24">
                  <use href="#gradLASun" />
                  <path d="M12 4 a6 6 0 0 1 6 6 c0 2.5 -1.5 4 -3 5 v2 h-6 v-2 c-1.5 -1 -3 -2.5 -3 -5 a6 6 0 0 1 6 -6z" fill="url(#gradLASun)" />
                  <rect x="10" y="17" width="4" height="2" rx="1" fill="#ffffff" />
                </svg>
              </div>
              <p className="text-premium-body italic flex items-start gap-2">
                <span className="text-premium-body"><strong>Pro Travel Tip:</strong> Download the LA Metro Trip Planner app, load your TAP card before arrival, and screenshot your FIFA mobile tickets—phone batteries die at the worst moments. See you at kickoff.</span>
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

      </main>

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
          {/* Background decorative elements */}
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
            {/* Recommendation 1: San Francisco (California Neighbor) */}
            <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
              <OptimizedImage 
                src="/images/cities/san-francisco-world-cup-2026.webp" 
                alt="San Francisco World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">California Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">San Francisco</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Levi's Stadium guide and Bay Area tech & wine culture.</p>
              </div>
            </Link>

            {/* Recommendation 2: Seattle (West Coast Hub) */}
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
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">PNW Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Seattle</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Lumen Field guide and Pacific Northwest adventures.</p>
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
                <a href={`https://twitter.com/intent/tweet?text=Los%20Angeles%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
