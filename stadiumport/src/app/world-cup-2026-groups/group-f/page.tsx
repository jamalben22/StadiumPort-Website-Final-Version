import { Metadata } from 'next';
import GroupFClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Group F Guide: Schedule, Teams & Travel Strategy',
  description:
    'Group F guide for World Cup 2026: Netherlands, Japan, Tunisia, and a UEFA Play-off B winner (TBD). Verified match schedule and the smartest travel plan for Dallas, Houston, Kansas City, and Monterrey.',
  keywords: [
    'World Cup 2026 Group F',
    'Group F schedule',
    'Netherlands World Cup 2026',
    'Japan World Cup 2026',
    'Tunisia World Cup 2026',
    'UEFA Play-off B World Cup 2026',
    'Dallas World Cup 2026',
    'Houston World Cup 2026',
    'Kansas City World Cup 2026',
    'Monterrey World Cup 2026',
    'AT&T Stadium World Cup 2026',
    'NRG Stadium World Cup 2026',
    'Arrowhead Stadium World Cup 2026',
    'Estadio BBVA World Cup 2026',
    'Group F travel strategy',
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-f',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 Group F Guide: Schedule, Teams & Travel Strategy',
    description:
      'Group F guide for World Cup 2026: Netherlands, Japan, Tunisia, and a UEFA Play-off B winner (TBD). Verified match schedule and the smartest travel plan for Dallas, Houston, Kansas City, and Monterrey.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-f',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group F Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 Group F Guide: Schedule, Teams & Travel Strategy',
    description:
      'Group F guide for World Cup 2026: Netherlands, Japan, Tunisia, and a UEFA Play-off B winner (TBD). Verified match schedule and the smartest travel plan for Dallas, Houston, Kansas City, and Monterrey.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupFPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-f';

  const articleSchema = generateArticleSchema('group-f', pageUrl);

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
        "name": "Groups",
        "item": `${siteUrl}/world-cup-2026-groups`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Group F Guide",
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
        "name": "Is driving from Texas to Monterrey safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the highway is generally okay, flying is strongly recommended. Border wait times can be long, and many US rental car policies restrict cross-border driving. Flights between Houston/Dallas and Monterrey are short and simplify match-day logistics."
        }
      },
      {
        "@type": "Question",
        "name": "Will the stadiums in Group F be air-conditioned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dallas Stadium and Houston Stadium are climate-controlled. Kansas City Stadium and Monterrey Stadium are open-air, so plan for heat and sun exposure at those venues."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to get to Arrowhead Stadium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kansas City lacks robust rail to the stadium area. Plan on a rideshare, driving with pre-booked parking, or official shuttle options from Downtown when announced."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use US Dollars in Monterrey during World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some major hotels may accept USD, but for match-day spending you should plan to use Mexican Pesos (MXN) or a card with no foreign transaction fees."
        }
      }
    ]
  };

  const groupMatchesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "FIFA World Cup 2026 Group F Matches",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SportsEvent",
          "name": "Netherlands vs Japan (Group F)",
          "startDate": "2026-06-14T15:00:00-05:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Dallas Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Arlington", "addressRegion": "TX", "addressCountry": "US" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SportsEvent",
          "name": "UEFA Play-off B Winner vs Tunisia (Group F)",
          "startDate": "2026-06-14T20:00:00-06:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Monterrey Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Guadalupe", "addressRegion": "NL", "addressCountry": "MX" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "SportsEvent",
          "name": "UEFA Play-off B Winner vs Netherlands (Group F)",
          "startDate": "2026-06-20T12:00:00-05:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Houston Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "SportsEvent",
          "name": "Tunisia vs Japan (Group F)",
          "startDate": "2026-06-20T22:00:00-06:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Monterrey Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Guadalupe", "addressRegion": "NL", "addressCountry": "MX" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "SportsEvent",
          "name": "UEFA Play-off B Winner vs Japan (Group F)",
          "startDate": "2026-06-25T18:00:00-05:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Dallas Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Arlington", "addressRegion": "TX", "addressCountry": "US" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "SportsEvent",
          "name": "Tunisia vs Netherlands (Group F)",
          "startDate": "2026-06-25T18:00:00-05:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Kansas City Stadium",
            "address": { "@type": "PostalAddress", "addressLocality": "Kansas City", "addressRegion": "MO", "addressCountry": "US" }
          },
          "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={groupMatchesSchema} />
      <GroupFClientPage />
    </>
  );
}

