import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Monterrey World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Plan World Cup 2026 in Monterrey: Estadio BBVA tips, best San Pedro/Centro hotels, Metrorrey strategy, dining, safety, packing, and insider advice.',
 alternates: {
 canonical: '/world-cup-2026-host-cities-guide/monterrey-city-guide',
 },
 openGraph: {
 title: 'Monterrey World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Everything you need for World Cup 2026 in Monterrey: stadium overview, safe hotel areas, Metrorrey routes, matchday plan, and local secrets.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/monterrey-city-guide',
 siteName: 'Stadiumport',
 locale: 'en_US',
 type: 'article',
 images: [
 {
 url: '/images/cities/monterrey-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'Monterrey World Cup 2026 Guide',
 },
 ],
 },
 keywords: ['Monterrey World Cup 2026', 'Estadio BBVA', 'Metrorrey', 'San Pedro hotels', 'Centro Monterrey hotels', 'Monterrey airport transfer', 'Monterrey travel tips', 'World Cup tickets Monterrey', 'Parque Fundidora', 'Monterrey fan zones'],
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function Page() {
  const jsonLd = generateArticleSchema('monterrey-city-guide', '/world-cup-2026-host-cities-guide/monterrey-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Monterrey Guide', item: '/world-cup-2026-host-cities-guide/monterrey-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Is tap water safe in Monterrey?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Monterrey has some of the best water treatment in Mexico. Locals drink it. However, as a traveler, it is safer to stick to bottled water to avoid any stomach issues.'
 }
 },
 {
 '@type': 'Question',
 name: 'How far is the stadium from San Pedro?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'About 25-35 minutes by car without traffic. On match days, allow 90 minutes. It is on the other side of the city.'
 }
 },
 {
 '@type': 'Question',
 name: 'Can I use US Dollars?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'In San Pedro hotels, yes. But the exchange rate will be bad. Always use Pesos (MXN) for best value.'
 }
 },
 {
 '@type': 'Question',
 name: 'Is Monterrey safe at night?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'San Pedro and Barrio Antiguo are safe at night. Just use common sense and take Ubers instead of walking long distances in empty areas.'
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




