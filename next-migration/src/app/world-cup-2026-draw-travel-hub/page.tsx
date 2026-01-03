import React from 'react';
import { Metadata } from 'next';
import DrawHubClientPage from './ClientPage';
import { GROUPS_DATA } from '@/data/draw-hub';
import { JsonLd } from '@/components/seo/JsonLd';
import { getSiteUrl } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Draw Travel Hub: The Ultimate Planning Guide | Stadiumport',
  description: 'The #1 guide for World Cup 2026 draw travel planning. Master the logistics, find your base camp, book flights & hotels, and save money with our comprehensive post-draw strategy.',
  keywords: [
    'World Cup 2026 draw travel',
    'World Cup 2026 draw travel planning',
    'travel after World Cup draw',
    'World Cup 2026 draw schedule',
    'plan trip after draw',
    'how to book travel after World Cup draw',
    'World Cup draw travel tips',
    'best time to book after draw',
    'World Cup 2026 host cities',
    'FIFA World Cup 2026 logistics'
  ],
  openGraph: {
    title: 'World Cup 2026 Draw Travel Hub: The Ultimate Planning Guide',
    description: 'The #1 guide for World Cup 2026 draw travel planning. Master the logistics, find your base camp, book flights & hotels, and save money with our comprehensive post-draw strategy.',
    url: 'https://stadiumport.com/world-cup-2026-draw-travel-hub',
    type: 'article',
    siteName: 'Stadiumport',
    locale: 'en_US',
    images: [
      {
        url: '/images/draw-hub-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Draw Travel Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Draw Travel Hub: The Ultimate Planning Guide',
    description: 'The #1 guide for World Cup 2026 draw travel planning. Master the logistics, find your base camp, book flights & hotels, and save money with our comprehensive post-draw strategy.',
    images: ['/images/draw-hub-og.jpg'],
  },
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-draw-travel-hub',
  },
};

export default function DrawHubPage() {
  const meta = {
    title: 'World Cup 2026 Draw Travel Hub: The Ultimate Planning Guide | Stadiumport',
    description: 'The #1 guide for World Cup 2026 draw travel planning. Master the logistics, find your base camp, book flights & hotels, and save money with our comprehensive post-draw strategy.',
    publishedAt: '2025-12-05',
    updatedAt: '2025-12-05'
  };
  const url = getSiteUrl('/world-cup-2026-draw-travel-hub');

  const groupSchemaItems = GROUPS_DATA.map((group, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": group.name,
    "url": getSiteUrl(group.link)
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        "url": url,
        "name": meta?.title || "World Cup 2026 Draw Results & Group Stage Travel Guides",
        "headline": "World Cup 2026 Draw Results: Complete Travel & Logistics Hub",
        "description": meta?.description || "The definitive guide to the FIFA World Cup 2026 draw. Explore travel itineraries for all 12 groups, host city logistics, flight tips, and accommodation strategies for fans.",
        "datePublished": meta?.publishedAt || "2025-12-05",
        "dateModified": meta?.updatedAt || "2025-12-05",
        "publisher": {
          "@type": "Organization",
          "name": "Stadiumport",
          "logo": {
            "@type": "ImageObject",
            "url": getSiteUrl('/images/Logos/Mobile%20Header%20Logo%20180%20x%20180%20px.svg')
          }
        },
        "isPartOf": {
          "@id": getSiteUrl('/#website')
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is the World Cup 2026 Draw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The official draw will take place on December 5, 2025."
            }
          },
          {
            "@type": "Question",
            "name": "How many groups are in the 2026 World Cup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There are 12 groups (A through L), each containing 4 teams, for a total of 48 participating nations."
            }
          },
          {
            "@type": "Question",
            "name": "Can I buy tickets before the draw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can apply for team-specific tickets (TSTs) during the initial ballot, but specific match locations won't be confirmed until the draw is complete."
            }
          },
          {
            "@type": "Question",
            "name": "Which group has the easiest travel schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Group A (West Coast) and Group C (East Coast) generally offer the most compact travel schedules with short flights or train connections."
            }
          },
          {
            "@type": "Question",
            "name": "Which group has the worst travel schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Group I (The Gulf Coast Scramble) involves longer flights and humid summer weather, making logistics more challenging."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to attend World Cup 2026 group stage matches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget estimates per person for 3 group matches (flights + hotels + tickets) range from $2,000-$3,000 for budget travelers, $4,000-$6,000 for mid-range, and $8,000-$15,000+ for premium experiences."
            }
          }
        ]
      },
      {
        "@type": "Event",
        "name": "FIFA World Cup 2026 Final Draw",
        "startDate": "2025-12-05T12:00:00-05:00",
        "endDate": "2025-12-05T14:00:00-05:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Washington, D.C.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US"
          }
        },
        "image": [
          getSiteUrl('/images/draw-hub-og.jpg')
        ],
        "description": "The official draw ceremony for the FIFA World Cup 2026, determining group assignments and match schedules for all 48 qualified teams.",
        "offers": {
          "@type": "Offer",
          "url": "https://www.fifa.com",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-12-01T00:00:00-05:00"
        },
        "organizer": {
          "@type": "Organization",
          "name": "FIFA",
          "url": "https://www.fifa.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": getSiteUrl()
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Draw Travel Hub",
            "item": url
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "World Cup 2026 Groups",
        "itemListElement": groupSchemaItems
      }
    ]
  };

  return (
    <>
      <JsonLd schema={schemaData} />
      <DrawHubClientPage />
    </>
  );
}




