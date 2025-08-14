"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Globe, Building2, Calculator, Users, Phone, FileText } from "lucide-react"
import { NoodLiquidLogo } from "./nood-liquid-logo"

const navigationItems = [
  { name: "Home", href: "/", icon: <Building2 className="w-4 h-4" /> },
  { name: "Portfolio", href: "/portfolio", icon: <FileText className="w-4 h-4" /> },
  { name: "Calculator", href: "/calculator", icon: <Calculator className="w-4 h-4" /> },
  { name: "Services", href: "/services", icon: <Users className="w-4 h-4" /> },
  { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
]

const countryOffices = [
  { name: "UAE", href: "/abu-dhabi", flag: "🇦🇪" },
  { name: "UK", href: "/london", flag: "🇬🇧" },
  { name: "USA", href: "/san-jose", flag: "🇺🇸" },
  { name: "Pakistan", href: "/islamabad", flag: "🇵🇰" },
]

export function FluidNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <NoodLiquidLogo className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                NOOD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Country Offices Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors duration-300">
                  <Globe className="w-4 h-4" />
                  <span>Offices</span>
                </button>

                <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {countryOffices.map((office) => (
                    <Link
                      key={office.name}
                      href={office.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-gray-100 hover:bg-gray-800/50 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="text-lg">{office.flag}</span>
                      <span>{office.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />

            <motion.div
              className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-300 hover:text-gray-100 transition-colors duration-300 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  <div className="border-t border-gray-800 pt-4 mt-4">
                    <p className="text-gray-400 text-sm mb-3">Our Offices</p>
                    {countryOffices.map((office) => (
                      <Link
                        key={office.name}
                        href={office.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-gray-100 transition-colors duration-300 py-2"
                      >
                        <span className="text-lg">{office.flag}</span>
                        <span>{office.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
