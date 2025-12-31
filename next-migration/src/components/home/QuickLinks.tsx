"use client";

import Link from 'next/link';

const hostCities = [
  { name: "Atlanta", link: "/world-cup-2026-host-cities-guide/atlanta-city-guide" },
  { name: "Boston", link: "/world-cup-2026-host-cities-guide/boston-city-guide" },
  { name: "Dallas", link: "/world-cup-2026-host-cities-guide/dallas-city-guide" },
  { name: "Guadalajara", link: "/world-cup-2026-host-cities-guide/guadalajara-city-guide" },
  { name: "Houston", link: "/world-cup-2026-host-cities-guide/houston-city-guide" },
  { name: "Kansas City", link: "/world-cup-2026-host-cities-guide/kansas-city-city-guide" },
  { name: "Los Angeles", link: "/world-cup-2026-host-cities-guide/los-angeles-city-guide" },
  { name: "Mexico City", link: "/world-cup-2026-host-cities-guide/mexico-city-city-guide" },
  { name: "Miami", link: "/world-cup-2026-host-cities-guide/miami-city-guide" },
  { name: "Monterrey", link: "/world-cup-2026-host-cities-guide/monterrey-city-guide" },
  { name: "New York/NJ", link: "/world-cup-2026-host-cities-guide/new-york-city-guide" },
  { name: "Philadelphia", link: "/world-cup-2026-host-cities-guide/philadelphia-city-guide" },
  { name: "San Francisco", link: "/world-cup-2026-host-cities-guide/san-francisco-city-guide" },
  { name: "Seattle", link: "/world-cup-2026-host-cities-guide/seattle-city-guide" },
  { name: "Toronto", link: "/world-cup-2026-host-cities-guide/toronto-city-guide" },
  { name: "Vancouver", link: "/world-cup-2026-host-cities-guide/vancouver-city-guide" }
];

export const QuickLinks = () => {
  return (
    <section className="py-16 bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8 text-center">
          Direct Access to All 16 Host Cities
        </h3>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          {hostCities.map((city) => (
            <Link 
              key={city.name}
              href={city.link}
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
