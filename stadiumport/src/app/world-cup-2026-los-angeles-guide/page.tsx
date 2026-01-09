import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Los Angeles World Cup 2026 Guide: SoFi Stadium & Travel Tips',
  description: 'Complete Los Angeles World Cup 2026 travel guide. SoFi Stadium info, best hotels, Metro transportation tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-los-angeles-guide',
  },
  openGraph: {
    title: 'Los Angeles World Cup 2026 Guide: SoFi Stadium & Travel Tips',
    description: 'Complete Los Angeles World Cup 2026 travel guide. SoFi Stadium info, best hotels, Metro transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-los-angeles-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/los-angeles-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Los Angeles World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles World Cup 2026 Guide - SoFi Stadium & Travel',
    description: 'Complete Los Angeles World Cup 2026 travel guide. SoFi Stadium info, best hotels, Metro transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/los-angeles-world-cup-2026.webp'],
  },
  keywords: ['Los Angeles World Cup 2026', 'SoFi Stadium', 'LA Metro', 'Santa Monica hotels', 'Hollywood hotels', 'LAX airport transfer', 'Los Angeles travel tips', 'World Cup tickets Los Angeles', 'Los Angeles fan zones'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('los-angeles-city-guide', '/world-cup-2026-los-angeles-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Los Angeles Guide', item: '/world-cup-2026-los-angeles-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the World Cup stadium in Los Angeles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SoFi Stadium is located in Inglewood, about 12 miles southwest of Downtown Los Angeles and 4 miles from LAX.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get from LAX airport to the stadium area?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SoFi Stadium is very close to LAX. You can take a short Uber/Lyft ride or check for special shuttle bus services during the World Cup. Walking is not recommended due to highway infrastructure.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a car in LA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditionally yes, but for the World Cup, traffic will be a nightmare. We recommend staying near Metro lines (E Line to Santa Monica/Downtown) and using public transit + rideshare to avoid parking headaches.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most tourist areas (Santa Monica, Beverly Hills, West Hollywood) are safe. Downtown LA and parts of Hollywood can be gritty at night. Inglewood near the stadium is generally safe on event days due to high security.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the weather like?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Perfect. Expect sunny days with highs around 75-80°F (24-27°C) and cool evenings. Bring layers as it gets chilly at night near the coast.'
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





