import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateFAQSchema, generateLocalBusinessSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: 'Monterrey World Cup 2026 Guide: Estadio BBVA & Travel Tips',
  description: 'Monterrey World Cup 2026 guide: where to stay, Estadio BBVA matchday plan, neighborhoods, transport hacks, budgets, safety, food, and itineraries.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-monterrey-guide',
  },
  openGraph: {
    title: 'Monterrey World Cup 2026 Guide: Estadio BBVA & Travel Tips',
    description: 'Monterrey World Cup 2026 guide: where to stay, Estadio BBVA matchday plan, neighborhoods, transport hacks, budgets, safety, food, and itineraries.',
    url: 'https://stadiumport.com/world-cup-2026-monterrey-guide',
    siteName: 'stadiumport',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Monterrey World Cup 2026 Guide - Estadio BBVA & Travel',
    description: 'Monterrey World Cup 2026 guide: where to stay, Estadio BBVA matchday plan, neighborhoods, transport hacks, budgets, safety, food, and itineraries.',
    images: ['/images/cities/monterrey-world-cup-2026.webp'],
  },
  keywords: [
    'Monterrey World Cup 2026 guide',
    'Monterrey World Cup 2026 travel guide',
    'Estadio BBVA World Cup 2026',
    'Monterrey stadium World Cup 2026',
    'Guadalupe Nuevo Leon stadium',
    'Metrorrey Line 1 Exposición',
    'San Pedro Garza Garcia hotels World Cup',
    'Barrio Antiguo nightlife',
    'Centro Monterrey hotels',
    'Monterrey airport transfer MTY',
    'Monterrey safety tips for tourists',
    'Monterrey itinerary World Cup 2026',
    'Monterrey food guide cabrito',
    'Monterrey fan zones watch parties',
    'Mexico World Cup 2026 host city Monterrey',
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('monterrey-city-guide', '/world-cup-2026-monterrey-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Monterrey Guide', item: '/world-cup-2026-monterrey-guide' }
  ]);

  const faqLd = generateFAQSchema([
    {
      question: 'Where is Estadio BBVA located?',
      answer: 'Estadio BBVA is in Guadalupe (Greater Monterrey), Nuevo León, Mexico. The official stadium address is Av. Pablo Livas 2011, Col. La Pastora, C.P. 67140.'
    },
    {
      question: 'How do I get to Estadio BBVA by public transport?',
      answer: 'Use Metrorrey Line 1 toward Exposición (Guadalupe). From there, follow the signed pedestrian routes and event guidance to the stadium area.'
    },
    {
      question: 'How many World Cup 2026 matches does Monterrey host?',
      answer: 'Monterrey hosts 4 matches at Estadio BBVA: 3 group-stage matches and 1 Round of 32 match.'
    },
    {
      question: 'What’s the best area to stay in Monterrey for World Cup 2026?',
      answer: 'For first-timers, San Pedro Garza García is the easiest base for comfort, dining, and safety. For a more local, walkable vibe, stay around Centro and Barrio Antiguo and lean on Metrorrey + rideshare for match days.'
    },
    {
      question: 'Is Monterrey safe for tourists?',
      answer: 'Most visitors stick to San Pedro, Valle Oriente, Centro (Macroplaza), Fundidora, and Barrio Antiguo and have a smooth trip. Use rideshare at night, avoid empty blocks, and keep valuables low-key.'
    },
    {
      question: 'What’s the weather like in Monterrey during June and July?',
      answer: 'Expect serious heat (often in the mid-30s °C / mid-90s °F) and bright sun, with the chance of evening storms. Plan shade, hydration, and a rain layer.'
    },
    {
      question: 'Do I need travel insurance for a World Cup trip to Mexico?',
      answer: 'If you’re traveling internationally, yes. Look for medical coverage, trip delay, and interruption—especially during peak travel weeks.'
    },
    {
      question: 'Can I use USD in Monterrey?',
      answer: 'Some tourist-facing businesses may accept USD, but you’ll get a weak exchange rate. Using pesos (MXN) and paying by card where possible is typically best value.'
    },
    {
      question: 'What’s the easiest airport-to-hotel option from Monterrey Airport (MTY)?',
      answer: 'Fastest is a pre-booked airport transfer or authorized taxi. Rideshare availability can vary by pickup zone and time, so have a backup plan.'
    },
    {
      question: 'Do I need a car in Monterrey?',
      answer: 'Not necessarily. Most visitors can do Monterrey with rideshare + Metrorrey, especially if they stay in San Pedro, Centro, or near Fundidora. Rent a car if you want day trips or full flexibility.'
    },
    {
      question: 'Where can I watch matches in Monterrey without tickets?',
      answer: 'During major events, Fundidora is a natural gathering zone. You’ll also find lively watch atmospheres in San Pedro and Barrio Antiguo bars—arrive early for big games.'
    },
    {
      question: 'How do I avoid rideshare surge pricing after the match?',
      answer: 'Don’t request immediately at full-time. Walk 10–20 minutes, grab water or a snack, then request from a less congested street.'
    },
    {
      question: 'What are the must-eat foods in Monterrey?',
      answer: 'Start with cabrito, machaca con huevo, tacos de trompo, and a proper carne asada night. It’s a proud food city—come hungry.'
    }
  ]);

  const eventLd = generateEventSchema({
    name: 'FIFA World Cup 2026 Matches in Monterrey',
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    location: {
      name: 'Estadio BBVA',
      address: 'Guadalupe, Nuevo León 67140',
      country: 'MX',
    },
    image: '/images/cities/monterrey-world-cup-2026.webp',
    description: 'Monterrey hosts 4 FIFA World Cup 2026 matches at Estadio BBVA in Guadalupe, Nuevo León: 3 group-stage matches and 1 Round of 32 match.'
  });

  const stadiumLd = generateLocalBusinessSchema({
    name: 'Estadio BBVA',
    image: '/images/cities/monterrey-world-cup-2026.webp',
    telephone: '+52 81 8127 1500',
    address: {
      street: 'Av. Pablo Livas 2011, Col. La Pastora',
      city: 'Guadalupe',
      region: 'NL',
      postalCode: '67140',
      country: 'MX',
    },
    geo: { latitude: 25.66917, longitude: -100.24444 },
    priceRange: '$$'
  });

  const city = HOST_CITIES.find(c => c.id === 'monterrey');
  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: 'https://stadiumport.com/world-cup-2026-monterrey-guide',
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
      "Adventure Seekers"
    ]
  }) : null;

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      {destinationLd && <JsonLd schema={destinationLd} />}
      <JsonLd schema={eventLd} />
      <JsonLd schema={stadiumLd} />
 <ClientPage />
 </>
 );
}





