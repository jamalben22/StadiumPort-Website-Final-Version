"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
 return (
 <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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




