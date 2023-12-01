import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className='profile-menu-flex'
      >
         <MenuRoundedIcon />
            <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "1rem",
            minWidth: "200px",
            boxShadow: "none"}}}

      >
        <MenuItem className="menu-items" onClick={handleClose}>Signup</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Login</MenuItem>
        <div style={{height: "1px", backgroundColor: "var(--grey)", width: "100%"}}/>
        <MenuItem className="menu-items" onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}