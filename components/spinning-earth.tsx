"use client"

import { useEffect, useState } from "react"

export function SpinningEarth() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 opacity-20">
      <div className="relative w-32 h-32 mx-auto mt-20">
        <div
          className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-2xl"
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, #3b82f6 0%, #10b981 50%, #1e40af 100%)
            `,
            boxShadow: `
              0 0 50px rgba(59, 130, 246, 0.5),
              inset 0 0 20px rgba(0, 0, 0, 0.3)
            `,
          }}
        >
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <div className="absolute top-2 left-4 w-6 h-4 bg-green-600 rounded-full opacity-70" />
            <div className="absolute top-6 right-3 w-4 h-6 bg-green-700 rounded-full opacity-60" />
            <div className="absolute bottom-4 left-6 w-5 h-3 bg-green-600 rounded-full opacity-80" />
            <div className="absolute bottom-2 right-4 w-3 h-4 bg-green-700 rounded-full opacity-70" />
          </div>
        </div>
      </div>
    </div>
  )
}
