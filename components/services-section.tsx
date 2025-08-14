"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Shield, Globe, Calculator, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 metallic-gradient-1 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 opacity-card">
          <h2 className="metallic-text-lg text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-silver-300 max-w-3xl mx-auto opacity-text">
            Comprehensive real estate investment solutions designed for global investors seeking premium Abu Dhabi
            properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card opacity-card hover:opacity-100 transition-all duration-500 group metallic-shine overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="metallic-text text-xl font-bold group-hover:text-silver-100 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-silver-400 opacity-text group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-silver-400 opacity-text" />
                      <span className="text-sm text-silver-400 opacity-text group-hover:opacity-100 transition-opacity duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full metallic-button opacity-hover group-hover:opacity-100 transition-all duration-300"
                >
                  <Link href={service.href} className="flex items-center justify-center space-x-2">
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 opacity-card">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="metallic-text text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-silver-400 mb-6 opacity-text">
              Schedule a free consultation with our experts to explore premium Abu Dhabi real estate opportunities.
            </p>
            <Button asChild size="lg" className="metallic-button opacity-hover">
              <Link href="/consultation">{t("scheduleConsultation")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
