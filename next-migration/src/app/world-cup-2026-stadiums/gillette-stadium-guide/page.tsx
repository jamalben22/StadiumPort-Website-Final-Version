
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Gillette Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Gillette Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Boston.',
  keywords: 'Gillette Stadium World Cup 2026, Boston World Cup, Gillette Stadium Guide, World Cup 2026 Foxborough, stadium seating, travel guide',
  openGraph: {
    title: 'Gillette Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Gillette Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Boston.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/gillette-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/boston-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Gillette Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gillette Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Gillette Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Boston.',
    images: ['/images/cities/boston-world-cup-2026-1600.webp'],
  },
};

function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://stadiumport.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Stadiums',
        item: 'https://stadiumport.com/world-cup-2026-stadiums',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gillette Stadium',
        item: 'https://stadiumport.com/world-cup-2026-stadiums/gillette-stadium-guide',
      },
    ],
  };
}

export default function Page() {
  return (
    <>
      <ClientPage />
      <JsonLd schema={generateBreadcrumbSchema()} />
    </>
  );
}
