import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'World Cup 2026 Emergency Contacts & Resources Guide | StadiumPort',
  description: 'Essential World Cup 2026 emergency contacts for USA, Canada & Mexico. Access police, medical, embassy info & safety resources. Stay safe!',
  keywords: [
    'World Cup 2026 emergency contacts',
    'World Cup 2026 safety guide',
    'emergency numbers USA Canada Mexico',
    'World Cup 2026 medical help',
    'embassy contacts World Cup 2026',
    'travel safety World Cup 2026',
    'tourist police Mexico World Cup',
    '911 USA Canada Mexico'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-emergency-contacts-resources',
  },
  openGraph: {
    title: 'World Cup 2026 Emergency Contacts & Resources Guide | StadiumPort',
    description: 'Essential World Cup 2026 emergency contacts for USA, Canada & Mexico. Access police, medical, embassy info & safety resources. Stay safe!',
    url: 'https://stadiumport.com/world-cup-2026-emergency-contacts-resources',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_of_essential_emergency_resources_for_World_Cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Emergency Contacts Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Emergency Contacts & Resources Guide | StadiumPort',
    description: 'Essential World Cup 2026 emergency contacts for USA, Canada & Mexico. Access police, medical, embassy info & safety resources.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_of_essential_emergency_resources_for_World_Cup_2026.webp'],
  }
};

export default function Page() {
  // JSON-LD for Breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://stadiumport.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Safety Guide",
        "item": "https://stadiumport.com/safety-guide"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Emergency Contacts",
        "item": "https://stadiumport.com/world-cup-2026-emergency-contacts-resources"
      }
    ]
  };

  // JSON-LD for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "World Cup 2026 Emergency Contacts & Resources Guide",
    "description": "Comprehensive guide to emergency numbers, medical resources, and safety tips for World Cup 2026 in USA, Canada, and Mexico.",
    "author": {
      "@type": "Organization",
      "name": "StadiumPort"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StadiumPort",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stadiumport.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2026-01-01"
  };

  // JSON-LD for FAQs
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the emergency number for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The universal emergency number is 911 for the USA, Canada, and Mexico. However, Mexico also has specific tourist assistance numbers like 078 (Green Angels)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need travel insurance for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, comprehensive travel insurance is highly recommended, especially for the USA where healthcare costs are extremely high. Ensure your policy covers sports events and medical evacuation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I contact my embassy during the World Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most embassies are located in capital cities (Washington D.C., Ottawa, Mexico City) but have consulates in major host cities. We list key consulate contacts in our guide."
        }
      },
      {
        "@type": "Question",
        "name": "Is healthcare free for tourists in USA, Canada, or Mexico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Healthcare is not free for tourists in any of the host countries. In the USA, it is particularly expensive. Canada and Mexico also charge foreigners for treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I lose my passport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Report the loss to local police immediately to get a report number, then contact your country's nearest embassy or consulate to apply for an emergency travel document."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientPage />
    </>
  );
}
