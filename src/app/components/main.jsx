import { Box, Container } from '@mui/material'
import React, { useRef } from 'react'
import NavBar from './Navbar/main'
import Hero from './Hero/main'
import About from './About/main'
import Projects from './Projects/main'
import Experience from './Experience/main'
import Contact from './Contact/main'
import Footer from './Footer/main'
import { useLenis } from '../lenis'

const App = () => {
  useLenis();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Box>
      <Box ref={homeRef} sx={{m:4, mx:7, position:'relative'}}>
          <NavBar homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
          <Hero aboutRef={aboutRef}/>
          <About projectRef={projectRef}/>
          <Projects/>
          <Experience/>
          <Contact contactRef ={contactRef}/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default App