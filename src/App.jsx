"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    // Add Poppins font
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div className="font-poppins bg-white text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.section>
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Education />
        </motion.section>
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

export default App

