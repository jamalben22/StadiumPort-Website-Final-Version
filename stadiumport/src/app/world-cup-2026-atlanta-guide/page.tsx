import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Atlanta World Cup 2026 Guide: Mercedes-Benz Stadium & Travel Tips',
  description: 'Complete Atlanta World Cup 2026 travel guide. Mercedes-Benz Stadium info, best hotels, MARTA transportation tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-atlanta-guide',
  },
  openGraph: {
    title: 'Atlanta World Cup 2026 Guide: Mercedes-Benz Stadium & Travel Tips',
    description: 'Complete Atlanta World Cup 2026 travel guide. Mercedes-Benz Stadium info, best hotels, MARTA transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-atlanta-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/atlanta-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Atlanta World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlanta World Cup 2026 Guide - Mercedes-Benz Stadium & Travel',
    description: 'Complete Atlanta World Cup 2026 travel guide. Mercedes-Benz Stadium info, best hotels, MARTA transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/atlanta-world-cup-2026.webp'],
  },
  keywords: ['Atlanta World Cup 2026', 'Mercedes-Benz Stadium', 'MARTA', 'Downtown Atlanta hotels', 'Midtown Atlanta hotels', 'Atlanta airport transfer', 'Atlanta travel tips', 'World Cup tickets Atlanta', 'Atlanta CityPASS', 'Atlanta fan zones'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('atlanta-city-guide', '/world-cup-2026-atlanta-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Atlanta Guide', item: '/world-cup-2026-atlanta-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the World Cup stadium in Atlanta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mercedes-Benz Stadium is located in downtown Atlanta, next to Centennial Olympic Park and the Georgia World Congress Center.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get from ATL airport to the stadium area?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Take MARTA from the airport to Five Points (Gold/Red), then connect to the Blue/Green line for stations closest to the stadium.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a car for World Cup 2026 in Atlanta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No if you stay Downtown or Midtown. MARTA is efficient and walking distance covers most venues. Cars add parking costs and traffic stress.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the weather like in June and July?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hot and humid outdoors, typically 88–95°F (31–35°C). The stadium interior is climate-controlled.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which areas are best to stay in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Downtown for walk-to-stadium convenience; Midtown for dining and nightlife; Buckhead for upscale stays via MARTA; Decatur for a calmer family base.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I bring a bag to the stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but follow the clear bag policy: clear bags up to 12” x 6” x 12”, or a small clutch up to 4.5” x 6.5”. Policies can vary by event; check matchday guidelines before travel.'
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





