"use client"

import { Building2, MapPin, DollarSign } from "lucide-react"

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-silver-900 to-black flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-silver-800 border-t-silver-400 rounded-full animate-spin mx-auto"></div>
          <Building2 className="w-8 h-8 text-silver-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold metallic-text">Loading Premium Properties</h2>
          <p className="text-silver-400">Preparing our exclusive Abu Dhabi portfolio...</p>

          <div className="flex justify-center space-x-6 pt-4">
            <div className="flex items-center space-x-2 text-emerald-400">
              <Building2 className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Luxury Properties</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <MapPin className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Prime Locations</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <DollarSign className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Investment Grade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
