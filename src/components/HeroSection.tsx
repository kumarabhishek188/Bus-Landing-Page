import React from "react";
import logo from '../logo.png';
import busBg from '../bus.png';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => (
  <section
    id="hero"
    className="relative w-full min-h-screen py-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
    style={{ minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    {/* Full-cover Hero Background Image with moving animation */}
    <img
      src={busBg}
      alt="Bus Background"
      className="absolute inset-0 w-full h-full object-cover z-0 animate-bus-move"
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/40 z-10" />
    {/* Hero Content with fade-in and scroll animation */}
    <div className="relative z-20 flex flex-col items-center animate-fade-in animate-fade-up animate-once">
      <div className="mb-6">
        <img src={logo} alt="Nandighosh Bus Logo" className="w-32 h-32 object-contain rounded-full shadow-lg bg-white p-2 mx-auto" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Nandighosh Bus</h1>
      <p className="text-xl md:text-2xl mb-8 font-medium text-white">Connecting Odisha, Comfortably</p>
      <a href="#contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition">Book Your Seat</a>
    </div>
  </section>
);

export default HeroSection; 