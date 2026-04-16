import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
