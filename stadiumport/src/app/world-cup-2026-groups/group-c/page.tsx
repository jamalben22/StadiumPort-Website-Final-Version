import { Metadata } from 'next';
import GroupCClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
  description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
  keywords: ['World Cup 2026 Group C Travel Guide', 'Group C matches', 'Boston NYC Philadelphia Atlanta Miami World Cup', 'Amtrak Acela World Cup travel', 'East Coast World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-c',
  },
  openGraph: {
    title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
    description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-c',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group C Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
    description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupCPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-c';

  const articleSchema = generateArticleSchema('group-c', pageUrl);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group C Matches',
    startDate: '2026-06-12',
    endDate: '2026-06-24',
    location: {
      name: 'Group C Host Cities',
      address: 'Boston, NYC/NJ, Philadelphia, Atlanta, Miami',
      country: 'US',
    },
    image: '/assets/wc26-groups-og.jpg',
    description: 'Group C fixtures played in Boston, NYC/NJ, Philadelphia, Atlanta, and Miami during the FIFA World Cup 2026 group stage.'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group C Guide', item: pageUrl }
  ]);

  const faqSchema = generateFAQSchema([
      {
        question: "What is the best way to travel between Group C cities?",
        answer: "For the northern cities (Boston, NYC, Philadelphia), the Amtrak Acela train is superior to flying. For the southern leg (Atlanta, Miami), you must fly. The strategy is 'Train North, Plane South'."
      },
      {
        question: "Which Group C city is the most expensive?",
        answer: "New York City is the most expensive for accommodation, averaging $450+ per night. Boston follows closely. Atlanta and Philadelphia offer better value for mid-range travelers."
      }
  ]);

  const groupMatches = [
    {
      name: "Brazil vs Haiti (Group C)",
      startDate: "2026-06-12T20:00:00-04:00",
      endDate: "2026-06-12T22:00:00-04:00",
      location: { name: "Hard Rock Stadium", address: "Miami Gardens, FL", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Brazil and Haiti at Hard Rock Stadium in Miami Gardens.",
      performer: [
        { "@type": "SportsTeam", "name": "Brazil", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/brazil" },
        { "@type": "SportsTeam", "name": "Haiti", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/haiti" }
      ]
    },
    {
      name: "Morocco vs Scotland (Group C)",
      startDate: "2026-06-13T15:00:00-04:00",
      endDate: "2026-06-13T17:00:00-04:00",
      location: { name: "Gillette Stadium", address: "Foxborough, MA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Morocco and Scotland at Gillette Stadium in Foxborough.",
      performer: [
        { "@type": "SportsTeam", "name": "Morocco", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/morocco" },
        { "@type": "SportsTeam", "name": "Scotland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/scotland" }
      ]
    },
    {
      name: "Brazil vs Scotland (Group C)",
      startDate: "2026-06-18T18:00:00-04:00",
      endDate: "2026-06-18T20:00:00-04:00",
      location: { name: "MetLife Stadium", address: "East Rutherford, NJ", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Brazil and Scotland at MetLife Stadium in East Rutherford.",
      performer: [
        { "@type": "SportsTeam", "name": "Brazil", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/brazil" },
        { "@type": "SportsTeam", "name": "Scotland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/scotland" }
      ]
    },
    {
      name: "Morocco vs Haiti (Group C)",
      startDate: "2026-06-18T21:00:00-04:00",
      endDate: "2026-06-18T23:00:00-04:00",
      location: { name: "Lincoln Financial Field", address: "Philadelphia, PA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Morocco and Haiti at Lincoln Financial Field in Philadelphia.",
      performer: [
        { "@type": "SportsTeam", "name": "Morocco", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/morocco" },
        { "@type": "SportsTeam", "name": "Haiti", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/haiti" }
      ]
    },
    {
      name: "Brazil vs Morocco (Group C)",
      startDate: "2026-06-24T20:00:00-04:00",
      endDate: "2026-06-24T22:00:00-04:00",
      location: { name: "Mercedes-Benz Stadium", address: "Atlanta, GA", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Brazil and Morocco at Mercedes-Benz Stadium in Atlanta.",
      performer: [
        { "@type": "SportsTeam", "name": "Brazil", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/brazil" },
        { "@type": "SportsTeam", "name": "Morocco", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/morocco" }
      ]
    },
    {
      name: "Scotland vs Haiti (Group C)",
      startDate: "2026-06-24T15:00:00-04:00",
      endDate: "2026-06-24T17:00:00-04:00",
      location: { name: "MetLife Stadium", address: "East Rutherford, NJ", country: "US" },
      image: "/assets/wc26-groups-og.jpg",
      description: "Official FIFA World Cup 2026 Group C match between Scotland and Haiti at MetLife Stadium in East Rutherford.",
      performer: [
        { "@type": "SportsTeam", "name": "Scotland", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/scotland" },
        { "@type": "SportsTeam", "name": "Haiti", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/haiti" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema("Group C", groupMatches);
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
      <GroupCClientPage />
    </>
  );
}

