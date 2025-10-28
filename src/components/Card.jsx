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
  className = "" 
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
        scale: 1.05,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className={`${getCardSize()} ${className} flex-shrink-0 relative group cursor-pointer`}
    >
      {/* Top 10 Badge */}
      {rank && (
        <div className="netflix-top10-badge">
          {rank}
        </div>
      )}

      {/* Card Content - Netflix Movie Card Style */}
      <div className="netflix-movie-card h-full relative overflow-hidden group">
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
        
        {/* Debug: Show image path for troubleshooting */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-1 left-1 bg-black/50 text-white text-xs p-1 rounded">
            {image}
          </div>
        )}

        {/* Netflix-style Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content - Netflix Style with Better Spacing */}
        <div className="relative z-10 h-full flex flex-col justify-end p-4">
          {/* Title - Netflix Style */}
          <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-600 transition-colors duration-300 truncate"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
          >
            {title}
          </h3>

          {/* Description - Netflix Style */}
          {description && (
            <p className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed"
               style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            >
              {description}
            </p>
          )}

          {/* Tech Stack - Netflix Style */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tech.slice(0, 2).map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-red-600/30 text-red-400 text-xs rounded font-medium"
                  style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons - Netflix Hover Style */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            {liveUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-red-600 text-white text-sm py-2 px-3 rounded font-semibold hover:bg-red-700 transition-colors duration-200"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
              >
                View
              </motion.button>
            )}
            {githubUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-700 text-white text-sm py-2 px-3 rounded font-semibold hover:bg-gray-600 transition-colors duration-200"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
              >
                GitHub
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Netflix Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded transition-colors duration-300"></div>
      </div>
    </motion.div>
  )
}

export default Card
