import React from "react";
import { Box } from "@mui/material";

import HeroSection from "../../Components/HeroHome/heroSecHome";
import Tagline from "../../Components/TagLine/Tagline";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      <HeroSection />
      <Tagline />
      <About />
    </Box>
  );
};

export default Home;
