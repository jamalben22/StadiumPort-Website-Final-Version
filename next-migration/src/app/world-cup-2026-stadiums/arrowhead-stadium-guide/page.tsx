
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arrowhead Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Plan your trip to Arrowhead Stadium for World Cup 2026. Detailed guide on seating, transportation, parking, and the best local tips for Kansas City.',
  keywords: 'Arrowhead Stadium World Cup 2026, Kansas City World Cup, Arrowhead Stadium Guide, World Cup 2026 Kansas City, stadium seating, travel guide',
  openGraph: {
    title: 'Arrowhead Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your trip to Arrowhead Stadium for World Cup 2026. Detailed guide on seating, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/arrowhead-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Arrowhead Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrowhead Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your trip to Arrowhead Stadium for World Cup 2026.',
    images: ['/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
