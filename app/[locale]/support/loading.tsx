"use client"

import { MessageSquare, Phone, Mail, Users } from "lucide-react"

export default function SupportLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-silver-900 to-black flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-silver-800 border-t-silver-400 rounded-full animate-spin mx-auto"></div>
          <MessageSquare className="w-8 h-8 text-silver-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold metallic-text">Loading Support Center</h2>
          <p className="text-silver-400">Connecting you with our property experts...</p>

          <div className="flex justify-center space-x-6 pt-4">
            <div className="flex items-center space-x-2 text-emerald-400">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Mail className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Expert Advice</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Users className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Global Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
