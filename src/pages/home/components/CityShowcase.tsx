import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Button } from '../../../components/base/Button';

interface CitySection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: CitySection[];
}

interface HostCity {
  id: number;
  name: string;
  country: string;
  flag: string;
  stadium: string;
  capacity: string;
  description: string;
  image: string;
  fullContent: FullContent;
  matches: number;
}

const featuredCities: HostCity[] = [
  {
    id: 1,
    name: 'Miami',
    country: 'USA',
    flag: '🇺🇸',
    stadium: 'Hard Rock Stadium',
    capacity: '65,326',
    description: "Where innovation beats the heat. Hard Rock's canopy covers every fan while leaving the field exposed. Experience Latin passion.",
    image: '/images/cities/miami-world-cup-2026.webp',
    matches: 7,
    fullContent: {
      introduction: 'Miami World Cup 2026: Complete Travel Guide',
      sections: [{ title: 'Coming Soon', content: 'Detailed guide content will be available soon.' }]
    }
  },
  {
    id: 2,
    name: 'Mexico City',
    country: 'Mexico',
    flag: '🇲🇽',
    stadium: 'Estadio Azteca',
    capacity: '87,523',
    description: "History will be made here. The first stadium to host three World Cup openers. A true cathedral of football.",
    image: '/images/cities/mexico-city-world-cup-2026.webp',
    matches: 5,
    fullContent: {
      introduction: 'Mexico City World Cup 2026: Complete Travel Guide',
      sections: [{ title: 'Coming Soon', content: 'Detailed guide content will be available soon.' }]
    }
  },
  {
    id: 3,
    name: 'New York / NJ',
    country: 'USA',
    flag: '🇺🇸',
    stadium: 'MetLife Stadium',
    capacity: '82,500',
    description: "Host of the World Cup Final. The biggest stage for the biggest game on Earth, just minutes from Manhattan.",
    image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
    matches: 8,
    fullContent: { introduction: '', sections: [] }
  },
  {
    id: 4,
    name: 'Los Angeles',
    country: 'USA',
    flag: '🇺🇸',
    stadium: 'SoFi Stadium',
    capacity: '70,240',
    description: "The most technologically advanced stadium ever built. Host of the USA's opening match.",
    image: '/images/cities/los-angeles-world-cup-2026.webp',
    matches: 8,
    fullContent: { introduction: '', sections: [] }
  }
];

export const CityShowcase = () => {
  const navigate = useNavigate();

  const getCityRoute = (cityName: string): string => {
    const routeMap: { [key: string]: string } = {
      'New York / New Jersey': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
      'New York / NJ': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
      'New York City': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
      'Los Angeles': '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
    };
    return routeMap[cityName] || `/world-cup-2026-host-cities/${cityName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <section className="py-32 bg-white dark:bg-navy-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-oswald font-bold text-5xl md:text-7xl text-navy-900 dark:text-white mb-4 uppercase tracking-tighter">
              Host Cities
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-xl">
              16 Cities. 3 Nations. One Global Party.
            </p>
          </div>
          <Button
            onClick={() => navigate('/world-cup-2026-host-cities')}
            className="rounded-full px-8 py-4 font-semibold bg-navy-900 text-white dark:bg-white dark:text-navy-900 hover:scale-105 transition-transform shadow-lg"
          >
            View All 16 Cities <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
          {/* Main Feature - Miami (Large) */}
          <motion.div 
            className="lg:col-span-8 relative group rounded-[32px] overflow-hidden cursor-pointer"
            onClick={() => navigate(getCityRoute(featuredCities[0].name))}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5 }}
          >
            <OptimizedImage
              src={featuredCities[0].image}
              alt={featuredCities[0].name}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex justify-between items-end">
                <div>
                   <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#01b47d]/90 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    Featured Host
                  </span>
                  <h3 className="font-oswald font-bold text-6xl text-white mb-2 uppercase">{featuredCities[0].name}</h3>
                  <p className="text-white/80 text-lg max-w-lg font-light">{featuredCities[0].description}</p>
                </div>
                <div className="hidden md:block text-right">
                   <div className="text-4xl font-oswald font-bold text-[#01b47d]">{featuredCities[0].matches}</div>
                   <div className="text-white/60 text-sm uppercase tracking-wider">Matches</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Feature - Mexico City (Tall) */}
          <motion.div 
            className="lg:col-span-4 lg:row-span-2 relative group rounded-[32px] overflow-hidden cursor-pointer"
            onClick={() => navigate(getCityRoute(featuredCities[1].name))}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5 }}
          >
            <OptimizedImage
              src={featuredCities[1].image}
              alt={featuredCities[1].name}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/10">
                Opening Match Host
              </span>
              <h3 className="font-oswald font-bold text-5xl text-white mb-2 uppercase">{featuredCities[1].name}</h3>
              <p className="text-white/80 text-sm mb-6 line-clamp-3">{featuredCities[1].description}</p>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-1"><i className="ri-map-pin-line"></i> {featuredCities[1].stadium}</span>
              </div>
            </div>
          </motion.div>

          {/* Third Feature - NY/NJ (Wide) */}
          <motion.div 
            className="lg:col-span-4 relative group rounded-[32px] overflow-hidden cursor-pointer"
            onClick={() => navigate(getCityRoute(featuredCities[2].name))}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5 }}
          >
             <OptimizedImage
              src={featuredCities[2].image}
              alt={featuredCities[2].name}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center justify-between mb-2">
                 <h3 className="font-oswald font-bold text-3xl text-white uppercase">{featuredCities[2].name}</h3>
                 <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs shadow-glow-gold">
                   <i className="ri-trophy-fill"></i>
                 </span>
              </div>
              <p className="text-white/70 text-sm">Final Match Host</p>
            </div>
          </motion.div>

          {/* Fourth Feature - LA (Wide) */}
          <motion.div 
            className="lg:col-span-4 relative group rounded-[32px] overflow-hidden cursor-pointer"
            onClick={() => navigate(getCityRoute(featuredCities[3].name))}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5 }}
          >
             <OptimizedImage
              src={featuredCities[3].image}
              alt={featuredCities[3].name}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <h3 className="font-oswald font-bold text-3xl text-white uppercase mb-1">{featuredCities[3].name}</h3>
               <p className="text-white/70 text-sm">USA Opening Match</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
