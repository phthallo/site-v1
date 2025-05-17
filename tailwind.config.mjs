/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			proto: ["0xProto", "monospace"],
		},
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
				50: '#947b82',
				100: '#ded9e3',
				200: '#c3b8c1',
				300: '#635055'
			}

			},
		},
	},
	plugins: [],
}
