import React from "react";

interface FooterSectionProps {
  darkMode: boolean;
  form: { name: string; email: string; phone: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showSuccess: boolean;
}

const FooterSection: React.FC<FooterSectionProps> = ({ darkMode, form, handleChange, handleContactSubmit, showSuccess }) => (
  <footer id="contact" className="bg-blue-900 text-white py-10 px-4 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 animate-fade-up animate-once scroll-mt-24">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Contact Form */}
      <form className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow text-blue-900 flex flex-col gap-4 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300" onSubmit={handleContactSubmit} autoComplete="off">
        <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-yellow-300">Contact Us</h3>
        <div className="relative">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full peer focus:outline-none focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            required
            autoComplete="off"
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-500 bg-white dark:bg-gray-900 px-1">Full Name</label>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full peer focus:outline-none focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            required
            autoComplete="off"
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-500 bg-white dark:bg-gray-900 px-1">Email (e.g. user@email.com)</label>
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full peer focus:outline-none focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            autoComplete="off"
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-500 bg-white dark:bg-gray-900 px-1">Mobile Number (10 digits)</label>
        </div>
        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="border rounded px-3 py-4 w-full peer focus:outline-none focus:border-blue-500 resize-y min-h-[90px] dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            rows={3}
            required
            autoComplete="off"
          />
          <label className="absolute left-3 top-1 text-gray-400 text-sm pointer-events-none transition-all peer-focus:text-xs peer-focus:text-blue-500 peer-valid:text-xs peer-valid:text-blue-500 bg-white dark:bg-gray-900 px-1">Message</label>
        </div>
        <button type="submit" className="bg-blue-900 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition dark:bg-gray-700 dark:hover:bg-gray-600">Send</button>
      </form>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold z-50 animate-bounce">
          Message sent successfully!
        </div>
      )}
      {/* WhatsApp CTA & App Banner */}
      <div className="flex flex-col items-center gap-6 w-full md:w-1/2">
        <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow transition text-lg dark:bg-green-700 dark:hover:bg-green-600">
          <span className="text-2xl">💬</span> WhatsApp Us
        </a>
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg p-4 text-center w-full shadow-lg border-2 border-yellow-600 dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 dark:border-yellow-700 transition-colors duration-300">
          <p className="text-blue-900 font-extrabold mb-1 text-lg uppercase tracking-wide drop-shadow">Coming Soon</p>
          <span className="block text-xl font-bold text-blue-900">Nandighosh Bus Mobile App</span>
          <div className="mt-2 h-10 bg-gray-300 rounded w-32 mx-auto flex items-center justify-center text-gray-600 font-semibold dark:bg-gray-700 dark:text-gray-200">App Banner</div>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-300 dark:text-gray-400 mt-8 text-sm">&copy; {new Date().getFullYear()} Nandighosh Bus. All rights reserved.</div>
  </footer>
);

export default FooterSection; 