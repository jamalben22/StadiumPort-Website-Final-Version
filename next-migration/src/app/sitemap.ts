import { MetadataRoute } from 'next';
import { STATIC_ROUTES, GROUPS, BASE_URL } from '@/data/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static routes
  const routes = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Group Routes (A-L)
  const groupRoutes = GROUPS.map((group) => ({
    url: `${BASE_URL}/world-cup-2026-groups/group-${group}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...groupRoutes];
}
