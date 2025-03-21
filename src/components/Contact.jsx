"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"

const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-600 mb-8">
            Feel free to reach out if you're looking for a designer, developer, or just want to connect. I'm always open
            to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:abhishekkhatale007@gmail.com" className="font-medium hover:text-gray-600 text-lg">
                  abhishekkhatale007@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+918882888505" className="font-medium hover:text-gray-600 text-lg">
                  +91 8882 888 505
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-xl font-medium mb-6">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/abhishekkhatale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors duration-300"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/abhishekkhatale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://figma.com/@abhishekkhatale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-black hover:text-white rounded-lg transition-colors duration-300"
              >
                <ExternalLink size={20} />
                <span>Figma Portfolio</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

