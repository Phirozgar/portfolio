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
        scale: 1.5,
        zIndex: 50,
        transition: { duration: 0.25, ease: "easeInOut" }
      }}
      viewport={{ once: true }}
      className={`${getCardSize()} ${className} flex-shrink-0 relative group cursor-pointer`}
      onClick={onCardClick}
    >
      {/* Card Content - Netflix Movie Card Style */}
      <div className="netflix-movie-card h-full relative overflow-hidden group flex flex-col">
        {/* Image Section - Fixed Height */}
        <div className="relative h-36 overflow-hidden">
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

          {/* Netflix-style Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-white font-bold text-sm truncate"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Expandable Content Section - Shows on Hover */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="bg-gray-900 overflow-hidden"
        >
          <div className="p-4 space-y-3">
            {/* Action Icons Row */}
            <div className="flex items-center gap-3">
              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.button>

              {/* Add to List Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.button>

              {/* Like Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.button>

              {/* More Info Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>

            {/* Metadata Badges */}
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded font-medium">
                2024
              </span>
              <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded font-medium">
                5 min read
              </span>
              <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded font-medium">
                {tech[0] || 'React'}
              </span>
            </div>

            {/* Genre Tags */}
            <div className="text-gray-300 text-xs opacity-70">
              {tech.slice(0, 3).join(' • ')}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Card
