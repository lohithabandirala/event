import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '𝕏', label: 'Twitter', url: '#' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '📱', label: 'Instagram', url: '#' },
  ]

  const quickLinks = [
    { label: 'Events', url: '#events' },
    { label: 'Registration', url: '#registration' },
    { label: 'Team', url: '#team' },
    { label: 'Contact', url: '#contact' },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-neon-cyan/20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#00F3FF_25%,#00F3FF_50%,transparent_50%,transparent_75%,#00F3FF_75%,#00F3FF)] bg-[length:40px_40px] animate-slow-slide" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-cyber font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
                TECHFEST 2026
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ultimate platform for tech enthusiasts to showcase their skills, compete globally, and innovate for tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-cyber font-bold text-neon-cyan mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 4 }}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    → {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-cyber font-bold text-neon-magenta mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 contact@techfest2026.com</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>📍 Your City, Your College</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-cyan/20 my-8" />

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Icons */}
          <div className="flex gap-6 mb-6 md:mb-0">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                title={social.label}
                className="text-2xl text-neon-cyan hover:text-neon-magenta transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-sm text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} TechFest. All rights reserved. <br className="md:hidden" />
            <span className="text-neon-cyan">[ Crafted with ♥ in Cyber Space ]</span>
          </motion.p>
        </div>
      </div>

      {/* Glowing footer line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  )
}

export default Footer
