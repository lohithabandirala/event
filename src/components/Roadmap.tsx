import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
  { id: 1, name: 'DSA Masters', color: 'neon-cyan', icon: '🌳' },
  { id: 2, name: 'Ethi Tech Mania', color: 'neon-magenta', icon: '⚖️' },
  { id: 3, name: 'Cipherville', color: 'cyber-violet', icon: '🔍' },
]

const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!pathRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const path = pathRef.current
    const pathLength = path.getTotalLength()

    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength })

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    })
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
            EVENT ROADMAP
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Navigate through three extraordinary challenges that will test your skills and innovation.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <svg className="w-full h-96 mb-12" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
          {/* Animated path */}
          <path
            ref={pathRef}
            d="M 100,200 Q 250,100 400,200 T 700,200 L 900,200"
            stroke="url(#gradientLine)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F3FF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#FF006E" />
            </linearGradient>
          </defs>

          {/* Event nodes */}
          {events.map((event, index) => {
            const xPositions = [150, 500, 850]
            return (
              <g key={event.id}>
                <motion.circle
                  cx={xPositions[index]}
                  cy="200"
                  r="30"
                  fill="rgba(10, 14, 39, 0.8)"
                  stroke={`url(#grad-${event.id})`}
                  strokeWidth="2"
                  className="cursor-pointer hover:r-40 transition-all"
                  whileHover={{ scale: 1.2 }}
                />
                <defs>
                  <radialGradient id={`grad-${event.id}`}>
                    <stop offset="0%" stopColor={event.color === 'neon-cyan' ? '#00F3FF' : event.color === 'neon-magenta' ? '#FF006E' : '#9D4EDD'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={event.color === 'neon-cyan' ? '#00F3FF' : event.color === 'neon-magenta' ? '#FF006E' : '#9D4EDD'} stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                <text
                  x={xPositions[index]}
                  y="210"
                  textAnchor="middle"
                  fontSize="18"
                  fill="white"
                  className="pointer-events-none select-none"
                >
                  {event.icon}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="hud-card hover:shadow-neon-cyan cursor-pointer group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: event.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{event.icon}</div>
              <h3 className="text-lg font-cyber font-bold text-neon-cyan mb-2">
                {event.name}
              </h3>
              <p className="text-sm text-gray-400">Click to explore</p>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 to-neon-cyan/0 group-hover:from-neon-cyan/5 group-hover:to-neon-cyan/10 rounded-lg transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
