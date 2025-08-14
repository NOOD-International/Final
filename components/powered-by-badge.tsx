"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, X, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PoweredByBadge() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (showSidebar && isMobile) {
      const timer = setTimeout(() => {
        setShowSidebar(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSidebar, isMobile])

  const handleClick = () => {
    setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
    <>
      <div className="relative inline-block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-2 md:px-3 py-1.5 md:py-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs text-gray-300 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]"
          onClick={handleClick}
        >
          <Building2 className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          <span className="text-xs ml-1 mr-1 hidden sm:inline">powered by</span>
          <span className="text-xs font-bold text-gray-300 truncate max-w-[120px] sm:max-w-none">
            NOOD International
          </span>
          <div className="flex ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-300 fill-current" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-full max-w-sm md:max-w-md bg-black/95 backdrop-blur-xl border-r border-gray-800 z-50 overflow-y-auto"
              onMouseEnter={() => !isMobile && setShowSidebar(true)}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-4 md:p-6 flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <Building2 className="w-12 h-12 md:w-16 md:h-16 text-silver-400" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-silver-300">NOOD International Properties</h2>
                  <p className="text-sm md:text-base text-silver-400">Premium Real Estate Solutions</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
