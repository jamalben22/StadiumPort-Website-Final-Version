
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoFi Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Ultimate fan guide to SoFi Stadium for World Cup 2026. Seating chart, Infinity Screen details, Los Angeles transportation, and match day advice.',
  keywords: 'SoFi Stadium World Cup 2026, Los Angeles World Cup, SoFi Stadium Guide, World Cup 2026 LA, stadium seating, travel guide',
  openGraph: {
    title: 'SoFi Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Ultimate fan guide to SoFi Stadium for World Cup 2026. Seating chart, transportation, and local tips.',
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
    title: 'SoFi Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Ultimate fan guide to SoFi Stadium for World Cup 2026.',
    images: ['/images/cities/los-angeles-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
