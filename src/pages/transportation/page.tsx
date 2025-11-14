
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';

interface TransportSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: TransportSection[];
}

interface TransportGuide {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  featured: boolean;
  savings: string;
  fullContent: FullContent;
}

export default function TransportationPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<TransportGuide | null>(null);
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

  const transportTypes = [
    'All Types',
    'Flights',
    'Trains',
    'Buses',
    'Car Rentals',
    'Airport Transfers',
    'City Transit',
    'Match Day Transport'
  ];

  const transportGuides: TransportGuide[] = [
    {
      id: 1,
      title: 'New York / New Jersey World Cup 2026: Your Complete Getting Around Guide',
      excerpt: 'Comprehensive guide to booking flights, finding deals, and navigating airports in all 16 World Cup host cities.',
      category: 'Flights',
      author: 'Michael Rodriguez',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20airport%20terminal%20with%20departure%20boards%2C%20travelers%20with%20luggage%2C%20clean%20contemporary%20design%2C%20international%20travel%20atmosphere%2C%20professional%20aviation%20setting&width=600&height=400&seq=trans1&orientation=landscape',
      featured: true,
      savings: 'Save up to 40%',
      fullContent: {
        introduction: 'Navigate the complex world of international flights to World Cup host cities with our comprehensive guide. From booking strategies to airport navigation, we cover everything you need for seamless air travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about flight options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Los Angeles World Cup 2026: Your Complete Transportation Guide to SoFi Stadium',
      excerpt: 'Navigate efficient train systems connecting host cities, including booking tips, schedules, and comfort classes.',
      category: 'Trains',
      author: 'Sarah Chen',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20high-speed%20train%20at%20station%20platform%2C%20sleek%20design%2C%20comfortable%20passenger%20seating%2C%20efficient%20rail%20transportation%2C%20contemporary%20travel%20infrastructure&width=600&height=400&seq=trans2&orientation=landscape',
      featured: true,
      savings: 'Save up to 25%',
      fullContent: {
        introduction: 'Discover the efficiency and comfort of high-speed rail travel between World Cup host cities. Our guide covers booking strategies, comfort classes, and insider tips for the best rail experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about rail travel for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Budget Bus Travel: Intercity Connections',
      excerpt: 'Affordable bus routes between host cities with comfort ratings, booking platforms, and money-saving strategies.',
      category: 'Buses',
      author: 'David Thompson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=comfortable%20modern%20bus%20interior%20with%20reclining%20seats%2C%20clean%20design%2C%20budget%20travel%20option%2C%20efficient%20intercity%20transportation%2C%20passenger%20comfort&width=600&height=400&seq=trans3&orientation=landscape',
      featured: false,
      savings: 'Save up to 60%',
      fullContent: {
        introduction: 'Explore budget-friendly bus travel options between World Cup host cities. Our comprehensive guide covers routes, comfort levels, and booking strategies for affordable intercity travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about bus travel for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Car Rental Guide: Freedom to Explore',
      excerpt: 'Complete car rental comparison, insurance options, driving tips, and scenic routes between host cities.',
      category: 'Car Rentals',
      author: 'Emma Wilson',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20car%20rental%20facility%20with%20various%20vehicles%2C%20professional%20service%20counter%2C%20clean%20automotive%20showroom%2C%20travel%20convenience%2C%20rental%20car%20selection&width=600&height=400&seq=trans4&orientation=landscape',
      featured: false,
      savings: 'Save up to 30%',
      fullContent: {
        introduction: 'Gain the freedom to explore World Cup host cities at your own pace with our comprehensive car rental guide. From booking tips to scenic routes, we cover everything for independent travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about car rental options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Airport Transfer Options: Seamless Arrivals',
      excerpt: 'Compare taxis, rideshares, shuttles, and public transport from airports to city centers and stadiums.',
      category: 'Airport Transfers',
      author: 'James Park',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=airport%20shuttle%20service%20with%20professional%20driver%2C%20comfortable%20passenger%20seating%2C%20efficient%20transfer%20vehicle%2C%20travel%20convenience%2C%20airport%20transportation&width=600&height=400&seq=trans5&orientation=landscape',
      featured: false,
      savings: 'Save up to 35%',
      fullContent: {
        introduction: 'Make your arrival in World Cup host cities seamless with our comprehensive airport transfer guide. Compare options from budget-friendly to premium services.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about airport transfers for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Local Transport Mastery: Navigate Like a Local',
      excerpt: 'Master metro systems, buses, trams, and bike-sharing in each host city with apps, tickets, and insider tips.',
      category: 'Local Transport',
      author: 'Lisa Martinez',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20metro%20station%20with%20clean%20platforms%2C%20digital%20information%20displays%2C%20efficient%20urban%20transportation%2C%20contemporary%20public%20transit%20design%2C%20passenger%20convenience&width=600&height=400&seq=trans6&orientation=landscape',
      featured: false,
      savings: 'Save up to 50%',
      fullContent: {
        introduction: 'Navigate World Cup host cities like a local with our comprehensive public transport guide. Master metro systems, bus networks, and alternative transport options.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about local transport for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Multi-City Travel Passes: Maximum Savings',
      excerpt: 'Discover rail passes, flight packages, and transport bundles for visiting multiple host cities efficiently.',
      category: 'Flights',
      author: 'Robert Kim',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=travel%20planning%20with%20multiple%20tickets%20and%20passes%2C%20organized%20travel%20documents%2C%20efficient%20multi-city%20journey%20planning%2C%20transportation%20coordination%2C%20travel%20savings&width=600&height=400&seq=trans7&orientation=landscape',
      featured: false,
      savings: 'Save up to 45%',
      fullContent: {
        introduction: 'Maximize your savings and efficiency when visiting multiple World Cup host cities with our guide to travel passes and multi-city packages.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about multi-city travel passes for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Accessible Transportation Options',
      excerpt: 'Comprehensive guide to wheelchair-accessible transport, special assistance services, and mobility solutions.',
      category: 'Local Transport',
      author: 'Maria Gonzalez',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=accessible%20transportation%20vehicle%20with%20wheelchair%20ramp%2C%20inclusive%20design%2C%20barrier-free%20travel%20options%2C%20mobility%20assistance%2C%20universal%20access%20transportation&width=600&height=400&seq=trans8&orientation=landscape',
      featured: false,
      savings: 'Special Rates',
      fullContent: {
        introduction: 'Ensure accessible and comfortable travel to World Cup host cities with our comprehensive guide to mobility-friendly transportation options and assistance services.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about accessible transport for World Cup 2026.'
          }
        ]
      }
    }
  ];

  const filteredGuides = transportGuides.filter(guide => {
    const matchesType = selectedType === 'All Types' || guide.category === selectedType;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const featuredGuides = transportGuides.filter(guide => guide.featured);

  const slugifyGuide = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const openGuideModal = (guide: TransportGuide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeGuideModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Hero Section - Matching Cities Page */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=World%20Cup%20transportation%20with%20planes%20trains%20buses%2C%20international%20travel%20to%20stadium%20cities%2C%20efficient%20transport%20networks%2C%20modern%20travel%20infrastructure%2C%20global%20connectivity&width=1920&height=800&seq=transport-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-route-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Transportation</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Getting Around for
              <br />
              <span className="text-gold-400">World Cup 2026</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Traveling between cities? Getting from the airport to your hotel? Figuring out match day transport? 
              Our guides cover every journey you'll need to make—and how to do it for less.
            </p>
          </div>

          {/* Transport Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Host Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">Up to 40%</div>
              <div className="text-slate-300 font-inter text-sm">Savings</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-slate-300 font-inter text-sm">Routes</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300 font-inter text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Guides Grid - 2 Column Layout */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Essential Transport Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Everything you need to know about getting around for World Cup 2026.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportGuides.map((guide) => (
              <Card key={guide.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={`${guide.title} transport guide`}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <span>{guide.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {guide.savings}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {guide.excerpt}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Author</div>
                        <div className="font-semibold text-navy-900 dark:text-white">{guide.author}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Read Time</div>
                        <div className="font-semibold text-emerald-600">{guide.readTime}</div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={`/transportation/${slugifyGuide(guide.title)}`}
                    className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 w-full transform-gpu will-change-transform bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 px-6 py-3 text-sm"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <i className="ri-eye-line mr-2"></i>
                      Read Full Guide
                    </span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Guide Modal - Cities Page Style */}
      {isModalOpen && selectedGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeGuideModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedGuide.image} 
                  alt={selectedGuide.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeGuideModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                    <span>{selectedGuide.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium">Transport Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedGuide.savings}</span>
                    <span>•</span>
                    <span>{selectedGuide.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedGuide.title}
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedGuide.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedGuide.fullContent?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-emerald-600 text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Coming Soon</h4>
                      <p className="text-emerald-700 dark:text-emerald-400 text-sm">
                        Comprehensive transportation guides with detailed information about booking strategies, routes, schedules, and money-saving tips will be available soon.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button variant="primary" onClick={closeGuideModal} className="cursor-pointer">
                    <i className="ri-check-line mr-2"></i>
                    Got It
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
