'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vedmaurya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vedmaurya', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vedmaurya@iiit.ac.in', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-heading bg-gradient-accent bg-clip-text text-transparent mb-2">
              Ved.dev
            </h3>
            <p className="text-gray-400 text-sm">
              ML & Systems Engineer | IIIT Hyderabad
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#projects" className="text-gray-400 hover:text-blue-400 smooth-transition">
                Projects
              </a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 smooth-transition block">
                Experience
              </a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 smooth-transition block">
                Skills
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 smooth-transition block">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="/resume.pdf" className="text-gray-400 hover:text-blue-400 smooth-transition">
                Resume
              </a>
              <a href="https://github.com/vedmaurya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 smooth-transition block">
                GitHub
              </a>
              <a href="https://linkedin.com/in/vedmaurya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 smooth-transition block">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Ved Prakash Maurya. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-card border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 smooth-transition"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Designed with */}
        <motion.p
          className="text-center text-gray-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Designed with ❤️ using Next.js + Tailwind CSS
        </motion.p>
      </div>
    </footer>
  )
}
