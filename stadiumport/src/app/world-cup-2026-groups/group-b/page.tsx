import { Metadata } from 'next';
import GroupBClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

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

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group B Matches',
    startDate: '2026-06-12',
    endDate: '2026-06-24',
    location: {
      name: 'Group B Host Cities',
      address: 'Toronto, SF Bay Area, Los Angeles, Vancouver, Seattle',
      country: 'CA',
    },
    image: '/assets/wc26-groups-og.jpg',
    description: 'Group B fixtures played in Toronto, SF Bay Area, Los Angeles, Vancouver, and Seattle during the FIFA World Cup 2026 group stage.'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group B Guide', item: pageUrl }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is the smartest one-base plan for Group B?",
      answer: "Base in Vancouver. It hosts two Group B matches at BC Place, has excellent transit, and keeps your hotel plan stable even if you’re waiting on the UEFA Play-off team to be confirmed."
    },
    {
      question: "Do I need a visa to travel between Vancouver and Seattle?",
      answer: "Yes, you will be crossing an international border. Most travelers will need both a Canadian eTA/visa and a US ESTA/visa. Ensure all documents are ready for land or rail crossings, and expect delays on match days."
    },
    {
      question: "Can I do Group B without renting a car?",
      answer: "In Vancouver and Seattle, yes—public transit is strong. In California (SF Bay Area and Los Angeles), a car is often the fastest option for stadium logistics, though rideshare and transit can work with extra time and higher costs."
    },
    {
      question: "When should I book hotels for Group B?",
      answer: "Book refundable rooms early, then re-price later. Vancouver and the SF Bay Area tend to tighten first due to limited inventory and high demand. Expect a surge once the UEFA Play-off team is confirmed."
    }
  ]);

  const groupMatches = [
    {
      name: "Canada vs UEFA Play-off A Winner (Group B)",
      startDate: "2026-06-12T15:00:00-04:00",
      endDate: "2026-06-12T17:00:00-04:00",
      location: { name: "Toronto Stadium", address: "Toronto", country: "CA" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at Toronto Stadium in Toronto.",
      performer: [
        { "@type": "SportsTeam", "name": "Canada", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/canada" },
        { "@type": "SportsTeam", "name": "UEFA Play-off A Winner" }
      ]
    },
    {
      name: "Qatar vs Switzerland (Group B)",
      startDate: "2026-06-13T12:00:00-07:00",
      endDate: "2026-06-13T14:00:00-07:00",
      location: { name: "San Francisco Bay Area Stadium", address: "Santa Clara, CA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at San Francisco Bay Area Stadium in Santa Clara.",
      performer: [
        { "@type": "SportsTeam", "name": "Qatar", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/qatar" },
        { "@type": "SportsTeam", "name": "Switzerland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/switzerland" }
      ]
    },
    {
      name: "Switzerland vs UEFA Play-off A Winner (Group B)",
      startDate: "2026-06-18T12:00:00-07:00",
      endDate: "2026-06-18T14:00:00-07:00",
      location: { name: "Los Angeles Stadium", address: "Inglewood, CA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at Los Angeles Stadium in Inglewood.",
      performer: [
        { "@type": "SportsTeam", "name": "Switzerland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/switzerland" },
        { "@type": "SportsTeam", "name": "UEFA Play-off A Winner" }
      ]
    },
    {
      name: "Canada vs Qatar (Group B)",
      startDate: "2026-06-18T15:00:00-07:00",
      endDate: "2026-06-18T17:00:00-07:00",
      location: { name: "BC Place", address: "Vancouver, BC", country: "CA" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at BC Place in Vancouver.",
      performer: [
        { "@type": "SportsTeam", "name": "Canada", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/canada" },
        { "@type": "SportsTeam", "name": "Qatar", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/qatar" }
      ]
    },
    {
      name: "Switzerland vs Canada (Group B)",
      startDate: "2026-06-24T12:00:00-07:00",
      endDate: "2026-06-24T14:00:00-07:00",
      location: { name: "BC Place", address: "Vancouver, BC", country: "CA" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at BC Place in Vancouver.",
      performer: [
        { "@type": "SportsTeam", "name": "Switzerland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/switzerland" },
        { "@type": "SportsTeam", "name": "Canada", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/canada" }
      ]
    },
    {
      name: "UEFA Play-off A Winner vs Qatar (Group B)",
      startDate: "2026-06-24T12:00:00-07:00",
      endDate: "2026-06-24T14:00:00-07:00",
      location: { name: "Seattle Stadium", address: "Seattle, WA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Group B match at Seattle Stadium in Seattle.",
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off A Winner" },
        { "@type": "SportsTeam", "name": "Qatar", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/qatar" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema("Group B", groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));

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
     <GroupBClientPage />
    </>
   );
}

