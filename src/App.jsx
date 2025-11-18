import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Urgency from './components/Urgency'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <Pricing />
      <Contact />
      <Urgency />
      <Footer />
    </div>
  )
}

export default App
