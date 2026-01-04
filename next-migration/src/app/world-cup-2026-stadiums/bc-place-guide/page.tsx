
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'BC Place World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to BC Place for World Cup 2026. Seating charts, capacity, parking & local transport tips for Vancouver.',
  keywords: 'BC Place World Cup 2026, Vancouver World Cup, BC Place Stadium Guide, World Cup 2026 Vancouver, stadium seating, travel guide',
  openGraph: {
    title: 'BC Place World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to BC Place for World Cup 2026. Seating charts, capacity, parking & local transport tips for Vancouver.',
    type: 'article',
    url: 'https://stadiumport.com/world-cup-2026-stadiums/bc-place-guide',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/vancouver-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'BC Place World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BC Place World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to BC Place for World Cup 2026. Seating charts, capacity, parking & local transport tips for Vancouver.',
    images: ['/images/cities/vancouver-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'BC Place Guide', item: '/world-cup-2026-stadiums/bc-place-guide' }
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}

