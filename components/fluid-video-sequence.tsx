"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { getVideoSequence } from "@/lib/videoConfig"
import { Building2, TrendingUp, MapPin, Globe, Phone, Mail, Star, Heart, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { FluidTextReveal, FluidWordReveal } from "@/components/fluid-text-reveal"

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
          video.play().catch(() => {
            // Silently handle autoplay failures
          })
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
          video.play().catch(() => {
            // Silently handle autoplay failures
          })
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

        {/* Welcome Section */}
        <motion.section
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
              Welcome to NOOD
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover exceptional international properties with our expert guidance and comprehensive investment
              solutions.
            </motion.p>
          </div>
        </motion.section>

        {/* Abu Dhabi Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇦🇪</span>
                  <Badge className="bg-emerald-500 text-black">Abu Dhabi Headquarters</Badge>
                </div>
                <FluidWordReveal
                  text="Abu Dhabi Real Estate Capital"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  The heart of UAE's property market - where tradition meets innovation
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD Abu Dhabi (Headquarters)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Maqam Tower, Al Maryah Island</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+971 56 7575 075</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">admin@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Abu Dhabi Market Performance 2024"
                  className="text-3xl font-bold text-white mb-4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Capital Appreciation", value: "12.5%", icon: <TrendingUp className="w-6 h-6" /> },
                  { title: "Rental Yields", value: "8.2%", icon: <Building2 className="w-6 h-6" /> },
                  { title: "Tax Benefits", value: "0%", icon: <Star className="w-6 h-6" /> },
                  { title: "Market Growth", value: "25%", icon: <Globe className="w-6 h-6" /> },
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="text-center hover:scale-105 transition-transform">
                      <div className="text-emerald-400 mb-4 flex justify-center">{highlight.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                      <div className="text-lg font-semibold text-white/80 mb-2">{highlight.title}</div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>
          </div>
        </motion.section>

        {/* London Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇬🇧</span>
                  <Badge className="bg-blue-500 text-white">London Office</Badge>
                </div>
                <FluidWordReveal
                  text="London Bridge to Success"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Escape London's rain and taxes for UAE's sunshine and superior returns
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD London Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Canary Wharf, London</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+44 20 7946 0958</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">london@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="London vs UAE Investment Reality"
                  className="text-3xl font-bold text-white mb-4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-blue-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                        🇬🇧 London Reality
                        <TrendingDown className="w-6 h-6 ml-2 text-red-400" />
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-red-400 font-bold">28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-red-400 font-bold">3-4%</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                        🇦🇪 UAE Advantage
                        <TrendingUp className="w-6 h-6 ml-2 text-green-400" />
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-green-400 font-bold">0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-green-400 font-bold">6-9%</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              </div>
            </FluidGlassContainer>
          </div>
        </motion.section>

        {/* San Jose Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇺🇸</span>
                  <Badge className="bg-purple-500 text-white">Silicon Valley Office</Badge>
                </div>
                <FluidWordReveal
                  text="Silicon Valley to UAE"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Tech professionals diversifying beyond volatile stocks with stable real estate
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD San Jose Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Downtown San Jose, CA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+1 408 555 0123</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">sanjose@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Smart Diversification for Tech Professionals"
                  className="text-3xl font-bold text-white mb-4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Portfolio Diversification",
                    description: "Reduce dependency on volatile tech stocks",
                    icon: "📊",
                    color: "from-blue-500/20 to-purple-500/20",
                    metric: "8-12% ROI",
                  },
                  {
                    title: "Tax Optimization",
                    description: "UAE's 0% capital gains tax vs California's 13.3%",
                    icon: "💰",
                    color: "from-green-500/20 to-emerald-500/20",
                    metric: "Save 30%+",
                  },
                  {
                    title: "Global Mobility",
                    description: "Golden visa programs for tech professionals",
                    icon: "🌍",
                    color: "from-purple-500/20 to-pink-500/20",
                    metric: "10 Year Visa",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <GlassmorphicCard className="h-full text-center">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl`} />
                      <div className="relative z-10">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{item.description}</p>
                        <div className="text-2xl font-bold text-white">{item.metric}</div>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>
          </div>
        </motion.section>

        {/* Islamabad Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇵🇰</span>
                  <Badge className="bg-green-500 text-white">Islamabad Office</Badge>
                </div>
                <FluidWordReveal
                  text="Pakistan to UAE Bridge"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Cultural familiarity meets investment opportunity in the heart of the Middle East
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD Islamabad Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Blue Area, Islamabad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+92 51 111 6663</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">islamabad@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Cultural Comfort Meets Investment Excellence"
                  className="text-3xl font-bold text-white mb-4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-green-400" />
                        Cultural Comfort
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>Islamic banking and Sharia-compliant investments</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>2M+ Pakistani community in UAE</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotateY: 15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <Globe className="w-6 h-6 mr-2 text-yellow-400" />
                        Investment Benefits
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Golden Visa Duration:</span>
                          <span className="text-green-400 font-bold">10 Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-green-400 font-bold">6-9%</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              </div>
            </FluidGlassContainer>
          </div>
        </motion.section>

        {/* Russia Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇷🇺</span>
                  <Badge className="bg-red-500 text-white">Russia Market</Badge>
                </div>
                <FluidWordReveal
                  text="Russia Luxury Real Estate"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Exclusive luxury properties in Russia's most prestigious locations
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD Russia Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Moscow & St. Petersburg</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+7 495 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">russia@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal text="Russia Luxury Market 2024" className="text-3xl font-bold text-white mb-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Luxury Market", value: "€2.8B", icon: <TrendingUp className="w-6 h-6" /> },
                  { title: "Investment Yield", value: "8.5%", icon: <Building2 className="w-6 h-6" /> },
                  { title: "Foreign Interest", value: "35%", icon: <Star className="w-6 h-6" /> },
                  { title: "Market Stability", value: "High", icon: <Globe className="w-6 h-6" /> },
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="text-center hover:scale-105 transition-transform">
                      <div className="text-red-400 mb-4 flex justify-center">{highlight.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                      <div className="text-lg font-semibold text-white/80 mb-2">{highlight.title}</div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
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
              Your Future Awaits
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join thousands of satisfied investors who have found their perfect properties through NOOD International.
            </motion.p>

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
          </div>
        </motion.section>
      </div>
    </div>
  )
}
