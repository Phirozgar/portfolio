import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Carousel = ({ title, children, className = "" }) => {
  const scrollRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const currentScroll = scrollRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  const handleMouseEnter = () => setIsScrolling(true)
  const handleMouseLeave = () => setIsScrolling(false)

  return (
    <div className={`relative group ${className}`}>
      {/* Section Title */}
      <h2 className="netflix-section-title">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolling ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={() => scroll('left')}
        >
          <span className="text-xl">‹</span>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolling ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={() => scroll('right')}
        >
          <span className="text-xl">›</span>
        </motion.button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 py-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Carousel
