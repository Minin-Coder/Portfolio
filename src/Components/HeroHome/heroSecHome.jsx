import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";

import profileImage from "../../assets/Profile.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ width: "100%", margin: "0px 0px" }}
        >
          <Grid
            item
            xs={12}
            md={7}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "0px !important", md: "20px !important" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "3.3rem",
                  lg: "4rem",
                },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
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
              </Box>
              Web Developer based in Pakistan.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "#fff",
                paddingTop: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            >
              Crafting responsive and high-performing web experiences.
              Specializing in front-end development and CMS solutions with
              Webflow & Framer.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                pt: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                    color: "white",
                    padding: "7px 30px",
                    borderRadius: "50px",
                    border: "1px solid transparent",
                    width: { xs: "200px", md: "auto" },
                    "&:hover": {
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                    },
                  }}
                >
                  Get&nbsp;in&nbsp;Touch
                </Button>
              </Link>

              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    padding: "7px 30px",
                    width: { xs: "200px", md: "auto" },
                    borderRadius: "50px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                      color: "white",
                      border: "1px solid transparent",
                    },
                  }}
                >
                  <b>View&nbsp;All&nbsp;Works</b>
                </Button>
              </Link>
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
                width: { xs: "95%", sm: "95%", md: "100%" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
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
