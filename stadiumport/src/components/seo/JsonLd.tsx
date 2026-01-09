import React from 'react';

interface JsonLdProps {
  schema: object;
  nonce?: string;
}

export function JsonLd({ schema, nonce }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
