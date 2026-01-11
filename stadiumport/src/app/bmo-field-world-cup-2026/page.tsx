
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
    url: 'https://stadiumport.com/bmo-field-world-cup-2026',
    siteName: 'stadiumport',
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
    { name: 'BMO Field Guide', item: '/bmo-field-world-cup-2026' }
  ]);

  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'bmo-field');
  const stadiumLd = stadium ? generateStadiumSchema({
    name: stadium.name,
    description: `Complete guide to ${stadium.name} for World Cup 2026. ${stadium.city}, ${stadium.country}.`,
    image: stadium.image,
    address: {
      streetAddress: stadium.address.street,
      addressLocality: stadium.address.city,
      addressRegion: stadium.address.region,
      postalCode: stadium.address.postalCode,
      addressCountry: stadium.address.country
    },
    geo: {
      latitude: stadium.coordinates.lat,
      longitude: stadium.coordinates.lng
    },
    capacity: parseInt(stadium.capacity.replace(/,/g, '')),
    url: 'https://stadiumport.com/bmo-field-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

