"use client"

import { useEffect, useState } from "react"

export function GalaxyBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }))
    setStars(newStars)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, #0f172a 0%, #020617 50%, #000000 100%),
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 96, 48, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(27, 57, 132, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Animated stars */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              transform: `translateY(${scrollY * 0.1 * (index % 3)}px)`,
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${2 + (index % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-blue-600 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${scrollY * 0.05 * (index % 4)}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
