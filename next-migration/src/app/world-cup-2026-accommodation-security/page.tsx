import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Accommodation Security: Safe Stays for World Cup 2026 | Stadiumport',
  description: 'Complete guide to accommodation security for World Cup 2026. Learn how to choose safe hotels, verify Airbnb listings, avoid scams, and secure your room in USA, Canada, and Mexico.',
  keywords: [
    'World Cup 2026 accommodation security',
    'safe stays World Cup',
    'hotel security World Cup',
    'Airbnb safety World Cup',
    'World Cup lodging safety',
    'secure accommodation North America',
    'travel security 2026'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-accommodation-security',
  },
  openGraph: {
    title: 'Accommodation Security: Safe Stays for World Cup 2026 | Stadiumport',
    description: 'Complete guide to accommodation security for World Cup 2026. Safe hotel strategies, Airbnb verification, neighborhood safety, and scam prevention.',
    url: 'https://stadiumport.com/world-cup-2026-accommodation-security',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/Accommodation%20Security_Safe%20Stays.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Accommodation Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accommodation Security: Safe Stays for World Cup 2026 | Stadiumport',
    description: 'Complete guide to accommodation security for World Cup 2026. Safe hotel strategies, Airbnb verification, neighborhood safety.',
    images: ['/images/safety-guide/Accommodation%20Security_Safe%20Stays.webp'],
  },
};

export default function AccommodationSecurityPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-accommodation-security';

  const articleSchema = generateArticleSchema('world-cup-2026-accommodation-security', pageUrl);

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
        "name": "Accommodation Security",
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
        "name": "Is Airbnb safe for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you take precautions. Stick to 'Superhosts' or 'Airbnb Plus' listings, read recent reviews carefully, and never communicate or pay outside the platform. Be wary of new listings with no reviews during the tournament period."
        }
      },
      {
        "@type": "Question",
        "name": "What are the safest hotels for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "International chain hotels often offer standardized security features like 24/7 reception, surveillance, and secure key card access. However, many boutique hotels also have excellent security. Always check for a 24-hour front desk."
        }
      },
      {
        "@type": "Question",
        "name": "How can I secure my hotel room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always use the deadbolt and safety latch when inside. Use a portable door lock for extra security. Keep valuables in the room safe or hotel front desk safe, and use the 'Do Not Disturb' sign when you leave for short periods."
        }
      },
      {
        "@type": "Question",
        "name": "Are hostels safe for World Cup travelers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reputable hostels can be very safe. Look for ones with lockers (bring your own padlock), 24-hour security/reception, and key card access to dorm rooms. Read reviews specifically mentioning security."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I suspect a fake listing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Do not book it. Perform a reverse image search of the photos. Check if the price is unrealistically low. If you've already booked, contact the platform's support immediately and do not send any more money."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to stay in downtown areas of host cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most host city downtowns are safe, especially near stadiums and tourist zones where police presence will be high. However, research specific neighborhoods in cities like Mexico City, Los Angeles, or Philadelphia to avoid high-crime zones."
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
