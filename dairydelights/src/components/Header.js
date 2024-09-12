import React from 'react'
import { Container, Grid2, IconButton, TextField, Typography } from '@mui/material'
import ImageList from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';
const Header = ({ onSearch, onSearchText, onClearText }) => {
  return (
    <Grid2 bgcolor={'white'}>
      <Grid2 display='flex' alignItems={'center'}
        justifyContent={'space-evenly'}>
        <Grid2 >
          <img src="/dairies/dairy.jpg" alt="logo pic" width={'200px'} height={'50px'} />

        </Grid2>
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
          <Link to="/login">
            <IconButton> <LoginIcon fontSize='large' />  </IconButton>
          </Link>
          <Link>
            <IconButton> <LogoutIcon fontSize='large' /> </IconButton>
          </Link>
        </Grid2>
      </Grid2>
    </Grid2>
    
  );
}

export default Header;