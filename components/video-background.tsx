"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface VideoBackgroundProps {
  videoKey?: string
  role?: string
  overlay?: "light" | "dark" | "none"
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  zoomEffect?: boolean
  children?: React.ReactNode
}

export function VideoBackground({
  videoKey,
  role,
  overlay = "dark",
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  zoomEffect = true,
  children,
}: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videosLoaded, setVideosLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const videoSequence = [
    { id: "dark-illusion", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-illusion.webm-UoUddLZHa5k6IIrTq85aL0CcFqzkz1.mov", overlay: 40 },
    { id: "illusion-flow", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/illusion-flow.webm-8oQgKYegVgnqf89fO4NNBje7bbarKJ.mp4", overlay: 35 },
    { id: "metallic-stripes", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metallic-stripes.webm-Api5SSbAvoXIz340N879rXbmthpJbv.mp4", overlay: 45 },
    { id: "geometric-bg", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geometric-bg.webm-LZw9KZZ9hRVwLeY4ujRPeirZ53vBZx.mp4", overlay: 40 },
  ]

  const totalVideos = videoSequence.length

  const videoIndex = useTransform(smoothProgress, [0, 1], [0, totalVideos - 0.001])

  const scale = useTransform(smoothProgress, [0, 0.5, 1], zoomEffect ? [1.2, 1.0, 1.2] : [1.0, 1.0, 1.0])

  useEffect(() => {
    const unsubscribe = videoIndex.onChange((latest) => {
      const newIndex = Math.floor(latest)
      if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < totalVideos) {
        setCurrentVideoIndex(newIndex)
      }
    })

    return unsubscribe
  }, [videoIndex, currentVideoIndex, totalVideos])

  useEffect(() => {
    const loadVideos = async () => {
      const promises = videoRefs.current.map((video) => {
        if (video) {
          return new Promise((resolve) => {
            video.addEventListener("loadeddata", resolve, { once: true })
            video.load()
          })
        }
        return Promise.resolve()
      })

      await Promise.all(promises)
      setVideosLoaded(true)
    }

    loadVideos()
  }, [])

  useEffect(() => {
    if (!videosLoaded) return

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [currentVideoIndex, videosLoaded])

  const overlayClasses = {
    light: "bg-white/20",
    dark: "bg-black/40",
    none: "",
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Video Backgrounds */}
      <div className="absolute inset-0 z-0">
        {videoSequence.map((video, index) => (
          <motion.div
            key={video.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentVideoIndex ? 1 : 0,
              scale: index === currentVideoIndex ? scale : 1.1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover"
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline
              preload="metadata"
              style={{
                filter: "brightness(0.8) contrast(1.1) saturate(0.9)",
              }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </motion.div>
        ))}

        {/* Overlay */}
        {overlay !== "none" && <div className={`absolute inset-0 ${overlayClasses[overlay]} z-10`} />}

        {/* Metallic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  )
}
