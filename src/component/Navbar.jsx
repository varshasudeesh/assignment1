import { Box, Button, Toolbar, Typography, AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCT APP
          </Typography>
          <Link to={'/'}><Button variant='contained' style={{color:'white'}}>Dashboard</Button></Link>
          <Link to={'/add'}><Button variant='contained' style={{color:'white'}}>Add Product</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
