import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kansas City World Cup 2026 Guide: Arrowhead Stadium & Travel Tips',
  description: 'Complete Kansas City World Cup 2026 travel guide. Arrowhead Stadium info, best hotels, transportation tips, BBQ guide & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/kansas-city-city-guide',
  },
  openGraph: {
    title: 'Kansas City World Cup 2026 Guide: Arrowhead Stadium & Travel Tips',
    description: 'Complete Kansas City World Cup 2026 travel guide. Arrowhead Stadium info, best hotels, transportation tips, BBQ guide & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/kansas-city-city-guide',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/kansas-city-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Kansas City World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kansas City World Cup 2026 Guide - Arrowhead Stadium & Travel',
    description: 'Complete Kansas City World Cup 2026 travel guide. Arrowhead Stadium info, best hotels, transportation tips, BBQ guide & match schedule. Plan your trip.',
    images: ['/images/cities/kansas-city-world-cup-2026.webp'],
  },
  keywords: ['Kansas City World Cup 2026', 'Arrowhead Stadium World Cup', 'Kansas City World Cup hotels', 'Kansas City BBQ guide', 'World Cup 2026 Quarterfinal'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('kansas-city-city-guide', '/world-cup-2026-host-cities-guide/kansas-city-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Kansas City Guide', item: '/world-cup-2026-host-cities-guide/kansas-city-city-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When are the World Cup matches in Kansas City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kansas City hosts 6 matches: June 16, 20, 25, 27 (Group Stage), July 2 (Round of 32), and a Quarterfinal on July 11, 2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is the World Cup stadium in Kansas City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Matches will be held at GEHA Field at Arrowhead Stadium, located at 1 Arrowhead Dr, Kansas City, MO 64129.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best area to stay in Kansas City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Downtown/Power & Light District is best for nightlife and Fan Fest access. Country Club Plaza is best for upscale dining and shopping.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there public transport to Arrowhead Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No direct rail service exists. Fans must rely on pre-booked shuttles, rideshare (Uber/Lyft), or parking passes booked months in advance.'
        }
      },
      {
        '@type': 'Question',
        name: 'What BBQ restaurants should I visit in Kansas City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top recommendations include Joe\'s Kansas City (Z-Man Sandwich), Q39 (Burnt End Burger), and Arthur Bryant\'s (Beef Sandwich).'
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




