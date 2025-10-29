import React from 'react'
import { motion } from 'framer-motion'

const Top10Card = ({ 
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
      case 'education':
        return 'w-56 h-36'
      case 'skill':
        return 'w-48 h-32'
      case 'project':
        return 'w-56 h-36'
      case 'experience':
        return 'w-56 h-36'
      default:
        return 'w-56 h-36'
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

        {/* Netflix-style Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  )
}

export default Top10Card
