import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { HOST_CITIES } from '@/data/host-cities';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'World Cup 2026 Host Cities Guide: 16 Venues & Travel Tips',
  description: 'Complete guide to all 16 World Cup 2026 host cities. Get stadium info, travel tips & match schedules for USA, Canada & Mexico venues.',
  keywords: ['World Cup 2026 host cities', 'World Cup 2026 cities', 'FIFA World Cup 2026 locations', 'World Cup 2026 venues', 'World Cup 2026 USA Mexico Canada cities', 'stadiumport'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Host Cities Guide: 16 Venues & Travel Tips',
    description: 'Complete guide to all 16 World Cup 2026 host cities. Get stadium info, travel tips & match schedules for USA, Canada & Mexico venues.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide',
    type: 'article',
    siteName: 'stadiumport',
    locale: 'en_US',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026-1024.webp',
        width: 1024,
        height: 683,
        alt: 'World Cup 2026 Host Cities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Host Cities Guide: 16 Venues & Travel Tips',
    description: 'Complete guide to all 16 World Cup 2026 host cities. Get stadium info, travel tips & match schedules for USA, Canada & Mexico venues.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1024.webp'],
  },
};

export default function Page() {
  // JSON-LD for Breadcrumbs
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
        "name": "World Cup 2026 Host Cities",
        "item": "https://stadiumport.com/world-cup-2026-host-cities-guide"
      }
    ]
  };

  // JSON-LD for FAQs
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the 2026 World Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 FIFA World Cup is scheduled to take place from June 11 to July 19, 2026."
        }
      },
      {
        "@type": "Question",
        "name": "How many cities are hosting the 2026 World Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "16 cities across three countries will host matches: 11 in the USA, 3 in Mexico, and 2 in Canada."
        }
      },
      {
        "@type": "Question",
        "name": "Which city hosts the final?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 World Cup Final will be hosted by New York/New Jersey at MetLife Stadium on July 19, 2026."
        }
      },
      {
        "@type": "Question",
        "name": "How to get tickets for the 2026 World Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tickets are expected to go on sale in 2025 via the official FIFA website. Sign up for alerts to stay updated."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best host cities to visit for tourists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top tourist destinations among host cities include New York City, Los Angeles, Mexico City, Toronto, and Miami, offering diverse cultural experiences and major attractions."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={breadcrumbJsonLd} />
      <JsonLd schema={faqJsonLd} />
      <ClientPage />
    </>
  );
}

