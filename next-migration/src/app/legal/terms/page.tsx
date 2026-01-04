import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Terms of Service – stadiumport',
  description: 'Read stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers.',
  alternates: {
    canonical: 'https://stadiumport.com/legal/terms',
  },
  openGraph: {
    title: 'Terms of Service – stadiumport',
    description: 'Read stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers.',
    url: 'https://stadiumport.com/legal/terms',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service – stadiumport',
    description: 'Read stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers.',
  },
};

export default function TermsPage() {
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Terms of Service",
 "url": "https://stadiumport.com/legal/terms",
 "description": "Read stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers."
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
 "name": "Terms of Service",
 "item": "https://stadiumport.com/legal/terms"
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





