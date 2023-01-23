import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: "transparent"}} className="App-Bar-Nav">
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenu}
          
        >
          <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          className="nav-menu-dropdown"
        >
          <MenuItem 
            onClick={handleClose}
            className="nav-menu-item">
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>Home</a>
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            className="nav-menu-item">
              <a href='/about' style={{ textDecoration: 'none', color: 'black' }}>About</a>
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            className="nav-menu-item">
            <a href="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
