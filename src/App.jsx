import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProfileSelect from './components/ProfileSelect'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId)
  }

  // Show profile selection if no profile is selected
  if (!selectedProfile) {
    return <ProfileSelect onProfileSelect={handleProfileSelect} />
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
