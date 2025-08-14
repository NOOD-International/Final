"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollVideoBackgroundProps {
  onCityChange?: (city: string, section: number) => void
}

export function ScrollVideoBackground({ onCityChange }: ScrollVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentCity, setCurrentCity] = useState("home")
  const [currentSection, setCurrentSection] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Extended city transitions with sections
  const cityTransitions = [
    { city: "home", start: 0, end: 8, sections: 1 },
    { city: "abu-dhabi", start: 8, end: 32, sections: 3 },
    { city: "london", start: 32, end: 56, sections: 3 },
    { city: "san-jose", start: 56, end: 80, sections: 3 },
    { city: "islamabad", start: 80, end: 100, sections: 3 },
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      video.currentTime = 0
    }

    const handleScroll = () => {
      if (!video || !containerRef.current) return

      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollPercentage = Math.min((scrollTop / documentHeight) * 100, 100)

      // Map scroll percentage to video time (assuming 30 second video)
      const videoDuration = video.duration || 30
      const videoTime = (scrollPercentage / 100) * videoDuration

      // Update video time based on scroll
      if (Math.abs(video.currentTime - videoTime) > 0.1) {
        video.currentTime = videoTime
      }

      // Determine current city and section based on scroll
      const currentTransition = cityTransitions.find(
        (transition) => scrollPercentage >= transition.start && scrollPercentage < transition.end,
      )

      if (currentTransition) {
        const cityProgress =
          (scrollPercentage - currentTransition.start) / (currentTransition.end - currentTransition.start)
        const section = Math.floor(cityProgress * currentTransition.sections)

        if (currentTransition.city !== currentCity || section !== currentSection) {
          setCurrentCity(currentTransition.city)
          setCurrentSection(section)
          onCityChange?.(currentTransition.city, section)
        }
      }
    }

    video.addEventListener("loadeddata", handleLoadedData)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentCity, currentSection, onCityChange])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-0">
      {/* Loading state */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black animate-pulse" />
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
        style={{
          filter: "brightness(0.7) contrast(1.2) saturate(1.3)",
        }}
      >
        <source src="/videos/cloud-transition.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 pointer-events-none" />

      {/* City progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {cityTransitions.map((transition) => (
          <div
            key={transition.city}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentCity === transition.city ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100"
          style={{
            width: `${Math.min((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
          }}
        />
      </div>
    </div>
  )
}
