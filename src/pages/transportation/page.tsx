
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { ComingSoon } from '../../components/common/ComingSoon';

// ==========================================
// 🚨 INCOMPLETE PAGE PRESERVATION
// The original content is preserved below as 'TransportationPageOriginal'
// To restore:
// 1. Delete the 'TransportationPage' component
// 2. Rename 'TransportationPageOriginal' back to 'TransportationPage'
// 3. Export it as default
// ==========================================

export default function TransportationPage() {
  return <ComingSoon title="Transportation Guide Coming Soon" />;
}

// ⬇️ ORIGINAL CONTENT PRESERVED BELOW ⬇️

interface TransportSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: TransportSection[];
}

interface TransportGuide {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  featured: boolean;
  savings: string;
  fullContent: FullContent;
  slugOverride?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TransportationPageOriginal() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<TransportGuide | null>(null);
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

  const transportTypes = [
    'All Types',
    'Flights',
    'Trains',
    'Buses',
    'Car Rentals',
    'Airport Transfers',
    'City Transit',
    'Match Day Transport'
  ];

  const transportGuides: TransportGuide[] = [
    {
      id: 1,
      title: 'New York / New Jersey World Cup 2026: Your Complete Getting Around Guide',
      excerpt: 'Navigate NY/NJ like a local: subway systems, PATH trains, NJ Transit, buses, taxis, ride-sharing to MetLife Stadium, parking options, and intercity connections to other World Cup cities.',
      category: 'City Transportation Guide',
      author: 'Michael Rodriguez',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20airport%20terminal%20with%20departure%20boards%2C%20travelers%20with%20luggage%2C%20clean%20contemporary%20design%2C%20international%20travel%20atmosphere%2C%20professional%20aviation%20setting&width=600&height=400&seq=trans1&orientation=landscape',
      featured: true,
      savings: 'Save up to 40%',
      fullContent: {
        introduction: 'Navigate the complex world of international flights to World Cup host cities with our comprehensive guide. From booking strategies to airport navigation, we cover everything you need for seamless air travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about flight options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Los Angeles World Cup 2026: Your Complete Transportation Guide to SoFi Stadium',
      excerpt: 'Master LA transit to SoFi Stadium: Metro rail lines, LAX Flyaway, shuttle services, ride-sharing pickup zones, parking lots, traffic timing, and getting around Los Angeles during World Cup 2026.',
      category: 'Stadium Access & Local Transit',
      author: 'Sarah Chen',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20high-speed%20train%20at%20station%20platform%2C%20sleek%20design%2C%20comfortable%20passenger%20seating%2C%20efficient%20rail%20transportation%2C%20contemporary%20travel%20infrastructure&width=600&height=400&seq=trans2&orientation=landscape',
      featured: true,
      savings: 'Save up to 25%',
      fullContent: {
        introduction: 'Discover the efficiency and comfort of high-speed rail travel between World Cup host cities. Our guide covers booking strategies, comfort classes, and insider tips for the best rail experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about rail travel for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Miami World Cup 2026: Your Complete Transportation Guide to Hard Rock Stadium',
      excerpt: 'Navigate Miami to Hard Rock Stadium: Metrorail, Metromover, Metrobus routes, shuttle services from South Beach, ride-sharing zones, parking options, traffic patterns, and getting around Miami during World Cup 2026.',
      category: 'Stadium Access & Local Transit',
      author: 'David Thompson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=comfortable%20modern%20bus%20interior%20with%20reclining%20seats%2C%20clean%20design%2C%20budget%20travel%20option%2C%20efficient%20intercity%20transportation%2C%20passenger%20comfort&width=600&height=400&seq=trans3&orientation=landscape',
      featured: false,
      savings: 'Save up to 60%',
      fullContent: {
        introduction: 'Explore budget-friendly bus travel options between World Cup host cities. Our comprehensive guide covers routes, comfort levels, and booking strategies for affordable intercity travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about bus travel for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Dallas World Cup 2026: Your Complete Transportation Guide to AT&T Stadium',
      excerpt: 'Navigate Dallas-Fort Worth to AT&T Stadium: DART rail system, TRE commuter train, buses, ride-sharing, rental cars, highway routes, parking facilities, and getting around DFW Metroplex during World Cup 2026.',
      category: 'Stadium Access & Local Transit',
      author: 'Emma Wilson',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20car%20rental%20facility%20with%20various%20vehicles%2C%20professional%20service%20counter%2C%20clean%20automotive%20showroom%2C%20travel%20convenience%2C%20rental%20car%20selection&width=600&height=400&seq=trans4&orientation=landscape',
      featured: false,
      savings: 'Save up to 30%',
      slugOverride: 'dallas-world-cup-2026-your-complete-transportation-guide-to-att-stadium',
      fullContent: {
        introduction: 'Gain the freedom to explore World Cup host cities at your own pace with our comprehensive car rental guide. From booking tips to scenic routes, we cover everything for independent travel.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about car rental options for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Kansas City World Cup 2026: Your Complete Transportation Guide to Arrowhead Stadium',
      excerpt: 'Navigate Kansas City to Arrowhead Stadium: RideKC bus routes, Metro Area Express, ride-sharing options, rental cars, parking lots, tailgating areas, and getting around Kansas City during World Cup 2026.',
      category: 'Stadium Access & Local Transit',
      author: 'James Park',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=airport%20shuttle%20service%20with%20professional%20driver%2C%20comfortable%20passenger%20seating%2C%20efficient%20transfer%20vehicle%2C%20travel%20convenience%2C%20airport%20transportation&width=600&height=400&seq=trans5&orientation=landscape',
      featured: false,
      savings: 'Save up to 35%',
      slugOverride: 'kansas-city-world-cup-2026-your-complete-transportation-guide-to-arrowhead-stadium',
      fullContent: {
        introduction: 'Make your arrival in World Cup host cities seamless with our comprehensive airport transfer guide. Compare options from budget-friendly to premium services.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about airport transfers for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Houston World Cup 2026: Your Complete Transportation Guide to NRG Stadium',
      excerpt: 'Navigate Houston to NRG Stadium: METRORail light rail, METRO buses, park-and-ride locations, ride-sharing pickup zones, rental cars, parking facilities, and getting around Houston during World Cup 2026.',
      category: 'Stadium Access & Local Transit',
      author: 'Lisa Martinez',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20metro%20station%20with%20clean%20platforms%2C%20digital%20information%20displays%2C%20efficient%20urban%20transportation%2C%20contemporary%20public%20transit%20design%2C%20passenger%20convenience&width=600&height=400&seq=trans6&orientation=landscape',
      featured: false,
      savings: 'Save up to 50%',
      slugOverride: 'houston-world-cup-2026-your-complete-transportation-guide-to-nrg-stadium',
      fullContent: {
        introduction: 'Navigate World Cup host cities like a local with our comprehensive public transport guide. Master metro systems, bus networks, and alternative transport options.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about local transport for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Atlanta World Cup 2026: Your Complete Transportation Guide to Mercedes-Benz Stadium',
      excerpt: 'Discover rail passes, flight packages, and transport bundles for visiting multiple host cities efficiently.',
      category: 'Flights',
      author: 'Robert Kim',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=travel%20planning%20with%20multiple%20tickets%20and%20passes%2C%20organized%20travel%20documents%2C%20efficient%20multi-city%20journey%20planning%2C%20transportation%20coordination%2C%20travel%20savings&width=600&height=400&seq=trans7&orientation=landscape',
      featured: false,
      savings: 'Save up to 45%',
      slugOverride: 'atlanta-world-cup-2026-your-complete-transportation-guide-to-mercedes-benz-stadium',
      fullContent: {
        introduction: 'Maximize your savings and efficiency when visiting multiple World Cup host cities with our guide to travel passes and multi-city packages.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about multi-city travel passes for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Philadelphia World Cup 2026: Your Complete Transportation Guide to Lincoln Financial Field',
      excerpt: 'Comprehensive guide to wheelchair-accessible transport, special assistance services, and mobility solutions.',
      category: 'Local Transport',
      author: 'Maria Gonzalez',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=accessible%20transportation%20vehicle%20with%20wheelchair%20ramp%2C%20inclusive%20design%2C%20barrier-free%20travel%20options%2C%20mobility%20assistance%2C%20universal%20access%20transportation&width=600&height=400&seq=trans8&orientation=landscape',
      featured: false,
      savings: 'Special Rates',
      slugOverride: 'philadelphia-world-cup-2026-your-complete-transportation-guide-to-lincoln-financial-field',
      fullContent: {
        introduction: 'Ensure accessible and comfortable travel to World Cup host cities with our comprehensive guide to mobility-friendly transportation options and assistance services.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed transportation guide content will be available soon. Stay tuned for comprehensive information about accessible transport for World Cup 2026.'
          }
        ]
      }
    },
    {
      id: 9,
      title: 'Seattle World Cup 2026: Your Complete Transportation Guide to Lumen Field',
      excerpt: 'How to reach Estadio Azteca with metro, buses, and match-day shuttles.',
      category: 'City Transit',
      author: 'Alejandro Ruiz',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Mexico%20City%20metro%20train%20platform%20crowd%2C%20urban%20transit%20scene%2C%20CDMX%20transportation%2C%20clean%20modern%20station&width=600&height=400&seq=trans-mx-azteca&orientation=landscape',
      featured: false,
      savings: 'Save up to 40%',
      slugOverride: 'mexico-city-world-cup-2026-transportation-guide-to-estadio-azteca',
      fullContent: {
        introduction: 'Reach Estadio Azteca efficiently using Mexico City metro and bus connections. Detailed stadium access and timing guidance.',
        sections: [{ title: 'Coming Soon', content: 'Comprehensive Mexico City stadium access guide coming soon.' }]
      }
    },
    {
      id: 10,
      title: "San Francisco World Cup 2026: Complete Transportation Guide to Levi's Stadium",
      excerpt: 'Best routes to Estadio Akron via city buses, taxis, and rideshare.',
      category: 'City Transit',
      author: 'Sofia Hernandez',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Guadalajara%20city%20bus%20transport%2C%20urban%20transit%20corridor%2C%20Jalisco%20travel%20scene&width=600&height=400&seq=trans-gdl-akron&orientation=landscape',
      featured: false,
      savings: 'Save up to 35%',
      slugOverride: 'san-francisco-world-cup-2026-complete-transportation-guide-to-levis-stadium',
      fullContent: {
        introduction: 'Navigate to Estadio Akron with city transit and express routes.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Guadalajara transit guide coming soon.' }]
      }
    },
    {
      id: 11,
      title: 'Boston World Cup 2026: Complete Transportation Guide to Gillette Stadium',
      excerpt: 'Metrobus, rideshare, and park-and-ride options to Estadio BBVA.',
      category: 'City Transit',
      author: 'Luis Castillo',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Monterrey%20urban%20transport%20skyline%2C%20public%20transit%20bus%2C%20modern%20city%20scene&width=600&height=400&seq=trans-mty-bbva&orientation=landscape',
      featured: false,
      savings: 'Save up to 30%',
      slugOverride: 'boston-world-cup-2026-complete-transportation-guide-to-gillette-stadium',
      fullContent: {
        introduction: 'Plan your trip to Estadio BBVA using Monterrey transit options.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Monterrey stadium access guide coming soon.' }]
      }
    },
    {
      id: 12,
      title: 'Toronto World Cup 2026: Transportation Guide to BMO Field',
      excerpt: 'GO Transit, TTC, and walking routes for match-day at BMO Field.',
      category: 'City Transit',
      author: 'Ava Patel',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Toronto%20streetcar%20or%20GO%20Transit%20platform%2C%20urban%20commuter%20scene%2C%20Ontario%20transportation&width=600&height=400&seq=trans-tor-bmo&orientation=landscape',
      featured: false,
      savings: 'Save up to 25%',
      slugOverride: 'toronto-world-cup-2026-transportation-guide-to-bmo-field',
      fullContent: {
        introduction: 'Use GO Transit and TTC for seamless access to BMO Field.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Toronto stadium transport guide coming soon.' }]
      }
    },
    {
      id: 13,
      title: 'Vancouver World Cup 2026: Complete Transportation Guide to BC Place',
      excerpt: 'SkyTrain and downtown connections to BC Place on match days.',
      category: 'City Transit',
      author: 'Noah Williams',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Vancouver%20SkyTrain%20station%20platform%2C%20urban%20transit%20scene%2C%20British%20Columbia%20transportation&width=600&height=400&seq=trans-van-bcplace&orientation=landscape',
      featured: false,
      savings: 'Save up to 20%',
      slugOverride: 'vancouver-world-cup-2026-transportation-guide-to-bc-place',
      fullContent: {
        introduction: 'Reach BC Place via SkyTrain and downtown walking routes.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Vancouver stadium transport guide coming soon.' }]
      }
    },
    {
      id: 14,
      title: 'Mexico City World Cup 2026: Complete Transportation Guide to Estadio Azteca',
      excerpt: 'MARTA, streetcar, and rideshare strategies for match-day in Atlanta.',
      category: 'Match Day Transport',
      author: 'Olivia Harris',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Atlanta%20MARTA%20train%20station%2C%20urban%20transit%20scene%2C%20Georgia%20transportation&width=600&height=400&seq=trans-atl-mbs&orientation=landscape',
      featured: false,
      savings: 'Save up to 30%',
      slugOverride: 'mexico-city-world-cup-2026-complete-transportation-guide-to-estadio-azteca',
      fullContent: {
        introduction: 'Plan MARTA and rideshare for Mercedes-Benz Stadium access.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Atlanta match-day transport guide coming soon.' }]
      }
    },
    {
      id: 15,
      title: 'Guadalajara World Cup 2026 Complete Transportation Guide To Estadio Akron',
      excerpt: 'SEPTA routes, Broad Street Line, and match-day shuttles to LFF.',
      category: 'Match Day Transport',
      author: 'Ethan Miller',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Philadelphia%20SEPTA%20station%20platform%2C%20urban%20transit%20scene%2C%20Pennsylvania%20transportation&width=600&height=400&seq=trans-phl-lff&orientation=landscape',
      featured: false,
      savings: 'Save up to 25%',
      slugOverride: 'guadalajara-world-cup-2026-complete-transportation-guide-to-estadio-akron',
      fullContent: {
        introduction: 'Use SEPTA transit for Lincoln Financial Field match access.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Philadelphia stadium transport guide coming soon.' }]
      }
    },
    {
      id: 16,
      title: 'Monterrey World Cup 2026 Complete Transportation Guide To Estadio Bbva',
      excerpt: 'METRORail, park-and-ride, and rideshare tips for NRG Stadium.',
      category: 'City Transit',
      author: 'Grace Nguyen',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Houston%20METRORail%20platform%20train%2C%20urban%20transit%20scene%2C%20Texas%20transportation&width=600&height=400&seq=trans-hou-nrg&orientation=landscape',
      featured: false,
      savings: 'Save up to 30%',
      slugOverride: 'monterrey-world-cup-2026-complete-transportation-guide-to-estadio-bbva',
      fullContent: {
        introduction: 'Ride METRORail and use park-and-ride for NRG Stadium.',
        sections: [{ title: 'Coming Soon', content: 'Detailed Houston stadium transport guide coming soon.' }]
      }
    }
  ];

  const filteredGuides = transportGuides.filter(guide => {
    const matchesType = selectedType === 'All Types' || guide.category === selectedType;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const featuredGuides = transportGuides.filter(guide => guide.featured);

  const slugifyGuide = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const openGuideModal = (guide: TransportGuide) => {
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

      {/* Hero Section - Apple-Level Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-8 left-4 w-16 h-16 xs:top-10 xs:left-6 xs:w-20 xs:h-20 sm:top-16 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-40 md:h-40 lg:top-24 lg:left-12 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 animate-float"></div>
          <div className="absolute bottom-8 right-4 w-20 h-20 xs:bottom-10 xs:right-6 xs:w-24 xs:h-24 sm:bottom-16 sm:right-8 sm:w-40 sm:h-40 md:bottom-20 md:right-10 md:w-48 md:h-48 lg:bottom-24 lg:right-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute top-1/3 left-1/2 w-16 h-16 xs:top-1/2 xs:left-1/2 xs:w-20 xs:h-20 sm:top-1/2 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
          <div className="text-center">
            {/* Premium Breadcrumb - Minimal Luxury */}
            <div className="mb-8">
              <nav className="flex items-center justify-center space-x-2 text-sm">
                <a href="/" className="text-slate-500 dark:text-slate-400 hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors duration-300 font-medium">
                  Home
                </a>
                <span className="text-slate-300 dark:text-slate-600">›</span>
                <span className="text-slate-900 dark:text-white font-medium">Transportation</span>
              </nav>
            </div>
            
            {/* Premium Title - Apple Typography */}
            <div className="mb-12">
              <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                World Cup 2026 Transportation Guide: Travel Between Cities & Stadiums
              </h1>
              <div className="text-center mb-4">
                <span className="font-inter text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium">
                  Getting Around World Cup 2026 in USA, Canada & Mexico
                </span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#01b47d] to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Navigate all 16 host cities with confidence. Complete transportation guides covering flights, trains, buses, public transit, ride-sharing, rental cars, and stadium access—with route planning, cost comparisons, and money-saving strategies.
              </p>
            </div>

            {/* Apple-Level Premium Stats - Minimal Luxury Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              
              {/* Cities Card - Apple Emerald */}
              <div className="group relative text-center h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/5 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5 overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">16</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Host Cities</div>
                </div>
              </div>

              {/* Savings Card - Apple Purple */}
              <div className="group relative text-center h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">Save Up to 50%</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Smart Booking</div>
                </div>
              </div>

              {/* Routes Card - Apple Blue */}
              <div className="group relative text-center h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/5 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5 overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">300+</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Transit Routes</div>
                </div>
              </div>

              {/* Support Card - Apple Orange */}
              <div className="group relative text-center h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-orange-200/50 dark:hover:border-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5 overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">24/7</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Travel Support</div>
                </div>
              </div>

            </div>
          </div>
        </div>


      {/* Essential Transport Guides - Apple-Level Premium Design */}
      <div id="main-content" className="relative z-10 pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
              Complete World Cup 2026 Transportation Resources
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#01b47d] to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Master every aspect of travel for World Cup 2026—from international flights and intercity connections to local public transit and stadium access. Comprehensive guides covering all transport options across USA, Canada, and Mexico.
            </p>
          </div>

          {/* Apple-Level Premium 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {transportGuides.map((guide, index) => (
              <div
                key={guide.id}
                className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20"
              >
                {/* Premium Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 via-transparent to-purple-50/30 dark:from-[#008f63]/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={`${guide.title} transport guide`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    fetchPriority={index < 2 ? 'high' : 'auto'}
                    decoding="async"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Apple-Level Premium Category Badge - Top Left */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/75 backdrop-blur-sm text-navy-900 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 shadow-sm shadow-slate-500/10 hover:bg-white/85 hover:shadow-md transition-all duration-300">
                      {guide.category}
                    </div>
                  </div>
                  
                  
                </div>

                {/* Premium Content Section - Apple Typography */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-[#01b47d] group-hover:to-purple-600 dark:group-hover:from-[#01b47d] dark:group-hover:to-purple-400 transition-all duration-700">
                    {guide.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                    {guide.excerpt}
                  </p>
                  
                  
                  
                  {/* Apple-Level Premium Button - Apple Style */}
                  <a 
                    href={`/transportation/${guide.slugOverride ?? slugifyGuide(guide.title)}`}
                    className="relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 w-full transform-gpu will-change-transform bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] text-white hover:from-[#01b47d] hover:via-[#008f63] hover:to-[#008f63] focus:ring-[#01b47d]/30 shadow-premium hover:shadow-premium-lg border border-[#01b47d]/20 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base mt-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <i className="ri-eye-line"></i>
                      <span>Read Full Guide</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Transport Guide Modal - Cities Page Style */}
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
                  <span className="text-[#01b47d] text-sm font-medium">Transport Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedGuide.savings}</span>
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
                
                <div className="mt-8 p-4 bg-[#01b47d]/5 dark:bg-[#008f63]/20 rounded-lg border border-[#01b47d]/20 dark:border-[#008f63]">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-[#01b47d] text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-[#008f63] dark:text-[#01b47d] mb-1">Coming Soon</h4>
                      <p className="text-[#008f63] dark:text-[#01b47d] text-sm">
                        Comprehensive transportation guides with detailed information about booking strategies, routes, schedules, and money-saving tips will be available soon.
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
