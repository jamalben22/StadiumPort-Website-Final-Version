"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
 return (
   // defaultTheme="system" enables auto-detection.
   // enableSystem={true} ensures it checks device preference.
   // If detection fails or is undefined, it falls back to the default "light" (since no class is applied and :root is light).
 <ThemeProvider 
    attribute="class" 
    defaultTheme="system" 
    enableSystem 
    themes={['light', 'dark']}
    disableTransitionOnChange
  >
   {children}
   <ProgressBar
      height="3px"
      color="#007AFF"
      options={{ showSpinner: false }}
      shallowRouting
    />
 </ThemeProvider>
 );
}





