"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Search,
  FileText,
  Shield,
  Building2,
  CheckCircle,
  Phone,
  Calendar,
  DollarSign,
  MapPin,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProcessPage() {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute consultation to understand your investment goals and property requirements",
      icon: <Phone className="w-8 h-8" />,
      duration: "30 minutes",
      details: [
        "Investment goal assessment",
        "Budget and financing discussion",
        "Property type preferences",
        "Timeline planning",
        "Market overview presentation",
      ],
      color: "emerald",
    },
    {
      step: "02",
      title: "Property Selection",
      description: "Curated property options based on your criteria with detailed market analysis",
      icon: <Search className="w-8 h-8" />,
      duration: "1-2 weeks",
      details: [
        "Personalized property shortlist",
        "Market analysis and pricing",
        "Location and amenity reviews",
        "Investment potential assessment",
        "Virtual or physical property tours",
      ],
      color: "blue",
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive property verification and legal documentation review",
      icon: <FileText className="w-8 h-8" />,
      duration: "3-5 days",
      details: [
        "Property title verification",
        "Developer background check",
        "Legal document review",
        "Building permits validation",
        "Market value confirmation",
      ],
      color: "purple",
    },
    {
      step: "04",
      title: "Reservation & Agreement",
      description: "Secure your property with transparent reservation process and clear agreements",
      icon: <Shield className="w-8 h-8" />,
      duration: "1-2 days",
      details: [
        "Property reservation",
        "Sales agreement preparation",
        "Terms and conditions review",
        "Payment schedule confirmation",
        "Escrow account setup",
      ],
      color: "orange",
    },
    {
      step: "05",
      title: "Escrow & Payments",
      description: "Secure milestone-based payments through regulated escrow accounts",
      icon: <DollarSign className="w-8 h-8" />,
      duration: "As per schedule",
      details: [
        "Escrow account management",
        "Milestone-based payments",
        "Progress monitoring",
        "Payment confirmations",
        "Financial reporting",
      ],
      color: "green",
    },
    {
      step: "06",
      title: "Handover & Completion",
      description: "Final property inspection, handover, and post-sale support services",
      icon: <Building2 className="w-8 h-8" />,
      duration: "1-2 weeks",
      details: [
        "Pre-handover inspection",
        "Snagging list preparation",
        "Final walkthrough",
        "Key handover ceremony",
        "Property management setup",
      ],
      color: "cyan",
    },
  ]

  const benefits = [
    {
      title: "Complete Transparency",
      description: "Every fee, timeline, and process step clearly outlined from day one",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "emerald",
    },
    {
      title: "Escrow Protection",
      description: "All payments secured through regulated escrow accounts for your peace of mind",
      icon: <Shield className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Expert Guidance",
      description: "Dedicated property advisors with deep Abu Dhabi market knowledge",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Global Support",
      description: "Multilingual team supporting clients across 45+ countries",
      icon: <MapPin className="w-6 h-6" />,
      color: "orange",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-silver-900 to-black text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-500 text-black mb-6">Our Process</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Transparent </span>
              <span className="metallic-text">Property Process</span>
            </h1>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto mb-12">
              From initial consultation to property handover, every step is clearly mapped with transparent fees, secure
              escrow, and expert guidance
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-12 mb-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                {/* Step Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-${step.color}-500/20 border-2 border-${step.color}-500/50 flex items-center justify-center`}
                    >
                      <div className={`text-${step.color}-400`}>{step.icon}</div>
                    </div>
                    <div>
                      <div className={`text-${step.color}-400 font-bold text-sm`}>STEP {step.step}</div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-silver-400 text-lg leading-relaxed">{step.description}</p>

                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className={`w-4 h-4 text-${step.color}-400 flex-shrink-0`} />
                        <span className="text-silver-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-${step.color}-500/10 border border-${step.color}-500/30 rounded-full`}
                  >
                    <Calendar className={`w-4 h-4 text-${step.color}-400`} />
                    <span className={`text-${step.color}-400 text-sm font-medium`}>Duration: {step.duration}</span>
                  </div>
                </div>

                {/* Step Visual */}
                <div className="flex-1 max-w-md">
                  <div
                    className={`bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/10 border border-${step.color}-500/30 rounded-2xl p-8 text-center`}
                  >
                    <div
                      className={`w-24 h-24 mx-auto mb-6 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}
                    >
                      <div className={`text-${step.color}-400 text-4xl`}>{step.icon}</div>
                    </div>
                    <div className={`text-6xl font-bold text-${step.color}-400/50 mb-2`}>{step.step}</div>
                    <div className="text-white font-semibold">{step.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Process</h2>
              <p className="text-silver-400">Built on transparency, security, and client success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/50 border border-silver-800 rounded-xl p-6 text-center hover:border-silver-600 transition-colors"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${benefit.color}-500/20 flex items-center justify-center`}
                  >
                    <div className={`text-${benefit.color}-400`}>{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-silver-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-silver-900/50 to-black/50 border border-silver-700 rounded-2xl p-8 mb-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Process Success Metrics</h3>
              <p className="text-silver-400">Proven results from our transparent approach</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-sm text-silver-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15</div>
                <div className="text-sm text-silver-400">Avg Days to Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-silver-400">Escrow Security</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-silver-400">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="silver-bg rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Start Your Property Journey?</h3>
            <p className="text-black/80 text-xl mb-8">Experience our transparent process with a free consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-black text-white hover:bg-silver-800 px-8 py-4 text-lg">
                <a href="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <a href="https://wa.me/971567575075">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +971 56 7575 075
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
