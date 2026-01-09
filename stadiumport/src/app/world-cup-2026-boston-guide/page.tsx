import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Boston World Cup 2026 Guide: Gillette Stadium + Local Tips',
  description: 'Boston World Cup 2026 guide with Gillette Stadium matchday logistics, where to stay, MBTA hacks, neighborhood picks, day-by-day itineraries, budgets, safety, and FAQs.',
  keywords: [
    'Boston World Cup 2026 guide',
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
    canonical: 'https://stadiumport.com/world-cup-2026-boston-guide',
  },
  openGraph: {
    title: 'Boston World Cup 2026 Guide: Gillette Stadium + Local Tips',
    description: 'Boston World Cup 2026 guide with Gillette Stadium matchday logistics, where to stay, MBTA hacks, neighborhood picks, day-by-day itineraries, budgets, safety, and FAQs.',
    url: 'https://stadiumport.com/world-cup-2026-boston-guide',
    siteName: 'stadiumport',
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
    title: 'Boston World Cup 2026 Guide - Gillette Stadium + Local Tips',
    description: 'Boston World Cup 2026 guide with Gillette Stadium matchday logistics, where to stay, MBTA hacks, neighborhood picks, day-by-day itineraries, budgets, safety, and FAQs.',
    images: ['/images/cities/boston-world-cup-2026.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema('boston-city-guide', '/world-cup-2026-boston-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Boston Guide', item: '/world-cup-2026-boston-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Gillette Stadium actually in Boston?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Gillette Stadium is in Foxborough, Massachusetts, about 29 miles (47 km) southwest of downtown Boston. Treat match day like an excursion and plan for commuter rail or heavy event traffic if driving.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best way to get to Gillette Stadium on match day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most visitors, the MBTA Commuter Rail to Foxboro Station is the least stressful option when special event trains run. Driving works, but Route 1 traffic can be brutal and parking rules vary by lot and event.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where should I stay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stay in Boston (Back Bay, Seaport, Downtown, Fenway) for the full city experience and commute to matches. Stay near Patriot Place in Foxborough only if you want to be able to walk to the stadium.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Boston safe for World Cup travelers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boston is generally safe for visitors. Use standard city awareness late at night, keep valuables secure on crowded transit, and stick to well-lit streets when bars close.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get from Boston Logan Airport (BOS) to downtown cheaply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The MBTA Silver Line SL1 bus is a simple, budget-friendly option from Logan to South Station and the Seaport. From South Station you can connect to the subway and commuter rail.'
        }
      },
      {
        '@type': 'Question',
        name: 'How early should I leave Boston for a match in Foxborough?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aim to arrive in Foxborough at least 2–3 hours before kickoff. That buffer covers security, finding your gate, grabbing food, and enjoying Patriot Place without sprinting.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I pack for Boston matches in June and July?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plan for sun, humidity, and sudden rain. Bring breathable layers, a light rain shell, comfortable walking shoes, sunscreen, and a portable phone charger for transit and tickets.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do Boston bars really close early?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Massachusetts, last call comes earlier than many visitors expect, and 2:00 AM is the hard stop. If you want a big night, start earlier and plan your ride home.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the best neighborhoods to stay in for first-time visitors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Back Bay is the easiest all-around base; Downtown/Waterfront is convenient for history; Seaport is modern and walkable; Fenway/Kenmore is lively and sports-first. Pick the vibe you want and commute to Foxborough.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is tipping expected in Boston?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Tipping is customary in the U.S., especially for servers and bartenders. Budget for gratuity as part of your match-week spend.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I rent a car for Boston during the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not for most visitors staying in the city. Boston is compact and transit-friendly, while parking is expensive and driving is confusing. Consider a car only if you plan day trips or want maximum control for Foxborough.'
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



