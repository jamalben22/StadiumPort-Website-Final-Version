import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

export function ComingSoon({ 
  title = "This Guide is Coming Soon", 
  subtitle = "We're currently building this section to bring you the best and most complete information. Check back soon!" 
}: ComingSoonProps) {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center py-20">
        <div className="max-w-2xl mx-auto space-y-6">
           <div className="w-20 h-20 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
             <i className="ri-time-line text-4xl text-slate-400"></i>
           </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-space">
            {title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 font-inter leading-relaxed">
            {subtitle}
          </p>
          <div className="pt-8">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
