import { Grid } from "@mui/material";
import React from "react";
import { useTimer } from "react-timer-hook";
import TimerClock from "../TimerClock/TimerClock";

const Timer = ({ timerDurationMinutes }) => {
	const expiryTimestamp = new Date();
	expiryTimestamp.setMinutes(
		expiryTimestamp.getMinutes() + timerDurationMinutes
	);

	const {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		onExpire: () => console.log("Timer has run out"),
	});

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: "100vh" }}
		>
			<div />
			<TimerClock time={{ seconds, minutes }} />
		</Grid>
	);
};

export default Timer;
