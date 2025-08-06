import { useState } from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Skill from './components/Skill'
import Aboutme from './components/Aboutme'

import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Contact />
      <Skill />
      <Aboutme />

    </>
  )
}

export default App
