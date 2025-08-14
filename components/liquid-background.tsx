"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface LiquidBackgroundProps {
  variant?: "gradient" | "particles" | "waves" | "neural" | "plasma" | "aurora" | "cosmic" | "matrix"
  intensity?: number
  className?: string
}

export function LiquidBackground({ variant = "aurora", intensity = 0.6, className = "" }: LiquidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create metallic aurora effect
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(156, 163, 175, ${0.1 * intensity})`)
      gradient.addColorStop(0.3, `rgba(107, 114, 128, ${0.15 * intensity})`)
      gradient.addColorStop(0.6, `rgba(75, 85, 99, ${0.1 * intensity})`)
      gradient.addColorStop(1, `rgba(31, 41, 55, ${0.05 * intensity})`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add flowing metallic waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + time * 0.02 + i * 2) * 50 * intensity +
            Math.sin(x * 0.005 + time * 0.01 + i * 1.5) * 30 * intensity
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const waveGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        waveGradient.addColorStop(0, `rgba(148, 163, 184, ${0.05 * intensity})`)
        waveGradient.addColorStop(1, `rgba(71, 85, 105, ${0.02 * intensity})`)

        ctx.fillStyle = waveGradient
        ctx.fill()
      }
    }

    const drawCosmic = () => {
      // Placeholder for cosmic effect drawing logic
    }

    const drawMatrix = () => {
      // Placeholder for matrix effect drawing logic
    }

    const animate = () => {
      time += 1

      switch (variant) {
        case "aurora":
          drawAurora()
          break
        case "cosmic":
          drawCosmic()
          break
        case "matrix":
          drawMatrix()
          break
        default:
          // Handle other variants here
          break
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [variant, intensity])

  const drawMetallicGradient = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, `hsla(0, 0%, ${10 + Math.sin(time) * 5}%, 0.9)`)
    gradient.addColorStop(0.3, `hsla(0, 0%, ${25 + Math.cos(time * 0.7) * 10}%, 0.7)`)
    gradient.addColorStop(0.7, `hsla(0, 0%, ${15 + Math.sin(time * 1.2) * 8}%, 0.8)`)
    gradient.addColorStop(1, `hsla(0, 0%, 5%, 0.95)`)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add metallic shimmer waves
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(0, height / 2)

      for (let x = 0; x <= width; x += 10) {
        const y = height / 2 + Math.sin(x * 0.01 + time * (i + 1)) * (30 + i * 15)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      ctx.fillStyle = `hsla(0, 0%, ${60 + i * 10}%, ${0.05 + i * 0.02})`
      ctx.fill()
    }
  }

  const drawSilverParticles = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      const x = (i / particleCount) * width + Math.sin(time + i * 0.1) * 80
      const y = ((Math.sin(i * 0.1 + time * 0.5) + 1) * height) / 2
      const size = Math.sin(time + i * 0.2) * 2 + 1.5
      const opacity = (Math.sin(time + i * 0.15) + 1) * 0.2 + 0.1

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
      gradient.addColorStop(0, `hsla(0, 0%, 80%, ${opacity})`)
      gradient.addColorStop(1, `hsla(0, 0%, 40%, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, size * 3, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const drawMetallicWaves = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const waveCount = 4

    for (let w = 0; w < waveCount; w++) {
      ctx.beginPath()
      ctx.moveTo(0, height)

      for (let x = 0; x <= width; x += 5) {
        const y = height - (Math.sin(x * 0.005 + time * (w + 1) * 0.5) + 1) * (height / (w + 2))
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      const brightness = 20 + w * 15 + Math.sin(time) * 10
      ctx.fillStyle = `hsla(0, 0%, ${brightness}%, ${0.15 - w * 0.03})`
      ctx.fill()
    }
  }

  const drawSilverNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const nodeCount = 15
    const nodes: { x: number; y: number }[] = []

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.sin(time + i * 0.5) * 0.3 + 0.5) * width,
        y: (Math.cos(time * 0.8 + i * 0.7) * 0.3 + 0.5) * height,
      })
    }

    // Draw connections
    ctx.strokeStyle = `hsla(0, 0%, 60%, 0.2)`
    ctx.lineWidth = 1

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const opacity = ((120 - distance) / 120) * 0.3
          ctx.strokeStyle = `hsla(0, 0%, 70%, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.stroke()
        }
      }
    }

    // Draw nodes
    nodes.forEach((node, i) => {
      const pulse = Math.sin(time * 2 + i) * 0.5 + 0.5
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6)
      gradient.addColorStop(0, `hsla(0, 0%, 90%, ${0.6 * pulse})`)
      gradient.addColorStop(1, `hsla(0, 0%, 50%, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  const drawMetallicPlasma = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    for (let x = 0; x < width; x += 3) {
      for (let y = 0; y < height; y += 3) {
        const value =
          Math.sin(x * 0.01 + time) + Math.sin(y * 0.01 + time * 1.2) + Math.sin((x + y) * 0.01 + time * 0.8)

        const brightness = Math.floor((value + 3) * 25) + 20
        const index = (y * width + x) * 4

        data[index] = brightness // R
        data[index + 1] = brightness // G
        data[index + 2] = brightness // B
        data[index + 3] = 80 // A
      }
    }

    ctx.putImageData(imageData, 0, 0)
  }

  const drawSilverAurora = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, `hsla(0, 0%, ${30 + Math.sin(time) * 10}%, 0.8)`)
    gradient.addColorStop(0.5, `hsla(0, 0%, ${50 + Math.cos(time * 0.7) * 15}%, 0.6)`)
    gradient.addColorStop(1, `hsla(0, 0%, ${20 + Math.sin(time * 1.2) * 8}%, 0.9)`)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add silver aurora bands
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(0, height * 0.3)

      for (let x = 0; x <= width; x += 10) {
        const y = height * 0.3 + Math.sin(x * 0.008 + time * (i + 1) * 0.3) * (25 + i * 12)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      const brightness = 60 + i * 15 + Math.sin(time) * 10
      ctx.fillStyle = `hsla(0, 0%, ${brightness}%, ${0.1 + i * 0.03})`
      ctx.fill()
    }
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ mixBlendMode: "screen" }}
    />
  )
}
