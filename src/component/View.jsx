import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '5px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


export const View = () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setRows(res.data)
        })
    },[])

  return (
    <>
    <Box sx={{ flexGrow: 1, padding: 2 }}>
    <Grid container spacing={2}>
    {rows.map((item)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
    <Card key={item.id} style={{marginTop:'7%'}} sx={{ minWidth: 300, height:470 }}>
    
        <CardMedia
            component="img"
            sx={{ height: 150, width: 'auto', margin: 'auto' }}
            image={item.image}
            alt="image"/>
    <CardContent>
      <Typography sx={{ fontSize: 14, fontWeight:'bold' }} color="text.secondary" gutterBottom>
        Price: {item.price}
      </Typography>
      <Typography variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Category: {item.category}
      </Typography>
      
    </CardContent>
  
    
  </Card>
  </Grid>
  ))}
   </Grid>
   </Box>
  </>
  )
}
