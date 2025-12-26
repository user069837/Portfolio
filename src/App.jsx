import { useState } from 'react'
import Nav from './components/nav'
import About from './components/About'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger) 

function App() {

  return (
    <main>
      <Nav></Nav>
      <About></About>
    </main>
  )
}

export default App
