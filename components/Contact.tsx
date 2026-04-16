'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mvedp998@gmail.com',
      href: 'mailto:mvedp998@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Vedp9984',
      href: 'https://github.com/Vedp9984/',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ved-maurya',
      href: 'https://www.linkedin.com/in/ved-maurya/',
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/xyzaaqvk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitMessage('Message sent successfully! 🎉')
        e.currentTarget.reset()
        setTimeout(() => setSubmitMessage(''), 3000)
      } else {
        setSubmitMessage('Error sending message. Please try again.')
        setTimeout(() => setSubmitMessage(''), 3000)
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please email directly.')
      setTimeout(() => setSubmitMessage(''), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-gradient-to-b from-dark-bg via-dark-bg to-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's collaborate and build something amazing</p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 smooth-transition" />
                <h3 className="text-lg font-bold text-white mb-1">
                  {contact.label}
                </h3>
                <p className="text-gray-400 text-sm break-all">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          className="card max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white font-heading mb-6">
            Send me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none smooth-transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none smooth-transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none smooth-transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none smooth-transition resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-blue-400"
              >
                {submitMessage}
              </motion.p>
            )}
          </form>

          <p className="text-gray-400 text-sm text-center mt-4">
            Or email me directly at{' '}
            <a
              href="mailto:mvedp998@gmail.com"
              className="text-blue-400 hover:text-blue-300 smooth-transition font-semibold"
            >
              mvedp998@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
