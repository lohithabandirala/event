import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  fullName: string
  email: string
  phone: string
  college: string
  branch: string
  year: string
  teamName: string
  memberCount: string
  events: string[]
}

const Registration: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    year: '',
    teamName: '',
    memberCount: '',
    events: [],
  })

  const events = [
    { id: 'dsa', name: 'DSA Masters', icon: '🌳' },
    { id: 'ethitech', name: 'Ethi Tech Mania', icon: '⚖️' },
    { id: 'cipher', name: 'Cipherville', icon: '🔍' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEventToggle = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(e => e !== eventId)
        : [...prev.events, eventId],
    }))
  }

  const isStep1Valid = formData.fullName && formData.email && formData.phone
  const isStep2Valid = formData.college && formData.branch && formData.year
  const isStep3Valid = formData.teamName && formData.memberCount && formData.events.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isStep3Valid) {
      console.log('Form submitted:', formData)
      // Here you would typically send the data to a backend
      alert('Registration submitted successfully!')
    }
  }

  const nextStep = () => {
    if (step === 1 && isStep1Valid) setStep(2)
    else if (step === 2 && isStep2Valid) setStep(3)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full filter blur-3xl -translate-y-1/2" />
      </div>

      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              REGISTER NOW
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Join us for an unforgettable experience</p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-deep-dark border border-neon-cyan/30 rounded-lg p-8 backdrop-blur-sm hud-card"
        >
          {/* Step Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                  s === step
                    ? 'bg-neon-cyan text-deep-dark'
                    : s < step
                      ? 'bg-neon-magenta text-deep-dark'
                      : 'bg-gray-700 text-gray-300'
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-2xl font-cyber font-bold mb-6 text-neon-cyan">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-cyan/50 rounded text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-cyan/50 rounded text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-cyan/50 rounded text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: College Information */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-2xl font-cyber font-bold mb-6 text-neon-magenta">College Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">College Name</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-magenta/50 rounded text-white focus:outline-none focus:border-neon-magenta focus:ring-1 focus:ring-neon-magenta"
                      placeholder="Enter your college name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Branch</label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-magenta/50 rounded text-white focus:outline-none focus:border-neon-magenta focus:ring-1 focus:ring-neon-magenta"
                      placeholder="e.g., Computer Science"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Year of Study</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-neon-magenta/50 rounded text-white focus:outline-none focus:border-neon-magenta focus:ring-1 focus:ring-neon-magenta"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
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
                <h3 className="text-2xl font-cyber font-bold mb-6 text-cyber-violet">Team & Events</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Team Name</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-cyber-violet/50 rounded text-white focus:outline-none focus:border-cyber-violet focus:ring-1 focus:ring-cyber-violet"
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Number of Members</label>
                    <select
                      name="memberCount"
                      value={formData.memberCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-cyber-violet/50 rounded text-white focus:outline-none focus:border-cyber-violet focus:ring-1 focus:ring-cyber-violet"
                      required
                    >
                      <option value="">Select</option>
                      <option value="1">1 Member</option>
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                      <option value="5">5 Members</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-4 text-gray-300">Select Events</label>
                  <div className="grid grid-cols-1 gap-3">
                    {events.map(event => (
                      <motion.button
                        key={event.id}
                        type="button"
                        onClick={() => handleEventToggle(event.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded border-2 transition-all text-left ${
                          formData.events.includes(event.id)
                            ? 'border-cyber-violet bg-cyber-violet/20 text-cyber-violet'
                            : 'border-gray-600 bg-gray-900 text-gray-300 hover:border-cyber-violet/50'
                        }`}
                      >
                        <span className="text-2xl mr-3">{event.icon}</span>
                        <span className="font-semibold">{event.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <motion.button
                type="button"
                onClick={prevStep}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={step === 1}
                className="flex-1 px-6 py-3 border border-neon-cyan text-neon-cyan rounded font-semibold hover:bg-neon-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Back
              </motion.button>
              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={
                    (step === 1 && !isStep1Valid) ||
                    (step === 2 && !isStep2Valid)
                  }
                  className="flex-1 px-6 py-3 bg-neon-cyan text-deep-dark rounded font-semibold hover:bg-neon-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!isStep3Valid}
                  className="flex-1 px-6 py-3 bg-neon-magenta text-deep-dark rounded font-semibold hover:bg-neon-magenta/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Submit
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Registration
