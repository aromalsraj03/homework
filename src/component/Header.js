import React from 'react';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            </IconButton>
            
          
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Blog page
          </Typography>
          <Button color="primary" variant='contained'><Link to="/">Home</Link></Button>
          <Button color="primary" variant='contained'><Link to="/create">add blog</Link> </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
