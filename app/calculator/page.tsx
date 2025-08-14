"use client"

import { motion } from "framer-motion"
import { ROICalculator } from "@/components/roi-calculator"
import { GalaxyBackground } from "@/components/galaxy-background"
import { NavBar } from "@/components/nav-bar"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GalaxyBackground />
      <NavBar />

      <div className="relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12"
        >
          <ROICalculator />
        </motion.div>
      </div>
    </div>
  )
}
