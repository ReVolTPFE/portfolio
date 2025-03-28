/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{vue,js,ts}',
		'./pages/**/*.vue',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0063c7',
				// primary: "#0599ff",
				secondary: '#e84e24',
				gray: {
					text: '#545d6b',
					light: '#adb1b9',
					dark: '#18212f',
					darker: '#1f2937',
					blue: '#111827',
				},

			},
			borderColor: {

			},
		},
	},
	plugins: [],
};
