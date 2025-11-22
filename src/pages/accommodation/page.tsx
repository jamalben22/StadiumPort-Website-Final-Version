
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

interface AccommodationSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: AccommodationSection[];
}

interface AccommodationGuide {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  featured: boolean;
  priceRange: string;
  fullContent: FullContent;
}

export default function AccommodationPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<AccommodationGuide | null>(null);
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

  const accommodationTypes = [
    'All Types',
    'Hotels',
    'Hostels',
    'Apartments',
    'Budget',
    'Mid-Range',
    'Luxury',
    'Family-Friendly'
  ];

  const accommodationGuides: AccommodationGuide[] = [
    {
      id: 1,
      title: 'Ultimate Hotel Guide: All Host Cities',
      excerpt: 'Comprehensive hotel recommendations from budget to luxury across all 16 World Cup host cities with insider booking tips.',
      category: 'Hotels',
      author: 'Jennifer Walsh',
      readTime: '20 min read',
      image: 'https://readdy.ai/api/search-image?query=elegant%20hotel%20lobby%20with%20modern%20design%2C%20comfortable%20seating%20areas%2C%20professional%20hospitality%20setting%2C%20luxury%20accommodation%20interior%2C%20welcoming%20atmosphere&width=600&height=400&seq=acc1&orientation=landscape',
      featured: true,
      priceRange: '$80-500/night',
      fullContent: {
        introduction: 'Discover the best hotel options across all World Cup host cities. From budget-friendly stays to luxury resorts, our comprehensive guide covers everything you need to know about booking the perfect accommodation.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about hotel options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Budget Hostels: Social & Affordable',
      excerpt: 'Best hostels for backpackers and budget travelers with social atmospheres, safety ratings, and booking strategies.',
      category: 'Hostels',
      author: 'Mark Stevens',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20hostel%20common%20area%20with%20comfortable%20seating%2C%20social%20atmosphere%2C%20budget%20accommodation%2C%20clean%20contemporary%20design%2C%20backpacker%20friendly%20environment&width=600&height=400&seq=acc2&orientation=landscape',
      featured: true,
      priceRange: '$25-80/night',
      fullContent: {
        introduction: 'Find the perfect hostel for your World Cup adventure. Our guide covers the best budget-friendly accommodations with social atmospheres, safety features, and strategic locations near stadiums.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about hostel options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Apartment Rentals: Home Away From Home',
      excerpt: 'Find perfect apartments and vacation rentals with kitchens, space for groups, and local neighborhood experiences.',
      category: 'Apartments',
      author: 'Sofia Rodriguez',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20apartment%20living%20room%20with%20kitchen%2C%20comfortable%20home-like%20setting%2C%20vacation%20rental%20interior%2C%20spacious%20accommodation%2C%20contemporary%20furnishing&width=600&height=400&seq=acc3&orientation=landscape',
      featured: false,
      priceRange: '$60-300/night',
      fullContent: {
        introduction: 'Experience World Cup host cities like a local with apartment rentals and vacation homes. Perfect for groups and extended stays with kitchen facilities and authentic neighborhood experiences.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about apartment rental options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Luxury Resorts: Ultimate Comfort',
      excerpt: 'Premium resorts and luxury hotels offering world-class amenities, spa services, and exclusive World Cup packages.',
      category: 'Luxury Resorts',
      author: 'Alexander Pierce',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20resort%20pool%20area%20with%20elegant%20design%2C%20premium%20hospitality%20setting%2C%20upscale%20accommodation%2C%20sophisticated%20atmosphere%2C%20high-end%20travel%20experience&width=600&height=400&seq=acc4&orientation=landscape',
      featured: false,
      priceRange: '$400-2000/night',
      fullContent: {
        introduction: 'Indulge in the ultimate luxury during World Cup 2026 with premium resorts and five-star hotels. Experience world-class amenities, spa services, and exclusive packages designed for discerning travelers.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about luxury resort options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Family-Friendly Accommodations',
      excerpt: 'Hotels and rentals perfect for families with kids, including amenities, safety features, and entertainment options.',
      category: 'Family Stays',
      author: 'Rachel Green',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=family%20hotel%20room%20with%20connecting%20rooms%2C%20child-friendly%20amenities%2C%20safe%20accommodation%20environment%2C%20comfortable%20family%20travel%20setting%2C%20welcoming%20atmosphere&width=600&height=400&seq=acc5&orientation=landscape',
      featured: false,
      priceRange: '$100-400/night',
      fullContent: {
        introduction: 'Find the perfect family-friendly accommodation for your World Cup adventure. Our guide covers hotels and rentals with kid-friendly amenities, safety features, and entertainment options.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about family-friendly options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Last-Minute Booking Strategies',
      excerpt: 'Expert tips for finding accommodation when everything seems booked, including alternative options and negotiation tactics.',
      category: 'Budget Options',
      author: 'Tom Wilson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=person%20booking%20accommodation%20on%20mobile%20phone%2C%20hotel%20search%20interface%2C%20travel%20planning%2C%20last-minute%20booking%2C%20accommodation%20reservation%20process&width=600&height=400&seq=acc6&orientation=landscape',
      featured: false,
      priceRange: 'Variable',
      fullContent: {
        introduction: 'Don\'t panic if accommodations seem fully booked. Our expert strategies help you find last-minute options, negotiate better rates, and discover alternative accommodations during World Cup 2026.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about last-minute booking strategies for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Stadium Proximity Guide',
      excerpt: 'Accommodations within walking distance or easy transport to each stadium, with match day logistics and crowd management.',
      category: 'Hotels',
      author: 'Carlos Martinez',
      readTime: '17 min read',
      image: 'https://readdy.ai/api/search-image?query=hotel%20near%20stadium%20with%20World%20Cup%20atmosphere%2C%20sports%20event%20accommodation%2C%20convenient%20location%2C%20match%20day%20logistics%2C%20fan-friendly%20environment&width=600&height=400&seq=acc7&orientation=landscape',
      featured: false,
      priceRange: '$120-600/night',
      fullContent: {
        introduction: 'Stay close to the action with accommodations near World Cup stadiums. Our guide covers hotels within walking distance or easy transport access, plus match day logistics and crowd management tips.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about stadium proximity options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Unique Stays: Beyond Hotels',
      excerpt: 'Discover unique accommodations like boutique properties, historic buildings, and local experiences for memorable stays.',
      category: 'Hotels',
      author: 'Isabella Chen',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=boutique%20hotel%20with%20unique%20design%2C%20artistic%20interior%2C%20distinctive%20accommodation%2C%20creative%20hospitality%20setting%2C%20memorable%20travel%20experience&width=600&height=400&seq=acc8&orientation=landscape',
      featured: false,
      priceRange: '$150-800/night',
      fullContent: {
        introduction: 'Go beyond traditional hotels with unique accommodation experiences. Discover boutique properties, historic buildings, and distinctive stays that make your World Cup trip truly memorable.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed accommodation guide content will be available soon. Stay tuned for comprehensive information about unique accommodation options for World Cup 2026.'
          }
        ]
      }
    }
  ];

  const filteredGuides = accommodationGuides.filter(guide => {
    const matchesType = selectedType === 'All Types' || guide.category === selectedType;
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const featuredGuides = accommodationGuides.filter(guide => guide.featured);

  const openGuideModal = (guide: AccommodationGuide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeGuideModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  const handleFindAccommodation = () => {
    navigate('/deals');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Hero Section - Apple-Level Premium Design */}
      <main id="main-content" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          <div className="absolute top-8 left-4 w-16 h-16 xs:top-10 xs:left-6 xs:w-20 xs:h-20 sm:top-16 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-40 md:h-40 lg:top-24 lg:left-12 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-3xl rounded-full border border-emerald-500/10 dark:border-emerald-500/20 animate-float"></div>
          <div className="absolute top-1/2 right-4 w-20 h-20 xs:right-6 xs:w-24 xs:h-24 sm:right-8 sm:w-40 sm:h-40 md:right-10 md:w-48 md:h-48 lg:right-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/2 w-16 h-16 xs:left-1/2 xs:w-20 xs:h-20 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/10 dark:border-blue-500/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>

        <div className="relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <nav className="flex items-center justify-center space-x-2 text-sm">
                  <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium">
                    Home
                  </Link>
                  <span className="text-slate-300 dark:text-slate-600">›</span>
                  <span className="text-slate-900 dark:text-white font-medium">Accommodation</span>
                </nav>
              </div>
              <div className="mb-12">
                <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                  Where to Stay for
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">World Cup 2026</span>
                </h1>
                <div className="text-center mb-6">
                  <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                    Hotels, Hostels & Apartments
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Find the perfect place to stay in all 16 host cities. Whether you want a budget bed close to the action or a comfortable hotel for the family, we'll help you find it and save money doing it.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-emerald-200/50 dark:hover:border-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-700">10K+</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Properties</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">50%</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Savings</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-sky-600 dark:group-hover:from-blue-400 dark:group-hover:to-sky-400 transition-all duration-700">16</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Cities</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-orange-200/50 dark:hover:border-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">24/7</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodation Guides Grid - 2 Column Layout */}
        <div className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Top Accommodation Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Where to stay for every budget and group size during World Cup 2026.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodationGuides.map((guide) => (
              <Card key={guide.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={`${guide.title} accommodation guide`}
                    width={1600}
                    height={900}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <span>{guide.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {guide.priceRange}
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
                    href={`/accommodation/${guide.title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-all w-full text-sm font-semibold whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Read Full Guide
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </main>

      {/* Accommodation Guide Modal - Cities Page Style */}
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
                  <span className="text-emerald-500 text-sm font-medium">Accommodation Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedGuide.priceRange}</span>
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
                        Comprehensive accommodation guides with detailed information about booking strategies, amenities, locations, and insider tips will be available soon.
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
