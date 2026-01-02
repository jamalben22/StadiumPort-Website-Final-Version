
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Hard Rock Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Plan your World Cup 2026 visit to Hard Rock Stadium in Miami. Detailed info on seating, transport, climate-controlled areas, and Miami travel tips.',
  keywords: 'Hard Rock Stadium World Cup 2026, Miami World Cup, Hard Rock Stadium Guide, World Cup 2026 Miami, stadium seating, travel guide',
  openGraph: {
    title: 'Hard Rock Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your World Cup 2026 visit to Hard Rock Stadium in Miami. Detailed info on seating, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/hard-rock-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/miami-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Hard Rock Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard Rock Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Plan your World Cup 2026 visit to Hard Rock Stadium in Miami.',
    images: ['/images/cities/miami-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
