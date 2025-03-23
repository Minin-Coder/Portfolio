import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ textAlign: "center", py: 2, bgcolor: "#121212", color: "white" }}
    >
      <Typography variant="body2">
        &copy; 2025 My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
