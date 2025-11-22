
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
      const formData = new FormData();
      formData.append('email', email);
      
      const response = await fetch('https://readdy.ai/api/form/d3v62f155ieogu7sirug', {
        method: 'POST',
        body: new URLSearchParams({
          email: email
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
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
    <footer className="bg-slate-900 text-white">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Minimal Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="font-space font-semibold text-2xl md:text-3xl mb-4 text-white">
            Don't Miss Your Shot at 2026
          </h3>
          <p className="font-inter text-slate-400 mb-8 max-w-2xl mx-auto">Get stadium guides, city travel tips, safety alerts, hotel deals, and insider planning advice everything you need in one weekly email.</p>
          
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
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting || !email}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Subscribing...' : 'Get Updates'}
              </button>
            </form>
            

            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-3 p-2 rounded-lg bg-slate-800 text-slate-300 text-sm">
                Successfully subscribed! Welcome to StadiumPort.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Apple-Style Premium Brand Section */}
          <div className="lg:col-span-1 animate-fade-up-delay-100">
            <div className="flex items-center mb-6">
              <img 
                src="/images/Logos/Footer Logo 400 x 100 px.svg"
                alt="StadiumPort Logo"
                width={400}
                height={100}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 mb-8 text-sm leading-relaxed font-inter">
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
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-slate-400 hover:text-white text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Minimal Destinations */}
          <div>
            <h3 className="font-medium mb-4 text-slate-200">Destinations</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/world-cup-2026-host-cities', label: 'All Host Cities' },
                { to: '/world-cup-2026-stadiums', label: 'All Stadiums' },
                { to: '/travel-routes', label: 'Multi-City Routes' },
                { to: '/city-comparisons', label: 'City Comparisons' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Minimal Plan Your Trip */}
          <div>
            <h3 className="font-medium mb-4 text-slate-200">Plan Your Trip</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/travel-guides', label: 'Travel Guides' },
                { to: '/budget-guides', label: 'Budget Travel' },
                { to: '/luxury-travel', label: 'Luxury Experiences' },
                { to: '/transportation', label: 'Getting Around' },
                { to: '/accommodation', label: 'Where to Stay' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Minimal Tools & Tips */}
          <div>
            <h3 className="font-medium mb-4 text-slate-200">Tools & Tips</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/deals', label: 'Today\'s Best Deals' },
                { to: '/deal-alerts', label: 'Deal Alerts' },
                { to: '/world-cup-2026-travel-tips', label: 'Travel Tips' },
                { to: '/packing-lists', label: 'Packing Lists' },
                { to: '/safety-guide', label: 'Safety Guide' }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Minimal Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-4 md:mb-0">
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
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="text-sm text-slate-600">
              © {currentYear} StadiumPort. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
