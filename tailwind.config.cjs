const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'serif'],
        body: ['"Roboto"', 'sans-serif'],
        mono: ['"Jetbrains Mono", mono']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
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
