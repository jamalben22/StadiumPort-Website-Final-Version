'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Shield, AlertCircle, TrendingUp, Check, Plane, Hotel, Building2, Trophy, Twitter, Facebook, Linkedin, Copy, CheckCircle2 } from 'lucide-react';
import { GROUPS_DATA, CITY_LINKS, STADIUM_LINKS } from '@/data/draw-hub';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

// --- Social Share Component ---
const SocialShare = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this World Cup 2026 Draw & Travel Hub!";
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
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
      <div className=" backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-3">
        <button 
          onClick={() => handleShare('twitter')}
          className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </button>
        <button 
          onClick={() => handleShare('facebook')}
          className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </button>
        <button 
          onClick={() => handleShare('linkedin')}
          className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </button>
        <button 
          onClick={handleCopy}
          className="p-3 dark:hover:bg-emerald-900/30 rounded-xl text-slate-500 hover:text-emerald-600 transition-colors relative"
          aria-label="Copy link"
        >
          {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
          {copied && (
            <span className="absolute left-full ml-2 px-2 py-1 bg-emerald-500 text-white text-xs rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
};


const containerVariants = {
 hidden: { opacity: 0 },
 show: {
 opacity: 1,
 transition: {
 staggerChildren: 0.1
 }
 }
};

const itemVariants = {
 hidden: { opacity: 0, y: 20 },
 show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function DrawHubClientPage() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-[#01b47d]/30 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
      <SocialShare />
 
 {/* Hero Section */}
 <div className="relative w-full overflow-hidden">
   {/* Background Gradient */}
   <div className="absolute inset-0 bg-gradient-to-b from-[#01b47d]/5 via-transparent to-[#F5F5F7] dark:to-[#0A0A0A] pointer-events-none" />

 <div className="relative max-w-[1440px] mx-auto pt-32 pb-24 px-6 md:px-12 text-center">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-[#01b47d] font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-md"
 >
 🏆 Draw Results & Travel Guides
 </motion.div>
 
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]"
 >
 The Official Draw Is Complete. <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#34D399]">Your Travel Strategy Starts Now.</span>
 </motion.h1>
 
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="max-w-3xl mx-auto"
 >
 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-12">
 The FIFA World Cup 2026 draw has allocated all 48 teams into 12 groups, and every group now has a defined travel footprint across North America.
 </p>
 
 {/* Key Stats */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
 <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Draw Date</p>
 <p className="font-bold text-xl text-slate-900 dark:text-white">December 5, 2025</p>
 </div>
 <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
 <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Location</p>
 <p className="font-bold text-xl text-slate-900 dark:text-white">Washington, D.C</p>
 </div>
 <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
 <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-2">Dates</p>
 <p className="font-bold text-xl text-slate-900 dark:text-white">June 11 - July 19, 2026</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>

 <main className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-12 relative z-10">
 
 {/* Wallchart Figure */}
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="mb-24"
 >
 <figure className="group relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
 <div className="relative w-full aspect-video max-h-[600px] bg-transparent">
 <OptimizedImage
  src="/images/Hub Pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp"
  alt="FIFA World Cup 26 Qualified Teams Wallchart – Stadiumport"
  fill
  containerClassName="bg-transparent dark:bg-transparent"
  imgClassName="object-contain w-full h-full bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-transform duration-700 group-hover:scale-[1.02]"
  />
 </div>
 <div className="absolute inset-0 border-4 border-white/10 rounded-[2rem] pointer-events-none"></div>
 </figure>
 </motion.div>

 {/* Intro Text */}
 <div className="max-w-4xl mx-auto text-center mb-32">
 <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
 This page transforms the draw results into <strong className="text-[#01b47d]">actionable travel intelligence</strong>—showing you exactly where to fly, where to stay, how to move between host cities, and how to avoid the expensive, chaotic mistakes most fans make.
 </p>
 <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
 Stadiumport doesn't just track the matches. We track the logistics that get you to the matches. Use this hub as your master dashboard to explore every group's city cluster, recommended base camps, flight paths, and ideal travel routes.
 </p>
 </div>

 {/* What You Need to Know */}
 <section className="mb-32">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
 Draw Essentials
 </h2>
 <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mt-4 md:mt-0">
 Understanding the mechanics of the 48-team format and how it impacts your travel plans.
 </p>
 </div>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Draw Structure Card */}
 <div className="bg-white dark:bg-slate-900/50 p-10 rounded-[2rem] shadow-xl shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-[#01b47d]/10 flex items-center justify-center text-[#01b47d]">
 <TrendingUp size={20} />
 </div>
 How the Draw Works
 </h3>
 <div className="space-y-6">
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
 The 2026 FIFA World Cup draw determines which teams play in which groups and host cities. Unlike previous tournaments, this expanded 48-team format creates unique travel challenges.
 </p>
 <ul className="space-y-4">
 <li className="flex items-start gap-4">
 <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">1</span>
 <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>48 teams</strong> divided into <strong>12 groups</strong> of 4 teams each.</span>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">2</span>
 <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>Geographic separation</strong> ensures diversity in each group.</span>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">3</span>
 <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>Host nation advantage:</strong> USA, Canada, and Mexico top seeded.</span>
 </li>
 </ul>
 </div>
 </div>

 {/* Logistics Analysis Card */}
 <div className="bg-white dark:bg-slate-900/50 p-10 rounded-[2rem] shadow-xl shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
 <MapPin size={20} />
 </div>
 Travel Logistics
 </h3>
 <div className="space-y-8">
 <div>
 <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4 uppercase tracking-wide text-sm">Challenging Groups</h4>
 <ul className="space-y-3">
 <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
 <AlertCircle size={18} className="text-red-500" />
 <span>Groups requiring 2,000+ miles of travel between matches</span>
 </li>
 <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
 <AlertCircle size={18} className="text-red-500" />
 <span>Groups mixing Pacific Coast + Gulf Coast cities</span>
 </li>
 </ul>
 </div>
 <div>
 <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wide text-sm">Optimal Groups</h4>
 <ul className="space-y-3">
 <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
 <Check size={18} className="text-emerald-500" />
 <span>Concentrated in single regions (Northeast, Pacific NW)</span>
 </li>
 <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
 <Check size={18} className="text-emerald-500" />
 <span>Short travel times (under 3 hours between matches)</span>
 </li>
 </ul>
 </div>
 <p className="text-sm text-slate-400 italic border-t border-slate-100 dark:border-slate-800 pt-4">
 *Full group-by-group analysis and team allocations will be updated immediately after the December 5, 2025 draw.*
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Group Routes Section */}
 <section className="mb-32">
 <div className="mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
 Group Travel Hubs
 </h2>
 <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
 Choose your group to unlock optimized travel routes, base camp recommendations, and logistics strategies.
 </p>
 </div>

 <motion.div 
 variants={containerVariants}
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, margin: "-100px" }}
 className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
 >
 {GROUPS_DATA.map((group) => (
 <motion.div 
 key={group.id}
 variants={itemVariants}
 whileHover={{ y: -8, scale: 1.01 }}
 transition={{ duration: 0.3 }}
 className="group bg-white dark:bg-slate-900/50 rounded-[2rem] p-8 shadow-lg shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden"
 >
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b47d] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
 <div className="flex justify-between items-start mb-6">
 <span className="text-5xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-[#01b47d]/10 transition-colors duration-300">
 {group.id}
 </span>
 <Link 
 href={group.link}
 className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#01b47d] group-hover:text-white transition-all duration-300"
 >
 <ArrowRight size={20} />
 </Link>
 </div>

 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#01b47d] transition-colors">
 {group.name}
 </h3>

 <div className="space-y-6 mb-8">
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
 {group.description}
 </p>
 
 <div className="flex flex-wrap gap-2">
 {group.cityCluster.map((city, idx) => (
 <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50">
 {city.name}
 </span>
 ))}
 </div>
 </div>

 <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
 <div className="space-y-3">
 <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <Plane className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" />
 <span>{(group.highlights[0]?.split(':')[1] ?? '').trim()}</span>
 </div>
 <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <Hotel className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" />
 <span>{(group.highlights[2]?.split(':')[1] ?? '').trim()}</span>
 </div>
 </div>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </section>

 {/* Planning Timeline Section */}
 <section className="mb-32">
 <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
 Your Strategic Timeline
 </h2>
 
 <div className="relative max-w-4xl mx-auto">
 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
 
 <div className="space-y-16">
 {[
 { title: "December 2025", subtitle: "The Draw", items: ["Check group assignment", "Identify base camp", "Book refundable hotels"], color: "bg-[#01b47d]" },
 { title: "January 2026", subtitle: "Flight Release", text: "Flight schedules open ~11 months in advance. Set price alerts immediately.", color: "bg-blue-500" },
 { title: "February 2026", subtitle: "Ticket Allocation", text: "FIFA ticket lottery results are announced. Confirm your specific match dates.", color: "bg-purple-500" },
 { title: "March–April 2026", subtitle: "The Logistics Gap", text: "Prices spike. Book inter-city travel (trains/flights) now if you haven't.", color: "bg-orange-500" },
 { title: "June 2026", subtitle: "Tournament Starts", text: "Arrive in your base camp city 48 hours before the first match to acclimate.", color: "bg-slate-800 dark:bg-white" }
 ].map((item, idx) => (
 <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
 <div className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-slate-700 absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg bg-[#F5F5F7] dark:bg-[#0A0A0A]">
 <div className={`w-6 h-6 rounded-full ${item.color}`} />
 </div>
 <div className="md:w-1/2 pl-20 md:pl-0 md:px-12">
 <div className={`bg-white dark:bg-slate-900/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
 <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${item.color}`}>{item.title}</span>
 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.subtitle}</h3>
 {item.items ? (
 <ul className={`space-y-2 text-slate-600 dark:text-slate-400 ${idx % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
 {item.items.map((li, i) => <li key={i} className="flex items-center gap-2">{idx % 2 === 0 ? <Check size={14} className="text-[#01b47d]" /> : null}{li}{idx % 2 !== 0 ? <Check size={14} className="text-[#01b47d] hidden md:block" /> : null}</li>)}
 </ul>
 ) : (
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
 )}
 </div>
 </div>
 <div className="md:w-1/2" />
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Smart Fans Use Stadiumport */}
    <section className="mb-32 relative overflow-hidden text-slate-900 dark:text-white p-12 md:p-24 text-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#01b47d] opacity-10 dark:opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 opacity-10 dark:opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 dark:text-white">Why Smart Fans Use Stadiumport</h2>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 font-light leading-relaxed">
          Most fans book a round-trip flight to one city and get stuck paying $500+ for last-minute connection flights.
        </p>
        
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl p-10 md:p-14 shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">The Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#01b47d] flex items-center justify-center shrink-0 text-white font-bold text-xl">1</div>
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">We identify <strong className="text-slate-900 dark:text-white">regional hubs</strong> (like Dallas or Atlanta) where you can stay for 2 weeks.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#01b47d] flex items-center justify-center shrink-0 text-white font-bold text-xl">2</div>
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Reach 3-4 different stadiums with short, cheap flights or trains, saving ~30% on travel costs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 {/* FAQ Section */}
 <section className="mb-32 max-w-5xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { q: "When is the World Cup 2026 Draw?", a: "The official draw will take place on December 5, 2025." },
 { q: "How many groups are in the 2026 World Cup?", a: "There are 12 groups (A through L), each containing 4 teams." },
 { q: "Can I buy tickets before the draw?", a: "Yes, you can apply for team-specific tickets (TSTs), but locations aren't confirmed until the draw." },
 { q: "Which group has the easiest travel schedule?", a: "Group A (West Coast) and Group C (East Coast) generally offer the most compact travel schedules." },
 { q: "Which group has the worst travel schedule?", a: "Group I (The Gulf Coast Scramble) involves longer flights and humid summer weather." },
 { q: "How much does it cost to attend?", a: "Budget $2,000-$3,000 for budget trips, up to $15,000+ for premium experiences per person." }
 ].map((faq, idx) => (
 <div key={idx} className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{faq.q}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Essential Reading & Links */}
 <div className="mb-32 border-t border-slate-200 dark:border-slate-800 pt-24">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div>
 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
 <Building2 className="text-[#01b47d]" /> Host City Guides
 </h3>
 <div className="grid grid-cols-2 gap-4">
 {CITY_LINKS.map((city) => (
 <Link key={city.name} href={city.url} className="text-slate-600 dark:text-slate-400 hover:text-[#01b47d] transition-colors text-sm py-1 block">
 {city.name}
 </Link>
 ))}
 </div>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
  <Trophy className="text-[#01b47d]" /> Stadium Guides
  </h3>
 <div className="grid grid-cols-2 gap-4">
 {STADIUM_LINKS.map((stadium) => (
 <Link key={stadium.name} href={stadium.url} className="text-slate-600 dark:text-slate-400 hover:text-[#01b47d] transition-colors text-sm py-1 block">
 {stadium.name}
 </Link>
 ))}
 </div>
 </div>
 </div>
 </div>

 </main>
 </div>
 );
}





