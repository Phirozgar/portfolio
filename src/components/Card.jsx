import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ 
  title, 
  description, 
  image, 
  tech = [], 
  liveUrl, 
  githubUrl, 
  rank = null,
  type = 'default',
  status = null,
  className = "",
  onCardClick = null
}) => {
  const getCardSize = () => {
    switch (type) {
      default:
        return 'w-60 h-40'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.5,
        zIndex: 50,
        transition: { duration: 0.25, ease: "easeInOut" }
      }}
      viewport={{ once: true }}
      className={`${getCardSize()} ${className} flex-shrink-0 relative group cursor-pointer`}
      onClick={onCardClick}
    >
      {/* Card Content - Netflix Movie Card Style */}
      <div className="netflix-movie-card h-full relative overflow-hidden group rounded-sm">
        {/* Image Section - Fill Card */}
        <div className="relative h-full w-full overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: image.startsWith('/images/') || image.startsWith('http') || image.startsWith('/') 
                ? `url(${image})` 
                : 'none'
            }}
          >
            {/* Fallback icon if image fails to load or is emoji */}
            {(!image.startsWith('/images/') && !image.startsWith('http') && !image.startsWith('/')) && (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-5xl">
                {image}
              </div>
            )}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-white font-bold text-sm truncate"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            >
              {title}
            </h3>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Card
