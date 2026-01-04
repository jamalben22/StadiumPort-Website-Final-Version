
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Estadio Akron World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Estadio Akron for World Cup 2026. Seating charts, capacity, parking & local transport tips for Guadalajara.',
  keywords: 'Estadio Akron World Cup 2026, Guadalajara World Cup Stadium, Estadio Akron Guide, Guadalajara Soccer Guide, World Cup 2026 Guadalajara matches, Estadio Akron seating chart',
  openGraph: {
    title: 'Estadio Akron World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio Akron for World Cup 2026. Seating charts, capacity, parking & local transport tips for Guadalajara.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-akron-guide',
 siteName: 'Stadiumport',
 images: [
      {
        url: '/images/cities/guadalajara-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Estadio Akron World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estadio Akron World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio Akron for World Cup 2026. Seating charts, capacity, parking & local transport tips for Guadalajara.',
    images: ['/images/cities/guadalajara-world-cup-2026-1600.webp'],
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
        name: 'Estadio Akron',
        item: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-akron-guide',
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

