'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { 
 MapPin, Calendar, Users, ArrowRight, Info, CheckCircle2, 
 Trophy, Plane, Hotel, Ticket, Share2, MessageSquare, 
 ThumbsUp, Send, HelpCircle, Utensils, Camera, Sun, 
 DollarSign, Shield, Clock, Globe, Star, ExternalLink,
 Train, Bus, Car, Bike, AlertTriangle, Briefcase,
 X, ChevronRight, Facebook, Twitter, Linkedin, Copy,
 Thermometer, Droplets, Wind, Music, ShoppingBag
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
    const text = document.title;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-4 top-1/3 z-40 hidden xl:flex flex-col gap-3"
    >
      <div className="backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-3">
        <button onClick={() => handleShare('twitter')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors">
          <Twitter className="w-5 h-5" />
        </button>
        <button onClick={() => handleShare('facebook')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors">
          <Facebook className="w-5 h-5" />
        </button>
        <button onClick={() => handleShare('linkedin')} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors">
          <Linkedin className="w-5 h-5" />
        </button>
        <button onClick={handleCopy} className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors relative">
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
 <details className="group border-b border-slate-200 dark:border-slate-200 dark:border-slate-800">
 <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
 <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors pr-8">
 {question}
 </h3>
 <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 group-open:bg-emerald-500 group-open:border-emerald-500 group-open:text-slate-900 dark:text-white transition-all duration-300">
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
 { id: 'matches', label: 'Matches' },
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
 src="/images/cities/houston-world-cup-2026-1600.webp" 
 alt="Houston Skyline" 
 fill 
 className="object-cover"
 priority sizes="100vw"
  unoptimized />
 <div className="absolute inset-0 bg-gradient-to-b from-slate-200/40 via-slate-200/60 to-[#F5F5F7] dark:from-[#0A0A0A]/40 dark:via-[#0A0A0A]/60 dark:to-[#0A0A0A]" />
 </div>

 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-12 pt-20">
 <div className="max-w-4xl">
                {/* Breadcrumbs */}
                <Breadcrumb 
                  items={[
                    { label: "Host Cities", href: "/world-cup-2026-host-cities-guide" },
                    { label: "Houston", href: "/world-cup-2026-host-cities-guide/houston-city-guide" }
                  ]} 
                  
                  className="mb-6"
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-6">
 <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-xs font-medium tracking-widest uppercase backdrop-blur-md">
 Host City
 </span>
 <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-900 dark:text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-emerald-500/20">
 Round of 32 Host
 </span>
 </div>
 
 <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-[0.9]">
 HOUSTON
 </h1>
 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-xl leading-relaxed">
              Space City. <span className="text-slate-900 dark:text-white font-medium">World Cup 2026</span> definitive guide.
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
 <div className="space-y-1 relative border-l-2 border-slate-200 dark:border-slate-200 dark:border-slate-800 ml-3">
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
 Houston is America's fourth-largest city and arguably its most culturally diverse. It is a sprawling metropolis known for space exploration, world-class dining, and Southern hospitality. For the World Cup, the key is mastering the AC tunnels and the METRORail.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { icon: MapPin, title: "Where to Base", text: "Downtown or Medical Center. Both connect directly to NRG Stadium via the Red Line." },
 { icon: Train, title: "Transport Strategy", text: "METRORail Red Line is essential. It connects Downtown, Museum District, and NRG Stadium. Avoid driving." },
 { icon: DollarSign, title: "Budget Signals", text: "More affordable than coastal hubs. Book early to secure rates near the rail line." }
 ].map((item, i) => (
 <div key={i} className="p-8 rounded-[2rem] transition-colors">
 <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
 <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
 </div>
 ))}
 </div>
 <div className="mt-12 flex flex-wrap gap-4">
            <AffiliateButton href="https://www.skyscanner.com/transport/flights/to/iah" text="Search Houston Flights" variant="secondary" icon={Plane} />
            <AffiliateButton href="https://www.booking.com/searchresults.html?ss=Downtown+Houston" text="Check Downtown Hotels" variant="primary" icon={Hotel} />
          </div>
 </Section>

 <Section id="visa" title="Visa & Entry (USA)">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Who Needs a Visa?</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Citizens of Visa Waiver Program countries can use ESTA for short stays. Others require a B-2 tourist visa. Check status as of Dec 2025 and apply early.</p>
            <AffiliateButton href="https://esta.cbp.dhs.gov/" text="Check ESTA Eligibility" variant="outline" />
          </div>
          <div className="p-8 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-[2rem]">
            <h4 className="font-bold text-2xl mb-4">Arrival Tips</h4>
            <ul className="space-y-4 mb-8">
              {['Use automated passport control at IAH', 'Proof of onward travel required', 'Carry digital copies of tickets'].map((item, i) => (
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
 { time: "6–9 Months Out", desc: "Book flights and refundable hotels in Downtown/Medical Center. Set price alerts." },
 { time: "3–6 Months Out", desc: "Confirm match tickets. Reserve airport transfers and key restaurants (BBQ spots fill up)." },
 { time: "1–3 Months Out", desc: "Lock in eSIMs, clear stadium bags, and Space Center tours. Re-price hotels weekly." }
 ].map((item, i) => (
  <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] items-center">
   <div className="shrink-0 w-48 font-black text-2xl text-emerald-500">{item.time}</div>
   <p className="text-lg text-slate-700 dark:text-slate-300">{item.desc}</p>
  </div>
 ))}
 </div>
 <div className="mt-8 flex flex-wrap gap-4">
          <AffiliateButton href="https://www.google.com/travel/flights" text="Set Flight Alerts" variant="primary" icon={Plane} />
        </div>
 </Section>

 <Section id="budget" title="Budgeting">
 <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
 Houston is generally more affordable than coastal cities like New York or LA. Accommodation offers good value, especially if you book early.
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { label: "Budget Hotel", price: "$100-150" },
 { label: "Mid-Range", price: "$150-300" },
 { label: "Luxury", price: "$400+" },
 { label: "Beer", price: "$6-9" },
 { label: "Meal", price: "$15-25" },
 { label: "Metro", price: "$1.25" },
 { label: "Coffee", price: "$4-6" },
 { label: "Sim Card", price: "$30" }
 ].map((item, i) => (
 <div key={i} className=" p-6 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 text-center hover:border-emerald-500 transition-colors">
 <p className="text-sm text-slate-500 mb-2 font-medium">{item.label}</p>
 <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{item.price}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="stadium" title="NRG Stadium">
 <LightboxImage 
 src="/images/stadiums/nrg-stadium-houston-texas-world-cup-2026-1600.webp" 
 alt="NRG Stadium Interior" 
 caption="NRG Stadium: The world's first retractable roof NFL stadium, equipped with massive AC capacity."
 />
 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
 <p>
 <strong>NRG Stadium</strong> is a marvel of engineering designed specifically to defeat the Texas heat. With a capacity of 72,220 and a fully retractable roof (which will likely stay closed for cooling), it guarantees a perfect 72°F match environment regardless of the sweltering conditions outside.
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500"/> Key Features</h4>
 <ul className="space-y-4">
 {[
 { label: "Capacity", val: "72,220" },
 { label: "Surface", val: "Natural Grass (Temp)" },
 { label: "Climate", val: "Full AC + Retractable Roof" },
 { label: "Opened", val: "2002" }
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
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Clear Bag Policy: Strictly enforced. 12" x 6" x 12".</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Ride the Rail: Do not drive. Parking is chaotic.</li>
 <li className="flex gap-3"><span className="text-emerald-500 font-bold">•</span> Hydration: It is hot outside. Drink water before arrival.</li>
 </ul>
 </div>
 </div>
 <div className="p-8 rounded-[2rem] border border-emerald-500/20">
 <p className="text-lg text-center font-medium text-emerald-800 dark:text-emerald-200">
 <strong>Getting There:</strong> The **METRORail Red Line** stops right at the stadium. It connects directly to Downtown and the Museum District. This is the only way to travel on match days.
 </p>
 </div>
 </Section>

 <Section id="tickets" title="Tickets">
 <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[2.5rem] p-8 md:p-12 text-slate-900 dark:text-white overflow-hidden relative">
 <div className="relative z-10">
 <h3 className="text-3xl font-black mb-6">Official Sales Phase</h3>
 <p className="text-emerald-100 text-lg mb-8 max-w-2xl">
 Tickets will be sold exclusively through FIFA's official portal. Sign up for the lottery now to secure your chance.
 </p>
 <div className="flex flex-wrap gap-4">
            <AffiliateButton href="https://www.fifa.com/tickets" text="FIFA Portal" variant="secondary" />
            <AffiliateButton href="https://www.fifa.com/worldcup/tickets" text="Set Alert" variant="outline" />
          </div>
 </div>
 <Ticket className="absolute -bottom-12 -right-12 w-96 h-96 text-emerald-400/20 rotate-12" />
 </div>
 </Section>

 <Section id="matches" title="Match Schedule">
 <div className="space-y-4">
 {[
 { date: "June 14", stage: "Group Stage", teams: "Match 7" },
 { date: "June 17", stage: "Group Stage", teams: "Match 16" },
 { date: "June 20", stage: "Group Stage", teams: "Match 24" },
 { date: "June 23", stage: "Group Stage", teams: "Match 31" },
 { date: "June 26", stage: "Group Stage", teams: "Match 39" },
 { date: "June 29", stage: "Round of 32", teams: "Match 75" },
 { date: "July 4", stage: "Round of 16", teams: "Match 89" }
 ].map((match, i) => (
 <div key={i} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
 <div className="flex items-center gap-6">
 <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center text-slate-500">
 <span className="text-xs font-bold uppercase">{match.date.split(' ')[0]}</span>
 <span className="text-2xl font-black text-slate-900 dark:text-white">{match.date.split(' ')[1]}</span>
 </div>
 <div>
 <h4 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">{match.teams}</h4>
 <p className="text-slate-500 font-medium">{match.stage}</p>
 </div>
 </div>
 <div className="flex items-center gap-4 pl-22 md:pl-0">
 <span className="text-sm font-bold text-slate-400">20:00 Local</span>
 <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-slate-900 dark:text-white transition-all">
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </div>
 ))}
 </div>
 </Section>

 <Section id="hotels" title="Where to Stay">
 <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
 The best areas to stay are <strong>Downtown</strong>, the <strong>Museum District</strong>, or the <strong>Medical Center</strong>. All are connected to the stadium by the Red Line.
 </p>
 <div className="grid md:grid-cols-2 gap-8">
 <HotelCard 
 name="Marriott Marquis Houston" 
 rating={5} 
 price="$350" 
 distance="20 min Rail"
 features={['Lazy River', 'Downtown', 'Luxury', 'Pool']}
 image="/images/hotels/marriott-marquis.webp"
 link="https://www.booking.com/searchresults.html?ss=Marriott+Marquis+Houston"
 />
 <HotelCard 
 name="Hotel Zaza Museum District" 
 rating={4} 
 price="$280" 
 distance="10 min Rail"
 features={['Boutique', 'Museums', 'Stylish', 'Spa']}
 image="/images/hotels/hotel-zaza.webp"
 link="https://www.booking.com/searchresults.html?ss=Hotel+Zaza+Museum+District"
 />
 </div>
 </Section>

 <Section id="transport" title="Getting Around">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Train className="w-6 h-6 text-emerald-500"/> METRORail (Red Line)</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 The Red Line is your lifeline. It connects Downtown, the Museum District, and NRG Stadium. Cost: $1.25 per ride.
 </p>
 </div>
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Plane className="w-6 h-6 text-emerald-500"/> Airport Transfer</h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 IAH (Bush) is the main international hub. Hobby (HOU) is closer to downtown. Rideshare or shuttle is recommended from both.
 </p>
 </div>
 </div>
 <div className="p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-6">Travel Times</h4>
 <ul className="space-y-4">
 {[
 { label: "Downtown Hotels", time: "20 min Rail" },
 { label: "Museum District", time: "10 min Rail" },
 { label: "Galleria", time: "30 min Drive" },
 { label: "Airport (IAH)", time: "45 min Drive" }
 ].map((item, i) => (
 <li key={i} className="flex justify-between items-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-200 dark:border-slate-800 pb-3 last:border-0">
 <span>{item.label}</span>
 <span className="font-bold">{item.time}</span>
 </li>
 ))}
 </ul>
 <div className="mt-8">
            <AffiliateButton href="https://www.uber.com/" text="Book Airport Transfer" variant="secondary" />
          </div>
 </div>
 </div>
 </Section>

 <Section id="dining" title="Local Cuisine">
 <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
 Houston has one of the best food scenes in the US. Do not leave without trying <strong>Viet-Cajun Crawfish</strong>, authentic <strong>Tex-Mex</strong>, and slow-smoked <strong>BBQ</strong>.
 </p>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { name: "Viet-Cajun Crawfish", desc: "Spicy, garlic-buttery shellfish.", icon: Utensils },
 { name: "Texas BBQ", desc: "Brisket and ribs. Slow smoked.", icon: Utensils },
 { name: "Tex-Mex", desc: "Fajitas and margaritas.", icon: Utensils }
 ].map((food, i) => (
 <div key={i} className=" p-8 rounded-[2rem] transition-colors">
 <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 mb-6">
 <food.icon className="w-6 h-6" />
 </div>
 <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{food.name}</h4>
 <p className="text-slate-600 dark:text-slate-400">{food.desc}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="attractions" title="Things to Do">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="group relative overflow-hidden rounded-[2rem] h-80">
 <Image src="/images/attractions/space-center.webp" alt="Space Center Houston" fill className="object-cover transition-transform duration-700 group-hover:scale-110"  unoptimized />
 <div className="absolute inset-0 flex flex-col justify-end p-8">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Space Center Houston</h3>
 <p className="text-slate-200">Home of NASA Mission Control and Saturn V rocket.</p>
 </div>
 </div>
 <div className="group relative overflow-hidden rounded-[2rem] h-80">
 <Image src="/images/attractions/museum-district.webp" alt="Museum District" fill className="object-cover transition-transform duration-700 group-hover:scale-110"  unoptimized />
 <div className="absolute inset-0 flex flex-col justify-end p-8">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Museum District</h3>
 <p className="text-slate-200">19 museums in a beautiful walkable park setting.</p>
 </div>
 </div>
 </div>
 </Section>

 <Section id="tips" title="Local Tips">
 <div className=" p-8 rounded-[2rem] border border-amber-100 dark:border-amber-800">
 <ul className="space-y-6">
 {[
 { title: "Underground Tunnels", desc: "Downtown has 6 miles of AC tunnels connecting buildings. Use them to escape the heat." },
 { title: "Tipping", desc: "20% is standard in restaurants and bars." },
 { title: "Dress Code", desc: "Casual is fine almost everywhere. Shorts are acceptable due to heat." }
 ].map((tip, i) => (
 <li key={i} className="flex gap-4">
 <div className="w-8 h-8 dark:bg-amber-900/40 rounded-full flex items-center justify-center text-amber-600 shrink-0 font-bold">
 {i + 1}
 </div>
 <div>
 <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">{tip.title}</h4>
 <p className="text-amber-800 dark:text-amber-200">{tip.desc}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </Section>

 <Section id="safety" title="Safety">
 <div className="grid md:grid-cols-2 gap-8">
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-500"/> Safe Zones</h4>
 <p className="text-slate-600 dark:text-slate-400">
 Downtown, Midtown, Montrose, and the Medical Center are generally safe and well-patrolled.
 </p>
 </div>
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500"/> Caution Areas</h4>
 <p className="text-slate-600 dark:text-slate-400">
 Avoid walking alone late at night in unlit areas. Be aware of your surroundings near transit stations.
 </p>
 </div>
 </div>
 </Section>

 <Section id="culture" title="Culture & Vibe">
 <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
 Houston is a melting pot. It's Southern, it's Texan, but it's also incredibly international. You'll hear dozens of languages spoken and find pockets of culture from all over the world.
 </p>
 <div className=" p-8 rounded-[2rem]">
 <h4 className="font-bold text-xl mb-4">Did You Know?</h4>
 <p className="text-slate-600 dark:text-slate-400">
 Houston is the most diverse city in the United States, surpassing even New York and Los Angeles. This diversity is best experienced through its food and festivals.
 </p>
 </div>
 </Section>

 <Section id="packing" title="What to Pack">
 <div className=" p-8 rounded-[2rem]">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 "Lightweight Clothing", "Sunscreen (SPF 50+)", "Sunglasses", "Hat",
 "Comfortable Shoes", "Power Adapter (US)", "Refillable Bottle", "Light Jacket (for AC)"
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
 <CheckCircle2 className="w-4 h-4 text-emerald-500" />
 <span className="text-sm font-medium">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </Section>

 <Section id="faq" title="FAQ">
 <div className="space-y-4">
 <FAQItem 
 question="Is public transport good?"
 answer="The METRORail Red Line is excellent for the World Cup as it connects the stadium to downtown. Buses exist but can be slow. For other areas, you might need rideshare."
 />
 <FAQItem 
 question="How hot will it be?"
 answer="Very hot. Highs of 95°F (35°C) are common. However, the stadium has a roof and AC, and most indoor places are heavily air-conditioned."
 />
 <FAQItem 
 question="Can I visit NASA?"
 answer="Yes! Space Center Houston is a must-visit. It's about a 30-45 minute drive from downtown. Tours of the Johnson Space Center are available."
 />
 </div>
 </Section>

      <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">Explore Other Host Cities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'New York/New Jersey', slug: 'new-york-city-guide' },
            { name: 'Los Angeles', slug: 'los-angeles-city-guide' },
            { name: 'Mexico City', slug: 'mexico-city-city-guide' },
            { name: 'Toronto', slug: 'toronto-city-guide' },
            { name: 'Dallas', slug: 'dallas-city-guide' },
            { name: 'Miami', slug: 'miami-city-guide' },
            { name: 'Atlanta', slug: 'atlanta-city-guide' },
            { name: 'Boston', slug: 'boston-city-guide' }
          ].map((city) => (
            <Link key={city.slug} href={`/world-cup-2026-host-cities-guide/${city.slug}`} className="block p-4 border border-slate-200 dark:border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all text-center font-bold text-slate-700 dark:text-slate-200">
              {city.name}
            </Link>
          ))}
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















