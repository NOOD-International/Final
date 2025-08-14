"use client"

import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ROICalculator } from "@/components/roi-calculator"
import { motion } from "framer-motion"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="calculator" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  ROI Calculator
                </motion.h1>
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Calculate your potential returns on international property investments
                </motion.p>
              </div>
            </FluidTextReveal>

            <GlassmorphicCard>
              <ROICalculator />
            </GlassmorphicCard>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
