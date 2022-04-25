import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from "@mui/icons-material";
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box 
      flex={1} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box
        position='fixed'
      >

      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='/Home' >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#pages' >
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#groups' >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#marketplace' >
              <ListItemIcon>
              <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends' >
              <ListItemIcon>
              <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#settings' >
              <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile' >
              <ListItemIcon>
              <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#darktheme' >
              <ListItemIcon>
              <ModeNight />
              </ListItemIcon>
              <Switch onClick={e=>setMode(mode === "light" ? "dark" : "light") }/>
            </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar