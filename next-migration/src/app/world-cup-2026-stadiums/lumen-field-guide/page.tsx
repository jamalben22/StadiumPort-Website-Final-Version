
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumen Field World Cup 2026: Complete Stadium Guide',
  description: 'Experience World Cup 2026 at Lumen Field. Detailed guide on seating, iconic roof design, downtown Seattle transport, and local match day tips.',
  keywords: 'Lumen Field World Cup 2026, Seattle World Cup, Lumen Field Guide, World Cup 2026 Seattle, stadium seating, travel guide',
  openGraph: {
    title: 'Lumen Field World Cup 2026: Complete Stadium Guide',
    description: 'Experience World Cup 2026 at Lumen Field. Detailed guide on seating, transportation, and local tips.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/lumen-field-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/stadiums/lumen-field-seattle-world-cup-2026-1024.webp',
        width: 1024,
        height: 683,
        alt: 'Lumen Field World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumen Field World Cup 2026: Complete Stadium Guide',
    description: 'Experience World Cup 2026 at Lumen Field.',
    images: ['/images/stadiums/lumen-field-seattle-world-cup-2026-1024.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
