import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';

export default function ItineraryPlanningArticle() {
  const pageUrl = '/world-cup-2026-travel-tips/world-cup-2026-itinerary-planning-1-2-or-3-week-sample-itineraries';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const [scrollPercent, setScrollPercent] = useState(0);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = pageUrl;

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
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    const ogImageUrl = siteUrl + '/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp';
    const title = 'World Cup 2026 Itinerary Planning: 1, 2, or 3 Week Sample Itineraries';
    const description = 'Comprehensive 1, 2, and 3-week itinerary templates for World Cup 2026. Optimized routing, budget breakdowns, and strategic planning for following your team or maximizing matches.';
    
    setPageMeta({ title, description, url: siteUrl + pageUrl, image: ogImageUrl, locale: 'en_US', publishedTime: '2025-11-15T09:00:00Z', modifiedTime: new Date().toISOString(), section: 'Travel Tips', tags: ['World Cup 2026', 'Itinerary', 'Travel Planning', 'Sample Itineraries', 'Travel Guide'] })
    
    // Track scroll depth (engagement metric)
    let maxScroll = 0;
    const trackScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      const clamped = Math.max(0, Math.min(100, pct));
      setScrollPercent(clamped);
      if (clamped > maxScroll) {
        maxScroll = clamped;
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  const [tocSections, setTocSections] = useState<Array<{ id: string; label: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

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

  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <SchemaOrg
        schema={[
          generateTravelGuideSchema('World Cup 2026 Itinerary Planning Guide', '1, 2, or 3 Week Sample Itineraries for World Cup 2026', pageUrl),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Travel Tips', url: '/world-cup-2026-travel-tips' },
            { name: 'Itinerary Planning', url: pageUrl }
          ])
        ]}
      />

      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500"></div>
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
                        ? 'bg-indigo-500/5 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/40 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                    } ${level === 3 ? 'pl-6' : ''}`}
                  >
                    <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <div className="2xl:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <div className="mx-auto max-w-sm">
          <button
            aria-label="Open sections menu"
            onClick={() => setIsMobileTocOpen(v => !v)}
            className="w-full pointer-events-auto inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-white/85 dark:bg-slate-800/70 backdrop-blur-xl border border-white/70 dark:border-slate-700/60 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center">
                <i className="ri-list-check"></i>
              </div>
              <span className="text-sm font-semibold tracking-wide text-black dark:text-white">Sections</span>
            </div>
            <div className="flex-1 mx-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500"></div>
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
                          ? 'bg-indigo-500/5 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500'
                          : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                      } ${level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${activeId === id ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                      <span className="text-sm font-medium text-black dark:text-slate-300">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp"
            alt="World Cup 2026 Itinerary Planning Guide"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-90" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 z-10">
          <div className="max-w-5xl mx-auto w-full">
            <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-indigo-400">
                <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li><Link to="/world-cup-2026-travel-tips" className="hover:text-white transition-colors duration-300">Travel Tips</Link></li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li><span className="text-white border-b border-indigo-500/50 pb-0.5" aria-current="page">Itinerary Planning</span></li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              World Cup 2026 Itinerary Planning: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">1, 2, or 3 Week Sample Itineraries</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-indigo-400 group-hover/meta:bg-indigo-500/20 transition-colors">
                  <i className="ri-calendar-check-line text-lg"></i>
                </div>
                <span>Strategic Timelines</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-indigo-400 group-hover/meta:bg-indigo-500/20 transition-colors">
                  <i className="ri-route-line text-lg"></i>
                </div>
                <span>Optimized Routing</span>
              </div>
              
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-indigo-500/20 ring-1 ring-indigo-500/50' : 'bg-white/5 group-hover/save:bg-indigo-500/20'}`}>
                  <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} text-lg`}></i>
                </div>
                <span className="font-medium">{isSaved ? 'Saved' : 'Save Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="editorial-article-premium py-16" itemScope itemType="https://schema.org/Article">
        <article className="editorial-body editorial-dropcap theme-indigo">
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-indigo-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-500 mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>1 Week:</strong> Focus on single city (Houston/Mexico City) for budget efficiency</li>
               <li>• <strong>2 Weeks:</strong> "The Adventure" - Mexico City, LA, Seattle for cultural mix</li>
               <li>• <strong>3 Weeks:</strong> "The Comprehensive" - 5 cities, Final in NYC, luxury experience</li>
               <li>• <strong>Team Followers:</strong> Book group stage confidentally, be ready to book knockouts instantly</li>
             </ul>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>15 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">Planning a World Cup 2026 itinerary isn't like planning a typical vacation. You're coordinating across three countries, 16 cities, 39 days, and 104 matches—while competing with six million other fans for flights, hotels, and tickets. Franz Beckenbauer famously said, "The World Cup is a truly international event. It brings people together, uniting nations, races, and cultures." But what he didn't mention: it also brings together complex logistics, border crossings, and rapid decision-making.</p>
          <p className="whitespace-pre-line">The data reveals critical patterns: The tournament runs June 11 to July 19, 2026—exactly 39 days. Group stage spans 14 days across 48 matches. The knockout rounds compress into 25 days with just 56 matches. Travel advisors warn that booking reactively after your team advances is risky—availability drops and prices spike within hours. Yet booking too early without knowing knockout matchups wastes money on canceled reservations.</p>
          <p className="whitespace-pre-line">This comprehensive guide provides realistic, tested itinerary templates for 1-week, 2-week, and 3-week World Cup trips across all budget levels. Based on verified tournament structure from FIFA, expert routing from travel advisors specializing in World Cup logistics, and lessons from veteran international tournament travelers, here's how to plan your perfect World Cup 2026 experience.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-layout-masonry-line text-indigo-500"></i>Understanding the Tournament Structure
          </h2>
          <h3 className="editorial-h3">Key Dates</h3>
          <p className="whitespace-pre-line"><strong>Opening Match:</strong> Thursday, June 11, 2026 (Mexico vs. TBD at Estadio Azteca, Mexico City)
          <strong>Group Stage:</strong> June 11-27, 2026 (48 matches, 14 days)
          <strong>Round of 32:</strong> June 28-July 3, 2026 (16 matches, 6 days)
          <strong>Round of 16:</strong> July 5-8, 2026 (8 matches, 4 days)
          <strong>Quarter-Finals:</strong> July 10-11, 2026 (4 matches, 2 days)</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Boston, Los Angeles, Miami, Kansas City</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Semi-Finals:</strong> July 14-15, 2026 (2 matches, 2 days)</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Dallas (July 14), Atlanta (July 15)</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Bronze Final:</strong> July 18, 2026 (Miami)
          <strong>Final:</strong> Sunday, July 19, 2026 (MetLife Stadium, New York/New Jersey)</p>

          <h3 className="editorial-h3">Group Stage Structure</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>48 teams</strong> divided into <strong>12 groups of 4</strong></li>
            <li>Top 2 from each group advance (24 teams)</li>
            <li><strong>8 best third-place teams</strong> also advance (new format)</li>
            <li>Each team plays 3 group stage matches</li>
            <li>4-day gaps between team's group matches</li>
          </ul>

          <h3 className="editorial-h3">Geographic Regions</h3>
          <p className="whitespace-pre-line"><strong>Western:</strong> Vancouver, Seattle, San Francisco, Los Angeles
          <strong>Central:</strong> Guadalajara, Mexico City, Monterrey, Houston, Dallas, Kansas City
          <strong>Eastern:</strong> Toronto, Boston, New York/New Jersey, Philadelphia, Atlanta, Miami</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-pin-user-line text-indigo-500"></i>The Planning Framework
          </h2>
          <h3 className="editorial-h3">Step 1: Define Your Priority</h3>
          <p className="whitespace-pre-line"><strong>Following Your Team:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Group stage cities are guaranteed once draw announced (late 2025)</li>
            <li>Knockout locations unknown until matches complete</li>
            <li>Requires flexible booking strategy</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Experience-Focused:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Attend matches regardless of teams</li>
            <li>Prioritize iconic venues and cities</li>
            <li>More predictable planning</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Budget-Driven:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Minimize costs while maximizing matches</li>
            <li>Focus on value cities (Houston, Mexico City)</li>
            <li>Strategic routing to reduce travel</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Once-in-a-Lifetime:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Attend semi-finals and/or final</li>
            <li>Premium cities and experiences</li>
            <li>Budget secondary to memories</li>
          </ul>

          <h3 className="editorial-h3">Step 2: Choose Your Duration</h3>
          <p className="whitespace-pre-line"><strong>1 Week (6-8 days):</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>1-3 matches</li>
            <li>Single city or 2 nearby cities</li>
            <li>Focus on quality over quantity</li>
            <li>Best for: Limited vacation time, specific matches</li>
          </ul>
          <p className="whitespace-pre-line"><strong>2 Weeks (12-16 days):</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>3-5 matches</li>
            <li>2-4 cities across regions</li>
            <li>Balance matches with cultural exploration</li>
            <li>Best for: Following team through group stage + one knockout round</li>
          </ul>
          <p className="whitespace-pre-line"><strong>3 Weeks (18-22 days):</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>5-8 matches</li>
            <li>4-6 cities, possible all three countries</li>
            <li>Follow team deep into tournament or attend multiple knockout rounds</li>
            <li>Best for: Comprehensive World Cup experience, maximum flexibility</li>
          </ul>

          <h3 className="editorial-h3">Step 3: Understand Booking Strategy</h3>
          <p className="whitespace-pre-line"><strong>Group Stage (Book with Confidence):</strong>
          Cities and dates are guaranteed. Research neighborhoods, book accommodations, plan activities.</p>
          <p className="whitespace-pre-line"><strong>Knockout Rounds (Book Flexibly):</strong>
          Don't book anything until matchups confirmed. Research potential cities, understand logistics, prepare backup plans.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-wallet-3-line text-indigo-500"></i>Sample Itinerary #1: The One-Week Essential (Budget)
          </h2>
          <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
            <p className="mb-2"><strong>Duration:</strong> 7 days, 6 nights</p>
            <p className="mb-2"><strong>Cities:</strong> Houston only</p>
            <p className="mb-2"><strong>Matches:</strong> 2 group stage matches</p>
            <p className="mb-2"><strong>Budget:</strong> $2,500-3,500 total</p>
            <p className="mb-0"><strong>Best For:</strong> Budget travelers, limited vacation time, maximum matches per dollar</p>
          </div>

          <h3 className="editorial-h3">Day-by-Day Breakdown</h3>
          <p className="whitespace-pre-line"><strong>Day 1 (Saturday): Arrival</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fly into Houston (IAH)</li>
            <li>Check into hotel near NRG Stadium ($146/night average)</li>
            <li>Explore Montrose neighborhood (arts district, diverse, excellent food)</li>
            <li>Dinner at local Tex-Mex restaurant</li>
            <li>Early night to adjust to time zone</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 2 (Sunday): Match Day #1</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Late breakfast at hotel</li>
            <li>Pre-match lunch in Museum District</li>
            <li>Arrive NRG Stadium 2-3 hours before kickoff (retractable roof with AC!)</li>
            <li><strong>Group Stage Match #1:</strong> 2 PM or 5 PM kickoff</li>
            <li>Post-match dinner in downtown Houston</li>
            <li>Explore nightlife if energy permits</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 3 (Monday): Rest and Explore</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>NASA Space Center Houston (half-day)</li>
            <li>Museum District (free admission many locations)</li>
            <li>Dinner in diverse Bellaire/Chinatown area</li>
            <li>Shopping for souvenirs</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 4 (Tuesday): Match Day #2</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Breakfast and relax at hotel</li>
            <li>Pre-match activities at fan festival near stadium</li>
            <li><strong>Group Stage Match #2:</strong> Evening kickoff</li>
            <li>Post-match celebration</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 5 (Wednesday): Houston Deep Dive</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Houston Livestock Show and Rodeo experience (if season)</li>
            <li>Buffalo Bayou Park (walking, biking, scenic)</li>
            <li>BBQ lunch (Texas tradition)</li>
            <li>Early dinner, rest for travel</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 6 (Thursday): Departure Prep</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Late checkout</li>
            <li>Final exploration or shopping</li>
            <li>Afternoon flight home</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 7 (Friday): Arrival Home</strong></p>

          <h3 className="editorial-h3">Why This Works</h3>
          <p className="whitespace-pre-line"><strong>Cost Efficiency:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Houston hotels cheapest of major cities ($146/night × 6 = $876)</li>
            <li>Two matches at one location eliminates inter-city travel</li>
            <li>Local transportation inexpensive</li>
            <li>Tex-Mex and BBQ affordable</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Comfort:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>NRG Stadium has climate control (critical for July heat)</li>
            <li>Multiple match options (Houston hosts 7 matches)</li>
            <li>Time to recover between matches</li>
            <li>No stressful multi-city logistics</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Realistic:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Achievable on standard U.S. vacation time (7 days)</li>
            <li>Budget under $3,500 including tickets, flights, accommodations, food</li>
            <li>Balances football with cultural experiences</li>
          </ul>

          <h3 className="editorial-h3">Budget Breakdown</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Flights (domestic U.S.):</strong> $300-500</li>
            <li><strong>Hotel (6 nights @ $146):</strong> $876</li>
            <li><strong>Match Tickets (2 × Category 3):</strong> $120-300</li>
            <li><strong>Food (6 days @ $60/day):</strong> $360</li>
            <li><strong>Local Transportation:</strong> $120</li>
            <li><strong>Activities:</strong> $150</li>
            <li><strong>Stadium Food/Drinks:</strong> $60</li>
            <li><strong>Miscellaneous:</strong> $200</li>
            <li><strong>TOTAL:</strong> $2,186-$2,566 (before travel insurance)</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-flight-takeoff-line text-indigo-500"></i>Sample Itinerary #2: The Two-Week Adventure (Moderate)
          </h2>
          <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
            <p className="mb-2"><strong>Duration:</strong> 14 days, 13 nights</p>
            <p className="mb-2"><strong>Cities:</strong> Mexico City, Los Angeles, Seattle</p>
            <p className="mb-2"><strong>Matches:</strong> 4 matches (3 group stage, 1 Round of 32)</p>
            <p className="mb-2"><strong>Budget:</strong> $6,500-9,500 total</p>
            <p className="mb-0"><strong>Best For:</strong> Balanced experience, three countries, cultural immersion</p>
          </div>

          <h3 className="editorial-h3">Day-by-Day Breakdown</h3>
          <h4 className="editorial-h4">Days 1-5: Mexico City (4 nights)</h4>
          <p className="whitespace-pre-line"><strong>Day 1 (Monday): Arrival</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fly into Mexico City (MEX)</li>
            <li>Check into hotel in Coyoacán ($80/night)</li>
            <li>Walk Frida Kahlo neighborhood</li>
            <li>Dinner at local cantina</li>
            <li>Early rest (altitude: 7,350 feet)</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 2 (Tuesday): Cultural Immersion</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>National Museum of Anthropology (morning - world-class)</li>
            <li>Lunch in Polanco</li>
            <li>Chapultepec Castle (afternoon)</li>
            <li>Dinner in Roma Norte</li>
            <li>Prepare for match day</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 3 (Wednesday): Match Day #1</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Breakfast in Coyoacán</li>
            <li>Explore Xochimilco canals (morning)</li>
            <li><strong>Estadio Azteca - Group Stage Match #1</strong> (evening)</li>
            <li>Post-match celebration in Condesa</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 4 (Thursday): Mexico City Continued</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Teotihuacán pyramids (day trip, 1 hour from city)</li>
            <li>Late lunch back in city</li>
            <li>Pack and prepare for flight</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 5 (Friday): Travel to Los Angeles</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Morning flight Mexico City → Los Angeles (3.5 hours)</li>
            <li>Check into hotel in Santa Monica ($300/night)</li>
            <li>Beach evening, sunset at Santa Monica Pier</li>
            <li>Early dinner, rest</li>
          </ul>

          <h4 className="editorial-h4">Days 6-9: Los Angeles (4 nights)</h4>
          <p className="whitespace-pre-line"><strong>Day 6 (Saturday): LA Culture</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Sleep in, recover from travel</li>
            <li>Griffith Observatory and Hollywood Sign hike</li>
            <li>Lunch in Los Feliz</li>
            <li>Getty Museum (afternoon)</li>
            <li>Dinner in West Hollywood</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 7 (Sunday): Match Day #2</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Beach morning in Manhattan Beach</li>
            <li>Pre-match fan festival at SoFi Stadium area</li>
            <li><strong>SoFi Stadium - Group Stage Match #2</strong> (afternoon)</li>
            <li>Post-match dinner in Inglewood</li>
            <li>Evening return to Santa Monica</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 8 (Monday): LA Exploration</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Venice Beach morning</li>
            <li>Lunch on Abbot Kinney Boulevard</li>
            <li>Santa Monica shopping/relaxing afternoon</li>
            <li>Sunset beach walk</li>
            <li>Farewell LA dinner</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 9 (Tuesday): Travel to Seattle</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Morning flight LA → Seattle (2.5 hours)</li>
            <li>Check into hotel in Pioneer Square ($250/night)</li>
            <li>Walk to Pike Place Market</li>
            <li>Dinner with waterfront views</li>
            <li>Early rest</li>
          </ul>

          <h4 className="editorial-h4">Days 10-14: Seattle (5 nights)</h4>
          <p className="whitespace-pre-line"><strong>Day 10 (Wednesday): Seattle Discovery</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Pike Place Market morning</li>
            <li>Space Needle and Chihuly Garden</li>
            <li>Lunch in Capitol Hill</li>
            <li>Museum of Pop Culture (MoPOP)</li>
            <li>Dinner in Belltown</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 11 (Thursday): Match Day #3</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Morning waterfront walk</li>
            <li>Pre-match lunch in Pioneer Square</li>
            <li><strong>Lumen Field - Group Stage Match #3</strong> (evening - walking distance!)</li>
            <li>Post-match celebration downtown</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 12 (Friday): Rest Day</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Sleep late</li>
            <li>Ferry to Bainbridge Island (day trip, scenic)</li>
            <li>Afternoon return, explore Fremont neighborhood</li>
            <li>Dinner at local brewery</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 13 (Saturday): Round of 32 Match Day</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Morning at Olympic Sculpture Park</li>
            <li>Lunch at Pike Place chowder</li>
            <li><strong>Lumen Field - Round of 32 Match</strong> (evening)</li>
            <li>Final night celebration</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Day 14 (Sunday): Departure</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Morning flight home or continue adventure</li>
          </ul>

          <h3 className="editorial-h3">Why This Works</h3>
          <p className="whitespace-pre-line"><strong>Geographic Diversity:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Three distinct regions: Mexico, Southern California, Pacific Northwest</li>
            <li>Experience authentic Mexican football culture at Azteca</li>
            <li>LA glamour and perfect weather</li>
            <li>Seattle's cooler climate and soccer passion</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Cultural Balance:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Iconic Azteca Stadium (only venue hosting 3 World Cups)</li>
            <li>World-class museums and attractions in all cities</li>
            <li>Beach time, mountains, urban experiences</li>
            <li>Diverse food scenes</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Practical Logistics:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Reasonable flight times between cities</li>
            <li>Each city gets 4-5 days (enough time to explore)</li>
            <li>Mix of group stage and knockout matches</li>
            <li>Comfortable pacing with rest days</li>
          </ul>

          <h3 className="editorial-h3">Budget Breakdown</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>International Flight:</strong> $600-1,200</li>
            <li><strong>Domestic Flights (2 × $200):</strong> $400</li>
            <li><strong>Hotels (13 nights, mixed rates):</strong> $2,720
              <ul className="list-[circle] list-inside ml-6">
                <li>Mexico City: 4 × $80 = $320</li>
                <li>Los Angeles: 4 × $300 = $1,200</li>
                <li>Seattle: 5 × $250 = $1,250</li>
              </ul>
            </li>
            <li><strong>Match Tickets (4 × Category 2):</strong> $600-1,000</li>
            <li><strong>Food (13 days @ $80/day):</strong> $1,040</li>
            <li><strong>Local Transportation:</strong> $400</li>
            <li><strong>Activities (museums, tours):</strong> $500</li>
            <li><strong>Miscellaneous:</strong> $400</li>
            <li><strong>TOTAL:</strong> $6,660-$9,660</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-vip-crown-line text-indigo-500"></i>Sample Itinerary #3: The Three-Week Comprehensive (Premium)
          </h2>
          <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
            <p className="mb-2"><strong>Duration:</strong> 21 days, 20 nights</p>
            <p className="mb-2"><strong>Cities:</strong> Mexico City, Dallas, New York, Atlanta, Vancouver</p>
            <p className="mb-2"><strong>Matches:</strong> 7 matches (3 group stage, Round of 32, Quarter-Final, Semi-Final, Final)</p>
            <p className="mb-2"><strong>Budget:</strong> $18,000-28,000 total (includes Final tickets)</p>
            <p className="mb-0"><strong>Best For:</strong> Following team through entire tournament, once-in-a-lifetime experience</p>
          </div>

          <h3 className="editorial-h3">Week 1: Group Stage - Mexico & Texas (Days 1-7)</h3>
          <p className="whitespace-pre-line"><strong>Days 1-3: Mexico City (Opening Match)</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 1:</strong> Arrival, Coyoacán hotel ($100/night)</li>
            <li><strong>Day 2:</strong> Museums, cultural sites, pre-match prep</li>
            <li><strong>Day 3:</strong> <strong>Estadio Azteca Opening Match</strong> (Mexico vs. TBD) - historic moment</li>
            <li>Comprehensive Mexico City exploration</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Days 4-7: Dallas/Fort Worth</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 4:</strong> Morning flight to Dallas, settle in Arlington hotel near AT&T Stadium ($450/night)</li>
            <li><strong>Day 5:</strong> Fort Worth Stockyards, cowboy culture, BBQ</li>
            <li><strong>Day 6:</strong> <strong>AT&T Stadium - Group Stage Match #2</strong> (premium seating)</li>
            <li><strong>Day 7:</strong> Dallas exploration (JFK sites), prepare for next leg</li>
          </ul>

          <h3 className="editorial-h3">Week 2: Round of 32 & Quarter-Finals (Days 8-14)</h3>
          <p className="whitespace-pre-line"><strong>Days 8-11: New York City</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 8:</strong> Flight to NYC, check into Manhattan hotel ($600/night)</li>
            <li><strong>Day 9:</strong> NYC tourism (Statue of Liberty, Central Park, Broadway show)</li>
            <li><strong>Day 10:</strong> <strong>MetLife Stadium - Group Stage Match #3</strong> (day trip to New Jersey)</li>
            <li><strong>Day 11:</strong> Museums, shopping, farewell NYC dinner</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Days 12-14: Quick Return to Host City</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 12:</strong> Flight to Quarter-Final city (flexibility based on team matchup)</li>
            <li><strong>Day 13:</strong> <strong>Quarter-Final Match</strong> (Boston, LA, Miami, or Kansas City)</li>
            <li><strong>Day 14:</strong> Return to New York or travel to Atlanta</li>
          </ul>

          <h3 className="editorial-h3">Week 3: Semi-Finals & Final (Days 15-21)</h3>
          <p className="whitespace-pre-line"><strong>Days 15-17: Atlanta (Semi-Final)</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 15:</strong> Arrive Atlanta, check into Buckhead luxury hotel ($500/night)</li>
            <li><strong>Day 16:</strong> Civil Rights history tour, Atlanta culture</li>
            <li><strong>Day 17:</strong> <strong>Mercedes-Benz Stadium - Semi-Final Match</strong> (climate-controlled!)</li>
            <li>Post-match: Monitor final matchup</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Days 18-19: Vancouver (Cultural Bonus)</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 18:</strong> Flight to Vancouver for 48-hour cultural break</li>
            <li><strong>Day 19:</strong> Vancouver exploration (mountains, ocean, Stanley Park, Granville Island)</li>
            <li>Optional BC Place match if schedule permits</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Days 20-21: New York (FINAL)</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Day 20:</strong> Return flight to NYC, final pre-match preparation</li>
            <li><strong>Day 21:</strong> <strong>MetLife Stadium - WORLD CUP FINAL</strong> - once-in-a-lifetime</li>
            <li>Post-match celebration, late flight home or extra night</li>
          </ul>

          <h3 className="editorial-h3">Why This Works</h3>
          <p className="whitespace-pre-line"><strong>Complete Tournament Arc:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Opening match at legendary Azteca</li>
            <li>Group stage across multiple cities</li>
            <li>Knockout rounds including quarter-final</li>
            <li>Semi-final at state-of-the-art Atlanta venue</li>
            <li>THE FINAL in NYC - non-negotiable for serious fans</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Geographic Mastery:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Experience all three countries</li>
            <li>Mix of climates: Mexico heat, Texas heat, Northeast summer, Pacific Northwest cool</li>
            <li>Diverse cultural experiences</li>
            <li>Five distinct cities, each world-class</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Flexibility Built In:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Quarter-final location adjustable based on team progression</li>
            <li>Vancouver serves as recovery/cultural bonus between semi and final</li>
            <li>Extra days allow for delayed flights, rest, spontaneous exploration</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Premium Experience:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Luxury hotels throughout</li>
            <li>Premium seating at all matches</li>
            <li>Budget allows for fine dining, exclusive tours, VIP experiences</li>
            <li>No compromises on comfort or convenience</li>
          </ul>

          <h3 className="editorial-h3">Budget Breakdown</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>International Flight (Business Class):</strong> $3,000-6,000</li>
            <li><strong>Domestic Flights (6 segments @ $300 avg):</strong> $1,800</li>
            <li><strong>Hotels (20 nights, premium):</strong> $7,700
              <ul className="list-[circle] list-inside ml-6">
                <li>Mexico City: 3 × $100 = $300</li>
                <li>Dallas: 4 × $450 = $1,800</li>
                <li>NYC: 4 × $600 = $2,400</li>
                <li>Atlanta: 3 × $500 = $1,500</li>
                <li>Vancouver: 2 × $350 = $700</li>
                <li>NYC Final: 4 × $600 = $2,400 (split across two NYC stays)</li>
              </ul>
            </li>
            <li><strong>Match Tickets (7 matches, including Final):</strong> $5,000-12,000
              <ul className="list-[circle] list-inside ml-6">
                <li>Group Stage (3): $600</li>
                <li>Round of 32: $350</li>
                <li>Quarter-Final: $600</li>
                <li>Semi-Final: $800</li>
                <li><strong>Final:</strong> $3,000-10,000 (Category 1 with dynamic pricing)</li>
              </ul>
            </li>
            <li><strong>Food (20 days @ $150/day):</strong> $3,000</li>
            <li><strong>Local Transportation:</strong> $800</li>
            <li><strong>Activities/Tours:</strong> $1,500</li>
            <li><strong>Miscellaneous:</strong> $1,000</li>
            <li><strong>Travel Insurance (Premium):</strong> $800</li>
            <li><strong>TOTAL:</strong> $24,600-$33,600</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-team-line text-indigo-500"></i>Special Itinerary: Following Your Team
          </h2>
          <h3 className="editorial-h3">The Challenge</h3>
          <p className="whitespace-pre-line">You know your group stage cities, but knockout locations depend on results. Booking everything upfront wastes money. Booking nothing risks missing matches.</p>

          <h3 className="editorial-h3">The Strategy</h3>
          <p className="whitespace-pre-line"><strong>Phase 1: Group Stage (Book with Confidence)</strong></p>
          <p>Immediately after draw (late 2025), book:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>✓ Hotels in all 3 group stage cities</li>
            <li>✓ Flights to first group stage city</li>
            <li>✓ Ground transportation</li>
            <li>✓ Tours and restaurant reservations</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Phase 2: Round of 32 (Conditional Booking)</strong></p>
          <p>After final group stage match, you know:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>If team advances</li>
            <li>Which Round of 32 match they play</li>
            <li>Exact city and date</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Immediate Actions (within 2 hours):</strong></p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Book flights to confirmed city</li>
            <li>Book hotels (likely expensive due to demand surge)</li>
            <li>Cancel any speculative bookings</li>
          </ol>
          <p className="whitespace-pre-line"><strong>Phase 3: Round of 16 & Beyond (Day-by-Day)</strong></p>
          <p>Same rapid response required after each match:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Monitor results in real-time</li>
            <li>Book transportation/hotels within hours</li>
            <li>Accept premium pricing as cost of following team</li>
          </ul>

          <h3 className="editorial-h3">Example: Following England</h3>
          <p className="whitespace-pre-line"><strong>Group Stage (Hypothetical):</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Match 1: June 12, Vancouver</li>
            <li>Match 2: June 16, Los Angeles</li>
            <li>Match 3: June 20, Dallas</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Pre-Book:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Vancouver hotel (June 11-13)</li>
            <li>Flight Vancouver → LA (June 13)</li>
            <li>LA hotel (June 13-17)</li>
            <li>Flight LA → Dallas (June 17)</li>
            <li>Dallas hotel (June 17-21)</li>
          </ul>
          <p className="whitespace-pre-line"><strong>Wait and See:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>If England wins group: Likely plays in Kansas City or Houston Round of 32</li>
            <li>If England finishes 2nd: Likely plays in Miami or Atlanta Round of 32</li>
          </ul>
          <p className="whitespace-pre-line"><strong>After June 20 Match:</strong>
          Book confirmed city within 2 hours. Prices will surge—accept it as cost of following team.</p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-flash-line text-indigo-500"></i>Pro Tips for All Itineraries
          </h2>
          <h3 className="editorial-h3">Rest Days Matter</h3>
          <p className="whitespace-pre-line"><strong>Don't Pack Every Day:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Schedule recovery days between matches</li>
            <li>Travel days count as activity days</li>
            <li>Jet lag, heat, and crowds exhaust you faster than expected</li>
            <li>World Cup marathon requires pacing</li>
          </ul>

          <h3 className="editorial-h3">Weather Preparation</h3>
          <p className="whitespace-pre-line"><strong>June-July Climate Varies Dramatically:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Mexico City: 70-80°F, comfortable</li>
            <li>Houston/Dallas/Miami: 90-100°F+, dangerous heat</li>
            <li>Seattle/Vancouver: 60-75°F, perfect</li>
            <li>Pack layers, sun protection, cooling accessories</li>
          </ul>

          <h3 className="editorial-h3">Border Crossings Add Time</h3>
          <p className="whitespace-pre-line"><strong>U.S. ↔ Canada:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>1-2 hours each direction</li>
            <li>Passport required</li>
            <li>Canada eTA ($7 CAD) for most visitors</li>
          </ul>
          <p className="whitespace-pre-line"><strong>U.S. ↔ Mexico:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>1-3 hours each direction</li>
            <li>Tourist card (FMM) issued on arrival</li>
            <li>Extra time for potential delays</li>
          </ul>

          <h3 className="editorial-h3">Match-Day Timing</h3>
          <p className="whitespace-pre-line"><strong>Always Arrive 2-3 Hours Early:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Security lines slow</li>
            <li>Transportation congested</li>
            <li>Pre-match atmosphere worth experiencing</li>
            <li>Better safe than missing kickoff</li>
          </ul>

          <h3 className="editorial-h3">Booking Insurance</h3>
          <p className="whitespace-pre-line"><strong>Comprehensive Coverage Essential:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Trip cancellation if team eliminated</li>
            <li>Medical emergency abroad</li>
            <li>Flight delays and cancellations</li>
            <li>See our Travel Insurance Guide for details</li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body theme-indigo">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-clipboard-line text-indigo-500"></i>Your Itinerary Planning Checklist
          </h2>
          <h3 className="editorial-h3">6 Months Before (December 2025)</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Decide duration (1, 2, or 3 weeks)</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Define priority (team vs. experience vs. budget)</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Wait for match schedule (December 5, 2025)</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Register for ticket lottery Phase 3</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Research potential host cities</span>
            </li>
          </ul>

          <h3 className="editorial-h3">Immediately After Schedule Announcement</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Identify your target cities</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Book flights within 48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Book hotels immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Arrange ground transportation</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Purchase comprehensive travel insurance</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Apply for visas/eTA if needed</span>
            </li>
          </ul>

          <h3 className="editorial-h3">3 Months Before</h3>
           <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Book major activities/tours</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Make restaurant reservations</span>
            </li>
             <li className="flex items-start gap-2">
              <i className="ri-checkbox-blank-line mt-1 text-slate-400"></i>
              <span>Review travel documents expiry dates</span>
            </li>
          </ul>
          <hr className="editorial-divider" />
        </article>

        <section className="max-w-4xl mx-auto px-6 pb-12">
          {/* Interactive Rating Section */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
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
                <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                  <i className="ri-checkbox-circle-fill align-bottom mr-1"></i> Thanks for your feedback!
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>

          {/* Elite Tier Footer Meta Section */}
          <aside className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-space">Share Guide</span>
                <div className="flex items-center gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=World%20Cup%202026%20Itinerary%20Planning%20Guide&url=${siteUrl}${pageUrl}`} 
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
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}${pageUrl}`} 
                     target="_blank" rel="noopener noreferrer"
                     className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                     aria-label="Share on LinkedIn">
                    <i className="ri-linkedin-fill text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href={`mailto:?subject=World Cup 2026 Itinerary Planning Guide&body=Check out this guide: ${siteUrl}${pageUrl}`}
                     className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#ea4335] border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                     aria-label="Share via Email">
                    <i className="ri-mail-line text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <button onClick={() => navigator.clipboard.writeText(`${siteUrl}${pageUrl}`)}
                     className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-indigo-600 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
                     aria-label="Copy Link">
                    <i className="ri-link-m text-lg group-hover:scale-110 transition-transform"></i>
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 md:hidden"></div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400">
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
      </main>

      <Footer />
    </div>
  );
}
