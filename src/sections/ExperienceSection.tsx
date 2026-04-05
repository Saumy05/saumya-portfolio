import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/portfolioData'

function ExperienceSection() {
  return (
    <Container id="experience" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Experience"
        title="Internships and research with engineering impact"
      />

      <div className="relative ml-3 border-l border-slate-700 pl-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative mb-8 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-5"
          >
            <span className="absolute -left-[2.15rem] top-7 h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{experience.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {experience.role} - {experience.company}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {experience.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}

export default ExperienceSection
