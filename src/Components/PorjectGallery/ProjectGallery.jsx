import React from "react";
import { Box, Grid, Container } from "@mui/material";

import image1 from "../../assets/Projects1.png";
import image2 from "../../assets/Projects2.png";
import image3 from "../../assets/Projects3.png";
import image4 from "../../assets/Projects4.png";

const projects = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
];

const ProjectGallery = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#121212" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} md={3}>
            <img
              src={projects[0].img}
              alt="Large Project"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                boxShadow: "0px 0px 5px 1px #007BFF",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={projects[1].img}
              alt="Square Project"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                boxShadow: "0px 0px 5px 1px #007BFF",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <img
                  src={projects[2].img}
                  alt="Small Project Top"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    boxShadow: "0px 0px 5px 1px #007BFF",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={projects[3].img}
                  alt="Small Project Bottom"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    boxShadow: "0px 0px 5px 1px #007BFF",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectGallery;
