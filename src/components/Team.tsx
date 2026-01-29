import React from 'react'
import { motion } from 'framer-motion'

interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Alex Chen', role: 'Event Lead', avatar: '👨‍💻' },
  { id: 2, name: 'Sarah Patel', role: 'Technical Lead', avatar: '👩‍💻' },
  { id: 3, name: 'Mike Johnson', role: 'Creative Director', avatar: '🎨' },
  { id: 4, name: 'Emma Wilson', role: 'Coordinator', avatar: '📋' },
]

const Team: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              THE TEAM
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Meet the brilliant minds behind TechFest 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="hud-card p-6 text-center hover:shadow-neon-cyan cursor-pointer group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4 group-hover:animate-float transition-all">{member.avatar}</div>
              <h3 className="text-lg font-cyber font-bold text-neon-cyan mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>

              <div className="mt-4 flex gap-3 justify-center">
                <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-neon-cyan hover:text-neon-magenta">
                  🔗
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-neon-cyan hover:text-neon-magenta">
                  📧
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
