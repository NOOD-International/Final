"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Building2, Umbrella, Cpu, Mountain } from "lucide-react"

interface CityTransitionOverlayProps {
  currentCity: string
  isTransitioning: boolean
}

export function CityTransitionOverlay({ currentCity, isTransitioning }: CityTransitionOverlayProps) {
  const cityIcons = {
    "abu-dhabi": <Building2 className="w-16 h-16 text-emerald-400" />,
    london: <Umbrella className="w-16 h-16 text-blue-400" />,
    "san-jose": <Cpu className="w-16 h-16 text-purple-400" />,
    islamabad: <Mountain className="w-16 h-16 text-green-400" />,
  }

  const cityNames = {
    "abu-dhabi": "Abu Dhabi",
    london: "London",
    "san-jose": "San Jose",
    islamabad: "Islamabad",
  }

  const cityColors = {
    "abu-dhabi": "from-emerald-500/20 to-emerald-900/20",
    london: "from-blue-500/20 to-slate-900/20",
    "san-jose": "from-purple-500/20 to-blue-900/20",
    islamabad: "from-green-500/20 to-green-900/20",
  }

  if (!isTransitioning || currentCity === "home") return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-30 bg-gradient-to-br ${cityColors[currentCity as keyof typeof cityColors]} backdrop-blur-sm flex items-center justify-center`}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="mb-6 flex justify-center"
          >
            {cityIcons[currentCity as keyof typeof cityIcons]}
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {cityNames[currentCity as keyof typeof cityNames]}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-white/50 rounded-full mx-auto max-w-xs"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
