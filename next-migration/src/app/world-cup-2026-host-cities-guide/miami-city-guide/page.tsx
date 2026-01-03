import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Miami World Cup 2026 Guide: Hard Rock Stadium & Travel Tips',
  description: 'Complete Miami World Cup 2026 travel guide. Hard Rock Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
  keywords: ['Miami World Cup 2026', 'Hard Rock Stadium guide', 'World Cup Miami tickets', 'Miami hotels for World Cup', 'FIFA World Cup 26 Miami'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/miami-city-guide',
  },
  openGraph: {
    title: 'Miami World Cup 2026 Guide: Hard Rock Stadium & Travel Tips',
    description: 'Complete Miami World Cup 2026 travel guide. Hard Rock Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/miami-city-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/miami-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Miami World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami World Cup 2026 Guide - Hard Rock Stadium & Travel',
    description: 'Complete Miami World Cup 2026 travel guide. Hard Rock Stadium info, best hotels, transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/miami-world-cup-2026.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema('miami-city-guide', '/world-cup-2026-host-cities-guide/miami-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Miami Guide', item: '/world-cup-2026-host-cities-guide/miami-city-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When are the World Cup matches in Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Miami hosts 7 matches between June 15 and July 18, 2026. This includes four group stage matches, a Round of 32 game, a Quarter-Final (July 11), and the Bronze Final (July 18).'
        }
      },
      {
        '@type': 'Question',
        name: 'How far is Hard Rock Stadium from South Beach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is about 18-20 miles. Without traffic, it\'s a 35-minute drive. With World Cup traffic, expect 90 minutes minimum.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Miami safe for tourists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, yes. South Beach, Brickell, and Wynwood are heavily policed and safe for walking. Avoid walking alone in unlit areas west of I-95 at night.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I wear?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linen and breathable fabrics. It will be hot (88°F+) and humid. Bring a light rain jacket for afternoon storms. Miami dresses up at night.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need to speak Spanish?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, but it helps. Miami is a bilingual city. English is widely spoken, but knowing basic Spanish phrases is appreciated.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I take public transport to the stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Public transport is limited. There is no direct train station. Options include Brightline to Aventura + shuttle, or rideshare. We recommend the Brightline shuttle.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is tap water safe to drink?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Miami tap water is safe to drink. At the stadium, buy bottled water as they remove caps from bottles you bring in.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the tipping culture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard US tipping (18-22%). Note that many South Beach restaurants automatically add an 18% service charge, so check your bill.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I drink alcohol on the beach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, alcohol is prohibited on public beaches and police enforce this. Stick to the beach bars.'
        }
      },
      {
        '@type': 'Question',
        name: 'Best time to book hotels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Immediately. Prices will skyrocket 6 months out. Lock in a refundable rate now.'
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




