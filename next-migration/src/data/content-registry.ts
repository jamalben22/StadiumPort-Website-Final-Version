export interface ContentMeta {
  title: string;
  description: string;
  publishedAt: string; // ISO 8601 Date
  updatedAt: string;   // ISO 8601 Date
  wordCount?: number;
  author?: string;
  image?: string;
}

export const contentRegistry: Record<string, ContentMeta> = {
  // Host Cities
  'atlanta-city-guide': {
    title: 'Atlanta World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
    description: 'Plan World Cup 2026 in Atlanta: Mercedes-Benz Stadium tips, best downtown/Midtown hotels, MARTA strategy from ATL airport, dining, and safety.',
    publishedAt: '2025-12-16T00:00:00Z',
    updatedAt: '2025-12-16T00:00:00Z',
    wordCount: 4200,
    image: '/images/cities/atlanta-world-cup-2026.webp'
  },
  'boston-city-guide': {
    title: 'Boston World Cup 2026 Travel Guide: Gillette Stadium, Hotels & Transit',
    description: 'Complete guide to World Cup 2026 in Boston/Foxborough. Tips for Gillette Stadium access, Patriot Train, Seaport hotels, and historic fan zones.',
    publishedAt: '2025-12-18T00:00:00Z',
    updatedAt: '2025-12-18T00:00:00Z',
    wordCount: 3800,
    image: '/images/cities/boston-world-cup-2026.webp'
  },
  'dallas-city-guide': {
    title: 'Dallas World Cup 2026 Travel Guide: AT&T Stadium, Hotels & Transit',
    description: 'Your guide to the World Cup 2026 Semifinal city. AT&T Stadium logistics, Arlington vs. Downtown Dallas hotels, and transport tips.',
    publishedAt: '2025-12-20T00:00:00Z',
    updatedAt: '2025-12-20T00:00:00Z',
    wordCount: 4500,
    image: '/images/cities/dallas-world-cup-2026.webp'
  },
  'houston-city-guide': {
    title: 'Houston World Cup 2026 Travel Guide: NRG Stadium & Local Tips',
    description: 'Experience World Cup 2026 in Houston. NRG Stadium guide, best BBQ spots, NASA tours, and where to stay near the METRORail.',
    publishedAt: '2025-12-22T00:00:00Z',
    updatedAt: '2025-12-22T00:00:00Z',
    wordCount: 4000,
    image: '/images/cities/houston-world-cup-2026.webp'
  },
  'kansas-city-city-guide': {
    title: 'Kansas City World Cup 2026 Travel Guide: Arrowhead Stadium & BBQ',
    description: 'The heart of America hosts the World Cup. Arrowhead Stadium tips, Power & Light District fan zones, and the best BBQ in KC.',
    publishedAt: '2025-12-23T00:00:00Z',
    updatedAt: '2025-12-23T00:00:00Z',
    wordCount: 3600,
    image: '/images/cities/kansas-city-world-cup-2026.webp'
  },
  'los-angeles-city-guide': {
    title: 'Los Angeles World Cup 2026 Travel Guide: SoFi Stadium & Hollywood',
    description: 'USMNT host city guide. SoFi Stadium logistics, beach vs. downtown hotels, traffic survival guide, and celebrity spotting.',
    publishedAt: '2025-12-24T00:00:00Z',
    updatedAt: '2025-12-24T00:00:00Z',
    wordCount: 4800,
    image: '/images/cities/los-angeles-world-cup-2026.webp'
  },
  'miami-city-guide': {
    title: 'Miami World Cup 2026 Travel Guide: Hard Rock Stadium & Beaches',
    description: 'Bronze Final host city. Hard Rock Stadium guide, South Beach parties, Wynwood arts district, and luxury travel tips.',
    publishedAt: '2025-12-25T00:00:00Z',
    updatedAt: '2025-12-25T00:00:00Z',
    wordCount: 4100,
    image: '/images/cities/miami-world-cup-2026.webp'
  },
  'new-york-city-guide': {
    title: 'New York/NJ World Cup 2026 Travel Guide: MetLife Stadium Final',
    description: 'The World Cup Final guide. MetLife Stadium transit from NYC, Times Square fan zones, and navigating the biggest event in history.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 5000,
    image: '/images/cities/new-york-new-jersey-world-cup-2026.webp'
  },
  'philadelphia-city-guide': {
    title: 'Philadelphia World Cup 2026 Travel Guide: Lincoln Financial Field',
    description: 'Celebrate America\'s 250th birthday at the World Cup. Lincoln Financial Field guide, historic sites, and cheesesteaks.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 3900,
    image: '/images/cities/philadelphia-world-cup-2026.webp'
  },
  'san-francisco-city-guide': {
    title: 'San Francisco Bay Area World Cup 2026 Guide: Levi\'s Stadium',
    description: 'Tech meets soccer. Levi\'s Stadium (Santa Clara) guide, SF sightseeing, wine country trips, and Caltrain logistics.',
    publishedAt: '2025-12-28T00:00:00Z',
    updatedAt: '2025-12-28T00:00:00Z',
    wordCount: 4300,
    image: '/images/cities/san-francisco-world-cup-2026.webp'
  },
  'seattle-city-guide': {
    title: 'Seattle World Cup 2026 Travel Guide: Lumen Field & Pike Place',
    description: 'USMNT Group Stage host. Lumen Field atmosphere, ferry rides, coffee culture, and exploring the Pacific Northwest.',
    publishedAt: '2025-12-29T00:00:00Z',
    updatedAt: '2025-12-29T00:00:00Z',
    wordCount: 4800,
    image: '/images/cities/seattle-world-cup-2026.webp'
  },
  'world-cup-2026-packing-guide': {
    title: 'World Cup 2026 Packing Guide: Ultimate Checklist for All Weather',
    description: 'From Mexican heat to Canadian cool. What to bring for a continent-spanning adventure.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 4000,
    image: '/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp'
  },
  'world-cup-2026-match-selection-strategy': {
    title: 'World Cup 2026 Match Selection Strategy: Which Games to Attend',
    description: 'Group stage value vs. knockout drama. How to build a match schedule that delivers unforgettable moments.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 4200,
    image: '/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp'
  },
  'world-cup-2026-food-dining-guide': {
    title: 'World Cup 2026 Food & Dining Guide: Eating Well on Any Budget',
    description: 'Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion with our 2026 World Cup food guide.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 3600,
    image: '/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp'
  },
  'toronto-city-guide': {
    title: 'Toronto World Cup 2026 Travel Guide: BMO Field & CN Tower',
    description: 'Canada\'s World Cup hub. BMO Field guide, downtown exploration, multicultural dining, and easy transit access.',
    publishedAt: '2025-12-30T00:00:00Z',
    updatedAt: '2025-12-30T00:00:00Z',
    wordCount: 3700,
    image: '/images/cities/toronto-world-cup-2026.webp'
  },
  'vancouver-city-guide': {
    title: 'Vancouver World Cup 2026 Travel Guide: BC Place & Nature',
    description: 'The most scenic World Cup host city. BC Place guide, Sea-to-Sky highway trips, Stanley Park, and waterfront luxury.',
    publishedAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z',
    wordCount: 3800,
    image: '/images/cities/vancouver-world-cup-2026.webp'
  },
  'guadalajara-city-guide': {
    title: 'Guadalajara World Cup 2026 Travel Guide: Estadio Akron & Culture',
    description: 'The soul of Mexico. Estadio Akron guide, tequila tours, historic center architecture, and vibrant fan culture.',
    publishedAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
    wordCount: 3500,
    image: '/images/cities/guadalajara-world-cup-2026.webp'
  },
  'mexico-city-city-guide': {
    title: 'Mexico City World Cup 2026 Travel Guide: Estadio Azteca',
    description: 'The historic opener host. Estadio Azteca guide, Condesa/Roma neighborhoods, world-class museums, and street food.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 4600,
    image: '/images/cities/mexico-city-world-cup-2026.webp'
  },
  'monterrey-city-guide': {
    title: 'Monterrey World Cup 2026 Travel Guide: Estadio BBVA',
    description: 'The modern powerhouse. Estadio BBVA (The Steel Giant) guide, San Pedro Garza García luxury, and mountain views.',
    publishedAt: '2026-01-03T00:00:00Z',
    updatedAt: '2026-01-03T00:00:00Z',
    wordCount: 3400,
    image: '/images/cities/monterrey-world-cup-2026.webp'
  },

  // Groups
  'group-a': {
    title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey',
    description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-a-hero.webp'
  },
  'group-b': {
    title: 'World Cup 2026 Group B Travel Guide: Vancouver, Seattle, SF & LA',
    description: 'The definitive guide for following Group B in World Cup 2026. Master the Pacific Coast Strategy (Vancouver-Seattle-SF-LA). Flights, border crossings, and budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2600,
    image: '/images/groups/group-b-hero.webp'
  },
  'group-c': {
    title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
    description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2700,
    image: '/images/groups/group-c-hero.webp'
  },
  'group-d': {
    title: 'World Cup 2026 Group D Travel Guide: Seattle, San Francisco & Los Angeles',
    description: 'The ultimate Group D travel guide. Master the West Coast route: Seattle, SF Bay Area, and Los Angeles. Pacific Coast Highway tips, budget strategy, and stadium logistics.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-d-hero.webp'
  },
  'group-e': {
    title: 'World Cup 2026 Group E Travel Guide: Philadelphia, Houston & KC',
    description: 'The ultimate Group E travel guide. Master the route: Philadelphia, Houston, Kansas City, Toronto, and NY/NJ. Budget tips, Amtrak strategy, and stadium logistics.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2400,
    image: '/images/groups/group-e-hero.webp'
  },
  'group-f': {
    title: 'World Cup 2026 Group F Travel Guide: Dallas, Houston, KC & Monterrey',
    description: 'The definitive guide for following Group F in World Cup 2026. Master the Tex-Mex Corridor (Dallas-Houston-Monterrey) and the Midwest Hub (Kansas City). Drive times, heat safety, and border tips.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2800,
    image: '/images/groups/group-f-hero.webp'
  },
  'group-g': {
    title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
    description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-g-hero.webp'
  },
  'group-h': {
    title: 'World Cup 2026 Group H Travel Guide: Miami, Houston & Atlanta',
    description: 'The definitive guide for following Group H in World Cup 2026. Master the Southern Triangle (Miami-Houston-Atlanta). Flight strategies, stadium cooling tips, and budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2600,
    image: '/images/groups/group-h-hero.webp'
  },
  'group-i': {
    title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles',
    description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2400,
    image: '/images/groups/group-i-hero.webp'
  },
  'group-j': {
    title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
    description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2700,
    image: '/images/groups/group-j-hero.webp'
  },
  'group-k': {
    title: 'World Cup 2026 Group K Travel Guide: Mexico City, Houston, Atlanta & Miami',
    description: 'The definitive guide for following Group K in World Cup 2026. Master the Southern Crossing (Mexico City-Houston-Atlanta-Miami). Altitude, humidity, and hub strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2800,
    image: '/images/groups/group-k-hero.webp'
  },
  'group-l': {
    title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas',
    description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 3000,
    image: '/images/groups/group-l-hero.webp'
  },

  // Travel Tips
  'world-cup-2026-budget-guide': {
    title: 'World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies',
    description: 'The ultimate World Cup 2026 budget guide. Verified costs for tickets, flights, and hotels in USA, Canada & Mexico. Plus 15+ proven money-saving strategies.',
    publishedAt: '2025-06-01T00:00:00Z',
    updatedAt: '2025-06-01T00:00:00Z',
    wordCount: 3500,
    image: '/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp'
  },
  'best-time-book-world-cup-2026': {
    title: 'Best Time to Book World Cup 2026: Tickets, Flights & Hotels',
    description: 'The definitive timeline for booking World Cup 2026. Data-backed guide on when to buy tickets, flights, and hotels to save thousands. Don\'t miss the 11-month sweet spot.',
    publishedAt: '2025-06-15T00:00:00Z',
    updatedAt: '2025-06-15T00:00:00Z',
    wordCount: 3200,
    image: '/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp'
  },
  'world-cup-2026-accommodation-guide': {
    title: 'World Cup 2026 Accommodation Guide: Where to Stay for Every Budget',
    description: 'The definitive World Cup 2026 accommodation guide. Neighborhood breakdowns, price ranges, and booking strategies for all 16 host cities in USA, Canada & Mexico.',
    publishedAt: '2025-06-20T00:00:00Z',
    updatedAt: '2025-06-20T00:00:00Z',
    wordCount: 4500,
    image: '/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp'
  },
  'world-cup-2026-flight-booking-guide': {
    title: 'World Cup 2026 Flight Booking Guide: Routes, Airlines & Strategies',
    description: 'Expert guide to booking World Cup 2026 flights. Best routes between US, Canada, and Mexico host cities, hub airports, and open-jaw ticket strategies.',
    publishedAt: '2025-12-29T00:00:00Z',
    updatedAt: '2025-12-29T00:00:00Z',
    wordCount: 4200,
    image: '/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp'
  },
  'world-cup-2026-itinerary-planning': {
    title: 'World Cup 2026 Itinerary Planning: 1, 2, or 3 Week Sample Itineraries',
    description: 'Optimized World Cup 2026 itineraries for 1, 2, and 3-week trips. Daily schedules, budget breakdowns, and logistics for USA, Canada, and Mexico.',
    publishedAt: '2025-12-29T00:00:00Z',
    updatedAt: '2025-12-29T00:00:00Z',
    wordCount: 4800,
    image: '/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp'
  },

  // Legal
  'editorial-policy': {
    title: 'Editorial Policy – Stadiumport',
    description: 'Our commitment to accuracy, transparency, and trust. Learn about Stadiumport\'s editorial standards for World Cup 2026 travel guides.',
    publishedAt: '2025-12-01T00:00:00Z',
    updatedAt: '2025-12-01T00:00:00Z',
    wordCount: 1200,
    image: '/images/legal/editorial-hero.webp'
  }
};

export const getContentMeta = (slug: string): ContentMeta | undefined => {
  return contentRegistry[slug];
};
