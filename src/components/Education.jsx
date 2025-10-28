import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import educationData from '../data/education.json'

const Education = () => {
  return (
    <section id="education" className="py-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="Continue Watching — Education">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={edu.institution}
                description={`${edu.degree} • ${edu.duration}`}
                image={edu.image}
                type="education"
                className="hover:shadow-netflix-glow"
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Education
