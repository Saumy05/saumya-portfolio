import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa6'
import { contactLinks } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Saumya Tiwari. Built with React, Tailwind and Framer Motion.</p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contactLinks.email}`}
            aria-label="Email"
            className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent"
          >
            <FaRegEnvelope size={16} />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-700 p-2 transition hover:border-accent hover:text-accent"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
