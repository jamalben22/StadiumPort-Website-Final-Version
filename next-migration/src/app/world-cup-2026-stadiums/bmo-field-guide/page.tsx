
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'BMO Field World Cup 2026: Toronto Stadium Guide',
  description: 'Complete guide to BMO Field for World Cup 2026. Learn about the stadium expansion, seating, public transport in Toronto, and match day tips.',
  keywords: 'BMO Field World Cup 2026, Toronto World Cup, Toronto Stadium Guide, World Cup 2026 Toronto, stadium seating, travel guide',
  openGraph: {
    title: 'BMO Field World Cup 2026: Toronto Stadium Guide',
    description: 'Complete guide to BMO Field for World Cup 2026. Learn about the stadium expansion and Toronto tips.',
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
    title: 'BMO Field World Cup 2026: Toronto Stadium Guide',
    description: 'Complete guide to BMO Field for World Cup 2026.',
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
