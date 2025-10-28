import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import projectsData from '../data/projects.json'

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="Top 10 in India Today — Projects">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                rank={project.rank}
                type="project"
                className="hover:shadow-netflix-glow"
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Projects
