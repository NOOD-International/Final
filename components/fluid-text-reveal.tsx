"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FluidTextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function FluidTextReveal({ text, className = "", delay = 0 }: FluidTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isVisible ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text}
      </motion.div>
    </motion.div>
  )
}

interface FluidWordRevealProps {
  text: string
  className?: string
  delay?: number
}

export function FluidWordReveal({ text, className = "", delay = 0 }: FluidWordRevealProps) {
  const words = text.split(" ")

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
