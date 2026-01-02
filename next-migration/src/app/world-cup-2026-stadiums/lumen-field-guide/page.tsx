
import ClientPage from './ClientPage';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Lumen Field | World Cup 2026 Seattle Stadium Guide',
  description: 'Complete guide to Lumen Field for World Cup 2026. Seating charts, transportation, hotels, and match schedule for Seattle.',
  openGraph: {
    images: [
      {
        url: '/images/cities/seattle-world-cup-2026-1600.webp',
        width: 1600,
        height: 1066,
        alt: 'Lumen Field World Cup 2026',
      },
    ],
  },
  twitter: {
    images: ['/images/cities/seattle-world-cup-2026-1600.webp'],
  },
};

export default function Page() {
  return <ClientPage />;
}
