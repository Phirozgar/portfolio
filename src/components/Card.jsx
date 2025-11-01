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
    <div
      className={`${getCardSize()} ${className} flex-shrink-0 relative group cursor-pointer`}
      onClick={onCardClick}
    >
      {/* Card Content - Netflix Movie Card Style with pop-out effect */}
      <div className="absolute inset-0 netflix-movie-card h-full w-full relative overflow-hidden rounded-sm transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-4 group-hover:z-20 group-hover:slide-fwd-center">
        {/* Image Section - Fill Card */}
        <div className="relative h-full w-full overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-sm"
            style={{
              backgroundImage: image.startsWith('/images/') || image.startsWith('http') || image.startsWith('/') 
                ? `url(${image})` 
                : 'none'
            }}
          >
            {/* Fallback icon if image fails to load or is emoji */}
            {(!image.startsWith('/images/') && !image.startsWith('http') && !image.startsWith('/')) && (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-5xl rounded-sm">
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
    </div>
  )
}

export default Card
