"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp, MapPin, DollarSign, Users, Shield } from "lucide-react"

export function PropertyDevGraphic() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      <motion.div
        className="absolute top-4 left-4"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Building2 className="w-16 h-16 text-silver-400" />
      </motion.div>

      <motion.div
        className="absolute top-8 right-8"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <TrendingUp className="w-12 h-12 text-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-6"
        animate={{
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <MapPin className="w-14 h-14 text-blue-400" />
      </motion.div>
    </div>
  )
}

export function InvestmentGraphic() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      <motion.div
        className="absolute top-6 right-6"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <DollarSign className="w-18 h-18 text-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <TrendingUp className="w-16 h-16 text-blue-400" />
      </motion.div>
    </div>
  )
}

export function ClientServiceGraphic() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Users className="w-16 h-16 text-purple-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-14 h-14 text-emerald-400" />
      </motion.div>
    </div>
  )
}

export function WebDevGraphic() {
  return <PropertyDevGraphic />
}

export function MechanicalGraphic() {
  return <InvestmentGraphic />
}

export function SEOGraphic() {
  return <ClientServiceGraphic />
}

export function PatentGraphic() {
  return <PropertyDevGraphic />
}

export function IoTGraphic() {
  return <InvestmentGraphic />
}

export function DigitalTransformationGraphic() {
  return <ClientServiceGraphic />
}
