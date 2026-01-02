
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'BMO Field World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to BMO Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Toronto.',
  keywords: 'BMO Field World Cup 2026, Toronto World Cup, Toronto Stadium Guide, World Cup 2026 Toronto, stadium seating, travel guide',
  openGraph: {
    title: 'BMO Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to BMO Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Toronto.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/bmo-field-guide',
    siteName: 'Stadiumport',
    images: [
      {
        url: '/images/cities/toronto-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'BMO Field World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMO Field World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to BMO Field for World Cup 2026. Seating charts, capacity, parking & local transport tips for Toronto.',
    images: ['/images/cities/toronto-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'BMO Field Guide', item: '/world-cup-2026-stadiums/bmo-field-guide' }
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}
