
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema, generateStadiumSchema } from '@/lib/schema';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';

export const metadata: Metadata = {
  title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
  keywords: 'NRG Stadium World Cup 2026, Houston World Cup, NRG Stadium Guide, World Cup 2026 Houston, stadium seating, travel guide',
  openGraph: {
    title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
    type: 'article',
    url: 'https://stadiumport.com/nrg-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/houston-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'NRG Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRG Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to NRG Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Houston.',
    images: ['/images/cities/houston-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'nrg-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'NRG Stadium Guide', item: '/nrg-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/nrg-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

