export const BASE_URL = 'https://stadiumport.com';

export const STATIC_ROUTES = [
  '',
  '/about',
  '/contact',
  '/world-cup-2026-groups',
  '/world-cup-2026-schedule',
  '/world-cup-2026-host-cities',
  '/world-cup-2026-host-cities/new-york-city-guide',
  '/world-cup-2026-host-cities/atlanta-city-guide',
  '/world-cup-2026-host-cities/boston-city-guide',
  '/world-cup-2026-host-cities/dallas-city-guide',
  '/world-cup-2026-host-cities/miami-city-guide',
  '/world-cup-2026-host-cities/kansas-city-city-guide',
  '/world-cup-2026-host-cities/houston-city-guide',
  '/world-cup-2026-host-cities/philadelphia-city-guide',
  '/world-cup-2026-host-cities/seattle-city-guide',
  '/world-cup-2026-host-cities/san-francisco-city-guide',
  '/world-cup-2026-host-cities/toronto-city-guide',
  '/world-cup-2026-host-cities/vancouver-city-guide',
  '/world-cup-2026-host-cities/mexico-city-city-guide',
  '/world-cup-2026-host-cities/guadalajara-city-guide',
  '/world-cup-2026-host-cities/monterrey-city-guide',
  '/world-cup-2026-stadiums',
  '/world-cup-2026-stadiums/bc-place-guide',
  '/world-cup-2026-stadiums/bmo-field-guide',
  '/world-cup-2026-stadiums/estadio-akron-guide',
  '/world-cup-2026-stadiums/estadio-azteca-guide',
  '/world-cup-2026-stadiums/estadio-bbva-guide',
  '/world-cup-2026-stadiums/arrowhead-stadium-guide',
  '/world-cup-2026-stadiums/att-stadium-guide',
  '/world-cup-2026-stadiums/gillette-stadium-guide',
  '/world-cup-2026-stadiums/hard-rock-stadium-guide',
  '/world-cup-2026-stadiums/levis-stadium-guide',
  '/world-cup-2026-stadiums/lincoln-financial-field-guide',
  '/world-cup-2026-stadiums/lumen-field-guide',
  '/world-cup-2026-stadiums/mercedes-benz-stadium-guide',
  '/world-cup-2026-stadiums/metlife-stadium-guide',
  '/world-cup-2026-stadiums/nrg-stadium-guide',
  '/world-cup-2026-stadiums/sofi-stadium-guide',
  '/world-cup-2026-draw-travel-hub',
  '/world-cup-2026-prediction-game',
  '/safety-guide',
  '/travel-tips',
  '/legal/privacy',
  '/legal/terms',
  '/legal/editorial-policy',
  '/legal/affiliate-disclaimer',
];

export const GROUPS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

export function getAllRoutes(): string[] {
  const groupRoutes = GROUPS.map(g => `/world-cup-2026-groups/group-${g}`);
  return [...STATIC_ROUTES, ...groupRoutes].map(path => `${BASE_URL}${path}`);
}
