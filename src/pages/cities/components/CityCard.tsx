
import { Link } from 'react-router-dom';

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

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="group bg-white dark:bg-navy-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-navy-700 hover:scale-[1.02] backdrop-blur-sm">
      
      {/* Hero Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={city.image}
          alt={`${city.name} World Cup 2026`}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
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
            <span>{city.stadium} • {city.capacity}</span>
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
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">{city.priceFrom}</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-500 font-semibold">Budget</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="text-lg font-bold text-blue-700 dark:text-blue-400">
                ${Math.round(parseInt(city.priceFrom.replace('$', '')) * 1.8)}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-500 font-semibold">Mid-Tier</div>
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
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-hotel-line text-white text-lg"></i>
              </div>
              <div>
                <div className="font-bold text-navy-900 dark:text-white">{city.hotels}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Hotels Available</div>
              </div>
            </div>
            <div className="text-blue-500">
              <i className="ri-arrow-right-line text-xl"></i>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/cities/${city.id}`}
          className="w-full inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 whitespace-nowrap cursor-pointer px-8 py-4 text-base bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl group-hover:scale-105 transform"
        >
          <i className="ri-book-open-line mr-3 text-lg"></i>
          Explore {city.name}
          <i className="ri-arrow-right-line ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
        </Link>
      </div>
    </div>
  );
}
