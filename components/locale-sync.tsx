"use client"
import { useLocale } from "next-intl"
import { useEffect } from "react"

export default function LocaleSync() {
  const locale = useLocale()
  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${locale}; Path=/; Max-Age=31536000`
  }, [locale])
  return null
}
