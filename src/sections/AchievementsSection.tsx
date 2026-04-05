import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { achievements } from '../data/portfolioData'

function AchievementsSection() {
  return (
    <Container id="achievements" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones beyond project delivery"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.38, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
          >
            <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{achievement.description}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  )
}

export default AchievementsSection
