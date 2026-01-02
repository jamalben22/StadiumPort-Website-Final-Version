
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'NRG Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Plan your trip to NRG Stadium for World Cup 2026. Detailed guide on seating, retractable roof, Houston transportation, and local fan tips.',
  keywords: 'NRG Stadium World Cup 2026, Houston World Cup, NRG Stadium Guide, World Cup 2026 Houston, stadium seating, travel guide',
  openGraph: {
    title: 'NRG Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your trip to NRG Stadium for World Cup 2026. Detailed guide on seating, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/nrg-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/houston-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'NRG Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRG Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your trip to NRG Stadium for World Cup 2026.',
    images: ['/images/cities/houston-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
