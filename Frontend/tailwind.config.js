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

        growAndShrink: {
          '0%': {
            transform: 'translateX(-50%) translateY(-50%) scale(0.98)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-50%) scale(1.02)',
          },
        },

        growAndFade: {
          '0%': {
            opacity: 0.25,
            transform: 'scale(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(1)',
          },
        },
      },

      animation: {
        like: 'like 1s ease-in-out 1',
        growAndShrink: 'growAndShrink .1s ease-out 5',
        growAndFade: 'growAndFade 4s infinite ease-out',
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
          background: 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%)',
        },

        ' .border-gradiant': {
          border: ' 5px solid',
          'border-image': 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%) 1',
        },

        '.grow-and-fade': {
          'background-color': 'white',
          'border-radius': '50%',
          height: '100%',
          opacity: '0',
          position: 'absolute',
          width: '100%',
        },

        '.text-stroke': {
          '-webkit-text-stroke': '1px white',
        },
      });
    }),
  ],
});
