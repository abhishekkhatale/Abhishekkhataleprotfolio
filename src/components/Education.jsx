"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sahyog College Thane",
      period: "2021 - 2024",
      grade: "CGPA: 9.63",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "XII (HSC) Maharashtra Board",
      institution: "VG Vaze Kelkar College",
      period: "2019 - 2021",
      grade: "70%",
      icon: <Award size={24} />,
    },
    {
      degree: "X (SSC) Maharashtra Board",
      institution: "Mithila English High School",
      period: "2018 - 2019",
      grade: "84%",
      icon: <Award size={24} />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-700">{item.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <span>{item.period}</span>
                    <span className="font-medium">{item.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

