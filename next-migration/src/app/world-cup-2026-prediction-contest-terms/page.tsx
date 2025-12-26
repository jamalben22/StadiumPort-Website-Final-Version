import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Contest Terms & Conditions – Stadiumport',
 description: 'Official rules and terms for the Stadiumport World Cup 2026 Prediction Contest. Eligibility, prizes, scoring, and legal details.',
 alternates: {
 canonical: '/world-cup-2026-prediction-contest-terms',
 },
};

export default function ContestTermsPage() {
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Contest Terms & Conditions",
 "url": "https://stadiumport.com/world-cup-2026-prediction-contest-terms",
 "description": "Official rules and terms for the Stadiumport World Cup 2026 Prediction Contest. Eligibility, prizes, scoring, and legal details."
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
 "name": "Contest Terms",
 "item": "https://stadiumport.com/world-cup-2026-prediction-contest-terms"
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




