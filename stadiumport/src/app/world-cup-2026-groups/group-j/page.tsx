import { Metadata } from 'next';
import GroupJClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateFAQSchema, generateMatchListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
  description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
  keywords: ['World Cup 2026 Group J Travel Guide', 'Group J matches', 'Kansas City Dallas San Francisco World Cup', 'Arrowhead Stadium travel', 'AT&T Stadium guide', "Levi's Stadium logistics"],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-j',
  },
  openGraph: {
    title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
    description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-j',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group J Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
    description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupJPage() {
  const pageUrl = '/world-cup-2026-groups/group-j';

  const articleSchema = generateArticleSchema('group-j', pageUrl);

  const faqs = [
    {
      question: 'Do I really need a car for Group J?',
      answer:
        'For Kansas City and Dallas/Arlington, yes—these stadium areas are car-first and transit options are limited on matchdays. In the SF Bay Area, you can do matchday without a car by using Caltrain/VTA, but a rental can still help for sightseeing and flexibility.',
    },
    {
      question: 'What is the best way to travel between Kansas City, Dallas, and the SF Bay Area?',
      answer:
        'Fly. The distances are massive and driving is a full-day (or multi-day) commitment. Build an open-jaw or multi-city itinerary (MCI → DFW → SFO/SJC) and treat each city as a separate mini-trip.',
    },
    {
      question: 'Which airport should I use for each city?',
      answer:
        'Kansas City: MCI. Dallas: DFW (largest connectivity) or DAL (convenient for some domestic routes). SF Bay Area: SFO for international links, SJC for proximity to Levi’s Stadium, and OAK as a sometimes-cheaper alternative.',
    },
    {
      question: 'Where should I stay for Levi’s Stadium matches?',
      answer:
        'Prioritize San Jose, Santa Clara, Mountain View, or Palo Alto for the easiest matchday logistics. Staying in San Francisco is great for tourism but turns matchday into a long commute.',
    },
    {
      question: 'How early should I arrive on matchday?',
      answer:
        'Plan to be in the stadium district 2–3 hours before kickoff. Arrowhead tailgating starts earlier; Dallas traffic and parking queues are real; and Levi’s is easiest if you arrive before the biggest transit surges.',
    },
    {
      question: 'What’s the single biggest budgeting trap in Group J?',
      answer:
        'San Francisco-area lodging. Hotel rates can dominate your total trip cost. If you care about budget, base in San Jose/Santa Clara and use SF for one or two tourist days instead of your match-week base.',
    },
    {
      question: 'How do I handle the Texas heat?',
      answer:
        'Assume hot, humid conditions outdoors even if the stadium is air-conditioned. Hydrate the day before, use sunscreen, and avoid long walks in peak afternoon heat—especially from remote parking lots.',
    },
    {
      question: 'Should I buy flights first or hotels first?',
      answer:
        'For Group J, lock hotels in the Bay Area first (they spike earliest), then book the multi-city flights once you have dates. Kansas City and Dallas generally have more hotel supply and flexible pricing than the Bay Area.',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group J Guide', item: pageUrl },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group J Matches',
    startDate: '2026-06-11',
    endDate: '2026-06-27',
    location: {
      name: 'Group J Host Cities',
      address: 'Kansas City, Dallas/Arlington, SF Bay Area (Santa Clara)',
      country: 'US',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group J fixtures hosted across Kansas City, Dallas/Arlington, and the San Francisco Bay Area (Santa Clara) during the FIFA World Cup 2026 group stage.',
  });

  const groupMatches = [
    {
      name: 'Argentina vs Algeria (Group J) — Kansas City',
      startDate: '2026-06-11T13:00:00-05:00',
      endDate: '2026-06-11T15:00:00-05:00',
      location: { name: 'Arrowhead Stadium', address: 'Kansas City, MO', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at Arrowhead Stadium in Kansas City, Missouri.',
      performer: [
        { "@type": "SportsTeam", "name": "Argentina", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/argentina" },
        { "@type": "SportsTeam", "name": "Algeria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/algeria" }
      ]
    },
    {
      name: 'Austria vs Jordan (Group J) — Dallas/Arlington',
      startDate: '2026-06-12T19:00:00-05:00',
      endDate: '2026-06-12T21:00:00-05:00',
      location: { name: 'AT&T Stadium', address: 'Arlington, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at AT&T Stadium in Arlington, Texas.',
      performer: [
        { "@type": "SportsTeam", "name": "Austria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/austria" },
        { "@type": "SportsTeam", "name": "Jordan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/jordan" }
      ]
    },
    {
      name: 'Argentina vs Austria (Group J) — SF Bay Area',
      startDate: '2026-06-16T15:00:00-07:00',
      endDate: '2026-06-16T17:00:00-07:00',
      location: { name: 'Levi\'s Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at Levi\'s Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Argentina", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/argentina" },
        { "@type": "SportsTeam", "name": "Austria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/austria" }
      ]
    },
    {
      name: 'Algeria vs Jordan (Group J) — Kansas City',
      startDate: '2026-06-17T19:00:00-05:00',
      endDate: '2026-06-17T21:00:00-05:00',
      location: { name: 'Arrowhead Stadium', address: 'Kansas City, MO', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at Arrowhead Stadium in Kansas City, Missouri.',
      performer: [
        { "@type": "SportsTeam", "name": "Algeria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/algeria" },
        { "@type": "SportsTeam", "name": "Jordan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/jordan" }
      ]
    },
    {
      name: 'Jordan vs Argentina (Group J) — Dallas/Arlington',
      startDate: '2026-06-21T17:00:00-05:00',
      endDate: '2026-06-21T19:00:00-05:00',
      location: { name: 'AT&T Stadium', address: 'Arlington, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at AT&T Stadium in Arlington, Texas.',
      performer: [
        { "@type": "SportsTeam", "name": "Jordan", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/jordan" },
        { "@type": "SportsTeam", "name": "Argentina", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/argentina" }
      ]
    },
    {
      name: 'Algeria vs Austria (Group J) — SF Bay Area',
      startDate: '2026-06-22T19:00:00-07:00',
      endDate: '2026-06-22T21:00:00-07:00',
      location: { name: 'Levi\'s Stadium', address: 'Santa Clara, CA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group J match at Levi\'s Stadium in Santa Clara, California.',
      performer: [
        { "@type": "SportsTeam", "name": "Algeria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/algeria" },
        { "@type": "SportsTeam", "name": "Austria", "url": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026/teams/austria" }
      ]
    },
  ];

  const groupMatchesSchema = generateMatchListSchema('Group J', groupMatches);
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
      <GroupJClientPage faqs={faqs} />
    </>
  );
}

