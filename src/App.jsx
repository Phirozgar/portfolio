import React, { useState, useEffect } from 'react'
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
  const [showLoading, setShowLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId)
  }

  useEffect(() => {
    // Show loading screen: 0.7s animation + 2s wait = 2.7s total
    // Then start transition
    let hideLoadingTimer = null
    
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true)
      // After transition animation completes, hide loading
      hideLoadingTimer = setTimeout(() => {
        setShowLoading(false)
      }, 900) // slide-out-fwd-center duration
    }, 1300)

    return () => {
      clearTimeout(transitionTimer)
      if (hideLoadingTimer) {
        clearTimeout(hideLoadingTimer)
      }
    }
  }, [])

  // Show loading screen first
  if (showLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className={`text-5xl lg:text-6xl font-bold text-red-600 tracking-in-expand ${isTransitioning ? 'slide-out-fwd-center' : ''}`}>
          PHIROZGAR IRANI
        </h1>
      </div>
    )
  }

  // Show profile selection
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
