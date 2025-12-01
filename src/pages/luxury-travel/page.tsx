
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { ComingSoon } from '../../components/common/ComingSoon';

// ==========================================
// 🚨 INCOMPLETE PAGE PRESERVATION
// The original content is preserved below as 'LuxuryTravelPageOriginal'
// To restore:
// 1. Delete the 'LuxuryTravelPage' component
// 2. Rename 'LuxuryTravelPageOriginal' back to 'LuxuryTravelPage'
// 3. Export it as default
// ==========================================

export default function LuxuryTravelPage() {
  return <ComingSoon title="Luxury Travel Guide Coming Soon" />;
}

// ⬇️ ORIGINAL CONTENT PRESERVED BELOW ⬇️

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
  slugOverride?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LuxuryTravelPageOriginal() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<LuxuryGuide | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridReady, setGridReady] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        setGridReady(true)
        io.disconnect()
      }
    }, { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

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
      slugOverride: 'ultimate-luxury-guide-to-qatar-world-cup',
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
      slugOverride: 'miami-2026-complete-luxury-world-cup-experience',
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
      slugOverride: 'private-jet-travel-to-all-host-cities',
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
      slugOverride: 'michelin-starred-dining-in-host-cities',
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
      slugOverride: 'luxury-hotels-presidential-suites-guide',
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
      slugOverride: 'vip-stadium-experiences-and-private-boxes',
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
      slugOverride: 'exclusive-cultural-tours-with-private-guides',
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
      slugOverride: 'luxury-yacht-charters-in-coastal-cities',
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
      <div className="h-16 lg:h-20"></div>

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
                  <span className="text-slate-900 dark:text-white font-medium">Luxury Travel</span>
                </nav>
              </div>
              <div className="mb-12">
                <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                  Luxury World Cup
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Experiences</span>
                </h1>
                <div className="text-center mb-6">
                  <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                    Premium Hospitality & VIP Access
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Make your World Cup trip extraordinary. From five-star hotels steps from the stadium to private stadium tours and Michelin-starred dining—explore the premium side of the world's biggest tournament.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-emerald-200/50 dark:hover:border-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-700">VIP</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Experiences</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">5★</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Hotels</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-sky-600 dark:group-hover:from-blue-400 dark:group-hover:to-sky-400 transition-all duration-700">24/7</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Concierge</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-orange-200/50 dark:hover:border-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">Private</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Luxury Guides Grid - Merged with hero section for continuous background */}
      <div className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Premium World Cup Experiences
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Curated luxury experiences that make your World Cup trip unforgettable.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gridReady && luxuryGuides.map((guide) => (
              <Card key={guide.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={`${guide.title} luxury experience`}
                    width={1600}
                    height={900}
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
                  
                  <a
                    href={`/luxury-travel/${guide.slugOverride ?? guide.title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')}`}
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
      </div>
      </main>

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
