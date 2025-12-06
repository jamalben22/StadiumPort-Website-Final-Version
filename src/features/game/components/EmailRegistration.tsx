import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, User, ArrowRight, CheckCircle2, ChevronDown, Search, X } from 'lucide-react';
import { COUNTRIES } from '../lib/countries';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

interface EmailRegistrationProps {
  onComplete: (data: { name: string; email: string; country: string }) => void;
  onBack: () => void;
}

export const EmailRegistration: React.FC<EmailRegistrationProps> = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    ageConfirmed: false,
    acceptedTerms: false
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
    if (!formData.ageConfirmed) newErrors.ageConfirmed = 'Age confirmation is required';
    if (!formData.acceptedTerms) newErrors.acceptedTerms = 'You must accept the Official Rules and Privacy Policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'predictor-signup',
          data: {
            name: formData.name,
            email: formData.email,
            country: formData.country,
            ageConfirmed: formData.ageConfirmed,
            termsAccepted: formData.acceptedTerms
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Instant success - no verification needed
      onComplete({
        name: formData.name,
        email: formData.email,
        country: formData.country
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({ ...prev, submit: 'Something went wrong. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCountries = COUNTRIES.filter(country => 
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Submit World Cup 2026 Predictions | Enter to Win"
        description="Finalize your World Cup 2026 predictions! Submit your bracket to enter the contest and compete for global prizes."
        keywords={["submit predictions", "world cup contest entry", "win world cup prizes", "soccer prediction game"]}
        url="/world-cup-2026-prediction-game/submit"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Submit World Cup 2026 Predictions",
        "description": "Submission page for the World Cup 2026 prediction game.",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game/submit",
        "mainEntity": {
          "@type": "Action",
          "name": "Submit Prediction",
          "target": "https://stadiumport.com/api/submit"
        }
      }} />
    <div className="w-full max-w-md mx-auto px-4">
      {/* Step Chip (Background Page, outside card) */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/8 border border-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          <span className="text-[11px] font-bold text-white/85 uppercase tracking-[0.22em] font-['Rajdhani']">
            Step 4 of 5: Submit Your Official Entry
          </span>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] px-2">
          Secure Your World Cup 2026 Prediction
        </h2>
        <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest mt-3 px-4 leading-relaxed">
          You're one step away from competing for official prizes! Enter your details below to lock in your predictions and join thousands of fans worldwide.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-7 shadow-2xl relative overflow-hidden"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#01b47d]/20 blur-[50px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#01b47d] to-[#01b47d] rounded-2xl flex items-center justify-center shadow-lg mb-4 rotate-3">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black font-['Teko'] text-white tracking-wide uppercase mb-1">
            Official Entry Form
          </h2>
          
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 relative z-10">
          
          {/* Name Field */}
          <div className="space-y-2 sm:space-y-1.5">
            <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Participant Full Name
            </label>
            <div className="relative group">
              <div className="absolute left-0 top-0 w-12 h-full flex items-center justify-center pointer-events-none">
                <User className="h-4 w-4 text-white/40 group-focus-within:text-[#01b47d] transition-colors" />
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-[#01b47d]/50'} rounded-2xl h-12 md:h-auto py-3 md:py-3.5 pl-12 md:pl-11 pr-4 text-base text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#01b47d]/20 transition-all font-['Rajdhani'] font-medium`}
                autoComplete="name"
                placeholder="Cristiano Ronaldo"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2 sm:space-y-1.5">
            <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Official Contact Email
            </label>
            <div className="relative group">
              <div className="absolute left-0 top-0 w-12 h-full flex items-center justify-center pointer-events-none">
                <Mail className="h-4 w-4 text-white/40 group-focus-within:text-[#01b47d] transition-colors" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-[#01b47d]/50'} rounded-2xl h-12 md:h-auto py-3 md:py-3.5 pl-12 md:pl-11 pr-4 text-base text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#01b47d]/20 transition-all font-['Rajdhani'] font-medium`}
                autoComplete="email"
                placeholder="cr7@stadiumport.com"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.email}</p>}
          </div>

          {/* Country Field (Custom Dropdown) */}
          <div className="space-y-1.5 relative" ref={dropdownRef}>
            <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
              Country of Residence
            </label>
            
            {/* Trigger Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`relative w-full bg-white/5 border ${errors.country ? 'border-red-500/50' : isDropdownOpen ? 'border-[#01b47d]/50' : 'border-white/10'} rounded-2xl h-12 md:h-auto py-0 md:py-3.5 pl-12 md:pl-11 pr-4 flex items-center justify-between text-left transition-all focus:outline-none focus:ring-2 focus:ring-[#01b47d]/20 group hover:bg-white/10`}
            >
              <div className="absolute left-0 top-0 w-12 h-full flex items-center justify-center pointer-events-none">
                <Globe className={`h-4 w-4 shrink-0 transition-colors ${formData.country ? 'text-[#01b47d]' : 'text-white/40 group-hover:text-white/60'}`} />
              </div>
              <span className={`block truncate font-['Rajdhani'] font-medium text-[15px] md:text-base leading-[1.25] ${formData.country ? 'text-white' : 'text-white/20'} flex-1 min-w-0`}>
                {formData.country || 'Select your country'}
              </span>
              <ChevronDown className={`h-4 w-4 text-white/40 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#01b47d]' : ''}`} />
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-8 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#01b47d]/50 focus:bg-white/10 transition-all font-['Rajdhani']"
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
                                ? 'bg-[#01b47d]/10 text-[#01b47d]' 
                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span>{country}</span>
                            {formData.country === country && (
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#01b47d]" />
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

          {/* Compliance Section */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
                Age Confirmation *
              </label>
              <button
                type="button"
                role="checkbox"
                aria-checked={formData.ageConfirmed}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFormData({ ...formData, ageConfirmed: !formData.ageConfirmed }); if (errors.ageConfirmed) setErrors({ ...errors, ageConfirmed: '' }); } }}
                onClick={() => {
                  setFormData({ ...formData, ageConfirmed: !formData.ageConfirmed });
                  if (errors.ageConfirmed) setErrors({ ...errors, ageConfirmed: '' });
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl border ${formData.ageConfirmed ? 'border-[#01b47d]/50 bg-[#01b47d]/10' : 'border-white/10 bg-white/5'} transition-colors focus:outline-none focus:ring-2 focus:ring-[#01b47d]/30`}
              >
                <span className="text-white/90 font-['Rajdhani'] font-medium text-sm text-left pr-4">I confirm I am 18 years or older</span>
                <div className={`relative w-9 h-5 rounded-full shrink-0 transition-colors ${formData.ageConfirmed ? 'bg-[#01b47d]' : 'bg-white/10 border border-white/20'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.ageConfirmed ? 'translate-x-4' : ''}`}></span>
                </div>
              </button>
              {errors.ageConfirmed && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.ageConfirmed}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 font-['Rajdhani']">
                Terms & Conditions *
              </label>
              <button
                type="button"
                role="checkbox"
                aria-checked={formData.acceptedTerms}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFormData({ ...formData, acceptedTerms: !formData.acceptedTerms }); if (errors.acceptedTerms) setErrors({ ...errors, acceptedTerms: '' }); } }}
                onClick={() => {
                  setFormData({ ...formData, acceptedTerms: !formData.acceptedTerms });
                  if (errors.acceptedTerms) setErrors({ ...errors, acceptedTerms: '' });
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl border ${formData.acceptedTerms ? 'border-[#01b47d]/50 bg-[#01b47d]/10' : 'border-white/10 bg-white/5'} transition-colors focus:outline-none focus:ring-2 focus:ring-[#01b47d]/30`}
              >
                <span className="text-white/90 font-['Rajdhani'] font-medium text-sm text-left pr-4">I agree to the Official Rules and Privacy Policy</span>
                <div className={`relative w-9 h-5 rounded-full shrink-0 transition-colors ${formData.acceptedTerms ? 'bg-[#01b47d]' : 'bg-white/10 border border-white/20'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.acceptedTerms ? 'translate-x-4' : ''}`}></span>
                </div>
              </button>
              {errors.acceptedTerms && <p className="text-red-400 text-xs ml-1 font-['Rajdhani']">{errors.acceptedTerms}</p>}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 space-y-3">
            {errors.submit && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                <p className="text-red-400 text-sm font-['Rajdhani']">{errors.submit}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#01b47d] to-[#01b47d] hover:from-[#01b47d] hover:to-[#01b47d] text-white font-bold py-3 md:py-4 rounded-2xl shadow-lg shadow-[#01b47d]/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-['Rajdhani'] uppercase tracking-wider text-base md:text-lg"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  CONFIRM & LOCK MY PREDICTIONS <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className="w-full text-white/40 hover:text-white text-sm font-medium transition-colors font-['Rajdhani'] uppercase tracking-wide py-3"
            >
              ← Back to Edit Predictions
            </button>
          </div>
        </form>
      </motion.div>
      {/* Footnotes Outside Card for compact layout */}
      <div className="mt-3 text-center">
        <p className="text-white/70 text-xs font-['Rajdhani']">
          <span className="text-white font-bold">Your Information is Secure</span> · All data is encrypted and used only for game administration and prize distribution. We never share your information with third parties.
        </p>
        <p className="text-white/60 text-[11px] font-['Rajdhani'] mt-1">
          <span className="text-white font-bold">After Submission:</span> Automatic entry into prize drawings
        </p>
      </div>
    </div>
    </>
  );
};
