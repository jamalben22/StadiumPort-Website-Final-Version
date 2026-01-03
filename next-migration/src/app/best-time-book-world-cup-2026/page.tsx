import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Best Time to Book World Cup 2026: Tickets, Flights & Hotels',
  description: 'The definitive timeline for booking World Cup 2026. Data-backed guide on when to buy tickets, flights, and hotels to save thousands. Don\'t miss the 11-month sweet spot.',
  alternates: {
    canonical: 'https://stadiumport.com/best-time-book-world-cup-2026',
  },
  openGraph: {
    title: 'Best Time to Book World Cup 2026: Tickets, Flights & Hotels',
    description: 'The definitive timeline for booking World Cup 2026. Data-backed guide on when to buy tickets, flights, and hotels to save thousands. Don\'t miss the 11-month sweet spot.',
    url: 'https://stadiumport.com/best-time-book-world-cup-2026',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/Best%20Time%20to%20Book%20World%20Cup%202026%20Guide%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'Best Time to Book World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Book World Cup 2026: Tickets, Flights & Hotels',
    description: 'The definitive timeline for booking World Cup 2026. Data-backed guide on when to buy tickets, flights, and hotels to save thousands.',
    images: ['/images/travel-tips/Best%20Time%20to%20Book%20World%20Cup%202026%20Guide%20Illustration.webp'],
  },
  keywords: ['World Cup 2026 booking timeline', 'when to book World Cup 2026 flights', 'World Cup 2026 ticket lottery dates', 'best time to book hotels for World Cup 2026', 'World Cup 2026 travel planning'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('best-time-book-world-cup-2026', '/best-time-book-world-cup-2026');

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
        "name": "Best Time to Book",
        "item": "https://stadiumport.com/best-time-book-world-cup-2026"
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does the World Cup 2026 ticket lottery open?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Historically, FIFA opens the first ticket lottery phase 14-16 months before the tournament. For 2026, expect registration to begin in early-to-mid 2025.'
        }
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book flights for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The "sweet spot" for international flights is typically 11 months in advance, right when airlines release their schedules. Booking at this time often yields the best combination of price and availability.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I book hotels for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hotels in host cities will see high demand. Aim to book refundable accommodations 10-12 months out. Many hotels release inventory around the one-year mark.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I buy World Cup tickets after the lottery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, there are typically First Come First Served (FCFS) sales phases and an official FIFA Resale Platform. However, availability is lower and demand is extremely high during these phases.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it better to book a World Cup travel package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Packages offer convenience and guaranteed tickets but come at a premium. If you value ease over cost, they are a good option. For budget travelers, booking independently is usually cheaper.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={jsonLd} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd schema={faqLd} />
      <ClientPage />
    </>
  );
}
