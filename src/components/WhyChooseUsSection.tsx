import React from "react";

interface WhyChooseUsSectionProps {
  darkMode: boolean;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ darkMode }) => (
  <section
    id="whychooseus"
    className="py-14 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 animate-fade-up animate-once scroll-mt-24"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900 dark:text-yellow-300">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
        <span className="block text-3xl mb-2">🛏️</span>
        <h4 className="font-semibold mb-1 text-blue-900 dark:text-yellow-200">AC Sleeper Coaches</h4>
        <p className="text-gray-600 dark:text-gray-200 text-sm">Travel in comfort with our modern AC sleeper buses.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
        <span className="block text-3xl mb-2">💻</span>
        <h4 className="font-semibold mb-1 text-blue-900 dark:text-yellow-200">Online Ticketing</h4>
        <p className="text-gray-600 dark:text-gray-200 text-sm">Book your seat easily from our website or app.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
        <span className="block text-3xl mb-2">⏰</span>
        <h4 className="font-semibold mb-1 text-blue-900 dark:text-yellow-200">Timely Departure</h4>
        <p className="text-gray-600 dark:text-gray-200 text-sm">We value your time with punctual departures.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
        <span className="block text-3xl mb-2">🚻</span>
        <h4 className="font-semibold mb-1 text-blue-900 dark:text-yellow-200">Clean Toilets</h4>
        <p className="text-gray-600 dark:text-gray-200 text-sm">Hygienic restrooms available on all major routes.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection; 