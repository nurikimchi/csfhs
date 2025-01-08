const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'serif'],
        body: ['"Karla"', 'sans-serif'],
        mono: ['"Jetbrains Mono", mono']
      },
      colors: { ...colors },
      keyframes: {
        expand: {
          '0%': { width: '0%', marginLeft: '50%' },
          '100%': { width: '100%', marginLeft: '0%' },
        },
      },
      animation: {
        expand: 'expand 2s ease-in-out forwards',
      },
    }
  },
  plugins: []
};
