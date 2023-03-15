import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	OutlinedInput,
	InputAdornment,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MinutesField from "components/MinutesField/MinutesField";

const EditTimingModal = ({
	isOpen,
	handleClose,
	studyTime,
	breakTime,
	updateTimings,
}) => {
	const [studyTimeFieldValue, setStudyTimeFieldValue] = useState(studyTime);
	const [breakTimeFieldValue, setBreakTimeFieldValue] = useState(breakTime);
	const MAX_TIME = 240;

	const handleStudyTimeChange = (e) => {
		const fieldValue = e.target.value;
		if (
			fieldValue !== undefined &&
			Number.isInteger(+fieldValue) &&
			fieldValue >= 0 &&
			fieldValue < MAX_TIME
		) {
			setStudyTimeFieldValue(e.target.value);
		}
	};

	const handleBreakTimeChange = (e) => {
		const fieldValue = e.target.value;
		if (
			fieldValue !== undefined &&
			Number.isInteger(+fieldValue) &&
			fieldValue >= 0 &&
			fieldValue < MAX_TIME
		) {
			setBreakTimeFieldValue(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		updateTimings(+studyTimeFieldValue, +breakTimeFieldValue);

		handleClose();
	};

	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpen}
			onClose={handleClose}
			component="form"
			PaperProps={{
				sx: (theme) => ({
					background: theme.palette.secondary.main,
				}),
			}}
			sx={{
				"& input[type=number]": {
					MozAppearance: "textfield",
				},
				"& input[type=number]::-webkit-outer-spin-button": {
					WebkitAppearance: "none",
					margin: 0,
				},
				"& input[type=number]::-webkit-inner-spin-button": {
					WebkitAppearance: "none",
					margin: 0,
				},
			}}
			onSubmit={handleSubmit}
		>
			<DialogTitle
				sx={(theme) => ({
					color: theme.palette.secondary.contrastText,
				})}
			>
				Customise Times
			</DialogTitle>
			<DialogContent>
				<Box display="flex" justifyContent="space-around">
					<Box>
						<Typography
							variant="h4"
							component="p"
							id="study-label"
							textAlign="center"
						>
							Study
						</Typography>

						<MinutesField
							value={studyTimeFieldValue}
							handleChange={handleStudyTimeChange}
							labelId="study-label"
						/>
					</Box>

					<Box>
						<Typography
							variant="h4"
							component="p"
							id="break-label"
							textAlign="center"
						>
							Break
						</Typography>

						<MinutesField
							value={breakTimeFieldValue}
							handleChange={handleBreakTimeChange}
							labelId="break-label"
						/>
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button type="button" onClick={handleClose} color="inherit">
					Cancel
				</Button>
				<Button type="submit" onClick={handleSubmit} color="inherit">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default EditTimingModal;
