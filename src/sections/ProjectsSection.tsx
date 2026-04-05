import { motion } from 'framer-motion'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import type { Project } from '../data/portfolioData'
import { projects } from '../data/portfolioData'

type ProjectsSectionProps = {
  onProjectSelect: (project: Project) => void
}

function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  return (
    <Container id="projects" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Projects"
        title="Flagship work focused on performance, scalability, and AI"
        subtitle="A curated set of systems and applications where I solved real engineering constraints around latency, concurrency, and intelligent user workflows."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.08 }}
          >
            <ProjectCard project={project} onOpen={onProjectSelect} />
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default ProjectsSection
