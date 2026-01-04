
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
  keywords: 'SoFi Stadium World Cup 2026, Los Angeles World Cup, SoFi Stadium Guide, World Cup 2026 LA, stadium seating, travel guide',
  openGraph: {
    title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/sofi-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/los-angeles-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'SoFi Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
    images: ['/images/cities/los-angeles-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

