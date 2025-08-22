"use client"

import { cn } from "@/lib/utils"

interface NoodLiquidLogoProps {
  className?: string
  animated?: boolean
}

export function NoodLiquidLogo({ className, animated = true }: NoodLiquidLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-K1DnbMyef6TOO0mHnxOKjhlXGRlz7I.png"
        alt="NOOD Logo"
        width="120"
        height="40"
        className={cn("object-contain", animated && "animate-pulse")}
      />
    </div>
  )
}

export default NoodLiquidLogo
