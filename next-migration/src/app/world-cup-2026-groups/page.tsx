import React from 'react';
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'World Cup 2026 Groups & Schedule | Stadiumport',
 description: 'Official guide to World Cup 2026 groups. Track all 48 teams, match fixtures, and venues across the USA, Mexico, and Canada. The complete tournament breakdown.',
 keywords: 'Stadiumport, World Cup 2026 groups, FIFA World Cup 2026 schedule, 48 teams format, group draw results, USA Mexico Canada 2026',
 alternates: {
 canonical: 'https://stadiumport.com/world-cup-2026-groups',
 },
 openGraph: {
 title: 'World Cup 2026 Groups & Schedule | Stadiumport',
 description: 'Official guide to World Cup 2026 groups. Track all 48 teams, match fixtures, and venues across the USA, Mexico, and Canada.',
 url: 'https://stadiumport.com/world-cup-2026-groups',
 type: 'article',
 images: [
 {
 url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
 width: 1200,
 height: 630,
 alt: 'World Cup 2026 Groups',
 },
 ],
 },
};

export default function Page() {
 return <ClientPage />;
}




