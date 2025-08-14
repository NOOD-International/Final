"use client"

import { cn } from "@/lib/utils"

interface NoodLiquidLogoProps {
  className?: string
  animated?: boolean
}

export function NoodLiquidLogo({ className, animated = true }: NoodLiquidLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-silver-200", animated && "animate-pulse")}
      >
        {/* N */}
        <path
          d="M8 8 L8 32 L12 32 L12 16 L20 32 L24 32 L24 8 L20 8 L20 24 L12 8 L8 8 Z"
          fill="currentColor"
          className="drop-shadow-lg"
        />

        {/* First O */}
        <circle cx="36" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="4" className="drop-shadow-lg" />

        {/* Second O */}
        <circle cx="56" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="4" className="drop-shadow-lg" />

        {/* D */}
        <path
          d="M68 8 L68 32 L76 32 C82 32 86 28 86 20 C86 12 82 8 76 8 L68 8 Z M72 12 L76 12 C79 12 82 14 82 20 C82 26 79 28 76 28 L72 28 L72 12 Z"
          fill="currentColor"
          className="drop-shadow-lg"
        />

        {/* Liquid effect underline */}
        <path
          d="M8 36 Q20 34 36 36 T56 36 T76 36 Q86 34 96 36"
          fill="none"
          stroke="url(#liquidGradient)"
          strokeWidth="2"
          className={cn(animated && "animate-pulse")}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f3f4f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default NoodLiquidLogo
