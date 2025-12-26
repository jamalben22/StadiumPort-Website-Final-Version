'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Globe, Shield, Map, Clock, CreditCard, Smartphone } from 'lucide-react';

const guides = [
  {
    title: "World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies",
    teaser: "A realistic look at what you'll spend—and how to save thousands without compromising the experience.",
    icon: CreditCard,
    link: "/coming-soon?title=World%20Cup%202026%20Budget%20Guide",
    image: "/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp"
  },
  {
    title: "Best Time to Book World Cup 2026: Tickets, Flights & Hotels",
    teaser: "Timing is everything. Learn the exact booking windows to secure the best rates and availability.",
    icon: Clock,
    link: "/coming-soon?title=Booking%20Timeline%20Guide",
    image: "/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Host City Guide: Which Cities Should You Visit?",
    teaser: "16 cities, infinite vibes. Find the perfect host cities that match your travel style and budget.",
    icon: Map,
    link: "/world-cup-2026-host-cities",
    image: "/images/travel-tips/World Cup 2026 Host City Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Accommodation Guide: Where to Stay for Every Budget",
    teaser: "From luxury hotels to strategic hostels. How to find a bed when millions descend on North America.",
    icon: Map,
    link: "/coming-soon?title=Accommodation%20Guide",
    image: "/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Flight Booking Guide: Routes, Airlines & Strategies",
    teaser: "Master the art of multi-city travel. Hub strategies, open-jaw tickets, and regional carriers explained.",
    icon: Globe,
    link: "/coming-soon?title=Flight%20Booking%20Guide",
    image: "/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Itinerary Planning: 1, 2, or 3 Week Sample Itineraries",
    teaser: "Don't waste time in transit. Optimized routes for seeing the most football with the least stress.",
    icon: Map,
    link: "/coming-soon?title=Itinerary%20Planning%20Guide",
    image: "/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Packing Guide: Ultimate Checklist for All Weather",
    teaser: "From Mexican heat to Canadian cool. What to bring for a continent-spanning adventure.",
    icon: Shield,
    link: "/coming-soon?title=Packing%20Guide",
    image: "/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Match Selection Strategy: Which Games to Attend",
    teaser: "Group stage value vs. knockout drama. How to build a match schedule that delivers unforgettable moments.",
    icon: ArrowRight,
    link: "/coming-soon?title=Match%20Selection%20Strategy",
    image: "/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp"
  },
  {
    title: "World Cup 2026 Food & Dining Guide: Eating Well on Any Budget",
    teaser: "Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion.",
    icon: Globe,
    link: "/coming-soon?title=Food%20%26%20Dining%20Guide",
    image: "/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Connectivity Guide: Phone Plans, SIM Cards & WiFi",
    teaser: "Stay connected across borders. The best eSims and roaming plans for seamless 3-country coverage.",
    icon: Smartphone,
    link: "/coming-soon?title=Connectivity%20Guide",
    image: "/images/travel-tips/World Cup 2026 Connectivity Guide Illustration.webp"
  }
];

const faqs = [
  {
    question: "When should I start planning my World Cup 2026 travel?",
    answer: "Start now. With 48 teams and millions of fans, demand will be unprecedented. We recommend securing accommodation 12-18 months in advance and booking flights as soon as schedules are released (typically 11 months out)."
  },
  {
    question: "How expensive will a trip to World Cup 2026 be?",
    answer: "Costs vary wildly by region. A budget traveler might spend $150/day in Mexico, while US cities like New York or San Francisco can easily demand $400+/day. Our Budget Guide breaks down specific tiers for every type of fan."
  },
  {
    question: "Which host cities are best for first-time visitors?",
    answer: "For atmosphere and ease, New York/New Jersey, Mexico City, and Los Angeles offer the most robust infrastructure. For a compact, walkable experience, consider Seattle or Vancouver."
  },
  {
    question: "How difficult is travel between the US, Canada, and Mexico?",
    answer: "It requires planning. Flights are the most efficient method for long distances. Border crossings are generally smooth for tourists, but ensure your visa documentation covers multiple entries if you plan to hop between countries."
  },
  {
    question: "What about safety, visas, and border crossings?",
    answer: "North America is generally safe for tourists, but standard precautions apply. Visa requirements differ: you may need an ESTA for the US, an eTA for Canada, and an FMM for Mexico. Always check official government portals 6 months before travel."
  },
  {
    question: "How different is the weather across host cities?",
    answer: "Drastically different. You could experience 90°F (32°C) heat in Miami and 60°F (15°C) rain in Vancouver on the same day. Layering is essential. See our Packing Guide for a comprehensive strategy."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-300 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TravelTipsClientPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            The Ultimate World Cup 2026 Travel Hub.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed"
          >
            Your definitive source for navigating the first three-nation tournament. 
            Smart planning for a complex journey.
          </motion.p>
        </div>
      </section>

      {/* Authority Introduction */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Why this tournament is different.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              World Cup 2026 is uniquely complex. Spanning 16 cities across three vast countries, 
              it is not just a sporting event—it is a logistical challenge. 
              Distances are great. Climates vary. 
              The strategies that worked for Qatar 2022 or Russia 2018 will not apply here.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We have built this hub to be your single source of truth. 
              Designed for global fans, first-time travelers, and veterans alike. 
              No noise. Just the essential intelligence you need to be there.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guides Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Essential Planning Guides
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
            >
              {/* Featured Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image 
                  src={guide.image} 
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/90 dark:bg-black/80 p-2 rounded-lg backdrop-blur-sm inline-block">
                    <guide.icon className="w-5 h-5 text-slate-900 dark:text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  {guide.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                  {guide.teaser}
                </p>
                <Link 
                  href={guide.link}
                  className="inline-flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mt-auto"
                >
                  Read Full Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Quick answers to the most pressing logistical questions for 2026.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Footer Note */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24 text-center">
        <p className="text-sm font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest">
          Designed for global fans • Built for the journey
        </p>
      </section>
    </div>
  );
}
