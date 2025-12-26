
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Levi's Stadium World Cup 2026: Complete Stadium Guide",
  description: "Essential fan guide for Levi's Stadium during World Cup 2026. Seating chart, high-tech amenities, transport from San Francisco, and Santa Clara tips.",
  keywords: "Levi's Stadium World Cup 2026, San Francisco World Cup, Levi's Stadium Guide, World Cup 2026 Santa Clara, stadium seating, travel guide",
  openGraph: {
    title: "Levi's Stadium World Cup 2026: Complete Stadium Guide",
    description: "Essential fan guide for Levi's Stadium during World Cup 2026. Seating chart, transportation, and local tips.",
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/levis-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/stadiums/levis-stadium-santa-clara-world-cup-2026-1024.webp',
        width: 1024,
        height: 683,
        alt: "Levi's Stadium World Cup 2026",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Levi's Stadium World Cup 2026: Complete Stadium Guide",
    description: "Essential fan guide for Levi's Stadium during World Cup 2026.",
    images: ['/images/stadiums/levis-stadium-santa-clara-world-cup-2026-1024.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
