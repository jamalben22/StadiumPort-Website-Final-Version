export interface CityCluster {
  name: string;
}

export interface KeyStadium {
  name: string;
}

export interface GroupData {
  id: string;
  name: string;
  cityCluster: CityCluster[];
  description: string;
  keyStadiums: KeyStadium[];
  highlights: string[];
  link: string;
}

export interface LinkItem {
  name: string;
  url: string;
}

export const GROUPS_DATA: GroupData[] = [
  {
    id: 'A',
    name: 'Group A – The Aztec Heartland',
    cityCluster: [
      { name: 'Mexico City' },
      { name: 'Guadalajara' },
      { name: 'Monterrey' },
      { name: 'Atlanta' }
    ],
    description: 'A compact, Mexico-heavy travel footprint with excellent domestic flight links and two affordable base camps. This group offers some of the tournament\'s lowest travel costs with short flights between Mexican cities and a single US connection.',
    keyStadiums: [
      { name: 'Estadio Azteca' },
      { name: 'Estadio Akron' },
      { name: 'Estadio BBVA' },
      { name: 'Mercedes-Benz Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours between cities',
      '💵 Estimated base cost: $850-1,200 for all group matches',
      '⭐ Best base camp: Mexico City (central hub with daily flights to all three cities)'
    ],
    link: '/world-cup-2026-groups/group-a'
  },
  {
    id: 'B',
    name: 'Group B – Pacific Coast & Canada Blend',
    cityCluster: [
      { name: 'Vancouver' },
      { name: 'Seattle' },
      { name: 'San Francisco' },
      { name: 'Toronto' }
    ],
    description: 'Long but smooth routes with major airport hubs; ideal for fans who enjoy scenic West Coast movement. The Vancouver-Seattle leg offers cheap bus and train alternatives to flying.',
    keyStadiums: [
      { name: 'BC Place' },
      { name: 'Lumen Field' },
      { name: 'Levi\'s Stadium' },
      { name: 'BMO Field' }
    ],
    highlights: [
      '🛫 Average flight time: 3.5 hours (West Coast) / 5 hours (Toronto connection)',
      '💵 Estimated base cost: $1,400-1,800 for all group matches',
      '⭐ Best base camp: Seattle or Vancouver (close proximity, then fly to Bay Area/Toronto)'
    ],
    link: '/world-cup-2026-groups/group-b'
  },
  {
    id: 'C',
    name: 'Group C – East Coast Corridor',
    cityCluster: [
      { name: 'Boston' },
      { name: 'New York City' },
      { name: 'Miami' },
      { name: 'Atlanta' }
    ],
    description: 'High-speed domestic flights, deep hotel availability, and the densest transport network in WC26. Multiple daily flights on every route make this group ideal for flexible travelers.',
    keyStadiums: [
      { name: 'Gillette Stadium' },
      { name: 'MetLife Stadium' },
      { name: 'Hard Rock Stadium' },
      { name: 'Mercedes-Benz Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours (except Miami: 3 hours)',
      '💵 Estimated base cost: $1,300-1,700 for all group matches',
      '⭐ Best base camp: New York or Atlanta (maximum flight connectivity)'
    ],
    link: '/world-cup-2026-groups/group-c'
  },
  {
    id: 'D',
    name: 'Group D – West Coast Pure',
    cityCluster: [
      { name: 'Los Angeles' },
      { name: 'Seattle' },
      { name: 'Vancouver' },
      { name: 'San Francisco' }
    ],
    description: 'Minimal time-zone stress and clean linear routing along the Pacific coast. This is one of the easiest groups to navigate with consistent weather and straightforward logistics.',
    keyStadiums: [
      { name: 'SoFi Stadium' },
      { name: 'Lumen Field' },
      { name: 'BC Place' },
      { name: "Levi's Stadium" }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours between cities',
      '💵 Estimated base cost: $1,200-1,600 for all group matches',
      '⭐ Best base camp: Los Angeles or San Francisco (central Pacific hub)'
    ],
    link: '/world-cup-2026-groups/group-d'
  },
  {
    id: 'E',
    name: 'Group E – Central & East Mix',
    cityCluster: [
      { name: 'Philadelphia' },
      { name: 'Houston' },
      { name: 'Kansas City' },
      { name: 'New York' },
      { name: 'Toronto' }
    ],
    description: 'A balanced spread with flexible base camp options depending on match intensity. Expect moderate travel times with some longer connections to Houston.',
    keyStadiums: [
      { name: 'Lincoln Financial Field' },
      { name: 'NRG Stadium' },
      { name: 'Arrowhead Stadium' },
      { name: 'MetLife Stadium' },
      { name: 'BMO Field' }
    ],
    highlights: [
      '🛫 Average flight time: 3 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Houston or Kansas City (lower accommodation costs)'
    ],
    link: '/world-cup-2026-groups/group-e'
  },
  {
    id: 'F',
    name: 'Group F – The Tex-Mex Route',
    cityCluster: [
      { name: 'Dallas' },
      { name: 'Monterrey' },
      { name: 'Houston' },
      { name: 'Kansas City' }
    ],
    description: 'Fast transfers and low-cost flight corridors across Texas and Northern Mexico. This group offers excellent value for budget-conscious fans with affordable hotels and short flights.',
    keyStadiums: [
      { name: 'AT&T Stadium' },
      { name: 'Estadio BBVA' },
      { name: 'NRG Stadium' },
      { name: 'Arrowhead Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 1.5 hours (Texas routes) / 2 hours (Mexico)',
      '💵 Estimated base cost: $900-1,300 for all group matches',
      '⭐ Best base camp: Dallas or Houston (major hub airports, affordable hotels)'
    ],
    link: '/world-cup-2026-groups/group-f'
  },
  {
    id: 'G',
    name: 'Group G – Cascadia & SoFi Circuit',
    cityCluster: [
      { name: 'Seattle' },
      { name: 'Vancouver' },
      { name: 'Los Angeles' }
    ],
    description: 'Short hops with some of the easiest travel distances in the tournament. Three cities, minimal stress, and strong public transportation options between Seattle and Vancouver.',
    keyStadiums: [
      { name: 'Lumen Field' },
      { name: 'BC Place' },
      { name: 'SoFi Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Seattle (central location with easy access north and south)'
    ],
    link: '/world-cup-2026-groups/group-g'
  },
  {
    id: 'H',
    name: 'Group H – Southern Heat Trail',
    cityCluster: [
      { name: 'Miami' },
      { name: 'Atlanta' },
      { name: 'Houston' },
      { name: 'Guadalajara' }
    ],
    description: 'Hot weather, high energy, and long-haul connections—but affordable hotel zones. This group requires strategic planning due to the Miami-Guadalajara distance.',
    keyStadiums: [
      { name: 'Hard Rock Stadium' },
      { name: 'Mercedes-Benz Stadium' },
      { name: 'NRG Stadium' },
      { name: 'Estadio Akron' }
    ],
    highlights: [
      '🛫 Average flight time: 3 hours (US routes) / 4 hours (Mexico connection)',
      '💵 Estimated base cost: $1,200-1,600 for all group matches',
      '⭐ Best base camp: Houston (central between all four cities)'
    ],
    link: '/world-cup-2026-groups/group-h'
  },
  {
    id: 'I',
    name: 'Group I – Northeast Shuttle Route',
    cityCluster: [
      { name: 'Boston' },
      { name: 'New York City' },
      { name: 'Philadelphia' },
      { name: 'Toronto' }
    ],
    description: 'Excellent rail, bus, and multi-airport combinations with minimal travel friction. This is the only group where you could realistically use Amtrak for some legs instead of flying.',
    keyStadiums: [
      { name: 'Gillette Stadium' },
      { name: 'MetLife Stadium' },
      { name: 'Lincoln Financial Field' },
      { name: 'BMO Field' }
    ],
    highlights: [
      '🛫 Average flight time: 1.5 hours',
      '🚆 Alternative: Amtrak Northeast Corridor (Boston-NYC-Philly)',
      '💵 Estimated base cost: $1,300-1,700 for all group matches',
      '⭐ Best base camp: New York City (ultimate connectivity)'
    ],
    link: '/world-cup-2026-groups/group-i'
  },
  {
    id: 'J',
    name: 'Group J – The Long Haul Group',
    cityCluster: [
      { name: 'Kansas City' },
      { name: 'Dallas' },
      { name: 'San Francisco' },
      { name: 'Atlanta' }
    ],
    description: 'Expect larger distances—best suited to fans who plan efficiently and book early. This group spans the entire continental US and requires careful flight scheduling.',
    keyStadiums: [
      { name: 'Arrowhead Stadium' },
      { name: 'AT&T Stadium' },
      { name: "Levi's Stadium" },
      { name: 'Mercedes-Benz Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 3.5 hours',
      '💵 Estimated base cost: $1,400-1,900 for all group matches',
      '⭐ Best base camp: Dallas (central hub, lower hotel costs than SF or Atlanta)'
    ],
    link: '/world-cup-2026-groups/group-j'
  },
  {
    id: 'K',
    name: 'Group K – Southern Scatter Path',
    cityCluster: [
      { name: 'Houston' },
      { name: 'Mexico City' },
      { name: 'Miami' },
      { name: 'Atlanta' }
    ],
    description: 'South-focused travel with two major mega-hubs and strong hotel supply. The Houston-Mexico City connection is well-served with multiple daily flights.',
    keyStadiums: [
      { name: 'NRG Stadium' },
      { name: 'Estadio Azteca' },
      { name: 'Hard Rock Stadium' },
      { name: 'Mercedes-Benz Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Houston or Atlanta (central location, good hotel availability)'
    ],
    link: '/world-cup-2026-groups/group-k'
  },
  {
    id: 'L',
    name: 'Group L – The Major Metros Pathway',
    cityCluster: [
      { name: 'Toronto' },
      { name: 'Dallas' },
      { name: 'New York City' },
      { name: 'Boston' }
    ],
    description: 'Big cities, big energy, and a premium-priced but smooth logistics cluster. Expect higher accommodation costs but flawless infrastructure and connectivity.',
    keyStadiums: [
      { name: 'BMO Field' },
      { name: 'AT&T Stadium' },
      { name: 'MetLife Stadium' },
      { name: 'Gillette Stadium' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours',
      '💵 Estimated base cost: $1,500-2,000 for all group matches',
      '⭐ Best base camp: New York City or Dallas (flight hub advantage)'
    ],
    link: '/world-cup-2026-groups/group-l'
  }
];

export const STADIUM_LINKS: LinkItem[] = [
  { name: 'MetLife Stadium', url: '/metlife-stadium-world-cup-2026' },
  { name: 'SoFi Stadium', url: '/sofi-stadium-world-cup-2026' },
  { name: 'Estadio Azteca', url: '/estadio-azteca-world-cup-2026' },
  { name: 'AT&T Stadium', url: '/att-stadium-world-cup-2026' },
  { name: 'Mercedes-Benz Stadium', url: '/mercedes-benz-stadium-world-cup-2026' },
  { name: 'Hard Rock Stadium', url: '/hard-rock-stadium-world-cup-2026' },
  { name: 'BC Place', url: '/bc-place-world-cup-2026' },
  { name: 'Lumen Field', url: '/lumen-field-world-cup-2026' },
  { name: 'Lincoln Financial Field', url: '/lincoln-financial-field-world-cup-2026' },
  { name: 'NRG Stadium', url: '/nrg-stadium-world-cup-2026' },
  { name: 'BMO Field', url: '/bmo-field-world-cup-2026' },
  { name: 'Gillette Stadium', url: '/gillette-stadium-world-cup-2026' },
  { name: "Levi's Stadium", url: '/levis-stadium-world-cup-2026' },
  { name: 'Arrowhead Stadium', url: '/arrowhead-stadium-world-cup-2026' },
  { name: 'Estadio Akron', url: '/estadio-akron-world-cup-2026' },
  { name: 'Estadio BBVA', url: '/estadio-bbva-world-cup-2026' }
];

export const CITY_LINKS: LinkItem[] = [
  { name: 'New York/New Jersey', url: '/world-cup-2026-new-york-new-jersey-guide' },
  { name: 'Atlanta', url: '/world-cup-2026-atlanta-guide' },
  { name: 'Boston', url: '/world-cup-2026-boston-guide' },
  { name: 'Dallas', url: '/world-cup-2026-dallas-guide' },
  { name: 'Guadalajara', url: '/world-cup-2026-guadalajara-guide' },
  { name: 'Houston', url: '/world-cup-2026-houston-guide' },
  { name: 'Kansas City', url: '/world-cup-2026-kansas-city-guide' },
  { name: 'Los Angeles', url: '/world-cup-2026-los-angeles-guide' },
  { name: 'Mexico City', url: '/world-cup-2026-mexico-city-guide' },
  { name: 'Miami', url: '/world-cup-2026-miami-guide' },
  { name: 'Monterrey', url: '/world-cup-2026-monterrey-guide' },
  { name: 'Philadelphia', url: '/world-cup-2026-philadelphia-guide' },
  { name: 'San Francisco Bay Area', url: '/world-cup-2026-san-francisco-bay-area-guide' },
  { name: 'Seattle', url: '/world-cup-2026-seattle-guide' },
  { name: 'Toronto', url: '/world-cup-2026-toronto-guide' },
  { name: 'Vancouver', url: '/world-cup-2026-vancouver-guide' }
];
