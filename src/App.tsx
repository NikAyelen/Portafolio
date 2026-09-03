import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import ProjectModal from './components/ProjectModal'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject onOpen={() => setModalOpen(true)} />
        <Education />
      </main>
      <Footer />
      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
