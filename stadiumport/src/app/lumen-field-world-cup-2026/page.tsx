
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Lumen Field World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Lumen Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Seattle.',
  openGraph: {
    title: 'Lumen Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Lumen Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Seattle.',
    type: 'article',
    url: 'https://stadiumport.com/lumen-field-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/seattle-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Lumen Field World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumen Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Lumen Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Seattle.',
    images: ['/images/cities/seattle-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

