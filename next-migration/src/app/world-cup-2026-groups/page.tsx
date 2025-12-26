import React from 'react';
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule',
 description: 'Complete guide to the 2026 FIFA World Cup groups. Track all 48 teams across Groups A-L, view match fixtures, and explore host cities in USA, Mexico, and Canada.',
 keywords: 'World Cup 2026 groups, FIFA World Cup 2026 schedule, 48 teams format, group draw results, USA Mexico Canada 2026, match fixtures, Group A teams, Group L teams',
 alternates: {
 canonical: 'https://stadiumport.com/world-cup-2026-groups',
 },
 openGraph: {
 title: 'FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule',
 description: 'See the full 48-team breakdown for the 2026 World Cup. Detailed analysis of Groups A-L, team guides, and match schedules for the biggest tournament in history.',
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




