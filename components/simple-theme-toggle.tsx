"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors duration-200"
      style={{ 
        borderColor: "rgba(31,111,95,0.35)", 
        color: theme === "dark" ? "#e8f5f2" : "#1f6f5f",
        background: theme === "dark" ? "rgba(31,111,95,0.12)" : "rgba(31,111,95,0.05)"
      }}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  )
}
