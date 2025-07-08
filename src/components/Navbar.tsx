import React, { useState } from "react";
import logo from '../logo.png';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Routes", href: "#routes" },
  { label: "Why Choose Us", href: "#whychooseus" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Nandighosh Bus Logo" className="w-10 h-10 rounded-full bg-white shadow object-contain" />
          <span className="text-2xl font-extrabold text-blue-900 dark:text-yellow-400 tracking-tight">Nandighosh Bus</span>
        </a>
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition"
              >
                {link.label}
              </a>
            ))}
            {/* Dark/Light Mode Toggle (always visible) */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-gray-700 dark:text-gray-200 focus:outline-none ml-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Three-line hamburger icon
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 