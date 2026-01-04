
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Lincoln Financial Field World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Lincoln Financial Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Philadelphia.',
  keywords: 'Lincoln Financial Field World Cup 2026, Philadelphia World Cup, Lincoln Financial Field Guide, World Cup 2026 Philadelphia, stadium seating, travel guide',
  openGraph: {
    title: 'Lincoln Financial Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Lincoln Financial Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Philadelphia.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/lincoln-financial-field-guide',
    siteName: 'stadiumport',
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
    title: 'Lincoln Financial Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Lincoln Financial Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Philadelphia.',
    images: ['/images/cities/philadelphia-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

