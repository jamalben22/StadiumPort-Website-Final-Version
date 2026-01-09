
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
 title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
 keywords: 'Estadio BBVA World Cup 2026, Monterrey World Cup Stadium, Estadio BBVA Guide, Monterrey Soccer Guide, World Cup 2026 Monterrey matches, Estadio BBVA seating chart',
 openGraph: {
 title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
 type: 'article',
 url: 'https://stadiumport.com/estadio-bbva-world-cup-2026',
 siteName: 'stadiumport',
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
    title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
    images: ['/images/cities/monterrey-world-cup-2026-1600.webp'],
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
        name: 'Estadio BBVA',
        item: 'https://stadiumport.com/estadio-bbva-world-cup-2026',
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

