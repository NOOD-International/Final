"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, TrendingUp, Calendar } from "lucide-react"

interface Property {
  id: number
  title: string
  location: string
  price: string
  roi: string
  completion: string
  image: string
  description: string
}

const properties: Property[] = [
  {
    id: 1,
    title: "Saadiyat Island Luxury Villa",
    location: "Saadiyat Island, Abu Dhabi",
    price: "AED 8,500,000",
    roi: "12% Annual ROI",
    completion: "Q4 2024",
    image: "/luxury-villa-saadiyat.png",
    description: "Exclusive beachfront villa with private beach access and world-class amenities.",
  },
  {
    id: 2,
    title: "Al Reem Island Penthouse",
    location: "Al Reem Island, Abu Dhabi",
    price: "AED 6,200,000",
    roi: "10% Annual ROI",
    completion: "Q2 2025",
    image: "/al-reem-penthouse.png",
    description: "Sky-high penthouse with panoramic city and sea views in premium location.",
  },
  {
    id: 3,
    title: "Yas Island Marina Apartment",
    location: "Yas Island, Abu Dhabi",
    price: "AED 3,800,000",
    roi: "14% Annual ROI",
    completion: "Q1 2025",
    image: "/yas-island-marina-apartment.png",
    description: "Modern waterfront apartment with marina views and resort-style living.",
  },
  {
    id: 4,
    title: "Downtown Abu Dhabi Tower",
    location: "Downtown, Abu Dhabi",
    price: "AED 4,500,000",
    roi: "11% Annual ROI",
    completion: "Q3 2024",
    image: "/abu-dhabi-tower.png",
    description: "Prime commercial district location with excellent connectivity and amenities.",
  },
  {
    id: 5,
    title: "Corniche Waterfront Villa",
    location: "Corniche, Abu Dhabi",
    price: "AED 12,000,000",
    roi: "9% Annual ROI",
    completion: "Q1 2026",
    image: "/corniche-waterfront-villa.png",
    description: "Ultra-luxury waterfront villa with private jetty and exclusive beach access.",
  },
]

export function Property3DSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm">
      {/* Main slider container */}
      <div className="relative w-full h-full perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Property Image */}
                <motion.div
                  className="relative group order-1 lg:order-1"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-2xl">
                    <img
                      src={properties[currentIndex].image || "/images/nood-official-logo.png"}
                      alt={properties[currentIndex].title}
                      className="w-full h-48 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                      <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="truncate max-w-[200px] md:max-w-none">
                          {properties[currentIndex].location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Property Details */}
                <motion.div
                  className="space-y-4 md:space-y-6 order-2 lg:order-2"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {properties[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      {properties[currentIndex].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
                      <div className="text-lg md:text-2xl font-bold text-white mb-1 truncate">
                        {properties[currentIndex].price}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">Starting Price</div>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-1" />
                        <span className="text-lg md:text-xl font-bold text-green-400">
                          {properties[currentIndex].roi}
                        </span>
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">Expected ROI</div>
                    </div>
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-1" />
                        <span className="text-lg md:text-xl font-bold text-blue-400">
                          {properties[currentIndex].completion}
                        </span>
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">Completion</div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Property Details
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        title="Previous property"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        title="Next property"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2 z-10">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            title={`Go to property ${index + 1}`}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Property Counter */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/50 backdrop-blur-sm text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm z-10">
        {currentIndex + 1} / {properties.length}
      </div>
    </div>
  )
}
