
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';
import { generateStadiumSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
  description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
  keywords: "Levi's Stadium World Cup 2026, San Francisco World Cup, Levi's Stadium Guide, World Cup 2026 Santa Clara, stadium seating, travel guide",
  openGraph: {
    title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
    description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
    type: 'article',
    url: 'https://stadiumport.com/levis-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/san-francisco-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: "Levi's Stadium World Cup 2026",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Levi's Stadium World Cup 2026 Guide: Seating & Tickets",
    description: "Complete guide to Levi's Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for San Francisco/Bay Area.",
    images: ['/images/cities/san-francisco-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'levis-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: "Levi's Stadium Guide", item: '/levis-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/levis-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

