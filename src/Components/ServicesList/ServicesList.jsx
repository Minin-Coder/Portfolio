import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import Services1 from "../../assets/services1.png";
import Services2 from "../../assets/services2.png";
import Services3 from "../../assets/services3.png";
import { Link } from "react-router-dom";

const ServicesList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        paddingBottom: "50px",
        paddingTop: { xs: "10px", sm: "20px", md: "30px", lg: "40px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ width: "100%", margin: "0px 0px" }}>
          <Grid
            item
            xs={12}
            md={12}
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
                py: { xs: "10px", md: 7 },
              }}
            >
              Our&nbsp;
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #007BFF, #00B4DB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ width: "100%", margin: "0px 0px", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            md={6}
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
                  xs: "1rem",
                  sm: "2.0rem",
                  md: "3.0rem",
                  lg: "3,5rem",
                },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                paddingTop: "20px",
              }}
            >
              Front-End Web Development
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "#fff",
                py: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            >
              I specialize in crafting responsive and visually appealing
              websites using HTML, CSS, Bootstrap, and JavaScript. From clean
              layouts to interactive features, I ensure your website delivers a
              smooth and engaging user experience across all devices.
            </Typography>
            <Link
              to="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
              style={{ textDecoration: "none" }}
            >
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
                Hire me
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "30px !important", md: "20px !important" },
            }}
          >
            <img
              src={Services1}
              alt="Square Project"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          sx={{
            width: "100%",
            margin: "0px 0px",
            alignItems: "center",
            py: { xs: 5, md: 10 },
          }}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "30px !important", md: "20px !important" },
            }}
          >
            <img
              src={Services2}
              alt="Square Project"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
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
                  xs: "1rem",
                  sm: "2.0rem",
                  md: "3.0rem",
                  lg: "3,5rem",
                },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                paddingTop: "20px",
              }}
            >
              Modern JavaScript Frameworks
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "#fff",
                py: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            >
              With a strong command of React.js, Next.js, MUI, and
              React-Bootstrap, I build fast, scalable, and SEO-friendly web
              applications. Whether it's a dynamic single-page app or a complex
              interface, I focus on clean code and performance optimization.
            </Typography>
            <Link
              to="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
              style={{ textDecoration: "none" }}
            >
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
                Hire me
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ width: "100%", margin: "0px 0px", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            md={6}
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
                  xs: "1rem",
                  sm: "2.0rem",
                  md: "3.0rem",
                  lg: "3,5rem",
                },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                paddingTop: "20px",
              }}
            >
              Creative Design & CMS Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "#fff",
                py: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            >
              Blending creativity with technology, I bring ideas to life using
              Framer, WordPress, Webflow, and Figma. From interactive prototypes
              to fully functional websites, I design and develop user-friendly
              digital experiences that align with your brand.
            </Typography>
            <Link
              to="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
              style={{ textDecoration: "none" }}
            >
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
                Hire me
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              paddingLeft: { xs: "0px !important", md: "20px !important" },
              paddingRight: { xs: "0px !important", md: "20px !important" },
              paddingTop: { xs: "30px !important", md: "20px !important" },
            }}
          >
            <img
              src={Services3}
              alt="Square Project"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesList;
