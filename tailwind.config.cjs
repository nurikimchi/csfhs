const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Readex Pro"', 'sans-serif'],
        body: ['"Karla"', 'sans-serif'],
        mono: ['"Jetbrains Mono", mono']
      },
      colors: { ...colors }
    }
  },
  plugins: []
};
