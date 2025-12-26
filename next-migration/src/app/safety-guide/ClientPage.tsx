'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck, ShieldAlert, HeartPulse, Bus, Phone, User, Users, Lock, FileText } from 'lucide-react';

const safetyGuides = [
  {
    title: "World Cup 2026 Scams: How to Avoid Ticket & Travel Fraud",
    teaser: "Identify the red flags before you book. Essential protection against counterfeit tickets and phishing.",
    link: "/coming-soon?title=World%20Cup%202026%20Scams%20Guide",
    image: "/images/safety-guide/A_realistic_photo-style_image_showing_a_worried_football_fan_reviewing_suspiciou.webp",
    icon: ShieldAlert
  },
  {
    title: "Stadium Safety at World Cup 2026: Security Rules & What to Expect",
    teaser: "From bag policies to prohibited items. Navigate venue security smoothly and quickly.",
    link: "/coming-soon?title=Stadium%20Safety%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026.webp",
    icon: Lock
  },
  {
    title: "Health & Medical Preparedness",
    teaser: "Pharmacy access, emergency care, and health insurance requirements for US, Canada, and Mexico.",
    link: "/coming-soon?title=Health%20%26%20Medical%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_showing_a_travel_medical_essentials_layout_for_World_cup_2026.webp",
    icon: HeartPulse
  },
  {
    title: "Transportation Safety: Getting Around World Cup 2026 Host Cities",
    teaser: "Safe transit options, rideshare tips, and navigating public transport systems late at night.",
    link: "/coming-soon?title=Transportation%20Safety%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp",
    icon: Bus
  },
  {
    title: "World Cup 2026 Emergency Contacts & Resources Guide",
    teaser: "One list, three countries. The essential emergency numbers and embassy contacts you need offline.",
    link: "/coming-soon?title=Emergency%20Contacts%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_essential_emergency_resources_for_World_Cup_2026.webp",
    icon: Phone
  },
  {
    title: "Solo Travel Safety Guide: Attending World Cup 2026 Alone",
    teaser: "Confidence for the solo fan. Meeting others, staying connected, and safe accommodation choices.",
    link: "/coming-soon?title=Solo%20Travel%20Safety%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_a_solo_traveler_at_a_World_Cup_2026_host_city.webp",
    icon: User
  },
  {
    title: "Family Safety Guide: Taking Kids to World Cup 2026",
    teaser: "Crowd management, lost child protocols, and family-friendly zones in every host city.",
    link: "/coming-soon?title=Family%20Safety%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_a_family_with_children_entering_or_walking_near.webp",
    icon: Users
  },
  {
    title: "World Cup 2026 Safety Guide: Everything Fans Need to Know",
    teaser: "The master overview. General precautions and cultural norms for a trouble-free tournament.",
    link: "/coming-soon?title=General%20Safety%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_representing_overall_fan_safety_for_World_Cup_2026.webp",
    icon: ShieldCheck
  },
  {
    title: "World Cup 2026 Travel Insurance: Complete Protection Guide",
    teaser: "Why standard policies might not be enough. Coverage for tickets, medical, and trip interruption.",
    link: "/coming-soon?title=Travel%20Insurance%20Guide",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_travel_insurance_essentials_for_World_Cup_2026.webp",
    icon: FileText
  }
];

const faqs = [
  {
    question: "Is World Cup 2026 safe for international travelers?",
    answer: "Yes. The US, Canada, and Mexico are prioritizing visitor safety with massive security investments. While standard travel precautions apply, the host cities are major tourist hubs with robust infrastructure designed to handle millions of visitors safely."
  },
  {
    question: "What are the safety differences between US, Canada, and Mexico?",
    answer: "Canada is generally considered very low risk. The US has specific areas to avoid in major cities but is safe for tourists. Mexico requires more vigilance regarding transport and neighborhoods; stick to official zones and recommended transit options."
  },
  {
    question: "What are the stadium security rules and prohibited items?",
    answer: "Expect airport-style security. Prohibited items typically include large bags (clear bag policies often apply), professional cameras, alcohol, and potential projectiles. Check specific stadium guides 24 hours before match day."
  },
  {
    question: "What are the emergency numbers in host countries?",
    answer: "USA and Canada use 911 for all emergencies. Mexico also uses 911. It is vital to have these numbers saved, along with your country's embassy contact information, before you arrive."
  },
  {
    question: "Is travel insurance required or recommended?",
    answer: "Highly recommended. Medical costs in the US can be astronomical. Ensure your policy covers medical evacuation, trip cancellation, and ideally, specific sports tourism coverage."
  },
  {
    question: "Is World Cup 2026 safe for families and solo travelers?",
    answer: "Absolutely. The tournament atmosphere is celebratory. For families, stick to official Fan Festivals which are family-oriented. Solo travelers should stay in well-lit, central accommodations and share their itinerary with someone back home."
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

export default function SafetyGuideClientPage() {
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
            Safety First. Adventure Always.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed"
          >
            The definitive safety resource for World Cup 2026. 
            Prepare with confidence, travel with peace of mind.
          </motion.p>
        </div>
      </section>

      {/* Authority Introduction */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              A trusted global safety hub.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Navigating a World Cup across three sovereign nations requires more than just a map. 
              It requires awareness. From visa regulations to local emergency protocols, 
              safety landscapes vary significantly between Montreal, Mexico City, and Miami.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We have compiled this intelligence to serve as your primary safety briefing. 
              Our goal is not to alarm, but to empower. 
              When you know what to expect, you are free to focus on the game.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Safety Guides Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Essential Safety Guides
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
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
              Safety FAQ
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Clear answers to your most important security questions.
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
          Designed for global fans • Built with real-world scenarios in mind
        </p>
      </section>
    </div>
  );
}
