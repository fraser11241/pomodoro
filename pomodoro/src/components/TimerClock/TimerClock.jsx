import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TimerClock = ({ time }) => {
	const { seconds, minutes } = time;

	const getFormattedTime = (seconds, minutes) => {
		let secondsString = seconds.toString();
		let minutesString = minutes.toString();

		if (minutesString.length < 2) {
			minutesString = "0" + minutesString;
		}
		if (secondsString.length < 2) {
			secondsString = "0" + secondsString;
		}

		return `${minutesString}:${secondsString}`;
	};

	return (
		<Box>
			<Typography component="p" variant="h1">
				{getFormattedTime(seconds, minutes)}
			</Typography>
		</Box>
	);
};

export default TimerClock;
