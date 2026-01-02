import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Solo Travel Safety Guide: Attending World Cup 2026 Alone',
  description: 'The ultimate guide for solo travelers attending World Cup 2026. Safety tips, meeting other fans, accommodation strategies, and navigating host cities alone.',
  alternates: {
    canonical: '/world-cup-2026-solo-travel-safety-guide',
  },
  openGraph: {
    title: 'Solo Travel Safety Guide: Attending World Cup 2026 Alone',
    description: 'Expert advice for solo fans at World Cup 2026: Safety protocols, social hubs, budget tips, and how to make the most of your solo adventure in USA, Mexico, and Canada.',
    url: 'https://stadiumport.com/world-cup-2026-solo-travel-safety-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_of_a_solo_traveler_at_a_World_Cup_2026_host_city.webp',
        width: 1200,
        height: 630,
        alt: 'Solo Travel Safety Guide World Cup 2026',
      },
    ],
  },
  keywords: ['Solo travel World Cup 2026', 'World Cup safety tips', 'Traveling alone to World Cup', 'Solo fan guide', 'Host city safety', 'Meeting fans World Cup', 'Solo accommodation', 'Transport safety'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('world-cup-2026-solo-travel-safety-guide', '/world-cup-2026-solo-travel-safety-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/safety-guide' },
    { name: 'Solo Travel Safety', item: '/world-cup-2026-solo-travel-safety-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it safe to travel alone to the World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, thousands of fans travel solo. The host cities in USA, Canada, and Mexico are preparing extensive security measures. By following standard safety precautions and staying in fan-friendly zones, solo travel is safe and rewarding.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I meet other fans while traveling solo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Attend official FIFA Fan Festivals, join supporter groups on social media before you go, stay in hostels or fan-designated hotels, and participate in organized pre-match meetups.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where should I stay as a solo traveler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose accommodation with high ratings and good reviews from other solo travelers. Hostels are great for socializing, while established hotel chains offer consistent security. Avoid isolated rentals.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the transport options for solo fans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stick to official public transportation and authorized rideshare services. Avoid unmarked taxis. Public transit is often filled with other fans on match days, making it safer.'
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
