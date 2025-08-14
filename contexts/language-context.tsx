"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar" | "ur" | "ru" | "de" | "fr" | "zh" | "ko"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.calculator": "Calculator",
    "nav.process": "Process",
    "nav.clientele": "Clientele",
    "nav.contact": "Contact",
    "hero.title": "Premium Real Estate Investment",
    "hero.subtitle": "Discover luxury properties in Abu Dhabi, Dubai, and international markets",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "المحفظة",
    "nav.calculator": "الحاسبة",
    "nav.process": "العملية",
    "nav.clientele": "العملاء",
    "nav.contact": "اتصل بنا",
    "hero.title": "استثمار عقاري متميز",
    "hero.subtitle": "اكتشف العقارات الفاخرة في أبوظبي ودبي والأسواق الدولية",
  },
  ur: {
    "nav.home": "ہوم",
    "nav.services": "خدمات",
    "nav.portfolio": "پورٹ فولیو",
    "nav.calculator": "کیلکولیٹر",
    "nav.process": "عمل",
    "nav.clientele": "کلائنٹس",
    "nav.contact": "رابطہ",
    "hero.title": "پریمیم رئیل اسٹیٹ انویسٹمنٹ",
    "hero.subtitle": "ابوظبی، دبئی اور بین الاقوامی منڈیوں میں لگژری پراپرٹیز دریافت کریں",
  },
  ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.portfolio": "Портфолио",
    "nav.calculator": "Калькулятор",
    "nav.process": "Процесс",
    "nav.clientele": "Клиенты",
    "nav.contact": "Контакты",
    "hero.title": "Премиальные инвестиции в недвижимость",
    "hero.subtitle": "Откройте для себя роскошную недвижимость в Абу-Даби, Дубае и на международных рынках",
  },
  de: {
    "nav.home": "Startseite",
    "nav.services": "Dienstleistungen",
    "nav.portfolio": "Portfolio",
    "nav.calculator": "Rechner",
    "nav.process": "Prozess",
    "nav.clientele": "Kunden",
    "nav.contact": "Kontakt",
    "hero.title": "Premium Immobilieninvestition",
    "hero.subtitle": "Entdecken Sie Luxusimmobilien in Abu Dhabi, Dubai und internationalen Märkten",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.calculator": "Calculateur",
    "nav.process": "Processus",
    "nav.clientele": "Clientèle",
    "nav.contact": "Contact",
    "hero.title": "Investissement immobilier premium",
    "hero.subtitle": "Découvrez des propriétés de luxe à Abu Dhabi, Dubaï et sur les marchés internationaux",
  },
  zh: {
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.portfolio": "投资组合",
    "nav.calculator": "计算器",
    "nav.process": "流程",
    "nav.clientele": "客户",
    "nav.contact": "联系我们",
    "hero.title": "优质房地产投资",
    "hero.subtitle": "探索阿布扎比、迪拜和国际市场的豪华房产",
  },
  ko: {
    "nav.home": "홈",
    "nav.services": "서비스",
    "nav.portfolio": "포트폴리오",
    "nav.calculator": "계산기",
    "nav.process": "프로세스",
    "nav.clientele": "고객",
    "nav.contact": "연락처",
    "hero.title": "프리미엄 부동산 투자",
    "hero.subtitle": "아부다비, 두바이 및 국제 시장의 럭셔리 부동산을 발견하세요",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Update document direction for RTL languages
    if (newLanguage === "ar" || newLanguage === "ur") {
      document.documentElement.setAttribute("dir", "rtl")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
