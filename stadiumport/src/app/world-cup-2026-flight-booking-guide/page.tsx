import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'World Cup 2026 Flight Guide: Booking Tips & Best Routes',
  description: 'Ultimate World Cup 2026 flight booking guide. Find the best routes, cheapest times to book & airline tips for traveling to USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 flights',
    'book flights World Cup 2026',
    'cheap flights World Cup 2026',
    'airlines World Cup 2026',
    'flying to World Cup 2026',
    'World Cup 2026 flight routes',
    'World Cup 2026 air travel',
    'best time to book World Cup flights',
    'flights to USA World Cup 2026',
    'flights to Mexico World Cup 2026',
    'flights to Canada World Cup 2026'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-flight-booking-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Flight Guide: Booking Tips & Best Routes',
    description: 'Ultimate World Cup 2026 flight booking guide. Find the best routes, cheapest times to book & airline tips for traveling to USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-flight-booking-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Flight%20Booking%20Guide%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Flight Booking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Flight Guide: Booking Tips & Best Routes',
    description: 'Ultimate World Cup 2026 flight booking guide. Find the best routes, cheapest times to book & airline tips for traveling to USA, Canada & Mexico.',
    images: ['/images/travel-tips/World%20Cup%202026%20Flight%20Booking%20Guide%20Illustration.webp'],
  },
};

export default async function FlightBookingGuidePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const slug = 'world-cup-2026-flight-booking-guide';
  const jsonLd = generateArticleSchema(slug, '/world-cup-2026-flight-booking-guide');

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://stadiumport.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Travel Tips",
        "item": "https://stadiumport.com/travel-tips"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Flight Booking Guide",
        "item": "https://stadiumport.com/world-cup-2026-flight-booking-guide"
      }
    ]
  };

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
      <JsonLd schema={jsonLd} nonce={nonce} />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd schema={faqLd} nonce={nonce} />
      <ClientPage />
    </>
  );
}

