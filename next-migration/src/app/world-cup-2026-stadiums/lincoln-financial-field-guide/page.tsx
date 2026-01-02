
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Lincoln Financial Field World Cup 2026: Complete Stadium Guide',
  description: 'Complete guide to Lincoln Financial Field for World Cup 2026. Seating info, parking, SEPTA transport, and Philadelphia fan experience tips.',
  keywords: 'Lincoln Financial Field World Cup 2026, Philadelphia World Cup, Lincoln Financial Field Guide, World Cup 2026 Philadelphia, stadium seating, travel guide',
  openGraph: {
    title: 'Lincoln Financial Field World Cup 2026: Complete Stadium Guide',
    description: 'Complete guide to Lincoln Financial Field for World Cup 2026. Seating info, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/lincoln-financial-field-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/philadelphia-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Lincoln Financial Field World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lincoln Financial Field World Cup 2026: Complete Stadium Guide',
    description: 'Complete guide to Lincoln Financial Field for World Cup 2026.',
    images: ['/images/cities/philadelphia-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
