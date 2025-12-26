'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { 
 MapPin, Calendar, Users, ArrowRight, Info, CheckCircle2, 
 Trophy, Plane, Hotel, Ticket, Share2, MessageSquare, 
 ThumbsUp, Send, HelpCircle, Utensils, Camera, Sun, 
 DollarSign, Shield, Clock, Globe, Star, ExternalLink,
 Train, Bus, Car, Bike, AlertTriangle, Briefcase,
 Bookmark, X, ChevronRight, Facebook, Twitter, Linkedin, Copy
} from 'lucide-react';
import { Header } from '@/components/feature/Header';

// --- Design System & Components ---

const fadeIn = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.1
 }
 }
};

// 1. Sticky Save Guide Button - REMOVED (Integrated into Hero)

// 2. Floating Social Share
const SocialShare = () => {
 return (
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 1 }}
 className="fixed left-4 top-1/3 z-40 hidden xl:flex flex-col gap-3"
 >
 <div className=" backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-3">
 {[Twitter, Facebook, Linkedin, Copy].map((Icon, i) => (
 <button key={i} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors">
 <Icon className="w-5 h-5" />
 </button>
 ))}
 </div>
 </motion.div>
 );
};

// 3. Lightbox Image
const LightboxImage = ({ src, alt, caption }: { src: string, alt: string, caption?: string }) => {
 const [isOpen, setIsOpen] = useState(false);

 return (
 <>
 <div 
 className="relative group cursor-zoom-in rounded-3xl overflow-hidden mb-8"
 onClick={() => setIsOpen(true)}
 >
 <Image src={src} alt={alt} width={1200} height={800} className="object-cover w-full h-[400px] md:h-[600px] transition-transform duration-700 group-hover:scale-105" />
 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
 {caption && (
 <div className="absolute bottom-0 left-0 right-0 p-6">
 <p className="text-white font-medium">{caption}</p>
 </div>
 )}
 </div>

 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
 onClick={() => setIsOpen(false)}
 >
 <button className="absolute top-8 right-8 text-white/50 hover:text-white p-2">
 <X className="w-8 h-8" />
 </button>
 <motion.div
 initial={{ scale: 0.9 }}
 animate={{ scale: 1 }}
 className="relative max-w-7xl w-full max-h-[90vh] rounded-lg overflow-hidden"
 onClick={(e) => e.stopPropagation()}
 >
 <Image src={src} alt={alt} width={1920} height={1080} className="object-contain w-full h-full" />
 {caption && <p className="text-center text-white/80 mt-4 font-light text-lg">{caption}</p>}
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
};

// 4. Section Component with Nike-bold Typography
const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: React.ReactNode, className?: string }) => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });

 return (
 <section id={id} ref={ref} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
 <motion.div
 variants={fadeIn}
 initial="hidden"
 animate={isInView ? "visible" : "hidden"}
 >
 <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-12 tracking-tight">
 <span className="text-emerald-500 text-lg md:text-xl font-bold uppercase tracking-widest block mb-2">Guide Section</span>
 {title}
 </h2>
 {children}
 </motion.div>
 </section>
 );
};

// 5. Premium Affiliate Button
const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
  const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden";
  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.6)]",
    secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
    outline: "border-2 border-slate-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white bg-transparent"
  };

  return (
    <Link href={href} target="_blank" className={`${baseClasses} ${variants[variant]}`}>
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
    </Link>
  );
};

const HotelCard = ({ name, rating, price, distance, features, image, link }: { name: string, rating: number, price: string, distance: string, features: string[], image: string, link: string }) => (
 <div className="group rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
 <div className="flex flex-col md:flex-row h-full">
 <div className="relative w-full md:w-2/5 min-h-[250px] overflow-hidden">
 <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
 <div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1 shadow-lg">
 <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {rating}
 </div>
 </div>
 <div className="p-8 md:w-3/5 flex flex-col justify-between">
 <div>
 <div className="flex justify-between items-start mb-4">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{name}</h3>
 <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg dark:bg-emerald-900/30 px-3 py-1 rounded-lg">{price}</span>
 </div>
 <p className="text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2 font-medium">
 <MapPin className="w-4 h-4 text-emerald-500" /> {distance} to Stadium
 </p>
 <div className="flex flex-wrap gap-2 mb-8">
 {features.map((f, i) => (
 <span key={i} className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full uppercase tracking-wide">
 {f}
 </span>
 ))}
 </div>
 </div>
 <div className="flex gap-4">
 <AffiliateButton href={link} text="Check Rates" variant="primary" />
 </div>
 </div>
 </div>
 </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <details className="group border-b border-slate-200 dark:border-white/10">
    <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors pr-8">
        {question}
      </h3>
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/10 group-open:bg-emerald-500 group-open:border-emerald-500 group-open:text-white transition-all duration-300">
        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-open:rotate-90" />
      </span>
    </summary>
    <div className="pb-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
      {answer}
    </div>
  </details>
);

// --- Main Page Component ---

export default function ClientPage() {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
 stiffness: 100,
 damping: 30,
 restDelta: 0.001
 });

 const [activeSection, setActiveSection] = useState('hero');
 const [isSaved, setIsSaved] = useState(false);

 // Sticky Nav Links
 const navLinks = [
 { id: 'overview', label: 'Overview' },
 { id: 'visa', label: 'Visa & Entry' },
 { id: 'planning', label: 'Planning' },
 { id: 'budget', label: 'Budget' },
 { id: 'stadium', label: 'Stadium' },
 { id: 'tickets', label: 'Tickets' },
 { id: 'hotels', label: 'Hotels' },
 { id: 'transport', label: 'Transport' },
 { id: 'dining', label: 'Dining' },
 { id: 'attractions', label: 'Attractions' },
 { id: 'tips', label: 'Match Day' },
 { id: 'safety', label: 'Safety' },
 { id: 'culture', label: 'Culture' },
 { id: 'packing', label: 'Packing' },
 { id: 'faq', label: 'FAQ' },
 ];

 return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans selection:bg-emerald-500/30">
 <Header />
 {/* SaveGuideButton removed */}
 <SocialShare />

 {/* Progress Bar */}
 <motion.div
 className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 origin-left z-[100]"
 style={{ scaleX }}
 />

 {/* 1. Hero Section - Refined & Minimal */}
 <div className="relative h-[65vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0 z-0">
      <Image 
        src="https://stadiumport.com/images/cities/guadalajara-world-cup-2026-1600.webp" 
        alt="Guadalajara Skyline" 
        fill 
        className="object-cover opacity-50"
        priority sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-[#F5F5F7] dark:to-[#0A0A0A]" />
    </div>

 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-12 pt-20">
 <div className="max-w-4xl">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className="flex items-center gap-4 mb-6">
 <span className="px-3 py-1 rounded-full border border-white/30 text-white/90 text-xs font-medium tracking-widest uppercase backdrop-blur-md">
 Host City
 </span>
 <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-emerald-500/20">
 Group Stage Host
 </span>
 </div>
 
 <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
 GUADALAJARA
 </h1>
 <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
 The Heart of Mexico. <span className="text-white font-medium">World Cup 2026</span> definitive guide.
 </p>
 </motion.div>
 </div>

 {/* Save Guide Button - Integrated */}
 <motion.button
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.2, duration: 0.6 }}
 onClick={() => setIsSaved(!isSaved)}
 className="group flex items-center gap-3 pl-4 pr-6 py-3 hover:/20 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-300 mb-2 md:mb-0"
 >
 <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isSaved ? 'bg-emerald-500 text-white' : ' text-slate-900'} transition-colors duration-300`}>
 <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
 </div>
 <div className="text-left">
 <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold">Guide Status</span>
 <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
 {isSaved ? 'Saved to Library' : 'Save to Library'}
 </span>
 </div>
 </motion.button>
 </div>
 </div>

 <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto px-6 gap-20 relative pt-16">
 
 {/* 2. Apple-style Sticky Table of Contents */}
 <aside className="hidden lg:block w-72 shrink-0 relative">
 <div className="sticky top-40 max-h-[calc(100vh-10rem)] overflow-y-auto pr-4 scrollbar-hide">
        <h3 className="font-black text-slate-900 dark:text-white mb-6 px-3 text-lg uppercase tracking-wider">Contents</h3>
        <div className="space-y-1 relative border-l-2 border-slate-200 dark:border-white/10 ml-3">
          {navLinks.map((link) => (
 <Link 
 key={link.id} 
 href={`#${link.id}`}
 className={`block px-6 py-3 text-sm font-bold transition-all duration-300 relative ${
 activeSection === link.id 
 ? 'text-emerald-600 dark:text-emerald-400 translate-x-1' 
 : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
 }`}
 onClick={() => setActiveSection(link.id)}
 >
 {activeSection === link.id && (
 <motion.div 
 layoutId="activeSection"
 className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-emerald-500"
 />
 )}
 {link.label}
 </Link>
 ))}
 </div>
 
 </div>
 </aside>

 {/* Main Content Column */}
 <main className="flex-1 min-w-0 pb-24">
 
 {/* Disclosure */}
 <div className="mb-12 p-6 rounded-2xl text-sm text-slate-500 dark:text-slate-400 flex gap-4 items-start">
 <Info className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
 <p className="leading-relaxed">
 <strong>Transparency:</strong> This guide contains affiliate links. We may earn a commission if you book through them, which helps fund our independent journalism.
 </p>
 </div>

 <Section id="overview" title="Strategic Overview">
 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p className="text-2xl leading-relaxed font-light text-slate-600 dark:text-slate-300">
 You feel Guadalajara before you see it. It’s the scent of wet earth and roasting agave. It’s the rhythm of mariachi trumpets bouncing off colonial stone walls. Mexico City might be the brain of the country, but Guadalajara is its heart.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Where to Base", text: "Zapopan for proximity to Estadio Akron. Centro Histórico for culture. Chapultepec for nightlife." },
            { icon: Train, title: "Transport Strategy", text: "Use Mi Tren (Light Rail) and Uber. Traffic to the stadium in Zapopan can be heavy, so plan ahead." },
            { icon: DollarSign, title: "Budget Signals", text: "Very affordable compared to US cities. Luxury hotels in Zapopan price higher during matches." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 transition-all duration-300 hover:shadow-xl">
              <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
              <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
 </div>
 <div className="mt-12 flex flex-wrap gap-4">
 <AffiliateButton href="#" text="Search GDL Flights" variant="secondary" icon={Plane} />
 <AffiliateButton href="#" text="Check Zapopan Hotels" variant="primary" icon={Hotel} />
 </div>
 </Section>

      <Section id="visa" title="Visa & Entry (Mexico)">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Who Needs a Visa?</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Citizens of the US, Canada, UK, and Schengen Area do NOT need a visa for stays under 180 days. You will receive an FMM (tourist card) upon arrival.</p>
            <AffiliateButton href="#" text="Check Visa Requirements" variant="outline" />
          </div>
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Arrival Tips</h4>
            <ul className="space-y-4 mb-8">
              {['Keep your FMM exit part safe', 'Passports must be valid for 6 months', 'Declare cash over $10,000 USD'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
            <AffiliateButton href="#" text="Buy Travel Insurance" variant="secondary" />
          </div>
        </div>
      </Section>

 <Section id="planning" title="Planning Timeline">
 <div className="space-y-6">
 {[
 { time: "1 Year Out", desc: "Book accommodation. Zapopan hotels near the stadium will fill up first. Secure your base early." },
 { time: "6 Months Out", desc: "Set alerts for flights to GDL. Direct flights from major US hubs are available. Check passport validity." },
 { time: "3 Months Out", desc: "Finalize your match day transport plan. Download Uber/DiDi. Learn basic Spanish phrases." }
 ].map((item, i) => (
 <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] items-center">
 <div className="shrink-0 w-48 font-black text-2xl text-emerald-500">{item.time}</div>
 <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 flex flex-wrap gap-4">
 <AffiliateButton href="#" text="Set Flight Alerts" variant="primary" icon={Plane} />
 <AffiliateButton href="#" text="Reserve Experiences" variant="outline" />
 </div>
 </Section>

 <Section id="budget" title="Budget Tiers">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Smart Saver", items: ["Hostels/Budget Hotels", "Street Food (Tacos/Tortas)", "Public Transit (Mi Tren)"] },
            { title: "Comfort Upgrades", items: ["Boutique Hotels in Americana", "Restaurant Dining", "Uber/DiDi Rides"] },
            { title: "Premium", items: ["Luxury in Andares/Zapopan", "Private Drivers", "Fine Dining (Alcalde)"] }
          ].map((tier, i) => (
            <div key={i} className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-[2rem] hover:shadow-2xl transition-all duration-300">
              <h4 className="font-bold text-xl mb-6">{tier.title}</h4>
              <ul className="space-y-4">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 <div className="mt-8 text-center">
 <AffiliateButton href="#" text="Search GDL Packages" variant="secondary" icon={Briefcase} />
 </div>
 </Section>

 <Section id="stadium" title="Estadio Akron">
 <LightboxImage 
 src="https://stadiumport.com/images/stadiums/estadio-akron-guadalajara-world-cup-2026-1600.webp" 
 alt="Estadio Akron Interior" 
 caption="The Volcano: A modern architectural marvel integrated into the landscape."
 />

 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p>
 Home of Chivas, <strong>Estadio Akron</strong> is famous for its berm design—the exterior looks like a grassy hill or volcano. Inside, it's a cauldron of noise. It's modern, safe, and offers excellent sightlines for World Cup matches.
 </p>
 </div>
 
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Key Features</h4>
 <ul className="space-y-4">
 {[
 { label: "Capacity", val: "~48,000" },
 { label: "Surface", val: "Natural Grass" },
 { label: "Roof", val: "90% Coverage" },
 { label: "Built", val: "2010" }
 ].map((item, i) => (
 <li key={i} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
 <span className="font-medium text-slate-500">{item.label}</span>
 <span className="font-bold">{item.val}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Pro Tips</h4>
 <ul className="space-y-4 text-slate-700 dark:text-slate-300">
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Rainy Season: Afternoon storms are common in June.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Arrival: Arrive 3 hours early; access roads get busy.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Bag Policy: Strict clear bag policy. Small clutches only.</li>
 </ul>
 </div>
 </div>
 
        <div className="p-8 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20">
          <p className="text-lg text-center font-medium text-emerald-800 dark:text-emerald-200">
            <strong>Getting There:</strong> Unlike many stadiums, Estadio Akron is located on the outskirts (Zapopan). Plan for traffic and use <strong>Rideshare</strong> or dedicated shuttles.
          </p>
        </div>
 </Section>

 <Section id="tips" title="Match Day Gameplan">
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {[
 { title: "Arrival", text: "Be at the gates 90 minutes before kickoff. Traffic in Zapopan can be intense." },
 { title: "Clear Bag", text: "Bring a stadium-approved clear bag. Security is strict but efficient." },
 { title: "Exit Plan", text: "Traffic can be heavy leaving the stadium. Wait a bit or walk to designated pickup points." }
 ].map((item, i) => (
 <div key={i} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
 <h4 className="font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="flex flex-wrap gap-4">
 <AffiliateButton href="#" text="Buy Clear Stadium Bag" variant="primary" />
 <AffiliateButton href="#" text="Add Refillable Bottle" variant="outline" />
 </div>
 </Section>

      <Section id="tickets" title="Schedule & Tickets">
        <div className="bg-slate-900 dark:bg-white/5 border border-white/10 text-white rounded-[2.5rem] p-8 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Ticket className="w-8 h-8 text-emerald-400" />
              <h3 className="text-3xl font-black">Confirmed Matches</h3>
            </div>
            <div className="space-y-6">
              {[
                { stage: "Group Stage", count: "4 Matches", color: "text-emerald-300" },
              ].map((match, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className={`font-mono text-lg ${match.color}`}>{match.stage}</span>
                  <span className="font-bold text-xl">{match.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Official Tickets</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The safest way to buy tickets is through the official FIFA portal. Registration typically opens 12-18 months before the tournament.
            </p>
            <AffiliateButton href="https://www.fifa.com" text="FIFA Official Site" variant="secondary" />
          </div>
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Resale Market</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              "Scalping" is common but risky. Trusted resale platforms offer verified tickets, though prices will be higher for high-demand matches.
            </p>
            <AffiliateButton href="#" text="Check StubHub" variant="primary" />
          </div>
        </div>
      </Section>

 <Section id="hotels" title="Where to Stay">
 <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed">
 Guadalajara offers diverse neighborhoods. <strong>Zapopan</strong> is upscale and close to the stadium. <strong>Centro Histórico</strong> puts you in the cultural center. <strong>Colonia Americana</strong> is the trendy choice for nightlife.
 </p>
 
 <div className="space-y-8">
 <HotelCard 
 name="Hyatt Regency Andares"
 rating={4.8}
 price="$250+"
 distance="15 min drive"
 features={['Luxury', 'Mall Access', 'Pool', 'Modern']}
 image="https://stadiumport.com/images/hotels/hyatt-andares.jpg"
 link="https://expedia.com"
 />
 <HotelCard 
 name="Casa Habita"
 rating={4.7}
 price="$180+"
 distance="30 min drive"
 features={['Boutique', 'Rooftop Bar', 'Design', 'Trendy']}
 image="https://stadiumport.com/images/hotels/casa-habita.jpg"
 link="https://expedia.com"
 />
 <HotelCard 
 name="Hotel Morales"
 rating={4.6}
 price="$90+"
 distance="40 min drive"
 features={['Colonial', 'Historic', 'Budget Friendly', 'Central']}
 image="https://stadiumport.com/images/cities/guadalajara-world-cup-2026.webp"
 link="https://expedia.com"
 />
 </div>
 
 <div className="mt-12 text-center">
 <AffiliateButton href="#" text="Search All GDL Hotels" variant="outline" />
 </div>
 </Section>

 <Section id="transport" title="Getting Around">
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="space-y-8">
 <div className="flex gap-6">
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
 <Train className="w-8 h-8" />
 </div>
 <div>
 <h4 className="font-bold text-xl mb-2">Mi Tren (Light Rail)</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Clean and efficient. Line 3 connects the historic center to Zapopan, getting you closer to the stadium area.
 </p>
 </div>
 </div>
 <div className="flex gap-6">
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
 <Plane className="w-8 h-8" />
 </div>
 <div>
 <h4 className="font-bold text-xl mb-2">Airport Transfer</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Miguel Hidalgo y Costilla (GDL) is the main airport. Taxis and Ubers are readily available to take you to the city center (30-45 mins).
 </p>
 </div>
 </div>
 <div className="flex gap-6">
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
 <Car className="w-8 h-8" />
 </div>
 <div>
 <h4 className="font-bold text-xl mb-2">Rideshare & Driving</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Uber & DiDi are widely available, safe, and affordable. Traffic can be intense, so allow extra time.
 </p>
 </div>
 </div>
 </div>
 
        <div className="bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/10 h-fit">
          <h4 className="font-bold text-2xl mb-6">Distance to Stadium</h4>
          <ul className="space-y-6">
            {[
              { label: "Zapopan Hotels", time: "10-20 min drive" },
              { label: "Colonia Americana", time: "30-45 min drive" },
              { label: "Centro Histórico", time: "40-60 min drive" },
              { label: "Airport (GDL)", time: "45-60 min drive" }
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center text-lg border-b border-slate-200 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                <span className="font-bold text-slate-900 dark:text-white">{item.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
            <AffiliateButton href="#" text="Book Airport Transfer" variant="secondary" />
          </div>
        </div>
 </div>
 </Section>

 <Section id="dining" title="Food & Drink">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Torta Ahogada", desc: "Pork sandwich 'drowned' in spicy salsa. The city's icon. Try it at Tortas Toño." },
            { title: "Birria", desc: "Slow-cooked goat or beef stew. A breakfast tradition. Best enjoyed at Las 9 Esquinas." },
            { title: "Carne en su Jugo", desc: "Meat in its own juices. Savory beef soup with bacon. Karne Garibaldi holds the speed record." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 shadow-lg border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                <Utensils className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
 </Section>

 <Section id="attractions" title="Top Attractions">
 <p className="mb-8 text-xl text-slate-600 dark:text-slate-300">
 Guadalajara's attractions range from colonial masterpieces to vibrant cultural hubs.
 </p>
        <div className="space-y-6">
          {[
            { title: "Hospicio Cabañas", desc: "UNESCO World Heritage site featuring murals by José Clemente Orozco.", color: "text-blue-500" },
            { title: "Guadalajara Cathedral", desc: "Iconic twin towers in the heart of the Centro Histórico.", color: "text-amber-500" },
            { title: "Tlaquepaque", desc: "Charming colonial town within the city, famous for pottery and mariachi.", color: "text-emerald-500" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-center p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 transition-colors shadow-sm hover:shadow-md">
              <div className="p-4 rounded-2xl shadow-sm shrink-0">
                <Camera className={`w-8 h-8 ${item.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
 <div className="mt-8">
 <AffiliateButton href="#" text="Book City Tour" variant="primary" />
 </div>
 </Section>

 <Section id="safety" title="Safety & Security">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><Shield className="w-6 h-6 text-emerald-500"/> Event Patterns</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Crowds in Centro and Zapopan will be heavy. Stick to tourist areas, travel in groups, and avoid walking alone in unknown neighborhoods at night.</p>
 </div>
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Practical Tips</h4>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400">
 <li>— Use Uber/DiDi instead of street taxis.</li>
 <li>— Keep valuables hidden and secure.</li>
 <li>— Drink bottled water only.</li>
 </ul>
 <div className="mt-6">
 <AffiliateButton href="#" text="Get Travel Insurance" variant="secondary" />
 </div>
 </div>
 </div>
 </Section>

 <Section id="culture" title="Cultural Intelligence">
 <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">Guadalajara is the soul of Mexico. People are friendly and proud of their culture. Tipping is standard (10-15%).</p>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: "Fan Zones", desc: "Plaza de la Liberación is a likely spot. Expect giant screens and live music." },
 { title: "Dining Etiquette", desc: "Lunch (Comida) is the main meal, usually between 2-4 PM. Dinner is lighter and later." },
 { title: "Mariachi", desc: "Hire a band in Plaza de los Mariachis or enjoy the music in Tlaquepaque." }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl">
 <h4 className="font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="packing" title="Climate & Packing">
 <div className="grid md:grid-cols-3 gap-6">
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <Sun className="w-10 h-10 text-emerald-500 mb-4" />
 <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Warm Days</h4>
 <p className="text-slate-600 dark:text-slate-400">Highs around 30°C (86°F). Lightweight, breathable clothing is best.</p>
 </div>
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <Clock className="w-10 h-10 text-emerald-500 mb-4" />
 <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Rainy Afternoons</h4>
 <p className="text-slate-600 dark:text-slate-400">June is the start of the rainy season. Expect afternoon showers. Bring a poncho.</p>
 </div>
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4" />
 <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Essentials</h4>
 <p className="text-slate-600 dark:text-slate-400">Sunscreen, hat, comfortable walking shoes, and a power bank.</p>
 </div>
 </div>
 </Section>

 <Section id="faq" title="FAQ">
 <div className="space-y-4">
 <FAQItem 
 question="Is Guadalajara safe for tourists?"
 answer="Yes, especially in tourist areas like Zapopan, Centro Histórico, and Tlaquepaque. Like any big city, stay aware of your surroundings and use official transport."
 />
 <FAQItem 
 question="How do I get to Estadio Akron?"
 answer="The stadium is in Zapopan. You can take Mi Tren Line 3 to the area and then a connector, or use rideshare (Uber/DiDi). Allow plenty of time for traffic."
 />
 <FAQItem 
 question="Can I drink the tap water?"
 answer="No, it is not recommended to drink tap water. Stick to bottled or purified water, which is readily available everywhere."
 />
 <FAQItem 
 question="Do I need to speak Spanish?"
 answer="While many people in hospitality speak English, learning basic Spanish phrases is appreciated and helpful."
 />
 </div>
 </Section>

      <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 dark:bg-white/5 border border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[150px] opacity-10"></div>
        
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Ready for the Fiesta?</h3>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join thousands of fans in the heart of Mexico for an unforgettable World Cup experience.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <AffiliateButton href="#" text="Book Your Trip" variant="primary" icon={Plane} />
            <AffiliateButton href="#" text="Join Community" variant="outline" icon={Users} />
          </div>
        </div>
      </div>

 </main>
    </div>
  </div>
);
}













