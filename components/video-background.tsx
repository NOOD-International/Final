"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { getVideoByRole } from "@/lib/videoConfig"

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
  role = "hero",
  overlay = "dark",
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  zoomEffect = true,
  children,
}: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scale = useTransform(smoothProgress, [0, 0.5, 1], zoomEffect ? [1.2, 1.0, 1.2] : [1.0, 1.0, 1.0])

  const videoConfig = getVideoByRole(role)

  useEffect(() => {
    const video = videoRef.current
    if (video && videoConfig) {
      const handleLoadedData = () => {
        setVideoLoaded(true)
        if (autoPlay) {
          video.play().catch(() => {
            // Silently handle autoplay failures
          })
        }
      }

      const handleError = () => {
        console.warn(`Failed to load video for role: ${role}`)
      }

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("error", handleError)
      video.load()

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("error", handleError)
      }
    }
  }, [videoConfig, autoPlay, role])

  const overlayClasses = {
    light: "bg-white/10",
    dark: "bg-black/20",
    none: "",
  }

  if (!videoConfig) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="relative z-30">{children}</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          style={{
            filter: "brightness(1.2) contrast(1.1) saturate(0.9)",
            scale: scale,
          }}
        >
          <source src={videoConfig.src} type="video/mp4" />
        </motion.video>

        {/* Overlay */}
        {overlay !== "none" && (
          <div
            className={`absolute inset-0 ${overlayClasses[overlay]} z-10`}
            style={{ opacity: videoConfig.overlay / 200 }}
          />
        )}

        {/* Metallic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  )
}
