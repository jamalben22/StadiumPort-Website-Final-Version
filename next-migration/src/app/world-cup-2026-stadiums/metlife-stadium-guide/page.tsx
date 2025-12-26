
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetLife Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Host of the 2026 World Cup Final. Comprehensive guide to MetLife Stadium: seating chart, transportation from NYC, parking, and essential fan tips.',
  keywords: 'MetLife Stadium World Cup 2026, New York New Jersey World Cup, MetLife Stadium Guide, World Cup 2026 Final, stadium seating, travel guide',
  openGraph: {
    title: 'MetLife Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Host of the 2026 World Cup Final. Comprehensive guide to MetLife Stadium: seating chart, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/metlife-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026-1024.webp',
        width: 1024,
        height: 683,
        alt: 'MetLife Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetLife Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Host of the 2026 World Cup Final. Comprehensive guide to MetLife Stadium.',
    images: ['/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026-1024.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
