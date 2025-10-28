import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Email', icon: '📧', url: 'mailto:phirozgar@example.com', color: 'hover:bg-red-500' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-blue-400' }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-netflix font-bold text-white mb-6"
          >
            Let's build something awesome together{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              🤝
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            I'd love to hear from you! Whether it's a project, collaboration, or just a chat 
            about technology and design.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-netflix font-semibold text-white mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-500 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-500 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-gray-500 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-white resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full netflix-btn-primary text-lg py-4"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-netflix font-semibold text-white mb-6">
                  Get in touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-gray-300-dark">phirozgar@example.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-gray-300-dark">Manipal, Karnataka, India</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-xl">
                      ⏰
                    </div>
                    <div>
                      <div className="font-medium text-white">Response Time</div>
                      <div className="text-gray-300-dark">Usually within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-netflix font-semibold text-white mb-6">
                  Follow me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                      className={`flex items-center space-x-3 p-4 rounded-lg bg-black hover:bg-red-600 transition-all duration-300 group ${social.color}`}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <span className="font-medium text-white group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
