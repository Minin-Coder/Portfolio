import React from "react";
import { Box } from "@mui/material";

import HeroSection from "../../Components/HeroHome/heroSecHome";
// import AboutMe from "../../Components/About/About";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      <HeroSection />
      {/* <AboutMe /> */}
    </Box>
  );
};

export default Home;
