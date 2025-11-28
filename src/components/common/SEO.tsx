import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  children?: React.ReactNode;
}

export function SEO({ 
  title, 
  description, 
  keywords = [],
  image, 
  url, 
  type = 'website',
  children
}: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const defaultImage = `${siteUrl}/images/Logos/favicon/OG%20Image%20with%20Logo%201200%20x%20630%20px.png`;
  
  // Construct full URLs
  const metaUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={metaImage} />
      
      {children}
    </Helmet>
  );
}
