
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'World Cup 2026 Stadiums Guide: All 16 Venues & Seating',
  description: 'Complete guide to all 16 World Cup 2026 stadiums. Seating charts, capacity, tickets & accessibility for USA, Mexico & Canada venues.',
  keywords: [
    'World Cup 2026 stadiums',
    'FIFA World Cup 2026 stadiums',
    'World Cup 2026 venues',
    'World Cup 2026 stadium guide',
    '16 World Cup 2026 stadiums',
    'stadiumport'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-stadiums',
  },
  openGraph: {
    title: 'World Cup 2026 Stadiums Guide: All 16 Venues & Seating',
    description: 'Complete guide to all 16 World Cup 2026 stadiums. Seating charts, capacity, tickets & accessibility for USA, Mexico & Canada venues.',
    type: 'website',
    url: 'https://stadiumport.com/world-cup-2026-stadiums',
    siteName: 'stadiumport',
    locale: 'en_US',
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
    title: 'World Cup 2026 Stadiums: All 16 Venues Guide | stadiumport',
    description: 'Explore all 16 World Cup 2026 stadiums across USA, Mexico & Canada. Get expert guides on capacity, seating, and tickets for every FIFA venue.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

