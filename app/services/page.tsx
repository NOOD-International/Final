"use client"

import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, TrendingUp, Shield, Users, Globe, Calculator } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Global Portfolio",
      description: "International real estate investments across premium markets",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Data-driven insights for optimal investment decisions",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Protected investments with comprehensive legal support",
    },
    {
      icon: Users,
      title: "Expert Advisory",
      description: "Personalized guidance from industry professionals",
    },
    {
      icon: Building2,
      title: "Property Management",
      description: "Full-service property management and maintenance",
    },
    {
      icon: Calculator,
      title: "Investment Planning",
      description: "Strategic planning for maximum returns",
    },
  ]

  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="services" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Our Services
                </motion.h1>
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
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
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="h-full">
                      <service.icon className="w-12 h-12 text-white mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
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
