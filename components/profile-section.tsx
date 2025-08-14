"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Phone, Mail, Globe, Award, TrendingUp, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-black via-silver-900 to-black border border-silver-800 rounded-2xl p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Profile Image/Logo */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-silver-400 to-silver-600 rounded-2xl flex items-center justify-center shadow-xl">
            <Building2 className="w-16 h-16 text-black" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Award className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold metallic-text mb-2">NOOD International Properties</h1>
            <p className="text-xl text-silver-300 mb-4">Emirati-led. Global Standard.</p>
            <p className="text-silver-400 leading-relaxed">
              Trust-first access to Abu Dhabi real estate for international buyers. We map the path from first call to
              handover—fees, forms, escrow, and timelines—so you never wonder what's next.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-silver-800/30 rounded-lg border border-silver-700">
              <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$500M+</div>
              <div className="text-xs text-silver-400">Portfolio Value</div>
            </div>
            <div className="text-center p-4 bg-silver-800/30 rounded-lg border border-silver-700">
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">2,500+</div>
              <div className="text-xs text-silver-400">Global Clients</div>
            </div>
            <div className="text-center p-4 bg-silver-800/30 rounded-lg border border-silver-700">
              <Building2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">850+</div>
              <div className="text-xs text-silver-400">Properties Sold</div>
            </div>
            <div className="text-center p-4 bg-silver-800/30 rounded-lg border border-silver-700">
              <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-silver-400">Client Satisfaction</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-silver-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">Al Maryah Island, Abu Dhabi</span>
            </div>
            <div className="flex items-center gap-2 text-silver-300">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">+971 56 7575 075</span>
            </div>
            <div className="flex items-center gap-2 text-silver-300">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm">info@noodproperties.com</span>
            </div>
            <div className="flex items-center gap-2 text-silver-300">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">noodproperties.com</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">ADREC Licensed</Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Escrow Certified</Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Global Network</Badge>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Premium Properties</Badge>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
