import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";

import profileImage from "../../assets/Profile.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              }}
            >
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hello, I'm Farasat,
              </Box>{" "}
              Web Developer based in Pakistan.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 1, color: "#fff", paddingTop: "20px" }}
            >
              Crafting responsive and high-performing web experiences.
              Specializing in front-end development and CMS solutions with
              Webflow & Framer.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                pt: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                  color: "white",
                  padding: "7px 30px",
                  borderRadius: "50px",
                  border: "1px solid transparent",

                  "&:hover": {
                    background: "Transparent",
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                  padding: "7px 30px",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                    color: "white",
                    border: "1px solid transparent",
                  },
                }}
              >
                <b>View All Works</b>
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            justifyContent="center"
            sx={{
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: { xs: "80%", sm: "90%", md: "100%" },
                height: "auto",
                borderRadius: "0%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
