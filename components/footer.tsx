"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { NoodLiquidLogo } from "./nood-liquid-logo"
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const offices = [
  {
    country: "UAE",
    city: "Abu Dhabi",
    address: "Maqam Tower, Al Maryah Island",
    phone: "+971 56 75 75 075",
    email: "abudhabi@noodproperties.com",
    flag: "🇦🇪",
  },
  {
    country: "UK",
    city: "London",
    address: "Canary Wharf, One Canada Square",
    phone: "+44 20 4524 7923",
    email: "london@noodproperties.com",
    flag: "🇬🇧",
  },
  {
    country: "USA",
    city: "San Jose",
    address: "Downtown San Jose, Tech Center",
    phone: "+1 559 514 4516",
    email: "sanjose@noodproperties.com",
    flag: "🇺🇸",
  },
  {
    country: "Pakistan",
    city: "Islamabad",
    address: "Blue Area, Diplomatic Enclave",
    phone: "+92 305 962 4131",
    email: "islamabad@noodproperties.com",
    flag: "🇵🇰",
  },
]

const quickLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Calculator", href: "/calculator" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Consultation", href: "/consultation" },
]

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/1SYK2GjyMZ/?mibextid=wwXIfr" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/nood.uae?igsh=eThtdGticHEwcnhj&utm_source=qr" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nood-international-properties-5156a136b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "X (Twitter)", icon: <Twitter className="w-5 h-5" />, href: "https://x.com/nood_ae?s=21" },
]

export function Footer() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <NoodLiquidLogo className="w-12 h-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                NOOD
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Global real estate excellence across UAE, UK, USA, and Pakistan. Your trusted partner for premium
              international property investments.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Global Offices */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-6">Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.country} className="space-y-2">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl">{office.flag}</span>
                    <h4 className="font-semibold text-gray-200">{office.city}</h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 NOOD International Properties. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-gray-200 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors duration-300">
              Terms of Service
            </Link>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Global Real Estate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
