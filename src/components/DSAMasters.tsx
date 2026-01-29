import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DSAMasters: React.FC = () => {
  const treeRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!treeRef.current) return

    const circles = treeRef.current.querySelectorAll('circle')
    gsap.from(circles, {
      scrollTrigger: {
        trigger: treeRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      r: 5,
      opacity: 0,
      stagger: 0.1,
    })
  }, [])

  const rounds = [
    {
      id: 1,
      title: 'Round 1: Easy Level',
      difficulty: 'Warm-up',
      color: '#00F3FF',
      icon: '🌱',
      metrics: ['Correctness', 'Time: 5 mins', 'Max Problems: 3'],
    },
    {
      id: 2,
      title: 'Round 2: Medium Level',
      difficulty: 'Challenge',
      color: '#8B5CF6',
      icon: '🌿',
      metrics: ['Correctness', 'Time Complexity', 'Time: 15 mins'],
    },
    {
      id: 3,
      title: 'Round 3: Hard Level',
      difficulty: 'Expert',
      color: '#FF006E',
      icon: '🌳',
      metrics: ['Correctness', 'Time & Space Complexity', 'Time: 30 mins'],
    },
  ]

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              DSA MASTERS
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Master the art of Data Structures and Algorithms. Grow from seed to mighty tree.
          </p>
        </div>

        {/* Tree visualization */}
        <div className="flex justify-center mb-20">
          <svg ref={treeRef} viewBox="0 0 600 400" className="w-full max-w-2xl h-auto">
            {/* Tree trunk */}
            <line x1="300" y1="300" x2="300" y2="380" stroke="#00F3FF" strokeWidth="3" opacity="0.5" />

            {/* Tree branches */}
            {/* Easy - Bottom */}
            <circle cx="300" cy="300" r="20" fill="#00F3FF" opacity="0.3" />
            <circle cx="300" cy="300" r="15" fill="none" stroke="#00F3FF" strokeWidth="2" opacity="0.6" />

            {/* Medium - Middle left */}
            <line x1="300" y1="280" x2="200" y2="200" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <circle cx="200" cy="200" r="20" fill="#8B5CF6" opacity="0.3" />
            <circle cx="200" cy="200" r="15" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.6" />

            {/* Medium - Middle right */}
            <line x1="300" y1="280" x2="400" y2="200" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <circle cx="400" cy="200" r="20" fill="#8B5CF6" opacity="0.3" />
            <circle cx="400" cy="200" r="15" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.6" />

            {/* Hard - Top left */}
            <line x1="200" y1="180" x2="120" y2="80" stroke="#FF006E" strokeWidth="2" opacity="0.4" />
            <circle cx="120" cy="80" r="20" fill="#FF006E" opacity="0.3" />
            <circle cx="120" cy="80" r="15" fill="none" stroke="#FF006E" strokeWidth="2" opacity="0.6" />

            {/* Hard - Top center */}
            <line x1="300" y1="260" x2="300" y2="100" stroke="#FF006E" strokeWidth="2" opacity="0.4" />
            <circle cx="300" cy="100" r="20" fill="#FF006E" opacity="0.3" />
            <circle cx="300" cy="100" r="15" fill="none" stroke="#FF006E" strokeWidth="2" opacity="0.6" />

            {/* Hard - Top right */}
            <line x1="400" y1="180" x2="480" y2="80" stroke="#FF006E" strokeWidth="2" opacity="0.4" />
            <circle cx="480" cy="80" r="20" fill="#FF006E" opacity="0.3" />
            <circle cx="480" cy="80" r="15" fill="none" stroke="#FF006E" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>

        {/* Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {rounds.map((round) => (
            <motion.div
              key={round.id}
              className="hud-card group cursor-pointer"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: round.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{round.icon}</div>
              <h3 className="text-xl font-cyber font-bold mb-2" style={{ color: round.color }}>
                {round.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">{round.difficulty}</p>

              <div className="space-y-2 mb-4">
                {round.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: round.color }} />
                    {metric}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-dark-panel rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: round.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(round.id / 3) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Panel */}
        <motion.div
          className="hud-card max-w-2xl mx-auto p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cyber font-bold mb-6 text-neon-cyan">Evaluation Criteria</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✔</div>
              <div>
                <h4 className="font-cyber font-bold text-neon-cyan mb-1">Correctness Check</h4>
                <p className="text-gray-400 text-sm">All test cases must pass. Your logic must be flawless.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">⏱</div>
              <div>
                <h4 className="font-cyber font-bold text-neon-purple mb-1">Time Complexity</h4>
                <p className="text-gray-400 text-sm">Optimal runtime is crucial. O(n) is better than O(n²).</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">💾</div>
              <div>
                <h4 className="font-cyber font-bold text-neon-magenta mb-1">Space Complexity</h4>
                <p className="text-gray-400 text-sm">Memory efficiency matters. Minimize auxiliary space.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DSAMasters
