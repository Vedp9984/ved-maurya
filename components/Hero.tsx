'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-block"
        >
          <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono">
            👋 Welcome to my portfolio
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg bg-dark-card border-2 border-gray-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Ved Prakash Maurya"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white"
        >
          Ved Prakash Maurya
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold font-heading">
            ML & Systems Engineer
          </h2>
          <p className="text-gray-500 mt-2">@ IIIT Hyderabad</p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building scalable AI systems, knowledge graphs, and high-performance applications. Passionate about explainability, optimization, and solving real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            className="btn btn-primary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 smooth-transition" />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://github.com/Vedp9984/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-dark-card border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 smooth-transition"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ved-maurya/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-dark-card border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 smooth-transition"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
