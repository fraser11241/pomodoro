import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import TimerIcon from "@mui/icons-material/Timer";
import useMediaQuery from "@mui/material/useMediaQuery";

const TimerClock = ({
	seconds,
	minutes,
	isRunning,
	pause,
	resume,
	editTimings,
}) => {
	const smallScreen = useMediaQuery("(max-width:300px)");
	console.log("SMALL SCREEN", smallScreen);
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
		<Paper className="timer-clock-wrapper">
			<Container maxWidth="md">
				<Box>
					<Typography
						component="p"
						sx={smallScreen ? { fontSize: "25vw" } : {}}
						variant="h1"
						role="timer"
					>
						{getFormattedTime(seconds, minutes)}
					</Typography>
					<Box display="flex" justifyContent="center">
						{isRunning ? (
							<IconButton onClick={pause} title="Pause timer">
								<PauseCircleOutlineIcon
									sx={{ height: 38, width: 38 }}
								/>
							</IconButton>
						) : (
							<IconButton onClick={resume} title="Resume timer">
								<PlayCircleOutlineIcon
									sx={{ height: 38, width: 38 }}
								/>
							</IconButton>
						)}

						<IconButton onClick={editTimings} title="Edit timings">
							<TimerIcon sx={{ height: 38, width: 38 }} />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Paper>
	);
};

export default TimerClock;
