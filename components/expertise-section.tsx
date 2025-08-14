"use client"

import type React from "react"
import type { ReactElement } from "react"
import { motion } from "framer-motion"
import { Users, TrendingUp, Building2, FileText, CheckCircle, Shield, MapPin, Calculator } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpertiseArea {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  color: string
}

export function ExpertiseSection(): ReactElement {
  const expertiseAreas: ExpertiseArea[] = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Property Investment",
      description: "Comprehensive investment solutions for Abu Dhabi real estate",
      features: [
        "Market analysis and property valuation",
        "ROI calculations and projections",
        "Portfolio diversification strategies",
        "Off-plan and ready property options",
      ],
      color: "emerald",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Locations",
      description: "Expert knowledge of Abu Dhabi's most sought-after areas",
      features: [
        "Al Maryah Island financial district",
        "Saadiyat Island cultural hub",
        "Al Reem Island family communities",
        "Yas Island entertainment zone",
      ],
      color: "blue",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Legal & Compliance",
      description: "Full legal support for international property buyers",
      features: [
        "Freehold ownership guidance",
        "Documentation and contracts",
        "Government liaison services",
        "Title deed processing",
      ],
      color: "purple",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Financial Services",
      description: "Comprehensive financing and mortgage solutions",
      features: [
        "Mortgage pre-approval assistance",
        "Bank relationship management",
        "Currency exchange guidance",
        "Payment plan structuring",
      ],
      color: "orange",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Relations",
      description: "Personalized service for international investors",
      features: [
        "Dedicated relationship managers",
        "Multi-language support",
        "Virtual property tours",
        "After-sales support",
      ],
      color: "cyan",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Intelligence",
      description: "Data-driven insights for informed investment decisions",
      features: [
        "Real-time market analytics",
        "Price trend analysis",
        "Rental yield forecasting",
        "Economic impact assessments",
      ],
      color: "green",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your investment goals and budget requirements",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      step: "02",
      title: "Market Analysis",
      description: "Comprehensive market research and property identification",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      step: "03",
      title: "Property Selection",
      description: "Curated property options matching your criteria",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Legal verification and financial structuring",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      step: "05",
      title: "Transaction Completion",
      description: "Seamless purchase process and ownership transfer",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ]

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold metallic-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-silver-400 max-w-3xl mx-auto opacity-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive real estate services backed by deep market knowledge and Emirati leadership
          </motion.p>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/50 border-silver-400/20 hover:border-silver-400/40 transition-all duration-300 opacity-card">
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-${area.color}-500/20 rounded-lg flex items-center justify-center text-${area.color}-400 mb-4`}
                  >
                    {area.icon}
                  </div>
                  <CardTitle className="metallic-text">{area.title}</CardTitle>
                  <CardDescription className="text-silver-400 opacity-text">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className={`w-1.5 h-1.5 bg-${area.color}-400 rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-silver-400 opacity-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-black/30 backdrop-blur-sm border border-silver-400/20 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold metallic-text mb-4">Our Process</h3>
            <p className="text-silver-400 opacity-text">A streamlined approach to Abu Dhabi real estate investment</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-silver-400 to-silver-600 hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative flex items-start space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-silver-400">{step.icon}</div>
                      <h4 className="text-xl font-semibold metallic-text">{step.title}</h4>
                    </div>
                    <p className="text-silver-400 opacity-text">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
