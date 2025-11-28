import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Mail, User, ArrowRight, CheckCircle2, ChevronDown, Search, X } from 'lucide-react';
import { COUNTRIES } from '../lib/countries';

interface EmailRegistrationProps {
  onComplete: (data: { name: string; email: string; country: string }) => void;
  onBack: () => void;
}

export const EmailRegistration: React.FC<EmailRegistrationProps> = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isDropdownOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call / delay for UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    onComplete(formData);
  };

  const filteredCountries = COUNTRIES.filter(country => 
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-visible"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg mb-4 rotate-3">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black font-['Teko'] text-white tracking-wide uppercase mb-1">
            Almost There
          </h2>
          <p className="text-white/60 font-['Rajdhani'] font-medium text-sm">
            Save your prediction to enter the contest
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-white/40 group-focus-within:text-emerald-400 transition-colors" />
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-emerald-500/50'} rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-['Rajdhani'] font-medium`}
                placeholder="Cristiano Ronaldo"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-white/40 group-focus-within:text-emerald-400 transition-colors" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-emerald-500/50'} rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-['Rajdhani'] font-medium`}
                placeholder="cr7@stadiumport.com"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.email}</p>}
          </div>

          {/* Country Field (Custom Dropdown) */}
          <div className="space-y-1.5 relative" ref={dropdownRef}>
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Country
            </label>
            
            {/* Trigger Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-white/5 border ${errors.country ? 'border-red-500/50' : isDropdownOpen ? 'border-emerald-500/50' : 'border-white/10'} rounded-2xl py-3.5 pl-4 pr-4 flex items-center justify-between text-left transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 group hover:bg-white/10`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Globe className={`h-4 w-4 shrink-0 transition-colors ${formData.country ? 'text-emerald-400' : 'text-white/40 group-hover:text-white/60'}`} />
                <span className={`block truncate font-['Rajdhani'] font-medium ${formData.country ? 'text-white' : 'text-white/20'}`}>
                  {formData.country || 'Select your country'}
                </span>
              </div>
              <ChevronDown className={`h-4 w-4 text-white/40 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {/* Error Message */}
            {errors.country && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.country}</p>}

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute z-50 left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[320px] backdrop-blur-xl ring-1 ring-black/50"
                >
                  {/* Search Header */}
                  <div className="p-3 border-b border-white/5 sticky top-0 bg-[#1a1a1a] z-10">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search country..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-['Rajdhani']"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Countries List */}
                  <div className="overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                    {filteredCountries.length > 0 ? (
                      <div className="grid grid-cols-1 gap-1">
                        {filteredCountries.map((country) => (
                          <button
                            key={country}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, country });
                              setErrors({ ...errors, country: '' });
                              setIsDropdownOpen(false);
                              setSearchQuery('');
                            }}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-['Rajdhani'] font-medium transition-all flex items-center justify-between group ${
                              formData.country === country 
                                ? 'bg-emerald-500/10 text-emerald-400' 
                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span>{country}</span>
                            {formData.country === country && (
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                            )}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-white/30 text-sm font-['Rajdhani']">
                        No country found
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Actions */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-['Rajdhani'] uppercase tracking-wider text-lg"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  View My Prediction <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className="w-full text-white/40 hover:text-white text-sm font-medium transition-colors font-['Rajdhani'] uppercase tracking-wide"
            >
              Go Back
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
