"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Shield, Globe, Calculator, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

interface ServiceTab {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  details: string[]
  colors: {
    primary: string
    secondary: string
    accent: string
    gradient: string
  }
  contact?: {
    address: string
    phone: string
    email: string
  }
}

const servicesData: ServiceTab[] = [
  {
    id: "abu-dhabi",
    title: "Abu Dhabi HQ",
    icon: <Building2 className="w-6 h-6" />,
    description: "Premium real estate investments in the capital of UAE",
    details: [
      "Luxury residential properties",
      "Commercial real estate opportunities",
      "Government-backed developments",
      "Tax-free investment environment",
      "Guaranteed escrow protection",
    ],
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#00FF00",
      gradient: "from-red-500 via-white to-green-500",
    },
    contact: {
      address: "Sheikh Zayed Grand Mosque Area, Abu Dhabi, UAE",
      phone: "+971 2 123 4567",
      email: "abudhabi@nood.ae",
    },
  },
  {
    id: "london",
    title: "London Office",
    icon: <Shield className="w-6 h-6" />,
    description: "European gateway for UAE property investments",
    details: [
      "UK investor relations",
      "European market expertise",
      "Sterling-Dirham exchange optimization",
      "London-Abu Dhabi investment corridor",
      "Regulatory compliance support",
    ],
    colors: {
      primary: "#012169",
      secondary: "#FFFFFF",
      accent: "#C8102E",
      gradient: "from-blue-800 via-white to-red-600",
    },
    contact: {
      address: "Canary Wharf, London E14 5AB, United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@nood.ae",
    },
  },
  {
    id: "pakistan",
    title: "Pakistan Office",
    icon: <Globe className="w-6 h-6" />,
    description: "Serving Pakistani investors in UAE real estate",
    details: [
      "Urdu-speaking investment advisors",
      "PKR-AED currency guidance",
      "Overseas Pakistani investment programs",
      "Sharia-compliant investment options",
      "Pakistan-UAE investment treaties",
    ],
    colors: {
      primary: "#01411C",
      secondary: "#FFFFFF",
      accent: "#01411C",
      gradient: "from-green-700 via-white to-green-700",
    },
    contact: {
      address: "F-7 Markaz, Islamabad, Pakistan",
      phone: "+92 51 123 4567",
      email: "pakistan@nood.ae",
    },
  },
  {
    id: "usa",
    title: "San Jose Office",
    icon: <Users className="w-6 h-6" />,
    description: "Silicon Valley tech professionals investment hub",
    details: [
      "Tech industry investment specialists",
      "USD-AED investment strategies",
      "Silicon Valley investor network",
      "US tax optimization guidance",
      "Cross-border investment solutions",
    ],
    colors: {
      primary: "#B22234",
      secondary: "#FFFFFF",
      accent: "#3C3B6E",
      gradient: "from-red-600 via-white to-blue-800",
    },
    contact: {
      address: "Downtown San Jose, CA 95113, USA",
      phone: "+1 408 123 4567",
      email: "sanjose@nood.ae",
    },
  },
  {
    id: "moscow",
    title: "Moscow Office",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Russian market UAE property investment gateway",
    details: [
      "Russian-speaking investment team",
      "RUB-AED currency diversification",
      "Stable UAE market access",
      "Russian investor protection",
      "Moscow-Abu Dhabi investment corridor",
    ],
    colors: {
      primary: "#FFFFFF",
      secondary: "#0039A6",
      accent: "#D52B1E",
      gradient: "from-white via-blue-600 to-red-600",
    },
    contact: {
      address: "Moscow City, Moscow 123317, Russia",
      phone: "+7 495 123 4567",
      email: "moscow@nood.ae",
    },
  },
  {
    id: "luxury-portfolio",
    title: "Luxury Portfolio",
    icon: <Shield className="w-6 h-6" />,
    description: "Exclusive high-end properties and premium investments",
    details: [
      "Ultra-luxury residential properties",
      "Exclusive beachfront developments",
      "Private island investments",
      "Luxury hotel and resort properties",
      "Premium commercial real estate",
    ],
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      accent: "#FF8C00",
      gradient: "from-yellow-400 via-yellow-500 to-orange-500",
    },
  },
]

const additionalServices = [
  {
    title: "Property Investment",
    description: "Strategic investment opportunities in prime real estate markets",
    icon: "🏢",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Portfolio Management",
    description: "Comprehensive management of your real estate portfolio",
    icon: "📊",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Market Analysis",
    description: "In-depth market research and trend analysis",
    icon: "📈",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Legal Advisory",
    description: "Expert legal guidance for property transactions",
    icon: "⚖️",
    color: "from-purple-500 to-pink-600",
  },
]

const services = [
  {
    icon: Building2,
    title: "Property Investment",
    description: "Premium Abu Dhabi properties with guaranteed returns and transparent processes.",
    features: ["Escrow Protection", "Legal Compliance", "Market Analysis"],
    href: "/services/investment",
    gradient: "from-silver-600 to-silver-800",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management",
    description: "Professional management of your real estate investment portfolio.",
    features: ["Performance Tracking", "Rental Management", "Market Updates"],
    href: "/services/portfolio",
    gradient: "from-silver-500 to-silver-700",
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Calculate potential returns on Abu Dhabi real estate investments.",
    features: ["Real-time Data", "Multiple Scenarios", "Detailed Reports"],
    href: "/calculator",
    gradient: "from-silver-400 to-silver-600",
  },
  {
    icon: Shield,
    title: "Escrow Services",
    description: "Secure transactions with guaranteed escrow protection for all investments.",
    features: ["Legal Protection", "Secure Payments", "Compliance Assured"],
    href: "/services/escrow",
    gradient: "from-silver-600 to-silver-800",
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 support across our London, Abu Dhabi, Islamabad, and San Jose offices.",
    features: ["Multi-language", "Local Expertise", "Global Standards"],
    href: "/services/support",
    gradient: "from-silver-500 to-silver-700",
  },
  {
    icon: Users,
    title: "Investment Consulting",
    description: "Expert guidance from our team of real estate investment professionals.",
    features: ["Market Insights", "Strategy Planning", "Risk Assessment"],
    href: "/services/consulting",
    gradient: "from-silver-400 to-silver-600",
  },
]

export function ServicesViewportSection() {
  const [activeTab, setActiveTab] = useState("abu-dhabi")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const activeService = servicesData.find((service) => service.id === activeTab) || servicesData[0]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleServices((prev) => [...prev.filter((i) => i !== index), index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 metallic-gradient-1 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="metallic-text-lg text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">Our Services</h2>
          <p className="text-lg md:text-xl text-silver-300 max-w-3xl mx-auto">
            Comprehensive real estate investment solutions designed for global investors seeking premium Abu Dhabi
            properties.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div
          ref={containerRef}
          className="relative mb-12 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-silver-800/50 p-2"
        >
          {/* Cursor following effect */}
          <div
            className="absolute pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 50,
              top: mousePosition.y - 50,
              width: 100,
              height: 100,
              background: `radial-gradient(circle, ${activeService.colors.primary}20 0%, transparent 70%)`,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="flex flex-wrap justify-center gap-2">
            {servicesData.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-6 py-4 rounded-xl font-medium text-sm transition-all duration-500 overflow-hidden group ${
                  activeTab === service.id
                    ? "text-black shadow-lg scale-105"
                    : "text-silver-300 hover:text-white hover:scale-102"
                }`}
                style={{
                  background:
                    activeTab === service.id
                      ? `linear-gradient(135deg, ${service.colors.primary}, ${service.colors.secondary}, ${service.colors.accent})`
                      : "transparent",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover effect background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.colors.primary}, ${service.colors.secondary})`,
                  }}
                />

                <div className="relative flex items-center space-x-2">
                  {service.icon}
                  <span>{service.title}</span>
                </div>

                {/* Active tab indicator */}
                {activeTab === service.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                    style={{ backgroundColor: service.colors.accent }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-black/60 backdrop-blur-sm rounded-2xl border border-silver-800/50 overflow-hidden"
        >
          {activeTab === "luxury-portfolio" ? (
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{activeService.title}</h3>
                <p className="text-silver-300 text-lg mb-6">{activeService.description}</p>
              </div>

              {/* YouTube Video */}
              <div className="mb-8">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                    src="https://www.youtube.com/embed/IeHfB8tn-7s?si=cfiwPuy3-TH2TSvd&autoplay=1&mute=1&loop=1&playlist=IeHfB8tn-7s&controls=1&rel=0"
                    title="NOOD Luxury Portfolio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* 3D Property Slider */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6">Featured Properties</h4>
                {/* Placeholder for Property3DSlider */}
                <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Property 3D Slider Placeholder</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Premium Services</h4>
                  <ul className="space-y-3">
                    {activeService.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3 text-silver-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: activeService.colors.primary }}
                        />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Investment Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-silver-300">Average ROI</span>
                      <span className="text-yellow-400 font-bold">12-15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-silver-300">Minimum Investment</span>
                      <span className="text-yellow-400 font-bold">AED 2M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-silver-300">Portfolio Value</span>
                      <span className="text-yellow-400 font-bold">AED 500M+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Service details */}
              <div className="p-8 lg:p-12">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <h3 className="text-3xl font-bold text-white mb-4">{activeService.title}</h3>
                  <p className="text-silver-300 text-lg mb-8">{activeService.description}</p>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-white">Our Services</h4>
                    <ul className="space-y-4">
                      {activeService.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-silver-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: activeService.colors.primary }}
                          />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {activeService.contact && (
                    <motion.div
                      className="mt-8 p-6 rounded-xl border border-silver-800/50"
                      style={{
                        background: `linear-gradient(135deg, ${activeService.colors.primary}10, ${activeService.colors.secondary}10)`,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                      <div className="space-y-3 text-silver-300">
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: activeService.colors.primary }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                          </div>
                          <span className="text-sm">{activeService.contact.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 flex-shrink-0" style={{ color: activeService.colors.primary }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M6 18c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v10zm-1 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm0 14H4V6h16v12zm-7-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                          </div>
                          <span className="text-sm">{activeService.contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 flex-shrink-0" style={{ color: activeService.colors.primary }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zm-7-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                          </div>
                          <span className="text-sm">{activeService.contact.email}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Right side - Visual representation */}
              <div
                className="relative p-8 lg:p-12 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${activeService.colors.primary}15, ${activeService.colors.secondary}15, ${activeService.colors.accent}15)`,
                }}
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Large service icon */}
                  <div
                    className="w-48 h-48 rounded-full flex items-center justify-center shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${activeService.colors.primary}30, ${activeService.colors.secondary}30, ${activeService.colors.accent}30)`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="text-8xl" style={{ color: activeService.colors.primary }}>
                      {activeService.icon}
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full"
                    style={{ backgroundColor: `${activeService.colors.accent}40` }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full"
                    style={{ backgroundColor: `${activeService.colors.primary}40` }}
                    animate={{
                      y: [0, 10, 0],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover:opacity-100 transition-all duration-500 group metallic-shine overflow-hidden">
                <CardHeader className="pb-3 md:pb-4">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="metallic-text text-lg md:text-xl font-bold group-hover:text-silver-100 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <p className="text-silver-400 text-sm md:text-base group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 md:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-silver-400 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-silver-400 group-hover:opacity-100 transition-opacity duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full metallic-button text-sm md:text-base py-2 md:py-3 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Link href={service.href} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl max-w-2xl mx-auto">
            <h3 className="metallic-text text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-silver-400 text-sm md:text-base mb-4 md:mb-6">
              Schedule a free consultation with our experts to explore premium Abu Dhabi real estate opportunities.
            </p>
            <Button asChild size={isMobile ? "default" : "lg"} className="metallic-button w-full sm:w-auto">
              <Link href="/consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
