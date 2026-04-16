'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Optimizing Matrix Multiplication with AVX-512',
    description: 'Deep dive into SIMD optimizations and performance profiling techniques for computational kernels.',
    date: 'Coming Soon',
    tags: ['Systems', 'Performance', 'C++'],
  },
  {
    title: 'Understanding CUDA Memory Model',
    description: 'GPU memory hierarchy, coalescing patterns, and strategies for optimal throughput on NVIDIA GPUs.',
    date: 'Coming Soon',
    tags: ['GPU', 'CUDA', 'Performance'],
  },
  {
    title: 'Building Explainable ML Systems',
    description: 'Practical approaches to model interpretability using SHAP, Grad-CAM, and LIME in production systems.',
    date: 'Coming Soon',
    tags: ['ML', 'Explainability', 'Production'],
  },
]

export default function BlogSection() {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Technical articles and insights</p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-3">
                <Calendar size={16} />
                {post.date}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-blue-400 smooth-transition">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <motion.a
                href="#"
                className="text-blue-400 text-sm font-semibold flex items-center gap-2 group hover:gap-3 smooth-transition"
                whileHover={{ x: 4 }}
              >
                Read More <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          className="mt-12 p-8 rounded-lg bg-blue-500/5 border border-blue-500/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            <span className="text-blue-400 font-semibold">Blog launching soon!</span> Articles about systems optimization, ML explainability, and performance engineering.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
