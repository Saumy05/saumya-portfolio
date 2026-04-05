import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'
import { stats } from '../data/portfolioData'

function AboutSection() {
  return (
    <Container id="about" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="About"
        title="Backend-first engineer focused on scalable systems and AI-driven products"
        subtitle="I am a final-year Computer Science Engineering student who builds production-ready backend architectures using Node.js, Python, and Java. My work centers on API design, data-intensive workflows, and performance optimization, with hands-on experience shipping reliable systems for real-time and analytics-heavy use cases."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Container>
  )
}

export default AboutSection
