
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { FlightCompareWidget } from '../../components/widgets/FlightCompareWidget';
import { AccomFinderWidget } from '../../components/widgets/AccomFinderWidget';
import { SchemaOrg, generateWebsiteSchema, generateOrganizationSchema } from '../../components/seo/SchemaOrg';

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
  const [expandedCity, setExpandedCity] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<HostCity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openCityModal = (city: HostCity) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = 'StadiumPort - Your Premier Gateway to the 2026 North American Football Journey';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'The definitive authority for 2026 tournament travel intelligence. Compare flights, hotels, and experiences across all 16 host cities. From budget to luxury travel guides.'
      );
    } else {
      // Graceful fallback: create meta tag if missing
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'The definitive authority for 2026 tournament travel intelligence. Compare flights, hotels, and experiences across all 16 host cities. From budget to luxury travel guides.';
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`);
    }

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

  const hostCities = [
    {
      id: 1,
      name: 'New York City',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'MetLife Stadium',
      capacity: '87,157',
      description:
        'The city that never sleeps welcomes the world with iconic skylines, world-class dining, and unmatched energy.',
      image:
        'https://readdy.ai/api/search-image?query=New%20York%20City%20Manhattan%20skyline%20at%20golden%20hour%2C%20iconic%20skyscrapers%2C%20urban%20landscape%2C%20modern%20metropolitan%20cityscape%2C%20vibrant%20city%20lights%2C%20architectural%20beauty&width=600&height=400&seq=nyc-skyline&orientation=landscape',
      fullContent: {
        introduction:
          'New York City, the ultimate urban destination, offers an unparalleled World Cup 2026 experience with its iconic venues, diverse neighborhoods, and world-class amenities.',
        sections: [
          {
            title: 'Coming Soon',
            content:
              "Detailed guide content will be available soon. Stay tuned for comprehensive information about New York City's World Cup 2026 experience."
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Los Angeles',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'SoFi Stadium',
      capacity: '70,240',
      description: 'Where $5.5 billion meets global football. LA\'s architectural masterpiece—SoFi Stadium—hosts eight World Cup matches in the world\'s entertainment capital. The most expensive venue ever built features a hovering translucent roof and 120-yard Infinity Screen. Located in Inglewood near LAX, plan Metro connections or rideshares. Explore Hollywood, beaches (30 min away), and why LA\'s sprawling diversity means every team has a neighborhood. This is spectacle, California-style.',
      image:
        'https://readdy.ai/api/search-image?query=Los%20Angeles%20downtown%20skyline%20with%20palm%20trees%2C%20Hollywood%20hills%20in%20background%2C%20sunny%20California%20weather%2C%20modern%20urban%20landscape%2C%20entertainment%20district&width=600&height=400&seq=la-skyline&orientation=landscape',
      fullContent: {
        introduction:
          'Los Angeles brings together the best of entertainment, culture, and natural beauty for an unforgettable World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content:
              "Detailed guide content will be available soon. Stay tuned for comprehensive information about Los Angeles's World Cup 2026 experience."
          }
        ]
      }
    },
    {
      id: 3,
      name: 'Miami',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Hard Rock Stadium',
      capacity: '67,518',
      description:
        'Tropical paradise meets international flair with pristine beaches, vibrant nightlife, and Latin American culture.',
      image:
        'https://readdy.ai/api/search-image?query=Miami%20Beach%20skyline%20with%20art%20deco%20buildings%2C%20turquoise%20ocean%20waters%2C%20palm%20trees%2C%20tropical%20paradise%2C%20colorful%20architecture%2C%20sunny%20beach%20destination&width=600&height=400&seq=miami-beach&orientation=landscape',
      fullContent: {
        introduction:
          'Miami offers a unique blend of tropical beauty, international culture, and world-class hospitality for World Cup 2026 visitors.',
        sections: [
          {
            title: 'Coming Soon',
            content:
              "Detailed guide content will be available soon. Stay tuned for comprehensive information about Miami's World Cup 2026 experience."
          }
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
      
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Epic%20football%20stadium%20at%20night%20with%20dramatic%20lighting%2C%20massive%20crowd%20cheering%2C%20cinematic%20sports%20atmosphere%2C%20professional%20stadium%20architecture%2C%20vibrant%20green%20field%2C%20powerful%20floodlights%20creating%20dramatic%20shadows%20and%20highlights&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="w-full">
            <div className="max-w-4xl">
              <h1 className="font-space font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
                The{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gold-400">
                  World Cup 2026
                </span>{' '}
                Travel Guide Made for Fans Like You
              </h1>
              <p className="font-inter text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Chasing your team across the USA, Mexico, and Canada? Planning your first World Cup trip? We've built the ultimate resource for every type of fan—packed with stadium guides, city
                insights, accommodation tips, and real advice from people who live and breathe football travel.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <i className="ri-group-line text-2xl"></i>
                  <span className="font-semibold text-lg">500,028+ Travelers</span>
                </div>
                <div className="flex items-center space-x-2 text-gold-400">
                  <i className="ri-price-tag-3-line text-2xl"></i>
                  <span className="font-semibold text-lg">1278 Live Deals</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <i className="ri-map-pin-line text-2xl"></i>
                  <span className="font-semibold text-lg">16 Host Cities</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link to="/deals" className="group">
                  <button className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 backdrop-blur-xl">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      <i className="ri-rocket-line transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"></i>
                      <span className="ultra-premium-text font-semibold">Start Planning Your Trip</span>
                      <i className="ri-arrow-right-line transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"></i>
                    </div>
                  </button>
                </Link>

                <Link to="/venues" className="group">
                  <button className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-navy-900 hover:from-gold-500 hover:via-gold-600 hover:to-gold-700 focus:ring-gold-500/30 shadow-premium hover:shadow-premium-lg border border-gold-300/30 backdrop-blur-xl">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      <i className="ri-football-line transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 text-navy-900"></i>
                      <span className="ultra-premium-text font-semibold text-navy-900">Explore All Stadiums</span>
                      <i className="ri-arrow-right-line transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 text-navy-900"></i>
                    </div>
                  </button>
                </Link>
              </div>

              {/* Premium Service Widgets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Accommodation Widget */}
                <a
                  href="https://hotel-affiliate-link.com"
                  target="_blank"
                  rel="nofollow sponsored"
                  data-affiliate-type="accommodation"
                  className="affiliate-btn group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-glow group-hover:scale-105 group-hover:-translate-y-2 transform-gpu will-change-transform">
                    {/* Floating Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <i className="ri-hotel-line text-white text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 rounded-2xl"></div>
                      </div>
                    </div>

                    <h3 className="font-space font-bold text-2xl text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      Accommodation
                    </h3>
                    <p className="text-slate-200 font-inter text-lg leading-relaxed mb-6">
                      From fan-friendly hostels... (content truncated for brevity)
                    </p>

                    <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-all duration-300">
                      <span className="font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">Find Your Stay</span>
                      <i className="ri-arrow-right-line ml-3 text-xl group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12 rounded-3xl"></div>
                  </div>
                </a>

                {/* Flights Widget */}
                <a
                  href="https://flight-affiliate-link.com"
                  target="_blank"
                  rel="nofollow sponsored"
                  data-affiliate-type="flights"
                  className="affiliate-btn group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 shadow-2xl group-hover:shadow-blue-glow group-hover:scale-105 group-hover:-translate-y-2 transform-gpu will-change-transform">
                    {/* Floating Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <i className="ri-flight-takeoff-line text-white text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 rounded-2xl"></div>
                      </div>
                    </div>

                    <h3 className="font-space font-bold text-2xl text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      Flights
                    </h3>
                    <p className="text-slate-200 font-inter text-lg leading-relaxed mb-6">
                      Find the best routes... (content truncated)
                    </p>

                    <div className="flex items-center text-emerald-400 group-hover:text-blue-300 transition-all duration-300">
                      <span className="font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">Search Flights</span>
                      <i className="ri-arrow-right-line ml-3 text-xl group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12 rounded-3xl"></div>
                  </div>
                </a>

                {/* Experiences Widget */}
                <a
                  href="https://tour-affiliate-link.com"
                  target="_blank"
                  rel="nofollow sponsored"
                  data-affiliate-type="experiences"
                  className="affiliate-btn group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-gold-500/10 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 shadow-2xl group-hover:shadow-gold-glow group-hover:scale-105 group-hover:-translate-y-2 transform-gpu will-change-transform">
                    {/* Floating Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <i className="ri-map-2-line text-white text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 rounded-2xl"></div>
                      </div>
                    </div>

                    <h3 className="font-space font-bold text-2xl text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                      Experiences
                    </h3>
                    <p className="text-slate-200 font-inter text-lg leading-relaxed mb-6">
                      Stadium tours, fan zones... (content truncated)
                    </p>

                    <div className="flex items-center text-emerald-400 group-hover:text-gold-300 transition-all duration-300">
                      <span className="font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">Explore Activities</span>
                      <i className="ri-arrow-right-line ml-3 text-xl group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12 rounded-3xl"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Host Cities */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              Explore Every Host City
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Sixteen incredible cities across three countries are ready to welcome the world. From the beaches of Miami to the culture of Mexico City and the energy of Toronto—discover where to stay,
              what to see, and how to make the most of every match day.
            </p>
          </div>

          {/* Featured Cities Grid - 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {hostCities.map(city => (
              <Card key={city.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={city.image}
                    alt={`${city.name} skyline`}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <span>{city.flag}</span>
                    <span>{city.country}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">{city.name}</h3>

                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">{city.description}</p>

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Stadium</div>
                        <div className="font-semibold text-navy-900 dark:text-white">{city.stadium}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Capacity</div>
                        <div className="font-semibold text-emerald-600">{city.capacity}</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openCityModal(city)}
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Read Full Guide
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/world-cup-2026-host-cities">
              <button className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform px-10 py-5 text-lg bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 text-white hover:from-teal-600 hover:via-teal-700 hover:to-emerald-700 focus:ring-teal-500/30 shadow-premium hover:shadow-premium-lg border border-teal-400/20 backdrop-blur-xl">
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

      {/* City Modal - Travel Tips Style */}
      {isModalOpen && selectedCity && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>

            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img src={selectedCity.image} alt={selectedCity.name} className="w-full h-64 object-cover" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                    <span>{selectedCity.flag}</span>
                    <span>{selectedCity.country}</span>
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium">Host City Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedCity.stadium}</span>
                    <span>•</span>
                    <span>{selectedCity.capacity} capacity</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedCity.name}, {selectedCity.country}
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{selectedCity.fullContent?.introduction}</p>

                <div className="space-y-6">
                  {selectedCity.fullContent?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{section.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-emerald-600 text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Coming Soon</h4>
                      <p className="text-emerald-700 dark:text-emerald-400 text-sm">
                        Comprehensive city guides with detailed information about accommodations, transportation, attractions, and local tips will be
                        available soon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button variant="primary" onClick={closeModal} className="cursor-pointer">
                    <i className="ri-check-line mr-2"></i>
                    Got It
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Widgets Section */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800">
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
              <Card key={index} className="text-center" padding="lg">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${indicator.icon} text-emerald-600 text-2xl`}></i>
                </div>
                <h3 className="font-space font-semibold text-lg text-navy-900 dark:text-white">{indicator.text}</h3>
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
