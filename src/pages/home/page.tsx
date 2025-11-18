
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { OptimizedImage } from '../../components/base/OptimizedImage';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { FlightCompareWidget } from '../../components/widgets/FlightCompareWidget';
import { AccomFinderWidget } from '../../components/widgets/AccomFinderWidget';
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

export default function HomePage() {
  const [travelerCount, setTravelerCount] = useState(500000);
  const [dealCount, setDealCount] = useState(1247);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const navigate = useNavigate();

  // Route mapping identical to Cities page behavior
  const getCityRoute = (cityName: string): string => {
    const routeMap: { [key: string]: string } = {
  'New York / New Jersey': '/world-cup-2026-host-cities/new-york-new-jersey',
  'New York City': '/world-cup-2026-host-cities/new-york-new-jersey',
      'Los Angeles': '/world-cup-2026-host-cities/los-angeles',
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

      {/* World Cup Countdown Section */}
      <WorldCupCountdown travelerCount={travelerCount} dealCount={dealCount} />

      

      {/* Featured Host Cities - cloned styling from Cities page */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Explore Every Host City
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Click any city for complete guides covering accommodation, transport, top attractions, safety tips, best neighborhoods, and where to watch matches beyond the stadium.
            </p>
          </div>

          {/* 2-Column Grid Layout with responsive, lazy images (exactly from Cities page) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New York / New Jersey Card */}
            <div className="group bg-white dark:bg-navy-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-navy-700 hover:scale-[1.02] backdrop-blur-sm flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <OptimizedImage
                  src={featuredCities[0].image}
                  alt={featuredCities[0].alt || `${featuredCities[0].name} skyline`}
                  className="w-full h-full"
                  imgClassName="object-top group-hover:scale-110 transition-transform duration-700"
                  width={1600}
                  height={900}
                  priority={true}
                  placeholder="blur"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <span>{featuredCities[0].flag}</span>
                  <span>{featuredCities[0].country}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center text-white/95 text-sm font-medium">
                  <i className="ri-map-pin-line mr-2 text-lg"></i>
                  <span>{featuredCities[0].stadium} • {featuredCities[0].capacity} capacity</span>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  8 Matches
                </div>
                <div className="absolute top-16 right-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 text-black/90 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold backdrop-blur-sm shadow-lg ring-1 ring-white/20 flex items-center gap-2">
                  <i className="ri-trophy-fill text-base"></i><span className="tracking-wide">2026 WORLD CUP FINAL</span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                  {featuredCities[0].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                  {featuredCities[0].description}
                </p>
                <Button 
                  variant="primary" 
                  size="sm" 
                  fullWidth
                  className="whitespace-nowrap cursor-pointer mt-auto"
                  onClick={() => {
                    navigate(getCityRoute(featuredCities[0].name));
                  }}
                >
                  <i className="ri-eye-line mr-2"></i>
                  Plan Your NYC Journey
                </Button>
              </div>
            </div>

            {/* Los Angeles Card */}
            <div className="group bg-white dark:bg-navy-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-navy-700 hover:scale-[1.02] backdrop-blur-sm flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <OptimizedImage
                  src={featuredCities[1].image}
                  alt={featuredCities[1].alt || `${featuredCities[1].name} skyline`}
                  className="w-full h-full"
                  imgClassName="object-top group-hover:scale-110 transition-transform duration-700"
                  width={1600}
                  height={900}
                  priority={true}
                  placeholder="blur"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <span>{featuredCities[1].flag}</span>
                  <span>{featuredCities[1].country}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center text-white/95 text-sm font-medium">
                  <i className="ri-map-pin-line mr-2 text-lg"></i>
                  <span>{featuredCities[1].stadium} • {featuredCities[1].capacity} capacity</span>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  8 Matches
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                  {featuredCities[1].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                  {featuredCities[1].description}
                </p>
                <Button 
                  variant="primary" 
                  size="sm" 
                  fullWidth
                  className="whitespace-nowrap cursor-pointer mt-auto"
                  onClick={() => {
                    navigate(getCityRoute(featuredCities[1].name));
                  }}
                >
                  <i className="ri-eye-line mr-2"></i>
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
      </section>


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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <FlightCompareWidget />
            <AccomFinderWidget />
          </div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-6">
              Trusted by Football Fans Worldwide
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Thousands of supporters have used StadiumPort to plan their World Cup adventures. We connect you with the best travel partners, verified deals, and expert advice—so you can book with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustIndicators.map((indicator, index) => (
              <Card
                key={index}
                variant="premium"
                padding="lg"
                shadow="premium"
                effect="shimmer"
                glow
                border={false}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-2 -left-2 w-28 h-28 bg-emerald-500/12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50/80 dark:bg-emerald-900/30 ring-1 ring-emerald-400/30 flex items-center justify-center mx-auto shadow-premium-sm">
                      <i className={`${indicator.icon} text-emerald-600 text-2xl sm:text-3xl`}></i>
                    </div>
                  </div>
                  <h3 className="font-space font-semibold tracking-tight leading-tight text-navy-900 dark:text-white text-lg sm:text-xl md:text-2xl">
                    {indicator.text}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured In */}
          <div className="text-center">
            <div className="text-slate-500 dark:text-slate-400 font-inter text-sm mb-6">AS FEATURED IN</div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Travel Weekly', 'Lonely Planet', 'Forbes Travel', 'CNN Travel', 'Travel + Leisure'].map((publication, index) => (
                <div key={index} className="font-space font-semibold text-slate-600 dark:text-slate-400">
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
