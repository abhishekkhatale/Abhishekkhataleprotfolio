"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "EatAI",
      description: "AI-Based Nutrition Application",
      image: "p1.png",
      figmaLink: "https://www.figma.com/design/EWzwvDSasxImtiv31lNCiv/EatAI?node-id=0-1&p=f&t=FMAC93n3LY9AcFIM-0",
      tags: ["UI/UX", "Figma", "AI"],
    },
    {
      title: "Charmer",
      description: "AI-Powered Dating & Social Interaction",
      image: "p2.png",
      figmaLink: "https://www.figma.com/design/F7T4ObVyyU5G3Wyo0dsruN/Charmer-(Void-Aethers)?node-id=0-1&p=f&t=Bq2iaUhrOF0Kf6G4-0",
      tags: ["UI/UX", "Figma", "Social"],
    },
    {
      title: "Disney+ Hotstar Clone",
      description: "A responsive clone of the Disney+ Hotstar streaming platform",
      image: "p3.png",
      liveDemo: "https://disney-clone-nu-seven.vercel.app/",
      githubRepo: "https://github.com/abhishekkhatale/Disney-clone",
      tags: ["React", "Tailwind CSS", "API Integration"],
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
                    >
                      View on Figma <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
                    >
                      Live Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
                    >
                      GitHub <Github size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

