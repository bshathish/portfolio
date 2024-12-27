import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import * as motion from "motion/react-client";
import Skylights from '../Assests/Img/Skylights.png';
import Switchonomy from '../Assests/Img/Switchonomy.png';
import Switchology from '../Assests/Img/Switchology.png';
import Elbrit from '../Assests/Img/Elbrit.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IconExternalLink } from '@tabler/icons-react';

const Projects = () => {
    const theme = useTheme();
    const bgColor = theme.palette.navbar.main
    const projectList = [
        {
            name: 'Skylights',
            discription: 'Landing page for Skylights Energy which exhibits the products and mission, vision of the company',
            tech: ['VITE.JS', 'POSTGRESQL', 'GRAPHQL', 'NODE.JS', 'HASURA'],
            image: Skylights,
            link:'https://skylightsenergy.in/'
        },
        {
            name: 'Switchonomy',
            discription: 'Switchonomy owned by Skylights is a fullstack website used to generate accurate quotation and BOM for LT (low tension) and HT (high tension) electrical panels with up-to-date Pricelist of switchgears, MCBs, and such electrical components',
            tech: ['VITE.JS', 'POSTGRESQL', 'GRAPHQL', 'NODE.JS', 'HASURA'],
            image: Switchonomy,
            link:'https://switchonomy.com/'
        },
        {
            name: 'Switchology',
            discription: 'Switchology owned by Skylights is accustomed to monitor control panel and generate BESCOM bill.',
            tech: ['REACT.JS', 'POSTGRSQL', 'GRAPHQL', 'NODE.JS', 'HASURA'],
            image: Switchology,
            link:'https://switchology.in/'
        },
        {
            name: 'Elbrit',
            discription: 'A Responsive Landing for Elbrit Pharmacy serves as an engaging introduction to the company, highlighting its mission, vision, and core values. Designed with a user-friendly layout, it showcases the company’s expertise in pharmaceutical solutions and commitment to quality healthcare',
            tech: ['NEXT.JS', 'FRAMER MOTION', 'PRIME REACT'],
            image: Elbrit,
            link:'https://elbritpvt.netlify.app/'
        },
    ];

    return (
        <Box sx={{display:'flex', flexDirection:'column', gap:1, mt:6}}>
            <Typography sx={{fontSize:'75px', fontWeight:600}}>Projects </Typography>
            <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
            {projectList.map((project, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                    });
                return(
                <Box ref={ref} key={index} sx={{background:bgColor, p:3, borderRadius:'20px'}}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Box sx={{display:'flex', gap:2}}>
                                <Box sx={{width:'70%'}}>
                                    <Image src={project.image} width={800} alt='Project Image' style={{borderRadius:'10px'}}/>
                                </Box>
                                <Box sx={{width:'100%', display:'flex', flexDirection:'column', gap:3}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                                        <Typography variant='h2' sx={{fontWeight:600}}>{project.name}</Typography>
                                        <IconButton href={project.link} target='_blank'>
                                            <IconExternalLink/>
                                        </IconButton>
                                    </Box>
                                    <Typography sx={{ fontWeight: 200,color:'grey', fontSize:'20px' }}>{project.discription}</Typography>
                                    <Box sx={{display:'flex', gap:2}}>
                                    {
                                        project.tech.map((tech, index)=>(
                                                <Typography key={index} sx={{fontSize:'18px', background:bgColor, p:1, borderRadius:'5px', px:2}}>
                                                    {tech}
                                                </Typography>
                                        ))
                                    }
                                    </Box>
                                </Box>
                            </Box>
                    </motion.div>
                </Box>
            )})}
            </Box>
        </Box>
    );
};

export default Projects;
