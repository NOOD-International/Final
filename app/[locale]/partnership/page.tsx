"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Building2,
  Handshake,
  TrendingUp,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Shield,
  Award,
  Target,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnershipPage() {
  const partnershipTypes = [
    {
      title: "Real Estate Agents",
      description: "Join our network of premium real estate professionals",
      icon: <Building2 className="w-8 h-8" />,
      benefits: [
        "Exclusive property listings",
        "High commission structure",
        "Marketing support",
        "Training programs",
        "Lead generation system",
      ],
      commission: "Up to 3%",
      color: "emerald",
      requirements: ["Valid real estate license", "Minimum 2 years experience", "Local market knowledge"],
    },
    {
      title: "Investment Advisors",
      description: "Partner with us to offer premium UAE real estate investments",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: [
        "Comprehensive investment products",
        "Client support services",
        "Market research access",
        "Professional development",
        "Performance bonuses",
      ],
      commission: "1.5-2.5%",
      color: "blue",
      requirements: ["Financial advisory certification", "Client portfolio", "Investment experience"],
    },
    {
      title: "International Brokers",
      description: "Expand your services with UAE property investments",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Cross-border expertise",
        "Currency hedging support",
        "Legal compliance assistance",
        "Multi-language support",
        "Global network access",
      ],
      commission: "2-4%",
      color: "purple",
      requirements: ["International brokerage license", "Multi-market experience", "Language capabilities"],
    },
    {
      title: "Wealth Managers",
      description: "Add real estate to your wealth management portfolio",
      icon: <Shield className="w-8 h-8" />,
      benefits: [
        "Diversified investment options",
        "Risk management tools",
        "Portfolio integration",
        "Client reporting systems",
        "Ongoing support",
      ],
      commission: "1-2%",
      color: "indigo",
      requirements: ["Wealth management certification", "HNW client base", "Portfolio management experience"],
    },
    {
      title: "Property Developers",
      description: "Collaborate on premium development projects",
      icon: <Building2 className="w-8 h-8" />,
      benefits: [
        "Joint venture opportunities",
        "Funding assistance",
        "Market intelligence",
        "Sales & marketing support",
        "Project management expertise",
      ],
      commission: "Profit sharing",
      color: "orange",
      requirements: ["Development track record", "Financial capacity", "Local permits & approvals"],
    },
    {
      title: "Financial Institutions",
      description: "Institutional partnerships for large-scale investments",
      icon: <DollarSign className="w-8 h-8" />,
      benefits: [
        "Bulk investment opportunities",
        "Institutional pricing",
        "Due diligence support",
        "Regulatory compliance",
        "Portfolio management",
      ],
      commission: "Negotiable",
      color: "teal",
      requirements: ["Banking/Financial license", "Institutional capacity", "Regulatory compliance"],
    },
  ]

  const partnerBenefits = [
    {
      title: "Exclusive Access",
      description: "First access to premium properties and off-market deals",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Marketing Support",
      description: "Comprehensive marketing materials and digital assets",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Training Programs",
      description: "Ongoing education and certification programs",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Technology Platform",
      description: "Advanced CRM and property management tools",
      icon: <Globe className="w-6 h-6" />,
    },
  ]

  const successStories = [
    {
      partner: "London Property Group",
      type: "Real Estate Agency",
      result: "£50M+ in UAE property sales",
      timeframe: "18 months",
      quote:
        "NOOD's partnership program transformed our international offerings. Our clients love the UAE market access.",
    },
    {
      partner: "Silicon Valley Wealth Management",
      type: "Investment Advisory",
      result: "$75M+ assets under management",
      timeframe: "2 years",
      quote: "The UAE real estate component has become our fastest-growing investment product.",
    },
    {
      partner: "Islamabad Investment Partners",
      type: "International Broker",
      result: "500+ Pakistani investors",
      timeframe: "12 months",
      quote: "NOOD's support helped us establish a thriving UAE property division.",
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
            <Badge className="bg-emerald-500 text-black mb-6">Partnership Program</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Partner with </span>
              <span className="metallic-text">NOOD</span>
            </h1>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto mb-12">
              Join our global network of real estate professionals and unlock premium UAE property investment
              opportunities for your clients
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-silver-400">
              <div className="flex items-center space-x-2">
                <Handshake className="w-5 h-5 text-emerald-400" />
                <span>500+ Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span>$2B+ Transactions</span>
              </div>
            </div>
          </motion.div>

          {/* Partnership Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-silver-800/50 backdrop-blur-sm border border-silver-700 rounded-2xl p-8 hover:border-silver-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-silver-500/10 h-full">
                  <div className={`text-${partnership.color}-400 mb-6`}>{partnership.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{partnership.title}</h3>
                  <p className="text-silver-400 mb-6 leading-relaxed">{partnership.description}</p>

                  {/* Commission */}
                  <div className="mb-6 p-4 bg-black/30 rounded-lg border border-silver-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-silver-400">Commission:</span>
                      <span className={`font-bold text-${partnership.color}-400`}>{partnership.commission}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    {partnership.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-silver-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <div className="space-y-1">
                      {partnership.requirements.map((req, i) => (
                        <div key={i} className="text-xs text-silver-400">
                          • {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/consultation">
                    <Button className="w-full metallic-button text-black group-hover:scale-105 transition-transform">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <Badge className="bg-blue-500 text-white mb-6">Partner Benefits</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Partner with NOOD?</h2>
              <p className="text-xl text-silver-400 max-w-2xl mx-auto">
                Comprehensive support system designed to help our partners succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 metallic-button rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-silver-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <Badge className="bg-purple-500 text-white mb-6">Success Stories</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Partner Success Stories</h2>
              <p className="text-xl text-silver-400 max-w-2xl mx-auto">Real results from our global partner network</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-silver-800/50 border border-silver-700 rounded-xl p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white">{story.partner}</h3>
                    <p className="text-silver-400 text-sm">{story.type}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-silver-400">Result:</p>
                      <p className="text-sm font-medium text-emerald-400">{story.result}</p>
                    </div>
                    <div>
                      <p className="text-sm text-silver-400">Timeframe:</p>
                      <p className="text-sm font-medium text-white">{story.timeframe}</p>
                    </div>
                  </div>

                  <blockquote className="text-sm text-silver-300 italic border-l-2 border-silver-600 pl-4">
                    "{story.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="bg-silver-800/20 border border-silver-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-white mb-2">Application</h4>
                  <p className="text-silver-400 text-sm">Submit partnership application with required documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-white mb-2">Review</h4>
                  <p className="text-silver-400 text-sm">Comprehensive review and due diligence process</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-white mb-2">Onboarding</h4>
                  <p className="text-silver-400 text-sm">Training, system access, and partnership agreement</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-white mb-2">Launch</h4>
                  <p className="text-silver-400 text-sm">Go-live with full support and ongoing assistance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-black/30 border border-silver-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Partnership Inquiries</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-silver-400" />
                  <span className="text-white font-medium">Global Headquarters</span>
                  <span className="text-silver-300 text-sm">Al Maryah Island, Abu Dhabi</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-silver-400" />
                  <span className="text-white font-medium">Partnership Hotline</span>
                  <span className="text-silver-300 text-sm">+971 2 123 4567</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-silver-400" />
                  <span className="text-white font-medium">Partnership Email</span>
                  <span className="text-silver-300 text-sm">partnerships@noodproperties.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="silver-bg rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Partner with Us?</h3>
            <p className="text-black/80 text-xl mb-8">
              Join our global network and unlock premium UAE real estate opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button className="bg-black text-white hover:bg-silver-800 px-8 py-4 text-lg">
                  <Handshake className="w-5 h-5 mr-2" />
                  Apply for Partnership
                </Button>
              </Link>
              <a
                href="mailto:partnerships@noodproperties.com"
                className="inline-flex items-center justify-center border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Partnership Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
