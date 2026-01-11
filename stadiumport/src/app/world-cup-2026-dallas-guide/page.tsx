
import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: 'Dallas World Cup 2026 Guide: Local Tips + Hotels',
  description: 'Dallas World Cup 2026 guide from a 20-year local: where to stay, match-day shuttles to AT&T Stadium, heat strategy, budgets, and FAQs.',
  keywords: [
    'Dallas World Cup 2026 guide',
    'Dallas World Cup 2026',
    'AT&T Stadium World Cup 2026',
    'Arlington World Cup 2026',
    'Dallas hotels near AT&T Stadium',
    'Arlington hotels near AT&T Stadium',
    'Uptown Dallas hotels',
    'Deep Ellum nightlife',
    'Bishop Arts District',
    'Fort Worth Stockyards',
    'DFW airport to downtown Dallas',
    'DART Orange Line DFW',
    'Dallas Love Field to downtown',
    'Dallas airport transfer',
    'Texas Live Arlington',
    'Dallas BBQ guide',
    'Dallas itinerary',
    'Dallas safety tips',
    'World Cup 2026 Dallas fan festival'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-dallas-guide',
  },
  openGraph: {
    title: 'Dallas World Cup 2026 Guide: Local Tips + Hotels',
    description: 'Dallas World Cup 2026 guide from a 20-year local: where to stay, match-day shuttles to AT&T Stadium, heat strategy, budgets, and FAQs.',
    url: 'https://stadiumport.com/world-cup-2026-dallas-guide',
    siteName: 'stadiumport',
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
    title: 'Dallas World Cup 2026 Guide: Local Tips + Hotels',
    description: 'Dallas World Cup 2026 guide from a 20-year local: where to stay, match-day shuttles to AT&T Stadium, heat strategy, budgets, and FAQs.',
    images: ['/images/cities/dallas-world-cup-2026.webp'],
  },
};

export default function Page() {
  const city = HOST_CITIES.find(c => c.id === 'dallas');
  
  const articleLd = generateArticleSchema('dallas-city-guide', '/world-cup-2026-dallas-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Dallas Guide', item: '/world-cup-2026-dallas-guide' }
  ]);

  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: 'https://stadiumport.com/world-cup-2026-dallas-guide',
    country: city.country,
    address: {
      addressLocality: city.name,
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
        name: 'Is AT&T Stadium in Dallas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The World Cup venue is AT&T Stadium in Arlington, Texas (between Dallas and Fort Worth). Plan match day like an excursion—there is no direct rail line to the stadium.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there public transport to AT&T Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no direct rail service to AT&T Stadium. Most fans use rideshare, driving + prepaid parking, or official event shuttles (when offered). Arlington On-Demand can connect you to CentrePort TRE Station.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is AT&T Stadium air-conditioned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The indoor environment is climate-controlled, and it can feel chilly compared to the heat outside—bring a light layer.'
        }
      },
      {
        '@type': 'Question',
        name: 'How hot is Dallas during the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'June and July are hot. Dallas/Fort Worth normal highs are about 91.5°F (June) and 95.6°F (July). Inside AT&T Stadium is air-conditioned, but the walk outside can be intense—hydrate and plan shade.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is the best place to stay for Dallas World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For nightlife and walkability: Uptown, Downtown, Deep Ellum, or Bishop Arts. For easiest match day access: Arlington entertainment district (book early). For a classic Texas vibe: Fort Worth (Stockyards / Near Southside).'
        }
      },
      {
        '@type': 'Question',
        name: 'Which airport should I fly into: DFW or Love Field?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DFW is the main international hub with the most flight options. Love Field (DAL) is smaller and closer to central Dallas. Choose based on price, landing time, and where you’re staying.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get from DFW to Downtown Dallas cheaply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the DART Orange Line from DFW Airport Station to Downtown (budget-friendly). If you’re hauling luggage late at night, rideshare is easier.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a rental car in Dallas for the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you’re staying in walkable Dallas neighborhoods and only doing a few match days, you can skip a car and use DART + rideshare + shuttles. If you’re exploring widely across the Metroplex (or traveling with family), a rental car is usually worth it.'
        }
      },
      {
        '@type': 'Question',
        name: 'How early should I arrive for a match at AT&T Stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plan to arrive hours early. Entry lines, security screening, and traffic around Arlington can take longer than you expect—especially for high-demand matches.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where should I watch matches in Dallas if I don’t have tickets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deep Ellum and Lower Greenville bars will be lively. For bigger crowds, look for official fan events and stadium-adjacent watch spots in Arlington.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleLd} />
      <JsonLd schema={breadcrumbLd} />
      {destinationLd && <JsonLd schema={destinationLd} />}
      <JsonLd schema={faqLd} />
      <ClientPage />
    </>
  );
}





