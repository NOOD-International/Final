"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { getVideoByRole } from "@/lib/videoConfig"

interface VideoBackgroundProps {
  role: string
  className?: string
  children?: React.ReactNode
}

interface VideoConfig {
  src: string
  overlay: number
}

export function VideoBackground({ role, className = "", children }: VideoBackgroundProps) {
  const [videoConfig, setVideoConfig] = useState<VideoConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    async function loadVideo() {
      try {
        setIsLoading(true)
        setError(null)
        const config = await getVideoByRole(role)
        if (config) {
          setVideoConfig(config)
        } else {
          setError(`No video configuration found for role: ${role}`)
        }
      } catch (err) {
        setError(`Failed to load video configuration: ${err}`)
        console.error("Video loading error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    loadVideo()
  }, [role])

  useEffect(() => {
    if (videoRef.current && videoConfig) {
      const video = videoRef.current

      const handleLoadedData = () => {
        video.play().catch(console.error)
      }

      video.addEventListener("loadeddata", handleLoadedData)

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
      }
    }
  }, [videoConfig])

  if (isLoading) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
        {children}
      </div>
    )
  }

  if (error || !videoConfig) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
        {children}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoConfig.src}
        autoPlay
        muted
        loop
        playsInline
        style={{
          filter: "brightness(1.2) contrast(1.1)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-blue-900/20"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${videoConfig.overlay / 100})`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default VideoBackground
