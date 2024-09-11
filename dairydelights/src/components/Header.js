import React from 'react'
import  { Container,Grid2} from '@mui/material'
import ImageList from '@mui/material'
const Header = () => {
  return (
    <Grid2 container display='flex' bgcolor={'greenyellow'} >
        <Grid2>
        <img src="/dairies/dairy.jpg" alt="logo image" width={'100px'}  height={'100px'}/>
        </Grid2>
        <Grid2>
            Dairy Delights
        </Grid2>
        <Grid2></Grid2>
    </Grid2>
  )
}

export default Header;