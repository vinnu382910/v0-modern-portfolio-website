import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import ThemeToggle from "@/components/theme-toggle"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <ParticleBackground />
      <LoadingScreen />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen py-20">
        <About />
      </section>
      <section id="experience" className="min-h-screen py-20">
        <Experience />
      </section>
      <section id="skills" className="min-h-screen py-20">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen py-20">
        <Projects />
      </section>
      <section id="certificates" className="min-h-screen py-20">
        <Certificates />
      </section>
      <section id="contact" className="min-h-screen py-20">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
