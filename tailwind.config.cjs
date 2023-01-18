/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif'],
				body: ['"Open Sans"', 'sans-serif']
			}
		}
	},
	plugins: []
};
