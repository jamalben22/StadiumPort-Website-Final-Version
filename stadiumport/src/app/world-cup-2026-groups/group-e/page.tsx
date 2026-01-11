import { Metadata } from 'next';
import GroupEClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group E Guide: Schedule & Travel',
  description: "Group E travel guide for World Cup 2026: Germany, Curaçao, Côte d'Ivoire, Ecuador. Verified match schedule and the smartest plan for Philadelphia, Houston, Kansas City, Toronto, and New York/New Jersey.",
  keywords: [
    'World Cup 2026 Group E',
    'Group E schedule',
    'Germany World Cup 2026',
    'Curaçao World Cup 2026',
    "Côte d'Ivoire World Cup 2026",
    'Ecuador World Cup 2026',
    'Philadelphia World Cup 2026',
    'Houston World Cup 2026',
    'Kansas City World Cup 2026',
    'Toronto World Cup 2026',
    'New York New Jersey World Cup 2026',
    'Lincoln Financial Field World Cup 2026',
    'NRG Stadium World Cup 2026',
    'Arrowhead Stadium World Cup 2026',
    'BMO Field World Cup 2026',
    'MetLife Stadium World Cup 2026',
    'Group E travel strategy',
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-e',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 Group E Guide: Schedule, Teams & Travel Strategy',
    description: "Group E travel guide for World Cup 2026: Germany, Curaçao, Côte d'Ivoire, Ecuador. Verified match schedule and the smartest plan for Philadelphia, Houston, Kansas City, Toronto, and New York/New Jersey.",
    url: 'https://stadiumport.com/world-cup-2026-groups/group-e',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group E Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 Group E Guide: Schedule, Teams & Travel Strategy',
    description: "Group E travel guide for World Cup 2026: Germany, Curaçao, Côte d'Ivoire, Ecuador. Verified match schedule and the smartest plan for Philadelphia, Houston, Kansas City, Toronto, and New York/New Jersey.",
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupEPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-e';

  const articleSchema = generateArticleSchema('group-e', pageUrl);

  const groupMatches = [
    {
      name: "Côte d'Ivoire vs Ecuador (Group E) — Philadelphia",
      startDate: '2026-06-14T19:00:00-04:00',
      endDate: '2026-06-14T21:00:00-04:00',
      location: { name: 'Lincoln Financial Field', address: 'Philadelphia, PA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: "Group E match at Lincoln Financial Field in Philadelphia, Pennsylvania.",
      performer: [
        { "@type": "SportsTeam", "name": "Côte d'Ivoire", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cote-divoire" },
        { "@type": "SportsTeam", "name": "Ecuador", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/ecuador" }
      ]
    },
    {
      name: 'Germany vs Curaçao (Group E) — Houston',
      startDate: '2026-06-14T12:00:00-05:00',
      endDate: '2026-06-14T14:00:00-05:00',
      location: { name: 'NRG Stadium', address: 'Houston, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group E match at NRG Stadium in Houston, Texas.',
      performer: [
        { "@type": "SportsTeam", "name": "Germany", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/germany" },
        { "@type": "SportsTeam", "name": "Curaçao", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/curacao" }
      ]
    },
    {
      name: "Germany vs Côte d'Ivoire (Group E) — Toronto",
      startDate: '2026-06-20T16:00:00-04:00',
      endDate: '2026-06-20T18:00:00-04:00',
      location: { name: 'BMO Field', address: 'Toronto, ON', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: "Group E match at BMO Field in Toronto, Ontario.",
      performer: [
        { "@type": "SportsTeam", "name": "Germany", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/germany" },
        { "@type": "SportsTeam", "name": "Côte d'Ivoire", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cote-divoire" }
      ]
    },
    {
      name: 'Ecuador vs Curaçao (Group E) — Kansas City',
      startDate: '2026-06-20T19:00:00-05:00',
      endDate: '2026-06-20T21:00:00-05:00',
      location: { name: 'Arrowhead Stadium', address: 'Kansas City, MO', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group E match at Arrowhead Stadium in Kansas City, Missouri.',
      performer: [
        { "@type": "SportsTeam", "name": "Ecuador", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/ecuador" },
        { "@type": "SportsTeam", "name": "Curaçao", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/curacao" }
      ]
    },
    {
      name: "Curaçao vs Côte d'Ivoire (Group E) — Philadelphia",
      startDate: '2026-06-25T16:00:00-04:00',
      endDate: '2026-06-25T18:00:00-04:00',
      location: { name: 'Lincoln Financial Field', address: 'Philadelphia, PA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: "Group E match at Lincoln Financial Field in Philadelphia, Pennsylvania.",
      performer: [
        { "@type": "SportsTeam", "name": "Curaçao", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/curacao" },
        { "@type": "SportsTeam", "name": "Côte d'Ivoire", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cote-divoire" }
      ]
    },
    {
      name: 'Ecuador vs Germany (Group E) — New York/New Jersey',
      startDate: '2026-06-25T16:00:00-04:00',
      endDate: '2026-06-25T18:00:00-04:00',
      location: { name: 'MetLife Stadium', address: 'East Rutherford, NJ', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group E match at MetLife Stadium in East Rutherford, New Jersey.',
      performer: [
        { "@type": "SportsTeam", "name": "Ecuador", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/ecuador" },
        { "@type": "SportsTeam", "name": "Germany", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/germany" }
      ]
    },
  ];

  const groupMatchesSchema = generateMatchListSchema("Group E", groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group E Matches',
    startDate: '2026-06-14',
    endDate: '2026-06-25',
    location: {
      name: 'Group E Host Cities',
      address: 'Philadelphia, Houston, Kansas City, Toronto, New York/New Jersey',
      country: 'US, CA',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group E fixtures played in Philadelphia, Houston, Kansas City, Toronto, and the New York/New Jersey region during the FIFA World Cup 2026 group stage.',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group E Guide', item: pageUrl }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is the best way to travel between Group E cities?",
      answer: "Split your travel: use Amtrak for the Northeast leg (Philadelphia + New York/New Jersey). Fly for Houston, Kansas City, and Toronto. Driving the full loop is not realistic during the group stage."
    },
    {
      question: "Which cities host Group E matches?",
      answer: "Group E matches are hosted in Philadelphia, Houston, Kansas City, Toronto, and the New York/New Jersey region."
    },
    {
      question: "Do I need a visa for Group E travel?",
      answer: "Possibly yes. Group E can include travel across the USA and Canada, so you must check entry rules for both countries (e.g., US visa/ESTA, and Canada eTA/visa) based on your passport."
    },
    {
      question: "When should I book hotels and flights for Group E?",
      answer: "Book refundable hotels first, then lock flights once your match plan is set. For a multi-city group like E, booking early protects availability in Philadelphia, Toronto, and New York/New Jersey."
    },
    {
      question: "Where is the safest place to buy tickets?",
      answer: "Use official FIFA ticket sales phases whenever possible. Avoid unofficial sellers and “PDF ticket” scams, especially for high-demand matches."
    }
  ]);

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={groupMatchesSchema} />
      <JsonLd schema={groupEventSchema} />
      {matchEventSchemas.map((schema, index) => (
        <JsonLd key={`match-event-${index}`} schema={schema} />
      ))}
      <GroupEClientPage />
    </>
  );
}

