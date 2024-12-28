import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import * as motion from "motion/react-client";
import { IconBrandLinkedin, IconDownload } from '@tabler/icons-react';

const Hero = ({aboutRef}) => {
  return (
    <Box sx={{height:{lg:'78vh', md:'100%', sm:'100%', xs:'100%'}, mt:10, display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', gap:2, mb:{lg:0, md:20, sm:10, xs:10}}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection:'column', gap:2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1,  overflowY:'hidden', gap:5}}>
                <motion.div
                initial={{ y: "200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                <Typography variant='h3' sx={{ fontWeight: 600, fontSize:{lg:'60px', md:"30px", sm:"30px", xs:"30px"} }}>
                    Hello there!
                </Typography>
                </motion.div>

                {/* Animate the rest of the text after "Hello there!" */}
                <motion.div
                    initial={{ y: "200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                    }}
                    style={{display:'flex', flexDirection:"column", gap:10}}
                >
                <Box>
                    <Typography variant='h1' sx={{ fontSize: {lg:'95px', md:"35px", sm:"35px", xs:"35px"} }}>
                    I'm <span style={{ color: '#FE009D' }}>S</span>hathi<span style={{ color: '#FE009D' }}>s</span>h
                    </Typography>
                    <Typography variant='h2' sx={{fontSize: {lg:'75px', md:"32px", sm:"32px", xs:"32px"}}}>a Frontend Developer</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 200, fontSize: {lg:'35px', md:"22px", sm:"22px", xs:"22px"},color:'gray' }}>
                        currently thriving to excel as a top-grade web developer
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 200, fontSize: {lg:'35px', md:"22px", sm:"22px", xs:"22px"},color:'gray' }}>
                        continually honing my skills and embracing new challenges.
                    </Typography>
                </Box>
                </motion.div>
            </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'start', gap:2, mt:3, width:'100%'}}>
            <Button sx={{background:'blue', borderRadius:'20px', color:'white', px:2}} startIcon={<IconBrandLinkedin color='white'/>} href='https://www.linkedin.com/in/shathish-b-a6102920b/' target='_blank'>
                <Typography sx={{fontWeight:600, pt:0.5, color:'white'}}> Linkedin </Typography>
            </Button>
            <a href='/docs/Resume.pdf' style={{textDecoration:'none'}} target='_blank'>
                <Button ref={aboutRef} variant='contained' sx={{ borderRadius:'20px', px:2}} startIcon={<IconDownload/>}>
                    <Typography sx={{fontWeight:600, pt:0.5, color:'white'}}> Resume </Typography>
                </Button>
            </a>
        </Box>
        </Box>
    </Box>
  );
};

export default Hero;
