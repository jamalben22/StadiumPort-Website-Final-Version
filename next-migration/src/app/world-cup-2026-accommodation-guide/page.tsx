import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';

export const metadata: Metadata = {
  title: 'World Cup 2026 Accommodation Guide: Best Hotels & Where to Stay',
  description: 'Complete guide to World Cup 2026 hotels & accommodation. Best areas to stay, booking tips & hostel options for all 16 host cities in USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 accommodation',
    'World Cup 2026 hotels',
    'where to stay World Cup 2026',
    'World Cup 2026 hostels',
    'cheap hotels World Cup 2026',
    'World Cup 2026 rental apartments',
    'World Cup 2026 housing',
    'best hotels for World Cup 2026',
    'booking World Cup 2026',
    'stadium hotels World Cup 2026'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-accommodation-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Accommodation Guide: Best Hotels & Where to Stay',
    description: 'Complete guide to World Cup 2026 hotels & accommodation. Best areas to stay, booking tips & hostel options for all 16 host cities in USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-accommodation-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Accommodation%20Guide%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Accommodation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Accommodation Guide: Best Hotels & Where to Stay',
    description: 'Complete guide to World Cup 2026 hotels & accommodation. Best areas to stay, booking tips & hostel options for all 16 host cities in USA, Canada & Mexico.',
    images: ['/images/travel-tips/World%20Cup%202026%20Accommodation%20Guide%20Illustration.webp'],
  },
};

export default function Page() {
  const slug = 'world-cup-2026-accommodation-guide';
  const jsonLd = generateArticleSchema(slug, '/world-cup-2026-accommodation-guide');
  
  const breadcrumbLd = {
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
        "name": "Accommodation Guide",
        "item": "https://stadiumport.com/world-cup-2026-accommodation-guide"
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How far in advance should I book World Cup 2026 accommodation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend booking 11-12 months in advance. Hotels typically open reservations 365 days out. Booking earlier guarantees availability, though prices may be high.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it cheaper to stay in hotels or Airbnbs for the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For solo travelers and couples, hotels are often safer and more reliable. For groups of 4+, Airbnbs can offer significant savings, but watch out for last-minute cancellations.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the best neighborhoods to stay in for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In general, stay near mass transit hubs rather than the stadiums themselves. Most stadiums are in suburbs with limited nightlife. Downtown areas offer better amenities and transport links.'
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

