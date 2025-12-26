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
 <button key={i} className="p-3 dark:hover:bg-teal-900/30 rounded-xl text-slate-500 hover:text-teal-600 transition-colors">
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
 <span className="text-teal-500 text-lg md:text-xl font-bold uppercase tracking-widest block mb-2">Guide Section</span>
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
 primary: "bg-teal-500 text-white hover:bg-teal-400 shadow-[0_10px_40px_-10px_rgba(20,184,166,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.6)]",
 secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
 outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 text-slate-900 dark:text-white bg-transparent"
 };

 return (
 <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]}`}>
 <span className="relative z-10 flex items-center gap-2">
 {text} <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
 </span>
 {variant === 'primary' && (
 <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 )}
 </a>
 );
};

const HotelCard = ({ name, rating, price, distance, features, image, link }: { name: string, rating: number, price: string, distance: string, features: string[], image: string, link: string }) => (
 <div className="group rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
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
 <span className="text-teal-600 dark:text-teal-400 font-bold text-lg dark:bg-teal-900/30 px-3 py-1 rounded-lg">{price}</span>
 </div>
 <p className="text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2 font-medium">
 <MapPin className="w-4 h-4 text-teal-500" /> {distance} to Stadium
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
 <details className="group border-b border-slate-200 dark:border-slate-800">
 <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
 <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors pr-8">
 {question}
 </h3>
 <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 group-open:bg-teal-500 group-open:border-teal-500 group-open:text-white transition-all duration-300">
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
 { id: 'planning', label: 'Planning' },
 { id: 'stadium', label: 'Stadium Info' },
 { id: 'tickets', label: 'Seating & Shade' },
 { id: 'transport', label: 'Transport' },
 { id: 'dining', label: 'Food & Drink' },
 { id: 'neighborhood', label: 'Neighborhood' },
 { id: 'policies', label: 'Policies' },
 { id: 'faq', label: 'FAQ' },
 ];

 return (
 <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans selection:bg-teal-500/30">
 {/* SaveGuideButton removed */}
 <SocialShare />

 {/* Progress Bar */}
 <motion.div
 className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 origin-left z-[100]"
 style={{ scaleX }}
 />

 {/* 1. Hero Section - Refined & Minimal */}
 <div className="relative h-[65vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0 z-0">
 <Image 
          src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026-1600.webp" 
          alt="Hard Rock Stadium" 
          fill 
          className="object-cover opacity-50"
          priority sizes="100vw"
        />
 <div className="absolute inset-0 " />
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
 Host Venue
 </span>
 <span className="px-3 py-1 rounded-full bg-teal-500/90 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-teal-500/20">
 Bronze Final Host
 </span>
 </div>
 
 <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
 HARD ROCK<br />STADIUM
 </h1>
 <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
 The complete guide to Miami's global entertainment hub. Master the heat, navigate the Turnpike, and find the perfect spot for World Cup 2026.
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
 <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isSaved ? 'bg-teal-500 text-white' : ' text-slate-900'} transition-colors duration-300`}>
 <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
 </div>
 <div className="text-left">
 <span className="block text-xs text-slate-400 uppercase tracking-wider font-bold">Guide Status</span>
 <span className="block text-sm font-bold text-white group-hover:text-teal-400 transition-colors">
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
 ? 'text-teal-600 dark:text-teal-400 translate-x-1' 
 : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
 }`}
 onClick={() => setActiveSection(link.id)}
 >
 {activeSection === link.id && (
 <motion.div 
 layoutId="activeSection"
 className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-teal-500"
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
 <Info className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
 <p className="leading-relaxed">
 <strong>Transparency:</strong> This guide contains affiliate links. We may earn a commission if you book through them, which helps fund our independent journalism.
 </p>
 </div>

 <Section id="overview" title="Strategic Overview">
 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p className="text-2xl leading-relaxed font-light text-slate-600 dark:text-slate-300">
 Hard Rock Stadium is a masterclass in reinvention. It went from a standard 1980s concrete bowl to one of the most aesthetically stunning venues in global sports. The defining feature is the massive open-air canopy that floats over the seating bowl like a cloud.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { icon: MapPin, title: "Location", text: "Miami Gardens. 15 miles north of Downtown. It is NOT in South Beach. Plan 60+ mins for travel." },
 { icon: Sun, title: "Climate", text: "Hot & Humid. The roof provides shade to 92% of fans, but it is open-air. Hydration is key." },
 { icon: Trophy, title: "Matches", text: "7 Matches Total. Group Stage, Round of 32, Quarterfinal, and the Bronze Final." }
 ].map((item, i) => (
 <div key={i} className="p-8 rounded-[2rem] transition-colors">
 <item.icon className="w-10 h-10 text-teal-500 mb-6" />
 <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="mt-12 flex flex-wrap gap-4">
 <AffiliateButton href="#" text="Search Miami Flights" variant="secondary" icon={Plane} />
 <AffiliateButton href="#" text="Check Stadium Hotels" variant="primary" icon={Hotel} />
 </div>
 </Section>

 <Section id="planning" title="Planning Timeline">
 <div className="space-y-6">
 {[
 { time: "6-9 Months Out", desc: "Book flights. Secure hotels in Aventura (near Brightline) or Hollywood. Avoid staying too far south if your focus is matches." },
 { time: "3-6 Months Out", desc: "Brightline train tickets go on sale. Book them immediately. They will sell out." },
 { time: "1-3 Months Out", desc: "Plan your sun protection strategy. Check the latest clear bag policy regulations." }
 ].map((item, i) => (
 <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] items-center">
 <div className="shrink-0 w-48 font-black text-2xl text-teal-500">{item.time}</div>
 <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 flex flex-wrap gap-4">
 <AffiliateButton href="#" text="Set Flight Alerts" variant="primary" icon={Plane} />
 </div>
 </Section>

 <Section id="stadium" title="Stadium Intelligence">
        <LightboxImage 
          src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026-1024.webp" 
          alt="Hard Rock Stadium Seating Chart"
          caption="Hard Rock Stadium's modern layout provides excellent views from all levels."
        />
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">The Canopy</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
 The roof is a marvel of engineering, suspended by cables from four spires. It shades 92% of seats but leaves the pitch in the sun. It also traps noise, creating an incredible atmosphere.
 </p>
 <div className="flex items-center gap-2 text-sm text-slate-500">
 <Info className="w-4 h-4" /> Note: It does NOT provide air conditioning.
 </div>
 </div>
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">World Cup Changes</h4>
 <ul className="space-y-4 mb-8">
 {[
 'Field level corners modified for wider pitch', 
 'Hard security perimeter extended to parking lots', 
 'Branded as "Miami Stadium" for FIFA'
 ].map((item, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <CheckCircle2 className="w-5 h-5 text-teal-500" /> {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </Section>

 <Section id="tickets" title="Seating & Shade">
 <div className=" border-l-4 border-orange-500 p-8 rounded-r-2xl mb-12">
 <p className="font-bold text-orange-900 dark:text-orange-100 flex items-center gap-2 text-xl mb-2">
 <Sun className="shrink-0" size={24} />
 Critical Shade Warning
 </p>
 <p className="text-orange-800 dark:text-orange-200 text-lg leading-relaxed">
 The <strong>South Sideline</strong> (Sections 140-150, 240-250, 340-350) is the "sun side." You will be in direct sunlight for afternoon matches. The <strong>North Sideline</strong> is the "shade side." Choose wisely.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8">
 <div className=" p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
 <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
 <Ticket className="text-teal-500" />
 Best Value Seats
 </h3>
 <ul className="space-y-4">
 <li className="mb-2">
 <strong className="block text-slate-900 dark:text-white text-lg">Corner Sections (200 Level)</strong>
 <span className="text-slate-600 dark:text-slate-400">Excellent views of the whole pitch, usually shaded, and cheaper than midfield.</span>
 </li>
 <li className="mb-2">
 <strong className="block text-slate-900 dark:text-white text-lg">The 72 Club</strong>
 <span className="text-slate-600 dark:text-slate-400">The premier luxury experience. Field-level access, all-inclusive food/beer, and air-conditioned lounges.</span>
 </li>
 </ul>
 </div>
 <div className=" p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
 <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
 <Users className="text-teal-500" />
 Atmosphere Sections
 </h3>
 <p className="text-slate-600 dark:text-slate-400 mb-4">
 The lower bowl end-zones are where the most passionate supporters typically gather. Expect standing, chanting, and flags.
 </p>
 <AffiliateButton href="#" text="Browse Tickets" variant="outline" />
 </div>
 </div>
 </Section>

 <Section id="transport" title="Getting There">
 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p className="text-xl text-slate-600 dark:text-slate-300">
 Traffic is the biggest enemy at Hard Rock Stadium. The Florida Turnpike and I-95 are notoriously gridlocked on game days. We strongly recommend the train.
 </p>
 </div>

 <div className="space-y-8">
 <div className="relative pl-8 border-l-4 border-teal-500 p-8 rounded-r-[2rem]">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
 <Train className="w-8 h-8 text-teal-500" />
 The Pro Move: Brightline + Shuttle
 </h3>
 <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
 Take the high-speed Brightline train to <strong>Aventura Station</strong>. From there, hop on the free "Hard Rock Stadium Connect" shuttle which uses dedicated lanes to bypass traffic and drops you at Gate 3.
 </p>
 <AffiliateButton href="https://www.gobrightline.com/" text="Book Brightline" variant="primary" />
 </div>

 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Car className="w-5 h-5 text-slate-500"/> Driving & Parking</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-4">
 Parking lots are zoned by color and do not connect. You MUST enter the correct gate.
 </p>
 <ul className="space-y-2 text-sm">
 <li className="flex gap-2"><span className="w-3 h-3 rounded-full bg-orange-500 mt-1"></span> <strong>Orange Lot:</strong> Closest, expensive.</li>
 <li className="flex gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500 mt-1"></span> <strong>Yellow Lot:</strong> The Tailgate Zone.</li>
 </ul>
 </div>
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Car className="w-5 h-5 text-slate-500"/> Ride Share</h4>
 <p className="text-slate-600 dark:text-slate-400">
 Uber/Lyft drop-off is at <strong>Lot 30</strong>. It is a long walk to the gates. Surge pricing after the match is extreme (3-4x normal rates).
 </p>
 </div>
 </div>
 </div>
 </Section>

 <Section id="hotels" title="Where to Stay">
 <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
 Since the stadium is in a suburban area, you have three strategies: Stay near the stadium (boring but convenient), stay in Hollywood/Aventura (beach + reasonable transit), or stay Downtown/Brickell (vibe + train ride).
 </p>
 
 <div className="space-y-8">
 <HotelCard 
  name="Stadium Hotel" 
  rating={4.2}
  price="$$"
  distance="0.4 miles"
  features={["Walking Distance", "Budget", "Basic"]}
  image="/images/stadiums/hard-rock-stadium-miami-world-cup-2026-640.webp" 
  link="#"
 />
 <HotelCard 
  name="JW Marriott Turnberry" 
  rating={4.7}
  price="$$$$"
  distance="4.2 miles"
  features={["Golf", "Waterpark", "Luxury"]}
  image="/images/stadiums/hard-rock-stadium-miami-world-cup-2026-640.webp" 
  link="#"
 />
 </div>
 
 <div className="mt-12 text-center">
 <AffiliateButton href="#" text="Search All Miami Hotels" variant="outline" />
 </div>
 </Section>

 <Section id="dining" title="Food & Concessions">
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="space-y-8">
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
 Miami's food scene is legendary, and the stadium reflects that. You won't just find hot dogs here; you'll find croquetas, sushi, and craft cocktails.
 </p>
 <div className=" p-6 rounded-2xl">
 <h4 className="font-bold text-lg mb-4 text-teal-600">The Must-Eats</h4>
 <ul className="space-y-4">
 <li>
 <strong className="block text-slate-900 dark:text-white">Cafe Versailles</strong>
 <span className="text-slate-600 dark:text-slate-400 text-sm">The world's most famous Cuban restaurant. Get the Cuban Sandwich and Cortadito.</span>
 </li>
 <li>
 <strong className="block text-slate-900 dark:text-white">Shula Burger</strong>
 <span className="text-slate-600 dark:text-slate-400 text-sm">Legendary burgers honoring the legendary coach.</span>
 </li>
 <li>
 <strong className="block text-slate-900 dark:text-white">Bodega Taqueria</strong>
 <span className="text-slate-600 dark:text-slate-400 text-sm">Authentic Mexican street food. Fresh tacos and cold beer.</span>
 </li>
 </ul>
 </div>
 </div>
 <div className="relative h-[400px] rounded-[2rem] overflow-hidden">
 <Image src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026-1024.webp" alt="Stadium Food" fill className="object-cover" />
 </div>
 </div>
 </Section>

 <Section id="neighborhood" title="Neighborhood & Vibe">
 <div className="p-8 rounded-[2rem]">
 <h3 className="text-2xl font-bold mb-6">The Parking Lot IS the Neighborhood</h3>
 <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
 Miami Gardens is a suburban area. There is no walkable downtown outside the gates. The "vibe" is in the parking lots, specifically the <strong>Yellow Lot</strong>, where tailgating is a religion.
 </p>
 <div className="grid md:grid-cols-2 gap-6">
 <div className=" p-6 rounded-xl">
 <h4 className="font-bold text-lg text-teal-500 mb-2">Tootsie's Cabaret</h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm">A massive nearby venue that often hosts watch parties. It is a Miami institution.</p>
 </div>
 <div className=" p-6 rounded-xl">
 <h4 className="font-bold text-lg text-teal-500 mb-2">Calder Casino</h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm">Located just west. Good for AC and a drink if you arrive too early.</p>
 </div>
 </div>
 </div>
 </Section>

 <Section id="policies" title="Rules & Policies">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">Bag Policy</h4>
 <ul className="space-y-4 mb-8">
 <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <CheckCircle2 className="w-5 h-5 text-teal-500" /> Clear Plastic Bags: Max 12" x 6" x 12"
 </li>
 <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <CheckCircle2 className="w-5 h-5 text-teal-500" /> Small Clutch: Max 4.5" x 6.5"
 </li>
 <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <X className="w-5 h-5 text-red-500" /> No backpacks or coolers
 </li>
 </ul>
 </div>
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">Entry Tips</h4>
 <ul className="space-y-4 mb-8">
 {[
 'Gates open 2-3 hours before kickoff', 
 'Use the specific gate on your ticket', 
 'Stadium is cashless'
 ].map((item, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <CheckCircle2 className="w-5 h-5 text-teal-500" /> {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </Section>

 <Section id="faq" title="Frequently Asked Questions">
 <div className="space-y-2">
 <FAQItem 
 question="Is Hard Rock Stadium air conditioned?" 
 answer="The bowl is open-air. The canopy provides shade, but it does NOT provide air conditioning to the seats. It will be hot and humid. Dress accordingly." 
 />
 <FAQItem 
 question="Can I take an Uber to the stadium?" 
 answer="Yes, but the drop-off point (Lot 30) is a significant walk from the gates, and surge pricing is extreme. We highly recommend the Brightline train + shuttle option instead." 
 />
 <FAQItem 
 question="What time do gates open?" 
 answer="For World Cup matches, gates usually open 2-3 hours before kickoff to allow for heightened security screening. Check your specific match ticket for the exact time." 
 />
 <FAQItem 
 question="Is there WiFi?" 
 answer="Yes, the stadium has a robust WiFi network (free) that usually handles the crowds well." 
 />
 <FAQItem 
 question="Can I bring a water bottle?" 
 answer="Usually, no outside food or drink is allowed. However, exceptions are sometimes made for one sealed plastic water bottle per person during extreme heat." 
 />
 </div>
 </Section>

 </main>
 </div>
 </div>
 );
}












