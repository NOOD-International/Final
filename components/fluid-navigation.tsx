"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Calculator, Users, Phone, Briefcase } from "lucide-react"
import Link from "next/link"
import { NoodLiquidLogo } from "./nood-liquid-logo"
// import LanguageThemeToggle from "./language-theme-toggle"
// import { useLocale } from "next-intl"
import { SimpleThemeToggle } from "./simple-theme-toggle"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<any>
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Calculator", href: "/calculator", icon: Calculator },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Clientele", href: "/clientele", icon: Users },
]

export function FluidNavigation() {
  const locale = "en" // useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const menuVariants = {
    closed: { opacity: 0, scale: 0.8, y: -20 },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-black/20 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <NoodLiquidLogo className="w-10 h-10" />
            <motion.span
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              NOOD
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/${locale}${item.href}`}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <SimpleThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants} initial="closed" animate="open" custom={index}>
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
