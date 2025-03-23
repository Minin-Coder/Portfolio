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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#121212" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
          >
            Farasat Ali
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "white",
                  "&:hover": { color: "#007BFF" },
                  "&.active": { color: "#007BFF", fontWeight: "bold" },
                }}
              >
                {item.text}
              </Button>
            ))}
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
      </AppBar>

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
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
