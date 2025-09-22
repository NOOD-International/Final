"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Building2 } from "lucide-react"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"

// Using CSS classes instead of inline styles

/** ----- Offices ----- 
 *  Renders only cards with BOTH phone and email present (verified).
 *  UAE = HQ under ADGM. Other countries = marketing/advisory desks
 *  for Abu Dhabi/Dubai properties with remote buying support.
 */
const offices = [
  {
    country: "UAE",
    flag: "🇦🇪",
    city: "Abu Dhabi",
    address: "Al Maryah Island, Abu Dhabi",
        phone: "+971 56 75 75 075",
    email: "info@noodproperties.com",
    scope: "Headquarters • Licensed in ADGM",
    type: "hq" as const,
  },
  {
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    address: "Canary Wharf, London",
        phone: "+44 20 4524 7923",
    email: "london@noodproperties.com",
    scope: "Marketing & Client Advisory for Abu Dhabi/Dubai properties • Remote buying support",
    type: "marketing" as const,
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    city: "Islamabad",
    address: "Emirates Tower, F7 Markaz, Islamabad",
    phone: "+923059624131",
    email: "islamabad@noodproperties.com",
    scope: "Marketing & Client Advisory for Abu Dhabi/Dubai properties • Remote buying support",
    type: "marketing" as const,
  },
  // ⏳ USA — add verified number + email to render this card
  {
    country: "USA",
    flag: "🇺🇸",
    city: "San Jose",
    address: "Downtown San Jose, CA",
    phone: "", // TODO: add verified number e.g., +1 408 ...
    email: "", // TODO: add verified email e.g., usa@noodproperties.com
    scope: "Marketing & Client Advisory for Abu Dhabi/Dubai properties • Remote buying support",
    type: "marketing" as const,
  },
  // ⏳ Russia — add verified number + email to render this card
  {
    country: "Russia",
    flag: "🇷🇺",
    city: "Moscow",
    address: "Moscow & St. Petersburg",
    phone: "", // TODO: add verified number e.g., +7 495 ...
    email: "", // TODO: add verified email e.g., russia@noodproperties.com
    scope: "Marketing & Client Advisory for Abu Dhabi/Dubai properties • Remote buying support",
    type: "marketing" as const,
  },
] as const

// Only render verified offices
const verifiedOffices = offices.filter((o) => o.phone && o.email)

interface OfficeCardProps {
  office: typeof verifiedOffices[0]
  index: number
}

function OfficeCard({ office, index }: OfficeCardProps) {
  const isHQ = office.type === "hq"
  
  return (
    <motion.div
      key={`${office.country}-${office.city}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <GlassmorphicCard className={`h-full ${isHQ ? 'ring-2 ring-opacity-50 nood-brand-border' : ''}`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{office.flag}</span>
              <div>
                <h3 className="text-xl font-bold nood-brand-color">
                  {office.city}
                </h3>
                <p className="text-sm opacity-70 nood-sub-color">
                  {office.country}
                </p>
              </div>
            </div>
            {isHQ && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium nood-hover-bg-dark nood-brand-color nood-brand-border"
              >
                <Building2 className="w-3 h-3" />
                HQ
              </motion.div>
            )}
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0 nood-brand-color" />
            <p className="text-sm leading-relaxed nood-body-color">
              {office.address}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-4 flex-grow">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0 nood-brand-color" />
              <a 
                href={`tel:${office.phone}`}
                className="text-sm hover:underline transition-colors nood-body-color"
              >
                {office.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0 nood-brand-color" />
              <a 
                href={`mailto:${office.email}`}
                className="text-sm hover:underline transition-colors break-all nood-body-color"
              >
                {office.email}
              </a>
            </div>
          </div>

          {/* Scope */}
          <div className="pt-4 border-t border-opacity-10 nood-brand-border">
            <p className="text-xs leading-relaxed nood-sub-color">
              {office.scope}
            </p>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  )
}

interface OfficesSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

export function OfficesSection({ 
  title = "Our Global Offices", 
  subtitle = "Connect with our international team for personalized real estate advisory services",
  className = ""
}: OfficesSectionProps) {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-6 nood-brand-color"
          >
            {title}
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto nood-sub-color"
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Offices Grid */}
        <FluidGlassContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedOffices.map((office, index) => (
              <OfficeCard key={`${office.country}-${office.city}`} office={office} index={index} />
            ))}
          </div>
        </FluidGlassContainer>

        {/* Note about upcoming offices */}
        {offices.filter(o => !o.phone || !o.email).length > 0 && (
          <motion.div 
            className="text-center mt-12 p-6 rounded-xl nood-hover-bg nood-brand-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm nood-sub-color">
              <strong className="nood-brand-color">Coming Soon:</strong> Additional offices in USA and Russia 
              are being established. Contact our headquarters for immediate support.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
