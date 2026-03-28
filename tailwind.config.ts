import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{vue,js,ts}',
		'./pages/**/*.vue',
		'./content/**/*.md',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0063c7',
				secondary: '#e84e24',
				tertiary: '#0599ff',
				success: '#29b609',
				gray: {
					text: '#545d6b',
					lighter: '#f5f5f5',
					light: '#adb1b9',
					dark: '#18212f',
					darker: '#1f2937',
					blue: '#111827',
				},
			},
			borderColor: {

			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-headings': '#0063c7',
						'--tw-prose-links': '#0599ff',
						'--tw-prose-bold': '#18212f',
						maxWidth: 'none',
					},
				},
			},
		},
	},
	plugins: [typography],
};
