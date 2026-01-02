
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
 title: 'Estadio Azteca World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Estadio Azteca for World Cup 2026. Seating charts, capacity, parking & local transport tips for Mexico City.',
 keywords: 'Estadio Azteca World Cup 2026, Mexico City World Cup Stadium, Estadio Azteca Guide, Mexico City Soccer Guide, World Cup 2026 Mexico City matches, Estadio Azteca seating chart',
 openGraph: {
 title: 'Estadio Azteca World Cup 2026 Guide: Seating & Tickets',
 description: 'Complete guide to Estadio Azteca for World Cup 2026. Seating charts, capacity, parking & local transport tips for Mexico City.',
 type: 'article',
 url: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-azteca-guide',
 siteName: 'Stadiumport',
 images: [
      {
        url: '/images/cities/mexico-city-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Estadio Azteca World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estadio Azteca World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio Azteca for World Cup 2026. Seating charts, capacity, parking & local transport tips for Mexico City.',
    images: ['/images/cities/mexico-city-world-cup-2026-1600.webp'],
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
        name: 'Estadio Azteca',
        item: 'https://stadiumport.com/world-cup-2026-stadiums/estadio-azteca-guide',
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
