import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyModal from './components/CaseStudyModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [caseStudyProject, setCaseStudyProject] = useState(null)

  useEffect(() => {
    const sections = ['home', 'about', 'work', 'services', 'skills', 'experience', 'contact']
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <CredibilityStrip />
        <About />
        <Services />
        <Work onOpenCaseStudy={setCaseStudyProject} />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {caseStudyProject && (
          <CaseStudyModal
            project={caseStudyProject}
            onClose={() => setCaseStudyProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
