
import { useState, useEffect, useRef, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { OptimizedImage } from '../../components/base/OptimizedImage';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { FlightCompareWidget } from '../../components/widgets/FlightCompareWidget';
import { WorldCupCountdown } from '../../components/widgets/WorldCupCountdown';
import { SchemaOrg, generateWebsiteSchema, generateOrganizationSchema, generateImageObjectSchema } from '../../components/seo/SchemaOrg';
import { SEO } from '../../components/common/SEO';

interface CitySection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: CitySection[];
}

interface HostCity {
  id: number;
  name: string;
  country: string;
  flag: string;
  stadium: string;
  capacity: string;
  description: string;
  image: string;
  fullContent: FullContent;
}

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

  // Route mapping identical to Cities page behavior
  const getCityRoute = (cityName: string): string => {
    const routeMap: { [key: string]: string } = {
  'New York / New Jersey': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
  'New York City': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
      'Los Angeles': '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
    };

    return routeMap[cityName] || `/world-cup-2026-host-cities/${cityName.toLowerCase().replace(/\s+/g, '-')}`;
  };

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

  // Two featured cities cloned from Cities page
  const featuredCities: HostCity[] = [
    {
      id: 1,
      name: 'Miami',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Hard Rock Stadium, Miami Gardens, FL',
      capacity: '65,326',
      description:
        `Where innovation beats the heat. Hard Rock's $550 million canopy covers every fan while leaving the field exposed—you stay cool in 95°F, players sweat. Six World Cup matches in Miami Gardens (20 miles from South Beach, car required). Formula 1 races here. Six Super Bowls hosted. Explore Little Havana's Cuban soul, Art Deco architecture, world-class nightlife, and why Miami's Latin passion makes every match feel like a home game. Bring sunscreen. Expect afternoon thunderstorms. Worth it.`,
      image: '/images/cities/miami-world-cup-2026.webp',
      fullContent: {
        introduction: 'Miami World Cup 2026: Complete Travel Guide',
        sections: [
          { title: 'Coming Soon', content: 'Detailed guide content will be available soon.' }
        ]
      }
    },
    {
      id: 2,
      name: 'Dallas',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'AT&T Stadium, Arlington, TX',
      capacity: '80,000',
      description:
        `Texas does football different. Jerry Jones' $1.3 billion palace hosts NINE World Cup matches including a Semifinal—more than any other venue. That 60-yard video board hanging overhead? Larger than a basketball court. Retractable roof? Opens to Texas skies or closes for air-conditioned luxury in`,
      image: '/images/cities/dallas-world-cup-2026.webp',
      fullContent: {
        introduction: 'Dallas – World Cup 2026 Guide',
        sections: [
          { title: 'Coming Soon', content: 'Detailed guide content will be available soon.' }
        ]
      }
    }
  ];

  useEffect(() => {
    const imgs = [featuredCities[0]?.image, featuredCities[1]?.image].filter(Boolean) as string[];
    imgs.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  const trustIndicators = [
    { icon: 'ri-shield-check-line', text: 'Secure Booking Protection', description: 'Industry-standard encryption and payment security' },
    { icon: 'ri-customer-service-2-line', text: '24/7 Multilingual Support', description: 'Expert assistance across all time zones' },
    { icon: 'ri-price-tag-3-line', text: 'Best Price Guarantee', description: "Find it cheaper? We'll match it + 10% off" },
    { icon: 'ri-star-line', text: 'Verified Reviews', description: 'Real travelers, real experiences' }
  ];

  const handleComparePricesNow = () => {
    setIsCompareModalOpen(true);
  };

  const closeCompareModal = () => {
    setIsCompareModalOpen(false);
  };

  const handleStartPlanning = () => {
    setTimeout(() => {
      window.open('https://flight-affiliate-link.com', '_blank');
    }, 300);
  };

  const handleGetExpertHelp = () => {
    setTimeout(() => {
      window.open('https://tour-affiliate-link.com', '_blank');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <SEO 
        title="Ultimate World Cup 2026 Travel Guide"
        description="Explore every World Cup 2026 stadium and host city across the USA, Canada, and Mexico. Get expert travel tips, venue guides, safety information, match-day planning, and insider strategies from MetLife Stadium’s Final to the historic atmosphere of Estadio Azteca."
        image="/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp"
        url="/"
      />
      <SchemaOrg schema={generateWebsiteSchema()} />
      <SchemaOrg schema={generateOrganizationSchema()} />
      {/* Structured data for homepage hero image */}
      <SchemaOrg
        schema={generateImageObjectSchema('/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp', {
          width: 1920,
          height: 1080,
          caption: 'World Cup 2026 Stadiums & Cities – Cinematic Night Hero – Stadiumport',
          description:
            'Cinematic night view of World Cup 2026 stadium with three giant flags — USA, Mexico, and Canada — suspended in the middle above the pitch.'
        })}
      />
      
      <Header />
      <div className="h-16 lg:h-20"></div>

      

      {/* World Cup Countdown Section */}
      <WorldCupCountdown travelerCount={travelerCount} dealCount={dealCount} />

      

      {/* Featured Host Cities - cloned styling from Cities page */}
      <main id="main-content" className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Explore All 16 World Cup 2026 Host Cities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Click any city for comprehensive travel guides—hotels, transportation, must-see attractions, safety protocols, fan-friendly neighborhoods, official fan zones, and the best sports bars for every match.
            </p>
          </div>

          {/* Apple-Level Premium 2-Column Grid — match Host Cities styling exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* New York / New Jersey Card */}
            <div
              className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <OptimizedImage
                  src={featuredCities[0].image}
                  alt={featuredCities[0].alt || `${featuredCities[0].name} skyline – World Cup 2026 host city`}
                  className="w-full h-full"
                  imgClassName="object-top group-hover:scale-110 transition-transform duration-1000"
                  width={1600}
                  height={900}
                  priority={true}
                  placeholder="blur"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Stadium Info Glass */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                  <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-500 hover:-translate-y-0.5">
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#01b47d] to-[#01b47d] rounded-xl flex items-center justify-center mr-3 shadow-md shadow-[#01b47d]/20 group-hover:shadow-[#01b47d]/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                          <i className="ri-map-pin-line text-white text-sm"></i>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                            {featuredCities[0].stadium.split(',')[0]}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                            {featuredCities[0].stadium.split(',').slice(1).join(',').trim()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-3 flex-shrink-0">
                        <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                          {featuredCities[0].capacity.replace(/,/g, '').toLocaleString()}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">Capacity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Stack */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <div className="flex flex-col items-end space-y-1.5 md:space-y-2">
                    <div className="order-1">
                      <div className="bg-[#01b47d]/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-[#01b47d]/30 shadow-sm shadow-[#01b47d]/20 hover:bg-[#008f63]/85 hover:shadow-md transition-all duration-300">6 Matches</div>
                    </div>
                    <div className="order-2">
                      <div className="bg-gradient-to-r from-amber-400/75 via-yellow-400/75 to-orange-500/75 text-black/80 px-2 py-1 rounded-lg text-[11px] font-bold backdrop-blur-sm shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                        <i className="ri-trophy-fill text-[11px]"></i><span className="tracking-wide">WORLD CUP FINAL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-[#01b47d] group-hover:to-purple-600 dark:group-hover:from-[#01b47d] dark:group-hover:to-purple-400 transition-all duration-700">
                  {featuredCities[0].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                  {featuredCities[0].description}
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  className="whitespace-nowrap cursor-pointer mt-auto font-space font-semibold text-base md:text-lg rounded-2xl py-3 md:py-4 group-hover:scale-105 transition-transform duration-500"
                  onClick={() => {
                    navigate(getCityRoute(featuredCities[0].name));
                  }}
                >
                  <i className="ri-compass-3-line mr-3 text-lg"></i>
                  Plan Your Miami Journey
                </Button>
              </div>
            </div>

            {/* Los Angeles Card */}
            <div
              className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <OptimizedImage
                  src={featuredCities[1].image}
                  alt={featuredCities[1].alt || `${featuredCities[1].name} skyline – World Cup 2026 host city`}
                  className="w-full h-full"
                  imgClassName="object-top group-hover:scale-110 transition-transform duration-1000"
                  width={1600}
                  height={900}
                  priority={true}
                  placeholder="blur"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Stadium Info Glass */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                  <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-500 hover:-translate-y-0.5">
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#01b47d] to-[#01b47d] rounded-xl flex items-center justify-center mr-3 shadow-md shadow-[#01b47d]/20 group-hover:shadow-[#01b47d]/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                          <i className="ri-map-pin-line text-white text-sm"></i>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                            {featuredCities[1].stadium.split(',')[0]}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                            {featuredCities[1].stadium.split(',').slice(1).join(',').trim()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-3 flex-shrink-0">
                        <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                          {featuredCities[1].capacity.replace(/,/g, '').toLocaleString()}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">Capacity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Stack */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <div className="flex flex-col items-end space-y-1.5 md:space-y-2">
                    <div className="order-1">
                      <div className="bg-[#01b47d]/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-[#01b47d]/30 shadow-sm shadow-[#01b47d]/20 hover:bg-[#008f63]/85 hover:shadow-md transition-all duration-300">9 Matches</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-[#01b47d] group-hover:to-purple-600 dark:group-hover:from-[#01b47d] dark:group-hover:to-purple-400 transition-all duration-700">
                  {featuredCities[1].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                  {featuredCities[1].description}
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  className="whitespace-nowrap cursor-pointer mt-auto font-space font-semibold text-base md:text-lg rounded-2xl py-3 md:py-4 group-hover:scale-105 transition-transform duration-500"
                  onClick={() => {
                    navigate(getCityRoute(featuredCities[1].name));
                  }}
                >
                  <i className="ri-compass-3-line mr-3 text-lg"></i>
                  Discover Dallas Guide
                </Button>
              </div>
            </div>
          </div>

          {/* CTA: Discover All 16 Host Cities */}
          <div className="text-center mt-12">
            <Link to="/world-cup-2026-host-cities" className="group" aria-label="Discover all 16 host cities">
              <button
                aria-label="Discover all 16 host cities"
                className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] text-white hover:from-[#01b47d] hover:via-[#008f63] hover:to-[#008f63] focus:ring-[#01b47d]/30 shadow-premium hover:shadow-premium-lg border border-[#01b47d]/20 backdrop-blur-xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="ultra-premium-text font-semibold text-white">Discover All 16 Host Cities →</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </main>


      {/* Widgets Section */}
      <section className="py-20 bg-white dark:bg-navy-900">
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

      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              Trusted by 500,000+ World Cup 2026 Travelers
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Join thousands of fans planning their World Cup 2026 journey with confidence. We partner with verified providers, negotiate exclusive deals, and provide expert guidance for every step from first search to final whistle.
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
            <div className="font-inter text-xs tracking-widest text-slate-500 dark:text-slate-400 mb-6">AS FEATURED IN</div>
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
      <section className="py-24 bg-white dark:bg-navy-900">
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
