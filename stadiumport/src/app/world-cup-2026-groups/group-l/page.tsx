import { Metadata } from 'next';
import GroupLClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas',
  description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
  keywords: ['World Cup 2026 Group L Travel Guide', 'Group L matches', 'Toronto NYC Boston Philadelphia Dallas World Cup', 'Cross-border World Cup travel', 'Amtrak Northeast World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-l',
  },
  openGraph: {
    title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas',
    description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-l',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group L Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas',
    description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupLPage() {
  const pageUrl = '/world-cup-2026-groups/group-l';

  const articleSchema = generateArticleSchema('group-l', pageUrl);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Groups', item: '/world-cup-2026-groups' },
    { name: 'Group L Guide', item: pageUrl },
  ]);

  const faqs = [
    {
      question: 'What is the best way to travel between Group L cities?',
      answer:
        "For the Northeast cluster (Boston, NYC, Philadelphia), the Amtrak Acela is the best option. For Toronto and Dallas, you must fly. The strategy is 'Rail the Northeast, Fly the Long Haul'.",
    },
    {
      question: 'Do I need a visa for both Canada and the US in Group L?',
      answer:
        'Yes. Following Group L involves crossing the US-Canada border. Most international travelers will need a US ESTA/Visa and a Canadian eTA/Visa. Ensure both are secured months in advance.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group L Matches',
    startDate: '2026-06-17',
    endDate: '2026-06-27',
    location: {
      name: 'Group L Host Cities',
      address: 'Toronto, Boston, New York/New Jersey, Philadelphia, Dallas/Arlington',
    },
    image: '/assets/wc26-groups-og.jpg',
    description:
      'Group L fixtures hosted across Toronto, Boston, New York/New Jersey, Philadelphia, and Dallas/Arlington during the FIFA World Cup 2026 group stage.',
  });

  const matchEventSchemas = [
    generateEventSchema({
      name: 'England vs Croatia (Group L) — Dallas/Arlington',
      startDate: '2026-06-17T15:00:00-05:00',
      endDate: '2026-06-17T17:00:00-05:00',
      location: { name: 'AT&T Stadium', address: 'Arlington, TX', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at AT&T Stadium in Arlington, Texas.',
    }),
    generateEventSchema({
      name: 'Ghana vs Panama (Group L) — Toronto',
      startDate: '2026-06-17T19:00:00-04:00',
      endDate: '2026-06-17T21:00:00-04:00',
      location: { name: 'BMO Field', address: 'Toronto, ON', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at BMO Field in Toronto, Ontario.',
    }),
    generateEventSchema({
      name: 'England vs Ghana (Group L) — Boston',
      startDate: '2026-06-23T16:00:00-04:00',
      endDate: '2026-06-23T18:00:00-04:00',
      location: { name: 'Gillette Stadium', address: 'Foxborough, MA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at Gillette Stadium in Foxborough, Massachusetts.',
    }),
    generateEventSchema({
      name: 'Panama vs Croatia (Group L) — Toronto',
      startDate: '2026-06-23T19:00:00-04:00',
      endDate: '2026-06-23T21:00:00-04:00',
      location: { name: 'BMO Field', address: 'Toronto, ON', country: 'CA' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at BMO Field in Toronto, Ontario.',
    }),
    generateEventSchema({
      name: 'Panama vs England (Group L) — New York/New Jersey',
      startDate: '2026-06-27T17:00:00-04:00',
      endDate: '2026-06-27T19:00:00-04:00',
      location: { name: 'MetLife Stadium', address: 'East Rutherford, NJ', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at MetLife Stadium in East Rutherford, New Jersey.',
    }),
    generateEventSchema({
      name: 'Croatia vs Ghana (Group L) — Philadelphia',
      startDate: '2026-06-27T17:00:00-04:00',
      endDate: '2026-06-27T19:00:00-04:00',
      location: { name: 'Lincoln Financial Field', address: 'Philadelphia, PA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group L match at Lincoln Financial Field in Philadelphia, Pennsylvania.',
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
      <GroupLClientPage />
    </>
  );
}

