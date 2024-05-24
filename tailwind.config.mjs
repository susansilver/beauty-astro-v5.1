const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {fontFamily: {
			sans: ['Tahoma', 'Verdana', 'Geneva', ...defaultTheme.fontFamily.sans],
		},
		colors:{
			"primary": {
				50:  "#E3F2FD",
				100: "#BBDEFB",
				200: "#90CAF9",
				300: "#64B5F6",
				400: "#42A5F5",
				500: "#2196F3",
				600: "#1E88E5",
				700: "#1976D2",
				800: "#1565C0",
				900: "#0D47A1",
			},
			"secondary": {
				50:  "#FCE4EC",
				100: "#F8BBD0",
				200: "#F48FB1",
				300: "#F06292",
				400: "#EC407A",
				500: "#E91E63",
				600: "#D81B60",
				700: "#C2185B",
				800: "#AD1457",
				900: "#880E4F",
			},
			"accent": {
				50:  "#E0F2F1",
				100: "#B2DFDB",
				200: "#80CBC4",
				300: "#4DB6AC",
				400: "#26A69A",
				500: "#009688",
				600: "#00897B",
				700: "#00796B",
				800: "#00695C",
				900: "#004D40",
			  },
		  'white-50': '#FAFAFA',
		  'black-900': '#212121',
		}},
	},
	plugins: [],
}
