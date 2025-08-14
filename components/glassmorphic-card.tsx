"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassmorphicCard({ children, className = "", hover = true }: GlassmorphicCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-black/40 backdrop-blur-md
        border border-gray-700/30
        shadow-lg shadow-black/20
        ${hover ? "hover:bg-black/50 hover:border-gray-600/40" : ""}
        transition-all duration-300
        ${className}
      `}
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      {/* Metallic shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-600/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

interface FluidGlassContainerProps {
  children: ReactNode
  className?: string
}

export function FluidGlassContainer({ children, className = "" }: FluidGlassContainerProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-3xl
        bg-black/30 backdrop-blur-lg
        border border-gray-700/20
        shadow-2xl shadow-black/30
        ${className}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-700/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(107, 114, 128, 0.1), transparent, rgba(75, 85, 99, 0.1))",
            "linear-gradient(225deg, rgba(75, 85, 99, 0.1), transparent, rgba(107, 114, 128, 0.1))",
            "linear-gradient(45deg, rgba(107, 114, 128, 0.1), transparent, rgba(75, 85, 99, 0.1))",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">{children}</div>
    </motion.div>
  )
}
