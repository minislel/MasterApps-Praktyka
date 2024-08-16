/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],

	plugins: [
        require('flowbite/plugin')
    ],
	theme: {
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'almostblack' : '#141414',
		  'mediumgray' : '#696969',
		  'almostwhite' : '#fafafa'
		},
	  },
}
