
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { WORLD_CUP_STADIUMS } from '@/data/stadiums';
import { generateStadiumSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
  description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
  keywords: 'MetLife Stadium World Cup 2026, World Cup 2026 Final, New York New Jersey World Cup, MetLife Stadium Guide, stadium seating, travel guide',
  openGraph: {
    title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
    description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
    type: 'article',
    url: 'https://stadiumport.com/metlife-stadium-world-cup-2026',
    siteName: 'stadiumport',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'MetLife Stadium World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetLife Stadium World Cup 2026 Guide: Final Host, Seating & Tickets',
    description: 'Host of the World Cup 2026 Final. Complete MetLife Stadium guide: seating charts, capacity, parking & local transport tips for New York/New Jersey.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  const stadium = WORLD_CUP_STADIUMS.find(s => s.id === 'metlife-stadium');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Stadiums', item: '/world-cup-2026-stadiums' },
    { name: 'MetLife Stadium Guide', item: '/metlife-stadium-world-cup-2026' }
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
    url: 'https://stadiumport.com/metlife-stadium-world-cup-2026'
  }) : null;

  return (
    <>
      <JsonLd schema={breadcrumbLd} />
      {stadiumLd && <JsonLd schema={stadiumLd} />}
      <ClientPage />
    </>
  );
}

