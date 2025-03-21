"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Gen-AI",
      period: "28 Oct 2024 – 28 Dec 2024",
      description:
        "Worked on designing and developing user interfaces for AI-powered applications. Collaborated with cross-functional teams to implement responsive designs and ensure optimal user experience.",
    },
  ]

  const freelanceProjects = [
    {
      title: "Finnitee",
      description: "Designed a home page for their application",
      figmaLink: "https://www.figma.com/design/O3KF6RityBuBMlY8yD0J7M/Untitled?m=auto&t=WUziCjhSL1xD3Wi3-1",
    },
    {
      title: "PICPLIX",
      description: "Created a movie streaming website UI",
      figmaLink: "https://www.figma.com/design/UjIisheY3WTrPKdCEOsdy2/Untitled?m=auto&t=WUziCjhSL1xD3Wi3-1",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-black pl-6 py-2 relative">
                  <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-6"></div>
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Freelance Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freelanceProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-medium mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
                  >
                    View on Figma <ExternalLink size={16} className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience

