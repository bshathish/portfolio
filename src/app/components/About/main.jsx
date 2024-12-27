import { List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { IconChevronCompactRight } from '@tabler/icons-react'
import * as motion from "motion/react-client"
import { useInView } from 'react-intersection-observer'
import ScrollTriggered from '../Hero/animation/profileImage'


const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = ["React js", "Next js", "Javascript", "Node js", "Tailwind CSS", "Graphql", "Mongo DB", "Postgresql", "sql"  ]
    console.log("sdfkjsdjfwefew", inView)
  return (
    <Box>
        <Typography sx={{fontSize:'75px', fontWeight:600}}>About Me</Typography>            
        <Box ref={ref} sx={{display:'flex', overflowY:'hidden'}} >
                <motion.div 
                    initial={{ y: "200%", opacity: 0 }}
                    animate={inView && { y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <Box>
                        <Box>
                        <Typography variant='h5'>
                            I’m a web developer driven by curiosity and a love for learning new technologies in the dynamic world of web development. After earning my B.Tech from 
                            <Typography component="span" sx={{py:0.5, fontSize:'30px', display:'block', color:"#FE009D", fontWeight:600}}>
                                Jain University, 
                            </Typography>
                            I’ve been dedicated to building visually striking, user-focused websites that combine creativity with modern design principles. I enjoy crafting experiences that not only catch the eye but also engage and inspire users.
                        </Typography>
                        <Typography variant='h5'>
                            Here are a few technologies I've been working with recently:
                        </Typography>
                        <List style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '600px' }}>
                            {
                                skills.map((skill, index) => (
                                <ListItem 
                                    key={index} 
                                    style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', fontWeight:600 }}
                                >
                                    <IconChevronCompactRight style={{ color: '#FE009D' }} /> {skill}
                                </ListItem>
                                ))
                            }
                        </List>
                        </Box>
                    </Box>  
                </motion.div>
            <ScrollTriggered />
        </Box>
    </Box>
  )
}

export default About;