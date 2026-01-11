import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies',
  description: 'The ultimate World Cup 2026 budget guide. Verified costs for tickets, flights, and hotels in USA, Canada & Mexico. Plus 15+ proven money-saving strategies.',
  keywords: ['World Cup 2026 budget', 'World Cup 2026 cost', 'World Cup 2026 ticket prices', 'World Cup 2026 flights', 'cheap hotels World Cup 2026', 'save money World Cup 2026', 'World Cup travel budget'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-budget-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies',
    description: 'The ultimate World Cup 2026 budget guide. Verified costs for tickets, flights, and hotels in USA, Canada & Mexico. Plus 15+ proven money-saving strategies.',
    url: 'https://stadiumport.com/world-cup-2026-budget-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Budget%20Guide%20Cover%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Budget Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies',
    description: 'The ultimate World Cup 2026 budget guide. Verified costs for tickets, flights, and hotels in USA, Canada & Mexico. Plus 15+ proven money-saving strategies.',
    images: ['/images/travel-tips/World%20Cup%202026%20Budget%20Guide%20Cover%20Illustration.webp'],
  },
};

export default async function BudgetGuidePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const jsonLd = generateArticleSchema('world-cup-2026-budget-guide', '/world-cup-2026-budget-guide');

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
        "name": "Budget Guide",
        "item": "https://stadiumport.com/world-cup-2026-budget-guide"
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a trip to World Cup 2026 cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A budget trip starts around $3,500-$5,000 per person for 10-12 days. Mid-range budgets are $7,000-$12,000, while premium experiences can exceed $15,000.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are World Cup 2026 tickets expensive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Official group stage tickets are expected to start around $70-$220. However, secondary market prices will be significantly higher. Hospitality packages start much higher.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which World Cup 2026 host cities are cheapest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mexico City, Guadalajara, and Monterrey generally offer lower accommodation and food costs compared to US and Canadian cities. In the US, Kansas City and Houston are often more affordable than New York or Los Angeles.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I book flights for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Book international long-haul flights 11-12 months in advance when schedules open. Domestic flights within North America are often best booked 3-6 months out.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a visa for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your nationality. You may need separate visas or electronic travel authorizations (ESTA/eTA) for the USA, Canada, and Mexico. Check requirements early.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={jsonLd} nonce={nonce} />
      <JsonLd schema={breadcrumbJsonLd} nonce={nonce} />
      <JsonLd schema={faqLd} nonce={nonce} />
      <ClientPage />
    </>
  );
}

