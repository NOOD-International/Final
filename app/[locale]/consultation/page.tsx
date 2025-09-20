"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Building2,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  investmentBudget: string
  propertyType: string
  timeline: string
  experience: string
  preferredContact: string
  message: string
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentBudget: "",
    propertyType: "",
    timeline: "",
    experience: "",
    preferredContact: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const budgetRanges = [
    { value: "500k-1m", label: "AED 500K - 1M", description: "Starter apartments and studios" },
    { value: "1m-3m", label: "AED 1M - 3M", description: "Premium apartments and townhouses" },
    { value: "3m-5m", label: "AED 3M - 5M", description: "Luxury properties and penthouses" },
    { value: "5m-10m", label: "AED 5M - 10M", description: "Ultra-luxury villas and estates" },
    { value: "10m+", label: "AED 10M+", description: "Exclusive waterfront and landmark properties" },
  ]

  const propertyTypes = [
    { value: "apartment", label: "Apartment", description: "High-rise living with amenities" },
    { value: "villa", label: "Villa", description: "Private homes with gardens" },
    { value: "penthouse", label: "Penthouse", description: "Luxury top-floor residences" },
    { value: "townhouse", label: "Townhouse", description: "Multi-level family homes" },
    { value: "commercial", label: "Commercial", description: "Office spaces and retail" },
    { value: "mixed", label: "Mixed Portfolio", description: "Diversified property investment" },
  ]

  const timelines = [
    { value: "immediate", label: "Immediate (1-3 months)", description: "Ready to purchase soon" },
    { value: "short", label: "Short-term (3-6 months)", description: "Planning to buy this year" },
    { value: "medium", label: "Medium-term (6-12 months)", description: "Researching and preparing" },
    { value: "long", label: "Long-term (12+ months)", description: "Future investment planning" },
  ]

  const experienceLevels = [
    { value: "first-time", label: "First-time Investor", description: "New to real estate investment" },
    { value: "some", label: "Some Experience", description: "1-3 previous investments" },
    { value: "experienced", label: "Experienced", description: "Multiple property investments" },
    { value: "professional", label: "Professional", description: "Real estate professional/developer" },
  ]

  const contactMethods = [
    { value: "whatsapp", label: "WhatsApp", description: "Instant messaging preferred" },
    { value: "phone", label: "Phone Call", description: "Voice conversation preferred" },
    { value: "email", label: "Email", description: "Written communication preferred" },
    { value: "video", label: "Video Call", description: "Face-to-face virtual meeting" },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const consultationBenefits = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Comprehensive Abu Dhabi real estate market insights and trends",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Projections",
      description: "Detailed return on investment calculations for your budget",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Legal Guidance",
      description: "Complete legal framework and documentation support",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Access to our Emirati-led team of property specialists",
    },
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CodeRain />
        </div>
        <NavBar />

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-background/50 border border-border rounded-2xl p-8"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Consultation Booked!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in Abu Dhabi real estate. Our team will contact you within 24 hours via your
                preferred method.
              </p>
              <div className="space-y-4 text-left bg-muted/20 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">Confirmation sent to {formData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">We'll contact you at {formData.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm">
                    Preferred contact: {contactMethods.find((m) => m.value === formData.preferredContact)?.label}
                  </span>
                </div>
              </div>
              <Button asChild className="mt-6">
                <a href="/">Return to Home</a>
              </Button>
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>
      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white">Free </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                Consultation
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Schedule a personalized consultation with our Abu Dhabi real estate experts. Get market insights, ROI
              analysis, and investment guidance tailored to your goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-background/50 border-border">
                  <CardHeader>
                    <CardTitle>Book Your Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Country/Region *</label>
                          <input
                            type="text"
                            required
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your country"
                          />
                        </div>
                      </div>

                      {/* Investment Details */}
                      <div>
                        <label className="block text-sm font-medium mb-3">Investment Budget *</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {budgetRanges.map((budget) => (
                            <label
                              key={budget.value}
                              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                formData.investmentBudget === budget.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="investmentBudget"
                                value={budget.value}
                                checked={formData.investmentBudget === budget.value}
                                onChange={(e) => handleInputChange("investmentBudget", e.target.value)}
                                className="sr-only"
                              />
                              <div>
                                <div className="font-medium">{budget.label}</div>
                                <div className="text-sm text-muted-foreground">{budget.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">Property Type Interest *</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {propertyTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                formData.propertyType === type.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="propertyType"
                                value={type.value}
                                checked={formData.propertyType === type.value}
                                onChange={(e) => handleInputChange("propertyType", e.target.value)}
                                className="sr-only"
                              />
                              <div>
                                <div className="font-medium">{type.label}</div>
                                <div className="text-sm text-muted-foreground">{type.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-3">Investment Timeline *</label>
                          <div className="space-y-2">
                            {timelines.map((timeline) => (
                              <label
                                key={timeline.value}
                                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                                  formData.timeline === timeline.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="timeline"
                                  value={timeline.value}
                                  checked={formData.timeline === timeline.value}
                                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                                  className="sr-only"
                                />
                                <div>
                                  <div className="font-medium text-sm">{timeline.label}</div>
                                  <div className="text-xs text-muted-foreground">{timeline.description}</div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-3">Investment Experience *</label>
                          <div className="space-y-2">
                            {experienceLevels.map((level) => (
                              <label
                                key={level.value}
                                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                                  formData.experience === level.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="experience"
                                  value={level.value}
                                  checked={formData.experience === level.value}
                                  onChange={(e) => handleInputChange("experience", e.target.value)}
                                  className="sr-only"
                                />
                                <div>
                                  <div className="font-medium text-sm">{level.label}</div>
                                  <div className="text-xs text-muted-foreground">{level.description}</div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">Preferred Contact Method *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {contactMethods.map((method) => (
                            <label
                              key={method.value}
                              className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                                formData.preferredContact === method.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method.value}
                                checked={formData.preferredContact === method.value}
                                onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                                className="sr-only"
                              />
                              <div className="font-medium text-sm text-center">{method.label}</div>
                              <div className="text-xs text-muted-foreground text-center mt-1">{method.description}</div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Additional Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          placeholder="Tell us about your specific requirements, questions, or goals..."
                        />
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full py-3 text-lg font-semibold">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Booking Consultation...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Free Consultation
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Consultation Benefits */}
            <div className="lg:col-span-1">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-background/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>What to Expect</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {consultationBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">NOOD International Properties</h4>
                      <p className="text-sm text-muted-foreground">Al Maryah Island, Abu Dhabi, UAE</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+971 56 7575 075</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>info@noodproperties.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <a href="https://wa.me/971567575075" className="text-primary hover:underline">
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-emerald-500/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Need Immediate Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Our team is available for urgent inquiries</p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://wa.me/971567575075">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
