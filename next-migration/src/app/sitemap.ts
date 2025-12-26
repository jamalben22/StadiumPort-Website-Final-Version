import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stadiumport.com';
  const currentDate = new Date();

  // Static routes
  const routes = [
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Group Routes (A-L)
  const groups = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
  const groupRoutes = groups.map((group) => ({
    url: `${baseUrl}/world-cup-2026-groups/group-${group}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...groupRoutes];
}