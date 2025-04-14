import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeContext } from "../../ThemeContext";
import CustomButton from "../atoms/Button";
import Logo from "../../components/atoms/Logo"


const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }
  
  const { darkMode, toggleDarkMode } = themeContext;
  const [ismobile, setIsMobile] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobile(!ismobile);
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null; 

  useEffect(() => {
    if (pathname === "/" && user) {
      navigate("/patients");
    }
  }, [navigate, pathname, user]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate("/");
  }

  const drawer = (
    <Box width={280} onClick={handleDrawerToggle}>
      <List>
        <ListItem component={Link} onClick={() => navigate("/patients")}>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem component={Link} onClick={() => navigate("/appointments")}>
          <ListItemText primary="Appointments" />
        </ListItem>
        
        <ListItem component={Link} href="/" onClick={handleSignOut}>
          
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className="top-bar" position="static" >
      <Toolbar>
        {user && (
          <IconButton
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Logo />

        {user && (
          <Box className="nav-item">
            <ListItem className="nav-links" component={Link} onClick={() => navigate("/patients")}>
              <ListItemText primary="Patients" />
            </ListItem>
            <ListItem className="nav-links" component={Link} onClick={() => navigate("/appointments")}>
              <ListItemText primary="Appointments" />
            </ListItem>
          </Box>
        )}

        <Typography flexGrow={1} />

        {user && (
          <>
          <IconButton className="no-focus" onClick={toggleDarkMode} color="inherit" disableRipple >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Box display="flex" alignItems="center">
            <PersonIcon className="user-icon" />
            <Typography variant="body2" className="dr-name">
              {user.name}
            </Typography>
            
            <CustomButton
              label="Sign Out"
              onClick={handleSignOut}
              variant="text"
              color="error"
              className="no-hover sign-out-btn"
            />

          </Box>
          </>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={ismobile}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;