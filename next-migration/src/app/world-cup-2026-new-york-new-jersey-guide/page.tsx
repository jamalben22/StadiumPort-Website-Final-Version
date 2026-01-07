
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'New York/New Jersey World Cup 2026 Guide (Local Tips)',
  description: 'New York/New Jersey World Cup 2026 guide for MetLife Stadium: where to stay, NJ Transit match-day plan, airport routes, budgets, safety, itineraries.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-new-york-new-jersey-guide',
  },
  openGraph: {
    title: 'New York/New Jersey World Cup 2026 Guide (Local Tips)',
    description: 'New York/New Jersey World Cup 2026 guide for MetLife Stadium: where to stay, NJ Transit match-day plan, airport routes, budgets, safety, itineraries.',
    url: 'https://stadiumport.com/world-cup-2026-new-york-new-jersey-guide',
    siteName: 'stadiumport',
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
    title: 'New York/New Jersey World Cup 2026 Guide (Local Tips)',
    description: 'New York/New Jersey World Cup 2026 guide for MetLife Stadium: where to stay, NJ Transit match-day plan, airport routes, budgets, safety, itineraries.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026.webp'],
  },
  keywords: [
    'New York/New Jersey World Cup 2026 guide',
    'New York World Cup 2026 guide',
    'New Jersey World Cup 2026 guide',
    'MetLife Stadium World Cup 2026',
    'MetLife Stadium final',
    'how to get to MetLife Stadium from Manhattan',
    'NJ Transit to MetLife Stadium',
    'Penn Station to MetLife Stadium train',
    'Secaucus to Meadowlands Station',
    'where to stay for MetLife Stadium',
    'best hotels near MetLife Stadium',
    'Jersey City vs Manhattan for World Cup',
    'Newark airport to MetLife Stadium',
    'JFK to MetLife Stadium',
    'LaGuardia to Manhattan public transit',
    'World Cup 2026 New York fan zones',
    'things to do in NYC during World Cup',
    'NYC safety tips for tourists',
    'NYC weather June July',
    'World Cup 2026 final travel tips'
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('new-york-city-guide', '/world-cup-2026-new-york-new-jersey-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'New York/NJ Guide', item: '/world-cup-2026-new-york-new-jersey-guide' }
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
          text: 'MetLife Stadium is in East Rutherford, New Jersey (not in New York City). Plan on crossing the Hudson River and using NJ Transit or a car service.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I take the subway to the game?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The NYC Subway doesn’t go to New Jersey. The standard route is NJ Transit from New York Penn Station to Secaucus Junction, then transfer to Meadowlands Station.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I stay in Manhattan or New Jersey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stay in Manhattan (Midtown) for sightseeing and late-night energy. Stay in Jersey City or Hoboken for skyline views, often better value, and easier stadium logistics.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which airport is best?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Newark (EWR) is typically the most convenient for MetLife Stadium and New Jersey bases. JFK and LaGuardia are in Queens and usually mean a longer cross-city trip.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but treat it like any major city: keep valuables zipped, avoid empty subway cars late at night, and stay alert in dense crowds around Penn Station and Times Square.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get from Manhattan to MetLife Stadium by train?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Go to New York Penn Station, take any NJ Transit train marked “SEC” to Secaucus Junction, then transfer to a Meadowlands-bound shuttle train for big events.'
        }
      },
      {
        '@type': 'Question',
        name: 'How early should I leave for the match?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For high-demand matches (especially the Final), plan to arrive in the Meadowlands area 2–3 hours before kickoff to clear security and handle platform queues.'
        }
      },
      {
        '@type': 'Question',
        name: 'What’s the easiest base for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For families, Midtown East, the Upper West Side, and Jersey City waterfront are comfortable, walkable, and transit-friendly.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need travel insurance for New York?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you’re visiting from abroad, yes—U.S. healthcare can be expensive, and big-event trips tend to have higher change and cancellation risk.'
        }
      }
    ]
  };

  const finalEventLd = generateEventSchema({
    name: 'FIFA World Cup 2026 Final (New York/New Jersey) – MetLife Stadium',
    startDate: '2026-07-19',
    endDate: '2026-07-19',
    location: {
      name: 'MetLife Stadium',
      address: 'East Rutherford'
    },
    image: '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
    description: 'World Cup 2026 Final hosted at MetLife Stadium in East Rutherford, New Jersey.'
  });

  const metlifeLd = generateLocalBusinessSchema({
    name: 'MetLife Stadium',
    image: '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
    address: {
      street: '1 MetLife Stadium Dr',
      city: 'East Rutherford',
      region: 'NJ',
      postalCode: '07073',
      country: 'US'
    },
    geo: {
      latitude: 40.8135,
      longitude: -74.0745
    },
    priceRange: '$$$'
  });

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      <JsonLd schema={finalEventLd} />
      <JsonLd schema={metlifeLd} />
      <ClientPage />
    </>
  );
}





