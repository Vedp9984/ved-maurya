'use client'

import { motion } from 'framer-motion'

const skillsData = [
  {
    category: 'ML & AI',
    icon: '🤖',
    skills: ['PyTorch', 'YOLOv8', 'BioBERT', 'XGBoost', 'SHAP', 'Grad-CAM', 'TensorFlow'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['FastAPI', 'Flask', 'Node.js', 'Express', 'WebSockets', 'REST APIs'],
  },
  {
    category: 'Systems',
    icon: '🖥️',
    skills: ['Linux', 'Performance Optimization', 'Networking', 'Concurrency', 'Memory Management'],
  },
  {
    category: 'Databases',
    icon: '💾',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector Databases'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'AWS'],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'JavaScript/TypeScript', 'C++', 'SQL', 'Bash'],
  },
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools and technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              className="card"
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {group.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-gray-300 rounded-full hover:border-blue-500 hover:text-blue-400 smooth-transition"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Note */}
        <motion.div
          className="mt-12 p-6 rounded-lg bg-blue-500/5 border border-blue-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            <span className="text-blue-400 font-semibold">Constantly learning:</span> Keeping up with latest developments in ML frameworks, distributed systems, and cloud technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
