
import { useEffect } from 'react';

interface SchemaOrgProps {
  schema: object;
}

export function SchemaOrg({ schema }: SchemaOrgProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
}

// Common schema generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "StadiumPort",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": import.meta.env.VITE_SITE_URL || "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "StadiumPort",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": import.meta.env.VITE_SITE_URL || "https://example.com",
  "logo": `${import.meta.env.VITE_SITE_URL || "https://example.com"}/logo.png`,
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
});

export const generateTravelGuideSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": title,
  "description": description,
  "url": url,
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  },
  "about": {
    "@type": "Event",
    "name": "FIFA World Cup 2026",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "location": {
      "@type": "Place",
      "name": "United States, Canada, Mexico"
    }
  }
});

export const generateCityGuideSchema = (cityName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": `${cityName} World Cup 2026 Travel Guide`,
  "description": description,
  "url": url,
  "about": {
    "@type": "City",
    "name": cityName
  },
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  }
});

export const generateStadiumSchema = (stadiumName: string, cityName: string, capacity: number, description: string) => ({
  "@context": "https://schema.org",
  "@type": "StadiumOrArena",
  "name": stadiumName,
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityName
  },
  "maximumAttendeeCapacity": capacity,
  "event": {
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Image metadata generator for JSON-LD
export const generateImageObjectSchema = (
  url: string,
  options?: { width?: number; height?: number; caption?: string; description?: string }
) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": (import.meta.env.VITE_SITE_URL || "https://example.com") + url,
  "contentUrl": (import.meta.env.VITE_SITE_URL || "https://example.com") + url,
  ...(options?.width ? { width: options.width } : {}),
  ...(options?.height ? { height: options.height } : {}),
  ...(options?.caption ? { caption: options.caption } : {}),
  ...(options?.description ? { description: options.description } : {}),
});
