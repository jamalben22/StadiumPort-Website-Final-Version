
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AT&T Stadium World Cup 2026: Complete Stadium Guide',
  description: 'Your essential guide to AT&T Stadium for World Cup 2026. Information on seating, retractable roof, transportation, and match day tips for Arlington.',
  keywords: 'AT&T Stadium World Cup 2026, Dallas World Cup, AT&T Stadium Guide, World Cup 2026 Arlington, stadium seating, travel guide',
  openGraph: {
    title: 'AT&T Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Your essential guide to AT&T Stadium for World Cup 2026. Information on seating, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/att-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/dallas-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'AT&T Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AT&T Stadium World Cup 2026: Complete Stadium Guide',
    description: 'Your essential guide to AT&T Stadium for World Cup 2026.',
    images: ['/images/cities/dallas-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
