import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: "San Francisco Bay Area World Cup 2026 Guide",
  description: "San Francisco Bay Area World Cup 2026 guide: Levi’s Stadium match-day transport, where to stay (SF vs South Bay), local itineraries, budgets & safety.",
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-san-francisco-bay-area-guide',
  },
  openGraph: {
    title: "San Francisco Bay Area World Cup 2026 Guide",
    description: "San Francisco Bay Area World Cup 2026 guide: Levi’s Stadium match-day transport, where to stay, local itineraries, budgets & safety.",
    url: 'https://stadiumport.com/world-cup-2026-san-francisco-bay-area-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/san-francisco-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'San Francisco Bay Area World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Francisco Bay Area World Cup 2026 Guide',
    description: 'Match-day plan, neighborhoods, hotels, Caltrain/VTA hacks, budgets, safety, and local itineraries for Levi’s Stadium.',
    images: ['/images/cities/san-francisco-world-cup-2026.webp'],
  },
  keywords: [
    'San Francisco Bay Area World Cup 2026 guide',
    'San Francisco World Cup 2026',
    "Levi's Stadium World Cup 2026",
    'Santa Clara World Cup 2026',
    'San Jose World Cup 2026',
    'San Francisco hotels World Cup 2026',
    'Santa Clara hotels Levi’s Stadium',
    'Caltrain to Levi’s Stadium',
    'VTA Orange Line Levi’s Stadium',
    'BART SFO to downtown San Francisco',
    'San Francisco Bay Area Stadium World Cup',
    'where to stay for Levi’s Stadium',
    'World Cup 2026 match day itinerary',
    'San Francisco microclimates June July',
    'Bay Area fan zones World Cup 2026',
    'World Cup 2026 tickets San Francisco Bay Area',
    'Clipper Card travel tips',
    'San Francisco safety tips for tourists',
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('san-francisco-city-guide', '/world-cup-2026-san-francisco-bay-area-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'San Francisco Guide', item: '/world-cup-2026-san-francisco-bay-area-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup 2026 stadium for the Bay Area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Matches are played at Levi’s Stadium in Santa Clara (the “San Francisco Bay Area Stadium” during FIFA events), roughly 40–45 miles (64–72 km) south of San Francisco.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the easiest way to get from San Francisco to Levi’s Stadium?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take Caltrain from San Francisco (4th & King or 22nd St) to Mountain View, then transfer to VTA Light Rail (Orange Line) to Great America Station by the stadium.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car for World Cup 2026 in the Bay Area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Usually no. A car is inconvenient in San Francisco (parking and break-ins) and match-day traffic around Santa Clara is heavy. Transit + walking is the low-stress option.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in June and July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'San Francisco runs cool and breezy in summer, while Santa Clara is often warmer and sunnier. Bring layers for SF and sun protection for daytime matches.'
 }
 },
 {
 '@type': 'Question',
 name: 'Is it better to stay in San Francisco or the South Bay?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Stay in San Francisco for classic sightseeing and nightlife, but consider Santa Clara/San Jose or the Caltrain corridor (Palo Alto/Mountain View) for easier match days.'
 }
 },
 {
 '@type': 'Question',
 name: 'Can I bring a bag to the stadium?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Yes, but rules are strict: use a clear bag (up to 12” x 6” x 12”) or a small clutch. Arrive early for screening.'
 }
 },
 {
 '@type': 'Question',
 name: 'How many World Cup matches are in the San Francisco Bay Area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'FIFA’s published schedule assigns six matches to the San Francisco Bay Area Stadium (Levi’s Stadium): five group-stage games and one Round of 32 match.'
 }
 },
 {
 '@type': 'Question',
 name: 'What station is closest to Levi’s Stadium on match days?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'VTA Light Rail serves Great America Station on the north side of the stadium, commonly used for event arrivals and departures.'
 }
 }
 ]
 };

 const city = HOST_CITIES.find(c => c.id === 'san-francisco');
  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: 'https://stadiumport.com/world-cup-2026-san-francisco-bay-area-guide',
    country: city.country,
    address: {
      addressRegion: city.region,
      addressCountry: city.country
    },
    geo: {
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng
    },
    touristType: [
      "Sports Enthusiasts",
      "World Cup Fans",
      "Tech Tourists"
    ]
  }) : null;

  return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      {destinationLd && <JsonLd schema={destinationLd} />}
      <JsonLd schema={faqLd} />
      <ClientPage />
 </>
 );
}





