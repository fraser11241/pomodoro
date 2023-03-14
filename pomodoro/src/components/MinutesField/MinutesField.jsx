import {
	FormControl,
	InputAdornment,
	InputLabel,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

const MinutesField = ({ value, handleChange, labelId }) => {
	return (
		<FormControl>
			<TextField
				value={value}
				onChange={handleChange}
				type="number"
				margin="dense"
				labelledby={labelId}
				sx={{ textAlign: "center", maxWidth: "5ch", fontSize: "32px" }}
				inputProps={{ style: { textAlign: "center" } }}
				InputProps={{
					inputMode: "numeric",
					pattern: "[0-9]*",
					min: 0,
					max: 90,
					style: {
						fontSize: "32px",
					},
				}}
			/>
			<Typography textAlign="center">minutes</Typography>
		</FormControl>
	);
};

export default MinutesField;
