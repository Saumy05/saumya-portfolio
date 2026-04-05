import { motion } from 'framer-motion'
import { FaDownload, FaFolderOpen, FaGithub } from 'react-icons/fa6'
import { useEffect, useMemo, useState } from 'react'
import Container from '../components/Container'

const typingPhrases = [
  'Backend Developer',
  'AI Systems Engineer',
  'Scalable Architectures',
]

function HeroSection() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const currentPhrase = useMemo(() => typingPhrases[index % typingPhrases.length], [index])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const nextText = currentPhrase.slice(0, text.length + 1)
          setText(nextText)

          if (nextText === currentPhrase) {
            setDeleting(true)
          }
          return
        }

        const nextText = currentPhrase.slice(0, text.length - 1)
        setText(nextText)

        if (nextText.length === 0) {
          setDeleting(false)
          setIndex((prev) => prev + 1)
        }
      },
      deleting ? 55 : 95,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, currentPhrase])

  return (
    <Container id="hero" className="relative pt-20 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-grid-glow" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.26em] text-accent">Saumya Tiwari</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Backend Engineer | AI-Powered Systems | Scalable Web Architectures
          </h1>

          <p className="max-w-xl text-lg text-slate-300">
            I build backend systems that stay fast under load and power AI-enabled products with production-ready reliability.
          </p>

          <div className="h-8 font-mono text-base text-sky-300 sm:text-lg">
            {text}
            <span className="ml-1 animate-pulse text-accent">|</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              <FaFolderOpen size={16} />
              View Projects
            </a>
            <a
              href="/Saumy_Tiwari_Backend%20resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
            <a
              href="https://github.com/Saumy05"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mx-auto flex w-full max-w-md justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-blue-500 opacity-25 blur-3xl" />
            <img
              src="/profile.jpeg"
              alt="Saumya Tiwari"
              className="h-64 w-64 rounded-full border-4 border-blue-500 object-cover shadow-xl transition duration-300 hover:scale-105 sm:h-72 sm:w-72"
            />
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default HeroSection
