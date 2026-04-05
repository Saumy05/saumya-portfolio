import { motion } from 'framer-motion'
import { FaArrowRightLong, FaDisplay, FaGithub } from 'react-icons/fa6'
import type { Project } from '../data/portfolioData'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/60"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>

      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
          >
            <FaDisplay size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-100 transition hover:border-accent hover:text-accent"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 text-sm text-accent transition hover:text-sky-300"
          >
            View Details
            <FaArrowRightLong size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
