import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroProps {
  onExplore?: () => void
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate title with typewriter effect
    const title = titleRef.current
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      )
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
      )
    }

    // Animate buttons
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.9,
          ease: 'power2.out',
          stagger: 0.2,
        }
      )
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-magenta/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="text-center z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-cyber font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta leading-tight"
        >
          TECHFEST
          <br />
          <span className="text-4xl md:text-5xl">2026</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Embark on a futuristic journey through cyber-space. Compete. Innovate. Dominate.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.button
            className="cyber-button bg-neon-cyan/10 border-neon-cyan hover:bg-neon-cyan/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
          >
            Explore Events
          </motion.button>

          <motion.button
            className="cyber-button-secondary bg-neon-magenta/10 border-neon-magenta hover:bg-neon-magenta/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-neon-cyan/30 rounded-lg"
        animate={{
          rotate: 360,
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-neon-magenta/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  )
}

export default Hero
