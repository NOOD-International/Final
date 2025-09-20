"use client"

import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal, FluidWordReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, Phone, Mail, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SanJosePage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="usa" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇺🇸</span>
                  <Badge className="bg-purple-500 text-white">Silicon Valley Office</Badge>
                </div>
                <FluidWordReveal
                  text="Silicon Valley to UAE"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Tech professionals diversifying beyond volatile stocks with stable real estate
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD San Jose Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Downtown San Jose, CA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+1 408 555 0123</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">sanjose@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            {/* Tech Professional Benefits */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Smart Diversification for Tech Professionals"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Balance high-risk tech stocks with stable real estate assets</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Portfolio Diversification",
                    description: "Reduce dependency on volatile tech stocks with stable real estate returns",
                    icon: "📊",
                    color: "from-blue-500/20 to-purple-500/20",
                    metric: "8-12% ROI",
                  },
                  {
                    title: "Tax Optimization",
                    description: "UAE's 0% capital gains tax vs California's 13.3% state + federal taxes",
                    icon: "💰",
                    color: "from-green-500/20 to-emerald-500/20",
                    metric: "Save 30%+",
                  },
                  {
                    title: "Global Mobility",
                    description: "Golden visa programs perfect for international tech professionals",
                    icon: "🌍",
                    color: "from-purple-500/20 to-pink-500/20",
                    metric: "10 Year Visa",
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
                        <p className="text-white/70 leading-relaxed mb-4">{item.description}</p>
                        <div className="text-2xl font-bold text-white">{item.metric}</div>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* Silicon Valley vs UAE Comparison */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Silicon Valley vs UAE Investment"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Why tech professionals are choosing UAE real estate</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6">🏠 Silicon Valley Reality</h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Median Home Price:</span>
                          <span className="text-red-400 font-bold">$1.8M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Tax:</span>
                          <span className="text-red-400 font-bold">1.2% annually</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-red-400 font-bold">33.3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-red-400 font-bold">2-3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Volatility:</span>
                          <span className="text-red-400 font-bold">High</span>
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
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6">🏢 UAE Advantage</h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Luxury Properties:</span>
                          <span className="text-green-400 font-bold">$500K-2M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Tax:</span>
                          <span className="text-green-400 font-bold">0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capital Gains Tax:</span>
                          <span className="text-green-400 font-bold">0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-green-400 font-bold">6-9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Growth:</span>
                          <span className="text-green-400 font-bold">12%+ annually</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              </div>
            </FluidGlassContainer>

            {/* Tech-Friendly Features */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="UAE's Tech-Forward Infrastructure"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Built for the digital nomad lifestyle</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Smart Cities",
                    description: "AI-powered infrastructure and IoT integration",
                    icon: "🤖",
                  },
                  {
                    title: "5G Coverage",
                    description: "Ultra-fast internet nationwide",
                    icon: "📡",
                  },
                  {
                    title: "Crypto-Friendly",
                    description: "Progressive digital asset regulations",
                    icon: "₿",
                  },
                  {
                    title: "Remote Work Visa",
                    description: "Work for US companies from UAE",
                    icon: "💻",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="text-center h-full">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* CTA Section */}
            <FluidGlassContainer>
              <div className="text-center">
                <FluidWordReveal
                  text="Diversify Your Tech Portfolio Today"
                  className="text-3xl font-bold text-white mb-4"
                />
                <motion.p
                  className="text-white/70 text-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Connect with our Silicon Valley team for tech-focused investment strategies
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/consultation"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Building2 className="w-5 h-5 mr-2 inline" />
                    Tech Professional Consultation
                  </Link>
                  <a
                    href="tel:+14085550123"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-md"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call San Jose Office
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
