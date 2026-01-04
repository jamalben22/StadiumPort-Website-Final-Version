'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
 Shield, 
 Lock, 
 Eye, 
 Database, 
 Globe2, 
 UserCheck,
 Mail,
 FileKey,
 CheckCircle2,
 XCircle,
 FileText,
 Trophy
} from 'lucide-react';

export default function ClientPage() {
 const highlights = [
 {
 icon: Eye,
 title: "Data We Collect",
 description: "Email, display name, and predictions. Winners provide ID/address for prize delivery only."
 },
 {
 icon: Lock,
 title: "Strict Security",
 description: "SSL encryption, secure servers, and PCI-DSS compliant partners. We never sell your data."
 },
 {
 icon: UserCheck,
 title: "Your Control",
 description: "Access, correct, or delete your data anytime. Opt-out of non-essential communications."
 },
 {
 icon: Globe2,
 title: "Global Standards",
 description: "Compliant with GDPR, CCPA, and COPPA (for ages 13-17)."
 }
 ];

 const sections = [
 "Information Collected",
 "Data Usage",
 "Data Sharing",
 "COPPA Compliance",
 "Public Info",
 "Retention",
 "Your Rights",
 "Security",
 "Contact"
 ];

 return (
 <div className="min-h-screen font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-slate-900 dark:text-white">
 <main className="pt-32 pb-20 px-4 md:px-6">
 <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 tracking-wide uppercase"
        >
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
          <span className="text-slate-600 dark:text-slate-300 dark:text-slate-600">/</span>
          <span className="text-emerald-700 dark:text-emerald-400">Privacy Policy</span>
        </motion.div>

        {/* Hero Section */}
 <div className="text-center mb-20 animate-fade-up">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:/10 border border-slate-200 dark:border-white/10 mb-8">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
 </span>
 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
 Data Protection
 </span>
 </div>
 
 <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
 Contest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Privacy Policy</span>
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
 We value your trust. This policy details exactly how we handle your data for the World Cup 2026 Prediction Contest.
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
 <p className="text-xs text-slate-500 dark:text-slate-400">Last Updated: November 28, 2025</p>
 </div>
 </div>
 </div>

 {/* Privacy Details */}
 <div className="lg:col-span-2 space-y-16">
 
 <section id="section-1">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</div>
 Information We Collect
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 space-y-6">
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
 <Database className="w-5 h-5 text-indigo-500" /> For Participation
 </h3>
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Email Address (Required)</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Display Name (Required)</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Country of Residence</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> IP Address (Security)</li>
 </ul>
 </div>
 <div className="pt-6 border-t border-slate-100 dark:border-white/5">
 <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
 <Trophy className="w-5 h-5 text-amber-500" /> For Prize Winners Only
 </h3>
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
 <li className="flex items-center gap-2"><FileKey className="w-4 h-4 text-slate-400" /> Legal Name & ID</li>
 <li className="flex items-center gap-2"><FileKey className="w-4 h-4 text-slate-400" /> Mailing Address</li>
 <li className="flex items-center gap-2"><FileKey className="w-4 h-4 text-slate-400" /> Payment Details (Cash prizes)</li>
 </ul>
 </div>
 </div>
 </section>

 <section id="section-2">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">2</div>
 How We Use Your Data
 </h2>
 <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside marker:text-indigo-500">
 <li>Administer the contest and calculate live scores.</li>
 <li>Verify identity to prevent botting and fraud.</li>
 <li>Deliver prizes securely to verified winners.</li>
 <li>Send critical contest updates (rules, deadlines, winners).</li>
 <li>Comply with international tax and legal obligations.</li>
 </ul>
 </section>

 <section id="section-3">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">3</div>
 Data Sharing
 </h2>
 <div className=" border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-6 mb-6">
 <p className="text-indigo-900 dark:text-indigo-200 font-bold flex items-center gap-2">
 <Shield className="w-5 h-5" /> We DO NOT sell your personal data.
 </p>
 </div>
 <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">We share data only when strictly necessary:</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Shipping</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">DHL/FedEx for prize delivery.</p>
 </div>
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Payments</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">PayPal/Wise for cash transfers.</p>
 </div>
 </div>
 </section>

 <section id="section-4">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">4</div>
 COPPA Compliance (Ages 13-17)
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-2xl p-6">
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
 For participants under 18, we adhere to strict protections:
 </p>
 <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Minimal data collection (only what's needed).</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Parental consent mandatory for prize claiming.</li>
 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> No behavioral tracking or targeted ads.</li>
 </ul>
 </div>
 </section>

 <section id="section-5">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">5</div>
 Public Information
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/20">
 <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
 <Eye className="w-4 h-4" /> Publicly Visible
 </h3>
 <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
 <li>• Winner's first name & country</li>
 <li>• Final leaderboard usernames</li>
 <li>• Winning brackets (with consent)</li>
 </ul>
 </div>
 <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20">
 <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
 <Lock className="w-4 h-4" /> Always Private
 </h3>
 <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
 <li>• Full legal names & addresses</li>
 <li>• Payment information</li>
 <li>• Government ID documents</li>
 </ul>
 </div>
 </div>
 </section>

 <section id="section-6">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">6</div>
 Data Retention
 </h2>
 <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
 <li><strong>Active Contest Data:</strong> Until July 31, 2026 (30 days post-Final).</li>
 <li><strong>Winner Verification Docs:</strong> 2 years (required for tax compliance).</li>
 <li><strong>Non-Winners:</strong> Data deleted 90 days after contest ends.</li>
 </ul>
 </section>

 <section id="section-7">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">7</div>
 Your Rights
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Access & Correct</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">Request your data or fix errors anytime via email.</p>
 </div>
 <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5">
 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Delete Data</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400">Email us to delete account (voids contest entry).</p>
 </div>
 </div>
 </section>

 <section id="section-8">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">8</div>
 Security
 </h2>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
 We use SSL encryption for all data transmission, maintain secure servers with backups, and encrypt ID documents. Payment info is processed solely by certified PCI-DSS compliant processors.
 </p>
 </section>

 <section id="section-9">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">9</div>
 Contact
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-center gap-4">
 <div className="w-12 h-12 dark:/10 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
 <Mail className="w-6 h-6" />
 </div>
 <div>
 <p className="text-slate-900 dark:text-white font-bold mb-1">Privacy Questions?</p>
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









