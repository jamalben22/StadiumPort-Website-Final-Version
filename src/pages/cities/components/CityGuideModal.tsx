import React from 'react';

interface City {
  id: string;
  name: string;
  country: string;
  stadium: string;
  capacity: string;
  description: string;
  image: string;
  priceFrom: string;
  hotels: string;
}

interface CityGuideModalProps {
  city: City;
  onClose: () => void;
}

export default function CityGuideModal({ city, onClose }: CityGuideModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-navy-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
          <h2 className="font-space font-bold text-2xl">Explore {city.name}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {/* Example content structure - this will be replaced with actual guide content */}
          <div className="bg-slate-50 dark:bg-navy-800 p-5 rounded-xl border border-slate-200 dark:border-navy-700">
            <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-3">About {city.name}</h3>
            <p className="text-slate-600 dark:text-slate-400">{city.description}</p>
          </div>

          <div className="bg-slate-50 dark:bg-navy-800 p-5 rounded-xl border border-slate-200 dark:border-navy-700">
            <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-3">Stadium Details</h3>
            <p className="text-slate-600 dark:text-slate-400">Stadium: {city.stadium}</p>
            <p className="text-slate-600 dark:text-slate-400">Capacity: {city.capacity}</p>
          </div>

          {/* More sections will go here, following the MetLife style */}
        </div>
      </div>
    </div>
  );
}