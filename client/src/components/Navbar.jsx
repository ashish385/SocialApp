import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import {  NavLink } from 'react-router-dom';




const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  background: 'white',
  color: "black",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));


const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));

const Navbar = () => {

  const  [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky' >
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}} >Flow</Typography>
        <Pets sx={{display:{xs:'block', sm:'none'}}} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
           <Mail cursor="pointer" />
          </Badge>
          <Badge badgeContent={2} color="error">
           <Notifications cursor="pointer"  />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor:"pointer"  }}
            onClick={e => setOpen(true)}  
            
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={e=>setOpen(true)}  
          />
          <Typography variant='span' >John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem ><NavLink to='/Home' >Profile</NavLink></MenuItem>
        <MenuItem  ><NavLink to='/login'>Login</NavLink></MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    
    </AppBar>
  )
}

export default Navbar