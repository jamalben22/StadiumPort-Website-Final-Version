
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

  return (
    <footer className="bg-[var(--footer-bg-light)] dark:bg-[var(--footer-bg-dark)] text-slate-900 dark:text-white transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200 dark:bg-slate-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Minimal Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="font-space font-semibold text-2xl md:text-3xl mb-4 text-slate-900 dark:text-white">
            Don't Miss Your World Cup 2026 Journey
          </h3>
          <p className="font-inter text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">Get exclusive stadium guides, host city travel tips, real-time safety alerts, hotel deals, and expert planning strategies—everything you need delivered weekly to your inbox.</p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} data-readdy-form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-colors duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting || !email}
                className="px-6 py-3 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Subscribing...' : 'Get Free Updates'}
              </button>
            </form>
            

            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-3 p-2 rounded-lg bg-slate-800 text-slate-300 text-sm">
                Successfully subscribed! Welcome to Stadiumport.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-3 p-2 rounded-lg bg-slate-800 text-slate-300 text-sm">
                Please enter a valid email address.
              </div>
            )}
          </div>
        </div>

        {/* Premium Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Apple-Style Premium Brand Section */}
          <div className="lg:col-span-1 animate-fade-up-delay-100">
            <div className="flex items-center mb-6">
              <img 
                src="/images/Logos/Footer Logo 400 x 100 px.svg"
                alt="Stadiumport Logo"
                width={400}
                height={100}
                className="h-8 w-auto object-contain dark:invert-0 invert"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-sm leading-relaxed font-inter">
              Your trusted guide to World Cup 2026 across the USA, Mexico, and Canada. Expert travel advice for all 16 host cities, from kickoff to final whistle.
            </p>
            
            {/* Minimal Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: 'ri-twitter-x-line', href: '#', label: 'Twitter' },
                { icon: 'ri-facebook-line', href: '#', label: 'Facebook' },
                { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
                { icon: 'ri-youtube-line', href: '#', label: 'YouTube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Minimal Destinations */}
          <div>
            <h3 className="font-medium mb-4 text-slate-900 dark:text-slate-200">Destinations</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/world-cup-2026-host-cities', label: 'All Host Cities' },
                { to: '/world-cup-2026-stadiums', label: 'All Stadiums' },
                { to: '/world-cup-2026-groups', label: 'All Groups' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Minimal Tools & Tips */}
          <div>
            <h3 className="font-medium mb-4 text-slate-900 dark:text-slate-200">Tools & Tips</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/world-cup-2026-travel-tips', label: 'Travel Tips' },
                { to: '/safety-guide', label: 'Safety Guide' },
                { to: '/2026-world-cup-draw-travel-hub', label: 'Draw Travel Hub' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Minimal Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/editorial-policy', label: 'Editorial Policy' },
                { to: '/about/authors', label: 'Author Bios' },
                { to: '/legal/privacy', label: 'Privacy Policy' },
                { to: '/legal/terms', label: 'Terms of Service' },
                { to: '/legal/affiliate-disclaimer', label: 'Affiliate Disclaimer' }
              ].map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="text-sm text-slate-600">
              © {currentYear} Stadiumport. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
