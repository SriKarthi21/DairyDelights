import React from 'react'
import { Card, Container, Grid2 } from '@mui/material';
import ProductCard from './ProductCard';
const ProductView = ({data}) => {
  
  return (
    <Grid2 display='flex' bgcolor={'white'}>
      
      <Grid2 display='grid'
      // item xs={12} sm={6} md={4} lg={3}
       sx={{ padding: 2 ,mt:3,
 gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", width:"100%"

      }} >
      {/* <p>{value[1]?.productName}</p> */}
{
  data.map((item,index)=>(

   <ProductCard key={index}    productCard={item}     />


   ))
}</Grid2>

    </Grid2>
  )
}

export default ProductView;