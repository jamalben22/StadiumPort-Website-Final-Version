import type { Metadata } from 'next';
import ConnectivityClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';

export const metadata: Metadata = {
  title: 'Staying Connected: SIM Cards & Emergency Comms 2026',
  description: 'Expert guide to World Cup 2026 connectivity. Compare SIM cards, eSIMs, and roaming plans for USA, Canada, and Mexico. Plus, essential emergency communication protocols.',
  keywords: [
    'World Cup 2026 SIM cards',
    'staying connected World Cup',
    'mobile connectivity 2026',
    'emergency communications World Cup',
    'eSIM World Cup',
    'international roaming 2026',
    'North America SIM cards',
    'World Cup phone plans',
    'portable wifi World Cup',
    'emergency numbers USA Canada Mexico'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-connectivity-sim-cards-emergency-communications',
  },
  openGraph: {
    title: 'Staying Connected: SIM Cards & Emergency Comms 2026',
    description: 'Expert guide to World Cup 2026 connectivity. Compare SIM cards, eSIMs, and roaming plans for USA, Canada, and Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-connectivity-sim-cards-emergency-communications',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/Staying Connected SIM Cards & Emergency Comms.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Connectivity Essentials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staying Connected: SIM Cards & Emergency Comms 2026',
    description: 'Expert guide to World Cup 2026 connectivity. Compare SIM cards, eSIMs, and roaming plans for USA, Canada, and Mexico.',
    images: ['/images/safety-guide/Staying Connected SIM Cards & Emergency Comms.webp'],
  },
};

export default function ConnectivityPage() {
  const articleSchema = generateArticleSchema(
    'world-cup-2026-connectivity-sim-cards-emergency-communications',
    '/world-cup-2026-connectivity-sim-cards-emergency-communications'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/world-cup-2026-safety-guide' },
    { name: 'Staying Connected', item: '/world-cup-2026-connectivity-sim-cards-emergency-communications' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Do I need a different SIM card for USA, Canada, and Mexico?",
      answer: "Not necessarily. Many 'North America' regional plans (especially eSIMs) cover all three countries. However, if you buy a local SIM in one country, it may charge roaming fees in the others unless specified."
    },
    {
      question: "Is public WiFi safe to use during the World Cup?",
      answer: "Only if you use a VPN. Public WiFi in stadiums and airports is a prime target for hackers. Never access banking apps on public WiFi without encryption."
    },
    {
      question: "What is the emergency number in Mexico?",
      answer: "911 works in Mexico, just like in the USA and Canada. You can also use 089 for anonymous tips, but 911 is the primary number for police, fire, and ambulance."
    },
    {
      question: "Will my iPhone work in North America?",
      answer: "Most modern iPhones (iPhone 6 and newer) are 'world phones' and will work. However, you must ensure your phone is 'Carrier Unlocked' before you leave home to use a foreign SIM."
    },
    {
      question: "Can I buy a SIM card at the airport?",
      answer: "Yes, but you will pay a premium (often 2-3x the street price). It is often cheaper and easier to buy an eSIM online before you travel or visit a carrier store in the city."
    },
    {
      question: "Does WhatsApp work for free?",
      answer: "WhatsApp uses data or WiFi. It is free to use over WiFi. If you are on cellular data, it consumes from your data allowance, but it does not charge per-minute calling fees like traditional phone lines."
    },
    {
      question: "How much mobile data do I need for a 2-week trip?",
      answer: "Plan for 5GB-10GB per week if you are using maps, social media, and uploading videos. Use WiFi for large downloads to save data."
    },
    {
      question: "Can I keep my home number while using a local SIM?",
      answer: "Yes, if you use a Dual SIM phone or an eSIM for data. You can keep your physical home SIM active for calls/texts (roaming charges may apply) and use the eSIM for local data."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ConnectivityClientPage />
    </>
  );
}

