'use client';

import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get('title') || 'This Guide';

  useEffect(() => {
    if (title.toLowerCase().includes('connectivity')) {
      router.replace('/world-cup-2026-connectivity-guide');
    }
    if (title.toLowerCase().includes('scams') || title.toLowerCase().includes('fraud')) {
      router.replace('/world-cup-2026-scams-avoid-fraud');
    }
    if (title.toLowerCase().includes('stadium') && title.toLowerCase().includes('safety')) {
      router.replace('/world-cup-2026-stadium-safety');
    }
    if (title.toLowerCase().includes('health') || title.toLowerCase().includes('medical')) {
      router.replace('/world-cup-2026-health-medical-preparedness');
    }
    if (title.toLowerCase().includes('transport') || title.toLowerCase().includes('getting around')) {
      router.replace('/world-cup-2026-transportation-safety');
    }
  }, [title, router]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        {/* Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-8 w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-800"
        >
          <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </motion.div>

        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 mb-8"
        >
          <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 tracking-wide uppercase">
            In Production
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
          {title} <br />
          <span className="text-slate-400 dark:text-slate-600">is Coming Soon.</span>
        </h1>

        {/* Message */}
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
          We are currently crafting this comprehensive guide to meet our world-class standards. 
          Accuracy and depth take time.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>
          <Link 
            href="/world-cup-2026-travel-tips"
            className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5"
          >
            Explore Other Guides
          </Link>
        </div>
      </motion.div>

      {/* Footer text */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-sm text-slate-400 dark:text-slate-600 font-medium tracking-widest uppercase"
      >
        Stadiumport • World Cup 2026
      </motion.p>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ComingSoonContent />
    </Suspense>
  );
}
