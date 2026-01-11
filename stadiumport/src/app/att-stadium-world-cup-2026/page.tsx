
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema, generateStadiumSchema } from '@/lib/schema';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';

export const metadata: Metadata = {
  title: 'AT&T Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to AT&T Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Dallas.',
  keywords: 'AT&T Stadium World Cup 2026, Dallas World Cup, AT&T Stadium Guide, World Cup 2026 Arlington, stadium seating, travel guide',
  openGraph: {
    title: 'AT&T Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to AT&T Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Dallas.',
    type: 'article',
    url: 'https://stadiumport.com/att-stadium-world-cup-2026',
    siteName: 'stadiumport',
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
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'att-stadium');
  
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'AT&T Stadium Guide', item: '/att-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/att-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

