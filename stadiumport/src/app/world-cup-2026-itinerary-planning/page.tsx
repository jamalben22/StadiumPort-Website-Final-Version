
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { contentRegistry } from '@/data/content-registry';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'World Cup 2026 Itinerary: 1 & 2 Week Trip Plans for Fans',
  description: 'Optimized World Cup 2026 itineraries. Step-by-step travel plans for 1, 2, and 3-week trips across USA, Canada & Mexico. Maximize matches & minimize travel.',
  keywords: [
    'World Cup 2026 itinerary',
    'World Cup 2026 trip planner',
    '2 week World Cup itinerary',
    '1 week World Cup itinerary',
    'traveling to World Cup 2026',
    'World Cup 2026 schedule planning',
    'USA Mexico Canada trip plan',
    'World Cup road trip'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-itinerary-planning',
  },
  openGraph: {
    title: 'World Cup 2026 Itinerary: 1 & 2 Week Trip Plans for Fans',
    description: 'Optimized World Cup 2026 itineraries. Step-by-step travel plans for 1, 2, and 3-week trips across USA, Canada & Mexico. Maximize matches & minimize travel.',
    url: 'https://stadiumport.com/world-cup-2026-itinerary-planning',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Itinerary%20Planning%20Guide%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Itinerary Planning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Itinerary: 1 & 2 Week Trip Plans for Fans',
    description: 'Optimized World Cup 2026 itineraries. Step-by-step travel plans for 1, 2, and 3-week trips across USA, Canada & Mexico. Maximize matches & minimize travel.',
    images: ['/images/travel-tips/World%20Cup%202026%20Itinerary%20Planning%20Guide%20Illustration.webp'],
  },
};

export default async function Page() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const slug = 'world-cup-2026-itinerary-planning';
  const jsonLd = generateArticleSchema(slug, `/${slug}`);
  
  const breadcrumbJsonLd = {
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
        "name": "Itinerary Planning",
        "item": `https://stadiumport.com/${slug}`
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How many matches can I see in a 1-week World Cup 2026 trip?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'In a 1-week trip, you can realistically see 2-4 matches if you focus on a specific region (like the Northeast Corridor or West Coast). Trying to cross the continent will waste too much time in transit.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it better to base myself in one city or move around?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'For a 1-week trip, stick to 1-2 bases. For 2+ weeks, moving between regional hubs (e.g., NYC, then Dallas, then LA) allows you to see more without daily travel burnout.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the minimum recommended time between cities?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Always allow at least 24 hours between matches in different cities. Flight delays, airport security, and hotel check-ins eat up time. Ideally, plan for one travel day between match days.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I visit all three host countries in a 2-week trip?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It is possible but exhausting. A better approach for 2 weeks is to combine two regions (e.g., Canada & East Coast USA, or Mexico & South USA) to maximize match time.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={jsonLd} nonce={nonce} />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd schema={faqLd} nonce={nonce} />
      <ClientPage />
    </>
  );
}

