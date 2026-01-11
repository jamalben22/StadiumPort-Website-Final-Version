import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: 'Philadelphia World Cup 2026 Guide (Local Game Plan)',
  description: 'Philadelphia World Cup 2026 guide from a local: Lincoln Financial Field match-day transit, neighborhoods, hotels, safety, weather, itineraries, budgets.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-philadelphia-guide',
  },
  openGraph: {
    title: 'Philadelphia World Cup 2026 Guide (Local Game Plan)',
    description: 'Philadelphia World Cup 2026 guide from a local: Lincoln Financial Field match-day transit, neighborhoods, hotels, safety, weather, itineraries, budgets.',
    url: 'https://stadiumport.com/world-cup-2026-philadelphia-guide',
    siteName: 'stadiumport',
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
    title: 'Philadelphia World Cup 2026 Guide (Local Game Plan)',
    description: 'Philadelphia World Cup 2026 guide from a local: Lincoln Financial Field match-day transit, neighborhoods, hotels, safety, weather, itineraries, budgets.',
    images: ['/images/cities/philadelphia-world-cup-2026.webp'],
  },
  keywords: [
    'Philadelphia World Cup 2026 guide',
    'Philadelphia World Cup 2026 travel guide',
    'Lincoln Financial Field World Cup 2026',
    'Lincoln Financial Field matchday',
    'SEPTA Broad Street Line to NRG Station',
    'Philadelphia Sports Complex',
    'PHL airport to Center City',
    'best area to stay in Philadelphia for World Cup',
    'Center City hotels World Cup 2026',
    'Old City hotels World Cup 2026',
    'Rittenhouse Square hotels',
    'Fishtown bars and restaurants',
    'East Passyunk dining',
    'Reading Terminal Market tips',
    'Philadelphia itinerary World Cup 2026',
    'Philadelphia fan zones watch parties',
    'Philadelphia safety tips for tourists',
    'Philadelphia weather June July',
    'World Cup tickets Philadelphia',
    'Philadelphia airport transfer',
  ],
};

export default function Page() {
  const city = HOST_CITIES.find(c => c.id === 'philadelphia');
  const jsonLd = generateArticleSchema('philadelphia-city-guide', '/world-cup-2026-philadelphia-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Philadelphia Guide', item: '/world-cup-2026-philadelphia-guide' }
  ]);

  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: 'https://stadiumport.com/world-cup-2026-philadelphia-guide',
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
      "World Cup Fans"
    ]
  }) : null;

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are World Cup 2026 matches played in Philadelphia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Matches are played at Lincoln Financial Field in South Philadelphia’s Sports Complex, a short walk from SEPTA’s NRG Station.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the easiest way to get to Lincoln Financial Field on match day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use SEPTA’s Broad Street Line (B) to NRG Station, then walk 5–10 minutes through the Sports Complex to the gates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get from Philadelphia International Airport (PHL) to Center City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Take the SEPTA Airport Line train to 30th Street, Suburban, or Jefferson Station in Center City. Trains typically run about every 30 minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get from PHL airport to the stadium (Lincoln Financial Field)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Take the SEPTA Airport Line to Center City (30th Street/Suburban/Jefferson), then transfer to the Broad Street Line southbound to NRG Station.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a car for Philadelphia during the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you stay in Center City or Old City, you can do most of the trip by foot and SEPTA. Driving to the Sports Complex adds traffic and parking costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the best neighborhood to stay in for World Cup 2026 in Philadelphia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Center City is the easiest all-around base for hotels, food, and a one-train ride to the stadium. Old City is great for history and walkability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How hot is Philadelphia in June and July?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expect warm to hot days with humidity and the chance of thunderstorms. Pack breathable layers, sunscreen, and a small poncho.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Philadelphia safe for World Cup visitors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tourist areas like Center City, Old City, the Museum Parkway, and the Sports Complex are generally busy and well-policed on event days. Use standard big-city awareness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I watch matches in Philadelphia without tickets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for official FIFA/city fan events, plus big-screen sports bars in Center City, Old City, and South Philly. Xfinity Live! is a popular option near the stadium.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the one local Philly food you should try between games?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A classic cheesesteak is the obvious answer, but the real local move is spending an hour at Reading Terminal Market and letting your appetite decide.',
        },
      },
    ],
  };

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      {destinationLd && <JsonLd schema={destinationLd} />}
      <ClientPage />
 </>
 );
}





