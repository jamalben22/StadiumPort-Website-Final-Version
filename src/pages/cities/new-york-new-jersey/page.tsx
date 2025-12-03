import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { WorldClassFAQ } from '../../../components/feature/WorldClassFAQ';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';

export default function NewYorkCityArticlePage() {
  const pageUrl = '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const [scrollPercent, setScrollPercent] = useState(0);

  // Feature: Save Guide & Rating
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const currentPath = '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide';

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
    const ogImageUrl = siteUrl + '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp';
    const title = 'New York New Jersey World Cup 2026 Guide | MetLife Stadium Final Venue | Complete NYC Travel Guide';
    const description = 'Complete New York New Jersey World Cup 2026 guide: MetLife Stadium matches, transportation from Manhattan, best hotels, tickets, weather, and insider tips for the Final on July 19, 2026. Everything you need for the ultimate NYC World Cup experience.';
    
    // Advanced meta tag management for #1 ranking
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    // Enhanced Open Graph tags for maximum social sharing
    setMeta('og:url', siteUrl + pageUrl);
    setMeta('og:image', ogImageUrl);
    setMeta('twitter:image', ogImageUrl);
    setMeta('og:image:width', '1600');
    setMeta('og:image:height', '900');
    setMeta('og:image:alt', 'New York New Jersey World Cup 2026 Guide - MetLife Stadium Final Venue');
    setMeta('og:image:type', 'image/webp');
    
    // Advanced Twitter Card optimization
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image:alt', 'New York New Jersey World Cup 2026 Guide - MetLife Stadium Final Venue');
    
    // Additional SEO meta tags for #1 ranking
    setMeta('article:author', 'Stadiumport');
    setMeta('article:published_time', '2025-11-11T09:00:00Z');
    setMeta('article:modified_time', new Date().toISOString());
    setMeta('article:section', 'Sports');
    setMeta('article:tag', 'World Cup 2026, New York, New Jersey, MetLife Stadium, FIFA');
    
    // Advanced social media optimization
    setMeta('og:article:published_time', '2025-11-11T09:00:00Z');
    setMeta('og:article:modified_time', new Date().toISOString());
    setMeta('og:article:author', 'Stadiumport');
    setMeta('og:article:section', 'Sports');
    setMeta('og:article:tag', 'World Cup 2026, New York, New Jersey, MetLife Stadium, FIFA World Cup');
    
    // Pinterest optimization
    setMeta('pinterest-rich-pin', 'true');
    
    // LinkedIn optimization
    setMeta('linkedin:author', 'Stadiumport');
    
    // WhatsApp optimization
    setMeta('og:image:secure_url', ogImageUrl);
    
    // Additional Twitter optimization
    setMeta('twitter:site', '@stadiumport');
    setMeta('twitter:creator', '@stadiumport');
    setMeta('twitter:label1', 'Reading time');
    setMeta('twitter:data1', '15 minutes');
    setMeta('twitter:label2', 'Topic');
    setMeta('twitter:data2', 'World Cup 2026');
    
    setPageMeta({ title, description, url: siteUrl + pageUrl, image: ogImageUrl, locale: 'en_US', publishedTime: '2025-11-11T09:00:00Z', modifiedTime: new Date().toISOString(), section: 'Host Cities', tags: ['World Cup 2026', 'New York', 'New Jersey', 'MetLife Stadium'] })
    
    // Performance monitoring for Core Web Vitals (#1 ranking factor)
    const measurePerformance = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('LCP:', entry.startTime);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              value: Math.round(entry.startTime),
              metric_id: 'lcp_nyc_guide'
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(entry.processingStart - entry.startTime),
              metric_id: 'fid_nyc_guide'
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });
      
      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'CLS', {
                value: Math.round(clsValue * 1000) / 1000,
                metric_id: 'cls_nyc_guide'
              });
            }
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };
    
    // Initialize performance monitoring
    if (typeof PerformanceObserver !== 'undefined') {
      measurePerformance();
    }
    
    // Advanced analytics for #1 ranking optimization
    const trackEngagement = () => {
      let timeOnPage = 0;
      const timer = setInterval(() => {
        timeOnPage += 1;
        if (timeOnPage % 10 === 0 && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'time_on_page_nyc_guide',
            value: timeOnPage
          });
        }
      }, 1000);
      
      return () => clearInterval(timer);
    };
    
    const cleanup = trackEngagement();
    
    // Track scroll depth (engagement metric)
    let maxScroll = 0;
    const trackScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      const clamped = Math.max(0, Math.min(100, pct));
      setScrollPercent(clamped);
      if (clamped > maxScroll) {
        maxScroll = clamped;
        if (window.gtag && maxScroll % 25 === 0) {
          window.gtag('event', 'scroll', {
            percent_scrolled: maxScroll,
            page: 'nyc_guide'
          });
        }
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    
    return () => {
      cleanup();
      window.removeEventListener('scroll', trackScroll);
    };
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
      {/* Critical resource hints for #1 performance */}
      <link rel="preload" href="/images/cities/new-york-new-jersey-world-cup-2026-1600.webp" as="image" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <SchemaOrg
        schema={[
          // Main Article Schema - Travel Guide
          {
            "@context": "https://schema.org",
            "@type": ["Article", "TravelGuide"],
            "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + pageUrl + '#article',
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + pageUrl
            },
            "name": "New York New Jersey World Cup 2026 Guide",
            "headline": "New York New Jersey World Cup 2026 Guide | MetLife Stadium Final Venue | Complete NYC Travel Guide",
            "description": "Complete New York New Jersey World Cup 2026 guide: MetLife Stadium matches, transportation from Manhattan, best hotels, tickets, weather, and insider tips for the Final on July 19, 2026. Everything you need for the ultimate NYC World Cup experience.",
            "url": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + pageUrl,
            "image": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
            "datePublished": "2025-11-11T09:00:00Z",
            "dateModified": new Date().toISOString(),
            "dateCreated": "2024-01-01T00:00:00Z",
            "keywords": ["New York World Cup 2026", "MetLife Stadium", "NYC World Cup", "World Cup Final 2026", "New York New Jersey World Cup", "World Cup 2026 transportation", "World Cup 2026 hotels", "World Cup 2026 tickets", "NYC travel guide", "World Cup 2026 guide"],
            "author": {
              "@type": "Organization",
              "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#organization',
              "name": "Stadiumport",
              "url": import.meta.env.VITE_SITE_URL || 'https://stadiumport.com',
              "logo": {
                "@type": "ImageObject",
                "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/logo.png',
                "url": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/logo.png',
                "width": 600,
                "height": 200
              }
            },
            "publisher": {
              "@type": "Organization",
              "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#organization',
              "name": "Stadiumport",
              "url": import.meta.env.VITE_SITE_URL || 'https://stadiumport.com',
              "logo": {
                "@type": "ImageObject",
                "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/logo.png',
                "url": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/logo.png',
                "width": 600,
                "height": 200
              }
            },
            "locationCreated": {
              "@type": "Place",
              "name": "New York, NY",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            },
            "inLanguage": "en-US",
            "wordCount": 3500,
            "about": {
              "@type": "SportsEvent",
              "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#world-cup-2026-final',
              "name": "FIFA World Cup 2026 Final",
              "description": "The FIFA World Cup 2026 Final will be held at MetLife Stadium in East Rutherford, New Jersey on July 19, 2026.",
              "startDate": "2026-07-19T18:00:00-05:00",
              "endDate": "2026-07-19T21:00:00-05:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "@id": "https://www.fifa.com/#organization",
                "name": "FIFA",
                "url": "https://www.fifa.com"
              },
              "performer": {
                "@type": "SportsTeam",
                "name": "FIFA World Cup Final Teams",
                "url": "https://www.fifa.com/worldcup/"
              },
              "image": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
              "offers": {
                "@type": "Offer",
                "url": "https://www.fifa.com/worldcup/tickets/",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01T00:00:00Z",
                "validThrough": "2026-07-19T18:00:00-05:00"
              },
              "location": {
                "@type": "StadiumOrArena",
                "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#metlife-stadium',
                "name": "MetLife Stadium",
                "description": "MetLife Stadium is the venue for the FIFA World Cup 2026 Final, with a capacity of 75,000 spectators.",
                "url": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/world-cup-2026-stadiums/metlife-stadium-guide',
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1 MetLife Stadium Dr",
                  "addressLocality": "East Rutherford",
                  "addressRegion": "NJ",
                  "postalCode": "07073",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 40.8135,
                  "longitude": -74.0744
                },
                "maximumAttendeeCapacity": 75000
              },
              
            }
          },
          // Stadium Schema
          {
            "@context": "https://schema.org",
            "@type": "StadiumOrArena",
            "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#metlife-stadium-venue',
            "name": "MetLife Stadium",
            "description": "MetLife Stadium is the venue for the FIFA World Cup 2026 Final, with a capacity of 75,000 spectators.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 MetLife Stadium Dr",
              "addressLocality": "East Rutherford",
              "addressRegion": "NJ",
              "postalCode": "07073",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.8135,
              "longitude": -74.0744
            },
            "maximumAttendeeCapacity": 75000,
            "containsPlace": {
              "@type": "SportsEvent",
              "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#world-cup-2026-final'
            }
          },
          // Enhanced Breadcrumb Schema
          generateBreadcrumbSchema([
            { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
            { name: 'Host Cities', url: (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/world-cup-2026-host-cities' },
            { name: 'New York New Jersey', url: (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + pageUrl }
          ]),
          // Enhanced Image Schema
          generateImageObjectSchema('/images/cities/new-york-new-jersey-world-cup-2026-1600.webp', {
            width: 1600,
            height: 900,
            caption: 'New York New Jersey World Cup 2026 Guide - MetLife Stadium Final Venue',
            description: 'Complete guide to World Cup 2026 in New York New Jersey featuring MetLife Stadium, the venue for the Final match on July 19, 2026'
          }),
          // Local Business Schema for Tourism
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + '/#nyc-tourism',
            "name": "New York New Jersey World Cup 2026 Tourism",
            "description": "Official tourism information for World Cup 2026 in New York New Jersey",
            "url": (import.meta.env.VITE_SITE_URL || 'https://stadiumport.com') + pageUrl,
            "telephone": "+1-212-484-1200",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "openingHours": "24/7",
            "priceRange": "$$"
          }
        ]}
      />


      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#01b47d] text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <Header />
      <aside className="hidden 2xl:block fixed right-6 top-28 w-72 z-40">
        <nav aria-label="Page table of contents" className="group relative overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 transition-all duration-500 hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/20 hover:-translate-y-0.5 will-change-transform">
          <div className="px-5 pt-5 pb-3 sticky top-0 z-10 bg-white/85 dark:bg-slate-800/60 backdrop-blur-2xl">
            <div className="text-xs font-semibold tracking-widest bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">ON THIS PAGE</div>
            <div className="mt-3 h-1 rounded-full bg-slate-200 dark:bg-slate-700/60">
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
              <div style={{ width: `${scrollPercent}%` }} className="h-1 rounded-full bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]"></div>
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
      
      {(() => {
        const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
        const pageUrl = `${siteUrl}/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide`;
        const ogImage = `${siteUrl}/images/cities/new-york-new-jersey-world-cup-2026.webp`;
        const title = 'New York / New Jersey World Cup 2026: Complete Travel Guide | Stadiumport';
        const description = 'Explore New York & New Jersey for World Cup 2026. Find match schedules, hotels, transportation, and travel tips for MetLife Stadium and host city events.';
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          const setMeta = (selector: string, attr: string, value: string) => {
            const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
            if (el) el.setAttribute(attr, value);
          };
          setMeta('meta[name="description"]', 'content', description);
          setMeta('link[rel="canonical"]', 'href', pageUrl);
          setMeta('meta[property="og:title"]', 'content', title);
          setMeta('meta[property="og:description"]', 'content', description);
          setMeta('meta[property="og:url"]', 'content', pageUrl);
          setMeta('meta[property="og:image"]', 'content', ogImage);
          setMeta('meta[property="twitter:title"]', 'content', title);
          setMeta('meta[property="twitter:description"]', 'content', description);
          setMeta('meta[property="twitter:url"]', 'content', pageUrl);
          setMeta('meta[property="twitter:image"]', 'content', ogImage);
    setPageMeta({ title, description, url: pageUrl, image: ogImage, locale: 'en_US', publishedTime: '2025-11-16T09:00:00Z', modifiedTime: new Date().toISOString(), section: 'Host Cities', tags: ['World Cup 2026', 'Host Cities', 'New York', 'New Jersey', 'MetLife Stadium'] })
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/cities/new-york-new-jersey-world-cup-2026.webp'
    document.head.appendChild(link)
  }, []);
        return null;
      })()}

      {/* Editorial Hero — World Class Redesign */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src="/images/cities/new-york-new-jersey-world-cup-2026.webp"
            alt="New York City skyline with MetLife Stadium - World Cup 2026 Final venue in New Jersey"
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
                  <span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">New York / New Jersey</span>
                </li>
              </ol>
            </nav>

            {/* Title - Massive & Bold (Apple/Vogue style) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              New York / New Jersey World Cup 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]/20">Complete Travel Guide</span>
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
                <span>MetLife Stadium (East Rutherford)</span>
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

      {/* Main Content - Premium Editorial presentation */}
      <main id="main-content" className="editorial-article-premium py-16" itemScope itemType="https://schema.org/Article">
        {/* Introduction */}
        <article id="intro" className="editorial-body editorial-dropcap theme-emerald">
          {/* [QUICK SUMMARY: 8 matches, Final host, MetLife Stadium venue, NYC Hub] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Quick Summary</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• NY/NJ hosts <strong>8 matches</strong>—including the Final</li>
               <li>• Venue: <strong>MetLife Stadium</strong> (East Rutherford)</li>
               <li>• Key Event: <strong>World Cup Final on July 19</strong></li>
               <li>• Regional Hub: New York / New Jersey Metro Area</li>
             </ul>
          </div>

          <h2 className="editorial-h2 animate-fade-up mb-2 flex items-center gap-3">
            <i className="ri-trophy-line text-[#01b47d]"></i>The World's Biggest Game Comes to the World's Biggest Stage
          </h2>
          
          {/* [SUBTITLE/DECK] */}
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Eight matches. The Grand Final. One massive stage. Welcome to the epicenter of FIFA World Cup 2026.
          </p>

          {/* [ESTIMATED READ TIME] */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
             <i className="ri-time-line"></i> <span>8 min read</span>
             <span className="mx-2">•</span>
             <span>Updated Nov 2025</span>
          </div>

          <p className="whitespace-pre-line">
            {`When the final whistle blows on July 19, 2026, football history will be made just across the Hudson River from Manhattan. New York and New Jersey are hosting the FIFA World Cup Final—and seven other matches—making this region the epicenter of the beautiful game's most anticipated summer in decades.
            
            Whether you're here to witness the crowning moment or soak up the electric atmosphere across multiple match days, the New York metropolitan area offers everything a football fan could dream of: world-class infrastructure, unbeatable energy, and a cultural experience that extends far beyond the pitch.`}
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "There's no place on Earth quite like New York City."
          </blockquote>

          <p className="whitespace-pre-line">
            {`This isn't just about a stadium—it's about the entire New York experience. The region has five airports servicing 181 countries, more hotels under construction than exist in other candidate cities combined, and MetLife Stadium's proven track record of hosting two million guests annually.`}
          </p>
          <p className="leading-relaxed mt-3">
            New York/New Jersey is one of the <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">16 host cities</Link> for World Cup 2026, serving as the crown jewel of the tournament.
          </p>

          {/* [KEY TAKEAWAY / ESSENTIAL LINKS] */}
          <div className="callout-premium p-6 sm:p-8 mt-8 bg-gradient-to-br from-[#01b47d]/5 to-white dark:from-navy-900 dark:to-navy-800 border border-[#01b47d]/10 dark:border-navy-700 shadow-lg rounded-2xl">
            <h4 className="flex items-center gap-2 font-bold text-[#008f63] dark:text-[#01b47d] mb-4">
              <i className="ri-bookmark-line"></i> Essential Resources
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🏟️</span> 
                <div>
                  <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 font-medium">MetLife Stadium Guide</Link>
                  <span className="block text-sm text-slate-500 mt-1">Capacity: 82,500 • Surface: Natural Grass</span>
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
                   <strong>Nearby Cities:</strong> <span className="text-slate-600 dark:text-slate-400">[INTERNAL LINK: Regional Travel]</span><br/>
                   <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Philadelphia</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link> <span className="text-slate-300">|</span> <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why NY/NJ Won */}
        <article className="editorial-body theme-emerald">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradTrophyNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f59e0b" />
                  <stop offset="1" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradTrophyNY)" />
              <circle cx="12" cy="9" r="1.5" fill="#ffffff" />
            </svg>
            Why New York/New Jersey Won the World Cup Final
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="whitespace-pre-line leading-relaxed text-slate-700 dark:text-slate-300">
              {`MetLife Stadium in East Rutherford, New Jersey, beat out Los Angeles and Dallas to host the ultimate match on July 19, 2026. The region will host eight total matches throughout the tournament, with projections of over $2 billion in economic impact and more than 1 million visitors expected.

              This isn't just about a stadium—it's about the entire New York experience. The region has five airports servicing 181 countries, more hotels under construction than exist in other candidate cities combined, and MetLife Stadium's proven track record of hosting two million guests annually. FIFA knew what every traveler knows: there's no place on Earth quite like New York City.`}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 my-8">
            <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-navy-600 pb-4">
              <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradStarNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarNY)" />
              </svg>
              The New York Advantage
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <ul className="leading-relaxed space-y-4 list-none">
                      <li className="flex items-start gap-3">
                          <i className="ri-flight-takeoff-line text-[#01b47d] mt-1"></i>
                          <span><strong>Unmatched Connectivity</strong> <span className="block text-sm text-slate-500">5 airports servicing 181 countries—easier access for global fans</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                          <i className="ri-hotel-bed-line text-[#01b47d] mt-1"></i>
                          <span><strong>Accommodation Capacity</strong> <span className="block text-sm text-slate-500">More hotels under construction than other candidates combined</span></span>
                      </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <ul className="leading-relaxed space-y-4 list-none">
                      <li className="flex items-start gap-3">
                          <i className="ri-money-dollar-circle-line text-[#01b47d] mt-1"></i>
                          <span><strong>$2 Billion Impact</strong> <span className="block text-sm text-slate-500">Projected economic impact from 8 matches and 1M+ visitors</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                          <i className="ri-history-line text-[#01b47d] mt-1"></i>
                          <span><strong>Proven Track Record</strong> <span className="block text-sm text-slate-500">Hosts 2 million guests annually; home to 2 NFL teams</span></span>
                      </li>
                    </ul>
                </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* The Stadium: MetLife Stadium */}
        <article id="stadium" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="stadium-anchor" className="scroll-mt-24"></div>

          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradBuildingNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="14" height="10" rx="2" fill="url(#gradBuildingNY)" />
              <rect x="7" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="12" y="9" width="3" height="6" rx="0.8" fill="#ffffff" />
              <rect x="9" y="6" width="6" height="2" rx="1" fill="#14b8a6" />
            </svg>
            The Stadium: <Link to="/world-cup-2026-stadiums/metlife-stadium-guide" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">MetLife Stadium</Link> (New York New Jersey Stadium)
          </h3>

          <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
            <OptimizedImage
              src="/images/cities/new-york-new-jersey-world-cup-2026-1600.webp"
              alt="MetLife Stadium Interior"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
              width={1600}
              height={900}
              placeholder="empty"
              sizes="(min-width: 1024px) 960px, 100vw"
              disableSrcSet={true}
              priority={true}
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="whitespace-pre-line leading-relaxed">
                {`MetLife Stadium opened in 2010 with a construction cost of $1.6 billion, making it the most expensive stadium in U.S. history at completion. With a capacity of 82,500 seats for World Cup matches (including 10,005 club seats and approximately 218 luxury suites), it's the largest NFL stadium and the biggest World Cup venue in the United States.

                During the tournament, FIFA will refer to the venue as "New York New Jersey Stadium" due to sponsorship policies. The stadium sits just 10 miles from Midtown Manhattan, making it genuinely accessible via direct public transit.`}
              </p>
            </div>
            
            {/* [PULL QUOTE] */}
            <blockquote className="my-10 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
               "The largest NFL stadium and the biggest World Cup venue in the United States."
            </blockquote>

            {/* [STAT HIGHLIGHT SECTION] */}
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 my-8">
              <h4 className="editorial-h4 animate-fade-up mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-navy-600 pb-4">
                <svg className="h4-icon-svg" role="img" aria-label="Star" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStarNY2" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3 l2.8 6 h6.2 l-5 3.6 1.9 6.4 -5.9 -3.8 -5.9 3.8 1.9 -6.4 -5 -3.6 h6.2 z" fill="url(#gradStarNY2)" />
                </svg>
                The Numbers That Matter
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-group-fill text-[#01b47d] mt-1"></i>
                            <span><strong>82,500 Capacity</strong> <span className="block text-sm text-slate-500">(Largest in the tournament)</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-money-dollar-circle-line text-[#01b47d] mt-1"></i>
                            <span><strong>$1.6 Billion Cost</strong> <span className="block text-sm text-slate-500">Most expensive stadium in history at opening</span></span>
                        </li>
                      </ul>
                  </div>
                  <div className="space-y-4">
                      <ul className="leading-relaxed space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <i className="ri-football-line text-[#01b47d] mt-1"></i>
                            <span><strong>Natural Grass</strong> <span className="block text-sm text-slate-500">Modular system installed specifically for World Cup matches</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="ri-map-pin-time-line text-[#01b47d] mt-1"></i>
                            <span><strong>10 Miles from NYC</strong> <span className="block text-sm text-slate-500">Direct rail connection from Penn Station</span></span>
                        </li>
                      </ul>
                  </div>
              </div>
            </div>

            <p className="leading-relaxed mt-3">
              The stadium underwent significant renovations specifically for the World Cup. In January 2024, officials announced plans to remove 1,740 permanent seats to widen the field to meet FIFA regulations, replacing them with modular seating after the tournament.
            </p>
            
            {/* [SIDEBAR: Important Logistics] */}
            <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <h4 className="editorial-h4 animate-fade-up mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-400">
                <i className="ri-information-line"></i>
                Renovation Note
              </h4>
              <p className="leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                The field widening project was a critical factor in securing the Final. By removing corner seating, MetLife Stadium ensures the pitch meets FIFA's strict dimensions without compromising sightlines for the vast majority of fans.
              </p>
            </div>
            
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Match Schedule */}
        <article id="schedule" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="schedule-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Schedule at a Glance</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>5 Group Stage Matches</strong> (June 13–29)</li>
               <li>• <strong>Round of 32:</strong> July 3, 2026</li>
               <li>• <strong>Round of 16:</strong> July 8, 2026</li>
               <li>• <strong>THE FINAL:</strong> Sunday, July 19, 2026</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Calendar" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradCalendarNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="url(#gradCalendarNY)" />
              <rect x="3" y="5" width="18" height="4" rx="2" fill="#0ea5e9" />
              <circle cx="8" cy="3.5" r="1" fill="#ffffff" />
              <circle cx="16" cy="3.5" r="1" fill="#ffffff" />
              <rect x="7" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
              <rect x="12" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
              <rect x="17" y="11" width="3" height="3" rx="0.8" fill="#ffffff" />
            </svg>
            Match Schedule at MetLife Stadium
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Eight matches. The most prestigious lineup of any venue. And the game the world has been waiting for.
          </p>

          <p className="leading-relaxed mb-8">
            Eight matches will be played here, beginning June 13 and culminating with the Final on July 19, 2026. This represents the most prestigious match lineup of any venue in the tournament.
          </p>

          <div className="space-y-8">
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-navy-700">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                <svg className="h4-icon-svg" role="img" aria-label="Group stage" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradGroupNY" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="url(#gradGroupNY)" />
                  <rect x="6" y="8" width="12" height="2" rx="1" fill="#ffffff" />
                  <rect x="6" y="11" width="8" height="2" rx="1" fill="#ffffff" />
                </svg>
                Group Stage (Five Matches)
              </h4>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">01</span>
                    <span><strong>Saturday, June 13, 2026</strong> – Group Stage Match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">02</span>
                    <span><strong>Tuesday, June 16, 2026</strong> – Group Stage Match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">03</span>
                    <span><strong>Monday, June 22, 2026</strong> – Group Stage Match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">04</span>
                    <span><strong>Friday, June 26, 2026</strong> – Group Stage Match</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-lg transition-colors">
                    <span className="font-mono text-[#01b47d] font-bold">05</span>
                    <span><strong>Monday, June 29, 2026</strong> – Group Stage Match</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100 dark:border-amber-800/30">
              <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <svg className="h4-icon-svg" role="img" aria-label="Trophy" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradTrophyNY2" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M7 6 h10 v3 a5 5 0 0 1 -5 5 v3 h-3 v-3 a5 5 0 0 1 -5 -5 V6z" fill="url(#gradTrophyNY2)" />
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
                    <span className="font-mono text-amber-500 font-bold">R16</span>
                    <span><strong>Wednesday, July 8, 2026</strong> – Round of 16</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-100 to-white dark:from-amber-900/40 dark:to-navy-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
                    <span className="font-mono text-amber-600 dark:text-amber-400 font-bold text-lg">FINAL</span>
                    <span className="text-lg"><strong>Sunday, July 19, 2026</strong> – <span className="uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">WORLD CUP FINAL</span></span>
                </li>
              </ul>

              <div className="mt-6 pl-4 border-l-2 border-amber-200 dark:border-amber-800">
                <p className="leading-relaxed italic text-slate-700 dark:text-slate-300">
                  The World Cup Final on July 19 is the pinnacle of global sports. Billions will watch, but only 82,500 will be there. FIFA has confirmed the final will feature an elaborate halftime show modeled after the Super Bowl, with Times Square serving as a central hub for celebrations during the final weekend.
                </p>
              </div>
            </div>

            {/* [PULL QUOTE] */}
            <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
               "History in the making."
            </blockquote>

            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradInfoNY" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradInfoNY)" />
                  <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
                  <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
                </svg>
                Final Weekend Spectacle
              </h4>
              <p className="leading-relaxed">
                The entire New York region will transform into a festival ground. Expect massive Fan Fests in Central Park and Liberty State Park, coordinated events in Times Square, and a global atmosphere that only New York can deliver.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* What Makes Stadium Special */}
        <article className="editorial-body">
          <div className="premium-section-header mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-premium-lg flex items-center justify-center">
                <i className="ri-star-line text-amber-500" aria-hidden="true"></i>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-display">
                What Makes This Stadium Special
              </h3>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 luxury-grid-gap mb-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h4 className="editorial-h4 text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Legendary Events & Legacy</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  MetLife Stadium has hosted six Super Bowls, major soccer friendlies, and concerts featuring Taylor Swift, Beyoncé, and the Rolling Stones. The stadium hosted nine matches during the 2025 FIFA Club World Cup, including the final, and previously hosted the Copa América Centenario final in 2016—proving it can handle the world's biggest football moments.
                </p>
              </div>
            </div>

            <div className="callout-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-premium-sm flex items-center justify-center">
                  <i className="ri-map-pin-2-line text-amber-600" aria-hidden="true"></i>
                </div>
                <h5 className="font-semibold text-slate-900 dark:text-slate-100">Prime Access</h5>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                The stadium sits just 10 miles from Midtown Manhattan, making it genuinely accessible.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <i className="ri-subway-line"></i>
                <span>Direct public transit</span>
              </div>
            </div>
          </div>

          <div className="callout-pro mb-8 p-8">
            <div className="flex items-start gap-4">
              <div className="icon-premium-md flex items-center justify-center mt-1">
                <i className="ri-train-line text-[#01b47d]" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-lg">Unmatched Connectivity</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Located in East Rutherford, New Jersey, MetLife Stadium is situated 10 miles west of New York City, connected by direct public transit that runs specifically for major events. This accessibility makes it one of the most convenient major stadiums in the world.
                </p>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article id="transport" className="editorial-body theme-blue">
          {/* [SCROLL ANCHOR] */}
          <div id="transport-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Transport Reality Check</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Location:</strong> East Rutherford, NJ (10 miles from NYC)</li>
               <li>• <strong>Best Route:</strong> NJ Transit Train from Penn Station</li>
               <li>• <strong>Budget:</strong> Coach USA Bus ($14 roundtrip)</li>
               <li>• <strong>Airports:</strong> EWR (Closest), JFK, LGA</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Train" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradTrainNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M4 15c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2h-12c-1.1 0-2 0.9-2 2v4zM6 10h12v4h-12v-4z" fill="url(#gradTrainNY)" />
              <path d="M17 19v2h-2v-2h-6v2h-2v-2c-2.2 0-4-1.8-4-4v-9c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5v9c0 2.2-1.8 4-4 4zM7 6c0-0.6-0.4-1-1-1s-1 0.4-1 1v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2zM18 6c0-0.6-0.4-1-1-1s-1 0.4-1 1v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2z" fill="url(#gradTrainNY)" opacity="0.3" />
            </svg>
            Getting to MetLife Stadium
          </h3>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            MetLife Stadium is situated 10 miles west of New York City in East Rutherford, New Jersey. Direct public transit makes it accessible, but your route requires planning.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
             "While 'New York' is the host, the stadium is distinctly in New Jersey. Direct public transit makes it accessible, but your route requires planning."
          </blockquote>

          <div className="space-y-12">
            {/* NJ Transit */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#01b47d]/20 dark:bg-[#008f63] rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-[#008f63] dark:text-[#01b47d]">
                  <svg className="h4-icon-svg" role="img" aria-label="Ticket" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradTicket" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#3b82f6" />
                        <stop offset="1" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <path d="M20 6h-16c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zM8 17h-2v-2h2v2zM8 13h-2v-2h2v2zM8 9h-2v-2h2v2z" fill="url(#gradTicket)" />
                  </svg>
                  NJ Transit Train (The Golden Ticket)
                </h4>
                <p className="leading-relaxed mb-4">
                  The fastest and most reliable route from Manhattan. Trains run from <strong>New York Penn Station</strong> to <strong>Secaucus Junction</strong>, where you transfer to the direct rail line to the <strong>Meadowlands Sports Complex</strong>.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Route:</strong> Penn Station NYC → Secaucus Junction → MetLife Stadium</li>
                    <li><strong>Time:</strong> ~30 minutes total transit time (excluding wait times)</li>
                    <li><strong>Tip:</strong> Buy round-trip tickets on the NJ Transit mobile app <em>before</em> you head to the station to skip long lines.</li>
                  </ul>
                </div>
              </div>
            </section>

             {/* Coach USA Bus */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-orange-200 dark:bg-orange-900 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <svg className="h4-icon-svg" role="img" aria-label="Bus" viewBox="0 0 24 24">
                     <defs>
                      <linearGradient id="gradBus" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#f97316" />
                        <stop offset="1" stopColor="#fb923c" />
                      </linearGradient>
                    </defs>
                    <path d="M4 16c0 .88 .39 1.67 1 2.22V20c0 .55 .45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55 .45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zM17 5c.55 0 1 .45 1 1s-.45 1-1 1 -1-.45-1-1 .45-1 1-1zM7 5c.55 0 1 .45 1 1s-.45 1-1 1 -1-.45-1-1 .45-1 1-1z" fill="url(#gradBus)" />
                  </svg>
                  Coach USA Bus (Budget Option)
                </h4>
                <p className="leading-relaxed mb-4">
                  The <strong>351 Meadowlands Express</strong> departs from Port Authority Bus Terminal in Manhattan. It offers door-to-door service without transfers, though it is subject to Lincoln Tunnel traffic.
                </p>
                <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-200 dark:border-navy-700 mb-4">
                  <ul className="leading-relaxed space-y-2 list-disc list-inside text-sm">
                    <li><strong>Departs:</strong> Port Authority Bus Terminal (check specific gate day-of)</li>
                    <li><strong>Service:</strong> Starts 3 hours before events; runs continuously</li>
                    <li><strong>Cost:</strong> Budget-friendly round-trip fare</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Airports */}
            <section className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              <div className="pl-0 md:pl-6">
                <h4 className="editorial-h4 animate-fade-up mb-4 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                        <defs>
                        <linearGradient id="gradPlane" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0" stopColor="#64748b" />
                          <stop offset="1" stopColor="#94a3b8" />
                        </linearGradient>
                      </defs>
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="url(#gradPlane)" />
                    </svg>
                    International Airports
                </h4>
                <p className="leading-relaxed mb-4">
                  New York's three major airports make this one of the most accessible World Cup destinations globally.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="font-bold text-lg mb-1">EWR</div>
                    <div className="text-sm font-semibold">Newark Liberty</div>
                    <div className="text-xs text-slate-500 mt-1">15-20 miles from stadium (Closest)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="font-bold text-lg mb-1">LGA</div>
                    <div className="text-sm font-semibold">LaGuardia</div>
                    <div className="text-xs text-slate-500 mt-1">18 miles from stadium</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="font-bold text-lg mb-1">JFK</div>
                    <div className="text-sm font-semibold">John F. Kennedy</div>
                    <div className="text-xs text-slate-500 mt-1">26 miles from stadium</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Transport options summary table */}
          <div className="comparison-table overflow-x-auto -mx-4 md:mx-0 mt-12">
            <table aria-label="Transport options comparison — New York" className="min-w-[720px] w-full text-sm">
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
                  <td className="p-3">NJ Transit Train</td>
                  <td className="p-3">~$10–15 roundtrip</td>
                  <td className="p-3">30–40 mins</td>
                  <td className="p-3">Fastest; immune to traffic</td>
                  <td className="p-3">Crowds at Penn Station</td>
                </tr>
                <tr>
                  <td className="p-3">Coach USA Bus</td>
                  <td className="p-3">~$14 roundtrip</td>
                  <td className="p-3">40–60 mins</td>
                  <td className="p-3">No transfers; seated</td>
                  <td className="p-3">Lincoln Tunnel traffic</td>
                </tr>
                <tr>
                  <td className="p-3">Rideshare/Taxi</td>
                  <td className="p-3">$60–100+ each way</td>
                  <td className="p-3">Variable (60+ mins)</td>
                  <td className="p-3">Direct to specific gate</td>
                  <td className="p-3">Extreme surge pricing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 callout-must-know">
             <h5 className="text-md font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
               <div className="callout-icon"></div>
               Multi-City Trip Planning
             </h5>
             <p className="leading-relaxed text-sm mb-2">
               The Northeast Corridor makes it easy to add other World Cup cities.
             </p>
             <div className="flex flex-wrap gap-3 text-sm">
                <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-[#01b47d] hover:underline">Philadelphia</Link>
                <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-[#01b47d] hover:underline">Boston</Link>
                <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-[#01b47d] hover:underline">Toronto</Link>
             </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article id="stay" className="editorial-body theme-indigo">
          {/* [SCROLL ANCHOR] */}
          <div id="stay-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Lodging Strategy</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Midtown:</strong> Maximum convenience (Penn Station)</li>
               <li>• <strong>SoHo/Village:</strong> Style & dining (15-20 min to Penn)</li>
               <li>• <strong>Brooklyn:</strong> Local vibes & value (30-40 min to Penn)</li>
               <li>• <strong>NJ (Hoboken/JC):</strong> Closest to stadium & skyline views</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Hotel" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradHotelNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradHotelNY)" />
              <rect x="6" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
              <rect x="14" y="9" width="4" height="6" rx="0.8" fill="#ffffff" />
            </svg>
            Where to Stay: Neighborhood Guide
          </h3>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            The beauty of New York is choice. You can stay in the heart of Manhattan's buzz or opt for quieter Brooklyn brownstone neighborhoods—both offer excellent transit connections to MetLife Stadium.
          </p>

          {/* [PULL QUOTE] */}
          <blockquote className="my-8 pl-6 border-l-4 border-[#01b47d] italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "You can stay in the heart of Manhattan's buzz or opt for quieter Brooklyn brownstone neighborhoods."
          </blockquote>

          {/* Midtown */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Map pin" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPinMid" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <path d="M12 3 C8.7 3 6 5.7 6 9 c0 5.25 6 12 6 12 s6-6.75 6-12 c0-3.3-2.7-6-6-6z" fill="url(#gradPinMid)" />
                <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
              </svg>
              Midtown Manhattan (Maximum Convenience)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> You're in the center of everything—Broadway, Times Square, Central Park. Direct access to <strong>Penn Station</strong> means you have the simplest logistics for match days.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Direct NJ Transit train from Penn Station (~30 minutes).
            </p>
             <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Massive hotels, high-rises, and endless options ranging from luxury to business chains.
            </p>
          </div>

          {/* SoHo & Greenwich Village */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Store" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradStore" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                 <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" fill="url(#gradStore)" />
              </svg>
              SoHo & Greenwich Village (Style Meets Access)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Cobblestone streets, independent boutiques, incredible restaurants, and that quintessential New York neighborhood feel.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Short subway ride (15–20 mins) to Penn Station, then transfer to NJ Transit.
            </p>
             <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Boutique hotels, lofts, and stylish stays. Higher price point but unmatched atmosphere.
            </p>
          </div>

           {/* Brooklyn */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBrooklyn" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                 <path d="M15 11V5l-3-3-3 3v2H2v11h17v-7h3v-6h-7zM7 16H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V6h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="url(#gradBrooklyn)" />
              </svg>
              Brooklyn (Local Vibes, Better Value)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> Williamsburg, DUMBO, and Park Slope offer character, craft breweries, waterfront parks, and often better value than Manhattan.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Subway to Penn Station (30–40 mins), then NJ Transit.
            </p>
             <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Hip hotels (William Vale, 1 Hotel Brooklyn Bridge) and brownstone guesthouses.
            </p>
          </div>

           {/* Hoboken & Jersey City */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Home" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradNJ" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="url(#gradNJ)" />
              </svg>
              Hoboken & Jersey City (Closest to Stadium)
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>Why stay here:</strong> You're technically closer to the action with waterfront views of the Manhattan skyline. A thriving food scene and "Gold Coast" energy.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Getting to stadium:</strong> Shortest commute via PATH/NJ Transit or rideshare.
            </p>
             <p className="leading-relaxed mb-3">
              <strong>Accommodation vibe:</strong> Modern high-rise hotels and more flexible rental options than NYC.
            </p>
          </div>
          
           <div className="callout-warning mb-8 p-8">
            <div className="flex items-start gap-4">
              <div className="icon-premium-md flex items-center justify-center mt-1">
                <i className="ri-alert-line text-amber-600" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-lg">Rental Alert</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Short-term rentals in New York City face strict regulations, so book through reputable platforms and verify legality. Jersey City and Hoboken have more flexible rental options.
                </p>
              </div>
            </div>
          </div>

          <div className="callout-premium mb-8 p-8">
             <div className="flex items-center gap-3 mb-4">
               <div className="icon-premium-md flex items-center justify-center">
                 <i className="ri-calendar-check-line text-[#01b47d]" aria-hidden="true"></i>
               </div>
               <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">Book Early Strategy</h4>
             </div>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
               Hotels in prime areas will sell out quickly. Consider booking 6–12 months in advance for best rates.
             </p>
             <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
               <i className="ri-information-line"></i>
               <span>Don't overlook boutique properties that offer personality alongside location</span>
             </div>
           </div>

          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Match */}
        <article className="editorial-body theme-rose">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-rose-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 mb-2">Culture & Leisure</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>History:</strong> Statue of Liberty & Ellis Island</li>
               <li>• <strong>Nature:</strong> Central Park (843 acres)</li>
               <li>• <strong>Views:</strong> Empire State Building</li>
               <li>• <strong>Energy:</strong> Times Square & Broadway</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Sparkles" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSparkNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f43f5e" />
                  <stop offset="1" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <path d="M6 12 l2 -4 l2 4 l-2 4z" fill="url(#gradSparkNY)" />
              <path d="M14 8 l2 -3 l2 3 l-2 3z" fill="#f43f5e" />
              <path d="M14 16 l2 -3 l2 3 l-2 3z" fill="#fb7185" />
            </svg>
            Beyond the Match: What to Do in New York City
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            Let's be honest—you're coming for football, but you're staying in one of the world's greatest cities. Here's how to make the most of your non-match hours.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/new york city guide/Interactive Map of Top Attractions.webp"
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
                <linearGradient id="gradCompassNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f43f5e" />
                  <stop offset="1" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradCompassNY)" />
              <path d="M12 7 l3 5 l-5 3 l2 -8" fill="#ffffff" />
            </svg>
            Must-See Attractions
          </h4>

          <div className="space-y-6">
            {/* Statue of Liberty */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Statue" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradStatue" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#10b981" />
                      <stop offset="1" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="4" width="8" height="16" rx="2" fill="url(#gradStatue)" />
                  <path d="M12 2 l-2 2 h4 l-2 -2" fill="#10b981" />
                </svg>
                Statue of Liberty & Ellis Island
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The universal symbol of freedom. While visible from Battery Park, the full experience requires a ferry to the islands. <strong>Book ferry tickets in advance</strong> as they sell out weeks ahead. Ellis Island's museum offers a moving look at immigrant history.
              </p>
            </div>

            {/* Central Park */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Tree" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPark" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#22c55e" />
                      <stop offset="1" stopColor="#4ade80" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="10" r="7" fill="url(#gradPark)" />
                  <rect x="11" y="17" width="2" height="5" rx="1" fill="#15803d" />
                </svg>
                Central Park
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                843 acres of green space in the middle of Manhattan. Perfect for escaping the city noise. Visit the <strong>Great Lawn</strong>, <strong>Bethesda Terrace</strong>, or rent a rowboat at the Loeb Boathouse. A massive backyard for the city.
              </p>
            </div>

            {/* Empire State Building */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Building" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradEmpire" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <rect x="9" y="8" width="6" height="14" rx="1" fill="url(#gradEmpire)" />
                  <rect x="10" y="2" width="2" height="6" rx="0.5" fill="#6366f1" />
                </svg>
                Empire State Building
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The classic NYC icon offering 360-degree city views from the 86th and 102nd floors. Go at sunset to watch the city lights turn on.
              </p>
            </div>

            {/* Times Square */}
            <div>
              <h5 className="text-md md:text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-2">
                <svg className="heading-icon-svg" role="img" aria-label="Lights" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradTimes" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="16" height="12" rx="2" fill="url(#gradTimes)" />
                  <path d="M8 20 l4 -4 l4 4" fill="none" stroke="#f59e0b" strokeWidth="2" />
                </svg>
                Times Square & Broadway
              </h5>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The "Crossroads of the World" and a likely World Cup celebration hub. Neon lights, massive crowds, and the heart of the Theater District.
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Food Scene */}
        <article className="editorial-body theme-rose">
          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-rose-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 mb-2">Culinary Highlights</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Pizza:</strong> Joe's, Lombardi's, Juliana's</li>
               <li>• <strong>Bagels:</strong> Russ & Daughters, Ess-a-Bagel</li>
               <li>• <strong>Pastrami:</strong> Katz's Delicatessen</li>
               <li>• <strong>Global:</strong> Koreatown & Chinatown</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Food" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradFoodNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f43f5e" />
                  <stop offset="1" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <rect x="5" y="7" width="4" height="10" rx="1" fill="#f59e0b" />
              <rect x="11" y="7" width="8" height="10" rx="2" fill="url(#gradFoodNY)" />
            </svg>
            Food Scene: Fuel Your World Cup
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            From dollar slices to Michelin stars, New York's culinary landscape is as diverse as its people.
          </p>

           <div className="my-8 aspect-video bg-slate-100 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 relative overflow-hidden">
             <OptimizedImage
               src="/images/images articles/new york city guide/Interactive Dining Guide.webp"
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

          <div className="space-y-8">
            {/* Iconic NYC Eats */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Pizza" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradPizza" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2 l-10 18 h20 z" fill="url(#gradPizza)" />
                  <circle cx="12" cy="12" r="1.5" fill="#ef4444" />
                </svg>
                Iconic NYC Eats
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside text-slate-700 dark:text-slate-200">
                <li><strong>Classic Pizza:</strong> The fold is mandatory. Try <strong>Joe's</strong> (Greenwich Village) for the quintessential slice, or sit down at <strong>Lombardi's</strong> or <strong>Juliana's</strong>.</li>
                <li><strong>Authentic Bagels:</strong> A morning ritual. <strong>Russ & Daughters</strong> and <strong>Ess-a-Bagel</strong> set the standard.</li>
                <li><strong>Legendary Pastrami:</strong> <strong>Katz's Delicatessen</strong> has been serving massive sandwiches since 1888. It's an experience.</li>
              </ul>
            </div>

            {/* Global Flavors */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Global" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradGlobal" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" fill="url(#gradGlobal)" />
                  <path d="M3.6 9 h16.8 M3.6 15 h16.8" stroke="#ffffff" strokeWidth="1" />
                  <path d="M12 3 c0 0 4 4 4 9 s-4 9 -4 9 s-4 -4 -4 -9 s4 -9 4 -9" stroke="#ffffff" strokeWidth="1" />
                </svg>
                Global Cuisine
              </h4>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                You can eat your way around the world without leaving the boroughs. Explore <strong>Koreatown</strong> in Manhattan for BBQ, or head to <strong>Chinatown</strong> for dumplings. Queens is famously the most diverse food destination on the planet.
              </p>
            </div>

            {/* Fan Gathering Spots */}
            <div>
              <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
                <svg className="h4-icon-svg" role="img" aria-label="Beer" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradBeer" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M7 6 h10 v12 a2 2 0 0 1 -2 2 h-6 a2 2 0 0 1 -2 -2 z" fill="url(#gradBeer)" />
                  <path d="M7 6 c0 -1.5 1.5 -3 5 -3 s5 1.5 5 3" fill="#ffffff" />
                </svg>
                Football Fan Gathering Spots
              </h4>
              <ul className="leading-relaxed space-y-2 list-disc list-inside text-slate-700 dark:text-slate-200">
                <li><strong>Bar 43 Queens:</strong> Known as the "home of soccer in Queens" - attracts numerous fan communities from the diverse Sunnyside neighborhood.</li>
                <li><strong>National Team Bars:</strong> Search for your national team's official supporters club—they'll have watch parties for matches you're not attending.</li>
              </ul>
            </div>
            
            {/* Match Day Atmosphere Callout */}
            <div className="mt-6 p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800">
               <h5 className="font-semibold text-rose-700 dark:text-rose-300 mb-2 flex items-center gap-2">
                 <i className="ri-football-line"></i> Match Day Atmosphere
               </h5>
               <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                 Expect the city to transform during the World Cup. NYC will host FIFA Fan Festivals, sports bar screenings, and neighborhood celebrations throughout the tournament. Every match day will feel like a global street party.
               </p>
            </div>

          </div>
          <hr className="editorial-divider" />
        </article>

        {/* PART 3/5: Pickup games & Fan gatherings */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-[#01b47d]"></i>
            Matchday Pickup Games & Fan Gatherings
          </h3>
          <p className="whitespace-pre-line">
            {`Head to Washington Square Park or Central Park's Great Lawn early on match days to see impromptu pickup games and fan gatherings. The diversity of New York means you'll encounter supporters from every competing nation—it's the World Cup atmosphere amplified by the city's international character.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Information: What You Need to Know */}
        <article id="tips" className="editorial-body theme-emerald">
          {/* [SCROLL ANCHOR] */}
          <div id="tips-anchor" className="scroll-mt-24"></div>

          {/* [QUICK SUMMARY] */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Essential Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Airports:</strong> JFK, LGA, EWR (Newark)</li>
               <li>• <strong>Weather:</strong> Hot & Humid (July Avg 85°F)</li>
               <li>• <strong>Safety:</strong> Very safe; standard urban precautions</li>
               <li>• <strong>Culture:</strong> Fast-paced; Tipping 18-20% expected</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Information" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradInfo2NY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#gradInfo2NY)" />
              <rect x="11" y="10" width="2" height="6" rx="1" fill="#ffffff" />
              <rect x="11" y="7" width="2" height="2" rx="1" fill="#ffffff" />
            </svg>
            Practical Information: What You Need to Know
          </h3>

          {/* [SUBTITLE/DECK] */}
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             Navigating a new city requires insider knowledge. From airports to tipping culture, here is your survival guide.
          </p>

          {/* Getting to NYC */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Plane" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradPlaneNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M3 12 l8 -2 l0 -5 l2 5 l8 2 l-8 2 l-2 5 l0 -5z" fill="url(#gradPlaneNY)" />
              </svg>
              Getting to NYC
            </h4>
            <p className="leading-relaxed mb-3">
              <strong>John F. Kennedy (JFK)</strong>, <strong>LaGuardia (LGA)</strong>, and <strong>Newark Liberty (EWR)</strong> serve the region.
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>JFK:</strong> Connected to subway/LIRR via AirTrain. International hub.</li>
              <li><strong>LGA:</strong> Closest to Manhattan (bus/taxi only, no train). Domestic flights.</li>
              <li><strong>EWR:</strong> Best for staying in New Jersey (near MetLife Stadium). Connected by NJ Transit.</li>
              <li><strong>Taxis/Rideshare:</strong> Flat rates exist from JFK to Manhattan ($70+). EWR to Manhattan can be expensive ($100+).</li>
            </ul>
          </div>

          {/* Weather & What to Pack */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Sun" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradSunNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="4" fill="url(#gradSunNY)" />
                <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3 M5 5 l2 2 M17 17 l2 2 M19 5 l-2 2 M7 17 l-2 2" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Weather & What to Pack
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside mb-3">
              <li><strong>Highs:</strong> 84–86°F (29–30°C)</li>
              <li><strong>Lows:</strong> 75–78°F (24–26°C)</li>
              <li><strong>Humidity:</strong> High (Sticky summer heat)</li>
              <li>Occasional thunderstorms</li>
            </ul>
            <p className="leading-relaxed mb-2"><strong>Pack:</strong></p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Lightweight, breathable clothing (Cotton/Linen)</li>
              <li>Comfortable walking shoes (You will walk miles)</li>
              <li>Compact umbrella</li>
              <li>Light jacket (Indoors are heavily air-conditioned)</li>
            </ul>
          </div>

          {/* Stadium Bag Policy */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Bag" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradBagNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#f43f5e" />
                    <stop offset="1" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
                <path d="M6 8 h12 v10 a2 2 0 0 1 -2 2 h-8 a2 2 0 0 1 -2 -2 z" fill="url(#gradBagNY)" />
                <path d="M8 8 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#f43f5e" strokeWidth="2" />
              </svg>
              Stadium Bag Policy
            </h4>
            <p className="leading-relaxed mb-3">
              MetLife Stadium enforces a strict clear bag policy.
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Permitted:</strong> Clear bags (12"x6"x12"), small purses (4.5"x6.5").</li>
              <li><strong>Prohibited:</strong> Backpacks, large totes, duffel bags.</li>
              <li>One bag per person. Plan accordingly.</li>
            </ul>
          </div>

          {/* Money & Costs */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Money" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradMoneyNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect x="4" y="7" width="16" height="10" rx="2" fill="url(#gradMoneyNY)" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
                <path d="M12 10 v4 M10.5 11.5 h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Money & Costs
            </h4>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Currency:</strong> US Dollar (USD). Contactless payment widely accepted.</li>
              <li><strong>Tipping:</strong> 18-20% at restaurants, $1-2 per drink at bars.</li>
              <li><strong>Subway:</strong> $2.90 per ride (OMNY contactless payment).</li>
              <li><strong>Dining:</strong> $15–25 (casual), $50+ (sit-down), $100+ (upscale).</li>
            </ul>
          </div>

          {/* Safety & Street Smarts */}
          <div className="mb-6">
            <h4 className="editorial-h4 animate-fade-up mb-3 flex items-center gap-2">
              <svg className="h4-icon-svg" role="img" aria-label="Shield" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradShieldNY" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M12 4 l8 3 v5 c0 5 -4 7 -8 9 c-4 -2 -8 -4 -8 -9 v-5z" fill="url(#gradShieldNY)" />
                <path d="M8 12 l3 3 l5 -5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Safety & Street Smarts
            </h4>
            <p className="leading-relaxed mb-3">
              New York is one of the safest large cities in America. Basic street smarts apply:
            </p>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>Be aware of your surroundings, especially late at night.</li>
              <li>Subways are safe 24/7, but late at night stick to cars with other people (usually the conductor's car in the middle).</li>
              <li>Sidewalk etiquette: Don't stop in the middle of the sidewalk. Step aside to check your phone.</li>
            </ul>
          </div>

        {/* Language & Connectivity */}
        <article className="editorial-body">
          <div className="premium-section-header mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-premium-lg flex items-center justify-center">
                <i className="ri-global-line text-[#01b47d]" aria-hidden="true"></i>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-display">
                Language & Connectivity
              </h3>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#01b47d] to-[#01b47d] rounded-full"></div>
          </div>

          {/* Premium Connectivity Cards - Enhanced Design */}
          <div id="connectivity" style={{scrollMarginTop: '120px'}} className="grid gap-6 mb-8">
            {/* Language Diversity - Premium Card */}
            <div className="premium-connectivity-card group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-[#01b47d]/5 dark:from-purple-900/20 dark:via-slate-800/40 dark:to-[#008f63]/20 border border-purple-200/50 dark:border-purple-700/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-[#01b47d]/10 dark:from-purple-800/30 dark:to-[#008f63]/30 flex items-center justify-center border border-purple-200/50 dark:border-purple-600/30">
                    <i className="ri-translate-2-line text-purple-600 dark:text-purple-400 text-2xl" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Language Diversity</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        English is primary, but you'll hear dozens of languages on any subway ride. NYC is a true global melting pot where every continent is represented.
                      </p>
                    </div>
                    <span className="bg-gradient-to-r from-purple-100 to-[#01b47d]/10 dark:from-purple-800/30 dark:to-[#008f63]/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Global Hub
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="premium-stat-box">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">8M+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">People from every continent</div>
                    </div>
                    <div className="premium-stat-box">
                      <div className="text-2xl font-bold text-[#01b47d] dark:text-[#01b47d] mb-1">200+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Languages spoken daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connectivity Hub - Split Layout */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Free Wi-Fi Access */}
              <div className="premium-connectivity-card group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 via-white to-[#01b47d]/5 dark:from-green-900/20 dark:via-slate-800/40 dark:to-[#008f63]/20 border border-green-200/50 dark:border-green-700/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-[#01b47d]/10 dark:from-green-800/30 dark:to-[#008f63]/30 flex items-center justify-center border border-green-200/50 dark:border-green-600/30">
                      <i className="ri-wifi-line text-green-600 dark:text-green-400 text-xl" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Free Wi-Fi Network</h4>
                      <span className="bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                        Free
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      Stay connected across the city with extensive free Wi-Fi coverage in public spaces, transit hubs, and popular venues.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                        <i className="ri-coffee-line text-green-600"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cafes & Restaurants</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                        <i className="ri-subway-line text-green-600"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">All subway stations</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                        <i className="ri-park-line text-green-600"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Public parks & spaces</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Connectivity */}
              <div className="premium-connectivity-card group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#01b47d]/5 via-white to-[#01b47d]/5 dark:from-[#008f63]/20 dark:via-slate-800/40 dark:to-[#008f63]/20 border border-[#01b47d]/20 dark:border-[#008f63]/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#008f63]/30 dark:to-[#008f63]/30 flex items-center justify-center border border-[#01b47d]/20 dark:border-[#01b47d]/30">
                      <i className="ri-sim-card-line text-[#01b47d] dark:text-[#01b47d] text-xl" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Mobile Connectivity</h4>
                      <span className="bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] px-2 py-1 rounded-full text-xs font-semibold">
                        5G Ready
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      Get the best rates and coverage with US SIM cards available at multiple convenient locations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-[#01b47d]/5 dark:bg-[#008f63]/20">
                        <i className="ri-airport-line text-[#01b47d]"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Airport kiosks</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-[#01b47d]/5 dark:bg-[#008f63]/20">
                        <i className="ri-store-2-line text-[#01b47d]"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Major retailers</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-[#01b47d]/5 dark:bg-[#008f63]/20">
                        <i className="ri-smartphone-line text-[#01b47d]"></i>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">International data plans</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Apps - Premium Callout */}
            <div className="premium-apps-callout group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-[#01b47d]/5 dark:from-slate-800/40 dark:via-slate-800/20 dark:to-[#008f63]/20 border border-slate-200/50 dark:border-slate-700/30 p-5 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#01b47d]/10 to-purple-100/20 dark:from-[#008f63]/10 dark:to-purple-900/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-[#01b47d]/10 dark:from-green-800/30 dark:to-[#008f63]/30 flex items-center justify-center border border-green-200/50 dark:border-green-600/30">
                    <i className="ri-smartphone-line text-green-600 dark:text-green-400 text-2xl" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Essential Apps for Your Journey</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Download these must-have apps before you arrive for seamless navigation, communication, and match day experience.
                      </p>
                    </div>
                    <span className="bg-gradient-to-r from-green-100 to-[#01b47d]/10 dark:from-green-800/30 dark:to-[#008f63]/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Must Download
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="app-download-card group/item">
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-[#01b47d]/5 dark:bg-[#008f63]/20 border border-[#01b47d]/20 dark:border-[#008f63]/30 transition-all duration-200 hover:bg-[#008f63]/10 dark:hover:bg-[#008f63]/30">
                        <div className="w-10 h-10 rounded-lg bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center">
                          <i className="ri-subway-line text-[#01b47d] text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">NJ Transit</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Train & bus schedules</div>
                        </div>
                        <i className="ri-download-line text-[#01b47d]"></i>
                      </div>
                    </div>
                    <div className="app-download-card group/item">
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-green-50/50 dark:bg-green-900/20 border border-green-200/30 dark:border-green-700/30 transition-all duration-200 hover:bg-green-100/50 dark:hover:bg-green-800/30">
                        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-800/30 flex items-center justify-center">
                          <i className="ri-train-line text-green-600 text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">MTA</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">NYC subway & buses</div>
                        </div>
                        <i className="ri-download-line text-green-600"></i>
                      </div>
                    </div>
                    <div className="app-download-card group/item">
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-yellow-50/50 dark:bg-yellow-900/20 border border-yellow-200/30 dark:border-yellow-700/30 transition-all duration-200 hover:bg-yellow-100/50 dark:hover:bg-yellow-800/30">
                        <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-800/30 flex items-center justify-center">
                          <i className="ri-car-line text-yellow-600 text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Rideshare Apps</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Uber, Lyft & more</div>
                        </div>
                        <i className="ri-download-line text-yellow-600"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article id="tickets" className="editorial-body theme-purple">
          <div id="tickets-anchor" className="scroll-mt-24"></div>
          
          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-purple-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-purple-600 mb-2">Ticket Intel</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>Presale:</strong> Sept 2025 (FIFA.com)</li>
               <li>• <strong>Prices:</strong> $60 - $6,730 (Est.)</li>
               <li>• <strong>Final:</strong> Highest Demand Match</li>
               <li>• <strong>Strategy:</strong> Apply for all matches</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Ticket" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradTicketNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#d8b4fe" />
                </linearGradient>
              </defs>
              <rect x="3" y="4" width="18" height="16" rx="2" fill="url(#gradTicketNY)" />
              <circle cx="3" cy="12" r="2" fill="#ffffff" />
              <circle cx="21" cy="12" r="2" fill="#ffffff" />
              <path d="M9 4 v16" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            Ticket Information & Booking Strategy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <i className="ri-calendar-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Phase 1: Presale Draw</h4>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">September 10, 2025</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Open to people 18+ with FIFA accounts and Visa cardholders. Enter the ticket lottery at FIFA.com.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                  <span className="text-slate-500 dark:text-slate-400">Group Stage</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Starting at $60</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500 dark:text-slate-400">Final (Cat 1)</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Up to $6,730</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <i className="ri-calendar-2-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Phase 2: Early Draw</h4>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">Late October 2025</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Second chance lottery for those who missed Phase 1. Limited availability expected.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                  <span className="text-slate-500 dark:text-slate-400">Availability</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Limited</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500 dark:text-slate-400">Competition</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">High demand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-800/30 rounded-full text-amber-600 dark:text-amber-400 flex-shrink-0">
                <i className="ri-vip-crown-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">Hospitality Packages</h4>
                <p className="text-amber-800 dark:text-amber-200 mb-4 leading-relaxed">
                  MetLife Stadium offers hospitality packages featuring premium tickets, entertainment, food & beverage. Sold through FIFA's official hospitality partner with guaranteed tickets and VIP experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <i className="ri-check-line text-amber-600 dark:text-amber-400"></i> Guaranteed tickets
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <i className="ri-check-line text-amber-600 dark:text-amber-400"></i> Premium seating
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <i className="ri-check-line text-amber-600 dark:text-amber-400"></i> VIP experiences
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <i className="ri-check-line text-amber-600 dark:text-amber-400"></i> Food & beverage included
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-800/30 rounded-lg text-amber-800 dark:text-amber-200 text-sm font-semibold">
                  Final Packages: $3,000 - $10,000+ per person
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
             <div className="flex items-start gap-3">
               <i className="ri-alert-line text-red-600 dark:text-red-400 text-xl mt-0.5"></i>
               <div>
                 <h4 className="font-bold text-sm uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">Avoid Ticket Scams</h4>
                 <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                   Book early through official channels only. FIFA's official hospitality partner is the only authorized seller of hospitality packages. Be wary of third-party sellers and always verify authenticity.
                 </p>
               </div>
             </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why New York Will Make Your World Cup Unforgettable */}
        <article id="why-nyc-wins" className="editorial-body theme-rose">
          <div id="why-nyc-wins-anchor" className="scroll-mt-24"></div>

          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-rose-500">
             <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 mb-2">The Host City</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>The Final:</strong> Hosting the Championship</li>
               <li>• <strong>Capacity:</strong> 82,500+ (MetLife Stadium)</li>
               <li>• <strong>Experience:</strong> Times Square Fan Fest</li>
               <li>• <strong>Legacy:</strong> 1994 World Cup Host</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-2 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Sparkle" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradSparkleNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f43f5e" />
                  <stop offset="1" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <path d="M12 2 l2 8 l8 2 l-8 2 l-2 8 l-2 -8 l-8 -2 l8 -2z" fill="url(#gradSparkleNY)" />
            </svg>
            Why New York Will Make Your World Cup Unforgettable
          </h3>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
             This isn't just about 90 minutes of football. It's about experiencing the world's most electrifying tournament in the world's most electrifying city.
          </p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-rose-600 mb-1">1.2M+</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Expected Visitors</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-rose-600 mb-1">200+</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">Nations Represented</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg text-center border border-slate-200 dark:border-navy-700">
                <div className="text-3xl font-bold text-rose-600 mb-1">200K</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">People in Times Sq</div>
             </div>
          </div>

          <h4 className="editorial-h4 animate-fade-up mb-2">Subway Stories & Global Gatherings</h4>
          <p className="leading-relaxed mb-4">
            Ride with fans from Brazil, Nigeria, and South Korea—all sharing the same dream. The diversity mirrors the tournament itself—every language, every culture, united by football.
          </p>

          <blockquote className="my-8 pl-6 border-l-4 border-rose-500 italic text-2xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            "You'll arrive a football fan. You'll leave with stories no other city could provide. This is the World Cup experience amplified by New York's unmatched scale and diversity."
          </blockquote>

          <h4 className="editorial-h4 animate-fade-up mb-2">Times Square Celebrations</h4>
          <p className="leading-relaxed mb-4">
            Post-match celebrations with 200,000 people from every nation on Earth. The energy is non-stop, 24/7.
          </p>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 dark:from-rose-900/20 dark:to-pink-900/20 dark:border-rose-800 shadow-sm">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-rose-100 dark:bg-rose-800 rounded-full text-rose-600 dark:text-rose-300">
                 <i className="ri-heart-line text-2xl"></i>
               </div>
               <div>
                 <h4 className="font-bold text-lg text-rose-900 dark:text-rose-100 mb-2">The Promise</h4>
                 <p className="leading-relaxed text-rose-800 dark:text-rose-200">
                   The memories last forever. Whether you're in the stadium or in the streets, you are part of history.
                 </p>
               </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Plan Your East Coast World Cup Journey */}
        <article id="east-coast-journey" className="editorial-body theme-indigo">
          <div id="east-coast-journey-anchor" className="scroll-mt-24"></div>

          <div className="mb-8 p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border-l-4 border-[#01b47d]">
             <h4 className="font-bold text-sm uppercase tracking-wider text-[#01b47d] mb-2">Regional Hub</h4>
             <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
               <li>• <strong>North:</strong> Boston (Train: 4h)</li>
               <li>• <strong>South:</strong> Philadelphia (Train: 1.5h)</li>
               <li>• <strong>Flights:</strong> 3 Major Airports (JFK, EWR, LGA)</li>
               <li>• <strong>Base:</strong> Stay in NYC, Day Trip to Philly</li>
             </ul>
          </div>

          <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-3">
            <svg className="heading-icon-svg" role="img" aria-label="Route" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradRouteNY" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle cx="6" cy="18" r="3" fill="none" stroke="url(#gradRouteNY)" strokeWidth="2" />
              <circle cx="18" cy="6" r="3" fill="none" stroke="url(#gradRouteNY)" strokeWidth="2" />
              <path d="M9 15 Q12 15 12 12 Q12 9 15 9" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            Plan Your East Coast World Cup Journey
          </h3>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-8 leading-relaxed">
            New York/New Jersey is the gateway to an unforgettable East Coast World Cup experience, with multiple host cities easily accessible by train, car, or short flights.
          </p>

          <div className="space-y-6">
            {/* Route 1: Northeast Corridor */}
            <div className="p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-lg text-[#01b47d] dark:text-[#01b47d]">
                  <i className="ri-train-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Northeast Corridor</h4>
                  <p className="text-xs font-medium text-[#01b47d] dark:text-[#01b47d] uppercase tracking-wide">Classic East Coast Experience</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Experience the best of the East Coast: Start in New York/New Jersey, take the train to Philadelphia for history and cheesesteaks, then continue to Boston for New England charm.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">NY/NJ</span>
                <i className="ri-arrow-right-line text-slate-400"></i>
                <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-[#01b47d] dark:text-[#01b47d] hover:border-[#008f63]">Philadelphia</Link>
                <i className="ri-arrow-right-line text-slate-400"></i>
                <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-[#01b47d] dark:text-[#01b47d] hover:border-[#008f63]">Boston</Link>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><i className="ri-time-line"></i> Easy train connections</span>
                <span className="flex items-center gap-1"><i className="ri-map-pin-line"></i> Historic cities</span>
              </div>
            </div>

            {/* Route 2: Cross-Border */}
            <div className="p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <i className="ri-earth-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Cross-Border Connection</h4>
                  <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">International Experience</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Combine NY/NJ with Toronto for an international experience, just a short flight or scenic drive away.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">🇺🇸 NY/NJ</span>
                <i className="ri-arrow-right-line text-slate-400"></i>
                <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-[#01b47d] dark:text-[#01b47d] hover:border-[#008f63]">🇨🇦 Toronto</Link>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><i className="ri-plane-line"></i> Short flight</span>
                <span className="flex items-center gap-1"><i className="ri-global-line"></i> International flair</span>
              </div>
            </div>

            {/* Route 3: Eastern Seaboard */}
            <div className="p-6 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700 hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                  <i className="ri-sun-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Eastern Seaboard</h4>
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wide">Southern Cultural Vibes</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Extend your journey south to Atlanta or Miami for completely different cultural vibes.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">NY/NJ</span>
                <i className="ri-arrow-right-line text-slate-400"></i>
                <Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-[#01b47d] dark:text-[#01b47d] hover:border-[#008f63]">Atlanta</Link>
                <i className="ri-arrow-right-line text-slate-400"></i>
                <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="px-3 py-1 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-full text-xs font-semibold text-[#01b47d] dark:text-[#01b47d] hover:border-[#008f63]">Miami</Link>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><i className="ri-flight-takeoff-line"></i> Short flights</span>
                <span className="flex items-center gap-1"><i className="ri-music-line"></i> Diverse cultures</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#01b47d]/5 dark:bg-[#008f63]/20 rounded-xl border border-[#01b47d]/10 dark:border-[#008f63]/30 text-center">
             <h4 className="font-bold text-[#008f63] dark:text-[#01b47d]/10 mb-2">Ready to Explore More?</h4>
             <p className="text-[#008f63] dark:text-[#01b47d]/20 text-sm mb-4">
               Discover all 16 World Cup 2026 host cities and create your perfect tournament journey.
             </p>
             <Link to="/world-cup-2026-host-cities" className="inline-flex items-center gap-2 px-6 py-3 bg-[#01b47d] text-white font-medium rounded-full hover:bg-[#008f63] transition-all shadow-lg hover:shadow-xl">
               <i className="ri-map-2-line"></i>
               <span>Browse All Host Cities</span>
             </Link>
          </div>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <div className="premium-section-header mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-premium-lg flex items-center justify-center">
                <i className="ri-flag-line text-[#01b47d]" aria-hidden="true"></i>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-display">
                Start Planning Your 2026 World Cup Trip to New York
              </h3>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#01b47d] to-green-500 rounded-full"></div>
          </div>

          <div className="planning-intro-premium p-6 sm:p-8 mb-8">
            <div className="intro-content flex-col sm:flex-row">
              <div className="intro-icon">
                <i className="ri-time-line text-[#01b47d]" aria-hidden="true"></i>
              </div>
              <div className="intro-text">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-lg">The Countdown Begins</h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Hotels are booking up. Flights are being reserved. And the world is preparing to descend on the New York metropolitan area for the biggest sporting event on the planet.
                </p>
              </div>
            </div>
            <div className="countdown-timer sm:grid-cols-3">
              <div className="timer-item">
                <span className="timer-number">2026</span>
                <span className="timer-label">World Cup Year</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">July</span>
                <span className="timer-label">Final Month</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">16</span>
                <span className="timer-label">Host Cities</span>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* PART 5/5: Your Action Plan (Premium Redesign) */}
        <article className="editorial-body">
          {/* Premium Header */}
          <div className="premium-section-header mb-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#01b47d]/10 to-green-100 dark:from-[#008f63]/30 dark:to-green-800/30 flex items-center justify-center border border-[#01b47d]/20 dark:border-[#01b47d]/30">
                <i className="ri-check-double-line text-[#01b47d] dark:text-[#01b47d] text-2xl" aria-hidden="true"></i>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-slate-100 font-display mb-2">
                  Your Action Plan
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                  Six essential steps to secure your World Cup 2026 experience
                </p>
              </div>
            </div>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#01b47d] via-green-500 to-[#01b47d] rounded-full"></div>
          </div>

          {/* Premium Action Plan Timeline */}
          <div className="mb-12">
            <div className="space-y-6">
              {/* Step 1 - FIFA Tickets */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#01b47d]/5 via-white to-green-50 dark:from-[#008f63]/20 dark:via-slate-800/40 dark:to-green-900/20 border border-[#01b47d]/20 dark:border-[#008f63]/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#01b47d]/10 to-green-100 dark:from-[#008f63]/30 dark:to-green-800/30 flex items-center justify-center border-2 border-[#01b47d]/20 dark:border-[#01b47d]/30">
                      <span className="text-2xl font-bold text-[#008f63] dark:text-[#01b47d]">1</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Register for FIFA tickets</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          Secure your spot at the world's biggest tournament. Ticket registration opens in phases, so act quickly when sales begin.
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-[#01b47d]/10 to-green-100 dark:from-[#008f63]/30 dark:to-green-800/30 text-[#008f63] dark:text-[#01b47d] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        Priority #1
                      </span>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://www.fifa.com/tickets"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#01b47d] to-green-600 hover:from-[#008f63] hover:to-green-700 text-white font-semibold transition-all duration-200 hover:shadow-lg group"
                      >
                        <i className="ri-external-link-line text-lg group-hover:scale-110 transition-transform"></i>
                        <span>Get FIFA Tickets</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Accommodations */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#01b47d]/5 via-white to-[#01b47d]/5 dark:from-[#008f63]/20 dark:via-slate-800/40 dark:to-[#008f63]/20 border border-[#01b47d]/20 dark:border-[#008f63]/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#008f63]/30 dark:to-[#008f63]/30 flex items-center justify-center border-2 border-[#01b47d]/20 dark:border-[#01b47d]/30">
                      <span className="text-2xl font-bold text-[#008f63] dark:text-[#01b47d]">2</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Book accommodations early</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          Aim for 6-12 months in advance to secure the best locations near transportation hubs.
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#008f63]/30 dark:to-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        Book Now
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#01b47d] to-[#01b47d] hover:from-[#008f63] hover:to-[#008f63] text-white font-semibold transition-all duration-200 hover:shadow-lg"
                      >
                        <i className="ri-hotel-line text-lg"></i>
                        <span>Booking.com</span>
                      </a>
                      <a
                        href="https://www.hotels.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold transition-all duration-200 hover:shadow-lg"
                      >
                        <i className="ri-building-line text-lg"></i>
                        <span>Hotels.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Flights */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-900/20 dark:via-slate-800/40 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800/30 dark:to-pink-800/30 flex items-center justify-center border-2 border-purple-200/50 dark:border-purple-600/30">
                      <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">3</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Reserve flights</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          Compare prices across airlines for the best deals. Consider flexible dates for better rates.
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/30 dark:to-pink-800/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        Compare
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                      <a
                        href="https://www.skyscanner.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-200 hover:shadow-lg"
                      >
                        <i className="ri-plane-line text-lg"></i>
                        <span>Skyscanner</span>
                      </a>
                      <a
                        href="https://www.google.com/flights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#01b47d] to-purple-600 hover:from-[#008f63] hover:to-purple-700 text-white font-semibold transition-all duration-200 hover:shadow-lg"
                      >
                        <i className="ri-search-line text-lg"></i>
                        <span>Google Flights</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Research */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-orange-900/20 dark:via-slate-800/40 dark:to-amber-900/20 border border-orange-200/50 dark:border-orange-700/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-800/30 dark:to-amber-800/30 flex items-center justify-center border-2 border-orange-200/50 dark:border-orange-600/30">
                      <span className="text-2xl font-bold text-orange-700 dark:text-orange-400">4</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-4">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Research neighborhoods</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Plan your non-match activities and explore the city's diverse areas. Each neighborhood offers unique experiences.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="premium-stat-box">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">5</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Boroughs to explore</div>
                      </div>
                      <div className="premium-stat-box">
                        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">100+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Unique neighborhoods</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 - Transit App */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#01b47d]/5 via-white to-[#01b47d]/5 dark:from-[#008f63]/20 dark:via-slate-800/40 dark:to-[#008f63]/20 border border-[#01b47d]/20 dark:border-[#008f63]/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#008f63]/30 dark:to-[#008f63]/30 flex items-center justify-center border-2 border-[#01b47d]/20 dark:border-[#01b47d]/30">
                      <span className="text-2xl font-bold text-[#008f63] dark:text-[#01b47d]">5</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Download the NJ Transit app</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          Essential for seamless stadium transportation on match days. Real-time updates and mobile ticketing.
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#008f63]/30 dark:to-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        Must Have
                      </span>
                    </div>
                    <div className="mt-6">
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#01b47d] to-[#01b47d] text-white font-semibold">
                        <i className="ri-train-line text-lg"></i>
                        <span>NJ Transit App</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 - Supporters Group */}
              <div className="group">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-red-900/20 dark:via-slate-800/40 dark:to-rose-900/20 border border-red-200/50 dark:border-red-700/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-800/30 dark:to-rose-800/30 flex items-center justify-center border-2 border-red-200/50 dark:border-red-600/30">
                      <span className="text-2xl font-bold text-red-700 dark:text-red-400">6</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">Join your national team's supporters group</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          Connect with fellow fans for watch parties and meetups. Share the experience with your community.
                        </p>
                      </div>
                      <span className="bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-800/30 dark:to-rose-800/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        Community
                      </span>
                    </div>
                    <div className="mt-6">
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold">
                        <i className="ri-group-line text-lg"></i>
                        <span>Find Your Group</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Final Message */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20 border border-amber-200/50 dark:border-amber-700/30 p-6 sm:p-10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-slate-800/20 dark:via-transparent dark:to-slate-800/10 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-700/30 dark:to-orange-700/30 flex items-center justify-center border-2 border-amber-300/50 dark:border-amber-600/30">
                    <i className="ri-trophy-line text-amber-600 dark:text-amber-400 text-3xl" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-2xl mb-4">The Final Destination</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
                      The 2026 FIFA World Cup Final will be played at MetLife Stadium in New Jersey. But the experience? That belongs to New York City—the only place big enough, diverse enough, and electric enough to host the world's biggest game.
                    </p>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-800/30 dark:to-orange-800/30 rounded-2xl p-6 border border-amber-200/50 dark:border-amber-700/30">
                      <strong className="text-xl text-slate-900 dark:text-slate-100 leading-relaxed">
                        See you in July 2026. Come for the football. Stay for the experience of a lifetime.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>
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
            {/* Recommendation 1: Philadelphia */}
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
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">Northeast Neighbor</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Philadelphia</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Lincoln Financial Field guide and historic city attractions.</p>
              </div>
            </Link>

            {/* Recommendation 2: Boston */}
            <Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="group block relative overflow-hidden rounded-2xl aspect-video md:aspect-[1.5/1]">
               <OptimizedImage 
                src="/images/cities/boston-world-cup-2026.webp" 
                alt="Boston World Cup Guide"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 rounded bg-[#01b47d]/20 backdrop-blur-sm border border-[#01b47d]/30 text-[#01b47d] text-xs font-bold uppercase tracking-wider mb-2">New England Hub</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#008f63] transition-colors">Boston</h4>
                <p className="text-slate-300 text-sm line-clamp-2">Gillette Stadium guide and revolutionary history tours.</p>
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
                <a href={`https://twitter.com/intent/tweet?text=New%20York%20New%20Jersey%20World%20Cup%202026%20Guide&url=${siteUrl}${pageUrl}`} 
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
      
      <div aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#01b47d]/30 to-transparent dark:via-[#01b47d]/25"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] h-2 w-2 rotate-45 rounded-sm bg-[#01b47d]/30 dark:bg-[#01b47d]/25"></div>
        </div>
      </div>
      
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <WorldClassFAQ 
            faqs={[
              // Enhanced FAQ with structured data for rich snippets
              {
                id: 1,
                question: "Where will World Cup matches be played in New York/New Jersey?",
                answer: "All eight matches, including the final, will be held at MetLife Stadium in East Rutherford, New Jersey. During the tournament, FIFA will refer to the venue as 'New York New Jersey Stadium' due to sponsorship policies. The stadium is located approximately 10 miles west of New York City.",
                category: "Stadium Information",
                popularity: 10,
                readingTime: 2
              },
              {
                id: 2,
                question: "How many matches will be played at MetLife Stadium?",
                answer: "MetLife Stadium will host eight World Cup matches in total, including the highly coveted final on July 19, 2026. This makes it the most significant venue of the tournament.",
                category: "Stadium Information",
                popularity: 9,
                readingTime: 1
              },
              {
                id: 3,
                question: "What is the capacity of MetLife Stadium for World Cup matches?",
                answer: "The stadium will accommodate approximately 75,000 fans for World Cup matches. The venue is being modified specifically for the tournament, with 1,740 permanent seats being removed from the corners to widen the field to FIFA's required dimensions.",
                category: "Stadium Information",
                popularity: 8,
                readingTime: 2
              },
              {
                id: 4,
                question: "When is the World Cup Final?",
                answer: "The 2026 FIFA World Cup Final will be played on July 19, 2026, at MetLife Stadium. This will be the culminating match of the 48-team, 104-match tournament.",
                category: "Match Schedule",
                popularity: 10,
                readingTime: 1
              },
              {
                id: 5,
                question: "How do I get to MetLife Stadium from New York City?",
                answer: "The most efficient way is by train: Take any NJ Transit train from Penn Station (located at 32nd Street between 7th and 8th Avenues) to Secaucus Junction. At Secaucus Junction, transfer to the Meadowlands Rail Line shuttle train that goes directly to MetLife Stadium. The entire journey takes approximately 25-30 minutes.",
                category: "Transportation",
                popularity: 9,
                readingTime: 3
              },
              {
                id: 6,
                question: "How much does transportation to the stadium cost?",
                answer: "A round-trip NJ Transit train ticket from Penn Station to MetLife Stadium (via Secaucus Junction) typically costs $15-20. Children ages 5-11 receive reduced fares, and kids under 5 ride free. Coach USA bus fares from Port Authority are comparable. Purchase tickets in advance through the NJ Transit mobile app to avoid additional charges.",
                category: "Transportation",
                popularity: 7,
                readingTime: 2
              },
              {
                id: 7,
                question: "How do I buy tickets for World Cup matches in New York/New Jersey?",
                answer: "Tickets must be purchased through FIFA's official ticketing platform at fifa.com/tickets. The process involves multiple sales phases with randomized selection. Register your interest early, as demand for matches at MetLife Stadium—especially the final—will be extraordinarily high.",
                category: "Ticketing",
                popularity: 10,
                readingTime: 2
              },
              {
                id: 8,
                question: "Will tickets be expensive for the World Cup Final at MetLife Stadium?",
                answer: "Yes, expect premium pricing for the final. Based on previous World Cup finals, ticket prices could range from several hundred dollars for upper-level seats to several thousand dollars for premium locations. The New York/New Jersey final is expected to be one of the most expensive World Cup matches in history due to the location and significance.",
                category: "Ticketing",
                popularity: 8,
                readingTime: 2
              },
              {
                id: 9,
                question: "What is the weather like in New York/New Jersey during June-July?",
                answer: "Expect warm to hot weather with temperatures typically ranging from 75-90°F (24-32°C). June and July can be humid with occasional thunderstorms. The World Cup Final on July 19 will likely be warm, so dress accordingly and stay hydrated. Note that MetLife Stadium is open-air with no roof.",
                category: "Weather & Climate",
                popularity: 6,
                readingTime: 2
              },
              {
                id: 10,
                question: "Where should I stay during the World Cup?",
                answer: "Accommodation options span both New York City and New Jersey. Staying near NJ Transit stations in Manhattan (near Penn Station), Hoboken, or other transit-connected areas provides easy access to MetLife Stadium. Book accommodations 12-18 months in advance, as hotels will fill quickly and prices will surge.",
                category: "Accommodation",
                popularity: 8,
                readingTime: 3
              },
              {
                id: 11,
                question: "Will there be special transportation services for the World Cup?",
                answer: "Yes, NJ Transit will operate expanded Meadowlands Rail Service for all World Cup matches. Additionally, FIFA has announced plans for a new $35 million busway and enhanced shuttle services from Secaucus Junction to accommodate the expected crowds of up to 75,000 fans per match.",
                category: "Transportation",
                popularity: 7,
                readingTime: 2
              },
              {
                id: 12,
                question: "Will there be a halftime show at the World Cup Final?",
                answer: "Yes, FIFA announced in September 2024 that the World Cup Final will feature a halftime show for the first time in World Cup history, similar to the NFL's Super Bowl. Global Citizen will co-produce the show, with Coldplay advising on production. This marks a significant departure from traditional World Cup entertainment.",
                category: "Match Experience",
                popularity: 9,
                readingTime: 2
              },
              {
                id: 13,
                question: "What makes MetLife Stadium suitable for the World Cup Final?",
                answer: "MetLife Stadium was selected for several key reasons: its proximity to New York City (a major media and financial hub), capacity for 75,000+ fans, proven track record hosting major sporting events, excellent transportation infrastructure, and access to world-class hotels, restaurants, and international flights. The region's diversity and soccer culture also played significant roles in the selection.",
                category: "Stadium Information",
                popularity: 6,
                readingTime: 3
              },
              {
                id: 14,
                question: "Are there accessibility accommodations at MetLife Stadium?",
                answer: "Yes, MetLife Stadium offers comprehensive accessibility features including wheelchair-accessible seating areas, elevators throughout the venue, accessible restrooms, and assistive listening devices. The Meadowlands Rail Line shuttle from Secaucus Junction also provides accessible transportation. Contact the stadium in advance for specific accommodation needs.",
                category: "Accessibility",
                popularity: 5,
                readingTime: 2
              },
              {
                id: 15,
                question: "What security measures should I expect?",
                answer: "Expect airport-level security screening for all World Cup matches. Prohibited items include large bags, backpacks, outside food and beverages, professional cameras, and any potential weapons. Clear bag policies will be enforced. Arrive early to allow time for thorough security checks.",
                category: "Safety & Security",
                popularity: 7,
                readingTime: 2
              },
              {
                id: 16,
                question: "What else can I do in the area during the World Cup?",
                answer: "The New York/New Jersey region offers world-class attractions including Times Square, Statue of Liberty, Broadway shows, Empire State Building, diverse neighborhoods, countless restaurants representing every cuisine, multiple professional sports venues, museums, and vibrant nightlife. The region's diversity means fans from every country will find familiar cultural touchpoints.",
                category: "Local Attractions",
                popularity: 6,
                readingTime: 3
              }
            ]}
            title="Frequently Asked Questions About New York New Jersey World Cup 2026"
            subtitle="Everything you need to know about attending World Cup matches in the New York/New Jersey region, from stadium access to transportation and ticketing."
            showCategories={true}
            showSearch={true}
            locationSpecific={true}
          />
        </div>
      </section>

      </article>
      </main>
      <Footer />
    </div>
  );
}
