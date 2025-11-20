
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateItemListSchema, generateCollectionPageSchema } from '../../components/seo/SchemaOrg';
import { FAQPageSchema } from '../../components/seo/FAQPageSchema';
import { OptimizedImage } from '../../components/base/OptimizedImage';
import { WorldClassFAQ } from '../../components/feature/WorldClassFAQ';

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
  alt?: string;
  fullContent: FullContent;
}

export default function CitiesPage() {
  const [selectedCity, setSelectedCity] = useState<HostCity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
    document.title = 'World Cup 2026 Host Cities: Travel Guide to All 16 Cities in USA, Canada & Mexico | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete guide to all 16 World Cup 2026 host cities. Explore New York, Los Angeles, Miami, Mexico City, Toronto, Vancouver and more. Find hotels, attractions, and travel tips.');
    }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities`);
  }

  // Set OG/Twitter image for social previews
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const ogImageUrl = `${siteUrl}/images/cities/new-york-new-jersey-world-cup-2026.webp`;
  const setMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setMeta('og:image', ogImageUrl);
  setMeta('twitter:image', ogImageUrl);
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    'World Cup 2026 Host Cities',
    'Complete guide to all 16 World Cup 2026 host cities across USA, Canada, and Mexico with travel information, hotels, and attractions.',
    `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-host-cities`
  );

  // Function to convert city name to route slug
  const getCityRoute = (cityName: string): string => {
    const routeMap: { [key: string]: string } = {
      // Route NYC/NJ card to the original New York City travel guide page
  'New York / New Jersey': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
  'New York City': '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
      'Los Angeles': '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
      'Miami': '/world-cup-2026-host-cities/miami-world-cup-2026-guide',
      'Kansas City': '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide',
      'Houston': '/world-cup-2026-host-cities/houston-world-cup-2026-guide',
      'Dallas': '/world-cup-2026-host-cities/dallas-world-cup-2026-guide',
      'San Francisco': '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide',
      'Atlanta': '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide',
      'Seattle': '/world-cup-2026-host-cities/seattle-world-cup-2026-guide',
      'Toronto': '/world-cup-2026-host-cities/toronto-world-cup-2026-guide',
      'Vancouver': '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide',
      'Monterrey': '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide',
      // Add more cities as they become available
    };
    
    return routeMap[cityName] || `/world-cup-2026-host-cities/${cityName.toLowerCase().replace(/\s+/g, '-')}`;
  };

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
      name: 'New York / New Jersey',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'MetLife Stadium, East Rutherford, NJ',
      capacity: '82,500',
      description: "Where champions are crowned. The 2026 Final comes to the world's biggest stage—82,500 fans, 30 minutes from Times Square, and football's ultimate moment. Navigate NJ Transit from Manhattan, explore diverse NYC neighborhoods where every nation has a home, and discover why this metropolitan area delivers the World Cup's most electric atmosphere.",
      image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
      fullContent: {
        introduction: `The World's Biggest Game Comes to the World's Biggest Stage`,
        sections: [
          {
            title: 'New York City: Your Ultimate 2026 FIFA World Cup Travel Guide',
            content: `When the final whistle blows on July 19, 2026, football history will be made just across the Hudson River from Manhattan. New York and New Jersey are hosting the FIFA World Cup Final—and seven other matches—making this region the epicenter of the beautiful game's most anticipated summer in decades. Whether you're here to witness the crowning moment or soak up the electric atmosphere across multiple match days, the New York metropolitan area offers everything a football fan could dream of: world-class infrastructure, unbeatable energy, and a cultural experience that extends far beyond the pitch.`
          },
          {
            title: 'Why New York/New Jersey Won the World Cup Final',
            content: `MetLife Stadium in East Rutherford, New Jersey, beat out Los Angeles and Dallas to host the ultimate match on July 19, 2026. The region will host eight total matches throughout the tournament, with projections of over $2 billion in economic impact and more than 1 million visitors expected.

This isn't just about a stadium—it's about the entire New York experience. The region has five airports servicing 181 countries, more hotels under construction than exist in other candidate cities combined, and MetLife Stadium's proven track record of hosting two million guests annually. FIFA knew what every traveler knows: there's no place on Earth quite like New York City.`
          },
          {
            title: 'The Stadium: MetLife Stadium (New York New Jersey Stadium)',
            content: `The Venue That Broke Records

MetLife Stadium opened in 2010 with a construction cost of $1.6 billion, making it the most expensive stadium in U.S. history at completion. With a capacity of 82,500 seats for World Cup matches (including 10,005 club seats and approximately 218 luxury suites), it's the largest NFL stadium and the biggest World Cup venue in the United States.

During the tournament, FIFA will refer to the venue as "New York New Jersey Stadium" due to sponsorship policies. The stadium underwent significant renovations specifically for the World Cup. In January 2024, officials announced plans to remove 1,740 permanent seats to widen the field to meet FIFA regulations, replacing them with modular seating after the tournament.`
          },
          {
            title: 'Match Schedule at MetLife Stadium',
            content: `Eight matches will be played here, beginning June 13 and culminating with the Final on July 19, 2026. The schedule includes:

- Group Stage Matches: June 13, 16, 22, 26, 29
- Round of 32: July 3
- Round of 16: July 8
- The Final: July 19, 2026

FIFA has confirmed the final will feature an elaborate halftime show modeled after the Super Bowl, with Times Square serving as a central hub for celebrations during the final weekend.`
          },
          {
            title: 'What Makes This Stadium Special',
            content: `MetLife Stadium has hosted six Super Bowls, major soccer friendlies, and concerts featuring Taylor Swift, Beyoncé, and the Rolling Stones. The stadium hosted nine matches during the 2025 FIFA Club World Cup, including the final, and previously hosted the Copa América Centenario final in 2016—proving it can handle the world's biggest football moments.

The stadium sits just 10 miles from Midtown Manhattan, making it genuinely accessible. Located in East Rutherford, New Jersey, MetLife Stadium is situated 10 miles west of New York City, connected by direct public transit that runs specifically for major events.`
          },
          {
            title: 'Getting There: Transportation Made Easy',
            content: `From International Airports

New York's three major airports make this one of the most accessible World Cup destinations globally:

- John F. Kennedy International (JFK): The primary international gateway, about 26 miles from MetLife Stadium 
- Newark Liberty International (EWR): The closest major airport, approximately 15-20 miles from the stadium 
- LaGuardia (LGA): Mainly domestic flights, about 18 miles from the stadium 

All three airports connect to Manhattan via various options, where you can then catch direct transit to MetLife Stadium.

Direct Stadium Access: The Smart Way

The Best Option: NJ Transit Train

The fastest and most cost-effective route is taking an NJ Transit train from Penn Station New York (located at 32nd Street between 7th and 8th Avenues) to Secaucus Junction, then transferring to a shuttle train directly to Meadowlands Rail Station. For large events, NJ Transit offers special train service from Secaucus Junction directly to Meadowlands Rail Station, just steps away from MetLife Stadium. 

The entire journey takes roughly 30 minutes from Midtown Manhattan, and trains run frequently on match days. NJ Transit operates the Meadowlands Rail Service for events with anticipated attendance above 50,000, delivering guests directly to the front door of MetLife Stadium. 

Budget-Friendly Bus Option 

The Coach USA 351 Meadowlands Express provides door-to-door round-trip transportation from the Port Authority Bus Terminal in New York City to MetLife Sports Complex. Bus service begins three hours prior to event start time, making it perfect for pre-match atmosphere-building. 

Pro Traveler Tip: Book your NJ Transit tickets through their mobile app ahead of time. On match days, expect crowds but efficient service—New Yorkers know how to move people.`
          },
          {
            title: 'Where to Stay: Neighborhood Guide for World Cup Visitors',
            content: `The beauty of New York is choice. You can stay in the heart of Manhattan's buzz or opt for quieter Brooklyn brownstone neighborhoods—both offer excellent transit connections to MetLife Stadium. 

Midtown Manhattan: Maximum Convenience 

Why Stay Here: Direct access to Penn Station means you're 30 minutes from kickoff. You're also in the center of everything NYC offers—Broadway, restaurants, Central Park, and more.`
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Los Angeles',
      country: 'USA',
      flag: '🇺🇸',
      stadium: 'SoFi Stadium, Inglewood, CA',
      capacity: '70,240',
      description: 'Where $5.5 billion meets global football. LA\'s architectural masterpiece—SoFi Stadium—hosts eight World Cup matches in the world\'s entertainment capital. The most expensive venue ever built features a hovering translucent roof and 120-yard Infinity Screen. Located in Inglewood near LAX, plan Metro connections or rideshares. Explore Hollywood, beaches (30 min away), and why LA\'s sprawling diversity means every team has a neighborhood. This is spectacle, California-style.',
      image: '/images/cities/los-angeles-world-cup-2026.webp',
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
      stadium: 'Hard Rock Stadium, Miami Gardens, FL',
      capacity: '65,326',
      description: 'Where innovation beats the heat. Hard Rock\'s $550 million canopy covers every fan while leaving the field exposed—you stay cool in 95°F, players sweat. Six World Cup matches in Miami Gardens (20 miles from South Beach, car required). Formula 1 races here. Six Super Bowls hosted. Explore Little Havana\'s Cuban soul, Art Deco architecture, world-class nightlife, and why Miami\'s Latin passion makes every match feel like a home game. Bring sunscreen. Expect afternoon thunderstorms. Worth it.',
      image: '/images/cities/miami-world-cup-2026.webp',
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
      stadium: 'AT&T Stadium, Arlington, TX',
      capacity: '80,000',
      description: 'Texas does football different. Jerry Jones\' $1.3 billion palace hosts NINE World Cup matches including a Semifinal—more than any other venue. That 60-yard video board hanging overhead? Larger than a basketball court. Retractable roof? Opens to Texas skies or closes for air-conditioned luxury in 100°F heat. Located in Arlington between Dallas and Fort Worth, "Jerry World" delivers Texas hospitality, world-class BBQ, and stakes that matter. Everything\'s bigger here. Including the ambition.',
      image: '/images/cities/dallas-world-cup-2026.webp',
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
      stadium: 'Arrowhead Stadium, Kansas City, MO',
      capacity: '76,416',
      description: 'The loudest stadium on Earth. Literally. Arrowhead holds the Guinness World Record at 142.2 decibels—louder than jet engines, measured on seismographs during "Beast Quake" games. Chiefs Kingdom\'s "12th Man" tradition creates an open-air thunder dome where 76,000 fans weaponize noise. Four World Cup matches in the heartland. Legendary tailgates (arrive 6 hours early). World-class BBQ (burnt ends, ribs). No Metro—drive and embrace parking lot culture. This is real America football at its most visceral.',
      image: '/images/cities/kansas-city-world-cup-2026.webp',
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
      stadium: 'NRG Stadium, Houston, TX',
      capacity: '72,220',
      description: 'America\'s most diverse city hosts the world\'s game. Houston\'s 145+ languages mean every World Cup team already has a neighborhood, a restaurant, and passionate supporters. NRG Stadium\'s engineering marvel: natural grass that rolls outside on tracks to grow, plus a retractable roof defeating Texas summer heat. Two Super Bowls hosted. METRORail Red Line accessible. Explore Space City innovation, Tex-Mex meets global cuisines, and why Houston\'s unpretentious diversity guarantees every match feels like a home game.',
      image: '/images/cities/houston-world-cup-2026.webp',
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
      stadium: 'Mercedes-Benz Stadium, Atlanta, GA',
      capacity: '71,000',
      description: 'A roof that opens like a camera lens. Food that costs $5. A city that moves culture. Mercedes-Benz Stadium (2017) revolutionized stadiums with its 8-petal blooming roof, game-changing concession prices ($5 food, $2 drinks), and LEED Platinum sustainability. Six World Cup matches via MARTA. Super Bowl 53 hosted. Explore downtown Atlanta\'s civil rights history, hip-hop heartbeat, and why "The Benz" represents the future of football venues. Innovation you can see. Affordability you can feel.',
      image: '/images/cities/atlanta-world-cup-2026.webp',
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
      stadium: 'Lincoln Financial Field, Philadelphia, PA',
      capacity: '69,596',
      description: 'They booed Santa. They won a Super Bowl. They\'ll make World Cup unforgettable. Lincoln Financial Field brings South Philly\'s legendary intensity to five matches—where Eagles fans\' notorious passion (they literally had a jail in the old stadium) meets 1776 American history. Super Bowl 52 champions. Direct SEPTA Broad Street Line access. Explore Independence Hall, Rocky Steps, authentic cheesesteak culture, and discover why this blue-collar city\'s no-nonsense attitude creates the most authentic football atmosphere in America.',      image: '/images/cities/philadelphia-world-cup-2026.webp',
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
      stadium: 'Lumen Field, Seattle, WA',
      capacity: '69,000',
      description: 'The loudest fans. The most beautiful views. The only stadium to cause earthquakes. Lumen Field\'s "12th Man" tradition created seismic readings in 2011 and 2013—noise so intense it registered on monitors. Engineered with a partial roof that traps sound, this waterfront fortress opens north to Puget Sound and Olympic Mountain vistas. Sounders MLS champions. Link Light Rail connected. Explore Seattle\'s Pioneer Square, Pike Place Market, and why this coffee-powered, tech-savvy city brings Pacific Northwest intensity.',
      image: '/images/cities/seattle-world-cup-2026.webp',
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
      stadium: 'Levi\'s Stadium, Santa Clara, CA',
      capacity: '68,500',
      description: 'Silicon Valley built a stadium and loaded it with tech. World\'s first comprehensive stadium app (order food, watch replays, track stats from your seat). Fastest Wi-Fi in sports. LEED Gold design with solar panels. Super Bowl 50 and College Football Playoff Championship hosted. Six World Cup matches between San Francisco and San Jose—navigate Caltrain/VTA Light Rail, understand the west-facing sun challenge, and discover why the Bay Area\'s tech capital does football its own innovative way.',
      image: '/images/cities/san-francisco-world-cup-2026.webp',
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
      stadium: 'Gillette Stadium, Foxborough, MA',
      capacity: '65,878',
      description: 'The house that Brady built. Six Super Bowl championships in 20 years transformed Gillette Stadium into the NFL\'s dynasty headquarters—where "Do Your Job" became New England\'s mantra. A lighthouse guards the entrance. Patriot Place wraps the venue. Five World Cup matches in Foxborough, 30 miles south of Boston via MBTA Commuter Rail (limited service) or car. Explore Revolutionary War history, New England Revolution (MLS) culture, Patriots Hall of Fame, and why six states consider this hallowed ground.',
      image: '/images/cities/boston-world-cup-2026.webp',
      alt: 'Boston skyline – World Cup 2026 host city',
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
      stadium: 'BMO Field, Toronto, ON',
      capacity: '45,736',
      description: 'Canada\'s soccer story starts here. BMO Field—the nation\'s first purpose-built football stadium (2007)—hosts six World Cup matches including Canada\'s historic home fixtures after 36 years away from the tournament. Temporarily expanded from 28,500 to 45,736 seats along Toronto\'s Lake Ontario waterfront. Where Toronto FC won the 2017 MLS Cup treble. Where the "Reds" roar. Where 200+ ethnic communities guarantee every team finds supporters. TTC streetcar, GO Transit, CN Tower views, Liberty Village nearby. Explore the world\'s most multicultural city at its proudest moment.',
      image: '/images/cities/toronto-world-cup-2026.webp',
      alt: 'Toronto skyline with CN Tower – World Cup 2026 host city',
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
      stadium: 'BC Place, Vancouver, BC',
      capacity: '54,500',
      description: `Where mountains meet the pitch. BC Place's retractable roof—the world's largest cable-supported system—opens in 20 minutes to reveal snow-capped peaks and Pacific skies. Hosted the 2015 FIFA Women's World Cup Final and 2010 Olympics ceremonies. Five matches in downtown Vancouver, steps from Stadium-Chinatown SkyTrain. Rebuilt in 2011 with cutting-edge technology. Explore Yaletown's waterfront, Gastown's cobblestones, and why this multicultural city between mountains and ocean delivers Canada's most spectacular World Cup setting.`,
      image: '/images/cities/vancouver-world-cup-2026.webp',
      alt: 'Vancouver skyline with mountains – World Cup 2026 host city',
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
      stadium: 'Estadio Azteca, Mexico City',
      capacity: '87,523',
      description: `Football's most sacred ground. The only stadium to host TWO World Cup finals (1970, 1986) returns for 2026. Stand where Pelé lifted the Jules Rimet Trophy and Maradona danced through England with his "Hand of God" and "Goal of the Century." Five matches at 7,200 feet altitude in history's most legendary arena. Mexico City Metro accessible. Explore ancient Aztec ruins, world-class museums, tacos al pastor at 2 AM, and why this 22-million-person megalopolis brings unmatched passion, history, and thin-air football.`,
      image: '/images/cities/mexico-city-world-cup-2026.webp',
      alt: 'Mexico City skyline – World Cup 2026 host city',
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
      stadium: 'Estadio Akron, Guadalajara, Jalisco',
      capacity: '49,850',
      description: `Where Mexico's soul lives. Estadio Akron (2010)—home to Chivas, the only club fielding exclusively Mexican players—brings four World Cup matches to Guadalajara, birthplace of mariachi and tequila. This intimate 49,850-seat bowl amplifies "El Rebaño Sagrado" (The Sacred Herd) passion beneath Sierra Madre mountain backdrops. Opened as Estadio Omnilife, rebranded Akron, always pure Tapatío pride. Explore Mexico's second-largest city, historic centro, nearby Tequila town distilleries, and why Jalisco's cultural traditions and football devotion run deeper than anywhere else in Mexico.`,
      image: '/images/cities/guadalajara-world-cup-2026.webp',
      alt: 'Guadalajara skyline – World Cup 2026 host city',
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
      stadium: 'Estadio BBVA, Monterrey, NL',
      capacity: '53,500',
      description: `Mexico's newest World Cup stage against its oldest mountain. Opened in 2015, Estadio BBVA's striking steel-and-glass bowl rises beneath the iconic Cerro de la Silla backdrop. Steep stands create intimate intensity for 53,500 fans. Explore Monterrey's industrial heartland, norteño food culture (cabrito, carne asada), and why Rayados' passionate following creates atmosphere that rivals anywhere in Mexico. Modern design meets northern Mexican grit in the country's most photogenic stadium setting.`,
      image: '/images/cities/monterrey-world-cup-2026.webp',
      alt: 'Monterrey skyline – World Cup 2026',
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

  // Build ItemList and CollectionPage JSON-LD for Host Cities
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const itemListItems = hostCities.map((city) => ({
    name: city.name,
    url: `${siteUrl}${getCityRoute(city.name)}`,
    // Pass relative image path; generator will make it absolute
    image: city.image,
  }));

  const itemListSchema = generateItemListSchema(itemListItems);
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'World Cup 2026 Host Cities Guide',
    description:
      'Complete travel guide to all 16 World Cup 2026 host cities across USA, Canada, and Mexico. Explore hotels, transportation, neighborhoods, attractions, and matchday tips.',
    url: `${siteUrl}/world-cup-2026-host-cities`,
    image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
    items: itemListItems,
  });

  // FAQ data for schema markup
  const faqData = [
    {
      question: "Which city will host the most World Cup 2026 matches?",
      answer: "New York/New Jersey's MetLife Stadium and Los Angeles' SoFi Stadium are expected to host the most matches, including potential knockout rounds. Dallas' AT&T Stadium will also host multiple group stage and elimination matches. The final match allocation will be announced by FIFA in 2025."
    },
    {
      question: "What is the cheapest World Cup 2026 host city to visit?",
      answer: "Kansas City typically offers the most affordable accommodation and dining among US host cities, with average hotel rates 40-50% lower than coastal destinations. In Mexico, Monterrey provides excellent value, while Guadalajara balances affordability with cultural experiences. Expect prices to surge during match days regardless of destination."
    },
    {
      question: "Can I visit multiple World Cup 2026 cities during the tournament?",
      answer: "Yes, many fans plan multi-city trips. The tournament runs from June 11 to July 19, 2026, providing 39 days to visit multiple destinations. Popular combinations include West Coast routes (LA-SF-Seattle), the Texas duo (Dallas-Houston), and Mexico's three cities. Book internal flights early as prices will increase closer to the tournament."
    },
    {
      question: "Which World Cup 2026 host city has the best public transportation?",
      answer: "Toronto, New York, and Vancouver offer the most comprehensive public transit systems among host cities. Mexico City's Metro is extensive and affordable. In contrast, cities like Dallas, Houston, and Los Angeles require rental cars or ride-sharing for convenient stadium access."
    },
    {
      question: "Are any World Cup 2026 host cities unsafe for tourists?",
      answer: "All 16 host cities are generally safe for tourists, though certain neighborhoods require caution. Exercise standard travel precautions in any large city. Mexico City, Guadalajara, and Monterrey are safe in tourist areas and near stadiums, with increased security expected during the tournament. Check our individual city safety guides for neighborhood-specific advice."
    },
    {
      question: "When should I book accommodation for World Cup 2026?",
      answer: "Book as early as possible—ideally 12-18 months before your travel dates. Hotels near stadiums in popular cities like New York, Los Angeles, and Miami will sell out quickly once the match schedule is announced. Consider accommodation 30-60 minutes from stadiums for better availability and rates."
    },
    {
      question: "Which World Cup 2026 host city is best for families?",
      answer: "Seattle, San Francisco Bay Area, and Boston offer family-friendly environments with diverse attractions beyond football. Canada's Toronto and Vancouver provide safe, clean cities with activities for all ages. These destinations combine excellent stadiums with museums, parks, and cultural experiences suitable for children."
    },
    {
      question: "Do I need a visa to visit all World Cup 2026 host cities?",
      answer: "Visa requirements vary by nationality. US cities require a valid US visa or ESTA for most international visitors. Canada requires an eTA or visa. Mexico has separate visa requirements. If planning a multi-country trip, research visa requirements for your nationality well in advance, as processing times can exceed 6 months during peak periods."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={cityGuideSchema} />
      <SchemaOrg schema={itemListSchema} />
      <SchemaOrg schema={collectionPageSchema} />
      <FAQPageSchema 
        title="Frequently Asked Questions About World Cup 2026 Host Cities"
        description="The 2026 FIFA World Cup features 16 host cities across three countries: 11 cities in the United States, 2 in Canada, and 3 in Mexico. This marks the first World Cup hosted by three nations simultaneously, with a total of 104 matches across 16 stadiums from June 11 to July 19, 2026."
        faqs={faqData}
      />
      
      <Header />
      
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
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
                  <span className="text-slate-900 dark:text-white font-medium">World Cup 2026 Host Cities</span>
                </nav>
              </div>
              <div className="mb-12">
                <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                  World Cup 2026 Host Cities: Travel Guide to All 16 Cities in USA, Canada & Mexico
                </h1>
                <div className="text-center mb-6">
                  <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                    World Cup 2026 Host Cities: Complete Travel Guide (16)
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Planning your World Cup 2026 trip? Explore all 16 host cities with insider tips on accommodation, transport, neighborhoods, and the best match day experiences. Start here! Each of these incredible cities features world-class stadiums that will host unforgettable World Cup 2026 matches.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-emerald-200/50 dark:hover:border-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-700">16</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Cities</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">3</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Countries</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-sky-600 dark:group-hover:from-blue-400 dark:group-hover:to-sky-400 transition-all duration-700">104</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Matches</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-orange-200/50 dark:hover:border-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">48</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Teams</div>
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
                Select Your Destination
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Click any city for complete guides covering accommodation, transport, top attractions, safety tips, best neighborhoods, and where to watch matches beyond the stadium.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {hostCities.map((city, index) => (
                <div
                  key={city.id}
                  className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    {(() => {
                      const base = city.image.replace(/\.(webp|jpg|jpeg|png)$/i, '');
                      const small = `${base}-640.webp`;
                      const medium = `${base}-1024.webp`;
                      const large = `${base}-1600.webp`;
                      return (
                        <picture>
                          <source srcSet={large} media="(min-width: 1024px)" type="image/webp" />
                          <source srcSet={medium} media="(min-width: 640px)" type="image/webp" />
                          <img
                            src={small}
                            alt={city.alt || `${city.name} skyline – World Cup 2026 host city`}
                            loading={index < 2 ? 'eager' : 'lazy'}
                            fetchPriority={index < 2 ? 'high' : 'auto'}
                            decoding="async"
                            width={1600}
                            height={900}
                            sizes="100vw"
                            className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-1000"
                          />
                        </picture>
                      );
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                      <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-0.5">
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                              <i className="ri-map-pin-line text-white text-sm"></i>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                                {city.stadium.split(',')[0]}
                              </div>
                              <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                                {city.stadium.split(',').slice(1).join(',').trim()}
                              </div>
                            </div>
                          </div>
                          <div className="text-right ml-3 flex-shrink-0">
                            <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                              {city.capacity.replace(/,/g, '').toLocaleString()}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">
                              Capacity
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                      <div className="flex flex-col items-end space-y-1.5 md:space-y-2">
                        {city.name === 'New York / New Jersey' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              8 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Los Angeles' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              8 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Miami' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              6 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Dallas' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              9 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Kansas City' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              4 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Houston' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              4 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Atlanta' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              6 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Philadelphia' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              5 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Seattle' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              5 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'San Francisco' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              6 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Boston' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              5 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Vancouver' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              5 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Mexico City' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              5 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Guadalajara' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              4 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Monterrey' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              4 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'Toronto' && (
                          <div className="order-1">
                            <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                              6 Matches
                            </div>
                          </div>
                        )}
                        {city.name === 'New York / New Jersey' && (
                          <div className="order-2">
                            <div className="bg-gradient-to-r from-amber-400/75 via-yellow-400/75 to-orange-500/75 text-black/80 px-2 py-1 rounded-lg text-[11px] font-bold backdrop-blur-sm shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                              <i className="ri-trophy-fill text-[11px]"></i><span className="tracking-wide">WORLD CUP FINAL</span>
                            </div>
                          </div>
                        )}
                        {city.name === 'Dallas' && (
                          <div className="order-2">
                            <div className="bg-purple-500/75 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[11px] font-bold shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                              <i className="ri-medal-fill text-[11px]"></i><span className="tracking-wide">WORLD CUP SEMI</span>
                            </div>
                          </div>
                        )}
                        {city.name === 'Toronto' && (
                          <div className="order-2">
                            <div className="bg-gradient-to-r from-red-500/75 via-rose-500/75 to-pink-500/75 text-white px-2 py-1 rounded-lg text-[11px] font-bold backdrop-blur-sm shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                              <i className="ri-flag-fill text-[11px]"></i><span className="tracking-wide">CANADA HOME</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
                      {city.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                      {city.description}
                    </p>
                    <Button 
                      variant="primary" 
                      size="lg" 
                      fullWidth
                      className="whitespace-nowrap cursor-pointer mt-auto font-space font-semibold text-base md:text-lg rounded-2xl py-3 md:py-4 group-hover:scale-105 transition-transform duration-500"
                      onClick={() => {
                        navigate(getCityRoute(city.name));
                      }}
                    >
                      <i className="ri-compass-3-line mr-3 text-lg"></i>
                      {city.name === 'New York / New Jersey' ? 'Plan Your NYC Journey' : (city.name === 'Los Angeles' ? 'Discover LA Guide' : `Explore ${city.name}`)}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 pt-0 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 p-6 sm:p-8 md:p-16 lg:p-20">
              {/* Apple-Level Premium Header */}
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl mb-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl border border-white/20">
                  <i className="ri-compass-3-line text-2xl sm:text-3xl md:text-4xl text-white"></i>
                </div>
                <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-navy-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                  Plan Your World Cup 2026 Journey
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light">
                  Attending multiple matches? Here are popular city combinations that maximize your World Cup experience:
                </p>
              </div>

              {/* Apple-Level Luxury Feature Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                {/* East Coast Circuit - Apple-Level Luxury Card */}
                <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-emerald-500/20 hover:shadow-3xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3">
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-3xl group-hover:from-emerald-400/25 group-hover:scale-110 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon with Animation */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                        <i className="ri-football-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                        East Coast Circuit
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      Start in <a href="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</a>, explore <a href="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Philadelphia</a>, and finish in <a href="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</a>
                    </p>
                  </div>
                </div>

                {/* West Coast Adventure - Apple-Level Luxury Card */}
                <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-purple-500/20 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-3">
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-3xl group-hover:from-purple-400/25 group-hover:scale-110 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon with Animation */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-500">
                        <i className="ri-building-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                        West Coast Adventure
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      Begin in <a href="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</a>, head to <a href="/world-cup-2026-host-cities/san-francisco" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</a>, then north to <a href="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional City Combinations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                {/* Mexico Experience - Apple-Level Luxury Card */}
                <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-orange-500/20 hover:shadow-3xl hover:shadow-orange-500/30 transition-all duration-700 hover:-translate-y-3">
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/15 to-transparent rounded-full blur-3xl group-hover:from-orange-400/25 group-hover:scale-110 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon with Animation */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-orange-500/30 group-hover:shadow-orange-500/50 group-hover:scale-110 transition-all duration-500">
                        <i className="ri-football-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                        Mexico Experience
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      Discover <a href="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</a>, <a href="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</a>, and <a href="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</a>
                    </p>
                  </div>
                </div>

                {/* Cross-Border Journey - Apple-Level Luxury Card */}
                <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-blue-500/20 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-700 hover:-translate-y-3">
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-transparent rounded-full blur-3xl group-hover:from-blue-400/25 group-hover:scale-110 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Icon with Animation */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-500">
                        <i className="ri-building-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                        Cross-Border Journey
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      Connect <a href="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</a> with <a href="/world-cup-2026-host-cities/vancouver" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Vancouver</a> for an unforgettable Pacific Northwest experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a href="/world-cup-2026-stadiums" className="inline-flex items-center justify-center font-space font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 hover:scale-105 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg">
                  <span>Explore All World Cup Stadiums</span>
                  <i className="ri-arrow-right-line ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                </a>
              </div>
            </div>
        </div>
        </div>

      {/* World-Class FAQ Section */}
      <WorldClassFAQ 
        faqs={[
          {
            id: 1,
            question: "Which city will host the most World Cup 2026 matches?",
            answer: "New York/New Jersey's MetLife Stadium and Los Angeles' SoFi Stadium are expected to host the most matches, including potential knockout rounds. Dallas' AT&T Stadium will also host multiple group stage and elimination matches. The final match allocation will be announced by FIFA in 2025.",
            category: "Stadium Information",
            popularity: 10,
            readingTime: 2
          },
          {
            id: 2,
            question: "What is the cheapest World Cup 2026 host city to visit?",
            answer: "Kansas City typically offers the most affordable accommodation and dining among US host cities, with average hotel rates 40-50% lower than coastal destinations. In Mexico, Monterrey provides excellent value, while Guadalajara balances affordability with cultural experiences. Expect prices to surge during match days regardless of destination.",
            category: "Budget & Costs",
            popularity: 9,
            readingTime: 3
          },
          {
            id: 3,
            question: "Can I visit multiple World Cup 2026 cities during the tournament?",
            answer: "Yes, many fans plan multi-city trips. The tournament runs from June 11 to July 19, 2026, providing 39 days to visit multiple destinations. Popular combinations include West Coast routes (LA-SF-Seattle), the Texas duo (Dallas-Houston), and Mexico's three cities. Book internal flights early as prices will increase closer to the tournament.",
            category: "Travel Planning",
            popularity: 8,
            readingTime: 3
          },
          {
            id: 4,
            question: "Which World Cup 2026 host city has the best public transportation?",
            answer: "Toronto, New York, and Vancouver offer the most comprehensive public transit systems among host cities. Mexico City's Metro is extensive and affordable. In contrast, cities like Dallas, Houston, and Los Angeles require rental cars or ride-sharing for convenient stadium access.",
            category: "Transportation",
            popularity: 8,
            readingTime: 2
          },
          {
            id: 5,
            question: "Are any World Cup 2026 host cities unsafe for tourists?",
            answer: "All 16 host cities are generally safe for tourists, though certain neighborhoods require caution. Exercise standard travel precautions in any large city. Mexico City, Guadalajara, and Monterrey are safe in tourist areas and near stadiums, with increased security expected during the tournament. Check our individual city safety guides for neighborhood-specific advice.",
            category: "Safety & Security",
            popularity: 7,
            readingTime: 3
          },
          {
            id: 6,
            question: "When should I book accommodation for World Cup 2026?",
            answer: "Book as early as possible—ideally 12-18 months before your travel dates. Hotels near stadiums in popular cities like New York, Los Angeles, and Miami will sell out quickly once the match schedule is announced. Consider accommodation 30-60 minutes from stadiums for better availability and rates.",
            category: "Accommodation",
            popularity: 9,
            readingTime: 2
          },
          {
            id: 7,
            question: "Which World Cup 2026 host city is best for families?",
            answer: "Seattle, San Francisco Bay Area, and Boston offer family-friendly environments with diverse attractions beyond football. Canada's Toronto and Vancouver provide safe, clean cities with activities for all ages. These destinations combine excellent stadiums with museums, parks, and cultural experiences suitable for children.",
            category: "Family Travel",
            popularity: 7,
            readingTime: 3
          },
          {
            id: 8,
            question: "Do I need a visa to visit all World Cup 2026 host cities?",
            answer: "Visa requirements vary by nationality. US cities require a valid US visa or ESTA for most international visitors. Canada requires an eTA or visa. Mexico has separate visa requirements. If planning a multi-country trip, research visa requirements for your nationality well in advance, as processing times can exceed 6 months during peak periods.",
            category: "Visa & Documentation",
            popularity: 6,
            readingTime: 3
          }
        ]}
        title="Frequently Asked Questions About World Cup 2026 Host Cities"
        subtitle="The 2026 FIFA World Cup features 16 host cities across three countries: 11 cities in the United States, 2 in Canada, and 3 in Mexico. This marks the first World Cup hosted by three nations simultaneously, with a total of 104 matches across 16 stadiums from June 11 to July 19, 2026."
        showCategories={true}
        showSearch={true}
        locationSpecific={true}
      />

      </section>

      {/* City Modal - Travel Tips Style */}
      {isModalOpen && selectedCity && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage 
                  src={selectedCity.image} 
                  alt={selectedCity.alt || `${selectedCity.name} skyline`}
                  className="absolute inset-0"
                  imgClassName="object-cover"
                  width={1600}
                  height={900}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-8">
                  {selectedCity.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedCity.fullContent?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
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
