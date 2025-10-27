
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../base/Card';
import { Button } from '../base/Button';

interface Deal {
  title: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  timeLeft: string;
  category: 'flight' | 'hotel' | 'package' | 'transport';
  affiliateUrl: string;
  featured?: boolean;
}

interface SmartDealBannerProps {
  className?: string;
  compact?: boolean;
  variant?: 'deal' | 'alerts';
}

export function SmartDealBanner({ className = '', compact = false, variant = 'deal' }: SmartDealBannerProps) {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timeLeft, setTimeLeft] = useState('23:45:12');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const deals: Deal[] = [
    {
      title: 'NYC to LA Flights',
      description: 'Round-trip during tournament dates',
      originalPrice: 599,
      salePrice: 399,
      discount: 33,
      timeLeft: '23:45:12',
      category: 'flight',
      affiliateUrl: 'https://example.com/flight-deals',
      featured: true,
    },
    {
      title: 'Stadium District Hotels',
      description: '3 nights near MetLife Stadium',
      originalPrice: 450,
      salePrice: 299,
      discount: 34,
      timeLeft: '15:23:08',
      category: 'hotel',
      affiliateUrl: 'https://example.com/hotel-deals',
    },
    {
      title: 'Complete Travel Package',
      description: 'Flight + Hotel + Match Tickets',
      originalPrice: 1299,
      salePrice: 899,
      discount: 31,
      timeLeft: '47:12:33',
      category: 'package',
      affiliateUrl: 'https://example.com/package-deals',
      featured: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(':').map(Number);
      let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
      
      if (totalSeconds < 0) {
        totalSeconds = 86399;
      }
      
      const newHours = Math.floor(totalSeconds / 3600);
      const newMinutes = Math.floor((totalSeconds % 3600) / 60);
      const newSeconds = totalSeconds % 60;
      
      setTimeLeft(`${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (!compact && variant === 'deal') {
      const interval = setInterval(() => {
        setCurrentDeal((prev) => (prev + 1) % deals.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [deals.length, compact, variant]);

  const deal = deals[currentDeal];

  const handleDealClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      setTimeout(() => {
        setIsSubscribed(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Deal Alerts Widget
  if (variant === 'alerts') {
    return (
      <div className={`relative max-w-sm mx-auto ${className}`}>
        <div className="bg-gradient-to-br from-navy-900/95 via-navy-800/95 to-navy-700/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <i className="ri-notification-line text-navy-900 text-lg font-semibold"></i>
              </div>
              <div>
                <h3 className="font-space font-bold text-xl text-white">Never Miss a Deal</h3>
                <p className="text-slate-300 text-sm">AI-powered price alerts</p>
              </div>
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 backdrop-blur-sm text-sm transition-all duration-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  fullWidth
                  disabled={isLoading}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Get Alerts
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <i className="ri-check-line text-white text-xl"></i>
                </div>
                <h4 className="font-space font-semibold text-lg text-white mb-1">You're subscribed!</h4>
                <p className="text-slate-300 text-sm">We'll notify you of the best deals</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Limited Time Deal Widget
  return (
    <div className={`relative max-w-sm mx-auto ${className}`}>
      <div className="bg-gradient-to-br from-navy-900/95 via-navy-800/95 to-emerald-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
        
        {/* Urgent badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
          ⚡ ENDING SOON
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <i className="ri-flashlight-line text-gold-400 text-lg"></i>
              </div>
              <div>
                <h3 className="font-space font-bold text-xl text-white">Limited Time Deal</h3>
                <p className="text-slate-300 text-sm">Exclusive tournament offers</p>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="text-center mb-4">
            <div className="text-slate-400 text-xs mb-1">ENDS IN</div>
            <div className="font-mono text-2xl font-bold text-emerald-400 tracking-wider shadow-lg">
              {timeLeft}
            </div>
          </div>

          {/* Deal Content */}
          <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-space font-bold text-lg text-white">{deal.title}</h4>
                <p className="text-slate-300 text-sm">{deal.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-slate-400 text-sm line-through">${deal.originalPrice}</div>
                <div className="font-space font-bold text-xl text-gold-400">${deal.salePrice}</div>
                <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {deal.discount}% OFF
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="primary"
            size="sm"
            fullWidth
            onClick={() => handleDealClick(deal.affiliateUrl)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 whitespace-nowrap affiliate-cta"
            data-affiliate-type="deal"
          >
            <i className="ri-price-tag-3-line mr-2"></i>
            Claim Deal
          </Button>

          <Link to="/deals" className="block mt-3">
            <Button 
              variant="outline" 
              size="sm" 
              fullWidth 
              className="border-white/30 text-white hover:bg-white/10 whitespace-nowrap text-sm py-2 affiliate-cta"
              data-affiliate-type="deals"
            >
              <i className="ri-search-line mr-2"></i>
              Browse All Deals
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
