import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  teamName: string
  teamLeader: string
  email: string
  phone: string
  collegeName: string
  eventSelection: string[]
  experience: string
}

const Registration: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    teamLeader: '',
    email: '',
    phone: '',
    collegeName: '',
    eventSelection: [],
    experience: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const events = [
    { id: 'dsa', name: 'DSA Masters', icon: '🌳' },
    { id: 'ethi', name: 'Ethi Tech Mania', icon: '⚖️' },
    { id: 'cipher', name: 'Cipherville', icon: '🔍' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleEvent = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      eventSelection: prev.eventSelection.includes(eventId)
        ? prev.eventSelection.filter(e => e !== eventId)
        : [...prev.eventSelection, eventId],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 3) {
      setSubmitted(true)
      setTimeout(() => {
        setStep(1)
        setFormData({
          teamName: '',
          teamLeader: '',
          email: '',
          phone: '',
          collegeName: '',
          eventSelection: [],
          experience: '',
        })
        setSubmitted(false)
      }, 3000)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              REGISTRATION
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Join the ultimate tech fest experience</p>
        </div>

        {submitted ? (
          <motion.div
            className="hud-card p-12 text-center border-2 border-neon-cyan"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-6xl mb-4 animate-bounce">✓</div>
            <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-2">
              Registration Successful!
            </h3>
            <p className="text-gray-300">
              Welcome to the competition, {formData.teamName}. We'll contact you soon.
            </p>
          </motion.div>
        ) : (
          <div>
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-cyber font-bold cursor-pointer"
                    animate={{
                      backgroundColor: step >= s ? '#00F3FF' : 'transparent',
                      borderColor: step >= s ? '#00F3FF' : '#00F3FF',
                    }}
                    onClick={() => s < step && setStep(s)}
                  >
                    {s}
                  </motion.div>

                  {s < 3 && (
                    <motion.div
                      className="flex-1 h-1 mx-2 bg-dark-panel rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                    >
                      <motion.div
                        className="h-full bg-neon-cyan"
                        initial={{ width: 0 }}
                        animate={{ width: step > s ? '100%' : '0%' }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Team Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-cyber font-bold text-neon-cyan mb-6">Team Information</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Team Name *</label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-cyan/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan placeholder-gray-500"
                        placeholder="Enter your team name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Team Leader Name *</label>
                      <input
                        type="text"
                        name="teamLeader"
                        value={formData.teamLeader}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-cyan/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan placeholder-gray-500"
                        placeholder="Enter team leader's name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">College Name *</label>
                      <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-cyan/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-cyan placeholder-gray-500"
                        placeholder="Enter your college name"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-cyber font-bold text-neon-magenta mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-magenta/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-magenta placeholder-gray-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-magenta/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-magenta placeholder-gray-500"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-dark-panel border border-neon-magenta/30 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-magenta"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Event Selection */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-cyber font-bold text-neon-purple mb-6">Select Events</h3>

                  <p className="text-gray-400 text-sm mb-6">Choose at least one event to participate</p>

                  <div className="space-y-3">
                    {events.map((event) => (
                      <motion.button
                        key={event.id}
                        type="button"
                        onClick={() => toggleEvent(event.id)}
                        className={`w-full p-4 rounded border-2 transition-all text-left flex items-center gap-4 ${
                          formData.eventSelection.includes(event.id)
                            ? 'border-neon-purple bg-neon-purple/20'
                            : 'border-neon-purple/30 bg-dark-panel/50 hover:border-neon-purple/60'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.eventSelection.includes(event.id)}
                          readOnly
                          className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-2xl">{event.icon}</span>
                        <span className="font-cyber font-bold text-neon-purple flex-1">{event.name}</span>
                        {formData.eventSelection.includes(event.id) && (
                          <span className="text-neon-purple">✓</span>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {formData.eventSelection.length > 0 && (
                    <motion.div
                      className="mt-6 p-4 rounded bg-neon-purple/10 border border-neon-purple/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-sm text-gray-300">
                        <span className="text-neon-purple font-bold">Selected:</span> {formData.eventSelection.length} event(s)
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="cyber-button-secondary bg-neon-magenta/10 border-neon-magenta flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                )}

                <motion.button
                  type="submit"
                  className={`cyber-button bg-neon-cyan/10 border-neon-cyan flex-1 ${step === 3 ? '' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step === 3 ? 'Submit Registration' : 'Next'}
                </motion.button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default Registration
