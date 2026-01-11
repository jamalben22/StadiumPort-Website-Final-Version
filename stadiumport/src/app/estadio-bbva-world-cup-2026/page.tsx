
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';
import { generateStadiumSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
  description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
  keywords: 'Estadio BBVA World Cup 2026, Monterrey World Cup Stadium, Estadio BBVA Guide, Monterrey Soccer Guide, World Cup 2026 Monterrey matches, Estadio BBVA seating chart',
  openGraph: {
    title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
    type: 'article',
    url: 'https://stadiumport.com/estadio-bbva-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/monterrey-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Estadio BBVA World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estadio BBVA World Cup 2026 Guide: Seating & Tickets',
    description: 'Complete guide to Estadio BBVA for World Cup 2026. Seating charts, capacity, parking & local transport tips for Monterrey.',
    images: ['/images/cities/monterrey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'estadio-bbva');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'Estadio BBVA Guide', item: '/estadio-bbva-world-cup-2026' }
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
    url: 'https://stadiumport.com/estadio-bbva-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

