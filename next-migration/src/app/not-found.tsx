import Link from 'next/link';
import { Home, MapPin, Search } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Page Not Found - Stadiumport',
 description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
 return (
 <div className="min-h-screen flex items-center justify-center p-4">
 <div className="max-w-lg w-full text-center">
 <div className="relative w-full h-64 mb-8">
 {/* Abstract Stadium Graphic */}
 <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-3xl transform scale-75 animate-pulse"></div>
 <div className="relative z-10 text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 leading-none select-none">
 404
 </div>
 <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Offside!</p>
 </div>

 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
 Page Not Found
 </h1>
 
 <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
 The page you're looking for seems to have been substituted. Check the URL or explore our guides.
 </p>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto">
 <Link 
 href="/"
 className="flex items-center justify-center gap-2 py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
 >
 <Home className="w-5 h-5" /> Home Base
 </Link>
 </div>
 </div>
 </div>
 );
}





