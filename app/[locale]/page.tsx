"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { FluidVideoSequence } from "@/components/fluid-video-sequence"
import { CountryContentSection } from "@/components/country-content-section"
import { VideoBackground } from "@/components/video-background"

const countries = [
  {
    id: "uae",
    name: "United Arab Emirates",
    city: "Abu Dhabi",
    description: "Luxury properties in the heart of the Middle East",
    videoIndex: 0,
  },
  {
    id: "uk",
    name: "United Kingdom",
    city: "London",
    description: "Prime real estate in the financial capital",
    videoIndex: 1,
  },
  {
    id: "usa",
    name: "United States",
    city: "San Jose",
    description: "Tech hub properties with high growth potential",
    videoIndex: 2,
  },
  {
    id: "pakistan",
    name: "Pakistan",
    city: "Islamabad",
    description: "Emerging market opportunities in South Asia",
    videoIndex: 3,
  },
  {
    id: "russia",
    name: "Russia",
    city: "Moscow",
    description: "Strategic investments in Eastern Europe",
    videoIndex: 0, // Fallback to first video
  },
]

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <FluidNavigation />

      {/* Video Background */}
      <VideoBackground videoIndex={countries[currentSection]?.videoIndex || 0} className="fixed inset-0 z-0" />

      {/* Fluid Video Sequence */}
      <FluidVideoSequence onSectionChange={setCurrentSection} countries={countries} />

      {/* Country Content Sections */}
      {countries.map((country, index) => (
        <CountryContentSection key={country.id} country={country} index={index} isActive={currentSection === index} />
      ))}

      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  )
}
