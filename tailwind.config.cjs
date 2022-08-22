/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				'hero-img': "url('/src/assets/watch_4.webp')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	daisyui: {
		themes: [
		  {
			mytheme: {
			
				"primary": "#bbc5f7",
							
				"secondary": "#b2103b",
							
				"accent": "#1a7004",
							
				"neutral": "#222D34",
							
				"base-100": "#29374C",
							
				"info": "#546AC9",
							
				"success": "#2BC599",
							
				"warning": "#F7C955",
							
				"error": "#FB5664",
			},
		  },
		],
	  },
};
