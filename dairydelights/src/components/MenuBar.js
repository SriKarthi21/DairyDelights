import { Button, Grid2 } from '@mui/material'
import React from 'react'

const MenuBar = ({onFilterValue,onFilter}) => {
   const menuItems=["MILK","BUTTER","GHEE","PANEER","YOGURT","BUTTERMILK","CHEESE","CURD"]
  return (
<Grid2 bgcolor={'yellow'}>
    <Grid2 display='flex' justifyContent={'space-evenly'}>
      <Button onClick={onFilter} value="">ALL</Button>
        {menuItems.map((items,index)=>(
            <Button key={index} onClick={onFilter} value={onFilterValue=items}>{items}</Button>
        ))}

    </Grid2>
</Grid2>
  )
}

export default MenuBar