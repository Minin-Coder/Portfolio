import React from "react";
import { Box } from "@mui/material";

import HeroSection from "../../Components/HeroHome/heroSecHome";
import Tagline from "../../Components/TagLine/Tagline";
import About from "../../Components/About/About";
import ProjectGallery from "../../Components/PorjectGallery/ProjectGallery";
import Skills from "../../Components/Skills/Skills";
import AnimatedSection from "../../Components/Animation/AnimatedSection"; // Import AnimatedSection

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      <AnimatedSection variants={fadeInVariants}>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection variants={fadeInVariants}>
        <Tagline />
      </AnimatedSection>
      <AnimatedSection variants={fadeInVariants}>
        <About />
      </AnimatedSection>
      <AnimatedSection variants={fadeInVariants}>
        <ProjectGallery />
      </AnimatedSection>
      <AnimatedSection variants={fadeInVariants}>
        <Skills />
      </AnimatedSection>
    </Box>
  );
};

export default Home;
