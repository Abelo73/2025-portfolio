
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills '
import Exp from './components/Exp'
import Service from './components/Service'
import CVService from './components/CVService'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactAs from './components/ContactAs'
import TestimonialForm from './components/TestimonialForm'
import Footer from './components/Footer'

function App() {


  return (
    <>
{/* 
<Helmet>
        <title>Senior Backend Developer | CV Services for Students</title>
        <meta name="description" content="Expert in Java Spring Boot, Kafka, Rasa, and React. Offering professional CV services for students." />
        <meta name="keywords" content="backend developer, Spring Boot, Rasa, Telegram bots, CV services, student resume" />
      </Helmet> */}
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Exp />
    <Service />
    <CVService />
    <Projects />
    <Testimonials />
    <ContactAs />
    <TestimonialForm />
    <Footer />
    </>
  )
}

export default App
