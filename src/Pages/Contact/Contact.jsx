import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";

import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
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
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "3.3rem",
                  lg: "4rem",
                },
                maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                py: "10px",
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
                Get in touch
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 0,
                color: "#fff",
                py: { xs: "5px", md: "20px" },
                fontSize: { xs: "12px", sm: "16px", md: "18px" },
                lineHeight: { xs: "16px", sm: "24px", md: "30px" },
                maxWidth: { xs: "400px", sm: "400px", md: "400px" },
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
                fontWeight: "100",
                paddingBottom: "50px !important",
              }}
            >
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
            </Typography>
            <Link
              to="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <EmailIcon />
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  py: 0,
                  px: 2,
                  color: "#fff",
                  fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                }}
              >
                i.farasatrehmat@gmail.com
              </Typography>
            </Link>
            <br />
            <Link
              to="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <LocalPhoneIcon />
              <Typography
                variant="body1"
                sx={{
                  mt: 0,
                  color: "#fff",
                  py: 0,
                  px: 2,
                  fontSize: { xs: "12px", sm: "16px", md: "1rem" },
                  maxWidth: { xs: "400px", sm: "560px", md: "560px" },
                  marginLeft: { xs: "auto", md: "0px" },
                  marginRight: { xs: "auto", md: "0px" },
                }}
              >
                +923498892570
              </Typography>
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
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ color: "#fff" }}
            >
              <Typography sx={{ fontSize: "28px", fontWeight: 500, mb: 1 }}>
                Your Name
              </Typography>
              <TextField
                placeholder="Enter your name"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
              />

              <Typography sx={{ fontSize: "28px", fontWeight: 500, mb: 1 }}>
                Your E-mail
              </Typography>
              <TextField
                placeholder="Enter your e-mail"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#888" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography sx={{ fontSize: "28px", fontWeight: 500, mb: 1 }}>
                Your Budget
              </Typography>
              <TextField
                placeholder="1k–3k"
                fullWidth
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  input: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon sx={{ color: "#888" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography sx={{ fontSize: "28px", fontWeight: 500, mb: 1 }}>
                Tell me a bit more what you are looking for?
              </Typography>
              <TextField
                placeholder=""
                multiline
                minRows={5}
                fullWidth
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#1C1C22",
                  textarea: { color: "#fff" },
                  "& fieldset": { border: "none" },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  background:
                    "linear-gradient(90deg, #F857A6 0%, #FF5858 100%)",
                  borderRadius: "50px",
                  padding: "12px 0",
                  fontWeight: "bold",
                  fontSize: "16px",
                  mt: 1,
                  textTransform: "none",
                }}
              >
                Submit Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
