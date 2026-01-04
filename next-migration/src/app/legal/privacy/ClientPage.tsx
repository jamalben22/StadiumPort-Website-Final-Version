'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
 Shield, 
 Lock, 
 Eye, 
 Cookie, 
 Globe2, 
 Server, 
 FileText,
 CheckCircle2,
 XCircle,
 Mail
} from 'lucide-react';

export default function ClientPage() {
 const highlights = [
 {
 icon: Eye,
 title: "Data Collection",
 description: "We collect minimal data: email addresses (if provided) and anonymous usage stats to improve the site."
 },
 {
 icon: Lock,
 title: "Security",
 description: "We use secure, encrypted connections (HTTPS) and trusted third-party providers for email services."
 },
 {
 icon: Cookie,
 title: "Cookies",
 description: "We use minimal tracking cookies for analytics. You have full control to block or delete them."
 },
 {
 icon: Globe2,
 title: "Your Rights",
 description: "You can access, correct, or delete your personal data at any time. We respect GDPR and CCPA rights."
 }
 ];

 return (
 <div className="min-h-screen font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-slate-900 dark:text-white">
 <main className="pt-32 pb-20 px-4 md:px-6">
 <div className="max-w-5xl mx-auto">
 
 {/* Hero Section */}
      <div className="text-center mb-20 animate-fade-up">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 tracking-wide uppercase"
        >
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
          <span className="text-slate-600 dark:text-slate-300 dark:text-slate-600">/</span>
          <span className="text-emerald-700 dark:text-emerald-400">Privacy Policy</span>
        </motion.div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:/10 border border-slate-200 dark:border-white/10 mb-8">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
 </span>
 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
 Last Updated: January 15, 2025
 </span>
 </div>
 
 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
 Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Policy</span>
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
 At Stadiumport, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
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
 {[
 "Information We Collect",
 "How We Use Information",
 "Cookies & Tracking",
 "Third-Party Services",
 "Your Rights",
 "Data Security",
 "Contact Us"
 ].map((item, i) => (
 <a 
 key={i}
 href={`#section-${i + 1}`}
 className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
 >
 {i + 1}. {item}
 </a>
 ))}
 </nav>
 </div>
 </div>

 {/* Policy Details */}
 <div className="lg:col-span-2 space-y-16">
 
 <section id="section-1">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</div>
 Information We Collect
 </h2>
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 space-y-6">
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white mb-3">Information You Provide</h3>
 <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
 <li className="flex items-start gap-2">
 <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
 <span><strong>Email Address:</strong> When you subscribe to our newsletter or contact us</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
 <span><strong>Name:</strong> If provided voluntarily through contact forms</span>
 </li>
 </ul>
 </div>
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white mb-3">What We Do NOT Collect</h3>
 <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
 <li className="flex items-start gap-2">
 <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
 <span>Payment information (we don't process transactions)</span>
 </li>
 <li className="flex items-start gap-2">
 <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
 <span>Sensitive personal data (health, religion, etc.)</span>
 </li>
 </ul>
 </div>
 </div>
 </section>

 <section id="section-2">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">2</div>
 How We Use Your Information
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
 We use collected information to send email updates (only if subscribed), improve our website content, respond to your inquiries, and analyze site traffic patterns.
 </p>
 <div className=" border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-6">
 <p className="text-indigo-900 dark:text-indigo-200 font-medium flex items-center gap-3">
 <Shield className="w-5 h-5" />
 We will NEVER sell your email to third parties or send you spam.
 </p>
 </div>
 </section>

 <section id="section-3">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">3</div>
 Cookies & Tracking
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
 We currently use minimal tracking. In the future, we may implement Google Analytics or Facebook Pixel for site optimization.
 </p>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 <strong>You Control Cookies:</strong> Most browsers allow you to refuse cookies. You can delete them at any time, though blocking cookies may limit some site functionality.
 </p>
 </section>

 <section id="section-4">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">4</div>
 Third-Party Services
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white mb-2">Affiliate Partners</h3>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
 When you click our links to book hotels, flights, or experiences, you'll be redirected to third-party websites (Booking.com, Expedia, etc.). These partners have their own privacy policies governing data collection.
 </p>
 </div>
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email Service</h3>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
 We use trusted email service providers to send newsletters. Your email is stored securely by these providers and used only for our communications.
 </p>
 </div>
 </div>
 </section>

 <section id="section-5">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">5</div>
 Your Rights
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className=" rounded-2xl p-6">
 <h3 className="font-bold text-slate-900 dark:text-white mb-2">All Users</h3>
 <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
 <li>• Unsubscribe anytime</li>
 <li>• Request data info</li>
 <li>• Opt-out of comms</li>
 </ul>
 </div>
 <div className=" rounded-2xl p-6">
 <h3 className="font-bold text-slate-900 dark:text-white mb-2">GDPR & CCPA</h3>
 <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
 <li>• Right to access</li>
 <li>• Right to correction</li>
 <li>• Right to deletion</li>
 </ul>
 </div>
 </div>
 </section>

 <section id="section-6">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">6</div>
 Data Security
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
 We implement reasonable security measures including secure hosting infrastructure, encrypted data transmission (HTTPS), and limited access to personal data.
 </p>
 <div className=" border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-center gap-4">
 <Server className="w-8 h-8 text-indigo-500" />
 <div>
 <h3 className="font-bold text-slate-900 dark:text-white">Secure Infrastructure</h3>
 <p className="text-sm text-slate-600 dark:text-slate-400">Your connection to Stadiumport is always encrypted.</p>
 </div>
 </div>
 </section>

 <section id="section-7">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">7</div>
 Contact Us
 </h2>
 <p className="text-slate-600 dark:text-slate-400 mb-6">
 Questions about this Privacy Policy?
 </p>
 <a 
 href="mailto:info@stadiumport.com" 
 className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
 >
 <Mail className="w-5 h-5" /> info@stadiumport.com
 </a>
 </section>

 </div>
 </div>

 </div>
 </main>
 </div>
 );
}









