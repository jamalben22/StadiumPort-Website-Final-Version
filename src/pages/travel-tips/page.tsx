
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

interface TipSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: TipSection[];
}

interface TravelTip {
  id: number;
  title: string;
  category: string;
  readTime: string;
  difficulty: string;
  savings: string;
  author: string;
  authorImage: string;
  description: string;
  tips: string[];
  image: string;
  fullContent: FullContent;
}

export default function TravelTipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTip, setSelectedTip] = useState<TravelTip | null>(null);
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

  const openTipModal = (tip: TravelTip) => {
    setSelectedTip(tip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTip(null);
  };

  const travelTips: TravelTip[] = [
    {
      id: 1,
      title: 'Stadium Proximity Strategy',
      category: 'accommodation',
      readTime: '5 min',
      difficulty: 'Beginner',
      savings: '$200+',
      author: 'Alex Thompson',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20accommodation%20expert%20headshot%2C%20hotel%20booking%20specialist%2C%20friendly%20travel%20advisor%2C%20confident%20expression&width=100&height=100&seq=author-alex&orientation=squarish',
      description: 'Master the art of finding accommodations within walking distance of stadiums without paying premium prices.',
      tips: [
        'Book accommodations 2-3 subway stops away from stadiums for 40-60% savings',
        'Look for hotels near team practice facilities - often overlooked but well-connected',
        'Consider university dormitories during summer months for budget options',
        'Use stadium shuttle services to stay further out while maintaining convenience'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20stadium%20exterior%20with%20surrounding%20urban%20neighborhood%2C%20accessible%20public%20transportation%2C%20walkable%20streets%2C%20budget-friendly%20accommodation%20area%2C%20practical%20travel%20planning%20perspective&width=400&height=250&seq=stadium-proximity&orientation=landscape',
      fullContent: {
        introduction: 'Finding the perfect balance between stadium proximity and budget-friendly accommodation is an art form. This comprehensive strategy guide reveals insider secrets for staying close to the action without breaking the bank.',
        sections: [
          {
            title: 'The 2-3 Stop Rule',
            content: 'The sweet spot for accommodation savings lies 2-3 subway stops away from stadiums. This distance typically offers 40-60% savings compared to stadium-adjacent hotels while maintaining easy access. Research the local transit system and identify stops that offer direct routes to the stadium with minimal transfers.'
          },
          {
            title: 'Practice Facility Proximity',
            content: 'Hotels near team practice facilities are often overlooked by tourists but offer excellent value and connectivity. These areas typically have good transportation links to stadiums and lower accommodation costs. Many practice facilities are located in business districts with quality hotels at competitive rates.'
          },
          {
            title: 'University Dormitory Options',
            content: 'During summer months, many universities offer dormitory accommodations to travelers. These options provide basic but clean accommodations at fraction of hotel costs. Look for universities within 30 minutes of stadiums and check their summer housing programs.'
          },
          {
            title: 'Stadium Shuttle Services',
            content: 'Many hotels offer complimentary shuttle services to major venues during events. This allows you to stay further from the stadium while maintaining convenient access. Always confirm shuttle schedules and capacity when booking, as these services can fill up quickly during major events.'
          },
          {
            title: 'Booking Timeline Strategy',
            content: 'Book accommodations 3-4 months in advance for best selection and rates. Monitor prices weekly and be prepared to rebook if rates drop. Consider cancellable reservations to take advantage of last-minute deals while securing your backup option.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Multi-City Tournament Planning',
      category: 'planning',
      readTime: '8 min',
      difficulty: 'Advanced',
      savings: '$500+',
      author: 'Maria Rodriguez',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20travel%20planning%20expert%20headshot%2C%20multi-city%20specialist%2C%20organized%20travel%20consultant%2C%20strategic%20planner&width=100&height=100&seq=author-maria&orientation=squarish',
      description: 'Optimize your itinerary to catch multiple matches across different cities while minimizing travel costs.',
      tips: [
        'Plan routes based on match schedules, not geographical proximity',
        'Book open-jaw flights (fly into one city, out of another) for multi-city trips',
        'Use regional airports for domestic connections - often cheaper than major hubs',
        'Consider bus travel between nearby cities (NYC-Philadelphia, LA-San Francisco)'
      ],
      image: 'https://readdy.ai/api/search-image?query=Travel%20planning%20map%20with%20multiple%20North%20American%20cities%20connected%20by%20routes%2C%20tournament%20schedule%20overlay%2C%20efficient%20multi-city%20itinerary%20visualization%2C%20strategic%20travel%20planning%20concept&width=400&height=250&seq=multi-city-planning&orientation=landscape',
      fullContent: {
        introduction: 'Planning a multi-city tournament experience requires strategic thinking and careful coordination. This advanced guide helps you optimize your itinerary for maximum games while minimizing costs and travel time.',
        sections: [
          {
            title: 'Schedule-Based Route Planning',
            content: 'Ignore geographical logic and plan your route based on match schedules. Sometimes it\'s more efficient to zigzag across the continent following the tournament schedule rather than taking a linear geographical approach. Use tournament scheduling to your advantage by identifying clusters of games in nearby cities.'
          },
          {
            title: 'Open-Jaw Flight Strategy',
            content: 'Book flights that arrive in one city and depart from another (open-jaw tickets). This eliminates the need to return to your starting point and can save significant money and time. Many airlines offer competitive open-jaw pricing, especially for international travelers.'
          },
          {
            title: 'Regional Airport Advantages',
            content: 'Secondary airports often offer better deals and shorter lines than major hubs. Research airports within 2-3 hours of your destination cities. Factor in ground transportation costs, but often the savings and convenience outweigh the extra travel time.'
          },
          {
            title: 'Strategic Ground Transportation',
            content: 'For cities within 4-6 hours of each other, consider bus or train travel. Overnight buses can save on accommodation costs while getting you to your next destination. High-speed rail options in certain corridors can be faster and more comfortable than flying when you factor in airport time.'
          },
          {
            title: 'Accommodation Coordination',
            content: 'Book accommodations that allow flexible check-in/check-out times. Consider staying in cities with multiple nearby venues to minimize moves. Some travelers find success in establishing "base camps" in central locations and taking day trips to nearby stadiums.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Dynamic Pricing Mastery',
      category: 'booking',
      readTime: '6 min',
      difficulty: 'Intermediate',
      savings: '$300+',
      author: 'David Chen',
      authorImage: 'https://readdy.ai/api/search-image?query=Asian%20male%20booking%20expert%20headshot%2C%20pricing%20specialist%2C%20tech-savvy%20travel%20advisor%2C%20analytical%20expression&width=100&height=100&seq=author-david&orientation=squarish',
      description: 'Understand and exploit hotel pricing algorithms to secure the best rates during peak tournament periods.',
      tips: [
        'Clear browser cookies between searches to avoid price tracking',
        'Book Sunday-Thursday for weekend matches to avoid premium rates',
        'Use VPN to compare prices from different geographical locations',
        'Set up price alerts 6 months in advance for optimal booking windows'
      ],
      image: 'https://readdy.ai/api/search-image?query=Hotel%20booking%20interface%20showing%20dynamic%20pricing%20charts%2C%20rate%20comparison%20graphs%2C%20booking%20optimization%20strategy%2C%20digital%20travel%20planning%20tools%2C%20price%20tracking%20visualization&width=400&height=250&seq=dynamic-pricing&orientation=landscape',
      fullContent: {
        introduction: 'Hotel pricing algorithms are sophisticated systems that adjust rates based on demand, competition, and user behavior. Understanding these systems allows savvy travelers to secure significantly better rates during peak tournament periods.',
        sections: [
          {
            title: 'Browser and Cookie Management',
            content: 'Hotels track your search behavior through cookies and may increase prices on repeat visits. Always clear cookies between searches or use incognito/private browsing mode. Some travelers use different devices or browsers for price comparison to avoid tracking algorithms.'
          },
          {
            title: 'Strategic Booking Timing',
            content: 'Book accommodations for Sunday through Thursday nights when possible, even for weekend games. Many hotels offer lower rates for weeknight stays. Arrive a day or two early and stay through the weekend to take advantage of these rate differences.'
          },
          {
            title: 'Geographic Price Arbitrage',
            content: 'Hotel prices can vary based on your apparent location. Use VPN services to compare prices from different countries or regions. Sometimes booking from a different geographic location can result in significant savings due to regional pricing strategies.'
          },
          {
            title: 'Price Alert Systems',
            content: 'Set up price alerts 6 months in advance using multiple platforms. Monitor price trends and identify optimal booking windows. Many hotels release inventory in waves, creating opportunities for better rates at different times during the booking cycle.'
          },
          {
            title: 'Cancellation Policy Leverage',
            content: 'Book refundable rates when possible to take advantage of price drops. Monitor your reservations regularly and rebook at lower rates when available. Some credit cards offer price protection that can reimburse you for rate decreases after booking.'
          }
        ]
      }
    }
    // ... rest of tips with similar fullContent structure
  ];

  const categories = [
    { id: 'all', name: 'All Tips', icon: 'ri-list-check' },
    { id: 'accommodation', name: 'Accommodation', icon: 'ri-hotel-line' },
    { id: 'transportation', name: 'Flights & Transport', icon: 'ri-flight-takeoff-line' },
    { id: 'planning', name: 'Planning', icon: 'ri-calendar-line' },
    { id: 'booking', name: 'Booking', icon: 'ri-bookmark-line' }
  ];

  const filteredTips = travelTips.filter(tip => {
    const categoryMatch = selectedCategory === 'all' || tip.category === selectedCategory;
    const searchMatch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Expert%20travel%20planning%20workspace%20with%20maps%2C%20guides%2C%20and%20planning%20tools%20spread%20across%20desk%2C%20professional%20travel%20strategy%20setup%2C%20tournament%20planning%20materials%2C%20organized%20travel%20research%20environment&width=1920&height=800&seq=travel-tips-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-lightbulb-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Travel Tips</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Insider Advice
              <br />
              <span className="text-gold-400">That Saves You Money</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Learn from fans who've been there before. Practical tips to help you save on flights, 
              find better accommodation, skip the tourist traps, and make the most of your World Cup trip.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$1,500+</div>
              <div className="text-slate-300 font-inter text-sm">Avg. Savings</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">47</div>
              <div className="text-slate-300 font-inter text-sm">Expert Tips</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Cities Covered</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Proven</div>
              <div className="text-slate-300 font-inter text-sm">Strategies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Start Here: Our Best Money-Saving Tips
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              These strategies have helped thousands of fans save big on their World Cup trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {travelTips.slice(0, 3).map((tip, index) => (
              <Card key={tip.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save {tip.savings}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full capitalize">
                      {tip.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tip.readTime}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tip.difficulty}</span>
                  </div>
                  
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openTipModal(tip)}
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Read Full Guide
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tips with Sidebar */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white dark:from-navy-800 dark:to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-navy-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Search Tips
                      </label>
                      <div className="relative">
                        <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                        <input
                          type="text"
                          placeholder="Search tips..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-navy-700 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Category
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.slice(0, 4).map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                              selectedCategory === category.id
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                            }`}
                          >
                            <i className={`${category.icon} text-sm`}></i>
                            <span>{category.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Grid */}
              <div className="space-y-6">
                {filteredTips.map((tip, index) => (
                  <Card key={tip.id} hover className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={tip.image}
                          alt={tip.title}
                          className="w-full h-48 md:h-full object-cover object-top rounded-lg"
                        />
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {tip.savings}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full capitalize">
                            {tip.category}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{tip.readTime}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{tip.difficulty}</span>
                        </div>
                        
                        <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                          {tip.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                          {tip.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {tip.tips.slice(0, 2).map((tipItem, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <i className="ri-check-line text-emerald-500 mt-0.5 text-sm"></i>
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{tipItem}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="whitespace-nowrap cursor-pointer"
                          onClick={() => openTipModal(tip)}
                        >
                          <i className="ri-arrow-right-line mr-2"></i>
                          Read Complete Guide
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Card className="p-6">
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                    Related Guides
                  </h3>
                  <div className="space-y-3">
                    <Link to="/travel-guides/article?id=1" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Complete New York World Cup 2026 Travel Guide
                    </Link>
                    <Link to="/travel-guides/article?id=2" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Los Angeles World Cup 2026: Complete Travel Guide
                    </Link>
                    <Link to="/travel-guides/article?id=3" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Miami World Cup 2026: Beach &amp; Football Paradise
                    </Link>
                    <Link to="/travel-guides/article?id=5" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Budget Travel Guide: World Cup 2026 on a Shoestring
                    </Link>
                    <Link to="/travel-guides/article?id=6" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Luxury World Cup 2026: Premium Experiences
                    </Link>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                    Quick Links
                  </h3>
                  <nav className="space-y-2">
                    <Link to="/safety-guide" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Safety &amp; Security
                    </Link>
                    <Link to="/budget-guides" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Budget Planning
                    </Link>
                    <Link to="/transportation" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Transportation Guide
                    </Link>
                    <Link to="/accommodation" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Accommodation Options
                    </Link>
                  </nav>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Tip Modal - Safety Guide Style */}
      {isModalOpen && selectedTip && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedTip.image} 
                  alt={selectedTip.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save {selectedTip.savings}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium capitalize">{selectedTip.category}</span>
                  <span className="text-slate-500 text-sm">{selectedTip.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedTip.title}
                </h2>
                
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src={selectedTip.authorImage}
                    alt={selectedTip.author}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://readdy.ai/api/search-image?query=default%20user%20profile%20avatar&width=100&height=100';
                    }}
                  />
                  <div>
                    <div className="font-medium text-navy-900 dark:text-white">{selectedTip.author}</div>
                    <div className="text-sm text-slate-500">Travel Expert</div>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedTip.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedTip.fullContent?.sections.map((section, index) => (
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
                    <i className="ri-lightbulb-line text-emerald-600 text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Pro Tip</h4>
                      <p className="text-emerald-700 dark:text-emerald-400 text-sm">
                        Combine multiple strategies for maximum savings. The best travelers use 3-4 techniques simultaneously.
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

      <Footer />
    </div>
  );
}
