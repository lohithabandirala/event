import React, { useRef } from 'react'
import Hero from '../components/Hero'
import Roadmap from '../components/Roadmap'
import DSAMasters from '../components/DSAMasters'
import EthiTechMania from '../components/EthiTechMania'
import Cipherville from '../components/Cipherville'
import Registration from '../components/Registration'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Starfield from '../components/Starfield'

const Home: React.FC = () => {
  const roadmapRef = useRef<HTMLDivElement>(null)

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-deep-dark text-white overflow-hidden">
      <Starfield particleCount={150} />

      {/* Main content */}
      <Hero onExplore={scrollToRoadmap} />

      <div ref={roadmapRef}>
        <Roadmap />
      </div>

      <DSAMasters />
      <EthiTechMania />
      <Cipherville />
      <Registration />
      <Team />
      <Footer />
    </div>
  )
}

export default Home
