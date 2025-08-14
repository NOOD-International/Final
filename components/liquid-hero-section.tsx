"use client"

import { motion } from "framer-motion"
import { NoodLiquidLogo } from "./nood-liquid-logo"
import { FluidTextReveal } from "./fluid-text-reveal"
import { GlassmorphicCard } from "./glassmorphic-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe, TrendingUp, Users } from "lucide-react"

const heroStats = [
  { label: "Global Markets", value: "4", icon: <Globe className="w-5 h-5" /> },
  { label: "Properties", value: "6,400+", icon: <Building2 className="w-5 h-5" /> },
  { label: "Clients", value: "12,500+", icon: <Users className="w-5 h-5" /> },
  { label: "Investment", value: "$3.4B", icon: <TrendingUp className="w-5 h-5" /> },
]

export function LiquidHeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="mb-12">
            <NoodLiquidLogo size="large" />
          </div>

          <FluidTextReveal
            text="International Properties"
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 metallic-text"
            delay={0.5}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-silver-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Premium real estate investments across global markets. From Abu Dhabi's luxury developments to London's
            prestigious properties, we connect you with exceptional opportunities worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button size="lg" className="metallic-button px-8 py-4 text-lg font-semibold">
              <Building2 className="w-5 h-5 mr-2" />
              Explore Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-silver-400/30 text-silver-200 hover:bg-silver-800/20 px-8 py-4 text-lg bg-transparent"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              ROI Calculator
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <GlassmorphicCard className="text-center p-6">
                <div className="flex justify-center mb-3 text-silver-400">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-silver-100 mb-1">{stat.value}</div>
                <div className="text-sm text-silver-400">{stat.label}</div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Markets */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 metallic-text">Featured Markets</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { flag: "🇦🇪", name: "UAE", desc: "Luxury & Growth" },
              { flag: "🇬🇧", name: "UK", desc: "Prestige & Stability" },
              { flag: "🇺🇸", name: "USA", desc: "Innovation Hub" },
              { flag: "🇵🇰", name: "Pakistan", desc: "Emerging Market" },
            ].map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-4 min-w-[120px] border border-silver-400/20"
              >
                <div className="text-3xl mb-2">{market.flag}</div>
                <div className="font-semibold text-silver-100 mb-1">{market.name}</div>
                <div className="text-xs text-silver-400">{market.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <Button className="metallic-button px-8 py-4 text-lg font-semibold">
              Start Your Investment Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
