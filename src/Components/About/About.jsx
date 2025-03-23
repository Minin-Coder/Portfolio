import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      {/* Background Section */}
      <Box
        sx={{
          height: "700px",
          backgroundColor: "#A3CFF7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h3"
          component={motion.h2}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            fontWeight: "bold",
            color: "#121212",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            mb: 3,
          }}
        >
          <span style={{ color: "#007BFF" }}>About</span> Me
        </Typography>

        {/* Content Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: "900px" }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.primary"
              mb={1}
            >
              Hi, I'm Farasat Ali 👋
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: "600px", mx: "auto" }}
            >
              Passionate front-end developer and designer, crafting modern,
              responsive, and visually appealing web applications. Skilled in
              HTML5, CSS3, Bootstrap5, JavaScript, React.js, Next.js, and CMS
              development with Webflow and Framer. Dedicated to delivering
              seamless user experiences with **clean, efficient, and scalable**
              code.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
