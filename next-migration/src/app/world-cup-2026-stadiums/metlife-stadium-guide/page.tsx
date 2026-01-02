
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
  description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
  keywords: 'MetLife Stadium World Cup 2026, World Cup 2026 Final, New York New Jersey World Cup, MetLife Stadium Guide, stadium seating, travel guide',
  openGraph: {
    title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
    description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/metlife-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'MetLife Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
    description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
