"use client"

import { motion } from "framer-motion"
import { Calculator, TrendingUp, DirhamSign, PieChart } from "lucide-react"

const BRAND = {
  tortoiseBlue: "#1f6f5f",
}

export default function CalculatorLoading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(31,111,95,0.20) 0%, rgba(31,111,95,0.12) 100%)",
            }}
          >
            <Calculator className="w-12 h-12" style={{ color: BRAND.tortoiseBlue }} />
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(31,111,95,0.20)" }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: BRAND.tortoiseBlue }} />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(31,111,95,0.20)" }}
          >
            <DirhamSign className="w-4 h-4" style={{ color: BRAND.tortoiseBlue }} />
          </motion.div>

          <motion.div
            animate={{ y: [-5, 15, -5], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            className="absolute top-8 -left-6 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(31,111,95,0.20)" }}
          >
            <PieChart className="w-4 h-4" style={{ color: BRAND.tortoiseBlue }} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1
            className="text-3xl font-bold"
            style={{
              color: BRAND.tortoiseBlue,
            }}
          >
            Loading ROI Calculator
          </h1>
          <p className="max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Preparing your comprehensive property investment analysis tools...
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: BRAND.tortoiseBlue }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center"
          >
            <DollarSign className="w-4 h-4 text-blue-400" />
          </motion.div>

          <motion.div
            animate={{
              y: [-5, 15, -5],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-8 -left-6 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center"
          >
            <PieChart className="w-4 h-4 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
            Loading ROI Calculator
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Preparing your comprehensive property investment analysis tools...
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
