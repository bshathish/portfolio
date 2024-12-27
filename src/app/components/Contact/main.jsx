import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { IconDeviceMobile, IconLocation, IconLocationBolt, IconMapPin, IconMapPinFilled } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';

const Contact = ({contactRef}) => {
    const form = useRef();
    const [success, setsuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9y3ia4j', 'template_aqpbzo3', form.current, {
            publicKey: 'vO9B2zWg0sjDpSYQ-',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setsuccess(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setsuccess(false);
            },
          );
      };

  return (
    <Box ref={contactRef}>
        <Typography sx={{fontSize:'75px', fontWeight:600}}>Contact Me</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                <Typography sx={{fontSize:'30px'}}>Let’s create something amazing together!</Typography>
                <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
                    <Typography sx={{fontSize:'20px'}}>
                        Address
                    </Typography>
                    <Box sx={{display:'flex', gap:1, pl:2,}}>
                        <IconMapPinFilled/>
                        <Typography sx={{fontSize:"20px"}}>
                            Bengaluru, Karnataka, India
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
                    <Typography sx={{fontSize:'20px'}}>
                        Phone Number
                    </Typography>
                    <Box sx={{display:'flex', gap:1, pl:2}}>
                        <IconDeviceMobile/>
                        <Typography sx={{fontSize:"20px"}}>
                            +918792385484
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
                    <Typography sx={{fontSize:'20px'}}>
                        Email
                    </Typography>
                    <Box sx={{display:'flex', gap:1, pl:2}}>
                        <Typography sx={{fontWeight:600, fontSize:'20px'}}>@</Typography>
                        <Typography sx={{fontSize:"20px"}}>
                            shathishb065@gmail.com
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography sx={{fontWeight:600}}>I’d be happy to hear from you! Please feel free to reach out, and let’s connect.</Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2, my:1}}>
                                <TextField label="Name" name="name" size="small"/>
                                <TextField label="Email" name="email" size="small"/>
                                <TextField label="Mobile" name="mobile" size="small"/>
                                <TextField label="Your Message" name="message" size="small" multiline rows={3}/>
                                <Box sx={{width:'100%', display:'flex', justifyContent:'end'}}>
                                    <Button type='submit' variant='contained'>Send Message</Button>
                                </Box>
                        </Box>
                    </form>
            </Box>
        </Box>
    </Box>
  )
}

export default Contact