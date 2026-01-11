import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Money & Financial Safety: World Cup 2026 Guide',
  description: 'Complete financial safety guide for World Cup 2026. Cash strategies for USA, Canada, Mexico, best travel cards, ATM tips, and fraud prevention.',
  keywords: [
    'Money World Cup 2026',
    'Financial Safety World Cup',
    'World Cup Currency Guide',
    'World Cup Travel Money',
    'credit cards World Cup',
    'ATM fees North America',
    'Currency exchange World Cup'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-money-financial-safety',
  },
  openGraph: {
    title: 'Money & Financial Safety: World Cup 2026 Complete Guide | stadiumport',
    description: 'Complete financial safety guide for World Cup 2026. Cash strategies for USA, Canada, Mexico, best travel cards, ATM tips, and fraud prevention.',
    url: 'https://stadiumport.com/world-cup-2026-money-financial-safety',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/Money%20&%20Financial%20Safety%20Cash%20Cards%20&%20Currencies.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Money & Financial Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money & Financial Safety: World Cup 2026 Complete Guide | stadiumport',
    description: 'Complete financial safety guide for World Cup 2026. Cash strategies for USA, Canada, Mexico, best travel cards, ATM tips.',
    images: ['/images/safety-guide/Money%20&%20Financial%20Safety%20Cash%20Cards%20&%20Currencies.webp'],
  },
};

export default function MoneySafetyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-money-financial-safety';

  const articleSchema = generateArticleSchema('world-cup-2026-money-financial-safety', pageUrl);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Safety Guide",
        "item": `${siteUrl}/safety-guide`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Money & Financial Safety",
        "item": `${siteUrl}${pageUrl}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What currency do I need for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will need US Dollars (USD) for the United States, Canadian Dollars (CAD) for Canada, and Mexican Pesos (MXN) for Mexico. While credit cards are widely accepted, carrying local cash in each country is essential for small purchases."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use US Dollars in Canada and Mexico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. While some tourist areas in Canada and Mexico might accept USD, the exchange rate will be poor. It is always better to pay in the local currency (CAD or MXN) to get the best value."
        }
      },
      {
        "@type": "Question",
        "name": "Do World Cup stadiums accept cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most modern stadiums in North America are now cashless venues, accepting only credit/debit cards and mobile payments (Apple Pay, Google Pay). Always bring a card, but keep some cash for transport and pre-game vendors outside."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best credit cards for travel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best cards for World Cup travel are those with no foreign transaction fees (like Chase Sapphire Preferred or Capital One Venture). These save you the typical 3% fee charged on every international purchase."
        }
      },
      {
        "@type": "Question",
        "name": "How do I avoid ATM fees abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a debit card that reimburses ATM fees (like Charles Schwab) or use ATMs within your bank's partner network (e.g., Bank of America partners with Scotiabank in Canada/Mexico) to minimize withdrawal costs."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to use ATMs in Mexico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but use ATMs located inside bank branches or secure shopping malls during daylight hours. Avoid standalone street ATMs which are more susceptible to skimming devices and robbery."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <ClientPage />
    </>
  );
}

