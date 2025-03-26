import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import CountUp from "react-countup";

const About = () => {
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
                  xs: "14px",
                  sm: "1.2rem",
                  md: "1.5rem",
                  lg: "1.8rem",
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
                Farasat Ali
              </Box>
            </Typography>
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
              Front-End Web Developer
            </Typography>
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
              variant="body1"
              sx={{
                mt: 1,
                color: "#fff",
                marginTop: "0px",
                paddingTop: "0px",
                fontSize: { xs: "18px", sm: "22px", md: "1.8rem" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                fontWeight: "500",
                lineHeight: { xs: "22px", sm: "26px", md: "2rem" },
              }}
            >
              I am a front-end developer with 4+ years of experience in building
              modern and responsive web applications.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "#F0F2F5",
                paddingTop: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "14px", md: "15px" },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            >
              Passionate about clean code and UI/UX best practices, I focus on
              delivering high-quality, optimized, and visually appealing digital
              experiences.
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={4}
              color="white"
            >
              <Box textAlign="left">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                    },

                    maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                    marginLeft: { xs: "auto", md: "0px" },
                    marginRight: { xs: "auto", md: "0px" },
                    paddingBottom: "15px",
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
                    Project Done
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="left"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "1rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                  }}
                >
                  <CountUp start={0} end={20} duration={2} />+
                </Typography>
              </Box>

              <Box textAlign="left">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                    },

                    maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                    marginLeft: { xs: "auto", md: "0px" },
                    marginRight: { xs: "auto", md: "0px" },
                    paddingBottom: "15px",
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
                    Experience
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="left "
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "1rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                  }}
                >
                  <CountUp start={0} end={4} duration={2} />+ Years
                </Typography>
              </Box>

              <Box textAlign="left">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                    },

                    maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                    marginLeft: { xs: "auto", md: "0px" },
                    marginRight: { xs: "auto", md: "0px" },
                    paddingBottom: "15px",
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
                    Clients Satisfaction
                  </Box>
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="left "
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "1rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                  }}
                >
                  <CountUp start={0} end={100} duration={2} />%
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
