import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="netflix-hero">
      {/* Netflix-style Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero/phiroz.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Netflix Hero Overlay */}
      <div className="netflix-hero-overlay"></div>
      
      {/* Content - Netflix Style Positioning */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Title - Netflix Money Heist Style */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight"
                style={{ 
                  fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.02em'
                }}
              >
                PHIROZGAR IRANI
              </motion.h1>

              {/* Subtitle - Netflix Show Description Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed"
                   style={{ 
                     fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                   }}
                >
                  3rd Year Computer Science Student <br/>@ MIT Manipal
                </p>
                
                <p className="text-lg text-gray-200 max-w-2xl leading-relaxed"
                   style={{ 
                     fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                   }}
                >
                  Frontend | AI Applications Developer
                  <br/>I use my skills and creativity to build software solutions that teach me new skills and solve my problems..
                </p>
              </motion.div>

              {/* Action Buttons - Netflix Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#projects')}
                  className="netflix-btn-primary"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  View My Work
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="netflix-btn-secondary"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More Info
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Netflix Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  )
}

export default Hero
