import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { ComingSoon } from '../../components/common/ComingSoon';

// ==========================================
// 🚨 INCOMPLETE PAGE PRESERVATION
// The original content is preserved below as 'CityComparisonsPageOriginal'
// To restore:
// 1. Delete the 'CityComparisonsPage' component
// 2. Rename 'CityComparisonsPageOriginal' back to 'CityComparisonsPage'
// 3. Export it as default
// ==========================================

export default function CityComparisonsPage() {
  return <ComingSoon title="City Comparisons Coming Soon" />;
}

// ⬇️ ORIGINAL CONTENT PRESERVED BELOW ⬇️

const comparisonTypes = [
  'All Comparisons',
  'Cost of Living',
  'Transportation',
  'Accommodation',
  'Culture & Lifestyle',
  'Weather & Climate',
  'Stadium Access'
];

const cityComparisons = [
  {
    id: 1,
    title: 'New York vs Los Angeles: East Coast vs West Coast',
    description: 'Comprehensive comparison of America\'s two largest cities, covering costs, culture, and World Cup experiences.',
    type: 'Culture & Lifestyle',
    cities: ['New York', 'Los Angeles'],
    winner: 'Tie',
    image: 'https://readdy.ai/api/search-image?query=split%20screen%20comparison%20of%20New%20York%20Manhattan%20skyline%20and%20Los%20Angeles%20downtown%2C%20urban%20contrast%2C%20metropolitan%20comparison%2C%20city%20lifestyle%20differences&width=600&height=400&seq=comp1&orientation=landscape',
    featured: true,
    readTime: '8 min read',
    author: 'Travel Expert',
    fullContent: {
      introduction: 'Two iconic American cities representing different coasts and lifestyles. New York offers unmatched urban energy and cultural diversity, while Los Angeles provides year-round sunshine and entertainment industry glamour.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about New York vs Los Angeles World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { ny: 9, la: 7 },
      transport: { ny: 8, la: 6 },
      culture: { ny: 9, la: 8 },
      stadium: { ny: 8, la: 9 }
    },
    detailedComparison: {
      overview: 'Two iconic American cities representing different coasts and lifestyles. New York offers unmatched urban energy and cultural diversity, while Los Angeles provides year-round sunshine and entertainment industry glamour.',
      costBreakdown: {
        accommodation: { ny: '$200-500/night', la: '$150-400/night' },
        food: { ny: '$15-40/meal', la: '$12-35/meal' },
        transport: { ny: '$2.90 subway', la: '$1.75 metro + car rental' },
        attractions: { ny: '$25-50/site', la: '$20-45/site' }
      },
      pros: {
        ny: ['World-class public transport', 'Incredible food scene', 'Cultural attractions', 'Walkable neighborhoods'],
        la: ['Perfect weather', 'Beach access', 'Entertainment industry', 'Car culture freedom']
      },
      cons: {
        ny: ['Very expensive', 'Crowded', 'Limited parking', 'Harsh winters'],
        la: ['Traffic congestion', 'Car dependency', 'Smog issues', 'Sprawling layout']
      },
      stadiumInfo: {
        ny: 'MetLife Stadium - 82,500 capacity, accessible by train from Manhattan',
        la: 'SoFi Stadium - 70,240 capacity, modern venue with excellent amenities'
      }
    }
  },
  {
    id: 2,
    title: 'Mexico City vs Guadalajara: Cultural Capitals',
    description: 'Compare Mexico\'s two most important cities for culture, affordability, and authentic experiences.',
    type: 'Cost of Living',
    cities: ['Mexico City', 'Guadalajara'],
    winner: 'Guadalajara',
    image: 'https://readdy.ai/api/search-image?query=Mexican%20cities%20comparison%20with%20colonial%20architecture%2C%20vibrant%20culture%2C%20traditional%20markets%2C%20authentic%20Mexican%20atmosphere%2C%20cultural%20heritage%20contrast&width=600&height=400&seq=comp2&orientation=landscape',
    featured: true,
    readTime: '7 min read',
    author: 'Culture Guide',
    fullContent: {
      introduction: 'Mexico\'s cultural powerhouses offer rich history, incredible cuisine, and authentic Mexican experiences. Mexico City is the bustling capital with world-class museums, while Guadalajara provides a more relaxed atmosphere with traditional charm.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Mexico City vs Guadalajara World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { mc: 6, gd: 4 },
      transport: { mc: 7, gd: 6 },
      culture: { mc: 9, gd: 8 },
      stadium: { mc: 9, gd: 7 }
    },
    detailedComparison: {
      overview: 'Mexico\'s cultural powerhouses offer rich history, incredible cuisine, and authentic Mexican experiences. Mexico City is the bustling capital with world-class museums, while Guadalajara provides a more relaxed atmosphere with traditional charm.',
      costBreakdown: {
        accommodation: { mc: '$30-80/night', gd: '$25-60/night' },
        food: { mc: '$3-15/meal', gd: '$2-12/meal' },
        transport: { mc: '$0.25 metro', gd: '$0.50 bus' },
        attractions: { mc: '$2-8/site', gd: '$1-6/site' }
      },
      pros: {
        mc: ['World-class museums', 'Incredible food scene', 'Rich history', 'Excellent metro system'],
        gd: ['More affordable', 'Traditional culture', 'Tequila birthplace', 'Friendly locals']
      },
      cons: {
        mc: ['Air pollution', 'Very crowded', 'Traffic congestion', 'Higher costs'],
        gd: ['Limited public transport', 'Fewer attractions', 'Less international', 'Hot climate']
      },
      stadiumInfo: {
        mc: 'Estadio Azteca - 87,523 capacity, historic venue with incredible atmosphere',
        gd: 'Estadio Akron - 49,850 capacity, modern stadium with great facilities'
      }
    }
  },
  {
    id: 3,
    title: 'Toronto vs Vancouver: Canadian Showdown',
    description: 'East meets West in Canada - compare these two diverse cities for your World Cup experience.',
    type: 'Weather & Climate',
    cities: ['Toronto', 'Vancouver'],
    winner: 'Vancouver',
    image: 'https://readdy.ai/api/search-image?query=Canadian%20cities%20comparison%20with%20Toronto%20CN%20Tower%20and%20Vancouver%20mountains%2C%20urban%20landscapes%2C%20Canadian%20culture%2C%20modern%20city%20skylines&width=600&height=400&seq=comp3&orientation=landscape',
    featured: false,
    readTime: '6 min read',
    author: 'Canada Expert',
    fullContent: {
      introduction: 'Canada\'s two major cities offer distinct experiences. Toronto is the financial hub with diverse neighborhoods, while Vancouver combines urban sophistication with stunning natural beauty.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Toronto vs Vancouver World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { to: 7, va: 8 },
      transport: { to: 8, va: 7 },
      culture: { to: 8, va: 7 },
      stadium: { to: 7, va: 8 }
    },
    detailedComparison: {
      overview: 'Canada\'s two major cities offer distinct experiences. Toronto is the financial hub with diverse neighborhoods, while Vancouver combines urban sophistication with stunning natural beauty.',
      costBreakdown: {
        accommodation: { to: '$120-300/night', va: '$140-350/night' },
        food: { to: '$12-30/meal', va: '$15-35/meal' },
        transport: { to: '$3.35 TTC', va: '$3.05 TransLink' },
        attractions: { to: '$15-35/site', va: '$18-40/site' }
      },
      pros: {
        to: ['Multicultural city', 'Great public transit', 'Vibrant nightlife', 'CN Tower'],
        va: ['Stunning scenery', 'Mild climate', 'Outdoor activities', 'Clean air']
      },
      cons: {
        to: ['Cold winters', 'Expensive housing', 'Traffic issues', 'Limited nature access'],
        va: ['Very expensive', 'Rainy winters', 'Limited nightlife', 'Housing crisis']
      },
      stadiumInfo: {
        to: 'BMO Field - 30,000 capacity, downtown location with easy transit access',
        va: 'BC Place - 54,500 capacity, retractable roof stadium in downtown core'
      }
    }
  },
  {
    id: 4,
    title: 'Miami vs Atlanta: Southern Hospitality',
    description: 'Beach vibes vs urban sophistication - which southern US city offers the better World Cup experience?',
    type: 'Culture & Lifestyle',
    cities: ['Miami', 'Atlanta'],
    winner: 'Miami',
    image: 'https://readdy.ai/api/search-image?query=Miami%20Beach%20Art%20Deco%20and%20Atlanta%20modern%20skyline%20comparison%2C%20southern%20US%20cities%2C%20urban%20vs%20coastal%20lifestyle%2C%20contrasting%20atmospheres&width=600&height=400&seq=comp4&orientation=landscape',
    featured: false,
    readTime: '7 min read',
    author: 'South USA Guide',
    fullContent: {
      introduction: 'Two dynamic southern cities with distinct personalities. Miami offers tropical beaches and Latin culture, while Atlanta provides southern charm with modern urban amenities.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Miami vs Atlanta World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { mi: 8, at: 6 },
      transport: { mi: 6, at: 7 },
      culture: { mi: 8, at: 7 },
      stadium: { mi: 7, at: 8 }
    },
    detailedComparison: {
      overview: 'Two dynamic southern cities with distinct personalities. Miami offers tropical beaches and Latin culture, while Atlanta provides southern charm with modern urban amenities.',
      costBreakdown: {
        accommodation: { mi: '$150-400/night', at: '$100-250/night' },
        food: { mi: '$15-45/meal', at: '$12-30/meal' },
        transport: { mi: '$2.25 metro', at: '$2.50 MARTA' },
        attractions: { mi: '$20-50/site', at: '$15-35/site' }
      },
      pros: {
        mi: ['Beautiful beaches', 'Vibrant nightlife', 'Latin culture', 'Year-round warmth'],
        at: ['Affordable costs', 'Rich history', 'Great food scene', 'Friendly locals']
      },
      cons: {
        mi: ['Hurricane season', 'Very expensive', 'Traffic congestion', 'Parking costs'],
        at: ['Hot humid summers', 'Limited public transit', 'Sprawling city', 'Traffic issues']
      },
      stadiumInfo: {
        mi: 'Hard Rock Stadium - 65,326 capacity, modern venue with excellent amenities',
        at: 'Mercedes-Benz Stadium - 71,000 capacity, state-of-the-art retractable roof'
      }
    }
  },
  {
    id: 5,
    title: 'Boston vs Philadelphia: Historic Rivals',
    description: 'Two of America\'s most historic cities compete for your World Cup visit - which offers more?',
    type: 'Transportation',
    cities: ['Boston', 'Philadelphia'],
    winner: 'Boston',
    image: 'https://readdy.ai/api/search-image?query=Historic%20Boston%20and%20Philadelphia%20architecture%20comparison%2C%20colonial%20American%20cities%2C%20historic%20landmarks%2C%20traditional%20East%20Coast%20atmosphere&width=600&height=400&seq=comp5&orientation=landscape',
    featured: false,
    readTime: '6 min read',
    author: 'History Guide',
    fullContent: {
      introduction: 'Historic East Coast rivals with rich American heritage. Boston offers compact walkability and revolutionary history, while Philadelphia provides affordable charm and founding father legacy.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Boston vs Philadelphia World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { bo: 8, ph: 6 },
      transport: { bo: 9, ph: 7 },
      culture: { bo: 9, ph: 8 },
      stadium: { bo: 7, ph: 7 }
    },
    detailedComparison: {
      overview: 'Historic East Coast rivals with rich American heritage. Boston offers compact walkability and revolutionary history, while Philadelphia provides affordable charm and founding father legacy.',
      costBreakdown: {
        accommodation: { bo: '$150-350/night', ph: '$100-250/night' },
        food: { bo: '$15-40/meal', ph: '$12-30/meal' },
        transport: { bo: '$2.40 T system', ph: '$2.50 SEPTA' },
        attractions: { bo: '$15-30/site', ph: '$12-25/site' }
      },
      pros: {
        bo: ['Excellent public transit', 'Walkable city', 'Rich history', 'Great universities'],
        ph: ['More affordable', 'Great food scene', 'Historic sites', 'Friendly atmosphere']
      },
      cons: {
        bo: ['Very expensive', 'Cold winters', 'Limited parking', 'Crowded'],
        ph: ['Crime concerns', 'Limited nightlife', 'Aging infrastructure', 'Parking issues']
      },
      stadiumInfo: {
        bo: 'Gillette Stadium - 65,878 capacity, located in Foxborough with shuttle service',
        ph: 'Lincoln Financial Field - 69,596 capacity, modern venue in South Philadelphia'
      }
    }
  },
  {
    id: 6,
    title: 'Dallas vs Kansas City: Heartland America',
    description: 'Compare these two central US cities for authentic American culture and World Cup accessibility.',
    type: 'Stadium Access',
    cities: ['Dallas', 'Kansas City'],
    winner: 'Dallas',
    image: 'https://readdy.ai/api/search-image?query=Dallas%20Texas%20skyline%20and%20Kansas%20City%20urban%20landscape%2C%20American%20heartland%20cities%2C%20modern%20architecture%2C%20central%20US%20metropolitan%20areas&width=600&height=400&seq=comp6&orientation=landscape',
    featured: false,
    readTime: '5 min read',
    author: 'Heartland Expert',
    fullContent: {
      introduction: 'Two heartland cities representing authentic American culture. Dallas offers big city amenities with Texas flair, while Kansas City provides Midwest charm with famous barbecue and jazz heritage.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Dallas vs Kansas City World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { da: 6, kc: 5 },
      transport: { da: 7, kc: 6 },
      culture: { da: 7, kc: 6 },
      stadium: { da: 9, kc: 8 }
    },
    detailedComparison: {
      overview: 'Two heartland cities representing authentic American culture. Dallas offers big city amenities with Texas flair, while Kansas City provides Midwest charm with famous barbecue and jazz heritage.',
      costBreakdown: {
        accommodation: { da: '$80-200/night', kc: '$70-150/night' },
        food: { da: '$10-25/meal', kc: '$8-20/meal' },
        transport: { da: '$2.50 DART', kc: '$1.50 bus' },
        attractions: { da: '$10-25/site', kc: '$8-20/site' }
      },
      pros: {
        da: ['Modern amenities', 'Great food scene', 'Business hub', 'Excellent stadium'],
        kc: ['Very affordable', 'Famous barbecue', 'Friendly locals', 'Jazz heritage']
      },
      cons: {
        da: ['Car dependent', 'Hot summers', 'Sprawling city', 'Limited public transit'],
        kc: ['Limited attractions', 'Extreme weather', 'Small airport', 'Car necessary']
      },
      stadiumInfo: {
        da: 'AT&T Stadium - 80,000 capacity, world-class venue with retractable roof',
        kc: 'Arrowhead Stadium - 76,416 capacity, famous for loud crowd atmosphere'
      }
    }
  },
  {
    id: 7,
    title: 'Seattle vs San Francisco: Pacific Coast',
    description: 'Tech hubs of the Pacific Northwest vs California - which offers the better World Cup experience?',
    type: 'Cost of Living',
    cities: ['Seattle', 'San Francisco'],
    winner: 'Seattle',
    image: 'https://readdy.ai/api/search-image?query=Seattle%20Space%20Needle%20and%20San%20Francisco%20Golden%20Gate%20Bridge%20comparison%2C%20Pacific%20Coast%20cities%2C%20tech%20hub%20atmospheres%2C%20coastal%20urban%20landscapes&width=600&height=400&seq=comp7&orientation=landscape',
    featured: false,
    readTime: '8 min read',
    author: 'Tech Cities Guide',
    fullContent: {
      introduction: 'Two Pacific Coast tech hubs with distinct personalities. Seattle offers coffee culture and natural beauty, while San Francisco provides iconic landmarks and diverse neighborhoods.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Seattle vs San Francisco World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { se: 8, sf: 10 },
      transport: { se: 7, sf: 8 },
      culture: { se: 8, sf: 9 },
      stadium: { se: 8, sf: 7 }
    },
    detailedComparison: {
      overview: 'Two Pacific Coast tech hubs with distinct personalities. Seattle offers coffee culture and natural beauty, while San Francisco provides iconic landmarks and diverse neighborhoods.',
      costBreakdown: {
        accommodation: { se: '$120-300/night', sf: '$180-450/night' },
        food: { se: '$12-35/meal', sf: '$15-50/meal' },
        transport: { se: '$3.50 Link', sf: '$2.50 Muni' },
        attractions: { se: '$15-30/site', sf: '$20-40/site' }
      },
      pros: {
        se: ['Coffee culture', 'Natural beauty', 'Tech scene', 'Music heritage'],
        sf: ['Iconic landmarks', 'Diverse culture', 'Great food', 'Mild climate']
      },
      cons: {
        se: ['Rainy weather', 'Expensive', 'Traffic issues', 'Homeless crisis'],
        sf: ['Extremely expensive', 'Homeless crisis', 'Fog', 'Steep hills']
      },
      stadiumInfo: {
        se: 'Lumen Field - 69,000 capacity, known for incredible crowd noise',
        sf: 'Levi\'s Stadium - 68,500 capacity, modern venue in Santa Clara'
      }
    }
  },
  {
    id: 8,
    title: 'Monterrey vs All Mexican Cities',
    description: 'How does Mexico\'s industrial capital compare to the country\'s other World Cup host cities?',
    type: 'Accommodation',
    cities: ['Monterrey', 'Mexico City', 'Guadalaja'],
    winner: 'Mexico City',
    image: 'https://readdy.ai/api/search-image?query=Monterrey%20industrial%20cityscape%20with%20mountains%2C%20Mexican%20urban%20development%2C%20modern%20Mexican%20city%2C%20industrial%20architecture%2C%20northern%20Mexico%20atmosphere&width=600&height=400&seq=comp8&orientation=landscape',
    featured: false,
    readTime: '9 min read',
    author: 'Mexico Expert',
    fullContent: {
      introduction: 'Mexico\'s industrial powerhouse compared to the cultural capitals. Monterrey offers modern amenities and mountain views, while Mexico City and Guadalajara provide richer cultural experiences.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'Detailed comparison guide content will be available soon. Stay tuned for comprehensive information about Monterrey vs other Mexican cities World Cup 2026 experience comparison.'
        }
      ]
    },
    metrics: {
      cost: { mo: 5, mc: 6, gd: 4 },
      transport: { mo: 6, mc: 7, gd: 6 },
      culture: { mo: 6, mc: 9, gd: 8 },
      stadium: { mo: 7, mc: 9, gd: 7 }
    },
    detailedComparison: {
      overview: 'Mexico\'s industrial powerhouse compared to the cultural capitals. Monterrey offers modern amenities and mountain views, while Mexico City and Guadalajara provide richer cultural experiences.',
      costBreakdown: {
        accommodation: { mo: '$25-70/night', mc: '$30-80/night', gd: '$25-60/night' },
        food: { mo: '$3-12/meal', mc: '$3-15/meal', gd: '$2-12/meal' },
        transport: { mo: '$0.50 metro', mc: '$0.25 metro', gd: '$0.50 bus' },
        attractions: { mo: '$2-6/site', mc: '$2-8/site', gd: '$1-6/site' }
      },
      pros: {
        mo: ['Modern city', 'Mountain views', 'Business hub', 'Good infrastructure'],
        mc: ['Rich culture', 'World-class museums', 'Great food', 'Historic sites'],
        gd: ['Most affordable', 'Traditional culture', 'Tequila tours', 'Friendly locals']
      },
      cons: {
        mo: ['Limited culture', 'Industrial feel', 'Hot climate', 'Fewer attractions'],
        mc: ['Air pollution', 'Very crowded', 'Traffic', 'Higher costs'],
        gd: ['Limited transport', 'Fewer attractions', 'Hot weather', 'Less international']
      },
      stadiumInfo: {
        mo: 'Estadio BBVA - 53,500 capacity, modern venue with mountain backdrop',
        mc: 'Estadio Azteca - 87,523 capacity, legendary World Cup venue',
        gd: 'Estadio Akron - 49,850 capacity, contemporary stadium design'
      }
    }
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CityComparisonsPageOriginal() {
  const [selectedType, setSelectedType] = useState('All Comparisons');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComparison, setSelectedComparison] = useState<typeof cityComparisons[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useState(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  const filteredComparisons = cityComparisons.filter(comparison => {
    const matchesType = selectedType === 'All Comparisons' || comparison.type === selectedType;
    const matchesSearch = comparison.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comparison.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const featuredComparisons = cityComparisons.filter(comparison => comparison.featured);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openComparisonModal = (comparison: typeof cityComparisons[0]) => {
    setSelectedComparison(comparison);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComparison(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section - Apple-Level Premium Design with Unified Background */}
      <main id="main-content" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          <div className="absolute top-8 left-4 w-16 h-16 xs:top-10 xs:left-6 xs:w-20 xs:h-20 sm:top-16 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-40 md:h-40 lg:top-24 lg:left-12 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 animate-float"></div>
          <div className="absolute top-1/2 right-4 w-20 h-20 xs:right-6 xs:w-24 xs:h-24 sm:right-8 sm:w-40 sm:h-40 md:right-10 md:w-48 md:h-48 lg:right-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/2 w-16 h-16 xs:left-1/2 xs:w-20 xs:h-20 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>

        <div className="relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <nav className="flex items-center justify-center space-x-2 text-sm">
                  <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors duration-300 font-medium">
                    Home
                  </Link>
                  <span className="text-slate-300 dark:text-slate-600">›</span>
                  <span className="text-slate-900 dark:text-white font-medium">City Comparisons</span>
                </nav>
              </div>
              <div className="mb-12">
                <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                  Compare Cities,
                  <br />
                  <span className="bg-gradient-to-r from-[#01b47d] via-[#008f63] to-[#008f63] bg-clip-text text-transparent">Make Better Choices</span>
                </h1>
                <div className="text-center mb-6">
                  <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                    City Comparison Guides (8)
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-[#01b47d] to-purple-500 mx-auto mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Not sure which cities to visit? Compare costs, weather, things to do, and how easy it is to get around. 
                  See which destinations fit your budget, timeline, and travel style.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/5 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">16</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Cities</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">8</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Comparisons</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/5 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">25</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Factors</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-orange-200/50 dark:hover:border-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">
                      <i className="ri-bar-chart-2-line"></i>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Data-Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
                Find Your Perfect Match
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#01b47d] to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Explore our comprehensive city comparisons to discover which destinations align with your travel preferences, budget, and World Cup experience goals.
              </p>
            </div>

            {/* Search and Filter - Merged into same section */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    placeholder="Search city comparisons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-navy-600 rounded-xl bg-white dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-[#01b47d] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {comparisonTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedType === type
                          ? 'bg-[#01b47d] text-white shadow-lg'
                          : 'bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 hover:bg-[#008f63]/5 dark:hover:bg-navy-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Comparisons Grid - 2 Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredComparisons.map((comparison) => (
                <Card key={comparison.id} hover className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={comparison.image} 
                      alt={comparison.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-navy-900 px-2 py-1 rounded-lg text-xs font-bold">
                        {comparison.winner}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#01b47d] text-sm font-medium">{comparison.type}</span>
                      <div className="flex items-center space-x-3 text-xs text-slate-500">
                        <span>{comparison.author}</span>
                        <span>•</span>
                        <span>{comparison.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                      {comparison.title}
                    </h3>
                    <p className="font-inter text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      {comparison.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {comparison.cities.slice(0, 3).map((city, index) => (
                        <span key={index} className="text-xs bg-[#01b47d]/10 dark:bg-[#008f63]/30 text-[#008f63] dark:text-[#01b47d] px-2 py-1 rounded-full">
                          {city}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/city-comparisons/${comparison.title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#01b47d] text-white hover:bg-[#008f63] transition-all w-full text-sm font-semibold whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-eye-line mr-2"></i>
                      Read Full Guide
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {filteredComparisons.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-4xl text-slate-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  No city comparisons found
                </h3>
                <p className="text-slate-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Comparison Detail Modal - Cities Page Style */}
      {isModalOpen && selectedComparison && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedComparison.image} 
                  alt={selectedComparison.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#01b47d] text-white px-3 py-1 rounded-full text-sm font-bold">
                    Winner: {selectedComparison.winner}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#01b47d] text-sm font-medium">City Comparison Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedComparison.author}</span>
                    <span>•</span>
                    <span>{selectedComparison.readTime}</span>
                  </div>
                </div>
                
                <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
                  {selectedComparison.title}
                </h2>
                
                <p className="font-inter text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedComparison.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedComparison.fullContent?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="font-inter text-slate-600 dark:text-slate-300 leading-relaxed">
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
                        Comprehensive city comparison guides with detailed information about costs, culture, transportation, and local tips will be available soon.
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
