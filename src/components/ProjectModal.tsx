import { AnimatePresence, motion } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import type { Project } from '../data/portfolioData'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">Project Breakdown</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-600 p-2 text-slate-200 transition hover:border-accent hover:text-accent"
                aria-label="Close project details"
              >
                <FaXmark size={18} />
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="mb-2 text-base font-medium text-white">Problem</h4>
                <p>{project.detail.problem}</p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-medium text-white">Solution</h4>
                <p>{project.detail.solution}</p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-medium text-white">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-base font-medium text-white">Key Achievements</h4>
                <ul className="list-disc space-y-2 pl-5">
                  {project.detail.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
