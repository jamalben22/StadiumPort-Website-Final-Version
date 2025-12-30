
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'BC Place World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for BC Place World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day in Vancouver.',
 keywords: 'BC Place World Cup 2026, Vancouver World Cup Stadium, BC Place Guide, Vancouver Soccer Guide, World Cup 2026 Vancouver matches, BC Place seating chart',
 openGraph: {
 title: 'BC Place World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for BC Place World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/bc-place-guide',
 siteName: 'Stadiumport',
 images: [
      {
        url: '/images/cities/vancouver-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'BC Place World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BC Place World Cup 2026: Complete Stadium Guide',
    description: 'Everything you need for BC Place World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars.',
    images: ['/images/cities/vancouver-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
