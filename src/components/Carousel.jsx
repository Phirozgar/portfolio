import React, { useRef, useState, useRef as useRefAlias } from 'react'
import { motion } from 'framer-motion'

const Carousel = ({ title, children, className = "" }) => {
  const scrollRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const touchStartRef = useRef({ x: 0, y: 0 })

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

  // Forward vertical wheel to page; keep horizontal wheel for row
  const handleWheel = (e) => {
    if (!scrollRef.current) return

    const isVerticalIntent = Math.abs(e.deltaY) > Math.abs(e.deltaX)

    if (isVerticalIntent) {
      // Forward vertical scroll to the page and block row from capturing it
      window.scrollBy({ top: e.deltaY, left: 0, behavior: 'auto' })
      e.preventDefault()
      return
    }

    // Horizontal wheel should scroll the row
    if (e.deltaX !== 0) {
      scrollRef.current.scrollLeft += e.deltaX
      e.preventDefault()
      return
    }
  }

  // Touch handling: allow horizontal swipe; forward vertical to page
  const handleTouchStart = (e) => {
    const t = e.touches[0]
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }

  const handleTouchMove = (e) => {
    if (!scrollRef.current) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartRef.current.x
    const dy = t.clientY - touchStartRef.current.y

    if (Math.abs(dy) > Math.abs(dx)) {
      // Vertical intent: let the page scroll; prevent the row from hijacking
      // Do not call preventDefault so the page can scroll naturally
      return
    }

    // Horizontal intent: consume and scroll row
    scrollRef.current.scrollLeft -= dx
    touchStartRef.current = { x: t.clientX, y: t.clientY }
    e.preventDefault()
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Section Title */}
      <h2 className="netflix-section-title  p-0 m-0">
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
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex space-x-2 overflow-x-auto overflow-y-visible pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x', overscrollBehaviorY: 'contain' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Carousel
