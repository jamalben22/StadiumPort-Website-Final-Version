
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
  keywords: 'NRG Stadium World Cup 2026, Houston World Cup, NRG Stadium Guide, World Cup 2026 Houston, stadium seating, travel guide',
  openGraph: {
    title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
    type: 'article',
    url: 'https://stadiumport.com/nrg-stadium-world-cup-2026',
    siteName: 'stadiumport',
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
    title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
    images: ['/images/cities/houston-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

