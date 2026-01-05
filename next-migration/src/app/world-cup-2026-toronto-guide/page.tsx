import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Toronto World Cup 2026 Guide: BMO Field & Travel Tips',
  description: 'Complete Toronto World Cup 2026 travel guide. BMO Field info, best hotels, UP Express/TTC tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-toronto-guide',
  },
  openGraph: {
    title: 'Toronto World Cup 2026 Guide: BMO Field & Travel Tips',
    description: 'Complete Toronto World Cup 2026 travel guide. BMO Field info, best hotels, UP Express/TTC tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-toronto-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/toronto-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Toronto World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toronto World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
    description: 'Everything you need for World Cup 2026 in Toronto: stadium overview, walkable hotel areas, TTC/GO routes, matchday plan, and local secrets.',
    images: ['/images/cities/toronto-world-cup-2026.webp'],
  },
  keywords: ['Toronto World Cup 2026', 'BMO Field', 'TTC', 'GO Transit', 'Downtown Toronto hotels', 'Liberty Village hotels', 'Pearson airport transfer', 'Toronto travel tips', 'World Cup tickets Toronto', 'Toronto CityPASS', 'Toronto fan zones'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('toronto-city-guide', '/world-cup-2026-toronto-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Toronto Guide', item: '/world-cup-2026-toronto-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Toronto?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Matches will be played at BMO Field (National Soccer Stadium), located at Exhibition Place, just west of downtown Toronto.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from Pearson (YYZ) airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take the UP Express train to Union Station (25 mins). From there, take the GO Train (Lakeshore West) to Exhibition Station or TTC streetcars 509/511.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car for World Cup 2026 in Toronto?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No if you stay Downtown or near transit. Toronto has an extensive TTC subway and streetcar network, plus GO Transit for regional travel. Parking is expensive and traffic is heavy.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in June and July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Warm and humid, typically 20–30°C (68–86°F). Rain is possible, so pack a light jacket.'
 }
 },
 {
 '@type': 'Question',
 name: 'Which areas are best to stay in?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Downtown for central access; Liberty Village for walk-to-stadium convenience; Entertainment District for nightlife.'
 }
 },
 {
 '@type': 'Question',
 name: 'Can I bring a bag to the stadium?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Strict bag policies apply. Small clutch bags or clear bags are usually required. Check official BMO Field guidelines closer to the event.'
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
 <ClientPage />
 </>
 );
}





