"use client"

import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal, FluidWordReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, Phone, Mail, MapPin, Heart, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function IslamabadPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="pakistan" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇵🇰</span>
                  <Badge className="bg-green-500 text-white">Islamabad Office</Badge>
                </div>
                <FluidWordReveal
                  text="Pakistan to UAE Bridge"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Cultural familiarity meets investment opportunity in the heart of the Middle East
                </motion.p>

                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD Islamabad Office</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Blue Area, Islamabad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+92 51 111 6663</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">islamabad@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            {/* Cultural Comfort & Investment Benefits */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Cultural Comfort Meets Investment Excellence"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Why Pakistani investors feel at home in the UAE</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-green-400" />
                        Cultural Comfort
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>Islamic banking and Sharia-compliant investments</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>2M+ Pakistani community in UAE</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>Urdu-speaking business environment</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>Halal lifestyle and family values</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>Strong Pakistan-UAE trade relations</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotateY: 15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassmorphicCard className="p-8 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <Globe className="w-6 h-6 mr-2 text-yellow-400" />
                        Investment Benefits
                      </h3>
                      <div className="space-y-4 text-white/70">
                        <div className="flex justify-between">
                          <span>Pakistani Community:</span>
                          <span className="text-yellow-400 font-bold">2M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bilateral Trade Volume:</span>
                          <span className="text-yellow-400 font-bold">$8B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Golden Visa Duration:</span>
                          <span className="text-green-400 font-bold">10 Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Investment Growth:</span>
                          <span className="text-green-400 font-bold">8-12%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rental Yields:</span>
                          <span className="text-green-400 font-bold">6-9%</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              </div>
            </FluidGlassContainer>

            {/* Pakistani Success Stories */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal
                  text="Pakistani Success Stories in UAE"
                  className="text-3xl font-bold text-white mb-4"
                />
                <p className="text-white/60">Join thousands of successful Pakistani investors</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Business Community",
                    description: "Pakistani entrepreneurs leading major UAE businesses and startups",
                    icon: "👔",
                    color: "from-blue-500/20 to-purple-500/20",
                    stat: "15,000+ Businesses",
                  },
                  {
                    title: "Real Estate Investors",
                    description: "Pakistani families building generational wealth through UAE properties",
                    icon: "🏢",
                    color: "from-green-500/20 to-emerald-500/20",
                    stat: "$2B+ Invested",
                  },
                  {
                    title: "Professional Excellence",
                    description: "Pakistani professionals in healthcare, engineering, and finance",
                    icon: "🎓",
                    color: "from-purple-500/20 to-pink-500/20",
                    stat: "500K+ Professionals",
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
                        <div className="text-2xl font-bold text-white">{item.stat}</div>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* Investment Process for Pakistanis */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal text="Simplified Investment Process" className="text-3xl font-bold text-white mb-4" />
                <p className="text-white/60">Designed specifically for Pakistani investors</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    description: "Free consultation in Urdu/English with our Islamabad team",
                    icon: "💬",
                  },
                  {
                    step: "2",
                    title: "Property Selection",
                    description: "Curated properties matching Pakistani investor preferences",
                    icon: "🏠",
                  },
                  {
                    step: "3",
                    title: "Legal Support",
                    description: "Complete legal assistance and documentation support",
                    icon: "📋",
                  },
                  {
                    step: "4",
                    title: "Golden Visa",
                    description: "Assistance with UAE Golden Visa application process",
                    icon: "🏆",
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
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                        {item.step}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* CTA Section */}
            <FluidGlassContainer>
              <div className="text-center">
                <FluidWordReveal
                  text="آپ کا UAE میں سرمایہ کاری کا سفر شروع کریں"
                  className="text-2xl font-bold text-white mb-2"
                />
                <FluidWordReveal
                  text="Start Your UAE Investment Journey"
                  className="text-3xl font-bold text-white mb-4"
                />
                <motion.p
                  className="text-white/70 text-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Connect with our Islamabad team for personalized guidance in Urdu/English
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/consultation"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Building2 className="w-5 h-5 mr-2 inline" />
                    مفت مشاورت / Free Consultation
                  </Link>
                  <a
                    href="tel:+92511116663"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-md"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call Islamabad Office
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
