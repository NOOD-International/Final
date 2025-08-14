"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const phrases = [
  "Premium Abu Dhabi Properties",
  "Global Investment Opportunities",
  "Transparent Real Estate Solutions",
  "Guaranteed Escrow Protection",
]

export function TypingHero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhrase]
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
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  return (
    <div className="space-y-6">
      <motion.h1
        className="nebula-title text-center leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block text-2xl md:text-4xl lg:text-5xl font-light mb-2">Welcome to</span>
        <span className="block text-4xl md:text-6xl lg:text-8xl font-bold mb-4">NOOD International</span>
        <span className="block text-xl md:text-3xl lg:text-4xl font-medium text-silver-300">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </motion.h1>
    </div>
  )
}
