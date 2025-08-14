"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Building2,
  TrendingUp,
  MapPin,
  Globe,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Umbrella,
  Cloud,
  Sun,
  Cpu,
  Mountain,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CityContentSectionsProps {
  currentCity: string
  currentSection: number
}

export function CityContentSections({ currentCity, currentSection }: CityContentSectionsProps) {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const glideVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Abu Dhabi Content Sections
  const abuDhabiSections = [
    {
      title: "Abu Dhabi Excellence",
      subtitle: "Capital of Opportunities",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-4xl">🇦🇪</span>
              <Badge className="bg-emerald-500 text-black">Abu Dhabi Headquarters</Badge>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="metallic-text">Abu Dhabi</span>
              <br />
              <span className="text-white">Real Estate Capital</span>
            </h1>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto mb-12">
              The heart of UAE's property market - where tradition meets innovation, creating unparalleled investment
              opportunities
            </p>
          </div>

          <div className="bg-black/50 border border-silver-800 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-4">NOOD Abu Dhabi (Headquarters)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-silver-400" />
                <span className="text-silver-300">Maqam Tower, Al Maryah Island</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-silver-400" />
                <span className="text-silver-300">+971 56 7575 075</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-silver-400" />
                <span className="text-silver-300">admin@noodproperties.com</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Market Performance 2024",
      subtitle: "Leading Investment Returns",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Abu Dhabi Market Highlights</h2>
            <p className="text-silver-400">Leading the region in property investment returns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Capital Appreciation",
                value: "12.5%",
                description: "Average annual growth",
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                title: "Rental Yields",
                value: "8.2%",
                description: "Highest globally for luxury",
                icon: <Building2 className="w-6 h-6" />,
              },
              {
                title: "Tax Benefits",
                value: "0%",
                description: "No capital gains tax",
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: "Market Growth",
                value: "25%",
                description: "Transaction volume increase",
                icon: <Globe className="w-6 h-6" />,
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 border border-silver-800 rounded-xl p-6 text-center hover:border-silver-600 transition-colors"
              >
                <div className="text-emerald-400 mb-4 flex justify-center">{highlight.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                <div className="text-lg font-semibold text-silver-300 mb-2">{highlight.title}</div>
                <div className="text-sm text-silver-400">{highlight.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Prime Investment Locations",
      subtitle: "Abu Dhabi's Best Destinations",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Prime Investment Locations</h2>
            <p className="text-silver-400">Abu Dhabi's most sought-after property destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Al Maryah Island",
                type: "Financial District",
                price: "AED 1.2M - 8.5M",
                roi: "9.1%",
                highlights: ["Abu Dhabi Global Market", "Luxury shopping", "Premium dining"],
              },
              {
                name: "Saadiyat Island",
                type: "Cultural District",
                price: "AED 2.1M - 15M",
                roi: "8.7%",
                highlights: ["Louvre Abu Dhabi", "Beach access", "Golf courses"],
              },
              {
                name: "Yas Island",
                type: "Entertainment Hub",
                price: "AED 950K - 6.2M",
                roi: "8.9%",
                highlights: ["Ferrari World", "Yas Marina", "F1 Circuit"],
              },
              {
                name: "Al Reem Island",
                type: "Residential Paradise",
                price: "AED 800K - 4.5M",
                roi: "9.3%",
                highlights: ["Marina views", "Family-friendly", "Modern amenities"],
              },
            ].map((location, index) => (
              <div key={index} className="bg-black/50 border border-silver-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    <p className="text-silver-400">{location.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-bold">{location.roi} ROI</div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-silver-300 font-semibold">{location.price}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {location.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm text-silver-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  href="/consultation"
                  className="block w-full text-center py-3 metallic-button text-black font-medium rounded-lg transition-all hover:scale-105"
                >
                  Explore Properties
                </Link>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  // London Content Sections
  const londonSections = [
    {
      title: "London Gateway",
      subtitle: "Escape the Rain to Sunshine",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <Badge className="bg-blue-500 text-white flex items-center space-x-2">
                <Umbrella className="w-4 h-4" />
                <span>London Office</span>
              </Badge>
              <span className="text-4xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Escape London's Rain to </span>
              <span className="metallic-text">Abu Dhabi's Sunshine</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Why UK investors are choosing Abu Dhabi real estate for superior returns, tax benefits, and year-round
              sunshine
            </p>
          </div>

          <div className="bg-black/50 border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Cloud className="w-6 h-6 text-slate-400 mr-2" />
                  <span className="text-slate-400">London Today</span>
                </div>
                <p className="text-2xl font-bold text-slate-300">8°C</p>
                <p className="text-sm text-slate-400">Rainy & Cold</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sun className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400">Abu Dhabi Today</span>
                </div>
                <p className="text-2xl font-bold text-yellow-400">28°C</p>
                <p className="text-sm text-yellow-300">Sunny & Warm</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "UK vs UAE Investment",
      subtitle: "Superior Returns Comparison",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">UK vs UAE Property Investment</h2>
            <p className="text-slate-400">Real data showing why Abu Dhabi outperforms London property market</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-black/50 border border-slate-700 rounded-xl">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-300">Investment Metric</th>
                  <th className="text-center p-4 text-blue-400">🇬🇧 London</th>
                  <th className="text-center p-4 text-emerald-400">🇦🇪 Abu Dhabi</th>
                  <th className="text-center p-4 text-yellow-400">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Property Price Growth",
                    uk: "2.1% annually",
                    uae: "8.5% annually",
                    advantage: "UAE +6.4%",
                  },
                  { metric: "Rental Yields", uk: "3-4%", uae: "6-9%", advantage: "UAE +3-5%" },
                  {
                    metric: "Capital Gains Tax",
                    uk: "28% on property",
                    uae: "0% tax-free",
                    advantage: "UAE saves 28%",
                  },
                  { metric: "Stamp Duty", uk: "Up to 12%", uae: "4% registration", advantage: "UAE saves 8%" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="p-4 font-medium text-white">{item.metric}</td>
                    <td className="p-4 text-center text-slate-300">{item.uk}</td>
                    <td className="p-4 text-center text-slate-300">{item.uae}</td>
                    <td className="p-4 text-center font-bold text-emerald-400">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: "Investment Opportunities",
      subtitle: "Premium Properties for UK Investors",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Current Investment Opportunities</h2>
            <p className="text-slate-400">Premium Abu Dhabi properties available to UK investors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Luxury Apartments",
                location: "Al Maryah Island",
                price: "From £450,000",
                roi: "8.2% annually",
                features: ["Sea views", "Premium amenities", "Capital appreciation"],
              },
              {
                type: "Commercial Offices",
                location: "Abu Dhabi Global Market",
                price: "From £850,000",
                roi: "9.1% annually",
                features: ["Business hub", "Tax benefits", "High demand"],
              },
              {
                type: "Residential Villas",
                location: "Saadiyat Island",
                price: "From £1,200,000",
                roi: "7.5% annually",
                features: ["Beach access", "Cultural district", "Family-friendly"],
              },
            ].map((property, index) => (
              <div key={index} className="bg-black/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.type}</h3>
                <p className="text-slate-400 mb-4">{property.location}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Starting Price:</span>
                    <span className="font-bold text-white">{property.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Expected ROI:</span>
                    <span className="font-bold text-emerald-400">{property.roi}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/consultation"
                  className="block w-full text-center py-3 metallic-button text-black font-medium rounded-lg transition-all hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  // San Jose Content Sections
  const sanJoseSections = [
    {
      title: "Silicon Valley Bridge",
      subtitle: "Tech Meets Real Estate",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-4xl">🇺🇸</span>
              <Badge className="bg-blue-500 text-white flex items-center space-x-2">
                <Cpu className="w-4 h-4" />
                <span>Silicon Valley Office</span>
              </Badge>
              <span className="text-4xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Silicon Valley
              </span>
              <span className="text-white"> to </span>
              <span className="metallic-text">UAE Real Estate</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
              Tech professionals are diversifying beyond stocks with UAE's booming real estate market
            </p>
          </div>

          <div className="bg-black/50 border border-blue-700 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Cpu className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-blue-400">Tech Stocks</span>
                </div>
                <p className="text-2xl font-bold text-blue-300">12-15%</p>
                <p className="text-sm text-blue-200">High volatility</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-green-400">UAE Real Estate</span>
                </div>
                <p className="text-2xl font-bold text-green-400">8-12%</p>
                <p className="text-sm text-green-300">Stable growth</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tech vs Real Estate",
      subtitle: "Smart Diversification",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tech Stocks vs UAE Real Estate</h2>
            <p className="text-blue-200">Smart diversification for Silicon Valley professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Portfolio Diversification",
                description: "Balance tech stocks with stable real estate",
                icon: "📊",
              },
              { title: "Tax Optimization", description: "UAE's 0% capital gains tax maximizes returns", icon: "💰" },
              { title: "Global Mobility", description: "Golden visa programs for tech professionals", icon: "🌍" },
              {
                title: "Future-Proof Investment",
                description: "UAE's Vision 2071 aligns with tech innovation",
                icon: "🚀",
              },
              { title: "Stable Currency", description: "AED pegged to USD provides stability", icon: "💵" },
              { title: "Tech Hub Growth", description: "Dubai emerging as Middle East tech capital", icon: "🏙️" },
            ].map((benefit, index) => (
              <div key={index} className="bg-black/50 border border-blue-700 rounded-xl p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Tech-Forward Opportunities",
      subtitle: "Properties for Tech Professionals",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tech-Forward Investment Opportunities</h2>
            <p className="text-blue-200">UAE properties perfect for tech professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Smart City Apartments",
                location: "Dubai South",
                price: "From $180,000",
                roi: "9.2% annually",
                features: ["IoT integration", "Sustainable design", "Tech infrastructure"],
              },
              {
                type: "Business Bay Offices",
                location: "Dubai Business Bay",
                price: "From $320,000",
                roi: "8.8% annually",
                features: ["Tech companies hub", "Modern facilities", "High demand"],
              },
              {
                type: "Marina Penthouses",
                location: "Dubai Marina",
                price: "From $850,000",
                roi: "7.5% annually",
                features: ["Luxury amenities", "Waterfront views", "Premium location"],
              },
            ].map((property, index) => (
              <div key={index} className="bg-black/50 border border-blue-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.type}</h3>
                <p className="text-blue-200 mb-4">{property.location}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Starting Price:</span>
                    <span className="font-bold text-white">{property.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Expected ROI:</span>
                    <span className="font-bold text-green-400">{property.roi}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-blue-200">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/consultation"
                  className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all hover:scale-105"
                >
                  Explore Investment
                </Link>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  // Islamabad Content Sections
  const islamabadSections = [
    {
      title: "Pakistan Partnership",
      subtitle: "Cultural Bridge to Success",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-4xl">🇵🇰</span>
              <Badge className="bg-green-600 text-white flex items-center space-x-2">
                <Mountain className="w-4 h-4" />
                <span>Islamabad Office</span>
              </Badge>
              <span className="text-4xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
                Pakistan
              </span>
              <span className="text-white"> to </span>
              <span className="metallic-text">UAE Success</span>
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto mb-12">
              Pakistani investors are building generational wealth through UAE real estate
            </p>
          </div>

          <div className="bg-black/50 border border-green-700 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Mountain className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-green-400">Pakistan Real Estate</span>
                </div>
                <p className="text-2xl font-bold text-green-300">3-5%</p>
                <p className="text-sm text-green-200">Annual growth</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400">UAE Real Estate</span>
                </div>
                <p className="text-2xl font-bold text-yellow-400">8-12%</p>
                <p className="text-sm text-yellow-300">Annual growth</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cultural Advantages",
      subtitle: "Why UAE Feels Like Home",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cultural Advantages for Pakistani Investors</h2>
            <p className="text-green-200">Why UAE feels like a second home for Pakistanis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Islamic Finance Compliance",
                description: "Sharia-compliant investment options available",
                icon: "🕌",
              },
              { title: "Cultural Familiarity", description: "Large Pakistani expat community", icon: "🤝" },
              { title: "Language Advantage", description: "Urdu and English widely spoken", icon: "🗣️" },
              { title: "Religious Facilities", description: "Abundant mosques and halal facilities", icon: "🕌" },
              {
                title: "Family Values",
                description: "Family-oriented society with excellent education",
                icon: "👨‍👩‍👧‍👦",
              },
              { title: "Business Networks", description: "Strong Pakistan-UAE business relationships", icon: "🌐" },
            ].map((benefit, index) => (
              <div key={index} className="bg-black/50 border border-green-700 rounded-xl p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Investment Opportunities",
      subtitle: "Perfect for Pakistani Families",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Investment Opportunities for Pakistanis</h2>
            <p className="text-green-200">Properties perfect for Pakistani families and investors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Family Villas",
                location: "Dubai Hills Estate",
                price: "From PKR 4.5 Crore",
                roi: "8.5% annually",
                features: ["Family-friendly", "Pakistani community", "Top schools"],
              },
              {
                type: "Halal Investment Apartments",
                location: "Sharjah",
                price: "From PKR 2.8 Crore",
                roi: "9.2% annually",
                features: ["Sharia-compliant", "Cultural center", "Affordable luxury"],
              },
              {
                type: "Business Offices",
                location: "Dubai International City",
                price: "From PKR 1.5 Crore",
                roi: "8.8% annually",
                features: ["Pakistani businesses", "Trade hub", "Growing demand"],
              },
            ].map((property, index) => (
              <div key={index} className="bg-black/50 border border-green-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.type}</h3>
                <p className="text-green-200 mb-4">{property.location}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-green-200">Starting Price:</span>
                    <span className="font-bold text-white">{property.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Expected ROI:</span>
                    <span className="font-bold text-yellow-400">{property.roi}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-green-200">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/consultation"
                  className="block w-full text-center py-3 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-medium rounded-lg transition-all hover:scale-105"
                >
                  Explore Investment
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-600 via-white to-green-600 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-black mb-2">آپ کا UAE میں سرمایہ کاری کا خواب</h3>
              <h4 className="text-xl font-bold text-black mb-4">Your UAE Investment Dream</h4>
              <p className="text-black/80 mb-6">Join thousands of Pakistani families building their future in UAE</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/consultation"
                  className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Building2 className="w-4 h-4 mr-2 inline" />
                  مشاورت بک کریں / Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const getSections = () => {
    switch (currentCity) {
      case "abu-dhabi":
        return abuDhabiSections
      case "london":
        return londonSections
      case "san-jose":
        return sanJoseSections
      case "islamabad":
        return islamabadSections
      default:
        return []
    }
  }

  const sections = getSections()
  const currentSectionData = sections[currentSection]

  if (!currentSectionData || currentCity === "home") return null

  return (
    <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatePresence mode="wait" custom={currentSection}>
          <motion.div
            key={`${currentCity}-${currentSection}`}
            custom={currentSection}
            variants={glideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentSectionData.title}
              </motion.h2>
              <motion.p
                className="text-xl text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentSectionData.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentSectionData.content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
