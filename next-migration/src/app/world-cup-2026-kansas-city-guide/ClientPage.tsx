'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { 
 MapPin, ArrowRight, Info, CheckCircle2, 
 Plane, Hotel, Ticket, Copy,
 Utensils, Camera, Sun, 
 DollarSign, Shield, Star,
 Train, Car, Briefcase,
  X, ChevronRight, Facebook, Twitter, Linkedin, AlertTriangle
} from 'lucide-react';


// --- Design System & Components ---

const fadeIn = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// 2. Floating Social Share
const SocialShare = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this guide to World Cup 2026 in Kansas City!";
    
    let shareUrl = "";
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-4 top-1/3 z-40 hidden xl:flex flex-col gap-3"
    >
      <div className="backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-3">
        <button onClick={() => handleShare('twitter')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" title="Share on Twitter">
          <Twitter className="w-5 h-5" />
        </button>
        <button onClick={() => handleShare('facebook')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" title="Share on Facebook">
          <Facebook className="w-5 h-5" />
        </button>
        <button onClick={() => handleShare('linkedin')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" title="Share on LinkedIn">
          <Linkedin className="w-5 h-5" />
        </button>
        <button onClick={handleCopy} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors" title="Copy Link">
          {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
        </button>
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
 <Image src={src} alt={alt} width={1200} height={800} className="object-cover w-full h-[400px] md:h-[600px] transition-transform duration-700 group-hover:scale-105"  unoptimized />
 <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-300" />
 {caption && (
 <div className="absolute bottom-0 left-0 right-0 p-6">
 <p className="text-slate-900 dark:text-white font-medium">{caption}</p>
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
 <button className="absolute top-8 right-8 text-white/50 hover:text-slate-900 dark:text-white p-2">
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
    primary: "bg-emerald-500 text-slate-900 dark:text-white hover:bg-emerald-400 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.6)]",
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
 <div className="group rounded-[2rem] overflow-hidden bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
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
 <details className="group border-b border-slate-200 dark:border-white/10">
  <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
   <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors pr-8">
    {question}
   </h3>
   <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/10 group-open:bg-emerald-500 group-open:border-emerald-500 group-open:text-slate-900 dark:text-white transition-all duration-300">
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
    src="/images/cities/kansas-city-world-cup-2026-1600.webp" 
    alt="Kansas City Skyline" 
    fill 
    className="object-cover"
    priority sizes="100vw"
    unoptimized />
   <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#F5F5F7] dark:to-[#0A0A0A]" />
  </div>

 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-12 pt-20">
<div className="max-w-4xl">
               {/* Breadcrumbs */}
               <Breadcrumb 
                 variant="white"
                 items={[
                   { label: 'Host Cities', href: '/world-cup-2026-host-cities' },
                   { label: 'Kansas City', href: '/world-cup-2026-kansas-city-guide' }
                 ]} 
               />

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               >
                 <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              Last Updated: January 4, 2026
            </span>
            <span className="px-3 py-1 rounded-full border border-white/30 text-white text-xs font-medium tracking-widest uppercase backdrop-blur-md">
              Host City
            </span>
<span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-emerald-500/20">
Quarterfinal Host
</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
KANSAS CITY
</h1>
<p className="text-xl md:text-2xl text-slate-900 dark:text-white/90 font-light max-w-xl leading-relaxed">
Heart of America. <span className="text-slate-900 dark:text-white font-medium">World Cup 2026</span> definitive guide.
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
 : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-600 dark:text-slate-300'
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
 Kansas City brings a unique "village" feel to the World Cup, where the entire city transforms into a festival. While Arrowhead Stadium is 8 miles east of downtown, the vibrant culture of BBQ, jazz, and fountains centers around the Power & Light District and the Plaza.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { icon: MapPin, title: "Where to Base", text: "Downtown or Crossroads for the Fan Fest and streetcar access. Stay near the stadium only if you have a car." },
 { icon: Car, title: "Transport Strategy", text: "KC is a driving city. Use the free streetcar downtown, but plan for shuttles or rideshare to reach Arrowhead." },
 { icon: DollarSign, title: "Budget Signals", text: "Generally more affordable than coastal hosts, but demand for the Quarterfinal will spike hotel rates." }
 ].map((item, i) => (
 <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 transition-colors">
 <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
 <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="mt-12 flex flex-wrap gap-4">
<AffiliateButton href="https://www.skyscanner.com/transport/flights/to/mci" text="Search KC Flights" variant="secondary" icon={Plane} />
<AffiliateButton href="https://www.booking.com/searchresults.html?ss=Kansas+City&nflt=district%3D2092" text="Check Downtown Hotels" variant="primary" icon={Hotel} />
</div>
 </Section>

 <Section id="visa" title="Visa & Entry (USA)">
   <div className="grid md:grid-cols-2 gap-8">
    <div className="p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
     <h4 className="font-bold text-2xl mb-4">Who Needs a Visa?</h4>
     <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Citizens of Visa Waiver Program countries can use ESTA for short stays. Others require a B-2 tourist visa. Check status as of Dec 2025 and apply early.</p>
     <AffiliateButton href="https://esta.cbp.dhs.gov/" text="Check ESTA Eligibility" variant="outline" />
    </div>
    <div className="p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
     <h4 className="font-bold text-2xl mb-4">Arrival Tips</h4>
 <ul className="space-y-4 mb-8">
 {['Use MCI’s new terminal automated control', 'Proof of onward travel required', 'Carry digital copies of tickets'].map((item, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
 <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
 </li>
 ))}
 </ul>
 <AffiliateButton href="https://www.worldnomads.com/" text="Buy Travel Insurance" variant="secondary" />
 </div>
 </div>
 </Section>

 <Section id="planning" title="Planning Timeline">
 <div className="space-y-6">
 {[
 { time: "6–9 Months Out", desc: "Book flights and refundable hotels in Downtown/Crossroads. Set price alerts. If traveling multi-city, plan open-jaw tickets." },
 { time: "3–6 Months Out", desc: "Confirm match tickets. Reserve airport transfers and key BBQ restaurants like Joe's KC and Q39." },
 { time: "1–3 Months Out", desc: "Lock in eSIMs, clear stadium bags, and museum tickets. Re-price hotels weekly; big events often trigger cancellations." }
 ].map((item, i) => (
 <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] items-center bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <div className="shrink-0 w-48 font-black text-2xl text-emerald-500">{item.time}</div>
 <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 flex flex-wrap gap-4">
<AffiliateButton href="https://www.skyscanner.com" text="Set Flight Alerts" variant="primary" icon={Plane} />
<AffiliateButton href="https://www.opentable.com/kansas-city-restaurant-listings" text="Reserve BBQ Tables" variant="outline" />
</div>
 </Section>

 <Section id="budget" title="Budget Tiers">
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { title: "Smart Saver", items: ["Budget motels on I-70", "Streetcar (Free)", "BBQ platters (shared)"] },
 { title: "Comfort Upgrades", items: ["Downtown 4-star hotels", "Rideshare to stadium", "Craft brewery tours"] },
 { title: "Premium", items: ["Plaza luxury hotels", "Private car service", "VIP Jazz experiences"] }
 ].map((tier, i) => (
 <div key={i} className="p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem] hover:shadow-2xl transition-all duration-300">
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
<AffiliateButton href="https://www.kayak.com/packages/Kansas-City-c16136.P16136" text="Search KC Packages" variant="secondary" icon={Briefcase} />
</div>
 </Section>

 <Section id="stadium" title="Arrowhead Stadium">
 <LightboxImage 
 src="/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026-1600.webp" 
 alt="Arrowhead Stadium Interior" 
 caption="The Sea of Red at GEHA Field at Arrowhead Stadium."
 />

 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p>
 Known as the loudest stadium in the world, <strong>GEHA Field at Arrowhead Stadium</strong> is a cathedral of American sports. Famous for its incredible tailgating culture and deafening atmosphere, this open-air venue offers an authentic and intense fan experience.
 </p>
 </div>
 
 <div className="grid md:grid-cols-2 gap-8 mb-12">
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Key Features</h4>
     <ul className="space-y-4">
      {[
       { label: "Capacity", val: "~76,000" },
       { label: "Surface", val: "Natural Grass" },
       { label: "Roof", val: "Open Air" },
       { label: "Record", val: "Loudest Crowd Roar (142.2 dB)" }
      ].map((item, i) => (
       <li key={i} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
        <span className="font-medium text-slate-500">{item.label}</span>
        <span className="font-bold">{item.val}</span>
       </li>
      ))}
     </ul>
    </div>
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Pro Tips</h4>
 <ul className="space-y-4 text-slate-700 dark:text-slate-300">
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Tailgating: Essential part of the experience. Arrive early.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Sun/Rain: No roof cover. Dress for the weather.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Noise: It gets loud. Bring ear protection for kids.</li>
 </ul>
 </div>
 </div>
 
 <div className="p-8 rounded-[2rem] border border-emerald-500/20">
 <p className="text-lg text-center font-medium text-emerald-800 dark:text-emerald-200">
 <strong>Getting There:</strong> Arrowhead is located 8 miles east of downtown. There is <strong>NO direct train</strong>. You must use official shuttles, rideshare, or drive (parking passes required).
 </p>
 </div>
 </Section>

 <Section id="tips" title="Match Day Gameplan">
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {[
 { title: "Arrival", text: "Arrive at least 3-4 hours before kickoff to experience the legendary tailgating scene in the parking lots." },
 { title: "Clear Bag", text: "Strict clear bag policy. Bring sealed water and sunscreen as the stadium is open-air." },
 { title: "Exit Plan", text: "Expect delays leaving the parking complex. Plan to hang out post-match or use the dedicated rideshare lot." }
 ].map((item, i) => (
 <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
 <h4 className="font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="flex flex-wrap gap-4">
<AffiliateButton href="https://www.amazon.com/s?k=clear+stadium+bag" text="Buy Clear Stadium Bag" variant="primary" />
<AffiliateButton href="https://ridekc.org/" text="Book Stadium Shuttle" variant="outline" />
</div>
 </Section>

 <Section id="tickets" title="Schedule & Tickets">
 <div className="bg-emerald-900 dark:bg-emerald-950 text-slate-900 dark:text-white rounded-[2.5rem] p-8 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
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
 { stage: "Quarterfinal", count: "?? HOST MATCH", color: "text-amber-400" }
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
  <div className="p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
   <h4 className="font-bold text-2xl mb-4">Official Tickets</h4>
   <p className="text-slate-600 dark:text-slate-400 mb-8">
    The safest way to buy tickets is through the official FIFA portal. Registration typically opens 12-18 months before the tournament.
   </p>
   <AffiliateButton href="https://www.fifa.com" text="FIFA Official Site" variant="secondary" />
  </div>
  <div className="p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-[2rem]">
   <h4 className="font-bold text-2xl mb-4">Resale Market</h4>
 <p className="text-slate-600 dark:text-slate-400 mb-8">
 Missed the draw? Trusted resale platforms offer verified tickets, though prices will be higher for high-demand matches like the Quarterfinal.
 </p>
 <AffiliateButton href="https://www.stubhub.com/" text="Check StubHub" variant="primary" />
 </div>
 </div>
 </Section>

 <Section id="hotels" title="Where to Stay">
 <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed">
 Most fans should stay in <strong>Downtown</strong> or the <strong>Plaza</strong>. There are very few hotels near the stadium itself. Stay where the action is and commute to the match.
 </p>
 
 <div className="space-y-8">
 <HotelCard 
 name="Loews Kansas City Hotel"
 rating={4.7}
 price="$300 - $550"
 distance="8 miles (Shuttle)"
 features={['Connected to Convention Center', 'Pool', 'Luxury']}
 image="/images/cities/kansas-city-world-cup-2026-640.webp" 
 link="#"
 />
 <HotelCard 
 name="The Raphael Hotel, Autograph Collection"
 rating={4.8}
 price="$350 - $600"
 distance="9 miles (Shuttle)"
 features={['Historic Plaza Location', 'Live Jazz', 'Boutique']}
 image="/images/cities/kansas-city-world-cup-2026-640.webp" 
 link="#"
 />
 <HotelCard 
 name="Kansas City Marriott Downtown"
 rating={4.2}
 price="$200 - $400"
 distance="8 miles (Shuttle)"
 features={['Central Location', 'Rooftop Bar', 'Large Capacity']}
 image="/images/cities/kansas-city-world-cup-2026-640.webp" 
 link="#"
 />
 </div>
 
 <div className="mt-12 text-center">
<AffiliateButton href="https://www.booking.com/searchresults.html?ss=Kansas+City" text="Search All KC Hotels" variant="outline" />
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
 <h4 className="font-bold text-xl mb-2">KC Streetcar</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 The KC Streetcar is <strong>free</strong> and connects the River Market, Downtown, Crossroads, and Union Station. It’s perfect for exploring the city center but does NOT go to the stadium.
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
 Kansas City International (MCI) has a brand new terminal. Ride-share or rental cars are the best way to get to downtown (~20 mins).
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
 Driving is common here. If you drive to the stadium, buy a parking pass months in advance. Rideshare drop-off zones are available but expect surges.
 </p>
 </div>
 </div>
 </div>
 
 <div className="rounded-[2.5rem] p-8 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 h-fit">
   <h4 className="font-bold text-2xl mb-6">Distance to Stadium</h4>
   <ul className="space-y-6">
    {[
     { label: "Downtown Hotels", time: "15-20 min drive" },
     { label: "Country Club Plaza", time: "20 min drive" },
     { label: "Overland Park", time: "25 min drive" },
     { label: "Airport (MCI)", time: "35 min drive" }
    ].map((item, i) => (
     <li key={i} className="flex justify-between items-center text-lg border-b border-slate-200 dark:border-white/10 pb-4 last:border-0 last:pb-0">
      <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
      <span className="font-bold text-slate-900 dark:text-white">{item.time}</span>
     </li>
    ))}
   </ul>
   <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
<AffiliateButton href="https://www.rentalcars.com/" text="Book Rental Car" variant="secondary" />
</div>
 </div>
 </div>
 </Section>

 <Section id="dining" title="Food & Drink">
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { title: "Joe's Kansas City", desc: "World-famous BBQ in a gas station. The Z-Man sandwich is legendary. Expect a line, but it moves fast." },
 { title: "Q39", desc: "Competition-style BBQ in a rustic-chic setting. The burnt end burger and brisket are must-try items." },
 { title: "Arthur Bryant's", desc: "The 'King of Ribs'. Historic spot near the 18th & Vine Jazz District. Authentic and gritty." }
 ].map((item, i) => (
 <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 shadow-lg border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
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
 Beyond BBQ, Kansas City is known for its jazz heritage, fountains, and world-class museums.
 </p>
 <div className="space-y-6">
 {[
 { title: "National WWI Museum and Memorial", desc: "The only American museum dedicated solely to World War I. Stunning views from the tower.", color: "text-blue-500" },
 { title: "Nelson-Atkins Museum of Art", desc: "Renowned for its neoclassical architecture and extensive collection of Asian art. Free admission.", color: "text-emerald-500" },
 { title: "Negro Leagues Baseball Museum", desc: "A profound look at the history of African American baseball. Located in the historic 18th & Vine district.", color: "text-amber-500" }
 ].map((item, i) => (
 <div key={i} className="flex gap-6 items-center p-6 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl transition-colors shadow-sm hover:shadow-md">
 <div className=" p-4 rounded-2xl shadow-sm shrink-0">
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
<AffiliateButton href="https://www.viator.com/Kansas-City/d5353-ttd" text="View All Attractions" variant="primary" />
</div>
 </Section>

 <Section id="safety" title="Safety & Security">
   <div className="grid md:grid-cols-2 gap-8">
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><Shield className="w-6 h-6 text-emerald-500"/> Event Patterns</h4>
     <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Downtown and the Plaza are safe tourist areas. Be cautious in unlit areas late at night. The stadium atmosphere is intense but generally safe.</p>
    </div>
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-4 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-amber-500"/> Practical Tips</h4>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400">
 <li>• Use official rideshare pickup zones.</li>
 <li>• Don't leave valuables visible in cars.</li>
 <li>• Stay hydrated in the summer heat.</li>
 </ul>
 <div className="mt-6">
<AffiliateButton href="https://www.worldnomads.com/" text="Get Travel Insurance" variant="secondary" />
</div>
 </div>
 </div>
 </Section>

 <Section id="culture" title="Cultural Intelligence">
 <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">Kansas City is the "Heart of America". People are incredibly friendly. Tipping is standard (18-22%). BBQ is a religion here.</p>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: "Fan Zones", desc: "Power & Light District (KC Live!) will be the central hub for watch parties and events." },
 { title: "Dining Etiquette", desc: "BBQ is often casual/counter service. Don't be afraid to use your hands. Ask locals for their favorite spot." },
 { title: "Jazz Heritage", desc: "Visit the Blue Room or Green Lady Lounge for authentic jazz. Shows go late into the night." }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl">
 <h4 className="font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="packing" title="Climate & Packing">
   <div className="grid md:grid-cols-3 gap-6">
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Sun className="w-6 h-6 text-amber-500"/> June July Weather</h4>
     <p className="text-slate-600 dark:text-slate-400">Hot and humid. Highs of 85 95 F. Sudden thunderstorms are possible.</p>
    </div>
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-4">Essentials</h4>
     <ul className="space-y-2 text-slate-600 dark:text-slate-400">
      <li> Sunscreen & Hat</li>
      <li> Light rain poncho</li>
      <li> Comfortable walking shoes</li>
     </ul>
    </div>
    <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
     <h4 className="font-bold text-xl mb-4">Tech</h4>
 <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
 <li>• US plug adapters (Type A/B)</li>
 <li>• Portable fan</li>
 <li>• eSIM with hotspot</li>
 </ul>
 <AffiliateButton href="https://www.airalo.com/united-states-esim" text="Get an eSIM" variant="secondary" />
 </div>
 </div>
 </Section>

 <Section id="faq" title="Frequently Asked Questions">
 <div className="space-y-2">
 {[
 { q: "Where is the stadium located?", a: "Arrowhead Stadium is about 8 miles east of downtown Kansas City, in the Truman Sports Complex." },
 { q: "Is there a train to the stadium?", a: "No. You must drive, take a shuttle, or use rideshare. The streetcar only serves the downtown area." },
 { q: "Is Kansas City safe for tourists?", a: "Yes, especially in the main visitor areas like Downtown, the Plaza, and the Crossroads. Use common sense." },
 { q: "What is the weather like in June/July?", a: "Hot and humid. Expect highs around 90°F (32°C). The stadium is open-air, so prepare for sun." },
 { q: "How far is the airport from downtown?", a: "Kansas City International (MCI) is about 20 minutes north of downtown by car." },
 { q: "Which area should I stay in?", a: "Downtown/Crossroads for nightlife and Fan Fest; Country Club Plaza for upscale dining and shopping." },
 { q: "Can I bring a bag to the stadium?", a: "Only clear plastic bags (12x6x12 inches) are allowed. Small clutches are also permitted." },
 { q: "How early should I arrive for matches?", a: "At least 3-4 hours if you want to experience tailgating. 90 minutes if just entering." },
 { q: "Is the stadium air-conditioned?", a: "No, it is an open-air stadium. There are climate-controlled clubs, but most seats are exposed." },
 { q: "What is the best BBQ place?", a: "It's debated! Joe's KC, Q39, Arthur Bryant's, and Gates are all legendary. Try them all." },
 { q: "Where can I watch matches if I don’t have tickets?", a: "The Power & Light District (KC Live!) will likely host massive watch parties." },
 { q: "Are restaurants close to the stadium?", a: "Not really. The stadium is surrounded by parking lots. Eat downtown or tailgate." },
 { q: "Do I need travel insurance?", a: "Yes, highly recommended for international travelers for medical and trip protection." },
 { q: "What mobile connectivity works best?", a: "Major US carriers (AT&T, Verizon, T-Mobile) have strong 5G in KC." },
 { q: "How do I avoid rideshare surge pricing?", a: "Wait a while after the match, or walk to a designated pickup point further away." },
 { q: "Where can I buy souvenirs?", a: "The Chiefs Pro Shop at the stadium or Rally House locations throughout the city." }
 ].map((item, i) => (
 <FAQItem key={i} question={item.q} answer={item.a} />
 ))}
 </div>
 </Section>

 <Section id="essential" title="Essential Information">
 <div className="grid md:grid-cols-2 gap-8">
 <div className=" p-8 rounded-[2rem] border border-slate-200 dark:border-slate-200 dark:border-slate-800">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Shield className="w-6 h-6 text-emerald-500"/> Emergency Numbers</h4>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400">
 <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><strong>Emergency</strong> <span>911</span></li>
 <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><strong>Non-Emergency Police</strong> <span>311</span></li>
 <li className="flex justify-between"><strong>Hospital</strong> <span>KU Medical Center</span></li>
 </ul>
 </div>
 <div className=" p-8 rounded-[2rem] border border-slate-200 dark:border-slate-200 dark:border-slate-800">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Sun className="w-6 h-6 text-emerald-500"/> Connectivity</h4>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-6">
 <li>• <strong>WiFi:</strong> Free on Streetcar & MCI Airport.</li>
 <li>• <strong>Power:</strong> 120V, Type A/B plugs.</li>
 <li>• <strong>Sim Cards:</strong> Best to buy eSIM online.</li>
 </ul>
 <AffiliateButton href="https://www.airalo.com/united-states-esim" text="Get an Airalo eSIM" variant="secondary" />
 </div>
 </div>
 </Section>

 <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">Explore Other Host Cities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/world-cup-2026-new-york-new-jersey-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            New York/New Jersey
          </Link>
          <Link href="/world-cup-2026-los-angeles-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Los Angeles
          </Link>
          <Link href="/world-cup-2026-mexico-city-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Mexico City
          </Link>
          <Link href="/world-cup-2026-toronto-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Toronto
          </Link>
          <Link href="/world-cup-2026-dallas-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Dallas
          </Link>
          <Link href="/world-cup-2026-miami-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Miami
          </Link>
          <Link href="/world-cup-2026-seattle-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Seattle
          </Link>
          <Link href="/world-cup-2026-boston-guide" className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
            Boston
          </Link>
        </div>
        <div className="text-center mt-12">
          <Link href="/world-cup-2026-host-cities" className="text-emerald-500 hover:text-emerald-600 font-bold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
            View All 16 Host Cities <ArrowRight className="w-5 h-5"/>
          </Link>
        </div>
      </div>
 </main>
 </div>
 </div>
 );
}
















