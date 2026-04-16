'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const educations = [
  {
    school: 'International Institute of Information Technology, Hyderabad',
    degree: 'B.Tech in Computer Science and Engineering (Honors)',
    period: '2023 – 2027',
    location: 'Hyderabad, India',
    description:
      'Focused on Machine Learning, Systems Engineering, and advanced Computer Science concepts including high-performance computing and data-driven systems.',
    highlights: [
      'Machine Learning',
      'Systems Design',
      'Algorithms',
      'High Performance Computing',
    ],
  },
  {
    school: 'Ex-Navodaya Foundation',
    degree: 'Senior Secondary (Class XII)',
    period: '2021 – 2023',
    location: 'Prayagraj, India',
    description:
      'Completed senior secondary education with strong academic performance in science and mathematics.',
  },
  {
    school: 'Jawahar Navodaya Vidyalaya',
    degree: 'Secondary Education (Class X)',
    period: '2016 – 2021',
    location: 'Balrampur, India',
    description:
      'Built strong academic foundations with emphasis on mathematics, science, and discipline.',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and technical foundation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index < educations.length - 1 && (
                <div className="absolute left-6 md:left-8 top-14 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent" />
              )}

              {/* Dot */}
              <div className="absolute left-0 md:left-2 top-3 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 md:w-5 md:h-5 bg-gradient-accent rounded-full shadow-lg"
                  whileInView={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-24 card hover:shadow-xl transition-all duration-300">
                
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-heading">
                      {edu.school}
                    </h3>
                    <p className="text-blue-400 text-sm md:text-base font-semibold mt-1">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400 text-sm font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>
                </div>

                {/* Location */}
                {edu.location && (
                  <p className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                    <MapPin size={14} /> {edu.location}
                  </p>
                )}

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                )}

                {/* Highlights */}
                {edu.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        className="px-3 py-1 text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full"
                        whileHover={{ scale: 1.08 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}