import React from "react";

interface RoutesSectionProps {
  darkMode: boolean;
}

const RoutesSection: React.FC<RoutesSectionProps> = ({ darkMode }) => (
  <section
    id="routes"
    className="py-14 px-4 bg-white dark:bg-gray-800 transition-colors duration-300 animate-fade-up animate-once scroll-mt-24"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900 dark:text-yellow-300">Popular Routes</h2>
    <div className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">
      <div className="flex-1 bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-yellow-200">Balasore to Sambalpur</h3>
        <p className="text-gray-700 dark:text-gray-200">AC Sleeper | 8h 30m | Daily</p>
      </div>
      <div className="flex-1 bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-yellow-200">Balasore to Jamshedpur</h3>
        <p className="text-gray-700 dark:text-gray-200">AC Sleeper | 6h 45m | Daily</p>
      </div>
      <div className="flex-1 bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow text-center transition-transform transform hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-yellow-200">Balasore to Berhampur</h3>
        <p className="text-gray-700 dark:text-gray-200">AC Sleeper | 9h 10m | Daily</p>
      </div>
    </div>
  </section>
);

export default RoutesSection; 