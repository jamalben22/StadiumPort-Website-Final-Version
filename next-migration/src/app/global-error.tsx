'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 useEffect(() => {
 // Log the error to an error reporting service
 console.error('Global Error:', error);
 }, [error]);

 return (
 <html>
 <body className="antialiased text-slate-900 dark:text-white font-sans min-h-screen flex items-center justify-center p-4">
 <div className="max-w-md w-full rounded-2xl shadow-xl p-8 text-center border border-slate-100 dark:border-navy-700">
 <div className="w-16 h-16 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500">
 <AlertTriangle className="w-8 h-8" />
 </div>
 
 <h1 className="text-2xl font-bold mb-2">Something went wrong!</h1>
 <p className="text-slate-600 dark:text-slate-300 mb-8 text-sm">
 We apologize for the inconvenience. Our team has been notified.
 {error.digest && <span className="block mt-2 text-xs font-mono text-slate-400">Error ID: {error.digest}</span>}
 </p>
 
 <div className="flex flex-col gap-3">
 <button
 onClick={() => reset()}
 className="w-full py-3 px-4 bg-rose-500 hover:bg-rose-600 text-slate-900 dark:text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
 >
 <RefreshCw className="w-4 h-4" /> Try Again
 </button>
 
 <Link 
 href="/"
 className="w-full py-3 px-4 dark:bg-navy-700 hover:bg-slate-200 dark:hover:bg-navy-600 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
 >
 <Home className="w-4 h-4" /> Back to Home
 </Link>
 </div>
 </div>
 </body>
 </html>
 );
}






