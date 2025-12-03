
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

interface City {
  id: string;
  name: string;
  country: string;
  stadium: string;
  capacity: string;
  description: string;
  image: string;
  priceFrom: string;
  hotels: string;
}

interface CityCardProps {
  city: City;
}

// Function to convert city name to route slug
const getCityRoute = (cityName: string) => {
  switch (cityName) {
    // Ensure NYC/NJ card links to the original New York City guide
    case 'New York / New Jersey':
  return '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide';
    case 'New York City':
  return '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide';
    case 'Los Angeles':
      return '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide';
    case 'Miami':
      return '/world-cup-2026-host-cities/miami-world-cup-2026-guide';
    case 'Kansas City':
      return '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide';
    case 'Houston':
      return '/world-cup-2026-host-cities/houston-world-cup-2026-guide';
    case 'Dallas':
      return '/world-cup-2026-host-cities/dallas-world-cup-2026-guide';
    case 'Seattle':
      return '/world-cup-2026-host-cities/seattle-world-cup-2026-guide';
    case 'San Francisco':
      return '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide';
    case 'Toronto':
      return '/world-cup-2026-host-cities/toronto-world-cup-2026-guide';
    case 'Vancouver':
      return '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide';
    case 'Monterrey':
      return '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide';
    default:
      return '/world-cup-2026-host-cities';
  }
};

export default function CityCard({ city }: CityCardProps) {

  return (
    <div className="group bg-white dark:bg-navy-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-navy-700 hover:scale-[1.02] backdrop-blur-sm">
      
      {/* Hero Image */}
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={city.image}
          alt={`${city.name} skyline – World Cup 2026`}
          className="absolute inset-0"
          imgClassName="object-cover object-top group-hover:scale-110 transition-transform duration-700"
          width={1600}
          height={900}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* City Name with Flag */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-2xl">{city.country}</span>
            <h3 className="font-space font-bold text-3xl text-white drop-shadow-lg">
              {city.name}
            </h3>
          </div>
          <div className="flex items-center text-white/95 text-sm font-medium">
            <i className="ri-map-pin-line mr-2 text-lg"></i>
            <span>{city.name === 'Los Angeles' ? 'SoFi Stadium, Inglewood, CA' : city.stadium} • {city.capacity}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-7">
        
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
          {city.description}
        </p>

        {/* Price Range Section */}
        <div className="mb-6">
          <h4 className="font-bold text-navy-900 dark:text-white text-sm mb-4 uppercase tracking-wide">Hotel Price Ranges</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-4 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/10 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-xl border border-[#01b47d]/20 dark:border-[#008f63]">
              <div className="text-lg font-bold text-[#008f63] dark:text-[#01b47d]">{city.priceFrom}</div>
              <div className="text-xs text-[#01b47d] dark:text-[#01b47d] font-semibold">Budget</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/10 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-xl border border-[#01b47d]/20 dark:border-[#008f63]">
              <div className="text-lg font-bold text-[#008f63] dark:text-[#01b47d]">
                ${Math.round(parseInt(city.priceFrom.replace('$', '')) * 1.8)}
              </div>
              <div className="text-xs text-[#01b47d] dark:text-[#01b47d] font-semibold">Mid-Tier</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="text-lg font-bold text-purple-700 dark:text-purple-400">
                ${Math.round(parseInt(city.priceFrom.replace('$', '')) * 3.2)}
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-500 font-semibold">Luxury</div>
            </div>
          </div>
        </div>

        {/* Hotels Available */}
        <div className="mb-7">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-navy-800 rounded-xl border border-slate-200 dark:border-navy-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#01b47d] rounded-full flex items-center justify-center">
                <i className="ri-hotel-line text-white text-lg"></i>
              </div>
              <div>
                <div className="font-bold text-navy-900 dark:text-white">{city.hotels}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Hotels Available</div>
              </div>
            </div>
            <div className="text-[#01b47d]">
              <i className="ri-arrow-right-line text-xl"></i>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={getCityRoute(city.name)}
          className="w-full inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 whitespace-nowrap cursor-pointer px-8 py-4 text-base bg-gradient-to-r from-[#01b47d] to-[#01b47d] hover:from-[#01b47d] hover:to-[#008f63] text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
        >
          <i className="ri-book-open-line mr-3 text-lg"></i>
          Explore {city.name}
          <i className="ri-arrow-right-line ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
        </Link>
      </div>
    </div>
  );
}
