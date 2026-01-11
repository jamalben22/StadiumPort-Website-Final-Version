import { getContentMeta } from '@/data/content-registry';

export const getSiteUrl = (path = '') => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stadiumport.com";
  // Ensure no double slashes if path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return path ? `${baseUrl}${cleanPath}` : baseUrl;
};

export const generateArticleSchema = (slug: string, urlPath: string) => {
  const meta = getContentMeta(slug);
  const url = getSiteUrl(urlPath);
  
  if (!meta) {
    // Fallback for pages not in registry
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "stadiumport Guide",
      "url": url,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "stadiumport Team",
        "url": getSiteUrl()
      },
      "publisher": {
        "@type": "Organization",
        "name": "stadiumport",
        "logo": {
          "@type": "ImageObject",
          "url": getSiteUrl('/images/Logos/favicon/android-chrome-512x512.png')
        }
      }
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
      "name": meta.author || "stadiumport Team",
      "url": getSiteUrl()
    },
    "publisher": {
      "@type": "Organization",
      "name": "stadiumport",
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

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "stadiumport",
  "alternateName": ["stadiumport", "World Cup 2026 Travel Guide"],
  "description": "The ultimate resource for World Cup 2026. Expert travel guides, stadium info, and planning for USA, Mexico, and Canada.",
  "url": getSiteUrl(),
  "publisher": {
    "@type": "Organization",
    "name": "stadiumport",
    "url": getSiteUrl()
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "stadiumport",
  "alternateName": ["stadiumport", "stadiumport World Cup Guide"],
  "url": getSiteUrl(),
  "logo": {
    "@type": "ImageObject",
    "url": `${getSiteUrl()}/images/Logos/favicon/android-chrome-512x512.png`,
    "width": 512,
    "height": 512,
    "caption": "stadiumport Logo"
  },
  "image": `${getSiteUrl()}/images/Logos/favicon/android-chrome-512x512.png`,
  "description": "The definitive travel guide for the 2026 FIFA World Cup. We provide expert insights, stadium guides, and comprehensive travel planning resources for fans visiting the USA, Mexico, and Canada.",
  "foundingDate": "2023",
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport",
    "https://instagram.com/stadiumport",
    "https://www.linkedin.com/company/stadiumport",
    "https://www.youtube.com/@stadiumport"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "hello@stadiumport.com"
  }
});

export const generateSiteNavigationElementSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": [
    "Groups",
    "Host Cities",
    "Stadiums",
    "Draw Hub",
    "Predictor"
  ],
  "url": [
    `${getSiteUrl()}/world-cup-2026-groups`,
    `${getSiteUrl()}/world-cup-2026-host-cities`,
    `${getSiteUrl()}/world-cup-2026-stadiums`,
    `${getSiteUrl()}/world-cup-2026-draw-travel-hub`,
    `${getSiteUrl()}/world-cup-2026-prediction-game`
  ]
});

// Event Schema
export const generateEventSchema = (event: {
  name: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string; country?: string } | { name: string; address: string; country?: string }[];
  image: string;
  description: string;
  performer?: any;
  offers?: any;
}) => {
  // Handle multiple locations or single location
  const locationSchema = Array.isArray(event.location) 
    ? event.location.map(loc => ({
        "@type": "Place",
        "name": loc.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": loc.address,
          "addressCountry": loc.country || "US"
        }
      }))
    : {
        "@type": "Place",
        "name": event.location.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": event.location.address,
          "addressCountry": event.location.country || "US"
        }
      };

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": event.name,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": locationSchema,
    "image": [getSiteUrl(event.image)],
    "description": event.description,
    "organizer": {
      "@type": "Organization",
      "name": "FIFA",
      "url": "https://www.fifa.com"
    },
    "performer": event.performer || {
        "@type": "Organization",
        "name": "FIFA World Cup 2026 Qualified Teams"
    },
    "offers": event.offers || {
      "@type": "AggregateOffer",
      "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/tickets",
      "priceCurrency": "USD",
      "lowPrice": 60,
      "highPrice": 2030,
      "availability": "https://schema.org/PreOrder",
      "validFrom": "2025-09-01T10:00:00Z"
    }
  };
};

export const generateSportsEventSchema = generateEventSchema;

// Match List Schema
export const generateMatchListSchema = (groupName: string, matches: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${groupName} Matches`,
  "itemListElement": matches.map((match, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": generateEventSchema(match)
  }))
});

// Stadium Schema
export const generateStadiumSchema = (stadium: {
  name: string;
  description: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  capacity?: number;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "StadiumOrArena",
  "name": stadium.name,
  "description": stadium.description,
  "image": getSiteUrl(stadium.image),
  "url": stadium.url ? getSiteUrl(stadium.url) : getSiteUrl(),
  "address": {
    "@type": "PostalAddress",
    ...stadium.address
  },
  ...(stadium.geo ? {
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": stadium.geo.latitude,
      "longitude": stadium.geo.longitude
    }
  } : {}),
  ...(stadium.capacity ? { "maximumAttendeeCapacity": stadium.capacity } : {}),
  "isAccessibleForFree": false,
  "publicAccess": true
});

// City/Destination Schema
export const generateTouristDestinationSchema = (city: {
  name: string;
  description: string;
  image: string;
  url: string;
  country: string;
  address?: {
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  touristType?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": city.name,
  "description": city.description,
  "image": getSiteUrl(city.image),
  "url": getSiteUrl(city.url),
  "touristType": city.touristType || [
    "Sports Tourism",
    "Cultural Tourism"
  ],
  "geo": city.geo ? {
    "@type": "GeoCoordinates",
    "latitude": city.geo.latitude,
    "longitude": city.geo.longitude
  } : undefined,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": city.country,
    ...(city.address ? {
      "addressLocality": city.address.addressLocality,
      "addressRegion": city.address.addressRegion
    } : {})
  }
});

// Profile Schema (for Authors)
export const generateProfilePageSchema = (author: {
  name: string;
  description?: string;
  image?: string;
  url?: string;
  jobTitle?: string;
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": author.name,
    "description": author.description,
    "image": author.image ? getSiteUrl(author.image) : undefined,
    "url": author.url ? getSiteUrl(author.url) : undefined,
    "jobTitle": author.jobTitle || "Contributor",
    "sameAs": author.sameAs || []
  }
});

// Keep existing local business schema for backward compatibility if used
export const generateLocalBusinessSchema = (business: {
  name: string;
  image: string;
  telephone?: string;
  address: { street?: string; city: string; region: string; postalCode?: string; country: string };
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness", 
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
