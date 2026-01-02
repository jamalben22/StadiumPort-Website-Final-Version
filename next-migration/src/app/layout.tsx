import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, Oswald, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/feature/Header";
import { Footer } from "@/components/feature/Footer";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";

// Font configurations
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

import { constructMetadata } from "@/lib/seo";
import { Providers } from "./providers";

export const metadata = constructMetadata({
  title: "Stadiumport | World Cup 2026 Travel Guide",
  description: "The definitive guide to World Cup 2026. Expert insights, stadium guides, and travel planning.",
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${oswald.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-background text-foreground transition-colors duration-300" suppressHydrationWarning>
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5399794848914855"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Providers>
          <JsonLd schema={generateOrganizationSchema()} />
          <JsonLd schema={generateWebsiteSchema()} />
          <WebVitalsReporter />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-slate-900 dark:text-white rounded-md">
            Skip to content
          </a>
          <Header />
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

