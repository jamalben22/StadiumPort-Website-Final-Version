
import { useState } from 'react';
import { Card } from '../base/Card';
import { Button } from '../base/Button';

interface FlightOption {
  airline: string;
  logo: string;
  price: number;
  duration: string;
  stops: number;
  departure: string;
  arrival: string;
  affiliateUrl: string;
}

interface FlightCompareWidgetProps {
  from?: string;
  to?: string;
  className?: string;
}

export function FlightCompareWidget({ from = 'New York', to = 'Los Angeles', className = '' }: FlightCompareWidgetProps) {
  const [selectedDate, setSelectedDate] = useState('2026-06-15');
  const [passengers, setPassengers] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const flightOptions: FlightOption[] = [
    {
      airline: 'American Airlines',
      logo: 'https://readdy.ai/api/search-image?query=American%20Airlines%20logo%20on%20white%20background%2C%20clean%20corporate%20airline%20branding%2C%20professional%20aviation%20company%20logo%20design%2C%20modern%20typography%2C%20red%20white%20blue%20colors&width=60&height=40&seq=aa1&orientation=landscape',
      price: 299,
      duration: '5h 30m',
      stops: 0,
      departure: '08:15',
      arrival: '11:45',
      affiliateUrl: 'https://flight-affiliate-link.com',
    },
    {
      airline: 'Delta Air Lines',
      logo: 'https://readdy.ai/api/search-image?query=Delta%20Air%20Lines%20logo%20on%20white%20background%2C%20clean%20corporate%20airline%20branding%2C%20professional%20aviation%20company%20logo%20design%2C%20modern%20typography%2C%20blue%20red%20colors&width=60&height=40&seq=dl1&orientation=landscape',
      price: 324,
      duration: '6h 15m',
      stops: 1,
      departure: '06:30',
      arrival: '14:45',
      affiliateUrl: 'https://flight-affiliate-link.com',
    },
    {
      airline: 'United Airlines',
      logo: 'https://readdy.ai/api/search-image?query=United%20Airlines%20logo%20on%20white%20background%2C%20clean%20corporate%20airline%20branding%2C%20professional%20aviation%20company%20logo%20design%2C%20modern%20typography%2C%20blue%20colors&width=60&height=40&seq=ua1&orientation=landscape',
      price: 287,
      duration: '5h 45m',
      stops: 0,
      departure: '14:20',
      arrival: '18:05',
      affiliateUrl: 'https://flight-affiliate-link.com',
    },
  ];

  const handleSelectFlight = (flight: FlightOption) => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(flight.affiliateUrl, '_blank');
      setIsLoading(false);
    }, 300);
  };

  const handleViewAllFlights = () => {
    setTimeout(() => {
      window.open('https://flight-affiliate-link.com?from=' + encodeURIComponent(from) + '&to=' + encodeURIComponent(to) + '&date=' + selectedDate + '&passengers=' + passengers, '_blank');
    }, 300);
  };

  const handleSearchFlights = () => {
    setTimeout(() => {
      window.open('https://flight-affiliate-link.com?from=' + encodeURIComponent(from) + '&to=' + encodeURIComponent(to) + '&date=' + selectedDate + '&passengers=' + passengers, '_blank');
    }, 300);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className={`${className}`} padding="lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-1">
              Flight Comparison
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-sm">
              Compare prices from top airlines
            </p>
          </div>
          <div className="w-12 h-12 bg-[#01b47d]/10 dark:bg-[#008f63]/30 rounded-lg flex items-center justify-center">
            <i className="ri-flight-takeoff-line text-[#01b47d] text-xl"></i>
          </div>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-slate-50 dark:bg-navy-800 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">From</label>
            <input
              type="text"
              value={from}
              className="w-full px-3 py-2 border border-slate-300 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#01b47d] focus:border-[#01b47d]"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">To</label>
            <input
              type="text"
              value={to}
              className="w-full px-3 py-2 border border-slate-300 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#01b47d] focus:border-[#01b47d]"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#01b47d] focus:border-[#01b47d]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Passengers</label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full px-3 py-2 pr-8 border border-slate-300 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#01b47d] focus:border-[#01b47d]"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Flight Options */}
        <div className="space-y-4">
          {flightOptions.map((flight, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-slate-200 dark:border-navy-700 rounded-lg hover:border-[#008f63] dark:hover:border-[#008f63] transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={flight.logo}
                  alt={flight.airline}
                  className="w-12 h-8 object-contain"
                />
                <div>
                  <div className="font-medium text-slate-900 dark:text-white font-inter">
                    {flight.airline}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {flight.departure} - {flight.arrival} • {flight.duration}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-navy-900 dark:text-white font-space">
                  ${flight.price}
                </div>
                {/* ========== AFFILIATE SECTION: FLIGHT SELECTION ========== */}
                <a
                  href={flight.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  data-affiliate-type="flight"
                  className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-2 text-sm bg-[#01b47d] hover:bg-[#008f63] text-white shadow-sm hover:shadow-lg hover:scale-105"
                  onClick={() => handleSelectFlight(flight)}
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Loading...
                    </>
                  ) : (
                    'Select Flight'
                  )}
                </a>
                {/* ========== END AFFILIATE SECTION ========== */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          {/* ========== AFFILIATE SECTION: VIEW ALL FLIGHTS ========== */}
          <a 
            href="https://flight-affiliate-link.com"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            data-affiliate-type="flight"
            className="affiliate-btn inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer w-full px-6 py-3 text-base border-2 border-[#01b47d] text-[#01b47d] hover:bg-[#008f63] hover:text-white shadow-sm hover:shadow-lg hover:scale-105"
            onClick={handleViewAllFlights}
          >
            <i className="ri-search-line mr-2"></i>
            View All Flight Options
          </a>
          {/* ========== END AFFILIATE SECTION ========== */}
        </div>
      </Card>
    </>
  );
}