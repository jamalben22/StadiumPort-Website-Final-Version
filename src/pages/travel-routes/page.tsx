
import { useState } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

const routeTypes = [
  'All Routes',
  'Multi-City Tours',
  'Regional Circuits',
  'Budget Routes',
  'Luxury Journeys',
  'Quick Trips'
];

const travelRoutes = [
  {
    id: 1,
    title: 'Ultimate 16-City World Cup Grand Tour',
    description: 'Complete journey through all host cities with optimized routing, transportation, and accommodation recommendations.',
    type: 'Multi-City Tours',
    duration: '28 days',
    cities: ['Qatar', 'USA (8 cities)', 'Mexico (3 cities)', 'Canada (2 cities)'],
    difficulty: 'Advanced',
    budget: '$8,000 - $25,000',
    image: 'https://readdy.ai/api/search-image?query=world%20map%20with%20travel%20route%20connecting%20multiple%20cities%2C%20international%20journey%20planning%2C%20global%20travel%20itinerary%2C%20comprehensive%20world%20tour%20visualization&width=600&height=400&seq=route1&orientation=landscape',
    featured: true,
    readTime: '12 min read',
    author: 'Route Planner',
    highlights: ['All 16 host cities', 'Optimized routing', 'Cultural experiences', 'Stadium tours'],
    fullContent: {
      introduction: 'Complete journey through all host cities with optimized routing, transportation, and accommodation recommendations for the ultimate World Cup 2026 experience.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Ultimate 16-City World Cup Grand Tour experience.'
        }
      ]
    },
    detailedRoute: {
      distance: '45,000+ miles',
      transportOptions: ['International flights', 'High-speed rail', 'Luxury buses', 'Car rentals'],
      bestStops: [
        'Qatar - Doha (3 days): Luxury shopping, desert tours, modern architecture',
        'USA East Coast (8 days): NYC, Boston, Philadelphia, Atlanta cultural circuit',
        'USA West Coast (6 days): Los Angeles, San Francisco, Seattle tech and entertainment',
        'USA Central (5 days): Dallas, Kansas City heartland experience',
        'Mexico (6 days): Mexico City, Guadalajara, Monterrey cultural immersion'
      ],
      timeline: {
        'Week 1': 'Qatar & USA East Coast',
        'Week 2': 'USA Central & West Coast',
        'Week 3': 'Mexico & Canada',
        'Week 4': 'Final cities & departure'
      },
      tips: [
        'Book flights 3-4 months in advance for best rates',
        'Consider rail passes for regional travel',
        'Pack for diverse climates and seasons',
        'Allow buffer days for weather delays'
      ]
    }
  },
  {
    id: 2,
    title: 'USA East Coast Stadium Circuit',
    description: 'Explore the eastern United States visiting New York, Boston, Philadelphia, and Atlanta stadiums.',
    type: 'Regional Circuits',
    duration: '10 days',
    cities: ['New York', 'Boston', 'Philadelphia', 'Atlanta'],
    difficulty: 'Intermediate',
    budget: '$3,500 - $8,000',
    image: 'https://readdy.ai/api/search-image?query=USA%20East%20Coast%20cities%20skyline%20montage%20with%20stadiums%2C%20American%20football%20venues%2C%20urban%20landscapes%2C%20metropolitan%20areas%2C%20professional%20sports%20facilities&width=600&height=400&seq=route2&orientation=landscape',
    featured: true,
    readTime: '9 min read',
    author: 'East Coast Expert',
    highlights: ['Historic cities', 'Easy transport', 'Cultural diversity', 'Great food scenes'],
    fullContent: {
      introduction: 'Explore the eastern United States visiting New York, Boston, Philadelphia, and Atlanta stadiums with comprehensive cultural experiences and easy transportation.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the USA East Coast Stadium Circuit experience.'
        }
      ]
    },
    detailedRoute: {
      distance: '1,200 miles',
      transportOptions: ['Amtrak trains', 'Domestic flights', 'Rental cars', 'Bus services'],
      bestStops: [
        'New York (3 days): MetLife Stadium, Broadway shows, Central Park, diverse neighborhoods',
        'Boston (2 days): Gillette Stadium, Freedom Trail, Harvard University, seafood',
        'Philadelphia (2 days): Lincoln Financial Field, Independence Hall, cheesesteaks',
        'Atlanta (3 days): Mercedes-Benz Stadium, MLK sites, southern cuisine, music scene'
      ],
      timeline: {
        'Days 1-3': 'New York exploration and stadium visit',
        'Days 4-5': 'Boston history and culture',
        'Days 6-7': 'Philadelphia founding fathers tour',
        'Days 8-10': 'Atlanta southern hospitality'
      },
      tips: [
        'Use Amtrak for scenic and convenient city-to-city travel',
        'Book accommodations near public transit',
        'Try regional specialties in each city',
        'Allow extra time for NYC traffic and crowds'
      ]
    }
  },
  {
    id: 3,
    title: 'Mexico Cultural & Stadium Experience',
    description: 'Immerse yourself in Mexican culture while visiting all three host cities: Mexico City, Guadalajara, and Monterrey.',
    type: 'Regional Circuits',
    duration: '8 days',
    cities: ['Mexico City', 'Guadalajara', 'Monterrey'],
    difficulty: 'Beginner',
    budget: '$1,500 - $4,000',
    image: 'https://readdy.ai/api/search-image?query=Mexican%20cities%20with%20colorful%20architecture%2C%20traditional%20culture%2C%20historic%20stadiums%2C%20vibrant%20street%20life%2C%20authentic%20Mexican%20atmosphere%2C%20cultural%20heritage&width=600&height=400&seq=route3&orientation=landscape',
    featured: false,
    readTime: '7 min read',
    author: 'Mexico Expert',
    highlights: ['Rich culture', 'Affordable prices', 'Amazing cuisine', 'Historic venues'],
    fullContent: {
      introduction: 'Immerse yourself in Mexican culture while visiting all three host cities: Mexico City, Guadalajara, and Monterrey with authentic cultural experiences.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Mexico Cultural & Stadium Experience.'
        }
      ]
    },
    detailedRoute: {
      distance: '800 miles',
      transportOptions: ['Domestic flights', 'First-class buses', 'Car rentals', 'High-speed buses'],
      bestStops: [
        'Mexico City (4 days): Estadio Azteca, Teotihuacan pyramids, world-class museums, street food tours',
        'Guadalajara (2 days): Estadio Akron, tequila distilleries, mariachi culture, traditional crafts',
        'Monterrey (2 days): Estadio BBVA, Cerro de la Silla hiking, industrial heritage, northern cuisine'
      ],
      timeline: {
        'Days 1-4': 'Mexico City cultural immersion',
        'Days 5-6': 'Guadalajara tequila and traditions',
        'Days 7-8': 'Monterrey mountains and modernity'
      },
      tips: [
        'Learn basic Spanish phrases for better experiences',
        'Try street food from established vendors',
        'Carry cash as many places don\'t accept cards',
        'Respect local customs and dress codes'
      ]
    }
  },
  {
    id: 4,
    title: 'Canada Coast-to-Coast Adventure',
    description: 'Experience Canadian hospitality in Toronto and Vancouver with scenic routes and cultural attractions.',
    type: 'Regional Circuits',
    duration: '6 days',
    cities: ['Toronto', 'Vancouver'],
    difficulty: 'Beginner',
    budget: '$2,500 - $6,000',
    image: 'https://readdy.ai/api/search-image?query=Canadian%20cities%20with%20modern%20skylines%2C%20natural%20beauty%2C%20professional%20stadiums%2C%20multicultural%20atmosphere%2C%20clean%20urban%20environments%2C%20scenic%20landscapes&width=600&height=400&seq=route4&orientation=landscape',
    featured: false,
    readTime: '6 min read',
    author: 'Canada Guide',
    highlights: ['Natural beauty', 'Friendly locals', 'Clean cities', 'Great transport'],
    fullContent: {
      introduction: 'Experience Canadian hospitality in Toronto and Vancouver with scenic routes and cultural attractions across Canada\'s diverse landscapes.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Canada Coast-to-Coast Adventure.'
        }
      ]
    },
    detailedRoute: {
      distance: '2,100 miles',
      transportOptions: ['Domestic flights', 'VIA Rail', 'Car rentals', 'Bus services'],
      bestStops: [
        'Toronto (3 days): BMO Field, CN Tower, Niagara Falls day trip, diverse neighborhoods',
        'Vancouver (3 days): BC Place, Stanley Park, Granville Island, mountain views'
      ],
      timeline: {
        'Days 1-3': 'Toronto urban exploration',
        'Days 4-6': 'Vancouver nature and culture'
      },
      tips: [
        'Bring layers for variable weather',
        'Use public transit - very efficient in both cities',
        'Try poutine in Toronto and sushi in Vancouver',
        'Book accommodations early during peak season'
      ]
    }
  },
  {
    id: 5,
    title: 'Budget Backpacker Route: Mexico & USA South',
    description: 'Cost-effective journey through Mexico and southern US cities with hostels, buses, and budget-friendly options.',
    type: 'Budget Routes',
    duration: '14 days',
    cities: ['Mexico City', 'Guadalajara', 'Dallas', 'Atlanta', 'Miami'],
    difficulty: 'Intermediate',
    budget: '$2,000 - $4,500',
    image: 'https://readdy.ai/api/search-image?query=budget%20backpacker%20with%20travel%20gear%2C%20affordable%20accommodation%2C%20bus%20transportation%2C%20budget%20travel%20lifestyle%2C%20cost-effective%20journey%20planning&width=600&height=400&seq=route5&orientation=landscape',
    featured: false,
    readTime: '10 min read',
    author: 'Budget Expert',
    highlights: ['Budget-friendly', 'Cultural immersion', 'Local transport', 'Authentic experiences'],
    fullContent: {
      introduction: 'Cost-effective journey through Mexico and southern US cities with hostels, buses, and budget-friendly options for the savvy traveler.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Budget Backpacker Route.'
        }
      ]
    },
    detailedRoute: {
      distance: '2,800 miles',
      transportOptions: ['Budget airlines', 'Greyhound buses', 'Hostel shuttles', 'Public transit'],
      bestStops: [
        'Mexico City (3 days): Free museums, street food, metro system, budget hostels',
        'Guadalajara (2 days): Affordable tequila tours, local markets, budget accommodations',
        'Dallas (3 days): Free city attractions, affordable BBQ, budget hotels',
        'Atlanta (3 days): Free MLK sites, affordable southern food, hostel options',
        'Miami (3 days): Free beaches, budget Cuban food, affordable accommodations'
      ],
      timeline: {
        'Days 1-5': 'Mexico budget exploration',
        'Days 6-8': 'Dallas Texas experience',
        'Days 9-11': 'Atlanta southern culture',
        'Days 12-14': 'Miami beach finale'
      },
      tips: [
        'Book hostels in advance for better rates',
        'Use city tourism cards for attraction discounts',
        'Eat at local markets and food trucks',
        'Travel with overnight buses to save on accommodation'
      ]
    }
  },
  {
    id: 6,
    title: 'Luxury VIP Experience Circuit',
    description: 'Premium journey with private jets, luxury hotels, VIP stadium access, and exclusive experiences.',
    type: 'Luxury Journeys',
    duration: '21 days',
    cities: ['Qatar', 'New York', 'Los Angeles', 'Miami', 'Toronto'],
    difficulty: 'Easy',
    budget: '$50,000 - $150,000',
    image: 'https://readdy.ai/api/search-image?query=luxury%20travel%20with%20private%20jet%2C%20premium%20hotels%2C%20VIP%20stadium%20suites%2C%20exclusive%20experiences%2C%20high-end%20travel%20lifestyle%2C%20sophisticated%20journey&width=600&height=400&seq=route6&orientation=landscape',
    featured: false,
    readTime: '15 min read',
    author: 'Luxury Advisor',
    highlights: ['Private jets', 'Luxury hotels', 'VIP access', 'Concierge service'],
    fullContent: {
      introduction: 'Premium journey with private jets, luxury hotels, VIP stadium access, and exclusive experiences for the ultimate World Cup 2026 luxury adventure.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Luxury VIP Experience Circuit.'
        }
      ]
    },
    detailedRoute: {
      distance: '35,000+ miles',
      transportOptions: ['Private jets', 'First-class flights', 'Luxury car services', 'Helicopter transfers'],
      bestStops: [
        'Qatar (5 days): 5-star desert resorts, private stadium tours, luxury shopping, exclusive dining',
        'New York (4 days): Penthouse suites, Broadway VIP, Michelin dining, private art tours',
        'Los Angeles (4 days): Beverly Hills hotels, studio tours, exclusive beach clubs, celebrity dining',
        'Miami (4 days): Ocean-view suites, yacht charters, VIP nightlife, private beach access',
        'Toronto (4 days): Luxury downtown hotels, private CN Tower access, exclusive experiences'
      ],
      timeline: {
        'Week 1': 'Qatar luxury immersion',
        'Week 2': 'USA East Coast premium experiences',
        'Week 3': 'USA West Coast and Miami finale'
      },
      tips: [
        'Book luxury accommodations 6+ months in advance',
        'Arrange private security for high-profile events',
        'Use luxury travel concierge services',
        'Consider private jet membership for multiple flights'
      ]
    }
  },
  {
    id: 7,
    title: 'Weekend Warrior: Quick City Hops',
    description: 'Efficient 3-4 day trips to individual cities, perfect for working professionals with limited time.',
    type: 'Quick Trips',
    duration: '3-4 days each',
    cities: ['Any host city'],
    difficulty: 'Easy',
    budget: '$800 - $2,500 per trip',
    image: 'https://readdy.ai/api/search-image?query=business%20traveler%20with%20efficient%20packing%2C%20quick%20city%20trip%2C%20professional%20travel%20planning%2C%20time-efficient%20journey%2C%20urban%20exploration%2C%20weekend%20getaway&width=600&height=400&seq=route7&orientation=landscape',
    featured: false,
    readTime: '5 min read',
    author: 'Quick Trip Expert',
    highlights: ['Time efficient', 'Flexible dates', 'City focused', 'Work-friendly'],
    fullContent: {
      introduction: 'Efficient 3-4 day trips to individual cities, perfect for working professionals with limited time who want to experience World Cup 2026.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about Weekend Warrior Quick City Hops.'
        }
      ]
    },
    detailedRoute: {
      distance: 'Varies by city',
      transportOptions: ['Direct flights', 'Express trains', 'Airport shuttles', 'Ride-sharing'],
      bestStops: [
        'Friday: Arrival and city orientation, stadium area exploration',
        'Saturday: Main attractions, cultural sites, local cuisine sampling',
        'Sunday: Stadium visit or match, shopping, departure preparation',
        'Monday: Optional extra day for business meetings or extended exploration'
      ],
      timeline: {
        'Friday': 'Arrival and initial exploration',
        'Saturday': 'Full day city immersion',
        'Sunday': 'Stadium focus and departure',
        'Monday': 'Optional extension day'
      },
      tips: [
        'Pack light with carry-on only',
        'Book accommodations near city center',
        'Use mobile apps for efficient navigation',
        'Plan key attractions in advance to maximize time'
      ]
    }
  },
  {
    id: 8,
    title: 'Family-Friendly Multi-City Adventure',
    description: 'Safe, comfortable routes designed for families with children, including kid-friendly activities and accommodations.',
    type: 'Multi-City Tours',
    duration: '16 days',
    cities: ['Toronto', 'Boston', 'New York', 'Philadelphia', 'Atlanta'],
    difficulty: 'Easy',
    budget: '$6,000 - $12,000',
    image: 'https://readdy.ai/api/search-image?query=family%20travel%20with%20children%2C%20kid-friendly%20activities%2C%20comfortable%20accommodation%2C%20safe%20travel%20environment%2C%20family%20vacation%20planning%2C%20multi-generational%20journey&width=600&height=400&seq=route8&orientation=landscape',
    featured: false,
    readTime: '11 min read',
    author: 'Family Travel Expert',
    highlights: ['Kid-friendly', 'Safe routes', 'Family activities', 'Comfortable pace'],
    fullContent: {
      introduction: 'Safe, comfortable routes designed for families with children, including kid-friendly activities and accommodations for the perfect family World Cup 2026 experience.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed route guide content will be available soon. Stay tuned for comprehensive information about the Family-Friendly Multi-City Adventure.'
        }
      ]
    },
    detailedRoute: {
      distance: '1,500 miles',
      transportOptions: ['Family-friendly flights', 'Amtrak family cars', 'Rental minivans', 'Tour buses'],
      bestStops: [
        'Toronto (4 days): CN Tower, Ontario Science Centre, family-friendly neighborhoods, safe public transit',
        'Boston (3 days): Children\'s Museum, Duck Tours, family restaurants, walkable attractions',
        'New York (4 days): Central Park, kid-friendly Broadway shows, family hotels, subway adventures',
        'Philadelphia (2 days): Please Touch Museum, Independence Hall tours, family dining',
        'Atlanta (3 days): Georgia Aquarium, family-friendly attractions, comfortable accommodations'
      ],
      timeline: {
        'Days 1-4': 'Toronto family exploration',
        'Days 5-7': 'Boston educational fun',
        'Days 8-11': 'New York family adventures',
        'Days 12-13': 'Philadelphia history lessons',
        'Days 14-16': 'Atlanta southern hospitality'
      },
      tips: [
        'Book connecting rooms or family suites',
        'Pack entertainment for travel days',
        'Research kid-friendly restaurants in advance',
        'Allow extra time for family needs and rest breaks'
      ]
    }
  }
];

export default function TravelRoutesPage() {
  const [selectedType, setSelectedType] = useState('All Routes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState<typeof travelRoutes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useState(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  const filteredRoutes = travelRoutes.filter(route => {
    const matchesType = selectedType === 'All Routes' || route.type === selectedType;
    const matchesSearch = route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const featuredRoutes = travelRoutes.filter(route => route.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Beginner': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const openRouteModal = (route: typeof travelRoutes[0]) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoute(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=World%20Cup%202026%20travel%20routes%20visualization%2C%20multiple%20destination%20mapping%2C%20international%20journey%20planning%2C%20travel%20path%20connections%2C%20route%20optimization%20graphics&width=1920&height=800&seq=travel-routes-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-route-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">Travel Routes</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Perfect Routes,
              <br />
              <span className="text-gold-400">Seamless Journeys</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Following your team? Want to see multiple cities? We've mapped out the best routes connecting host cities—including how long to spend in each place, the cheapest ways to travel between them, and what to see along the way.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Host Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
              <div className="text-slate-300 font-inter text-sm">Route Options</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-slate-300 font-inter text-sm">Countries</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Optimized</div>
              <div className="text-slate-300 font-inter text-sm">Itineraries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Most Popular Multi-City Routes
            </h2>
            <p className="font-inter text-lg text-slate-600 dark:text-slate-300">
              Tried-and-tested itineraries for exploring multiple host cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredRoutes.map((route) => (
              <Card key={route.id} hover className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={route.image} 
                    alt={route.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`${getDifficultyColor(route.difficulty)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {route.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-500 text-sm font-medium">{route.type}</span>
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <span>{route.author}</span>
                      <span>•</span>
                      <span>{route.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {route.title}
                  </h3>
                  <p className="font-inter text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {route.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {route.cities.map((city, index) => (
                        <span key={index} className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <div className="font-bold text-green-600">{route.budget}</div>
                      <div className="text-slate-500">{route.duration}</div>
                    </div>
                  </div>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openRouteModal(route)}
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

      {/* Search and Filter */}
      <section className="py-16 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                <input
                  type="text"
                  placeholder="Search travel routes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-navy-600 rounded-xl bg-white dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {routeTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-navy-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Routes Grid - 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredRoutes.map((route) => (
              <Card key={route.id} hover className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={route.image} 
                    alt={route.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`${getDifficultyColor(route.difficulty)} text-white px-2 py-1 rounded-lg text-xs font-bold`}>
                      {route.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-500 text-sm font-medium">{route.type}</span>
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <span>{route.author}</span>
                      <span>•</span>
                      <span>{route.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {route.title}
                  </h3>
                  <p className="font-inter text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {route.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {route.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <div className="font-bold text-green-600">{route.budget}</div>
                      <div className="text-slate-500">{route.duration}</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openRouteModal(route)}
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Read Full Guide
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-4xl text-slate-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                No travel routes found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Route Detail Modal - Cities Page Style */}
      {isModalOpen && selectedRoute && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedRoute.image} 
                  alt={selectedRoute.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`${getDifficultyColor(selectedRoute.difficulty)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {selectedRoute.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium">Travel Route Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedRoute.author}</span>
                    <span>•</span>
                    <span>{selectedRoute.readTime}</span>
                  </div>
                </div>
                
                <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
                  {selectedRoute.title}
                </h2>
                
                <p className="font-inter text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedRoute.fullContent?.introduction}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-2">
                      <i className="ri-time-line mr-2"></i>Duration
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400">{selectedRoute.duration}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
                      <i className="ri-shield-check-line mr-2"></i>Difficulty
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">{selectedRoute.difficulty}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2">
                      <i className="ri-money-dollar-circle-line mr-2"></i>Budget
                    </h3>
                    <p className="text-green-600 dark:text-green-400">{selectedRoute.budget}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {selectedRoute.fullContent?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="font-inter text-slate-600 dark:text-slate-300 leading-relaxed">
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
                        Comprehensive travel route guides with detailed information about transportation, accommodations, attractions, and local tips will be available soon.
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
