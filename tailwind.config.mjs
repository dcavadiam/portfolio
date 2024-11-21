/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				jacaranda: {
					50: '#fef3ff',
					100: '#fde7ff',
					200: '#fcceff',
					300: '#fca7ff',
					400: '#fb72ff',
					500: '#f33df8',
					600: '#da1ddc',
					700: '#b714b4',
					800: '#951392',
					900: '#7a1576',
					950: '#2a0028',
				},
				tool: {
					astro: '#ff7e33',
					bootstrap: '#7952B3',
					css: '#264DE4',
					figma: '#F24E1E',
					flutter: '#02569B',
					git: '#F05032',
					github: '#181717',
					html: '#E34F26',
					javascript: '#F7DF1E',
					next: '#000000',
					php: '#4F5D95',
					react: '#61DAFB',
					tailwind: '#38BDF8',
					typescript: '#3178C6',
					vercel: '#000000',
					vite: '#646CFF',
				},
			},
		},
	},
	plugins: [],
};
