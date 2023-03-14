import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#7d53a2",
		},
		secondary: {
			main: "#a8cf7c",
		},
		gradient: {
			pageBackground: "linear-gradient(to right, #7d53a2 50%, #a8cf7c 0)",
			clockBackground:
				"linear-gradient(to bottom, #7d53a2 50%, #a8cf7c 0)",
		},
		background: {
			break: "#ffbb1d",
			study: "#1D61FF",
		},
	},
});

export default theme;
