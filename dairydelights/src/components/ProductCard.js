import { Grid2,Card, CardActionArea, CardContent ,Typography,CardMedia} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const ProductCard = ({productCard}) => {
  const{id,image,productName,price}=productCard;
  return (

    <Grid2 margin={3}  item
      size={{ xs: 12,  sm: 6,  md: 4,  lg: 3 }}>
        <Link to={`/details/${id}`}>
      <Card
       sx={{ 
          maxWidth: 400, maxHeight: 300, bgcolor: "lightgreen",
          borderRadius: 3, boxShadow: "5px 5px 10px rgb(210, 71, 28)"
        }}>                 
        <CardActionArea >
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt="card images"
          />
          <CardContent >   

            <Typography  gutterBottom variant="h5" component="div">
              {productName}
            </Typography> 
            
            <Typography variant="subtitle2" sx={{ color: 'blue' }}>
              {price} (&#8377;)</Typography>

</CardContent>
                </CardActionArea>

  </Card>
  </Link>
    </Grid2>
  );
}

export default ProductCard