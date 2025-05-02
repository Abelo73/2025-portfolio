import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills '
import Experience from './components/Experience'
import Exp from './components/Exp'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactAs from './components/ContactAs'
import TestimonialForm from './components/TestimonialForm'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Exp />
    {/* <Experience /> */}
    <Projects />
    <Testimonials />
    <ContactAs />
    <TestimonialForm />
    <Footer />
    {/* <Contact /> */}
    </>
  )
}

export default App
