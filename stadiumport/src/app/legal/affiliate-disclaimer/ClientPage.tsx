'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
 DollarSign, 
 Link as LinkIcon, 
 ShieldCheck, 
 HeartHandshake, 
 Plane, 
 Hotel, 
 Map, 
 Car,
 ExternalLink,
 Info,
 CheckCircle2,
 XCircle
} from 'lucide-react';

export default function AffiliateDisclaimerClientPage() {
 const partners = [
 { icon: Hotel, title: "Hotels", items: ["Booking.com", "Expedia", "Hotels.com", "Airbnb"] },
 { icon: Plane, title: "Flights", items: ["Skyscanner", "Google Flights", "Direct Airlines"] },
 { icon: Map, title: "Tours", items: ["GetYourGuide", "Viator", "TourRadar"] },
 { icon: Car, title: "Transport", items: ["Rental Cars", "Airport Transfers", "Train Services"] }
 ];

 return (
 <div className="min-h-screen font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-slate-900 dark:text-white">
 <main className="pt-32 pb-20 px-4 md:px-6">
 <div className="max-w-5xl mx-auto">
 
 {/* Hero Section */}
      <div className="text-center mb-20 animate-fade-up">
       <Breadcrumb 
          items={[
            { label: 'Affiliate Disclaimer', href: '/legal/affiliate-disclaimer' }
          ]} 
          className="justify-center"
        />

        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
            Last Updated: January 2, 2026
          </span>
        </div>
 
 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
 Affiliate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Disclaimer</span>
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">Stadiumport is a free resource funded by affiliate commissions. We believe in being 100% honest about how we make money.
 </p>
 </div>

 {/* How It Works Card */}
 <div className="mb-20 animate-fade-up [animation-delay:200ms]">
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
 <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
 
 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
 <LinkIcon className="w-8 h-8" />
 </div>
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
 What Are Affiliate Links?
 </h2>
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
 Affiliate links are special URLs that track when someone clicks from our site to a partner's website. If you complete a booking, we receive a small commission.
 </p>
 <div className="dark:bg-black/20 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
 <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
 <DollarSign className="w-5 h-5 text-indigo-500" /> The Cost to You: Zero
 </h3>
 <p className="text-slate-600 dark:text-slate-400 text-sm">
 Prices are identical whether you use our link or go directly. In fact, sometimes our partnerships unlock special discounts for you.
 </p>
 </div>
 </div>
 
 <div className=" rounded-3xl p-8 border border-slate-200 dark:border-white/5">
 <h3 className="font-bold text-slate-900 dark:text-white mb-6">Example Scenario</h3>
 <div className="space-y-6 relative">
 {/* Connecting Line */}
 <div className="absolute left-[15px] top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
 
 <div className="relative flex gap-4">
 <div className="w-8 h-8 rounded-full border-2 border-indigo-500 flex items-center justify-center shrink-0 z-10 text-sm font-bold text-indigo-600 dark:text-indigo-400">1</div>
 <div>
 <p className="font-medium text-slate-900 dark:text-white">You read our NYC Guide</p>
 <p className="text-sm text-slate-500 dark:text-slate-400">Find the perfect hotel recommendation</p>
 </div>
 </div>
 
 <div className="relative flex gap-4">
 <div className="w-8 h-8 rounded-full border-2 border-indigo-500 flex items-center justify-center shrink-0 z-10 text-sm font-bold text-indigo-600 dark:text-indigo-400">2</div>
 <div>
 <p className="font-medium text-slate-900 dark:text-white">Click to Booking.com</p>
 <p className="text-sm text-slate-500 dark:text-slate-400">Book your stay for $200</p>
 </div>
 </div>
 
 <div className="relative flex gap-4">
 <div className="w-8 h-8 rounded-full border-2 border-indigo-500 flex items-center justify-center shrink-0 z-10 text-sm font-bold text-indigo-600 dark:text-indigo-400">3</div>
 <div>
 <p className="font-medium text-slate-900 dark:text-white">We earn a commission</p>
 <p className="text-sm text-slate-500 dark:text-slate-400">~ $6-12 helps support our site</p>
 </div>
 </div>

 <div className="relative flex gap-4">
 <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-500 flex items-center justify-center shrink-0 z-10 text-sm font-bold text-green-600 dark:text-green-400">4</div>
 <div>
 <p className="font-medium text-slate-900 dark:text-white">You pay $200</p>
 <p className="text-sm text-slate-500 dark:text-slate-400">No extra cost to you</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Our Promise & Partners */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 animate-fade-up [animation-delay:400ms]">
 
 <div className="lg:col-span-2 space-y-8">
 <div className=" border border-slate-200 dark:border-white/10 rounded-3xl p-8">
 <div className="flex items-center gap-3 mb-6">
 <ShieldCheck className="w-8 h-8 text-indigo-500" />
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Promise: Honesty First</h2>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6">
 <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
 <XCircle className="w-5 h-5" /> We Never
 </h3>
 <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
 <li>• Recommend solely for commission</li>
 <li>• Hide better non-affiliate options</li>
 <li>• Create fake positive reviews</li>
 </ul>
 </div>
 
 <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-6">
 <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
 <CheckCircle2 className="w-5 h-5" /> We Always
 </h3>
 <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
 <li>• Test recommendations personally</li>
 <li>• Disclose affiliate links clearly</li>
 <li>• Share honest pros and cons</li>
 </ul>
 </div>
 </div>
 </div>

 <div className=" border border-indigo-100 dark:border-indigo-500/20 rounded-3xl p-8">
 <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
 <Info className="w-5 h-5" /> FTC Compliance
 </h3>
 <p className="text-indigo-800 dark:text-indigo-300 text-sm leading-relaxed">
 We comply with the Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising. We clearly label affiliate content so you always know when we might earn from your click.
 </p>
 </div>
 </div>

 <div className="lg:col-span-1">
 <div className=" rounded-3xl p-8 h-full">
 <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
 <HeartHandshake className="w-5 h-5 text-indigo-500" /> Trusted Partners
 </h3>
 <div className="space-y-6">
 {partners.map((partner, i) => (
 <div key={i}>
 <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
 <partner.icon className="w-4 h-4" /> {partner.title}
 </h4>
 <div className="flex flex-wrap gap-2">
 {partner.items.map((item, j) => (
 <span key={j} className="text-sm font-medium dark:bg-black/20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300">
 {item}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 </div>

 {/* Footer Note */}
 <div className="text-center animate-fade-up [animation-delay:600ms]">
 <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
 By using our affiliate links, you support free, high-quality World Cup travel content. We genuinely appreciate it.
 </p>
 <a 
 href="mailto:info@stadiumport.com" 
 className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
 >
 <ExternalLink className="w-4 h-4" /> Questions? Email info@stadiumport.com
 </a>
 </div>

 </div>
 </main>
 </div>
 );
}








