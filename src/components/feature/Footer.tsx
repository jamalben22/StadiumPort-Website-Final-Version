
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
    <footer className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-mesh-gradient"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Premium Newsletter Section */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-gold-400 mb-6 shadow-glow-lg animate-pulse-glow">
            <i className="ri-mail-line text-white text-3xl"></i>
          </div>
          <h3 className="font-space font-bold text-3xl md:text-4xl mb-4 gradient-text">
            Don't Miss Your Shot at 2026
          </h3>
          <p className="font-inter text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Get stadium guides, city travel tips, safety alerts, hotel deals, and insider planning advice everything you need in one weekly email.</p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} data-readdy-form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400"></i>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="input-premium pl-12"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting || !email}
                className="btn-premium text-white font-inter whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-2 animate-spin"></i>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    Get Free Updates
                  </>
                )}
              </button>
            </form>
            
            <div className="flex justify-center items-center space-x-4 text-slate-400 text-sm mt-4">
              <span>✓ Free stadium guide included</span>
              <span>•</span>
              <span>✓ Unsubscribe anytime</span>
              <span>•</span>
              <span>✓ No spam</span>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-inter animate-fade-up">
                <i className="ri-check-line mr-2"></i>
                Successfully subscribed! Welcome to StadiumPort.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-inter animate-fade-up">
                <i className="ri-error-warning-line mr-2"></i>
                Please enter a valid email address.
              </div>
            )}
          </div>
        </div>

        {/* Premium Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Ultra Premium Brand Section */}
          <div className="lg:col-span-1 animate-fade-up-delay-100">
            <div className="flex items-center mb-6 group">
              <div className="relative overflow-hidden rounded-2xl p-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-gold-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://static.readdy.ai/image/d259000346d744ef4d43ba5164954372/f1f98ae7c420d4b6adb2fdd591b38e49.png"
                  alt="StadiumPort Logo"
                  className="h-10 w-auto object-contain relative z-10 filter-premium"
                />
              </div>
              <div className="ml-3">
                <div className="font-space font-bold text-xl gradient-text">StadiumPort</div>
                <div className="text-xs text-slate-400 font-inter">World Cup 2026</div>
              </div>
            </div>
            <p className="text-slate-300 mb-8 text-sm leading-relaxed font-inter">
              Your trusted guide to World Cup 2026 across the USA, Mexico, and Canada. Expert travel advice for all 16 host cities, from kickoff to final whistle.
            </p>
            
            {/* Premium Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: 'ri-twitter-x-line', href: '#', label: 'Twitter' },
                { icon: 'ri-facebook-line', href: '#', label: 'Facebook' },
                { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
                { icon: 'ri-youtube-line', href: '#', label: 'YouTube' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group w-12 h-12 rounded-2xl bg-white/5 hover:bg-emerald-500 border border-white/10 hover:border-emerald-500 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg text-slate-400 group-hover:text-white transition-colors duration-300`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Premium Destinations */}
          <div className="animate-fade-up-delay-200">
            <h3 className="text-lg font-space font-semibold mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></div>
              Destinations
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/world-cup-2026-host-cities', label: 'All Host Cities', icon: 'ri-map-pin-line' },
                { to: '/world-cup-2026-stadiums', label: 'All Stadiums', icon: 'ri-building-line' },
                { to: '/travel-routes', label: 'Multi-City Routes', icon: 'ri-route-line' },
                { to: '/city-comparisons', label: 'City Comparisons', icon: 'ri-scales-line' }
              ].map((item, index) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="group flex items-center text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <i className={`${item.icon} mr-3 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300`}></i>
                    <span className="font-inter">{item.label}</span>
                    <i className="ri-arrow-right-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan Your Trip */}
          <div className="animate-fade-up-delay-300">
            <h3 className="text-lg font-space font-semibold mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-gold-400 mr-3 animate-pulse"></div>
              Plan Your Trip
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/travel-guides', label: 'Travel Guides', icon: 'ri-book-open-line' },
                { to: '/budget-guides', label: 'Budget Travel', icon: 'ri-wallet-line' },
                { to: '/luxury-travel', label: 'Luxury Experiences', icon: 'ri-vip-crown-line' },
                { to: '/transportation', label: 'Getting Around', icon: 'ri-bus-line' },
                { to: '/accommodation', label: 'Where to Stay', icon: 'ri-hotel-line' }
              ].map((item, index) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="group flex items-center text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <i className={`${item.icon} mr-3 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300`}></i>
                    <span className="font-inter">{item.label}</span>
                    <i className="ri-arrow-right-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tools & Tips */}
          <div className="animate-fade-up-delay-400">
            <h3 className="text-lg font-space font-semibold mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></div>
              Tools & Tips
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/deals', label: 'Today\'s Best Deals', icon: 'ri-price-tag-3-line' },
                { to: '/deal-alerts', label: 'Deal Alerts', icon: 'ri-notification-line' },
                { to: '/travel-tips', label: 'Travel Tips', icon: 'ri-lightbulb-line' },
                { to: '/packing-lists', label: 'Packing Lists', icon: 'ri-suitcase-line' },
                { to: '/safety-guide', label: 'Safety Guide', icon: 'ri-shield-check-line' }
              ].map((item, index) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="group flex items-center text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <i className={`${item.icon} mr-3 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300`}></i>
                    <span className="font-inter">{item.label}</span>
                    <i className="ri-arrow-right-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Premium Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-4 md:mb-0">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/legal/privacy', label: 'Privacy Policy' },
                { to: '/legal/terms', label: 'Terms of Service' },
                { to: '/legal/affiliate-disclaimer', label: 'Affiliate Disclaimer' },
                { to: '/contact', label: 'Contact Us' }
              ].map((item, index) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="hover:text-emerald-400 transition-colors duration-300 font-inter relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

            </div>
            <div className="text-sm text-slate-400 font-inter">
              <span>© {currentYear} StadiumPort. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-emerald-500/20 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-gold-400/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full bg-emerald-500/30 animate-float" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
}
