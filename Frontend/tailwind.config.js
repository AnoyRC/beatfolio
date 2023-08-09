/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        like: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },

      animation: {
        like: 'like 1s ease-in-out 1',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },

        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },

        '.prevent-select': {
          '-webkit-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
        },

        '.text-gradiant': {
          background: 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },

        '.btn-gradiant': {
          'border-radius': '50px',
          background: 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%)',
        },

        ' .border-gradiant': {
          border: ' 5px solid',
          'border-image': 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%) 1',
        },

        '.grid-desktop': {
          'grid-template-columns': 'fit-content(100%) 1fr',
        },
      });
    }),
  ],
});
