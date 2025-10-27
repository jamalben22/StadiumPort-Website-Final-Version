
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

const alertTypes = [
  'Flight Price Drops',
  'Hotel Discounts',
  'Package Deals',
  'Last-Minute Offers',
  'Group Bookings',
  'Premium Experiences'
];

const recentAlerts = [
  {
    id: 1,
    type: 'Flight Deals',
    title: 'Flash Sale: 40% Off Flights to Qatar',
    description: 'Limited time offer on direct flights from major US cities to Doha',
    savings: 'Save up to $800',
    validUntil: '2024-02-15',
    urgency: 'high',
    icon: 'ri-flight-takeoff-line'
  },
  {
    id: 2,
    type: 'Hotel Discounts',
    title: 'Luxury Hotels: 30% Off in Host Cities',
    description: 'Premium accommodations with World Cup packages included',
    savings: 'Save up to $500/night',
    validUntil: '2024-02-20',
    urgency: 'medium',
    icon: 'ri-hotel-line'
  },
  {
    id: 3,
    type: 'Package Deals',
    title: 'Complete World Cup Experience Package',
    description: 'Flights, hotels, tickets, and transfers all included',
    savings: 'Save up to $2,000',
    validUntil: '2024-02-10',
    urgency: 'high',
    icon: 'ri-gift-line'
  },
  {
    id: 4,
    type: 'Last Minute',
    title: 'Last-Minute Accommodation Deals',
    description: 'Unsold inventory at discounted rates across all host cities',
    savings: 'Save up to 60%',
    validUntil: '2024-02-08',
    urgency: 'critical',
    icon: 'ri-time-line'
  }
];

const dealCategories = [
  {
    name: 'Flight Price Drops',
    description: 'Get notified when flights to your chosen cities drop in price.',
    icon: 'ri-flight-takeoff-line',
    color: 'blue',
    subscribers: '12,450'
  },
  {
    name: 'Hotel Discounts',
    description: 'Exclusive hotel deals and limited-time offers in all host cities.',
    icon: 'ri-hotel-line',
    color: 'purple',
    subscribers: '8,920'
  },
  {
    name: 'Package Deals',
    description: 'Complete trip packages with flights, hotels, and experiences bundled.',
    icon: 'ri-gift-line',
    color: 'green',
    subscribers: '15,680'
  },
  {
    name: 'Premium Experiences',
    description: 'VIP packages, hospitality deals, and luxury accommodation offers.',
    icon: 'ri-vip-crown-line',
    color: 'amber',
    subscribers: '3,240'
  }
];

export default function DealAlertsPage() {
  const [email, setEmail] = useState('');
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleAlertToggle = (alertType: string) => {
    setSelectedAlerts(prev =>
      prev.includes(alertType) ? prev.filter(type => type !== alertType) : [...prev, alertType]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedAlerts.length > 0) {
      setIsSubscribed(true);
      // Here you would typically send the data to your backend
    }
  };

  /** Returns a tailwind background colour class based on alert urgency.
   *  Guard against unknown values by falling back to a neutral colour.
   */
  const getUrgencyColor = (urgency: string) => {
    const colorMap: Record<string, string> = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500'
    };
    return colorMap[urgency] ?? colorMap.low;
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      amber: 'from-amber-500 to-amber-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const navigate = useNavigate();

  const handleBrowseDeals = () => {
    navigate('/deals');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-navy-800 dark:to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">
              World Cup 2026
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Deal Alerts
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
              Get the Best Deals First
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Never miss a price drop. We'll email you when flights get cheaper, hotels offer discounts,
              and exclusive packages go live for your chosen cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="whitespace-nowrap cursor-pointer">
                <i className="ri-notification-line mr-2"></i>
                Set Up Alerts
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="whitespace-nowrap cursor-pointer"
                onClick={handleBrowseDeals}
              >
                <i className="ri-eye-line mr-2"></i>
                Browse Active Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Alerts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
              This Week&apos;s Best Deals
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              See what our subscribers are booking right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {recentAlerts.map(alert => (
              <Card key={alert.id} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${getCategoryColor('blue')} bg-gradient-to-r rounded-lg flex items-center justify-center`}>
                      <i className={`${alert.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{alert.type}</span>
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white">{alert.title}</h3>
                    </div>
                  </div>
                  <div className={`${getUrgencyColor(alert.urgency)} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                    {alert.urgency.toUpperCase()}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{alert.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-green-600 font-bold text-lg">{alert.savings}</div>
                    <div className="text-sm text-slate-5 00">Valid until {alert.validUntil}</div>
                  </div>
                  <Button variant="primary" size="sm">
                    View Deal
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Categories */}
      <section className="py-16 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
              Choose Your Alerts
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Pick the deal types you want to hear about:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dealCategories.map(category => (
              <Card key={category.name} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(category.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{category.description}</p>
                <div className="text-sm text-slate-500 mb-4">{category.subscribers} fans subscribed</div>
                <Button variant="outline" size="sm" fullWidth className="whitespace-nowrap cursor-pointer">
                  Subscribe
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                Start Getting Deals
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Tell us what you're looking for and we'll send you the best offers.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-navy-600 rounded-xl bg-white dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                    What deals interest you?
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {alertTypes.map(type => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAlerts.includes(type)}
                          onChange={() => handleAlertToggle(type)}
                          className="w-5 h-5 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-300">
                    I want to receive World Cup 2026 deal alerts (unsubscribe anytime)
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={!email || selectedAlerts.length === 0}
                  className="whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-notification-line mr-2"></i>
                  Start Getting Alerts
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                  You&apos;re All Set!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  We&apos;ll send you deal alerts for {selectedAlerts.join(', ')} to {email}
                </p>
                <Button variant="outline" onClick={() => setIsSubscribed(false)} className="whitespace-nowrap cursor-pointer">
                  Modify Preferences
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
