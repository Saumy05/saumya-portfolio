import { FaCode, FaDatabase, FaDocker, FaJava, FaNodeJs, FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SiExpress, SiFirebase, SiFlask, SiJavascript, SiLinux, SiMongodb, SiSpringboot } from 'react-icons/si'
import type { IconType } from 'react-icons'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data/portfolioData'

const iconMap: Record<string, IconType> = {
  'Node.js': FaNodeJs,
  Express: SiExpress,
  Flask: SiFlask,
  'Spring Boot': SiSpringboot,
  Java: FaJava,
  Python: FaPython,
  'C++': FaCode,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  SQL: FaDatabase,
  Firebase: SiFirebase,
  Docker: FaDocker,
  Git: FaCode,
  Linux: SiLinux,
}

function SkillsSection() {
  return (
    <Container id="skills" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Skills"
        title="Tech stack built for backend depth and product execution"
        subtitle="A practical toolkit across backend engineering, programming languages, databases, and DevOps workflows."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                (() => {
                  const Icon = iconMap[skill] ?? FaCode

                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-100"
                    >
                      <Icon className="text-base text-sky-300" />
                      {skill}
                    </span>
                  )
                })()
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}

export default SkillsSection
