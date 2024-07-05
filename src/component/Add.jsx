import { Box, Button, Container, CssBaseline, TextField } from '@mui/material'
import React from 'react'


export const Add = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <br></br>
      <div>
        <div>
        <TextField
          
          id="outlined-required"
          label="Product name"
          variant="standard"
          
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Description"
          variant="standard"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Price"
          variant="standard"

          
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Category"
          variant="standard"

          
          
        />
        </div>
        <br></br>
        <Button variant='contained'>Add</Button>
        <br></br>
        </div>
        </Box>
        </Box>
      </Container>
    </React.Fragment>
    
  )
}
