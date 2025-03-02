import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'

import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      
      
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default App
