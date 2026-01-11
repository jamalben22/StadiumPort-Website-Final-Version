
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema, generateStadiumSchema } from '@/lib/schema';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';

export const metadata: Metadata = {
  title: 'Arrowhead Stadium World Cup 2026: Seating & Tickets',
  description: 'Complete guide to Arrowhead Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Kansas City.',
  keywords: 'Arrowhead Stadium World Cup 2026, Kansas City World Cup, GEHA Field at Arrowhead Stadium, World Cup 2026 Kansas City, stadium seating',
  openGraph: {
    title: 'Arrowhead Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Arrowhead Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Kansas City.',
    type: 'article',
    url: 'https://stadiumport.com/arrowhead-stadium-world-cup-2026',
    siteName: 'stadiumport',
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
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'arrowhead-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'Arrowhead Stadium Guide', item: '/arrowhead-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/arrowhead-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

