
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Estadio BBVA World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio BBVA World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day in Monterrey.',
 keywords: 'Estadio BBVA World Cup 2026, Monterrey World Cup Stadium, Estadio BBVA Guide, Monterrey Soccer Guide, World Cup 2026 Monterrey matches, Estadio BBVA seating chart',
 openGraph: {
 title: 'Estadio BBVA World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio BBVA World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-bbva-guide',
 siteName: 'Stadiumport',
 images: [
      {
        url: '/images/cities/monterrey-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Estadio BBVA World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estadio BBVA World Cup 2026: Complete Stadium Guide',
    description: 'Everything you need for Estadio BBVA World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars.',
    images: ['/images/cities/monterrey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
