"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Designing",
      skills: ["Figma", "Adobe XD", "Motiff", "Canva"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Tailwind CSS"],
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java"],
    },
    {
      title: "Others",
      skills: ["Communication", "Team Management", "Problem-Solving", "Content Creation"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gray-100 text-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

