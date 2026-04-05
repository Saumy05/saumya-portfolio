import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ProjectModal from './components/ProjectModal'
import { navLinks, type Project } from './data/portfolioData'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import ContactSection from './sections/ContactSection'
import EngineeringHighlightsSection from './sections/EngineeringHighlightsSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-slateNight text-slate-100">
      <NavBar links={navLinks} activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onProjectSelect={setSelectedProject} />
        <ExperienceSection />
        <EngineeringHighlightsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
