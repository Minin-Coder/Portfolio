import React from "react";

import { Box } from "@mui/material";

import Tag from "../../assets/Tagline.png";

function Tagline() {
  return (
    <Box>
      <Box
        component="img"
        src={Tag}
        alt="Profile"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "0%",
        }}
      />
    </Box>
  );
}

export default Tagline;
