
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema, generateStadiumSchema } from '@/lib/schema';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';

export const metadata: Metadata = {
  title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
  keywords: 'SoFi Stadium World Cup 2026, Los Angeles World Cup, SoFi Stadium Guide, World Cup 2026 LA, stadium seating, travel guide',
  openGraph: {
    title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
    type: 'article',
    url: 'https://stadiumport.com/sofi-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/los-angeles-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'SoFi Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoFi Stadium World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to SoFi Stadium for World Cup 2026. Seating charts, capacity, parking & local transport tips for Los Angeles.',
    images: ['/images/cities/los-angeles-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'SoFi Stadium Guide', item: '/sofi-stadium-world-cup-2026' }
  ]);

  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'sofi-stadium');
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
    url: 'https://stadiumport.com/sofi-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

