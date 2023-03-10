import React from "react";
import { Box } from "@mui/material";

import Timer from "./components/Timer/Timer";

const App = () => {
	return (
		<Box width="1" height="1">
			<Timer timerDurationMinutes={5} />
		</Box>
	);
};

export default App;
