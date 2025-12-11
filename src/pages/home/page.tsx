import { useState, useEffect, useRef, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Button } from '../../components/base/Button';
import { FlightCompareWidget } from '../../components/widgets/FlightCompareWidget';
import { WorldCupCountdown } from '../../components/widgets/WorldCupCountdown';
import { SchemaOrg, generateWebsiteSchema, generateOrganizationSchema, generateImageObjectSchema } from '../../components/seo/SchemaOrg';
import { SEO } from '../../components/common/SEO';
import { CityShowcase } from './components/CityShowcase';
import { HeroSection } from './components/HeroSection';

// --- Original Widgets ---

const TPUnifiedWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=true&border_radius=20&plain=false&color_button=%2301b47d&color_button_text=%23ffffff&color_border=%2301b47d&promo_id=4132&campaign_id=121';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-10 rounded-[20px] bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#01b47d]/30 mx-auto flex justify-center"
    />
  );
});

const TPDestinationWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?currency=usd&trs=468014&shmarker=679735&powered_by=true&locale=en&destination=77&lowest_price=&highest_price=&min_lines=4&color_button=%2301b47d&promo_id=5850&campaign_id=47';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-8 rounded-[20px] bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#01b47d]/30 mx-auto flex justify-center"
    />
  );
});

const TPEventsWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&start_date=2025-11-22&country=US&event_type=Sport&keyword=fifa%20world%20cup&sort=date%2Cdesc&powered_by=true&min_lines=5&width=800&promo_id=5448&campaign_id=183';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-8 rounded-[20px] bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#01b47d]/30 mx-auto flex justify-center"
    />
  );
});

const VrboWidget = memo(() => {
  const VRBO_URL_NYNJ = import.meta.env.VITE_VRBO_URL_NYNJ || 'https://vrbo.tpo.li/8ffslPwi';
  const VRBO_URL_LA = import.meta.env.VITE_VRBO_URL_LA || 'https://vrbo.tpo.li/mglbKB1J';
  const VRBO_URL_GENERAL = import.meta.env.VITE_VRBO_URL_GENERAL || 'https://vrbo.tpo.li/Sj3x6Mp4';
  return (
    <div className="mt-8 mx-auto max-w-[900px]">
      <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-2xl p-6 sm:p-8 border border-white/40 shadow-2xl shadow-[#01b47d]/10">
        <div className="absolute top-4 left-4 z-20 sm:top-4 sm:left-auto sm:right-4 max-w-[calc(100%-2rem)]">
          <a
            href={VRBO_URL_GENERAL}
            target="_blank"
            rel="nofollow noopener sponsored"
            aria-label="Vrbo - Find Your Stay"
          >
            <span
              className="font-space font-bold tracking-wide cursor-pointer hover:opacity-80 transition-opacity text-[22px] sm:text-[28px] leading-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, #0E214B 0, #0E214B 6px, #1C4695 6px, #1C4695 12px, #245ABC 12px, #245ABC 18px, #328EEE 18px, #328EEE 24px)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Vrbo
            </span>
          </a>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#01b47d]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-[#01b47d]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-6 mt-12 sm:mt-0">
            <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 mb-2">Stay Near the Stadiums</h3>
            <p className="font-inter text-slate-600">Comfortable rentals for families, friends, and groups attending the matches.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <a
              href={VRBO_URL_NYNJ}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="relative inline-flex w-full items-center justify-center font-semibold rounded-3xl transition-all duration-700 cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 group font-inter hover:scale-[1.02] active:scale-95 transform-gpu will-change-transform px-4 py-3 text-sm md:px-6 md:py-4 md:text-base lg:text-lg bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] text-white hover:from-[#01b47d] hover:via-[#008f63] hover:to-[#008f63] focus:ring-[#01b47d]/30 shadow-premium hover:shadow-premium-lg border border-[#01b47d]/20"
              aria-label="Check Availability in New York / New Jersey"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              </div>
              <span className="relative z-10 text-center leading-tight">Check Availability – New York / New Jersey</span>
            </a>
            <a
              href={VRBO_URL_LA}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="relative inline-flex w-full items-center justify-center font-semibold rounded-3xl transition-all duration-700 cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 group font-inter hover:scale-[1.02] active:scale-95 transform-gpu will-change-transform px-4 py-3 text-sm md:px-6 md:py-4 md:text-base lg:text-lg bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] text-white hover:from-[#01b47d] hover:via-[#008f63] hover:to-[#008f63] focus:ring-[#01b47d]/30 shadow-premium hover:shadow-premium-lg border border-[#01b47d]/20"
              aria-label="Check Availability in Los Angeles"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              </div>
              <span className="relative z-10 text-center leading-tight">Check Availability – Los Angeles</span>
            </a>
          </div>
          <a
            href={VRBO_URL_GENERAL}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="relative inline-flex w-full items-center justify-center font-semibold rounded-3xl transition-all duration-700 cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 group font-inter hover:scale-[1.02] active:scale-95 transform-gpu will-change-transform px-4 py-3 text-sm md:px-6 md:py-4 md:text-base lg:text-lg bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] text-white hover:from-[#01b47d] hover:via-[#008f63] hover:to-[#008f63] focus:ring-[#01b47d]/30 shadow-premium hover:shadow-premium-lg border border-[#01b47d]/20"
            aria-label="Browse all Vrbo stays"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </div>
            <span className="relative z-10 flex items-center justify-center space-x-2 text-center leading-tight">
              <i className="ri-search-line"></i>
              <span className="ultra-premium-text font-semibold">Search Vrbo – Find Your Stay</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default function HomePage() {
  const [travelerCount, setTravelerCount] = useState(500000);
  const [dealCount, setDealCount] = useState(1247);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate counters
    const travelerInterval = setInterval(() => {
      setTravelerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5_000);

    const dealInterval = setInterval(() => {
      setDealCount(prev => prev + Math.floor(Math.random() * 2));
    }, 3_000);

    return () => {
      clearInterval(travelerInterval);
      clearInterval(dealInterval);
    };
  }, []);

  const trustIndicators = [
    { icon: 'ri-shield-check-line', text: 'Secure Booking Partners', description: 'Industry-standard encryption through trusted platforms' },
    { icon: 'ri-lifebuoy-line', text: 'Comprehensive Support Resources', description: 'Expert travel guides and planning assistance' },
    { icon: 'ri-vip-diamond-line', text: 'Curated Travel Options', description: "Hand-picked accommodations and experiences" },
    { icon: 'ri-book-open-line', text: 'Expert Travel Guides', description: 'Detailed insights from experienced travelers' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-colors duration-500">
      <SEO 
        title="2026 World Cup Travel Guide | USA, Canada, Mexico"
        description="Your complete 2026 FIFA World Cup travel guide. Tickets, hotels, stadium info & match schedules for all 16 host cities across North America. Plan your trip now!"
        image="/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp"
        url="/"
      />
      <SchemaOrg schema={generateWebsiteSchema()} />
      <SchemaOrg schema={generateOrganizationSchema()} />
      <SchemaOrg
        schema={generateImageObjectSchema('/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp', {
          width: 1920,
          height: 1080,
          caption: 'FIFA World Cup 2026 Host Cities & Stadiums Guide - Stadiumport',
          description:
            'Breathtaking night view of a World Cup 2026 stadium featuring massive USA, Mexico, and Canada flags suspended over the pitch, symbolizing the three host nations.'
        })}
      />
      
      <Header />
      
      {/* New Apple/Nike Style Hero Section */}
      <HeroSection />

      {/* Replaced Original City Grid with New CityShowcase Component */}
      <CityShowcase />

      {/* Widgets Section */}
      <section className="py-20 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              Your All-in-One World Cup 2026 Planning Platform
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Compare 500+ airlines, book verified accommodations within walking distance of all 16 stadiums, secure official match tickets, and reserve local experiences—everything in one place. No more endless tabs, just seamless World Cup travel planning.
            </p>
          </div>

          <TPUnifiedWidget />
          <TPDestinationWidget />
          <TPEventsWidget />
          <VrboWidget />
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              TRUSTED WORLD CUP 2026 TRAVEL RESOURCE
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Join fans planning their World Cup 2026 journey with confidence. We partner with verified travel providers, curate the best deals, and provide expert guidance for every step from first search to final whistle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#01b47d] to-[#01b47d] text-white flex items-center justify-center shadow-sm">
                    <i className={`${indicator.icon} text-lg`}></i>
                  </div>
                </div>
                <h3 className="font-space font-semibold tracking-tight leading-tight text-navy-900 dark:text-white text-lg sm:text-xl md:text-2xl">
                  {indicator.text}
                </h3>
                {indicator.description && (
                  <p className="mt-2 font-inter text-slate-600 dark:text-slate-400 text-sm">
                    {indicator.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="font-inter text-xs tracking-widest text-slate-500 dark:text-slate-400 mb-6">TRUSTED BY READERS OF</div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Travel Weekly', 'Lonely Planet', 'Forbes Travel', 'CNN Travel', 'Travel + Leisure', 'The Points Guy'].map((publication, index) => (
                <div key={index} className="font-space font-semibold text-slate-600 dark:text-slate-400 opacity-60">
                  {publication}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Luxury Simple Design */}
      <section className="py-24 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Your World Cup 2026 Journey
            <span className="block text-gray-600 dark:text-gray-300 text-2xl md:text-3xl mt-3 font-light">
              Starts Now
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            From flights and hotels to match tickets and local experiences—plan your complete World Cup 2026 adventure across USA, Canada, and Mexico with expert guides, real-time deals, and insider tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/travel-guides">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Plan Your Trip
              </button>
            </Link>

            <Link to="/accommodation">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Find Accommodation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Compare Prices Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCompareModalOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-navy-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-navy-700 flex justify-between items-center">
              <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white">Compare Flight Prices</h3>
              <button onClick={() => setIsCompareModalOpen(false)} className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-navy-700 flex items-center justify-center transition-colors">
                <i className="ri-close-line text-xl text-slate-500 dark:text-slate-400"></i>
              </button>
            </div>
            <div className="p-6">
              <FlightCompareWidget />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
