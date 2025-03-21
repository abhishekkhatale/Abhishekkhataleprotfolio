"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, Mail } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black pt-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abhishek Khatale</h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">UI/UX Designer & Frontend Developer</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Creating beautiful, functional, and user-centered digital experiences that bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact").scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-black text-black rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              View Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#about").scrollIntoView({
                behavior: "smooth",
              })
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="flex flex-col items-center text-gray-500 hover:text-gray-700"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

