"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-gray-700 leading-relaxed"
          >
            <p className="mb-4">
              I'm a passionate UI/UX Designer and Frontend Developer with a keen eye for detail and a love for creating
              intuitive, user-centered digital experiences. My approach combines aesthetic design with functional
              implementation to build applications that are both beautiful and practical.
            </p>
            <p>
              With expertise in UI/UX design and frontend development, I bridge the gap between design and
              implementation, ensuring that the final product not only looks great but also functions flawlessly across
              all devices and platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Technical Skills</h4>
                <p className="text-gray-600">
                  Proficient in UI/UX design, frontend development, and various programming languages including C, C++,
                  Java, PHP, React.js, and Tailwind CSS.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Soft Skills</h4>
                <p className="text-gray-600">
                  Strong team management abilities, excellent problem-solving skills, adaptability to new technologies,
                  and effective communication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

