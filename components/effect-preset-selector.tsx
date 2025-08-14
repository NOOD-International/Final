"use client"

import { useState } from "react"
import { ChevronDown, Zap, RatioIcon as Balance, Gauge, Sparkles } from "lucide-react"
import type { EffectPreset } from "./webgl-background"

interface EffectPresetSelectorProps {
  currentPreset: EffectPreset
  onPresetChange: (preset: EffectPreset) => void
}

export function EffectPresetSelector({ currentPreset, onPresetChange }: EffectPresetSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const presets = [
    {
      id: "auto" as const,
      name: "Auto",
      description: "Automatically adjusts based on device",
      icon: Sparkles,
      color: "text-blue-400",
    },
    {
      id: "performance" as const,
      name: "Performance",
      description: "Optimized for battery life and older devices",
      icon: Zap,
      color: "text-green-400",
    },
    {
      id: "balanced" as const,
      name: "Balanced",
      description: "Good balance of quality and performance",
      icon: Balance,
      color: "text-yellow-400",
    },
    {
      id: "quality" as const,
      name: "Quality",
      description: "Maximum visual quality for powerful devices",
      icon: Gauge,
      color: "text-purple-400",
    },
  ]

  const currentPresetData = presets.find((p) => p.id === currentPreset) || presets[0]

  const handlePresetChange = (preset: EffectPreset) => {
    onPresetChange(preset)
    setIsOpen(false)

    // Send analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "preset_changed", {
        preset: preset,
        previous_preset: currentPreset,
      })
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-black/50 backdrop-blur-sm border border-silver-700 rounded-lg hover:bg-black/70 transition-all text-xs text-silver-300"
      >
        <currentPresetData.icon className={`w-3 h-3 ${currentPresetData.color}`} />
        <span>{currentPresetData.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-64 bg-black/90 backdrop-blur-sm border border-silver-700 rounded-lg shadow-xl z-50">
          <div className="p-2 space-y-1">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePresetChange(preset.id)}
                className={`w-full flex items-start space-x-3 p-3 rounded-lg transition-all text-left ${
                  currentPreset === preset.id ? "bg-silver-800/50 border border-silver-600" : "hover:bg-silver-800/30"
                }`}
              >
                <preset.icon className={`w-4 h-4 mt-0.5 ${preset.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{preset.name}</div>
                  <div className="text-xs text-silver-400 mt-1">{preset.description}</div>
                </div>
                {currentPreset === preset.id && <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5"></div>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
