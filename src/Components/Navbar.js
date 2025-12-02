/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { text: "Home", icon: <HomeIcon sx={{ color: "#fff" }} /> },
    { text: "About", icon: <InfoIcon sx={{ color: "#fff" }} /> },
    { text: "Reviews", icon: <CommentRoundedIcon sx={{ color: "#fff" }} /> },
    { text: "Contact", icon: <PhoneRoundedIcon sx={{ color: "#fff" }} /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon sx={{ color: "#fff" }} /> },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    width: "100%",
    padding: scrolled ? "12px 30px" : "18px 32px",
    background: scrolled ? "rgba(0,0,0,0.55)" : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: "0.25s ease",
    boxShadow: scrolled ? "0 4px 18px rgba(0,0,0,0.3)" : "none",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "opacity 200ms ease",
    opacity: scrolled ? 0.95 : 1,
  };

  const buttonStyle = {
    padding: "10px 22px",
    background: "#ff6c3d",
    border: "none",
    borderRadius: "30px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "transform 150ms ease",
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="Bittu's Tiffin Logo"
          style={{
            height: 42,
            filter: "invert(1)",
          }}
        />
      </div>

      <div
        className="navbar-links-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          fontSize: "1rem",
          fontWeight: 500,
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#reviews" style={linkStyle}>Reviews</a>
        <a href="#pricing" style={linkStyle}>Pricing</a>

        <button style={buttonStyle}>Book Trial</button>
      </div>

      <div
        className="navbar-menu-container"
        style={{
          display: "none",
          fontSize: 32,
          cursor: "pointer",
          color: "#fff",
        }}
      >
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        PaperProps={{
          sx: { background: "rgba(0,0,0,0.9)", color: "#fff", backdropFilter: "blur(6px)" },
        }}
      >
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpenMenu(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
