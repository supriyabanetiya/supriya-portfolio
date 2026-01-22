import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Skills from './components/Skills'

import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Achievements />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
