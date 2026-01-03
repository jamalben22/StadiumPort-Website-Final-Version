import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, Oswald, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/feature/Header";
import { Footer } from "@/components/feature/Footer";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

// Font configurations
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

import { constructMetadata } from "@/lib/seo";
import { Providers } from "./providers";
import { isEzoicEnabled } from "@/lib/ads";

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
        {/* Privacy Scripts (MUST LOAD FIRST) */}
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />

        {/* Ezoic Header Script */}
        {isEzoicEnabled && (
          <>
            <Script
              src="//www.ezojs.com/ezoic/sa.min.js"
              strategy="beforeInteractive"
            />
            <Script
              id="ezoic-init"
              strategy="beforeInteractive"
            >
              {`
                window.ezstandalone = window.ezstandalone || {};
                ezstandalone.cmd = ezstandalone.cmd || [];
              `}
            </Script>
          </>
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
        <SpeedInsights />
        <Analytics mode="production" />
      </body>
    </html>
  );
}

