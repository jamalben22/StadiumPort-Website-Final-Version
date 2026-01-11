import { Metadata } from 'next';
import GroupIClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles',
  description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
  keywords: ['World Cup 2026 Group I Travel Guide', 'Group I matches', 'San Francisco Los Angeles World Cup', 'California World Cup itinerary', "Levi's Stadium guide", 'SoFi Stadium guide'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-i',
  },
  openGraph: {
    title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles',
    description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-i',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group I Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles',
    description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupIPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-i';

  const articleSchema = generateArticleSchema('group-i', pageUrl);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group I Matches',
    startDate: '2026-06-14',
    endDate: '2026-06-26',
    location: {
      name: 'Group I Host Cities',
      address: 'Los Angeles (Inglewood), SF Bay Area (Santa Clara)',
      country: 'US',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group I fixtures played in Los Angeles (Inglewood) and the San Francisco Bay Area (Santa Clara) during the FIFA World Cup 2026 group stage.',
  });

  const groupMatches = [
    {
      name: 'Senegal vs Norway (Group I) — SF Bay Area',
      startDate: '2026-06-14T12:00:00-07:00',
      endDate: '2026-06-14T14:00:00-07:00',
      location: { name: 'San Francisco Bay Area Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at San Francisco Bay Area Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Senegal", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/senegal" },
        { "@type": "SportsTeam", "name": "Norway", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/norway" }
      ]
    },
    {
      name: 'France vs Play-off 2 Winner (Group I) — Los Angeles',
      startDate: '2026-06-14T18:00:00-07:00',
      endDate: '2026-06-14T20:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "France", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/france" },
        { "@type": "SportsTeam", "name": "Play-off 2 Winner" }
      ]
    },
    {
      name: 'France vs Norway (Group I) — SF Bay Area',
      startDate: '2026-06-20T12:00:00-07:00',
      endDate: '2026-06-20T14:00:00-07:00',
      location: { name: 'San Francisco Bay Area Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at San Francisco Bay Area Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "France", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/france" },
        { "@type": "SportsTeam", "name": "Norway", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/norway" }
      ]
    },
    {
      name: 'Senegal vs Play-off 2 Winner (Group I) — Los Angeles',
      startDate: '2026-06-20T18:00:00-07:00',
      endDate: '2026-06-20T20:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Senegal", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/senegal" },
        { "@type": "SportsTeam", "name": "Play-off 2 Winner" }
      ]
    },
    {
      name: 'Norway vs Play-off 2 Winner (Group I) — SF Bay Area',
      startDate: '2026-06-26T12:00:00-07:00',
      endDate: '2026-06-26T14:00:00-07:00',
      location: { name: 'San Francisco Bay Area Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at San Francisco Bay Area Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Norway", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/norway" },
        { "@type": "SportsTeam", "name": "Play-off 2 Winner" }
      ]
    },
    {
      name: 'France vs Senegal (Group I) — Los Angeles',
      startDate: '2026-06-26T20:00:00-07:00',
      endDate: '2026-06-26T22:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group I match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "France", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/france" },
        { "@type": "SportsTeam", "name": "Senegal", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/senegal" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema('Group I', groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));


  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group I Guide', item: pageUrl }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is the best way to travel between San Francisco and Los Angeles?",
      answer: "For speed, flying between SFO/SJC and LAX/BUR is best (1h 15m). For the experience, driving the Pacific Coast Highway (PCH) is legendary but takes 8-10 hours. Avoid the Amtrak Coast Starlight if you are on a tight schedule."
    },
    {
      question: "How far is Levi's Stadium from San Francisco?",
      answer: "Levi's Stadium is in Santa Clara, about 45 miles (72 km) south of downtown San Francisco. Depending on traffic, it can take 1-2 hours by car or Caltrain."
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
      <GroupIClientPage />
    </>
  );
}





