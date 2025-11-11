
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { SchemaOrg, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';

export default function DealsPage() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    // Set page title and meta description
    document.title = 'World Cup 2026 Travel Deals - Hotels, Flights & Packages | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find the best World Cup 2026 travel deals across all 16 host cities. Save up to 40% on hotels, flights, and vacation packages. Exclusive offers updated daily.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/deals`);
    }
  }, []);

  const deals = [
    {
      title: 'New York Luxury Package',
      city: 'New York',
      type: 'hotel',
      originalPrice: 899,
      dealPrice: 649,
      savings: 250,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20New%20York%20hotel%20suite%20with%20Manhattan%20skyline%20view%2C%20premium%20hospitality%20interior%2C%20elegant%20bedroom%20with%20city%20lights%2C%20five-star%20accommodation%2C%20sophisticated%20urban%20luxury&width=600&height=400&seq=ny-deal&orientation=landscape',
      description: 'Premium Manhattan hotel with MetLife Stadium shuttle service included. 3 nights minimum stay.',
      features: ['Stadium Shuttle', 'Breakfast Included', 'City View', 'Concierge Service'],
      validUntil: '2024-02-15',
      bookingUrl: '#',
      rating: 4.8,
      reviews: 1247,
      featured: true
    },
    {
      title: 'Los Angeles Beach & Stadium Combo',
      city: 'Los Angeles',
      type: 'package',
      originalPrice: 1299,
      dealPrice: 899,
      savings: 400,
      image: 'https://readdy.ai/api/search-image?query=Los%20Angeles%20beachfront%20hotel%20with%20palm%20trees%2C%20California%20coastal%20luxury%2C%20Santa%20Monica%20pier%20visible%2C%20Hollywood%20glamour%20atmosphere%2C%20Pacific%20Ocean%20view&width=600&height=400&seq=la-deal&orientation=landscape',
      description: 'Stay at Santa Monica beach hotel with SoFi Stadium transportation and Hollywood tour included.',
      features: ['Beach Access', 'Stadium Transport', 'Hollywood Tour', 'Parking Included'],
      validUntil: '2024-02-20',
      bookingUrl: '#',
      rating: 4.6,
      reviews: 892,
      featured: true
    },
    {
      title: 'Miami South Beach Special',
      city: 'Miami',
      type: 'hotel',
      originalPrice: 759,
      dealPrice: 499,
      savings: 260,
      image: 'https://readdy.ai/api/search-image?query=Miami%20South%20Beach%20Art%20Deco%20hotel%20with%20ocean%20view%2C%20tropical%20paradise%20luxury%2C%20vibrant%20Florida%20coastal%20architecture%2C%20turquoise%20waters%20and%20white%20sand%20beaches&width=600&height=400&seq=miami-deal&orientation=landscape',
      description: 'Art Deco hotel on South Beach with Hard Rock Stadium shuttle and complimentary breakfast.',
      features: ['Ocean View', 'Stadium Shuttle', 'Breakfast', 'Pool Access'],
      validUntil: '2024-02-18',
      bookingUrl: '#',
      rating: 4.7,
      reviews: 634,
      featured: true
    },
    {
      title: 'Dallas BBQ & Stadium Experience',
      city: 'Dallas',
      type: 'package',
      originalPrice: 599,
      dealPrice: 399,
      savings: 200,
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas hotel with AT&T Stadium view, modern Texas hospitality, Big D urban landscape, cowboy culture atmosphere, metropolitan luxury&width=600&height=400&seq=dallas-deal&orientation=landscape',
      description: 'Arlington hotel package with AT&T Stadium tour and authentic Texas BBQ dinner included.',
      features: ['Stadium Tour', 'BBQ Dinner', 'Free Parking', 'Local Guide'],
      validUntil: '2024-02-12',
      bookingUrl: '#',
      rating: 4.4,
      reviews: 423,
      featured: false
    },
    {
      title: 'Seattle Coffee & Culture Deal',
      city: 'Seattle',
      type: 'hotel',
      originalPrice: 699,
      dealPrice: 549,
      savings: 150,
      image: 'https://readdy.ai/api/search-image?query=Seattle%20boutique%20hotel%20with%20Space%20Needle%20view%2C%20Pacific%20Northwest%20hospitality%2C%20coffee%20culture%20atmosphere%2C%20Emerald%20City%20urban%20landscape%2C%20modern%20design&width=600&height=400&seq=seattle-deal&orientation=landscape',
      description: 'Downtown Seattle hotel with Lumen Field access and Pike Place Market food tour.',
      features: ['Stadium Access', 'Food Tour', 'Coffee Credits', 'City View'],
      validUntil: '2024-02-25',
      bookingUrl: '#',
      rating: 4.5,
      reviews: 289,
      featured: false
    },
    {
      title: 'Mexico City Cultural Package',
      city: 'Mexico City',
      type: 'package',
      originalPrice: 299,
      dealPrice: 199,
      savings: 100,
      image: 'https://readdy.ai/api/search-image?query=Mexico%20City%20historic%20hotel%20with%20colonial%20architecture%2C%20vibrant%20Mexican%20culture%2C%20traditional%20hospitality%2C%20cultural%20heritage%20atmosphere%2C%20ancient%20and%20modern%20blend&width=600&height=400&seq=mexico-deal&orientation=landscape',
      description: 'Historic center hotel with Estadio Azteca transport and cultural city tour included.',
      features: ['Cultural Tour', 'Stadium Transport', 'Traditional Meals', 'Historic Location'],
      validUntil: '2024-02-28',
      bookingUrl: '#',
      rating: 4.3,
      reviews: 156,
      featured: false
    },
    {
      title: 'Boston Historic Experience',
      city: 'Boston',
      type: 'hotel',
      originalPrice: 749,
      dealPrice: 599,
      savings: 150,
      image: 'https://readdy.ai/api/search-image?query=Historic%20Boston%20hotel%20with%20colonial%20architecture%2C%20New%20England%20charm%2C%20academic%20excellence%20atmosphere%2C%20Freedom%20Trail%20nearby%2C%20traditional%20American%20hospitality&width=600&height=400&seq=boston-deal&orientation=landscape',
      description: 'Historic Back Bay hotel with Gillette Stadium shuttle and Freedom Trail walking tour.',
      features: ['Historic Location', 'Stadium Shuttle', 'Walking Tour', 'Continental Breakfast'],
      validUntil: '2024-02-22',
      bookingUrl: '#',
      rating: 4.2,
      reviews: 267,
      featured: false
    },
    {
      title: 'San Francisco Tech & Stadium',
      city: 'San Francisco',
      type: 'package',
      originalPrice: 1199,
      dealPrice: 899,
      savings: 300,
      image: 'https://readdy.ai/api/search-image?query=San%20Francisco%20modern%20hotel%20with%20Golden%20Gate%20Bridge%20view%2C%20tech%20capital%20atmosphere%2C%20Silicon%20Valley%20luxury%2C%20innovative%20urban%20landscape%2C%20Bay%20Area%20sophistication&width=600&height=400&seq=sf-deal&orientation=landscape',
      description: "Union Square hotel with Levi's Stadium transport and Silicon Valley tech tour.",
      features: ['Tech Tour', 'Stadium Transport', 'Golden Gate View', 'Concierge'],
      validUntil: '2024-02-20',
      bookingUrl: '#',
      rating: 4.6,
      reviews: 445,
      featured: false
    },
    {
      title: 'Atlanta Southern Hospitality',
      city: 'Atlanta',
      type: 'hotel',
      originalPrice: 549,
      dealPrice: 399,
      savings: 150,
      image: 'https://readdy.ai/api/search-image?query=Atlanta%20Georgia%20modern%20hotel%20with%20downtown%20skyline%20view%2C%20southern%20hospitality%20atmosphere%2C%20New%20South%20urban%20landscape%2C%20contemporary%20luxury%20design&width=600&height=400&seq=atlanta-deal&orientation=landscape',
      description: 'Midtown Atlanta hotel with Mercedes-Benz Stadium access and Southern cuisine experience.',
      features: ['Stadium Access', 'Southern Cuisine', 'Downtown Location', 'Fitness Center'],
      validUntil: '2024-02-16',
      bookingUrl: '#',
      rating: 4.1,
      reviews: 378,
      featured: false
    },
    {
      title: 'Philadelphia History & Sports',
      city: 'Philadelphia',
      type: 'package',
      originalPrice: 649,
      dealPrice: 499,
      savings: 150,
      image: 'https://readdy.ai/api/search-image?query=Philadelphia%20historic%20hotel%20near%20Independence%20Hall%2C%20City%20of%20Brotherly%20Love%20atmosphere%2C%20colonial%20American%20architecture%2C%20historic%20charm%20with%20modern%20amenities&width=600&height=400&seq=philly-deal&orientation=landscape',
      description: 'Center City hotel with Lincoln Financial Field shuttle and Independence Hall tour.',
      features: ['Historic Tour', 'Stadium Shuttle', 'Cheesesteak Tour', 'Central Location'],
      validUntil: '2024-02-14',
      bookingUrl: '#',
      rating: 4.0,
      reviews: 312,
      featured: false
    },
    {
      title: 'Kansas City BBQ & Jazz',
      city: 'Kansas City',
      type: 'package',
      originalPrice: 459,
      dealPrice: 329,
      savings: 130,
      image: 'https://readdy.ai/api/search-image?query=Kansas%20City%20downtown%20hotel%20with%20jazz%20club%20atmosphere%2C%20Midwest%20hospitality%2C%20heartland%20metropolitan%20landscape%2C%20BBQ%20culture%20and%20fountains%20visible&width=600&height=400&seq=kc-deal&orientation=landscape',
      description: 'Downtown KC hotel with Arrowhead Stadium transport and BBQ & Jazz tour included.',
      features: ['BBQ Tour', 'Jazz Experience', 'Stadium Transport', 'Local Culture'],
      validUntil: '2024-02-26',
      bookingUrl: '#',
      rating: 4.0,
      reviews: 198,
      featured: false
    },
    {
      title: 'Denver Mountain Adventure',
      city: 'Denver',
      type: 'package',
      originalPrice: 679,
      dealPrice: 529,
      savings: 150,
      image: 'https://readdy.ai/api/search-image?query=Denver%20Colorado%20hotel%20with%20Rocky%20Mountains%20view%2C%20Mile%20High%20City%20atmosphere%2C%20outdoor%20adventure%20luxury%2C%20mountain%20backdrop%20with%20urban%20sophistication&width=600&height=400&seq=denver-deal&orientation=landscape',
      description: 'LoDo hotel with Empower Field access and Rocky Mountain day trip included.',
      features: ['Mountain Trip', 'Stadium Access', 'Craft Beer Tour', 'Outdoor Activities'],
      validUntil: '2024-02-24',
      bookingUrl: '#',
      rating: 4.2,
      reviews: 234,
      featured: false
    }
  ];

  const cities = ['all', 'New York', 'Los Angeles', 'Miami', 'Dallas', 'Seattle', 'Mexico City', 'Boston', 'San Francisco', 'Atlanta', 'Philadelphia', 'Kansas City', 'Denver'];
  const types = ['all', 'hotel', 'package', 'flight'];

  const filteredDeals = deals.filter(deal => {
    const cityMatch = selectedCity === 'all' || deal.city === selectedCity;
    const typeMatch = selectedType === 'all' || deal.type === selectedType;
    return cityMatch && typeMatch;
  });

  const featuredDeals = deals.filter(deal => deal.featured);

  const calculateSavingsPercentage = (original: number, deal: number) => {
    return Math.round(((original - deal) / original) * 100);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Travel Deals', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/deals` }
  ]);

  const dealsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "World Cup 2026 Travel Deals",
    "description": "Exclusive travel deals and packages for World Cup 2026 across all host cities",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/deals`,
    "numberOfItems": deals.length,
    "itemListElement": deals.slice(0, 5).map((deal, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": deal.title,
      "description": deal.description,
      "offers": {
        "@type": "Offer",
        "price": deal.dealPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validThrough": deal.validUntil
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": deal.rating,
        "reviewCount": deal.reviews
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={dealsSchema} />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20travel%20deals%20and%20discounts%20display%2C%20premium%20hotel%20offers%2C%20savings%20and%20promotional%20atmosphere%2C%20exclusive%20travel%20packages%2C%20deal%20hunting%20excitement&width=1920&height=800&seq=deals-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-price-tag-3-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Travel Deals</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Save on Flights, Hotels
              <br />
              <span className="text-gold-400">& Experiences</span>
            </h1>
            
            <p className="font-inter text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
              We've partnered with top travel brands to bring you exclusive deals across all 16 host cities. Whether you're booking one match or following your team across the continent, find the best prices here.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Up to 40%</div>
              <div className="text-slate-300 font-inter text-sm">Savings</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">150+</div>
              <div className="text-slate-300 font-inter text-sm">Active Deals</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Daily</div>
              <div className="text-slate-300 font-inter text-sm">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-4">
              Today's Best Deals
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-lg max-w-2xl mx-auto">
              Hand-picked offers with the biggest savings. These deals won't last—grab them while you can.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDeals.map((deal, index) => (
              <Card key={index} hover className="overflow-hidden group bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700" padding="none">
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${deal.savings}
                    </div>
                    <div className="bg-gold-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{calculateSavingsPercentage(deal.originalPrice, deal.dealPrice)}%
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-space font-bold text-xl text-white mb-2">
                      {deal.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <i className="ri-map-pin-line mr-2"></i>
                      <span>{deal.city}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                        <i className="ri-star-fill text-gold-400"></i>
                        <span>{deal.rating}</span>
                        <span>({deal.reviews})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 dark:text-slate-400 line-through">${deal.originalPrice}</div>
                      <div className="text-2xl font-bold text-emerald-600">${deal.dealPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {deal.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {deal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                        <i className="ri-check-line text-emerald-500"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>Valid until: {new Date(deal.validUntil).toLocaleDateString()}</span>
                    <span className="text-red-500 font-semibold">Limited Time</span>
                  </div>
                  
                  <a 
                    href="https://deal-affiliate-link.com"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    data-affiliate-type="deal"
                    className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer w-full px-4 py-2.5 text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow-lg hover:scale-105"
                  >
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Book Now - Save ${deal.savings}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
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
              Find Your Deal
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter">
              Filter by city, travel type, or budget to discover offers that match your trip.
            </p>
          </div>

          {/* Premium Filter Controls */}
          <div className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-emerald-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
              
              {/* City Filter */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">City</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Select your destination</p>
                  </div>
                </div>
                
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-xl text-sm font-medium bg-white/60 dark:bg-navy-700/60 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-navy-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer appearance-none backdrop-blur-sm transition-all duration-300"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city === 'all' ? 'All Cities' : city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-slate-400"></i>
                  </div>
                </div>
              </div>

              {/* Deal Type Filter */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                    <i className="ri-price-tag-3-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">Deal Type</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Choose your preference</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 shadow-lg shadow-gold-400/25 scale-105'
                          : 'bg-white/60 dark:bg-navy-700/60 text-slate-600 dark:text-slate-400 hover:bg-gold-50 dark:hover:bg-gold-900/20 border border-slate-200/50 dark:border-navy-600/50 hover:border-gold-300 dark:hover:border-gold-600 hover:scale-102'
                      }`}
                    >
                      {type === 'all' ? 'All Types' : 
                       type === 'hotel' ? 'Hotels' :
                       type === 'package' ? 'Packages' : 'Flights'}
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
                    <p className="text-xs text-slate-500 dark:text-slate-400">Matching your filters</p>
                  </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-gold-50 dark:from-emerald-900/20 dark:to-gold-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{filteredDeals.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    of {deals.length} deals match your filters
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

      {/* All Deals */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDeals.map((deal, index) => (
              <Card key={index} hover className="overflow-hidden bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700" padding="none">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-48 md:h-full object-cover object-top"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        -{calculateSavingsPercentage(deal.originalPrice, deal.dealPrice)}%
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-1">
                          {deal.title}
                        </h3>
                        <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                          <i className="ri-map-pin-line mr-1"></i>
                          <span>{deal.city}</span>
                          <span className="mx-2">•</span>
                          <span className="capitalize">{deal.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                          <i className="ri-star-fill text-gold-400"></i>
                          <span>{deal.rating}</span>
                          <span>({deal.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400 line-through">${deal.originalPrice}</div>
                        <div className="text-2xl font-bold text-emerald-600">${deal.dealPrice}</div>
                        <div className="text-sm text-red-500 font-semibold">Save ${deal.savings}</div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                      {deal.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {deal.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
                          <i className="ri-check-line text-emerald-500"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Valid until {new Date(deal.validUntil).toLocaleDateString()}
                      </div>
                      <a 
                        href="https://deal-affiliate-link.com"
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        data-affiliate-type="deal"
                        className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-2 text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow-lg hover:scale-105"
                      >
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Book Deal
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
