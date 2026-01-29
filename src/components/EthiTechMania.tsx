import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Stage {
  id: number
  title: string
  description: string
  scenarios: string[]
}

const stages: Stage[] = [
  {
    id: 1,
    title: 'Stage 1: Aptitude & Reasoning',
    description: 'Elimination Round - Test your understanding of tech ethics principles',
    scenarios: [
      'Scenario 1: Privacy vs. Analytics',
      'Scenario 2: Open Source Responsibility',
      'Scenario 3: AI Bias Detection',
    ],
  },
  {
    id: 2,
    title: 'Stage 2: Ethical Rewrite',
    description: 'Shortlisting Round - Rewrite flawed code to be ethically compliant',
    scenarios: [
      'Fix biased algorithm',
      'Implement privacy controls',
      'Add transparency measures',
    ],
  },
  {
    id: 3,
    title: 'Stage 3: Final Decision',
    description: 'Finals - Present comprehensive solutions to complex ethical dilemmas',
    scenarios: [
      'Real-world case study analysis',
      'Implementation demonstration',
      'Defense and Q&A',
    ],
  },
]

const EthiTechMania: React.FC = () => {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-purple">
              ETHI TECH MANIA
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ethics is not optional. Build technology with responsibility and integrity.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              {index < stages.length - 1 && (
                <div className="absolute left-6 top-12 w-1 h-24 bg-gradient-to-b from-neon-magenta to-neon-purple opacity-30" />
              )}

              {/* Timeline node */}
              <motion.button
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                className="w-full text-left hud-card p-6 hover:shadow-neon-magenta relative"
                whileHover={{ x: 8 }}
              >
                <div className="absolute left-0 top-8 w-12 h-12 -translate-x-6 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-deep-dark border-2 border-neon-magenta flex items-center justify-center">
                    <span className="text-xl">⚖️</span>
                  </div>
                </div>

                <div className="ml-12">
                  <h3 className="text-xl font-cyber font-bold text-neon-magenta mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{stage.description}</p>

                  <motion.div
                    animate={{ rotate: expandedStage === stage.id ? 180 : 0 }}
                    className="text-neon-magenta inline-block"
                  >
                    ▼
                  </motion.div>
                </div>
              </motion.button>

              {/* Expandable content */}
              <AnimatePresence>
                {expandedStage === stage.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-12 mt-2 overflow-hidden"
                  >
                    <div className="hud-card p-6 bg-dark-panel/50 border border-neon-magenta/30">
                      <div className="space-y-3">
                        {stage.scenarios.map((scenario, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded border border-neon-magenta/20 bg-neon-magenta/5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-neon-magenta">→</span>
                            <span className="text-gray-300">{scenario}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 rounded bg-gradient-to-r from-neon-magenta/10 to-neon-purple/10 border border-neon-magenta/30">
                        <p className="text-sm text-gray-300">
                          <span className="text-neon-magenta font-bold">Ethical Focus:</span> Understand principles, apply reasoning, and defend your solutions with conviction.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Ethical framework section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="hud-card p-8 bg-gradient-to-br from-neon-magenta/10 via-dark-panel to-neon-purple/10">
            <h3 className="text-2xl font-cyber font-bold mb-6 text-neon-magenta">Core Ethical Principles</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🔒', title: 'Privacy First', desc: 'User data is sacred. Protect it always.' },
                { icon: '⚡', title: 'Transparency', desc: 'Let users know what you\'re doing with their data.' },
                { icon: '🤝', title: 'Fairness', desc: 'Technology should not discriminate or bias.' },
                { icon: '🌍', title: 'Social Impact', desc: 'Consider the broader implications of your tech.' },
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-3xl">{principle.icon}</div>
                  <div>
                    <h4 className="font-cyber font-bold text-neon-cyan mb-1">{principle.title}</h4>
                    <p className="text-sm text-gray-400">{principle.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EthiTechMania
