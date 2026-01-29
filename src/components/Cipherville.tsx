import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Round {
  id: number
  title: string
  icon: string
  description: string
  details: string[]
}

const rounds: Round[] = [
  {
    id: 1,
    title: 'Round 1: Physical Investigation',
    icon: '🔍',
    description: 'Investigate crime scenes and gather physical evidence',
    details: [
      'Explore interactive room scenes',
      'Find hidden clues and hotspots',
      'Scan QR codes for evidence',
      'Build your investigation file',
    ],
  },
  {
    id: 2,
    title: 'Round 2: Database Investigation',
    icon: '🗄️',
    description: 'Query databases to extract crucial information',
    details: [
      'Write SQL queries',
      'Extract evidence from databases',
      'Connect disparate data points',
      'Crack the case code',
    ],
  },
]

const Cipherville: React.FC = () => {
  const [expandedRound, setExpandedRound] = useState<number | null>(null)
  const [selectedTab, setSelectedTab] = useState<'physical' | 'database'>('physical')

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              CIPHERVILLE
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Become a digital detective. Solve mysteries through investigation and deduction.
          </p>
        </div>

        {/* Round Cards */}
        <div className="space-y-6 max-w-3xl mx-auto mb-20">
          {rounds.map((round, index) => (
            <motion.div
              key={round.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setExpandedRound(expandedRound === round.id ? null : round.id)}
                className="w-full text-left hud-card p-6 hover:shadow-neon-cyan group"
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl">{round.icon}</span>
                      <h3 className="text-xl font-cyber font-bold text-neon-cyan">
                        {round.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm ml-14">{round.description}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedRound === round.id ? 180 : 0 }}
                    className="text-neon-cyan text-xl ml-4"
                  >
                    ▼
                  </motion.div>
                </div>
              </motion.button>

              {/* Expandable Details */}
              <AnimatePresence>
                {expandedRound === round.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="hud-card p-6 bg-dark-panel/50 border border-neon-cyan/30">
                      <div className="space-y-3">
                        {round.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded border border-neon-cyan/20 bg-neon-cyan/5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-neon-cyan font-bold">→</span>
                            <span className="text-gray-300">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Winner Selection Metrics */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cyber font-bold mb-8 text-center text-neon-magenta">
            Winner Selection Criteria
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Time Metric */}
            <motion.div
              className="hud-card p-6 bg-gradient-to-br from-neon-magenta/10 to-dark-panel"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">⏱️</div>
                <h4 className="text-lg font-cyber font-bold text-neon-magenta">Speed</h4>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Fastest solution wins bonus points. Efficiency in investigation is key.
              </p>

              {/* Animated meter */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400">Performance</div>
                <motion.div
                  className="h-2 bg-dark-panel rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-magenta to-neon-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Accuracy Metric */}
            <motion.div
              className="hud-card p-6 bg-gradient-to-br from-neon-cyan/10 to-dark-panel"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">🎯</div>
                <h4 className="text-lg font-cyber font-bold text-neon-cyan">Accuracy</h4>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                Correctness of evidence analysis. All clues must be properly identified.
              </p>

              {/* Animated meter */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400">Precision</div>
                <motion.div
                  className="h-2 bg-dark-panel rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bonus Points */}
          <motion.div
            className="hud-card p-6 mt-8 bg-gradient-to-br from-neon-purple/10 to-dark-panel"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">⭐</div>
              <h4 className="text-lg font-cyber font-bold text-neon-purple">Bonus Points</h4>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              Extra points awarded for:
            </p>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Finding hidden easter eggs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Creative deduction methods
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> First to solve special challenges
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Cipherville
