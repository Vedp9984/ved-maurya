'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'AI Vehicle Claims Assessment',
    description: 'Built YOLOv8-based damage detection system achieving 85%+ accuracy on vehicle damage. Integrated perceptual hashing + metadata analysis for fraud detection. Implemented Grad-CAM for explainable AI visualization.',
    impact: '85%+ damage detection accuracy | Fraud detection pipeline | Production-ready explainability framework',
    techStack: ['YOLOv8', 'PyTorch', 'OpenCV', 'Grad-CAM', 'Streamlit'],
    githubLink: 'https://github.com/nilavra17ghosh/AI-CLAIMS-ASSESSMENT-SYSTEM',
  },
  {
    title: 'Cancer Risk Stratification System',
    description: 'Developed BioBERT + CheXpert + XGBoost ensemble for cancer risk scoring. Implemented OCR pipeline for clinical text extraction. Integrated SHAP explainability for interpretable risk scores (0-100).',
    impact: 'Interpretable risk scores | SHAP-based explainability | FastAPI production pipeline | 10,000+ patient records',
    techStack: ['BioBERT', 'FastAPI', 'PostgreSQL', 'SHAP', 'XGBoost'],
    githubLink: 'https://github.com/Vedp9984/Cancer-Stratification-System',
  },

]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-gradient-to-b from-transparent via-dark-bg to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Building AI systems that solve real-world problems</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Vedp9984/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
