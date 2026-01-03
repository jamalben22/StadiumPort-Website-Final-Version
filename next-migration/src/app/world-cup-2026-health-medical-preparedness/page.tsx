import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'World Cup 2026 Health & Medical Preparedness: Stay Safe & Healthy',
  description: 'Complete health guide for World Cup 2026. Travel insurance requirements, vaccinations, prescription rules, and emergency medical contacts for USA, Canada, and Mexico.',
  keywords: [
    'World Cup 2026 travel insurance',
    'World Cup 2026 vaccinations',
    'traveling with medication to USA Mexico Canada',
    'Mexico City altitude sickness World Cup',
    'World Cup 2026 emergency numbers',
    'travel health safety World Cup',
    'medical preparation World Cup 2026',
    'pharmacy access World Cup host cities'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-health-medical-preparedness',
  },
  openGraph: {
    title: 'World Cup 2026 Health & Medical Preparedness: Stay Safe & Healthy',
    description: 'Complete health guide for World Cup 2026. Travel insurance requirements, vaccinations, prescription rules, and emergency medical contacts for USA, Canada, and Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-health-medical-preparedness',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_photo_showing_a_well-prepared_traveler_organizing_a_travel_medical_kit_for_World_Cup_2.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Travel Health Preparedness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Health & Medical Preparedness: Stay Safe & Healthy',
    description: 'Complete health guide for World Cup 2026. Travel insurance requirements, vaccinations, prescription rules, and emergency medical contacts for USA, Canada, and Mexico.',
    images: ['/images/safety-guide/A_realistic_photo_showing_a_well-prepared_traveler_organizing_a_travel_medical_kit_for_World_Cup_2.webp'],
  },
};

export default function HealthMedicalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'World Cup 2026 Health & Medical Preparedness: Stay Safe & Healthy',
    description: 'Complete health guide for World Cup 2026. Travel insurance requirements, vaccinations, prescription rules, and emergency medical contacts for USA, Canada, and Mexico.',
    author: {
      '@type': 'Organization',
      name: 'Stadiumport',
      url: 'https://stadiumport.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stadiumport',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stadiumport.com/logo.png'
      }
    },
    datePublished: '2024-10-25',
    dateModified: '2025-12-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://stadiumport.com/world-cup-2026-health-medical-preparedness'
    },
    image: '/images/safety-guide/A_realistic_photo_showing_a_well-prepared_traveler_organizing_a_travel_medical_kit_for_World_Cup_2.webp'
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://stadiumport.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Safety Guide',
        item: 'https://stadiumport.com/safety-guide'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Health & Medical Guide',
        item: 'https://stadiumport.com/world-cup-2026-health-medical-preparedness'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need travel insurance for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. Healthcare in the USA is extremely expensive. A single ER visit can cost thousands of dollars. Ensure your policy covers at least $50,000 in medical expenses and $100,000 for emergency evacuation.'
        }
      },
      {
        '@type': 'Question',
        name: 'What vaccinations do I need for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ensure routine vaccines (MMR, Tdap, Flu, COVID-19) are up to date. Hepatitis A and Typhoid are highly recommended for travelers visiting Mexico due to food and water safety risks.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I refill prescriptions in the USA, Canada, or Mexico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is very difficult to refill foreign prescriptions. You should bring enough medication for your entire trip plus an extra 7-10 day supply. In Mexico, many medications are available over-the-counter, but quality can vary.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is tap water safe to drink in the host countries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tap water is safe in the USA and Canada. In Mexico, tap water is NOT safe to drink. Use sealed bottled water for drinking and brushing your teeth.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I handle altitude sickness in Mexico City?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mexico City is at 7,350 ft. Stay hydrated, avoid alcohol on your first day, eat light meals, and rest. If symptoms persist, seek medical attention.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ClientPage />
    </>
  );
}
