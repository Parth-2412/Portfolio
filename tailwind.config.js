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
				primary: "#7367f0",
				// primary: "rgb(24,13,138)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
