'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
 Trophy, 
 Gavel, 
 Globe2, 
 AlertTriangle, 
 Calendar, 
 CheckCircle2, 
 Gift,
 Mail,
 ShieldCheck,
 FileText
} from 'lucide-react';
import Link from 'next/link';

export default function ClientPage() {
 const highlights = [
 {
 icon: Trophy,
 title: "Win Big",
 description: "Grand Prize: $500 Cash + Official Jersey + Match Ball. Total prize pool over $2,250 USD."
 },
 {
 icon: Globe2,
 title: "Global Entry",
 description: "Open worldwide to legal residents aged 13+ (void where prohibited by law)."
 },
 {
 icon: CheckCircle2,
 title: "Free to Play",
 description: "No purchase necessary. One entry per person. Fair play strictly enforced."
 },
 {
 icon: Calendar,
 title: "Timeline",
 description: "Contest runs Nov 28, 2025 – July 19, 2026. Predictions lock June 11, 2026."
 }
 ];

 const sections = [
 "Eligibility",
 "How To Enter",
 "Scoring & Winners",
 "Prizes",
 "Prize Claiming",
 "Disqualification",
 "Data Use",
 "Liability",
 "Contact"
 ];

 return (
 <div className="min-h-screen font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-slate-900 dark:text-white">
 <main className="pt-32 pb-20 px-4 md:px-6">
 <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Prediction Game', href: '/world-cup-2026-prediction-game' },
            { label: 'Terms', href: '#' }
          ]} 
        />

        {/* Hero Section */}
 <div className="text-center mb-20 animate-fade-up">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 mb-8">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
 </span>
 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
 Official Rules
 </span>
 </div>
 
 <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
 Contest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Terms & Conditions</span>
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
 Official rules for the World Cup 2026 Prediction Contest. Fair play, clear prizes, and global fun.
 </p>
 </div>

 {/* Key Highlights Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-up [animation-delay:200ms]">
 {highlights.map((item, index) => (
 <motion.div 
 key={index}
 whileHover={{ y: -5 }}
 className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all"
 >
 <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
 <item.icon className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
 {item.title}
 </h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
 {item.description}
 </p>
 </motion.div>
 ))}
 </div>

 {/* Main Content Area */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-up [animation-delay:400ms]">
 
 {/* Table of Contents / Sidebar */}
 <div className="lg:col-span-1">
 <div className=" rounded-3xl p-8 sticky top-32">
 <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
 <FileText className="w-5 h-5 text-indigo-500" /> Contents
 </h3>
 <nav className="space-y-3">
 {sections.map((item, i) => (
 <a 
 key={i}
 href={`#section-${i + 1}`}
 className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
 >
 {i + 1}. {item}
 </a>
 ))}
 </nav>
 <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
 <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">NO PURCHASE NECESSARY. VOID WHERE PROHIBITED.</p>
 <p className="text-xs text-slate-500 dark:text-slate-400">Last Updated: November 28, 2025</p>
 </div>
 </div>
 </div>

 {/* Terms Details */}
 <div className="lg:col-span-2 space-y-16">
 
 <section id="section-1">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</div>
 Eligibility
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8">
 <ul className="space-y-4 text-slate-600 dark:text-slate-400">
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
 <span>Open worldwide to legal residents aged <strong>13 or older</strong>.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
 <span>Participants aged 13-17 must have parental/guardian consent.</span>
 </li>
 <li className="flex items-start gap-3">
 <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
 <span>Void in countries where prohibited by law (North Korea, Iran, Syria, Cuba, Crimea).</span>
 </li>
 <li className="flex items-start gap-3">
 <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
 <span>Employees of stadiumport and their immediate families are ineligible.</span>
 </li>
 </ul>
 </div>
 </section>

 <section id="section-2">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">2</div>
 How To Enter
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
 Register at <Link href="/world-cup-2026-prediction-game" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">stadiumport.com/prediction-game</Link> and complete predictions for all tournament stages.
 </p>
 <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-6">
 <p className="text-indigo-900 dark:text-indigo-200 font-medium text-sm">
 <strong>Deadline:</strong> Predictions may be edited unlimited times until June 11, 2026, 11:00 AM ET. No purchase necessary.
 </p>
 </div>
 </section>

 <section id="section-3">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">3</div>
 Scoring & Winner Selection
 </h2>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside marker:text-indigo-500">
 <li><strong>1 point</strong> awarded for each correct prediction.</li>
 <li>Winner determined by highest total score after the Final on July 19, 2026.</li>
 <li><strong>Tie-Breaker:</strong> (1) Correct Champion → (2) Correct Runner-up → (3) Random Draw.</li>
 <li>Winners announced within 48 hours via email.</li>
 </ul>
 </section>

 <section id="section-4">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">4</div>
 Prizes
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-slate-900 dark:text-white rounded-3xl p-8 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
 <div className="relative z-10">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/20 mb-4 text-xs font-bold uppercase tracking-wider">
 <Trophy className="w-3 h-3" /> Grand Prize (1st Place)
 </div>
 <div className="text-3xl font-bold mb-1">$850 USD Value</div>
 <ul className="space-y-2 text-indigo-100 text-sm mt-4">
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> $500 USD Cash</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Official Winner Jersey</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Official Adidas Match Ball</li>
 </ul>
 </div>
 </div>

 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-white/10 mb-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
 Runners Up (2nd-5th)
 </div>
 <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">$350 USD Value</div>
 <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mt-4">
 <li className="flex items-center gap-2"><Gift className="w-4 h-4 text-indigo-500" /> Official Winner Jersey</li>
 <li className="flex items-center gap-2"><Gift className="w-4 h-4 text-indigo-500" /> Official Adidas Match Ball</li>
 </ul>
 </div>
 </div>
 </section>

 <section id="section-5">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">5</div>
 Prize Claiming & Delivery
 </h2>
 <div className="space-y-4 text-slate-600 dark:text-slate-400">
 <p>Winners must respond within <strong>7 days</strong> of notification. Identity verification required.</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Physical Prizes</h4>
 <p className="text-sm">Shipped within 30 days via DHL/FedEx (Free international shipping).</p>
 </div>
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Cash Prizes</h4>
 <p className="text-sm">Delivered via PayPal or Wire Transfer.</p>
 </div>
 </div>
 </div>
 </section>

 <section id="section-6">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">6</div>
 Disqualification & Anti-Cheating
 </h2>
 <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-6">
 <div className="flex items-start gap-4">
 <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0" />
 <div>
 <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Zero Tolerance Policy</h3>
 <p className="text-sm text-red-800 dark:text-red-300 mb-2">Immediate disqualification for:</p>
 <ul className="text-sm text-red-800 dark:text-red-300 list-disc list-inside">
 <li>Multiple accounts or duplicate entries</li>
 <li>Bot usage or automated scripts</li>
 <li>False identity or fraudulent info</li>
 </ul>
 </div>
 </div>
 </div>
 </section>

 <section id="section-7">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">7</div>
 Data Collection & Use
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
 We collect email, name, and country for administration and verification. Winner's first name and country may be publicly announced.
 </p>
 <Link href="/world-cup-2026-prediction-contest-privacy" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-2">
 View Contest Privacy Policy <Globe2 className="w-4 h-4" />
 </Link>
 </section>

 <section id="section-8">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">8</div>
 Limitation of Liability
 </h2>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
 stadiumport is not responsible for technical failures, shipping issues, or force majeure events. By entering, participants release stadiumport from liability related to prize acceptance. Disputes resolved via binding arbitration under US law.
 </p>
 </section>

 <section id="section-9">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">9</div>
 Contact
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-center gap-4">
 <div className="w-12 h-12 dark:bg-white/10 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
 <Mail className="w-6 h-6" />
 </div>
 <div>
 <p className="text-slate-900 dark:text-white font-bold mb-1">Have questions about the contest?</p>
 <a href="mailto:info@stadiumport.com" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
 info@stadiumport.com
 </a>
 </div>
 </div>
 </section>

 </div>
 </div>

 </div>
 </main>
 </div>
 );
}







