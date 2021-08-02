module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// primary: "#7367f0",
				primary: "#4839eb",
			},
			maxWidth: {
				"8xl": "88rem",
				"9xl": "96rem",
			},
			screens: {
				lmd: "896px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
