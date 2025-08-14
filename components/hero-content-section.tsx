"use client"

import { motion } from "framer-motion"
import { FluidWordReveal } from "./fluid-text-reveal"
import { GlassmorphicCard } from "./glassmorphic-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, TrendingUp, Shield, Award } from "lucide-react"
import Link from "next/link"

export function HeroContentSection() {
  const stats = [
    { label: "Properties Sold", value: "5,000+", icon: <Award className="w-6 h-6" /> },
    { label: "Countries", value: "4", icon: <Globe className="w-6 h-6" /> },
    { label: "Investment Volume", value: "$3.2B", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Shield className="w-6 h-6" /> },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <FluidWordReveal
            text="NOOD International Properties"
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Global real estate excellence across UAE, UK, USA, and Pakistan. Your gateway to premium international
            property investments.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/consultation">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-gray-400 text-gray-200 hover:bg-gray-800/20 hover:border-gray-300 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-3 text-gray-400">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-200 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}
