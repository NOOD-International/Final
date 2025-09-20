"use client"

import { useEffect, useRef } from "react"

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // --- Character set (unchanged logic, just a smarter pool) ---
    // Base pool (kept from your original)
    const baseChars = "NOOD PROPERTIES ABU DHABI LUXURY INVESTMENT REAL ESTATE 01234567890+"
    const baseArray = baseChars.split("")

    // Brand signals to weight into the rain
    const brandWords = ["N", "O", "O", "D", " ", "I", "N", "T", "E", "R", "N", "A", "T", "I", "O", "N", "A", "L"]
    const brandPhone = "+971 56 7575 075".split("")

    // Build weighted pool without changing draw mechanics
    // - base chars: weight 1
    // - NOOD INTERNATIONAL letters: weight 4
    // - Phone digits/symbols: weight 6
    const charArray: string[] = []

    // Base
    for (const c of baseArray) charArray.push(c)

    // Heavier weight for brand words
    for (const c of brandWords) {
      for (let i = 0; i < 4; i++) charArray.push(c)
    }

    // Heaviest weight for phone number (shows up often but still "rainy")
    for (const c of brandPhone) {
      for (let i = 0; i < 6; i++) charArray.push(c)
    }

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Silver text
      ctx.fillStyle = "#94a3b8"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" />
}

