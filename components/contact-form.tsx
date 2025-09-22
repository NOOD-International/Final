"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, User, Mail, Phone, MessageSquare, Building } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

// Using CSS classes instead of inline styles

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  investmentAmount: string
  preferredLocation: string
  message: string
}

const investmentAmounts = [
  "Under $100,000",
  "$100,000 - $500,000", 
  "$500,000 - $1,000,000",
  "$1,000,000 - $5,000,000",
  "Over $5,000,000"
]

const preferredLocations = [
  "Abu Dhabi",
  "Dubai", 
  "London",
  "Multiple Locations",
  "Not Sure Yet"
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentAmount: "",
    preferredLocation: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        investmentAmount: "",
        preferredLocation: "",
        message: ""
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center nood-hover-bg-dark">
          <Send className="w-8 h-8 nood-brand-color" />
        </div>
        <h3 className="text-2xl font-bold mb-4 nood-brand-color">
          Message Sent Successfully!
        </h3>
        <p className="nood-sub-color">
          Thank you for your inquiry. Our team will get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <GlassmorphicCard className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              <Building className="w-4 h-4 inline mr-2" />
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        {/* Investment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              Investment Amount
            </label>
            <select
              name="investmentAmount"
              value={formData.investmentAmount}
              onChange={handleInputChange}
              title="Select your investment amount range"
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
            >
              <option value="">Select investment range</option>
              {investmentAmounts.map(amount => (
                <option key={amount} value={amount} className="bg-gray-800">
                  {amount}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 nood-brand-color">
              Preferred Location
            </label>
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              title="Select your preferred investment location"
              className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors nood-brand-border nood-focus-ring"
            >
              <option value="">Select preferred location</option>
              {preferredLocations.map(location => (
                <option key={location} value={location} className="bg-gray-800">
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 nood-brand-color">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-none nood-brand-border nood-focus-ring"
            placeholder="Tell us about your investment goals, timeline, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed nood-brand-bg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </div>
      </form>
    </GlassmorphicCard>
  )
}
