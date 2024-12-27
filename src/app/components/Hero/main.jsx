import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import * as motion from "motion/react-client";
import { IconBrandLinkedin, IconDownload } from '@tabler/icons-react';

const Hero = ({aboutRef}) => {
  return (
    <Box sx={{height:'78vh', mt:10, display:'flex', justifyContent:'start', alignItems:'start',flexDirection:'column', gap:2}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1,  overflowY:'hidden'}}>
                <motion.div
                initial={{ y: "200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                <Typography variant='h3' sx={{ fontWeight: 600, fontSize:'60px' }}>
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
                >
                <Box>
                    <Typography variant='h1' sx={{ fontSize: '95px' }}>
                    I'm <span style={{ color: '#FE009D' }}>S</span>hathi<span style={{ color: '#FE009D' }}>s</span>h
                    </Typography>
                    <Typography variant='h2' sx={{fontSize: '75px'}}>a Frontend Developer</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 200, fontSize: '35px',color:'gray' }}>
                    currently thriving to excel as a top-grade web developer,
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 200, fontSize: '35px',color:'gray' }}>
                    continually honing my skills and embracing new challenges.
                    </Typography>
                </Box>
                </motion.div>
            </Box>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', gap:2, mt:3}}>
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
  );
};

export default Hero;
