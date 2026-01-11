
export interface HostCity {
  id: string;
  name: string;
  country: 'USA' | 'Canada' | 'Mexico';
  region: string; // State or Province
  coordinates: {
    lat: number;
    lng: number;
  };
  stadium: string;
  capacity: string;
  matches: number;
  description: string;
  image: string;
  highlights: string[];
}

export const HOST_CITIES: HostCity[] = [
  // Canada
  {
    id: 'vancouver',
    name: 'Vancouver',
    country: 'Canada',
    region: 'BC',
    coordinates: { lat: 49.2827, lng: -123.1207 },
    stadium: 'BC Place',
    capacity: '54,500',
    matches: 7,
    description: 'A stunning coastal city surrounded by mountains, hosting matches at the renovated BC Place.',
    image: '/images/cities/vancouver-world-cup-2026.webp',
    highlights: ['Host of 7 World Cup matches', 'Stunning mountain & ocean views', 'Vibrant diverse food scene']
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    region: 'ON',
    coordinates: { lat: 43.6532, lng: -79.3832 },
    stadium: 'BMO Field',
    capacity: '45,000',
    matches: 6,
    description: 'Canada\'s largest city and financial hub, offering a diverse cultural experience.',
    image: '/images/cities/toronto-world-cup-2026.webp',
    highlights: ['Canada\'s largest financial hub', 'Iconic CN Tower skyline', 'Multicultural neighborhoods']
  },
  // USA - West
  {
    id: 'seattle',
    name: 'Seattle',
    country: 'USA',
    region: 'WA',
    coordinates: { lat: 47.6062, lng: -122.3321 },
    stadium: 'Lumen Field',
    capacity: '69,000',
    matches: 6,
    description: 'Famous for its passionate soccer culture and iconic waterfront setting.',
    image: '/images/cities/seattle-world-cup-2026.webp',
    highlights: ['Home of the Space Needle', 'Passionate soccer culture', 'Scenic waterfront views']
  },
  {
    id: 'san-francisco',
    name: 'San Francisco Bay Area',
    country: 'USA',
    region: 'CA',
    coordinates: { lat: 37.403, lng: -121.97 }, // Levi's Stadium location
    stadium: 'Levi\'s Stadium',
    capacity: '71,000',
    matches: 6,
    description: 'Tech hub meets soccer in the beautiful Bay Area setting.',
    image: '/images/cities/san-francisco-world-cup-2026.webp',
    highlights: ['Silicon Valley tech hub', 'Golden Gate Bridge nearby', 'Wine country access']
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'USA',
    region: 'CA',
    coordinates: { lat: 33.9535, lng: -118.339 }, // SoFi Stadium
    stadium: 'SoFi Stadium',
    capacity: '70,000',
    matches: 8,
    description: 'The entertainment capital of the world, hosting the US team opener.',
    image: '/images/cities/los-angeles-world-cup-2026.webp',
    highlights: ['USMNT Opening Match host', 'Entertainment capital of the world', 'State-of-the-art SoFi Stadium']
  },
  // USA - Central
  {
    id: 'kansas-city',
    name: 'Kansas City',
    country: 'USA',
    region: 'MO',
    coordinates: { lat: 39.0489, lng: -94.4839 }, // Arrowhead
    stadium: 'Arrowhead Stadium',
    capacity: '73,000',
    matches: 6,
    description: 'The heart of America, known for incredible BBQ and passionate fans.',
    image: '/images/cities/kansas-city-world-cup-2026.webp',
    highlights: ['World-famous BBQ', 'Loudest stadium in the world', 'Heart of America location']
  },
  {
    id: 'dallas',
    name: 'Dallas',
    country: 'USA',
    region: 'TX',
    coordinates: { lat: 32.7473, lng: -97.0945 }, // AT&T Stadium
    stadium: 'AT&T Stadium',
    capacity: '94,000',
    matches: 9,
    description: 'Hosting the most matches of any city, including a semi-final.',
    image: '/images/cities/dallas-world-cup-2026.webp',
    highlights: ['Most matches of any host city (9)', 'Semi-final host venue', 'Massive entertainment district']
  },
  {
    id: 'houston',
    name: 'Houston',
    country: 'USA',
    region: 'TX',
    coordinates: { lat: 29.6847, lng: -95.4107 }, // NRG Stadium
    stadium: 'NRG Stadium',
    capacity: '72,000',
    matches: 7,
    description: 'A diverse metropolis with a state-of-the-art retractable roof stadium.',
    image: '/images/cities/houston-world-cup-2026.webp',
    highlights: ['Space City NASA center', 'Diverse culinary scene', 'Retractable roof stadium']
  },
  // USA - East
  {
    id: 'atlanta',
    name: 'Atlanta',
    country: 'USA',
    region: 'GA',
    coordinates: { lat: 33.7553, lng: -84.4006 }, // Mercedes-Benz Stadium
    stadium: 'Mercedes-Benz Stadium',
    capacity: '75,000',
    matches: 8,
    description: 'A modern architectural marvel in the cultural capital of the South.',
    image: '/images/cities/atlanta-world-cup-2026.webp',
    highlights: ['Semi-final host venue', 'Cultural capital of the South', 'World\'s busiest airport hub']
  },
  {
    id: 'boston',
    name: 'Boston',
    country: 'USA',
    region: 'MA',
    coordinates: { lat: 42.0909, lng: -71.2643 }, // Gillette Stadium
    stadium: 'Gillette Stadium',
    capacity: '64,000',
    matches: 7,
    description: 'Historic city with a rich sporting tradition in New England.',
    image: '/images/cities/boston-world-cup-2026.webp',
    highlights: ['Rich American history', 'Passionate sports fans', 'Prestigious university hub']
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    country: 'USA',
    region: 'PA',
    coordinates: { lat: 39.9008, lng: -75.1675 }, // Lincoln Financial Field
    stadium: 'Lincoln Financial Field',
    capacity: '69,000',
    matches: 6,
    description: 'The birthplace of America, hosting matches in a passionate sports city.',
    image: '/images/cities/philadelphia-world-cup-2026.webp',
    highlights: ['Birthplace of America', 'Historic Liberty Bell', 'Famous cheesesteaks']
  },
  {
    id: 'new-york',
    name: 'New York / New Jersey',
    country: 'USA',
    region: 'NJ', // MetLife is in NJ
    coordinates: { lat: 40.8135, lng: -74.0745 }, // MetLife Stadium
    stadium: 'MetLife Stadium',
    capacity: '82,500',
    matches: 8,
    description: 'Hosting the World Cup Final in the biggest media market in the world.',
    image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
    highlights: ['World Cup Final Host', 'Global cultural capital', 'Iconic skyline & Broadway']
  },
  {
    id: 'miami',
    name: 'Miami',
    country: 'USA',
    region: 'FL',
    coordinates: { lat: 25.958, lng: -80.2389 }, // Hard Rock Stadium
    stadium: 'Hard Rock Stadium',
    capacity: '65,000',
    matches: 7,
    description: 'International gateway with Latin flair and a world-class venue.',
    image: '/images/cities/miami-world-cup-2026.webp',
    highlights: ['Gateway to Latin America', 'South Beach nightlife', 'Tropical climate']
  },
  // Mexico
  {
    id: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    region: 'CDMX',
    coordinates: { lat: 19.3029, lng: -99.1505 }, // Azteca
    stadium: 'Estadio Azteca',
    capacity: '83,000',
    matches: 5,
    description: 'The historic colossus hosting the opening match of the tournament.',
    image: '/images/cities/mexico-city-world-cup-2026.webp',
    highlights: ['Tournament Opening Match', 'Historic 3-time host stadium', 'Cultural heart of Mexico']
  },
  {
    id: 'guadalajara',
    name: 'Guadalajara',
    country: 'Mexico',
    region: 'JAL',
    coordinates: { lat: 20.6817, lng: -103.4626 }, // Akron
    stadium: 'Estadio Akron',
    capacity: '48,000',
    matches: 4,
    description: 'The pearl of the west, combining tradition with a modern stadium.',
    image: '/images/cities/guadalajara-world-cup-2026.webp',
    highlights: ['Home of Mariachi & Tequila', 'Modern Estadio Akron', 'Rich colonial history']
  },
  {
    id: 'monterrey',
    name: 'Monterrey',
    country: 'Mexico',
    region: 'N.L.',
    coordinates: { lat: 25.6172, lng: -100.2443 }, // BBVA
    stadium: 'Estadio BBVA',
    capacity: '53,500',
    matches: 4,
    description: 'Set against a stunning mountain backdrop, one of the most beautiful venues.',
    image: '/images/cities/monterrey-world-cup-2026.webp',
    highlights: ['Stunning mountain backdrop', 'Modern industrial hub', 'Passionate local fans']
  }
];
