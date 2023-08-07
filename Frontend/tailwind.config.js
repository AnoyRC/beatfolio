/** @type {import('tailwindcss').Config} */
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
  plugins: [],
});
