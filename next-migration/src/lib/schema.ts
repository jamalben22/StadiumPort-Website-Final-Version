import { getContentMeta } from '@/data/content-registry';

export const getSiteUrl = (path = '') => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stadiumport.com";
  return path ? `${baseUrl}${path}` : baseUrl;
};

export const generateArticleSchema = (slug: string, urlPath: string) => {
  const meta = getContentMeta(slug);
  const url = getSiteUrl(urlPath);
  
  if (!meta) {
    console.warn(`Missing content meta for slug: ${slug}`);
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Stadiumport Guide",
      "url": url,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.description,
    "image": meta.image ? getSiteUrl(meta.image) : undefined,
    "author": {
      "@type": "Organization",
      "name": meta.author || "Stadiumport Team",
      "url": getSiteUrl()
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stadiumport",
      "logo": {
        "@type": "ImageObject",
        "url": getSiteUrl('/images/Logos/favicon/android-chrome-512x512.png'),
        "width": 512,
        "height": 512
      }
    },
    "datePublished": meta.publishedAt,
    "dateModified": meta.updatedAt,
    ...(meta.wordCount ? { "wordCount": meta.wordCount } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": getSiteUrl(item.item)
  }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Common schema generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stadiumport",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": getSiteUrl(),
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${getSiteUrl()}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stadiumport",
    "url": getSiteUrl()
  }
});

export const generateEventSchema = (event: {
  name: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string };
  image: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": event.name,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": event.location.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": event.location.address,
      "addressCountry": "US" // Dynamic based on city? For now US default or pass in
    }
  },
  "image": [getSiteUrl(event.image)],
  "description": event.description,
  "organizer": {
    "@type": "Organization",
    "name": "FIFA",
    "url": "https://www.fifa.com"
  }
});

export const generateLocalBusinessSchema = (business: {
  name: string;
  image: string;
  telephone?: string;
  address: { street?: string; city: string; region: string; postalCode?: string; country: string };
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // or SportsActivityLocation
  "name": business.name,
  "image": getSiteUrl(business.image),
  "@id": getSiteUrl(),
  "url": getSiteUrl(),
  "telephone": business.telephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.address.street,
    "addressLocality": business.address.city,
    "addressRegion": business.address.region,
    "postalCode": business.address.postalCode,
    "addressCountry": business.address.country
  },
  ...(business.geo ? {
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    }
  } : {}),
  "priceRange": business.priceRange || "$$"
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stadiumport",
  "alternateName": ["Stadiumport"],
  "url": getSiteUrl(),
  "logo": {
    "@type": "ImageObject",
    "url": `${getSiteUrl()}/images/Logos/favicon/android-chrome-512x512.png`,
    "width": 512,
    "height": 512,
    "caption": "Stadiumport Logo"
  },
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport",
    "https://instagram.com/stadiumport"
  ]
});

export const generateSportsEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "FIFA World Cup 2026",
  "description": "The 23rd FIFA World Cup, hosted jointly by Canada, Mexico, and the United States. Featuring 48 teams and 104 matches across 16 host cities.",
  "startDate": "2026-06-11",
  "endDate": "2026-07-19",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": [
    {
      "@type": "Place",
      "name": "United States",
      "address": { "@type": "PostalAddress", "addressCountry": "US" }
    },
    {
      "@type": "Place",
      "name": "Mexico",
      "address": { "@type": "PostalAddress", "addressCountry": "MX" }
    },
    {
      "@type": "Place",
      "name": "Canada",
      "address": { "@type": "PostalAddress", "addressCountry": "CA" }
    }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "FIFA",
    "url": "https://www.fifa.com"
  },
  "image": getSiteUrl('/images/hero/world-cup-2026-hero.webp'),
  "offers": {
    "@type": "Offer",
    "url": "https://www.fifa.com/tickets",
    "availability": "https://schema.org/PreOrder"
  }
});
