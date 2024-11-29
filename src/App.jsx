import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import './App.css'; // Import the CSS file for styles
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#003366', padding: '0.5rem 1rem' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Hamburger Menu */}
          <div
            className={`hamburger ${drawerOpen ? 'open' : ''}`}
            onClick={handleDrawerToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              color: '#FFCC00', // Golden for elegance
              fontWeight: 'bold',
              display: { xs: 'block', sm: 'block' },
            }}
          >
                      </Typography>

        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 240, backgroundColor: '#003366', color: 'white' },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
            <ListItemText primary="About" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/career" onClick={handleDrawerToggle}>
            <ListItemText primary="Career" sx={{ color: 'white' }} />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Container style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
