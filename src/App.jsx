import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "motion/react"
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ScrollProgress from './components/ScrollBar'

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300">
    <ScrollProgress/>
    <div id="home">
      <Header />
    </div>
    <Intro />
    <div id='about'>
      <About />
    </div>
    <div id='skills'>
      <Skills />
    </div>
    <div id='education'>
      <Education />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    <Footer />
   </div >
  )
}
export default App
