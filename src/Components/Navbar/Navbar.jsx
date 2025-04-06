import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/Services" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "#121212", boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
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
          </NavLink>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "white",
                  mx: 2,
                  "&:hover": { color: "#007BFF" },
                  "&.active": { color: "#007BFF", fontWeight: "bold" },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#0056b3",
                  borderRadius: "50px",
                  padding: "7px 30px",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0056b3, #008CBA)",
                    color: "white",
                  },
                }}
              >
                <b>Let’s talk</b>
              </Button>
            </Link>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List
          sx={{
            width: 200,
            bgcolor: "#121212",
            height: "100vh",
            color: "white",
          }}
        >
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  "&:hover": { color: "#007BFF" },
                  "&.active": { color: "#007BFF", fontWeight: "bold" },
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                color: "white",
                "&:hover": { bgcolor: "#0056b3" },
              }}
            >
              Get in Touch
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
