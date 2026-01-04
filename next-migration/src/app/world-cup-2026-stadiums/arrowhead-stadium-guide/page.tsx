
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Arrowhead Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Arrowhead Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Kansas City.',
  keywords: 'Arrowhead Stadium World Cup 2026, Kansas City World Cup, GEHA Field at Arrowhead Stadium, World Cup 2026 Kansas City, stadium seating',
  openGraph: {
    title: 'Arrowhead Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Arrowhead Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Kansas City.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/arrowhead-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/kansas-city-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Arrowhead Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrowhead Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Arrowhead Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Kansas City.',
    images: ['/images/cities/kansas-city-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'Arrowhead Stadium Guide', item: '/world-cup-2026-stadiums/arrowhead-stadium-guide' }
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}

