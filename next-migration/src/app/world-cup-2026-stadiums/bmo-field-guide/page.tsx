
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'BMO Field World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for BMO Field World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day in Toronto.',
 keywords: 'BMO Field World Cup 2026, Toronto World Cup Stadium, BMO Field Guide, Toronto Soccer Guide, World Cup 2026 Toronto matches, BMO Field seating chart',
 openGraph: {
 title: 'BMO Field World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for BMO Field World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars. Plan your perfect match day.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/bmo-field-guide',
 siteName: 'Stadiumport',
 images: [
 {
 url: '/images/stadiums/bmo-field-toronto-world-cup-2026-1024.webp',
 width: 1024,
 height: 683,
 alt: 'BMO Field World Cup 2026 Guide',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'BMO Field World Cup 2026: Complete Stadium Guide',
 description: 'Everything you need for BMO Field World Cup 2026: seating guide, parking, transportation, food, tips from stadium regulars.',
 images: ['/images/stadiums/bmo-field-toronto-world-cup-2026-1024.webp'],
 },
};

export default function Page() {
  return <ClientPage />;
}
