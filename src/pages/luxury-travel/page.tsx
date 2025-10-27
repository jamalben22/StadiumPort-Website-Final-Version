
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

interface LuxurySection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: LuxurySection[];
}

interface LuxuryGuide {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  featured: boolean;
  price: string;
  fullContent: FullContent;
}

export default function LuxuryTravelPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<LuxuryGuide | null>(null);
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

  const categories = [
    'All Categories',
    'Five-Star Hotels',
    'VIP Hospitality',
    'Fine Dining',
    'Private Tours',
    'Premium Suites',
    'Exclusive Access'
  ];

  const luxuryGuides: LuxuryGuide[] = [
    {
      id: 1,
      title: 'Ultimate Luxury Guide to Qatar World Cup',
      excerpt: 'Experience the World Cup in unparalleled luxury with private suites, helicopter transfers, and exclusive dining experiences.',
      category: 'VIP Experiences',
      author: 'Alexandra Sterling',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20private%20suite%20at%20Qatar%20World%20Cup%20stadium%20with%20champagne%20service%2C%20premium%20seating%2C%20elegant%20interior%20design%2C%20golden%20accents%2C%20sophisticated%20atmosphere&width=600&height=400&seq=lux1&orientation=landscape',
      featured: true,
      price: 'From $15,000',
      fullContent: {
        introduction: 'Experience the FIFA World Cup like never before with our ultimate luxury package. This comprehensive guide covers everything from private helicopter transfers to exclusive stadium suites, ensuring your World Cup experience is nothing short of extraordinary.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about premium World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Miami 2026: Complete Luxury World Cup Experience',
      excerpt: 'From South Beach penthouses to Hard Rock Stadium VIP suites, experience Miami\'s World Cup matches in ultimate luxury with exclusive access and premium amenities.',
      category: 'VIP Experiences',
      author: 'Sofia Rodriguez',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20Miami%20beach%20penthouse%20with%20ocean%20view%2C%20elegant%20modern%20interior%2C%20premium%20hospitality%2C%20sophisticated%20coastal%20design%2C%20World%20Cup%20atmosphere&width=600&height=400&seq=miami1&orientation=landscape',
      featured: true,
      price: 'From $12,500',
      fullContent: {
        introduction: 'Experience the 2026 World Cup in Miami like never before. This comprehensive luxury guide covers everything from oceanfront penthouses and VIP stadium experiences to exclusive cultural tours and premium dining.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about Miami\'s luxury World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Private Jet Travel to All Host Cities',
      excerpt: 'Complete guide to private aviation options, exclusive terminals, and luxury ground transportation for World Cup travel.',
      category: 'Private Jets',
      author: 'Marcus Blackwood',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20private%20jet%20interior%20with%20leather%20seats%2C%20champagne%20service%2C%20elegant%20cabin%20design%2C%20premium%20aviation%20experience%2C%20sophisticated%20travel&width=600&height=400&seq=lux2&orientation=landscape',
      featured: true,
      price: 'From $50,000',
      fullContent: {
        introduction: 'Travel between World Cup host cities in ultimate comfort and style with our private jet charter service. Skip the crowds and enjoy personalized service from takeoff to landing.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about private jet World Cup 2026 travel.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Michelin-Starred Dining in Host Cities',
      excerpt: 'Discover the finest restaurants and exclusive dining experiences in all 16 World Cup host cities.',
      category: 'Michelin Dining',
      author: 'Isabella Rossi',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Michelin%20star%20restaurant%20interior%20with%20fine%20dining%20setup%2C%20premium%20table%20setting%2C%20sophisticated%20ambiance%2C%20luxury%20culinary%20experience&width=600&height=400&seq=lux3&orientation=landscape',
      featured: false,
      price: 'From $500',
      fullContent: {
        introduction: 'Indulge in world-class cuisine at Michelin-starred restaurants across all World Cup host cities. Our curated dining experiences feature exclusive chef tables and wine pairings.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about Michelin dining World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Luxury Hotels: Presidential Suites Guide',
      excerpt: 'Exclusive access to the most prestigious hotel suites in World Cup host cities, with private butlers and concierge services.',
      category: 'Luxury Hotels',
      author: 'Victoria Pemberton',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=presidential%20hotel%20suite%20with%20panoramic%20city%20views%2C%20marble%20bathroom%2C%20luxury%20furnishings%2C%20elegant%20bedroom%2C%20premium%20hospitality%20design&width=600&height=400&seq=lux4&orientation=landscape',
      featured: false,
      price: 'From $2,500/night',
      fullContent: {
        introduction: 'Stay in the most exclusive hotel suites across World Cup host cities. Each presidential suite offers unparalleled luxury with dedicated butler service and premium amenities.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about luxury hotel World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'VIP Stadium Experiences & Private Boxes',
      excerpt: 'Access exclusive stadium boxes, private entrances, and premium hospitality packages for the ultimate match experience.',
      category: 'VIP Experiences',
      author: 'James Wellington',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=VIP%20stadium%20box%20with%20premium%20seating%2C%20champagne%20service%2C%20panoramic%20field%20view%2C%20luxury%20hospitality%20suite%2C%20elegant%20sports%20viewing%20experience&width=600&height=400&seq=lux5&orientation=landscape',
      featured: false,
      price: 'From $8,000',
      fullContent: {
        introduction: 'Experience World Cup matches from exclusive VIP boxes with premium amenities, gourmet catering, and unobstructed views of the action.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about VIP stadium World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Exclusive Cultural Tours with Private Guides',
      excerpt: 'Bespoke cultural experiences with expert historians, private museum access, and exclusive behind-the-scenes tours.',
      category: 'Exclusive Tours',
      author: 'Sophia Hartwell',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=private%20museum%20tour%20with%20expert%20guide%2C%20exclusive%20art%20collection%20viewing%2C%20sophisticated%20cultural%20experience%2C%20premium%20educational%20travel&width=600&height=400&seq=lux6&orientation=landscape',
      featured: false,
      price: 'From $1,200',
      fullContent: {
        introduction: 'Discover the rich cultural heritage of World Cup host cities through exclusive private tours with expert guides and behind-the-scenes access to museums and historical sites.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about exclusive cultural World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Luxury Yacht Charters in Coastal Cities',
      excerpt: 'Charter premium yachts in coastal host cities with professional crew, gourmet dining, and exclusive water experiences.',
      category: 'VIP Experiences',
      author: 'Christopher Ashford',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=luxury%20yacht%20charter%20with%20elegant%20deck%20setup%2C%20premium%20marine%20experience%2C%20sophisticated%20boat%20interior%2C%20exclusive%20water%20travel%2C%20coastal%20luxury&width=600&height=400&seq=lux7&orientation=landscape',
      featured: false,
      price: 'From $25,000',
      fullContent: {
        introduction: 'Experience the ultimate in maritime luxury with private yacht charters in coastal World Cup host cities. Enjoy gourmet dining, water sports, and exclusive coastal access.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed luxury guide content will be available soon. Stay tuned for comprehensive information about yacht charter World Cup 2026 experiences.'
          }
        ]
      }
    }
  ];

  const filteredGuides = luxuryGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'All Categories' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredGuides = luxuryGuides.filter(guide => guide.featured);

  const openGuideModal = (guide: LuxuryGuide) => {
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20World%20Cup%20experience%20with%20VIP%20stadium%20suites%2C%20premium%20hospitality%2C%20elegant%20travel%20lifestyle%2C%20sophisticated%20football%20fans%2C%20exclusive%20access&width=1920&height=800&seq=luxury-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-vip-crown-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">Luxury World Cup 2026 Experiences</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Luxury World Cup
              <br />
              <span className="text-gold-400">Experiences</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Make your World Cup trip extraordinary. From five-star hotels steps from the stadium to private stadium tours and Michelin-starred dining—explore the premium side of the world's biggest tournament.
            </p>
          </div>

          {/* Luxury Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">VIP</div>
              <div className="text-slate-300 font-inter text-sm">Experiences</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">5-Star</div>
              <div className="text-slate-300 font-inter text-sm">Hotels</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Private</div>
              <div className="text-slate-300 font-inter text-sm">Access</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300 font-inter text-sm">Concierge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Guides Grid - 2 Column Layout */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Premium World Cup Experiences
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Curated luxury experiences that make your World Cup trip unforgettable.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {luxuryGuides.map((guide) => (
              <Card key={guide.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={`${guide.title} luxury experience`}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <span>{guide.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-400 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                      {guide.price}
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
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openGuideModal(guide)}
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

      {/* Luxury Guide Modal - Cities Page Style */}
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
                  <span className="text-emerald-500 text-sm font-medium">Luxury Experience</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedGuide.price}</span>
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
                        Comprehensive luxury guides with detailed information about premium accommodations, VIP experiences, exclusive access, and concierge services will be available soon.
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
