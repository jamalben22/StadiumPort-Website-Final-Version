
import { useState } from 'react';
import { Card } from '../base/Card';
import { Button } from '../base/Button';

interface AccommodationOption {
  name: string;
  type: 'hotel' | 'hostel' | 'apartment';
  image: string;
  price: number;
  rating: number;
  reviews: number;
  distance: string;
  amenities: string[];
  affiliateUrl: string;
}

interface AccomFinderWidgetProps {
  city?: string;
  className?: string;
}

export function AccomFinderWidget({ city = 'Los Angeles', className = '' }: AccomFinderWidgetProps) {
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'budget' | 'mid' | 'luxury'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'hotel' | 'hostel' | 'apartment'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const accommodations: AccommodationOption[] = [
    {
      name: 'Downtown Luxury Hotel',
      type: 'hotel',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20exterior%20at%20night%20with%20modern%20glass%20facade%2C%20premium%20hospitality%20architecture%2C%20elegant%20lighting%2C%20upscale%20urban%20hotel%20building%2C%20sophisticated%20design%20with%20warm%20golden%20lighting&width=300&height=200&seq=hotel1&orientation=landscape',
      price: 299,
      rating: 4.8,
      reviews: 1247,
      distance: '0.3 miles from stadium',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant'],
      affiliateUrl: 'https://hotel-affiliate-link.com',
    },
    {
      name: 'Budget Traveler Hostel',
      type: 'hostel',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hostel%20common%20area%20with%20colorful%20furniture%2C%20young%20travelers%20socializing%2C%20bright%20contemporary%20interior%20design%2C%20budget%20accommodation%20with%20vibrant%20atmosphere%2C%20clean%20minimalist%20space&width=300&height=200&seq=hostel1&orientation=landscape',
      price: 45,
      rating: 4.2,
      reviews: 892,
      distance: '1.2 miles from stadium',
      amenities: ['Free WiFi', 'Kitchen', 'Lounge', 'Laundry'],
      affiliateUrl: 'https://hotel-affiliate-link.com',
    },
    {
      name: 'Stadium View Apartment',
      type: 'apartment',
      image: 'https://readdy.ai/api/search-image?query=Modern%20apartment%20living%20room%20with%20large%20windows%20showing%20city%20skyline%20view%2C%20contemporary%20furniture%2C%20clean%20minimalist%20interior%20design%2C%20urban%20rental%20accommodation%2C%20bright%20natural%20lighting&width=300&height=200&seq=apt1&orientation=landscape',
      price: 189,
      rating: 4.6,
      reviews: 324,
      distance: '0.8 miles from stadium',
      amenities: ['Full Kitchen', 'WiFi', 'Parking', 'Balcony'],
      affiliateUrl: 'https://hotel-affiliate-link.com',
    },
  ];

  const filteredAccommodations = accommodations.filter(acc => {
    if (typeFilter !== 'all' && acc.type !== typeFilter) return false;
    if (budgetFilter === 'budget' && acc.price > 100) return false;
    if (budgetFilter === 'mid' && (acc.price < 100 || acc.price > 250)) return false;
    if (budgetFilter === 'luxury' && acc.price < 250) return false;
    return true;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hotel': return 'ri-hotel-line';
      case 'hostel': return 'ri-community-line';
      case 'apartment': return 'ri-home-4-line';
      default: return 'ri-building-line';
    }
  };

  const handleViewDetails = (accommodation: AccommodationOption) => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(accommodation.affiliateUrl + '?city=' + encodeURIComponent(city) + '&type=' + accommodation.type, '_blank');
      setIsLoading(false);
    }, 300);
  };

  const handleViewAllAccommodations = () => {
    setTimeout(() => {
      window.open('https://hotel-affiliate-link.com?city=' + encodeURIComponent(city) + '&budget=' + budgetFilter + '&type=' + typeFilter, '_blank');
    }, 300);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className={`${className} hover:scale-105 transition-all duration-200`} padding="lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-1">
              Accommodation Finder
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-sm">
              Hotels, hostels & apartments in {city}
            </p>
          </div>
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
            <i className="ri-hotel-line text-emerald-600 text-xl"></i>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg mb-6">
          <div className="space-y-4">
            {/* Budget Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Budget Range
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'budget', label: 'Under $100' },
                  { value: 'mid', label: '$100-250' },
                  { value: 'luxury', label: '$250+' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setBudgetFilter(option.value as any)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border hover:scale-105 ${
                      budgetFilter === option.value
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
                        : 'bg-white dark:bg-navy-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-navy-600 hover:border-emerald-300 dark:hover:border-emerald-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Accommodation Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { value: 'all', label: 'All Types', icon: 'ri-building-line' },
                  { value: 'hotel', label: 'Hotels', icon: 'ri-hotel-line' },
                  { value: 'hostel', label: 'Hostels', icon: 'ri-community-line' },
                  { value: 'apartment', label: 'Apartments', icon: 'ri-home-4-line' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setTypeFilter(option.value as any)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border flex items-center justify-center space-x-2 hover:scale-105 ${
                      typeFilter === option.value
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg'
                        : 'bg-white dark:bg-navy-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-navy-600 hover:border-emerald-300 dark:hover:border-emerald-600'
                    }`}
                  >
                    <i className={`${option.icon} text-lg`}></i>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredAccommodations.map((acc, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-slate-200 dark:border-navy-700 rounded-lg hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-105 transition-all duration-200 space-y-4 sm:space-y-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 flex-1">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full sm:w-16 h-32 sm:h-12 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className={`${getTypeIcon(acc.type)} text-emerald-500 text-sm`}></i>
                    <div className="font-medium text-slate-900 dark:text-white font-inter text-base sm:text-sm">
                      {acc.name}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-gold-400 text-xs"></i>
                      <span>{acc.rating}</span>
                      <span className="text-xs">({acc.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="ri-map-pin-line text-emerald-500 text-xs"></i>
                      <span>{acc.distance}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {acc.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                      >
                        {amenity}
                      </span>
                    ))}
                    {acc.amenities.length > 3 && (
                      <span className="px-2 py-1 bg-slate-200 dark:bg-navy-700 text-slate-500 dark:text-slate-400 text-xs rounded-md">
                        +{acc.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center sm:text-right space-x-4 sm:space-x-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-navy-700">
                <div className="flex flex-col sm:mb-3">
                  <div className="font-bold text-xl text-navy-900 dark:text-white font-space">
                    ${acc.price}
                  </div>
                  <span className="text-sm font-normal text-slate-500">per night</span>
                </div>
                {/* ========== AFFILIATE SECTION: ACCOMMODATION DETAILS ========== */}
                <a
                  href={acc.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored"
                  data-affiliate-type="hotel"
                  className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-2 text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow-lg hover:scale-105 flex-shrink-0"
                  onClick={() => handleViewDetails(acc)}
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Loading...
                    </>
                  ) : (
                    'View Details'
                  )}
                </a>
                {/* ========== END AFFILIATE SECTION ========== */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          {/* ========== AFFILIATE SECTION: VIEW ALL ACCOMMODATIONS ========== */}
          <a 
            href="https://hotel-affiliate-link.com"
            target="_blank"
            rel="nofollow sponsored"
            data-affiliate-type="hotel"
            className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer w-full px-4 py-3 text-sm sm:text-base border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105"
            onClick={handleViewAllAccommodations}
          >
            <i className="ri-search-line mr-2 text-sm sm:text-base"></i>
            <span className="truncate">View All Accommodations in {city}</span>
          </a>
          {/* ========== END AFFILIATE SECTION ========== */}
        </div>

      </Card>
    </>
  );
}
