"use client"

import { useEffect, useRef } from "react"

export function RainOverlay() {
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

    // Rain drops array
    const raindrops: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }> = []

    // Create initial raindrops
    const createRaindrop = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.2,
    })

    // Initialize raindrops
    for (let i = 0; i < 150; i++) {
      raindrops.push(createRaindrop())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw raindrops
      raindrops.forEach((drop, index) => {
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x - 2, drop.y + drop.length)
        ctx.strokeStyle = `rgba(174, 194, 224, ${drop.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Update position
        drop.y += drop.speed
        drop.x -= 0.5 // Wind effect

        // Reset raindrop when it goes off screen
        if (drop.y > canvas.height) {
          raindrops[index] = createRaindrop()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        mixBlendMode: "screen",
        opacity: 0.6,
      }}
    />
  )
}
