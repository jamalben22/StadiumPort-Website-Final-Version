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
    title: 'Atlanta World Cup 2026 Guide: Hotels, Transport & Tickets',
    description: 'Plan your World Cup 2026 trip to Atlanta. Mercedes-Benz Stadium guide, downtown hotels, MARTA airport transit, dining & safety tips.',
    publishedAt: '2025-12-16T00:00:00Z',
    updatedAt: '2025-12-16T00:00:00Z',
    wordCount: 4200,
    image: '/images/cities/atlanta-world-cup-2026.webp'
  },
  'boston-city-guide': {
    title: 'Boston World Cup 2026 Guide: Gillette Stadium & Hotels',
    description: 'Complete World Cup 2026 guide for Boston. Gillette Stadium access, Patriot Train tips, Seaport hotels & historic fan zones.',
    publishedAt: '2025-12-18T00:00:00Z',
    updatedAt: '2025-12-18T00:00:00Z',
    wordCount: 3800,
    image: '/images/cities/boston-world-cup-2026.webp'
  },
  'dallas-city-guide': {
    title: 'Dallas World Cup 2026 Guide: AT&T Stadium & Hotels',
    description: 'Your World Cup 2026 Semifinal guide. AT&T Stadium logistics, Arlington vs. Downtown Dallas hotels & essential transport tips.',
    publishedAt: '2025-12-20T00:00:00Z',
    updatedAt: '2025-12-20T00:00:00Z',
    wordCount: 4500,
    image: '/images/cities/dallas-world-cup-2026.webp'
  },
  'houston-city-guide': {
    title: 'Houston World Cup 2026 Guide: NRG Stadium & Travel',
    description: 'Experience World Cup 2026 in Houston. NRG Stadium guide, best BBQ spots, NASA tours & staying near the METRORail.',
    publishedAt: '2025-12-22T00:00:00Z',
    updatedAt: '2025-12-22T00:00:00Z',
    wordCount: 4000,
    image: '/images/cities/houston-world-cup-2026.webp'
  },
  'kansas-city-city-guide': {
    title: 'Kansas City World Cup 2026 Guide: Arrowhead Stadium & BBQ',
    description: 'The heart of America hosts the World Cup. Arrowhead Stadium tips, Power & Light District fan zones & the best KC BBQ.',
    publishedAt: '2025-12-23T00:00:00Z',
    updatedAt: '2025-12-23T00:00:00Z',
    wordCount: 3600,
    image: '/images/cities/kansas-city-world-cup-2026.webp'
  },
  'los-angeles-city-guide': {
    title: 'Los Angeles World Cup 2026 Guide: SoFi Stadium & Hollywood',
    description: 'USMNT host city guide. SoFi Stadium logistics, beach vs. downtown hotels, traffic survival guide & celebrity spotting.',
    publishedAt: '2025-12-24T00:00:00Z',
    updatedAt: '2025-12-24T00:00:00Z',
    wordCount: 4800,
    image: '/images/cities/los-angeles-world-cup-2026.webp'
  },
  'miami-city-guide': {
    title: 'Miami World Cup 2026 Guide: Hard Rock Stadium & Beaches',
    description: 'Bronze Final host city guide. Hard Rock Stadium tips, South Beach parties, Wynwood arts district & luxury travel info.',
    publishedAt: '2025-12-25T00:00:00Z',
    updatedAt: '2025-12-25T00:00:00Z',
    wordCount: 4100,
    image: '/images/cities/miami-world-cup-2026.webp'
  },
  'new-york-city-guide': {
    title: 'New York/NJ World Cup 2026 Guide: MetLife Stadium Final',
    description: 'The World Cup 2026 Final guide. MetLife Stadium transit from NYC, Times Square fan zones & navigating the biggest event.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 5000,
    image: '/images/cities/new-york-new-jersey-world-cup-2026.webp'
  },
  'philadelphia-city-guide': {
    title: 'Philadelphia World Cup 2026 Guide: Lincoln Financial Field',
    description: 'Celebrate America\'s 250th birthday at World Cup 2026. Lincoln Financial Field guide, historic sites & cheesesteak spots.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 3900,
    image: '/images/cities/philadelphia-world-cup-2026.webp'
  },
  'san-francisco-city-guide': {
    title: 'San Francisco World Cup 2026 Guide: Levi\'s Stadium Tips',
    description: 'Tech meets soccer. Levi\'s Stadium (Santa Clara) guide, SF sightseeing, wine country trips & Caltrain logistics.',
    publishedAt: '2025-12-28T00:00:00Z',
    updatedAt: '2025-12-28T00:00:00Z',
    wordCount: 4300,
    image: '/images/cities/san-francisco-world-cup-2026.webp'
  },
  'seattle-city-guide': {
    title: 'Seattle World Cup 2026 Guide: Lumen Field & Travel',
    description: 'USMNT Group Stage host. Lumen Field atmosphere, ferry rides, coffee culture & exploring the Pacific Northwest.',
    publishedAt: '2025-12-29T00:00:00Z',
    updatedAt: '2025-12-29T00:00:00Z',
    wordCount: 4800,
    image: '/images/cities/seattle-world-cup-2026.webp'
  },
  'world-cup-2026-travel-insurance-guide': {
    title: 'World Cup 2026 Travel Insurance: Complete Protection Guide',
    description: 'Essential World Cup 2026 travel insurance guide. Compare costs, coverage & providers. Why coverage is non-negotiable for USA, Canada & Mexico.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 3000,
    image: '/images/safety-guide/A_realistic_high-detail_photo_of_travel_insurance_essentials_for_World_Cup_2026.webp'
  },
  'world-cup-2026-passport-document-security': {
    title: 'World Cup 2026 Document Security: Protect Your Identity',
    description: 'Safeguard your passport & visa during World Cup 2026. Learn the 3-location rule, RFID prevention & digital backup methods.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 2800,
    image: '/images/safety-guide/Passport & Document Security Protecting Your Identity.webp'
  },
  'world-cup-2026-money-financial-safety': {
    title: 'World Cup 2026 Money Safety: Cash, Cards & Currency',
    description: 'Financial safety guide for World Cup 2026. Cash strategies for USA, Canada & Mexico, best travel cards, ATM tips & fraud prevention.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 4200,
    image: '/images/safety-guide/Money & Financial Safety Cash Cards & Currencies.webp'
  },
  'world-cup-2026-accommodation-security': {
    title: 'World Cup 2026 Accommodation Security: Safe Stay Guide',
    description: 'Accommodation security guide for World Cup 2026. Safe hotel strategies, Airbnb verification, neighborhood safety & scam prevention.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 4500,
    image: '/images/safety-guide/Accommodation Security_Safe Stays.webp'
  },
  'world-cup-2026-packing-guide': {
    title: 'World Cup 2026 Packing Guide: Ultimate Fan Checklist',
    description: 'From Mexican heat to Canadian cool. What to pack for a continent-spanning World Cup 2026 adventure.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 4000,
    image: '/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp'
  },
  'world-cup-2026-match-selection-strategy': {
    title: 'World Cup 2026 Match Strategy: Which Games to Attend?',
    description: 'Group stage value vs. knockout drama. How to build a World Cup 2026 match schedule that delivers unforgettable moments.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 4200,
    image: '/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp'
  },
  'world-cup-2026-food-dining-guide': {
    title: 'World Cup 2026 Food Guide: Dining on Any Budget',
    description: 'Street tacos in Mexico City, BBQ in Kansas City & pizza in NY. Eat like a local champion with our 2026 World Cup food guide.',
    publishedAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    wordCount: 3600,
    image: '/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp'
  },
  'toronto-city-guide': {
    title: 'Toronto World Cup 2026 Guide: BMO Field & Travel Tips',
    description: 'Canada\'s World Cup hub. BMO Field guide, downtown exploration, multicultural dining & easy transit access.',
    publishedAt: '2025-12-30T00:00:00Z',
    updatedAt: '2025-12-30T00:00:00Z',
    wordCount: 3700,
    image: '/images/cities/toronto-world-cup-2026.webp'
  },
  'vancouver-city-guide': {
    title: 'Vancouver World Cup 2026 Guide: BC Place & Travel Tips',
    description: 'The most scenic World Cup host city. BC Place guide, Sea-to-Sky highway trips, Stanley Park & waterfront luxury.',
    publishedAt: '2025-12-31T00:00:00Z',
    updatedAt: '2025-12-31T00:00:00Z',
    wordCount: 3800,
    image: '/images/cities/vancouver-world-cup-2026.webp'
  },
  'guadalajara-city-guide': {
    title: 'Guadalajara World Cup 2026 Guide: Estadio Akron & Tips',
    description: 'The soul of Mexico. Estadio Akron guide, tequila tours, historic center architecture & vibrant fan culture.',
    publishedAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
    wordCount: 3500,
    image: '/images/cities/guadalajara-world-cup-2026.webp'
  },
  'mexico-city-city-guide': {
    title: 'Mexico City World Cup 2026 Guide: Estadio Azteca & Tips',
    description: 'The historic opener host. Estadio Azteca guide, Condesa/Roma neighborhoods, world-class museums & street food.',
    publishedAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    wordCount: 4600,
    image: '/images/cities/mexico-city-world-cup-2026.webp'
  },
  'monterrey-city-guide': {
    title: 'Monterrey World Cup 2026 Guide: Estadio BBVA & Travel',
    description: 'The modern powerhouse. Estadio BBVA (The Steel Giant) guide, San Pedro Garza García luxury & mountain views.',
    publishedAt: '2026-01-03T00:00:00Z',
    updatedAt: '2026-01-03T00:00:00Z',
    wordCount: 3400,
    image: '/images/cities/monterrey-world-cup-2026.webp'
  },

  // Groups
  'group-a': {
    title: 'World Cup 2026 Group A Guide: Teams, Schedule & Cities',
    description: 'Group A guide for World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) & Northern Jump (Monterrey). Buses, flights & safety.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-a-hero.webp'
  },
  'group-b': {
    title: 'World Cup 2026 Group B Guide: Teams, Schedule & Cities',
    description: 'Group B guide for World Cup 2026. Master the Pacific Coast Strategy (Vancouver-Seattle-SF-LA). Flights, borders & budget.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2600,
    image: '/images/groups/group-b-hero.webp'
  },
  'group-c': {
    title: 'World Cup 2026 Group C Guide: Teams, Schedule & Cities',
    description: 'Group C guide for World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) & Southern Leg (Atlanta-Miami). Trains & flights.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2700,
    image: '/images/groups/group-c-hero.webp'
  },
  'group-d': {
    title: 'World Cup 2026 Group D Guide: Teams, Schedule & Cities',
    description: 'Group D guide for World Cup 2026. Master the West Coast route: Seattle, SF Bay Area & Los Angeles. PCH tips & logistics.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-d-hero.webp'
  },
  'group-e': {
    title: 'World Cup 2026 Group E Guide: Teams, Schedule & Cities',
    description: 'Group E guide for World Cup 2026. Master the route: Philadelphia, Houston, KC, Toronto & NY/NJ. Amtrak & stadium logistics.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2400,
    image: '/images/groups/group-e-hero.webp'
  },
  'group-f': {
    title: 'World Cup 2026 Group F Guide: Teams, Schedule & Cities',
    description: 'Group F guide for World Cup 2026. Master the Tex-Mex Corridor (Dallas-Houston-Monterrey) & Midwest Hub (KC). Drive times & safety.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2800,
    image: '/images/groups/group-f-hero.webp'
  },
  'group-g': {
    title: 'World Cup 2026 Group G Guide: Teams, Schedule & Cities',
    description: 'Group G guide for World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) & Pacific Jump to LA. Trains & flights.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2500,
    image: '/images/groups/group-g-hero.webp'
  },
  'group-h': {
    title: 'World Cup 2026 Group H Guide: Teams, Schedule & Cities',
    description: 'Group H guide for World Cup 2026. Master the Southern Triangle (Miami-Houston-Atlanta). Flight strategies & stadium cooling.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2600,
    image: '/images/groups/group-h-hero.webp'
  },
  'group-i': {
    title: 'World Cup 2026 Group I Guide: Teams, Schedule & Cities',
    description: 'Group I guide for World Cup 2026. Master the California Corridor (SF-LA). PCH tips, stadium logistics & budget strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2400,
    image: '/images/groups/group-i-hero.webp'
  },
  'group-j': {
    title: 'World Cup 2026 Group J Guide: Teams, Schedule & Cities',
    description: 'Group J guide for World Cup 2026. Master the American Frontier (KC-Dallas-SF). Flights, rentals & heat strategy.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2700,
    image: '/images/groups/group-j-hero.webp'
  },
  'group-k': {
    title: 'World Cup 2026 Group K Guide: Teams, Schedule & Cities',
    description: 'Group K guide for World Cup 2026. Master the Southern Crossing (CDMX-Houston-Atlanta-Miami). Altitude, humidity & hubs.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 2800,
    image: '/images/groups/group-k-hero.webp'
  },
  'group-l': {
    title: 'World Cup 2026 Group L Guide: Teams, Schedule & Cities',
    description: 'Group L guide for World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) & Texas Jump (Dallas). Borders & trains.',
    publishedAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    wordCount: 3000,
    image: '/images/groups/group-l-hero.webp'
  },

  // Travel Tips
  'world-cup-2026-budget-guide': {
    title: 'World Cup 2026 Budget Guide: Costs & Savings Strategies',
    description: 'The ultimate World Cup 2026 budget guide. Verified costs for tickets, flights & hotels in USA, Canada & Mexico. 15+ proven saving tips.',
    publishedAt: '2025-06-01T00:00:00Z',
    updatedAt: '2025-06-01T00:00:00Z',
    wordCount: 3500,
    image: '/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp'
  },
  'best-time-book-world-cup-2026': {
    title: 'Best Time to Book World Cup 2026: Tickets & Flights',
    description: 'The definitive timeline for booking World Cup 2026. Data-backed guide on when to buy tickets, flights & hotels to save thousands.',
    publishedAt: '2025-06-15T00:00:00Z',
    updatedAt: '2025-06-15T00:00:00Z',
    wordCount: 3200,
    image: '/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp'
  },
  'world-cup-2026-accommodation-guide': {
    title: 'World Cup 2026 Accommodation Guide: Hotels & Where to Stay',
    description: 'Complete World Cup 2026 accommodation guide. Hotels, hostels & booking strategies for all 16 host cities in USA, Canada & Mexico.',
    publishedAt: '2025-06-20T00:00:00Z',
    updatedAt: '2025-06-20T00:00:00Z',
    wordCount: 4500,
    image: '/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp'
  },
  'world-cup-2026-flight-booking-guide': {
    title: 'World Cup 2026 Flight Booking Guide: Routes & Strategies',
    description: 'Expert guide to booking World Cup 2026 flights. Best routes between US, Canada & Mexico host cities, hub airports & open-jaw strategies.',
    publishedAt: '2025-12-29T00:00:00Z',
    updatedAt: '2025-12-29T00:00:00Z',
    wordCount: 4200,
    image: '/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp'
  },
  'world-cup-2026-itinerary-planning': {
    title: 'World Cup 2026 Itinerary Planning: 1-3 Week Samples',
    description: 'Optimized World Cup 2026 itineraries for 1, 2 & 3-week trips. Daily schedules, budgets & logistics for USA, Canada & Mexico.',
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
