'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const achievements = [
  {
    title: 'Amazon ML Summer School',
    description: 'Top 3.7% among 1000+ participants',
    icon: '🏆',
  },
  {
    title: 'Flipkart GRID Semifinalist',
    description: 'Advanced to semifinals in national competition',
    icon: '⭐',
  },
  {
    title: 'Harvard Aspire Leader',
    description: 'Selected as global leadership program participant',
    icon: '🎓',
  },
  {
    title: 'Teaching Assistant at IIIT-H',
    description: 'Mentored students in ML & Systems courses',
    icon: '📚',
  },
]

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognition and milestones</p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="card text-center group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
