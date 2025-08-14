"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GlassmorphicCard } from "./glassmorphic-card"
import { FluidTextReveal } from "./fluid-text-reveal"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, TrendingUp, Building, Users, ArrowRight, Star, Shield } from "lucide-react"
import Link from "next/link"

interface CountryData {
  name: string
  code: string
  flag: string
  city: string
  description: string
  features: string[]
  stats: {
    properties: string
    avgPrice: string
    roi: string
  }
  highlights: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
  contact: {
    address: string
    phone: string
    email: string
  }
}

const countryData: Record<string, CountryData> = {
  AE: {
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    city: "Abu Dhabi & Dubai",
    description:
      "Discover luxury properties in the heart of the Middle East's most dynamic cities. Tax-free investments with world-class infrastructure and exceptional growth potential.",
    features: [
      "Tax-free investment",
      "World-class infrastructure",
      "Strategic location",
      "High ROI potential",
      "Golden Visa eligibility",
    ],
    stats: { properties: "2,500+", avgPrice: "$2.5M", roi: "12%" },
    highlights: [
      {
        title: "Prime Locations",
        description: "Exclusive properties in Abu Dhabi and Dubai's most prestigious areas",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Investment Growth",
        description: "Consistent 12%+ annual returns with strong rental yields",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        title: "Luxury Amenities",
        description: "World-class facilities and premium lifestyle offerings",
        icon: <Star className="w-6 h-6" />,
      },
    ],
    contact: {
      address: "Maqam Tower, Al Maryah Island, Abu Dhabi",
      phone: "+971 56 7575 075",
      email: "abudhabi@noodproperties.com",
    },
  },
  GB: {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    city: "London",
    description:
      "Invest in prime London real estate with guaranteed rental yields and capital appreciation. Access to prestigious neighborhoods and emerging markets.",
    features: [
      "Stable market",
      "Strong rental demand",
      "Historic appreciation",
      "Global financial hub",
      "Prestigious locations",
    ],
    stats: { properties: "1,800+", avgPrice: "£1.8M", roi: "8%" },
    highlights: [
      {
        title: "Central London",
        description: "Premium properties in Zone 1 and emerging areas",
        icon: <Building className="w-6 h-6" />,
      },
      {
        title: "Rental Yields",
        description: "Guaranteed rental returns with professional management",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        title: "Market Stability",
        description: "Established market with long-term growth potential",
        icon: <Shield className="w-6 h-6" />,
      },
    ],
    contact: {
      address: "Canary Wharf, One Canada Square, London",
      phone: "+44 20 7946 0958",
      email: "london@noodproperties.com",
    },
  },
  US: {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    city: "San Jose",
    description:
      "Silicon Valley properties offering exceptional growth potential in America's technology capital. Innovation-driven real estate solutions for tech professionals.",
    features: ["Tech hub proximity", "High demand", "Innovation ecosystem", "Premium locations", "Strong appreciation"],
    stats: { properties: "1,200+", avgPrice: "$3.2M", roi: "15%" },
    highlights: [
      {
        title: "Silicon Valley",
        description: "Properties near major tech companies and startups",
        icon: <Building className="w-6 h-6" />,
      },
      {
        title: "Tech Professionals",
        description: "Tailored solutions for high-income tech workers",
        icon: <Users className="w-6 h-6" />,
      },
      {
        title: "Growth Potential",
        description: "15%+ annual appreciation in prime locations",
        icon: <TrendingUp className="w-6 h-6" />,
      },
    ],
    contact: {
      address: "Downtown San Jose, Tech Center, CA",
      phone: "+1 408 555 0123",
      email: "sanjose@noodproperties.com",
    },
  },
  PK: {
    name: "Pakistan",
    code: "PK",
    flag: "🇵🇰",
    city: "Islamabad",
    description:
      "Emerging market opportunities in Pakistan's capital with significant growth potential. Cultural familiarity meets exceptional investment returns.",
    features: [
      "Emerging market",
      "Government backing",
      "Infrastructure development",
      "Affordable entry",
      "High growth potential",
    ],
    stats: { properties: "900+", avgPrice: "$180K", roi: "20%" },
    highlights: [
      {
        title: "Capital Growth",
        description: "Rapid development in Islamabad's prime sectors",
        icon: <Building className="w-6 h-6" />,
      },
      {
        title: "Affordable Entry",
        description: "Lower entry costs with exceptional return potential",
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        title: "Cultural Comfort",
        description: "Familiar environment for Pakistani investors",
        icon: <Users className="w-6 h-6" />,
      },
    ],
    contact: {
      address: "Blue Area, Diplomatic Enclave, Islamabad",
      phone: "+92 51 111 6663",
      email: "islamabad@noodproperties.com",
    },
  },
}

interface CountryContentSectionProps {
  countryCode: string
}

export function CountryContentSection({ countryCode }: CountryContentSectionProps) {
  const country = countryData[countryCode as keyof typeof countryData]

  if (!country) {
    return null
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-8xl mb-6">{country.flag}</div>
          <FluidTextReveal
            text={country.name}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
          />
          <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">{country.city}</h3>
          <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">{country.description}</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassmorphicCard className="text-center p-8">
            <Building className="w-8 h-8 text-gray-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-200 mb-2">{country.stats.properties}</div>
            <div className="text-gray-400">Properties Available</div>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center p-8">
            <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-200 mb-2">{country.stats.avgPrice}</div>
            <div className="text-gray-400">Average Price</div>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center p-8">
            <Star className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-400 mb-2">{country.stats.roi}</div>
            <div className="text-gray-400">Expected ROI</div>
          </GlassmorphicCard>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {country.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                <div className="text-gray-400 mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">{highlight.title}</h4>
                <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassmorphicCard className="p-8">
            <h4 className="text-2xl font-semibold text-gray-200 mb-6 text-center">Key Investment Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </GlassmorphicCard>
        </motion.div>

        {/* Contact & CTA */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassmorphicCard className="p-8">
            <h4 className="text-xl font-semibold text-gray-200 mb-6">Contact Our {country.city} Office</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">{country.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">{country.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">{country.contact.email}</span>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-8">
            <h4 className="text-xl font-semibold text-gray-200 mb-6">Ready to Invest?</h4>
            <p className="text-gray-400 mb-6">
              Connect with our local experts for personalized investment guidance and exclusive property access.
            </p>
            <div className="space-y-4">
              <Link href="/consultation" className="block">
                <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white transform hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href={`/${country.code.toLowerCase()}`} className="block">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-400 text-gray-200 hover:bg-gray-800/20 hover:border-gray-300 backdrop-blur-sm bg-transparent"
                >
                  View All Properties
                </Button>
              </Link>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  )
}
