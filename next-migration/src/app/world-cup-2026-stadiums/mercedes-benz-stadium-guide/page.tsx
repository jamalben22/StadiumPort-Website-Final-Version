
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
 title: 'Mercedes-Benz Stadium World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
 keywords: 'Mercedes-Benz Stadium World Cup 2026, Atlanta World Cup Stadium, Mercedes-Benz Stadium Guide, Atlanta Soccer Guide, World Cup 2026 Atlanta matches, Mercedes-Benz Stadium seating chart',
 openGraph: {
 title: 'Mercedes-Benz Stadium World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/mercedes-benz-stadium-guide',
 siteName: 'stadiumport',
 images: [
      {
        url: '/images/cities/atlanta-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Mercedes-Benz Stadium World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercedes-Benz Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
    images: ['/images/cities/atlanta-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

