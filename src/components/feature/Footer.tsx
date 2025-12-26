import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.898v1.073h3.44l-.45 3.667h-2.99v7.98c5.088-.711 9.009-4.785 9.009-9.72a9.832 9.832 0 0 0-9.832-9.834 9.832 9.832 0 0 0-9.832 9.834c0 4.935 3.921 9.01 9.009 9.72z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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
        { label: 'Groups & Teams', to: '/world-cup-2026-groups' },
        { label: 'Prediction Game', to: '/world-cup-2026-prediction-game' },
      ]
    },
    {
      title: 'Planning',
      links: [
        { label: 'Draw Travel Hub', to: '/2026-world-cup-draw-travel-hub' },
        { label: 'Travel Tips', to: '/travel-tips' },
        { label: 'Safety Guide', to: '/safety-guide' },
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
    { icon: XIcon, href: '#', label: 'X (formerly Twitter)' },
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
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
              src="/images/Logos/footer-logo-400x100.svg" 
              alt="Stadiumport" 
              width={160}
              height={40}
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden"
              onError={(e) => { e.currentTarget.src = '/images/Logos/footer-logo-400x100.svg'; }}
            />
            <img 
              src="/images/Logos/footer-logo-400x100-dark.svg" 
              alt="Stadiumport" 
              width={160}
              height={40}
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block"
              onError={(e) => { e.currentTarget.src = '/images/Logos/footer-logo-400x100-dark.svg'; }}
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
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
