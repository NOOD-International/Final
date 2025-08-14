"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp, Globe, Shield, Users, Award, MapPin, DollarSign } from "lucide-react"

export function SkillsVisualization() {
  const expertise = [
    {
      category: "Property Types",
      skills: [
        { name: "Luxury Residential", level: 95, icon: <Building2 className="w-4 h-4" /> },
        { name: "Commercial Real Estate", level: 90, icon: <Building2 className="w-4 h-4" /> },
        { name: "Investment Properties", level: 92, icon: <TrendingUp className="w-4 h-4" /> },
        { name: "Off-Plan Developments", level: 88, icon: <MapPin className="w-4 h-4" /> },
      ],
    },
    {
      category: "Market Expertise",
      skills: [
        { name: "Abu Dhabi Market", level: 98, icon: <MapPin className="w-4 h-4" /> },
        { name: "International Clients", level: 85, icon: <Globe className="w-4 h-4" /> },
        { name: "Investment Analysis", level: 90, icon: <DollarSign className="w-4 h-4" /> },
        { name: "Market Trends", level: 87, icon: <TrendingUp className="w-4 h-4" /> },
      ],
    },
    {
      category: "Service Excellence",
      skills: [
        { name: "Client Satisfaction", level: 98, icon: <Users className="w-4 h-4" /> },
        { name: "Escrow Management", level: 95, icon: <Shield className="w-4 h-4" /> },
        { name: "Legal Compliance", level: 96, icon: <Award className="w-4 h-4" /> },
        { name: "Process Transparency", level: 99, icon: <Shield className="w-4 h-4" /> },
      ],
    },
  ]

  const getSkillColor = (level: number) => {
    if (level >= 95) return "from-emerald-500 to-green-600"
    if (level >= 90) return "from-blue-500 to-cyan-600"
    if (level >= 85) return "from-purple-500 to-pink-600"
    return "from-orange-500 to-red-600"
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold metallic-text mb-2">Our Expertise</h3>
        <p className="text-silver-400">Comprehensive real estate services with proven track record</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {expertise.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="bg-black/50 border border-silver-800 rounded-xl p-6 space-y-6"
          >
            <h4 className="text-lg font-semibold text-white border-b border-silver-800 pb-3">{category.category}</h4>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-silver-400">{skill.icon}</div>
                      <span className="text-sm font-medium text-silver-300">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{skill.level}%</span>
                  </div>

                  <div className="relative h-2 bg-silver-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category Summary */}
            <div className="pt-4 border-t border-silver-800">
              <div className="flex items-center justify-between text-sm">
                <span className="text-silver-400">Category Average</span>
                <span className="font-bold text-emerald-400">
                  {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-silver-900/50 to-black/50 border border-silver-700 rounded-xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-400">98%</div>
            <div className="text-sm text-silver-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">$500M+</div>
            <div className="text-sm text-silver-400">Properties Sold</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">2,500+</div>
            <div className="text-sm text-silver-400">Global Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">15+</div>
            <div className="text-sm text-silver-400">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
