
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';
import { generateStadiumSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mercedes-Benz Stadium World Cup 2026: Seating & Tickets',
  description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
  keywords: 'Mercedes-Benz Stadium World Cup 2026, Atlanta World Cup Stadium, Mercedes-Benz Stadium Guide, Atlanta Soccer Guide, World Cup 2026 Atlanta matches, Mercedes-Benz Stadium seating chart',
  openGraph: {
    title: 'Mercedes-Benz Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
    type: 'article',
    url: 'https://stadiumport.com/mercedes-benz-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/atlanta-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Mercedes-Benz Stadium World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercedes-Benz Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Mercedes-Benz Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Atlanta.',
    images: ['/images/cities/atlanta-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'mercedes-benz-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'Mercedes-Benz Stadium Guide', item: '/mercedes-benz-stadium-world-cup-2026' }
  ]);

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
    url: 'https://stadiumport.com/mercedes-benz-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

