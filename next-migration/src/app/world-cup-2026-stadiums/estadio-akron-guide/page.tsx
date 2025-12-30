
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Estadio Akron World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio Akron World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day in Guadalajara.',
 keywords: 'Estadio Akron World Cup 2026, Guadalajara World Cup Stadium, Estadio Akron Guide, Guadalajara Soccer Guide, World Cup 2026 Guadalajara matches, Estadio Akron seating chart',
 openGraph: {
 title: 'Estadio Akron World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio Akron World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-akron-guide',
 siteName: 'Stadiumport',
 images: [
      {
        url: '/images/stadiums/estadio-akron-guadalajara-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Estadio Akron World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estadio Akron World Cup 2026: Complete Stadium Guide',
    description: 'Everything you need for Estadio Akron World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars.',
    images: ['/images/stadiums/estadio-akron-guadalajara-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
