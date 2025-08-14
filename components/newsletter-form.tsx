"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Check } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center space-x-2 text-silver-400">
        <Check className="w-4 h-4" />
        <span className="text-sm">Subscribed!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-3 py-2 bg-silver-800/50 border border-silver-700 rounded-lg text-white placeholder-silver-400 text-sm focus:outline-none focus:border-silver-500 min-w-0 flex-1"
        required
      />
      <Button type="submit" size="sm" disabled={isLoading} className="metallic-button text-black px-3 py-2">
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        ) : (
          <Mail className="w-4 h-4" />
        )}
      </Button>
    </form>
  )
}
