import { Metadata } from 'next';
import GroupBClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Group B Guide: Schedule, Teams & Travel Strategy',
  description: 'FIFA World Cup 2026 Group B guide: official schedule, teams, and the best travel plan for Toronto, SF Bay Area, Los Angeles, Vancouver, and Seattle.',
  keywords: ['FIFA World Cup 2026 Group B guide', 'World Cup 2026 Group B schedule', 'Group B matches', 'Toronto Vancouver Seattle World Cup 2026', 'San Francisco Bay Area World Cup 2026', 'Los Angeles World Cup 2026 travel'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-b',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 Group B Guide: Schedule, Teams & Travel Strategy',
    description: 'FIFA World Cup 2026 Group B guide: official schedule, teams, and the best travel plan for Toronto, SF Bay Area, Los Angeles, Vancouver, and Seattle.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-b',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group B Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 Group B Guide: Schedule, Teams & Travel Strategy',
    description: 'FIFA World Cup 2026 Group B guide: official schedule, teams, and the best travel plan for Toronto, SF Bay Area, Los Angeles, Vancouver, and Seattle.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupBPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-b';

  const articleSchema = generateArticleSchema('group-b', pageUrl);

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
    "name": "Group B Guide",
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
    "name": "What is the smartest one-base plan for Group B?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Base in Vancouver. It hosts two Group B matches at BC Place, has excellent transit, and keeps your hotel plan stable even if you’re waiting on the UEFA Play-off team to be confirmed."
    }
   },
   {
    "@type": "Question",
    "name": "Do I need a visa to travel between Vancouver and Seattle?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Yes, you will be crossing an international border. Most travelers will need both a Canadian eTA/visa and a US ESTA/visa. Ensure all documents are ready for land or rail crossings, and expect delays on match days."
    }
   },
   {
    "@type": "Question",
    "name": "Can I do Group B without renting a car?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "In Vancouver and Seattle, yes—public transit is strong. In California (SF Bay Area and Los Angeles), a car is often the fastest option for stadium logistics, though rideshare and transit can work with extra time and higher costs."
    }
   },
   {
    "@type": "Question",
    "name": "When should I book hotels for Group B?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Book refundable rooms early, then re-price later. Vancouver and the SF Bay Area tend to tighten first due to limited inventory and high demand. Expect a surge once the UEFA Play-off team is confirmed."
    }
   }
  ]
 };

 const groupMatchesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "FIFA World Cup 2026 Group B Matches",
  "itemListElement": [
   {
    "@type": "ListItem",
    "position": 1,
    "item": {
     "@type": "SportsEvent",
     "name": "Canada vs UEFA Play-off A Winner (Group B)",
     "startDate": "2026-06-12T15:00:00-04:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "Toronto Stadium",
      "address": { "@type": "PostalAddress", "addressLocality": "Toronto", "addressCountry": "CA" }
     },
     "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
    }
   },
   {
    "@type": "ListItem",
    "position": 2,
    "item": {
     "@type": "SportsEvent",
     "name": "Qatar vs Switzerland (Group B)",
     "startDate": "2026-06-13T12:00:00-07:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "San Francisco Bay Area Stadium",
      "address": { "@type": "PostalAddress", "addressLocality": "Santa Clara", "addressRegion": "CA", "addressCountry": "US" }
     },
     "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
    }
   },
   {
    "@type": "ListItem",
    "position": 3,
    "item": {
     "@type": "SportsEvent",
     "name": "Switzerland vs UEFA Play-off A Winner (Group B)",
     "startDate": "2026-06-18T12:00:00-07:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "Los Angeles Stadium",
      "address": { "@type": "PostalAddress", "addressLocality": "Inglewood", "addressRegion": "CA", "addressCountry": "US" }
     },
     "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
    }
   },
   {
    "@type": "ListItem",
    "position": 4,
    "item": {
     "@type": "SportsEvent",
     "name": "Canada vs Qatar (Group B)",
     "startDate": "2026-06-18T15:00:00-07:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "BC Place",
      "address": { "@type": "PostalAddress", "addressLocality": "Vancouver", "addressRegion": "BC", "addressCountry": "CA" }
     },
     "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
    }
   },
   {
    "@type": "ListItem",
    "position": 5,
    "item": {
     "@type": "SportsEvent",
     "name": "Switzerland vs Canada (Group B)",
     "startDate": "2026-06-24T12:00:00-07:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "BC Place",
      "address": { "@type": "PostalAddress", "addressLocality": "Vancouver", "addressRegion": "BC", "addressCountry": "CA" }
     },
     "organizer": { "@type": "Organization", "name": "FIFA", "url": "https://www.fifa.com" }
    }
   },
   {
    "@type": "ListItem",
    "position": 6,
    "item": {
     "@type": "SportsEvent",
     "name": "UEFA Play-off A Winner vs Qatar (Group B)",
     "startDate": "2026-06-24T12:00:00-07:00",
     "eventStatus": "https://schema.org/EventScheduled",
     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
     "location": {
      "@type": "Place",
      "name": "Seattle Stadium",
      "address": { "@type": "PostalAddress", "addressLocality": "Seattle", "addressRegion": "WA", "addressCountry": "US" }
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
   <GroupBClientPage />
  </>
 );
}

