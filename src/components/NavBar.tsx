import { motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import type { NavLink } from '../data/portfolioData'

type NavBarProps = {
  links: NavLink[]
  activeSection: string
}

function NavBar({ links, activeSection }: NavBarProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-white">
          Saumya<span className="text-accent">.dev</span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-slate-800"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    activeSection === link.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar
