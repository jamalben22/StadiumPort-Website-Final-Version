import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Contest Privacy Policy – Stadiumport',
 description: 'Privacy policy for the Stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection.',
 alternates: {
 canonical: '/world-cup-2026-prediction-contest-privacy',
 },
};

export default function ContestPrivacyPage() {
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Contest Privacy Policy",
 "url": "https://stadiumport.com/world-cup-2026-prediction-contest-privacy",
 "description": "Privacy policy for the Stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection."
 };

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
 "name": "Contest Privacy",
 "item": "https://stadiumport.com/world-cup-2026-prediction-contest-privacy"
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
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
 />
 <ClientPage />
 </>
 );
}




