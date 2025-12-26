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
  <div className="group rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white dark:bg-slate-900/50">
    <div className="flex flex-col md:flex-row h-full">
      <div className="relative w-full md:w-2/5 min-h-[250px] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {rating}
        </div>
      </div>
      <div className="p-8 md:w-3/5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{name}</h3>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-lg">{price}</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-emerald-500" /> {distance} to Stadium
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {features.map((f, i) => (
              <span key={i} className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-wide">
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
            src="/images/cities/boston-world-cup-2026-1600.webp" 
            alt="Gillette Stadium Boston World Cup 2026" 
            fill 
            className="object-cover object-center"
            priority 
            sizes="100vw"
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
                  Quarter-Final Host
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                BOSTON
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
                The Cradle of Liberty. <span className="text-white font-medium">World Cup 2026</span> definitive guide.
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
            <div className="space-y-1 relative border-l-2 border-slate-200 dark:border-slate-800 ml-3">
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
                Boston offers a unique dual experience: historic city charm and the electric atmosphere of Gillette Stadium in Foxborough. Located 28 miles from downtown, the stadium requires planning. Base yourself in Boston for culture, or Foxborough for matchday ease.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Where to Base", text: "Back Bay or Seaport for city vibes. Foxborough/Patriot Place for stadium proximity." },
                { icon: Train, title: "Transport Strategy", text: "Use the MBTA Commuter Rail Event Train from South Station. Avoid driving on Route 1 if possible." },
                { icon: DollarSign, title: "Budget Signals", text: "Hotels in both Boston and Foxborough will be premium. Book refundable rates now." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] transition-colors">
                  <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
                  <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <AffiliateButton href="#" text="Search Boston Flights" variant="secondary" icon={Plane} />
              <AffiliateButton href="#" text="Check Boston Hotels" variant="primary" icon={Hotel} />
            </div>
          </Section>

          <Section id="visa" title="Visa & Entry (USA)">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
                <h4 className="font-bold text-2xl mb-4">Who Needs a Visa?</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Citizens of Visa Waiver Program countries can use ESTA for short stays. Others require a B-2 tourist visa. Check status as of Dec 2025 and apply early.</p>
                <AffiliateButton href="#" text="Check ESTA Eligibility" variant="outline" />
              </div>
              <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
                <h4 className="font-bold text-2xl mb-4">Arrival Tips</h4>
                <ul className="space-y-4 mb-8">
                  {['Logan Airport (BOS) is close to downtown', 'Use Silver Line for free transit from airport', 'Proof of onward travel required'].map((item, i) => (
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
                { time: "6–9 Months Out", desc: "Book flights and refundable hotels in Back Bay/Seaport. If staying in Foxborough, book immediately." },
                { time: "3–6 Months Out", desc: "Confirm match tickets. Research Commuter Rail schedules and ticket release dates." },
                { time: "1–3 Months Out", desc: "Lock in eSIMs. Plan Freedom Trail and other historical tours." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] items-center">
                  <div className="shrink-0 w-48 font-black text-2xl text-emerald-500">{item.time}</div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AffiliateButton href="#" text="Set Flight Alerts" variant="primary" icon={Plane} />
              <AffiliateButton href="#" text="Reserve Restaurant Tables" variant="outline" />
            </div>
          </Section>

          <Section id="budget" title="Budget Tiers">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Smart Saver", items: ["Stay in Quincy/Braintree", "Use MBTA subway", "Eat at Quincy Market"] },
                { title: "Comfort Upgrades", items: ["Seaport District hotels", "Uber to/from station", "North End dining"] },
                { title: "Premium", items: ["Mandarin Oriental / Four Seasons", "Private car to Foxborough", "VIP Hospitality"] }
              ].map((tier, i) => (
                <div key={i} className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:shadow-2xl transition-all duration-300">
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
              <AffiliateButton href="#" text="Search Boston Packages" variant="secondary" icon={Briefcase} />
            </div>
          </Section>

          <Section id="stadium" title="Gillette Stadium">
            <LightboxImage 
              src="/images/stadiums/gillette-stadium-foxborough-world-cup-2026.webp" 
              alt="Gillette Stadium Interior" 
              caption="Gillette Stadium: The Fortress of Foxborough."
            />

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>
                <strong>Gillette Stadium</strong>, known as "The Fortress," is a legendary venue in American sports. While located outside the city, its integration with Patriot Place offers dining and entertainment right at the doorstep. The open-air design guarantees an authentic New England atmosphere.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className=" p-8 rounded-[2rem]">
                <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Key Features</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Capacity", val: "~65,000" },
                    { label: "Surface", val: "FieldTurf (Grass for WC)" },
                    { label: "Roof", val: "Open-Air" },
                    { label: "Location", val: "Foxborough (28mi from BOS)" }
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
                  <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Traffic: Route 1 is notorious. Take the train.</li>
                  <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Weather: It can be hot or rainy; bring layers.</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <AffiliateButton href="#" text="Stadium Guide" variant="secondary" />
              <AffiliateButton href="#" text="Patriot Place Map" variant="outline" />
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
