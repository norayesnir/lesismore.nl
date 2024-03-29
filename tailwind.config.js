/** @type {import('tailwindcss').Config} */
export default {
	content: ["@/**/*.vue", "@/assets/styles/**/*.scss"],
	theme: {
		extend: {
			spacing: {
				128: "128px",
			},
		},
		// extend: {},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			white: "#ffffff",
			black: "#000000",
			tuftBush: {
				light: "#fdecd4",
				DEFAULT: "#FED9C7",
				dark: "#e6bdaa",
				700: "#631412",
				600: "#691f19",
				500: "#79352b",
				300: "#915447",
				90: "#ae7767",
				70: "#ca9a89",
				50: "#e6bdaa",
				30: "#FED9C7",
				20: "#fdecd4",
				10: "#fefbef",
			},
			summerGreen: {
				light: "#B8D5CC",
				DEFAULT: "#A5C0B1",
				dark: "#87a68f",
				600: "#153a0f",
				500: "#21431c",
				300: "#3e603c",
				100: "#628364",
				70: "#87a68f",
				50: "#A5C0B1",
				40: "#b8d5cc",
				30: "#bde8e4",
				20: "#c6f5f5",
				10: "#e8fcfd",
			},
			jaffa: {
				light: "#f59e67",
				DEFAULT: "#F38145",
				dark: "#b85732",
				900: "#240208",
				800: "#3b0e0e",
				500: "#762c1e",
				200: "#b85732",
				100: "#F38145",
				60: "#f59e67",
				40: "#f8c081",
				30: "#fbdd98",
				20: "#fdf0b2",
				10: "#fef8d5",
			},
			geraldine: {
				light: "#fcaea4",
				DEFAULT: "#FC958C",
				dark: "#d06d6a",
				800: "#550910",
				600: "#6f1a21",
				400: "#9d3e42",
				90: "#d06d6a",
				70: "#FC958C",
				50: "#fcaea4",
				40: "#fdc8b7",
				30: "#fdddc8",
				20: "#feedda",
				10: "#fef8f1",
			},
			cinderella: {
				light: "#fdeae3",
				DEFAULT: "#FDD5D3",
				dark: "#ecbebe",
				700: "#631114",
				600: "#6a1a1c",
				500: "#7d3133",
				300: "#995455",
				90: "#b6797a",
				60: "#d39f9f",
				40: "#ecbebe",
				30: "#FDD5D3",
				20: "#fdeae3",
				10: "#fef9f3",
			},
			neutral: {
				light: "#3b393e",
				DEFAULT: "#252329",
				dark: "#101013",
				300: "#09090a",
				200: "#101013",
				100: "#252329",
				90: "#3b393e",
				80: "#525055",
				70: "#68676b",
				60: "#7f7e81",
				50: "#959497",
				40: "#acabad",
				30: "#c1c1c2",
				20: "#d7d6d7",
				10: "#ebebeb",
			},
			transparent: "transparent",
		},
		fontFamily: {
			heading: ["Comfortaa", "sans-serif"],
			body: ["Poppins", "sans-serif"],
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".reverse": {
					display: "flex",
				},
				".reverse.flex-col": {
					flexDirection: "column-reverse",
				},
				".reverse.flex-row": {
					flexDirection: "row-reverse",
				},
			};

			addUtilities(newUtilities);
		},
	],
	safelist: [
		// ? Flex direction
		"flex-row",
		"flex-row-reverse",

		// ? Grid columns
		"grid-cols-1",
		"grid-cols-2",
		"grid-cols-3",
		"order-1",

		// ? Grid span
		"xl:col-span-3",
		"xl:col-span-4",
		"xl:col-span-5",

		{
			// ? Backgrounds
			pattern: /^bg-.*/,
		},
	],
};
