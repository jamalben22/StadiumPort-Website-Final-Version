export interface Stadium {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'Canada' | 'Mexico';
  coordinates: {
    lat: number;
    lng: number;
  };
  capacity: string;
  matches: number; // Placeholder, can be updated with exact numbers
  image: string;
  highlights: string[];
}

export const WORLD_CUP_STADIUMS: Stadium[] = [
  // USA
  {
    id: 'lumen-field',
    name: 'Lumen Field',
    city: 'Seattle',
    country: 'USA',
    coordinates: { lat: 47.5952, lng: -122.3316 },
    capacity: '69,000',
    matches: 6,
    image: '/images/stadiums/lumen-field-seattle-world-cup-2026.webp',
    highlights: ['Loudest stadium in the NFL', 'Stunning skyline views', 'Located in historic Pioneer Square']
  },
  {
    id: 'levis-stadium',
    name: "Levi's Stadium",
    city: 'San Francisco Bay Area',
    country: 'USA',
    coordinates: { lat: 37.4032, lng: -121.9698 },
    capacity: '71,000',
    matches: 6,
    image: '/images/stadiums/levis-stadium-santa-clara-world-cup-2026.webp',
    highlights: ['High-tech sustainable venue', 'Home of the 49ers', 'Open-air design']
  },
  {
    id: 'sofi-stadium',
    name: 'SoFi Stadium',
    city: 'Los Angeles',
    country: 'USA',
    coordinates: { lat: 33.9534, lng: -118.3390 },
    capacity: '70,240',
    matches: 8,
    image: '/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp',
    highlights: ['State-of-the-art canopy roof', 'USMNT Opening Match host', 'Entertainment capital hub']
  },
  {
    id: 'arrowhead-stadium',
    name: 'Arrowhead Stadium',
    city: 'Kansas City',
    country: 'USA',
    coordinates: { lat: 39.0489, lng: -94.4839 },
    capacity: '73,000',
    matches: 6,
    image: '/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026.webp',
    highlights: ['Guinness World Record for crowd noise', 'Historic football venue', 'Famous tailgating culture']
  },
  {
    id: 'att-stadium',
    name: 'AT&T Stadium',
    city: 'Dallas',
    country: 'USA',
    coordinates: { lat: 32.7473, lng: -97.0945 },
    capacity: '94,000',
    matches: 9,
    image: '/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp',
    highlights: ['Largest domed structure in the world', 'Massive central video board', 'Hosting 9 matches (most of any venue)']
  },
  {
    id: 'mercedes-benz-stadium',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    country: 'USA',
    coordinates: { lat: 33.7553, lng: -84.4006 },
    capacity: '75,000',
    matches: 8,
    image: '/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp',
    highlights: ['Iconic retractable roof', '360-degree halo board', 'Hosting Semifinal match']
  },
  {
    id: 'nrg-stadium',
    name: 'NRG Stadium',
    city: 'Houston',
    country: 'USA',
    coordinates: { lat: 29.6847, lng: -95.4107 },
    capacity: '72,220',
    matches: 7,
    image: '/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp',
    highlights: ['First NFL stadium with retractable roof', 'Air-conditioned comfort', 'Hosting 7 matches']
  },
  {
    id: 'gillette-stadium',
    name: 'Gillette Stadium',
    city: 'Boston',
    country: 'USA',
    coordinates: { lat: 42.0909, lng: -71.2643 },
    capacity: '64,628',
    matches: 7,
    image: '/images/stadiums/gillette-stadium-foxborough-world-cup-2026.webp',
    highlights: ['New lighthouse renovation', 'Historic "Soccer City" legacy', 'Hosting Quarterfinal']
  },
  {
    id: 'lincoln-financial-field',
    name: 'Lincoln Financial Field',
    city: 'Philadelphia',
    country: 'USA',
    coordinates: { lat: 39.9013, lng: -75.1675 },
    capacity: '69,328',
    matches: 6,
    image: '/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp',
    highlights: ['LEED Gold certified green stadium', 'Passionate sports atmosphere', 'Hosting Round of 16 match']
  },
  {
    id: 'hard-rock-stadium',
    name: 'Hard Rock Stadium',
    city: 'Miami',
    country: 'USA',
    coordinates: { lat: 25.9580, lng: -80.2389 },
    capacity: '64,767',
    matches: 7,
    image: '/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp',
    highlights: ['Open-air canopy roof', 'Host of major global events', 'Hosting Bronze Final']
  },
  {
    id: 'metlife-stadium',
    name: 'MetLife Stadium',
    city: 'New York/New Jersey',
    country: 'USA',
    coordinates: { lat: 40.8135, lng: -74.0745 },
    capacity: '82,500',
    matches: 8,
    image: '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
    highlights: ['Hosting World Cup 2026 Final', 'Largest stadium in NFL', 'Located near NYC skyline']
  },
  // Canada
  {
    id: 'bc-place',
    name: 'BC Place',
    city: 'Vancouver',
    country: 'Canada',
    coordinates: { lat: 49.2768, lng: -123.1120 },
    capacity: '54,500',
    matches: 7,
    image: '/images/stadiums/bc-place-vancouver-world-cup-2026.webp',
    highlights: ['Retractable roof', 'Located in downtown Vancouver', 'Hosting 7 matches']
  },
  {
    id: 'bmo-field',
    name: 'BMO Field',
    city: 'Toronto',
    country: 'Canada',
    coordinates: { lat: 43.6332, lng: -79.4186 },
    capacity: '45,000',
    matches: 6,
    image: '/images/stadiums/bmo-field-toronto-world-cup-2026.webp',
    highlights: ['Historic Exhibition Place location', 'Open-air grass pitch', 'Hosting Canada opener']
  },
  // Mexico
  {
    id: 'estadio-azteca',
    name: 'Estadio Azteca',
    city: 'Mexico City',
    country: 'Mexico',
    coordinates: { lat: 19.3029, lng: -99.1505 },
    capacity: '87,523',
    matches: 5,
    image: '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp',
    highlights: ['Historic 3-time World Cup host', 'Legendary atmosphere', 'Hosting Tournament Opener']
  },
  {
    id: 'estadio-akron',
    name: 'Estadio Akron',
    city: 'Guadalajara',
    country: 'Mexico',
    coordinates: { lat: 20.6818, lng: -103.4626 },
    capacity: '48,071',
    matches: 4,
    image: '/images/stadiums/estadio-akron-guadalajara-world-cup-2026.webp',
    highlights: ['Modern volcano-inspired design', 'Eco-friendly rainwater collection', 'Passionate soccer hub']
  },
  {
    id: 'estadio-bbva',
    name: 'Estadio BBVA',
    city: 'Monterrey',
    country: 'Mexico',
    coordinates: { lat: 25.6180, lng: -100.2785 },
    capacity: '53,500',
    matches: 4,
    image: '/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp',
    highlights: ['"The Steel Giant" nickname', 'Stunning mountain backdrop', 'Modern sustainable design']
  }
];
