
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Estadio Azteca World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio Azteca World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day in Mexico City.',
 keywords: 'Estadio Azteca World Cup 2026, Mexico City World Cup Stadium, Estadio Azteca Guide, Mexico City Soccer Guide, World Cup 2026 Mexico City matches, Estadio Azteca seating chart',
 openGraph: {
 title: 'Estadio Azteca World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio Azteca World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-azteca-guide',
 siteName: 'Stadiumport',
 images: [
 {
 url: '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026-1024.webp',
 width: 1024,
 height: 683,
 alt: 'Estadio Azteca World Cup 2026 Guide',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Estadio Azteca World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for Estadio Azteca World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars.',
 images: ['/images/stadiums/estadio-azteca-mexico-city-world-cup-2026-1024.webp'],
 },
};

export default function Page() {
  return <ClientPage />;
}
