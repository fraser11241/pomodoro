import React from "react";
import { Box, Grid } from "@mui/material";

import TimerClock from "./components/TimerClock/TimerClock";

const App = () => {
	return (
		<Box width="1" height="1">
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: "100vh" }}
			>
				<TimerClock />
			</Grid>
		</Box>
	);
};

export default App;
