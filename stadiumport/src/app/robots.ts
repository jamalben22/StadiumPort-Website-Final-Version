import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/admin/', '/coming-soon', '/world-cup-2026-prediction-game/entry/'],
    },
    sitemap: 'https://stadiumport.com/sitemap.xml',
    host: 'https://stadiumport.com',
  };
}