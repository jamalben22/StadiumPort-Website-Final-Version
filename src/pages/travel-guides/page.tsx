
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { SchemaOrg, generateTravelGuideSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';

export default function TravelGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const articlesPerPage = 9;

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

  useEffect(() => {
    // Set page title and meta description
    document.title = 'World Cup 2026 Travel Guides - Expert Tips & City Guides | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert World Cup 2026 travel guides covering all 16 host cities. Get insider tips on hotels, transportation, attractions, and match day planning from travel experts.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/travel-guides`);
    }
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Travel Guides', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/travel-guides` }
  ]);

  const travelGuideSchema = generateTravelGuideSchema(
    'World Cup 2026 Travel Guides',
    'Expert travel guides and tips for World Cup 2026 covering all 16 host cities with insider advice on hotels, transportation, and attractions.',
    `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/travel-guides`
  );

  const openArticleModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const categories = [
    'all',
    'City Guides', 
    'Budget Guides',
    'Luxury Travel',
    'Transportation',
    'Packing Lists',
    'Safety Guide',
    'Stadium Features',
    'Food & Dining'
  ];

  const articles = [
    {
      id: 1,
      title: 'Complete New York World Cup 2026 Travel Guide',
      category: 'City Guides',
      author: 'Sarah Mitchell',
      readTime: '25 min read',
      publishDate: '2024-01-15',
      image: 'https://readdy.ai/api/search-image?query=New%20York%20City%20Manhattan%20skyline%20with%20MetLife%20Stadium%20visible%2C%20World%20Cup%202026%20atmosphere%2C%20urban%20travel%20destination%2C%20iconic%20NYC%20landmarks%2C%20modern%20metropolitan%20landscape&width=600&height=400&seq=nyc-guide&orientation=landscape',
      excerpt: 'Your ultimate guide to experiencing World Cup 2026 in New York. From MetLife Stadium to Manhattan attractions, discover the best of the Big Apple during the tournament.',
      featured: true,
      fullContent: {
        introduction: 'New York City offers an unparalleled World Cup 2026 experience with its iconic venues, diverse neighborhoods, and world-class amenities.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about New York City\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Los Angeles World Cup 2026: Complete Travel Guide',
      category: 'City Guides',
      author: 'Mike Rodriguez',
      readTime: '22 min read',
      publishDate: '2024-01-12',
      image: 'https://readdy.ai/api/search-image?query=Los%20Angeles%20downtown%20skyline%20with%20SoFi%20Stadium%2C%20Hollywood%20sign%20visible%2C%20California%20sunshine%2C%20World%20Cup%202026%20destination%2C%20entertainment%20capital%20atmosphere&width=600&height=400&seq=la-guide&orientation=landscape',
      excerpt: 'Experience World Cup 2026 in the entertainment capital. From SoFi Stadium to Hollywood attractions, your complete LA travel guide.',
      featured: true,
      fullContent: {
        introduction: 'Los Angeles brings together the best of entertainment, culture, and natural beauty for an unforgettable World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Los Angeles\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Miami World Cup 2026: Beach & Football Paradise',
      category: 'City Guides',
      author: 'Elena Vasquez',
      readTime: '20 min read',
      publishDate: '2024-01-10',
      image: 'https://readdy.ai/api/search-image?query=Miami%20Beach%20Art%20Deco%20district%20with%20Hard%20Rock%20Stadium%2C%20tropical%20paradise%2C%20World%20Cup%202026%20atmosphere%2C%20vibrant%20Florida%20coastal%20city%2C%20palm%20trees%20and%20ocean&width=600&height=400&seq=miami-guide&orientation=landscape',
      excerpt: 'Combine World Cup excitement with Miami\'s tropical paradise. Your guide to beaches, nightlife, and Hard Rock Stadium.',
      featured: true,
      fullContent: {
        introduction: 'Miami offers a unique blend of tropical beauty, international culture, and world-class hospitality for World Cup 2026 visitors.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Miami\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Dallas World Cup 2026: Big D Football Experience',
      category: 'City Guides',
      author: 'Robert Kim',
      readTime: '18 min read',
      publishDate: '2024-01-08',
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas skyline with AT&T Stadium, cowboy culture meets World Cup, modern metropolitan landscape, Big D urban atmosphere, dramatic lighting&width=600&height=400&seq=dallas-guide&orientation=landscape',
      excerpt: 'Experience World Cup 2026 in Big D. From AT&T Stadium to authentic Texas culture, your complete Dallas travel guide.',
      fullContent: {
        introduction: 'Dallas combines modern sophistication with authentic Texas charm, creating an ideal destination for World Cup 2026 experiences.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Dallas\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Budget Travel Guide: World Cup 2026 on a Shoestring',
      category: 'Budget Guides',
      author: 'Jennifer Park',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      image: 'https://readdy.ai/api/search-image?query=Budget%20travel%20planning%20with%20calculator%2C%20maps%2C%20and%20travel%20documents%2C%20affordable%20World%20Cup%202026%20planning%2C%20money-saving%20travel%20strategies%2C%20budget%20accommodation%20options&width=600&height=400&seq=budget-guide&orientation=landscape',
      excerpt: 'Experience World Cup 2026 without breaking the bank. Proven strategies for affordable accommodation, transport, and match tickets.',
      fullContent: {
        introduction: 'Budget travel doesn\'t mean compromising on the World Cup 2026 experience. Learn how to maximize your adventure while minimizing costs.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about budget World Cup 2026 travel.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Luxury World Cup 2026: Premium Experiences',
      category: 'Luxury Travel',
      author: 'David Thompson',
      readTime: '20 min read',
      publishDate: '2024-01-03',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20travel%20experience%20with%20premium%20hotel%20suite%2C%20fine%20dining%2C%20VIP%20stadium%20access%2C%20World%20Cup%202026%20luxury%20packages%2C%20high-end%20hospitality%20services&width=600&height=400&seq=luxury-guide&orientation=landscape',
      excerpt: 'Experience World Cup 2026 in ultimate luxury. Premium accommodations, VIP stadium access, and exclusive experiences.',
      fullContent: {
        introduction: 'Elevate your World Cup 2026 experience with luxury accommodations, VIP access, and exclusive premium services.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about luxury World Cup 2026 experiences.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Transportation Guide: Getting Around World Cup Cities',
      category: 'Transportation',
      author: 'Carlos Martinez',
      readTime: '16 min read',
      publishDate: '2024-01-01',
      image: 'https://readdy.ai/api/search-image?query=World%20Cup%202026%20transportation%20options%2C%20public%20transit%20systems%2C%20airport%20connections%2C%20stadium%20access%2C%20travel%20logistics%20planning&width=600&height=400&seq=transport-guide&orientation=landscape',
      excerpt: 'Master the transportation systems of all 16 host cities. From airports to stadiums, navigate like a local.',
      fullContent: {
        introduction: 'Efficient transportation planning is key to maximizing your World Cup 2026 experience across all host cities.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive transportation information.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Ultimate World Cup 2026 Packing Guide',
      category: 'Packing Lists',
      author: 'Lisa Chen',
      readTime: '12 min read',
      publishDate: '2023-12-28',
      image: 'https://readdy.ai/api/search-image?query=Travel%20packing%20essentials%20for%20World%20Cup%202026%2C%20organized%20luggage%2C%20travel%20gear%2C%20stadium%20accessories%2C%20weather-appropriate%20clothing&width=600&height=400&seq=packing-guide&orientation=landscape',
      excerpt: 'Pack smart for World Cup 2026. Essential items, weather considerations, and stadium-specific requirements.',
      fullContent: {
        introduction: 'Proper packing ensures you\'re prepared for every aspect of your World Cup 2026 adventure.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed packing guide content will be available soon. Stay tuned for comprehensive packing lists.'
          }
        ]
      }
    },
    {
      id: 9,
      title: 'World Cup 2026 Safety & Security Guide',
      category: 'Safety Guide',
      author: 'Michael Torres',
      readTime: '14 min read',
      publishDate: '2023-12-25',
      image: 'https://readdy.ai/api/search-image?query=Travel%20safety%20and%20security%20for%20World%20Cup%202026%2C%20emergency%20preparedness%2C%20safe%20travel%20practices%2C%20stadium%20security%20measures&width=600&height=400&seq=safety-guide&orientation=landscape',
      excerpt: 'Stay safe during World Cup 2026. Essential safety tips, emergency contacts, and security protocols.',
      fullContent: {
        introduction: 'Your safety is paramount during World Cup 2026. Learn essential safety protocols and emergency procedures.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed safety guide content will be available soon. Stay tuned for comprehensive safety information.'
          }
        ]
      }
    }
  ];

  const filteredArticles = articles.filter(article => {
    return selectedCategory === 'all' || article.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);
  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=World%20Cup%202026%20travel%20guides%20collection%20with%20maps%2C%20stadium%20images%2C%20travel%20planning%20materials%2C%20comprehensive%20tournament%20preparation%2C%20expert%20travel%20intelligence&width=1920&height=800&seq=guides-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-book-open-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Travel Guides</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Expert Advice for
              <br />
              <span className="text-gold-400">Every Host City</span>
            </h1>
            
            <p className="font-inter text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to plan your World Cup trip. Our detailed city guides cover where to stay, how to get around, what to eat, and the local secrets that make each destination special.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">30+</div>
              <div className="text-slate-300 font-inter text-sm">In-Depth Guides</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Host Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300 font-inter text-sm">Insider Tips</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Always</div>
              <div className="text-slate-300 font-inter text-sm">Up-to-Date</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-4">
              Start Here: Essential City Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-lg max-w-2xl mx-auto">
              New to World Cup travel? These comprehensive guides cover everything from airport to stadium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} hover className="overflow-hidden group bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700" padding="none">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-space font-bold text-xl text-white mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <i className="ri-time-line mr-2"></i>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{article.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => openArticleModal(article)}
                      type="button"
                      className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                    >
                      <i className="ri-eye-line mr-2"></i>
                      Read Full Guide
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Filter Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-gold-400/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-full px-6 py-3 mb-4">
              <i className="ri-filter-3-line text-emerald-600"></i>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Smart Filtering</span>
            </div>
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
              Find What You Need
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter">
              Browse by city, topic, or travel style to get the information that matters to your trip.
            </p>
          </div>

          {/* Premium Filter Controls */}
          <div className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-emerald-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
              
              {/* Category Filter */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <i className="ri-bookmark-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">Categories</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Choose your topic of interest</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 scale-105'
                          : 'bg-white/60 dark:bg-navy-700/60 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-slate-200/50 dark:border-navy-600/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-102'
                      }`}
                    >
                      {category === 'all' ? 'All Guides' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Counter */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <i className="ri-search-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">Results</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Matching your selection</p>
                  </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-gold-50 dark:from-emerald-900/20 dark:to-gold-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{filteredArticles.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    of {articles.length} guides match your filter
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Updated in real-time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid - 2 Column Layout like Cities Page */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              World Cup 2026 Travel Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Explore comprehensive guides for every aspect of your World Cup 2026 journey.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paginatedArticles.map((article, index) => (
              <Card key={index} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Author</div>
                        <div className="font-semibold text-navy-900 dark:text-white">{article.author}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Read Time</div>
                        <div className="font-semibold text-emerald-600">{article.readTime}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openArticleModal(article)}
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

      {/* Premium Pagination */}
      <section className="py-16 bg-slate-50 dark:bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-center space-x-4">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer'
                  }`}
                >
                  <i className="ri-arrow-left-line text-lg"></i>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg scale-110'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 hover:scale-105'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer'
                  }`}
                >
                  <i className="ri-arrow-right-line text-lg"></i>
                </button>
              </div>

              {/* Page Counter */}
              <div className="text-center mt-4 text-sm text-slate-600 dark:text-slate-400">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal - Cities Page Style */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium">Travel Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedArticle.author}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedArticle.title}
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedArticle.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedArticle.fullContent?.sections.map((section, index) => (
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
                        Comprehensive travel guides with detailed information about accommodations, transportation, attractions, and local tips will be available soon.
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