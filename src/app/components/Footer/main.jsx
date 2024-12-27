import { Box, IconButton, Typography } from '@mui/material'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconCopyright } from '@tabler/icons-react'
import React from 'react'
import linkedin from '../Assests/Img/linkedin.svg';
import gmail from '../Assests/Img/gmail.svg';
import instagram from '../Assests/Img/instagram.svg';
import Image from 'next/image';

const Footer = () => {
    const TodayYear = new Date().getFullYear();
    const imageList = [
        {icon:<IconBrandLinkedin color='#fafafa'/>, link:'https://www.instagram.com/i_shathish_b/'},
        {icon:<IconBrandGithub color='#fafafa'/>, link:'https://github.com/bshathish'},
        {icon:<IconBrandInstagram color='#fafafa'/>, link:'https://www.instagram.com/i_shathish_b/'},
    ]
  return (
    <Box sx={{background:'#FE009D', display:"flex", justifyContent:'space-between', width:'100%', alignItems:'center', px:7, py:1}}>
        <Box>
            <Box sx={{display:'flex', gap:0.5, alignItems:'center'}}>
                <IconCopyright size="15px" color="#fafafa"/>
                <Typography sx={{pt:0.5, color:'#fafafa'}}>{TodayYear} Shathish B. All Rights Reserved.</Typography>
            </Box>
        </Box>
        <Box sx={{display:'flex', gap:5}}>
            {
                imageList.map((list, index)=>(
                    <IconButton key= {index} href={list.link} target='_blank' >
                        {list.icon}
                    </IconButton>
                ))
            }
        </Box>
    </Box>
  )
}

export default Footer