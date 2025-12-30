
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
 title: 'Dallas World Cup 2026 Guide: AT&T Stadium & Travel Tips',
 description: 'The ultimate guide to Dallas & Arlington for World Cup 2026. Navigate AT&T Stadium transport, find the best BBQ, and book hotels in Uptown or Fort Worth.',
 keywords: 'Dallas World Cup 2026, AT&T Stadium guide, World Cup Arlington tickets, Dallas hotels for World Cup, FIFA World Cup 26 Dallas',
 alternates: {
 canonical: '/world-cup-2026-host-cities-guide/dallas-city-guide',
 },
 openGraph: {
 title: 'Dallas World Cup 2026 Guide: AT&T Stadium & Travel Tips',
 description: 'The ultimate guide to Dallas & Arlington for World Cup 2026. Navigate AT&T Stadium transport, find the best BBQ, and book hotels in Uptown or Fort Worth.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/dallas-city-guide',
 siteName: 'Stadiumport',
 locale: 'en_US',
 type: 'article',
 images: [
 {
 url: '/images/cities/dallas-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'Dallas World Cup 2026 Guide',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Dallas World Cup 2026 Guide: AT&T Stadium & Travel Tips',
 description: 'The ultimate guide to Dallas & Arlington for World Cup 2026. Navigate AT&T Stadium transport, find the best BBQ, and book hotels in Uptown or Fort Worth.',
 images: ['/images/cities/dallas-world-cup-2026.webp'],
 },
};

export default function Page() {
  const jsonLd = generateArticleSchema('dallas-city-guide', '/world-cup-2026-host-cities-guide/dallas-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Dallas Guide', item: '/world-cup-2026-host-cities-guide/dallas-city-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there public transport to AT&T Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is NO direct rail link to AT&T Stadium. Your options are driving (expensive parking), rideshare (surge pricing), or private shuttles. We highly recommend booking a shuttle or staying within walking distance in Arlington if budget allows.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where should I stay for World Cup matches in Dallas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you want nightlife and culture, stay in Uptown Dallas or Deep Ellum. If you want convenience to the stadium, stay in Arlington (book 12+ months ahead). Fort Worth Stockyards offers a unique cowboy experience.'
        }
      },
      {
        '@type': 'Question',
        name: 'How hot is Dallas during the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expect highs of 95°F+ (35°C+). However, AT&T Stadium has a retractable roof and powerful air conditioning, so match conditions will be perfect. Hydrate constantly when exploring the city.'
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




