/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				palette: {
					50: '#8e878c',
					100: '#9f94a0',
					200: '#bbb8bb',
					300: '#dcb8b0',
					400: '#e5cab7',
					500: '#9bb0cd',
					600: '#cad5db',
					700: '#120f19',
					800: '#947b82',
					900: '#201d29',

				},
			light: {
				50: '#B47522',
				100: '#FBF0C9',
				200: '#EBDAB4',
				300: '#d5c4a1', 
				400: '#282828', 
				500: '#427B58', // aqua
				600: '#AF3902', // orange
				700: '#D5C4A3' // light brown
			}

			},
		},
	},
	plugins: [],
}
