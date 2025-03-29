import React, { useState } from "react";
import { Box, Grid, IconButton, Modal, Container } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import image1 from "../../assets/Projects1.png";
import image2 from "../../assets/Projects2.png";
import image3 from "../../assets/Projects3.png";
import image4 from "../../assets/Projects4.png";

const projects = [
  { id: 1, img: image1, link: "https://project1.com" },
  { id: 2, img: image2, link: "https://project2.com" },
  { id: 3, img: image3, link: "https://project3.com" },
  { id: 4, img: image4, link: "https://project4.com" },
];

const ProjectGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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

      {/* Image Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={prevImage}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={projects[currentIndex].img}
            alt="Project Preview"
            style={{ maxWidth: "90vw", maxHeight: "80vh" }}
          />
          <IconButton onClick={nextImage}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectGallery;
