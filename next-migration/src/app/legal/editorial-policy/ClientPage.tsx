'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, FileCheck, RefreshCw, Users, BookOpen, CheckCircle2 } from 'lucide-react';

export default function EditorialPolicyClientPage() {
 const [lastUpdated, setLastUpdated] = useState<string>('');

 useEffect(() => {
   setLastUpdated(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
 }, []);

 const principles = [
 {
 icon: Search,
 title: "Accuracy First",
 description: "All content is created using verified, authoritative sources including official FIFA announcements, stadium authority releases, and government agencies. We fact-check every detail before publication."
 },
 {
 icon: ShieldCheck,
 title: "Transparency & Integrity",
 description: "We clearly reference expert-level sources. Major updates are timestamped. Affiliate links are disclosed and never influence our editorial decisions or opinions."
 },
 {
 icon: Users,
 title: "Traveler-Focused",
 description: "Content is designed for real fans. We prioritize simple navigation, clear in-stadium info, and practical advice to solve actual traveler problems and reduce planning stress."
 },
 {
 icon: FileCheck,
 title: "Quality Review Workflow",
 description: "Every guide undergoes a rigorous process: research, drafting, expert review, editorial polish, and technical validation to meet professional standards."
 },
 {
 icon: RefreshCw,
 title: "Continuous Updates",
 description: "We actively monitor for changes. When transportation plans or stadium policies shift, we update our guides immediately. Corrections are handled quickly."
 }
 ];

 return (
 <div className="min-h-screen font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">
 <main className="pt-32 pb-20 px-4 md:px-6">
 <div className="max-w-6xl mx-auto">
 
 {/* Hero Section */}
 <div className="text-center mb-20 animate-fade-up">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:/10 border border-slate-200 dark:border-white/10 mb-8">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
 </span>
 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
 Our Standards
 </span>
 </div>
 
 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
 Editorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Policy</span>
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
 Stadiumport is built on accuracy, transparency, and trust. Our mission is to provide the most reliable information for fans traveling to World Cup 2026.
 </p>
 </div>

 {/* Mission Statement */}
 <div className="mb-20 animate-fade-up [animation-delay:200ms]">
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
 <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
 <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
 <BookOpen className="w-8 h-8" />
 </div>
 <div>
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
 Our Commitment to You
 </h2>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
 Every guide, city page, stadium profile, and travel resource follows a strict editorial process designed to ensure clarity, usefulness, and factual integrity. We don't just aggregate content; we verify it to help you travel confidently.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Principles Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-fade-up [animation-delay:400ms]">
 {principles.map((item, index) => (
 <motion.div 
 key={index}
 whileHover={{ y: -5 }}
 className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all"
 >
 <div className="w-12 h-12 dark:/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-100 dark:border-white/5">
 <item.icon className="w-6 h-6" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
 {item.title}
 </h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
 {item.description}
 </p>
 </motion.div>
 ))}
 
 {/* Responsibility Card (Spans 1 on mobile, fits nicely in grid) */}
 <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white md:col-span-2 lg:col-span-1 flex flex-col justify-center relative overflow-hidden group">
 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
 <div className="relative z-10">
 <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
 <CheckCircle2 className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-xl font-bold mb-3">
 Reader Responsibility
 </h3>
 <p className="text-indigo-100 leading-relaxed text-sm mb-4">
 We exist to remove confusion and prevent planning mistakes. Your trust is our priority.
 </p>
 <div className="font-semibold text-sm">
 Travel confidently with Stadiumport.
 </div>
 </div>
 </div>
 </div>

 {/* Verification Badge */}
 <div className="text-center animate-fade-up [animation-delay:600ms]">
 <p className="text-sm text-slate-500 dark:text-slate-500 font-medium uppercase tracking-widest mb-2">
 Last Updated
 </p>
 <p className="text-slate-900 dark:text-white font-semibold">
 {lastUpdated || 'Loading...'}
</p>
 </div>

 </div>
 </main>
 </div>
 );
}






