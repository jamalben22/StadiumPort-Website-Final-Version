import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';

const slug = 'world-cup-2026-accommodation-guide';
const meta = getContentMeta(slug);

export const metadata: Metadata = {
  title: meta?.title || 'World Cup 2026 Accommodation Guide',
  description: meta?.description || 'Where to stay for World Cup 2026. Complete guide to hotels, hostels, and rentals in all 16 host cities.',
  alternates: {
    canonical: `/world-cup-2026-accommodation-guide`,
  },
  openGraph: {
    title: meta?.title || 'World Cup 2026 Accommodation Guide',
    description: meta?.description || 'Where to stay for World Cup 2026. Complete guide to hotels, hostels, and rentals in all 16 host cities.',
    url: 'https://stadiumport.com/world-cup-2026-accommodation-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: meta?.image || '/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Accommodation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta?.title || 'World Cup 2026 Accommodation Guide',
    description: meta?.description || 'Where to stay for World Cup 2026. Complete guide to hotels, hostels, and rentals in all 16 host cities.',
    images: [meta?.image || '/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema(slug, '/world-cup-2026-accommodation-guide');
  
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Travel Tips', item: '/travel-tips' },
    { name: 'Accommodation Guide', item: '/world-cup-2026-accommodation-guide' }
  ]);

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
