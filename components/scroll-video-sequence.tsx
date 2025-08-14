"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { VideoBackground } from "./video-background"
import { HeroContentSection } from "./hero-content-section"
import { CountryContentSection } from "./country-content-section"

interface VideoSection {
  id: string
  videoKey: string
  startPercent: number
  endPercent: number
  content?: "hero" | "country"
  countryCode?: string
}

const videoSections: VideoSection[] = [
  { id: "hero", videoKey: "hero", startPercent: 0, endPercent: 20, content: "hero" },
  { id: "transition-1", videoKey: "transition", startPercent: 20, endPercent: 25 },
  { id: "uae", videoKey: "uae", startPercent: 25, endPercent: 45, content: "country", countryCode: "AE" },
  { id: "transition-2", videoKey: "transition", startPercent: 45, endPercent: 50 },
  { id: "uk", videoKey: "uk", startPercent: 50, endPercent: 65, content: "country", countryCode: "GB" },
  { id: "transition-3", videoKey: "transition", startPercent: 65, endPercent: 70 },
  { id: "usa", videoKey: "usa", startPercent: 70, endPercent: 85, content: "country", countryCode: "US" },
  { id: "transition-4", videoKey: "transition", startPercent: 85, endPercent: 90 },
  {
    id: "pakistan",
    videoKey: "pakistan",
    startPercent: 90,
    endPercent: 100,
    content: "country",
    countryCode: "PK",
  },
]

export function ScrollVideoSequence() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(videoSections[0])
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollTop = window.scrollY
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / scrollHeight, 1) * 100

      setScrollProgress(progress)

      // Find active section based on scroll progress
      const currentSection = videoSections.find(
        (section) => progress >= section.startPercent && progress < section.endPercent,
      )

      if (currentSection && currentSection.id !== activeSection.id) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection.id])

  const scrollToSection = (sectionId: string) => {
    const section = videoSections.find((s) => s.id === sectionId)
    if (!section || !containerRef.current) return

    const scrollHeight = containerRef.current.scrollHeight - window.innerHeight
    const targetScroll = (section.startPercent / 100) * scrollHeight

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600 z-50"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          scaleX: scrollProgress / 100,
        }}
      />

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {videoSections
          .filter((section) => section.content)
          .map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection.id === section.id
                  ? "bg-gray-400 border-gray-400 scale-125"
                  : "bg-transparent border-gray-600 hover:border-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
      </div>

      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.videoKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <VideoBackground
              videoKey={activeSection.videoKey}
              overlay="dark"
              className="w-full h-full object-cover"
              zoomEffect={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Sections */}
      <motion.div className="relative z-10" style={{ opacity }}>
        {videoSections.map((section, index) => (
          <motion.div
            key={section.id}
            className="min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              opacity: activeSection.id === section.id ? 1 : 0.7,
              transition: "opacity 1s ease-in-out",
            }}
          >
            {section.content === "hero" && <HeroContentSection />}
            {section.content === "country" && section.countryCode && (
              <CountryContentSection countryCode={section.countryCode} />
            )}
            {!section.content && <div className="min-h-screen" />}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
