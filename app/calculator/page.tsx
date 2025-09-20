"use client"

import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ROICalculator } from "@/components/roi-calculator"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

type Currency = {
  code: "AED" | "USD" | "GBP" | "INR" | "PKR" | "RUB" | "CNY"
  label: string
  symbol: string
}

const BRAND = {
  tortoiseBlue: "#1f6f5f", // NOOD tortoise-blue/green accent
}

const CURRENCIES: Currency[] = [
  { code: "AED", label: "AED — United Arab Emirates Dirham", symbol: "د.إ" },
  { code: "USD", label: "USD — US Dollar", symbol: "$" },
  { code: "GBP", label: "GBP — British Pound", symbol: "£" },
  { code: "INR", label: "INR — Indian Rupee", symbol: "₹" },
  { code: "PKR", label: "PKR — Pakistani Rupee", symbol: "₨" },
  { code: "RUB", label: "RUB — Russian Ruble", symbol: "₽" },
  { code: "CNY", label: "CNY — Chinese Yuan (Renminbi)", symbol: "¥" },
]

export default function CalculatorPage() {
  const [currencyCode, setCurrencyCode] = useState<Currency["code"]>("AED")
  const currentCurrency = useMemo(
    () => CURRENCIES.find((c) => c.code === currencyCode) ?? CURRENCIES[0],
    [currencyCode]
  )

  // Make the selection effective app-wide without changing ROICalculator’s API.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--currency-code", currentCurrency.code)
    root.style.setProperty("--currency-symbol", `"${currentCurrency.symbol}"`)
    // optional: plain symbol var for scripts
    root.style.setProperty("--currency-symbol-raw", currentCurrency.symbol)

    // Broadcast an event any component can listen to.
    window.dispatchEvent(
      new CustomEvent("nood:currency-change", {
        detail: { code: currentCurrency.code, symbol: currentCurrency.symbol },
      })
    )
  }, [currentCurrency])

  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="calculator" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-12">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-6 leading-tight"
                  style={{ color: BRAND.tortoiseBlue }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  ROI Calculator
                </motion.h1>
                <motion.p
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Calculate your potential returns on international property investments
                </motion.p>
              </div>
            </FluidTextReveal>

            {/* Currency Selector (no renames, no API changes) */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <label className="text-sm" style={{ color: BRAND.tortoiseBlue }}>
                Currency
              </label>
              <div className="flex items-center gap-3">
                <span
                  className="rounded-md px-3 py-1 text-sm border"
                  title={currentCurrency.label}
                  style={{
                    color: "#e8f5f2",
                    backgroundColor: "rgba(31,111,95,0.15)",
                    borderColor: "rgba(31,111,95,0.35)",
                  }}
                >
                  {currentCurrency.symbol} {currentCurrency.code}
                </span>
                <select
                  aria-label="Select currency"
                  className="rounded-md px-3 py-2 text-sm outline-none"
                  style={{
                    color: "#e8f5f2",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(31,111,95,0.35)",
                  }}
                  value={currencyCode}
                  onChange={(e) => setCurrencyCode(e.target.value as Currency["code"])}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <GlassmorphicCard>
              {/* Data hook + CSS vars for symbol/code without altering ROICalculator */}
              <div
                data-currency-code={currentCurrency.code}
                data-currency-symbol={currentCurrency.symbol}
                style={
                  {
                    // expose as CSS vars locally too
                    ["--currency-code" as any]: currentCurrency.code,
                    ["--currency-symbol" as any]: `"${currentCurrency.symbol}"`,
                    ["--currency-symbol-raw" as any]: currentCurrency.symbol,
                  } as React.CSSProperties
                }
              >
                <ROICalculator />
              </div>
            </GlassmorphicCard>

            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              ROI % is unit-agnostic. Currency selection updates symbols/labels globally so the math stays clean.
            </p>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}            </FluidTextReveal>

            <GlassmorphicCard>
              <ROICalculator />
            </GlassmorphicCard>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
