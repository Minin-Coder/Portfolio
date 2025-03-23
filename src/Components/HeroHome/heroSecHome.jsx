import React from "react";
import { Box, Grid, Typography, Container, IconButton } from "@mui/material";
import profileImage from "../../assets/profile.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import UpworkLogo from "../../assets/upwork.png";

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
      <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
        <Grid container spacing={4} alignItems="top">
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            sx={{ paddingLeft: "0px !important", paddingRight: "40px" }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: { xs: "80%", sm: "90%", md: "100%" },
                height: "auto",
                borderRadius: "0%",
                filter: "drop-shadow(0px -5px 5px #fff)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="body1"
              sx={{ mt: 1, color: "#A3CFF7", paddingTop: "70px" }}
            >
              Welcome to my World
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#ffff",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              }}
            >
              Hi, I'm <span style={{ color: "#007BFF" }}>Farasat Ali</span>
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
              Crafting sleek, responsive, and immersive web experiences with a
              designer’s eye and a developer’s precision. Proficient in HTML5,
              CSS3, Bootstrap5, JavaScript, React.js, Next.js, and CMS
              development using Webflow & Framer. Passionate about turning ideas
              into seamless, high-performing digital solutions.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, paddingTop: "20px" }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                sx={{ color: "#fff", borderRadius: "50%" }}
              >
                <LinkedInIcon sx={{ fontSize: "30px", borderRadius: "50%" }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.upwork.com/"
                target="_blank"
                sx={{ color: "#6FDA44" }}
              >
                <img
                  src={UpworkLogo}
                  alt="Upwork"
                  style={{ width: 30, height: 30 }}
                />
              </IconButton>

              <IconButton
                component="a"
                href="https://github.com/"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <GitHubIcon sx={{ fontSize: "30px" }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/yourphonenumber"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <WhatsAppIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
