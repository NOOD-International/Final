"use client"

import { useEffect, useRef } from "react"

export function DashboardChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Property investment data points
    const dataPoints = [
      { x: 0.1, y: 0.8, value: 50 },
      { x: 0.2, y: 0.7, value: 75 },
      { x: 0.3, y: 0.6, value: 120 },
      { x: 0.4, y: 0.5, value: 180 },
      { x: 0.5, y: 0.4, value: 250 },
      { x: 0.6, y: 0.35, value: 320 },
      { x: 0.7, y: 0.25, value: 420 },
      { x: 0.8, y: 0.2, value: 500 },
    ]

    let animationProgress = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Draw grid
      ctx.strokeStyle = "#475569"
      ctx.lineWidth = 0.5
      for (let i = 0; i <= 10; i++) {
        const x = (width / 10) * i
        const y = (height / 10) * i

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw animated line
      ctx.strokeStyle = "#94a3b8"
      ctx.lineWidth = 2
      ctx.beginPath()

      const visiblePoints = Math.floor(dataPoints.length * animationProgress)

      for (let i = 0; i <= visiblePoints && i < dataPoints.length; i++) {
        const point = dataPoints[i]
        const x = point.x * width
        const y = point.y * height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw data points
        ctx.fillStyle = "#cbd5e1"
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.stroke()

      // Draw value labels
      ctx.fillStyle = "#e2e8f0"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"

      for (let i = 0; i <= visiblePoints && i < dataPoints.length; i++) {
        const point = dataPoints[i]
        const x = point.x * width
        const y = point.y * height
        ctx.fillText(`$${point.value}M`, x, y - 10)
      }

      if (animationProgress < 1) {
        animationProgress += 0.01
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />
}
