import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Boston World Cup 2026 Guide: Gillette Stadium & Travel Tips',
  description: 'Complete Boston World Cup 2026 travel guide. Gillette Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
  keywords: [
    'Boston World Cup 2026',
    'Gillette Stadium World Cup',
    'Boston World Cup hotels',
    'Boston World Cup tickets',
    'Gillette Stadium transportation',
    'World Cup 2026 host cities',
    'Boston travel guide',
    'Foxborough World Cup guide',
    'FIFA World Cup 2026 Boston'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/boston-city-guide',
  },
  openGraph: {
    title: 'Boston World Cup 2026 Guide: Gillette Stadium & Travel Tips',
    description: 'Complete Boston World Cup 2026 travel guide. Gillette Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/boston-city-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/boston-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Boston World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boston World Cup 2026 Guide - Gillette Stadium & Travel Tips',
    description: 'Complete Boston World Cup 2026 travel guide. Gillette Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/boston-world-cup-2026.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema('boston-city-guide', '/world-cup-2026-host-cities-guide/boston-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Boston Guide', item: '/world-cup-2026-host-cities-guide/boston-city-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the stadium located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gillette Stadium is in Foxborough, MA, about 28 miles southwest of downtown Boston. It is NOT in the city center.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get to the stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The MBTA Commuter Rail (Foxboro Station) runs special event trains from South Station and Providence. Driving is possible but parking is expensive ($50+) and traffic on Route 1 is notoriously heavy.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where should I stay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stay in Downtown Boston (Back Bay/Seaport) for city vibes and take the train. Stay near Patriot Place (Foxborough) for walkable stadium access, though hotels there are limited and expensive.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Boston and Foxborough are very safe. Standard city precautions apply in downtown Boston at night.'
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




