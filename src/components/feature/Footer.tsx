import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Twitter, Facebook, Instagram, Youtube, ArrowRight, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter-signup',
          data: { email }
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'Host Cities', to: '/world-cup-2026-host-cities' },
        { label: 'Stadiums', to: '/world-cup-2026-stadiums' },
        { label: 'Groups & Teams', to: '/world-cup-2026-groups' },
        { label: 'Prediction Game', to: '/world-cup-2026-prediction-game' },
      ]
    },
    {
      title: 'Planning',
      links: [
        { label: 'Travel Tips', to: '/world-cup-2026-travel-tips' },
        { label: 'Safety Guide', to: '/world-cup-2026-safety-guide' },
        { label: 'Draw Travel Hub', to: '/2026-world-cup-draw-travel-hub' },
        { label: 'Deals & Offers', to: '/deals' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Our Authors', to: '/about/authors' },
        { label: 'Editorial Policy', to: '/editorial-policy' },
        { label: 'Contact', to: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: '/legal/privacy' },
        { label: 'Terms of Service', to: '/legal/terms' },
        { label: 'Contest Rules', to: '/world-cup-2026-prediction-contest-terms' },
        { label: 'Affiliate Disclaimer', to: '/legal/affiliate-disclaimer' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#EDEDED] dark:bg-[#000000] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 pb-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
          
          {/* Brand Identity */}
          <div className="max-w-sm">
            <Link to="/" className="block mb-6 group">
            <img 
              src="/public/images/logos/Footer Logo 400 x 100 px.svg" 
              alt="Stadiumport" 
              width={160}
              height={40}
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden"
              onError={(e) => { e.currentTarget.src = '/images/logos/Footer Logo 400 x 100 px.svg'; }}
            />
            <img 
              src="/public/images/logos/Footer Logo 400 x 100 px night mode.svg" 
              alt="Stadiumport" 
              width={160}
              height={40}
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block"
              onError={(e) => { e.currentTarget.src = '/images/logos/Footer Logo 400 x 100 px night mode.svg'; }}
            />
          </Link>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed font-medium antialiased">
              The definitive guide to World Cup 2026. Expert insights, stadium guides, and travel planning for the biggest tournament in history.
            </p>
          </div>

          {/* Minimal Newsletter */}
          <div className="w-full lg:max-w-md">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-4">
              Join the Community
            </h3>
            <form onSubmit={handleSubscribe} className="relative group">
              <div className="relative overflow-hidden rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus-within:border-slate-400 dark:focus-within:border-white/30 transition-all duration-300">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="w-full bg-transparent px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? '...' : <span>Join <ArrowRight size={12} className="inline -mt-0.5" /></span>}
                </button>
              </div>
              
              {/* Feedback Messages */}
              <div className="absolute top-full left-0 mt-2">
                {submitStatus === 'success' && (
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1">
                    <Globe size={12} /> Welcome to the team.
                  </span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-red-600 dark:text-red-400 text-xs font-medium animate-in fade-in slide-in-from-top-1">
                    Please enter a valid email.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-16" />

        {/* Links Grid - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-2">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-slate-400 dark:text-slate-500 font-medium">
            <span>© {currentYear} Stadiumport Inc. All rights reserved.</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex gap-6">
              <Link to="/legal/privacy" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy</Link>
              <Link to="/legal/terms" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transform hover:scale-110 transition-all duration-200"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
