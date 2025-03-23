import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import profileImage from "../../assets/profile.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: { xs: "90%", sm: "100%", md: "100%" },
                height: "auto",
                borderRadius: "50%",
                border: "4px solid #007BFF",
                maxWidth: "300px", // Prevents image from growing too large
              }}
            />
          </Grid>

          {/* Right Side - Title, Paragraph, Button */}
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#007BFF",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font sizes
              }}
            >
              Hi, I'm Farasat Ali
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: "#B0B0B0",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              A Frontend Developer specializing in React.js
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#A3CFF7" }}>
              Passionate about building modern, responsive, and visually
              appealing web applications.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#007BFF",
                color: "white",
                "&:hover": { bgcolor: "#0056b3" },
              }}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
