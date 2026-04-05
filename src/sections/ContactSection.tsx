import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa6'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { contactLinks } from '../data/portfolioData'

function ContactSection() {
  return (
    <Container id="contact" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build backend systems that scale"
        subtitle="Open to backend engineering internships, AI-focused product roles, and high-impact development collaborations."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-900/65 p-6 text-sm text-slate-300">
          <a
            href={`mailto:${contactLinks.email}`}
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaRegEnvelope size={16} className="text-accent" />
            {contactLinks.email}
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaLinkedin size={16} className="text-accent" />
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaGithub size={16} className="text-accent" />
            GitHub
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-900/65 p-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
          />
          <button
            type="button"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </Container>
  )
}

export default ContactSection
