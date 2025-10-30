
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { useEffect, useState } from 'react';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';

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
      12: 'gillette-stadium',
      14: 'bmo-field'
    };
    return slugMap[venue.id];
  };

  const handleReadFullGuide = (venue: any) => {
    const slug = getStadiumSlug(venue);
    if (slug) {
      navigate(`/venues/${slug}`);
    }
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = 'World Cup 2026 Stadiums & Venues Guide - All 16 Host Stadiums | StadiumPort';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete guide to all 16 World Cup 2026 stadiums. Explore MetLife Stadium, SoFi Stadium, Estadio Azteca, and more. Find capacity, location, and travel information.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/venues`);
    }
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Stadiums', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/venues` }
  ]);

  const venues = [
    {
      id: 1,
      name: 'Estadio Azteca',
      city: 'Mexico City',
      region: 'Mexico',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 87523,
      capacityCategory: 'mega',
      matches: 5,
      image: 'https://readdy.ai/api/search-image?query=Estadio%20Azteca%20Mexico%20City%20aerial%20view%20at%20sunset%2C%20massive%20football%20stadium%20architecture%2C%20iconic%20legendary%20venue%20with%20surrounding%20urban%20landscape%2C%20dramatic%20golden%20lighting%2C%20historic%20sports%20arena%20atmosphere&width=600&height=400&seq=azteca1&orientation=landscape',
      opened: 1966,
      surface: 'Natural Grass',
      nearestMetro: 'Azteca Station',
      metroDistance: 0.2,
      hotelCount: 127,
      avgHotelPrice: 89,
      nearestAirport: 'MEX',
      airportDistance: 25,
      parkingSpaces: 12000,
      description: 'The legendary Estadio Azteca, home to two previous tournament finals, offers an unmatched atmosphere with its towering stands and historic significance.',
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
      city: 'New York',
      region: 'East',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 82500,
      capacityCategory: 'mega',
      matches: 8,
      image: 'https://readdy.ai/api/search-image?query=MetLife%20Stadium%20New%20Jersey%20aerial%20view%20at%20night%2C%20modern%20NFL%20stadium%20architecture%20with%20dramatic%20lighting%2C%20massive%20sports%20venue%20with%20New%20York%20City%20skyline%20backdrop%2C%20contemporary%20design%20excellence&width=600&height=400&seq=metlife1&orientation=landscape',
      opened: 2010,
      surface: 'FieldTurf',
      nearestMetro: 'Secaucus Junction',
      metroDistance: 2.1,
      hotelCount: 89,
      avgHotelPrice: 299,
      nearestAirport: 'EWR',
      airportDistance: 8,
      parkingSpaces: 28000,
      description: 'State-of-the-art venue in the heart of the NY metropolitan area with premium amenities and unparalleled access to the city.',
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
      city: 'Dallas',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 80000,
      capacityCategory: 'mega',
      matches: 9,
      image: 'https://readdy.ai/api/search-image?query=AT&T%20Stadium%20Dallas%20aerial%20view%20with%20distinctive%20architecture%2C%20futuristic%20NFL%20stadium%20design%20with%20massive%20video%20board%2C%20dramatic%20lighting%2C%20modern%20engineering%20marvel%20sports%20venue&width=600&height=400&seq=att1&orientation=landscape',
      opened: 2009,
      surface: 'Matrix Turf',
      nearestMetro: 'Trinity Metro TEXRail',
      metroDistance: 3.2,
      hotelCount: 156,
      avgHotelPrice: 199,
      nearestAirport: 'DFW',
      airportDistance: 12,
      parkingSpaces: 24000,
      description: 'The spectacular "Jerry World" featuring the worlds largest HD video board and retractable roof for ultimate comfort.',
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
      city: 'Kansas City',
      region: 'Central',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 76416,
      capacityCategory: 'large',
      matches: 4,
      image: 'https://readdy.ai/api/search-image?query=Arrowhead%20Stadium%20Kansas%20City%20aerial%20view%2C%20iconic%20NFL%20stadium%20architecture%20with%20distinctive%20design%2C%20passionate%20fan%20atmosphere%2C%20dramatic%20lighting%2C%20legendary%20loud%20sports%20venue&width=600&height=400&seq=arrowhead1&orientation=landscape',
      opened: 1972,
      surface: 'Natural Grass',
      nearestMetro: 'Bus service only',
      metroDistance: null,
      hotelCount: 67,
      avgHotelPrice: 159,
      nearestAirport: 'MCI',
      airportDistance: 35,
      parkingSpaces: 22000,
      description: 'Home to the loudest crowd in professional football, Arrowhead offers an electric atmosphere like no other venue.',
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
      city: 'Monterrey',
      region: 'Nuevo León',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 53500,
      capacityCategory: 'large',
      matches: 4,
      image: 'https://readdy.ai/api/search-image?query=Estadio%20BBVA%20Monterrey%20aerial%20view%20with%20Cerro%20de%20la%20Silla%20mountain%20backdrop%2C%20modern%20soccer%20stadium%20with%20unique%20roof%20design%2C%20dramatic%20natural%20landscape%2C%20vibrant%20city%20lights&width=600&height=400&seq=estadiobbva1&orientation=landscape',
      opened: 2015,
      surface: 'Natural Grass',
      nearestMetro: 'Exposición (Metrorrey Line 1)',
      metroDistance: 2.5,
      hotelCount: 94,
      avgHotelPrice: 189,
      nearestAirport: 'MTY',
      airportDistance: 30,
      parkingSpaces: 13000,
      description: 'Monterrey’s modern cathedral of football with intimate sightlines and iconic mountain views—home of C.F. Monterrey (Rayados).',
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
      city: 'Houston',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 72220,
      capacityCategory: 'large',
      matches: 4,
      image: 'https://readdy.ai/api/search-image?query=NRG%20Stadium%20Houston%20aerial%20view%2C%20modern%20NFL%20stadium%20with%20retractable%20roof%2C%20Texas%20sports%20venue%20architecture%20with%20urban%20backdrop%2C%20dramatic%20lighting%2C%20contemporary%20design%20excellence&width=600&height=400&seq=nrg1&orientation=landscape',
      opened: 2002,
      surface: 'Natural Grass',
      nearestMetro: 'NRG Park/Stadium Station',
      metroDistance: 0.1,
      hotelCount: 78,
      avgHotelPrice: 189,
      nearestAirport: 'IAH',
      airportDistance: 45,
      parkingSpaces: 24000,
      description: 'First NFL stadium with a retractable roof, offering climate-controlled comfort in the Texas heat with natural grass.',
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
      city: 'Atlanta',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 71000,
      capacityCategory: 'large',
      matches: 6,
      image: 'https://readdy.ai/api/search-image?query=Mercedes-Benz%20Stadium%20Atlanta%20aerial%20view%2C%20futuristic%20NFL%20stadium%20with%20distinctive%20halo%20design%2C%20modern%20architectural%20marvel%2C%20dramatic%20lighting%2C%20innovative%20sports%20venue%20design%20excellence&width=600&height=400&seq=mb1&orientation=landscape',
      opened: 2017,
      surface: 'FieldTurf',
      description: 'Architectural marvel with the worlds largest halo video board and retractable roof, representing the pinnacle of stadium design.',
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
      city: 'Los Angeles',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 70240,
      capacityCategory: 'large',
      matches: 8,
      image: 'https://readdy.ai/api/search-image?query=SoFi%20Stadium%20Los%20Angeles%20aerial%20view%2C%20ultra-modern%20NFL%20stadium%20architecture%20with%20translucent%20canopy%2C%20futuristic%20design%20with%20Hollywood%20glamour%2C%20dramatic%20lighting%2C%20cutting-edge%20sports%20venue&width=600&height=400&seq=sofi1&orientation=landscape',
      opened: 2020,
      surface: 'Natural Grass (World Cup install)',
      description: "One of the world's most technologically advanced sporting cathedrals with a translucent roof and record‑breaking Infinity Screen.",
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
      city: 'Seattle',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 69000,
      capacityCategory: 'medium',
      matches: 5,
      image: 'https://readdy.ai/api/search-image?query=Lumen%20Field%20Seattle%20aerial%20view%20with%20Puget%20Sound%20and%20mountains%2C%20NFL%20stadium%20with%20Pacific%20Northwest%20backdrop%2C%20dramatic%20natural%20scenery%2C%20urban%20stadium%20with%20water%20views&width=600&height=400&seq=lumen1&orientation=landscape',
      opened: 2002,
      surface: 'FieldTurf',
      description: 'Pacific Northwest gem with stunning water and mountain views, known for its passionate fanbase and unique atmosphere.',
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
      city: 'Santa Clara',
      region: 'West',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 68500,
      capacityCategory: 'medium',
      matches: 6,
      image: 'https://readdy.ai/api/search-image?query=Levis%20Stadium%20Santa%20Clara%20aerial%20view%2C%20modern%20NFL%20stadium%20architecture%20with%20Bay%20Area%20backdrop%2C%20California%20sports%20venue%20with%20tech%20innovation%2C%20dramatic%20lighting%2C%20Silicon%20Valley%20atmosphere&width=600&height=400&seq=levis1&orientation=landscape',
      opened: 2014,
      surface: 'Natural Grass',
      description: 'Silicon Valley sophistication meets football tradition in this tech-forward venue with premium amenities and innovation.',
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
      city: 'Philadelphia',
      region: 'East',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 69596,
      capacityCategory: 'medium',
      matches: 5,
      image: 'https://readdy.ai/api/search-image?query=Lincoln%20Financial%20Field%20Philadelphia%20aerial%20view%2C%20NFL%20stadium%20with%20historic%20city%20backdrop%2C%20passionate%20Eagles%20fan%20atmosphere%2C%20dramatic%20lighting%2C%20East%20Coast%20sports%20venue%20excellence&width=600&height=400&seq=linc1&orientation=landscape',
      opened: 2003,
      surface: 'Natural Grass',
      description: 'Historic Philadelphia venue known for passionate fans and authentic football atmosphere in the birthplace of America.',
      amenities: ['Natural grass', 'Historic atmosphere', 'Premium clubs', 'Fan experience', 'City access'],
      hotelDeals: 16,
      avgRating: 4.1,
      weatherAdvantage: 'Outdoor experience',
      keyFeatures: ['Historic city', 'Passionate fans', 'Authentic atmosphere'],
      address: '1 Lincoln Financial Field Way, Philadelphia, PA 19148, United States',
      homeTeams: ['Philadelphia Eagles'],
      notableEvents: ['NFC Championship games', 'Army-Navy Game', 'International soccer matches'],
      seatingInfo: 'Traditional design with upper and lower bowls, premium seating, and general areas',
      transportation: 'SEPTA Broad Street Line to NRG Station, bus routes, parking available',
      foodAmenities: 'Philadelphia cheesesteaks, local favorites, craft beer, traditional stadium food',
      visitorTips: 'Experience passionate fan culture, try local food, explore historic Philadelphia'
    },
    {
      id: 12,
      name: 'Gillette Stadium',
      city: 'Boston',
      region: 'East',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 65878,
      capacityCategory: 'medium',
      matches: 5,
      image: 'https://readdy.ai/api/search-image?query=Gillette%20Stadium%20Boston%20aerial%20view%2C%20NFL%20stadium%20with%20New%20England%20architecture%2C%20Patriots%20venue%20with%20traditional%20design%2C%20dramatic%20lighting%2C%20historic%20regional%20atmosphere&width=600&height=400&seq=gillette1&orientation=landscape',
      opened: 2002,
      surface: 'FieldTurf',
      description: 'New England tradition meets modern amenities in this venue known for championship atmosphere and regional pride.',
      amenities: ['Championship history', 'Premium seating', 'Traditional design', 'Regional character', 'Fan loyalty'],
      hotelDeals: 12,
      avgRating: 4.3,
      weatherAdvantage: 'New England weather',
      keyFeatures: ['Championship venue', 'New England tradition', 'Historic region'],
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
      city: 'Miami',
      region: 'South',
      country: 'USA',
      flag: '🇺🇸',
      capacity: 65326,
      capacityCategory: 'medium',
      matches: 6,
      image: 'https://readdy.ai/api/search-image?query=Hard%20Rock%20Stadium%20Miami%20aerial%20view%2C%20NFL%20stadium%20with%20tropical%20Florida%20backdrop%2C%20modern%20venue%20with%20canopy%20design%2C%20dramatic%20lighting%2C%20South%20Beach%20atmosphere&width=600&height=400&seq=hardrock1&orientation=landscape',
      opened: 1987,
      surface: 'Natural Grass',
      description: 'Tropical paradise venue with modern canopy design, offering South Beach glamour and year-round perfect weather.',
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
      image: 'https://readdy.ai/api/search-image?query=BMO%20Field%20Toronto%20waterfront%20stadium%20aerial%20view%20at%20sunset%2C%20soccer-specific%20stadium%2C%20Exhibition%20Place%2C%20Lake%20Ontario%20backdrop%2C%20dramatic%20lighting%20Toronto%20skyline&width=600&height=400&seq=bmo2&orientation=landscape',
      opened: 2007,
      surface: 'Natural Grass (Kentucky Bluegrass)',
      nearestMetro: 'Exhibition GO Station',
      metroDistance: 0.5,
      hotelCount: 120,
      avgHotelPrice: 219,
      nearestAirport: 'YYZ',
      airportDistance: 22,
      parkingSpaces: 8000,
      description: "Canada's original soccer-specific stadium on Toronto's waterfront, temporarily expanding to 45,736 seats for World Cup 2026.",
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
      image: 'https://readdy.ai/api/search-image?query=BC%20Place%20Vancouver%20aerial%20view%2C%20domed%20stadium%20with%20mountains%20and%20ocean%20backdrop%2C%20Pacific%20Northwest%20venue%20with%20natural%20beauty%2C%20dramatic%20lighting%2C%20coastal%20city%20atmosphere&width=600&height=400&seq=bcplace1&orientation=landscape',
      opened: 1983,
      surface: 'FieldTurf',
      description: 'Iconic domed venue with spectacular mountain and ocean views, representing Pacific Northwest beauty and Canadian hospitality.',
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
      city: 'Guadalajara',
      region: 'Mexico',
      country: 'Mexico',
      flag: '🇲🇽',
      capacity: 49850,
      capacityCategory: 'medium',
      matches: 4,
      image: 'https://readdy.ai/api/search-image?query=Estadio%20Akron%20Guadalajara%20aerial%20view%2C%20modern%20Mexican%20stadium%20architecture%2C%20cultural%20heritage%20venue%20with%20traditional%20atmosphere%2C%20dramatic%20lighting%2C%20mariachi%20country%20setting&width=600&height=400&seq=akron1&orientation=landscape',
      opened: 2010,
      surface: 'Natural Grass',
      description: 'Modern Mexican venue in the heart of mariachi country, blending traditional culture with contemporary stadium design.',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section - Matching Host Cities Page */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Epic%20collection%20of%2016%20football%20stadiums%20across%20North%20America%20aerial%20montage%2C%20diverse%20architectural%20styles%20from%20modern%20to%20classic%2C%20massive%20sports%20venues%2C%20dramatic%20lighting%2C%20tournament%20atmosphere%20excellence&width=1920&height=800&seq=venues-hero-new&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-building-line text-gold-400"></i>
              <span className="text-gold-300 font-medium">All 16 World Cup 2026 Stadiums</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-gold-200 bg-clip-text text-transparent">
              Every Stadium,
              <br />
              <span className="text-emerald-400">Every Detail</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From iconic giants to intimate arenas—explore every stadium hosting the world's biggest tournament. Find out where to stay nearby, how to get there, and what makes each venue special.
            </p>
          </div>

          {/* Live Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Stadiums</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">1.2M+</div>
              <div className="text-slate-300 font-inter text-sm">Total Capacity</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">1,347</div>
              <div className="text-slate-300 font-inter text-sm">Hotels Nearby</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1.8km</div>
              <div className="text-slate-300 font-inter text-sm">Average Distance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stadiums Grid - 2 Column Layout matching Cities */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              World Cup 2026 Stadiums
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Explore comprehensive guides for each stadium hosting the world's greatest football tournament.
            </p>
          </div>

          {/* 2-Column Grid Layout - Matching Cities Page */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <div key={venue.id} className="group bg-white dark:bg-navy-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-navy-700 hover:scale-[1.02] backdrop-blur-sm">
                
                {/* Hero Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={`${venue.name} stadium`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Stadium Name with Flag */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{venue.flag}</span>
                      <h3 className="font-space font-bold text-3xl text-white drop-shadow-lg">
                        {venue.name}
                      </h3>
                    </div>
                    <div className="flex items-center text-white/95 text-sm font-medium">
                      <i className="ri-map-pin-line mr-2 text-lg"></i>
                      <span>{venue.city}, {venue.region} • {venue.capacity.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Matches Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.matches} Matches
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
                    {venue.description}
                  </p>

                  {/* Removed hotel price ranges and availability sections for consistency */}

                  {/* Action Button */}
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth 
                    className="whitespace-nowrap cursor-pointer font-bold rounded-2xl transition-all duration-300 px-8 py-4 text-base bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl group-hover:scale-105 transform"
                    onClick={() => handleReadFullGuide(venue)}
                  >
                    <i className="ri-book-open-line mr-3 text-lg"></i>
                    Read Full Guide
                    <i className="ri-arrow-right-line ml-3 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
