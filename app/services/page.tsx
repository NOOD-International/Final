"use client"

import { motion } from "framer-motion"
import { ServicesSection } from "@/components/services-section"
import { ROICalculator } from "@/components/roi-calculator"
import { GalaxyBackground } from "@/components/galaxy-background"
import { NavBar } from "@/components/nav-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Shield, Users, Calculator, PieChart, BarChart3, Target, Star, MapPin } from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We understand your investment goals, risk tolerance, and preferred markets.",
    icon: Users,
    duration: "1-2 hours",
  },
  {
    step: "02",
    title: "Market Analysis",
    description: "Our experts analyze market trends and identify optimal investment opportunities.",
    icon: BarChart3,
    duration: "3-5 days",
  },
  {
    step: "03",
    title: "Property Selection",
    description: "We present curated property options that align with your investment criteria.",
    icon: Building2,
    duration: "1-2 weeks",
  },
  {
    step: "04",
    title: "Due Diligence",
    description: "Comprehensive property evaluation including legal, financial, and technical assessments.",
    icon: Shield,
    duration: "2-3 weeks",
  },
  {
    step: "05",
    title: "Investment Execution",
    description: "We handle the entire acquisition process from negotiation to closing.",
    icon: Target,
    duration: "4-6 weeks",
  },
  {
    step: "06",
    title: "Portfolio Management",
    description: "Ongoing management and optimization of your real estate investment portfolio.",
    icon: PieChart,
    duration: "Ongoing",
  },
]

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    title: "CEO, Emirates Investment Group",
    location: "Abu Dhabi, UAE",
    rating: 5,
    comment:
      "NOOD International Properties helped us diversify our portfolio with premium London properties. Their market expertise and professional service exceeded our expectations.",
    flag: "🇦🇪",
  },
  {
    name: "Sarah Johnson",
    title: "Private Investor",
    location: "London, UK",
    rating: 5,
    comment:
      "The ROI calculator and market analysis tools provided by NOOD gave me the confidence to make informed investment decisions. Excellent returns so far!",
    flag: "🇬🇧",
  },
  {
    name: "Vladimir Petrov",
    title: "Investment Director",
    location: "Moscow, Russia",
    rating: 5,
    comment:
      "Professional team with deep market knowledge. They identified opportunities in emerging markets that delivered exceptional returns for our fund.",
    flag: "🇷🇺",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GalaxyBackground />
      <NavBar />

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="outline" className="mb-6 border-emerald-500/50 text-emerald-400 text-lg px-4 py-2">
                Premium Real Estate Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Investment Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Comprehensive real estate investment solutions backed by global expertise, advanced analytics, and a
                proven track record of delivering exceptional returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/calculator">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                  >
                    <Calculator className="w-6 h-6 mr-3" />
                    Try ROI Calculator
                  </Button>
                </Link>
                <Link href="/consultation">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 text-lg bg-transparent"
                  >
                    <Users className="w-6 h-6 mr-3" />
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* ROI Calculator Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-400">
                Investment Tools
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Advanced ROI Calculator
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Make informed investment decisions with our comprehensive ROI calculator. Analyze potential returns,
                compare scenarios, and optimize your investment strategy.
              </p>
            </motion.div>

            <ROICalculator />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-400">
                Our Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Your Investment Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From initial consultation to ongoing portfolio management, we guide you through every step of your real
                estate investment journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-emerald-400">{step.step}</div>
                        <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                          <step.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="text-xs">
                        {step.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-400">
                Client Success
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Hear from investors who have achieved exceptional returns through our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gray-900/50 border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.title}</div>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {testimonial.location}
                          </div>
                        </div>
                        <div className="text-2xl">{testimonial.flag}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-12 border border-emerald-800/30"
            >
              <h3 className="text-4xl font-bold text-white mb-6">Start Your Investment Journey Today</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful investors who trust NOOD International Properties for their real estate
                investment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/calculator">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-10 py-4 text-lg"
                  >
                    <Calculator className="w-6 h-6 mr-3" />
                    Calculate Your ROI
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-10 py-4 text-lg bg-transparent"
                  >
                    <Users className="w-6 h-6 mr-3" />
                    Contact Our Experts
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
