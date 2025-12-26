
import { Link } from 'react-router-dom';
import { Header } from '../components/feature/Header';
import { Footer } from '../components/feature/Footer';
import { Button } from '../components/base/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-colors duration-500">
      <Header />
      
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#01b47d]">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-[#01b47d]/20 blur-sm">
              404
            </div>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring the World Cup host cities.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button variant="outline" size="lg">
                <i className="ri-home-4-line mr-2"></i>
                Go Home
              </Button>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link 
              to="/travel-guides" 
              className="p-4 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <i className="ri-book-open-line text-2xl text-[#01b47d] mb-2 block group-hover:scale-110 transition-transform"></i>
              <div className="text-sm font-medium text-navy-900 dark:text-white">Travel Guides</div>
            </Link>
            <Link 
              to="/venues" 
              className="p-4 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <i className="ri-building-line text-2xl text-[#01b47d] mb-2 block group-hover:scale-110 transition-transform"></i>
              <div className="text-sm font-medium text-navy-900 dark:text-white">Venues</div>
            </Link>
            <Link 
              to="/deals" 
              className="p-4 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <i className="ri-price-tag-3-line text-2xl text-purple-500 mb-2 block group-hover:scale-110 transition-transform"></i>
              <div className="text-sm font-medium text-navy-900 dark:text-white">Deals</div>
            </Link>
            <Link 
              to="/blog" 
              className="p-4 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <i className="ri-article-line text-2xl text-orange-500 mb-2 block group-hover:scale-110 transition-transform"></i>
              <div className="text-sm font-medium text-navy-900 dark:text-white">Blog</div>
            </Link>
          </div>
          
          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-[#01b47d]/5 dark:bg-[#008f63]/20 rounded-xl">
            <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
              Looking for something specific?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Try searching for host cities, travel guides, or venue information
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search Stadiumport..."
                className="w-full pl-10 pr-4 py-3 border border-[#01b47d]/20 dark:border-[#008f63] rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-[#01b47d] focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
