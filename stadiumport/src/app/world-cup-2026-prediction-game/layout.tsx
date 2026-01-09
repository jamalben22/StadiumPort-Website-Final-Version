import React from 'react';
import { Teko, Rajdhani } from 'next/font/google';

const teko = Teko({ 
  subsets: ['latin'],
  variable: '--font-teko',
  display: 'swap',
});

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export default function GameRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${teko.variable} ${rajdhani.variable} w-full h-full`}>
      {children}
    </div>
  );
}
