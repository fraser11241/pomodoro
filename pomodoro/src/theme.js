import { createTheme } from "@mui/material/styles";
import { pink, deepPurple, indigo, teal } from "@mui/material/colors";

const studyBackgroundColour = pink[500];
const studyCardColour = pink[600];

const breakBackgroundColour = indigo[500];
const breakCardColour = indigo[600];

const defaultTheme = createTheme({
	palette: {
		mode: "dark",
		gradient: {
			pageBackground: `linear-gradient(to right, ${breakBackgroundColour} 50%, ${studyBackgroundColour} 0)`,
			clockBackground: `linear-gradient(to top, ${studyCardColour} 50%, ${breakCardColour} 0)`,
		},
	},
});

const studyTheme = createTheme(defaultTheme, {
	palette: {
		primary: pink,
		secondary: {
			main: deepPurple[500],
			contrastText: "#FFF",
		},
	},
});

const breakTheme = createTheme(defaultTheme, {
	palette: {
		mode: "dark",
		primary: indigo,
		secondary: {
			main: teal[500],
		},
	},
});

export { studyTheme, breakTheme };
