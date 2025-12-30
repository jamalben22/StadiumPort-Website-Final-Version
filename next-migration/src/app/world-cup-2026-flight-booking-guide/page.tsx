import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';

const slug = 'world-cup-2026-flight-booking-guide';
const meta = getContentMeta(slug);

export const metadata: Metadata = {
  title: meta?.title || 'World Cup 2026 Flight Booking Guide',
  description: meta?.description || 'Master World Cup 2026 travel with this ultimate flight booking guide. Routes, pricing strategies, and airline tips for USA, Canada & Mexico.',
  alternates: {
    canonical: `/world-cup-2026-flight-booking-guide`,
  },
  openGraph: {
    title: meta?.title || 'World Cup 2026 Flight Booking Guide',
    description: meta?.description || 'Master World Cup 2026 travel with this ultimate flight booking guide. Routes, pricing strategies, and airline tips for USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-flight-booking-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: meta?.image || '/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Flight Booking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta?.title || 'World Cup 2026 Flight Booking Guide',
    description: meta?.description || 'Master World Cup 2026 travel with this ultimate flight booking guide. Routes, pricing strategies, and airline tips for USA, Canada & Mexico.',
    images: [meta?.image || '/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema(slug, '/world-cup-2026-flight-booking-guide');
  
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Travel Tips', item: '/travel-tips' },
    { name: 'Flight Booking Guide', item: '/world-cup-2026-flight-booking-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When should I book flights for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend booking 11 months in advance, as soon as airline schedules are released (June/July 2025). This window often offers the best balance of availability and price.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which airlines fly direct to World Cup 2026 host cities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Major carriers like United, American, Delta, Air Canada, and Aeromexico have extensive networks. International carriers like British Airways, Lufthansa, Emirates, and ANA fly directly to major gateways like JFK, LAX, and Toronto.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it cheaper to fly into major hubs or smaller airports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flying into major hubs (JFK, LAX, MIA) is usually cheaper due to competition. However, consider total travel costs including ground transport to your final destination.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      <ClientPage />
    </>
  );
}
