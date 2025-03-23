import React from "react";
import { Box } from "@mui/material";

import HeroSection from "../../Components/HeroHome/heroSecHome";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, color: "#007BFF" }}>
      <HeroSection />
    </Box>
  );
};

export default Home;
