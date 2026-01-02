import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Philadelphia World Cup 2026 Guide: Lincoln Financial Field & Travel Tips',
  description: 'Complete Philadelphia World Cup 2026 travel guide. Lincoln Financial Field info, best hotels, SEPTA transportation tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/philadelphia-city-guide',
  },
  openGraph: {
    title: 'Philadelphia World Cup 2026 Guide: Lincoln Financial Field & Travel Tips',
    description: 'Complete Philadelphia World Cup 2026 travel guide. Lincoln Financial Field info, best hotels, SEPTA transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/philadelphia-city-guide',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/philadelphia-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Philadelphia World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philadelphia World Cup 2026 Guide - Lincoln Financial Field & Travel',
    description: 'Complete Philadelphia World Cup 2026 travel guide. Lincoln Financial Field info, best hotels, SEPTA transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/philadelphia-world-cup-2026.webp'],
  },
  keywords: ['Philadelphia World Cup 2026', 'Lincoln Financial Field', 'SEPTA', 'Center City hotels', 'Old City hotels', 'PHL airport transfer', 'Philadelphia travel tips', 'World Cup tickets Philadelphia', 'Philadelphia CityPASS', 'Philadelphia fan zones'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('philadelphia-city-guide', '/world-cup-2026-host-cities-guide/philadelphia-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Philadelphia Guide', item: '/world-cup-2026-host-cities-guide/philadelphia-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Philadelphia?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Lincoln Financial Field is located in the South Philadelphia Sports Complex, easily accessible via the SEPTA Broad Street Line (Orange).'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from PHL airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take the SEPTA Airport Line to Center City (Jefferson or Suburban Station), then transfer to the Broad Street Line southbound to NRG Station.'
 }
 },
 {
 '@type': 'Question',
 name: 'Is Philadelphia safe for World Cup tourists?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Center City and Old City are generally safe for tourists, especially during major events. The Sports Complex area is very safe on game days. Standard city precautions apply.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car in Philadelphia?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No. If you stay in Center City, you can walk to historic sites and take the subway to the stadium. Parking is expensive and traffic can be heavy.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the best area to stay in Philadelphia for the World Cup?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Center City is best for access to dining, history, and the subway line to the stadium. South Philadelphia offers proximity to the venue but fewer hotel options.'
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




