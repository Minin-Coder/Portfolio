import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkIcon from "@mui/icons-material/Work"; // Placeholder for Upwork

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
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
          </Grid>

          {/* Right Side - Navigation Menus */}
          <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 3 }}>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </Link>
              <Link
                to="/portfolio"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
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
            justifyContent: "end",
            gap: 2,
          }}
        >
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://github.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://wa.me/your-number"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            href="https://www.upwork.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <WorkIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
