import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`netflix-navbar ${isScrolled ? 'bg-netflix-black' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Netflix-style Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-netflix font-bold text-red-600 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            PHIROZGAR
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-netflix text-sm"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
            >
              👤
            </motion.button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-black border border-gray-600 rounded-lg shadow-lg py-2 z-50"
              >
                <div className="px-4 py-2 text-gray-300 text-sm border-b border-gray-600">
                  Switch Profile
                </div>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 transition-colors duration-200">
                  Student
                </button>
                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-600 transition-colors duration-200">
                  Recruiter
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 transition-colors duration-200">
                  Kevin Feige
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 transition-colors duration-200">
                  Mom
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
