import React from 'react';
import { Metadata } from 'next';
import ClientContact from '../../components/contact/ClientContact';
import { JsonLd } from '../../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Contact – Stadiumport',
  description: 'Get in touch with Stadiumport for World Cup 2026 questions, corrections, partnerships, press/media, and general inquiries.',
  alternates: {
    canonical: 'https://stadiumport.com/contact',
  },
  openGraph: {
    title: 'Contact – Stadiumport',
    description: 'Get in touch with Stadiumport for World Cup 2026 questions, corrections, partnerships, press/media, and general inquiries.',
    url: 'https://stadiumport.com/contact',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact – Stadiumport',
    description: 'Get in touch with Stadiumport for World Cup 2026 questions, corrections, partnerships, press/media, and general inquiries.',
  },
};

export default function ContactPage() {
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: 'Home', item: '/' },
 { name: 'Contact', item: '/contact' }
 ]);

 const organizationSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Stadiumport',
 url: 'https://stadiumport.com',
 logo: 'https://stadiumport.com/logo.png',
 sameAs: [
 'https://twitter.com/stadiumport',
 'https://facebook.com/stadiumport',
 'https://instagram.com/stadiumport',
 ],
 contactPoint: {
 '@type': 'ContactPoint',
 email: 'contact@stadiumport.com',
 contactType: 'customer service'
 }
 };

 return (
 <>
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={organizationSchema} />
 <ClientContact />
 </>
 );
}





