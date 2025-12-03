/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

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
  const [isMobile, setIsMobile] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", to: "/", icon: <HomeIcon sx={{ color: "#fff" }} /> },
    { text: "About", to: "/#about", icon: <InfoIcon sx={{ color: "#fff" }} /> },
    { text: "Reviews", to: "/#reviews", icon: <CommentRoundedIcon sx={{ color: "#fff" }} /> },
    { text: "Contact", to: "/#contact", icon: <PhoneRoundedIcon sx={{ color: "#fff" }} /> },
    { text: "Cart", to: "/cart", icon: <ShoppingCartRoundedIcon sx={{ color: "#fff" }} /> },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", onResize, { passive: true });
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navStyle = {
    width: "100%",
    padding: scrolled ? "12px 20px" : "18px 32px",
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
    fontFamily: "Montserrat, sans-serif",
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
  };

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <img src={Logo} alt="Bittu's Tiffin Logo" style={{ height: 42, filter: "invert(1)" }} />
        </Link>
      </div>

      {!isMobile && (
        <div className="navbar-links-container" style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "1rem", fontWeight: 500 }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#reviews" style={linkStyle}>Reviews</a>
          <a href="#pricing" style={linkStyle}>Pricing</a>

          {user ? (
            <>
              <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
              <button style={buttonStyle} onClick={() => { logout(); navigate("/"); }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={linkStyle}>Login</Link>
              <Link to="/book-trial"><button style={buttonStyle}>Book Trial</button></Link>
            </>
          )}
        </div>
      )}

      {isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {user ? (
            <button
              onClick={() => navigate("/dashboard")}
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", padding: "8px 12px", borderRadius: 8 }}
            >
              Dashboard
            </button>
          ) : (
            <Link to="/login" style={{ color: "#fff", textDecoration: "none", marginRight: 6 }}>Login</Link>
          )}

          <div style={{ fontSize: 28, cursor: "pointer", color: "#fff" }} onClick={() => setOpenMenu(true)} aria-label="Open menu">
            <HiOutlineBars3 />
          </div>
        </div>
      )}

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        PaperProps={{
          sx: { background: "rgba(0,0,0,0.95)", color: "#fff", backdropFilter: "blur(6px)" },
        }}
      >
        <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpenMenu(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/book-trial">
                <ListItemText primary="Book Trial" sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

            {user ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => { logout(); navigate("/"); }}>
                  <ListItemText primary="Logout" sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login">
                  <ListItemText primary="Login" sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItem>
            )}

          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
