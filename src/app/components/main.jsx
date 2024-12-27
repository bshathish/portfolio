import { Box, Container } from '@mui/material'
import React from 'react'
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
  return (
    <Box>
      <Box sx={{m:4, mx:7, position:'relative'}}>
          <NavBar/>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default App