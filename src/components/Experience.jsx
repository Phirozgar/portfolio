import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import experienceData from '../data/experience.json'

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="New Releases — Experience">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={exp.role}
                description={`${exp.organization} • ${exp.duration}`}
                image={exp.image}
                tech={[exp.type]}
                type="experience"
                className="hover:shadow-netflix-glow"
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Experience
