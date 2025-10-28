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
        return 'w-64 h-40'
      case 'skill':
        return 'w-48 h-32'
      case 'project':
        return 'w-56 h-80'
      case 'experience':
        return 'w-80 h-48'
      default:
        return 'w-56 h-80'
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

      {/* Card Content */}
      <div className="netflix-card h-full relative overflow-hidden">
        {/* Background Image/Icon */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center text-6xl">
          {image}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-4">
          {/* Title */}
          <h3 className="text-white font-netflix font-bold text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {description}
            </p>
          )}

          {/* Tech Stack */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tech.slice(0, 3).map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-red-600/20 text-red-600 text-xs rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons - Show on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            {liveUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded font-netflix font-medium hover:bg-red-700 transition-colors duration-200"
              >
                View
              </motion.button>
            )}
            {githubUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-600 text-white text-xs py-2 px-3 rounded font-netflix font-medium hover:bg-gray-500 transition-colors duration-200"
              >
                GitHub
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded transition-colors duration-300"></div>
      </div>
    </motion.div>
  )
}

export default Card
