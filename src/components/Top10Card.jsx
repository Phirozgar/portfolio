import React from 'react'
import { motion } from 'framer-motion'

const Top10Card = ({ 
  title, 
  description, 
  image,
  tech = [],
  date,
  readingTime, 
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
      case 'education':
        return 'w-48 h-48'
      case 'skill':
        return 'w-44 h-44'
      case 'project':
        return 'w-48 h-48'
      case 'experience':
        return 'w-48 h-48'
      default:
        return 'w-48 h-48'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.35,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className={`${getCardSize()} ${className} flex-shrink-0 relative group cursor-pointer`}
      onClick={onCardClick}
    >
      {/* Large Transparent Ranking Number - Behind Card */}
      {rank && (
        <div className="netflix-top10-ranking-number">
          {rank}
        </div>
      )}

      {/* Card Content - Netflix Movie Card Style */}
      <div className="netflix-movie-card h-full relative overflow-hidden group ml-6">
        {/* Background Image/Icon */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: image.startsWith('/images/') || image.startsWith('http') || image.startsWith('/') 
              ? `url(${image})` 
              : 'none'
          }}
        >
          {/* Fallback icon if image fails to load or is emoji */}
          {(!image.startsWith('/images/') && !image.startsWith('http') && !image.startsWith('/')) && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-5xl">
              {image}
            </div>
          )}
        </div>

        {/* Hover overlay removed for minimal look */}
      </div>
    </motion.div>
  )
}

export default Top10Card
