import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import image1 from "../../assets/skills1.png";
import image2 from "../../assets/skills2.png";
import image3 from "../../assets/skills3.png";
import image4 from "../../assets/skills4.png";
import image5 from "../../assets/skills5.png";
import image6 from "../../assets/skills6.png";
import image7 from "../../assets/skills7.png";
import image8 from "../../assets/skills8.png";
import Arrow from "../../assets/arrow.png";

const projects = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
  { id: 5, img: image5 },
  { id: 6, img: image6 },
  { id: 7, img: image7 },
  { id: 8, img: image8 },
];

const Skills = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#121212", pt: "30px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: {
                  xs: "1rem",
                  sm: "2.0rem",
                  md: "3.0rem",
                  lg: "3.5rem",
                },
                py: "20px",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              What I do.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={project.id}>
              <img
                src={project.img}
                alt={`Project ${project.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} md={12}>
            <Box sx={{ py: "60px", px: { xs: 2, sm: 5, lg: 10 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "3.2rem",
                    lg: "5rem",
                  },
                  py: "20px",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                See the impact of good, conversion-oriented design on your
                business.
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "3.2rem",
                    lg: "5rem",
                  },

                  py: "20px",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    Let’s Work Together
                    <Box
                      component="img"
                      src={Arrow}
                      alt="arrow"
                      sx={{
                        width: { xs: "20px", sm: "40px", lg: "64px" },
                        height: { xs: "20px", sm: "40px", lg: "64px" },
                        marginLeft: "15px",
                      }}
                    />
                  </Box>
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
