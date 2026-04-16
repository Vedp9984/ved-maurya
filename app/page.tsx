import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
