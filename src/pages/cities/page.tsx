
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';

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
}

export default function CitiesPage() {
  const [selectedCity, setSelectedCity] = useState<HostCity | null>(null);
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

  // Set page title, meta description, and canonical URL
  useEffect(() => {
    document.title = 'World Cup 2026 Host Cities Guide - All 16 Destinations | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete guide to all 16 World Cup 2026 host cities. Explore New York, Los Angeles, Miami, Mexico City, Toronto, Vancouver and more. Find hotels, attractions, and travel tips.');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities`);
    }
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    'World Cup 2026 Host Cities',
    'Complete guide to all 16 World Cup 2026 host cities across USA, Canada, and Mexico with travel information, hotels, and attractions.',
    `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities`
  );

  const openCityModal = (city: HostCity) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  const hostCities: HostCity[] = [
    {
      id: 1,
      name: 'New York City',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'MetLife Stadium',
      capacity: '87,157',
      description: 'The city that never sleeps welcomes the world with iconic skylines, world-class dining, and unmatched energy.',
      image: 'https://readdy.ai/api/search-image?query=New%20York%20City%20Manhattan%20skyline%20at%20golden%20hour%2C%20iconic%20skyscrapers%2C%20urban%20landscape%2C%20modern%20metropolitan%20cityscape%2C%20vibrant%20city%20lights%2C%20architectural%20beauty&width=600&height=400&seq=nyc-skyline&orientation=landscape',
      fullContent: {
        introduction: 'New York City, the ultimate urban destination, offers an unparalleled World Cup 2026 experience with its iconic venues, diverse neighborhoods, and world-class amenities.',
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
      name: 'Los Angeles',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'SoFi Stadium',
      capacity: '70,240',
      description: 'The entertainment capital combines Hollywood glamour with perfect weather and stunning Pacific coastlines.',
      image: 'https://readdy.ai/api/search-image?query=Los%20Angeles%20downtown%20skyline%20with%20palm%20trees%2C%20Hollywood%20hills%20in%20background%2C%20sunny%20California%20weather%2C%20modern%20urban%20landscape%2C%20entertainment%20district&width=600&height=400&seq=la-skyline&orientation=landscape',
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
      name: 'Miami',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Hard Rock Stadium',
      capacity: '67,518',
      description: 'Tropical paradise meets international flair with pristine beaches, vibrant nightlife, and Latin American culture.',
      image: 'https://readdy.ai/api/search-image?query=Miami%20Beach%20skyline%20with%20art%20deco%20buildings%2C%20turquoise%20ocean%20waters%2C%20palm%20trees%2C%20tropical%20paradise%2C%20colorful%20architecture%2C%20sunny%20beach%20destination&width=600&height=400&seq=miami-beach&orientation=landscape',
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
      name: 'Dallas',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'AT&T Stadium',
      capacity: '80,000',
      description: 'Modern metropolis showcasing Texas hospitality, innovative architecture, and rich cultural heritage.',
      image: 'https://readdy.ai/api/search-image?query=Dallas%20Texas%20downtown%20skyline%20with%20modern%20skyscrapers%2C%20urban%20architecture%2C%20clear%20blue%20sky%2C%20metropolitan%20cityscape%2C%20business%20district&width=600&height=400&seq=dallas-skyline&orientation=landscape',
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
      name: 'Kansas City',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Arrowhead Stadium',
      capacity: '76,416',
      description: 'Heartland hospitality meets passionate sports culture in America\'s barbecue capital.',
      image: 'https://readdy.ai/api/search-image?query=Kansas%20City%20Missouri%20downtown%20skyline%2C%20midwestern%20architecture%2C%20urban%20landscape%2C%20heartland%20America%20cityscape%2C%20modern%20buildings&width=600&height=400&seq=kc-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Kansas City offers authentic American hospitality and passionate sports culture in the heart of the United States.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Kansas City\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 6,
      name: 'Houston',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'NRG Stadium',
      capacity: '72,220',
      description: 'Space City blends international diversity, culinary excellence, and Southern charm.',
      image: 'https://readdy.ai/api/search-image?query=Houston%20Texas%20downtown%20skyline%2C%20modern%20skyscrapers%2C%20urban%20architecture%2C%20space%20city%20landscape%2C%20metropolitan%20area&width=600&height=400&seq=houston-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Houston\'s diverse culture, world-class dining, and warm hospitality create an exceptional World Cup 2026 destination.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Houston\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 7,
      name: 'Atlanta',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Mercedes-Benz Stadium',
      capacity: '71,000',
      description: 'The South\'s cultural capital combines historic charm with modern innovation and world-class attractions.',
      image: 'https://readdy.ai/api/search-image?query=Atlanta%20Georgia%20downtown%20skyline%2C%20southern%20architecture%2C%20modern%20urban%20landscape%2C%20cultural%20city%2C%20metropolitan%20skyline&width=600&height=400&seq=atlanta-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Atlanta seamlessly blends Southern hospitality with cosmopolitan sophistication for an unforgettable World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Atlanta\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 8,
      name: 'Philadelphia',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Lincoln Financial Field',
      capacity: '69,176',
      description: 'The birthplace of America offers rich history, passionate sports fans, and authentic East Coast culture.',
      image: 'https://readdy.ai/api/search-image?query=Philadelphia%20Pennsylvania%20downtown%20skyline%2C%20historic%20architecture%2C%20Liberty%20Bell%20area%2C%20American%20history%2C%20east%20coast%20cityscape&width=600&height=400&seq=philly-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Philadelphia\'s rich American history and passionate sports culture provide a unique backdrop for World Cup 2026.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Philadelphia\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 9,
      name: 'Seattle',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Lumen Field',
      capacity: '69,000',
      description: 'Pacific Northwest beauty meets innovative culture with stunning mountain views and vibrant neighborhoods.',
      image: 'https://readdy.ai/api/search-image?query=Seattle%20Washington%20skyline%20with%20Mount%20Rainier%2C%20Space%20Needle%2C%20Pacific%20Northwest%20landscape%2C%20modern%20architecture%2C%20waterfront%20city&width=600&height=400&seq=seattle-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Seattle\'s natural beauty, innovative spirit, and passionate soccer culture create an ideal World Cup 2026 destination.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Seattle\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 10,
      name: 'San Francisco',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Levi\'s Stadium',
      capacity: '68,500',
      description: 'Tech innovation hub surrounded by natural beauty, from Golden Gate Bridge to wine country.',
      image: 'https://readdy.ai/api/search-image?query=San%20Francisco%20California%20skyline%20with%20Golden%20Gate%20Bridge%2C%20bay%20area%20landscape%2C%20tech%20city%2C%20hills%20and%20ocean%2C%20iconic%20architecture&width=600&height=400&seq=sf-skyline&orientation=landscape',
      fullContent: {
        introduction: 'San Francisco combines technological innovation with natural beauty for a unique World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about San Francisco\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 11,
      name: 'Boston',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'Gillette Stadium',
      capacity: '65,878',
      description: 'Historic New England charm meets academic excellence with cobblestone streets and world-class universities.',
      image: 'https://readdy.ai/api/search-image?query=Boston%20Massachusetts%20downtown%20skyline%2C%20historic%20architecture%2C%20New%20England%20cityscape%2C%20academic%20city%2C%20harbor%20area&width=600&height=400&seq=boston-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Boston\'s rich history, academic prestige, and New England charm provide a distinctive World Cup 2026 setting.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Boston\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 12,
      name: 'Toronto',
      country: 'Canada',
      flag: '🇨🇦',
      stadium: 'BMO Field',
      capacity: '45,500',
      description: 'Canada\'s largest city offers multicultural diversity, stunning lakefront views, and world-class hospitality.',
      image: 'https://readdy.ai/api/search-image?query=Toronto%20Canada%20downtown%20skyline%20with%20CN%20Tower%2C%20Lake%20Ontario%20waterfront%2C%20multicultural%20city%2C%20modern%20architecture%2C%20Canadian%20metropolis&width=600&height=400&seq=toronto-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Toronto\'s multicultural vibrancy and lakefront beauty create an exceptional World Cup 2026 destination.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Toronto\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 13,
      name: 'Vancouver',
      country: 'Canada',
      flag: '🇨🇦',
      stadium: 'BC Place',
      capacity: '54,500',
      description: 'Pacific coast paradise surrounded by mountains, ocean, and lush forests with mild climate year-round.',
      image: 'https://readdy.ai/api/search-image?query=Vancouver%20Canada%20skyline%20with%20mountains%2C%20Pacific%20Ocean%2C%20modern%20architecture%2C%20natural%20beauty%2C%20coastal%20city%2C%20British%20Columbia&width=600&height=400&seq=vancouver-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Vancouver\'s stunning natural setting and cosmopolitan culture offer an unforgettable World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Vancouver\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 14,
      name: 'Mexico City',
      country: 'Mexico',
      flag: '🇲🇽',
      stadium: 'Estadio Azteca',
      capacity: '87,523',
      description: 'Historic capital blends ancient Aztec heritage with modern metropolitan energy and incredible cuisine.',
      image: 'https://readdy.ai/api/search-image?query=Mexico%20City%20downtown%20skyline%2C%20historic%20architecture%2C%20Latin%20American%20metropolis%2C%20cultural%20capital%2C%20urban%20landscape%2C%20Mexican%20heritage&width=600&height=400&seq=mexico-city-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Mexico City\'s rich cultural heritage and vibrant energy create an extraordinary World Cup 2026 destination.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Mexico City\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 15,
      name: 'Guadalajara',
      country: 'Mexico',
      flag: '🇲🇽',
      stadium: 'Estadio Akron',
      capacity: '49,850',
      description: 'Cultural heart of Mexico showcases traditional mariachi music, tequila heritage, and colonial architecture.',
      image: 'https://readdy.ai/api/search-image?query=Guadalajara%20Mexico%20downtown%2C%20colonial%20architecture%2C%20traditional%20Mexican%20city%2C%20cultural%20heritage%2C%20historic%20buildings%2C%20mariachi%20culture&width=600&height=400&seq=guadalajara-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Guadalajara embodies authentic Mexican culture and traditions, offering a genuine World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Guadalajara\'s World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 16,
      name: 'Monterrey',
      country: 'Mexico',
      flag: '🇲🇽',
      stadium: 'Estadio BBVA',
      capacity: '53,500',
      description: 'Industrial powerhouse surrounded by dramatic mountain landscapes with modern amenities and business culture.',
      image: 'https://readdy.ai/api/search-image?query=Monterrey%20Mexico%20skyline%20with%20Cerro%20de%20la%20Silla%20mountain%2C%20modern%20architecture%2C%20industrial%20city%2C%20mountain%20backdrop%2C%20northeastern%20Mexico&width=600&height=400&seq=monterrey-skyline&orientation=landscape',
      fullContent: {
        introduction: 'Monterrey combines modern business culture with stunning mountain scenery for a unique World Cup 2026 experience.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed guide content will be available soon. Stay tuned for comprehensive information about Monterrey\'s World Cup 2026 experience.'
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={cityGuideSchema} />
      
      <Header />
      
      {/* Hero Section - Matching Stadiums Page */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=World%20Cup%202026%20host%20cities%20montage%2C%20North%20American%20skylines%2C%20diverse%20metropolitan%20areas%2C%20international%20football%20destinations%2C%20urban%20landscapes%20across%20USA%20Canada%20Mexico&width=1920&height=800&seq=host-cities-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-map-pin-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Host Cities</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Every City,
              <br />
              <span className="text-gold-400">Every Experience</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Discover the 16 incredible destinations hosting World Cup 2026. From New York's energy to Mexico City's culture, 
              each city offers a unique football experience across North America.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Host Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">3</div>
              <div className="text-slate-300 font-inter text-sm">Countries</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">104</div>
              <div className="text-slate-300 font-inter text-sm">Total Matches</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">48</div>
              <div className="text-slate-300 font-inter text-sm">Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Cities Grid - 2 Column Layout */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              World Cup 2026 Host Cities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Explore comprehensive guides for each destination hosting the world's greatest football tournament.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hostCities.map((city) => (
              <Card key={city.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={city.image}
                    alt={`${city.name} skyline`}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <span>{city.flag}</span>
                    <span>{city.country}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-3">
                    {city.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {city.description}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Stadium</div>
                        <div className="font-semibold text-navy-900 dark:text-white">{city.stadium}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Capacity</div>
                        <div className="font-semibold text-emerald-600">{city.capacity}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer"
                    onClick={() => openCityModal(city)}
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

      {/* City Modal - Travel Tips Style */}
      {isModalOpen && selectedCity && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedCity.image} 
                  alt={selectedCity.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                    <span>{selectedCity.flag}</span>
                    <span>{selectedCity.country}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-500 text-sm font-medium">Host City Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedCity.stadium}</span>
                    <span>•</span>
                    <span>{selectedCity.capacity} capacity</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedCity.name}, {selectedCity.country}
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedCity.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedCity.fullContent?.sections.map((section, index) => (
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
                        Comprehensive city guides with detailed information about accommodations, transportation, attractions, and local tips will be available soon.
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
