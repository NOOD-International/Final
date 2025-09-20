"use client"

import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, TrendingUp, Shield, Users, Globe, Calculator } from "lucide-react"
import { motion } from "framer-motion"

// NOOD brand palette
const BRAND = {
  tortoiseBlue: "#1f6f5f",           // accent for headings/icons
  bodyOnDark: "rgba(232,245,242,0.85)", // readable body text on dark bg
  subOnDark: "rgba(255,255,255,0.70)",  // subdued paragraph on dark
}

export default function ServicesPage() {
  const services = [
    { icon: Globe,      title: "Global Portfolio",     description: "International real estate investments across premium markets" },
    { icon: TrendingUp, title: "Market Analysis",      description: "Data-driven insights for optimal investment decisions" },
    { icon: Shield,     title: "Secure Transactions",  description: "Protected investments with comprehensive legal support" },
    { icon: Users,      title: "Expert Advisory",      description: "Personalized guidance from industry professionals" },
    { icon: Building2,  title: "Property Management",  description: "Full-service property management and maintenance" },
    { icon: Calculator, title: "Investment Planning",  description: "Strategic planning for maximum returns" },
  ]

  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="services" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal text="Our Services">
              <div className="text-center mb-16">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                  style={{ color: BRAND.tortoiseBlue }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Our Services
                </motion.h1>
                <motion.p
                  className="text-xl max-w-3xl mx-auto mb-12"
                  style={{ color: BRAND.subOnDark }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Comprehensive real estate solutions tailored to your investment goals
                </motion.p>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <GlassmorphicCard className="h-full">
                      <service.icon className="w-12 h-12 mb-6" style={{ color: BRAND.tortoiseBlue }} />
                      <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND.tortoiseBlue }}>
                        {service.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: BRAND.bodyOnDark }}>
                        {service.description}
                      </p>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
