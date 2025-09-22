"use client"

import { motion } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { OfficesSection } from "@/components/offices-section"
// import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, Clock, MessageCircle } from "lucide-react"

// NOOD brand palette - using CSS classes instead of inline styles

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our real estate experts",
    action: "Call +971 56 7575 075",
    href: "tel:+971567575075"
  },
    {
      icon: Mail,
    title: "Email Us",
    description: "Send us your investment inquiries",
    action: "info@noodproperties.com",
    href: "mailto:info@noodproperties.com"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant responses to your questions",
    action: "Start Chat",
    href: "#chat"
    },
    {
      icon: Clock,
    title: "Business Hours",
    description: "UAE Time (GMT+4)",
    action: "Sun-Thu: 9AM-6PM",
    href: "#hours"
  }
  ]
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />
      <VideoBackground role="contact" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal text="Contact Us">
              <div className="text-center mb-16">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight nood-brand-color"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  className="text-xl max-w-3xl mx-auto mb-12 nood-sub-color"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Ready to invest in premium international real estate? Our expert team is here to guide you through every step of your investment journey.
                </motion.p>
              </div>
            </FluidTextReveal>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactMethods.map((method, index) => (
                  <motion.div
                  key={method.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center p-6 rounded-xl backdrop-blur-sm border border-opacity-20 nood-hover-bg nood-brand-border"
                >
                  <method.icon
                    className="w-8 h-8 mx-auto mb-4 nood-brand-color"
                  />
                  <h3
                    className="text-lg font-semibold mb-2 nood-brand-color"
                  >
                    {method.title}
                  </h3>
                  <p
                    className="text-sm mb-4 nood-sub-color"
                  >
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className="inline-block px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80 nood-brand-bg text-white"
                  >
                    {method.action}
                  </a>
                  </motion.div>
                ))}
              </div>
                          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
                          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: BRAND.tortoiseBlue }}
              >
                Send us a Message
              </h2>
              <p
                className="text-lg"
                style={{ color: BRAND.subOnDark }}
              >
                Tell us about your investment goals and we'll get back to you within 24 hours
              </p>
                  </motion.div>

            {/* <ContactForm /> */}
            <div className="text-center p-8">
              <p className="nood-sub-color">Contact form coming soon...</p>
                </div>
          </div>
        </section>
      </VideoBackground>

      {/* Offices Section */}
      <OfficesSection />
    </div>
  )
}