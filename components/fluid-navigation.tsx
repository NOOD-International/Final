"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Calculator, Users, Phone, Briefcase, ChevronDown, Building2, Globe, Award } from "lucide-react"
import Link from "next/link"
import { NoodLiquidLogo } from "./nood-liquid-logo"
import { SimpleThemeToggle } from "./simple-theme-toggle"
import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<any>
  submenu?: { name: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/", icon: Home },
  { 
    name: "Services", 
    href: "/services", 
    icon: Briefcase,
    submenu: [
      { name: "Property Evaluation", href: "/property-evaluation" },
      { name: "Property Listing", href: "/property-listing" },
      { name: "ROI Calculator", href: "/calculator" },
      { name: "Consultation", href: "/consultation" },
    ]
  },
  { name: "Process", href: "/process", icon: Building2 },
  { 
    name: "Countries", 
    href: "/clientele#countries", 
    icon: Globe,
    submenu: [
      { name: "Abu Dhabi", href: "/abu-dhabi" },
      { name: "London", href: "/london" },
      { name: "San Jose", href: "/san-jose" },
      { name: "Pakistan", href: "/pakistan" },
      { name: "Russia", href: "/russia" },
    ]
  },
  { name: "Portfolio", href: "/portfolio", icon: Award },
  { name: "Clientele", href: "/clientele", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function FluidNavigation() {
  const locale = "en" // useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

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
              <motion.div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className={cn(
                      "w-3 h-3 transition-transform duration-200",
                      activeSubmenu === item.name && "rotate-180"
                    )} />
                  )}
                </Link>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl z-50"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={`/${locale}${subItem.href}`}
                        className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setActiveSubmenu(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
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
                  <div>
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 py-2"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-lg">{item.name}</span>
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={`/${locale}${subItem.href}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-white/60 hover:text-white/80 transition-colors duration-200 py-1 text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Mobile Theme Toggle */}
              <motion.div variants={itemVariants} initial="closed" animate="open" custom={navigationItems.length}>
                <div className="pt-4 border-t border-white/10">
                  <SimpleThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
