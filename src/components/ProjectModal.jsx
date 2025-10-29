import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-6xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Video/Image Section */}
          <div className="relative h-96 bg-gray-900">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: project.image.startsWith('/images/') || project.image.startsWith('http') || project.image.startsWith('/') 
                  ? `url(${project.image})` 
                  : 'none'
              }}
            >
              {/* Fallback for emoji icons */}
              {(!project.image.startsWith('/images/') && !project.image.startsWith('http') && !project.image.startsWith('/')) && (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-8xl">
                  {project.image}
                </div>
              )}
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Title and Action Buttons */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  View Project
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Metadata Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                2024
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                5 min read
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                {project.tech[0] || 'React'}
              </span>
            </div>

            {/* Genre Tags */}
            <div className="text-gray-300 text-lg mb-6 opacity-70">
              {project.tech.slice(0, 3).join(' • ')}
            </div>

            {/* Description and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="lg:col-span-2">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  This project showcases my expertise in modern web development, combining cutting-edge technologies 
                  with intuitive user experience design. Built with a focus on performance and scalability, it demonstrates 
                  my ability to create robust applications that meet real-world requirements.
                </p>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-white text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Project Type</h3>
                  <div className="text-gray-300">
                    <div>Web Application</div>
                    <div>Full-Stack Development</div>
                    <div>UI/UX Design</div>
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Links</h3>
                  <div className="space-y-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
