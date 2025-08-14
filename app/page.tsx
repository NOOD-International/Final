"use client"

import { FluidVideoSequence } from "@/components/fluid-video-sequence"
import { LiquidBackground } from "@/components/liquid-background"
import { FluidNavigation } from "@/components/fluid-navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative bg-black overflow-x-hidden">
      {/* Fluid Navigation */}
      <FluidNavigation />

      {/* Liquid Background Effects */}
      <LiquidBackground variant="aurora" intensity={0.6} />

      {/* Fluid Video Sequence */}
      <FluidVideoSequence />

      {/* Footer */}
      <Footer />
    </main>
  )
}
