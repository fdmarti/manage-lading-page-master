/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bright-red': 'hsl(12, 88%, 59%)',
				'dark-blue': 'hsl(233, 12%, 13%)'
			},
			backgroundImage: {
				'hero-pattern': "url('/images/bg-tablet-pattern.svg')",
				'simplify-section': "url('/images/bg-simplify-section-desktop.svg')",
			},
			animation: {
				'loop-scroll': 'loop-scroll 50s linear infinite',
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	plugins: [],
}
