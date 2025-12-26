
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues',
  description: 'Explore all 16 host stadiums for the FIFA World Cup 2026 across the USA, Canada, and Mexico. Get details on capacity, location, and match schedules.',
  keywords: 'World Cup 2026 stadiums, FIFA World Cup venues, 2026 World Cup host cities, soccer stadiums USA Canada Mexico',
  openGraph: {
    title: 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues',
    description: 'Explore all 16 host stadiums for the FIFA World Cup 2026 across the USA, Canada, and Mexico.',
    type: 'website',
    url: 'https://stadiumport.com/world-cup-2026-stadiums',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
        width: 1600,
        height: 900,
        alt: 'World Cup 2026 Stadiums Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Stadiums: Complete Guide to All 16 Venues',
    description: 'Explore all 16 host stadiums for the FIFA World Cup 2026.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
