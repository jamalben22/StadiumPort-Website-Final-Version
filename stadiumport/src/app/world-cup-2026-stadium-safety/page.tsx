import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
  description: 'Complete guide to World Cup 2026 stadium security. Clear bag policy, prohibited items, arrival timing, and emergency procedures for all 16 host venues.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-stadium-safety',
  },
  openGraph: {
    title: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
    description: 'Complete guide to World Cup 2026 stadium security. Clear bag policy, prohibited items, arrival timing, and emergency procedures for all 16 host venues.',
    url: 'https://stadiumport.com/world-cup-2026-stadium-safety',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Stadium Security Entrance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
    description: 'Complete guide to World Cup 2026 stadium security. Clear bag policy, prohibited items, arrival timing, and emergency procedures.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026.webp'],
  },
  keywords: [
    'World Cup 2026 stadium safety',
    'World Cup 2026 clear bag policy',
    'World Cup 2026 prohibited items',
    'World Cup 2026 security rules',
    'stadium security procedures',
    'World Cup 2026 arrival time',
    'World Cup emergency procedures',
    'stadium bag policy 2026'
  ],
};

export default async function StadiumSafetyPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
    description: 'Complete guide to World Cup 2026 stadium security. Clear bag policy, prohibited items, arrival timing, and emergency procedures for all 16 host venues.',
    author: {
      '@type': 'Organization',
      name: 'stadiumport',
      url: 'https://stadiumport.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'stadiumport',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stadiumport.com/logo.png'
      }
    },
    datePublished: '2024-10-25',
    dateModified: '2025-12-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://stadiumport.com/world-cup-2026-stadium-safety'
    },
    image: '/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026.webp'
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://stadiumport.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Safety Guide',
        item: 'https://stadiumport.com/safety-guide'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Stadium Safety Guide',
        item: 'https://stadiumport.com/world-cup-2026-stadium-safety'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What size bag can I bring to World Cup 2026 stadiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can bring a clear plastic, vinyl, or PVC bag no larger than 12" x 6" x 12", or a one-gallon clear resealable plastic storage bag. Small clutch bags no larger than 4.5" x 6.5" are also permitted.'
        }
      },
      {
        '@type': 'Question',
        name: 'How early should I arrive for a World Cup match?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For standard matches, arrive 2-3 hours before kickoff. For high-profile matches like semi-finals or the final, arrive 3-4 hours early to clear security and find your seat.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are water bottles allowed in World Cup stadiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, factory-sealed water bottles are permitted, but policies vary by stadium. Reusable bottles must be empty upon entry. Check the specific stadium guide 24 hours before the match.'
        }
      },
      {
        '@type': 'Question',
        name: 'What items are prohibited at World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prohibited items include large bags, backpacks, professional cameras with detachable lenses, aerosol cans, umbrellas, selfie sticks, weapons, and noise makers. Refer to the official prohibited items list for full details.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there lockers available at the stadiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most stadiums do not offer storage lockers for prohibited items. It is best to leave large bags and restricted items at your hotel or in your vehicle.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ClientPage />
    </>
  );
}

