"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Building2,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Umbrella,
  Cloud,
  Sun,
  Cpu,
  Mountain,
  Users,
  Shield,
  Award,
  Calendar,
  DollarSign,
  Home,
  Briefcase,
  Heart,
  Zap,
  Target,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface FloatingCityContentProps {
  currentCity: string
  currentSection: number
}

export function FloatingCityContent({ currentCity, currentSection }: FloatingCityContentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (currentCity !== "home") {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [currentCity])

  const floatingVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Abu Dhabi Content Sections
  const abuDhabiContent = [
    // Section 1: Welcome & Overview
    {
      title: "Welcome to Abu Dhabi",
      subtitle: "Capital of Opportunities",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl">🇦🇪</span>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 text-lg">
                UAE Capital
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Abu Dhabi Real Estate
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover the crown jewel of UAE real estate. Abu Dhabi offers unparalleled investment opportunities with
              world-class infrastructure, cultural richness, and guaranteed returns in the most stable market in the
              region.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/60 border-yellow-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Premium Properties</h3>
                <p className="text-white/80">Luxury developments with world-class amenities</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-orange-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">High ROI</h3>
                <p className="text-white/80">Average 8-12% annual returns guaranteed</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-red-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Secure Investment</h3>
                <p className="text-white/80">Government-backed stability and protection</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-md border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Why Abu Dhabi?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">0%</div>
                  <div className="text-white/80">Capital Gains Tax</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">15%</div>
                  <div className="text-white/80">Annual Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">100%</div>
                  <div className="text-white/80">Foreign Ownership</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-white/80">Security & Safety</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    // Section 2: Investment Opportunities
    {
      title: "Investment Opportunities",
      subtitle: "Prime Locations & Properties",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Prime Investment Locations</h2>
            <p className="text-xl text-white/80">Explore Abu Dhabi's most sought-after property destinations</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-yellow-500/30 backdrop-blur-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/luxury-villa-saadiyat.png" alt="Saadiyat Island Villa" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">Featured</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Saadiyat Island</h3>
                <p className="text-white/80 mb-4">Cultural District with Louvre Abu Dhabi</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Price Range:</span>
                    <span className="text-yellow-400 font-bold">AED 2.1M - 15M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Expected ROI:</span>
                    <span className="text-green-400 font-bold">8.7% annually</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Beach access & golf courses
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    World-class museums & culture
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Premium dining & shopping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-orange-500/30 backdrop-blur-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/al-reem-penthouse.png" alt="Al Reem Island Penthouse" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-orange-500 text-black">Hot Deal</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Al Reem Island</h3>
                <p className="text-white/80 mb-4">Modern residential paradise</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Price Range:</span>
                    <span className="text-orange-400 font-bold">AED 800K - 4.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Expected ROI:</span>
                    <span className="text-green-400 font-bold">9.3% annually</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Marina views & waterfront living
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Family-friendly community
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Modern amenities & facilities
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 backdrop-blur-md border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Invest?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:scale-105 transition-transform"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Building2 className="w-5 h-5 mr-2" />
                    View Properties
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    // Section 3: Services & Contact
    {
      title: "Our Services",
      subtitle: "Complete Real Estate Solutions",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Complete Real Estate Services</h2>
            <p className="text-xl text-white/80">From consultation to ownership - we handle everything</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Property Consultation",
                description: "Expert guidance on investment opportunities",
                color: "yellow",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Legal Support",
                description: "Complete legal documentation and support",
                color: "orange",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Financing Solutions",
                description: "Flexible payment plans and mortgage assistance",
                color: "red",
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Property Management",
                description: "Full property management and rental services",
                color: "yellow",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Golden Visa",
                description: "UAE residency visa processing assistance",
                color: "orange",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Investment Planning",
                description: "Customized investment strategies and portfolio planning",
                color: "red",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-black/60 border-yellow-500/30 backdrop-blur-md hover:scale-105 transition-transform"
              >
                <CardContent className="p-6 text-center">
                  <div className={`text-${service.color}-400 mb-4 flex justify-center`}>{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-md border border-yellow-500/30"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">NOOD Abu Dhabi Office</h3>
              <p className="text-white/80">Your gateway to UAE real estate success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-white/80 text-sm">Maqam Tower, Al Maryah Island</div>
              </div>
              <div className="text-center">
                <Phone className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-white/80 text-sm">+971 56 7575 075</div>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-white/80 text-sm">admin@noodproperties.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  // London Content Sections
  const londonContent = [
    // Section 1: Welcome & Weather Comparison
    {
      title: "Escape London's Rain",
      subtitle: "Sunshine & Superior Returns Await",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl">🇬🇧</span>
              <Badge className="bg-gradient-to-r from-blue-500 to-slate-600 text-white px-4 py-2 text-lg flex items-center space-x-2">
                <Umbrella className="w-4 h-4" />
                <span>London Office</span>
              </Badge>
              <span className="text-5xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-slate-300 to-blue-600 bg-clip-text text-transparent">
              From London Rain to Abu Dhabi Sunshine
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Why UK investors are choosing Abu Dhabi real estate for superior returns, tax benefits, and year-round
              sunshine. Escape the unpredictable London weather and property market volatility.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-slate-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Cloud className="w-12 h-12 text-slate-400 mr-3" />
                  <Umbrella className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">London Today</h3>
                <div className="text-3xl font-bold text-slate-300 mb-2">8°C</div>
                <p className="text-slate-400">Rainy, Cold & Unpredictable</p>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <div>• 156 rainy days per year</div>
                  <div>• Average temperature: 11°C</div>
                  <div>• Limited sunshine hours</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-yellow-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sun className="w-12 h-12 text-yellow-400 mr-3" />
                  <Building2 className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Abu Dhabi Today</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">28°C</div>
                <p className="text-yellow-300">Sunny, Warm & Consistent</p>
                <div className="mt-4 space-y-2 text-sm text-yellow-200">
                  <div>• 350+ sunny days per year</div>
                  <div>• Average temperature: 27°C</div>
                  <div>• Consistent weather patterns</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-2xl p-8 backdrop-blur-md border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Quality of Life Comparison</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400">28%</div>
                  <div className="text-white/80">UK Capital Gains Tax</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">0%</div>
                  <div className="text-white/80">UAE Capital Gains Tax</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">3-4%</div>
                  <div className="text-white/80">London Rental Yields</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">6-9%</div>
                  <div className="text-white/80">Abu Dhabi Rental Yields</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    // Section 2: Investment Comparison
    {
      title: "UK vs UAE Investment",
      subtitle: "Superior Returns & Tax Benefits",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investment Comparison</h2>
            <p className="text-xl text-white/80">Real data showing why Abu Dhabi outperforms London property market</p>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-x-auto">
            <div className="bg-black/60 border border-slate-500/30 rounded-2xl backdrop-blur-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-500/30 bg-slate-800/50">
                    <th className="text-left p-6 text-white font-bold">Investment Metric</th>
                    <th className="text-center p-6 text-blue-400 font-bold">🇬🇧 London</th>
                    <th className="text-center p-6 text-yellow-400 font-bold">🇦🇪 Abu Dhabi</th>
                    <th className="text-center p-6 text-green-400 font-bold">Advantage</th>
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
                    {
                      metric: "Rental Yields",
                      uk: "3-4%",
                      uae: "6-9%",
                      advantage: "UAE +3-5%",
                    },
                    {
                      metric: "Capital Gains Tax",
                      uk: "28% on property",
                      uae: "0% tax-free",
                      advantage: "UAE saves 28%",
                    },
                    {
                      metric: "Stamp Duty",
                      uk: "Up to 12%",
                      uae: "4% registration",
                      advantage: "UAE saves 8%",
                    },
                    {
                      metric: "Property Management",
                      uk: "8-12% of rental",
                      uae: "5-8% of rental",
                      advantage: "UAE saves 4%",
                    },
                    {
                      metric: "Market Stability",
                      uk: "Volatile post-Brexit",
                      uae: "Government-backed",
                      advantage: "UAE more stable",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-slate-500/20 hover:bg-slate-800/30">
                      <td className="p-6 font-medium text-white">{item.metric}</td>
                      <td className="p-6 text-center text-slate-300">{item.uk}</td>
                      <td className="p-6 text-center text-slate-300">{item.uae}</td>
                      <td className="p-6 text-center font-bold text-green-400">{item.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-red-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  London Challenges
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    High stamp duty (up to 12%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Capital gains tax (28%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Low rental yields (3-4%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Market volatility
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Weather-dependent lifestyle
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Abu Dhabi Advantages
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    No capital gains tax (0%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    High rental yields (6-9%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Low registration fees (4%)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Government-backed stability
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Year-round sunshine
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
    // Section 3: Investment Opportunities
    {
      title: "Investment Opportunities",
      subtitle: "Premium Properties for UK Investors",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Current Investment Opportunities</h2>
            <p className="text-xl text-white/80">Premium Abu Dhabi properties available to UK investors</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Luxury Apartments",
                location: "Al Maryah Island",
                price: "From £450,000",
                roi: "8.2% annually",
                image: "/abu-dhabi-tower.png",
                features: ["Sea views", "Premium amenities", "Capital appreciation"],
                badge: "Popular",
                badgeColor: "blue",
              },
              {
                type: "Commercial Offices",
                location: "Abu Dhabi Global Market",
                price: "From £850,000",
                roi: "9.1% annually",
                image: "/corniche-waterfront-villa.png",
                features: ["Business hub", "Tax benefits", "High demand"],
                badge: "High ROI",
                badgeColor: "green",
              },
              {
                type: "Residential Villas",
                location: "Saadiyat Island",
                price: "From £1,200,000",
                roi: "7.5% annually",
                image: "/saadiyat-cultural-district.png",
                features: ["Beach access", "Cultural district", "Family-friendly"],
                badge: "Premium",
                badgeColor: "yellow",
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="bg-black/60 border-slate-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image src={property.image || "/placeholder.svg"} alt={property.type} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className={`absolute top-4 left-4 bg-${property.badgeColor}-500 text-black`}>
                    {property.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.type}</h3>
                  <p className="text-slate-400 mb-4">{property.location}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Starting Price:</span>
                      <span className="font-bold text-white">{property.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Expected ROI:</span>
                      <span className="font-bold text-green-400">{property.roi}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/consultation"
                    className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-slate-600 text-white font-medium rounded-lg transition-all hover:scale-105"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-slate-600/20 rounded-2xl p-8 backdrop-blur-md border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Make the Switch?</h3>
              <p className="text-white/80 mb-6">
                Join thousands of UK investors who've already made the smart move to UAE real estate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-slate-600 text-white hover:scale-105 transition-transform"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book UK Consultation
                  </Button>
                </Link>
                <Link href="/calculator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Calculate Returns
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  // San Jose Content Sections
  const sanJoseContent = [
    // Section 1: Tech Introduction
    {
      title: "Silicon Valley Bridge",
      subtitle: "Tech Meets Real Estate",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl">🇺🇸</span>
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-lg flex items-center space-x-2">
                <Cpu className="w-4 h-4" />
                <span>Silicon Valley Office</span>
              </Badge>
              <span className="text-5xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Silicon Valley
              </span>
              <span className="text-white"> to </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                UAE Real Estate
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Tech professionals are diversifying beyond volatile stocks with UAE's stable, high-growth real estate
              market. Smart money is moving from Silicon Valley's overpriced market to UAE's emerging opportunities.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Cpu className="w-12 h-12 text-blue-400 mr-3" />
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tech Stocks</h3>
                <div className="text-3xl font-bold text-blue-300 mb-2">12-15%</div>
                <p className="text-blue-200">High volatility & risk</p>
                <div className="mt-4 space-y-2 text-sm text-blue-200">
                  <div>• Market crashes possible</div>
                  <div>• Regulatory uncertainties</div>
                  <div>• No tangible assets</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Building2 className="w-12 h-12 text-green-400 mr-3" />
                  <Shield className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">UAE Real Estate</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">8-12%</div>
                <p className="text-green-300">Stable growth & security</p>
                <div className="mt-4 space-y-2 text-sm text-green-200">
                  <div>• Government-backed stability</div>
                  <div>• Tangible asset ownership</div>
                  <div>• Consistent appreciation</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-md border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Why Tech Professionals Choose UAE</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">0%</div>
                  <div className="text-white/80">Capital Gains Tax</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-white/80">Foreign Ownership</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-white/80">Global Connectivity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">10yr</div>
                  <div className="text-white/80">Golden Visa</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    // Section 2: Diversification Benefits
    {
      title: "Smart Diversification",
      subtitle: "Balance Your Tech Portfolio",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Smart Portfolio Diversification</h2>
            <p className="text-xl text-white/80">
              Why tech professionals are adding UAE real estate to their portfolios
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Portfolio Diversification",
                description: "Balance high-risk tech stocks with stable real estate assets for optimal risk management",
                icon: "📊",
                color: "blue",
              },
              {
                title: "Tax Optimization",
                description: "UAE's 0% capital gains tax maximizes your investment returns compared to US tax rates",
                icon: "💰",
                color: "green",
              },
              {
                title: "Global Mobility",
                description: "Golden visa programs provide international mobility for tech professionals",
                icon: "🌍",
                color: "purple",
              },
              {
                title: "Future-Proof Investment",
                description: "UAE's Vision 2071 aligns with tech innovation and sustainable development",
                icon: "🚀",
                color: "yellow",
              },
              {
                title: "Stable Currency",
                description: "AED pegged to USD provides currency stability for US-based investors",
                icon: "💵",
                color: "green",
              },
              {
                title: "Tech Hub Growth",
                description: "Dubai and Abu Dhabi emerging as Middle East's Silicon Valley",
                icon: "🏙️",
                color: "blue",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`bg-black/60 border-${benefit.color}-500/30 backdrop-blur-md hover:scale-105 transition-transform`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-red-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Tech Stock Risks
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Market volatility (30-50% swings)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Regulatory uncertainties
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    No tangible asset backing
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    High correlation with tech sector
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Bubble risk concerns
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <Building2 className="w-6 h-6 mr-2" />
                  Real Estate Stability
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Tangible asset ownership
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Government-backed stability
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Consistent rental income
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Inflation hedge protection
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Portfolio diversification
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
    // Section 3: Tech-Forward Opportunities
    {
      title: "Tech-Forward Properties",
      subtitle: "Smart Investments for Smart Professionals",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tech-Forward Investment Opportunities</h2>
            <p className="text-xl text-white/80">UAE properties perfect for tech professionals and their lifestyles</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Smart City Apartments",
                location: "Dubai South",
                price: "From $180,000",
                roi: "9.2% annually",
                image: "/yas-island-marina-apartment.png",
                features: ["IoT integration", "Sustainable design", "Tech infrastructure"],
                badge: "Smart Tech",
                badgeColor: "blue",
              },
              {
                type: "Business Bay Offices",
                location: "Dubai Business Bay",
                price: "From $320,000",
                roi: "8.8% annually",
                image: "/al-reem-central-park.png",
                features: ["Tech companies hub", "Modern facilities", "High demand"],
                badge: "Business Hub",
                badgeColor: "purple",
              },
              {
                type: "Marina Penthouses",
                location: "Dubai Marina",
                price: "From $850,000",
                roi: "7.5% annually",
                image: "/yas-marina-residences.png",
                features: ["Luxury amenities", "Waterfront views", "Premium location"],
                badge: "Luxury",
                badgeColor: "yellow",
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="bg-black/60 border-blue-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image src={property.image || "/placeholder.svg"} alt={property.type} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className={`absolute top-4 left-4 bg-${property.badgeColor}-500 text-black`}>
                    {property.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-md border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Diversify Your Portfolio?</h3>
              <p className="text-white/80 mb-6">
                Join Silicon Valley professionals who've already discovered UAE real estate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform"
                  >
                    <Cpu className="w-5 h-5 mr-2" />
                    Tech Professional Consultation
                  </Button>
                </Link>
                <Link href="/calculator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    ROI Calculator
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  // Islamabad Content Sections
  const islamabadContent = [
    // Section 1: Cultural Bridge
    {
      title: "Pakistan Partnership",
      subtitle: "Cultural Bridge to Success",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl">🇵🇰</span>
              <Badge className="bg-gradient-to-r from-green-600 to-white text-black px-4 py-2 text-lg flex items-center space-x-2">
                <Mountain className="w-4 h-4" />
                <span>Islamabad Office</span>
              </Badge>
              <span className="text-5xl">🇦🇪</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
                Pakistan
              </span>
              <span className="text-white"> to </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                UAE Success
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Pakistani investors are building generational wealth through UAE real estate. With cultural familiarity,
              Islamic finance options, and strong community ties, UAE feels like a second home for Pakistani families.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-green-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Mountain className="w-12 h-12 text-green-400 mr-3" />
                  <Building2 className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pakistan Real Estate</h3>
                <div className="text-3xl font-bold text-green-300 mb-2">3-5%</div>
                <p className="text-green-200">Annual growth</p>
                <div className="mt-4 space-y-2 text-sm text-green-200">
                  <div>• Limited international exposure</div>
                  <div>• Currency devaluation risks</div>
                  <div>• Complex legal procedures</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-yellow-500/30 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Building2 className="w-12 h-12 text-yellow-400 mr-3" />
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">UAE Real Estate</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">8-12%</div>
                <p className="text-yellow-300">Annual growth</p>
                <div className="mt-4 space-y-2 text-sm text-yellow-200">
                  <div>• International market exposure</div>
                  <div>• Stable AED currency</div>
                  <div>• Transparent legal system</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-2xl p-8 backdrop-blur-md border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Pakistan-UAE Investment Bridge</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">2M+</div>
                  <div className="text-white/80">Pakistanis in UAE</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">$8B</div>
                  <div className="text-white/80">Annual Trade Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-white/80">Halal Investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">10yr</div>
                  <div className="text-white/80">Golden Visa</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    // Section 2: Cultural Advantages
    {
      title: "Cultural Advantages",
      subtitle: "Why UAE Feels Like Home",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Cultural Advantages for Pakistani Investors
            </h2>
            <p className="text-xl text-white/80">Why UAE feels like a second home for Pakistani families</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Islamic Finance Compliance",
                description: "Sharia-compliant investment options available with Islamic banking support",
                icon: "🕌",
                color: "green",
              },
              {
                title: "Cultural Familiarity",
                description: "Large Pakistani expat community with familiar customs and traditions",
                icon: "🤝",
                color: "yellow",
              },
              {
                title: "Language Advantage",
                description: "Urdu and English widely spoken, making communication seamless",
                icon: "🗣️",
                color: "green",
              },
              {
                title: "Religious Facilities",
                description: "Abundant mosques, halal food, and Islamic lifestyle support",
                icon: "🕌",
                color: "yellow",
              },
              {
                title: "Family Values",
                description: "Family-oriented society with excellent education and healthcare systems",
                icon: "👨‍👩‍👧‍👦",
                color: "green",
              },
              {
                title: "Business Networks",
                description: "Strong Pakistan-UAE business relationships and trade partnerships",
                icon: "🌐",
                color: "yellow",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`bg-black/60 border-${benefit.color}-500/30 backdrop-blur-md hover:scale-105 transition-transform`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-green-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Cultural Comfort
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Islamic banking and finance
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Halal food everywhere
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Prayer facilities in all buildings
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Urdu-speaking community
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Pakistani schools and clinics
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-yellow-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Business Opportunities
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Pakistan-UAE trade corridor
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Import/export opportunities
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Pakistani business networks
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Joint venture possibilities
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Regional business hub access
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
    // Section 3: Investment Opportunities
    {
      title: "Investment Opportunities",
      subtitle: "Perfect for Pakistani Families",
      content: (
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investment Opportunities for Pakistanis</h2>
            <p className="text-xl text-white/80">Properties perfect for Pakistani families and investors</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Family Villas",
                location: "Dubai Hills Estate",
                price: "From PKR 4.5 Crore",
                roi: "8.5% annually",
                image: "/corniche-waterfront-villa.png",
                features: ["Family-friendly", "Pakistani community", "Top schools"],
                badge: "Family Choice",
                badgeColor: "green",
              },
              {
                type: "Halal Investment Apartments",
                location: "Sharjah",
                price: "From PKR 2.8 Crore",
                roi: "9.2% annually",
                image: "/al-reem-central-park.png",
                features: ["Sharia-compliant", "Cultural center", "Affordable luxury"],
                badge: "Halal Certified",
                badgeColor: "yellow",
              },
              {
                type: "Business Offices",
                location: "Dubai International City",
                price: "From PKR 1.5 Crore",
                roi: "8.8% annually",
                image: "/yas-marina-residences.png",
                features: ["Pakistani businesses", "Trade hub", "Growing demand"],
                badge: "Business Hub",
                badgeColor: "green",
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="bg-black/60 border-green-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image src={property.image || "/placeholder.svg"} alt={property.type} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className={`absolute top-4 left-4 bg-${property.badgeColor}-500 text-black`}>
                    {property.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
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
                <Link
                  href="/calculator"
                  className="bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <DollarSign className="w-4 h-4 mr-2 inline" />
                  منافع کیلکولیٹر / ROI Calculator
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  const getSections = () => {
    switch (currentCity) {
      case "abu-dhabi":
        return abuDhabiContent
      case "london":
        return londonContent
      case "san-jose":
        return sanJoseContent
      case "islamabad":
        return islamabadContent
      default:
        return []
    }
  }

  const sections = getSections()
  const currentSectionData = sections[currentSection]

  if (!currentSectionData || currentCity === "home") return null

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCity}-${currentSection}`}
            variants={floatingVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) transparent",
            }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
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
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-8">
              {currentSectionData.content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
