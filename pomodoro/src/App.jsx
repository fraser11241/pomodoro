import React, { useState } from "react";

import Pomodoro from "components/Pomodoro/Pomodoro";
import { ThemeProvider } from "@mui/material";
import { studyTheme, breakTheme } from "theme";
import { modes as modesEnum } from "enums/enums";

const App = () => {
	const themes = {
		[modesEnum.STUDY]: studyTheme,
		[modesEnum.BREAK]: breakTheme,
	};
	const [currentTheme, setCurrentTheme] = useState(0);

	const changeTheme = (mode) => {
		if (mode in themes) {
			setCurrentTheme(mode);
		}
	};

	return (
		<ThemeProvider theme={themes[currentTheme]}>
			<Pomodoro setCurrentTheme={changeTheme} />
		</ThemeProvider>
	);
};

export default App;
