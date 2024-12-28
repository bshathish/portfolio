import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../../public/favicon-32x32.png';
import Image from 'next/image';
import ThemToggle from '../ThemeToggleButton/main';

const NavBar = ({homeRef, aboutRef,projectRef, contactRef}) => {
  const navNames = ["Home", "About", "Project", "Contact"];
  const [hoverStyles, setHoverStyles] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // Scale the offset
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setHoverStyles((prev) => ({ ...prev, [index]: { transform: `translate(${x}px, ${y}px)` } }));
  };

  const handleMouseLeave = (index) => {
    setHoverStyles((prev) => ({ ...prev, [index]: { transform: 'translate(0, 0)' } }));
  };

  const handlePageClick = (e) => {
    const clickedElement = e.target;
    if (clickedElement.dataset.scrollTo === "Home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (clickedElement.dataset.scrollTo === "About") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (clickedElement.dataset.scrollTo === "Project") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (clickedElement.dataset.scrollTo === "Contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        px: {lg:3, md:1, sm:1, xs:1},
        py: 1,
      }}
    >
      <Box sx={{width:'100%'}}><Image src={logo} alt='logo' width={50}/></Box>
      <Box sx={{display:'flex', gap:2, width:'100%', justifyContent:'space-evenly'}}>
        {
          navNames.map((name, index)=>(
            <Typography
              data-scroll-to={name}
              key={index} 
              sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: '5px',
              '&:hover': {
                color: '#FE009D',
              },
              ...hoverStyles[index],
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={handlePageClick}
            >{name}</Typography>
          ))
        }
      </Box>
      <Box sx={{width:"100%", display:'flex', justifyContent:'end'}}><ThemToggle/></Box>
    </Box>
  )
}

export default NavBar;