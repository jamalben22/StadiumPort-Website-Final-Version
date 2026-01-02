'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const cities = [
  {
    name: 'New York/New Jersey',
    country: 'USA',
    image: '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp',
    info: 'Host of the Grand Final',
    link: '/world-cup-2026-host-cities-guide/new-york-city-guide',
  },
  {
    name: 'Los Angeles',
    country: 'USA',
    image: '/images/cities/los-angeles-world-cup-2026-1600.webp',
    info: 'Entertainment Capital',
    link: '/world-cup-2026-host-cities-guide/los-angeles-city-guide',
  },
  {
    name: 'Mexico City',
    country: 'Mexico',
    image: '/images/cities/mexico-city-world-cup-2026-1600.webp',
    info: 'Opening Match Host',
    link: '/world-cup-2026-host-cities-guide/mexico-city-city-guide',
  },
  {
    name: 'Toronto',
    country: 'Canada',
    image: '/images/cities/toronto-world-cup-2026-1600.webp',
    info: 'Canada’s Cultural Hub',
    link: '/world-cup-2026-host-cities-guide/toronto-city-guide',
  },
];

export const HostCitiesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#F5F5F7] dark:bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#01b47d]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
                16 Host Cities
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-bold tracking-tighter text-[#0A0A0A] dark:text-white mb-6"
            >
              The Stage is Set.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl"
            >
              From the Aztec Stadium to MetLife, explore the iconic venues hosting the world.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/world-cup-2026-host-cities-guide"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-sm font-medium text-[#0A0A0A] dark:text-white">View all cities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid/Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Link href={city.link} className="block group relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-gray-200 dark:bg-[#0A0A0A] animate-pulse" />
                
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  quality={95}
                  priority={index < 2}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#01b47d]" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                      {city.country}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {city.name}
                  </h3>
                  <p className="text-sm font-medium text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                    {city.info}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

