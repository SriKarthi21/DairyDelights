import React from 'react'
import { Container, Grid2, IconButton, TextField, Typography } from '@mui/material'
import ImageList from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';
import AuthContext from '../utils.js/AuthContext';
import { useContext } from 'react';
const Header = ({ onSearch, onSearchText, onClearText }) => {
 const{isLoggedIn}=useContext(AuthContext);
  return (
    <Grid2 >
      <Grid2 display='flex' alignItems={'center'}
        justifyContent={'space-evenly'}>
         
        
<img src="/logo.png" className="headerLogo" alt="header logo" />
        <Grid2>
          <TextField variant="outlined" label='Search Products'
            onChange={onSearch} value={onSearchText}
            slotProps={{
              input: {
                sx: { mb: 2 },
                startAdornment: (
                  <SearchIcon />
                ),
                endAdornment: onSearchText !== "" && (
                  <IconButton
                    onClick={onClearText}
                  >
                    <CloseIcon />
                  </IconButton>
                ),
              }
            }}
          />
        </Grid2>
        <Grid2  >
          <Link to="/">
            <IconButton> <HomeIcon fontSize='large' /> </IconButton>
          </Link>
        {isLoggedIn ?( 
           <Link>
           <IconButton> <LogoutIcon fontSize='large' /> </IconButton>
         </Link>
        ):(   
          <Link to="/login">
            <IconButton> <LoginIcon fontSize='large' />  </IconButton>
          </Link>
        )}  
         
        </Grid2>
      </Grid2>
    </Grid2>
    
  );
}

export default Header;