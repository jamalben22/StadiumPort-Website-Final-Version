
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
  description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
  keywords: "Levi's Stadium World Cup 2026, San Francisco World Cup, Levi's Stadium Guide, World Cup 2026 Santa Clara, stadium seating, travel guide",
  openGraph: {
    title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
    description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
    type: 'article',
    url: 'https://stadiumport.com/levis-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/san-francisco-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: "Levi's Stadium World Cup 2026",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
    description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
    images: ['/images/cities/san-francisco-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}

