"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Building2, Globe, TrendingUp, Shield, Award, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NoodHeroContentProps {
  currentCity: string
  currentSection: number
}

export function NoodHeroContent({ currentCity, currentSection }: NoodHeroContentProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  const phrases = [
    "Premium Abu Dhabi Properties",
    "Global Investment Opportunities",
    "Transparent Real Estate Solutions",
    "Guaranteed Escrow Protection",
    "Luxury International Properties",
  ]

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases])

  // Only show hero content when on home section
  if (currentCity !== "home") return null

  return (
    <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* NOOD Branding */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-4 mb-6"
            >
              <Building2 className="w-12 h-12 text-white" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                NOOD
              </h1>
              <Globe className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-2xl md:text-4xl font-light text-white/90">International Properties</h2>

            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-blue-300 font-medium">
                {displayText}
                <span className="animate-pulse text-white">|</span>
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white">Where Dreams Meet Reality</h3>

            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover premium real estate opportunities across the globe with NOOD's expert guidance and transparent
              investment solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Premium Properties", "Global Reach", "Expert Guidance", "Secure Investments"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="bg-black/30 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center"
                >
                  <p className="text-white font-medium text-sm md:text-base">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/consultation">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              <Badge variant="secondary" className="bg-black/40 text-white border-white/20">
                <Shield className="w-4 h-4 mr-2" />
                Escrow Protected
              </Badge>
              <Badge variant="secondary" className="bg-black/40 text-white border-white/20">
                <MapPin className="w-4 h-4 mr-2" />
                Global Presence
              </Badge>
              <Badge variant="secondary" className="bg-black/40 text-white border-white/20">
                <Award className="w-4 h-4 mr-2" />
                Premium Service
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white/60 text-sm">Scroll to explore cities</p>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
