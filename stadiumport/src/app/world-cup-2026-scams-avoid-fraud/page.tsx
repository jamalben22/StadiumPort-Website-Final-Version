import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Scams: Avoid Ticket & Travel Fraud',
  description: 'Protect yourself from World Cup 2026 ticket scams, fake accommodation listings, and travel fraud. Essential guide to avoiding fraud in USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 ticket scams',
    'fake World Cup tickets',
    'World Cup 2026 fraud',
    'avoid travel scams USA Canada Mexico',
    'safe World Cup ticket buying',
    'World Cup accommodation scams'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-scams-avoid-fraud',
  },
  openGraph: {
    title: 'World Cup 2026 Scams: Avoid Ticket & Travel Fraud',
    description: 'Protect yourself from World Cup 2026 ticket scams, fake accommodation listings, and travel fraud. Essential guide to avoiding fraud in USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-scams-avoid-fraud',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_photo-style_image_showing_a_worried_football_fan_reviewing_suspiciou.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Scams and Fraud Prevention',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Scams: Avoid Ticket & Travel Fraud',
    description: 'Protect yourself from World Cup 2026 ticket scams, fake accommodation listings, and travel fraud. Essential guide to avoiding fraud in USA, Canada & Mexico.',
    images: ['/images/safety-guide/A_realistic_photo-style_image_showing_a_worried_football_fan_reviewing_suspiciou.webp'],
  },
};

export default function Page() {
  const jsonLd = generateArticleSchema('world-cup-2026-scams-avoid-fraud', '/world-cup-2026-scams-avoid-fraud');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/safety-guide' },
    { name: 'Scams & Fraud Prevention', item: '/world-cup-2026-scams-avoid-fraud' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I know if a World Cup 2026 ticket is legitimate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ONLY guaranteed legitimate tickets are sold directly through FIFA.com/tickets. Tickets bought from social media, Craigslist, or unverified third-party sites are extremely likely to be fake. Valid tickets will be mobile-only via the official FIFA ticketing app.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe to buy World Cup tickets from social media?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Social media platforms like Facebook, X (Twitter), and Instagram are the #1 source of ticket scams. Scammers use stolen photos and fake profiles. Never transfer money via Zelle, Venmo, or crypto to someone you met on social media for tickets.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I do if I am scammed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Immediately file a police report, contact your bank or credit card issuer to dispute the charge, and report the fraud to the platform where you made the purchase. If it involves identity theft, freeze your credit immediately.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are secondary ticket sites like StubHub safe for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sites like StubHub and Viagogo offer buyer guarantees, making them safer than direct transfers, but they are still not official primary sources. Prices will be inflated, and there is a risk of invalid tickets, though you would likely get a refund.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I spot a fake accommodation listing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Red flags include prices significantly lower than market value, requests for payment outside the booking platform (wire transfer), inability to provide a video tour, and listings with no reviews or only new reviews.'
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

