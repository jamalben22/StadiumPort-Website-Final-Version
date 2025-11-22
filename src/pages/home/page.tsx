
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

const TPFlightWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const load = () => {
      if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&powered_by=true&border_radius=0&plain=true&color_background=%23092140&color_button=%23ef4e25&color_button_text=%23000000&promo_id=4684&campaign_id=146';
      script.charset = 'utf-8';
      container.appendChild(script);
      container.setAttribute('data-tp-loaded', 'true');
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          load();
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    io.observe(container);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-10 rounded-none bg-[#092140] p-4 sm:p-6 text-white shadow-md"
    />
  );
});

const TPDealsWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const load = () => {
      if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=true&border_radius=14&plain=true&color_button=%23ef4e25&color_button_text=%23000000&color_border=%232681ff&promo_id=4132&campaign_id=121';
      script.charset = 'utf-8';
      container.appendChild(script);
      container.setAttribute('data-tp-loaded', 'true');
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          load();
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    io.observe(container);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-8 rounded-[14px] bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#2681ff]/30"
    />
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
    // Set page title and meta description (hero-focused for SEO)
    document.title = 'World Cup 2026 Stadiums & Cities – Cinematic Night Hero – StadiumPort';

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'Experience the epic energy of World Cup 2026 with three massive flags of USA, Mexico, and Canada prominently displayed in the middle of a cinematic stadium at night.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      // Graceful fallback: create meta tag if missing
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`);
    }

    // Set OG/Twitter image to new cinematic hero asset
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const ogImageUrl = `${siteUrl}/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp`;
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('og:image', ogImageUrl);
    setMeta('og:image:width', '1920');
    setMeta('og:image:height', '1080');
    setMeta('og:title', 'World Cup 2026 Stadiums & Cities – Cinematic Night Hero – StadiumPort');
    setMeta('og:description', descriptionText);
    setMeta('twitter:image', ogImageUrl);
    setMeta('twitter:card', 'summary_large_image');
    setMeta(
      'twitter:image:alt',
      'Cinematic night view of World Cup 2026 stadium with three giant flags — USA, Mexico, and Canada — suspended in the middle above the pitch.'
    );

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
      name: 'New York / New Jersey',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'MetLife Stadium, East Rutherford, NJ',
      capacity: '82,500',
      description:
        "Where champions are crowned. The 2026 Final comes to the world's biggest stage—82,500 fans, 30 minutes from Times Square, and football's ultimate moment. Navigate NJ Transit from Manhattan, explore diverse NYC neighborhoods where every nation has a home, and discover why this metropolitan area delivers the World Cup's most electric atmosphere.",
      image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
      fullContent: {
        introduction: `The World's Biggest Game Comes to the World's Biggest Stage`,
        sections: [
          {
            title: 'New York City: Your Ultimate 2026 FIFA World Cup Travel Guide',
            content:
              `When the final whistle blows on July 19, 2026, football history will be made just across the Hudson River from Manhattan. New York and New Jersey are hosting the FIFA World Cup Final—and seven other matches—making this region the epicenter of the beautiful game's most anticipated summer in decades. Whether you're here to witness the crowning moment or soak up the electric atmosphere across multiple match days, the New York metropolitan area offers everything a football fan could dream of: world-class infrastructure, unbeatable energy, and a cultural experience that extends far beyond the pitch.`
          },
          {
            title: 'Why New York/New Jersey Won the World Cup Final',
            content: 'Coming Soon'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Los Angeles',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'SoFi Stadium, Inglewood, CA',
      capacity: '70,240',
      description:
        "Where $5.5 billion meets global football. LA's architectural masterpiece—SoFi Stadium—hosts eight World Cup matches in the world's entertainment capital. The most expensive venue ever built features a hovering translucent roof and 120-yard Infinity Screen. Located in Inglewood near LAX, plan Metro connections or rideshares. Explore Hollywood, beaches (30 min away), and why LA's sprawling diversity means every team has a neighborhood. This is spectacle, California-style.",
      image: '/images/cities/los-angeles-world-cup-2026.webp',
      fullContent: {
        introduction: 'Los Angeles brings together the best of entertainment, culture, and natural beauty for an unforgettable World Cup 2026 experience.',
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
    { icon: 'ri-shield-check-line', text: 'Secure Booking' },
    { icon: 'ri-customer-service-2-line', text: '24/7 Support' },
    { icon: 'ri-price-tag-3-line', text: 'Best Price Guarantee' },
    { icon: 'ri-star-line', text: 'Trusted Reviews' }
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
      <SchemaOrg schema={generateWebsiteSchema()} />
      <SchemaOrg schema={generateOrganizationSchema()} />
      {/* Structured data for homepage hero image */}
      <SchemaOrg
        schema={generateImageObjectSchema('/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp', {
          width: 1920,
          height: 1080,
          caption: 'World Cup 2026 Stadiums & Cities – Cinematic Night Hero – StadiumPort',
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
              Explore Every Host City
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Click any city for complete guides covering accommodation, transport, top attractions, safety tips, best neighborhoods, and where to watch matches beyond the stadium.
            </p>
          </div>

          {/* Apple-Level Premium 2-Column Grid — match Host Cities styling exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* New York / New Jersey Card */}
            <div
              className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20"
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
                  <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-0.5">
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                          <i className="ri-map-pin-line text-white text-sm"></i>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                            {featuredCities[0].stadium.split(',')[0]}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                            {featuredCities[0].stadium.split(',').slice(1).join(',').trim()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-3 flex-shrink-0">
                        <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
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
                      <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">8 Matches</div>
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
                <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
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
                  Plan Your NYC Journey
                </Button>
              </div>
            </div>

            {/* Los Angeles Card */}
            <div
              className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20"
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
                  <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-0.5">
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                          <i className="ri-map-pin-line text-white text-sm"></i>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                            {featuredCities[1].stadium.split(',')[0]}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                            {featuredCities[1].stadium.split(',').slice(1).join(',').trim()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-3 flex-shrink-0">
                        <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
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
                      <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">8 Matches</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
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
                  Discover LA Guide
                </Button>
              </div>
            </div>
          </div>

          {/* CTA: Discover All 16 Host Cities */}
          <div className="text-center mt-12">
            <Link to="/world-cup-2026-host-cities" className="group" aria-label="Discover all 16 host cities">
              <button
                aria-label="Discover all 16 host cities"
                className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 text-white hover:from-teal-600 hover:via-teal-700 hover:to-emerald-700 focus:ring-teal-500/30 shadow-premium hover:shadow-premium-lg border border-teal-400/20 backdrop-blur-xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="ultra-premium-text font-semibold text-white">Discover All 16 Host Cities</span>
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
              Everything You Need in One Place
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Compare flights from 200+ airlines, find the perfect accommodation near every stadium, and book local experiences—all without juggling dozens of tabs. We've done the legwork so you can focus on the football.
            </p>
          </div>

          
          <TPFlightWidget />
          <TPDealsWidget />
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              Trusted by Football Fans Worldwide
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Thousands of supporters have used StadiumPort to plan their World Cup adventures. We connect you with the best travel partners, verified deals, and expert advice—so you can book with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm">
                    <i className={`${indicator.icon} text-lg`}></i>
                  </div>
                </div>
                <h3 className="font-space font-semibold tracking-tight leading-tight text-navy-900 dark:text-white text-lg sm:text-xl md:text-2xl">
                  {indicator.text}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="font-inter text-xs tracking-widest text-slate-500 dark:text-slate-400 mb-6">AS FEATURED IN</div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Travel Weekly', 'Lonely Planet', 'Forbes Travel', 'CNN Travel', 'Travel + Leisure'].map((publication, index) => (
                <div key={index} className="font-space font-semibold text-slate-600 dark:text-slate-400 opacity-60">
                  {publication}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your World Cup 2026 Adventure Awaits</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            From your first flight search to your final match—we&apos;ll help you plan every detail. Explore our city guides, compare prices, and turn your World Cup dream into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/deals">
              <Button
                variant="premium"
                size="lg"
                className="bg-white text-emerald-600 hover:bg-slate-100 border-white/20 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                icon="ri-calendar-check-line"
                iconPosition="left"
                glow={false}
                animate={true}
                effect="shimmer"
              >
                Start Planning Now
              </Button>
            </Link>

            <Link to="/world-cup-2026-host-cities" className="group">
              <button className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 text-white hover:from-teal-600 hover:via-teal-700 hover:to-emerald-700 focus:ring-teal-500/30 shadow-premium hover:shadow-premium-lg border border-teal-400/20 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </div>

                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <i className="ri-map-pin-line transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 text-white"></i>
                  <span className="ultra-premium-text font-semibold text-white">Browse City Guides</span>
                  <i className="ri-arrow-right-line transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 text-white"></i>
                </div>
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
