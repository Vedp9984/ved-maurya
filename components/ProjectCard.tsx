'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  impact: string
  techStack: string[]
  githubLink?: string
  liveLink?: string
  image?: string
}

export default function ProjectCard({
  title,
  description,
  impact,
  techStack,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -8 }}
      whileTap={{ y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white font-heading mb-2">
          {title}
        </h3>
        <div className="h-1 w-12 bg-gradient-accent rounded-full" />
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Problem → Solution</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Impact</h4>
          <p className="text-gray-300 text-sm leading-relaxed text-blue-300">
            {impact}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-dark-bg border border-gray-700 text-gray-400 rounded-full hover:border-blue-500 smooth-transition"
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-800">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 smooth-transition flex-1 justify-center py-2 rounded-lg hover:bg-dark-bg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
        )}

        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 smooth-transition flex-1 justify-center py-2 rounded-lg hover:bg-dark-bg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Live</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
