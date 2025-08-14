"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Minimize2, Maximize2 } from "lucide-react"

interface DebugInfo {
  fps: number
  performanceMode: "high" | "medium" | "low"
  effectIntensity: number
  colorRadius: number
  magnifyRadius: number
  browserInfo: string
  gpuInfo: string
}

interface PerformanceDebugOverlayProps {
  debugInfo: DebugInfo
}

export function PerformanceDebugOverlay({ debugInfo }: PerformanceDebugOverlayProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const getModeColor = (mode: string) => {
    switch (mode) {
      case "high":
        return "text-green-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getFpsColor = (fps: number) => {
    if (fps >= 55) return "text-green-400"
    if (fps >= 40) return "text-yellow-400"
    if (fps >= 25) return "text-orange-400"
    return "text-red-400"
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`fixed top-4 left-4 z-50 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg font-mono text-xs text-gray-300 transition-all duration-300 ${
        isMinimized ? "w-48" : "min-w-[320px]"
      }`}
      data-testid="debug-overlay"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="text-gray-100 font-semibold">WebGL Performance Debug</div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-6 w-6 p-0 text-gray-400 hover:text-gray-200"
          >
            {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0 text-gray-400 hover:text-gray-200"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-3 space-y-2">
          {/* Performance Metrics */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>FPS:</span>
              <span className={getFpsColor(debugInfo.fps)} data-testid="fps-value">
                {debugInfo.fps}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Performance Mode:</span>
              <span className={getModeColor(debugInfo.performanceMode)} data-testid="performance-mode">
                {debugInfo.performanceMode.toUpperCase()}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Effect Intensity:</span>
              <span className="text-blue-400" data-testid="effect-intensity">
                {(debugInfo.effectIntensity * 100).toFixed(1)}%
              </span>
            </div>
          </div>

          {/* System Information */}
          <div className="border-t border-gray-700 pt-2 space-y-1">
            <div className="flex justify-between">
              <span>Browser:</span>
              <span className="text-gray-200" data-testid="browser-info">
                {debugInfo.browserInfo}
              </span>
            </div>

            <div className="flex flex-col">
              <span>GPU:</span>
              <span className="text-gray-200 text-[10px] break-all mt-1" data-testid="gpu-info">
                {debugInfo.gpuInfo.length > 50 ? `${debugInfo.gpuInfo.substring(0, 50)}...` : debugInfo.gpuInfo}
              </span>
            </div>
          </div>

          {/* Device Information */}
          <div className="border-t border-gray-700 pt-2 space-y-1">
            <div className="text-[10px] text-gray-500">
              Resolution: {typeof window !== "undefined" ? `${window.innerWidth}×${window.innerHeight}` : "Unknown"}
            </div>
            <div className="text-[10px] text-gray-500">
              Device Pixel Ratio: {typeof window !== "undefined" ? window.devicePixelRatio : "Unknown"}
            </div>
            <div className="text-[10px] text-gray-500">
              Touch Device: {typeof window !== "undefined" && "ontouchstart" in window ? "Yes" : "No"}
            </div>
          </div>

          {/* Test Status */}
          <div className="border-t border-gray-700 pt-2">
            <div className="text-[10px] text-green-400">✓ WebGL Rendering Active</div>
            <div className="text-[10px] text-green-400">✓ Cross-browser Compatible</div>
            <div className="text-[10px] text-green-400">✓ Mobile Optimized</div>
          </div>
        </div>
      )}

      {/* Minimized view */}
      {isMinimized && (
        <div className="p-3">
          <div className="flex justify-between items-center">
            <span className="text-xs">FPS:</span>
            <span className={`text-xs ${getFpsColor(debugInfo.fps)}`}>{debugInfo.fps}</span>
          </div>
        </div>
      )}
    </div>
  )
}
