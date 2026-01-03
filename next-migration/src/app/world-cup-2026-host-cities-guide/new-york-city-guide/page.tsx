
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'New York/NJ World Cup 2026 Guide: MetLife Stadium & Travel Tips',
  description: 'Complete New York/NJ World Cup 2026 travel guide. MetLife Stadium info, best hotels, NJ Transit tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/new-york-city-guide',
  },
  openGraph: {
    title: 'New York/NJ World Cup 2026 Guide: MetLife Stadium & Travel Tips',
    description: 'Complete New York/NJ World Cup 2026 travel guide. MetLife Stadium info, best hotels, NJ Transit tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/new-york-city-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'New York/New Jersey World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York/NJ World Cup 2026 Guide - MetLife Stadium & Travel',
    description: 'Complete New York/NJ World Cup 2026 travel guide. MetLife Stadium info, best hotels, NJ Transit tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026.webp'],
  },
  keywords: ['New York World Cup 2026', 'MetLife Stadium', 'NJ Transit', 'Manhattan hotels', 'Jersey City hotels', 'EWR airport transfer', 'New York travel tips', 'World Cup tickets New York', 'NYC Subway', 'New York fan zones'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('new-york-city-guide', '/world-cup-2026-host-cities-guide/new-york-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'New York/NJ Guide', item: '/world-cup-2026-host-cities-guide/new-york-city-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where exactly is the stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MetLife Stadium is in East Rutherford, New Jersey. It is about 5 miles west of Manhattan. It is NOT in New York City. You must cross a river and state line to get there.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I take the subway to the game?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The NYC Subway does not go to New Jersey. You must take NJ Transit trains from Penn Station (Manhattan) to Secaucus Junction, then transfer to the stadium rail line.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I stay in Manhattan or New Jersey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stay in Manhattan (Midtown) for the full "New York experience" and tourist sights. Stay in Jersey City or Hoboken for cheaper hotels, skyline views, and slightly easier stadium access.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which airport is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EWR (Newark) is closest to the stadium and New Jersey hotels. JFK and LGA are in Queens, requiring a longer, more expensive trip across the city to reach the stadium area.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, tourist areas in Manhattan and the stadium area are very safe. Exercise normal big-city caution (watch belongings, avoid empty train cars late at night).'
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




