import React from 'react'
import { DarkModeProvider } from './Components/DarkModeContext'
import Header from './Components/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Popular from './Sections/Popular'
import Properties from './Sections/Properties'
import Services from './Sections/Services'
import Contract from './Sections/Contract'
import Footer from './Components/Footer'
import Client from './Sections/Client'

const App = () => {
  return (
   <>
    <DarkModeProvider>
      <Header/>
      <Hero/>
      <About/>
      <Popular/>
      <Properties/>
      <Services/>
      <Client/>
      <Contract/>
      <Footer/>
    </DarkModeProvider>
   </>
  )
}

export default App