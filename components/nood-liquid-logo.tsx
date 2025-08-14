"use client"

import { motion } from "framer-motion"

interface NoodLiquidLogoProps {
  className?: string
}

export function NoodLiquidLogo({ className = "w-12 h-12" }: NoodLiquidLogoProps) {
  return (
    <motion.div className={`relative ${className}`} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="25%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Liquid N */}
        <motion.path
          d="M15 20 Q25 15 35 25 L35 75 Q30 80 25 75 L25 45 Q20 40 15 45 Z"
          fill="url(#metallicGradient)"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Liquid O */}
        <motion.ellipse
          cx="50"
          cy="47.5"
          rx="12"
          ry="22.5"
          fill="none"
          stroke="url(#metallicGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Liquid O */}
        <motion.ellipse
          cx="70"
          cy="47.5"
          rx="12"
          ry="22.5"
          fill="none"
          stroke="url(#metallicGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        />

        {/* Liquid D */}
        <motion.path
          d="M85 25 Q95 25 95 47.5 Q95 70 85 70 L85 25 Z"
          fill="url(#metallicGradient)"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
        />

        {/* Flowing particles */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            r="1.5"
            fill="url(#metallicGradient)"
            initial={{
              cx: 10 + i * 15,
              cy: 85,
              opacity: 0,
            }}
            animate={{
              cx: [10 + i * 15, 90 - i * 10, 10 + i * 15],
              cy: [85, 10, 85],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}
