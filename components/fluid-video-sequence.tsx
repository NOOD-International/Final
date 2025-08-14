"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { getVideoSequence } from "@/lib/videoConfig"

interface FluidVideoSequenceProps {
  children?: React.ReactNode
}

export function FluidVideoSequence({ children }: FluidVideoSequenceProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  const videoSequence = getVideoSequence()
  const totalVideos = videoSequence.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const currentVideo = videoSequence[currentVideoIndex]

  const scaleTransform = useTransform(smoothProgress, [0, 1], [1.2, 1.0])

  // Calculate video index based on scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      const progress = latest * 100
      setScrollProgress(progress)

      // Calculate which video should be active based on scroll
      const videoIndex = Math.floor((progress / 100) * totalVideos)
      const clampedIndex = Math.max(0, Math.min(videoIndex, totalVideos - 1))

      if (clampedIndex !== currentVideoIndex) {
        setCurrentVideoIndex(clampedIndex)
      }
    })

    return unsubscribe
  }, [smoothProgress, currentVideoIndex, totalVideos])

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Video management
  const handleVideoLoad = useCallback(
    (index: number) => {
      const video = videoRefs.current[index]
      if (video) {
        video.currentTime = 0
        if (index === currentVideoIndex) {
          video.play().catch(console.warn)
        }
      }
    },
    [currentVideoIndex],
  )

  // Switch videos smoothly
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(console.warn)
        } else {
          video.pause()
        }
      }
    })
  }, [currentVideoIndex])

  const getVideoTransform = (index: number) => {
    const isActive = index === currentVideoIndex
    const isPrev = index === currentVideoIndex - 1
    const isNext = index === currentVideoIndex + 1

    if (isActive) {
      return {
        scale: scaleTransform,
        opacity: 1,
        zIndex: 2,
      }
    } else if (isPrev || isNext) {
      return {
        scale: 1.1,
        opacity: 0.3,
        zIndex: 1,
      }
    } else {
      return {
        scale: 1.0,
        opacity: 0,
        zIndex: 0,
      }
    }
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-600 z-50 origin-left"
        style={{
          scaleX: smoothProgress,
        }}
      />

      {/* Video Sequence Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {videoSequence.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              index === currentVideoIndex
                ? "bg-gray-300 shadow-lg shadow-gray-300/50"
                : index < currentVideoIndex
                  ? "bg-gray-500"
                  : "bg-gray-700 border border-gray-600"
            }`}
            animate={{
              scale: index === currentVideoIndex ? 1.2 : 1,
              opacity: index === currentVideoIndex ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Video Background Container */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {videoSequence.map((video, index) => {
          const transform = getVideoTransform(index)

          return (
            <motion.div
              key={video.id}
              className="absolute inset-0"
              style={{
                zIndex: transform.zIndex,
              }}
              animate={{
                opacity: transform.opacity,
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                src={video.src}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => handleVideoLoad(index)}
                style={{
                  filter: "brightness(0.7) contrast(1.2) saturate(0.9)",
                  scale: transform.scale,
                }}
                animate={{
                  scale: index === currentVideoIndex ? [1.2, 1.0] : 1.1,
                }}
                transition={{
                  duration: index === currentVideoIndex ? 3.0 : 0.8,
                  ease: "easeOut",
                }}
              />

              {/* Video Overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                style={{
                  opacity: video.overlay / 100,
                }}
              />
            </motion.div>
          )
        })}

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            opacity: isScrolling ? 0.3 : 1,
            y: isScrolling ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-300">
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ borderColor: isScrolling ? "#9CA3AF" : "#6B7280" }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <span className="text-xs font-medium tracking-wider">SCROLL</span>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {children}

        {/* Create sections for each video */}
        {videoSequence.map((video, index) => (
          <motion.section
            key={video.id}
            className="min-h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto px-6 text-center">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {index === 0 && "Welcome to NOOD"}
                {index === 1 && "Global Properties"}
                {index === 2 && "Premium Investments"}
                {index === 3 && "Your Future Awaits"}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {index === 0 &&
                  "Discover exceptional international properties with our expert guidance and comprehensive investment solutions."}
                {index === 1 &&
                  "From Abu Dhabi to London, San Jose to Islamabad - explore premium real estate opportunities worldwide."}
                {index === 2 &&
                  "Maximize your returns with our advanced ROI calculator and personalized investment strategies."}
                {index === 3 &&
                  "Join thousands of satisfied investors who have found their perfect properties through NOOD International."}
              </motion.p>

              {index === 3 && (
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg font-semibold hover:from-gray-500 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Journey
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-400 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us Today
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
