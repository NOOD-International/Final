"use client"

import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal, FluidWordReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, TrendingDown, TrendingUp, Phone, Mail, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LondonPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="uk" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇬🇧</span>
                  <Badge className="bg-blue-500 text-white">London Office</Badge>
                </div>
                <FluidWordReveal
                  text="London Bridge to Success"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Escape London's rain and taxes for UAE's sunshine and superior returns
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD London Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Canary Wharf, London</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+44 20 7946 0958</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">london@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            {/* Comparison Section */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="London vs UAE Investment Reality"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Why smart investors are making the switch</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-blue-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                        🇬🇧 London Reality
                        <TrendingDown className="w-6 h-6 ml-2 text-red-400" />
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-red-400 font-bold">28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-red-400 font-bold">3-4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stamp Duty:</span>
                          <span className="text-red-400 font-bold">Up to 12%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weather:</span>
                          <span className="text-slate-400">156 rainy days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Prices:</span>
                          <span className="text-red-400 font-bold">Declining</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                        🇦🇪 UAE Advantage
                        <TrendingUp className="w-6 h-6 ml-2 text-green-400" />
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-green-400 font-bold">0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-green-400 font-bold">6-9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Fee:</span>
                          <span className="text-green-400 font-bold">4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weather:</span>
                          <span className="text-yellow-400">350+ sunny days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Prices:</span>
                          <span className="text-green-400 font-bold">Growing 12%+</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              </div>
            </FluidGlassContainer>

            {/* Why Switch Section */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Why London Investors Choose UAE"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Smart money follows opportunity</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tax Efficiency",
                    description: "Save 28% capital gains tax and enjoy 0% personal income tax",
                    icon: "💰",
                    color: "from-green-500/20 to-emerald-500/20",
                  },
                  {
                    title: "Higher Returns",
                    description: "Double your rental yields from 3-4% to 6-9% annually",
                    icon: "📈",
                    color: "from-blue-500/20 to-purple-500/20",
                  },
                  {
                    title: "Lifestyle Upgrade",
                    description: "350+ sunny days, luxury amenities, and world-class infrastructure",
                    icon: "☀️",
                    color: "from-yellow-500/20 to-orange-500/20",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <GlassmorphicCard className="h-full text-center">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl`} />
                      <div className="relative z-10">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed">{item.description}</p>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* CTA Section */}
            <FluidGlassContainer>
              <div className="text-center">
                <FluidWordReveal text="Make the Smart Switch Today" className="text-3xl font-bold text-white mb-4" />
                <motion.p
                  className="text-white/70 text-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Connect with our London team for a personalized UAE investment strategy
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/consultation"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Building2 className="w-5 h-5 mr-2 inline" />
                    Book London Consultation
                  </Link>
                  <a
                    href="tel:+442079460958"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-md"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call London Office
                  </a>
                </div>
              </div>
            </FluidGlassContainer>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
