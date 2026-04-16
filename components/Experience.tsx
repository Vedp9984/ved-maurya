'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Software Engineer Intern @ Virtual Labs, IIT Bombay',
    period: 'Aug 2024 - Sep 2025 (1 yr 2 mos)',
    description: 'Contributed to Virtual Labs, a Ministry of Education initiative, developing interactive wireless communication experiments. Content hosted for free access by 100+ institutions nationwide.',
    highlights: ['Virtual Learning', 'Web Development', 'Interactive Labs', 'EdTech'],
  },
  {
    role: 'Amazon ML Summer School',
    period: 'Aug 2025 (Selected - Top 3.7%)',
    description: 'Selected in top 3.7% (3,000 out of 80,000+) applicants through rigorous ML assessment by Amazon Scientists. Intensive program for ML education and career development.',
    highlights: ['Machine Learning', 'Amazon ML', 'Top Tier Selection', 'Leadership'],
  },
  {
    role: 'Teaching Assistant @ IIIT Hyderabad',
    period: 'Jan 2026 - Present (4 mos)',
    description: 'Teaching Assistant for Internals of Application Servers (CS3.404) course. Supporting classroom instruction and student learning in advanced systems programming.',
    highlights: ['Systems Programming', 'Teaching', 'Application Servers', 'Mentoring'],
  },
  {
    role: 'Undergraduate Researcher @ DSAC Lab, IIIT-H',
    period: 'Apr 2025 - Present (1 yr 1 mo)',
    description: 'Developing crop disease diagnostic systems and curating agricultural datasets. Creating annotation pipelines and quality assurance frameworks for production ML models.',
    highlights: ['Agriculture AI', 'Data Curation', 'ML Systems', 'Research'],
  },
  {
    role: 'Mentee & Project Intern @ Salesforce',
    period: 'Aug 2025 - Nov 2025 (4 mos)',
    description: 'Developed Shuttle Services Management System - a web application digitizing campus transportation booking. Applied Agile methodology under senior industry mentorship.',
    highlights: ['Full-Stack Development', 'Web Applications', 'Agile', 'Project Management'],
  },
  {
    role: 'Research Intern @ AI Institute of South Carolina',
    period: 'Dec 2025 - Present (5 mos)',
    description: 'Conducting research with IRG group on advanced AI systems and applications. Remote position enabling collaboration across international research teams.',
    highlights: ['AI Research', 'Remote Collaboration', 'Innovation', 'Advanced Systems'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Work</h2>
          <p className="section-subtitle">Building expertise across ML, systems, and production systems</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
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
                  <h3 className="text-lg md:text-xl font-bold text-white font-heading">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
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
