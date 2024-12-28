import React from "react";
import skylightsLogo from "../Assests/Img/skylightsLogo.png";
import { Box, Typography, Avatar, IconButton, useTheme } from "@mui/material";
import * as motion from "motion/react-client";
import Image from "next/image";
import { IconChevronCompactRight, IconCircle, IconCircleFilled, IconInnerShadowTopRight, IconInnerShadowTopRightFilled } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
    const theme= useTheme();
    const experiences = [
        {
          title: "Frontend Developer",
          company: "Skylights Energy",
          duration: "Aug 2023 - Present",
          icon: skylightsLogo,
          roleDescription: [
            "Developing user interfaces with React and integrating APIs.",
            "Collaborating with backend developers to integrate RESTful APIs.",
            "Optimizing application for maximum speed and scalability.",
            "Ensuring mobile responsiveness and cross-browser compatibility.",
            "Writing clean, maintainable, and efficient code following best practices.",
            "Participating in code reviews and providing mentorship to junior developers.",
          ],
        },
      ];
      

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        my: 10,
      }}
    >
      <Typography sx={{fontSize:{lg:'75px', md:'40px', sm:'40px', xs:'40px'}, fontWeight:600}}>
        Work Experience
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          position: "relative",
          width: "100%",
        }}
      >
        {experiences.map((experience, index) =>{
            const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 1,
            });
            return(
                <Box key={index} ref={ref}>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, translateY: 50 }}
                        animate={inView && { opacity: 1, translateY: 0 }}
                        transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        }}
                        style={{
                        display: "flex",
                        //   alignItems: "center",
                        marginBottom: "30px",
                        width: "100%",
                        }}
                    >
                        <IconButton sx={{position:'relative'}}>
                            <IconCircleFilled color='#FE009D' style={{position:'absolute', left:8, top:3, border:`2px solid ${theme.palette.timeline.main}`, borderRadius:'100px', padding:1}}/>
                        </IconButton>
                        <Box sx={{ml:3}}>
                            <Box sx={{display:'flex', gap:3, alignItems:'center',height:'100%', ml:2}}>
                                <Box sx={{display:'flex', height:'100%', alignItems:'start', mt:4}}>
                                    <Image src={experience.icon} width={100} style={{borderRadius:'5px', height:'35px'}} alt="skylightslogo"/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Typography
                                    sx={{
                                    fontSize: {lg:'30px', md:'25px', sm:'25px', xs:'25px'},
                                    fontWeight: "bold",
                                    }}
                                >
                                    {experience.title}
                                    
                                </Typography>
                                <Typography
                                    sx={{
                                    fontSize:{lg:'30px', md:'25px', sm:'25px', xs:'25px'},
                                    }}
                                >
                                    {experience.company}
                                </Typography>
                                <Typography sx={{ fontSize: "18px", color: "#888" }}>
                                    {experience.duration}
                                </Typography>
                                {
                                    experience.roleDescription.map((description, index)=>(
                                        <Typography key={index} sx={{ fontSize: "16px", display:'flex', gap:1}}>
                                            <IconChevronCompactRight style={{ color: '#FE009D' }} />{description}
                                        </Typography>
                                    ))
                                }
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )})}
        <Box
          sx={{
            position: "absolute",
            left: 18,
            top: 0,
            bottom: 0,
            width: "4px",
            background: `linear-gradient(to bottom, ${theme.palette.timeline.main}, transparent)`,
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Experience;
