import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import skillsData from '../data/skills.json'

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="We Think You'll Love These — Skills">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={skill.name}
                description={skill.description}
                image={skill.image}
                tech={[skill.category, skill.level]}
                type="skill"
                className="hover:shadow-netflix-glow"
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Skills