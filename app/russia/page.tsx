"use client"

import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal, FluidWordReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import { Building2, TrendingUp, MapPin, Globe, Phone, Mail, CheckCircle, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RussiaPage() {
  const marketHighlights = [
    {
      title: "Luxury Market",
      value: "€2.8B",
      description: "Premium property market value in Moscow",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Investment Yield",
      value: "8.5%",
      description: "Average returns on luxury properties",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Foreign Interest",
      value: "35%",
      description: "International buyer participation",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Market Stability",
      value: "High",
      description: "Established luxury property sector",
      icon: <Globe className="w-6 h-6" />,
    },
  ]

  const primeLocations = [
    {
      name: "Moscow City",
      type: "Financial District",
      priceRange: "€500K - €5M",
      highlights: ["Business center", "Modern towers", "Premium amenities"],
      roi: "9.2%",
    },
    {
      name: "Rublyovka",
      type: "Elite Suburb",
      priceRange: "€1M - €15M",
      highlights: ["Exclusive estates", "Privacy", "Luxury lifestyle"],
      roi: "7.8%",
    },
    {
      name: "St. Petersburg",
      type: "Historic Center",
      priceRange: "€300K - €3M",
      highlights: ["Cultural heritage", "Historic properties", "Tourism hub"],
      roi: "8.1%",
    },
    {
      name: "Sochi",
      type: "Resort Destination",
      priceRange: "€200K - €2M",
      highlights: ["Black Sea coast", "Resort properties", "Olympic legacy"],
      roi: "10.5%",
    },
  ]

  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="russia" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-4xl">🇷🇺</span>
                  <Badge className="bg-red-500 text-white">Russia Market</Badge>
                </div>
                <FluidWordReveal
                  text="Russia Luxury Real Estate"
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                />
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Exclusive luxury properties in Russia's most prestigious locations with unique investment
                  opportunities
                </motion.p>

                {/* Contact Info */}
                <GlassmorphicCard className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-white mb-4">NOOD Russia Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">Moscow & St. Petersburg</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">+7 495 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-white/60" />
                      <span className="text-white/80">russia@noodproperties.com</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            </FluidTextReveal>

            {/* Market Highlights */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal text="Russia Luxury Market 2024" className="text-3xl font-bold text-white mb-4" />
                <p className="text-white/60">Exclusive properties in prestigious locations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="text-center hover:scale-105 transition-transform">
                      <div className="text-red-400 mb-4 flex justify-center">{highlight.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                      <div className="text-lg font-semibold text-white/80 mb-2">{highlight.title}</div>
                      <div className="text-sm text-white/60">{highlight.description}</div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* Prime Locations */}
            <FluidGlassContainer className="mb-20">
              <div className="text-center mb-12">
                <FluidWordReveal text="Premium Investment Locations" className="text-3xl font-bold text-white mb-4" />
                <p className="text-white/60">Russia's most exclusive real estate destinations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {primeLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{location.name}</h3>
                          <p className="text-white/60">{location.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-red-400 font-bold">{location.roi} ROI</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-white/80 font-semibold">{location.priceRange}</p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {location.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/consultation"
                        className="block w-full text-center py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg transition-all hover:scale-105"
                      >
                        Explore Properties
                      </Link>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>
            </FluidGlassContainer>

            {/* CTA Section */}
            <FluidGlassContainer>
              <div className="text-center">
                <FluidWordReveal
                  text="Discover Russia's Luxury Properties"
                  className="text-3xl font-bold text-white mb-4"
                />
                <motion.p
                  className="text-white/70 text-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Connect with our Russia team for exclusive luxury property opportunities
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/consultation"
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Building2 className="w-5 h-5 mr-2 inline" />
                    Schedule Consultation
                  </Link>
                  <a
                    href="tel:+74951234567"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-md"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call Russia Office
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
