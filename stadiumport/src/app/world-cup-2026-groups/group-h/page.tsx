import { Metadata } from 'next';
import GroupHClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema, generateMatchListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Group H Guide: Teams & Travel',
  description:
    'FIFA World Cup 2026 Group H guide: Spain, Uruguay, Saudi Arabia, and Cabo Verde. Verified fixtures in Atlanta, Miami, Houston, and Guadalajara, plus the smartest travel plan, tickets, hotels, and fan strategy.',
  keywords: [
    'FIFA World Cup 2026 Group H guide',
    'World Cup 2026 Group H',
    'Group H fixtures',
    'Spain World Cup 2026',
    'Uruguay World Cup 2026',
    'Saudi Arabia World Cup 2026',
    'Cabo Verde World Cup 2026',
    'Atlanta World Cup 2026',
    'Miami World Cup 2026',
    'Houston World Cup 2026',
    'Guadalajara World Cup 2026',
    'Mercedes-Benz Stadium World Cup 2026',
    'Hard Rock Stadium World Cup 2026',
    'NRG Stadium World Cup 2026',
    'Estadio Akron World Cup 2026',
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-h',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 Group H Guide: Teams, Fixtures & Travel',
    description:
      'Spain, Uruguay, Saudi Arabia, and Cabo Verde. Follow Group H across Atlanta, Miami, Houston, and Guadalajara with tickets, hotels, flights, and matchday logistics.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-h',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group H Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 Group H Guide: Spain, Uruguay, Saudi Arabia, Cabo Verde',
    description:
      'Verified Group H fixtures + travel strategy for Atlanta, Miami, Houston, and Guadalajara.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupHPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-h';

  const articleSchema = generateArticleSchema('group-h', pageUrl);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group H Matches',
    startDate: '2026-06-15',
    endDate: '2026-06-26',
    location: {
      name: 'Group H Host Cities',
      address: 'Atlanta, Miami, Houston, Guadalajara',
      country: 'US, MX',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group H fixtures played in Atlanta, Miami, Houston, and Guadalajara during the FIFA World Cup 2026 group stage.',
  });

  const groupMatches = [
    {
      name: 'Spain vs Cabo Verde (Group H) — Atlanta',
      startDate: '2026-06-15T12:00:00-04:00',
      endDate: '2026-06-15T14:00:00-04:00',
      location: { name: 'Atlanta Stadium', address: 'Atlanta, GA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Atlanta Stadium in Atlanta, Georgia.',
      performer: [
        { "@type": "SportsTeam", "name": "Spain", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/spain" },
        { "@type": "SportsTeam", "name": "Cabo Verde", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cabo-verde" }
      ]
    },
    {
      name: 'Saudi Arabia vs Uruguay (Group H) — Miami',
      startDate: '2026-06-15T18:00:00-04:00',
      endDate: '2026-06-15T20:00:00-04:00',
      location: { name: 'Miami Stadium', address: 'Miami Gardens, FL', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Miami Stadium in Miami Gardens, Florida.',
      performer: [
        { "@type": "SportsTeam", "name": "Saudi Arabia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/saudi-arabia" },
        { "@type": "SportsTeam", "name": "Uruguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/uruguay" }
      ]
    },
    {
      name: 'Spain vs Saudi Arabia (Group H) — Atlanta',
      startDate: '2026-06-21T12:00:00-04:00',
      endDate: '2026-06-21T14:00:00-04:00',
      location: { name: 'Atlanta Stadium', address: 'Atlanta, GA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Atlanta Stadium in Atlanta, Georgia.',
      performer: [
        { "@type": "SportsTeam", "name": "Spain", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/spain" },
        { "@type": "SportsTeam", "name": "Saudi Arabia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/saudi-arabia" }
      ]
    },
    {
      name: 'Uruguay vs Cabo Verde (Group H) — Miami',
      startDate: '2026-06-21T18:00:00-04:00',
      endDate: '2026-06-21T20:00:00-04:00',
      location: { name: 'Miami Stadium', address: 'Miami Gardens, FL', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Miami Stadium in Miami Gardens, Florida.',
      performer: [
        { "@type": "SportsTeam", "name": "Uruguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/uruguay" },
        { "@type": "SportsTeam", "name": "Cabo Verde", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cabo-verde" }
      ]
    },
    {
      name: 'Cabo Verde vs Saudi Arabia (Group H) — Houston',
      startDate: '2026-06-26T19:00:00-05:00',
      endDate: '2026-06-26T21:00:00-05:00',
      location: { name: 'Houston Stadium', address: 'Houston, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Houston Stadium in Houston, Texas.',
      performer: [
        { "@type": "SportsTeam", "name": "Cabo Verde", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cabo-verde" },
        { "@type": "SportsTeam", "name": "Saudi Arabia", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/saudi-arabia" }
      ]
    },
    {
      name: 'Uruguay vs Spain (Group H) — Guadalajara',
      startDate: '2026-06-26T19:00:00-05:00',
      endDate: '2026-06-26T21:00:00-05:00',
      location: { name: 'Guadalajara Stadium', address: 'Guadalajara, Jalisco', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group H match at Guadalajara Stadium in Guadalajara, Mexico.',
      performer: [
        { "@type": "SportsTeam", "name": "Uruguay", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/uruguay" },
        { "@type": "SportsTeam", "name": "Spain", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/spain" }
      ]
    }
  ];

  const groupMatchesSchema = generateMatchListSchema('Group H', groupMatches);
  const matchEventSchemas = groupMatches.map(match => generateEventSchema(match));


 const breadcrumbSchema = generateBreadcrumbSchema([
   { name: 'Home', item: '/' },
   { name: 'Groups', item: '/world-cup-2026-groups' },
   { name: 'Group H Guide', item: pageUrl }
 ]);

 const faqSchema = generateFAQSchema([
   {
     question: "What is the best way to travel between Group H cities?",
     answer: "You will mostly fly. Atlanta (ATL), Miami (MIA), and Houston (IAH) are major airline hubs, which means lots of routes but intense price spikes after the draw. For Guadalajara (GDL), treat it like a full international leg and build buffer time for immigration and delays."
   },
   {
     question: "Which Group H stadium is the most comfortable in summer?",
     answer: "Atlanta and Houston are the comfort plays: Mercedes-Benz Stadium and NRG Stadium are climate-controlled. Miami Stadium is open-air with a canopy that provides significant shade, but you still need a heat plan."
   },
   {
     question: "Do I need separate entry rules for the USA and Mexico?",
     answer: "Yes. The USA and Mexico have different entry requirements. Many travelers enter the US under ESTA or a B-1/B-2 visa, while Mexico has separate passport and tourist entry rules depending on nationality and entry method. Verify requirements early and avoid booking tight same-day connections across the border."
   },
   {
     question: "What is the smartest one-base strategy for Group H?",
     answer: "If you want one stable base in the US, Atlanta is the best anchor because Spain plays there twice and ATL flights are frequent. If you’re trying to see every match, use Atlanta + Miami as your US spine, then add a separate Guadalajara leg for the final simultaneous matchday."
   },
   {
     question: "Can I attend both matches on June 15 or June 21 in Group H?",
     answer: "No. The two matches on each of those dates are played in different cities at the same kickoff window, so you must choose one match per matchday and plan your base city around that choice."
   },
   {
     question: "How should I handle the June 26 double-header in Houston and Guadalajara?",
     answer: "Pick your priority match. You cannot physically attend both. Houston is the easiest logistics play inside the US, while Guadalajara is the cross-border story play that requires arriving early and treating the day as an international travel scenario."
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
      <GroupHClientPage />
    </>
  );
}

