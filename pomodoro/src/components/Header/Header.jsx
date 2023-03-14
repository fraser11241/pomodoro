import React from "react";
import { Toolbar, IconButton, Typography, AppBar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Photos
				</Typography>

				<IconButton
					size="large"
					aria-label="View settings"
					// onClick={handleMenu}
					color="inherit"
				>
					<SettingsIcon />
				</IconButton>
				{/* <div>
	
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
					</Menu>
				</div> */}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
