import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import RoutesSection from "./components/RoutesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!phoneRegex.test(form.phone)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setShowSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`${darkMode ? 'dark' : ''} font-sans bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-between transition-colors duration-300`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Hero Section */}
      <HeroSection darkMode={darkMode} />
      {/* Routes Section */}
      <RoutesSection darkMode={darkMode} />
      {/* Why Choose Us Section */}
      <WhyChooseUsSection darkMode={darkMode} />
      {/* Footer/Contact Section */}
      <FooterSection
        darkMode={darkMode}
        form={form}
        handleChange={handleChange}
        handleContactSubmit={handleContactSubmit}
        showSuccess={showSuccess}
      />
    </div>
  );
}

export default App;
