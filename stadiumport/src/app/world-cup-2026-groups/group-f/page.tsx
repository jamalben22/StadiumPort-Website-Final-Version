import { Metadata } from 'next';
import GroupFClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema } from '@/lib/schema';

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

  const groupMatches = [
    {
      name: "Netherlands vs Japan (Group F)",
      startDate: "2026-06-14T15:00:00-05:00",
      endDate: "2026-06-14T17:00:00-05:00",
      location: { name: "Dallas Stadium", address: "Arlington, TX", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Dallas Stadium in Arlington.",
      performer: [
        { "@type": "SportsTeam", "name": "Netherlands", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/netherlands" },
        { "@type": "SportsTeam", "name": "Japan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/japan" }
      ]
    },
    {
      name: "UEFA Play-off B Winner vs Tunisia (Group F)",
      startDate: "2026-06-14T20:00:00-06:00",
      endDate: "2026-06-14T22:00:00-06:00",
      location: { name: "Monterrey Stadium", address: "Guadalupe, NL", country: "MX" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Monterrey Stadium in Guadalupe.",
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off B Winner" },
        { "@type": "SportsTeam", "name": "Tunisia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/tunisia" }
      ]
    },
    {
      name: "UEFA Play-off B Winner vs Netherlands (Group F)",
      startDate: "2026-06-20T12:00:00-05:00",
      endDate: "2026-06-20T14:00:00-05:00",
      location: { name: "Houston Stadium", address: "Houston, TX", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Houston Stadium in Houston.",
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off B Winner" },
        { "@type": "SportsTeam", "name": "Netherlands", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/netherlands" }
      ]
    },
    {
      name: "Tunisia vs Japan (Group F)",
      startDate: "2026-06-20T22:00:00-06:00",
      endDate: "2026-06-21T00:00:00-06:00",
      location: { name: "Monterrey Stadium", address: "Guadalupe, NL", country: "MX" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Monterrey Stadium in Guadalupe.",
      performer: [
        { "@type": "SportsTeam", "name": "Tunisia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/tunisia" },
        { "@type": "SportsTeam", "name": "Japan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/japan" }
      ]
    },
    {
      name: "UEFA Play-off B Winner vs Japan (Group F)",
      startDate: "2026-06-25T18:00:00-05:00",
      endDate: "2026-06-25T20:00:00-05:00",
      location: { name: "Dallas Stadium", address: "Arlington, TX", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Dallas Stadium in Arlington.",
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off B Winner" },
        { "@type": "SportsTeam", "name": "Japan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/japan" }
      ]
    },
    {
      name: "Tunisia vs Netherlands (Group F)",
      startDate: "2026-06-25T18:00:00-05:00",
      endDate: "2026-06-25T20:00:00-05:00",
      location: { name: "Kansas City Stadium", address: "Kansas City, MO", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group F match at Kansas City Stadium in Kansas City.",
      performer: [
        { "@type": "SportsTeam", "name": "Tunisia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/tunisia" },
        { "@type": "SportsTeam", "name": "Netherlands", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/netherlands" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema("Group F", groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group F Matches',
    startDate: '2026-06-14',
    endDate: '2026-06-25',
    location: {
      name: 'Group F Host Cities',
      address: 'Dallas (Arlington), Houston, Kansas City, Monterrey',
      country: 'US, MX',
    },
    image: '/assets/wc26-groups-og.jpg',
    description: 'Group F fixtures played in Dallas, Houston, Kansas City, and Monterrey during the FIFA World Cup 2026 group stage.'
  });

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={groupEventSchema} />
      <JsonLd schema={groupMatchesSchema} />
      {matchEventSchemas.map((schema, index) => (
        <JsonLd key={`match-event-${index}`} schema={schema} />
      ))}
      <GroupFClientPage />
    </>
  );
}

