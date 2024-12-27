import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from '../../../../public/favicon-32x32.png';
import Image from 'next/image';
import ThemToggle from '../ThemeToggleButton/main';

const NavBar = () => {
  return (
    <Box
      sx={{
        backdropFilter: 'blur(8px)', // Blurs the background behind the NavBar
        background: 'rgba(0, 0, 0, 0.1)', // Transparent white background
        borderRadius: '10px', // Rounded corners
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 30,
        zIndex: 10,
        px: 3,
        py: 1,
      }}
    >
      <Box><Image src={logo} alt='logo' width={50}/></Box>
      <Box><ThemToggle/></Box>
    </Box>
  )
}

export default NavBar;