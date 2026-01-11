import { Metadata } from 'next';
import GroupGClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
  description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
  keywords: ['World Cup 2026 Group G Travel Guide', 'Group G matches', 'Vancouver Seattle Los Angeles World Cup', 'Amtrak Cascades World Cup travel', 'West Coast World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-g',
  },
  openGraph: {
    title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
    description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-g',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group G Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
    description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupGPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-g';

  const articleSchema = generateArticleSchema('group-g', pageUrl);

  const groupMatches = [
    {
      name: 'IR Iran vs New Zealand (Group G) — Los Angeles',
      startDate: '2026-06-15T18:00:00-07:00',
      endDate: '2026-06-15T20:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "IR Iran", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/iran" },
        { "@type": "SportsTeam", "name": "New Zealand", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/new-zealand" }
      ]
    },
    {
      name: 'Belgium vs Egypt (Group G) — Seattle',
      startDate: '2026-06-15T12:00:00-07:00',
      endDate: '2026-06-15T14:00:00-07:00',
      location: { name: 'Seattle Stadium', address: 'Seattle, WA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at Seattle Stadium in Seattle, Washington.',
      performer: [
        { "@type": "SportsTeam", "name": "Belgium", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/belgium" },
        { "@type": "SportsTeam", "name": "Egypt", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/egypt" }
      ]
    },
    {
      name: 'Belgium vs IR Iran (Group G) — Los Angeles',
      startDate: '2026-06-21T12:00:00-07:00',
      endDate: '2026-06-21T14:00:00-07:00',
      location: { name: 'Los Angeles Stadium', address: 'Inglewood, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at Los Angeles Stadium in Inglewood, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Belgium", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/belgium" },
        { "@type": "SportsTeam", "name": "IR Iran", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/iran" }
      ]
    },
    {
      name: 'New Zealand vs Egypt (Group G) — Vancouver',
      startDate: '2026-06-21T18:00:00-07:00',
      endDate: '2026-06-21T20:00:00-07:00',
      location: { name: 'BC Place Vancouver', address: 'Vancouver, BC', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at BC Place in Vancouver, British Columbia.',
      performer: [
        { "@type": "SportsTeam", "name": "New Zealand", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/new-zealand" },
        { "@type": "SportsTeam", "name": "Egypt", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/egypt" }
      ]
    },
    {
      name: 'Egypt vs IR Iran (Group G) — Seattle',
      startDate: '2026-06-26T20:00:00-07:00',
      endDate: '2026-06-26T22:00:00-07:00',
      location: { name: 'Seattle Stadium', address: 'Seattle, WA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at Seattle Stadium in Seattle, Washington.',
      performer: [
        { "@type": "SportsTeam", "name": "Egypt", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/egypt" },
        { "@type": "SportsTeam", "name": "IR Iran", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/iran" }
      ]
    },
    {
      name: 'New Zealand vs Belgium (Group G) — Vancouver',
      startDate: '2026-06-26T20:00:00-07:00',
      endDate: '2026-06-26T22:00:00-07:00',
      location: { name: 'BC Place Vancouver', address: 'Vancouver, BC', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group G match at BC Place in Vancouver, British Columbia.',
      performer: [
        { "@type": "SportsTeam", "name": "New Zealand", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/new-zealand" },
        { "@type": "SportsTeam", "name": "Belgium", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/belgium" }
      ]
    },
  ];

  const groupMatchesSchema = generateMatchListSchema("Group G", groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group G Matches',
    startDate: '2026-06-15',
    endDate: '2026-06-26',
    location: {
      name: 'Group G Host Cities',
      address: 'Vancouver, Seattle, Los Angeles',
      country: 'CA, US',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group G fixtures played in Vancouver, Seattle, and Los Angeles during the FIFA World Cup 2026 group stage.',
  });

 const breadcrumbSchema = generateBreadcrumbSchema([
   { name: 'Home', item: '/' },
   { name: 'Groups', item: '/world-cup-2026-groups' },
   { name: 'Group G Guide', item: pageUrl }
 ]);

 const faqSchema = generateFAQSchema([
   {
     question: "Amtrak or Driving between Vancouver and Seattle?",
     answer: "Amtrak Cascades is highly recommended. While driving is shorter on paper, border wait times for cars are notoriously unpredictable, especially during major events. The train has dedicated customs processing that is usually faster."
   },
   {
     question: "Which city has the best stadium atmosphere?",
     answer: "Seattle. Lumen Field is legendary for its noise and soccer-first feel. Vancouver’s BC Place is also excellent and can get especially loud when the roof is closed."
   },
   {
     question: "How far apart are the cities?",
     answer: "Vancouver to Seattle is about 3–4 hours by train or car, depending on border waits. Seattle to Los Angeles is roughly 1,100 miles, so flying is the practical option."
   },
   {
     question: "Is Los Angeles safe for tourists?",
     answer: "Popular tourist areas like Santa Monica, Hollywood, and Downtown are generally fine, but stay aware, use rideshare at night, and avoid unfamiliar industrial areas near the stadium."
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
     <GroupGClientPage />
   </>
 );
}

