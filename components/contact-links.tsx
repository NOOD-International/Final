"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageSquare, MapPin, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactLinks() {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+971 56 7575 075",
      href: "tel:+971567575075",
      description: "Direct line to our Abu Dhabi HQ",
      color: "emerald",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "WhatsApp",
      value: "Chat Now",
      href: "https://wa.me/971567575075",
      description: "Instant property consultation",
      color: "green",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@noodproperties.com",
      href: "mailto:info@noodproperties.com",
      description: "Detailed property inquiries",
      color: "blue",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Schedule",
      value: "Book Consultation",
      href: "/consultation",
      description: "Free 30-minute property review",
      color: "purple",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Visit Us",
      value: "Al Maryah Island",
      href: "https://maps.google.com/?q=Al+Maryah+Island+Abu+Dhabi",
      description: "Our Abu Dhabi headquarters",
      color: "orange",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      value: "noodproperties.com",
      href: "https://www.noodproperties.com",
      description: "Explore our property portfolio",
      color: "cyan",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold metallic-text mb-2">Get In Touch</h3>
        <p className="text-silver-400">Ready to invest in Abu Dhabi real estate? Let's discuss your goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Button
              asChild
              variant="outline"
              className="w-full h-auto p-6 bg-black/50 border-silver-800 hover:border-silver-600 hover:bg-silver-900/20 transition-all duration-300 group"
            >
              <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-${method.color}-500/20 flex items-center justify-center text-${method.color}-400 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-silver-300">{method.label}</div>
                    <div className={`text-sm text-${method.color}-400 font-medium`}>{method.value}</div>
                    <div className="text-xs text-silver-500 mt-1">{method.description}</div>
                  </div>
                </div>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-silver-800">
        <Button asChild className="flex-1 metallic-button text-black font-semibold py-3">
          <a href="https://wa.me/971567575075">
            <MessageSquare className="w-5 h-5 mr-2" />
            Start WhatsApp Chat
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-silver-600 text-silver-300 hover:bg-silver-900/20 py-3 bg-transparent"
        >
          <a href="/consultation">
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Consultation
          </a>
        </Button>
      </div>
    </div>
  )
}
