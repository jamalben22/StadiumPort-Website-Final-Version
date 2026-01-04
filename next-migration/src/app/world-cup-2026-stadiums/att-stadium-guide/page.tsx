
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AT&T Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to AT&T Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Dallas.',
  keywords: 'AT&T Stadium World Cup 2026, Dallas World Cup, AT&T Stadium Guide, World Cup 2026 Arlington, stadium seating, travel guide',
  openGraph: {
    title: 'AT&T Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to AT&T Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Dallas.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/att-stadium-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/dallas-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'AT&T Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AT&T Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to AT&T Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Dallas.',
    images: ['/images/cities/dallas-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'AT&T Stadium Guide', item: '/world-cup-2026-stadiums/att-stadium-guide' }
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}

