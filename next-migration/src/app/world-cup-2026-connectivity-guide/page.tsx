import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Connectivity Guide: Phone Plans, SIM Cards & WiFi',
  description: 'The ultimate connectivity guide for World Cup 2026. Compare eSIMs, local SIM cards, and roaming plans for USA, Canada & Mexico. Avoid roaming fees.',
  alternates: {
    canonical: '/world-cup-2026-connectivity-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Connectivity Guide: Phone Plans, SIM Cards & WiFi',
    description: 'The ultimate connectivity guide for World Cup 2026. Compare eSIMs, local SIM cards, and roaming plans for USA, Canada & Mexico. Avoid roaming fees.',
    url: 'https://stadiumport.com/world-cup-2026-connectivity-guide',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/connectivity-guide-cover.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Connectivity Guide',
      },
    ],
  },
  keywords: ['World Cup 2026 eSIM', 'World Cup 2026 SIM card', 'World Cup 2026 phone plans', 'roaming in USA Canada Mexico', 'best eSIM for World Cup', 'portable wifi World Cup 2026'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('world-cup-2026-connectivity-guide', '/world-cup-2026-connectivity-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Travel Tips', item: '/travel-tips' },
    { name: 'Connectivity Guide', item: '/world-cup-2026-connectivity-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best way to get data for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most travelers, an eSIM is the best option. It offers affordable data, instant activation, and allows you to keep your home number for calls. Providers like Airalo and Holafly offer plans covering USA, Canada, and Mexico.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will my phone work in USA, Canada, and Mexico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if your phone is unlocked. Most modern smartphones work on the frequency bands used in North America. Check with your carrier to ensure your device is unlocked before traveling.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I buy a SIM card at the airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can buy SIM cards at major airports in USA, Canada, and Mexico. However, airport prices are often higher than in city stores. It is recommended to buy an eSIM in advance or visit a local carrier store for better deals.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is public WiFi safe to use during the World Cup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Public WiFi in stadiums, hotels, and cafes is generally available but can be insecure. It is highly recommended to use a VPN to protect your personal data when connecting to public networks.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much data do I need for a 2-week trip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For moderate use (maps, social media, messaging), 3-5GB per week is usually sufficient. Heavy users (streaming, frequent navigation) may need 8-10GB+ per week. Unlimited data plans are available from some eSIM providers.'
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
