import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Box, Paper, Typography, Grid } from "@mui/material";

import TimerClock from "components/TimerClock/TimerClock";
import EditTimingModal from "components/EditTimingModal/EditTimingModal";
import { modes as modesEnum } from "enums/enums";

const Pomodoro = ({ setCurrentTheme }) => {
	const [studyTime, setStudyTime] = useState(40);
	const [breakTime, setBreakTime] = useState(15);
	const [isInStudyTime, setIsInStudyTime] = useState(true);
	const [showEditTimingModal, setShowEditTimingModal] = useState(false);

	const expiryTimestamp = new Date();
	expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + studyTime);

	/* eslint-disable no-unused-vars */
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
		onExpire: () => {
			handleTimerComplete();
		},
	});
	/* eslint-enable no-unused-vars */

	const handleRestart = (newTime) => {
		setTimeout(() => {
			const time = new Date();
			time.setMinutes(time.getMinutes() + newTime);
			restart(time, true);
		}, 1000);
	};

	const startNewTimer = (timerMinutes) => {
		setTimeout(() => {
			const time = new Date();
			time.setMinutes(time.getMinutes() + timerMinutes);
			restart(time, true);
		}, 1000);
	};

	const handleTimerComplete = () => {
		const isNowInStudyTime = !isInStudyTime;
		handleRestart(isNowInStudyTime ? studyTime : breakTime);
		setIsInStudyTime(isNowInStudyTime);
	};

	const handleCloseEditTimingModal = () => {
		setShowEditTimingModal(false);
		resume();
	};

	const handleShowEditTimingModal = () => {
		pause();
		setShowEditTimingModal(true);
	};

	const updateTimings = (newStudyTime, newBreakTime) => {
		setStudyTime(newStudyTime);
		setBreakTime(newBreakTime);
		setIsInStudyTime(true);

		startNewTimer(isInStudyTime ? newStudyTime : newBreakTime);
	};

	useEffect(() => {
		setCurrentTheme(isInStudyTime ? modesEnum.STUDY : modesEnum.BREAK);
	}, [isInStudyTime, setCurrentTheme]);

	return (
		<Box width="1" height="1">
			<Paper
				sx={(theme) => ({
					width: "100%",
					minHeight: "100vh",
					backgroundSize: "200% 200%",
					transition: "background-position 2s",
					backgroundImage: theme.palette.gradient.pageBackground,
					backgroundPosition: isInStudyTime ? "right" : "left",

					"& .timer-clock-wrapper": {
						backgroundSize: "210% 210%",
						transition: "background-position 0.5s",

						backgroundImage: theme.palette.gradient.clockBackground,
						backgroundPosition: isInStudyTime ? "bottom" : "top",
					},
				})}
			>
				<Typography
					component="p"
					variant="h2"
					textAlign="center"
					paddingTop={3}
				>
					{isInStudyTime ? "Study Time" : "Break Time"}
				</Typography>

				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
					position="absolute"
					top="0"
				>
					<TimerClock
						seconds={seconds}
						minutes={minutes}
						isRunning={isRunning}
						pause={pause}
						resume={resume}
						editTimings={handleShowEditTimingModal}
					/>
				</Grid>
			</Paper>

			<EditTimingModal
				isOpen={showEditTimingModal}
				handleClose={handleCloseEditTimingModal}
				studyTime={studyTime}
				breakTime={breakTime}
				updateTimings={updateTimings}
			/>
		</Box>
	);
};

export default Pomodoro;
