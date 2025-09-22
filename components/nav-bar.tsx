"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NoodLiquidLogo } from "@/components/nood-liquid-logo"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Property Evaluation", href: "/property-evaluation" },
      { name: "Property Listing", href: "/property-listing" },
      { name: "ROI Calculator", href: "/calculator" },
      { name: "Consultation", href: "/consultation" },
    ],
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "Countries",
    href: "/clientele#countries",
    submenu: [
      { name: "Abu Dhabi", href: "/abu-dhabi" },
      { name: "London", href: "/london" },
      { name: "San Jose", href: "/san-jose" },
      { name: "Pakistan", href: "/pakistan" },
      { name: "Russia", href: "/russia" },
    ],
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Clientele",
    href: "/clientele",
  },
  {
    name: "Support",
    href: "/support",
  },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-silver-800/50" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <NoodLiquidLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-silver-300 hover:text-silver-100 transition-colors duration-200",
                        pathname === item.href && "text-silver-100",
                      )}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Submenu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-silver-800/50 rounded-lg shadow-xl transition-all duration-200",
                        activeSubmenu === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2",
                      )}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-silver-300 hover:text-silver-100 hover:bg-silver-800/30 transition-colors duration-200",
                              pathname === subItem.href && "text-silver-100 bg-silver-800/20",
                            )}
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-silver-300 hover:text-silver-100 transition-colors duration-200",
                      pathname === item.href && "text-silver-100",
                    )}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            <ProfileDropdown />
            <Button asChild className="bg-silver-600 hover:bg-silver-700 text-white text-sm px-4 py-2">
              <Link href="/consultation">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-silver-300 hover:text-silver-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-2 bg-black/95 backdrop-blur-md border-t border-silver-800/50">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-2 text-left text-silver-300 hover:text-silver-100 hover:bg-silver-800/30 transition-colors duration-200",
                        pathname === item.href && "text-silver-100 bg-silver-800/20",
                      )}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeSubmenu === item.name && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Mobile Submenu */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        activeSubmenu === item.name ? "max-h-48" : "max-h-0",
                      )}
                    >
                      <div className="pl-6 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-silver-400 hover:text-silver-100 hover:bg-silver-800/30 transition-colors duration-200",
                              pathname === subItem.href && "text-silver-100 bg-silver-800/20",
                            )}
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-silver-300 hover:text-silver-100 hover:bg-silver-800/30 transition-colors duration-200",
                      pathname === item.href && "text-silver-100 bg-silver-800/20",
                    )}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="px-4 py-4 space-y-3 border-t border-silver-800/50">
              <div className="flex items-center justify-between">
                <LanguageSelector />
                <ThemeToggle />
                <ProfileDropdown />
              </div>
              <Button asChild className="w-full bg-silver-600 hover:bg-silver-700 text-white text-sm px-4 py-2">
                <Link href="/consultation" onClick={closeMenu}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
