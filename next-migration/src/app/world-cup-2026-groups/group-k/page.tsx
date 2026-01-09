import { Metadata } from 'next';
import GroupKClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Group K Guide: Teams, Schedule, Cities & Travel Strategy',
  description: 'The definitive FIFA World Cup 2026 Group K guide: teams, match schedule, stadiums, and the smartest travel plan for Mexico City, Houston, Atlanta, and Miami.',
  keywords: [
    'FIFA World Cup 2026 Group K guide',
    'World Cup 2026 Group K',
    'Group K schedule',
    'Group K fixtures',
    'Mexico City World Cup 2026',
    'Houston World Cup 2026',
    'Atlanta World Cup 2026',
    'Miami World Cup 2026',
    'Estadio Azteca World Cup 2026',
    'NRG Stadium World Cup 2026',
    'Mercedes-Benz Stadium World Cup 2026',
    'Hard Rock Stadium World Cup 2026',
    'Group K travel strategy',
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-k',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 Group K Guide: Teams, Schedule, Cities & Travel',
    description: 'Teams, match schedule, stadiums, and the smartest travel plan for Mexico City, Houston, Atlanta, and Miami.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-k',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group K Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 Group K Guide: Teams, Schedule, Cities & Travel',
    description: 'Teams, match schedule, stadiums, and the smartest travel plan for Mexico City, Houston, Atlanta, and Miami.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupKPage() {
  const pageUrl = '/world-cup-2026-groups/group-k';

  const articleSchema = generateArticleSchema('group-k', pageUrl);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group K Guide', item: pageUrl },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'Do I need a car for Group K?',
      answer:
        'For Houston and Miami, yes. These cities are built for cars and stadiums are far from many hotel districts. For Mexico City, use Ubers or official taxis. In Atlanta, the MARTA rail is excellent for reaching the stadium from Midtown/Downtown.',
    },
    {
      question: 'Which city is the best base for Group K?',
      answer:
        'Atlanta is the most reliable logistics hub thanks to flight connections, while Houston can be a strong mid-trip base for hotel value and central positioning. If you’re optimizing for culture, Mexico City is the signature stop.',
    },
    {
      question: 'How do I handle cross-border travel (Mexico ↔ USA)?',
      answer:
        'Treat every move between Mexico City and the US as a full international flight day. Arrive early, keep documents accessible, and build buffer time for customs and immigration during peak tournament periods.',
    },
    {
      question: 'Is it safe to follow the full Group K route?',
      answer:
        'Yes, but it is physically demanding. You are dealing with altitude, heat, and multiple airports. Plan recovery days, hydrate aggressively, and keep your transport plan simple on match days.',
    },
  ]);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group K Matches',
    startDate: '2026-06-16',
    endDate: '2026-06-27',
    location: {
      name: 'Group K Host Cities',
      address: 'Mexico City, Houston, Atlanta, Miami',
      country: 'US, MX',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group K fixtures played in Mexico City, Houston, Atlanta, and Miami during the FIFA World Cup 2026 group stage.',
  });

  const matchEventSchemas = [
    generateEventSchema({
      name: 'Colombia vs PO 1 (Group K) — Houston',
      startDate: '2026-06-16T20:00:00-05:00',
      endDate: '2026-06-16T22:00:00-05:00',
      location: { name: 'NRG Stadium', address: 'Houston, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at NRG Stadium in Houston, Texas.',
    }),
    generateEventSchema({
      name: 'Portugal vs Uzbekistan (Group K) — Mexico City',
      startDate: '2026-06-17T18:00:00-06:00',
      endDate: '2026-06-17T20:00:00-06:00',
      location: { name: 'Estadio Azteca', address: 'Mexico City', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at Estadio Azteca in Mexico City.',
    }),
    generateEventSchema({
      name: 'Portugal vs Colombia (Group K) — Atlanta',
      startDate: '2026-06-22T21:00:00-04:00',
      endDate: '2026-06-22T23:00:00-04:00',
      location: { name: 'Mercedes-Benz Stadium', address: 'Atlanta, GA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at Mercedes-Benz Stadium in Atlanta, Georgia.',
    }),
    generateEventSchema({
      name: 'Uzbekistan vs PO 1 (Group K) — Miami',
      startDate: '2026-06-23T15:00:00-04:00',
      endDate: '2026-06-23T17:00:00-04:00',
      location: { name: 'Hard Rock Stadium', address: 'Miami Gardens, FL', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at Hard Rock Stadium in Miami Gardens, Florida.',
    }),
    generateEventSchema({
      name: 'Portugal vs PO 1 (Group K) — Houston',
      startDate: '2026-06-27T18:00:00-05:00',
      endDate: '2026-06-27T20:00:00-05:00',
      location: { name: 'NRG Stadium', address: 'Houston, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at NRG Stadium in Houston, Texas.',
    }),
    generateEventSchema({
      name: 'Colombia vs Uzbekistan (Group K) — Mexico City',
      startDate: '2026-06-27T20:00:00-06:00',
      endDate: '2026-06-27T22:00:00-06:00',
      location: { name: 'Estadio Azteca', address: 'Mexico City', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group K match at Estadio Azteca in Mexico City.',
    }),
  ];

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={groupEventSchema} />
      {matchEventSchemas.map((schema, index) => (
        <JsonLd key={index} schema={schema} />
      ))}
      <GroupKClientPage />
    </>
  );
}





