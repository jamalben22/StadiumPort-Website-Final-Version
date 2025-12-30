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
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this guide to World Cup 2026 in Miami!";
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-4 top-1/3 z-40 hidden xl:flex flex-col gap-3"
      >
        <div className="backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-3">
          <button onClick={() => handleShare('twitter')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" aria-label="Share on Twitter">
            <Twitter className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('facebook')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" aria-label="Share on Facebook">
            <Facebook className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('linkedin')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" aria-label="Share on LinkedIn">
            <Linkedin className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('copy')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors relative" aria-label="Copy Link">
            {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">Link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
 <Image src={src} alt={alt} width={1200} height={800} className="object-cover w-full h-[400px] md:h-[600px] transition-transform duration-700 group-hover:scale-105"  unoptimized />
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
 <Image src={src} alt={alt} width={1920} height={1080} className="object-contain w-full h-full"  unoptimized />
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
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_10px_40px_-10px_rgba(5,150,105,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(5,150,105,0.6)]",
    secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
    outline: "border-2 border-slate-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white bg-transparent"
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]}`}>
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
 <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700"  unoptimized />
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
 <details className="group border-b border-slate-200 dark:border-slate-800">
 <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
 <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors pr-8">
 {question}
 </h3>
 <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 group-open:bg-emerald-500 group-open:border-emerald-500 group-open:text-white transition-all duration-300">
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
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
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
src="/images/cities/miami-world-cup-2026-1600.webp" 
alt="Miami Skyline" 
fill 
className="object-cover opacity-80"
priority sizes="100vw"
 unoptimized />
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#F5F5F7] dark:to-[#0A0A0A]" />
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
Bronze Final Host
</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
MIAMI
</h1>
<p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
The Global Gateway. <span className="text-white font-medium">World Cup 2026</span> definitive guide.
</p>
</motion.div>
</div>


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
Miami is the gateway to the Americas and a global party capital. Hosting the Bronze Final, the city brings Latin flair, intense heat, and a sprawling layout. Unlike many host cities, the stadium is far from the city center, making logistics your #1 priority.
</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{[
{ icon: MapPin, title: "Where to Base", text: "South Beach for the party vibe. Brickell for luxury and dining. Avoid staying near the stadium (limited amenities)." },
{ icon: Train, title: "Transport Strategy", text: "Use Brightline. Take the high-speed train from Downtown to Aventura, then the shuttle. Uber will be gridlocked." },
{ icon: DollarSign, title: "Budget Signals", text: "Expect astronomical prices. Miami is premium. Book refundable rates immediately." }
].map((item, i) => (
<div key={i} className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem] transition-all duration-300 hover:border-emerald-500/50">
<item.icon className="w-10 h-10 text-emerald-500 mb-6" />
<h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
</div>
))}
</div>
 <div className="mt-12 flex flex-wrap gap-4">
 <AffiliateButton href="https://www.skyscanner.com/transport/flights/to/mia" text="Search Miami Flights" variant="secondary" icon={Plane} />
 <AffiliateButton href="https://www.booking.com/searchresults.html?ss=Miami+Beach" text="Check South Beach Hotels" variant="primary" icon={Hotel} />
 </div>
 </Section>

 <Section id="visa" title="Visa & Safety">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
<h4 className="font-bold text-2xl mb-6 flex items-center gap-3"><Globe className="w-6 h-6 text-emerald-500" /> US Entry</h4>
<p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
International visitors will need a <strong>US Visa</strong> or <strong>ESTA</strong>. Miami is a major port of entry, so expect long lines at immigration during the tournament. Apply at least 3 months in advance.
</p>
<AffiliateButton href="https://travel.state.gov/content/travel/en/us-visas.html" text="Check Visa Requirements" variant="outline" />
</div>
 <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
  <h4 className="font-bold text-2xl mb-6 flex items-center gap-3"><Shield className="w-6 h-6 text-emerald-500" /> Safety Brief</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
 Miami is generally safe in tourist areas (South Beach, Brickell). Avoid walking alone late at night in unlit areas. Be aware of heat exhaustion – drink plenty of water.
 </p>
 <div className="flex gap-4">
<span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-sm font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-white/10">911 - Emergency</span>
<span className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-sm font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-white/10">311 - City Services</span>
</div>
 </div>
 </div>
 </Section>

 <Section id="planning" title="Planning Timeline">
 <div className="space-y-6">
 {[
 { time: "6–9 Months Out", desc: "Book flights and refundable hotels in South Beach or Brickell. Prices will soar for the Bronze Final." },
 { time: "3–6 Months Out", desc: "Reserve Brightline train tickets. Secure reservations at top-tier restaurants and clubs." },
 { time: "1–3 Months Out", desc: "Finalize stadium transport logistics. Miami traffic is unpredictable; have a backup plan." }
 ].map((item, i) => (
 <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem] items-center">
 <div className="shrink-0 w-48 font-black text-2xl text-emerald-500">{item.time}</div>
 <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 flex flex-wrap gap-4">
 <AffiliateButton href="https://www.skyscanner.com" text="Set Flight Alerts" variant="primary" icon={Plane} />
 <AffiliateButton href="https://www.opentable.com/miami-restaurants" text="Reserve Restaurant Tables" variant="outline" />
 </div>
 </Section>

 <Section id="budget" title="Budget Tiers">
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { title: "Smart Saver", items: ["Stay in Hollywood/FLL", "Use Brightline Train", "Eat at local Cuban spots"] },
 { title: "Comfort Upgrades", items: ["Brickell 4-star hotels", "Brightline Premium", "Rooftop dining"] },
 { title: "Premium", items: ["Ocean Drive Suites", "Private Chauffeur", "VIP Club Access"] }
 ].map((tier, i) => (
 <div key={i} className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem] hover:shadow-2xl transition-all duration-300">
<h4 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">{tier.title}</h4>
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
 <AffiliateButton href="https://www.kayak.com/packages/Miami-c14309" text="Search Miami Packages" variant="secondary" icon={Briefcase} />
 </div>
 </Section>

 <Section id="stadium" title="Hard Rock Stadium">
 <LightboxImage 
 src="/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp" 
 alt="Hard Rock Stadium Aerial" 
 caption="The iconic canopy roof of Hard Rock Stadium protects fans from the Miami sun."
 />

 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p>
 A global entertainment destination, <strong>Hard Rock Stadium</strong> is built for big events. Home to the Miami Dolphins and F1 Grand Prix, it features a massive open-air canopy to protect fans from the sun and rain, while keeping the pitch open to the elements. It is a loud, vibrant venue perfect for World Cup drama.
 </p>
 </div>
 
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
<h4 className="font-bold text-xl mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Key Features</h4>
 <ul className="space-y-4">
 {[
 { label: "Capacity", val: "~65,000 (Expandable)" },
 { label: "Surface", val: "Natural Grass" },
 { label: "Roof", val: "Open-Air Canopy (Covers 90% of fans)" },
 { label: "Renovated", val: "2016 ($500M+)" }
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
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Sun Smart: Sit on the South side for shade.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Hydrate: June humidity is intense. Drink water.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Access: No direct train. Plan shuttles early.</li>
 </ul>
 </div>
 </div>
 
 <div className="p-8 rounded-[2rem] border border-emerald-500/20">
 <p className="text-lg text-center font-medium text-emerald-800 dark:text-emerald-200">
 <strong>Getting There:</strong> Unlike downtown stadiums, Hard Rock Stadium is <strong>15 miles north</strong> of downtown. There is NO direct train. You must take the <strong>Brightline</strong> to Aventura, then a shuttle, or brave the traffic in an Uber.
 </p>
 </div>
 </Section>

 <Section id="tips" title="Match Day Gameplan">
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {[
 { title: "Pre-Match", text: "Arrive 3 hours early. The parking lots at Hard Rock are legendary for tailgating (asado style)." },
 { title: "Kickoff", text: "Be in your seat 30 mins prior. The national anthems and flyovers are spectacular here." },
 { title: "Exit Plan", text: "Wait 30+ minutes inside. Traffic out of the stadium lots is gridlock. Grab a post-match drink at the stadium club." }
 ].map((item, i) => (
 <div key={i} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
 <h4 className="font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="flex flex-wrap gap-4">
 <AffiliateButton href="https://www.amazon.com/s?k=clear+stadium+bag&tag=stadiumport-20" text="Buy Clear Stadium Bag" variant="primary" />
          <AffiliateButton href="https://www.amazon.com/s?k=refillable+water+bottle&tag=stadiumport-20" text="Add Refillable Bottle" variant="outline" />
 </div>
 </Section>

 <Section id="tickets" title="Schedule & Tickets">
 <div className=" text-white rounded-[2.5rem] p-8 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20"></div>
 <div className="relative z-10">
 <div className="flex items-center gap-4 mb-8">
 <Ticket className="w-8 h-8 text-emerald-400" />
 <h3 className="text-3xl font-black">Confirmed Matches</h3>
 </div>
 <div className="space-y-6">
 {[
 { stage: "Group Stage", count: "4 Matches", color: "text-emerald-300" },
 { stage: "Round of 32", count: "1 Match", color: "text-emerald-300" },
 { stage: "Quarter-Final", count: "1 Match", color: "text-emerald-300" },
 { stage: "Bronze Final", count: "?? HOST MATCH", color: "text-amber-400" }
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
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">Official Tickets</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-8">
 The safest way to buy tickets is through the official FIFA portal. Registration typically opens 12-18 months before the tournament.
 </p>
 <AffiliateButton href="https://www.fifa.com" text="FIFA Official Site" variant="secondary" />
 </div>
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">Resale Market</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-8">
 Missed the draw? Trusted resale platforms offer verified tickets, though prices will be higher for high-demand matches like the Bronze Final.
 </p>
 <AffiliateButton href="https://www.stubhub.com/" text="Check StubHub" variant="primary" />
 </div>
 </div>
 </Section>

 <Section id="hotels" title="Where to Stay">
 <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed">
 Miami offers two distinct experiences: the beach party or the city luxury. <strong>South Beach</strong> is for the vibe, <strong>Brickell</strong> is for high-end dining. There are very few quality hotels near the stadium itself.
 </p>
 
 <div className="space-y-8">
 <HotelCard 
 name="1 Hotel South Beach"
 rating={5.0}
 price="$800+"
 distance="15 miles"
 features={['Eco-Luxury', 'Beachfront', 'Rooftop Pool']}
 image="/images/cities/miami-world-cup-2026.webp" 
 link="https://www.booking.com/hotel/us/1-south-beach.html"
 />
 <HotelCard 
 name="East Miami (Brickell)"
 rating={4.8}
 price="$600+"
 distance="14 miles"
 features={['Connected to City Centre', 'Modern', 'Nightlife']}
 image="/images/cities/miami-world-cup-2026.webp" 
 link="https://www.booking.com/hotel/us/east-miami.html"
 />
 <HotelCard 
 name="Seminole Hard Rock Hotel"
 rating={4.7}
 price="$500+"
 distance="8 miles"
 features={['Casino', 'Guitar Hotel', 'Resort']}
 image="/images/cities/miami-world-cup-2026.webp" 
 link="https://www.booking.com/hotel/us/seminole-hard-rock-hollywood.html"
 />
 </div>
 
 <div className="mt-12 text-center">
 <AffiliateButton href="https://www.booking.com/searchresults.html?ss=Miami" text="Search All Miami Hotels" variant="outline" />
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
 <h4 className="font-bold text-xl mb-2">Brightline (Train)</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Brightline is a game-changer. The premium high-speed train connects Miami Central to Aventura in 17 mins. From there, take the stadium shuttle.
 </p>
 </div>
 </div>
 <div className="flex gap-6">
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
 <Plane className="w-8 h-8" />
 </div>
 <div>
 <h4 className="font-bold text-xl mb-2">MIA & FLL</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Miami International (MIA) is closer to downtown. Fort Lauderdale (FLL) is often cheaper and closer to the stadium.
 </p>
 </div>
 </div>
 <div className="flex gap-6">
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
 <Car className="w-8 h-8" />
 </div>
 <div>
 <h4 className="font-bold text-xl mb-2">Uber & Traffic</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 Essential for short trips, but avoid during rush hour. Parking at the stadium will be $50+ and traffic is brutal.
 </p>
 </div>
 </div>
 </div>
 
 <div className=" rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 h-fit">
 <h4 className="font-bold text-2xl mb-6">Distance to Stadium</h4>
 <ul className="space-y-6">
 {[
 { label: "South Beach", time: "45-60 min drive" },
 { label: "Brickell", time: "30-45 min drive" },
 { label: "Hollywood", time: "15-20 min drive" },
 { label: "MIA Airport", time: "20-30 min drive" }
 ].map((item, i) => (
 <li key={i} className="flex justify-between items-center text-lg border-b border-slate-200 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
 <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
 <span className="font-bold text-slate-900 dark:text-white">{item.time}</span>
 </li>
 ))}
 </ul>
 <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
 <AffiliateButton href="#" text="Book Brightline Tickets" variant="secondary" />
 </div>
 </div>
 </div>
 </Section>

 <Section id="dining" title="Food & Drink">
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { title: "Soul Food", desc: "Famous Southern comfort food. Try fried chicken, mac n cheese, and collard greens at Mary Mac's Tea Room." },
 { title: "The Varsity", desc: "The world's largest drive-in restaurant. A legendary spot for chili dogs and frosted orange shakes." },
 { title: "Ponce City Market", desc: "A massive food hall in a historic building. Great for groups with diverse tastes. Access via BeltLine." }
 ].map((item, i) => (
 <div key={i} className=" p-8 rounded-[2rem] shadow-lg border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
 <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 mb-6">
 <Utensils className="w-6 h-6" />
 </div>
 <h4 className="font-bold text-xl mb-3">{item.title}</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="attractions" title="Beyond the Pitch">
 <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed">
 Miami's attractions are spread out. You'll need to drive or Uber between South Beach (Art Deco), Wynwood (Street Art), and Downtown (Museums).
 </p>
 
 <div className="grid md:grid-cols-3 gap-8 mb-12">
 <div className="group cursor-pointer">
 <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
 <Image 
 src="/images/cities/miami-world-cup-2026-1600.webp" 
 alt="Wynwood Walls" 
 fill 
 className="object-cover group-hover:scale-110 transition-transform duration-700"
  unoptimized />
 <div className="absolute inset-0" />
 <div className="absolute bottom-6 left-6 text-white">
 <h4 className="font-bold text-xl">Wynwood Walls</h4>
 <p className="text-sm opacity-80">Open Air Street Art Museum</p>
 </div>
 </div>
 </div>
 <div className="group cursor-pointer">
 <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
 <Image 
 src="/images/cities/miami-world-cup-2026-1600.webp" 
 alt="Frost Science Museum" 
 fill 
 className="object-cover group-hover:scale-110 transition-transform duration-700"
  unoptimized />
 <div className="absolute inset-0" />
 <div className="absolute bottom-6 left-6 text-white">
 <h4 className="font-bold text-xl">Frost Science</h4>
 <p className="text-sm opacity-80">Aquarium & Planetarium</p>
 </div>
 </div>
 </div>
 <div className="group cursor-pointer">
 <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
 <Image 
 src="/images/cities/miami-world-cup-2026-1600.webp" 
 alt="Vizcaya Museum" 
 fill 
 className="object-cover group-hover:scale-110 transition-transform duration-700"
  unoptimized />
 <div className="absolute inset-0" />
 <div className="absolute bottom-6 left-6 text-white">
 <h4 className="font-bold text-xl">Vizcaya Gardens</h4>
 <p className="text-sm opacity-80">Historic Italian Estate</p>
 </div>
 </div>
 </div>
 </div>
 
 <div className=" rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
 <div className="flex-1">
 <h4 className="font-bold text-3xl mb-4">Go City Miami Pass</h4>
 <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
 Save up to 50% on top attractions like Miami Seaquarium, Big Bus Tours, and Everglades Airboat rides. Essential for families.
 </p>
 <AffiliateButton href="#" text="Get Miami CityPASS (Save 50%)" variant="primary" />
 </div>
 <div className="w-full md:w-1/3 aspect-square relative rounded-2xl p-6 shadow-xl -rotate-3">
 <div className="absolute inset-0 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl m-2" />
 <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
 <Ticket className="w-12 h-12 text-emerald-500 mb-4" />
 <span className="font-black text-4xl text-slate-900 dark:text-white mb-2">SAVE</span>
 <span className="font-bold text-xl text-emerald-500">50% OFF</span>
 </div>
 </div>
 </div>
 </Section>

 <Section id="safety" title="Safety & Security">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><Shield className="w-6 h-6 text-emerald-500"/> Event Patterns</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Matchdays concentrate crowds around the park and MARTA stations. Stick to lit routes, travel in small groups, and use official platforms.</p>
 </div>
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Practical Tips</h4>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400">
 <li>• Keep valuables front-facing on trains.</li>
 <li>• Use rideshare pickup zones; avoid unofficial touts.</li>
 <li>• Save local emergency contacts offline.</li>
 </ul>
 <div className="mt-6">
 <AffiliateButton href="#" text="Get Travel Insurance" variant="secondary" />
 </div>
 </div>
 </div>
 </Section>

 <Section id="culture" title="Local Vibe">
 <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">
 Miami is a melting pot of Latin American cultures. Spanish is spoken everywhere. Tipping: 18–20% is often included (check the bill!). Dress code: "Dress to Impress" is real here.
 </p>
 <div className="grid md:grid-cols-2 gap-8">
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><Users className="w-6 h-6 text-emerald-500"/> Social Etiquette</h4>
 <ul className="space-y-4">
 <li className="flex gap-3 text-slate-600 dark:text-slate-400"><span className="text-emerald-500 font-bold">•</span> Greetings: A kiss on the cheek is common.</li>
 <li className="flex gap-3 text-slate-600 dark:text-slate-400"><span className="text-emerald-500 font-bold">•</span> Time: "Miami Time" is real. 15 mins late is on time.</li>
 <li className="flex gap-3 text-slate-600 dark:text-slate-400"><span className="text-emerald-500 font-bold">•</span> Dining: Dinner is late (9 PM onwards).</li>
 </ul>
 </div>
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Stay Smart</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Matchdays concentrate crowds around the stadium and shuttle stops. Stick to lit routes, travel in small groups, and use official platforms.</p>
 </div>
 </div>
 </Section>

 <Section id="packing" title="Climate & Packing">
 <div className="grid md:grid-cols-3 gap-6">
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-2xl mb-4">Summer Essentials</h4>
 <ul className="space-y-3">
 {[
 "Light, breathable clothing (Linen/Cotton)",
 "Comfortable walking shoes",
 "High SPF Sunscreen",
 "Hat and Sunglasses",
 "Rain Poncho (Tropical storms are sudden)"
 ].map((item, i) => (
 <li key={i} className="flex items-center gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {item}
 </li>
 ))}
 </ul>
 </div>
 <div className="flex items-center justify-center p-8 bg-emerald-900 text-white rounded-[2rem] text-center">
 <div>
 <Sun className="w-16 h-16 text-amber-400 mx-auto mb-4" />
 <p className="text-emerald-200 font-bold text-xl">Average Temp: 88°F (31°C)</p>
 <p className="text-emerald-200">Humidity: High</p>
 </div>
 </div>
 <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-[2rem] flex flex-col justify-center">
 <h4 className="font-bold text-xl mb-2">Power & Data</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-4">US Type A/B plugs (120V). Bring a universal adapter and a power bank for long match days.</p>
 <AffiliateButton href="#" text="Get eSIM" variant="outline" />
 </div>
 </div>
 </Section>

 <Section id="faq" title="Fan FAQ">
 <div className="grid md:grid-cols-2 gap-6">
 <FAQItem 
 question="Is the stadium air-conditioned?" 
 answer="No. It has a canopy roof that provides shade, but it is open-air. Expect heat and humidity." 
 />
 <FAQItem 
 question="Can I walk to the stadium?" 
 answer="No. The stadium is surrounded by parking lots and highways. It is not pedestrian-friendly. Use the shuttle." 
 />
 <FAQItem 
 question="Best area for nightlife?" 
 answer="South Beach (Ocean Drive) for clubs, Wynwood for bars/art, Brickell for upscale lounges." 
 />
 <FAQItem 
 question="Is public transport safe?" 
 answer="The Brightline is very safe and premium. The Metromover in Brickell is also safe. Local buses can be slower." 
 />
 </div>
 </Section>

 </main>
    </div>
  </div>
);
}













