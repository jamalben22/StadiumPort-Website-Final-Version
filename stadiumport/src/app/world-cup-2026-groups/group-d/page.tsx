import { Metadata } from 'next';
import GroupDClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group D Travel Guide: West Coast Cities',
  description: 'Follow Group D across the West Coast: Los Angeles, Seattle, SF Bay Area (Santa Clara), and Vancouver. Official match cities, flight strategy, hotels, and stadium logistics.',
  keywords: [
    'World Cup 2026 Group D Travel Guide',
    'Group D schedule',
    'USA vs Paraguay World Cup 2026',
    'Seattle World Cup',
    'San Francisco Bay Area World Cup',
    'Los Angeles World Cup',
    'Vancouver World Cup',
    'SoFi Stadium guide',
    "Levi's Stadium guide",
    'Lumen Field guide',
    'BC Place guide',
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-d',
  },
  openGraph: {
    title: 'World Cup 2026 Group D Travel Guide: LA, Seattle, SF Bay Area & Vancouver',
    description: 'Follow Group D across the West Coast: Los Angeles, Seattle, SF Bay Area (Santa Clara), and Vancouver. Official match cities, flight strategy, hotels, and stadium logistics.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-d',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group D Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group D Travel Guide: LA, Seattle, SF Bay Area & Vancouver',
    description: 'Follow Group D across the West Coast: Los Angeles, Seattle, SF Bay Area (Santa Clara), and Vancouver. Official match cities, flight strategy, hotels, and stadium logistics.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupDPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-d';

  const articleSchema = generateArticleSchema('group-d', pageUrl);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group D Matches',
    startDate: '2026-06-12',
    endDate: '2026-06-25',
    location: {
      name: 'Group D Host Cities',
      address: 'Los Angeles (Inglewood), Seattle, SF Bay Area (Santa Clara), Vancouver',
      country: 'US, CA',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group D fixtures played in Los Angeles, Seattle, the San Francisco Bay Area (Santa Clara), and Vancouver during the FIFA World Cup 2026 group stage.',
  });

  const groupMatches = [
    {
      name: 'United States vs Paraguay (Group D) — Los Angeles',
      startDate: '2026-06-12T18:00:00-07:00',
      endDate: '2026-06-12T20:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "United States", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/usa" },
        { "@type": "SportsTeam", "name": "Paraguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/paraguay" }
      ]
    },
    {
      name: 'UEFA Play-off winner vs Australia (Group D) — Vancouver',
      startDate: '2026-06-13T21:00:00-07:00',
      endDate: '2026-06-13T23:00:00-07:00',
      location: { name: 'BC Place Vancouver', address: 'Vancouver, BC', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at BC Place in Vancouver, British Columbia.',
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off Winner" },
        { "@type": "SportsTeam", "name": "Australia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/australia" }
      ]
    },
    {
      name: 'UEFA Play-off winner vs Paraguay (Group D) — SF Bay Area',
      startDate: '2026-06-19T21:00:00-07:00',
      endDate: '2026-06-19T23:00:00-07:00',
      location: { name: 'San Francisco Bay Area Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at San Francisco Bay Area Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off Winner" },
        { "@type": "SportsTeam", "name": "Paraguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/paraguay" }
      ]
    },
    {
      name: 'United States vs Australia (Group D) — Seattle',
      startDate: '2026-06-19T12:00:00-07:00',
      endDate: '2026-06-19T14:00:00-07:00',
      location: { name: 'Seattle Stadium', address: 'Seattle, WA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at Seattle Stadium in Seattle, Washington.',
      performer: [
        { "@type": "SportsTeam", "name": "United States", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/usa" },
        { "@type": "SportsTeam", "name": "Australia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/australia" }
      ]
    },
    {
      name: 'UEFA Play-off winner vs United States (Group D) — Los Angeles',
      startDate: '2026-06-25T19:00:00-07:00',
      endDate: '2026-06-25T21:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "UEFA Play-off Winner" },
        { "@type": "SportsTeam", "name": "United States", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/usa" }
      ]
    },
    {
      name: 'Paraguay vs Australia (Group D) — SF Bay Area',
      startDate: '2026-06-25T19:00:00-07:00',
      endDate: '2026-06-25T21:00:00-07:00',
      location: { name: 'San Francisco Bay Area Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group D match at San Francisco Bay Area Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Paraguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/paraguay" },
        { "@type": "SportsTeam", "name": "Australia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/australia" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema('Group D', groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group D Guide', item: pageUrl }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is the best way to travel between Seattle, the SF Bay Area, LA, and Vancouver?",
      answer: "Fly for match-to-match travel. These cities are deceptively far apart, and traffic near stadiums is brutal. Drive only if you have extra days (e.g., the Pacific Coast Highway between the Bay Area and LA)."
    },
    {
      question: "Where should I stay for matches at Levi's Stadium?",
      answer: "Stay in San Jose or Santa Clara for match days. San Francisco is 45 miles (60-90 mins) away. The commute from SF to the stadium on a weeknight is brutal."
    },
    {
      question: "Does Group D include a match in Vancouver?",
      answer: "Yes. One Group D fixture is scheduled at BC Place in Vancouver, making this group a true US-Canada West Coast route if you follow every match."
    },
    {
      question: "Where should I stay in Vancouver for a BC Place match?",
      answer: "Stay Downtown, Yaletown, or the West End for walkable matchdays. BC Place is in downtown Vancouver, so you can avoid long rideshare queues and keep transit simple."
    },
    {
      question: "Is public transport good in Group D cities?",
      answer: "Vancouver has SkyTrain. Seattle has excellent light rail. The Bay Area has BART and Caltrain (decent but complex). Los Angeles public transport is improving but still limited; expect rideshare for some trips."
    }
  ]);

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
      <GroupDClientPage />
    </>
  );
}

