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
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23E50914;stop-opacity:0.8" /><stop offset="50%" style="stop-color:%236A5ACD;stop-opacity:0.6" /><stop offset="100%" style="stop-color:%23000000;stop-opacity:0.9" /></linearGradient></defs><rect width="100%" height="100%" fill="url(%23grad)"/></svg>')`
        }}
      />
      
      {/* Netflix-style Gradient Overlay */}
      <div className="absolute inset-0 bg-netflix-hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl lg:text-8xl font-netflix font-bold text-white leading-tight"
              >
                PHIROZGAR IRANI
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl lg:text-3xl text-gray-300 font-netflix"
              >
                Computer Science Student @ MIT Manipal
              </motion.p>

              {/* Tech Stack */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg text-gray-400 font-netflix"
              >
                I can code in Java, React, Node.js, Express, MongoDB, and more!
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#projects')}
                  className="netflix-btn-primary text-lg px-8 py-3 flex items-center justify-center"
                >
                  <span className="mr-2">▶</span>
                  View My Work
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="netflix-btn-secondary text-lg px-8 py-3 flex items-center justify-center border border-gray-500"
                >
                  <span className="mr-2">ℹ️</span>
                  More Info
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Netflix-style Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Hero
