import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'World Cup 2026 Transport Safety: Taxis, Uber & Transit',
  description: 'Safe travel guide for World Cup 2026. Avoid taxi scams, use rideshares safely & navigate public transit in USA, Canada & Mexico host cities.',
  keywords: [
    'World Cup 2026 transportation safety',
    'World Cup 2026 taxi safety Mexico',
    'Uber safety World Cup 2026',
    'World Cup public transit guide',
    'stadium transportation 2026',
    'World Cup 2026 travel scams',
    'getting around World Cup cities',
    'World Cup 2026 car rental tips'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-transportation-safety',
  },
  openGraph: {
    title: 'World Cup 2026 Transport Safety: Taxis, Uber & Transit',
    description: 'Safe travel guide for World Cup 2026. Avoid taxi scams, use rideshares safely & navigate public transit in USA, Canada & Mexico host cities.',
    url: 'https://stadiumport.com/world-cup-2026-transportation-safety',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Transportation Safety Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Transport Safety: Taxis, Uber & Transit',
    description: 'Safe travel guide for World Cup 2026. Avoid taxi scams, use rideshares safely & navigate public transit in USA, Canada & Mexico host cities.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Transportation Safety: Getting Around World Cup 2026 Host Cities',
            description: 'Complete guide to safe transportation for World Cup 2026. Rideshare safety, taxi scams to avoid, public transit tips, and emergency protocols for USA, Canada, & Mexico.',
            image: '/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp',
            author: {
              '@type': 'Organization',
              name: 'Stadiumport',
              url: 'https://stadiumport.com'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Stadiumport',
              logo: {
                '@type': 'ImageObject',
                url: 'https://stadiumport.com/logo.png'
              }
            },
            datePublished: '2025-12-28',
            dateModified: '2025-12-28',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://stadiumport.com/world-cup-2026-transportation-safety'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: 'Transportation Safety',
                item: 'https://stadiumport.com/world-cup-2026-transportation-safety'
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is Uber safe in all host cities?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Uber is generally the safest option across all host cities in the USA, Canada, and Mexico. In Mexico specifically, Uber is significantly safer than street taxis. Always verify the license plate and driver photo before entering.'
                }
              },
              {
                '@type': 'Question',
                name: 'Should I take taxis in Mexico?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Avoid hailing taxis on the street in Mexico due to safety risks. Use "Sitio" taxis (official taxi stands) or app-based rideshares like Uber or DiDi. If you must use a taxi, have your hotel or restaurant call one for you.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the safest way to get to the stadium?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Official stadium shuttles and public transit are often the safest and most efficient options to avoid traffic and surge pricing. If using rideshare, get dropped off a few blocks away to avoid congestion.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is public transit safe in host cities?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Public transit is generally safe in USA and Canadian host cities, especially on game days. In Mexico City, the Metro is efficient but requires vigilance against pickpockets; use front-facing bags and avoid flashing valuables.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I avoid surge pricing after matches?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wait 30-45 minutes after the match ends for crowds to disperse, or walk 10-15 minutes away from the immediate stadium perimeter to request a ride. Alternatively, use public transit for the first leg of your journey.'
                }
              }
            ]
          })
        }}
      />
      <ClientPage />
    </>
  );
}

