'use client';

import { useEffect } from 'react';
import { AlertCircle, RotateCw } from 'lucide-react';

export default function Error({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 useEffect(() => {
 console.error(error);
 }, [error]);

 return (
 <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] flex flex-col items-center justify-center px-6 text-center">
 <div className="space-y-6 max-w-md">
 <div className="flex justify-center">
 <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
 <AlertCircle size={48} />
 </div>
 </div>
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Something went wrong!</h2>
 <p className="text-slate-600 dark:text-slate-400">
 We apologize for the inconvenience. An unexpected error has occurred.
 </p>
 <button
 onClick={reset}
 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold transition-colors"
 >
 <RotateCw size={20} />
 Try Again
 </button>
 </div>
 </div>
 );
}





