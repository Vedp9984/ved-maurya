'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const educations = [
  {
    school: 'IIIT Hyderabad',
    degree: 'B.Tech Honors',
    period: '2023 - 2027',
    location: 'Hyderabad, Telangana, India',
    description: 'Pursuing B.Tech Honors degree focusing on ML, systems, and advanced computer science topics.',
    highlights: ['Data Science', 'Machine Learning', 'Systems Design', 'Algorithms'],
  },
  {
    school: 'Jawahar Navodaya Vidyalaya',
    degree: 'Schooling',
    period: '2016 - 2021',
    location: 'Balrampur, Uttar Pradesh, India',
  
  },
  {
    school: 'Ex-Navodaya Foundation',
    degree: 'Schooling',
    period: '2021 - 2023',
    location: 'Prayagaraj, Uttar Pradesh, India',

  },
]

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image at Top Left */}
        <motion.div
          className="mb-12 flex justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-dark-card border-2 border-dashed border-gray-600 flex items-center justify-center flex-shrink-0">
            <p className="text-gray-400 text-center px-4 text-xs">
              📷<br/>
              <span className="text-gray-500 block mt-2">Add profile.jpg</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and learning journey</p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index < educations.length - 1 && (
                <div className="absolute left-6 md:left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent opacity-20" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-2 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 md:w-5 md:h-5 bg-gradient-accent rounded-full"
                  whileInView={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-24 card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-heading">
                      {edu.school}
                    </h3>
                    <p className="text-blue-400 text-sm md:text-base font-semibold mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-2">{edu.location}</p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <motion.span
                      key={highlight}
                      className="px-3 py-1 text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
