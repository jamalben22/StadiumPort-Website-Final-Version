import React from 'react';
import type { Metadata } from 'next';
import DrawHubClientPage from './ClientPage';
import { GROUPS_DATA } from '@/data/draw-hub';
import { JsonLd } from '@/components/seo/JsonLd';
import { getContentMeta } from '@/data/content-registry';
import { getSiteUrl } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub | Stadiumport',
  description: 'Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans.',
  keywords: 'World Cup 2026 draw results, FIFA World Cup 2026 groups, World Cup 2026 travel guide, WC26 group stage logistics, Group A to Group L travel, host city flights, World Cup hotel booking, World Cup 2026 tickets price, World Cup 2026 cities map, best base camp world cup 2026, USA Canada Mexico World Cup schedule',
  openGraph: {
    title: 'World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub',
    description: 'Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans.',
    url: 'https://stadiumport.com/world-cup-2026-draw-travel-hub',
    type: 'article',
    images: [
      {
        url: '/images/draw-hub-og.jpg',
      },
    ],
    siteName: 'Stadiumport',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub',
    description: 'Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans.',
    images: ['/images/draw-hub-og.jpg'],
  },
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-draw-travel-hub',
  },
};

export default function DrawHubPage() {
  const slug = 'world-cup-2026-draw-travel-hub';
  const meta = getContentMeta(slug);
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




