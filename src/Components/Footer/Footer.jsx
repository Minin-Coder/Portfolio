import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Upwork from "../../assets/upwork.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #007BFF, #00B4DB, #00B4DB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Farasat Ali
                </Box>
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: { xs: "center", md: "flex-end" },
                gap: 3,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#007BFF" : "#fff",
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none",
                  transition: "color 0.3s",
                })}
                onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    window.location.pathname === "/" ? "#007BFF" : "#fff")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Services"
                style={({ isActive }) => ({
                  color: isActive ? "#007BFF" : "#fff",
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none",
                  transition: "color 0.3s",
                })}
                onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    window.location.pathname === "/Services"
                      ? "#007BFF"
                      : "#fff")
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#007BFF" : "#fff",
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none",
                  transition: "color 0.3s",
                })}
                onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    window.location.pathname === "/contact"
                      ? "#007BFF"
                      : "#fff")
                }
              >
                Contact
              </NavLink>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#ffffff33",
            my: 3,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/farasat-ali-4964012b3/"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://github.com/Minin-Coder"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://wa.me/923498892570"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            href="https://www.upwork.com/freelancers/~016d6aa0a0f59a29c3"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <img
              src={Upwork}
              alt="WhatsApp"
              style={{ width: 23, height: 23 }}
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
