/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'bus-move': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'bus-move': 'bus-move 8s ease-in-out infinite',
        'fade-in': 'fade-in 1.5s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  darkMode: 'class',
}

