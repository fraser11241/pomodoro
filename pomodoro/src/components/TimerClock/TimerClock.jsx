import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import TimerIcon from "@mui/icons-material/Timer";

const TimerClock = ({
	seconds,
	minutes,
	isRunning,
	pause,
	resume,
	editTimings,
}) => {
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
			<Box paddingX={5} paddingY={1}>
				<Typography component="p" variant="h1" role="timer">
					{getFormattedTime(seconds, minutes)}
				</Typography>
				<Box display="flex" justifyContent="center">
					{isRunning ? (
						<IconButton
							onClick={pause}
							ariaLabel="Pause timer"
							title="Pause timer"
						>
							<PauseCircleOutlineIcon
								sx={{ height: 38, width: 38 }}
							/>
						</IconButton>
					) : (
						<IconButton
							onClick={resume}
							ariaLabel="Resume timer"
							title="Resume timer"
						>
							<PlayCircleOutlineIcon
								sx={{ height: 38, width: 38 }}
							/>
						</IconButton>
					)}

					<IconButton
						onClick={editTimings}
						ariaLabel="Edit timings"
						title="Edit timings"
					>
						<TimerIcon sx={{ height: 38, width: 38 }} />
					</IconButton>
				</Box>
			</Box>
		</Paper>
	);
};

export default TimerClock;
