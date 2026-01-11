
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';
import { generateStadiumSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hard Rock Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Hard Rock Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Miami.',
  keywords: 'Hard Rock Stadium World Cup 2026, Miami World Cup, Hard Rock Stadium Guide, World Cup 2026 Miami, stadium seating, travel guide',
  openGraph: {
    title: 'Hard Rock Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Hard Rock Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Miami.',
    type: 'article',
    url: 'https://stadiumport.com/hard-rock-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/miami-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Hard Rock Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard Rock Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Hard Rock Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Miami.',
    images: ['/images/cities/miami-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'hard-rock-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'Hard Rock Stadium Guide', item: '/hard-rock-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/hard-rock-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

