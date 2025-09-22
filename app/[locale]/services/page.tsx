"use client"

import { FluidNavigation } from "@/components/fluid-navigation"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight nood-brand-color">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-muted-foreground">
            Comprehensive real estate solutions tailored to your investment goals
          </p>
        </div>
      </div>
    </div>
  )
}