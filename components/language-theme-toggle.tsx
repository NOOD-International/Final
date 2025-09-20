"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Sun, Moon, Globe } from "lucide-react"
import { locales, rtlLocales, AppLocale } from "@/i18n/locales"
import { useTheme } from "next-themes"

const BRAND = {
  tortoise: "var(--nood-accent)",
}

export default function LanguageThemeToggle() {
  const locale = useLocale() as AppLocale
  const t = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // When language changes, rewrite URL locale segment and set cookie
  const setLocale = (next: AppLocale) => {
    if (next === locale) return
    document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000`
    // replace leading /{locale} with /{next}
    const parts = pathname.split("/")
    parts[1] = next
    router.replace(parts.join("/") || `/${next}`)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isRTL = rtlLocales.includes(locale)

  const nextThemeLabel = theme === "dark" ? "Light" : "Dark"

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {/* Language quick switch: cycles through languages on click.
          For power users, you can swap to a select menu; this fulfills "one click" switching */}
      <button
        onClick={() => {
          const idx = locales.indexOf(locale)
          const next = locales[(idx + 1) % locales.length]
          setLocale(next)
        }}
        title={`Switch language (current: ${locale.toUpperCase()})`}
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(31,111,95,0.35)", color: "#e8f5f2", background: "rgba(31,111,95,0.12)" }}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
        <span className="opacity-60">{isRTL ? "RTL" : "LTR"}</span>
      </button>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        title={`Switch to ${nextThemeLabel} mode`}
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
        style={{ borderColor: "rgba(31,111,95,0.35)", color: "#e8f5f2", background: "rgba(31,111,95,0.12)" }}
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        <span>{nextThemeLabel}</span>
      </button>
    </div>
  )
}
