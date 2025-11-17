import React from 'react';

interface FAQPageSchemaProps {
  title: string;
  description: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQPageSchema({ title, description, faqs }: FAQPageSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title,
    "description": description,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}