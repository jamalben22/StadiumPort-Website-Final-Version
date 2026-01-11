import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: 'Houston World Cup 2026 Guide: NRG Stadium & Travel Tips',
  description: 'Complete Houston World Cup 2026 travel guide. NRG Stadium info, best hotels, METRORail transportation tips, fan zones & match schedule. Plan your trip.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-houston-guide',
  },
  openGraph: {
    title: 'Houston World Cup 2026 Guide: NRG Stadium & Travel Tips',
    description: 'Complete Houston World Cup 2026 travel guide. NRG Stadium info, best hotels, METRORail transportation tips, fan zones & match schedule. Plan your trip.',
    url: 'https://stadiumport.com/world-cup-2026-houston-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/houston-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Houston World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston World Cup 2026 Guide - NRG Stadium & Travel Info',
    description: 'Complete Houston World Cup 2026 travel guide. NRG Stadium info, best hotels, METRORail transportation tips, fan zones & match schedule. Plan your trip.',
    images: ['/images/cities/houston-world-cup-2026.webp'],
  },
  keywords: ['Houston World Cup 2026', 'NRG Stadium', 'METRORail', 'Downtown Houston hotels', 'Medical Center hotels', 'Houston airport transfer', 'Houston travel tips', 'World Cup tickets Houston', 'NASA Space Center', 'Houston dining'],
};

export default function Page() {
  const city = HOST_CITIES.find(c => c.id === 'houston');
  const jsonLd = generateArticleSchema('houston-city-guide', '/world-cup-2026-houston-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Houston Guide', item: '/world-cup-2026-houston-guide' }
  ]);

  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: 'https://stadiumport.com/world-cup-2026-houston-guide',
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
        name: 'Is Houston safe for tourists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, generally. The main tourist zones (Downtown, Galleria, Museum District) are safe. Use common sense, stay in groups at night, and be aware of your surroundings. The biggest danger is actually the heat.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a car in Houston for the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ideally, yes, if you want to explore the whole city. However, for the World Cup, if you stay Downtown or near the Medical Center, you can survive on the METRORail and Uber, saving you money on parking.'
        }
      },
      {
        '@type': 'Question',
        name: 'How far is the airport from NRG Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bush Intercontinental (IAH) is about 45-60 minutes north. Hobby (HOU) is closer, about 20-30 minutes southeast. Allow extra time; traffic can double these estimates.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I walk to NRG Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not really. It\'s surrounded by massive parking lots and highways. Walking from a nearby hotel is possible, but walking from Downtown is impossible (7 miles). Take the train.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the alcohol situation in Houston?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bars commonly serve until 2 AM where permitted. Beer and wine are sold in grocery stores, but liquor is sold in dedicated liquor stores (“package stores”), typically Mon–Sat 10am–9pm and closed Sundays.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is NRG Stadium air conditioned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, thankfully. NRG Stadium has a retractable roof and a powerful AC system. It will be a comfortable 72°F inside regardless of the temperature outside.'
        }
      }
    ]
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





