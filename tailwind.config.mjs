/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				'jacaranda': {
					'50': '#fef3ff',
					'100': '#fde7ff',
					'200': '#fcceff',
					'300': '#fca7ff',
					'400': '#fb72ff',
					'500': '#f33df8',
					'600': '#da1ddc',
					'700': '#b714b4',
					'800': '#951392',
					'900': '#7a1576',
					'950': '#2a0028',
				},
				'tailwind':{
					'color':'#38bdf8'
				},
				'next':{
					'color': '#000000',
				},
				'vite':{
					'color': '#5468ff',
				},
				'javascript':{
					'color': '#f1e05a',
				},
				'typescript':{
					'color': '#3178C6',
				},
				'shadcn':{
					'color': '#161717',
				}

			},
		},

	},
	plugins: [],
}
