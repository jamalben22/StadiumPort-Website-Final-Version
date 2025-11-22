
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { useEffect, useState } from 'react';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateItemListSchema, generateCollectionPageSchema } from '../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../components/base/OptimizedImage';
import { WorldClassFAQ } from '../../components/feature/WorldClassFAQ';

export default function VenuesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Stadiums');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Stadium slug mapping for navigation
  const getStadiumSlug = (venue: any) => {
    const slugMap: { [key: number]: string } = {
      1: 'estadio-azteca',
      2: 'metlife-stadium', 
      3: 'att-stadium',
      4: 'arrowhead-stadium',
      5: 'estadio-bbva',
      6: 'nrg-stadium',
      7: 'mercedes-benz-stadium',
      8: 'sofi-stadium',
      9: 'lumen-field',
      10: 'levis-stadium',
      11: 'lincoln-financial-field',
      13: 'hard-rock-stadium',
      12: 'gillette-stadium',
      14: 'bmo-field',
      15: 'bc-place-stadium',
      16: 'estadio-akron'
    };
    return slugMap[venue.id];
  };

  const handleReadFullGuide = (venue: any) => {
    const slug = getStadiumSlug(venue);
    if (slug) {
      navigate(`/world-cup-2026-stadiums/${slug}`);
    }
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete guide to all 16 World Cup 2026 stadiums including MetLife, SoFi, Estadio Azteca. Get transport routes, capacity, location, matchday tips for every venue.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-stadiums`);
    }

    // Set social meta (title/description) and preview images
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    const img = `${siteUrl}/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp`;
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues');

    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Complete guide to all 16 World Cup 2026 stadiums including MetLife, SoFi, Estadio Azteca. Get transport routes, capacity, location, matchday tips for every venue.');
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', img);

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', img);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues');

    let twitterDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', 'Complete guide to all 16 World Cup 2026 stadiums including MetLife, SoFi, Estadio Azteca. Get transport routes, capacity, location, matchday tips for every venue.');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Stadiums', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-stadiums` }
  ]);

  // Helper: map each stadium to its host city route and display label
  const getHostCityLinkForVenue = (venue: any): { url: string; label: string } => {
    switch (venue.id) {
      case 1:
        return { url: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide', label: 'Mexico City' };
      case 2:
        // NYC/NJ links to the original NYC travel guide
  return { url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide', label: 'New York / New Jersey' };
      case 3:
        return { url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide', label: 'Dallas' };
      case 4:
        return { url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide', label: 'Kansas City' };
      case 5:
        return { url: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide', label: 'Monterrey' };
      case 6:
        return { url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide', label: 'Houston' };
      case 7:
        return { url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide', label: 'Atlanta' };
      case 8:
        return { url: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide', label: 'Los Angeles' };
      case 9:
        return { url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide', label: 'Seattle' };
      case 10:
        return { url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide', label: 'San Francisco Bay Area' };
      case 11:
        return { url: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide', label: 'Philadelphia' };
      case 12:
        return { url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide', label: 'Boston' };
      case 13:
        return { url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide', label: 'Miami' };
      case 14:
        return { url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide', label: 'Toronto' };
      case 15:
        return { url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide', label: 'Vancouver' };
      case 16:
        return { url: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide', label: 'Guadalajara' };
      default:
        return { url: '/world-cup-2026-host-cities', label: 'Host Cities' };
    }
  };

  const venues = [
    {
      id: 1,
      name: 'Estadio Azteca',
      city: 'Mexico City, Mexico',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 87523,
      capacityCategory: 'mega',
      matches: 5,
      image: '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp',
      opened: 1966,
      surface: 'Natural Grass',
      nearestMetro: 'Azteca Station',
      metroDistance: 0.2,
      hotelCount: 127,
      avgHotelPrice: 89,
      nearestAirport: 'MEX',
      airportDistance: 25,
      parkingSpaces: 12000,
      description: 'Football\'s most sacred ground. The only venue to host TWO World Cup finals returns for 2026. Stand where Pelé and Maradona became legends—discover transport tips, nearby hotels, and how to conquer the 7,200-foot altitude.',
      priceFrom: '$89',
      hotels: '127+ hotels',
      amenities: ['Retractable roof sections', 'VIP suites', 'Stadium museum', 'Multiple restaurants', 'Premium clubs'],
      hotelDeals: 23,
      avgRating: 4.6,
      weatherAdvantage: 'High altitude',
      keyFeatures: ['Historic venue', 'Largest capacity', 'Two-time final host'],
      address: 'Calz. de Tlalpan 3465, Santa Úrsula Coapa, Coyoacán, 04650 Ciudad de México, CDMX, Mexico',
      homeTeams: ['Club América', 'Mexico National Team'],
      notableEvents: ['1970 FIFA World Cup Final', '1986 FIFA World Cup Final', "Pelé's 1000th goal"],
      seatingInfo: 'Four-tier stadium with premium boxes, general admission, and standing areas',
      transportation: 'Metro Line 2 to Azteca Station, multiple bus routes, taxi and rideshare services',
      foodAmenities: 'Traditional Mexican cuisine, international food courts, premium dining in VIP areas',
      visitorTips: 'Arrive early due to heavy traffic, bring sunscreen for day games, try local street food outside the stadium'
    },
    {
      id: 2,
      name: 'MetLife Stadium',
      city: 'East Rutherford, NJ',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 82500,
      capacityCategory: 'mega',
      matches: 8,
      image: '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
      opened: 2010,
      surface: 'FieldTurf',
      nearestMetro: 'Secaucus Junction',
      metroDistance: 2.1,
      hotelCount: 89,
      avgHotelPrice: 299,
      nearestAirport: 'EWR',
      airportDistance: 8,
      parkingSpaces: 28000,
      description: 'History happens here July 19, 2026. The largest stadium in the tournament hosts football\'s biggest match, 30 minutes from Manhattan\'s bright lights. Navigate NJ Transit, find hotels in NYC or New Jersey, and plan your final-worthy journey.',
      priceFrom: '$299',
      hotels: '89+ hotels',
      amenities: ['Climate control', 'LED ribbon boards', 'Premium clubs', 'Luxury suites', 'Multiple concourse levels'],
      hotelDeals: 31,
      avgRating: 4.4,
      weatherAdvantage: 'Climate controlled',
      keyFeatures: ['Most matches', 'NYC access', 'Premium amenities'],
      address: '1 MetLife Stadium Dr, East Rutherford, NJ 07073, United States',
      homeTeams: ['New York Giants', 'New York Jets'],
      notableEvents: ['Super Bowl XLVIII', 'Copa América Centenario matches', 'International soccer friendlies'],
      seatingInfo: 'Modern bowl design with club seats, luxury suites, and general admission areas',
      transportation: 'NJ Transit train to Secaucus Junction then shuttle, extensive bus service, parking available',
      foodAmenities: 'Gourmet concessions, craft beer selections, premium dining clubs, international cuisine',
      visitorTips: 'Use public transportation to avoid traffic, download stadium app for navigation, dress warmly for winter games'
    },
    {
      id: 3,
      name: 'AT&T Stadium',
      city: 'Arlington, TX',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 80000,
      capacityCategory: 'mega',
      matches: 9,
      image: '/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp',
      opened: 2009,
      surface: 'Matrix Turf',
      nearestMetro: 'Trinity Metro TEXRail',
      metroDistance: 3.2,
      hotelCount: 156,
      avgHotelPrice: 199,
      nearestAirport: 'DFW',
      airportDistance: 12,
      parkingSpaces: 24000,
      description: 'Texas does football different. This $1.3 billion architectural marvel hosts a 2026 Semifinal under a retractable roof with the world\'s largest HD screen suspended overhead. Between Dallas and Fort Worth, "Jerry World" delivers air-conditioned luxury, Texas hospitality, and matches that matter most.',
      priceFrom: '$199',
      hotels: '156+ hotels',
      amenities: ['Retractable roof', 'Massive video board', 'Art collection', 'Premium dining', 'Climate control'],
      hotelDeals: 27,
      avgRating: 4.7,
      weatherAdvantage: 'Retractable roof',
      keyFeatures: ['Largest video board', 'Retractable roof', 'Art collection'],
      address: '1 AT&T Way, Arlington, TX 76011, United States',
      homeTeams: ['Dallas Cowboys'],
      notableEvents: ['Super Bowl XLV', 'College Football Playoff games', 'WrestleMania events'],
      seatingInfo: 'Multi-level seating with premium clubs, party suites, and standing room areas',
      transportation: 'Trinity Metro TEXRail, shuttle services, extensive parking, rideshare pickup zones',
      foodAmenities: 'Texas BBQ, gourmet concessions, craft cocktails, premium steakhouse dining',
      visitorTips: 'Take stadium tour to see art collection, arrive early for parking, use clear bag policy'
    },
    {
      id: 4,
      name: 'Arrowhead Stadium',
      city: 'Kansas City, MO',
      region: 'Central',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 76416,
      capacityCategory: 'large',
      matches: 4,
      image: '/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026.webp',
      opened: 1972,
      surface: 'Natural Grass',
      nearestMetro: 'Bus service only',
      metroDistance: null,
      hotelCount: 67,
      avgHotelPrice: 159,
      nearestAirport: 'MCI',
      airportDistance: 35,
      parkingSpaces: 22000,
      description: 'The world\'s loudest stadium meets the world\'s game. Guinness-certified 142.2 decibels make Arrowhead an open-air thunder dome where 76,000 Chiefs Kingdom faithful create an acoustic nightmare for opponents. Discover America\'s best tailgate scene, BBQ pit-stops, and why the Sea of Red intimidates even in summer.',
      priceFrom: '$159',
      hotels: '67+ hotels',
      amenities: ['Natural grass field', 'Premium clubs', 'Hall of Fame', 'Tailgating areas', 'Historic atmosphere'],
      hotelDeals: 15,
      avgRating: 4.8,
      weatherAdvantage: 'Outdoor atmosphere',
      keyFeatures: ['Loudest crowd', 'Natural grass', 'Historic venue'],
      address: '1 Arrowhead Dr, Kansas City, MO 64129, United States',
      homeTeams: ['Kansas City Chiefs'],
      notableEvents: ['AFC Championship games', 'Monday Night Football classics', 'Playoff victories'],
      seatingInfo: 'Traditional bowl design with upper and lower decks, premium seating, and party areas',
      transportation: 'Bus service, extensive parking lots, rideshare zones, shuttle services',
      foodAmenities: 'Kansas City BBQ, local favorites, craft beer, traditional stadium fare',
      visitorTips: 'Experience tailgating culture, dress for weather, arrive early for parking, bring ear protection'
    },
    {
      id: 5,
      name: 'Estadio BBVA',
      city: 'Monterrey, NL',
      region: 'Nuevo León',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 53500,
      capacityCategory: 'large',
      matches: 4,
      image: '/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp',
      opened: 2015,
      surface: 'Natural Grass',
      nearestMetro: 'Exposición (Metrorrey Line 1)',
      metroDistance: 2.5,
      hotelCount: 94,
      avgHotelPrice: 189,
      nearestAirport: 'MTY',
      airportDistance: 30,
      parkingSpaces: 13000,
      description: "Where Mexico's soul lives. Estadio Akron (2010)—home to Chivas, the only club fielding exclusively Mexican players—brings four World Cup matches to Guadalajara, birthplace of mariachi and tequila. This intimate 49,850-seat bowl amplifies \"El Rebaño Sagrado\" (The Sacred Herd) passion beneath Sierra Madre mountain backdrops. Opened as Estadio Omnilife, rebranded Akron, always pure Tapatío pride. Explore Mexico's second-largest city, historic centro, nearby Tequila town distilleries, and why Jalisco's cultural traditions and football devotion run deeper than anywhere else in Mexico.",
      amenities: ['Cerro de la Silla views', 'Natural grass', 'Premium seating', 'Modern concourses', 'Vibrant atmosphere'],
      hotelDeals: 22,
      avgRating: 4.6,
      weatherAdvantage: 'Dry climate, evening breezes',
      keyFeatures: ['Intimate sightlines', 'Industrial design', 'Mountain backdrop'],
      address: 'Avenida Las Américas s/n, La Pastora, 67140 Guadalupe, N.L., Mexico',
      homeTeams: ['C.F. Monterrey (Rayados)'],
      notableEvents: ['Liga MX finals', 'CONCACAF Champions League matches', 'International friendlies'],
      seatingInfo: 'Steep bowl with excellent sightlines, covered stands, premium clubs and suites',
      transportation: 'Metrorrey Line 1 to Exposición then short taxi or shuttle; buses and rideshare available; on-site parking limited',
      foodAmenities: 'Northern Mexican cuisine, tacos, tortas, local craft beer, family-friendly options',
      visitorTips: 'Arrive early to enjoy mountain views, use public transit or rideshare, bring sun protection for day matches'
    },
    
    {
      id: 6,
      name: 'NRG Stadium',
      city: 'Houston, TX',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 72220,
      capacityCategory: 'large',
      matches: 4,
      image: '/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp',
      opened: 2002,
      surface: 'Natural Grass',
      nearestMetro: 'NRG Park/Stadium Station',
      metroDistance: 0.1,
      hotelCount: 78,
      avgHotelPrice: 189,
      nearestAirport: 'IAH',
      airportDistance: 45,
      parkingSpaces: 24000,
      description: `Space City sophistication meets Texas hospitality. NRG's engineering marvel features natural grass that rolls outside on tracks and a retractable roof that defeats Houston's brutal summer heat. The most diverse city in America guarantees every nation finds their tribe. Explore METRORail connections, downtown Houston's food scene, and why this two-time Super Bowl host delivers comfort without compromise.`,
      amenities: ['Retractable roof', 'Natural grass', 'Premium clubs', 'Rodeo facilities', 'Climate control'],
      hotelDeals: 18,
      avgRating: 4.3,
      weatherAdvantage: 'Retractable roof',
      keyFeatures: ['First retractable roof', 'Natural grass', 'Multi-purpose venue'],
      address: 'NRG Pkwy, Houston, TX 77054, United States',
      homeTeams: ['Houston Texans'],
      notableEvents: ['Super Bowl LI', 'Houston Livestock Show and Rodeo', 'Final Four games'],
      seatingInfo: 'Multi-level seating with club areas, luxury suites, and general admission',
      transportation: 'Light rail to NRG Park/Stadium Station, bus service, extensive parking',
      foodAmenities: 'Texas BBQ, Tex-Mex cuisine, craft beer, premium dining options',
      visitorTips: 'Use light rail for easy access, explore NRG Park complex, enjoy air conditioning'
    },
    {
      id: 7,
      name: 'Mercedes-Benz Stadium',
      city: 'Atlanta, GA',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 71000,
      capacityCategory: 'large',
      matches: 6,
      image: '/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp',
      opened: 2017,
      surface: 'FieldTurf',
      description: `A roof that opens like a camera lens. Food that costs $5. A city that moves culture. Mercedes-Benz Stadium (2017) revolutionized stadiums with its 8-petal retractable roof, 360° halo video board, LEED Platinum design, and game-changing concession prices. Super Bowl 53 hosted. Six World Cup matches via MARTA. Explore downtown Atlanta's civil rights history, hip-hop heartbeat, and why "The Benz" represents the future of football venues.`,
      amenities: ['Retractable roof', 'Halo video board', 'LEED Platinum', 'Premium dining', 'Sustainable design'],
      hotelDeals: 25,
      avgRating: 4.6,
      weatherAdvantage: 'Retractable roof',
      keyFeatures: ['Halo video board', 'LEED Platinum', 'Newest technology'],
      address: '1 AMB Dr NW, Atlanta, GA 30313, United States',
      homeTeams: ['Atlanta Falcons', 'Atlanta United FC'],
      notableEvents: ['Super Bowl LIII', 'College Football Playoff games', 'MLS Cup Final'],
      seatingInfo: 'Modern bowl design with 360-degree halo board, premium clubs, and general seating',
      transportation: 'MARTA rail to GWCC/Philips Arena/CNN Center, bus routes, limited parking',
      foodAmenities: 'Southern cuisine, craft cocktails, local Atlanta favorites, premium dining experiences',
      visitorTips: 'Use public transportation, arrive early to see halo board, explore downtown Atlanta'
    },
    {
      id: 8,
      name: 'SoFi Stadium',
      city: 'Inglewood, CA',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 70240,
      capacityCategory: 'large',
      matches: 8,
      image: '/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp',
      opened: 2020,
      surface: 'Natural Grass (World Cup install)',
      description: "The $5.5 billion stadium that redefined possible. Built 40 feet underground beneath a hovering translucent canopy, SoFi's 120-yard Infinity Screen (double-sided, 2.2 million pounds of LED) creates an experience unlike anywhere on Earth. Super Bowl 56 hosted. 2028 Olympics confirmed. Eight World Cup matches in LA's entertainment capital—discover Metro connections, parking realities, the surrounding 298-acre complex, and why this architectural icon demands your attention.",
      amenities: ['Translucent canopy', 'Infinity Screen (dual-sided 4K)', 'Premium clubs', 'Indoor–outdoor design', 'AI security screening'],
      hotelDeals: 29,
      avgRating: 4.7,
      weatherAdvantage: 'Open‑air sides with natural breezes',
      keyFeatures: ['Translucent canopy', 'Infinity Screen', 'Indoor–outdoor design'],
      address: '1001 Stadium Dr, Inglewood, CA 90301, United States',
      homeTeams: ['Los Angeles Rams', 'Los Angeles Chargers'],
      notableEvents: ['Super Bowl LVI (2022)', '2023 CFP National Championship', 'WrestleMania 39', 'CONCACAF Gold Cup Final 2023', 'Copa América 2024'],
      seatingInfo: 'Intimate bowl design with engineered sightlines, premium clubs, and suites',
      transportation: 'Shuttle services, rideshare zones, parking available',
      foodAmenities: 'California cuisine, international options, premium dining',
      visitorTips: 'Arrive early, expect AI security screening, enjoy indoor–outdoor breezes'
    },
    {
      id: 9,
      name: 'Lumen Field',
      city: 'Seattle, WA',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 69000,
      capacityCategory: 'medium',
      matches: 5,
      image: '/images/stadiums/lumen-field-seattle-world-cup-2026.webp',
      opened: 2002,
      surface: 'FieldTurf',
      description: 'The loudest fans. The most beautiful views. The only stadium to cause earthquakes. Lumen Field\'s "12th Man" tradition created seismic readings in 2011 and 2013—noise so intense it registered on monitors. Engineered with a partial roof that traps sound, this waterfront fortress opens north to Puget Sound and Olympic Mountain vistas. Sounders MLS champions. Link Light Rail connected. Explore Seattle\'s Pioneer Square, Pike Place Market, and why this coffee-powered, tech-savvy city brings Pacific Northwest intensity.',
      amenities: ['Water views', 'Mountain backdrop', 'Premium seating', 'Loud crowd', 'Natural beauty'],
      hotelDeals: 19,
      avgRating: 4.4,
      weatherAdvantage: 'Covered seating',
      keyFeatures: ['Water views', 'Mountain backdrop', 'Passionate fans'],
      address: '800 Occidental Ave S, Seattle, WA 98134, United States',
      homeTeams: ['Seattle Seahawks', 'Seattle Sounders FC'],
      notableEvents: ['NFC Championship games', 'MLS Cup matches', 'International soccer friendlies'],
      seatingInfo: 'Open-air stadium with covered seating, premium areas, and general admission',
      transportation: 'Light rail to Stadium Station, bus routes, limited parking, rideshare zones',
      foodAmenities: 'Pacific Northwest cuisine, craft beer, seafood specialties, local favorites',
      visitorTips: 'Dress for rain, use public transportation, experience 12th Man atmosphere'
    },
    {
      id: 10,
      name: "Levi's Stadium",
      city: 'Santa Clara, CA',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 68500,
      capacityCategory: 'medium',
      matches: 6,
      image: '/images/stadiums/levis-stadium-santa-clara-world-cup-2026.webp',
      opened: 2014,
      surface: 'Natural Grass',
      description: 'Silicon Valley built a stadium and loaded it with tech. World\'s first comprehensive stadium app (order food, watch replays, track stats from your seat). Fastest Wi-Fi in sports. LEED Gold design with solar panels. Super Bowl 50 and College Football Playoff Championship hosted. Six World Cup matches between San Francisco and San Jose—navigate Caltrain/VTA Light Rail, understand the west-facing sun challenge, and discover why the Bay Area\'s tech capital does football its own innovative way.',
      amenities: ['Tech integration', 'Natural grass', 'Premium clubs', 'Innovation features', 'Bay Area access'],
      hotelDeals: 21,
      avgRating: 4.2,
      weatherAdvantage: 'California climate',
      keyFeatures: ['Tech integration', 'Silicon Valley', 'Innovation hub'],
      address: '4900 Marie P DeBartolo Way, Santa Clara, CA 95054, United States',
      homeTeams: ['San Francisco 49ers'],
      notableEvents: ['Super Bowl 50', 'College Football Playoff games', 'International soccer matches'],
      seatingInfo: 'Modern design with tech-integrated seating, premium clubs, and general areas',
      transportation: 'Caltrain to Great America Station, VTA light rail, parking available',
      foodAmenities: 'California cuisine, craft beer, tech-forward concessions, premium dining',
      visitorTips: 'Use public transportation, download stadium app, explore Silicon Valley'
    },
    {
      id: 11,
      name: 'Lincoln Financial Field',
      city: 'Philadelphia, PA',
      region: 'East',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 69596,
      capacityCategory: 'medium',
      matches: 5,
      image: '/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp',
      description: 'They booed Santa. They won a Super Bowl. They\'ll make World Cup unforgettable. Lincoln Financial Field brings South Philly\'s legendary intensity to five matches—where Eagles fans\' notorious passion (they literally had a jail in the old stadium) meets 1776 American history. Super Bowl 52 champions. Direct SEPTA Broad Street Line access. Explore Independence Hall, Rocky Steps, authentic cheesesteak culture, and discover why this blue-collar city\'s no-nonsense attitude creates the most authentic football atmosphere in America.',
      address: '1 Lincoln Financial Field Way, Philadelphia, PA 19148, United States',
      homeTeams: ['Philadelphia Eagles'],
      notableEvents: ['NFC Championship games', 'Army-Navy Game', 'International soccer matches'],
      seatingInfo: 'Traditional design with upper and lower decks, premium seating, and general areas',
      transportation: 'SEPTA Broad Street Line to NRG Station, bus routes, parking available',
      foodAmenities: 'Philadelphia cheesesteaks, local favorites, craft beer, traditional stadium food',
      visitorTips: 'Experience passionate fan culture, try local food, explore historic Philadelphia'
    },
    {
      id: 12,
      name: 'Gillette Stadium',
      city: 'Foxborough, MA',
      region: 'East',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 65878,
      capacityCategory: 'medium',
      matches: 5,
      image: '/images/stadiums/gillette-stadium-foxborough-world-cup-2026.webp',
      description: 'The house that Brady built. Six Super Bowl championships in 20 years transformed Gillette Stadium into the NFL\'s dynasty headquarters—where "Do Your Job" became New England\'s mantra. A lighthouse guards the entrance. Patriot Place wraps the venue. Five World Cup matches in Foxborough, 30 miles south of Boston via MBTA Commuter Rail (limited service) or car. Explore Revolutionary War history, New England Revolution (MLS) culture, Patriots Hall of Fame, and why six states consider this hallowed ground.',
      address: '1 Patriot Pl, Foxborough, MA 02035, United States',
      homeTeams: ['New England Patriots'],
      notableEvents: ['Super Bowl victories', 'AFC Championship games', 'International soccer matches'],
      seatingInfo: 'Traditional New England design with premium seating and general admission areas',
      transportation: 'Commuter rail to Foxborough Station, bus service, extensive parking',
      foodAmenities: 'New England seafood, local specialties, craft beer, traditional stadium fare',
      visitorTips: 'Dress warmly for cold weather games, arrive early for parking, explore Patriot Place'
    },
    {
      id: 13,
      name: 'Hard Rock Stadium',
      city: 'Miami Gardens, FL',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 65326,
      capacityCategory: 'medium',
      matches: 6,
      image: '/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp',
      opened: 1987,
      surface: 'Natural Grass',
      description: 'Where innovation beats the heat. Hard Rock\'s $550 million transformation (2016) created a revolutionary canopy that covers every fan while leaving the field exposed—you stay cool, players sweat. Six Super Bowls hosted. Formula 1 Miami Grand Prix circles the venue. Six World Cup matches in Miami Gardens, requiring car/rideshare from South Beach or downtown. Navigate Miami\'s Latin neighborhoods, Art Deco architecture, world-famous nightlife, and prepare for 90°F June heat with afternoon thunderstorms. This is subtropical football—glamorous, yes, but bring sunscreen.',
      amenities: ['Canopy design', 'Natural grass', 'Tropical setting', 'Modern renovation', 'Beach access'],
      hotelDeals: 24,
      avgRating: 4.2,
      weatherAdvantage: 'Tropical climate',
      keyFeatures: ['Tropical setting', 'Canopy design', 'Beach proximity'],
      address: '347 Don Shula Dr, Miami Gardens, FL 33056, United States',
      homeTeams: ['Miami Dolphins'],
      notableEvents: ['Super Bowl games', 'College Football Playoff games', 'International soccer matches'],
      seatingInfo: 'Modern design with canopy coverage, premium seating, and general admission',
      transportation: 'Bus service, rideshare zones, extensive parking, shuttle services',
      foodAmenities: 'Cuban cuisine, tropical drinks, seafood, South Beach favorites',
      visitorTips: 'Bring sunscreen and hat, stay hydrated, explore Miami Beach nearby'
    },
    {
      id: 14,
      name: 'BMO Field',
      city: 'Toronto',
      region: 'Canada',
      country: 'Canada',
      flag: '🇨🇦',
      capacity: 45736,
      capacityCategory: 'large',
      matches: 6,
      image: '/images/stadiums/bmo-field-toronto-world-cup-2026.webp',
      opened: 2007,
      surface: 'Natural Grass (Kentucky Bluegrass)',
      nearestMetro: 'Exhibition GO Station',
      metroDistance: 0.5,
      hotelCount: 120,
      avgHotelPrice: 219,
      nearestAirport: 'YYZ',
      airportDistance: 22,
      parkingSpaces: 8000,
      description: "Canada's soccer story starts here. BMO Field—the nation's first purpose-built football stadium (2007)—hosts six World Cup matches including Canada's historic home fixtures after 36 years away from the tournament. Temporarily expanded from 28,500 to 45,736 seats along Toronto's Lake Ontario waterfront. Where Toronto FC won the 2017 MLS Cup treble. Where the \"Reds\" roar. Where 200+ ethnic communities guarantee every team finds supporters. TTC streetcar, GO Transit, CN Tower views, Liberty Village nearby. Explore the world's most multicultural city at its proudest moment.",
      priceFrom: '$219',
      hotels: '120+ hotels',
      amenities: ['Partial canopy roof', 'Rooftop hospitality patio', 'Heated pitch system', 'Corner LED boards'],
      hotelDeals: 19,
      avgRating: 4.6,
      weatherAdvantage: 'Canopy-covered stands',
      keyFeatures: ['Intimate design', 'Lakefront setting', 'Temporary expansion'],
      address: '170 Princes’ Blvd, Toronto, ON M6K 3J1, Canada',
      homeTeams: ['Toronto FC', 'Toronto Argonauts'],
      notableEvents: ['2017 MLS Cup Final', '104th Grey Cup', 'NHL Centennial Classic'],
      seatingInfo: 'Three-sided bowl with upper tier, partial roof coverage, temporary end stands for 2026',
      transportation: 'GO Transit to Exhibition Station, TTC streetcar routes, rideshare and taxi, limited on-site parking',
      foodAmenities: 'Canadian classics, international concessions, craft beer, premium hospitality areas',
      visitorTips: 'Arrive early, use public transit, dress for waterfront weather, allow extra time on matchdays'
    },
    {
      id: 15,
      name: 'BC Place',
      city: 'Vancouver',
      region: 'West',
      country: 'Canada',
      flag: '🇨🇦',
      capacity: 54500,
      capacityCategory: 'medium',
      matches: 5,
      image: '/images/stadiums/bc-place-vancouver-world-cup-2026.webp',
      opened: 1983,
      surface: 'FieldTurf',
      description: 'Where mountains meet the pitch. BC Place\'s retractable roof—the world\'s largest cable-supported system—opens in 20 minutes to reveal snow-capped peaks and Pacific skies. Hosted the 2015 FIFA Women\'s World Cup Final and 2010 Olympics ceremonies. Five matches in downtown Vancouver, steps from Stadium-Chinatown SkyTrain. Rebuilt in 2011 with cutting-edge technology. Explore Yaletown\'s waterfront, Gastown\'s cobblestones, and why this multicultural city between mountains and ocean delivers Canada\'s most spectacular World Cup setting.',
      amenities: ['Retractable roof', 'Mountain views', 'Ocean proximity', 'Dome design', 'Natural beauty'],
      hotelDeals: 15,
      avgRating: 4.3,
      weatherAdvantage: 'Retractable roof',
      keyFeatures: ['Dome design', 'Mountain/ocean views', 'Pacific Northwest'],
      address: '777 Pacific Blvd, Vancouver, BC V6B 4Y8, Canada',
      homeTeams: ['Vancouver Whitecaps FC'],
      notableEvents: ['2010 Winter Olympics ceremonies', 'MLS matches', 'International soccer games'],
      seatingInfo: 'Domed stadium with retractable roof, premium seating, and general admission',
      transportation: 'SkyTrain to Stadium-Chinatown Station, bus routes, limited parking',
      foodAmenities: 'Pacific Northwest cuisine, craft beer, seafood, Canadian specialties',
      visitorTips: 'Use public transportation, explore downtown Vancouver, enjoy mountain views'
    },
    {
      id: 16,
      name: 'Estadio Akron',
      city: 'Guadalajara, Jalisco',
      region: 'Mexico',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 49850,
      capacityCategory: 'medium',
      matches: 4,
      image: '/images/stadiums/estadio-akron-guadalajara-world-cup-2026.webp',
      alt: "Inside view of Estadio Akron in Guadalajara, Mexico, a key venue for FIFA World Cup 2026 games.",
      opened: 2010,
      surface: 'Natural Grass',
      description: "Where Mexico's soul lives. Estadio Akron (2010)—home to Chivas, the only club fielding exclusively Mexican players—brings four World Cup matches to Guadalajara, birthplace of mariachi and tequila. This intimate 49,850-seat bowl amplifies \"El Rebaño Sagrado\" (The Sacred Herd) passion beneath Sierra Madre mountain backdrops. Opened as Estadio Omnilife, rebranded Akron, always pure Tapatío pride. Explore Mexico's second-largest city, historic centro, nearby Tequila town distilleries, and why Jalisco's cultural traditions and football devotion run deeper than anywhere else in Mexico.",
      amenities: ['Modern design', 'Natural grass', 'Cultural setting', 'Traditional atmosphere', 'Mexican hospitality'],
      hotelDeals: 9,
      avgRating: 4.1,
      weatherAdvantage: 'Mild climate',
      keyFeatures: ['Mariachi country', 'Cultural heritage', 'Modern design'],
      address: 'Av. de las Rosas 2510, Verde Valle, 44550 Guadalajara, Jal., Mexico',
      homeTeams: ['CD Guadalajara (Chivas)'],
      notableEvents: ['Liga MX matches', 'International friendlies', 'CONCACAF tournaments'],
      seatingInfo: 'Modern design with premium seating and general admission areas',
      transportation: 'Bus routes, taxi service, parking available, rideshare options',
      foodAmenities: 'Traditional Mexican cuisine, local specialties, craft beer, mariachi entertainment',
      visitorTips: 'Experience mariachi culture, try local food, explore Guadalajara historic center'
    }
  ];

  // Build ItemList/CollectionPage schemas for the stadiums listing
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const itemListItems = venues.map((v) => ({
    name: v.name,
    url: `${siteUrl}/world-cup-2026-stadiums/${getStadiumSlug(v)}`,
    image: `${siteUrl}${v.image}`,
  }));

  const itemListSchema = generateItemListSchema(itemListItems);
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'World Cup 2026 Stadiums & Venues Guide',
    description:
      'Complete guide to all 16 World Cup 2026 stadiums across USA, Canada, and Mexico. Explore capacity, location, transport, hotels, and matchday tips for each venue.',
    url: `${siteUrl}/world-cup-2026-stadiums`,
    image: `${siteUrl}/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp`,
    items: itemListItems,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      {/* JSON-LD Schemas */}
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={itemListSchema} />
      <SchemaOrg schema={collectionPageSchema} />
      <Header />
      
      {/* Hero Section - Apple-Level Luxury Design */}
      <section className="relative pt-32 md:pt-40 lg:pt-48 pb-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-8 right-4 w-16 h-16 xs:top-10 xs:right-6 xs:w-20 xs:h-20 sm:top-16 sm:right-8 sm:w-32 sm:h-32 md:top-20 md:right-10 md:w-40 md:h-40 lg:top-24 lg:right-12 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-gold-500/5 dark:bg-gold-500/10 backdrop-blur-3xl rounded-full border border-gold-500/10 dark:border-gold-500/20 animate-float"></div>
          <div className="absolute bottom-8 left-4 w-20 h-20 xs:bottom-10 xs:left-6 xs:w-24 xs:h-24 sm:bottom-16 sm:left-8 sm:w-40 sm:h-40 md:bottom-20 md:left-10 md:w-48 md:h-48 lg:bottom-24 lg:left-12 lg:w-56 lg:h-56 xl:w-80 xl:h-80 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute top-1/3 left-1/2 w-16 h-16 xs:top-1/2 xs:left-1/2 xs:w-20 xs:h-20 sm:top-1/2 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-56 xl:h-56 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-3xl rounded-full border border-emerald-500/10 dark:border-emerald-500/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Premium Breadcrumb - Minimal Luxury */}
            <div className="mb-8">
              <nav className="flex items-center justify-center space-x-2 text-sm">
                <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium">
                  Home
                </Link>
                <span className="text-slate-300 dark:text-slate-600">›</span>
                <span className="text-slate-900 dark:text-white font-medium">World Cup 2026 Stadiums</span>
              </nav>
            </div>
            
            {/* Premium Title - Apple Typography */}
            <div className="mb-12">
              <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                World Cup 2026 Stadiums: Complete Guide to All 16 Venues
              </h1>
              <div className="text-center mb-6">
                <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                  World Cup 2026 Stadiums: Complete Venue Guide (16)
                </span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Complete guide to all 16 FIFA World Cup 2026 stadiums across USA, Canada & Mexico. Get transport routes, hotel recommendations, matchday tips & insider advice for every venue.
              </p>
            </div>

            {/* Apple-Level Premium Stats - Minimal Luxury Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              
              {/* Nations Card - Apple Gold */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-amber-200/50 dark:hover:border-amber-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-amber-600 group-hover:to-orange-600 dark:group-hover:from-amber-400 dark:group-hover:to-orange-400 transition-all duration-700">3</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Nations</div>
                </div>
              </div>

              {/* Venues Card - Apple Emerald */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-emerald-200/50 dark:hover:border-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-700">16</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Venues</div>
                </div>
              </div>

              {/* Matches Card - Apple Purple */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">104</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Matches</div>
                </div>
              </div>

              {/* Capacity Card - Apple Blue */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-sky-600 dark:group-hover:from-blue-400 dark:group-hover:to-sky-400 transition-all duration-700">1.2M+</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Capacity</div>
                </div>
              </div>

            </div>
          </div>
      

      {/* Stadiums Grid - unified into the same background */}
        <div className="relative z-10 pt-0 pb-20 mt-28 md:mt-36 lg:mt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
              Select Your Venue
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Click any stadium for complete guides covering transport, where to stay, what to do nearby, and insider matchday advice from fans who've been there.
            </p>
          </div>

          {/* Apple-Level Premium 2-Column Grid - Matching Host Cities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20"
              >
                {/* Premium Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <OptimizedImage
                    src={venue.image}
                    alt={venue.alt ?? (venue.id === 1 ? "Aerial view of Estadio Azteca in Mexico City, Mexico — historic stadium hosting FIFA World Cup 2026 matches" : 
                         venue.id === 2 ? "Exterior view of MetLife Stadium in East Rutherford, New Jersey — one of the key venues for FIFA World Cup 2026 in the USA" :
                         venue.id === 3 ? "Exterior view of AT&T Stadium in Arlington, Texas — modern NFL venue set to host FIFA World Cup 2026 matches in the United States." :
                         venue.id === 4 ? "Interior view of Arrowhead Stadium in Kansas City, Missouri — vibrant atmosphere ahead of FIFA World Cup 2026 matches." :
                         venue.id === 5 ? "Interior of Estadio BBVA in Monterrey, Mexico — state-of-the-art venue hosting FIFA World Cup 2026 matches." :
                         venue.id === 6 ? "Exterior view of NRG Stadium in Houston, Texas — one of the major FIFA World Cup 2026 venues in the USA." :
                         `${venue.name} stadium`)}
                    className="w-full h-full"
                    imgClassName="object-top group-hover:scale-110 transition-transform duration-1000"
                    placeholder="blur"
                    priority={index < 2}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Apple-Level Premium Stadium Info - Ultra Minimal Glass */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                    <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-0.5">
                      {/* Premium Minimal Layout */}
                      <div className="relative flex items-center justify-between">
                        {/* Stadium Icon - Minimal Apple Style */}
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                            <i className="ri-map-pin-line text-white text-sm"></i>
                          </div>
                          
                          {/* Stadium Info - Compact Apple Typography */}
                          <div className="min-w-0 flex-1">
                            <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                              {venue.city === 'Vancouver' ? 'Vancouver, BC' : venue.city === 'Toronto' ? 'Toronto, ON' : venue.city === 'East Rutherford, NJ' ? 'New York / New Jersey' : venue.city}
                            </div>
                          </div>
                        </div>
                        
                        {/* Capacity - Apple Minimal Style */}
                        <div className="text-right ml-3 flex-shrink-0">
                          <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-500">
                            {venue.capacity.toLocaleString()}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">
                            Capacity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apple-Level Premium Badge System - Perfect Visual Hierarchy - Matching Host Cities */}
                  {/* Match Count Badges - Top Right */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                    <div className="flex flex-col items-end space-y-1.5 md:space-y-2">
                      {/* Matches Count - Apple-Level Premium (Order 1 - like host cities) */}
                      <div className="order-1">
                        <div className="bg-emerald-500/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-semibold border border-emerald-400/30 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/85 hover:shadow-md transition-all duration-300">
                          {venue.matches} Matches
                        </div>
                      </div>

                      {/* Final Badge (MetLife only) - Apple-Level Premium (Order 2 - like host cities) */}
                      {venue.id === 2 && (
                        <div className="order-2">
                          <div className="bg-gradient-to-r from-amber-400/75 via-yellow-400/75 to-orange-500/75 text-black/80 px-2 py-1 rounded-lg text-[11px] font-bold backdrop-blur-sm shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                            <i className="ri-trophy-fill text-[11px]"></i>
                            <span className="tracking-wide">WORLD CUP FINAL</span>
                          </div>
                        </div>
                      )}

                      {/* Semifinal Badge (AT&T Stadium only) - Apple-Level Premium (Order 2 - like host cities) */}
                      {venue.id === 3 && (
                        <div className="order-2">
                          <div className="bg-purple-500/75 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[11px] font-bold shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                            <i className="ri-medal-fill text-[11px]"></i>
                            <span className="tracking-wide">WORLD CUP SEMI</span>
                          </div>
                        </div>
                      )}

                      {/* Canada Home Matches Badge (BMO Field only) - Apple-Level Premium (Order 2 - like host cities) */}
                      {venue.id === 14 && (
                        <div className="order-2">
                          <div className="bg-gradient-to-r from-red-500/75 via-rose-500/75 to-pink-500/75 text-white px-2 py-1 rounded-lg text-[11px] font-bold backdrop-blur-sm shadow-sm ring-1 ring-white/15 flex items-center gap-1 hover:shadow-md transition-all duration-300">
                            <i className="ri-flag-fill text-[11px]"></i>
                            <span className="tracking-wide">CANADA HOME</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Premium Content Section - Apple Typography - Matching Host Cities */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
                    {venue.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                    {venue.description}
                  </p>
                  
                  {/* Premium Button - Apple Style - Matching Host Cities */}
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="mt-auto whitespace-nowrap cursor-pointer font-bold rounded-2xl transition-all duration-300 px-8 py-4 text-base bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl group-hover:scale-105 transform"
                    onClick={() => handleReadFullGuide(venue)}
                  >
                    <i className="ri-book-open-line mr-3 text-lg"></i>
                    View Complete Guide
                    <i className="ri-arrow-right-line ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* Beyond the Stadiums - unified into the same background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Floating Glass Elements */}
            
            
            <div className="relative z-10 p-6 sm:p-8 md:p-16 lg:p-20">
              {/* Apple-Level Premium Header */}
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl mb-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl border border-white/20">
                  <i className="ri-compass-3-line text-2xl sm:text-3xl md:text-4xl text-white"></i>
                </div>
                <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-navy-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                  Beyond the Stadiums
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-inter text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light">
                  The World Cup 2026 experience extends far beyond match day. Each host city offers incredible attractions, dining, culture, and entertainment.
                </p>
                <p className="mt-6 font-inter text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                  <a href="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All Host Cities</a>
                  {' '}to discover what makes each destination special, from accommodation options to local transportation tips.
                </p>
              </div>

              {/* Apple-Level Luxury Feature Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                {/* Mexico City - Apple-Level Luxury Card */}
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
                        Mexico City
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      <a href="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</a> — Ancient history meets modern metropolis
                    </p>
                  </div>
                </div>

                {/* Los Angeles - Apple-Level Luxury Card */}
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
                        Los Angeles
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      <a href="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Los Angeles</a> — Entertainment capital with perfect weather
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional City Combinations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                {/* Toronto - Apple-Level Luxury Card */}
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
                        Toronto
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      <a href="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</a> — Multicultural gem of Canada
                    </p>
                  </div>
                </div>

                {/* New York/New Jersey - Apple-Level Luxury Card */}
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
                        New York/New Jersey
                      </h3>
                    </div>
                    
                    {/* Premium Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                      <a href="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">New York/New Jersey</a> — The city that never sleeps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="relative z-10 pt-0 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Stadiums FAQ Section */}
          
          <WorldClassFAQ 
            faqs={[
              {
                id: 1,
                question: "How many stadiums will host World Cup 2026 matches?",
                answer: "The 2026 FIFA World Cup will be played across 16 stadiums in North America: 11 in the United States, 2 in Canada, and 3 in Mexico. This includes iconic venues like MetLife Stadium (New York/New Jersey), SoFi Stadium (Los Angeles), and Estadio Azteca (Mexico City), which will become the first stadium to host three World Cups.",
                category: "Stadium Overview",
                popularity: 10,
                readingTime: 2
              },
              {
                id: 2,
                question: "Which stadium will host the World Cup 2026 final?",
                answer: "FIFA has not officially announced the 2026 World Cup final venue. The leading candidates are MetLife Stadium in New York/New Jersey (capacity 82,500) and AT&T Stadium in Dallas (80,000). Both venues meet FIFA's requirements and have hosted major sporting events. The official announcement is expected in 2025 after the match schedule is finalized.",
                category: "Match Schedule",
                popularity: 9,
                readingTime: 3
              },
              {
                id: 3,
                question: "What is the largest stadium hosting World Cup 2026?",
                answer: "MetLife Stadium in East Rutherford, New Jersey (New York area) is the largest World Cup 2026 venue with a capacity of 82,500 for football matches. It's followed closely by AT&T Stadium in Arlington, Texas (80,000) and Arrowhead Stadium in Kansas City (76,416). These venues will likely host quarterfinals, semifinals, and potentially the final.",
                category: "Stadium Information",
                popularity: 8,
                readingTime: 2
              },
              {
                id: 4,
                question: "Can I tour World Cup 2026 stadiums before the tournament?",
                answer: "Yes, most World Cup 2026 stadiums offer public tours year-round, though availability may be limited closer to the tournament. Popular stadium tours include SoFi Stadium (Los Angeles), AT&T Stadium (Dallas), and Estadio Azteca (Mexico City). Tours typically cost $20-40 per person and must be booked in advance. Check individual stadium websites for schedules and restrictions during World Cup preparation periods.",
                category: "Stadium Tours",
                popularity: 7,
                readingTime: 3
              },
              {
                id: 5,
                question: "Are World Cup 2026 stadiums accessible by public transportation?",
                answer: "Accessibility varies significantly by venue. Stadiums with excellent public transit access include MetLife Stadium (NJ Transit trains), Mercedes-Benz Stadium in Atlanta (MARTA rail), and BMO Field in Toronto (TTC streetcar). However, venues like SoFi Stadium (Los Angeles), AT&T Stadium (Dallas), and Arrowhead Stadium (Kansas City) require rental cars or ride-sharing services. Plan transportation early, as ride-sharing prices surge dramatically on match days.",
                category: "Transportation",
                popularity: 8,
                readingTime: 3
              },
              {
                id: 6,
                question: "Which World Cup 2026 stadiums are indoor vs outdoor?",
                answer: "Three World Cup 2026 venues feature retractable roofs: AT&T Stadium (Dallas), SoFi Stadium (Los Angeles), and BC Place (Vancouver). Mercedes-Benz Stadium in Atlanta also has a retractable roof. All other venues are open-air stadiums. The indoor/covered options provide climate control for extreme weather but may affect atmosphere compared to traditional outdoor football stadiums.",
                category: "Stadium Features",
                popularity: 6,
                readingTime: 2
              },
              {
                id: 7,
                question: "What is the smallest stadium hosting World Cup 2026?",
                answer: "BMO Field in Toronto is the smallest World Cup 2026 venue with a capacity of approximately 45,500 (after temporary expansion). Despite its size, it offers an intimate atmosphere and excellent sightlines. Other smaller venues include Levi's Stadium in Santa Clara (68,500) and Gillette Stadium near Boston (65,878). Smaller stadiums typically host group stage matches rather than knockout rounds.",
                category: "Stadium Information",
                popularity: 5,
                readingTime: 2
              },
              {
                id: 8,
                question: "Are any World Cup 2026 stadiums brand new?",
                answer: "No stadiums are being built specifically for the 2026 World Cup, but several are recently constructed. SoFi Stadium (2020) in Los Angeles is the newest venue and the most expensive stadium ever built at $5+ billion. Allegiant Stadium in Las Vegas (2020) and Mercedes-Benz Stadium in Atlanta (2017) are also recent constructions. All venues will undergo modifications to meet FIFA standards, including wider fields and additional seating.",
                category: "Stadium History",
                popularity: 6,
                readingTime: 3
              },
              {
                id: 9,
                question: "Can I visit multiple World Cup 2026 stadiums in one trip?",
                answer: "Yes, with strategic planning. Geographic clusters make multi-stadium trips feasible: the Texas duo (AT&T Stadium in Dallas and NRG Stadium in Houston are 4 hours apart), East Coast corridor (MetLife, Lincoln Financial Field in Philadelphia, and Gillette Stadium), and West Coast route (SoFi, Levi's Stadium, and Lumen Field in Seattle). Mexico's three venues (Azteca, Akron, BBVA) are also within a manageable circuit. Factor in match schedules and rest days when planning.",
                category: "Travel Planning",
                popularity: 7,
                readingTime: 3
              },
              {
                id: 10,
                question: "Do World Cup 2026 stadiums have different grass than their regular seasons?",
                answer: "Yes, FIFA requires natural grass for World Cup matches. Several NFL stadiums that normally use artificial turf—including AT&T Stadium, Mercedes-Benz Stadium, SoFi Stadium, and Lumen Field—will install temporary natural grass surfaces for the tournament. This process involves laying grass pallets over the existing surface weeks before matches. Gillette Stadium and MetLife Stadium, which use FieldTurf for NFL games, will undergo similar conversions.",
                category: "Stadium Features",
                popularity: 8,
                readingTime: 3
              }
            ]}
            title="Frequently Asked Questions About World Cup 2026 Stadiums"
            subtitle="The 2026 FIFA World Cup will be played in 16 stadiums across the United States (11), Canada (2), and Mexico (3). The largest venue is MetLife Stadium in New York/New Jersey with 82,500 capacity, while the final venue will be announced by FIFA in 2025, with MetLife and AT&T Stadium in Dallas as leading candidates."
            showCategories={true}
            showSearch={true}
            locationSpecific={true}
          />
        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
}
